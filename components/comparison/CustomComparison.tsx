'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import {
  assembleCustomComparison,
  customMatrixPath,
  parseCustomQuery,
  validCustomIds,
  type CustomMatrix,
} from '@/lib/comparison/custom';
import type { ResolvedComparison } from '@/types/comparison';

type State =
  | { status: 'choose' }
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; resolved: ResolvedComparison };

/**
 * The body of /compare/custom. The page is prerendered once, so the selection
 * (`?type=&ids=`) is read here and the table is assembled from the type's
 * build-time data file. Same rules as the former server render: an unknown
 * type, or fewer than two published compatible ids among the first four,
 * shows the instructions instead.
 */
export function CustomComparison() {
  const [state, setState] = useState<State>({ status: 'choose' });

  useEffect(() => {
    const { type, ids } = parseCustomQuery(window.location.search);
    if (!type || ids.length < 2) return;
    let active = true;
    setState({ status: 'loading' });
    fetch(customMatrixPath(type))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.statusText))))
      .then((matrix: CustomMatrix) => {
        if (!active) return;
        const valid = validCustomIds(matrix, ids);
        setState(
          valid.length >= 2
            ? {
                status: 'ready',
                resolved: assembleCustomComparison(matrix, valid),
              }
            : { status: 'choose' },
        );
      })
      .catch(() => active && setState({ status: 'error' }));
    return () => {
      active = false;
    };
  }, []);

  if (state.status === 'ready') {
    return (
      <section className="mt-8">
        <ComparisonTable resolved={state.resolved} />
        <p className="mt-3 text-xs text-ink-500">
          Descriptive comparison only — not a ranking or recommendation.
        </p>
      </section>
    );
  }
  if (state.status === 'loading') {
    return (
      <p className="mt-8 text-sm text-ink-500" role="status">
        Loading comparison…
      </p>
    );
  }
  if (state.status === 'error') {
    return (
      <p className="mt-8 text-sm text-ink-700" role="alert">
        The comparison data could not be loaded. Please reload the page.
      </p>
    );
  }
  return (
    <p className="mt-8 text-sm text-ink-700">
      Choose a type and at least two compatible entities (via{' '}
      <code className="text-ink-600">?type=crop&amp;ids=wheat,barley</code>) to
      build a comparison, or browse the{' '}
      <Link
        href="/compare"
        className="text-olive-800 underline underline-offset-2"
      >
        curated comparisons
      </Link>
      .
    </p>
  );
}
