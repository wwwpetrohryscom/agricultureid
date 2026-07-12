import type { SoilTopicContent } from '@/types/content';

export const cationExchangeCapacity: SoilTopicContent = {
  id: 'soil-topic-cation-exchange-capacity',
  slug: 'cation-exchange-capacity',
  contentType: 'soil-topic',
  title: 'Cation Exchange Capacity',
  topicClass: 'chemical',
  alternativeNames: ['CEC'],
  category: 'Soil chemical property',
  subcategory: 'Nutrient retention',
  summary:
    'Cation exchange capacity (CEC) is a soil’s capacity to hold and exchange positively charged nutrient ions on the surfaces of clay and organic matter. It underpins how well a soil retains and buffers the supply of nutrients such as potassium, calcium, and magnesium.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clay minerals and humus carry negatively charged sites on their surfaces that attract and hold positively charged ions, or cations, from the soil solution. This capacity to hold exchangeable cations — and to release them back into solution as plants take them up — is called cation exchange capacity.',
    },
    {
      type: 'paragraph',
      text: 'CEC is largely an intrinsic property, set by the amount and type of clay minerals and the amount of organic matter present, though it can shift somewhat with organic-matter management and, to a degree, with soil pH.',
    },
  ],
  keyFacts: [
    {
      label: 'Defined as',
      value:
        'Capacity to hold and exchange cations on negatively charged particle surfaces',
    },
    {
      label: 'Governed largely by',
      value: 'Clay content/type and organic matter (humus) content',
    },
    {
      label: 'Reported in',
      value:
        'Centimoles of charge per kilogram, cmol(+)/kg (formerly meq/100g)',
    },
    {
      label: 'Higher-CEC soils',
      value:
        'Generally retain potassium, calcium, magnesium, and ammonium against leaching more effectively',
    },
    {
      label: 'Lower-CEC soils',
      value:
        'Retain nutrients poorly, often needing more frequent, smaller applications',
    },
    {
      label: 'Increased over time by',
      value:
        'Building soil organic matter; otherwise largely intrinsic to clay mineralogy',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What CEC is',
      body: [
        {
          type: 'paragraph',
          text: 'CEC measures the total quantity of exchangeable cations a soil can hold at a given pH. The main exchangeable cations of agronomic interest are potassium, calcium, magnesium, and ammonium, alongside hydrogen and aluminum, which become more prominent on acidic soils.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Exchangeable cation',
              description:
                'A positively charged ion held loosely enough on particle surfaces to be released into the soil solution and replaced by another cation.',
            },
            {
              term: 'Base saturation',
              description:
                'The proportion of CEC occupied by basic cations (calcium, magnesium, potassium, sodium) rather than acidic cations (hydrogen, aluminum).',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why CEC matters',
      body: [
        {
          type: 'paragraph',
          text: 'A higher CEC allows a soil to hold a larger reserve of nutrient cations and to buffer against rapid leaching, since these ions are retained on exchange sites rather than moving freely with soil water. This buffering also moderates how quickly pH-adjusting amendments change soil pH, since exchangeable hydrogen and aluminum must first be displaced. Low-CEC soils, typically sandy or low in organic matter, hold fewer nutrient reserves and are more prone to leaching losses.',
        },
      ],
    },
    {
      id: 'how-it-is-measured',
      heading: 'How CEC is measured',
      body: [
        {
          type: 'paragraph',
          text: 'Laboratories typically determine CEC by displacing exchangeable cations with an index cation, such as ammonium acetate at a standardized pH, then measuring the total quantity displaced or summing the individually measured exchangeable bases and acidity. Reported values vary with soil type, and interpretation of what constitutes a "high" or "low" CEC depends on regional soil context rather than a single fixed scale.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'CEC values are influenced by the method used, and results between different standard methods are not always directly comparable.',
        },
      ],
    },
    {
      id: 'nutrient-management-implications',
      heading: 'Implications for nutrient management',
      body: [
        {
          type: 'paragraph',
          text: 'Because CEC affects how much of a nutrient a soil can store between applications, it is commonly used alongside base soil-test levels to guide fertilizer and lime recommendations. On low-CEC soils, growers often favor smaller, more frequent nutrient applications to reduce leaching losses, whereas higher-CEC soils can typically buffer larger single applications.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Working with a soil’s CEC',
      body: [
        {
          type: 'paragraph',
          text: 'Because CEC is largely set by mineralogy, it cannot be substantially changed in the short term. The main management lever available is building soil organic matter, which adds additional exchange sites and can meaningfully raise effective CEC over time, particularly in coarse-textured soils with naturally low clay-derived CEC.',
        },
        {
          type: 'list',
          items: [
            'Interpret CEC alongside base soil-test nutrient levels rather than in isolation',
            'Build organic matter to add exchange capacity, especially on sandy soils',
            'Use more frequent, smaller nutrient applications on lower-CEC soils to limit leaching',
            'Account for CEC-related buffering when planning lime or acidifying amendment rates',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-salinity' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: ['soil-texture', 'macronutrient'],
  geographicScope:
    'General soil-science overview applicable worldwide; typical CEC values and their interpretation vary by soil type and region.',
  climateContext:
    'Weathering intensity under different climates shapes clay mineralogy and therefore long-term CEC differences between regions.',
  limitations: [
    'What counts as a "high" or "low" CEC value depends on regional soil context and cannot be judged from a single universal scale.',
    'CEC results can differ between laboratory methods, so comparisons should account for the method used.',
    'CEC is one factor among several in nutrient management; it should be interpreted alongside full soil-test results.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Cation exchange capacity and soil fertility',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil chemical properties including CEC',
    },
    { sourceId: 'isric', citedFor: 'Global soil CEC and property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'CEC interpretation for nutrient management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cation Exchange Capacity',
    description:
      'Cation exchange capacity (CEC) explained: how soils hold nutrient cations, what drives CEC, how it is measured, and its role in nutrient management.',
    keywords: [
      'cation exchange capacity',
      'cec',
      'soil fertility',
      'nutrient retention',
    ],
  },
  structuredData: { article: true },
};
