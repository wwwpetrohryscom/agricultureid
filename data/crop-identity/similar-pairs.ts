/**
 * Every pair of crop articles that the similarity metric flags, and what a
 * human found when they read them.
 *
 * The metric on its own produces a number, and a number nobody has to account
 * for is a number that gets ignored — which is exactly what happened when this
 * layer was first built: seventeen pairs were flagged, reported, and passed
 * straight through the gate. This register is the accounting. Every flagged
 * pair must appear here with a verdict and a reason, so a NEW pair cannot
 * appear without someone looking at it, and the debt already in the corpus
 * cannot quietly grow.
 *
 * The honest finding, recorded rather than explained away: all seventeen are
 * reused prose, not shared vocabulary. Seven of them share one sentence —
 * "fertilizer rates timing and forms should follow local leaf and soil analysis
 * and regional guidance" — written once and carried across the orchard pages.
 * The pages are not templated as wholes; they are hand-authored articles with
 * a handful of shared paragraphs. Rewriting those paragraphs is content work,
 * and it is deliberately NOT done here: Wave 31 builds the instrument and
 * records what it measures. Nothing about this register deletes or rewrites a
 * page.
 */

export type SimilarityVerdict =
  /** A run of identical prose. Recorded as debt, to be rewritten. */
  | 'reused-passage'
  /** Overlap is genuinely shared terminology, with no copied sentence. */
  | 'domain-vocabulary';

export interface ReviewedSimilarPair {
  a: string;
  b: string;
  /** Five-word-shingle overlap recorded at review. */
  overlap: number;
  /** Longest identical word run recorded at review. May not grow. */
  longestRun: number;
  verdict: SimilarityVerdict;
  reason: string;
  reviewedAt: string;
}

export const REVIEWED_SIMILAR_PAIRS: readonly ReviewedSimilarPair[] = [
  {
    a: 'peach',
    b: 'plum',
    overlap: 0.2419,
    longestRun: 73,
    verdict: 'reused-passage',
    reason:
      'Both stone-fruit pages carry the same spring-frost paragraph and the same aphid/fruit-fly pest sentence. The horticulture is genuinely close, but 73 consecutive identical words is reused prose, not convergent description.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'blackberry',
    b: 'raspberry',
    overlap: 0.229,
    longestRun: 62,
    verdict: 'reused-passage',
    reason:
      'Two Rubus pages sharing the standing fertiliser-guidance sentence plus a mechanical-harvest passage written once for caneberries and used on both.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'cherry',
    b: 'plum',
    overlap: 0.2269,
    longestRun: 59,
    verdict: 'reused-passage',
    reason:
      'The shared run is the fertiliser-guidance sentence carried by most of the orchard pages, extended here by a common pest paragraph.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'lemon',
    b: 'lime',
    overlap: 0.1931,
    longestRun: 34,
    verdict: 'reused-passage',
    reason:
      'The shared run is the boilerplate caveat about production volumes, cultivars and trade patterns changing by region — a disclaimer reused verbatim rather than a description of either citrus.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'apple',
    b: 'pear',
    overlap: 0.1841,
    longestRun: 47,
    verdict: 'reused-passage',
    reason:
      'Two pome-fruit pages sharing the fertiliser-guidance sentence and a waterlogging/rooting passage.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'cherry',
    b: 'peach',
    overlap: 0.1795,
    longestRun: 59,
    verdict: 'reused-passage',
    reason:
      'Same orchard fertiliser-guidance sentence and pest paragraph as the other stone-fruit pairs.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'ginger',
    b: 'turmeric',
    overlap: 0.1612,
    longestRun: 31,
    verdict: 'reused-passage',
    reason:
      'Both rhizome pages open their disease section with the same clean-planting-material sentence.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'broccoli',
    b: 'cauliflower',
    overlap: 0.1445,
    longestRun: 30,
    verdict: 'reused-passage',
    reason:
      'Two Brassica oleracea cultivar groups sharing a clubroot-persistence passage. The agronomy is legitimately shared — they are the same species — but the sentence is still reused wording.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'sage',
    b: 'thyme',
    overlap: 0.1442,
    longestRun: 41,
    verdict: 'reused-passage',
    reason:
      'Two Lamiaceae herb pages sharing the aroma-versus-vegetative-growth passage and the fertiliser-guidance sentence.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'chickpea',
    b: 'lentil',
    overlap: 0.139,
    longestRun: 36,
    verdict: 'reused-passage',
    reason: 'Two cool-season pulses sharing a supplemental-irrigation passage.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'barley',
    b: 'wheat',
    overlap: 0.1384,
    longestRun: 31,
    verdict: 'reused-passage',
    reason:
      'Two small-grain cereals sharing an establishment/seedbed passage. Closest to legitimate shared agronomy of any pair here, and still a 31-word identical run.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'rosemary',
    b: 'sage',
    overlap: 0.1358,
    longestRun: 39,
    verdict: 'reused-passage',
    reason:
      'The fertiliser-guidance sentence again, in its soil-test rather than leaf-analysis variant.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'hazelnut',
    b: 'walnut',
    overlap: 0.1348,
    longestRun: 42,
    verdict: 'reused-passage',
    reason: 'Two nut pages sharing the production-statistics disclaimer.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'apple',
    b: 'peach',
    overlap: 0.1316,
    longestRun: 35,
    verdict: 'reused-passage',
    reason:
      'The orchard fertiliser-guidance sentence, shared across pome and stone fruit alike.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'apricot',
    b: 'peach',
    overlap: 0.1215,
    longestRun: 42,
    verdict: 'reused-passage',
    reason:
      'Same orchard fertiliser-guidance sentence, plus a replant-history passage.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'peach',
    b: 'pear',
    overlap: 0.1209,
    longestRun: 35,
    verdict: 'reused-passage',
    reason: 'The orchard fertiliser-guidance sentence.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'garlic',
    b: 'onion',
    overlap: 0.1202,
    longestRun: 35,
    verdict: 'reused-passage',
    reason:
      'Two Allium pages sharing a nutrient-requirement sentence and the fertiliser-guidance sentence.',
    reviewedAt: '2026-09-02',
  },
];

export const REVIEWED_PAIR_KEY = (a: string, b: string): string =>
  [a, b].sort().join('::');

export const REVIEWED_PAIRS = new Map(
  REVIEWED_SIMILAR_PAIRS.map((p) => [REVIEWED_PAIR_KEY(p.a, p.b), p]),
);
