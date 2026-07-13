import type { CultivarContent } from '@/types/content';

export const reidsYellowDent: CultivarContent = {
  id: 'reids-yellow-dent',
  slug: 'reids-yellow-dent',
  contentType: 'cultivar',
  title: "Reid's Yellow Dent",
  acceptedName: "Reid's Yellow Dent",
  category: 'Maize heritage variety',
  parentCrop: { type: 'crop', slug: 'maize' },
  botanicalTaxon: 'Zea mays',
  cultivarType: 'Open-pollinated heritage variety',
  breedingType: 'Farmer selection from an accidental variety cross',
  originCountry: 'United States',
  originRegion: 'Illinois (Tazewell County)',
  breederOrInstitution: 'Farmer-breeders Robert Reid and his son James L. Reid',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: "Reid's Yellow Dent is represented in U.S. maize germplasm collections as a historical open-pollinated variety; specific record identifiers are not reproduced here.",
    },
  ],
  growthHabit: 'Annual open-pollinated maize; tall, single-stalked dent corn',
  intendedUse: [
    'Historical open-pollinated grain and feed corn',
    'Foundation germplasm for Corn Belt dent maize breeding',
    'Heritage and seed-saver cultivation',
  ],
  climateAdaptation:
    'Adapted to the temperate U.S. Corn Belt, where it became the dominant open-pollinated dent maize before the adoption of hybrids.',
  qualityTraits: [
    'Yellow, deeply dented kernels',
    'Historically valued for uniform, productive ears',
  ],
  geographicAvailability:
    'Superseded by hybrids for commercial production; maintained in germplasm collections and still offered by heritage and seed-saver suppliers.',
  summary:
    "Reid's Yellow Dent is a historic open-pollinated maize variety developed by the Reid family in Illinois in the mid-19th century. It became the dominant dent corn of the U.S. Corn Belt and a foundational source of germplasm for later hybrid maize.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Reid\'s Yellow Dent is a heritage open-pollinated maize (dent corn) that originated in Tazewell County, Illinois, in the mid-19th century. It arose from an accidental cross: Robert Reid’s southern gourdseed-type dent, carried west from the Ohio Valley, interpollinated with a local northern flint (commonly described as a "Little Yellow" type) after a poor stand led to replanting, and the productive yellow-dented ears that resulted were then selected and improved.',
    },
    {
      type: 'paragraph',
      text: "Robert Reid and his son James L. Reid selected the variety over many seasons. It gained wide recognition after winning awards including at the 1893 World's Columbian Exposition in Chicago, and by the early 20th century it had become the predominant open-pollinated dent maize of the Corn Belt.",
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    { label: 'Type', value: 'Open-pollinated heritage dent maize' },
    {
      label: 'Developed by',
      value: 'Robert Reid and James L. Reid (Illinois)',
    },
    { label: 'Origin period', value: 'Mid-19th century' },
    { label: 'Kernel type', value: 'Yellow dent' },
    {
      label: 'Historical significance',
      value:
        'Dominant Corn Belt dent corn; foundation of much later hybrid germplasm',
    },
    { label: 'Registration status', value: 'Historical / heritage variety' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The variety originated when a southern gourdseed-type dent brought to Illinois by Robert Reid interpollinated with a locally grown northern flint. Reid favoured the resulting yellow-dented ears, which combined good yield with adaptation to the region, and his son James continued selecting and refining the population over subsequent decades.',
        },
        {
          type: 'paragraph',
          text: "Reid's Yellow Dent won recognition at agricultural exhibitions, including the 1893 World's Columbian Exposition, and spread rapidly through the Corn Belt as farmers adopted and re-selected their own strains.",
        },
      ],
    },
    {
      id: 'significance-for-breeding',
      heading: 'Significance for breeding',
      body: [
        {
          type: 'paragraph',
          text: "As the dominant open-pollinated dent maize of the early 20th century, Reid's Yellow Dent became a major reservoir of germplasm for the inbred lines developed once hybrid maize breeding began. The Iowa Stiff Stalk Synthetic, from which the influential inbred B73 was later derived, was assembled largely from lines of Reid's Yellow Dent heritage.",
        },
        {
          type: 'paragraph',
          text: 'Because so many temperate maize lines trace back to it, the variety is frequently cited in discussions of the genetic base of North American maize.',
        },
      ],
    },
    {
      id: 'status-today',
      heading: 'Status today',
      body: [
        {
          type: 'callout',
          tone: 'note',
          title: 'Open-pollinated heritage variety',
          text: "As an open-pollinated variety selected over generations, seed lots of Reid's Yellow Dent vary by source and selection history. It has been largely replaced by hybrids for commercial production and today is grown mainly for heritage, educational, and seed-saving purposes.",
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'cultivar', slug: 'b73-maize' },
    { type: 'cultivar', slug: 'lancaster-sure-crop' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Originated in Illinois, United States; historically dominant across the temperate U.S. Corn Belt.',
  climateContext:
    'Temperate open-pollinated dent maize; historically adapted to Corn Belt growing conditions.',
  limitations: [
    'Accounts of the founding cross and dates differ in detail between historical sources; the summary here reflects the commonly documented narrative rather than a single definitive record.',
    'As an open-pollinated heritage variety, modern seed lots differ by source and selection history and are not a standardized, registered cultivar.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        "History of Reid's Yellow Dent and its role in the maize genetic base",
    },
    {
      sourceId: 'usda-grin',
      citedFor:
        'Representation of the variety in U.S. maize germplasm collections',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: "Reid's Yellow Dent (maize variety)",
    description:
      "Reid's Yellow Dent is a historic open-pollinated dent maize from 19th-century Illinois that dominated the U.S. Corn Belt and seeded much later hybrid germplasm.",
    keywords: [
      "Reid's Yellow Dent",
      'open-pollinated maize',
      'dent corn',
      'heritage variety',
      'Zea mays',
    ],
  },
  structuredData: { article: true },
};
