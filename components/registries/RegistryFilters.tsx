'use client';

import { useEffect, useId, useState } from 'react';

/**
 * Progressive-enhancement filtering for the registry hub.
 *
 * The full directory is server-rendered and every authority link exists in the
 * HTML before this component runs. Filtering works by toggling `hidden` on rows
 * that already exist, so with JavaScript disabled the page is a complete,
 * crawlable directory and nothing is lost — only the convenience of narrowing.
 *
 * Deliberately does NOT touch the URL: query-parameter state would create
 * thousands of crawlable filter permutations and canonical variants. The
 * canonical URL stays the hub, always.
 *
 * No analytics, no storage, no network. Filters work before any consent
 * decision because they observe nothing.
 */
type Facet = {
  key: string;
  label: string;
  values: { value: string; count: number }[];
};

export function RegistryFilters({ facets }: { facets: Facet[] }) {
  const [active, setActive] = useState<Record<string, string>>({});
  const [visible, setVisible] = useState<number | null>(null);
  const id = useId();

  useEffect(() => {
    const rows = Array.from(
      document.querySelectorAll<HTMLElement>('[data-registry-row]'),
    );
    let shown = 0;
    for (const row of rows) {
      const match = Object.entries(active).every(([key, value]) => {
        if (!value) return true;
        const attr = row.dataset[key] ?? '';
        return attr.split('|').includes(value);
      });
      row.hidden = !match;
      if (match) shown++;
    }
    // Group headings whose rows are all hidden should disappear too, so the
    // filtered view never shows an empty jurisdiction heading.
    for (const group of Array.from(
      document.querySelectorAll<HTMLElement>('[data-registry-group]'),
    )) {
      const any = Array.from(
        group.querySelectorAll<HTMLElement>('[data-registry-row]'),
      ).some((r) => !r.hidden);
      group.hidden = !any;
    }
    setVisible(shown);
  }, [active]);

  const anyActive = Object.values(active).some(Boolean);

  return (
    <div className="mt-6 rounded-lg border border-ink-100 bg-[#FAFAF7] p-4">
      <div className="flex flex-wrap items-end gap-4">
        {facets.map((f) => (
          <div key={f.key}>
            <label
              htmlFor={`${id}-${f.key}`}
              className="block text-xs font-semibold uppercase tracking-wide text-ink-500"
            >
              {f.label}
            </label>
            <select
              id={`${id}-${f.key}`}
              value={active[f.key] ?? ''}
              onChange={(e) =>
                setActive((prev) => ({ ...prev, [f.key]: e.target.value }))
              }
              className="mt-1 rounded-md border border-ink-200 bg-white px-2 py-1.5 text-sm text-ink-800 focus-visible:ring-2 focus-visible:ring-forest-700"
            >
              <option value="">All</option>
              {/* Only values that actually occur are rendered, so a filter can
                  never offer an option that yields nothing. */}
              {f.values.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.value} ({v.count})
                </option>
              ))}
            </select>
          </div>
        ))}

        {anyActive && (
          <button
            type="button"
            onClick={() => setActive({})}
            className="rounded-md border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 hover:bg-ink-50"
          >
            Clear filters
          </button>
        )}
      </div>

      <p aria-live="polite" className="mt-3 text-sm text-ink-600">
        {visible === null
          ? null
          : anyActive
            ? `${visible} matching ${visible === 1 ? 'system' : 'systems'}`
            : `${visible} systems`}
      </p>
    </div>
  );
}
