import type { SoilTopicContent } from '@/types/content';

export const bulkDensity: SoilTopicContent = {
  id: 'soil-topic-bulk-density',
  slug: 'bulk-density',
  contentType: 'soil-topic',
  title: 'Bulk Density',
  topicClass: 'physical',
  alternativeNames: ['Soil bulk density', 'Dry bulk density'],
  category: 'Soil physical property',
  subcategory: 'Mass and pore relationships',
  summary:
    'Bulk density is the dry mass of soil per unit of total volume, including pore space. It is a simple, widely used indicator of compaction and pore space, with higher values signalling denser soil that can restrict roots, water, and air.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bulk density is defined as the oven-dry mass of soil divided by its total volume, including the volume of the pores between and within particles. Because it counts pore space in the volume, bulk density falls as a soil becomes more porous and rises as it becomes denser or more compacted, making it one of the most widely used physical indicators in soil assessment.',
    },
    {
      type: 'paragraph',
      text: 'Bulk density is distinct from particle density, which is the mass of the solid particles alone without pore space. The two are related through total porosity: for a given particle density, a higher bulk density corresponds to less pore space. This relationship is why bulk density is used to infer porosity, aeration, and the risk of root restriction.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'Oven-dry mass of soil per unit total volume, including pore space',
    },
    {
      label: 'Usually expressed in',
      value: 'Grams per cubic centimetre or megagrams per cubic metre',
    },
    {
      label: 'Relationship to porosity',
      value: 'Higher bulk density corresponds to lower total pore space',
    },
    {
      label: 'Increased by',
      value: 'Compaction, traffic on wet soil, and loss of structure',
    },
    {
      label: 'Texture effect',
      value:
        'Sandy soils tend toward higher values; well-structured, organic-rich soils tend lower',
    },
    {
      label: 'Why it matters',
      value:
        'Indicates compaction and pore space that affect roots, water, and air',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What bulk density is',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk density measures how much dry soil mass occupies a given total volume, so it captures the combined effect of the solid particles and the pore space around them. A soil with abundant, well-connected pores has a lower bulk density than a compacted soil of the same texture, because the same mass of solids occupies a larger volume.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Bulk density',
              description:
                'Dry mass of soil divided by total volume, including pores.',
            },
            {
              term: 'Particle density',
              description:
                'Mass of the mineral solids alone, excluding pore space.',
            },
            {
              term: 'Total porosity',
              description:
                'The fraction of soil volume that is pore space, inferred from bulk and particle density.',
            },
          ],
        },
      ],
    },
    {
      id: 'measuring-it',
      heading: 'How it is measured',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk density is commonly measured by taking a soil sample of known volume, often with a metal core of fixed dimensions, drying it, and weighing the dry soil. Dividing the dry mass by the core volume gives the bulk density. Careful sampling that preserves the natural volume without compressing or loosening the soil is essential for a reliable result.',
        },
      ],
    },
    {
      id: 'what-affects-it',
      heading: 'What affects bulk density',
      body: [
        {
          type: 'list',
          items: [
            'Texture: sandy soils generally have higher bulk density than well-aggregated finer soils, though compaction can raise any soil',
            'Compaction from traffic, tillage pans, or livestock, especially on wet soil, increases bulk density',
            'Organic matter and stable aggregation lower bulk density by supporting pore space',
            'Structure: loss of aggregation collapses pores and raises bulk density',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'The bulk density at which roots become restricted depends on soil texture, so a single value cannot be interpreted without knowing the soil it came from.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why it matters and how to manage it',
      body: [
        {
          type: 'paragraph',
          text: 'High bulk density signals reduced pore space, which limits root penetration, water infiltration and storage, and gas exchange. Managing it centres on avoiding compaction and rebuilding structure: keeping traffic off wet soil, maintaining organic matter, and using targeted loosening only where a dense layer is confirmed by measurement.',
        },
        {
          type: 'list',
          items: [
            'Avoid field traffic and tillage when the soil is wet and most vulnerable to compaction',
            'Maintain organic matter and stable aggregation to keep pore space open',
            'Use targeted subsoiling only where a compacted layer is confirmed, and address its cause',
            'Interpret measured values against texture-appropriate reference ranges',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-porosity' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-aeration' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'machinery', slug: 'subsoiler' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'Global. Bulk density is a universal physical property, but the values that indicate compaction or root restriction depend on local soil texture and must be interpreted accordingly.',
  limitations: [
    'A given bulk density value means different things in different textures, so interpretation requires knowing the soil type.',
    'Reliable measurement depends on sampling that preserves the natural soil volume without compression or disturbance.',
    'Bulk density indicates pore space indirectly; it does not by itself measure aeration, water storage, or root health.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Bulk density, measurement, and interpretation for compaction',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil bulk density and porosity concepts',
    },
    { sourceId: 'isric', citedFor: 'Global soil bulk density data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Bulk density as a soil health indicator',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Density',
    description:
      'Soil bulk density explained: dry mass per total volume, how it relates to porosity and compaction, how it is measured, and why it affects roots and water.',
    keywords: [
      'bulk density',
      'soil bulk density',
      'soil compaction indicator',
      'soil porosity',
    ],
  },
  structuredData: { article: true },
};
