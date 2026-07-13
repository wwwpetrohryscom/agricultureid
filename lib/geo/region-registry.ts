import { regionProfilesData } from '@/data/geo/regions';
import { ZONES, ZONE_BY_SLUG } from '@/data/geo/zones';
import type { AgroecologicalZone, RegionProfile } from '@/types/region';

export { ZONES };

export const REGIONS: RegionProfile[] = regionProfilesData;

const REGION_KEY = (countrySlug: string, slug: string) =>
  `${countrySlug}/${slug}`;
const BY_KEY = new Map(
  REGIONS.map((r) => [REGION_KEY(r.countrySlug, r.slug), r]),
);

export function regionsForCountry(countrySlug: string): RegionProfile[] {
  return REGIONS.filter((r) => r.countrySlug === countrySlug).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

export function getRegion(
  countrySlug: string,
  regionSlug: string,
): RegionProfile | undefined {
  return BY_KEY.get(REGION_KEY(countrySlug, regionSlug));
}

export function allRegions(): RegionProfile[] {
  return [...REGIONS].sort((a, b) =>
    `${a.countrySlug}/${a.slug}`.localeCompare(`${b.countrySlug}/${b.slug}`),
  );
}

export function regionPath(r: RegionProfile): string {
  return `/countries/${r.countrySlug}/regions/${r.slug}`;
}

/** Country slugs that have at least one published region profile. */
export function countriesWithRegions(): string[] {
  return [...new Set(REGIONS.map((r) => r.countrySlug))].sort();
}

/* Agroecological zones */

export function zonesSorted(): AgroecologicalZone[] {
  return [...ZONES].sort((a, b) =>
    a.classification.localeCompare(b.classification),
  );
}

export function getZone(slug: string): AgroecologicalZone | undefined {
  return ZONE_BY_SLUG.get(slug);
}

export function zonePath(z: AgroecologicalZone): string {
  return `/agroecological-zones/${z.slug}`;
}
