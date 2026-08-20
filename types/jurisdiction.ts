/**
 * Canonical subnational jurisdiction identity.
 *
 * ## The architectural mistake this corrects
 *
 * Wave 3 required a subnational authority to reference a `RegionProfile`. That
 * conflated two entirely different facts:
 *
 *   1. "Rhode Island exists, is a US state, and is US-RI"   — identity
 *   2. "AgricultureID has enough evidence to publish a rich
 *       agricultural profile for Rhode Island"              — enrichment
 *
 * `RegionProfile` mandates `climateContext`, `agroecologicalZones`,
 * `agriculturalLandContext`, `majorCropSystems`, `majorLivestockSystems`,
 * `irrigationContext`, `dataCoverage` and `limitations` — substantive agronomy.
 * Making identity depend on it meant 46 of 71 target jurisdictions could only be
 * represented by inventing crop and livestock systems for places we had not
 * researched. That is why Wave 3 stopped at 22/71.
 *
 * This type carries identity ONLY. A jurisdiction may exist here with no
 * `RegionProfile` at all, and a `RegionProfile` must never be created merely to
 * satisfy authority linkage.
 *
 * ## The link is derived, never stored
 *
 * `RegionProfile.officialCode` already holds the ISO 3166-2 code, so the
 * relationship is computed by matching it against `id`. There is no boolean, no
 * duplicated pointer, and therefore no second source of truth to drift.
 *
 * ## What must never be added here
 *
 * No climate. No crop or livestock systems. No irrigation. No statistics. No
 * SEO prose. If a field would require agronomic research to populate, it
 * belongs on `RegionProfile`, not here.
 */

/** The kinds of first-order subdivision this registry represents. */
export const JURISDICTION_KINDS = ['state', 'province', 'territory'] as const;
export type JurisdictionKind = (typeof JURISDICTION_KINDS)[number];

export interface CanonicalJurisdiction {
  /**
   * Stable canonical id — the ISO 3166-2 subdivision code (e.g. `US-RI`).
   * Using the published standard rather than an invented key means the id is
   * externally verifiable and maps one-to-one to official identity.
   */
  id: string;
  /** Official jurisdiction name in the country's working language. */
  name: string;
  /** ISO 3166-1 alpha-3 code of the parent country. */
  countryCode: string;
  /** The subdivision code portion after the country prefix (e.g. `RI`). */
  subdivisionCode: string;
  kind: JurisdictionKind;
  /** URL-safe form, aligned with existing region slugs where one exists. */
  slug: string;
  /** Other names the jurisdiction is known by. Never overrides `name`. */
  aliases?: string[];
  /** Names in an official local language, where one differs. */
  localNames?: string[];
}
