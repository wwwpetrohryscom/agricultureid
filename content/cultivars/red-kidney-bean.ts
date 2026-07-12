import type { CultivarContent } from '@/types/content';

export const redKidneyBean: CultivarContent = {
  id: 'red-kidney-bean',
  slug: 'red-kidney-bean',
  contentType: 'cultivar',
  title: 'Red kidney bean',
  acceptedName: 'Red kidney (common bean market class)',
  alternativeNames: ['Dark red kidney', 'Light red kidney'],
  category: 'Common bean market class',
  parentCrop: { type: 'crop', slug: 'common-bean' },
  botanicalTaxon: 'Phaseolus vulgaris',
  cultivarType: 'Market class / landrace group',
  breedingType: 'Self-pollinated market class (comprising many cultivars)',
  originRegion: 'Andean gene pool',
  registrationStatus: 'historical',
  intendedUse: [
    'Dry culinary bean (for example, stews, chili, salads, and canning)',
  ],
  climateAdaptation:
    'Warm-season, frost-sensitive common bean; flowering and pod set are vulnerable to heat stress.',
  soilAdaptation:
    'Well-drained loams; sensitive to waterlogging and compaction.',
  qualityTraits: [
    'Large, kidney-shaped, red seed (dark and light red sub-types)',
    'Generally classified within the Andean gene pool',
  ],
  summary:
    'Red kidney is a common bean market class with large, kidney-shaped red seed from the Andean gene pool, spanning dark and light red types. It is a seed-type class of many cultivars, not one variety.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Red kidney is a market class of common bean (Phaseolus vulgaris) defined by a large, kidney-shaped, red seed. It includes recognized dark red and light red sub-types and is used as a dry culinary bean in stews, chili, salads, and canned products.',
    },
    {
      type: 'paragraph',
      text: 'As with other bean classes, "red kidney" names a seed type rather than a single cultivar, and many individually named cultivars are bred within it. Unlike the pinto and navy classes, red kidney is generally classified within the Andean gene pool of common bean, one of the two major gene pools that reflect the crop’s independent domestications.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Common bean (Phaseolus vulgaris)' },
    { label: 'Botanical taxon', value: 'Phaseolus vulgaris' },
    {
      label: 'Classification',
      value: 'Market class / seed type (many cultivars)',
    },
    { label: 'Seed', value: 'Large, kidney-shaped, red (dark and light red)' },
    { label: 'Gene pool', value: 'Andean' },
    { label: 'Primary use', value: 'Dry culinary bean' },
    {
      label: 'Status',
      value: 'Historical class; not a single registered cultivar',
    },
  ],
  sections: [
    {
      id: 'a-market-class-not-a-cultivar',
      heading: 'A market class, not a single cultivar',
      body: [
        {
          type: 'paragraph',
          text: 'Red kidney is a market class — a seed-type category — within the single species Phaseolus vulgaris. It groups cultivars that share a large red kidney-shaped seed (in dark and light red forms), while those cultivars differ in growth habit, maturity, and other traits.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Class name, not a variety record',
          text: 'This page describes the red kidney class. Statements about a specific red kidney cultivar — its release, protection, resistance, or measured yield — belong to that cultivar’s own record and must not be inferred from the class.',
        },
      ],
    },
    {
      id: 'seed-and-gene-pool',
      heading: 'Seed type and gene pool',
      body: [
        {
          type: 'paragraph',
          text: 'The red kidney class is recognized by its large, kidney-shaped red seed, with dark red and light red sub-types marketed separately. Common bean is divided into Mesoamerican and Andean gene pools; red kidney is generally placed in the Andean gene pool, which is typically associated with larger-seeded bean types.',
        },
        {
          type: 'list',
          items: [
            'Seed: large, kidney-shaped, red (dark and light red)',
            'Species: Phaseolus vulgaris (common bean)',
            'Gene pool: Andean',
            'Use: dry culinary bean (stews, chili, canning)',
          ],
        },
      ],
    },
    {
      id: 'cultivation-context',
      heading: 'Cultivation context',
      body: [
        {
          type: 'paragraph',
          text: 'As common beans, red kidney cultivars are warm-season and frost-sensitive, with flowering and pod set vulnerable to heat stress, and perform best on well-drained loams. Growth habit, maturity, and management vary by cultivar and region and are not reduced to universal values here.',
        },
      ],
    },
  ],
  connections: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'cultivar', slug: 'pinto-bean' },
    { type: 'cultivar', slug: 'navy-bean' },
  ],
  geographicScope:
    'A globally grown dry-bean class. Agronomy and performance depend on the specific cultivar and local conditions.',
  climateContext:
    'Warm-season, frost-sensitive common bean class; heat at flowering reduces pod set.',
  limitations: [
    'Red kidney is a market class (seed type), not a single registered cultivar; it encompasses many cultivars that differ agronomically.',
    'Gene-pool classification (Andean) is a general placement; individual materials can vary.',
    'No release year, breeder, resistance, or yield is asserted for the class; such claims belong to individual cultivar records.',
    'Culinary preparation and food-safety handling are outside the scope of this agronomy-focused record.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Common bean (Phaseolus vulgaris) germplasm and market-class documentation',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Common bean gene-pool classification (Andean and Mesoamerican) and germplasm research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Common bean crop and seed-type context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Red kidney (common bean market class)',
    description:
      'Red kidney is a common bean market class: large, kidney-shaped red seed from the Andean gene pool, spanning dark and light red types and many cultivars.',
    keywords: [
      'red kidney bean',
      'common bean market class',
      'Andean gene pool',
      'Phaseolus vulgaris',
    ],
  },
  structuredData: { article: true },
};
