/**
 * Official agricultural registries, databases and searchable public systems.
 *
 * ## Why this is not `DatasetRegistryEntry`
 *
 * The existing dataset model describes a statistical snapshot AgricultureID has
 * INGESTED: it requires `snapshotIds`, `checksum`, `expectedColumns`,
 * `expectedUnit`, `missingValueRule`, `transformationVersion` and
 * `revisionPolicy`. Those are properties of a pipeline artefact, not of a
 * government register we merely point at. Representing the EU Pesticides
 * Database that way would mean inventing a checksum, a column list and a unit
 * for a system we do not ingest at all — fabrication to satisfy a schema.
 *
 * A searchable authorisation register and an ingested statistics table are
 * materially different entities, so they get different types. Where a registry
 * genuinely exposes a dataset we already ingest, it points at it by id rather
 * than duplicating it.
 *
 * ## One logical system, one record
 *
 * A registry usually has several endpoints — a landing page, a search
 * interface, a bulk download, sometimes an API. Those are FIELDS on one record,
 * never separate records. Splitting them would inflate the corpus and misstate
 * how many official systems exist.
 *
 * ## What must never be guessed
 *
 * `apiAvailable` means a public or documented API exists — never that the site
 * makes internal JSON calls. `updateFrequency` is `unknown` unless the operator
 * documents it; a recent timestamp is not documentation. Scope is read from the
 * system, never inferred from its name.
 */

export const REGISTRY_TYPES = [
  'seedRegistry',
  'varietyCatalogue',
  'soilSurvey',
  'pesticideProductRegistry',
  'pesticideActiveSubstanceDatabase',
  'fertilizerRegistry',
  'organicOperatorRegistry',
  'organicCertifierRegistry',
  'livestockRegistry',
  'breedRegistry',
  'herdBook',
  'veterinaryDatabase',
  'animalIdentificationSystem',
  'animalMovementDatabase',
  'plantHealthDatabase',
  'quarantinePestDatabase',
  'phytosanitarySystem',
  'agriculturalStatisticsPortal',
  'agriculturalCensusDatabase',
  'commodityMarketDatabase',
  'subsidyDatabase',
  'paymentTransparencyDatabase',
  'approvedProductDatabase',
  'certificationRegistry',
  'importExportControlDatabase',
  'farmRegistry',
  'agriculturalLandRegistry',
  'germplasmDatabase',
  'otherOfficialAgriculturalRegistry',
] as const;
export type RegistryType = (typeof REGISTRY_TYPES)[number];

/** How the public can actually get at the contents. */
export const ACCESS_TYPES = [
  'public-search',
  'public-download',
  'public-api',
  'public-document',
  'restricted',
  'mixed',
] as const;
export type RegistryAccessType = (typeof ACCESS_TYPES)[number];

export const UPDATE_FREQUENCIES = [
  'continuous',
  'daily',
  'weekly',
  'monthly',
  'quarterly',
  'annual',
  'irregular',
  'unknown',
] as const;
export type RegistryUpdateFrequency = (typeof UPDATE_FREQUENCIES)[number];

export const REGISTRY_STATUSES = [
  'active',
  'replaced',
  'historical',
  'uncertain',
] as const;
export type RegistryStatus = (typeof REGISTRY_STATUSES)[number];

/** Evidence depth, mirroring the authority layer's two-tier model. */
export const REGISTRY_PROFILE_DEPTHS = [
  'directory-record',
  'full-profile',
] as const;
export type RegistryProfileDepth = (typeof REGISTRY_PROFILE_DEPTHS)[number];

/** One verification observation against an official source. */
export interface RegistryVerification {
  url: string;
  sourceId: string;
  verifiedAt: string;
  evidenceNote: string;
}

export interface AgriculturalRegistryEntry {
  id: string;
  slug: string;
  officialName: string;
  shortName?: string;
  localNames?: string[];
  aliases?: string[];

  registryType: RegistryType;

  /** ISO 3166-1 alpha-3. Absent for supranational systems. */
  countryCode?: string;
  /** ISO 3166-2 canonical jurisdiction id, for subnational systems. */
  jurisdictionId?: string;
  /** e.g. "European Union", "Global" — for systems above country level. */
  supranationalJurisdiction?: string;
  /** Human-readable jurisdiction label shown to readers. */
  jurisdictionName: string;

  /** Authority ids that administer the system. May be empty when unresolved. */
  responsibleAuthorityIds: string[];

  /** Canonical landing page for the system. */
  officialUrl: string;
  /** Distinct search interface, when the landing page is not itself the search. */
  searchUrl?: string;
  downloadUrl?: string;
  /** Only when a public or documented API genuinely exists. */
  apiUrl?: string;
  documentationUrl?: string;

  accessType: RegistryAccessType;
  searchable: boolean;
  downloadable: boolean;
  apiAvailable: boolean;
  /** True when the system requires an account or credentials to use. */
  loginRequired?: boolean;

  /** What the system actually contains. Specific, never "agricultural data". */
  scope: string[];
  coverageDescription?: string;
  /** `unknown` unless the operator documents a cadence. */
  updateFrequency: RegistryUpdateFrequency;

  /** Dataset ids in the existing data layer this system exposes, if any. */
  datasetIds?: string[];

  status: RegistryStatus;
  sourceReferences: string[];
  verification: RegistryVerification[];
  limitations?: string[];

  profileDepth: RegistryProfileDepth;
  lastVerifiedAt: string;
  seo?: { description?: string };
}

/** Eligible for an indexable detail page. */
export function isPublishableRegistry(r: AgriculturalRegistryEntry): boolean {
  return (
    r.status === 'active' &&
    r.profileDepth === 'full-profile' &&
    r.verification.length > 0 &&
    r.scope.length > 0
  );
}

/** May appear in directory listings. */
export function isListableRegistry(r: AgriculturalRegistryEntry): boolean {
  return r.status === 'active';
}
