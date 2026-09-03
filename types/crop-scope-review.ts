/**
 * Wave 41 — every complex crop concept, given a current explicit state.
 *
 * ## Why "complex" is not an answer
 *
 * Wave 36 left thirty-one crops classified `AGRICULTURAL_CONCEPT_COMPLEX`,
 * `TAXONOMY_COMPLEX` or `DUPLICATES_EXISTING_CONCEPT`. Each of those is a true
 * statement and none of them says what should happen. A crop can sit in
 * "complex" indefinitely while the corpus changes around it, and the label
 * stays true the whole time, which is what makes it useless.
 *
 * Waves 39 and 40 then handed forward eight more: five crops stopped because a
 * neighbouring page had never declared its scope, and three declined for the
 * same reason. Those are the same question asked from the other end.
 *
 * This layer answers all thirty-nine with one of eight states. The states are
 * deliberately not a quality ranking: keeping an umbrella is as much a decision
 * as splitting one, and the brief is right that a useful umbrella page is often
 * more truthful than several misleading species pages.
 *
 * ## What makes the answers checkable
 *
 * Almost every state implies something about the corpus that can be looked up:
 * a candidate kept under an umbrella must actually appear in that umbrella's
 * concept record; a promoted child must actually have a page; an alias-only
 * resolution must actually have a crosswalk entry. The validator recomputes
 * each of those rather than reading the claim, so a review that describes a
 * corpus arrangement that does not exist fails.
 */

export const SCOPE_OUTCOMES = [
  /** The umbrella page covers it, and that is the right answer. */
  'KEEP_UMBRELLA_CONCEPT',
  /** The concept should become several species pages. */
  'SPLIT_INTO_SPECIES',
  /** The right division is by how it is grown or used, not by taxon. */
  'SPLIT_INTO_AGRICULTURAL_FORMS',
  /** Held as a taxon under a concept, with no page of its own. */
  'ADD_CHILD_DATA_ONLY_TAXA',
  /** Written and published as its own page in this wave or an earlier one. */
  'PROMOTE_CHILD_PROFILE',
  /** Folded into a concept that already covers it. */
  'MERGE_WITH_EXISTING_CONCEPT',
  /** The name needs a crosswalk entry and nothing else. */
  'ALIAS_ONLY',
  /** Reviewed, and the question is genuinely open. Says what would settle it. */
  'DEFER_UNRESOLVED',
] as const;
export type ScopeOutcome = (typeof SCOPE_OUTCOMES)[number];

/** Outcomes that assert the candidate sits inside a declared concept. */
export const CONCEPT_BOUND_OUTCOMES: readonly ScopeOutcome[] = [
  'KEEP_UMBRELLA_CONCEPT',
  'ADD_CHILD_DATA_ONLY_TAXA',
  'MERGE_WITH_EXISTING_CONCEPT',
];

/**
 * What a concept review has to look at.
 *
 * The list is the brief's, and it is longer than taxonomy on purpose: the
 * correct model for a crop page is frequently not the botanical one. "Millet"
 * is four genera and one agricultural category; "rapeseed" is two species and
 * one commodity. A review that inspected only the accepted names would get
 * both wrong in the same direction.
 */
export const SCOPE_DIMENSIONS = [
  'accepted-taxonomy',
  'agricultural-usage',
  'commodity-usage',
  'cultivar-groups',
  'species-members',
  'hybrid-members',
  'market-terminology',
  'official-source-terminology',
  'search-intent',
] as const;
export type ScopeDimension = (typeof SCOPE_DIMENSIONS)[number];

/** A review must have looked at at least this many dimensions to count. */
export const MIN_DIMENSIONS_INSPECTED = 4;

export interface CropScopeReview {
  /** The complex candidate: a crop identity slug. */
  slug: string;
  wave: string;
  /**
   * Where this candidate came from. Reconciled against the layer named:
   * a research outcome, a publication review, or an expansion candidate.
   */
  priorState: string;
  outcome: ScopeOutcome;
  /**
   * The concept page it sits under. Required for concept-bound outcomes, and
   * the validator checks the candidate really is a constituent of it.
   */
  conceptSlug?: string;
  dimensionsInspected: readonly ScopeDimension[];
  /** What the review established, in terms specific to this candidate. */
  finding: string;
  /** What would change the answer. Required for every outcome. */
  wouldChangeIf: string;
  sourceIds: readonly string[];
  reviewedAt: string;
}
