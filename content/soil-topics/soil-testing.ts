import type { SoilTopicContent } from '@/types/content';

export const soilTesting: SoilTopicContent = {
  id: 'soil-topic-soil-testing',
  slug: 'soil-testing',
  contentType: 'soil-topic',
  title: 'Soil Testing',
  topicClass: 'management',
  alternativeNames: ['Soil analysis', 'Soil sampling'],
  category: 'Soil management practice',
  subcategory: 'Diagnostic assessment',
  summary:
    'Soil testing is the systematic sampling and laboratory or field analysis of soil properties — such as pH, nutrient levels, organic matter, and salinity — used to guide fertilizer, lime, and other management decisions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil testing provides an objective basis for management decisions that would otherwise rely on guesswork or generic assumptions. By sampling soil in a representative and consistent way and submitting it for laboratory analysis, growers can assess current fertility status, diagnose suspected problems, and track how the soil changes over time.',
    },
    {
      type: 'paragraph',
      text: 'A soil test result is not itself a recommendation. Meaningful use of the data requires interpretation calibrated to the local region, crop, and yield goal — most testing laboratories and agricultural extension services provide this interpretation alongside raw results.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value:
        'Measure soil properties to guide fertilizer, lime, and management decisions',
    },
    {
      label: 'Sampling',
      value:
        'Composite samples from representative areas and consistent depth, typically at a consistent time of year',
    },
    {
      label: 'Common lab tests',
      value:
        'pH, extractable nutrients, organic matter/carbon, CEC, texture, and salinity (EC)',
    },
    {
      label: 'Interpretation',
      value:
        'Requires regional calibration; a raw lab number alone is not a recommendation',
    },
    {
      label: 'Frequency',
      value:
        'Commonly repeated on a multi-year cycle, or more often to track change',
    },
    {
      label: 'Complements',
      value:
        'Plant tissue testing, which reflects what the crop has actually taken up',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil testing involves',
      body: [
        {
          type: 'paragraph',
          text: 'Soil testing combines a defined field sampling protocol with laboratory (or, for some properties, field-kit) analysis. Samples are typically collected as a composite of many small cores taken across a representative area and consistent depth, since a single core is unlikely to represent field variability.',
        },
        {
          type: 'list',
          items: [
            'Divide fields into zones with reasonably uniform soil type, cropping history, and visible performance',
            'Collect multiple cores per zone and combine them into one composite sample',
            'Sample at a consistent depth and, where possible, a consistent time of year for comparability',
            'Label and track samples by location to support future comparison',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why testing matters',
      body: [
        {
          type: 'paragraph',
          text: 'Without testing, nutrient and amendment decisions default to generic assumptions that may over- or under-supply what a soil actually needs — wasting inputs, reducing yield potential, or contributing to environmental losses such as nutrient runoff. Regular testing also helps detect emerging problems, such as declining organic matter, rising salinity, or a drifting pH, before they become severe.',
        },
      ],
    },
    {
      id: 'common-analyses',
      heading: 'What a typical soil test measures',
      body: [
        {
          type: 'table',
          caption: 'Common soil test components',
          columns: ['Property', 'What it indicates'],
          rows: [
            [
              'pH',
              'Acidity or alkalinity, affecting nutrient availability and lime needs',
            ],
            [
              'Extractable nutrients (e.g. P, K)',
              'Estimated plant-available supply of key nutrients',
            ],
            [
              'Organic matter/carbon',
              'Contribution to structure, nutrient supply, and biological activity',
            ],
            ['Cation exchange capacity', 'Capacity to retain nutrient cations'],
            [
              'Texture',
              'Sand/silt/clay proportions influencing water and nutrient behavior',
            ],
            [
              'Electrical conductivity (salinity)',
              'Soluble salt concentration and potential crop stress',
            ],
          ],
        },
      ],
    },
    {
      id: 'interpreting-results',
      heading: 'Interpreting and using results',
      body: [
        {
          type: 'paragraph',
          text: 'Laboratories and extension services interpret raw results against locally calibrated reference ranges and crop-specific response data to produce fertility recommendations. Because calibration differs by region, soil type, and even laboratory method, results and recommendations from one area should not be assumed to transfer directly to another.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Soil test recommendations are calibrated to local conditions. AgricultureID does not publish universal nutrient or lime rates; consult the testing laboratory or local agronomic advisory service for guidance specific to your region and crop.',
        },
      ],
    },
    {
      id: 'using-testing-in-a-program',
      heading: 'Building testing into a management program',
      body: [
        {
          type: 'paragraph',
          text: 'Soil testing works best as a recurring practice rather than a one-time check, allowing trends in pH, organic matter, and nutrient status to inform adjustments over successive seasons. Combining soil testing with plant tissue testing during the growing season can help confirm whether nutrients identified as available in the soil are actually being taken up by the crop.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'crop', slug: 'wheat' },
  ],
  glossaryTerms: ['agronomy', 'macronutrient'],
  geographicScope:
    'General overview of soil testing practice applicable worldwide; specific protocols, calibrations, and recommendation systems vary by country and region.',
  climateContext:
    'Sampling timing is often chosen relative to the local growing season and weather to ensure comparable, representative results.',
  limitations: [
    'A soil test result is not itself a recommendation; interpretation depends on regional calibration and crop-specific response data.',
    'Results are only as representative as the sampling protocol used; poor sampling can produce misleading results regardless of laboratory accuracy.',
    'This entry describes general soil testing practice and does not provide specific sampling protocols or recommendation systems, which vary by region.',
  ],
  sourceReferences: [
    { sourceId: 'usda-nrcs', citedFor: 'Soil testing and sampling protocols' },
    { sourceId: 'cornell-cals', citedFor: 'Soil test interpretation guidance' },
    {
      sourceId: 'ahdb',
      citedFor: 'Soil testing and nutrient management guidance',
    },
    { sourceId: 'isric', citedFor: 'Global soil property and testing context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Testing',
    description:
      'Soil testing explained: sampling methods, what a typical lab analysis measures, and how results guide fertilizer, lime, and management decisions.',
    keywords: [
      'soil testing',
      'soil sampling',
      'soil analysis',
      'nutrient management',
    ],
  },
  structuredData: { article: true },
};
