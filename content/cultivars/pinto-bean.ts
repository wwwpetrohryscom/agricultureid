import type { CultivarContent } from '@/types/content';

export const pintoBean: CultivarContent = {
  id: 'pinto-bean',
  slug: 'pinto-bean',
  contentType: 'cultivar',
  title: 'Pinto bean',
  acceptedName: 'Pinto (common bean market class)',
  category: 'Common bean market class',
  parentCrop: { type: 'crop', slug: 'common-bean' },
  botanicalTaxon: 'Phaseolus vulgaris',
  cultivarType: 'Market class / landrace group',
  breedingType: 'Self-pollinated market class (comprising many cultivars)',
  originRegion: 'Mesoamerican (Middle American) gene pool',
  registrationStatus: 'historical',
  intendedUse: ['Dry culinary bean (for example, whole, mashed, and canned)'],
  climateAdaptation:
    'Warm-season, frost-sensitive common bean; flowering and pod set are vulnerable to heat stress.',
  soilAdaptation:
    'Well-drained loams; sensitive to waterlogging and compaction.',
  qualityTraits: [
    'Medium-sized, mottled beige-and-brown seed',
    'Generally classified within the Mesoamerican (Middle American) gene pool',
  ],
  summary:
    'Pinto is a common bean market class defined by mottled beige-and-brown seed of the Mesoamerican gene pool. It is a seed-type class encompassing many individually named cultivars, not one registered variety.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pinto is a market class of common bean (Phaseolus vulgaris) defined by its seed type: a medium-sized, mottled ("painted") seed in shades of beige and brown. It is one of the most widely grown dry-bean classes in the Americas and is used as a dry culinary bean.',
    },
    {
      type: 'paragraph',
      text: 'Crucially, "pinto" names a seed-type class, not a single cultivar. Many distinct, individually named pinto cultivars are bred and grown within the class, sharing its seed appearance while differing in growth habit, maturity, and other traits. Pinto beans are generally classified within the Mesoamerican (Middle American) gene pool of common bean.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Common bean (Phaseolus vulgaris)' },
    { label: 'Botanical taxon', value: 'Phaseolus vulgaris' },
    {
      label: 'Classification',
      value: 'Market class / seed type (many cultivars)',
    },
    { label: 'Seed', value: 'Medium-sized, mottled beige-and-brown' },
    { label: 'Gene pool', value: 'Mesoamerican (Middle American)' },
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
          text: 'Pinto is a market class — a seed-type category — within the single species Phaseolus vulgaris. Beans are sold and bred by such classes, which group cultivars that share seed size, shape, and color. The pinto class contains many individually named cultivars that differ in agronomy even though their seeds look similar.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Class name, not a variety record',
          text: 'This page describes the pinto class. Any statement about a specific pinto cultivar — its release, protection, resistance, or measured yield — belongs to that cultivar’s own record and must not be inferred from the class.',
        },
      ],
    },
    {
      id: 'seed-and-gene-pool',
      heading: 'Seed type and gene pool',
      body: [
        {
          type: 'paragraph',
          text: 'The pinto class is recognized by its mottled beige-and-brown seed of medium size. Common bean is divided into two major gene pools — Mesoamerican and Andean — reflecting independent domestications; pinto is generally placed within the Mesoamerican (Middle American) gene pool.',
        },
        {
          type: 'list',
          items: [
            'Seed: medium-sized, mottled beige and brown',
            'Species: Phaseolus vulgaris (common bean)',
            'Gene pool: Mesoamerican (Middle American)',
            'Use: dry culinary bean',
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
          text: 'As common beans, pinto cultivars are warm-season and frost-sensitive, with flowering and pod set vulnerable to heat stress, and perform best on well-drained loams. Specific planting timing, growth habit, and management vary by cultivar and region and are not reduced to universal values here.',
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
    { type: 'cultivar', slug: 'navy-bean' },
    { type: 'cultivar', slug: 'red-kidney-bean' },
  ],
  geographicScope:
    'A globally grown dry-bean class, especially in the Americas. Agronomy and performance depend on the specific cultivar and local conditions.',
  climateContext:
    'Warm-season, frost-sensitive common bean class; heat at flowering reduces pod set.',
  limitations: [
    'Pinto is a market class (seed type), not a single registered cultivar; it encompasses many cultivars that differ agronomically.',
    'Gene-pool classification (Mesoamerican) is a general placement; individual materials can vary.',
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
        'Common bean gene-pool classification (Mesoamerican and Andean) and germplasm research',
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
    title: 'Pinto (common bean market class)',
    description:
      'Pinto is a common bean market class with mottled beige-and-brown seed from the Mesoamerican gene pool, encompassing many individually named cultivars.',
    keywords: [
      'pinto bean',
      'common bean market class',
      'Phaseolus vulgaris',
      'dry bean',
    ],
  },
  structuredData: { article: true },
};
