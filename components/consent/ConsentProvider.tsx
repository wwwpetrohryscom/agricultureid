'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { UNDECIDED_STATE } from '@/lib/consent/config';
import { readConsent, writeConsent } from '@/lib/consent/storage';
import { reloadPage } from '@/lib/consent/reload';
import type { ConsentState } from '@/lib/consent/types';
import { ConsentContext, type ConsentContextValue } from './context';
import { ConsentBanner } from './ConsentBanner';
import { ConsentPreferences } from './ConsentPreferences';
import { Analytics } from '@/components/analytics/Analytics';

/**
 * The single source of consent truth for the app.
 *
 * SSR and the first client paint both start UNDECIDED with `hydrated = false`,
 * so nothing consent-dependent (banner, tracker) renders on the server — no
 * hydration mismatch, and no analytics in the initial HTML. After mount we read
 * the stored decision once and settle the real state.
 *
 * Analytics injection lives in <Analytics/> (keyed on the analytics flag).
 * Withdrawal from an *active* tracker additionally reloads the page, because
 * removing the script element cannot undo whatever a running IIFE already
 * started — a reload is the only reliable teardown without a verified vendor API.
 */
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ConsentState>(UNDECIDED_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  // Latest state for use inside callbacks without stale closures.
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    setState(readConsent(Date.now()));
    setHydrated(true);
  }, []);

  const applyChoice = useCallback((nextAnalytics: boolean) => {
    const prevAnalytics = stateRef.current.analytics;
    const now = Date.now();
    // Best-effort persist; a denied write simply means we ask again next visit
    // (fail closed on the next read), never that analytics turns on silently.
    writeConsent(nextAnalytics, now);
    setState({
      status: 'decided',
      necessary: true,
      analytics: nextAnalytics,
      decidedAt: new Date(now).toISOString(),
    });
    setPreferencesOpen(false);
    // Withdrawal from an already-running tracker → reload for a clean teardown.
    if (prevAnalytics && !nextAnalytics) reloadPage();
  }, []);

  const acceptAll = useCallback(() => applyChoice(true), [applyChoice]);
  const rejectAll = useCallback(() => applyChoice(false), [applyChoice]);
  const savePreferences = useCallback(
    (analytics: boolean) => applyChoice(analytics),
    [applyChoice],
  );
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      state,
      hydrated,
      showBanner: hydrated && state.status === 'undecided',
      preferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      state,
      hydrated,
      preferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    ],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentBanner />
      <ConsentPreferences />
      <Analytics />
    </ConsentContext.Provider>
  );
}
