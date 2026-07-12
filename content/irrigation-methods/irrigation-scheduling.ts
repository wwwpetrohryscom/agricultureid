import type { IrrigationMethodContent } from '@/types/content';

export const irrigationScheduling: IrrigationMethodContent = {
  id: 'irrigation-irrigation-scheduling',
  slug: 'irrigation-scheduling',
  contentType: 'irrigation-method',
  title: 'Irrigation Scheduling',
  category: 'Irrigation method',
  subcategory: 'Irrigation management',
  methodClass: 'management',
  summary:
    'Irrigation scheduling is the practice of deciding when and how much to irrigate, based on crop water need, soil moisture status, and weather, so that any irrigation method — drip, sprinkler, or surface — is applied at the right time and amount rather than on a fixed calendar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Irrigation scheduling is the decision-making layer that sits above whichever delivery method is used: it answers the questions of when to irrigate and how much water to apply, rather than describing how water reaches the field. Good scheduling aims to match applied water to the crop’s actual water need at a given point in its growth.',
    },
    {
      type: 'paragraph',
      text: 'The central concept behind most scheduling approaches is crop water use, most commonly estimated through evapotranspiration (ET) — the combined loss of water from soil evaporation and plant transpiration — adjusted for the specific crop and its growth stage, alongside direct measurement of soil moisture.',
    },
  ],
  keyFacts: [
    {
      label: 'Method class',
      value: 'Irrigation management (applies across delivery methods)',
    },
    {
      label: 'Core inputs',
      value:
        'Crop evapotranspiration (ET), soil moisture status, and weather data',
    },
    {
      label: 'Common tools',
      value:
        'Soil moisture sensors, tensiometers, weather-based ET models, and plant-based indicators',
    },
    {
      label: 'Applies to',
      value:
        'Drip, sprinkler, center-pivot, and surface irrigation systems alike',
    },
    {
      label: 'Key goal',
      value:
        'Matching applied water to crop need to avoid under- or over-irrigation',
    },
    {
      label: 'Key output',
      value:
        'A decision on irrigation timing and depth, not a fixed universal schedule',
    },
  ],
  sections: [
    {
      id: 'principles',
      heading: 'Principles',
      body: [
        {
          type: 'paragraph',
          text: 'Irrigation scheduling rests on tracking the balance between water added to the root zone (rainfall and irrigation) and water removed from it (evapotranspiration and drainage), so that soil moisture is kept within a range that avoids crop water stress without applying more water than the crop and soil can use.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Evapotranspiration (ET)',
              description:
                'Combined water loss from soil evaporation and plant transpiration; the basis for many scheduling calculations',
            },
            {
              term: 'Crop coefficient',
              description:
                'A factor that adjusts a reference ET estimate for a specific crop and growth stage',
            },
            {
              term: 'Soil moisture depletion',
              description:
                'The proportion of plant-available water used up since the last full recharge of the root zone',
            },
          ],
        },
      ],
    },
    {
      id: 'methods-and-tools',
      heading: 'Methods and tools',
      body: [
        {
          type: 'list',
          items: [
            'Weather-based (ET-based) scheduling, using reference evapotranspiration and crop coefficients',
            'Soil-moisture monitoring, using sensors, tensiometers, or gravimetric sampling to track root-zone water status directly',
            'Plant-based indicators, such as canopy temperature or visible stress symptoms, used to detect water deficit',
            'Water-balance accounting, which combines rainfall, irrigation, and estimated ET to track the soil-moisture balance over time',
          ],
        },
      ],
    },
    {
      id: 'where-it-applies',
      heading: 'Where it applies',
      body: [
        {
          type: 'paragraph',
          text: 'Scheduling principles apply across irrigation methods: a drip system, a center-pivot, and a surface-irrigated field can all be scheduled using the same underlying water-balance logic, even though the delivery mechanism, achievable precision, and practical constraints differ. Methods capable of frequent, small applications (such as drip) generally allow tighter, more responsive scheduling than methods applied less frequently in larger volumes (such as many surface systems).',
        },
      ],
    },
    {
      id: 'benefits',
      heading: 'Benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Scheduling irrigation to actual crop need, rather than on a fixed calendar, can reduce water and, where pumping is involved, energy use, while also reducing risks associated with over-irrigation, such as nutrient leaching, waterlogging, and increased disease pressure in some crops. It can also help maintain yield and quality by avoiding periods of water stress at growth stages sensitive to it.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Effective scheduling requires reasonably reliable inputs — local or regional weather data, calibrated soil-moisture equipment, or accurate crop coefficients — and the specific thresholds used (how much depletion to allow before irrigating, and how much to apply) are crop-, soil-, and growth-stage-specific.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and thresholds are region- and crop-specific',
          text: 'AgricultureID does not publish universal irrigation volumes or trigger thresholds; follow soil moisture monitoring, regional ET data, and crop-specific agronomic guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of irrigation-scheduling principles and tools as applied across irrigation methods and crops worldwide. Specific thresholds and calculations depend on local climate, soil, and crop conditions.',
  climateContext:
    'Evapotranspiration and, consequently, irrigation need vary with temperature, humidity, wind, and solar radiation, and scheduling must account for local weather patterns and drought conditions.',
  limitations: [
    'This entry describes scheduling principles and tools conceptually; it does not provide crop coefficients, depletion thresholds, or application volumes, which are region-, soil-, and crop-specific.',
    'The accuracy of any scheduling approach depends on the quality of the weather, soil, or sensor data used, which is not addressed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Crop evapotranspiration and irrigation scheduling methodology',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil moisture monitoring and irrigation management context',
    },
    { sourceId: 'ahdb', citedFor: 'Irrigation scheduling guidance context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of irrigation scheduling in water-use efficiency',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Irrigation Scheduling',
    description:
      'Irrigation scheduling explained: using evapotranspiration, soil moisture, and weather data to decide when and how much to irrigate, across methods.',
    keywords: [
      'irrigation scheduling',
      'evapotranspiration',
      'soil moisture monitoring',
      'crop water need',
    ],
  },
  structuredData: { article: true },
};
