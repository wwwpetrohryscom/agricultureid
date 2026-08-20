/**
 * Query layer over the agricultural-authorities registry.
 *
 * Publication is gated here rather than at render sites, so a caller cannot
 * accidentally surface an unverified, superseded, or evidence-thin body.
 */
import { AUTHORITIES } from '@/data/authorities';
import { isListableAuthority, isPublishableAuthority } from '@/types/authority';
import type {
  AgriculturalAuthorityEntry,
  AuthorityType,
  GovernmentLevel,
  ResponsibilityArea,
} from '@/types/authority';

export { AUTHORITIES };

/** Canonical route for an authority's detail page. */
export function authorityPath(slug: string): string {
  return `/agricultural-authorities/${slug}`;
}

/** The hub route. */
export const AUTHORITIES_HUB_PATH = '/agricultural-authorities';

/**
 * Bodies that get an indexable detail page: accepted, active, evidence-rich,
 * and verified against a domain that is not `uncertain`.
 */
export function publishedAuthorities(): AgriculturalAuthorityEntry[] {
  return AUTHORITIES.filter(isPublishableAuthority).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

/**
 * Bodies that may appear in directory listings — includes verified
 * `directory-record` entries, which are real but have no detail page.
 */
export function listedAuthorities(): AgriculturalAuthorityEntry[] {
  return AUTHORITIES.filter(isListableAuthority).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

const BY_SLUG = new Map(AUTHORITIES.map((a) => [a.slug, a]));

/** Only ever returns a body eligible for a public page. */
export function publishedAuthorityBySlug(
  slug: string,
): AgriculturalAuthorityEntry | undefined {
  const found = BY_SLUG.get(slug);
  return found && isPublishableAuthority(found) ? found : undefined;
}

export function authorityById(
  id: string,
): AgriculturalAuthorityEntry | undefined {
  return AUTHORITIES.find((a) => a.id === id);
}

/** Listed authorities for one ISO-3166 alpha-3 country code. */
export function authoritiesForCountry(
  iso3: string,
): AgriculturalAuthorityEntry[] {
  return listedAuthorities().filter((a) => a.countryCode === iso3);
}

/**
 * Listed authorities for one canonical jurisdiction (ISO 3166-2 id).
 *
 * Resolves against the jurisdiction registry, NOT against RegionProfile, so a
 * state with no researched agronomy still surfaces its authority.
 */
export function authoritiesForJurisdiction(
  jurisdictionId: string,
): AgriculturalAuthorityEntry[] {
  return listedAuthorities().filter((a) => a.jurisdictionId === jurisdictionId);
}

/** All listed subnational authorities for a country, jurisdiction-grouped. */
export function subnationalAuthoritiesByJurisdiction(
  iso3: string,
): Map<string, AgriculturalAuthorityEntry[]> {
  const out = new Map<string, AgriculturalAuthorityEntry[]>();
  for (const a of listedAuthorities()) {
    if (!a.jurisdictionId || a.countryCode !== iso3) continue;
    out.set(a.jurisdictionId, [...(out.get(a.jurisdictionId) ?? []), a]);
  }
  return out;
}

/** Supranational bodies, which belong to no single country. */
export function supranationalAuthorities(): AgriculturalAuthorityEntry[] {
  return listedAuthorities().filter(
    (a) => a.governmentLevel === 'supranational',
  );
}

/** Distinct responsibility areas actually present, for non-empty facets. */
export function presentResponsibilityAreas(): ResponsibilityArea[] {
  const seen = new Set<ResponsibilityArea>();
  for (const a of listedAuthorities()) {
    for (const r of a.responsibilities) seen.add(r.area);
  }
  return [...seen].sort();
}

/** Distinct authority types actually present. */
export function presentAuthorityTypes(): AuthorityType[] {
  return [...new Set(listedAuthorities().map((a) => a.authorityType))].sort();
}

/** Distinct government levels actually present. */
export function presentGovernmentLevels(): GovernmentLevel[] {
  return [...new Set(listedAuthorities().map((a) => a.governmentLevel))].sort();
}

/** Country codes with at least one listed authority. */
export function countriesWithAuthorities(): string[] {
  return [
    ...new Set(
      listedAuthorities()
        .map((a) => a.countryCode)
        .filter((c): c is string => Boolean(c)),
    ),
  ].sort();
}

/** Human label for a controlled-vocabulary token ("plant-health" → "Plant health"). */
export function humanizeToken(token: string): string {
  const spaced = token
    .replace(/-/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
