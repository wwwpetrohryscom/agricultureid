/**
 * Wave 44 — the research record for an FAO Crop Calendar name that the
 * matcher's contract does not resolve.
 *
 * The queue this describes is computed, not listed: the FAO name universe minus
 * the names an exact title, a unique alternative name or a declared concept
 * mapping already resolves. Two hundred and nineteen names go in; a hundred and
 * sixteen resolve; three are refused as ambiguous by a register the corpus
 * already holds; a hundred are left, and every one of them gets an outcome
 * here.
 *
 * The rule the outcomes exist to enforce is that an FAO label is not a
 * botanical identity. "Coleus dazo" is not the corpus's Hausa potato, "Hanfez"
 * is not a crop at all, and "Bitter eggplant" names two published crops in the
 * same country. None of that is visible in the string, and a matcher that
 * guessed would have got all three wrong in a way nothing downstream could
 * detect.
 */

export const ORPHAN_OUTCOMES = [
  /** The name denotes a crop this corpus already publishes. */
  'MAP_TO_EXISTING_CROP',
  /** The name denotes a group this corpus publishes as a declared concept. */
  'MAP_TO_EXISTING_CONCEPT',
  /** A name for a published crop that the crop did not carry; now it does. */
  'ADD_ALIAS_TO_EXISTING',
  /** A taxon worth holding, verified, with no page of its own. */
  'ADD_DATA_ONLY_IDENTITY',
  /** A taxon already held whose evidence now justifies an article. */
  'PROMOTE_FULL_PROFILE',
  /** A cultivated or harvested form of a crop rather than a taxon. */
  'AGRICULTURAL_FORM',
  /** The label covers several taxa that no single page can carry. */
  'MULTI_TAXON_CONCEPT',
  /** The label names more than one plant and the corpus will not choose. */
  'AMBIGUOUS',
  /** A candidate is identified and the authorities cannot be read on it. */
  'TAXONOMY_UNCERTAIN',
  /** Not an agricultural crop subject this corpus covers. */
  'OUT_OF_SCOPE',
  /** No candidate could be established from any source consulted. */
  'DEFER_RESEARCH',
] as const;
export type OrphanOutcome = (typeof ORPHAN_OUTCOMES)[number];

/**
 * What each outcome commits the corpus to. Stated here because an outcome that
 * means whatever the reader assumes is not a classification.
 */
export const ORPHAN_OUTCOME_MEANING: Record<OrphanOutcome, string> = {
  MAP_TO_EXISTING_CROP:
    'The FAO name and a published crop denote the same plant, and the mapping is carried by an explicit reviewed record rather than by a name the crop claims.',
  MAP_TO_EXISTING_CONCEPT:
    'The FAO item covers a group this corpus publishes as a declared concept, so the calendar it produces is about the group.',
  ADD_ALIAS_TO_EXISTING:
    'The name is a name for a published crop, added to that crop so the matcher resolves it the same way it resolves any other alternative name.',
  ADD_DATA_ONLY_IDENTITY:
    'The taxon is worth holding and does not carry an article; it is added to the identity layer after dual-authority verification.',
  PROMOTE_FULL_PROFILE:
    'The identity was already verified and held; this wave found the agricultural significance and source depth to write an article about it.',
  AGRICULTURAL_FORM:
    'The label names how the crop is grown or harvested, not what it is. The windows belong to one form of a crop and must not be read as the crop.',
  MULTI_TAXON_CONCEPT:
    'The label covers several taxa deliberately, and the corpus holds them separately, so no single destination is truthful.',
  AMBIGUOUS:
    'The label names more than one plant this corpus publishes and nothing in the source distinguishes them.',
  TAXONOMY_UNCERTAIN:
    'A botanical candidate is identified and could not be verified against both authorities, so no identity is added.',
  OUT_OF_SCOPE: 'The label is not a crop subject this corpus covers.',
  DEFER_RESEARCH:
    'No source consulted establishes what plant the label denotes.',
};

/** §17 — research proceeds by cohort so taxonomy reading is reused. */
export const ORPHAN_COHORTS = [
  'cereals-and-millets',
  'pulses',
  'roots-and-tubers',
  'vegetables',
  'tropical-fruits',
  'forage',
  'spices-and-herbs',
  'fibre-and-industrial',
  'regional-crop-concepts',
] as const;
export type OrphanCohort = (typeof ORPHAN_COHORTS)[number];

export interface FaoOrphanResearch {
  /** The label exactly as the FAO dataset publishes it, trailing space and all. */
  faoName: string;
  cohort: OrphanCohort;
  /**
   * Botanical candidates considered, as names.
   *
   * Required for every outcome that names a plant and forbidden for the ones
   * that do not. This is the field that makes §15 checkable: an outcome
   * pointing at a crop must have said which plant it thought the label meant
   * before it pointed anywhere.
   */
  botanicalCandidates: readonly string[];
  outcome: OrphanOutcome;
  /** Where the name resolves, for the outcomes that resolve. */
  resolvesTo?: { type: string; slug: string };
  /**
   * For AGRICULTURAL_FORM: which crop the form belongs to, and what the form
   * is. The crop is a real destination; the form qualifies the windows.
   */
  formOf?: { slug: string; form: string };
  rationale: string;
  sourceIds: readonly string[];
  reviewedAt: string;
}
