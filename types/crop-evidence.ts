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
/**
 * How a commodity's crop scope relates to the crop it is keyed to.
 *
 * The vocabulary was three useful values and a pair of escape hatches, and
 * Wave 42 classified the remaining sixty-one mappings against it and found two
 * relationships it could not express. Both are common and both matter:
 *
 *   - a commodity that covers PART of a crop. "Fresh tomatoes" is not tomato
 *     production; processing tomatoes are most of the world crop and are grown
 *     as a separate crop with separate cultivars and separate machinery.
 *     Counting the fresh series as the crop's market coverage overstates it.
 *   - a commodity whose crop scope is WIDER than the page without naming a
 *     concept. Rice statistics take in Oryza glaberrima where it is grown, and
 *     this corpus publishes African rice separately.
 *
 * With those two added the vocabulary covers the six granularities the program
 * requires: EXACT_CROP, BROADER_CROP_CONCEPT (concept level),
 * BROADER_THAN_CROP, NARROWER_THAN_CROP, AMBIGUOUS and UNRESOLVED.
 */
export const CONCORDANCE_KINDS = [
  /** The commodity is the product of exactly this crop. */
  'EXACT_CROP',
  /** The commodity maps to a multi-taxon concept, not to one plant. */
  'BROADER_CROP_CONCEPT',
  /** The commodity's crop scope takes in crops beyond this one. */
  'BROADER_THAN_CROP',
  /** The commodity covers part of this crop's production, not all of it. */
  'NARROWER_THAN_CROP',
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

/* -------------------------------------------------------------------------- */
/*  Trade ingestion feasibility                                               */
/* -------------------------------------------------------------------------- */

/**
 * Whether a legal instrument can safely become crop-level trade data.
 *
 * Separate from `TradeMappingOutcome`, which asks whether a crop key EXISTS.
 * This asks whether reading it is safe, which is a different question and the
 * one that decides whether anyone should start. An annex entry is a legal
 * requirement: attaching it to the wrong taxon, the wrong jurisdiction or a
 * superseded version is worse than having no trade coverage at all.
 */
export const TRADE_FEASIBILITY_OUTCOMES = [
  /** The instrument can be ingested as it stands, under a stated contract. */
  'SAFE_TO_INGEST',
  /** Part of it can, and the boundary of that part is stated. */
  'PARTIAL_SCOPE_ONLY',
  /** Ingestible, and only with work that is a wave in itself. */
  'REQUIRES_DEDICATED_WAVE',
  /** It should not become crop data at all, for a stated reason. */
  'NOT_SAFE_TO_MODEL',
] as const;
export type TradeFeasibilityOutcome =
  (typeof TRADE_FEASIBILITY_OUTCOMES)[number];

/** The things the study had to establish before it could reach an outcome. */
export const TRADE_FEASIBILITY_DIMENSIONS = [
  'legal-instrument-structure',
  'botanical-scope',
  'origin-destination-conditions',
  'plant-vs-plant-product-distinction',
  'amendments',
  'currentness',
  'supersession',
  'machine-readable-extraction-safety',
] as const;
export type TradeFeasibilityDimension =
  (typeof TRADE_FEASIBILITY_DIMENSIONS)[number];

export interface TradeFeasibilityFinding {
  dimension: TradeFeasibilityDimension;
  /** What was found. Not what is believed. */
  finding: string;
  /** How it was established — a URL fetched, a response observed, a text read. */
  evidence: string;
  /** Whether this dimension alone would block ingestion. */
  blocking: boolean;
}

export interface TradeFeasibilityStudy {
  instrument: string;
  outcome: TradeFeasibilityOutcome;
  findings: readonly TradeFeasibilityFinding[];
  /** What would have to be built before ingestion could start. */
  prerequisites: readonly string[];
  sourceIds: readonly string[];
  assessedAt: string;
}
