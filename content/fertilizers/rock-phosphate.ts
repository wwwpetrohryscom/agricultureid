import type { FertilizerContent } from '@/types/content';

export const rockPhosphate: FertilizerContent = {
  id: 'fertilizer-rock-phosphate',
  slug: 'rock-phosphate',
  contentType: 'fertilizer',
  title: 'Rock phosphate',
  alternativeNames: ['Phosphate rock', 'Ground rock phosphate'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis:
    'Variable, roughly 0-3-0 to 0-32-0 depending on source and reactivity',
  summary:
    'Rock phosphate is finely ground, naturally occurring phosphate mineral applied directly as a slow-release phosphorus source, most effective on acid soils where its low water solubility gradually dissolves, and it is also the raw material processed into most manufactured phosphate fertilizers.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rock phosphate is mined phosphate-bearing mineral, mainly apatite, that is finely ground for direct agricultural application or processed with acid to manufacture more soluble phosphate fertilizers such as single superphosphate, triple superphosphate, MAP, and DAP.',
    },
    {
      type: 'paragraph',
      text: 'Applied directly, rock phosphate has low water solubility and releases phosphorus slowly as soil acidity gradually dissolves the mineral. Its effectiveness therefore depends heavily on the reactivity of the specific rock source and on soil pH, and it is generally more effective on acid soils than on neutral or alkaline ones.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Slow-release, naturally occurring phosphorus mineral',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable, roughly 0-3-0 to 0-32-0 depending on source and reactivity',
    },
    { label: 'Nutrients supplied', value: 'Phosphorus, with some calcium' },
    { label: 'Common form', value: 'Finely ground powder' },
    {
      label: 'Key consideration',
      value:
        'Effectiveness depends strongly on rock reactivity and soil acidity; generally most effective on acid soils',
    },
    {
      label: 'Solubility',
      value: 'Low water solubility; dissolves gradually under acid conditions',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Rock phosphate consists primarily of apatite minerals, with phosphorus content and reactivity varying substantially by deposit. Some sources are more finely crystalline and reactive, dissolving more readily in acid soil, while others are more crystalline and slower to release phosphorus.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Primary mineral',
              description: 'Apatite (calcium phosphate mineral group)',
            },
            {
              term: 'Phosphorus content',
              description:
                'Variable by deposit, typically low water solubility',
            },
            {
              term: 'Calcium content',
              description: 'Present as part of the apatite structure',
            },
            {
              term: 'Reactivity',
              description:
                'Depends on crystal structure and deposit; varies widely by source',
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
          text: 'Rock phosphate supplies phosphorus, released slowly as the mineral dissolves under acidic soil conditions, along with calcium bound within the mineral structure.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus release is gradual and depends on soil acidity and rock reactivity',
            'Calcium is present as part of the mineral but is not the primary reason for application',
            'No nitrogen or potassium is supplied',
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
          text: 'Direct application of rock phosphate is used mainly on acid soils, in long-term pasture or perennial systems where slow release over years is acceptable, and in some organic production systems where unprocessed mineral sources are preferred. It is also the essential raw material for manufacturing most acidulated phosphate fertilizers.',
        },
        {
          type: 'list',
          items: [
            'Slow, gradual phosphorus release suited to long-term or perennial systems',
            'Used as a direct-application phosphorus source in some organic systems',
            'The primary raw material for manufacturing single and triple superphosphate, MAP, and DAP',
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
          text: 'Because rock phosphate depends on soil acidity for dissolution and release, general practice restricts effective direct use largely to acid soils, and effectiveness varies with the specific rock source’s reactivity, which should be confirmed for the product being used.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Suitability and rates are region- and product-specific',
          text: 'Whether direct-applied rock phosphate is suitable, and at what rate, depends on soil pH, the reactivity of the specific rock source, the crop, and local regulations, including organic certification standards. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because rock phosphate dissolves slowly, immediate loss risk is generally lower than for highly soluble phosphate fertilizers, but phosphorus bound to eroded soil particles remains a longer-term pathway to surface water. Some phosphate rock deposits also contain trace levels of naturally occurring cadmium and other trace elements, which vary by source.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Trace element content varies by phosphate rock deposit and is subject to regulatory limits in many countries; check product specifications and local regulation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'single-superphosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of rock phosphate as both a direct-application phosphorus source and a raw material for manufactured phosphate fertilizers. Deposit reactivity and use vary substantially by region.',
  climateContext:
    'Rock phosphate dissolution and phosphorus release are most effective in acid soil conditions, which vary regionally with parent material, rainfall, and land use history.',
  limitations: [
    'This entry describes rock phosphate as a category; reactivity and phosphorus availability vary substantially by specific deposit and are not quantified here.',
    'Direct application is generally ineffective on neutral to alkaline soils and is not a universal substitute for acidulated phosphate fertilizers.',
    'Organic certification standards for direct-applied rock phosphate vary by country and certifying body and should be confirmed locally.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Rock phosphate as a phosphorus source and fertilizer raw material',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Phosphate rock reactivity and product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus behaviour and soil pH interactions',
    },
    {
      sourceId: 'isric',
      citedFor: 'Soil acidity and phosphate mineral dissolution',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rock Phosphate',
    description:
      'Rock phosphate as a slow-release phosphorus source and fertilizer raw material: composition, reactivity, soil-acidity dependence, and general use.',
    keywords: [
      'rock phosphate',
      'phosphate rock fertilizer',
      'phosphorus fertilizer',
      'apatite mineral',
    ],
  },
  structuredData: { article: true },
};
