import type { CultivarContent } from '@/types/content';

export const bramleysSeedling: CultivarContent = {
  id: 'cultivar-bramleys-seedling',
  slug: 'bramleys-seedling',
  contentType: 'cultivar',
  title: "Bramley's Seedling",
  acceptedName: "Malus domestica 'Bramley's Seedling'",
  alternativeNames: ['Bramley', "Bramley's"],
  category: 'Apple cultivar',
  summary:
    "Bramley's Seedling is the pre-eminent English culinary (cooking) apple, grown from a pip planted in Nottinghamshire in the early 1800s. Sharp and acidic, it cooks down to a light, well-flavoured purée and is a triploid.",
  introduction: [
    {
      type: 'paragraph',
      text: "Bramley's Seedling is the best-known cooking apple in England. It traces to a pip planted by Mary Ann Brailsford at a cottage garden in Southwell, Nottinghamshire, in the early nineteenth century. The tree later stood on land owned by Matthew Bramley, a butcher, and the apple was named after him when cuttings were taken for propagation.",
    },
    {
      type: 'paragraph',
      text: 'It is a large, green (sometimes red-flushed) apple with a very sharp, acidic flavour. On cooking it breaks down to a light, fluffy, strongly flavoured purée, which is why it is used for cooking rather than dessert. Bramley is a triploid, meaning it has three sets of chromosomes; this makes it a poor pollinator and dependent on other cultivars for pollination.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonal); triploid' },
    { label: 'Breeding', value: 'Chance seedling' },
    {
      label: 'Origin',
      value: 'Southwell, Nottinghamshire, England',
      note: 'Grown from a pip planted in the early 1800s.',
    },
    { label: 'Season', value: 'Late season; long storing' },
    { label: 'Primary use', value: 'Culinary / cooking' },
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
          text: 'The original Bramley tree grew from a pip planted at Southwell around 1809–1815. Cuttings were later taken with the agreement that the apple carry the Bramley name, and the nurseryman Henry Merryweather began propagating it commercially from the 1860s. It became, and remains, the dominant culinary apple of the United Kingdom.',
        },
        {
          type: 'paragraph',
          text: 'Because it is propagated clonally, orchard trees are grafted descendants of that single seedling. As a triploid, Bramley produces little viable pollen and requires compatible pollinizer cultivars nearby to set fruit.',
        },
      ],
    },
    {
      id: 'fruit-and-culinary-quality',
      heading: 'Fruit and culinary quality',
      body: [
        {
          type: 'list',
          items: [
            'Large, flattish fruit with green skin, sometimes with a red-brown flush',
            'Flesh firm and very acidic; too sharp for most palates to eat raw',
            'Breaks down on cooking to a light, fluffy, well-flavoured purée',
            'Stores well, extending its culinary season',
          ],
        },
      ],
    },
    {
      id: 'pollination-and-growing',
      heading: 'Pollination and growing',
      body: [
        {
          type: 'paragraph',
          text: 'As a triploid cultivar, Bramley is a poor source of pollen and cannot reliably pollinate other apples, so orchards interplant compatible diploid pollinizers. Vigour, cropping, and fruit size are strongly influenced by rootstock and by the pollination arrangement, which are site-specific decisions.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal); triploid',
  breedingType: 'Chance seedling',
  originCountry: 'United Kingdom',
  originRegion: 'Southwell, Nottinghamshire, England',
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
  maturityClass: 'Late season',
  intendedUse: ['Culinary / cooking'],
  qualityTraits: [
    'Very sharp, acidic flavour',
    'Firm flesh that breaks down to a light, fluffy purée when cooked',
    'Large, flattish, green fruit',
    'Good storage life',
  ],
  geographicAvailability:
    'The dominant culinary apple of the United Kingdom; grown mainly in Britain and to a lesser extent elsewhere in northern Europe.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Overview centred on the United Kingdom, where the cultivar is dominant as a cooking apple. Behaviour depends on region, rootstock, and pollination arrangement.',
  limitations: [
    'The precise year the original pip was planted is given only approximately in historical accounts.',
    'As a triploid, Bramley needs compatible pollinizers to crop, so orchard yield depends on the pollination arrangement, which is site-specific.',
    'Vigour and fruit size depend heavily on rootstock and management, which are not specified here.',
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
      sourceId: 'ahdb',
      citedFor: 'United Kingdom tree-fruit and cultivar context',
    },
    {
      sourceId: 'rhs',
      citedFor:
        'Horticultural background on the cultivar (secondary reference)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: "Bramley's Seedling (apple cultivar)",
    description:
      "Bramley's Seedling: the pre-eminent English cooking apple, grown from a Nottinghamshire pip in the early 1800s; a sharp, triploid culinary cultivar.",
    keywords: [
      "Bramley's Seedling",
      'apple cultivar',
      'Malus domestica',
      'cooking apple',
    ],
  },
  structuredData: { article: true },
};
