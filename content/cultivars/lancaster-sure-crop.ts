import type { CultivarContent } from '@/types/content';

export const lancasterSureCrop: CultivarContent = {
  id: 'lancaster-sure-crop',
  slug: 'lancaster-sure-crop',
  contentType: 'cultivar',
  title: 'Lancaster Sure Crop',
  acceptedName: 'Lancaster Sure Crop',
  category: 'Maize heritage variety',
  parentCrop: { type: 'crop', slug: 'maize' },
  botanicalTaxon: 'Zea mays',
  cultivarType: 'Open-pollinated heritage variety',
  breedingType: 'Farmer selection from local dent maize',
  originCountry: 'United States',
  originRegion: 'Lancaster County, Pennsylvania',
  breederOrInstitution:
    'Pennsylvania farmer-breeders Isaac Hershey and his son',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Lancaster Sure Crop is represented in U.S. maize germplasm collections as a historical open-pollinated variety; specific record identifiers are not reproduced here.',
    },
  ],
  growthHabit: 'Annual open-pollinated maize; tall, single-stalked dent corn',
  intendedUse: [
    'Historical open-pollinated grain and feed corn',
    'Foundation germplasm for the Lancaster (non-Stiff-Stalk) heterotic pool',
    'Heritage and seed-saver cultivation',
  ],
  climateAdaptation:
    'Adapted to the temperate eastern United States; selected for early maturity and reliability in the Lancaster County region.',
  qualityTraits: [
    'Yellow dent kernels',
    'Historically selected for early maturity, uniformity, and ease of harvest',
  ],
  geographicAvailability:
    'Superseded by hybrids for commercial production; maintained in germplasm collections and still offered by heritage and seed-saver suppliers.',
  summary:
    'Lancaster Sure Crop is a historic open-pollinated maize variety selected by the Hershey family in Lancaster County, Pennsylvania. It is the namesake and germplasm source of the Lancaster (non-Stiff-Stalk) heterotic pool used in temperate hybrid maize.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lancaster Sure Crop is a heritage open-pollinated dent maize developed by Pennsylvania farmers of Lancaster County, principally Isaac Hershey and later his son, through selection of local corn over the second half of the 19th century into the early 1900s. Seed was offered commercially from about 1910.',
    },
    {
      type: 'paragraph',
      text: 'The variety is historically important less for its own cultivation than as the source population of the "Lancaster" heterotic group. Lancaster-derived lines are used in temperate hybrid maize as complements to Stiff Stalk (Reid’s Yellow Dent heritage) lines, and a substantial share of North American hybrid pedigrees trace some ancestry to it.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    { label: 'Type', value: 'Open-pollinated heritage dent maize' },
    {
      label: 'Developed by',
      value: 'Isaac Hershey and family (Lancaster County, PA)',
    },
    { label: 'Origin period', value: 'Late 19th to early 20th century' },
    { label: 'Heterotic pool', value: 'Lancaster (non-Stiff-Stalk)' },
    {
      label: 'Historical significance',
      value: 'Namesake germplasm source of the Lancaster heterotic group',
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
          text: 'Lancaster Sure Crop was developed through sustained farmer selection in Lancaster County, Pennsylvania. The Hershey family selected for early maturity, reliability, uniformity, and ease of harvest, and the variety was being sold as seed by around 1910. It became widely grown in the eastern United States.',
        },
      ],
    },
    {
      id: 'significance-for-breeding',
      heading: 'Significance for breeding',
      body: [
        {
          type: 'paragraph',
          text: 'When inbred-hybrid maize breeding developed in the 20th century, Lancaster Sure Crop supplied the germplasm for the "Lancaster" (non-Stiff-Stalk) heterotic pool. Because temperate hybrids are typically made by crossing complementary heterotic pools, Lancaster-derived lines are paired with Stiff Stalk lines of Reid’s Yellow Dent heritage.',
        },
        {
          type: 'paragraph',
          text: 'The public inbred Mo17, for example, is assigned to the Lancaster Sure Crop heterotic group, and its cross with the Stiff Stalk line B73 became a classic model of hybrid vigour.',
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
          text: 'As an open-pollinated variety selected over generations, seed lots vary by source and selection history. It has been largely replaced by hybrids for commercial production and today is grown mainly for heritage, educational, and seed-saving purposes.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'cultivar', slug: 'mo17-maize' },
    { type: 'cultivar', slug: 'reids-yellow-dent' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Originated in Lancaster County, Pennsylvania; historically grown in the eastern United States and foundational to temperate maize breeding.',
  climateContext:
    'Temperate open-pollinated dent maize selected for early maturity and reliability in the northeastern U.S.',
  limitations: [
    'Dates and details of the variety’s development differ between historical sources; the account here reflects the commonly documented narrative.',
    'As an open-pollinated heritage variety, modern seed lots differ by source and selection history and are not a standardized, registered cultivar.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'History of Lancaster Sure Crop and the Lancaster heterotic pool',
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
    title: 'Lancaster Sure Crop (maize variety)',
    description:
      'Lancaster Sure Crop is a heritage open-pollinated dent maize from Lancaster County, Pennsylvania, and namesake of the Lancaster maize heterotic group.',
    keywords: [
      'Lancaster Sure Crop',
      'open-pollinated maize',
      'Lancaster heterotic group',
      'heritage variety',
      'Zea mays',
    ],
  },
  structuredData: { article: true },
};
