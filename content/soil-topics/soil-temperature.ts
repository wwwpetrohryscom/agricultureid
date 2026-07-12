import type { SoilTopicContent } from '@/types/content';

export const soilTemperature: SoilTopicContent = {
  id: 'soil-topic-soil-temperature',
  slug: 'soil-temperature',
  contentType: 'soil-topic',
  title: 'Soil Temperature',
  topicClass: 'physical',
  alternativeNames: ['Soil thermal regime'],
  category: 'Soil physical property',
  subcategory: 'Thermal regime',
  summary:
    'Soil temperature governs seed germination, root growth, microbial activity, and nutrient release rates, varying with air temperature, solar radiation, soil moisture, colour, and cover, and differing meaningfully between the surface and deeper layers.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil temperature reflects the balance of solar radiation absorbed at the surface, heat conducted through the soil profile, and heat lost through evaporation and radiation. It responds to air temperature but with a lag and a dampened range that increases with depth.',
    },
    {
      type: 'paragraph',
      text: 'Because soil warms and cools more slowly than air, and because moist soils generally warm more slowly than dry ones due to water’s high heat capacity, soil temperature at a given depth and time can differ substantially from the air temperature reported for the same day.',
    },
  ],
  keyFacts: [
    {
      label: 'Key drivers',
      value:
        'Solar radiation, air temperature, soil moisture, colour, and surface cover',
    },
    {
      label: 'Depth effect',
      value: 'Temperature swings dampen and lag with increasing depth',
    },
    {
      label: 'Measured by',
      value: 'Soil thermometers or buried temperature probes/dataloggers',
    },
    {
      label: 'Crop relevance',
      value: 'Minimum germination temperature varies by crop species',
    },
    {
      label: 'Biological effect',
      value:
        'Microbial activity and organic matter decomposition generally speed up with warmth, within limits',
    },
    {
      label: 'Managed by',
      value:
        'Mulching, residue management, row covers, and planting-date timing',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil temperature is',
      body: [
        {
          type: 'paragraph',
          text: 'Soil temperature is the result of an ongoing energy balance at and below the surface: incoming solar radiation, outgoing longwave radiation, conduction into deeper layers, and latent heat exchange through evaporation. Darker, drier, bare soils generally absorb and lose heat faster than lighter, moist, covered soils.',
        },
        {
          type: 'list',
          items: [
            'Surface temperature responds most quickly to daily weather and cover conditions',
            'Deeper layers show smaller daily swings and a time lag behind surface conditions',
            'Seasonal patterns are dampened but still present at greater depths',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why soil temperature matters',
      body: [
        {
          type: 'paragraph',
          text: 'Seed germination requires a minimum soil temperature that varies by species, and planting into soil that is too cold can result in poor or erratic emergence. Root growth, nutrient mineralisation, and microbial activity also respond to soil temperature, generally proceeding faster within a favourable warm range and slowing in cold soil.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Minimum germination and optimal growth temperatures are species-specific; no single soil temperature threshold applies across all crops.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How soil temperature is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Soil temperature is measured directly with soil thermometers inserted to a standard depth, or with buried temperature probes and dataloggers for continuous monitoring. Readings are typically taken at a consistent depth and time of day, since soil temperature varies through the day and with depth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'A single spot reading can be misleading; multi-day averages at a consistent depth are generally more reliable for planting-date decisions.',
        },
      ],
    },
    {
      id: 'influencing-factors',
      heading: 'Factors influencing soil temperature',
      body: [
        {
          type: 'table',
          caption:
            'General factors affecting soil temperature (not universal figures)',
          columns: ['Factor', 'General influence'],
          rows: [
            [
              'Soil moisture',
              'Wetter soils generally warm and cool more slowly than dry soils',
            ],
            [
              'Surface cover/colour',
              'Bare, dark soil generally warms faster than covered or light-coloured soil',
            ],
            [
              'Residue or mulch',
              'Surface residue or mulch generally moderates temperature swings',
            ],
            [
              'Depth',
              'Deeper soil layers show smaller, delayed temperature changes relative to the surface',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing soil temperature',
      body: [
        {
          type: 'paragraph',
          text: 'Growers influence soil temperature indirectly, primarily by managing surface cover and moisture, and by timing field operations to soil conditions rather than the calendar alone. Structures such as greenhouses provide more direct temperature control where warranted.',
        },
        {
          type: 'list',
          items: [
            'Use plastic mulch or row covers to raise soil temperature ahead of early planting in some systems',
            'Retain crop residue to moderate temperature extremes, at some cost to spring warming speed',
            'Base planting dates on measured soil temperature at seeding depth rather than the calendar alone',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Recommended planting soil temperatures are crop-specific; consult regional agronomic guidance for the crop in question rather than applying a single figure universally.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'frost' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'potato' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; typical soil temperature ranges and their agronomic significance vary strongly by climate and season.',
  climateContext:
    'Air temperature, solar radiation, and precipitation together drive soil temperature patterns, which vary substantially across climate zones and seasons.',
  limitations: [
    'Minimum germination and optimal growth temperatures are species-specific and are not exhaustively listed here.',
    'Soil temperature varies with depth, moisture, and cover, so single spot readings may not represent conditions at seeding depth over time.',
    'This entry describes general principles; planting-date decisions should follow local, crop-specific agronomic guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil temperature regimes and measurement',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil thermal properties and crop implications',
    },
    { sourceId: 'isric', citedFor: 'Global soil temperature regime data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil temperature and planting-date guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Temperature',
    description:
      'Soil temperature explained: what drives it, its effect on germination and microbial activity, how it is measured, and ways to manage it.',
    keywords: [
      'soil temperature',
      'soil thermal regime',
      'germination temperature',
      'soil warming',
    ],
  },
  structuredData: { article: true },
};
