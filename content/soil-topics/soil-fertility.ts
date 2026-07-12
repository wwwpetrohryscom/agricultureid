import type { SoilTopicContent } from '@/types/content';

export const soilFertility: SoilTopicContent = {
  id: 'soil-topic-soil-fertility',
  slug: 'soil-fertility',
  contentType: 'soil-topic',
  title: 'Soil Fertility',
  topicClass: 'management',
  alternativeNames: ['Soil nutrient status'],
  category: 'Soil management concept',
  subcategory: 'Nutrient supply capacity',
  summary:
    'Soil fertility describes a soil’s capacity to supply essential nutrients in adequate amounts and balance to support plant growth, shaped jointly by chemical nutrient status, physical structure, and biological activity rather than by nutrient content alone.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil fertility is often equated narrowly with nutrient content, but it more broadly reflects a soil’s ability to sustain plant growth: it depends on chemical factors such as nutrient availability and pH, physical factors such as structure and water-holding capacity, and biological factors such as microbial activity that drives nutrient cycling.',
    },
    {
      type: 'paragraph',
      text: 'A soil can be chemically rich in total nutrients yet still constrain crop growth if physical or biological limitations, such as compaction or poor drainage, prevent roots from accessing those nutrients — a distinction that separates soil fertility from a simple nutrient-content figure.',
    },
  ],
  keyFacts: [
    {
      label: 'Core components',
      value:
        'Chemical (nutrient status, pH), physical (structure, water), biological (soil life)',
    },
    {
      label: 'Assessed by',
      value: 'Soil testing, tissue testing, and observation of crop response',
    },
    {
      label: 'Built by',
      value:
        'Balanced fertilization, organic matter additions, and crop rotation',
    },
    {
      label: 'Reduced by',
      value: 'Nutrient mining, erosion, compaction, and organic matter decline',
    },
    {
      label: 'Not a single number',
      value: 'No universal fertility score applies across all soils and crops',
    },
    {
      label: 'Managed via',
      value: 'Nutrient management plans informed by soil testing and crop need',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil fertility is',
      body: [
        {
          type: 'paragraph',
          text: 'Soil fertility is the integrated capacity of a soil to supply nutrients in forms and amounts a crop can use, at the right time in its growth cycle, without other physical or biological constraints preventing uptake. It is a functional concept rather than a single measurable property.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chemical fertility',
              description:
                'Nutrient availability, pH, and cation exchange capacity',
            },
            {
              term: 'Physical fertility',
              description:
                'Structure, aeration, and water-holding capacity supporting root access',
            },
            {
              term: 'Biological fertility',
              description:
                'Microbial and faunal activity driving nutrient cycling and disease suppression',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why fertility matters',
      body: [
        {
          type: 'paragraph',
          text: 'A field’s realistic yield potential is bounded by its fertility status among other factors; nutrient deficiencies, imbalances, or physical and biological limitations that restrict root access to available nutrients can each independently constrain crop growth, even when other conditions are favourable.',
        },
        {
          type: 'list',
          items: [
            'Sustained cropping without nutrient replenishment can deplete soil fertility over time',
            'Fertility limitations can be chemical, physical, or biological, and often interact',
            'Correcting one limiting factor may reveal another that was previously masked',
          ],
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How fertility is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Soil testing measures nutrient availability, pH, and organic matter as a starting point for assessing chemical fertility; tissue testing during the growing season can confirm whether nutrients are actually reaching the plant; and observation of crop growth patterns and yield history provides an integrated, if less precise, indicator of overall fertility.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'No single test captures fertility completely; chemical soil tests, tissue tests, and field observation are generally used together for a fuller picture.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing and building fertility',
      body: [
        {
          type: 'paragraph',
          text: 'Building and maintaining fertility generally combines balanced fertilization matched to soil test results and crop demand, organic matter additions that support both nutrient supply and biological activity, and crop rotation and cover cropping that help sustain physical and biological soil function over time.',
        },
        {
          type: 'list',
          items: [
            'Apply nutrients based on soil test results and realistic yield goals, not fixed formulas',
            'Add organic materials such as compost or manure to support nutrient cycling and structure',
            'Rotate crops and use cover crops to diversify nutrient demand and rooting patterns',
            'Address physical constraints such as compaction that limit root access to available nutrients',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'AgricultureID does not publish a universal fertility target; appropriate nutrient levels and management depend on the crop, soil, and region, and should follow soil test recommendations.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'bone-meal' },
    { type: 'fertilizer', slug: 'poultry-manure' },
    { type: 'fertilizer', slug: 'struvite' },
    { type: 'fertilizer', slug: 'seaweed-extract' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'machinery', slug: 'fertilizer-spreader' },
  ],
  glossaryTerms: ['macronutrient', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; typical fertility levels and limiting factors vary strongly by soil type, climate, and management history.',
  climateContext:
    'Climate influences fertility indirectly through its effect on organic matter decomposition rates, leaching, and weathering of soil minerals.',
  limitations: [
    'Soil fertility is a composite concept without a single universal measurement or target value.',
    'Chemical soil tests do not capture physical or biological limitations that can independently constrain nutrient uptake.',
    'This entry describes general principles; site-specific fertility management should be guided by local soil testing and agronomic advice.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil fertility concepts and nutrient management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil fertility and integrated nutrient management',
    },
    { sourceId: 'isric', citedFor: 'Global soil fertility and nutrient data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil fertility testing and management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Fertility',
    description:
      'Soil fertility explained: chemical, physical, and biological components, why it matters for yield potential, how it is assessed, and how it is built.',
    keywords: [
      'soil fertility',
      'nutrient management',
      'soil health',
      'fertility testing',
    ],
  },
  structuredData: { article: true },
};
