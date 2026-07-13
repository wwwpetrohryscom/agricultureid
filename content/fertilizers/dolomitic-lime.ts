import type { FertilizerContent } from '@/types/content';

export const dolomiticLime: FertilizerContent = {
  id: 'fertilizer-dolomitic-lime',
  slug: 'dolomitic-lime',
  contentType: 'fertilizer',
  title: 'Dolomitic lime',
  alternativeNames: [
    'Dolomite lime',
    'Calcium magnesium carbonate',
    'Dolomite',
  ],
  category: 'Fertilizer',
  subcategory: 'Liming material',
  fertilizerClass: 'secondary-micronutrient',
  summary:
    'Dolomitic lime is a ground calcium magnesium carbonate liming material that raises soil pH while supplying both calcium and magnesium, making it the preferred lime where acid soils are also low in magnesium.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dolomitic lime is made by grinding dolomite, a rock composed of calcium magnesium carbonate. Like other carbonate liming materials it neutralises soil acidity, but it differs from calcitic (high-calcium) lime in that it supplies a substantial amount of magnesium as well as calcium.',
    },
    {
      type: 'paragraph',
      text: 'This dual role — raising pH and correcting magnesium — is what defines dolomitic lime. It is the usual liming choice on acid soils that are also magnesium-deficient, while high-calcium lime is generally preferred where soil magnesium is already adequate.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Liming material supplying calcium and magnesium',
    },
    {
      label: 'Composition',
      value: 'Calcium magnesium carbonate, CaMg(CO₃)₂',
    },
    { label: 'Nutrients supplied', value: 'Calcium and magnesium' },
    { label: 'Common form', value: 'Ground or pelletised mineral' },
    {
      label: 'Key consideration',
      value: 'Raises soil pH; reacts more slowly than calcitic lime',
    },
    { label: 'Solubility', value: 'Low; reacts gradually in soil' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Dolomitic lime is ground from dolomite rock, a carbonate mineral containing both calcium and magnesium. Its neutralising value and the fineness of the grind determine how effectively and quickly it raises soil pH, and the exact calcium and magnesium content varies with the source deposit.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mineral composition',
              description: 'Calcium magnesium carbonate, CaMg(CO₃)₂',
            },
            {
              term: 'Nutrients',
              description:
                'Both calcium and magnesium, in proportions set by the deposit',
            },
            {
              term: 'Reaction speed',
              description:
                'Slower than calcitic lime; finer grinding speeds the reaction',
            },
            {
              term: 'Effect on soil pH',
              description: 'Neutralises acidity, raising soil pH',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied and behaviour in soil',
      body: [
        {
          type: 'paragraph',
          text: 'As dolomitic lime reacts with soil acidity, its carbonate neutralises hydrogen ions and raises pH, while releasing calcium and magnesium onto the soil exchange complex. The magnesium contribution is what sets it apart from calcitic lime, addressing a common deficiency on acid, sandy soils.',
        },
        {
          type: 'list',
          items: [
            'Neutralises soil acidity and raises pH over time',
            'Supplies both calcium and magnesium as it reacts',
            'Improves the availability of some nutrients as pH moves toward the optimal range',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Dolomitic lime is applied to raise the pH of acid soils that also need magnesium, and it is typically incorporated ahead of planting because it reacts slowly and moves little in the soil. Because it acts gradually, it is usually applied well in advance of the crop that will benefit.',
        },
        {
          type: 'list',
          items: [
            'Chosen over calcitic lime where the soil is both acid and magnesium-deficient',
            'Best incorporated and applied ahead of the season to allow time to react',
            'Finer grades react faster but are more expensive to spread',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Liming rates depend on soil test results',
          text: 'The right liming rate depends on the soil’s current pH, buffering capacity, target pH, and the material’s neutralising value, all determined by soil testing. AgricultureID does not publish universal liming rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Because it reacts more slowly than calcitic lime, dolomitic lime is less suited to situations needing a rapid pH change. Over-applying it, or using it where magnesium is already high, can push the calcium-to-magnesium balance in a direction that impairs uptake of other cations such as potassium.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Repeated use where magnesium is already adequate can unbalance soil cations. Where soil magnesium is sufficient, high-calcium lime is generally the better liming choice.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'fertilizer', slug: 'kieserite' },
  ],
  connections: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-amendments' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'podzol' },
  ],
  glossaryTerms: ['soil-ph', 'macronutrient'],
  geographicScope:
    'Global overview of dolomitic lime as a liming material for acid soils that are also magnesium-deficient. Neutralising value and analysis vary by source deposit.',
  climateContext:
    'Acid, magnesium-poor soils are common in high-rainfall regions where leaching depletes base cations, where dolomitic lime is frequently used.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a liming rate recommendation for any soil or region.',
    'Calcium and magnesium content varies with the source deposit and is not fixed.',
    'Its slow reaction makes it less suited to situations requiring rapid pH change.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Liming materials and soil pH management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Dolomitic versus calcitic lime selection',
    },
    { sourceId: 'ahdb', citedFor: 'Soil pH and liming guidance' },
    { sourceId: 'fao', citedFor: 'Acid soil management and liming' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Dolomitic Lime',
    description:
      'Dolomitic lime (calcium magnesium carbonate): raises soil pH while supplying calcium and magnesium, when to choose it over calcitic lime, and its limits.',
    keywords: [
      'dolomitic lime',
      'dolomite lime',
      'calcium magnesium carbonate',
      'liming acid soil magnesium',
    ],
  },
  structuredData: { article: true },
};
