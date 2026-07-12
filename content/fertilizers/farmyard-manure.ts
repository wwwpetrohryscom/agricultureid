import type { FertilizerContent } from '@/types/content';

export const farmyardManure: FertilizerContent = {
  id: 'fertilizer-farmyard-manure',
  slug: 'farmyard-manure',
  contentType: 'fertilizer',
  title: 'Farmyard manure',
  alternativeNames: ['FYM', 'Animal manure'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable, low analysis — typically a few percent or less each of N, P₂O₅, and K₂O, depending on livestock species, bedding, and storage',
  summary:
    'Farmyard manure is a traditional organic fertilizer made from livestock excreta mixed with bedding material, supplying nutrients at low and variable concentrations while contributing substantially to soil organic matter and structure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Farmyard manure (FYM) is composed of livestock dung and urine combined with bedding material such as straw, and it is one of the oldest organic amendments used in agriculture. Its nutrient content varies with the species of livestock, their diet, the bedding used, and how the manure is stored and handled before application.',
    },
    {
      type: 'paragraph',
      text: 'Because much of its nitrogen, phosphorus, and potassium is bound in organic forms, and because gaseous nitrogen losses can occur during storage and after spreading, the nutrient content actually available to a following crop can differ substantially from the manure’s total nutrient content.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Organic amendment from livestock excreta and bedding',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable, low analysis; depends on livestock species, diet, bedding, and storage',
    },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen, phosphorus, and potassium, plus organic matter',
    },
    {
      label: 'Common form',
      value: 'Bulk solid, sometimes partially composted before use',
    },
    {
      label: 'Key consideration',
      value:
        'Nutrient content and plant availability vary widely with source, storage, and handling',
    },
    {
      label: 'Solubility',
      value:
        'A portion of nitrogen is soluble; much of the remainder is organically bound',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Farmyard manure composition reflects the livestock species it comes from, their feed ration, the type and amount of bedding mixed in, and how long and under what conditions it has been stored. These factors together determine its moisture content, organic matter content, and nutrient concentration.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Nutrient content',
              description:
                'Low and variable; depends on species, diet, bedding, and storage',
            },
            {
              term: 'Organic matter content',
              description:
                'High; a major source of soil organic matter over time',
            },
            {
              term: 'Nitrogen form',
              description:
                'Mixture of readily available and organically bound forms',
            },
            {
              term: 'Storage losses',
              description:
                'Ammonia volatilisation and leaching can reduce nutrient content before application',
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
          text: 'Farmyard manure supplies nitrogen, phosphorus, and potassium, along with secondary nutrients and micronutrients, in a mixture of readily available and slowly mineralising organic forms, together with a substantial contribution of organic matter.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen availability depends on the proportion in readily available versus organically bound forms',
            'Phosphorus and potassium are supplied alongside nitrogen',
            'Repeated use contributes cumulatively to soil organic matter',
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
          text: 'Farmyard manure has long been used in mixed crop-livestock systems to recycle nutrients from livestock production back into cropland, while also improving soil organic matter, structure, and water-holding capacity over repeated applications.',
        },
        {
          type: 'list',
          items: [
            'Recycles nutrients from livestock production within a farming system',
            'Builds soil organic matter and improves soil structure over time',
            'Long history of use across mixed crop-livestock systems worldwide',
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
          text: 'Because nutrient content and availability vary so widely, general practice is to test manure where feasible, account for storage and handling losses, and consider the manure’s nutrient contribution as part of an overall nutrient budget alongside any other fertilizers used.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and timing are source- and region-specific',
          text: 'The appropriate application rate and timing depend on the manure’s specific nutrient content, the crop, soil test results, yield goal, and local regulations, including manure-management rules in many regions. AgricultureID does not publish universal application rates; follow manure and soil testing and regional guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Poorly stored or over-applied manure can contribute to nitrogen losses through ammonia volatilisation and nitrate leaching, phosphorus accumulation and runoff, and, in some conditions, pathogen or odour concerns, all of which are addressed by many countries’ manure-management regulations.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Covered storage, timing applications away from heavy rainfall, and incorporation into soil are general practices that reduce nutrient loss; specific requirements are set by local manure-management regulations.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'vermicompost' },
    { type: 'fertilizer', slug: 'biochar' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  glossaryTerms: ['macronutrient', 'crop-rotation'],
  geographicScope:
    'Global overview of farmyard manure as an organic fertilizer. Livestock systems, bedding materials, and manure-management regulations vary widely by region.',
  climateContext:
    'Nitrogen mineralisation and ammonia loss from manure both increase with warmer temperatures, affecting both nutrient supply timing and loss risk.',
  limitations: [
    'This entry describes farmyard manure as a category; nutrient content varies enormously by livestock species, diet, bedding, and storage and is not quantified here.',
    'This is not an application rate recommendation for any crop or region.',
    'Manure-management regulations, including storage and application restrictions, vary by country and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Manure as an organic fertilizer in mixed crop-livestock systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Manure nutrient content, storage, and management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Manure nutrient testing and management guidance',
    },
    { sourceId: 'ahdb', citedFor: 'Organic nutrient management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Farmyard Manure',
    description:
      'Farmyard manure (FYM) as an organic fertilizer: composition, variable nutrient content, contribution to soil organic matter, and management principles.',
    keywords: [
      'farmyard manure',
      'animal manure fertilizer',
      'organic fertilizer',
      'manure management',
    ],
  },
  structuredData: { article: true },
};
