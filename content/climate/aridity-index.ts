import type { ClimateContent } from '@/types/content';

export const aridityIndex: ClimateContent = {
  id: 'climate-aridity-index',
  slug: 'aridity-index',
  contentType: 'climate',
  title: 'Aridity Index',
  alternativeNames: ['AI', 'Climatic aridity index'],
  category: 'Climate metric',
  subcategory: 'Water-balance index',
  climateClass: 'metric',
  summary:
    'The aridity index is a numerical measure of the dryness of a climate, most commonly the ratio of precipitation to potential evapotranspiration. It is used to classify climates from hyper-arid to humid and to delineate drylands.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The aridity index expresses how dry a climate is by comparing the water supplied by precipitation with the atmospheric demand for water, usually represented by potential evapotranspiration. A widely used form is the ratio of mean annual precipitation to mean annual potential evapotranspiration: low values indicate that demand greatly exceeds supply (arid conditions), while higher values indicate a wetter balance.',
    },
    {
      type: 'paragraph',
      text: 'By reducing the water balance of a place to a single figure, the aridity index provides a consistent way to classify climates and to map regions such as arid, semi-arid, and dry sub-humid zones. It underpins internationally used definitions of drylands and is applied in assessments of desertification and land degradation.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'The dryness of a climate as a water-balance ratio',
    },
    {
      label: 'Common definition',
      value: 'Precipitation divided by potential evapotranspiration',
    },
    {
      label: 'Low values',
      value:
        'Indicate arid conditions where evaporative demand far exceeds precipitation',
    },
    {
      label: 'Main use',
      value:
        'Classifying climates and delineating arid, semi-arid, and dry sub-humid zones',
    },
    {
      label: 'Policy relevance',
      value: 'Used in defining drylands and assessing desertification',
    },
    {
      label: 'Distinct from',
      value:
        'Drought, which is a temporary anomaly rather than a long-term climatic average',
    },
  ],
  sections: [
    {
      id: 'what-the-aridity-index-is',
      heading: 'What the aridity index is',
      body: [
        {
          type: 'paragraph',
          text: 'The aridity index is a climatic indicator built from the long-term balance between water supply and water demand. Precipitation represents the supply, while potential evapotranspiration — the amount of water that would evaporate and transpire given the available energy if water were not limiting — represents the demand. Their ratio summarises whether, on average, a climate tends toward surplus or deficit of water.',
        },
        {
          type: 'paragraph',
          text: 'Several formulations of aridity indices exist, using different inputs and thresholds, but the precipitation-to-potential-evapotranspiration ratio is among the most widely applied because it captures both sides of the water balance in a single, comparable number.',
        },
      ],
    },
    {
      id: 'classifying-climates',
      heading: 'Classifying climates',
      body: [
        {
          type: 'paragraph',
          text: 'Aridity-index values are grouped into classes that describe increasingly dry climates — commonly hyper-arid, arid, semi-arid, dry sub-humid, and humid. These classes provide an internationally recognised framework for delineating drylands, which cover a large share of the world’s land and support a substantial part of its agriculture and population.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The aridity index describes long-term average climate, not a specific dry spell. A humid climate can still experience drought, and an arid climate is dry by its nature rather than by anomaly.',
        },
      ],
    },
    {
      id: 'why-it-matters-in-agriculture',
      heading: 'Why it matters in agriculture',
      body: [
        {
          type: 'list',
          items: [
            'Indicates whether crops can be grown on rainfall alone or need irrigation',
            'Helps delineate dryland farming regions and their characteristic constraints',
            'Signals areas at greater risk of land degradation, salinity, and desertification',
            'Provides a consistent basis for comparing water availability across regions',
            'Informs planning for water resources, land use, and drought-adapted systems',
          ],
        },
        {
          type: 'paragraph',
          text: 'A region’s aridity class shapes the whole character of its agriculture, from the crops and varieties that are viable to the importance of irrigation and moisture-conservation practices.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'The aridity index is a broad climatic summary and does not capture the timing of rainfall within the year, year-to-year variability, soil water storage, or short-term drought, all of which strongly affect agriculture. Different index formulations and class boundaries exist, so values should be interpreted against the method used. This entry describes the concept rather than giving specific threshold values or classifications for any location.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'evapotranspiration' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'irrigation-method', slug: 'rainwater-harvesting' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'A general explanation of the aridity index as a global climate-classification metric. Threshold values and classifications for a given location depend on the method used.',
  climateContext:
    'The aridity index summarises the long-term balance of precipitation and evaporative demand and is central to defining drylands and assessing desertification under changing climate.',
  limitations: [
    'This entry explains the aridity-index concept; it does not give threshold values or classifications for any location, which depend on the formulation used.',
    'The index reflects long-term averages and does not capture rainfall timing, year-to-year variability, or short-term drought, which also affect agriculture.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Aridity classification and dryland delineation',
    },
    {
      sourceId: 'wmo',
      citedFor: 'Aridity indices and climate-classification standards',
    },
    {
      sourceId: 'noaa',
      citedFor: 'Precipitation and evaporative-demand climate data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Aridity Index',
    description:
      'Aridity index explained: how the ratio of precipitation to potential evapotranspiration classifies climates and delineates the world’s drylands.',
    keywords: [
      'aridity index',
      'dryland classification',
      'potential evapotranspiration',
      'desertification',
    ],
  },
  structuredData: { article: true },
};
