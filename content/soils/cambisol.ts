import type { SoilContent } from '@/types/content';

export const cambisol: SoilContent = {
  id: 'soil-cambisol',
  slug: 'cambisol',
  contentType: 'soil',
  title: 'Cambisol',
  alternativeNames: ['Brown soil (moderately developed)', 'Cambic soil'],
  category: 'Soil type',
  subcategory: 'Moderately developed soil',
  texture:
    'Commonly medium-textured and loamy, with a modestly altered subsoil that shows colour and structure development but little clay accumulation',
  summary:
    'A Cambisol is a young to moderately developed soil in which the subsoil has begun to change through weathering and structure formation but shows only the beginnings of horizon differentiation. Widespread and generally reasonable for agriculture, Cambisols underlie diverse farming across temperate and other regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cambisols are soils at an early to moderate stage of development, defined by a subsurface horizon that has been altered in place, showing changes in colour, structure, or the removal of carbonates, without the stronger features such as marked clay accumulation that characterise more developed soils. This modestly changed cambic horizon distinguishes them from very young soils on one hand and from strongly developed soils on the other.',
    },
    {
      type: 'paragraph',
      text: 'Because they represent an intermediate and common stage of soil formation, Cambisols are among the most widespread soils in the world, occurring across a great range of climates, parent materials, and landscapes. Most are reasonably good agricultural soils with few severe chemical limitations, and they support a wide variety of temperate and Mediterranean farming, from cereals and vegetables to vines and orchards.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Cambisol (World Reference Base), a moderately developed soil',
    },
    {
      label: 'Defining feature',
      value:
        'A cambic subsurface horizon altered by weathering and structure formation',
    },
    {
      label: 'Development stage',
      value:
        'Young to moderate, between weakly developed and strongly developed soils',
    },
    {
      label: 'Fertility',
      value:
        'Generally reasonable, though it varies widely with parent material and climate',
    },
    {
      label: 'Distribution',
      value:
        'Among the most widespread soils worldwide, across many climates and landscapes',
    },
    {
      label: 'Agricultural value',
      value:
        'Broadly suitable, supporting diverse temperate and Mediterranean cropping',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Cambisol is recognised by a subsoil that shows the beginnings of change, in colour, structure, or carbonate content, without the pronounced features of more developed soils. It marks a transitional stage in which soil-forming processes have modified the parent material but have not yet produced strongly differentiated horizons.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Cambisols form where weathering and structural development have proceeded far enough to alter the subsoil but not far enough to create the strong horizons of older, more developed soils, whether because the soils are relatively young, the climate is not strongly leaching, or erosion keeps the profile refreshed. This intermediate condition is very common, so Cambisols occur extensively across temperate, Mediterranean, boreal, and mountain regions and in the tropics.',
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
              term: 'Cambic horizon',
              description:
                'A subsurface horizon modestly altered in colour and structure, defining the Cambisol but lacking strong clay or oxide accumulation.',
            },
            {
              term: 'Texture and structure',
              description:
                'Commonly medium-textured with moderate structure, generally supporting good rooting and workability.',
            },
            {
              term: 'Fertility',
              description:
                'Usually reasonable, but strongly dependent on parent material, climate, and management, ranging from fertile to modest.',
            },
            {
              term: 'Variability',
              description:
                'Because they span many settings, Cambisols are diverse, and general statements must be qualified by local conditions.',
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
          text: 'Cambisols are generally productive and forgiving, so management follows good general soil practice, adapted to the wide variation in texture, depth, and fertility across the group.',
        },
        {
          type: 'list',
          items: [
            'Maintain organic matter and structure to sustain the generally good physical condition of these soils',
            'Base nutrient and lime applications on soil testing, since fertility varies widely across the group',
            'Manage erosion on sloping and mountain Cambisols, where profiles can be shallow',
            'Match crop choice to local depth, texture, and climate rather than to the group name alone',
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
          text: 'Their generally favourable physical condition and adequate fertility make Cambisols suitable for a broad range of crops. They are widely used for wheat, barley, and maize in temperate cropping, for potatoes and vegetables, and for grapes and other perennial crops on Mediterranean and hillside Cambisols.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'grape' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'luvisol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'chernozem' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-profile' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['soil-texture', 'crop-rotation'],
  geographicScope:
    'Global. Cambisols are among the most widespread soils, occurring across temperate, Mediterranean, boreal, mountain, and tropical regions; their properties vary greatly with local conditions.',
  climateContext:
    'Cambisols occur across a wide climatic range, forming wherever weathering has moderately altered the subsoil without the strong leaching or long development that produce more differentiated soils.',
  limitations: [
    'Cambisols are a diverse group spanning many climates and parent materials, so fertility and physical properties vary widely and cannot be generalised.',
    'On slopes and in mountains, Cambisols may be shallow and erosion-prone, limiting their agricultural depth and stability.',
    'This entry is a general overview; local assessment of depth, texture, and fertility is needed for specific management.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor:
        'Cambisol Reference Soil Group, cambic horizon, and distribution',
    },
    {
      sourceId: 'isric',
      citedFor:
        'Global information on Cambisols and moderately developed soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Moderately developed soils and management',
    },
    { sourceId: 'britannica', citedFor: 'General overview of Cambisols' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cambisol',
    description:
      'Cambisol explained: a widespread, moderately developed soil with a cambic subsoil horizon, generally good for diverse temperate and Mediterranean cropping.',
    keywords: [
      'cambisol',
      'cambic horizon',
      'brown soil',
      'moderately developed soil',
    ],
  },
  structuredData: { article: true },
};
