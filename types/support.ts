/**
 * Agricultural support programmes — official financial and advisory support
 * available to farmers, holdings and rural businesses.
 *
 * ## The property that makes this layer dangerous
 *
 * Support programmes are TIME-SENSITIVE in a way that authorities and
 * registries are not. A ministry that existed last year still exists; a grant
 * window that closed last year has closed. Presenting a closed programme as
 * available wastes a reader's time at best and causes them to miss a real
 * deadline at worst.
 *
 * So `status` is mandatory and `lastVerifiedAt` is mandatory, and the validator
 * refuses to let a closed programme be published as though it were open. A live
 * official page is NOT evidence that applications are open — government sites
 * routinely keep closed programmes online.
 *
 * ## Funding and eligibility are never paraphrased loosely
 *
 * A funding figure is a structured value with an explicit currency, unit and
 * basis (maximum award, standard rate, cost-share percentage, total programme
 * budget — four different things that are easy to conflate). Absent explicit
 * official evidence, the field is simply omitted rather than approximated.
 *
 * Eligibility conditions carry their own citation. The layer never tells a
 * reader they personally qualify.
 */

export const SUPPORT_PROGRAM_TYPES = [
  'directPayment',
  'incomeSupport',
  'investmentGrant',
  'ruralDevelopment',
  'youngFarmerSupport',
  'newFarmerSupport',
  'organicSupport',
  'environmentalScheme',
  'conservationProgram',
  'livestockSupport',
  'cropSupport',
  'disasterAssistance',
  'droughtSupport',
  'floodSupport',
  'insuranceSupport',
  'irrigationSupport',
  'equipmentModernization',
  'energyEfficiency',
  'researchInnovation',
  'cooperativeSupport',
  'marketSupport',
  'trainingAdvisory',
  'otherOfficialAgriculturalSupport',
] as const;
export type SupportProgramType = (typeof SUPPORT_PROGRAM_TYPES)[number];

export const BENEFICIARY_TYPES = [
  'farmer',
  'rancher',
  'agriculturalHolding',
  'livestockProducer',
  'cropProducer',
  'forestLandowner',
  'youngFarmer',
  'newFarmer',
  'cooperative',
  'ruralBusiness',
  'landManager',
  'researchOrganisation',
  'other',
] as const;
export type BeneficiaryType = (typeof BENEFICIARY_TYPES)[number];

/**
 * Programme availability.
 *
 * `recurring` means the official page presents the programme as currently
 * operating with no single closing date. `uncertain` is the correct answer
 * whenever current availability was not established — never `active` by default.
 */
export const SUPPORT_STATUSES = [
  'active',
  'upcoming',
  'closed',
  'recurring',
  'uncertain',
] as const;
export type SupportStatus = (typeof SUPPORT_STATUSES)[number];

/**
 * What a monetary figure actually means. Conflating a total programme budget
 * with an individual maximum award is the single most misleading error this
 * layer could make, so the basis is explicit and required.
 */
export const FUNDING_BASES = [
  'maximum-award',
  'standard-rate',
  'cost-share-percentage',
  'per-hectare',
  'per-animal',
  'total-programme-budget',
] as const;
export type FundingBasis = (typeof FUNDING_BASES)[number];

export interface StructuredFundingAmount {
  basis: FundingBasis;
  /** Numeric value. Omit the whole object rather than approximate. */
  value?: number;
  /** ISO 4217 code, required when `value` is a monetary amount. */
  currency?: string;
  /** e.g. "per hectare", "percent of eligible costs". */
  unit?: string;
  /** Source id establishing this figure. Required. */
  sourceId: string;
  note?: string;
}

export interface SupportRequirement {
  id: string;
  title: string;
  /** Source id establishing this condition. Required — never inferred. */
  sourceId: string;
  note: string;
}

export interface SupportVerification {
  url: string;
  sourceId: string;
  verifiedAt: string;
  evidenceNote: string;
}

export interface AgriculturalSupportProgram {
  id: string;
  slug: string;
  officialName: string;
  shortName?: string;
  aliases?: string[];
  localNames?: string[];

  programType: SupportProgramType;

  countryCode?: string;
  jurisdictionId?: string;
  supranationalJurisdiction?: string;
  jurisdictionName: string;

  administeringAuthorityIds: string[];
  relatedRegistryIds?: string[];

  beneficiaryTypes: BeneficiaryType[];
  eligibleSectors?: string[];

  officialUrl: string;
  applicationUrl?: string;
  guidanceUrl?: string;

  status: SupportStatus;
  /** Only where the official source states dates. Absent means unknown. */
  applicationWindow?: { opens?: string; closes?: string };

  fundingAmounts?: StructuredFundingAmount[];
  /** Factual summary of who it is for. Never a claim that a reader qualifies. */
  eligibilitySummary?: string;
  requirements?: SupportRequirement[];

  summary: string;
  sourceReferences: string[];
  verification: SupportVerification[];
  lastVerifiedAt: string;
  limitations: string[];

  profileDepth: 'directory-record' | 'full-profile';
  seo?: { description?: string };
}

/** The standing caveat shown wherever eligibility is described. */
export const SUPPORT_ELIGIBILITY_NOTICE =
  'Eligibility depends on the official programme rules and individual circumstances. Verify current requirements and application periods with the administering authority.';

export function isPublishableSupportProgram(
  p: AgriculturalSupportProgram,
): boolean {
  return (
    p.status !== 'closed' &&
    p.profileDepth === 'full-profile' &&
    p.verification.length > 0 &&
    p.administeringAuthorityIds.length > 0
  );
}

export function isListableSupportProgram(
  p: AgriculturalSupportProgram,
): boolean {
  return p.status !== 'closed';
}
