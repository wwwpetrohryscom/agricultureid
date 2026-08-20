/**
 * Lookup layer over the canonical jurisdiction registry.
 *
 * The link to `RegionProfile` is DERIVED here by matching
 * `RegionProfile.officialCode` against a jurisdiction id, never stored. That
 * keeps one source of truth and makes "does this jurisdiction have a rich
 * agricultural profile?" a computed question rather than a flag that can drift.
 */
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';
import { REGIONS } from '@/lib/geo/region-registry';
import type { CanonicalJurisdiction } from '@/types/jurisdiction';
import type { RegionProfile } from '@/types/region';

export { CANONICAL_JURISDICTIONS };

const BY_ID = new Map(CANONICAL_JURISDICTIONS.map((j) => [j.id, j]));
const BY_SLUG = new Map(CANONICAL_JURISDICTIONS.map((j) => [j.slug, j]));
/** RegionProfile keyed by ISO 3166-2 code — the derivation seam. */
const PROFILE_BY_CODE = new Map(REGIONS.map((r) => [r.officialCode, r]));

export function getJurisdiction(id: string): CanonicalJurisdiction | undefined {
  return BY_ID.get(id);
}

export function getJurisdictionBySlug(
  slug: string,
): CanonicalJurisdiction | undefined {
  return BY_SLUG.get(slug);
}

export function jurisdictionsForCountry(iso3: string): CanonicalJurisdiction[] {
  return CANONICAL_JURISDICTIONS.filter((j) => j.countryCode === iso3).sort(
    (a, b) => a.name.localeCompare(b.name),
  );
}

/**
 * The rich agricultural profile for a jurisdiction, when one exists.
 *
 * Returning `undefined` is a normal, expected outcome — most jurisdictions have
 * identity but no researched agronomy, and that is precisely the separation
 * this architecture exists to allow.
 */
export function regionProfileFor(
  jurisdictionId: string,
): RegionProfile | undefined {
  return PROFILE_BY_CODE.get(jurisdictionId);
}

/** True when the jurisdiction carries a researched RegionProfile. */
export function hasRegionProfile(jurisdictionId: string): boolean {
  return PROFILE_BY_CODE.has(jurisdictionId);
}

/** Jurisdiction that a RegionProfile corresponds to, if any. */
export function jurisdictionForRegion(
  region: RegionProfile,
): CanonicalJurisdiction | undefined {
  return BY_ID.get(region.officialCode);
}
