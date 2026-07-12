import type { ClimateContent } from '@/types/content';

export const evapotranspiration: ClimateContent = {
  id: 'climate-evapotranspiration',
  slug: 'evapotranspiration',
  contentType: 'climate',
  title: 'Evapotranspiration',
  climateClass: 'water',
  alternativeNames: ['ET', 'Crop water use'],
  category: 'Climate factor',
  subcategory: 'Water-loss process',
  summary:
    'Evapotranspiration is the combined loss of water from soil and open water surfaces through evaporation and from plant leaves through transpiration, and it is the primary concept used to estimate how much water a crop needs and when to irrigate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Evapotranspiration combines two processes: evaporation of water from soil or open water surfaces, and transpiration of water through plant stomata. Together they form a single water-loss estimate driven by weather factors, including temperature, humidity, wind, and solar radiation, and by crop factors such as canopy cover and growth stage.',
    },
    {
      type: 'paragraph',
      text: 'A reference evapotranspiration value, calculated from weather data for a standard reference surface, is commonly combined with a crop-specific coefficient to estimate actual crop water use. This estimate underlies most irrigation-scheduling approaches and explains why crop water demand rises in hot, dry, windy, or sunny conditions and falls in cool, humid, or calm conditions.',
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'Combined water loss from soil or water-surface evaporation and plant transpiration',
    },
    {
      label: 'Weather drivers',
      value:
        'Rises with higher temperature, lower humidity, more wind, and more solar radiation',
    },
    {
      label: 'Crop drivers',
      value:
        'Varies with canopy cover, growth stage, and crop-specific water-use characteristics',
    },
    {
      label: 'Common estimation approach',
      value:
        'Reference evapotranspiration from weather data combined with a crop coefficient to estimate crop water use',
    },
    {
      label: 'Primary agricultural use',
      value:
        'Underlies irrigation scheduling by estimating how much water a crop has used and needs replaced',
    },
    {
      label: 'Relationship to drought',
      value:
        'High evapotranspiration combined with low rainfall accelerates the development of agricultural drought',
    },
  ],
  sections: [
    {
      id: 'what-evapotranspiration-is',
      heading: 'What evapotranspiration is',
      body: [
        {
          type: 'paragraph',
          text: 'Evapotranspiration is the sum of two distinct physical processes occurring together across a cropped field: evaporation from soil and water surfaces, and transpiration of water vapor from plant leaves.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Evaporation',
              description:
                'Water loss directly from soil or open water surfaces to the atmosphere.',
            },
            {
              term: 'Transpiration',
              description:
                'Water loss from plants as it moves through roots, stems, and leaves and evaporates through stomata.',
            },
            {
              term: 'Reference evapotranspiration',
              description:
                'A weather-driven estimate of water loss from a standardized reference surface, used as a baseline for crop water-use calculations.',
            },
            {
              term: 'Crop coefficient',
              description:
                'A factor applied to reference evapotranspiration to estimate the water use of a specific crop at a given growth stage.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-drives-it',
      heading: 'What drives it',
      body: [
        {
          type: 'list',
          items: [
            'Temperature — higher temperatures increase the rate of both evaporation and transpiration',
            'Humidity — drier air increases the rate of water loss',
            'Wind — moving air removes humid air from around leaves, increasing water loss',
            'Solar radiation — more incoming energy drives more evaporation and transpiration',
            'Canopy cover and growth stage — a fuller canopy generally transpires more than sparse or early-stage growth',
          ],
        },
      ],
    },
    {
      id: 'how-it-is-used-in-irrigation-scheduling',
      heading: 'How it is used in irrigation scheduling',
      body: [
        {
          type: 'paragraph',
          text: 'Weather-station or modeled reference evapotranspiration, combined with crop coefficients, estimates daily or weekly crop water use. Growers and irrigation-scheduling tools use this estimate to time and size irrigation applications, including for deficit-irrigation strategies that deliberately apply less than the estimated need at certain growth stages.',
        },
      ],
    },
    {
      id: 'measurement-and-estimation-methods',
      heading: 'Measurement and estimation methods',
      body: [
        {
          type: 'table',
          caption: 'Common approaches to estimating evapotranspiration',
          columns: ['Approach', 'General basis'],
          rows: [
            [
              'Weather-based reference ET models',
              'Calculated from temperature, humidity, wind, and solar radiation data',
            ],
            [
              'Pan evaporation',
              'Measured water loss from a standardized open pan, adjusted by a coefficient',
            ],
            [
              'Direct measurement (e.g., lysimeters)',
              'Measures actual water loss from a soil-plant system directly',
            ],
          ],
        },
      ],
    },
    {
      id: 'relationship-to-drought-and-water-management',
      heading: 'Relationship to drought and water management',
      body: [
        {
          type: 'paragraph',
          text: 'When evapotranspiration is high and rainfall is low, soil moisture depletes faster, accelerating the onset of agricultural drought. Understanding evapotranspiration is therefore central both to irrigation scheduling in normal conditions and to anticipating drought stress during dry periods.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This entry explains the concept generally; it does not provide specific evapotranspiration values or crop coefficients, which depend on local weather data and crop-specific research.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
  ],
  connections: [
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'crop', slug: 'maize' },
  ],
  glossaryTerms: ['evapotranspiration', 'yield'],
  geographicScope:
    'A universal physical process; typical evapotranspiration rates vary greatly by climate, season, and location.',
  limitations: [
    'This entry explains evapotranspiration conceptually; it gives no specific ET values, crop coefficients, or regional figures.',
    'Actual crop water use depends on local weather data and crop-specific research not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Evapotranspiration and crop water requirement methodology',
    },
    {
      sourceId: 'fao-land-water',
      citedFor:
        'Reference evapotranspiration and irrigation scheduling context',
    },
    {
      sourceId: 'wmo',
      citedFor: 'Meteorological data underlying evapotranspiration estimation',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Irrigation water management guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Evapotranspiration',
    description:
      'Evapotranspiration explained: how evaporation and plant transpiration combine to drive crop water use and underpin irrigation scheduling decisions.',
    keywords: [
      'evapotranspiration',
      'crop water use',
      'irrigation scheduling',
      'reference ET',
    ],
  },
  structuredData: { article: true },
};
