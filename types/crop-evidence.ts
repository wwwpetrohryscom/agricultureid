/**
 * Why a layer covers the crops it covers, and why it does not cover the rest.
 *
 * ## Why "missing" is not allowed here
 *
 * A crop with no calendar record and a crop whose calendar source has gone
 * offline are both, in the coverage matrix, a zero. They are not the same
 * situation and they call for different work: one needs research, one needs a
 * new source, one needs nothing because no such record exists anywhere. The
 * vocabulary below exists so the matrix can say which.
 *
 * ## Why assessment is per layer rather than per crop
 *
 * 165 published crops across 11 layers is 1,815 cells, and manufacturing 1,815
 * gap records would produce a great deal of text and almost no information,
 * because the reason is nearly always a property of the LAYER. Calendar
 * coverage stops at six crops because one source covered six crops. Recording
 * that once is true; recording it 159 times as a fact about each crop is not.
 *
 * Per-crop exceptions are recorded where a specific crop's gap genuinely
 * differs from its layer's.
 */

export const GAP_REASONS = [
  /** An authoritative source exists and has not been brought in. */
  'SOURCE_EXISTS_NOT_INGESTED',
  /** The source is ingested; nothing joins its records to crops. */
  'SOURCE_EXISTS_NOT_MAPPED',
  /** The source exists and cannot be reached — offline, paywalled, blocked. */
  'SOURCE_INACCESSIBLE',
  /** The source exists in a form that cannot be parsed reliably. */
  'SOURCE_NOT_MACHINE_INGESTIBLE',
  /** Searched, and no authoritative source was found. */
  'NO_VERIFIED_SOURCE_FOUND',
  /** Nobody has looked. An honest state, and distinct from having looked. */
  'NOT_RESEARCHED',
  /** The layer does not apply to this crop or group. */
  'NOT_APPLICABLE',
  /** Deliberately outside what this corpus publishes. */
  'OUT_OF_SCOPE',
  /** The situation is genuinely unclear. */
  'UNKNOWN',
] as const;
export type GapReason = (typeof GAP_REASONS)[number];

/** Reasons that assert somebody looked. Using one without evidence is a lie. */
export const RESEARCHED_GAP_REASONS: readonly GapReason[] = [
  'SOURCE_EXISTS_NOT_INGESTED',
  'SOURCE_EXISTS_NOT_MAPPED',
  'SOURCE_INACCESSIBLE',
  'SOURCE_NOT_MACHINE_INGESTIBLE',
  'NO_VERIFIED_SOURCE_FOUND',
];

export interface LayerEvidenceAssessment {
  layer: string;
  /** Crops the layer reaches, recomputed at validation time and compared. */
  reachesAtAssessment: number;
  reason: GapReason;
  /** What was actually looked at. */
  finding: string;
  /** What would raise coverage, concretely. */
  wouldRaiseCoverageBy: string;
  /** Sources audited while making this assessment. */
  sourceIds?: readonly string[];
  assessedAt: string;
}

/* -------------------------------------------------------------------------- */
/*  The crop↔commodity concordance, classified                                */
/* -------------------------------------------------------------------------- */

/**
 * Wave 34 reversed `sourceCrop` into an index and treated every edge as equal.
 * They are not equal: "green coffee" names the coffee CONCEPT, which covers
 * three species, so a price series reached through it is about coffee in
 * general and not about arabica. Treating that as an exact crop mapping would
 * attribute a series to a plant it is not about.
 */
export const CONCORDANCE_KINDS = [
  /** The commodity is the product of exactly this crop. */
  'EXACT_CROP',
  /** The commodity maps to a multi-taxon concept, not to one plant. */
  'BROADER_CROP_CONCEPT',
  /** The commodity comes from an animal. */
  'ANIMAL_PRODUCT',
  /** More than one crop could be meant. */
  'AMBIGUOUS',
  /** Named crop does not resolve. */
  'UNRESOLVED',
] as const;
export type ConcordanceKind = (typeof CONCORDANCE_KINDS)[number];

export interface ConcordanceClassification {
  commoditySlug: string;
  kind: ConcordanceKind;
  /** The crop or concept slug the commodity names, when it names one. */
  cropSlug?: string;
  note: string;
}

/* -------------------------------------------------------------------------- */
/*  Trade                                                                     */
/* -------------------------------------------------------------------------- */

export const TRADE_MAPPING_OUTCOMES = [
  'CROP_KEY_AVAILABLE',
  'COMMODITY_KEY_AVAILABLE',
  'BOTANICAL_SCOPE_AVAILABLE',
  'BROAD_SUBJECT_ONLY',
  'NO_SAFE_MAPPING',
] as const;
export type TradeMappingOutcome = (typeof TRADE_MAPPING_OUTCOMES)[number];

export interface TradeMappingAssessment {
  outcome: TradeMappingOutcome;
  finding: string;
  /** What was examined to reach it. */
  examined: readonly string[];
  wouldChangeIf: string;
  assessedAt: string;
}
