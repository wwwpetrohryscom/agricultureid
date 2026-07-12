import type { LivestockContent } from '@/types/content';

export const camels: LivestockContent = {
  id: 'livestock-camels',
  slug: 'camels',
  contentType: 'livestock',
  title: 'Camels',
  scientificName:
    'Camelus dromedarius (dromedary); Camelus bactrianus (Bactrian)',
  alternativeNames: ['Dromedary', 'Bactrian camel'],
  category: 'Livestock',
  subcategory: 'Pseudo-ruminant (three-chambered stomach)',
  primaryProducts: [
    'Milk',
    'Meat',
    'Transport and draught power',
    'Fibre (hair)',
    'Manure',
  ],
  productionSystems: [
    'Extensive pastoral and nomadic grazing systems',
    'Semi-arid and arid rangeland systems',
    'Peri-urban dairy systems',
  ],
  summary:
    'Camels are large, foregut-fermenting livestock adapted to arid and semi-arid environments, raised for milk, meat, transport, and fibre. The single-humped dromedary dominates hot desert regions, while the two-humped Bactrian camel is kept in colder Central Asian rangelands.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Camels are pseudo-ruminants: they ferment plant material in a three-chambered stomach, in contrast to the four compartments of true ruminants such as cattle and water buffalo. Two domesticated species are kept — the single-humped dromedary (Camelus dromedarius), found across hot desert and semi-arid regions of North Africa, the Middle East, and South Asia, and the two-humped Bactrian camel (Camelus bactrianus), adapted to the colder, drier rangelands of Central Asia.',
    },
    {
      type: 'paragraph',
      text: 'Camels are prized above all for their capacity to produce milk and sustain work in hot, arid, and forage-scarce environments where other livestock struggle, drawing on efficient water use, tolerance of browse on thorny and saline plants, and an ability to withstand extended periods without water. Beyond pastoral herding, camels are increasingly kept in peri-urban dairies supplying fresh camel milk to urban markets.',
    },
  ],
  keyFacts: [
    {
      label: 'Species',
      value:
        'Camelus dromedarius (dromedary, one hump); Camelus bactrianus (Bactrian, two humps)',
    },
    {
      label: 'Digestive type',
      value: 'Pseudo-ruminant; three-chambered, foregut-fermenting stomach',
    },
    {
      label: 'Primary products',
      value: 'Milk, meat, transport/draught power, and fibre (hair)',
    },
    {
      label: 'Environmental adaptation',
      value:
        'Efficient water use and tolerance of heat, drought, and sparse or saline forage',
    },
    {
      label: 'Main systems',
      value:
        'Extensive pastoral/nomadic systems and emerging peri-urban dairies',
    },
    {
      label: 'Global breeds',
      value:
        'Numerous regional dromedary and Bactrian types recorded in DAD-IS',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Camel production is most developed in arid and semi-arid parts of Africa, the Middle East, and Asia, where the species supports pastoral livelihoods through milk, meat, and transport. Dromedaries dominate hot desert regions, while Bactrian camels and dromedary–Bactrian hybrids are kept in colder Central Asian environments.',
        },
      ],
    },
    {
      id: 'types-and-breeds',
      heading: 'Types and breeds',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dairy-type dromedaries',
              description:
                'Regional breeds selected or managed for higher milk yield, increasingly supplying peri-urban dairies.',
            },
            {
              term: 'Riding and pack dromedaries',
              description:
                'Types bred and trained for transport, racing, or pack work.',
            },
            {
              term: 'Bactrian camel',
              description:
                'Two-humped species adapted to cold, dry Central Asian rangelands, used for milk, fibre, and transport.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Regional breed and genetic diversity is documented internationally, including through FAO’s Domestic Animal Diversity Information System (DAD-IS).',
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Camels are adapted to browse a wide range of shrubs, trees, and grasses, including thorny and salt-tolerant plants that many other livestock avoid, and can travel long distances between forage and water sources. In pastoral systems, feeding relies almost entirely on natural rangeland vegetation, while peri-urban and more intensive dairy operations increasingly supplement forage with concentrate feeds to support higher milk yields.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Feed and water requirements vary greatly with climate, workload, and production stage; local pastoral knowledge and veterinary or extension guidance should inform management rather than generic figures.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Camel health and welfare depend on adequate access to forage and water even in arid environments, appropriate handling given the animal’s size and temperament, and management of diseases and parasites relevant to the species and region.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Camels allow productive use of arid and semi-arid land unsuitable for most other livestock or crops, underpinning pastoral livelihoods across large parts of Africa and Asia. Growing interest in camel milk for urban and export markets is expanding more intensive dairy operations alongside traditional pastoral herding.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'horses' },
    { type: 'livestock', slug: 'donkeys' },
  ],
  connections: [
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Concentrated in arid and semi-arid Africa, the Middle East, South Asia, and Central Asia; breeds, systems, and regulations vary by country and region.',
  climateContext:
    'Camels are adapted to hot, arid environments (dromedary) or cold, dry rangelands (Bactrian), tolerating drought and water scarcity better than most livestock.',
  limitations: [
    'This is a general species overview, not breed-, system-, or region-specific husbandry guidance.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Camel production systems and global role' },
    { sourceId: 'fao-dad-is', citedFor: 'Camel breeds and genetic diversity' },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    { sourceId: 'nap-nrc', citedFor: 'Nutrient requirement references' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Camels',
    description:
      'A reference on camels: dromedary and Bactrian types, pseudo-ruminant digestion, arid-land feeding and adaptation, and their pastoral production role.',
    keywords: [
      'camels',
      'dromedary',
      'Camelus dromedarius',
      'pastoral livestock',
    ],
  },
  structuredData: { article: true },
};
