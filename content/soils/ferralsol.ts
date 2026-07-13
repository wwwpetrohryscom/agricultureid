import type { SoilContent } from '@/types/content';

export const ferralsol: SoilContent = {
  id: 'soil-ferralsol',
  slug: 'ferralsol',
  contentType: 'soil',
  title: 'Ferralsol',
  alternativeNames: ['Oxisol (USDA)', 'Deeply weathered tropical soil'],
  category: 'Soil type',
  subcategory: 'Deeply weathered tropical soil',
  texture:
    'Clayey but often strongly aggregated, giving a deceptively friable, well-drained feel despite high clay content',
  summary:
    'A Ferralsol is a deep, intensely weathered tropical soil dominated by iron and aluminium oxides and low-activity clays. It typically has good physical structure and drainage but low natural fertility, high phosphorus fixation, and acidity, so productive use depends heavily on nutrient and acidity management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ferralsols are among the most intensely weathered soils on Earth, formed over long periods in warm, humid tropical climates where prolonged weathering and leaching have removed most soluble minerals and weatherable material. What remains is dominated by iron and aluminium oxides and by low-activity clays, giving the soils their often red or yellow colours and their characteristic chemical poverty.',
    },
    {
      type: 'paragraph',
      text: 'Despite this chemical poverty, Ferralsols frequently have favourable physical properties: they are typically deep, well drained, and strongly aggregated, so that a clayey soil can feel friable and stable. Their agricultural challenge is therefore chemical rather than physical, centred on low nutrient reserves, strong fixation of phosphorus by the oxides, acidity, and sometimes aluminium toxicity, all of which must be managed for sustained production.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value:
        'Ferralsol (World Reference Base); broadly the Oxisols of USDA Soil Taxonomy',
    },
    {
      label: 'Formation',
      value:
        'Deep, prolonged weathering and leaching in warm, humid tropical climates',
    },
    {
      label: 'Dominant minerals',
      value: 'Iron and aluminium oxides with low-activity clays',
    },
    {
      label: 'Physical condition',
      value:
        'Usually deep, well drained, and strongly aggregated despite high clay content',
    },
    {
      label: 'Main constraints',
      value:
        'Low natural fertility, strong phosphorus fixation, acidity, and possible aluminium toxicity',
    },
    {
      label: 'Distribution',
      value: 'Humid tropics, extensively in South America and central Africa',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Ferralsol is defined by extreme weathering: a deep, uniform, oxide-rich subsoil in which most weatherable minerals and soluble nutrients have long since been removed. The dominance of iron and aluminium oxides gives strong, water-stable aggregates and vivid red or yellow colours, but also the low nutrient-holding capacity that limits fertility.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Ferralsols form on old, stable land surfaces in the humid tropics, where high temperatures and abundant rainfall drive intense chemical weathering and leaching over very long periods. This progressively strips out silica and base cations, concentrating resistant iron and aluminium oxides. They are extensive in the humid tropics of South America, notably the Brazilian and Amazonian uplands, and of central Africa, with occurrences in parts of tropical Asia.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Oxide dominance',
              description:
                'Iron and aluminium oxides dominate the mineralogy, producing red and yellow colours and stable aggregates.',
            },
            {
              term: 'Low fertility',
              description:
                'Low-activity clays give a small cation exchange capacity and poor retention of nutrients, so natural fertility is low.',
            },
            {
              term: 'Phosphorus fixation',
              description:
                'The oxides strongly bind phosphorus, so applied phosphate can become largely unavailable to crops.',
            },
            {
              term: 'Good structure and drainage',
              description:
                'Strong aggregation gives friable, well-drained, physically stable soil despite a high clay content.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Sustaining crops on Ferralsols depends on overcoming their chemical limitations while conserving the organic matter and structure that hold the system together.',
        },
        {
          type: 'list',
          items: [
            'Manage acidity with lime and address possible aluminium toxicity to allow sensitive crops to root',
            'Supply phosphorus carefully, recognising that much can be fixed by the oxides, and use efficient placement',
            'Maintain organic matter and continuous cover to protect the small nutrient reserve and prevent erosion',
            'Favour perennial and deep-rooting crops and agroforestry, which suit the deep, well-drained profile and recycle nutrients',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'On Ferralsols the main limitation is chemical, not physical; without attention to acidity, phosphorus, and the maintenance of organic matter, initial fertility after clearing declines quickly.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'With appropriate management, Ferralsols support important tropical crops, especially those tolerant of low fertility and acidity or grown as perennials that recycle nutrients. Cassava is well adapted to these soils, and oil palm, coffee, rubber, and pineapple are widely grown on Ferralsols across the humid tropics.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'oil-palm' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'rubber' },
    { type: 'crop', slug: 'pineapple' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'volcanic-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'base-saturation' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'crop', slug: 'cassava' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph'],
  geographicScope:
    'Humid tropics worldwide, extensively in South America and central Africa; properties reflect intense weathering but vary with parent material, age, and management.',
  climateContext:
    'Ferralsols are products of warm, humid tropical climates, where high temperatures and heavy rainfall drive the prolonged weathering and leaching that create their deep, oxide-rich, nutrient-poor profiles.',
  limitations: [
    'Natural fertility is low and phosphorus is strongly fixed, so sustained cropping depends on careful nutrient and acidity management.',
    'Fertility gained after clearing native vegetation can decline quickly if organic matter and cover are not maintained.',
    'This entry is a general overview; acidity, aluminium, and nutrient status should be confirmed by local soil testing.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Ferralsol Reference Soil Group, weathering, and distribution',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Ferralsols and highly weathered soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Oxisols, phosphorus fixation, and acidity management',
    },
    {
      sourceId: 'iita',
      citedFor: 'Management of weathered tropical soils for crops',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Ferralsol',
    description:
      'Ferralsol explained: a deeply weathered tropical soil rich in iron and aluminium oxides, with good structure but low fertility and high phosphorus fixation.',
    keywords: ['ferralsol', 'oxisol', 'tropical soil', 'phosphorus fixation'],
  },
  structuredData: { article: true },
};
