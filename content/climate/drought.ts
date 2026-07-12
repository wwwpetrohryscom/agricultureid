import type { ClimateContent } from '@/types/content';

export const drought: ClimateContent = {
  id: 'climate-drought',
  slug: 'drought',
  contentType: 'climate',
  title: 'Drought',
  category: 'Climate factor',
  subcategory: 'Water availability',
  climateClass: 'water',
  summary:
    'Drought is a period of below-normal water availability — from reduced precipitation, higher evaporative demand, or both — that lowers soil moisture and constrains crop growth, forage availability, and water supplies for agriculture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Drought is generally understood as a temporary, region-specific deficit in water availability relative to what is normal for that place and season, rather than a fixed condition defined by a single global threshold. Meteorological drought refers to a shortfall in precipitation; agricultural drought refers to insufficient soil moisture to meet crop and pasture water demand; and hydrological drought refers to reduced streamflow, groundwater, or reservoir levels. These forms often develop in sequence but can also occur somewhat independently.',
    },
    {
      type: 'paragraph',
      text: 'Agriculture is particularly sensitive to drought because crop and forage growth depend on soil moisture that is replenished by rainfall (and, where available, irrigation) and depleted by evapotranspiration. When moisture deficits persist through critical growth stages, effects can include reduced yield, forage shortages for grazing livestock, and, in severe or prolonged cases, wider economic and social impacts.',
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'Region- and season-specific deficit in water availability relative to normal conditions',
    },
    {
      label: 'Main forms',
      value: 'Meteorological, agricultural, and hydrological drought',
    },
    {
      label: 'Primary agricultural driver',
      value: 'Reduced soil moisture relative to crop and forage water demand',
    },
    {
      label: 'Key impacts',
      value:
        'Reduced yield and forage availability; strain on irrigation and livestock water supplies',
    },
    {
      label: 'Monitoring',
      value:
        'Tracked using precipitation, soil-moisture, and vegetation-based drought indices',
    },
    {
      label: 'Variability',
      value: 'Frequency and severity vary greatly by region, climate, and year',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What drought is',
      body: [
        {
          type: 'list',
          items: [
            'Meteorological drought — a shortfall in precipitation compared with the long-term normal for a location and season.',
            'Agricultural drought — insufficient soil moisture to meet crop, pasture, or forage water requirements, which can develop even during a relatively short precipitation gap if evaporative demand is high.',
            'Hydrological drought — reduced streamflow, groundwater levels, or reservoir storage, which typically develops and recovers more slowly than the other forms.',
          ],
        },
        {
          type: 'paragraph',
          text: 'These forms interact and can occur in different combinations depending on regional climate, water infrastructure, and land use.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Crop growth depends on a continuous supply of soil moisture to support cell expansion, nutrient uptake, and photosynthesis. When moisture becomes limiting, plants may close stomata to conserve water, which also reduces carbon dioxide uptake and photosynthesis; if the deficit persists, especially during sensitive stages such as flowering and grain fill, yield and quality can decline substantially. The specific sensitivity of a crop to drought depends on its species, growth stage, root system, and the local soil’s water-holding capacity.',
        },
      ],
    },
    {
      id: 'effects',
      heading: 'Broader effects',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond direct crop impacts, drought reduces pasture and forage growth for grazing livestock and can lower the quality and quantity of available feed and water. Extended dry periods can also increase soil erosion risk once vegetation cover thins, elevate wildfire risk in some landscapes, and place pressure on irrigation water supplies shared across users.',
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
            'Efficient irrigation methods, such as drip or sprinkler systems, that reduce water losses',
            'Soil management practices that improve water infiltration and retention, such as maintaining organic matter and reducing compaction',
            'Drought-tolerant or shorter-season crop varieties suited to the local climate',
            'Conservation agriculture and residue retention to reduce evaporative losses and protect soil structure',
            'Water-use planning and scheduling that prioritise critical crop growth stages',
          ],
        },
      ],
    },
    {
      id: 'monitoring-and-early-warning',
      heading: 'Monitoring and early warning',
      body: [
        {
          type: 'paragraph',
          text: 'National meteorological and agricultural agencies track drought using combinations of precipitation records, soil-moisture data, streamflow and reservoir levels, and satellite-derived vegetation indices, often summarised through standard drought indices and early-warning services. These tools support decisions on water allocation, planting, and, where available, drought relief programmes, though specific indices and thresholds vary by country and agency.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  connections: [
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'maize' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration', 'yield'],
  geographicScope:
    'Global overview; drought frequency, severity, and definitions vary by climate zone and are tracked using region-specific indices.',
  limitations: [
    'This is a general overview of drought as a climate factor, not a forecast, regional drought index, or crop-specific water-deficit guidance.',
    'No universal precipitation or soil-moisture thresholds are given; drought is defined relative to local normals.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Drought classification and monitoring standards',
    },
    { sourceId: 'noaa', citedFor: 'Drought monitoring and climate data' },
    {
      sourceId: 'fao',
      citedFor: 'Agricultural drought impacts and management',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Water availability and irrigation context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Drought',
    description:
      'A reference on drought: meteorological, agricultural, and hydrological forms, effects on crops and livestock, and approaches to managing drought risk.',
    keywords: [
      'drought',
      'agricultural drought',
      'water scarcity',
      'drought management',
    ],
  },
  structuredData: { article: true },
};
