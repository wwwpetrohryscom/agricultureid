/**
 * Variety registration — the OFFICIAL LISTING or GRANT recorded for a variety
 * denomination in a jurisdiction, kept strictly apart from the cultivar itself.
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
 * This is the trap that makes this layer necessary, and every register added
 * has confirmed it. Searching the EU Plant Variety Portal for the wheat
 * `Cadenza` returns a granted Community plant variety right for `Cadenza` — a
 * STRAWBERRY. The United Kingdom's own plant breeders' rights register returns
 * the same collision independently: `Cadenza`, Fragaria x ananassa. In the
 * United States register the apple `McIntosh` is a common wheat, the grape
 * `Merlot` is a bean and a potato, and the tomato `Roma` is a garden bean.
 *
 * Therefore {@link VarietyRegistrationEntry.cultivarRef} is REQUIRED and may be
 * set only on {@link CULTIVAR_MATCH_BASIS}: a name the register itself
 * publishes for the entry is identical to the cultivar's title AND the
 * register's own species matches the cultivar's botanical taxon. A record that
 * cannot clear both tests is not published at all.
 *
 * ## The four kinds of instrument, and the two this layer excludes
 *
 * "Registered" means different things under different law, so the instrument is
 * always specific and its KIND is always derivable ({@link INSTRUMENT_KIND}).
 *
 *   variety-registration            — permission to market the variety, or its
 *                                     propagating material, in a territory:
 *                                     a national list, a vine catalogue, a
 *                                     registration under a seeds act.
 *   plant-variety-protection-right  — an intellectual property grant over the
 *                                     variety: a plant breeder's right, a
 *                                     Community plant variety right, a United
 *                                     States certificate of plant variety
 *                                     protection.
 *
 * Two further things are commonly confused with these and are deliberately NOT
 * in this layer:
 *
 *   A CULTIVAR LISTING — a recommended list, a descriptive catalogue, a
 *   reference collection — carries no legal effect at all. It says a variety is
 *   known or advised, not that it may be marketed or that anyone owns it.
 *
 *   SEED CERTIFICATION does not attach to a variety. It certifies a LOT of seed
 *   as meeting a class, and the same variety yields certified and uncertified
 *   lots in the same season. It could never be an instrument here, because the
 *   thing it applies to is not the variety.
 *
 * ## Status is recorded as published, not as assumed
 *
 * The normalised {@link VarietyRegistrationStatus} always sits beside the
 * register's own wording in `publishedStatusWording`, and a gate re-derives one
 * from the other through the register's pinned contract. Where normalisation is
 * lossy — the United States distinguishes an application denied from one ruled
 * ineligible, and both normalise to `rejected` — the published wording is the
 * authoritative one and is always displayed.
 */

/**
 * The specific legal instrument an entry represents. Specific, never generic:
 * a national list entry and a plant breeder's right expire on different terms
 * under different law and must never be totalled together.
 */
export const REGISTRATION_INSTRUMENTS = [
  /** Entry on a national catalogue permitting seed marketing in that country. */
  'national-list',
  /** An intellectual property grant, EU-wide, administered by the CPVO. */
  'community-plant-variety-right',
  /** A national intellectual property grant over a variety. */
  'plant-breeders-right',
  /** The United States equivalent, issued under the Plant Variety Protection Act. */
  'plant-variety-protection-certificate',
  /** Registration of a variety under a national seeds act, as a condition of sale. */
  'variety-registration',
] as const;
export type RegistrationInstrument = (typeof REGISTRATION_INSTRUMENTS)[number];

/** What an instrument fundamentally is. See the module note. */
export const INSTRUMENT_KINDS = [
  'variety-registration',
  'plant-variety-protection-right',
] as const;
export type InstrumentKind = (typeof INSTRUMENT_KINDS)[number];

/**
 * Every instrument's kind, exhaustively. Derived at read time and never stored,
 * so an entry cannot declare a kind that contradicts its own instrument.
 */
export const INSTRUMENT_KIND: Record<RegistrationInstrument, InstrumentKind> = {
  'national-list': 'variety-registration',
  'variety-registration': 'variety-registration',
  'community-plant-variety-right': 'plant-variety-protection-right',
  'plant-breeders-right': 'plant-variety-protection-right',
  'plant-variety-protection-certificate': 'plant-variety-protection-right',
};

/** Normalised standing of an entry, always paired with the published wording. */
export const VARIETY_REGISTRATION_STATUSES = [
  /** Currently on the register, or a right currently in force. */
  'registered',
  /** Requested but not granted. Not a registration. */
  'application',
  /** Ran its term and lapsed. No longer current. */
  'expired',
  /** Given up by the holder or maintainer. No longer current. */
  'surrendered',
  /** Taken back by the applicant before a decision. Never granted. */
  'withdrawn',
  /** Refused by the authority. Never granted. */
  'rejected',
  /** Abandoned by the applicant or holder. */
  'abandoned',
  /** Ended by the authority before its term, other than by revocation. */
  'terminated',
  /** Annulled by the authority after grant. */
  'revoked',
  /** Removed from the register by the authority. */
  'cancelled',
] as const;
export type VarietyRegistrationStatus =
  (typeof VARIETY_REGISTRATION_STATUSES)[number];

/** Statuses that mean the entry is current. Everything else is historical. */
export const CURRENT_VARIETY_REGISTRATION_STATUSES: readonly VarietyRegistrationStatus[] =
  ['registered'];

/**
 * Which register a listing sits on, as the source classifies it.
 *
 * This is an EU Plant Variety Portal construct — that portal partitions its
 * content this way and publishes the partition in every identifier. Registers
 * that do not partition their content simply carry no sub-type, rather than
 * being assigned one here, which would be classification invented downstream.
 */
export const REGISTER_SUBTYPES = [
  'agricultural-species',
  'vegetable-species',
  'fruit-species',
] as const;
export type RegisterSubType = (typeof REGISTER_SUBTYPES)[number];

/**
 * The ONLY basis on which a registration may be attached to a cultivar.
 *
 * Deliberately a single value rather than a vocabulary of weaker options: a
 * normalised-name match, a "probable" match or a match on denomination alone
 * are all wrong, and giving them names would invite using them. Six registers
 * now feed this layer and not one of them has needed a weaker basis; what they
 * have needed is to be REFUSED when their own evidence is too thin, which is
 * what happened to every vine register examined for this wave.
 */
export const CULTIVAR_MATCH_BASIS = 'denomination-and-species' as const;
export type CultivarMatchBasis = typeof CULTIVAR_MATCH_BASIS;

export interface VarietyRegistrationEntry {
  id: string;

  /** Key of the register's pinned contract in `lib/varieties/registers.ts`. */
  registerId: string;
  /**
   * The register's own stable identifier for the entry, verbatim, where the
   * register publishes one — `NLI/AGR/AT/SOLAN_TUB/1183`, `2300`, `1994/238`.
   * Absent where it publishes none; the contract declares which.
   */
  registerEntryId?: string;
  /** The denomination exactly as the register publishes it. Never normalised. */
  denomination: string;

  instrument: RegistrationInstrument;
  registerName: string;
  /** EU Plant Variety Portal only; see {@link REGISTER_SUBTYPES}. */
  registerSubType?: RegisterSubType;
  /** The source's own sub-type wording, e.g. "Agricultural species". */
  publishedSubTypeWording?: string;

  /** Country or organisation exactly as published, e.g. "Austria", "CPVO". */
  countryOrOrganisation: string;
  /** ISO 3166-1 alpha-3, absent for supranational bodies such as the CPVO. */
  countryCode?: string;
  /** The register's national reference for the entry, when it publishes one. */
  nationalId?: string;
  /** Certificate or grant number, where the register issues one. */
  grantNumber?: string;
  /** The register's own decision, listing or grant date, as an ISO date. */
  decidedOn?: string;

  /**
   * Species EXACTLY as the register expresses it — a scientific name where the
   * register publishes one, and the register's own crop kind where it does
   * not. Never a taxon substituted in from elsewhere: the contract's
   * `speciesForm` says how to read this, and a crop kind reaches a taxon only
   * through a documented equivalence the gate re-derives.
   */
  registerSpeciesName: string;
  /** The register's own species code, where it publishes one (UPOV, etc.). */
  registerSpeciesCode?: string;
  /**
   * The register's finer partition of a crop kind, where it publishes one —
   * Canada's "Wheat, Spring" beneath its "Wheat". This is what makes a crop
   * kind resolvable to one species at all.
   */
  registerSpeciesSubGroup?: string;
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
   * layer: a register aggregating national registers does not establish who
   * maintains each of them.
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
  'Entries are matched to this cultivar by identical denomination and by matching botanical species. Registers do not publish a global variety identifier, so a same-name entry in the same species could in principle be a distinct variety.';

/** Shown where the two kinds of instrument appear together. */
export const INSTRUMENT_KIND_CAVEAT =
  'A variety registration permits marketing; a plant variety protection right is ownership. They are granted by different bodies under different law and are never added together.';
