import type { SoilContent } from '@/types/content';

export const andosol: SoilContent = {
  id: 'soil-andosol',
  slug: 'andosol',
  contentType: 'soil',
  title: 'Andosol',
  alternativeNames: ['Volcanic ash soil', 'Andisol (USDA)'],
  category: 'Soil type',
  subcategory: 'Volcanic ash soil',
  texture:
    'Light, porous, and often silty-feeling, with a characteristically low bulk density and a smeary or greasy feel when moist',
  summary:
    'An Andosol is a soil formed from volcanic ash and other volcanic ejecta, dominated by distinctive minerals that give it a dark, light, porous character with high water retention and excellent structure. Naturally productive but prone to strong phosphorus fixation, Andosols support intensive cropping around volcanic regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Andosols develop from volcanic ash, cinders, and other ejected volcanic material, which weathers to produce distinctive short-range-order minerals and organo-mineral complexes. These give Andosols an unusual combination of properties: a dark, organic-rich topsoil, a very low bulk density, high porosity, strong and stable structure, and a great capacity to hold water, often with a characteristic smeary feel when moist.',
    },
    {
      type: 'paragraph',
      text: 'Occurring around volcanoes and volcanic ash deposits, Andosols are frequently fertile and physically excellent, which is one reason volcanic regions often support dense populations and intensive agriculture. Their principal chemical drawback is a strong tendency to fix phosphorus, binding added phosphate so tightly that it can become poorly available to crops, which is the central nutrient-management challenge on these soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value:
        'Andosol (World Reference Base); the Andisols of USDA Soil Taxonomy',
    },
    {
      label: 'Parent material',
      value: 'Volcanic ash, cinders, and other volcanic ejecta',
    },
    {
      label: 'Distinctive minerals',
      value:
        'Short-range-order minerals and organo-mineral complexes from weathered ash',
    },
    {
      label: 'Physical character',
      value:
        'Low bulk density, high porosity, strong structure, and high water retention',
    },
    {
      label: 'Main constraint',
      value:
        'Strong phosphorus fixation limiting phosphate availability to crops',
    },
    {
      label: 'Distribution',
      value:
        'Volcanic regions worldwide, including the Pacific Rim and East African highlands',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'An Andosol is recognised by its volcanic origin and the unusual properties that follow from it: a dark, light, porous soil that holds abundant water and resists compaction, yet binds phosphorus strongly. These traits stem from the special minerals formed as volcanic glass and ash weather.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Andosols form where volcanic ash and related materials accumulate and weather, typically in humid climates that promote the rapid alteration of volcanic glass into short-range-order minerals. Fresh ash inputs can renew the soil over time. They occur around active and recent volcanoes worldwide, including the Pacific Rim, parts of the East African highlands, and volcanic islands, where they often underpin intensive farming.',
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
              term: 'Low bulk density',
              description:
                'A very light, porous soil resulting from its volcanic minerals and high organic matter, resisting compaction.',
            },
            {
              term: 'Water retention',
              description:
                'Holds large amounts of water, supporting crops well, though some Andosols are difficult to re-wet once dried.',
            },
            {
              term: 'Structure and workability',
              description:
                'Strong, stable aggregation gives good structure, easy rooting, and generally good workability.',
            },
            {
              term: 'Phosphorus fixation',
              description:
                'The active minerals bind phosphate strongly, so applied phosphorus can become poorly available to crops.',
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
          text: 'Andosols are among the more productive soils, so management focuses on overcoming phosphorus fixation and conserving their favourable structure and organic matter, while guarding against erosion on the steep terrain common in volcanic landscapes.',
        },
        {
          type: 'list',
          items: [
            'Manage phosphorus carefully, using placement and organic sources to counter strong fixation by the soil minerals',
            'Maintain organic matter, which is integral to the structure and fertility of these soils',
            'Protect against erosion on the steep slopes typical of volcanic terrain, using cover and conservation practices',
            'Avoid over-drying, since some Andosols become water-repellent and hard to re-wet once they dry out',
          ],
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Their fertility, good structure, and water-holding capacity make Andosols valuable agricultural soils. Tea is strongly associated with volcanic highland Andosols, and potatoes and a wide range of vegetables such as carrots and cabbages are grown intensively on them in volcanic farming regions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'tea' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'cabbage' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'crop', slug: 'tea' },
    { type: 'farming-system', slug: 'contour-farming' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph'],
  geographicScope:
    'Volcanic regions worldwide, including the Pacific Rim, East African highlands, and volcanic islands; properties depend on the age and type of the volcanic parent material and the climate.',
  climateContext:
    'Andosols develop most strongly in humid climates that promote rapid weathering of volcanic glass; the high rainfall of many volcanic highland regions supports both their formation and intensive cropping.',
  limitations: [
    'Strong phosphorus fixation means phosphate management is essential and general fertilizer rates may be inefficient without adjustment.',
    'Some Andosols become water-repellent and difficult to re-wet once dried, complicating water management.',
    'This entry is a general overview; phosphorus status, water behaviour, and erosion risk should be assessed locally.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor:
        'Andosol Reference Soil Group, volcanic ash soils, and properties',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Andosols and volcanic ash soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Andisols, phosphorus retention, and management',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General overview of volcanic ash soils',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Andosol',
    description:
      'Andosol explained: a volcanic ash soil with low bulk density, strong structure, and high water retention, but strong phosphorus fixation, and its best crops.',
    keywords: [
      'andosol',
      'volcanic ash soil',
      'andisol',
      'phosphorus fixation',
    ],
  },
  structuredData: { article: true },
};
