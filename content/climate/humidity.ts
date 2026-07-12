import type { ClimateContent } from '@/types/content';

export const humidity: ClimateContent = {
  id: 'climate-humidity',
  slug: 'humidity',
  contentType: 'climate',
  title: 'Humidity',
  category: 'Climate factor',
  subcategory: 'Atmospheric moisture',
  climateClass: 'water',
  summary:
    'Humidity describes how much water vapour is present in the air, most often expressed as relative humidity. It shapes how quickly plants lose water through transpiration and strongly influences the risk of many fungal and bacterial crop diseases.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Humidity refers to the amount of water vapour in the air. Relative humidity — the measure most commonly used in agriculture — expresses that amount as a percentage of the maximum the air could hold at the current temperature, which is why the same absolute moisture content can register as very different relative humidity values depending on temperature.',
    },
    {
      type: 'paragraph',
      text: 'For crops, relative humidity, together with temperature and wind, governs the atmospheric "pull" on water from leaves, often described through the concept of vapour pressure deficit. Low humidity increases the driving force for transpiration and water loss, while sustained high humidity slows evaporation from leaf and fruit surfaces and creates favourable conditions for many plant pathogens.',
    },
  ],
  keyFacts: [
    {
      label: 'Core measure',
      value:
        'Relative humidity (water vapour present as a percentage of the maximum the air can hold at that temperature)',
    },
    {
      label: 'Related concept',
      value:
        'Vapour pressure deficit, linking humidity and temperature to transpiration demand',
    },
    {
      label: 'High-humidity effects',
      value:
        'Slower drying of leaf and fruit surfaces; favourable conditions for many fungal and bacterial diseases',
    },
    {
      label: 'Low-humidity effects',
      value: 'Increased transpiration demand and water-stress risk',
    },
    {
      label: 'Management tools',
      value:
        'Ventilation, spacing, and canopy management to influence surface wetness and airflow',
    },
    {
      label: 'Measurement',
      value:
        'Recorded with hygrometers and increasingly with in-field or greenhouse sensor networks',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What humidity is',
      body: [
        {
          type: 'paragraph',
          text: 'Relative humidity is the ratio of the water vapour actually present in the air to the maximum it could hold at that temperature, expressed as a percentage. Because warmer air can hold more water vapour, relative humidity changes through the day even when the absolute moisture content of the air stays roughly constant — it typically falls as air warms and rises as air cools, all else being equal.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Plants lose water through their leaves as vapour, and the rate of that loss depends heavily on how much "drying power" the surrounding air has — a relationship often summarised as vapour pressure deficit, which combines temperature and humidity. Very low humidity can push transpiration demand beyond what roots can supply, contributing to water stress even when soil moisture is adequate, while sustained high humidity can affect pollen behaviour and fruit-surface drying in some crops.',
        },
      ],
    },
    {
      id: 'effects',
      heading: 'Effects on disease and growth',
      body: [
        {
          type: 'paragraph',
          text: 'Many important fungal and bacterial pathogens, including those causing downy mildew and gray mold, spread more readily under prolonged high humidity or free moisture on plant surfaces. Powdery mildew is a partial exception, often favoured by high humidity but able to establish without free water on the leaf. Low humidity, by contrast, is less associated with disease but increases evaporative water loss and can compound drought stress.',
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
            'Ventilation and, in some systems, dehumidification in greenhouses and other protected cultivation',
            'Plant spacing and pruning to improve airflow through the canopy and speed leaf-surface drying',
            'Irrigation timing that avoids prolonged leaf wetness, such as watering early in the day rather than in the evening',
            'Selecting disease-resistant cultivars in regions or seasons with persistently high humidity',
          ],
        },
      ],
    },
    {
      id: 'measurement-and-monitoring',
      heading: 'Measurement and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Humidity is measured with hygrometers and, increasingly, networked sensors used in greenhouses and precision-agriculture systems to track microclimate conditions in near real time. Many crop-disease forecasting models use humidity and leaf-wetness data alongside temperature to estimate infection risk and inform the timing of preventive management.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
  ],
  connections: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'farming-system', slug: 'vertical-farming' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'Global overview; typical humidity levels and their agricultural significance vary by climate zone and season.',
  limitations: [
    'This is a general overview of humidity as a climate factor, not disease-specific forecasting guidance or region-specific greenhouse climate targets.',
    'No universal relative-humidity thresholds are given, since crop and disease sensitivity vary.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Humidity measurement and meteorological standards',
    },
    { sourceId: 'noaa', citedFor: 'Atmospheric moisture monitoring' },
    { sourceId: 'fao', citedFor: 'Humidity effects on crop production' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Evapotranspiration and canopy microclimate',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Humidity',
    description:
      'A reference on humidity: relative humidity and vapour pressure deficit, effects on transpiration and disease risk, and ways to manage crop humidity.',
    keywords: [
      'humidity',
      'relative humidity',
      'vapour pressure deficit',
      'plant disease risk',
    ],
  },
  structuredData: { article: true },
};
