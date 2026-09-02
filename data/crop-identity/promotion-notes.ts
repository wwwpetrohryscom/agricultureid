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
}

export const PROMOTION_NOTES: readonly PromotionNote[] = [
  {
    slug: 'durum-wheat',
    reason:
      'Durum is the wheat of pasta and couscous and is grown as a distinct crop with its own agronomy, disease profile and grading system. AgricultureID publishes a wheat article covering Triticum aestivum and holds durum only as a taxon, so the distinction the trade turns on is currently invisible.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'arabica-coffee',
    reason:
      'The coffee article is a genus concept by design; arabica and robusta differ in ploidy, self-fertility, altitude and rust susceptibility, and almost every agronomic statement about coffee is true of one and false of the other.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'robusta-coffee',
    reason:
      'The other half of the coffee crop, and the one that carries most soluble production. Held only as a taxon.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'upland-cotton',
    reason:
      'Roughly nine tenths of world cotton. The cotton article is a genus concept covering four species, so the species that dominates production has no page of its own.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'finger-millet',
    reason:
      'A staple across the Horn of Africa and southern India with a distinct calendar, storage behaviour and nutritional profile. The corpus publishes pearl millet under the name "millet"; finger millet is a different genus.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'white-yam',
    reason:
      'The principal cultivated yam of West Africa. The yam article is a species complex by design, so the species that most yam production actually is has no page.',
    sourceId: 'faostat',
    notedAt: '2026-09-02',
  },
  {
    slug: 'red-clover',
    reason:
      'One of the two most widely sown forage legumes in temperate agriculture, and a nitrogen-fixing rotation crop in its own right. The corpus publishes alfalfa and holds red clover only as a taxon.',
    sourceId: 'fao-land-water',
    notedAt: '2026-09-02',
  },
  {
    slug: 'perennial-ryegrass',
    reason:
      'The dominant sown grass of temperate pasture systems, and the species most forage agronomy is written about. No published forage grass article exists.',
    sourceId: 'fao-land-water',
    notedAt: '2026-09-02',
  },
];

export const PROMOTION_NOTE_BY_SLUG = new Map(
  PROMOTION_NOTES.map((n) => [n.slug, n]),
);
