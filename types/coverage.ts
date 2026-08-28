/**
 * Coverage — what AgricultureID knows, and what it only has not looked at yet.
 *
 * ## The distinction the whole layer exists for
 *
 * "AgricultureID has no record of a German pesticide register" and "Germany has
 * no pesticide register" are completely different statements. The first is true
 * and the second is false, and a site that renders absence as a dash invites
 * every reader to make the second inference for themselves.
 *
 * So absence is never silent here. Every empty cell carries a reason, and the
 * reasons are different from each other in ways that matter: a source nobody
 * has looked for, a source that was found and could not be reached, a source
 * that was reached and publishes nothing machine-readable, and a subject that
 * genuinely does not apply are four situations, not one "missing".
 *
 * ## No percentage
 *
 * There is no single completeness number, because there is nothing honest to
 * divide by. AgricultureID could name every EU Member State's pesticide
 * register, so a fraction there means something; it could not name every crop
 * calendar on earth, and 172 of an unknown denominator is not 3%. Closed sets
 * are counted against an INDEPENDENT list; open-ended ones report what the
 * corpus holds and say that is what they are reporting.
 *
 * ## Two statuses were drafted and removed
 *
 * `outOfScope` and `researchedNoPublishableSource` were both in an earlier
 * draft of this vocabulary and neither survived, because nothing reaches them:
 * no layer in any jurisdiction turned out to be outside what AgricultureID sets
 * out to cover, and no publisher turned out to put nothing publishable in the
 * public domain — the four registers that were researched and could not be used
 * all publish something, just not in a form that can be read without guessing.
 *
 * They are recorded here rather than kept, because a status nothing can reach
 * reads as a category of findings that does not exist. If a case for either
 * arises, it comes back with the case.
 *
 * What DOES exist is `notApplicable`, used for exactly one thing: a layer that
 * does not arise at a level of government, such as a pesticide authorisation at
 * state level, which is a national decision everywhere.
 *
 * ## Coverage cannot mark its own homework
 *
 * A completeness check that derives its target from the thing being measured
 * always passes. So the targets in `data/coverage/targets.ts` are written from
 * the instruments that constitute those sets — the EU Treaties, the US
 * Constitution's states, Canada's provinces and territories — and never from
 * the corpus.
 */

/**
 * What is known about one layer in one place.
 *
 * Deliberately not "missing": five of these describe an absence, and treating
 * them as one value would throw away the only information a reader needs to
 * judge how much weight to put on it.
 */
export const COVERAGE_STATUSES = [
  /** The corpus holds records and the official source behind them is known. */
  'verified',
  /** Records exist but do not cover the independent target for this set. */
  'partial',
  /** Found, and could not be reached — 403, DNS failure, refused connection. */
  'researchedSourceInaccessible',
  /** Reached, and publishes nothing this corpus can ingest without guessing. */
  'researchedSourceNotIngestible',
  /** Nobody has looked. The commonest honest answer, and it says nothing else. */
  'notResearched',
  /** The subject does not arise here, for a stated structural reason. */
  'notApplicable',
] as const;
export type CoverageStatus = (typeof COVERAGE_STATUSES)[number];

/** Statuses that mean somebody looked. Everything else means nobody has. */
export const RESEARCHED_STATUSES: readonly CoverageStatus[] = [
  'verified',
  'partial',
  'researchedSourceInaccessible',
  'researchedSourceNotIngestible',
  'notApplicable',
];

/** Statuses whose whole content is a research finding, so evidence is required. */
export const EVIDENCE_REQUIRED_STATUSES: readonly CoverageStatus[] = [
  'researchedSourceInaccessible',
  'researchedSourceNotIngestible',
  'notApplicable',
];

/**
 * What a reader is told.
 *
 * The internal vocabulary distinguishes a 403 from a missing bulk export
 * because that difference decides what to do next. A reader does not need the
 * HTTP status; they need to know whether to trust the blank. So the public
 * wording is deliberately coarser — and never says a thing does not exist.
 */
export const PUBLIC_COVERAGE_LABEL: Record<CoverageStatus, string> = {
  verified: 'Covered',
  partial: 'Partly covered',
  researchedSourceInaccessible: 'Official source could not be reached',
  researchedSourceNotIngestible: 'Official source not in a usable form',
  notResearched: 'Not yet indexed',
  notApplicable: 'Not applicable here',
};

/** The layers coverage is evaluated for. */
export const COVERAGE_LAYERS = [
  'authorities',
  'registries',
  'regulations',
  'support',
  'biosecurity',
  'varieties',
  'inputs',
  'extension',
  'markets',
  'soils',
  'trade',
  'economics',
  'climate',
] as const;
export type CoverageLayer = (typeof COVERAGE_LAYERS)[number];

export const COVERAGE_LAYER_LABEL: Record<CoverageLayer, string> = {
  authorities: 'Agricultural authorities',
  registries: 'Official registries',
  regulations: 'Compliance requirements',
  support: 'Support programmes',
  biosecurity: 'Biosecurity listings',
  varieties: 'Variety registrations',
  inputs: 'Input authorisations',
  extension: 'Extension resources',
  markets: 'Market statistics',
  soils: 'Soil survey observations',
  trade: 'Border requirements',
  economics: 'Farm economics figures',
  climate: 'Climate, drought and water values',
};

/** One cell of the coverage matrix. */
export interface CoverageCell {
  layer: CoverageLayer;
  /** ISO 3166-1 alpha-3, or a supranational key such as `EU`. */
  jurisdiction: string;
  jurisdictionName: string;
  status: CoverageStatus;
  /** How many records the corpus actually holds. Derived, never asserted. */
  recordCount: number;
  /** What the reader is told, from PUBLIC_COVERAGE_LABEL. */
  publicLabel: string;
  /** Why the status is what it is. Required for every researched absence. */
  evidence?: {
    note: string;
    sourceIds: string[];
    verifiedAt: string;
    /** Technical detail for the backlog, never rendered to a reader. */
    internalNote?: string;
  };
}

/**
 * A deterministic tier, not a score.
 *
 * A number would imply an ordering finer than the inputs support. These three
 * tiers each answer one question that is either true or false, and the report
 * says which questions a gap answered yes to.
 */
export const GAP_TIERS = ['ready', 'blocked', 'unexamined'] as const;
export type GapTier = (typeof GAP_TIERS)[number];

export const GAP_TIER_LABEL: Record<GapTier, string> = {
  ready: 'An official source is known and nothing blocks reading it',
  blocked: 'An official source is known and something blocks reading it',
  unexamined: 'No official source has been looked for',
};

/** Shown wherever coverage is displayed. */
export const COVERAGE_CAVEAT =
  'This page describes what AgricultureID has indexed, not what exists. A layer shown as not yet indexed means nobody has looked, and never that the thing is absent in that country.';
