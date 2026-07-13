import type { CultivarContent } from '@/types/content';

export const coxsOrangePippin: CultivarContent = {
  id: 'cultivar-coxs-orange-pippin',
  slug: 'coxs-orange-pippin',
  contentType: 'cultivar',
  title: "Cox's Orange Pippin",
  acceptedName: "Malus domestica 'Cox's Orange Pippin'",
  alternativeNames: ['Cox Orange', 'Cox (informal)'],
  category: 'Apple cultivar',
  summary:
    "Cox's Orange Pippin is a richly aromatic English dessert apple raised near London around 1825, widely regarded as a benchmark for complex apple flavour. It is prized for eating quality but considered demanding to grow.",
  introduction: [
    {
      type: 'paragraph',
      text: "Cox's Orange Pippin is a celebrated English dessert apple raised by Richard Cox, a retired brewer, at Colnbrook in the historic county of Buckinghamshire, around 1825. It is thought to have been grown from a pip of the older cultivar Ribston Pippin, although the pollen parent is uncertain.",
    },
    {
      type: 'paragraph',
      text: 'The cultivar is renowned for a complex, aromatic, richly flavoured character, and it is often cited as a standard against which the flavour of other dessert apples is judged. It is also an ancestor of later cultivars, contributing (via Kidd’s Orange Red) to the pedigree of Gala. As a clonal cultivar it is propagated by grafting.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Malus domestica' },
    { label: 'Cultivar type', value: 'Cultivar (clonally propagated)' },
    {
      label: 'Breeding',
      value: 'Seedling of Ribston Pippin (pollen parent uncertain)',
    },
    {
      label: 'Origin',
      value: 'Colnbrook, Buckinghamshire, England',
      note: 'Raised around 1825.',
    },
    { label: 'Season', value: 'Mid-to-late season (autumn)' },
    { label: 'Primary use', value: 'Fresh eating (dessert)' },
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
          text: "Cox's Orange Pippin was raised by Richard Cox at Lawn Cottage, Colnbrook, around 1825, reportedly from a seed of Ribston Pippin. It was propagated and introduced commercially in the mid-nineteenth century, becoming one of the most esteemed dessert apples in Britain.",
        },
        {
          type: 'paragraph',
          text: 'Its influence extends through its descendants: crossed with Red Delicious it produced Kidd’s Orange Red, which in turn is a parent of Gala. Cox remains a reference point for connoisseur apple flavour and is a traditional favourite in the United Kingdom and parts of northern Europe.',
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
            'Skin orange-red flushed and striped over a yellow-green ground, often lightly russeted',
            'Flesh crisp and juicy, becoming softer as it ripens',
            'Flavour complex and aromatic, with honeyed, nutty, and pear-like notes',
            'A moderate keeper; flavour is often considered best soon after ripening',
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
          text: 'Cox is widely regarded as demanding to grow well. It is traditionally associated with cool, moist maritime climates such as that of England and is considered susceptible to several diseases and disorders, making it challenging in hotter or drier conditions. Its performance is strongly dependent on climate, rootstock, and orchard management.',
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'apple' },
  botanicalTaxon: 'Malus domestica',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Chance / open-pollinated seedling',
  originCountry: 'United Kingdom',
  originRegion: 'Colnbrook, Buckinghamshire, England',
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
  maturityClass: 'Mid-to-late season (autumn)',
  intendedUse: ['Fresh eating (dessert)'],
  climateAdaptation:
    'Traditionally associated with cool, moist maritime climates such as England; widely regarded as demanding to grow well outside such conditions.',
  qualityTraits: [
    'Complex, aromatic flavour with honeyed and nutty notes',
    'Crisp, juicy flesh that softens as it ripens',
    'Orange-red flushed skin, often lightly russeted',
    'Moderate storage life',
  ],
  geographicAvailability:
    'A traditional favourite in the United Kingdom and parts of northern Europe; less common in warmer growing regions.',
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['cultivar', 'perennial-crop'],
  geographicScope:
    'Overview centred on the United Kingdom and cool maritime climates, where the cultivar is traditionally grown. Behaviour depends on region, rootstock, and season.',
  limitations: [
    'The pollen parent and exact origin date of the seedling are uncertain and partly traditional.',
    'Cox is widely reported as difficult to grow well and disease-prone, so orchard performance and fruit quality vary greatly with climate and management.',
    'Storage life and flavour development depend on rootstock, harvest timing, and handling, which are not specified here.',
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
    title: "Cox's Orange Pippin (apple cultivar)",
    description:
      "Cox's Orange Pippin: a richly aromatic English dessert apple raised near London around 1825, prized for complex flavour but considered demanding to grow.",
    keywords: [
      "Cox's Orange Pippin",
      'apple cultivar',
      'Malus domestica',
      'English dessert apple',
    ],
  },
  structuredData: { article: true },
};
