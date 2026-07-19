import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
  act,
} from '@testing-library/react';

// The withdrawal reload is mocked so we can observe it without a real navigation.
vi.mock('@/lib/consent/reload', () => ({ reloadPage: vi.fn() }));
import { reloadPage } from '@/lib/consent/reload';

import { ConsentProvider } from '@/components/consent/ConsentProvider';
import { PrivacySettingsButton } from '@/components/consent/PrivacySettingsButton';
import { WEBMASTERID_SCRIPT_ID } from '@/lib/analytics/webmasterid';
import { CONSENT_STORAGE_KEY, CONSENT_VERSION } from '@/lib/consent/config';

/**
 * jsdom (under vitest) ships a non-functional localStorage stub, so we install a
 * real in-memory Storage. storage.ts reads `window.localStorage` at call time, so
 * a fresh instance per test gives full isolation.
 */
class MemoryStorage implements Storage {
  private m = new Map<string, string>();
  get length() {
    return this.m.size;
  }
  clear() {
    this.m.clear();
  }
  getItem(k: string) {
    return this.m.has(k) ? (this.m.get(k) as string) : null;
  }
  key(i: number) {
    return [...this.m.keys()][i] ?? null;
  }
  removeItem(k: string) {
    this.m.delete(k);
  }
  setItem(k: string, v: string) {
    this.m.set(k, String(v));
  }
}

function installStorage() {
  const store = new MemoryStorage();
  Object.defineProperty(window, 'localStorage', {
    value: store,
    writable: true,
    configurable: true,
  });
}

const tracker = () => document.getElementById(WEBMASTERID_SCRIPT_ID);
const trackerCount = () =>
  document.querySelectorAll(`#${WEBMASTERID_SCRIPT_ID}`).length;
const stored = () => {
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
};

function renderApp() {
  return render(
    <ConsentProvider>
      <main>content</main>
      <footer>
        <PrivacySettingsButton />
      </footer>
    </ConsentProvider>,
  );
}

beforeEach(() => {
  installStorage();
  tracker()?.remove();
  vi.mocked(reloadPage).mockClear();
});

afterEach(() => {
  cleanup();
  tracker()?.remove();
});

describe('first visit (no stored choice)', () => {
  it('shows the banner and loads no tracker', async () => {
    renderApp();
    expect(await screen.findByText('Privacy choices')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Accept analytics' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Reject analytics' }),
    ).toBeInTheDocument();
    expect(tracker()).toBeNull();
    expect(stored()).toBeNull();
  });
});

describe('reject', () => {
  it('dismisses the banner, keeps the tracker absent, records analytics=false', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Reject analytics' }),
    );
    await waitFor(() =>
      expect(screen.queryByText('Privacy choices')).not.toBeInTheDocument(),
    );
    expect(tracker()).toBeNull();
    expect(stored()).toMatchObject({
      version: CONSENT_VERSION,
      necessary: true,
      analytics: false,
    });
    expect(reloadPage).not.toHaveBeenCalled();
  });
});

describe('accept', () => {
  it('dismisses the banner and injects exactly one tracker', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Accept analytics' }),
    );
    await waitFor(() => expect(tracker()).not.toBeNull());
    expect(trackerCount()).toBe(1);
    expect(stored()).toMatchObject({ necessary: true, analytics: true });
  });

  it('never duplicates the tracker across re-renders', async () => {
    const { rerender } = renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Accept analytics' }),
    );
    await waitFor(() => expect(tracker()).not.toBeNull());
    rerender(
      <ConsentProvider>
        <main>content</main>
        <footer>
          <PrivacySettingsButton />
        </footer>
      </ConsentProvider>,
    );
    expect(trackerCount()).toBe(1);
  });
});

describe('returning visitor with a stored opt-in', () => {
  it('loads the tracker and shows no banner', async () => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        necessary: true,
        analytics: true,
        decidedAt: new Date().toISOString(),
      }),
    );
    renderApp();
    await waitFor(() => expect(tracker()).not.toBeNull());
    expect(screen.queryByText('Privacy choices')).not.toBeInTheDocument();
    expect(trackerCount()).toBe(1);
  });

  it('a stored opt-out shows no banner and no tracker', async () => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        necessary: true,
        analytics: false,
        decidedAt: new Date().toISOString(),
      }),
    );
    renderApp();
    // Let mount effects settle.
    await act(async () => {});
    expect(screen.queryByText('Privacy choices')).not.toBeInTheDocument();
    expect(tracker()).toBeNull();
  });
});

describe('preferences dialog', () => {
  it('opens from "Manage preferences" with analytics OFF by default', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Manage preferences' }),
    );
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    const analytics = screen.getByLabelText('Analytics') as HTMLInputElement;
    expect(analytics.checked).toBe(false);
    // Necessary is present and cannot be turned off.
    const necessary = screen.getByLabelText(
      'Necessary — always active',
    ) as HTMLInputElement;
    expect(necessary.checked).toBe(true);
    expect(necessary.disabled).toBe(true);
  });

  it('moves focus into the dialog on open', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Manage preferences' }),
    );
    const dialog = await screen.findByRole('dialog');
    await waitFor(() =>
      expect(dialog.contains(document.activeElement)).toBe(true),
    );
  });

  it('Save with analytics off keeps the tracker absent', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Manage preferences' }),
    );
    await screen.findByRole('dialog');
    fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    );
    expect(tracker()).toBeNull();
    expect(stored()).toMatchObject({ analytics: false });
  });

  it('Save with analytics on loads the tracker', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Manage preferences' }),
    );
    await screen.findByRole('dialog');
    fireEvent.click(screen.getByLabelText('Analytics'));
    fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));
    await waitFor(() => expect(tracker()).not.toBeNull());
    expect(trackerCount()).toBe(1);
    expect(stored()).toMatchObject({ analytics: true });
  });

  it('Escape cancels the dialog without recording a choice', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Manage preferences' }),
    );
    const dialog = await screen.findByRole('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape' });
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    );
    // Cancel is not a decision: still undecided, banner returns.
    expect(stored()).toBeNull();
    expect(screen.getByText('Privacy choices')).toBeInTheDocument();
  });
});

describe('footer "Privacy settings"', () => {
  it('reopens the preferences dialog after a decision', async () => {
    renderApp();
    fireEvent.click(
      await screen.findByRole('button', { name: 'Reject analytics' }),
    );
    await waitFor(() =>
      expect(screen.queryByText('Privacy choices')).not.toBeInTheDocument(),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Privacy settings' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });
});

describe('withdrawal', () => {
  it('removes the tracker, records analytics=false, and reloads', async () => {
    renderApp();
    // Accept first.
    fireEvent.click(
      await screen.findByRole('button', { name: 'Accept analytics' }),
    );
    await waitFor(() => expect(tracker()).not.toBeNull());

    // Reopen settings, turn analytics off, save.
    fireEvent.click(screen.getByRole('button', { name: 'Privacy settings' }));
    await screen.findByRole('dialog');
    const toggle = screen.getByLabelText('Analytics') as HTMLInputElement;
    expect(toggle.checked).toBe(true); // reflects the accepted state
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));

    await waitFor(() => expect(tracker()).toBeNull());
    expect(stored()).toMatchObject({ analytics: false });
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
