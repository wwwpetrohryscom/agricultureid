/**
 * Custom (ad-hoc) comparisons — the browser half.
 *
 * /compare/custom used to resolve `?type=&ids=` on the server for every
 * request. The site is now a static export, so the page is a prerendered shell
 * and the comparison is assembled in the browser from a per-type data file
 * written at build time (app/compare/custom/data/[file]/route.ts, built by
 * lib/comparison/custom-matrix.ts).
 *
 * This module is PURE and import-free apart from types, so it ships to the
 * browser without pulling in the content layer. Its output is asserted equal to
 * the server resolver's (lib/comparison/resolve.ts) in
 * tests/custom-comparison.test.ts — the two must not drift.
 */
import type {
  Comparison,
  ComparisonEntityType,
  ResolvedComparison,
} from '@/types/comparison';

export const CUSTOM_COMPARISON_TYPES: readonly ComparisonEntityType[] = [
  'crop',
  'cultivar',
  'breed',
  'fertilizer',
  'soil',
  'country',
];

/** At most this many ids are read from the query; the rest are ignored. */
export const MAX_CUSTOM_IDS = 4;

/** Indicators compared for a custom country comparison. */
export const CUSTOM_COUNTRY_INDICATORS = [
  'AG.YLD.CREL.KG',
  'AG.LND.AGRI.ZS',
  'NV.AGR.TOTL.ZS',
] as const;

const DASH = '—';

/** Build-time data for one non-country entity type. */
export interface EntityMatrix {
  kind: 'entity';
  type: Exclude<ComparisonEntityType, 'country'>;
  /** Every dimension of the type, in render order. */
  dimensions: { key: string; label: string; unit?: string }[];
  /** Published entities by slug; `cells` is aligned with `dimensions`. */
  entities: Record<
    string,
    { title: string; route: string; cells: (string | null)[] }
  >;
}

/** Build-time data for countries. */
export interface CountryMatrix {
  kind: 'country';
  type: 'country';
  indicators: {
    id: string;
    name: string;
    unit?: string;
    estimateFlag: boolean;
  }[];
  /** Countries by ISO3; `series[indicatorId]` is [year, formatted value][]. */
  countries: Record<
    string,
    {
      title: string;
      route: string;
      series: Record<string, [number, string | null][]>;
    }
  >;
  provenance?: ResolvedComparison['provenance'];
}

export type CustomMatrix = EntityMatrix | CountryMatrix;

/** Published path of a type's data file. */
export function customMatrixPath(type: ComparisonEntityType): string {
  return `/compare/custom/data/${type}.json`;
}

/** Parse `?type=&ids=` exactly as the server page did. */
export function parseCustomQuery(search: string): {
  type?: ComparisonEntityType;
  ids: string[];
} {
  const params = new URLSearchParams(search);
  const rawType = params.get('type') ?? undefined;
  const type = CUSTOM_COMPARISON_TYPES.includes(rawType as ComparisonEntityType)
    ? (rawType as ComparisonEntityType)
    : undefined;
  const ids = (params.get('ids') ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, MAX_CUSTOM_IDS);
  return { type, ids };
}

/** The Comparison record the page renders for a custom selection. */
export function customComparisonRecord(
  entityType: ComparisonEntityType,
  ids: string[],
  dimensionKeys: string[],
): Comparison {
  return {
    comparisonId: 'custom',
    slug: 'custom',
    entityType,
    title: 'Custom comparison',
    comparedEntityIds: ids,
    purpose: 'An ad-hoc comparison you selected.',
    dimensions: entityType === 'country' ? [] : dimensionKeys,
    indicators:
      entityType === 'country' ? [...CUSTOM_COUNTRY_INDICATORS] : undefined,
    methodology:
      'Fields are resolved from the source entities; country indicators use a common year across the selected countries.',
    limitations: ['Ad-hoc comparison; descriptive only, not a ranking.'],
    sourceReferences: [],
    reviewedAt: '2026-07-13',
    updatedAt: '2026-07-13',
    editorialStatus: 'draft',
    seo: { title: 'Custom comparison', description: '' },
  };
}

/** Ids that resolve to published, compatible entities, in query order. */
export function validCustomIds(matrix: CustomMatrix, ids: string[]): string[] {
  const known = matrix.kind === 'country' ? matrix.countries : matrix.entities;
  return ids.filter((id) => Object.prototype.hasOwnProperty.call(known, id));
}

/** Look up an id that validCustomIds() has already accepted. */
function pick<T>(table: Record<string, T>, id: string): T {
  const row = table[id];
  if (row === undefined) throw new Error(`custom comparison: unknown id ${id}`);
  return row;
}

function assembleEntity(m: EntityMatrix, ids: string[]): ResolvedComparison {
  const comparison = customComparisonRecord(
    m.type,
    ids,
    m.dimensions.map((d) => d.key),
  );
  const items = ids.map((id) => ({ id, ...pick(m.entities, id) }));
  const columns = items.map((it) => ({
    id: it.id,
    title: it.title,
    route: it.route,
  }));
  const rows: ResolvedComparison['rows'] = [];
  m.dimensions.forEach((dim, d) => {
    const cells = items.map((it) => it.cells[d] ?? DASH);
    if (cells.every((v) => v === DASH)) return;
    rows.push({ key: dim.key, label: dim.label, unit: dim.unit, cells });
  });
  return { comparison, columns, rows };
}

function assembleCountry(m: CountryMatrix, ids: string[]): ResolvedComparison {
  const comparison = customComparisonRecord('country', ids, []);
  const countries = ids.map((iso3) => pick(m.countries, iso3));
  const columns = ids.map((iso3, i) => ({
    id: iso3,
    title: countries[i]!.title,
    route: countries[i]!.route,
  }));
  const rows: ResolvedComparison['rows'] = [];
  for (const ind of m.indicators) {
    const seriesByCountry = countries.map(
      (c) => new Map(c.series[ind.id] ?? []),
    );
    const commonYears = [...(seriesByCountry[0]?.keys() ?? [])]
      .filter((y) => seriesByCountry.every((s) => s.has(y)))
      .sort((a, b) => b - a);
    const year = commonYears[0];
    if (year == null) {
      rows.push({
        key: ind.id,
        label: ind.name,
        unit: ind.unit,
        cells: ids.map(() => DASH),
        note: 'No year is available for every compared country — not shown to avoid mixing years.',
      });
      continue;
    }
    rows.push({
      key: ind.id,
      label: ind.name + (ind.estimateFlag ? ' (est.)' : ''),
      unit: ind.unit,
      cells: seriesByCountry.map((s) => s.get(year) ?? DASH),
      year,
    });
  }
  return { comparison, columns, rows, provenance: m.provenance };
}

/**
 * Assemble the comparison for already-validated ids (see validCustomIds).
 * Mirrors resolveComparison() for the custom record.
 */
export function assembleCustomComparison(
  matrix: CustomMatrix,
  validIds: string[],
): ResolvedComparison {
  return matrix.kind === 'country'
    ? assembleCountry(matrix, validIds)
    : assembleEntity(matrix, validIds);
}
