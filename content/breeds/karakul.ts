import type { BreedContent } from '@/types/content';

export const karakul: BreedContent = {
  id: 'karakul',
  slug: 'karakul',
  contentType: 'breed',
  title: 'Karakul',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Dual-purpose',
  originCountry: 'Uzbekistan',
  originRegion: 'Central Asia (historically the Bukhara region)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  summary:
    'The Karakul is an ancient fat-tailed sheep breed of Central Asia, historically prized for the tightly curled coats of newborn lambs and also kept for coarse wool, milk, meat, and fat, and noted for hardiness in harsh, arid environments.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Karakul is one of the oldest recorded sheep breeds, associated with the arid steppe and desert regions of Central Asia, historically the area around Bukhara in present-day Uzbekistan. It is a fat-tailed breed, storing energy reserves in a fatty tail and rump as an adaptation to harsh, variable environments.',
    },
    {
      type: 'paragraph',
      text: 'Karakul sheep have historically been kept for several products, most distinctively the tightly curled coats of very young lambs, and also for coarse carpet wool, milk, meat, and fat. The breed is hardy and long adapted to extensive management in difficult climates, and populations and regional strains occur across Central Asia and in other countries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    {
      label: 'Origin',
      value: 'Central Asia (historically the Bukhara region)',
    },
    {
      label: 'Breed type',
      value: 'Multi-purpose (pelts, coarse wool, milk, meat, fat)',
    },
    {
      label: 'Distinctive trait',
      value: 'Fat-tailed; tightly curled newborn-lamb coat',
    },
    {
      label: 'Adaptation',
      value: 'Hardy in arid, harsh, continental climates',
    },
    {
      label: 'Registry',
      value: 'Recorded in FAO DAD-IS; registries including American Karakul',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Karakul has a long history in Central Asia, where it was maintained by pastoralists in arid and semi-arid conditions. It became internationally known through trade in the curled coats of newborn lambs, historically referred to by names such as Astrakhan, Persian lamb, or broadtail. The breed and its derivatives were introduced to other regions, and various national strains and registries developed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Historical terms such as "Persian lamb" and "Astrakhan" refer to lamb-coat products associated with the breed; product terminology varies and reflects historical trade rather than a modern recommendation.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Karakuls are fat-tailed sheep of moderate size, often born with a dark, tightly curled coat that changes as the lamb matures; adults carry a coarse fleece suited to carpet wool and similar uses. The breed is multi-purpose, providing coarse wool, milk, meat, and fat in addition to its historical pelt use.',
        },
      ],
    },
    {
      id: 'adaptation-and-distribution',
      heading: 'Adaptation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Karakul is well adapted to harsh, arid, and continental climates and to extensive, low-input pastoral management. It remains present across Central Asia and is kept in smaller numbers in parts of Africa, the Americas, and Europe, where distinct strains have developed.',
        },
      ],
    },
  ],
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Karakul and its national strains are recorded in the global breed inventory.',
    },
    {
      registry:
        'National Karakul registries (e.g. the American Karakul Sheep Registry)',
      jurisdiction: 'Central Asia and other countries',
      asOf: '2026-07-12',
      note: 'Registries and strains vary by country; the American Karakul is one recognised national population.',
    },
  ],
  primaryUses: [
    'Lamb pelts (historically)',
    'Coarse carpet wool',
    'Milk',
    'Meat and fat',
  ],
  physicalCharacteristics:
    'Fat-tailed sheep of moderate size, lambs often born with a dark, tightly curled coat; adults carry a coarse fleece.',
  productionCharacteristics:
    'Multi-purpose, historically known for newborn-lamb pelts and also providing coarse wool, milk, meat, and fat.',
  climateAdaptation:
    'Well adapted to harsh, arid, and continental climates and to extensive, low-input pastoral management.',
  managementContext:
    'Traditionally managed in extensive pastoral systems in demanding environments.',
  geographicDistribution:
    'Present across Central Asia and kept in smaller numbers in parts of Africa, the Americas, and Europe.',
  connections: [{ type: 'climate', slug: 'drought' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; Central Asian in origin, with strains in several other regions.',
  climateContext:
    'Arid and continental environments; a hardy fat-tailed pastoral breed.',
  limitations: [
    'The Karakul spans many regional strains and populations; characteristics, uses, and numbers vary widely by country.',
    'Conservation status differs between national populations and registries and is not uniform; a global risk category is not asserted here.',
    'Historical pelt terminology reflects past trade practice and is described for context, not as guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Breed record, origin, and characteristics in the global inventory',
    },
    { sourceId: 'cabi', citedFor: 'Breed characterization and background' },
    {
      sourceId: 'britannica',
      citedFor: 'General historical and background context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Karakul (sheep breed)',
    description:
      'The Karakul, an ancient fat-tailed Central Asian sheep known for curled lamb pelts and for coarse wool, milk, and meat: origin, traits, and adaptation.',
    keywords: [
      'Karakul sheep',
      'fat-tailed sheep',
      'Central Asian breed',
      'Ovis aries',
    ],
  },
  structuredData: { article: true },
};
