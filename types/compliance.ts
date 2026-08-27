/**
 * Agricultural compliance topics — narrowly scoped, source-anchored guidance on
 * where an official requirement lives and which official system confirms it.
 *
 * ## What this layer is, and is not
 *
 * It is a NAVIGATION layer over official material: which authority regulates a
 * thing, which official register confirms status, and which legal instrument
 * establishes the rule. It is not a restatement of agricultural law, not legal
 * advice, and never a substitute for the official source.
 *
 * ## The rule that governs everything here
 *
 * `mandatoryStatus: 'required'` may be used ONLY where the operative legal text
 * has actually been read and is cited. Where a requirement is believed to exist
 * but its operative provision has not been read, the honest encoding is a
 * `verify` action with `mandatoryStatus: 'uncertain'` — telling the reader
 * where to check rather than asserting an obligation on their behalf. The
 * validator enforces this: a `required` requirement without a cited official
 * source is a hard error.
 *
 * That asymmetry is deliberate. Understating a legal obligation sends someone
 * to the competent authority; overstating one invents a duty that may not
 * exist. Only the second is a lie.
 *
 * ## Registry and authority linkage
 *
 * Requirements point at Wave 5 registry ids and authority ids, never at raw
 * external URLs that a registry record already owns. A ministry rename or a
 * registry URL change is then a single-record edit, not a hunt through prose.
 */

export const COMPLIANCE_TOPIC_TYPES = [
  'seeds',
  'plantVarieties',
  'pesticides',
  'fertilizers',
  'organicAgriculture',
  'phytosanitary',
  'plantHealth',
  'veterinary',
  'livestockIdentification',
  'animalMovement',
  'agriculturalImports',
  'agriculturalExports',
  'farmRegistration',
  'agriculturalLicensing',
  'productLabeling',
  'certification',
  'inspection',
  'biosecurity',
  'otherAgriculturalCompliance',
] as const;
export type ComplianceTopicType = (typeof COMPLIANCE_TOPIC_TYPES)[number];

/** What the reader is being told to do — or to check. */
export const COMPLIANCE_ACTIONS = [
  'register',
  'notify',
  'obtain-certificate',
  'obtain-permit',
  'submit-data',
  'label',
  'inspect',
  'test',
  'maintain-records',
  'use-approved-product',
  /**
   * "Go and confirm the current position in this official system." Used where
   * the operative provision has not been read, so no obligation is asserted.
   */
  'verify',
  'other',
] as const;
export type ComplianceAction = (typeof COMPLIANCE_ACTIONS)[number];

export const MANDATORY_STATUSES = [
  'required',
  'conditional',
  'recommended',
  'uncertain',
] as const;
export type MandatoryStatus = (typeof MANDATORY_STATUSES)[number];

export const COMPLIANCE_STATUSES = [
  'current',
  'upcoming',
  'superseded',
  'uncertain',
] as const;
export type ComplianceStatus = (typeof COMPLIANCE_STATUSES)[number];

export const COMPLIANCE_PROFILE_DEPTHS = [
  'directory-record',
  'full-profile',
] as const;
export type ComplianceProfileDepth = (typeof COMPLIANCE_PROFILE_DEPTHS)[number];

export interface ComplianceRequirement {
  id: string;
  title: string;
  /** Who or what the requirement bites on. */
  appliesTo: string[];
  action: ComplianceAction;
  /** Authority ids responsible. Resolved against the authority registry. */
  authorityIds: string[];
  /** Wave 5 registry ids the reader should consult. */
  registryIds?: string[];
  /** Distinct operational forms/portals a registry record does not already own. */
  formUrls?: string[];
  /** Source registry ids establishing this requirement. */
  officialSourceIds: string[];
  mandatoryStatus: MandatoryStatus;
  /**
   * Short paraphrase of what the source says. A brief necessary quotation is
   * permitted; wholesale reproduction of legal text is not.
   */
  note: string;
  /** Documented carve-outs. Recorded because an unqualified rule misleads. */
  conditions?: string[];
}

export interface AgriculturalComplianceTopic {
  id: string;
  slug: string;
  title: string;
  topicType: ComplianceTopicType;

  countryCode?: string;
  jurisdictionId?: string;
  supranationalJurisdiction?: string;
  jurisdictionName: string;

  responsibleAuthorityIds: string[];
  relatedRegistryIds: string[];

  /** What the topic covers, in one or two factual sentences. */
  summary: string;
  requirements: ComplianceRequirement[];

  officialSources: string[];
  status: ComplianceStatus;
  lastVerifiedAt: string;
  /** Honest statements of what this page does not establish. Required. */
  limitations: string[];

  profileDepth: ComplianceProfileDepth;
  seo?: { description?: string };
}

/** Eligible for an indexable detail page. */
export function isPublishableComplianceTopic(
  t: AgriculturalComplianceTopic,
): boolean {
  return (
    t.status === 'current' &&
    t.profileDepth === 'full-profile' &&
    t.requirements.length > 0 &&
    t.officialSources.length > 0 &&
    t.responsibleAuthorityIds.length > 0
  );
}

export function isListableComplianceTopic(
  t: AgriculturalComplianceTopic,
): boolean {
  return t.status === 'current' || t.status === 'upcoming';
}
