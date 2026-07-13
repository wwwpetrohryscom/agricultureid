import type { SoilTopicContent } from '@/types/content';

export const soilPorosity: SoilTopicContent = {
  id: 'soil-topic-soil-porosity',
  slug: 'soil-porosity',
  contentType: 'soil-topic',
  title: 'Soil Porosity',
  topicClass: 'physical',
  alternativeNames: ['Pore space', 'Total porosity'],
  category: 'Soil physical property',
  subcategory: 'Pore space',
  summary:
    'Soil porosity is the fraction of the soil volume made up of pores between and within particles. The amount, size distribution, and connectivity of pores govern how the soil stores and transmits water and air.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil porosity is the proportion of the total soil volume occupied by pore space rather than solid particles. These pores hold the water and air that roots and soil organisms depend on, so porosity is fundamental to how a soil functions. It is not only the total amount of pore space that matters, but also the distribution of pore sizes and how well the pores connect.',
    },
    {
      type: 'paragraph',
      text: 'Porosity is closely tied to bulk density and structure: as a soil is compacted and its bulk density rises, total pore space falls, and the large pores that drain and aerate the soil are lost first. Well-structured soils with stable aggregates maintain a mix of large and small pores that balances drainage, aeration, and water storage.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value: 'The fraction of total soil volume that is pore space',
    },
    {
      label: 'Macropores',
      value:
        'Large pores that drain freely and conduct air and rapid water flow',
    },
    {
      label: 'Micropores',
      value:
        'Small pores that retain water against gravity and hold plant-available water',
    },
    {
      label: 'Related to',
      value:
        'Bulk density and structure: higher bulk density means lower porosity',
    },
    {
      label: 'Texture effect',
      value:
        'Fine soils have high total porosity dominated by small pores; sandy soils have fewer, larger pores',
    },
    {
      label: 'Why it matters',
      value: 'Governs water storage, drainage, aeration, and root growth',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil porosity is',
      body: [
        {
          type: 'paragraph',
          text: 'Porosity describes the void space in soil, but its function depends on pore size. Large pores, or macropores, drain under gravity and provide the pathways for air exchange and rapid water movement, while small pores, or micropores, hold water by capillary forces and supply much of the water available to plants. A productive soil generally needs both.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Total porosity',
              description:
                'The overall fraction of soil volume occupied by pores of all sizes.',
            },
            {
              term: 'Macropores',
              description:
                'Larger pores that drain freely, transmit air, and conduct rapid water flow.',
            },
            {
              term: 'Micropores',
              description:
                'Smaller pores that retain water against gravity and store plant-available water.',
            },
          ],
        },
      ],
    },
    {
      id: 'texture-and-structure',
      heading: 'Texture, structure, and pore space',
      body: [
        {
          type: 'paragraph',
          text: 'Texture and structure together shape a soil pore network. Fine-textured soils such as clays have a high total porosity but it is dominated by tiny pores, so they store much water but drain and aerate slowly. Sandy soils have lower total porosity dominated by large pores, so they drain and aerate readily but store less water. Good structure adds larger pores between aggregates, improving drainage and aeration in finer soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Total porosity alone can be misleading: a clay soil may have more total pore space than a sand yet drain far more slowly, because its pores are much smaller.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why porosity matters',
      body: [
        {
          type: 'paragraph',
          text: 'The balance of pore sizes determines whether a soil can supply water and air at the same time. Too few macropores and the soil waterlogs and loses aeration; too few micropores and it drains too fast to store water for crops. Roots exploit existing pores and channels, so a well-connected pore network also supports deeper, more effective rooting.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Protecting and improving porosity',
      body: [
        {
          type: 'list',
          items: [
            'Avoid compaction from traffic and tillage on wet soil, which destroys macropores first',
            'Build and protect stable aggregation through organic matter inputs and reduced disturbance',
            'Maintain continuous root channels and biopores by including deep-rooting crops and reducing tillage',
            'Improve drainage where persistent saturation collapses and clogs the pore network',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Compaction reduces porosity by collapsing the large pores that matter most for drainage and aeration, even when a substantial volume of small pores remains.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'bulk-density' },
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'Global. Porosity is a universal soil property, but the amount and size distribution of pores vary with local texture, structure, organic matter, and management.',
  limitations: [
    'Total porosity does not indicate function on its own; pore size distribution and connectivity determine drainage, aeration, and water storage.',
    'Pore networks change with wetting, drying, tillage, and biological activity, so porosity is dynamic rather than fixed.',
    'This entry describes general principles; site assessment is needed to judge whether pore space is adequate for a given crop.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil pore space, pore size classes, and function',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil porosity and water and air relations',
    },
    { sourceId: 'isric', citedFor: 'Global soil physical property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Porosity and soil health assessment',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Porosity',
    description:
      'Soil porosity explained: total pore space, macropores and micropores, how texture and structure shape it, and why it governs water, air, and roots.',
    keywords: [
      'soil porosity',
      'soil pore space',
      'macropores micropores',
      'total porosity',
    ],
  },
  structuredData: { article: true },
};
