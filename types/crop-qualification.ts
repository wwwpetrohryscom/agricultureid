/**
 * Why a crop has a public profile, or does not.
 *
 * ## What this is not
 *
 * It is not a score. "Crop score 73/100" cannot be acted on: nobody can tell
 * from it what is missing, what would change it, or whether 73 is a page worth
 * publishing. Every result here is a set of named checks with named outcomes,
 * and a status that follows from them.
 *
 * ## The rule it exists to enforce
 *
 * Waves 27–30 established that a verified botanical identity is not the same
 * thing as a publishable article. 195 taxa are held with no page. This layer
 * makes that decision explicit and auditable for every one of them, and — just
 * as importantly — for the 153 that already have pages, which were never
 * assessed against a standard at all.
 *
 * ## Self-declaration is not evidence
 *
 * A qualification is computed from evidence that lives OUTSIDE the record being
 * judged: the identity layer, the authored content, the resolved cross-layer
 * relations, the emitted route list. It never reads `profileDepth` to decide
 * whether something deserves a profile. `profileDepth` is the published state;
 * the qualification is the judgement; the validator's job is to check that the
 * two agree, and a page whose content cannot carry it is a finding.
 */

/* -------------------------------------------------------------------------- */
/*  Check outcomes                                                            */
/* -------------------------------------------------------------------------- */

/** A hard gate is met, or it is not, or it cannot be judged yet. */
export const CHECK_RESULTS = ['pass', 'fail', 'not-applicable'] as const;
export type CheckResult = (typeof CHECK_RESULTS)[number];

export interface QualificationCheck {
  result: CheckResult;
  /** What was checked and what was found. Always populated. */
  detail: string;
  /** The measured values behind the result, where there are any. */
  measures?: Readonly<Record<string, number | string>>;
}

/**
 * How well an optional layer covers this crop.
 *
 * `not-modelled` is distinct from `missing` and the distinction matters: the
 * climate and water layer is organised by geography and holds no crop
 * relations at all, so a crop with no climate coverage is not a gap in the
 * corpus — it is a question this corpus does not currently answer per crop.
 * Reporting those together would invent 348 gaps that nobody can close.
 */
export const COVERAGE_RESULTS = [
  'available',
  'partial',
  'missing',
  'not-modelled',
] as const;
export type CoverageResult = (typeof COVERAGE_RESULTS)[number];

export interface CoverageCheck {
  result: CoverageResult;
  /** How many related records were found. */
  count: number;
  /** How the relation is derived — never "because the crop says so". */
  derivedFrom: string;
  /**
   * The identifiers actually counted.
   *
   * A bare number cannot be checked: nothing distinguishes three resolving
   * relations from three broken ones. Listing what was counted turns the claim
   * into something the validator re-resolves against the corpus, which is the
   * only way a count can be wrong out loud.
   */
  refs: string[];
}

/* -------------------------------------------------------------------------- */
/*  Status                                                                    */
/* -------------------------------------------------------------------------- */

export const QUALIFICATION_STATUSES = [
  /** Every hard gate passes. The crop can carry a public page. */
  'FULL_PROFILE_ELIGIBLE',
  /** Identity is sound; no article has been written. Not a defect. */
  'DATA_ONLY',
  /** The botanical identity itself is unsound or unresolved. */
  'BLOCKED_IDENTITY',
  /** An article exists and does not carry enough to justify a page. */
  'BLOCKED_DEPTH',
  /** The record contradicts another entity in the corpus. */
  'BLOCKED_CONFLICT',
  /** The concept needs research before it can be judged. */
  'DEFERRED_RESEARCH',
] as const;
export type QualificationStatus = (typeof QUALIFICATION_STATUSES)[number];

/** Statuses that permit a public route. Exactly one does. */
export const ROUTABLE_STATUSES: readonly QualificationStatus[] = [
  'FULL_PROFILE_ELIGIBLE',
];

/* -------------------------------------------------------------------------- */
/*  Promotion queue                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Editorial priority for writing an article, not a ranking of importance.
 *
 * The tiers answer one question: if somebody sits down to write the next crop
 * page, which one repays the effort most? A crop whose structured evidence is
 * already assembled repays it more than one where every fact still has to be
 * found — that is what P1 means, and it is not a claim that the crop matters
 * more than the others.
 */
export const PROMOTION_TIERS = [
  'P1_READY',
  'P2_STRONG_CANDIDATE',
  'P3_NEEDS_RESEARCH',
  'P4_IDENTITY_COMPLEX',
  'P5_LOW_CURRENT_PRIORITY',
] as const;
export type PromotionTier = (typeof PROMOTION_TIERS)[number];

export const PROMOTION_TIER_MEANING: Record<PromotionTier, string> = {
  P1_READY:
    'Identity and agricultural role are settled and several AgricultureID layers already hold records for it. An article would have material to work from on day one.',
  P2_STRONG_CANDIDATE:
    'Identity and agricultural role are settled and at least one layer holds records. Writing it needs research, but not from nothing.',
  P3_NEEDS_RESEARCH:
    'Identity is settled and no other layer holds anything. Everything an article said would have to be sourced from outside the corpus.',
  P4_IDENTITY_COMPLEX:
    'The concept covers more than one taxon, or the authorities do not agree on it. An article is possible but the scope has to be settled first, and getting it wrong is worse than not publishing.',
  P5_LOW_CURRENT_PRIORITY:
    'Nothing blocks it and nothing recommends it ahead of the others.',
};

/* -------------------------------------------------------------------------- */
/*  Blockers                                                                  */
/* -------------------------------------------------------------------------- */

export const BLOCKER_KINDS = [
  'identity-unverified',
  'identity-contested',
  'identity-conflict',
  'agricultural-role-missing',
  'content-absent',
  'content-thin',
  'content-templated',
  'source-insufficient',
  'route-inconsistent',
] as const;
export type BlockerKind = (typeof BLOCKER_KINDS)[number];

export interface QualificationBlocker {
  kind: BlockerKind;
  /** What is wrong, in a sentence an editor can act on. */
  detail: string;
}

/* -------------------------------------------------------------------------- */
/*  The result                                                                */
/* -------------------------------------------------------------------------- */

export interface CropProfileQualification {
  cropId: string;
  slug: string;
  primaryName: string;
  status: QualificationStatus;

  hardGates: {
    taxonomy: QualificationCheck;
    agriculturalIdentity: QualificationCheck;
    contentDepth: QualificationCheck;
    sourceIntegrity: QualificationCheck;
    identityConsistency: QualificationCheck;
  };

  enrichment: {
    markets: CoverageCheck;
    calendars: CoverageCheck;
    cultivars: CoverageCheck;
    varietyRegistrations: CoverageCheck;
    extension: CoverageCheck;
    biosecurity: CoverageCheck;
    soils: CoverageCheck;
    climate: CoverageCheck;
    economics: CoverageCheck;
    trade: CoverageCheck;
  };

  blockers: readonly QualificationBlocker[];
  /** Named dimensions that would change the outcome if supplied. */
  missingEvidence: readonly string[];
  /** Set for anything that does not currently have a page. */
  promotionTier?: PromotionTier;
  /** Whether a page is actually published for this crop, read from the routes. */
  hasPublishedRoute: boolean;
  evaluatedAt: string;
}

/** Shown where a data-only crop is named to a reader. */
export const DATA_ONLY_NOTICE =
  'AgricultureID holds a verified botanical identity for this crop. A full profile has not been published for it yet.';
