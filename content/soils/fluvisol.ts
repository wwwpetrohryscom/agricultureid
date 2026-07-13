import type { SoilContent } from '@/types/content';

export const fluvisol: SoilContent = {
  id: 'soil-fluvisol',
  slug: 'fluvisol',
  contentType: 'soil',
  title: 'Fluvisol',
  alternativeNames: ['Alluvial floodplain soil', 'Young river soil'],
  category: 'Soil type',
  subcategory: 'Alluvial and floodplain soil',
  texture:
    'Variable and often stratified, ranging from sandy to clayey layers reflecting successive water-borne deposits',
  summary:
    'A Fluvisol is a young soil developed on recent river, lake, or marine sediments, typically showing layered deposits rather than well-developed horizons. Frequently fertile and occupying floodplains and deltas, Fluvisols support intensive agriculture, including some of the world most important rice and mixed-cropping regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fluvisols are young soils formed in recent water-deposited sediments, most often the alluvium laid down by rivers on floodplains and in deltas, but also lacustrine and marine deposits. Because the sediment is repeatedly renewed and the soils are geologically young, they usually lack the strongly developed horizons of older soils and instead show stratified layers of differing texture that record successive depositional events.',
    },
    {
      type: 'paragraph',
      text: 'Occupying the flat, low-lying, and often periodically flooded land along watercourses, Fluvisols are among the most agriculturally important soils in the world. Regular sediment deposition has historically renewed their fertility, and their position on level, well-watered land makes them favoured sites for intensive cropping, from wetland rice in Asian deltas to mixed arable and vegetable production on temperate river plains.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Fluvisol (World Reference Base), a young alluvial soil',
    },
    {
      label: 'Parent material',
      value: 'Recent river, lake, or marine sediments (alluvium)',
    },
    {
      label: 'Defining feature',
      value: 'Layered, stratified deposits rather than well-developed horizons',
    },
    {
      label: 'Typical setting',
      value:
        'Floodplains, deltas, and low-lying land subject to periodic flooding',
    },
    {
      label: 'Fertility',
      value:
        'Often naturally fertile, historically renewed by sediment deposition',
    },
    {
      label: 'Main constraint',
      value:
        'Flood risk and, in low positions, poor drainage requiring water control',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Fluvisol is recognised by evidence of its water-laid origin: distinct layers of contrasting texture, buried organic material, and an irregular distribution of organic matter with depth, all reflecting deposition rather than in-place soil development. This youthful, stratified character sets Fluvisols apart from more strongly weathered soils.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Fluvisols form where flowing or standing water repeatedly deposits sediment, chiefly on the floodplains and deltas of rivers, along lake margins, and in coastal and estuarine settings. Each flood or high-water event can add a fresh layer of sediment, so the soils remain young and layered. They are found worldwide along major and minor watercourses, and are especially extensive in the great river deltas of Asia and in floodplains across all inhabited continents.',
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
              term: 'Stratification',
              description:
                'Alternating layers of sand, silt, and clay reflecting successive depositional events rather than soil-forming horizons.',
            },
            {
              term: 'Fertility',
              description:
                'Frequently good, as fresh sediment can supply nutrients, though it varies with the source material of the alluvium.',
            },
            {
              term: 'Drainage',
              description:
                'Ranges from well drained on higher river terraces to poorly drained in low delta and backswamp positions.',
            },
            {
              term: 'Youth',
              description:
                'Minimal horizon development because the soils are geologically young and the parent sediment is repeatedly renewed.',
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
          text: 'Managing Fluvisols largely revolves around water: exploiting their fertility and level terrain while managing the flooding and, in low positions, the poor drainage that come with a floodplain setting.',
        },
        {
          type: 'list',
          items: [
            'Use flood control, embankments, and drainage where flooding or waterlogging threatens crops',
            'Exploit the level terrain and reliable water supply for irrigated cropping, including wetland rice in low, wet positions',
            'Match crops to the drainage of each part of the floodplain, from well-drained levees to wet backswamps',
            'Guard against contamination where river sediment may carry pollutants from upstream',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The stratified nature of Fluvisols means texture and drainage can change markedly with depth and across short distances, so behaviour is best assessed layer by layer and site by site.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Fluvisols support a wide range of crops thanks to their fertility and level, well-watered position. Wetland rice dominates low, seasonally flooded Fluvisols, particularly in Asian deltas, while better-drained river plains are widely used for wheat, maize, sugarcane, and intensive vegetable production such as tomatoes and onions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'onion' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-profile' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'crop', slug: 'rice' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  glossaryTerms: ['soil-texture', 'yield'],
  geographicScope:
    'Global. Fluvisols occur along rivers, lakes, and coasts worldwide, and are especially extensive in floodplains and deltas; their properties depend on the source and layering of the local sediment.',
  climateContext:
    'Fluvisols occur across climates but are agriculturally most prominent in monsoon and humid regions where large river systems deposit extensive alluvium suited to intensive, often irrigated cropping.',
  limitations: [
    'Fluvisol properties vary greatly with the source and layering of the sediment, so fertility and drainage cannot be assumed without local assessment.',
    'Their floodplain position exposes crops to flood risk and, in low areas, to waterlogging that requires water management.',
    'This entry is a general overview; texture, drainage, and any contamination should be assessed on site and layer by layer.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Fluvisol Reference Soil Group, formation, and distribution',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Fluvisols and alluvial soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Alluvial soils, drainage, and management',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Crop suitability on alluvial floodplain soils',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Fluvisol',
    description:
      'Fluvisol explained: young, layered alluvial soils of floodplains and deltas, their fertility and flood constraints, and suitability for rice and mixed crops.',
    keywords: ['fluvisol', 'alluvial soil', 'floodplain soil', 'delta soil'],
  },
  structuredData: { article: true },
};
