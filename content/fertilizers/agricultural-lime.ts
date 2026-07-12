import type { FertilizerContent } from '@/types/content';

export const agriculturalLime: FertilizerContent = {
  id: 'fertilizer-agricultural-lime',
  slug: 'agricultural-lime',
  contentType: 'fertilizer',
  title: 'Agricultural lime',
  alternativeNames: [
    'Aglime',
    'Ground limestone',
    'Calcitic or dolomitic lime',
  ],
  category: 'Fertilizer',
  subcategory: 'Liming material',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis:
    'Variable — calcitic lime is mostly calcium carbonate; dolomitic lime also supplies magnesium carbonate',
  summary:
    'Agricultural lime is finely ground limestone applied to raise soil pH and supply calcium, and magnesium if dolomitic, functioning primarily as a soil amendment rather than a nutrient fertilizer in the conventional sense.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Agricultural lime is ground calcitic limestone (predominantly calcium carbonate) or dolomitic limestone (containing both calcium and magnesium carbonate), applied to acidic soils to neutralise excess acidity and raise soil pH toward a range better suited to a planned crop.',
    },
    {
      type: 'paragraph',
      text: 'Because its primary agronomic role is neutralising soil acidity rather than delivering a concentrated dose of an essential nutrient, agricultural lime is generally regarded as a soil amendment rather than a fertilizer in the strict sense, even though it does supply calcium, and magnesium in the dolomitic form.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Liming material — primarily a soil pH amendment',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable; calcitic lime is mostly calcium carbonate, dolomitic lime also contains magnesium carbonate',
    },
    {
      label: 'Nutrients supplied',
      value: 'Calcium, and magnesium if dolomitic',
    },
    { label: 'Common form', value: 'Ground or pelletised limestone' },
    {
      label: 'Key consideration',
      value:
        'Reaction rate depends on particle fineness and requires time to move through the soil profile',
    },
    { label: 'Solubility', value: 'Low; reacts slowly with soil acidity' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural lime is produced by crushing and grinding limestone rock. Calcitic lime is predominantly calcium carbonate, while dolomitic lime contains both calcium and magnesium carbonate in varying proportions depending on the source rock. Its neutralising value and fineness of grind both affect how effectively and quickly it reacts in soil.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Calcitic lime',
              description: 'Predominantly calcium carbonate (CaCO₃)',
            },
            {
              term: 'Dolomitic lime',
              description:
                'Calcium and magnesium carbonate (CaMg(CO₃)₂), source rock-dependent',
            },
            {
              term: 'Neutralising value',
              description:
                'A laboratory measure of a lime product’s acid-neutralising capacity relative to pure calcium carbonate',
            },
            {
              term: 'Fineness of grind',
              description:
                'Finer particles react faster; coarser particles react more slowly over a longer period',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural lime supplies calcium, and magnesium in dolomitic forms, though these releases occur gradually as the carbonate reacts with soil acidity rather than as an immediately soluble nutrient dose. Its main agronomic function is neutralising acidity rather than supplying nutrients on a comparable timescale to soluble fertilizers.',
        },
        {
          type: 'list',
          items: [
            'Calcium is released as the carbonate reacts with soil acidity',
            'Dolomitic lime additionally supplies magnesium over the same timeframe',
            'Not a source of nitrogen, phosphorus, or potassium',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural lime is applied to raise the pH of acidic soils toward a range that improves nutrient availability and reduces aluminum and manganese toxicity risk, benefiting acid-sensitive crops such as alfalfa and soybean, and is chosen as calcitic or dolomitic depending on whether soil testing indicates a magnesium need alongside the pH correction.',
        },
        {
          type: 'list',
          items: [
            'Raises soil pH, improving availability of several macro- and micronutrients on acidic soils',
            'Reduces aluminum and manganese toxicity risk on strongly acidic soils',
            'Dolomitic lime is chosen where soil testing also indicates a magnesium need',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'Lime rates are generally determined from a soil test that accounts for both the current pH and the soil’s buffering capacity, since two soils at the same pH can require different lime rates depending on clay and organic matter content. Because lime reacts slowly, applications are typically made well ahead of the crop that needs the corrected pH.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates depend on soil test buffering capacity, not pH alone',
          text: 'The correct liming material, rate, and timing depend on soil test results, including buffering capacity, the target crop, and local guidance. AgricultureID does not publish a universal target pH or lime rate; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Appropriately applied lime generally has limited direct environmental downside beyond the resources used in mining, grinding, and transport, though over-liming can push pH excessively high and reduce availability of iron, zinc, manganese, and phosphorus in the same way that naturally alkaline soils can.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because lime reacts slowly and unevenly with depth, retesting after an interval is generally recommended before applying additional lime.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'fertilizer', slug: 'kieserite' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
  ],
  connections: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'soybean' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-amendments' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['soil-ph', 'macronutrient'],
  geographicScope:
    'Global overview of agricultural lime as a liming material; need and rates depend heavily on regional soil acidity, which varies with rainfall and parent material.',
  climateContext:
    'Natural soil acidification from rainfall and leaching drives much of the ongoing demand for liming in high-rainfall regions.',
  limitations: [
    'This entry does not recommend a universal target pH or lime rate; both are soil-, crop-, and region-specific.',
    'Lime reaction speed depends on particle fineness and soil conditions and is not quantified here.',
    'Agricultural lime is treated here as a soil amendment rather than a conventional nutrient fertilizer, consistent with its primary agronomic role.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-soils',
      citedFor: 'Liming materials and soil acidity management',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Agricultural lime application and soil pH management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Lime requirement testing and buffering capacity',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Liming guidance for arable and forage crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Agricultural Lime',
    description:
      'Agricultural lime (aglime) explained: calcitic and dolomitic forms, its role raising soil pH and supplying calcium and magnesium, and application principles.',
    keywords: [
      'agricultural lime',
      'aglime soil amendment',
      'dolomitic lime',
      'liming soil acidity',
    ],
  },
  structuredData: { article: true },
};
