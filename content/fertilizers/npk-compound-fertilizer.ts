import type { FertilizerContent } from '@/types/content';

export const npkCompoundFertilizer: FertilizerContent = {
  id: 'fertilizer-npk-compound-fertilizer',
  slug: 'npk-compound-fertilizer',
  contentType: 'fertilizer',
  title: 'NPK compound fertilizer',
  alternativeNames: [
    'Compound fertilizer',
    'Complex fertilizer',
    'Blended NPK',
  ],
  category: 'Fertilizer',
  subcategory: 'Compound fertilizer',
  fertilizerClass: 'compound-npk',
  typicalAnalysis: '15-15-15',
  summary:
    'NPK compound fertilizers combine nitrogen, phosphorus, and potassium in a single granulated or blended product, formulated in a wide range of grades to match different crop and soil requirements in one application.',
  introduction: [
    {
      type: 'paragraph',
      text: 'NPK compound fertilizers supply nitrogen, phosphorus, and potassium together, either as granules in which each particle contains all three nutrients (true compounds) or as physical blends of single-nutrient granules mixed to a target ratio. A grade such as 15-15-15 indicates equal percentages of N, P₂O₅, and K₂O by weight.',
    },
    {
      type: 'paragraph',
      text: 'Manufacturers produce compound fertilizers in many grades and, in some products, with added secondary nutrients or micronutrients, to serve different crops, soils, and stages of the growing season with a single, convenient product.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Compound fertilizer supplying N, P, and K together',
    },
    {
      label: 'Typical analysis',
      value: '15-15-15 (N-P₂O₅-K₂O); many grades are produced',
    },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen, phosphorus, and potassium',
    },
    {
      label: 'Common form',
      value: 'Granular solid, either true compound or physically blended',
    },
    {
      label: 'Key consideration',
      value:
        'Grade must be matched to actual soil-test nutrient needs, not applied as a fixed default',
    },
    { label: 'Solubility', value: 'Varies by grade and constituent materials' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Compound fertilizers are described by a three-number grade giving the percentage of nitrogen, phosphorus (as P₂O₅), and potassium (as K₂O) by weight. A common grade such as 15-15-15 is only one of many available; grades are formulated to match different crop and regional needs.',
        },
        {
          type: 'table',
          caption: 'Illustrative NPK grades',
          columns: ['Grade (N-P₂O₅-K₂O)', 'Typical use context'],
          rows: [
            ['15-15-15', 'General-purpose, balanced nutrient supply'],
            [
              '20-10-10',
              'Nitrogen-weighted for crops with high nitrogen demand',
            ],
            [
              '12-24-12',
              'Phosphorus-weighted for establishment or root-crop needs',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'These figures are illustrative of how grades vary, not a recommendation of which grade to use; the appropriate grade depends on soil test results and crop requirement.',
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'A compound fertilizer supplies nitrogen, phosphorus, and potassium in the proportions stated on its grade, and some formulations also include sulfur, calcium, magnesium, or micronutrients depending on the constituent raw materials used.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen, phosphorus, and potassium proportions are fixed by the stated grade',
            'Some products add secondary nutrients or micronutrients to the base NPK grade',
            'Nutrient release behaviour depends on the specific source materials blended or reacted together',
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
          text: 'Compound fertilizers offer the convenience of applying multiple nutrients in a single pass, which can simplify logistics and reduce the number of field operations compared with applying several straight fertilizers separately.',
        },
        {
          type: 'list',
          items: [
            'Single-pass application of multiple nutrients simplifies logistics',
            'Wide range of grades allows matching to different crop and soil needs',
            'Some products add micronutrients or secondary nutrients to a base NPK formulation',
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
          text: 'Because a compound fertilizer applies nitrogen, phosphorus, and potassium in a fixed ratio, general practice is to choose a grade based on soil test results and crop demand rather than applying a single grade uniformly regardless of actual nutrient status, which can lead to over- or under-supplying individual nutrients.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grade, rate, and timing are region-specific',
          text: 'The right NPK grade, application rate, and timing depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer recommendations; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because compound fertilizers deliver nitrogen, phosphorus, and potassium in a fixed ratio, applying a grade that does not match actual soil or crop needs risks over-supplying one or more nutrients, increasing the potential for nitrogen or phosphorus losses to water or air relative to a program matched to soil-test results.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Matching grade and rate to soil-test results, rather than defaulting to a single blanket grade, reduces the risk of unintended nutrient surplus and associated environmental loss.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-ph' },
  ],
  glossaryTerms: ['macronutrient', 'yield'],
  geographicScope:
    'Global overview of NPK compound fertilizers as a product category. Specific grades manufactured and used vary widely by region, crop, and market.',
  climateContext:
    'Nutrient release and loss behaviour depend on the specific source materials in a given compound product and on local soil and climate conditions.',
  limitations: [
    'This entry describes compound fertilizers as a category; it is not a recommendation of any specific grade, rate, or timing.',
    'Grades and formulations vary enormously by manufacturer and market and should be confirmed from the specific product label.',
    'Nutrient behaviour within a compound product depends on its constituent raw materials, which are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'A commonly cited illustrative NPK compound fertilizer grade is 15-15-15 (equal percentages of N, P₂O₅, and K₂O by weight); actual grades vary widely by product and region and are not a recommendation.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents compound NPK fertilizer types, grade notation, and global use.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'ahdb',
          evidenceNote:
            'AHDB nutrient management guidance describes how NPK compound grades are selected against soil-test needs.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Compound fertilizer types and global use' },
    {
      sourceId: 'ifa',
      citedFor: 'Compound and blended fertilizer product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nutrient management principles for multi-nutrient fertilizers',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Nutrient management context and grade selection',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'NPK Compound Fertilizer',
    description:
      'NPK compound fertilizers explained: how grades are formulated, nitrogen-phosphorus-potassium supply, general use, and matching grade to soil-test needs.',
    keywords: [
      'NPK fertilizer',
      'compound fertilizer',
      'NPK grade',
      'blended fertilizer',
    ],
  },
  structuredData: { article: true },
};
