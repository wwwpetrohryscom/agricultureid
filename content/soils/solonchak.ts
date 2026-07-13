import type { SoilContent } from '@/types/content';

export const solonchak: SoilContent = {
  id: 'soil-solonchak',
  slug: 'solonchak',
  contentType: 'soil',
  title: 'Solonchak',
  alternativeNames: ['Saline soil (WRB group)', 'Salt-accumulating soil'],
  category: 'Soil type',
  subcategory: 'Salt-affected soil',
  texture:
    'Variable texture, frequently with a salty surface crust or salt accumulations within the profile',
  summary:
    'A Solonchak is a soil with a high concentration of soluble salts accumulated in the profile, usually in arid and semi-arid regions or where saline groundwater and irrigation concentrate salts. Salinity severely limits most crops, so Solonchaks are largely unsuited to conventional cropping without reclamation, and support only salt-tolerant species.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Solonchaks are salt-affected soils defined by a high concentration of soluble salts, often visible as white salt crusts or efflorescences at or near the surface. They form where salts brought in by groundwater, irrigation water, or weathering are concentrated by evaporation rather than being flushed away, a situation typical of arid and semi-arid climates, closed basins, and low-lying coastal and irrigated land.',
    },
    {
      type: 'paragraph',
      text: 'The accumulated salts make Solonchaks strongly limiting for agriculture. High salinity reduces the ability of plant roots to take up water and can be directly toxic, so most crops fail or perform poorly on these soils. Their productive use depends on reclamation, chiefly leaching salts away with good-quality water and adequate drainage, and even then only salt-tolerant crops are generally viable.',
    },
  ],
  keyFacts: [
    {
      label: 'Reference group',
      value: 'Solonchak (World Reference Base), a salt-affected soil',
    },
    {
      label: 'Defining feature',
      value:
        'High concentration of soluble salts, often a visible surface salt crust',
    },
    {
      label: 'Formation',
      value:
        'Salts concentrated by evaporation of saline groundwater or irrigation water',
    },
    {
      label: 'Typical setting',
      value:
        'Arid and semi-arid regions, closed basins, and low-lying or poorly drained irrigated land',
    },
    {
      label: 'Main constraint',
      value: 'Salinity that limits water uptake and is toxic to most crops',
    },
    {
      label: 'Agricultural use',
      value:
        'Very limited without reclamation; only salt-tolerant crops are generally viable',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'A Solonchak is identified by its high soluble-salt content, frequently expressed as salt crusts and as poor, patchy plant growth. Salinity, rather than any physical property, is the overriding feature that governs how these soils behave and how they can be used.',
        },
      ],
    },
    {
      id: 'formation-and-distribution',
      heading: 'Formation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Solonchaks form where soluble salts accumulate faster than they are removed. In arid and semi-arid climates, evaporation draws saline groundwater upward and concentrates salts near the surface; in irrigated lands with inadequate drainage, salts in irrigation water build up in the root zone. They are common in dry regions worldwide, in interior basins and salt flats, and around the margins of salt lakes and low coasts.',
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
              term: 'High soluble salts',
              description:
                'Elevated concentrations of soluble salts in the profile, the defining and dominant property of the soil.',
            },
            {
              term: 'Salt crusts',
              description:
                'White salt accumulations that often form at or near the surface as water evaporates.',
            },
            {
              term: 'Osmotic stress',
              description:
                'High salinity lowers the ability of roots to take up water, effectively causing drought stress even in moist soil.',
            },
            {
              term: 'Variable structure',
              description:
                'Physical properties vary with texture and parent material, but salinity overrides them as the key limitation.',
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
          text: 'Reclaiming and using Solonchaks centres on reducing salinity in the root zone and preventing its return, which requires both good-quality water and the drainage to carry salts away.',
        },
        {
          type: 'list',
          items: [
            'Leach salts below the root zone using good-quality water, which is only effective with adequate drainage',
            'Install and maintain drainage so leached salts and shallow saline groundwater are removed rather than recycled',
            'Manage irrigation to avoid re-accumulation of salts, applying enough water to leach without waterlogging',
            'Where reclamation is impractical, restrict use to salt-tolerant crops or non-cropping land uses',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Solonchaks are genuinely poor cropping soils: without reliable good-quality water and drainage to leach and remove salts, reclamation fails and salts simply return.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Most crops are unsuited to Solonchaks in their natural state, and their agricultural value is low without reclamation. Where they are cropped, only relatively salt-tolerant species are viable: barley is among the more salt-tolerant cereals, and the date palm tolerates saline conditions in some desert oasis settings. Both still perform best once salinity has been reduced.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'date-palm' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'saline-soil' },
    { type: 'soil', slug: 'gleysol' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-sodicity' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'nutrient', slug: 'sodium' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph'],
  geographicScope:
    'Global, concentrated in arid and semi-arid regions, interior basins, salt flats, and poorly drained irrigated lands worldwide; severity depends on climate, groundwater, and water management.',
  climateContext:
    'Solonchaks are strongly associated with arid and semi-arid climates, where high evaporation relative to rainfall concentrates salts at the surface rather than flushing them from the profile.',
  limitations: [
    'Salinity makes Solonchaks genuinely poor for conventional cropping; their agricultural use is very limited without reclamation.',
    'Reclamation by leaching requires good-quality water and effective drainage, which are often unavailable in the dry regions where these soils occur.',
    'This entry is a general overview; salinity level, water quality, and drainage feasibility must be assessed locally before any cropping.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Solonchak Reference Soil Group and salt-affected soils',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Salinity, reclamation, and management of salt-affected soils',
    },
    {
      sourceId: 'isric',
      citedFor: 'Global information on Solonchaks and saline soils',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Saline soils, salinity effects, and reclamation',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Solonchak',
    description:
      'Solonchak explained: a salt-accumulating soil of arid regions, why salinity limits most crops, and how leaching and drainage reclaim it for salt-tolerant use.',
    keywords: [
      'solonchak',
      'saline soil',
      'salt-affected soil',
      'soil salinity',
    ],
  },
  structuredData: { article: true },
};
