import type { ClimateContent } from '@/types/content';

export const rainfall: ClimateContent = {
  id: 'climate-rainfall',
  slug: 'rainfall',
  contentType: 'climate',
  title: 'Rainfall',
  category: 'Climate factor',
  subcategory: 'Precipitation',
  climateClass: 'water',
  summary:
    'Rainfall is the primary natural water input for most agricultural systems, and its amount, timing, and reliability — not just its total — largely determine whether crops can be grown without irrigation and how production risk varies from season to season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rainfall (precipitation falling as rain) supplies the water that sustains rainfed agriculture, replenishes soil moisture, and recharges the surface and groundwater sources many irrigation systems depend on. Its agricultural significance depends not only on total amount over a season but on distribution — how rainfall is spread across the growing season — and on intensity, since heavy short bursts behave very differently in the soil than the same total delivered more gradually.',
    },
    {
      type: 'paragraph',
      text: 'Because rainfall is highly variable from year to year and place to place, agricultural planning typically considers not just long-term averages but the reliability of rainfall in a given region and season, which shapes decisions on crop choice, planting timing, and the extent to which irrigation is needed to supplement natural rainfall.',
    },
  ],
  keyFacts: [
    {
      label: 'Core role',
      value: 'Primary natural water input for rainfed crop and forage growth',
    },
    {
      label: 'Key dimensions',
      value: 'Total amount, seasonal distribution, and intensity',
    },
    {
      label: 'Rainfed vs irrigated',
      value:
        'Determines where and how reliably crops can be grown without irrigation',
    },
    {
      label: 'Excess effects',
      value:
        'Waterlogging, erosion, and increased pressure from moisture-favoured pests and diseases',
    },
    {
      label: 'Deficit effects',
      value: 'Reduced soil moisture available for crop and forage growth',
    },
    {
      label: 'Measurement',
      value:
        'Recorded by national meteorological networks and increasingly by satellite and radar estimates',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What rainfall is',
      body: [
        {
          type: 'paragraph',
          text: 'Rainfall is measured as depth (for example, millimetres) accumulated over a period, but the same total can arrive as a steady season-long drizzle or as a few intense storms, with very different effects on crops and soils. Distinguishing average annual rainfall from within-season distribution — how much falls during planting, flowering, or harvest windows — is essential to understanding its agricultural relevance.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Rainfed crops rely on rainfall, stored soil moisture, and, where practised, supplemental irrigation, to balance losses from evapotranspiration. Rainfall arriving during critical growth stages, such as germination, flowering, or grain fill, generally has more influence on yield than the same amount falling during less sensitive periods, which is one reason seasonal distribution matters as much as total rainfall.',
        },
      ],
    },
    {
      id: 'effects',
      heading: 'Effects of too much or too little',
      body: [
        {
          type: 'paragraph',
          text: 'Excess rainfall can saturate soils and cause waterlogging, leach nutrients below the root zone, delay field operations, and raise humidity in the crop canopy, favouring diseases such as downy mildew and gray mold. Insufficient rainfall reduces soil moisture available for germination, establishment, and growth, increasing reliance on stored soil water or irrigation.',
        },
      ],
    },
    {
      id: 'managing-or-adapting',
      heading: 'Managing and adapting',
      body: [
        {
          type: 'list',
          items: [
            'Irrigation to supplement rainfall shortfalls in dry periods or dry climates',
            'Drainage systems to remove excess water from saturated soils',
            'Crop and cultivar choice matched to typical local rainfall amount and seasonality',
            'Water harvesting and storage in regions with high rainfall variability',
          ],
        },
      ],
    },
    {
      id: 'measurement-and-variability',
      heading: 'Measurement and variability',
      body: [
        {
          type: 'paragraph',
          text: 'Rainfall is recorded using rain gauges and increasingly estimated using weather radar and satellite data, which help fill gaps between ground stations. Because rainfall varies substantially between nearby locations and from year to year, long-term averages alone are often insufficient for agricultural planning; local records and probability-based outlooks are commonly used alongside them.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'growing-season' },
  ],
  connections: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: ['evapotranspiration', 'yield'],
  geographicScope:
    'Global overview; rainfall amount, seasonality, and reliability vary enormously by region and are tracked by national meteorological services.',
  limitations: [
    'This is a general overview of rainfall as a climate factor, not region-specific rainfall data or a water-balance calculation for any crop.',
    'Local rainfall records and forecasts should be used for planting and irrigation decisions rather than global generalisations.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Precipitation measurement and climate standards',
    },
    { sourceId: 'noaa', citedFor: 'Precipitation monitoring and climate data' },
    { sourceId: 'fao', citedFor: 'Rainfall and rainfed agriculture context' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Water balance and irrigation supplementation',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rainfall',
    description:
      'A reference on rainfall: measurement and distribution, its role in rainfed agriculture, effects of excess and deficit, and management approaches.',
    keywords: [
      'rainfall',
      'precipitation',
      'rainfed agriculture',
      'water availability',
    ],
  },
  structuredData: { article: true },
};
