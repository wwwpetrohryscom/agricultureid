import type { FertilizerContent } from '@/types/content';

export const compost: FertilizerContent = {
  id: 'fertilizer-compost',
  slug: 'compost',
  contentType: 'fertilizer',
  title: 'Compost',
  alternativeNames: ['Composted organic matter'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable, low analysis — typically well under 2% each of N, P₂O₅, and K₂O on an as-applied basis',
  summary:
    'Compost is decomposed organic matter produced by controlled aerobic breakdown of plant and other biodegradable residues, valued more for its contribution to soil organic matter, structure, and biological activity than for its comparatively low and variable nutrient content.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Compost is produced when microorganisms break down plant residues, food waste, or other organic materials under managed aerobic conditions, typically involving controlled moisture, aeration, and a period of elevated temperature that stabilises the material and reduces pathogens and weed seed viability.',
    },
    {
      type: 'paragraph',
      text: 'Compared with mineral fertilizers, compost supplies nutrients at low and variable concentrations, released gradually as the organic matter continues to decompose in soil. Its principal agronomic value lies as much in building soil organic matter, improving structure, and supporting soil biological activity as in direct nutrient supply.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Organic soil amendment' },
    {
      label: 'Typical analysis',
      value:
        'Variable, low analysis (well under 2% N-P₂O₅-K₂O as applied); varies by feedstock and process',
    },
    {
      label: 'Nutrients supplied',
      value:
        'Nitrogen, phosphorus, and potassium, at low concentration; also trace elements',
    },
    {
      label: 'Common form',
      value: 'Bulk solid, ranging from coarse to fine texture',
    },
    {
      label: 'Key consideration',
      value:
        'Nutrient content and release rate vary widely by feedstock, process, and maturity',
    },
    {
      label: 'Solubility',
      value: 'Most nutrients are bound in organic matter, released gradually',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Compost composition depends heavily on its feedstock, such as plant residues, yard waste, or food scraps, and on the composting process and degree of maturity. Nutrient analysis is far lower and more variable than mineral fertilizers, and is typically stated as a range rather than a fixed grade.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Nutrient content',
              description:
                'Low and variable; typically well under 2% each of N, P₂O₅, and K₂O',
            },
            {
              term: 'Organic matter content',
              description: 'High; the primary contribution of the material',
            },
            {
              term: 'Nutrient form',
              description:
                'Bound in organic matter, released as decomposition continues',
            },
            {
              term: 'Variability',
              description:
                'Depends strongly on feedstock, process, and maturity',
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
          text: 'Compost supplies nitrogen, phosphorus, and potassium at low concentrations, along with secondary nutrients and micronutrients, most of them held within organic matter and released gradually as soil organisms continue to decompose the material after application.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen, phosphorus, and potassium are supplied at low, variable concentrations',
            'Nutrients are released gradually through ongoing decomposition rather than immediately',
            'Trace elements are often present, depending on feedstock',
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
          text: 'Compost is applied to build soil organic matter, improve soil structure and water-holding capacity, and support soil biological activity, in addition to contributing some nutrients. It is widely used in vegetable, horticultural, and other cropping systems, including organic production.',
        },
        {
          type: 'list',
          items: [
            'Builds soil organic matter over repeated applications',
            'Improves soil structure, aeration, and water-holding capacity',
            'Supports soil microbial and biological activity',
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
          text: 'Because nutrient content and release rate vary so widely between compost batches, general practice is to test compost nutrient content where possible and account for gradual nutrient release when planning an overall fertility program, rather than treating it as equivalent to a mineral fertilizer of known analysis.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and timing are batch- and region-specific',
          text: 'The appropriate compost application rate, timing, and how it fits alongside other nutrient sources depend on the specific compost’s analysis, the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal application rates; follow soil and compost testing and regional guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Well-matured compost generally poses lower risk of rapid nutrient loss than soluble mineral fertilizers, since its nutrients are released gradually, but excessive or poorly timed application can still contribute to nutrient runoff or leaching, particularly of phosphorus and, once mineralised, nitrate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Compost quality, maturity, and any contamination (for example from persistent herbicides in some feedstocks) vary by source; sourcing from a reputable, tested supply reduces risk.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'vermicompost' },
    { type: 'fertilizer', slug: 'green-manure' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-biology' },
  ],
  glossaryTerms: ['macronutrient', 'crop-rotation'],
  geographicScope:
    'Global overview of compost as an organic soil amendment. Feedstocks, composting methods, and typical nutrient content vary widely by region and system.',
  climateContext:
    'Decomposition rate, and therefore nutrient release from compost, is faster under warm, moist soil conditions than under cold or dry conditions.',
  limitations: [
    'This entry describes compost as a category; nutrient content and release rate vary widely by feedstock, process, and maturity and are not quantified for any specific product.',
    'This is not an application rate recommendation for any crop or region.',
    'Compost quality and potential contaminants depend on feedstock and process; sourcing and testing practices are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Composting practices and organic amendment use',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil organic matter and compost effects on soil properties',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Compost production and quality guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Organic amendment nutrient management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Compost',
    description:
      'Compost as an organic fertilizer and soil amendment: composition, variable nutrient content, effects on soil organic matter and structure, and general use.',
    keywords: [
      'compost fertilizer',
      'organic soil amendment',
      'composting',
      'soil organic matter',
    ],
  },
  structuredData: { article: true },
};
