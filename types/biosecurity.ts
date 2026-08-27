/**
 * Biosecurity status — the REGULATORY standing of a pest or pathogen in a
 * jurisdiction, kept strictly apart from its biology.
 *
 * ## The four statements this layer refuses to conflate
 *
 *   "X affects wheat"                 — biology
 *   "X occurs in France"              — distribution
 *   "X is regulated in France"        — regulation
 *   "X is a quarantine pest in the EU" — statutory listing
 *
 * None implies any other. A pest can be widespread and unregulated, or absent
 * and heavily regulated — indeed absence is the usual reason for the strictest
 * listing. So regulatory status lives here, never as a `pest.quarantine` flag
 * on the organism, which would have to pick one jurisdiction and be wrong
 * everywhere else.
 *
 * ## Recommendation is not regulation
 *
 * EPPO's A1 and A2 lists are, in EPPO's own words, "pests recommended for
 * regulation as quarantine pests" — recommendations to member countries by an
 * intergovernmental organisation, not statutory status in any one of them.
 * Recording them as `quarantine` would overstate what the source says, so the
 * vocabulary carries `recommended-for-regulation` explicitly and the
 * jurisdiction is the EPPO region rather than a country.
 *
 * ## The listed entry is stored verbatim
 *
 * `officialListEntry` holds the exact wording of the source's entry, because
 * precision is the whole point: "Fusarium oxysporum f.sp. cubense Tropical race
 * 4" and "Fusarium oxysporum" are different regulatory facts, and a page that
 * flattens the first into the second misleads.
 */

export const ORGANISM_TYPES = [
  'pest',
  'pathogen',
  'disease',
  'weed',
  'other',
] as const;
export type OrganismType = (typeof ORGANISM_TYPES)[number];

export const REGULATORY_STATUSES = [
  'quarantine',
  'regulated-non-quarantine',
  'notifiable',
  'surveillance',
  'restricted',
  'official-control',
  /** Listed by an intergovernmental body as recommended for regulation. */
  'recommended-for-regulation',
  'unknown',
] as const;
export type RegulatoryStatus = (typeof REGULATORY_STATUSES)[number];

export interface BiosecurityStatusEntry {
  id: string;
  /** Slug of a published pest or plant-disease in the content registry. */
  organismRef: string;
  organismType: OrganismType;

  countryCode?: string;
  jurisdictionId?: string;
  /** e.g. "EPPO region", "European Union". */
  supranationalJurisdiction?: string;
  jurisdictionName: string;

  regulatoryStatus: RegulatoryStatus;
  /**
   * The name of the official list, e.g. "EPPO A1 List". Named so a reader can
   * tell a recommendation list from a statutory annex.
   */
  officialListName: string;
  /** The source's entry, verbatim. Never normalised to the organism's name. */
  officialListEntry: string;
  /** Version or edition of the list, when the source publishes one. */
  listVersion?: string;

  responsibleAuthorityIds: string[];
  relatedRegistryIds: string[];
  sourceReferences: string[];
  lastVerifiedAt: string;
  limitations: string[];
}

/** Shown wherever regulatory status is displayed. */
export const BIOSECURITY_CAVEAT =
  'Regulatory status is jurisdiction-specific and changes. Confirm the current position with the responsible plant health authority before acting on it.';
