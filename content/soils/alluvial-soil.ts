import type { SoilContent } from '@/types/content';

export const alluvialSoil: SoilContent = {
  id: 'soil-alluvial',
  slug: 'alluvial-soil',
  contentType: 'soil',
  title: 'Alluvial Soil',
  alternativeNames: ['Floodplain soil', 'River deposit soil'],
  category: 'Soil type',
  subcategory: 'Recently deposited (fluvial) soil',
  texture:
    'Variable, often layered; ranges from sandy to clayey depending on the depositing river or flood event',
  summary:
    "Alluvial soil forms from sediment deposited by rivers, streams, and floodwater. It is typically layered, often naturally fertile, and widespread on floodplains, river terraces, and deltas that support some of the world's most intensively farmed land.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Alluvial soils build up as rivers and floodwater deposit sediment in layers reflecting successive flood events. Texture and composition vary with the sediment source and the energy of deposition: coarser material tends to settle near the main channel, while finer silt and clay accumulate in slower-moving backwater areas.',
    },
    {
      type: 'paragraph',
      text: "Because they are geologically young, alluvial soils typically have less-developed profile horizons than older soils in the landscape. Many of the world's great river floodplains and deltas, such as those of the Nile, Ganges, and Mekong, have historically depended on periodic flooding to replenish soil fertility, though modern flood control and dam infrastructure have altered this natural process in many regions.",
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value:
        'Recently deposited (fluvial) soil from river or floodwater sediment',
    },
    {
      label: 'Formation',
      value: 'Layered deposits reflecting sequential flooding events',
    },
    {
      label: 'Texture',
      value:
        'Variable; often loamy, ranging from sandy to clayey by position within the floodplain',
    },
    {
      label: 'Fertility',
      value:
        'Often naturally fertile due to mineral-rich sediment and organic matter deposition',
    },
    {
      label: 'Drainage',
      value:
        'Variable; low-lying areas can be poorly drained or prone to waterlogging',
    },
    {
      label: 'Distribution',
      value: 'Major river floodplains, deltas, and terraces worldwide',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Alluvial soils are classified by their mode of formation, recent river or floodwater deposition, rather than by a single fixed texture. Because deposition reflects the specific history of flood events at a site, alluvial soils often show pronounced layering and can vary substantially even within a small area.',
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
              term: 'Layering and stratification',
              description:
                'Distinct layers of differing texture often reflect separate flood or deposition events over time.',
            },
            {
              term: 'Fertility',
              description:
                'Sediment carried by rivers is often mineral- and nutrient-rich, historically replenishing fertility with each flood cycle where natural flooding still occurs.',
            },
            {
              term: 'Drainage variability',
              description:
                'Low-lying floodplain positions, such as backswamps, can be poorly drained or prone to waterlogging, in contrast to better-drained terraces nearby.',
            },
            {
              term: 'Texture variability',
              description:
                'Ranges from coarse, sandy material near former channels to fine silt and clay in slower-moving backwater areas.',
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
          text: 'Managing alluvial soils means recognising the substantial variability that can occur across short distances within the same floodplain, and adapting irrigation, drainage, and fertility practices accordingly.',
        },
        {
          type: 'list',
          items: [
            'Match irrigation and drainage practice to position within the floodplain, since better-drained terraces and low-lying backswamp areas often need different approaches',
            'Maintain organic matter and structure, particularly where flood control has reduced natural fertility replenishment',
            'Manage flood risk and water-control infrastructure where relevant to the local landscape',
            'Monitor for waterlogging in low-lying positions within the same field or farm',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Many major river systems now have dams and flood-control infrastructure that have altered natural sediment and nutrient replenishment; current fertility on long-cultivated alluvial land may depend more on active management than on historical flooding alone.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is well suited to level, water-retentive alluvial lowland soils common in many delta and floodplain regions. Wheat performs well on well-drained alluvial terraces, and sugarcane is widely grown on major alluvial floodplain and delta soils in warm climates.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing an alluvial soil',
      body: [
        {
          type: 'paragraph',
          text: 'Given the high small-scale variability typical of alluvial deposits, soil survey and site-specific testing to characterise layering, texture, and drainage class are particularly important for reliable management decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugarcane' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  glossaryTerms: ['soil-texture', 'macronutrient', 'yield'],
  geographicScope:
    'General soil-science overview of alluvial soils on river floodplains, terraces, and deltas worldwide; specific fertility, texture, and drainage vary greatly by river system and landscape position.',
  climateContext:
    'Historically shaped by seasonal flooding and monsoon- or snowmelt-driven river regimes; modern dams and flood control have altered natural sediment and nutrient replenishment in many regions.',
  limitations: [
    'Alluvial soils vary substantially over short distances depending on position within the floodplain; local soil survey should guide management rather than general description.',
    'Modern water infrastructure has changed natural flooding and sediment-deposition patterns in many major river systems, altering the fertility dynamics described historically.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, drainage, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Floodplain water management and irrigation context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Alluvial Soil',
    description:
      'Alluvial soil explained: river and floodplain sediment formation, layering, natural fertility, drainage variability, and crop suitability considerations.',
    keywords: [
      'alluvial soil',
      'floodplain soil',
      'river deposit soil',
      'soil fertility',
    ],
  },
  structuredData: { article: true },
};
