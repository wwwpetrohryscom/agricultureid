/**
 * Variety registration — the OFFICIAL LISTING of a variety denomination in a
 * jurisdiction's register, kept strictly apart from the cultivar itself.
 *
 * ## The four statements this layer refuses to conflate
 *
 *   "Bintje is a potato cultivar"              — biology / horticulture
 *   "Bintje is grown in Belgium"               — cultivation
 *   "Bintje is on the Belgian national list"   — official listing
 *   "Bintje is protected by a breeder's right" — intellectual property
 *
 * None implies any other. A cultivar can be famous, widely grown and listed
 * nowhere; a variety can hold a plant breeder's right and never appear on a
 * marketing catalogue. So registration lives here, never as a
 * `cultivar.registered` flag, which would have to pick one jurisdiction and one
 * legal instrument and be wrong about both everywhere else.
 *
 * ## A denomination is not a variety
 *
 * This is the trap that makes this layer necessary. Searching the EU Plant
 * Variety Portal for the wheat `Cadenza` returns a granted Community plant
 * variety right for `Cadenza` — a STRAWBERRY (Fragaria x ananassa). The potato
 * `Charlotte` collides with a strawberry Charlotte and a peach Charlotte.
 * Denominations are unique only within a species group, so an exact name match
 * is evidence of nothing on its own.
 *
 * Therefore {@link VarietyRegistrationEntry.cultivarRef} is REQUIRED and may be
 * set only on {@link CULTIVAR_MATCH_BASIS}: the denomination is identical AND
 * the register's own UPOV species matches the cultivar's botanical taxon. A
 * record that cannot clear both tests is not published at all.
 *
 * ## A listing is not a right
 *
 * A national list entry (`national-list`) permits marketing of seed of that
 * variety in that country. A Community plant variety right
 * (`community-plant-variety-right`) is an intellectual property grant covering
 * the whole EU. They are issued by different bodies under different law and
 * expire on different terms, so they are different `instrument` values and are
 * never totalled together as "registrations".
 *
 * ## Status is recorded as published, not as assumed
 *
 * This layer COMPLEMENTS the cultivar-level `registrationStatus` in
 * `types/content.ts` (see docs/registry-status-semantics.md); it does not
 * replace it. That field summarises a cultivar's standing; these records are
 * the individual register entries behind it, one per jurisdiction and
 * instrument. The two vocabularies are deliberately distinct, so this one is
 * named `VarietyRegistrationStatus`.
 *
 * Registers carry `Registered`, `Expired`, `Surrendered` and `Application`.
 * `Application` is a request, not a grant. `Surrendered` and `Expired` mean the
 * variety is no longer listed. Presenting any of them as current registration
 * would be false, so the normalised {@link RegistrationStatus} sits beside the
 * register's own wording in `publishedStatusWording` and the two must agree.
 */

/** The legal instrument a register entry represents. */
export const REGISTRATION_INSTRUMENTS = [
  /** Entry on a national catalogue permitting seed marketing in that country. */
  'national-list',
  /** An intellectual property grant, EU-wide, administered by the CPVO. */
  'community-plant-variety-right',
] as const;
export type RegistrationInstrument = (typeof REGISTRATION_INSTRUMENTS)[number];

/** Normalised standing of an entry, always paired with the published wording. */
export const VARIETY_REGISTRATION_STATUSES = [
  /** Currently on the register. */
  'registered',
  /** Requested but not granted. Not a registration. */
  'application',
  /** Ran its term and lapsed. No longer current. */
  'expired',
  /** Given up by the holder or maintainer. No longer current. */
  'surrendered',
  'unknown',
] as const;
export type VarietyRegistrationStatus =
  (typeof VARIETY_REGISTRATION_STATUSES)[number];

/** Statuses that mean the entry is current. Everything else is historical. */
export const CURRENT_VARIETY_REGISTRATION_STATUSES: readonly VarietyRegistrationStatus[] =
  ['registered'];

/** Which register a listing sits on, as the source classifies it. */
export const REGISTER_SUBTYPES = [
  'agricultural-species',
  'vegetable-species',
  'fruit-species',
  'vine-species',
] as const;
export type RegisterSubType = (typeof REGISTER_SUBTYPES)[number];

/**
 * The ONLY basis on which a registration may be attached to a cultivar.
 *
 * Deliberately a single value rather than a vocabulary of weaker options: a
 * normalised-name match, a "probable" match or a match on denomination alone
 * are all wrong, and giving them names would invite using them.
 */
export const CULTIVAR_MATCH_BASIS = 'denomination-and-species' as const;
export type CultivarMatchBasis = typeof CULTIVAR_MATCH_BASIS;

export interface VarietyRegistrationEntry {
  id: string;

  /** The register's own stable identifier, verbatim, e.g. `NLI/AGR/AT/SOLAN_TUB/1183`. */
  registerUuid: string;
  /** The denomination exactly as the register publishes it. Never normalised. */
  denomination: string;

  instrument: RegistrationInstrument;
  registerName: string;
  registerSubType: RegisterSubType;
  /** The source's own sub-type wording, e.g. "Agricultural species". */
  publishedSubTypeWording: string;

  /** Country or organisation exactly as published, e.g. "Austria", "CPVO". */
  countryOrOrganisation: string;
  /** ISO 3166-1 alpha-3, absent for supranational bodies such as the CPVO. */
  countryCode?: string;
  /** The register's national reference for the entry, when it publishes one. */
  nationalId?: string;

  upovSpeciesCode: string;
  /** Botanical name as the register publishes it, authority and all. */
  upovSpeciesName: string;
  /**
   * The breeder's or maintainer's own reference for the variety, only where the
   * register publishes it. Never a breeder name inferred from anywhere else.
   */
  breedersReference?: string;

  status: VarietyRegistrationStatus;
  /** The register's own status wording, verbatim. */
  publishedStatusWording: string;

  /** Slug of a published cultivar. Required — see the module note. */
  cultivarRef: string;
  cultivarMatchBasis: CultivarMatchBasis;

  /**
   * Registries this entry was read from. The responsible AUTHORITY is derived
   * from these at read time rather than stored, following the jurisdiction
   * layer: the register aggregates national registers, and asserting a
   * maintaining authority per entry would be inference, not evidence.
   */
  relatedRegistryIds: string[];
  sourceReferences: string[];
  lastVerifiedAt: string;
  limitations: string[];
}

/** Shown wherever registration status is displayed. */
export const VARIETY_REGISTRATION_CAVEAT =
  'Registration is jurisdiction-specific, is granted under a particular legal instrument, and changes. A variety absent from a register may still be grown; confirm the current position with the responsible authority before acting on it.';

/**
 * Shown wherever registrations are attached to a cultivar, because the match is
 * only ever as strong as denomination plus species.
 */
export const CULTIVAR_MATCH_CAVEAT =
  'Entries are matched to this cultivar by identical denomination and matching botanical species. Registers do not publish a global variety identifier, so a same-name entry in the same species could in principle be a distinct variety.';
