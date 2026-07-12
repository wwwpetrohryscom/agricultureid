import type { CultivarContent } from '@/types/content';

export const navyBean: CultivarContent = {
  id: 'navy-bean',
  slug: 'navy-bean',
  contentType: 'cultivar',
  title: 'Navy bean',
  acceptedName: 'Navy / pea bean (common bean market class)',
  alternativeNames: ['Pea bean'],
  category: 'Common bean market class',
  parentCrop: { type: 'crop', slug: 'common-bean' },
  botanicalTaxon: 'Phaseolus vulgaris',
  cultivarType: 'Market class / landrace group',
  breedingType: 'Self-pollinated market class (comprising many cultivars)',
  originRegion: 'Mesoamerican (Middle American) gene pool',
  registrationStatus: 'historical',
  intendedUse: [
    'Dry culinary bean (for example, baked beans, canning, and soups)',
  ],
  climateAdaptation:
    'Warm-season, frost-sensitive common bean; flowering and pod set are vulnerable to heat stress.',
  soilAdaptation:
    'Well-drained loams; sensitive to waterlogging and compaction.',
  qualityTraits: [
    'Small, oval, white/cream seed',
    'Holds shape well in slow cooking and canning',
    'Generally classified within the Mesoamerican gene pool',
  ],
  summary:
    'Navy (pea) bean is a small white common bean market class of the Mesoamerican gene pool, used for canning and slow-cooked dishes. It is a seed-type class spanning many cultivars, not one variety.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Navy bean, also called pea bean, is a market class of common bean (Phaseolus vulgaris) defined by its small, oval, white to cream seed. It is widely used as a dry culinary bean, particularly for canning and slow-cooked dishes such as baked beans, where the seeds hold their shape well.',
    },
    {
      type: 'paragraph',
      text: 'Like other bean classes, "navy" names a seed type rather than a single cultivar. Many individually named navy-bean cultivars are bred and grown within the class, sharing its small white seed while differing in agronomy. Navy beans are generally classified within the Mesoamerican (Middle American) gene pool of common bean.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Common bean (Phaseolus vulgaris)' },
    { label: 'Botanical taxon', value: 'Phaseolus vulgaris' },
    {
      label: 'Classification',
      value: 'Market class / seed type (many cultivars)',
    },
    { label: 'Also called', value: 'Pea bean' },
    { label: 'Seed', value: 'Small, oval, white/cream' },
    { label: 'Gene pool', value: 'Mesoamerican (Middle American)' },
    { label: 'Primary use', value: 'Dry culinary bean (canning, baked beans)' },
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
          text: 'Navy (pea) bean is a market class — a seed-type category — within the single species Phaseolus vulgaris. The class groups cultivars that share a small white seed, but those cultivars differ in growth habit, maturity, and other agronomic traits.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Class name, not a variety record',
          text: 'This page describes the navy class. Statements about any specific navy-bean cultivar — its release, protection, resistance, or measured yield — belong to that cultivar’s own record and should not be inferred from the class.',
        },
      ],
    },
    {
      id: 'seed-and-use',
      heading: 'Seed type and use',
      body: [
        {
          type: 'paragraph',
          text: 'The navy class is recognized by its small, oval, white to cream seed. Its culinary value lies partly in holding shape through slow cooking and canning, which underlies its long association with baked-bean and canned-bean products. It is generally placed within the Mesoamerican gene pool of common bean.',
        },
        {
          type: 'list',
          items: [
            'Seed: small, oval, white/cream',
            'Species: Phaseolus vulgaris (common bean)',
            'Gene pool: Mesoamerican (Middle American)',
            'Use: canning, baked beans, soups',
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
          text: 'As common beans, navy cultivars are warm-season and frost-sensitive, with flowering and pod set vulnerable to heat stress, and perform best on well-drained loams. Planting timing, growth habit, and management vary by cultivar and region and are not reduced to universal values here.',
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
    { type: 'cultivar', slug: 'red-kidney-bean' },
  ],
  geographicScope:
    'A globally grown dry-bean class. Agronomy and performance depend on the specific cultivar and local conditions.',
  climateContext:
    'Warm-season, frost-sensitive common bean class; heat at flowering reduces pod set.',
  limitations: [
    'Navy (pea) bean is a market class (seed type), not a single registered cultivar; it encompasses many cultivars that differ agronomically.',
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
      citedFor: 'Common bean gene-pool classification and germplasm research',
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
    title: 'Navy bean (common bean market class)',
    description:
      'Navy (pea) bean is a small white common bean market class of the Mesoamerican gene pool, used for canning and baked beans; the class spans many cultivars.',
    keywords: [
      'navy bean',
      'pea bean',
      'common bean market class',
      'Phaseolus vulgaris',
    ],
  },
  structuredData: { article: true },
};
