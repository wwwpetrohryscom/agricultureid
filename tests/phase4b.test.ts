import { describe, expect, it } from 'vitest';
import {
  COMPARISONS,
  allComparisons,
  comparisonsByType,
  getComparison,
} from '@/lib/comparison/registry';
import { comparisonIssues } from '@/lib/comparison/validate-comparison';
import { resolveComparison } from '@/lib/comparison/resolve';
import { getContent } from '@/lib/content/registry';
import { timeSeries } from '@/lib/geo/snapshots';

describe('phase 4B — comparison registry', () => {
  it('has a curated (not Cartesian) set with unique slugs', () => {
    expect(COMPARISONS.length).toBeGreaterThanOrEqual(40);
    // Not a Cartesian explosion — far fewer than the number of possible pairs.
    expect(COMPARISONS.length).toBeLessThan(120);
    expect(new Set(COMPARISONS.map((c) => c.slug)).size).toBe(
      COMPARISONS.length,
    );
    expect(new Set(COMPARISONS.map((c) => c.seo.title)).size).toBe(
      COMPARISONS.length,
    );
  });

  it('reports no comparison validation errors', () => {
    expect(comparisonIssues().filter((i) => i.level === 'error')).toEqual([]);
  });

  it('every compared entity resolves and types are compatible', () => {
    for (const c of allComparisons()) {
      expect(c.comparedEntityIds.length).toBeGreaterThanOrEqual(2);
      if (c.entityType === 'country') continue;
      for (const id of c.comparedEntityIds)
        expect(
          getContent(c.entityType as never, id),
          `${c.slug}:${id}`,
        ).toBeDefined();
    }
  });
});

describe('phase 4B — resolution from source entities', () => {
  it('resolves entity comparisons with non-empty dimension rows', () => {
    const r = resolveComparison(getComparison('temperate-cereals')!);
    expect(r.columns.map((c) => c.id)).toEqual([
      'wheat',
      'barley',
      'oats',
      'rye',
    ]);
    expect(r.columns.length).toBe(4);
    expect(r.rows.length).toBeGreaterThan(0);
    // No row is entirely empty (empty rows are dropped).
    for (const row of r.rows)
      expect(row.cells.some((c) => c !== '—')).toBe(true);
  });

  it('country comparisons enforce a common year per indicator row', () => {
    const c = getComparison('americas-grain-exporters')!;
    const r = resolveComparison(c);
    expect(r.provenance?.sourceVersion).toBeTruthy();
    for (const row of r.rows) {
      if (row.note) continue; // no-common-year row
      expect(row.year, `${row.key}`).toBeDefined();
      // Every non-dash cell must actually have a value at row.year.
      c.comparedEntityIds.forEach((iso3, i) => {
        if (row.cells[i] === '—') return;
        const hasYear = timeSeries(row.key, iso3).some(
          (s) => s.year === row.year,
        );
        expect(hasYear, `${iso3} ${row.key} ${row.year}`).toBe(true);
      });
    }
  });

  it('does not rank — country rows are indicators, not a computed winner', () => {
    const r = resolveComparison(getComparison('eu-major-producers')!);
    expect(r.rows.every((row) => typeof row.label === 'string')).toBe(true);
    // there is no "winner"/"score"/"rank" field on the resolved shape
    expect((r as unknown as { winner?: unknown }).winner).toBeUndefined();
  });

  it('groups by type', () => {
    expect(comparisonsByType('crop').length).toBeGreaterThan(0);
    expect(comparisonsByType('country').length).toBeGreaterThan(0);
  });
});
