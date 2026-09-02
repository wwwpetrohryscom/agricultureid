/**
 * The outcome of putting a crop that was ready to publish through an actual
 * publication decision.
 *
 * ## Why this layer exists separately from the research layer
 *
 * Wave 36 answered a different question: is there enough evidence to write
 * about this crop? Fifty-four crops came back `READY_BUT_DEFER_EDITORIAL` —
 * evidence sufficient, writing deferred. That is an honest answer and it is
 * also a queue, and a queue nobody ever returns to is indistinguishable from a
 * refusal that was never written down.
 *
 * This layer records the return. Each ready crop gets one decision, and the
 * decision is not "publish" by default: readiness is a statement about evidence
 * and says nothing about whether the article can actually be written to
 * standard, whether its scope is settled, or whether publishing it costs
 * another page its own name in search.
 *
 * ## Why each field is checkable rather than declarative
 *
 * Every field below is something a validator can put against live corpus state:
 *
 *   outcome          reconciled against whether the page actually exists
 *   differentiator   a verbatim claim that must be IN this article and NOT in
 *                    the neighbouring article it names
 *   scope            a granularity that must be consistent with the identity's
 *                    taxonomic rank and with which other crops share its name
 *   searchReview     queries that are RUN, not described
 *
 * A review that cannot be contradicted by the corpus is not a review.
 */

export const PUBLICATION_OUTCOMES = [
  /** The article was written and published in this wave. */
  'PUBLISHED',
  /** Still ready, still deliberately not written. The deferral is renewed. */
  'STILL_READY_DEFERRED',
  /** Research during this wave found evidence that changes the earlier answer. */
  'BLOCKED_NEW_EVIDENCE',
  /** What the page would cover is unsettled against a page the corpus holds. */
  'BLOCKED_SCOPE',
  /** Publishing would take a name from a page that has the better claim to it. */
  'BLOCKED_SEARCH_COLLISION',
  /** The crop-specific material found will not carry an article to standard. */
  'BLOCKED_CONTENT_DEPTH',
  /** The right page is a concept covering several taxa, not this taxon. */
  'RECLASSIFIED_CONCEPT',
  /** The taxon record answers what a reader needs; no article should follow. */
  'RECLASSIFIED_DATA_ONLY',
] as const;
export type PublicationOutcome = (typeof PUBLICATION_OUTCOMES)[number];

/** The one outcome that asserts a page now exists. */
export const PUBLISHING_OUTCOMES: readonly PublicationOutcome[] = ['PUBLISHED'];

/** Outcomes that assert the crop was stopped rather than deferred or reclassified. */
export const BLOCKING_OUTCOMES: readonly PublicationOutcome[] = [
  'BLOCKED_NEW_EVIDENCE',
  'BLOCKED_SCOPE',
  'BLOCKED_SEARCH_COLLISION',
  'BLOCKED_CONTENT_DEPTH',
];

/**
 * How the page's subject relates to the taxon the corpus keys it to.
 *
 * The distinction this vocabulary exists to prevent: a foreign key resolving is
 * not proof that the relationship is exact. Spelt's identity resolves cleanly
 * to a taxon whose accepted name begins "Triticum aestivum" — the same two
 * words as wheat's whole accepted name. The link is valid and the relationship
 * is not equality, and only a declared granularity makes that difference
 * visible to anything downstream.
 */
export const SCOPE_GRANULARITIES = [
  /** The page covers exactly the taxon it is keyed to, and no other page shares it. */
  'EXACT_ENTITY',
  /** The page covers a group of taxa deliberately, as a concept. */
  'CONCEPT_LEVEL',
  /** The page's subject is wider than the taxon it is keyed to. */
  'BROADER_THAN_ENTITY',
  /** The page covers an infraspecific taxon of a species another record holds. */
  'NARROWER_THAN_ENTITY',
  /** The name denotes different taxa in different sources and is not resolved. */
  'AMBIGUOUS',
  /** The scope question has been identified and not yet answered. */
  'UNRESOLVED',
] as const;
export type ScopeGranularity = (typeof SCOPE_GRANULARITIES)[number];

/**
 * A claim that carries the article's reason to exist.
 *
 * The test is deliberately blunt: take the sentence and move it to a
 * neighbouring crop's page. If it is still true there, the article has not yet
 * said anything that required writing. `falseFor` names the neighbour the claim
 * fails on, and the validator checks the claim is present here and absent
 * there — which does not prove the claim is false for that crop, but does
 * prove the two pages are not saying the same thing.
 */
export interface Differentiator {
  /** Verbatim text from this crop's summary, introduction or sections. */
  claim: string;
  /** A published crop the claim would be wrong or misleading on. */
  falseFor: string;
}

export interface ScopeReview {
  granularity: ScopeGranularity;
  /** What the page covers, and what it does not. */
  statement: string;
  /** Crop slugs whose name or taxon overlaps this one. Recomputed, not trusted. */
  collidesWith?: readonly string[];
}

/**
 * A search check expressed as an executable expectation.
 *
 * Recorded as data rather than as prose because "we reviewed search" is not a
 * finding. The validator runs the query against the live index built from the
 * live corpus, so a later wave that breaks the result breaks this gate.
 */
export interface SearchCheck {
  query: string;
  /** Exact title that must be the top result. */
  mustWin?: string;
  /** Titles that must not be the top result. */
  mustNotWin?: readonly string[];
}

export interface CropPublicationReview {
  /** Crop identity slug. Must be one the research campaign marked ready. */
  slug: string;
  wave: string;
  outcome: PublicationOutcome;
  /** Required when the outcome is PUBLISHED. */
  differentiator?: Differentiator;
  scope: ScopeReview;
  /** At least one for a published crop. Run, not described. */
  searchReview: readonly SearchCheck[];
  /** Source ids consulted for this crop during this wave. */
  sourcesConsulted: readonly string[];
  /** Required for every outcome other than PUBLISHED. */
  blockedReason?: string;
  reviewedAt: string;
}
