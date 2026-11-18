/**
 * Custom comparisons — the build-time half.
 *
 * Precomputes, per comparable type, every value the custom comparison page can
 * show, using the SAME resolvers as curated comparisons (DIMENSIONS, the
 * content registry and the World Bank snapshots). The browser then only picks
 * columns and drops empty rows (lib/comparison/custom.ts).
 *
 * Server-only: imports the content layer.
 */
import { contentPath, getContentByType } from '@/lib/content/registry';
import { countryName, getProfileByCode } from '@/lib/geo/registry';
import { countryPath } from '@/lib/geo/paths';
import { COUNTRY_META, getSnapshot, timeSeries } from '@/lib/geo/snapshots';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { DIMENSIONS } from '@/lib/comparison/dimensions';
import {
  CUSTOM_COUNTRY_INDICATORS,
  type CountryMatrix,
  type CustomMatrix,
  type EntityMatrix,
} from '@/lib/comparison/custom';
import type { ComparisonEntityType } from '@/types/comparison';
import type { ContentType } from '@/lib/site';

function entityMatrix(type: EntityMatrix['type']): EntityMatrix {
  const dims = DIMENSIONS[type];
  const entities: EntityMatrix['entities'] = {};
  for (const item of getContentByType(type as ContentType)) {
    entities[item.slug] = {
      title: item.title,
      route: contentPath(item.contentType, item.slug),
      cells: dims.map((d) => d.resolve(item)),
    };
  }
  return {
    kind: 'entity',
    type,
    dimensions: dims.map((d) =>
      d.unit === undefined
        ? { key: d.key, label: d.label }
        : { key: d.key, label: d.label, unit: d.unit },
    ),
    entities,
  };
}

function countryMatrix(): CountryMatrix {
  const indicators = CUSTOM_COUNTRY_INDICATORS.flatMap((id) => {
    const ind = INDICATOR_BY_ID.get(id);
    return ind
      ? [
          {
            id,
            name: ind.name,
            ...(ind.unit === undefined ? {} : { unit: ind.unit }),
            estimateFlag: Boolean(ind.estimateFlag),
          },
        ]
      : [];
  });
  const countries: CountryMatrix['countries'] = {};
  for (const meta of COUNTRY_META) {
    const iso3 = meta.iso3;
    const profile = getProfileByCode(iso3);
    const series: CountryMatrix['countries'][string]['series'] = {};
    for (const ind of indicators) {
      series[ind.id] = timeSeries(ind.id, iso3).map((r) => [
        r.year,
        r.value == null
          ? null
          : r.value.toLocaleString('en', { maximumFractionDigits: 2 }),
      ]);
    }
    countries[iso3] = {
      title: countryName(iso3),
      route: profile ? countryPath(profile.slug) : '#',
      series,
    };
  }
  const snap = getSnapshot(CUSTOM_COUNTRY_INDICATORS[0]);
  return {
    kind: 'country',
    type: 'country',
    indicators,
    countries,
    provenance: snap
      ? {
          sourceDataset: snap.source,
          sourceVersion: snap.datasetVersion,
          retrievedAt: snap.retrievedAt,
        }
      : undefined,
  };
}

export function buildCustomMatrix(type: ComparisonEntityType): CustomMatrix {
  return type === 'country' ? countryMatrix() : entityMatrix(type);
}
