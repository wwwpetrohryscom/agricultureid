import { getContent, contentPath } from '@/lib/content/registry';
import { getProfileByCode, countryName } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import { getSnapshot, timeSeries } from '@/lib/geo/snapshots';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { dimensionsFor } from '@/lib/comparison/dimensions';
import type { Comparison, ResolvedComparison } from '@/types/comparison';
import type { ContentType } from '@/lib/site';

const DASH = '—';

function resolveEntityComparison(c: Comparison): ResolvedComparison {
  const type = c.entityType as Exclude<ContentType, never>;
  const items = c.comparedEntityIds
    .map((id) => getContent(type as ContentType, id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const columns = items.map((it) => ({
    id: it.slug,
    title: it.title,
    route: contentPath(it.contentType, it.slug),
  }));
  const dims = dimensionsFor(
    c.entityType as 'crop' | 'cultivar' | 'breed' | 'fertilizer' | 'soil',
  );
  const rows = c.dimensions
    .map((key) => {
      const dim = dims.find((d) => d.key === key);
      if (!dim) return null;
      const cells = items.map((it) => dim.resolve(it) ?? DASH);
      // Skip rows where nothing resolved (avoids empty comparison rows).
      if (cells.every((v) => v === DASH)) return null;
      return { key, label: dim.label, unit: dim.unit, cells };
    })
    .filter((r): r is NonNullable<typeof r> => Boolean(r));
  return { comparison: c, columns, rows };
}

function resolveCountryComparison(c: Comparison): ResolvedComparison {
  const columns = c.comparedEntityIds.map((iso3) => ({
    id: iso3,
    title: countryName(iso3),
    route: getProfileByCode(iso3)
      ? countryPath(getProfileByCode(iso3)!.slug)
      : '#',
  }));

  const rows: ResolvedComparison['rows'] = [];
  for (const indicatorId of c.indicators ?? []) {
    const ind = INDICATOR_BY_ID.get(indicatorId);
    if (!ind) continue;
    // Build per-country year→value maps, then find the latest COMMON year so a
    // comparison never mixes incompatible years.
    const seriesByCountry = c.comparedEntityIds.map(
      (iso3) =>
        new Map(timeSeries(indicatorId, iso3).map((r) => [r.year, r.value])),
    );
    const commonYears = [...(seriesByCountry[0]?.keys() ?? [])]
      .filter((y) => seriesByCountry.every((m) => m.has(y)))
      .sort((a, b) => b - a);
    const year = commonYears[0];
    if (year == null) {
      rows.push({
        key: indicatorId,
        label: ind.name,
        unit: ind.unit,
        cells: c.comparedEntityIds.map(() => DASH),
        note: 'No year is available for every compared country — not shown to avoid mixing years.',
      });
      continue;
    }
    const cells = seriesByCountry.map((m) => {
      const v = m.get(year);
      return v == null
        ? DASH
        : v.toLocaleString('en', { maximumFractionDigits: 2 });
    });
    rows.push({
      key: indicatorId,
      label: ind.name + (ind.estimateFlag ? ' (est.)' : ''),
      unit: ind.unit,
      cells,
      year,
    });
  }

  const anySnap = getSnapshot((c.indicators ?? [])[0] ?? '');
  return {
    comparison: c,
    columns,
    rows,
    provenance: anySnap
      ? {
          sourceDataset: anySnap.source,
          sourceVersion: anySnap.datasetVersion,
          retrievedAt: anySnap.retrievedAt,
        }
      : undefined,
  };
}

export function resolveComparison(c: Comparison): ResolvedComparison {
  return c.entityType === 'country'
    ? resolveCountryComparison(c)
    : resolveEntityComparison(c);
}
