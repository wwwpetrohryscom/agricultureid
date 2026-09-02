/**
 * Every pair of crop articles the similarity metric flags, and what a human
 * found when they read them — plus the pairs that used to be flagged and are
 * not any more, so a rewrite cannot silently come undone.
 *
 * ## What Wave 35 changed about this register
 *
 * The previous program flagged 17 pairs and called all 17 "reused prose". That
 * was too blunt in two different directions, and reading the actual shared runs
 * separated them:
 *
 *   Five pairs were flagged ONLY because they shared AgricultureID's own
 *   standing language — the refusal to publish universal fertiliser rates
 *   appears in 148 of 160 articles. Two pages agreeing on a corpus-wide policy
 *   is the corpus being consistent. Those phrases are now registered in
 *   lib/crops/editorial-boilerplate.ts and excluded before comparison.
 *
 *   Ten pairs had genuinely copied crop-specific agronomy underneath: the same
 *   sentence about waterlogging on five orchard pages, the same sentence about
 *   aphids on three stone fruits, the same irrigation paragraph, the same
 *   caneberry root description. Those were rewritten from sources, with facts
 *   that actually differ between the crops.
 *
 * Two pairs remain flagged and are correct to remain so.
 */

export const SIMILARITY_VERDICTS = [
  /** True of both crops and unremarkable — a shared list of end uses, say. */
  'GENERIC_BUT_FACTUALLY_VALID',
  /** A definition or key-fact pair that is identical because the fact is. */
  'SHARED_DEFINITION',
  /** AgricultureID's own editorial or safety policy, said the same way. */
  'LEGITIMATE_STANDARD_LANGUAGE',
  /** Crop-specific agronomy copied between crops. Debt; must be rewritten. */
  'COPIED_CROP_SPECIFIC_PROSE',
  /** Reuse that makes a claim false or misleading for one of the crops. */
  'MISLEADING_REUSE',
] as const;
export type SimilarityVerdict = (typeof SIMILARITY_VERDICTS)[number];

/** Verdicts that are debt: a pair carrying one must not survive a wave. */
export const DEBT_VERDICTS: readonly SimilarityVerdict[] = [
  'COPIED_CROP_SPECIFIC_PROSE',
  'MISLEADING_REUSE',
];

export interface ReviewedSimilarPair {
  a: string;
  b: string;
  /** Five-word-shingle overlap recorded at review, standing language excluded. */
  overlap: number;
  /** Longest identical word run recorded at review. May not grow. */
  longestRun: number;
  verdict: SimilarityVerdict;
  reason: string;
  reviewedAt: string;
}

export const REVIEWED_SIMILAR_PAIRS: readonly ReviewedSimilarPair[] = [
  {
    a: 'lemon',
    b: 'lime',
    overlap: 0.176,
    longestRun: 34,
    verdict: 'LEGITIMATE_STANDARD_LANGUAGE',
    reason:
      'The shared run is the corpus policy on production figures — that volumes and cultivars change and should be taken from FAOSTAT and national statistics rather than assumed. It appears in 44 of 160 crop articles, which is short of the share required to register it as standing language, so it stays visible to the metric. Rewriting it per crop would make a standing policy look like a citrus finding.',
    reviewedAt: '2026-09-02',
  },
  {
    a: 'blackberry',
    b: 'raspberry',
    overlap: 0.13,
    longestRun: 29,
    verdict: 'GENERIC_BUT_FACTUALLY_VALID',
    reason:
      'The shared run is a list of end uses — fresh market, IQF for manufacturing, jam and juice, bakery fillings, flavour extracts. Both caneberries genuinely go to those same markets in those same forms, and differentiating the sentence would make it less accurate rather than less repetitive. The agronomic prose that used to be shared here was rewritten in Wave 35.',
    reviewedAt: '2026-09-02',
  },
];

export interface ResolvedSimilarPair {
  a: string;
  b: string;
  /** Longest identical run before the rewrite. */
  runBefore: number;
  /** What the shared text was, and what replaced it. */
  wasSharing: string;
  resolvedAt: string;
}

/**
 * Pairs that carried copied crop-specific prose and no longer do.
 *
 * The gate asserts none of these is flagged again. A register of current debt
 * alone would let a rewrite be quietly reverted and reappear as a new pair
 * somebody would then have to review from scratch; recording the resolution
 * makes a regression name itself.
 */
export const RESOLVED_SIMILAR_PAIRS: readonly ResolvedSimilarPair[] = [
  {
    a: 'peach',
    b: 'plum',
    runBefore: 73,
    wasSharing:
      'A soil-and-waterlogging paragraph, an aphid/fruit-fly/scale pest sentence, and an orchard irrigation paragraph, all identical. Replaced with peach tree short life and its predisposing cluster, plum pox virus and why aphids matter on plum, and the crop-specific water-sensitive periods.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'cherry',
    b: 'plum',
    runBefore: 59,
    wasSharing:
      'The same orchard soil, pest and irrigation paragraphs. Cherry now carries its rootstock-mediated drainage tolerance, spotted wing drosophila, and rain-cracking; plum carries sharka and its crop-load water sensitivity.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'cherry',
    b: 'peach',
    runBefore: 59,
    wasSharing:
      'The same orchard soil, pest and irrigation paragraphs, now differentiated on both pages.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'apple',
    b: 'pear',
    runBefore: 47,
    wasSharing:
      'A shared soil and replant-history paragraph. Apple now describes apple replant disease as the lesion-nematode-and-fungal complex it is; pear describes quince rootstock, interstem compatibility and lime-induced chlorosis.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'apple',
    b: 'peach',
    runBefore: 35,
    wasSharing:
      'The orchard soil and replant paragraph, plus standing language. Both rewritten; the standing language is now excluded from comparison.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'apricot',
    b: 'peach',
    runBefore: 42,
    wasSharing:
      'Shared orchard soil and replant text plus standing language. Resolved by the peach rewrite and by excluding standing language.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'peach',
    b: 'pear',
    runBefore: 35,
    wasSharing:
      'Standing language only, once the orchard paragraphs were rewritten.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'ginger',
    b: 'turmeric',
    runBefore: 31,
    wasSharing:
      'A shared clean-planting-material management sentence. Ginger now describes seed rhizome selection as the control point for soil-borne rot; turmeric describes curcuminoid content and the boiling-and-curing step ginger does not have.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'sage',
    b: 'thyme',
    runBefore: 41,
    wasSharing:
      'A shared cultivation-context sentence and a shared drought sentence. Sage now describes its slow-drying thick leaf; thyme describes its thymol, carvacrol, linalool and geraniol chemotypes.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'rosemary',
    b: 'sage',
    runBefore: 39,
    wasSharing:
      'The same drought sentence. Rosemary now describes its multi-year woody stand and what a winter loss costs.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'broccoli',
    b: 'cauliflower',
    runBefore: 30,
    wasSharing:
      'A shared clubroot and soil-pH paragraph. Broccoli now describes its narrow bud-tightness harvest window; cauliflower describes temperature-dependent curd initiation, buttoning and riciness.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'chickpea',
    b: 'lentil',
    runBefore: 36,
    wasSharing:
      'A shared supplemental-irrigation and evapotranspiration paragraph. Chickpea now describes deep rooting and ascochyta blight; lentil describes low pod set, lodging and the harvest losses that follow.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'barley',
    b: 'wheat',
    runBefore: 31,
    wasSharing:
      'A shared establishment and seedbed paragraph. Barley now describes the malting-versus-feed specification that settles its agronomy before sowing.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'hazelnut',
    b: 'walnut',
    runBefore: 42,
    wasSharing:
      'Standing language only — the fertiliser policy, the production-figures policy and the control-product qualifier. No crop-specific prose was shared, and nothing needed rewriting.',
    resolvedAt: '2026-09-02',
  },
  {
    a: 'garlic',
    b: 'onion',
    runBefore: 35,
    wasSharing:
      'Standing language only. Flagged by a metric that had not been told the corpus repeats its own policies on purpose.',
    resolvedAt: '2026-09-02',
  },
];

export const REVIEWED_PAIR_KEY = (a: string, b: string): string =>
  [a, b].sort().join('::');

export const REVIEWED_PAIRS = new Map(
  REVIEWED_SIMILAR_PAIRS.map((p) => [REVIEWED_PAIR_KEY(p.a, p.b), p]),
);

export const RESOLVED_PAIRS = new Map(
  RESOLVED_SIMILAR_PAIRS.map((p) => [REVIEWED_PAIR_KEY(p.a, p.b), p]),
);
