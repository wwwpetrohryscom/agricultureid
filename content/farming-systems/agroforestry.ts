import type { FarmingSystemContent } from '@/types/content';

export const agroforestry: FarmingSystemContent = {
  id: 'system-agroforestry',
  slug: 'agroforestry',
  contentType: 'farming-system',
  title: 'Agroforestry',
  systemClass: 'integrated',
  alternativeNames: ['Agroforestry system', 'Tree–crop–livestock integration'],
  category: 'Farming system',
  subcategory: 'Integrated system',
  summary:
    'Agroforestry deliberately combines trees or shrubs with crops, livestock, or both on the same land, aiming to capture beneficial interactions among the components rather than growing each in isolation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Agroforestry is the intentional integration of woody perennials — trees or shrubs — with crops and/or livestock on the same piece of land, either at the same time or in a planned sequence. What distinguishes it from a farm that simply has some trees on it is deliberate design: species, spacing, and management are chosen so the tree component interacts with the crop or livestock component in an intended way, such as providing shade, wind protection, forage, fixed nitrogen, or a secondary product like fruit or timber.',
    },
    {
      type: 'paragraph',
      text: 'Agroforestry covers a broad family of configurations — including alley cropping, silvopasture, windbreaks, riparian buffers, and home gardens — shaped strongly by regional climate, tree species, land tenure, and farm goals. Many forms are long-established in traditional farming systems, and the approach is increasingly studied for its potential role in diversification, erosion control, and land-use resilience.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Intentional integration of trees/shrubs with crops and/or livestock on the same land',
    },
    {
      label: 'Common configurations',
      value:
        'Alley cropping, silvopasture, windbreaks, riparian buffers, home gardens',
    },
    {
      label: 'Timeframes',
      value:
        'Combines components maturing at different speeds — trees over years to decades, crops seasonally',
    },
    {
      label: 'Products',
      value:
        'Can yield food, fodder, fuelwood, timber, and fruit or nut crops from the same land',
    },
    {
      label: 'Land-use interactions',
      value:
        'Trees can affect nearby crop microclimate, light, and water — effects vary by species and spacing',
    },
    {
      label: 'Adoption',
      value:
        'Long-established in many traditional systems; also promoted for diversification and resilience',
    },
  ],
  sections: [
    {
      id: 'what-agroforestry-is',
      heading: 'What agroforestry is',
      body: [
        {
          type: 'paragraph',
          text: 'Agroforestry is defined by intent and design rather than by the mere presence of trees on farmland. A hedgerow left standing by chance is not agroforestry in the same sense as a deliberately spaced row of nitrogen-fixing trees planted to shade and feed an understory crop, or a pasture managed specifically to combine forage, livestock, and scattered or planted trees.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Alley cropping',
              description:
                'Growing crops in the open alleys between rows of planted trees or shrubs.',
            },
            {
              term: 'Silvopasture',
              description:
                'Deliberately combining trees, forage, and grazing livestock on the same land.',
            },
            {
              term: 'Windbreak / shelterbelt',
              description:
                'A planted line of trees or shrubs designed to reduce wind speed and erosion on adjacent land.',
            },
          ],
        },
      ],
    },
    {
      id: 'common-configurations',
      heading: 'Common configurations',
      body: [
        {
          type: 'table',
          caption: 'Common agroforestry configurations',
          columns: ['Configuration', 'Description'],
          rows: [
            [
              'Alley cropping',
              'Crops grown in alleys between rows of trees or shrubs',
            ],
            [
              'Silvopasture',
              'Trees, forage, and grazing livestock combined on the same land',
            ],
            [
              'Windbreaks / shelterbelts',
              'Tree or shrub rows planted to reduce wind erosion and protect adjacent crops',
            ],
            [
              'Home gardens',
              'Diverse mixes of trees, shrubs, and crops managed intensively around a homestead',
            ],
          ],
        },
      ],
    },
    {
      id: 'how-components-interact',
      heading: 'How the components interact',
      body: [
        {
          type: 'paragraph',
          text: 'Trees can moderate microclimate by providing shade and reducing wind speed, some species fix atmospheric nitrogen or cycle nutrients from deeper soil layers, and root systems can help stabilize soil. As trees mature, however, they also compete with nearby crops for light, water, and nutrients, so the balance between benefit and competition depends heavily on species choice, spacing, and ongoing management.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Interactions between trees, crops, and livestock can be positive or negative depending on species selection, spacing, and management. A poorly designed system can suppress crop yield through excessive shading or root competition rather than improving conditions.',
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Diversifies products and income from the same land (food, fodder, fuelwood, timber, fruit)',
            'Can moderate microclimate, reducing heat, wind, and soil-moisture stress on adjacent crops',
            'May contribute to soil organic matter and support greater on-farm biodiversity',
            'Tree and shrub cover can reduce wind and water erosion',
          ],
        },
        {
          type: 'list',
          items: [
            'Tree components typically return value more slowly than annual crops',
            'Adds management complexity compared with a single-enterprise farm',
            'Trees can compete with crops for light, water, and nutrients if poorly designed',
            'Long-term tree investment interacts with land tenure and planning horizons',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not provide yield, income, or carbon-sequestration figures for agroforestry. Outcomes depend heavily on the specific tree and crop or livestock combination, spacing, climate, and management, and cannot be generalized to a single result.',
        },
      ],
    },
    {
      id: 'where-agroforestry-is-used',
      heading: 'Where agroforestry is used',
      body: [
        {
          type: 'paragraph',
          text: 'Agroforestry is practiced across tropical, subtropical, and temperate regions in many traditional and modern forms, from home gardens and shaded perennial-crop systems in the tropics to windbreaks and silvopasture in temperate zones. Suitable tree species, spacing, and configuration depend strongly on local climate, soils, and land-use goals.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
  ],
  connections: [
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
  ],
  glossaryTerms: ['perennial-crop', 'agronomy', 'crop-rotation'],
  geographicScope:
    'Agroforestry is practiced across tropical, subtropical, and temperate regions worldwide; suitable tree and crop combinations are strongly climate- and site-specific.',
  climateContext:
    'Tree species selection, growth rates, and the balance of shade versus competition all depend heavily on local rainfall and temperature patterns.',
  limitations: [
    'Agroforestry covers a very wide range of configurations and species combinations; this entry describes general principles rather than any specific design.',
    'Interactions between trees, crops, and livestock can be beneficial or competitive depending on species, spacing, and management, so outcomes cannot be generalized to a single result.',
    'This entry does not provide yield, income, or carbon figures, since these depend heavily on the specific system and region.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Agroforestry systems and land-use overview' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Agroforestry practices in temperate farming systems',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Agroforestry research and tree–crop–livestock interactions',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for agroforestry and land-use diversification',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Agroforestry',
    description:
      'Agroforestry explained: how trees are deliberately combined with crops and livestock, common configurations, and honest benefits and trade-offs.',
    keywords: [
      'agroforestry',
      'silvopasture',
      'alley cropping',
      'tree crop integration',
    ],
  },
  structuredData: { article: true },
};
