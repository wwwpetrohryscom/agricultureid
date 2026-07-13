'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  buildIndex,
  search,
  tokenize,
  type SearchIndex,
} from '@/lib/search/engine';
import type { SearchDoc, SearchFacet, SynonymEntry } from '@/types/search';

const FACET_LABELS: Record<SearchFacet, string> = {
  entityType: 'Type',
  category: 'Category',
  country: 'Country',
  region: 'Region',
  source: 'Source',
  evidenceTier: 'Evidence',
};

const TYPE_LABEL: Record<string, string> = {
  crop: 'Crop',
  soil: 'Soil',
  'plant-disease': 'Disease',
  pest: 'Pest',
  livestock: 'Livestock',
  nutrient: 'Nutrient',
  fertilizer: 'Fertilizer',
  'soil-topic': 'Soil health',
  machinery: 'Machinery',
  climate: 'Climate',
  'farming-system': 'Farming system',
  'irrigation-method': 'Irrigation',
  cultivar: 'Cultivar',
  breed: 'Breed',
  country: 'Country',
  indicator: 'Indicator',
  tool: 'Tool',
  glossary: 'Glossary',
};

function highlight(text: string, terms: string[]) {
  if (terms.length === 0) return text;
  const re = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'ig',
  );
  const parts = text.split(re);
  return parts.map((p, i) =>
    terms.some((t) => t.toLowerCase() === p.toLowerCase()) ? (
      <mark key={i} className="bg-olive-100 text-ink-900">
        {p}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export function SearchApp({ initialQuery = '' }: { initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [facet, setFacet] = useState<Partial<Record<SearchFacet, string>>>({});

  useEffect(() => {
    let active = true;
    fetch('/search-index.json')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: { docs: SearchDoc[]; synonyms: SynonymEntry[] }) => {
        if (active) setIndex(buildIndex(data.docs, data.synonyms));
      })
      .catch(() => active && setLoadError(true));
    return () => {
      active = false;
    };
  }, []);

  // Reflect the query in the URL for shareable/bookmarkable searches.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = q.trim()
      ? `${window.location.pathname}?q=${encodeURIComponent(q.trim())}`
      : window.location.pathname;
    window.history.replaceState(null, '', url);
  }, [q]);

  const response = useMemo(() => {
    if (!index || q.trim() === '') return null;
    return search(index, q, { facets: facet, limit: 40 });
  }, [index, q, facet]);

  const terms = useMemo(() => tokenize(q), [q]);
  const activeFacets = Object.entries(facet).filter(([, v]) => v);

  return (
    <div className="mt-6">
      <label htmlFor="site-search" className="sr-only">
        Search AgricultureID
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        autoFocus
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search crops, breeds, cultivars, countries, tools…"
        className="w-full rounded-card border border-ink-200 bg-white px-4 py-3 text-base focus:border-olive-500 focus:outline-none focus:ring-1 focus:ring-olive-500"
      />

      {loadError && (
        <p className="mt-3 text-sm text-clay-700">
          The search index could not be loaded. Please try again later.
        </p>
      )}

      {response && (
        <p className="mt-3 text-sm text-ink-500" aria-live="polite">
          {response.total} result{response.total === 1 ? '' : 's'}
          {activeFacets.length > 0 && ' (filtered)'}
        </p>
      )}

      {response && response.suggestions.length > 0 && (
        <p className="mt-1 text-sm text-ink-500">
          Related terms: {response.suggestions.join(', ')}
        </p>
      )}

      {(activeFacets.length > 0 || (response && response.total > 0)) && (
        <div className="mt-4 grid gap-6 lg:grid-cols-[16rem_1fr]">
          {/* Facets */}
          <aside className="space-y-4">
            {activeFacets.length > 0 && (
              <button
                type="button"
                onClick={() => setFacet({})}
                className="text-sm font-medium text-olive-800 underline underline-offset-2"
              >
                Clear filters
              </button>
            )}
            {response &&
              (Object.keys(response.facets) as SearchFacet[]).map((f) => {
                const values = response.facets[f]!.slice(0, 8);
                if (values.length === 0) return null;
                return (
                  <div key={f}>
                    <h2 className="text-xs font-semibold uppercase tracking-wide text-olive-700">
                      {FACET_LABELS[f]}
                    </h2>
                    <ul className="mt-1 space-y-0.5">
                      {values.map((v) => (
                        <li key={v.value}>
                          <button
                            type="button"
                            onClick={() =>
                              setFacet((prev) => ({
                                ...prev,
                                [f]: prev[f] === v.value ? undefined : v.value,
                              }))
                            }
                            className={`flex w-full items-baseline justify-between gap-2 text-left text-sm ${
                              facet[f] === v.value
                                ? 'font-semibold text-forest-800'
                                : 'text-ink-700 hover:text-olive-800'
                            }`}
                          >
                            <span>
                              {f === 'entityType'
                                ? (TYPE_LABEL[v.value] ?? v.value)
                                : v.value}
                            </span>
                            <span className="text-xs text-ink-400">
                              {v.count}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </aside>

          {/* Results */}
          <div>
            <ul className="space-y-3">
              {response?.results.map((r) => (
                <li key={r.doc.id}>
                  <Link
                    href={r.doc.route}
                    className="block rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold text-forest-950">
                        {highlight(r.doc.title, terms)}
                      </span>
                      <span className="rounded-full bg-parchment-200 px-2 py-0.5 text-xs text-ink-600">
                        {TYPE_LABEL[r.doc.type] ?? r.doc.type}
                      </span>
                      {r.doc.parent && (
                        <span className="text-xs text-ink-500">
                          · {r.doc.parent}
                        </span>
                      )}
                    </div>
                    {r.doc.scientificName && (
                      <span className="mt-0.5 block text-sm italic text-ink-500">
                        {r.doc.scientificName}
                      </span>
                    )}
                    <span className="mt-1 block text-sm leading-6 text-ink-600">
                      {highlight(r.doc.summary, terms)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {response && response.total === 0 && (
        <div className="mt-6 rounded-card border border-ink-100 bg-[#FAFAF7] p-5">
          <p className="text-sm text-ink-700">
            No results for “{q}”. Try a common name (e.g. “corn” for maize), a
            scientific name, or fewer words.
          </p>
        </div>
      )}

      {!index && !loadError && q.trim() !== '' && (
        <p className="mt-3 text-sm text-ink-500">Loading search…</p>
      )}
    </div>
  );
}
