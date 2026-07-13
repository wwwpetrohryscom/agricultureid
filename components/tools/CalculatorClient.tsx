'use client';

import { useMemo, useState, useCallback } from 'react';
import { TOOL_BY_SLUG } from '@/lib/tools/tools';
import type { ToolField } from '@/types/tools';

function initialValues(slug: string): Record<string, string> {
  const tool = TOOL_BY_SLUG.get(slug);
  const values: Record<string, string> = {};
  for (const f of tool?.fields ?? []) values[f.key] = f.default ?? '';
  // Hydrate from the query string for shareable links (client-only).
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    for (const f of tool?.fields ?? []) {
      const q = params.get(f.key);
      if (q != null) values[f.key] = q;
    }
  }
  return values;
}

function fieldError(f: ToolField, raw: string): string | null {
  if (!f.showIf) {
    /* always visible */
  }
  if (f.type === 'select') return null;
  if (raw.trim() === '') return f.required ? 'Required' : null;
  const v = Number(raw);
  if (!Number.isFinite(v)) return 'Enter a number';
  if (f.min != null && v < f.min) return `Must be ≥ ${f.min}`;
  if (f.max != null && v > f.max) return `Must be ≤ ${f.max}`;
  return null;
}

export function CalculatorClient({ slug }: { slug: string }) {
  const tool = TOOL_BY_SLUG.get(slug);
  const [values, setValues] = useState<Record<string, string>>(() =>
    initialValues(slug),
  );
  const [copied, setCopied] = useState(false);

  const visibleFields = useMemo(
    () => (tool?.fields ?? []).filter((f) => !f.showIf || f.showIf(values)),
    [tool, values],
  );

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    for (const f of visibleFields) {
      const msg = fieldError(f, values[f.key] ?? '');
      if (msg) e[f.key] = msg;
    }
    return e;
  }, [visibleFields, values]);

  const result = useMemo(() => {
    if (!tool) return null;
    if (Object.keys(errors).length > 0) return null;
    try {
      return tool.compute(values);
    } catch {
      return {
        outputs: [],
        formulaIds: [],
        error: 'Could not compute with these inputs.',
      };
    }
  }, [tool, values, errors]);

  const set = useCallback((key: string, val: string) => {
    setCopied(false);
    setValues((prev) => ({ ...prev, [key]: val }));
  }, []);

  const reset = useCallback(() => {
    setCopied(false);
    setValues(() => {
      const v: Record<string, string> = {};
      for (const f of tool?.fields ?? []) v[f.key] = f.default ?? '';
      return v;
    });
    if (typeof window !== 'undefined')
      window.history.replaceState(null, '', window.location.pathname);
  }, [tool]);

  const share = useCallback(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams();
    for (const f of visibleFields) {
      const val = values[f.key];
      if (val != null && val.trim() !== '') params.set(f.key, val);
    }
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
    navigator.clipboard?.writeText(url).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  }, [visibleFields, values]);

  if (!tool) return null;

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
        aria-label={`${tool.title} inputs`}
      >
        {visibleFields.map((f) => {
          const id = `f-${f.key}`;
          const errId = `${id}-err`;
          const helpId = `${id}-help`;
          const describedBy =
            [f.help ? helpId : null, errors[f.key] ? errId : null]
              .filter(Boolean)
              .join(' ') || undefined;
          return (
            <div key={f.key}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-ink-800"
              >
                {f.label}
                {f.unit && <span className="text-ink-500"> ({f.unit})</span>}
              </label>
              {f.type === 'select' ? (
                <select
                  id={id}
                  value={values[f.key] ?? ''}
                  onChange={(e) => set(f.key, e.target.value)}
                  className="mt-1 w-full rounded-card border border-ink-200 bg-white px-3 py-2 text-sm focus:border-olive-500 focus:outline-none focus:ring-1 focus:ring-olive-500"
                >
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  type="number"
                  inputMode="decimal"
                  value={values[f.key] ?? ''}
                  min={f.min}
                  max={f.max}
                  step={f.step ?? 'any'}
                  onChange={(e) => set(f.key, e.target.value)}
                  aria-invalid={Boolean(errors[f.key])}
                  aria-describedby={describedBy}
                  className="mt-1 w-full rounded-card border border-ink-200 bg-white px-3 py-2 text-sm tabular-nums focus:border-olive-500 focus:outline-none focus:ring-1 focus:ring-olive-500"
                />
              )}
              {f.help && (
                <p id={helpId} className="mt-1 text-xs text-ink-500">
                  {f.help}
                </p>
              )}
              {errors[f.key] && (
                <p
                  id={errId}
                  className="mt-1 text-xs font-medium text-clay-700"
                >
                  {errors[f.key]}
                </p>
              )}
            </div>
          );
        })}
        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-ink-200 px-4 py-1.5 text-sm font-medium text-ink-700 hover:border-ink-300"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={share}
            className="rounded-full border border-olive-300 px-4 py-1.5 text-sm font-medium text-olive-800 hover:border-olive-400"
          >
            {copied ? 'Link copied' : 'Copy shareable link'}
          </button>
        </div>
      </form>

      <div
        className="rounded-card border border-ink-100 bg-[#FAFAF7] p-5"
        aria-live="polite"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Result
        </h2>
        {result?.error ? (
          <p className="mt-2 text-sm text-clay-700">{result.error}</p>
        ) : result && result.outputs.length > 0 ? (
          <dl className="mt-3 space-y-3">
            {result.outputs.map((o, i) => (
              <div key={i}>
                <dt className="text-sm text-ink-600">{o.label}</dt>
                <dd className="text-2xl font-bold tabular-nums text-forest-950">
                  {o.value}
                  {o.unit && (
                    <span className="ml-1 text-base font-medium text-ink-500">
                      {o.unit}
                    </span>
                  )}
                </dd>
                {o.note && <p className="text-xs text-ink-500">{o.note}</p>}
              </div>
            ))}
            {result.note && (
              <p className="text-xs italic text-ink-500">{result.note}</p>
            )}
          </dl>
        ) : (
          <p className="mt-2 text-sm text-ink-500">
            Enter values to see a result.
          </p>
        )}
      </div>
    </div>
  );
}
