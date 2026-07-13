import type { ClimateContent } from '@/types/content';

export const vaporPressureDeficit: ClimateContent = {
  id: 'climate-vapor-pressure-deficit',
  slug: 'vapor-pressure-deficit',
  contentType: 'climate',
  title: 'Vapor Pressure Deficit',
  alternativeNames: ['VPD'],
  category: 'Climate metric',
  subcategory: 'Atmospheric moisture demand',
  climateClass: 'metric',
  summary:
    'Vapor pressure deficit (VPD) is the difference between how much water vapour the air currently holds and the maximum it could hold at that temperature. It expresses the drying power of the air and strongly influences plant transpiration and water demand.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vapor pressure deficit (VPD) measures how far the air is from being saturated with water vapour. It is the gap between the saturation vapour pressure at the current temperature and the actual vapour pressure present. A large VPD means dry air with a strong tendency to draw moisture from wet surfaces and from plants; a small VPD means humid air close to saturation, with little drying power.',
    },
    {
      type: 'paragraph',
      text: 'Because it combines temperature and humidity into a single measure of atmospheric moisture demand, VPD is often a better guide to how hard plants are being pushed to transpire than relative humidity alone. It is widely used in greenhouse climate control and increasingly in field agronomy to understand transpiration, water stress, and crop water demand.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'The gap between saturation and actual vapour pressure at a given temperature',
    },
    {
      label: 'What it represents',
      value: 'The drying power, or evaporative demand, of the air',
    },
    {
      label: 'Depends on',
      value: 'Both air temperature and humidity together',
    },
    {
      label: 'High VPD',
      value: 'Dry air that strongly promotes transpiration and water loss',
    },
    {
      label: 'Low VPD',
      value: 'Humid, near-saturated air with little drying power',
    },
    {
      label: 'Common use',
      value:
        'Greenhouse climate control and understanding crop water demand and stress',
    },
  ],
  sections: [
    {
      id: 'what-vpd-is',
      heading: 'What VPD is',
      body: [
        {
          type: 'paragraph',
          text: 'The air can hold only so much water vapour at a given temperature — the saturation point — and warmer air can hold more than cooler air. VPD is the difference between that saturation capacity and the amount of vapour actually present. It is closely related to relative humidity but is generally more informative for plants, because it accounts for how the air’s capacity changes with temperature.',
        },
        {
          type: 'paragraph',
          text: 'When VPD is high, the steep gradient between the moist interior of a leaf and the drier surrounding air pulls water out of the plant through its stomata; when VPD is low, that gradient is weak and transpiration slows.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-plants',
      heading: 'Why it matters for plants',
      body: [
        {
          type: 'paragraph',
          text: 'VPD is a key driver of transpiration, the loss of water vapour from plants. Under high VPD, plants transpire faster and may close their stomata to conserve water, which also slows the uptake of carbon dioxide and can limit photosynthesis; under very low VPD, transpiration and the flow of water and nutrients it drives may be too slow, and prolonged high humidity can favour some diseases. There is generally a comfortable middle range that varies by crop.',
        },
        {
          type: 'list',
          items: [
            'High VPD increases transpiration and can trigger stomatal closure and water stress',
            'Very low VPD can slow transpiration and nutrient movement and encourage some diseases',
            'VPD interacts with soil water supply: high demand is more damaging when soil water is limited',
            'Managing VPD is central to controlled-environment and greenhouse production',
          ],
        },
      ],
    },
    {
      id: 'use-in-management',
      heading: 'Use in management',
      body: [
        {
          type: 'paragraph',
          text: 'In greenhouses and other controlled environments, growers actively manage VPD through heating, ventilation, humidification, and shading to keep transpiration and growth in a favourable range. In the field, VPD helps explain patterns of water demand and stress and contributes to estimates of evapotranspiration used in irrigation planning, alongside radiation, wind, and temperature.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'VPD is a property of the air’s moisture demand; the actual stress a crop experiences also depends on how much water is available in the soil to meet that demand.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'This entry explains VPD as a concept and its role in transpiration and management. The favourable VPD range and the responses to it are crop- and situation-specific, and VPD is one of several interacting factors — including radiation, wind, temperature, and soil water — that together determine crop water use. Specific target values are not given here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'evapotranspiration' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'A general explanation of vapor pressure deficit and its role in plant water use. Favourable ranges and responses are crop- and situation-specific rather than universal.',
  climateContext:
    'VPD combines temperature and humidity into a measure of atmospheric moisture demand and rises with warming; it is central to understanding transpiration and heat-and-drought stress.',
  limitations: [
    'This entry explains the VPD concept and its role; it does not give target VPD values, which are crop- and situation-specific.',
    'VPD describes atmospheric demand only; actual crop stress also depends on soil water availability and other interacting factors.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor:
        'Atmospheric humidity and vapour-pressure measurement standards',
    },
    {
      sourceId: 'fao',
      citedFor: 'Vapour-pressure terms in crop evapotranspiration estimation',
    },
    { sourceId: 'noaa', citedFor: 'Humidity and atmospheric moisture data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Vapor Pressure Deficit (VPD)',
    description:
      'Vapor pressure deficit explained: how the drying power of air drives plant transpiration, its role in greenhouse control, and links to water stress.',
    keywords: [
      'vapor pressure deficit',
      'VPD',
      'transpiration',
      'greenhouse climate control',
    ],
  },
  structuredData: { article: true },
};
