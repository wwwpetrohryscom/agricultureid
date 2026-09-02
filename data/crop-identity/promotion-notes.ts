/**
 * Editorial priority for writing the next crop articles.
 *
 * ## Why this is a hand-written register and not a computed score
 *
 * The qualification engine can measure taxonomy, agricultural role, content
 * depth and cross-layer coverage. It cannot measure whether a crop matters.
 *
 * That is not a gap to be closed with a proxy. Every proxy available here is
 * wrong in a way that would quietly distort the queue: production tonnage
 * favours commodity cereals over crops feeding hundreds of millions in regions
 * that report no statistics; the corpus's own coverage favours whatever was
 * written first; and the amount of structured evidence a crop already has is
 * uniformly ZERO for all 195 data-only taxa, because every cross-layer
 * relation in AgricultureID is keyed to a published crop page.
 *
 * So importance is recorded here, by hand, with a reason and a source, and the
 * engine treats its absence as absence rather than inventing a number.
 *
 * An empty register is a valid state. It means nobody has yet said which crop
 * should be written next, and the queue then orders on what can be computed.
 */

export interface PromotionNote {
  /** Crop identity slug. */
  slug: string;
  /** Why this crop is worth writing next, in one sentence. */
  reason: string;
  /** Source id backing the significance claim. */
  sourceId: string;
  /** ISO date the note was made. */
  notedAt: string;
  /**
   * Set when the crop was actually promoted to a full profile.
   *
   * A note does not stop being useful once acted on — it becomes the record of
   * why the page exists. The validator reads this field in BOTH directions: a
   * note without it must name a crop that has no page, and a note with it must
   * name a crop that does. Neither a forgotten candidate nor a page whose
   * stated reason was never carried out can sit here unnoticed.
   */
  promotedAt?: string;
  /**
   * What the per-crop review established before the article was written.
   *
   * Recorded because the decision NOT to promote is as much a result as the
   * decision to promote, and both need to be legible later.
   */
  promotionReview?: {
    /** Whether enough independently verifiable material existed to write to standard. */
    materialSufficient: boolean;
    /** The page the crop would otherwise be conflated with, and what separates them. */
    distinctFrom: string;
    /**
     * That page's slug, when it is a published crop.
     *
     * Structured because it carries an obligation: a reader who arrives at the
     * umbrella page must be able to reach the species that was split out of it.
     * The validator enforces the link in both directions, so a promotion cannot
     * leave a page stranded with nothing pointing at it.
     */
    distinctFromSlug?: string;
    /** What the reviewer checked, in their own words. */
    finding: string;
  };
}

export const PROMOTION_NOTES: readonly PromotionNote[] = [
  {
    slug: 'durum-wheat',
    reason:
      'Durum is the wheat of pasta and couscous and is grown as a distinct crop with its own agronomy, disease profile and grading system. AgricultureID publishes a wheat article covering Triticum aestivum and holds durum only as a taxon, so the distinction the trade turns on is currently invisible.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'wheat (Triticum aestivum)',
      distinctFromSlug: 'wheat',
      finding:
        'Ploidy, milling behaviour, grading factors, Fusarium susceptibility and cadmium accumulation all differ from bread wheat and are documented in the durum-specific literature. Nothing in the article restates the wheat page; the two share no passage above the review threshold.',
    },
  },
  {
    slug: 'arabica-coffee',
    reason:
      'The coffee article is a genus concept by design; arabica and robusta differ in ploidy, self-fertility, altitude and rust susceptibility, and almost every agronomic statement about coffee is true of one and false of the other.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'coffee (the genus concept)',
      distinctFromSlug: 'coffee',
      finding:
        'Tetraploidy, self-fertility, the highland thermal window and rust epidemiology are species-level facts that the genus article cannot state without being wrong for robusta. Written from the species literature and checked against the robusta article for reused prose.',
    },
  },
  {
    slug: 'robusta-coffee',
    reason:
      'The other half of the coffee crop, and the one that carries most soluble production. Held only as a taxon.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'coffee (the genus concept) and arabica-coffee',
      distinctFromSlug: 'coffee',
      finding:
        'Self-incompatibility forces clonal propagation and multi-clone field design — a management reality with no arabica counterpart — and coffee wilt replaces leaf rust as the defining disease. Deliberately written on the axes where the two species diverge so the pair does not become a template.',
    },
  },
  {
    slug: 'upland-cotton',
    reason:
      'Roughly nine tenths of world cotton. The cotton article is a genus concept covering four species, so the species that dominates production has no page of its own.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'cotton (the genus concept covering four species)',
      distinctFromSlug: 'cotton',
      finding:
        'Staple class, ginning method and the Bt pest complex are specific to G. hirsutum, and the cotton article covers four species at once. Fibre classing and cut-out management have no genus-level equivalent.',
    },
  },
  {
    slug: 'finger-millet',
    reason:
      'A staple across the Horn of Africa and southern India with a distinct calendar, storage behaviour and nutritional profile. The corpus publishes pearl millet under the name "millet"; finger millet is a different genus.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'millet (published as pearl millet)',
      distinctFromSlug: 'millet',
      finding:
        "A different genus with different spike morphology, a different agronomic niche, blast rather than downy mildew as the dominant disease, and a grain calcium content and storage life that are the crop's whole point. Conflation with pearl millet is the specific error this page corrects.",
    },
  },
  {
    slug: 'white-yam',
    reason:
      'The principal cultivated yam of West Africa. The yam article is a species complex by design, so the species that most yam production actually is has no page.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: false,
      distinctFrom:
        'yam (the corpus concept covering several Dioscorea species)',
      finding:
        'Reviewed for Wave 32 and NOT promoted. White yam is the species behind most West African yam production, and the material to write it exists. The obstacle is identity, not evidence: the corpus publishes "yam" as a deliberate multi-species concept, and the qualification engine holds this taxon at P4_IDENTITY_COMPLEX. Splitting one species out of that concept changes what the existing page means, and doing it for D. rotundata alone while D. alata and D. cayenensis stay inside the concept would leave the page incoherent. The decision belongs with the umbrella-term work in Wave 33, not with a promotion.',
    },
  },
  {
    slug: 'red-clover',
    reason:
      'One of the two most widely sown forage legumes in temperate agriculture, and a nitrogen-fixing rotation crop in its own right. The corpus publishes alfalfa and holds red clover only as a taxon.',
    sourceId: 'fao-land-water',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom: 'alfalfa',
      distinctFromSlug: 'alfalfa',
      finding:
        'Short deliberate stand life, crown-bud regrowth that makes cutting height critical, the oestrogenic isoflavone restriction for ewes, and a low-sugar high-buffering ensiling problem are all specific to red clover and absent from the alfalfa page.',
    },
  },
  {
    slug: 'perennial-ryegrass',
    reason:
      'The dominant sown grass of temperate pasture systems, and the species most forage agronomy is written about. No published forage grass article exists.',
    sourceId: 'fao-land-water',
    notedAt: '2026-09-02',
    promotedAt: '2026-09-02',
    promotionReview: {
      materialSufficient: true,
      distinctFrom:
        'no existing page — the corpus published no sown forage grass',
      finding:
        'Heading date, ploidy and endophyte strain are the three descriptors the whole temperate grazing sector selects on, and none was represented anywhere in the corpus. Checked against alfalfa and red clover for reused prose.',
    },
  },
];

export const PROMOTION_NOTE_BY_SLUG = new Map(
  PROMOTION_NOTES.map((n) => [n.slug, n]),
);
