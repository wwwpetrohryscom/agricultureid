import type { CultivarContent } from '@/types/content';

export const mcintoshApple: CultivarContent = {
  id: 'cultivar-mcintosh-apple',
  slug: 'mcintosh-apple',
  contentType: 'cultivar',
  title: 'McIntosh',
  acceptedName: "Malus domestica 'McIntosh'",
  alternativeNames: ['McIntosh Red'],
  category: 'Apple cultivar',
  summary:
    'McIntosh is a cold-hardy, aromatic, red-and-green apple discovered as a chance seedling in Ontario, Canada, around 1811. A foundational North American cultivar, it is used both fresh and for sauce and is a parent of many later apples.',
  introduction: [
    {
      type: 'paragraph',
      text: 'McIntosh (often "McIntosh Red") is a Canadian apple cultivar discovered as a chance seedling by John McIntosh on his farm at Dundela, in Dundas County, Ontario, around 1811. He found seedling trees while clearing land, and one proved outstanding; it was later propagated by grafting and popularized through the nineteenth and twentieth centuries.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is known for tender, white, juicy flesh, a tangy sweet-tart "vinous" flavour, and marked cold-hardiness, which made it important across northeastern North America. It is also a foundational breeding parent, appearing in the pedigrees of cultivars such as Cortland, Empire, Spartan, and Macoun. It is propagated clonally by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    { label: 'Breeding', value: 'Chance seedling' },
    {
      label: 'Origin',
      value: 'Dundela, Dundas County, Ontario, Canada',
      note: 'Discovered around 1811.',
    },
    { label: 'Season', value: 'Early-to-mid season (early autumn)' },
    { label: 'Primary uses', value: 'Fresh eating and sauce' },
    {
      label: 'Registry status',
      value: 'Heritage cultivar; no current variety protection',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'John McIntosh discovered the original seedling on his Ontario farm around 1811. His family began grafting and distributing the tree from the 1830s, and the cultivar spread widely across Canada and the northeastern United States, where its cold-hardiness suited the climate.',
        },
        {
          type: 'paragraph',
          text: 'McIntosh became one of the most important apples of northeastern North America and a heavily used breeding parent, contributing to cultivars including Cortland, Empire, Spartan, and Macoun. Its many descendants share aspects of its tender texture and aromatic flavour.',
        },
      ],
    },
    {
      id: 'fruit-and-eating-quality',
      heading: 'Fruit and eating quality',
      body: [
        {
          type: 'list',
          items: [
            'Skin red and green, often with a whitish bloom; tender and easily bruised',
            'Flesh white, tender, and juicy',
            'Flavour aromatic and tangy, sweet-tart and "vinous"',
            'Softens relatively quickly in storage and tends to break down when cooked, suiting sauce',
          ],
        },
      ],
    },
    {
      id: 'cultivation-notes',
      heading: 'Cultivation notes',
      body: [
        {
          type: 'paragraph',
          text: 'McIntosh is valued for cold-hardiness and is well suited to cool, northern temperate climates. It is an earlier-season apple that does not keep as long as late cultivars, and its tender skin and flesh make careful handling important. As always, storage life and quality depend on rootstock, harvest timing, and post-harvest management.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance seedling',
  originCountry: 'Canada',
  originRegion: 'Dundela, Dundas County, Ontario',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN-Global / National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States / Global',
      asOf: '2026-07-12',
      note: 'Cultivar and germplasm records are curated in GRIN-Global; listing reflects germplasm curation, not commercial protection.',
    },
  ],
  maturityClass: 'Early-to-mid season (early autumn)',
  intendedUse: ['Fresh eating (dessert)', 'Culinary / cooking (sauce)'],
  climateAdaptation:
    'Noted for cold-hardiness and well suited to cool, northern temperate climates such as northeastern North America.',
  qualityTraits: [
    'Aromatic, tangy, sweet-tart "vinous" flavour',
    'Tender, white, juicy flesh',
    'Red-and-green skin that bruises easily',
    'Softens relatively quickly in storage; breaks down well for sauce',
  ],
  geographicAvailability:
    'Historically important across northeastern North America; grown mainly in Canada and the northern United States.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Overview centred on northeastern North America, where the cultivar is traditionally important. Behaviour depends on region, rootstock, and season.',
  limitations: [
    'The earliest history of the original seedling is drawn from family and horticultural records and is partly traditional.',
    'McIntosh softens and loses quality faster than late-storing cultivars, so eating quality is sensitive to harvest timing and storage.',
    'Vigour and adaptation depend heavily on rootstock, which is not specified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Cultivar/germplasm record and placement within Malus domestica',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomy of the parent species Malus domestica',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Scientific name and classification of Malus domestica',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'McIntosh (apple cultivar)',
    description:
      'McIntosh apple: a cold-hardy, aromatic, red-and-green Canadian cultivar discovered in Ontario around 1811; used fresh and for sauce and a key breeding parent.',
    keywords: [
      'McIntosh apple',
      'apple cultivar',
      'Malus domestica',
      'McIntosh Red',
    ],
  },
  structuredData: { article: true },
};
