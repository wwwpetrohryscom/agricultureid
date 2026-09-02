/**
 * The outcome of researching a crop that AgricultureID holds as a taxon but has
 * not published an article for.
 *
 * ## Why the evidence basis is a field
 *
 * There are 189 candidates and they cannot all receive the same depth of
 * research, so the record says which depth each one got. A crop assessed from
 * its verified identity and its executable cross-layer coverage has been
 * genuinely evaluated — that is real evidence, and it is enough to conclude
 * that nobody should write the article yet. It is NOT enough to conclude that
 * somebody should, which is why promotion requires a source consulted for that
 * specific crop in this wave, and the validator enforces it.
 *
 * The alternative — claiming deep research on all 189 — would be the exact
 * failure this program keeps finding: a claim about work done that nothing
 * can check.
 */

export const RESEARCH_OUTCOMES = [
  /** Evidence supports a substantive article and one was written. */
  'PROMOTE_FULL_PROFILE',
  /** Evidence would support an article; writing it is deferred deliberately. */
  'READY_BUT_DEFER_EDITORIAL',
  /** The taxon entry answers what a reader needs; an article would add nothing. */
  'DATA_ONLY_SUFFICIENT',
  /** Not enough crop-specific evidence found to write to standard. */
  'NEEDS_MORE_EVIDENCE',
  /** Identity is unsettled enough that a page would mislead. */
  'TAXONOMY_COMPLEX',
  /** The agricultural concept, not the taxonomy, is unresolved. */
  'AGRICULTURAL_CONCEPT_COMPLEX',
  /** Real crop, real evidence, low value to this corpus's readers for now. */
  'LOW_EDITORIAL_PRIORITY',
  /** Already covered by a published concept or crop page. */
  'DUPLICATES_EXISTING_CONCEPT',
  /** Not an agricultural crop in the sense this corpus publishes. */
  'OUT_OF_SCOPE',
  /** Should not be published at all, for a stated reason. */
  'REFUSE',
] as const;
export type ResearchOutcome = (typeof RESEARCH_OUTCOMES)[number];

/** Outcomes that mean an article now exists. */
export const PROMOTING_OUTCOMES: readonly ResearchOutcome[] = [
  'PROMOTE_FULL_PROFILE',
];

/**
 * Outcomes that assert the evidence exists. These may not be used to describe
 * an editorial decision, and the reverse: an editorial deferral may not be
 * filed as an evidence failure. Keeping the two apart is the point of having
 * READY_BUT_DEFER_EDITORIAL at all.
 */
export const EVIDENCE_SUFFICIENT_OUTCOMES: readonly ResearchOutcome[] = [
  'PROMOTE_FULL_PROFILE',
  'READY_BUT_DEFER_EDITORIAL',
  'DATA_ONLY_SUFFICIENT',
];

export const EVIDENCE_BASES = [
  /** Dual-authority botanical identity already verified by an earlier wave. */
  'CORPUS_VERIFIED_IDENTITY',
  /** Cross-layer coverage computed from the corpus at research time. */
  'EXECUTABLE_COVERAGE',
  /** A source was consulted for this specific crop during this wave. */
  'SOURCE_CONSULTED',
] as const;
export type EvidenceBasis = (typeof EVIDENCE_BASES)[number];

/**
 * Why a crop matters, in words rather than in tonnage.
 *
 * Global production volume is the wrong sole measure and the brief says so:
 * a crop can be regionally critical, nutritionally significant, agronomically
 * important in a rotation, or a subsistence staple in places that publish no
 * statistics. This vocabulary makes the kind of importance explicit so that a
 * reader can disagree with the judgement rather than with a number.
 */
export const SIGNIFICANCE_KINDS = [
  'globally-traded',
  'regionally-staple',
  'nutritionally-distinct',
  'agronomic-role',
  'subsistence-important',
  'industrially-used',
  'minor-or-niche',
] as const;
export type SignificanceKind = (typeof SIGNIFICANCE_KINDS)[number];

export interface CropResearchRecord {
  /** Crop identity slug. */
  slug: string;
  /** Cohort the crop was researched in. */
  cohort: string;
  outcome: ResearchOutcome;
  /** The kinds of importance this crop has, if any. */
  significance: readonly SignificanceKind[];
  /** What the research established, in the researcher's own words. */
  finding: string;
  /** What would change the outcome. Required for every non-promoting outcome. */
  wouldChangeIf?: string;
  evidenceBasis: readonly EvidenceBasis[];
  /** Source ids consulted for this crop. Required when SOURCE_CONSULTED. */
  sourceIds?: readonly string[];
  researchedAt: string;
}
