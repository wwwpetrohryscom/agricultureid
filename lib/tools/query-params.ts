import { TOOL_BY_SLUG } from '@/lib/tools/tools';
import type { ToolField } from '@/types/tools';

/**
 * Phase 5E — shareable calculator URLs, safely.
 *
 * ## Why this is not just `params.get(key)`
 *
 * A calculator URL is user-supplied input that arrives from someone else's
 * clipboard. Three things must hold, and none is free:
 *
 * 1. **Unknown parameters are ignored.** Only declared field keys are read, so
 *    `?utm_source=…` or `?<anything>` cannot reach the tool's state.
 * 2. **Invalid values are rejected, not coerced.** `?mass=abc` or `?m0=-5`
 *    falls back to the field default rather than producing NaN, and
 *    `?basis=nonsense` cannot select an option that does not exist — a select
 *    only ever accepts one of its own declared option values. This is what
 *    stops a crafted URL putting arbitrary text into the page: the value is
 *    checked against a closed set or parsed as a number before it is stored.
 * 3. **Units and basis survive the round trip.** They are ordinary fields, so
 *    serialising them is not optional — a shared moisture link that loses its
 *    basis is a link to a different, wrong answer.
 *
 * ## The hydration rule
 *
 * These functions are pure and take the query string as an argument. They are
 * NEVER called during render or from a `useState` initialiser. The server has
 * no query string, so a component that seeds its initial state from
 * `window.location.search` renders defaults on the server and parameters on the
 * client, and React's hydration then disagrees with itself. Parameters are
 * applied in an effect after mount instead — see CalculatorClient.
 */

/** Fields that participate in shareable URLs (all declared fields). */
function fieldsFor(slug: string): ToolField[] {
  return TOOL_BY_SLUG.get(slug)?.fields ?? [];
}

/** The default value a field falls back to. */
function defaultFor(f: ToolField): string {
  return f.default ?? '';
}

/**
 * Is `raw` an acceptable value for `f`? Selects must match a declared option;
 * numbers must be finite and inside any declared range.
 */
export function isValidFieldValue(f: ToolField, raw: string): boolean {
  if (raw === '') return true; // empty = "use the default"
  if (f.type === 'select')
    return (f.options ?? []).some((o) => o.value === raw);
  const v = Number(raw);
  if (!Number.isFinite(v)) return false;
  if (f.min != null && v < f.min) return false;
  if (f.max != null && v > f.max) return false;
  return true;
}

/**
 * Read a tool's values from a query string.
 *
 * Unknown keys are ignored; invalid values fall back to the field default.
 * Always returns a complete value map, so the caller never has to guess.
 */
export function parseToolParams(
  slug: string,
  search: string,
): Record<string, string> {
  const params = new URLSearchParams(search);
  const values: Record<string, string> = {};
  for (const f of fieldsFor(slug)) {
    const raw = params.get(f.key);
    values[f.key] =
      raw != null && isValidFieldValue(f, raw) ? raw : defaultFor(f);
  }
  return values;
}

/** True when the query string carries at least one usable tool parameter. */
export function hasToolParams(slug: string, search: string): boolean {
  const params = new URLSearchParams(search);
  return fieldsFor(slug).some((f) => {
    const raw = params.get(f.key);
    return raw != null && raw !== '' && isValidFieldValue(f, raw);
  });
}

/**
 * Serialise a tool's values to a query string, in declared field order so the
 * same inputs always produce the same URL.
 *
 * `visibleKeys` limits output to the fields actually in play — a hidden
 * conditional field would otherwise leak a stale value into the link.
 */
export function serializeToolParams(
  slug: string,
  values: Record<string, string>,
  visibleKeys?: ReadonlySet<string>,
): string {
  const params = new URLSearchParams();
  for (const f of fieldsFor(slug)) {
    if (visibleKeys && !visibleKeys.has(f.key)) continue;
    const v = values[f.key];
    if (v == null || v.trim() === '') continue;
    if (!isValidFieldValue(f, v)) continue;
    params.set(f.key, v);
  }
  return params.toString();
}
