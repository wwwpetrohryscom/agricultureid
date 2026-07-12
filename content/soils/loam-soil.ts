import type { SoilContent } from '@/types/content';

export const loamSoil: SoilContent = {
  id: 'soil-loam',
  slug: 'loam-soil',
  contentType: 'soil',
  title: 'Loam Soil',
  alternativeNames: ['Balanced soil', 'Medium-textured soil'],
  category: 'Soil texture',
  subcategory: 'Medium-textured mineral soil',
  texture: 'Medium (a balanced mixture of sand, silt, and clay)',
  summary:
    'Loam soil is a medium-textured mineral soil with a relatively even mixture of sand, silt, and clay. It combines good water and nutrient retention with reasonable drainage and workability, making it widely regarded as the most versatile agricultural soil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Loam soil is defined not by the dominance of one particle size but by a balanced combination of sand, silt, and clay, typically without any single fraction overwhelming the others. This mixture gives loam soils properties that are intermediate between coarse sandy soils and fine clay soils.',
    },
    {
      type: 'paragraph',
      text: 'Because loam soils combine the drainage and workability benefits of sand with some of the water- and nutrient-holding benefits of clay and silt, they are often described as ideal or benchmark agricultural soils, though actual performance still depends on structure, organic matter, and management.',
    },
  ],
  keyFacts: [
    {
      label: 'Texture class',
      value: 'Medium (loam and related loam subclasses)',
    },
    {
      label: 'Dominant particle',
      value: 'None; balanced mixture of sand, silt, and clay',
    },
    {
      label: 'Drainage',
      value: 'Moderate; generally good without being excessive',
    },
    {
      label: 'Water holding',
      value:
        'Moderate to high, with a favourable proportion readily available to plants',
    },
    {
      label: 'Nutrient retention',
      value: 'Moderate to high cation exchange capacity',
    },
    {
      label: 'Workability',
      value: 'Wide moisture window; generally easy to cultivate',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Soil texture describes the relative proportions of sand, silt, and clay particles. Loam soils sit near the centre of the textural triangle, combining the coarse pore space of sand, the fine water-holding capacity of clay, and the moderate properties of silt. This balance is why loam is frequently used as the reference point against which other textures are compared.',
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
              term: 'Water retention',
              description:
                'A favourable balance of pore sizes holds a substantial amount of water in a form that remains available to plant roots, rather than draining away or being held too tightly.',
            },
            {
              term: 'Aeration',
              description:
                'A mix of pore sizes supports both adequate air movement and moisture retention, reducing the risk of either waterlogging or rapid drying.',
            },
            {
              term: 'Nutrient holding',
              description:
                'The clay and organic-matter fraction typically present in loam gives it a moderate to high cation exchange capacity, supporting steady nutrient supply.',
            },
            {
              term: 'Structure',
              description:
                'Loam soils generally form stable aggregates that resist both compaction and erosion better than pure sand or pure clay, particularly when organic matter is maintained.',
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
          text: 'Loam soils are comparatively forgiving to manage, but they still benefit from practices that maintain structure and organic matter, since texture alone does not guarantee long-term productivity.',
        },
        {
          type: 'list',
          items: [
            'Maintain organic matter and rotation diversity to sustain structure and fertility',
            'Avoid unnecessary tillage or traffic that can degrade otherwise favourable structure',
            'Monitor nutrient levels rather than assuming naturally high fertility persists without inputs',
            'Use cover crops to protect the soil surface between cash crops',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'A favourable texture class does not remove the need for ongoing soil testing and organic-matter management; loam soils can still be degraded by poor practices.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Loam soils support a wide range of crops because they avoid the extremes of drainage and water retention seen in sandy or clay soils. Cereals such as wheat and maize, as well as row crops such as soybean and tomato, generally perform well on well-managed loam soils, though local climate, rotation, and fertility practices remain important.',
        },
        {
          type: 'table',
          caption:
            'Illustrative crop performance by texture (general tendency)',
          columns: ['Crop', 'Loam suitability', 'Notes'],
          rows: [
            [
              'Wheat',
              'Well suited',
              'Benefits from balanced moisture and nutrient supply',
            ],
            [
              'Maize',
              'Well suited',
              'Responds to good rooting depth and moisture retention',
            ],
            [
              'Soybean',
              'Well suited',
              'Tolerates a range of moisture conditions typical of loam',
            ],
            [
              'Tomato',
              'Well suited',
              'Favours consistent moisture without waterlogging',
            ],
          ],
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a loam soil',
      body: [
        {
          type: 'paragraph',
          text: 'Texture can be estimated in the field by feel — loam soils feel smooth with some grittiness and form a ball that holds together but does not ribbon like clay — and confirmed by laboratory particle-size analysis. Soil survey information and local testing provide the most reliable basis for management decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  glossaryTerms: ['soil-texture', 'crop-rotation', 'cover-crop', 'yield'],
  geographicScope:
    'General soil-science overview applicable worldwide; local soils vary and should be assessed directly.',
  climateContext:
    'Loam soil performance still interacts with climate; rainfall pattern and temperature affect workability windows and irrigation needs even on well-balanced textures.',
  limitations: [
    'Individual fields vary; texture classes are general descriptions, not substitutes for local soil survey or testing.',
    'Loam is a broad category with several subclasses (e.g. sandy loam, silt loam, clay loam) that behave differently; local testing clarifies which applies.',
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
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Loam Soil',
    description:
      'How loam soil behaves: balanced texture, moderate drainage and water retention, versatile crop suitability, and management to sustain fertility.',
    keywords: ['loam soil', 'soil texture', 'balanced soil', 'soil fertility'],
  },
  structuredData: { article: true },
};
