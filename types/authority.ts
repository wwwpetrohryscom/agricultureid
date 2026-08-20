/**
 * Agricultural Authorities & Departments Intelligence — type model.
 *
 * A verified directory and knowledge layer of official PUBLIC bodies responsible
 * for agriculture. This is deliberately NOT a business directory: every entry
 * must be a real government or statutory body, tied to a jurisdiction, and
 * verified against an official government source.
 *
 * ## Why this is a data layer, not a `ContentType`
 *
 * Two structural reasons, both load-bearing:
 *
 * 1. `ContentRef` is `{ type: ContentType; slug: string }`, and neither
 *    `country` nor `region` is a `ContentType` — countries and regions live in
 *    `data/geo/`. An authority's defining link is to its JURISDICTION, which
 *    therefore cannot be expressed as a graph ref at all. Modelling authorities
 *    as content would push `countryCode`/`regionId` into fields the structural
 *    ref-walker would either ignore or flag (`graph-unmapped-ref-field`).
 *
 * 2. `BaseContent` requires `introduction`, `keyFacts`, `sections`, and
 *    `limitations` — a full prose article per entity. Several hundred
 *    government bodies cannot honestly carry that, and manufacturing it is
 *    precisely the thin/padded content the brief forbids. Instead this model
 *    encodes EVIDENCE, and page substance is gated on evidence coverage
 *    (`profileDepth`), not prose length.
 *
 * Authorities still participate in search and in the site's internal link graph
 * — the same way countries, regions, and indicators already do.
 *
 * ## The core rule
 *
 * Nothing here may be inferred from an organisation's NAME. A body called a
 * "Ministry of Agriculture" is not thereby established to run a seed registry,
 * certify organic operators, or hold phytosanitary competence. Every
 * responsibility carries its own citation, and anything unverified is simply
 * absent. Absence of evidence is recorded as absence, never as a negative fact.
 */

/* -------------------------------------------------------------------------- */
/*  Controlled vocabularies                                                    */
/* -------------------------------------------------------------------------- */

/**
 * What kind of body this is.
 *
 * Chosen from the body's OFFICIAL designation, never from an English
 * translation of it: a "Direção-Geral", a "Bundesanstalt", and an "Office"
 * are not interchangeable, and translating them all to "department" destroys
 * the distinction. Where the legal designation does not map cleanly, use
 * `otherOfficialAgriculturalBody` and record the original in
 * `officialDesignation`.
 */
export const AUTHORITY_TYPES = [
  'ministry',
  'department',
  'agency',
  'authority',
  'service',
  'inspectorate',
  'commission',
  'secretariat',
  'bureau',
  'office',
  'board',
  'administration',
  'paymentAgency',
  'researchAgency',
  'extensionAgency',
  'plantHealthAuthority',
  'veterinaryAuthority',
  'seedAuthority',
  'statisticsAuthority',
  'commodityAuthority',
  'ruralDevelopmentAuthority',
  'otherOfficialAgriculturalBody',
] as const;
export type AuthorityType = (typeof AUTHORITY_TYPES)[number];

/**
 * The tier of government the body belongs to.
 *
 * A federal agency, a state agency, and a federal agency's regional branch
 * office are three different things and must never be conflated: a branch
 * office is not a distinct authority and should not be published as one.
 */
export const GOVERNMENT_LEVELS = [
  'supranational',
  'national',
  'federal',
  'state',
  'provincial',
  'territorial',
  'regional',
  'autonomousRegion',
  'devolvedAdministration',
  'local',
] as const;
export type GovernmentLevel = (typeof GOVERNMENT_LEVELS)[number];

/** The kind of jurisdiction the authority is competent over. */
export const JURISDICTION_TYPES = [
  'supranational',
  'country',
  'state',
  'province',
  'territory',
  'region',
  'autonomousCommunity',
  'devolvedNation',
  'federalDistrict',
] as const;
export type JurisdictionType = (typeof JURISDICTION_TYPES)[number];

/**
 * Whether the body currently exists in the form described.
 *
 * Only `active` bodies are publishable. An archived web page is NOT evidence
 * that an agency still operates, and a live page is not evidence either when a
 * reorganisation has moved the mandate elsewhere.
 */
export const AUTHORITY_STATUSES = [
  'active',
  'reorganized',
  'superseded',
  'merged',
  'historical',
  'uncertain',
] as const;
export type AuthorityStatus = (typeof AUTHORITY_STATUSES)[number];

/**
 * Controlled responsibility areas.
 *
 * Deliberately specific. "Responsible for agriculture" is not a
 * responsibility — it is a restatement of the body's name. Each area attached
 * to an authority must be supported by its own citation.
 */
export const RESPONSIBILITY_AREAS = [
  'crops',
  'livestock',
  'plant-health',
  'animal-health',
  'seeds',
  'plant-varieties',
  'fertilizers',
  'pesticides',
  'organic-farming',
  'agricultural-statistics',
  'rural-development',
  'agricultural-subsidies',
  'farm-policy',
  'irrigation',
  'soils',
  'forestry',
  'fisheries',
  'food-safety',
  'agricultural-trade',
  'import-export-certification',
  'phytosanitary-inspection',
  'veterinary-certification',
  'extension',
  'agricultural-research',
  'agricultural-education',
  'land-management',
] as const;
export type ResponsibilityArea = (typeof RESPONSIBILITY_AREAS)[number];

/**
 * How confident we are that the website is the body's genuine official presence.
 *
 * A government-looking domain is not proof of legitimacy, and a non-`.gov`
 * domain is not proof of illegitimacy — many countries publish competent
 * authorities on national domains with no `.gov` equivalent. Classification is
 * therefore explicit rather than pattern-matched, and `uncertain` is never
 * publishable.
 */
export const DOMAIN_VERIFICATIONS = [
  'verifiedOfficial',
  'officialGovernmentPortal',
  'officialSubdomain',
  'officialStandalonePublicAuthority',
  'uncertain',
] as const;
export type DomainVerification = (typeof DOMAIN_VERIFICATIONS)[number];

/**
 * Internal pipeline state. Only `accepted` entries reach the public registry;
 * everything else is retained so rejections stay auditable and are not silently
 * rediscovered later.
 */
export const CANDIDATE_STATUSES = [
  'discovered',
  'verified',
  'accepted',
  'rejected',
  'duplicate',
  'superseded',
  'uncertain',
  'needsReview',
] as const;
export type CandidateStatus = (typeof CANDIDATE_STATUSES)[number];

/** Why a candidate was not published. Kept as a closed set so reports aggregate. */
export const REJECTION_REASONS = [
  'unofficial-site',
  'duplicate-authority',
  'superseded-agency',
  'inaccessible-source',
  'unclear-jurisdiction',
  'no-agricultural-mandate',
  'insufficient-verification',
  'branch-office-not-distinct-authority',
  'private-or-non-governmental',
] as const;
export type RejectionReason = (typeof REJECTION_REASONS)[number];

/**
 * Evidence depth, which decides whether an entity earns an indexable page.
 *
 * `directory-record` — verified and real, but too thin for a standalone page.
 *   Appears in directory listings and country sections; NOT given a detail page
 *   and NOT placed in the sitemap.
 * `full-profile` — carries enough verified substance to be genuinely useful on
 *   its own page.
 *
 * The distinction is evidence coverage, never word count.
 */
export const PROFILE_DEPTHS = ['directory-record', 'full-profile'] as const;
export type ProfileDepth = (typeof PROFILE_DEPTHS)[number];

/* -------------------------------------------------------------------------- */
/*  Evidence-bearing sub-records                                               */
/* -------------------------------------------------------------------------- */

/**
 * One responsibility, scoped and cited.
 *
 * `note` states what the body actually does in that area, in its own terms —
 * not a restatement of the area label. `sourceId` must exist in the source
 * registry, so responsibilities cannot be asserted without provenance.
 */
export interface AuthorityResponsibility {
  area: ResponsibilityArea;
  /** What the body does in this area. Specific, factual, no boilerplate. */
  note: string;
  /** Source registry id backing this specific claim. Required. */
  sourceId: string;
  /** Page the claim was read from, when narrower than the source URL. */
  evidenceUrl?: string;
  /**
   * True for claims of legal competence — regulatory, licensing, certification,
   * inspection, subsidy administration, statutory status. These require
   * explicit official evidence and are held to a stricter validator rule.
   */
  statutory?: boolean;
}

/** A public service the authority actually operates, with its official URL. */
export interface AuthorityService {
  name: string;
  url: string;
  /** What the service does for a user. Optional; omit rather than pad. */
  note?: string;
  sourceId: string;
}

/** An official registry or dataset the authority publishes or administers. */
export interface AuthorityRegistry {
  name: string;
  url: string;
  /** `registry` for lookup systems, `dataset` for published data. */
  kind: 'registry' | 'dataset' | 'statistics';
  note?: string;
  sourceId: string;
}

/** A name in the jurisdiction's own language(s). */
export interface LocalLanguageName {
  /** BCP-47-ish language tag, e.g. "fr", "es", "uk", "zh-Hans". */
  lang: string;
  name: string;
}

/**
 * Verification record. Every published authority must carry at least one.
 * `secondary` entries exist for high-value bodies verified twice independently.
 */
export interface AuthorityVerification {
  /** Official URL the verification was performed against. */
  url: string;
  /** Source registry id for the verifying source. */
  sourceId: string;
  /** ISO date the check was made. */
  verifiedAt: string;
  /** What was actually observed that establishes identity/currency. */
  evidenceNote: string;
  /** How the domain was classified. `uncertain` is not publishable. */
  domainVerification: DomainVerification;
}

/* -------------------------------------------------------------------------- */
/*  The entity                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * One official agricultural authority.
 *
 * Most fields are optional on purpose. Governments differ enormously in what
 * they publish, and a uniform shape would force either invention or a false
 * implication that an absent field means "no". Only identity, jurisdiction,
 * status, official website, verification, and at least one cited responsibility
 * are mandatory.
 */
export interface AgriculturalAuthorityEntry {
  /** Stable unique id, kebab-case, globally unique across the registry. */
  id: string;
  /** URL slug, unique, kebab-case. Route: /agricultural-authorities/[slug]. */
  slug: string;

  /** Full official name in the working language of publication. */
  officialName: string;
  /** Official designation in the original language, when it differs. */
  officialDesignation?: string;
  /** Common short form or official acronym (e.g. "USDA", "Defra"). */
  shortName?: string;
  /** Other names the body is known by, including former names. */
  alternativeNames?: string[];
  /** Names in the jurisdiction's own language(s). */
  localLanguageNames?: LocalLanguageName[];

  authorityType: AuthorityType;
  governmentLevel: GovernmentLevel;
  jurisdictionType: JurisdictionType;
  /**
   * ISO 3166-1 alpha-3 code. Required for every body below supranational level
   * and must resolve against the geo layer. Absent for supranational bodies
   * (an EU directorate-general has no single country), which the validator
   * enforces in both directions.
   */
  countryCode?: string;
  /**
   * Canonical jurisdiction id (ISO 3166-2, e.g. `US-RI`) for subnational
   * bodies. Replaces the former `regionId`, which pointed at a `RegionProfile`
   * and so wrongly required substantive agronomy to exist before a state could
   * be represented at all. Identity now resolves against
   * `data/jurisdictions`; a `RegionProfile` is optional enrichment.
   *
   * There is deliberately no `regionId` fallback — one canonical field, no
   * dual source of truth.
   */
  jurisdictionId?: string;
  /** Human-readable jurisdiction ("France", "State of Texas"). */
  jurisdictionName: string;
  /** Parent body's `id`, for agencies under a ministry. */
  parentAuthorityId?: string;

  authorityStatus: AuthorityStatus;
  /** For superseded/merged bodies: the `id` that now holds the mandate. */
  supersededByAuthorityId?: string;
  /** How the transition happened. Required when status is not `active`. */
  transitionNote?: string;

  /** Canonical official website. Must be HTTPS and verified. */
  officialWebsite: string;
  contactPageUrl?: string;
  servicesPageUrl?: string;
  datasetsPageUrl?: string;
  legislationPageUrl?: string;
  officialDirectoryUrl?: string;

  /**
   * Public contact details, only where the authority itself publishes them for
   * general enquiries. Never scraped staff contacts, never individual officers.
   */
  publicEnquiryEmail?: string;
  publicEnquiryPhone?: string;

  /** One–three sentence factual summary. No marketing, no inferred mandate. */
  summary: string;

  /** Cited responsibilities. At least one required. */
  responsibilities: AuthorityResponsibility[];
  services?: AuthorityService[];
  registries?: AuthorityRegistry[];

  /** Source registry ids supporting the record as a whole. */
  sourceReferences: string[];
  /** Verification records. At least one required. */
  verification: AuthorityVerification[];

  /** Honest statements of what this record does not establish. */
  limitations?: string[];

  profileDepth: ProfileDepth;
  candidateStatus: CandidateStatus;
  /** Present only when `candidateStatus` is `rejected`. */
  rejectionReason?: RejectionReason;

  /** ISO date of last editorial review. */
  reviewedAt?: string;
  /** ISO date the official URL last resolved successfully (network audit). */
  lastSuccessfulUrlCheck?: string;
  /** Recorded when the official URL now redirects; identity is NOT auto-changed. */
  redirectedFrom?: string;

  seo?: {
    title?: string;
    description?: string;
  };
}

/** Derived helper: is this entity eligible for a public, indexable page? */
export function isPublishableAuthority(a: AgriculturalAuthorityEntry): boolean {
  return (
    a.candidateStatus === 'accepted' &&
    a.authorityStatus === 'active' &&
    a.profileDepth === 'full-profile' &&
    a.verification.length > 0 &&
    a.verification.every((v) => v.domainVerification !== 'uncertain')
  );
}

/** Derived helper: may this entity appear in directory listings at all? */
export function isListableAuthority(a: AgriculturalAuthorityEntry): boolean {
  return a.candidateStatus === 'accepted' && a.authorityStatus === 'active';
}
