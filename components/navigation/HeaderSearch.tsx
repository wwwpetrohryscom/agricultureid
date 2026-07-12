'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

export interface SearchItem {
  title: string;
  href: string;
  type: string;
}

interface HeaderSearchProps {
  items: SearchItem[];
}

export function HeaderSearch({ items }: HeaderSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items.slice(0, 6);
    return items
      .filter((item) =>
        `${item.title} ${item.type}`.toLowerCase().includes(normalized),
      )
      .slice(0, 8);
  }, [items, query]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-search-panel"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 transition-colors hover:bg-[#FAFAF7] hover:text-forest-800"
      >
        <span className="sr-only">Search AgricultureID</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="m20 20-4.2-4.2m1.7-5.1a6.8 6.8 0 1 1-13.5 0 6.8 6.8 0 0 1 13.5 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id="site-search-panel"
          className="fixed left-4 right-4 top-16 z-50 rounded-md border border-ink-100 bg-white p-3 shadow-card sm:absolute sm:left-auto sm:right-0 sm:top-12 sm:w-[min(22rem,calc(100vw-2rem))]"
        >
          <label htmlFor="site-search-input" className="sr-only">
            Search routes and reference entries
          </label>
          <input
            ref={inputRef}
            id="site-search-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search crops, soils, sources..."
            className="w-full rounded-md border border-ink-200 px-3 py-2 text-sm text-ink-900 outline-none placeholder:text-ink-400 focus:border-forest-500 focus:ring-2 focus:ring-forest-100"
          />
          <ul className="mt-3 max-h-80 overflow-y-auto">
            {results.map((item) => (
              <li key={`${item.type}:${item.href}`}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setQuery('');
                  }}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-[#FAFAF7]"
                >
                  <span className="block font-semibold text-ink-900">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs uppercase tracking-wide text-ink-500">
                    {item.type}
                  </span>
                </Link>
              </li>
            ))}
            {results.length === 0 && (
              <li className="px-3 py-2 text-sm text-ink-500">
                No matching published route.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
