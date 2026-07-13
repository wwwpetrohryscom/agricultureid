import { countryProfiles } from '@/data/geo/profiles';
import { REGIONS } from '@/data/geo/wb-regions';
import { INDICATORS, INDICATOR_BY_SLUG } from '@/data/geo/indicators';
import { countryMeta } from '@/lib/geo/snapshots';
import type {
  AgriculturalIndicator,
  CountryAgricultureProfile,
  RegionAgricultureProfile,
} from '@/types/geo';

export { INDICATORS, INDICATOR_BY_SLUG };

export const COUNTRY_PROFILES: CountryAgricultureProfile[] = countryProfiles;

const PROFILE_BY_SLUG = new Map(countryProfiles.map((p) => [p.slug, p]));
const PROFILE_BY_CODE = new Map(countryProfiles.map((p) => [p.countryCode, p]));

export function profilesSorted(): CountryAgricultureProfile[] {
  return [...countryProfiles].sort((a, b) => a.name.localeCompare(b.name));
}

export function getProfile(
  slug: string,
): CountryAgricultureProfile | undefined {
  return PROFILE_BY_SLUG.get(slug);
}

export function getProfileByCode(
  iso3: string,
): CountryAgricultureProfile | undefined {
  return PROFILE_BY_CODE.get(iso3);
}

export function countryPath(slug: string): string {
  return `/countries/${slug}`;
}

/** Region profiles, with member country codes filtered to published profiles. */
export function regionProfiles(): RegionAgricultureProfile[] {
  return REGIONS.map((r) => ({
    ...r,
    countryCodes: countryProfiles
      .filter((p) => p.region === r.name)
      .map((p) => p.countryCode),
  })).filter((r) => r.countryCodes.length > 0);
}

export function getRegion(slug: string): RegionAgricultureProfile | undefined {
  return regionProfiles().find((r) => r.slug === slug);
}

export function indicatorBySlug(
  slug: string,
): AgriculturalIndicator | undefined {
  return INDICATOR_BY_SLUG.get(slug);
}

/** Display name for a country code, preferring the World Bank metadata name. */
export function countryName(iso3: string): string {
  return countryMeta(iso3)?.name ?? getProfileByCode(iso3)?.name ?? iso3;
}
