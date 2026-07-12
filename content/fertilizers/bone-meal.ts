import type { FertilizerContent } from '@/types/content';

export const boneMeal: FertilizerContent = {
  id: 'fertilizer-bone-meal',
  slug: 'bone-meal',
  contentType: 'fertilizer',
  title: 'Bone meal',
  alternativeNames: ['Steamed bone meal'],
  category: 'Fertilizer',
  subcategory: 'Organic phosphorus fertilizer',
  fertilizerClass: 'organic',
  typicalAnalysis: '~3-15-0, plus calcium',
  summary:
    'Bone meal is an organic fertilizer made from ground animal bone that supplies slow-release phosphorus and calcium, along with a modest amount of nitrogen, commonly used in organic production and for perennial or bulb crops with sustained phosphorus needs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bone meal is produced by grinding steamed or otherwise processed animal bones into a fine powder or granule. It typically analyses around 3% nitrogen and 15% phosphorus (as P₂O₅), together with a substantial calcium content from the bone mineral matrix.',
    },
    {
      type: 'paragraph',
      text: 'Because its phosphorus is bound in a mineral (calcium phosphate) form that must weather or be mineralised before becoming plant-available, bone meal releases nutrients more gradually than soluble mineral phosphorus fertilizers, making it suited to situations where a sustained, slow-release phosphorus supply is wanted.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Organic phosphorus fertilizer from processed animal bone',
    },
    { label: 'Typical analysis', value: 'About 3-15-0, plus calcium' },
    {
      label: 'Nutrients supplied',
      value: 'Phosphorus and calcium, with modest nitrogen',
    },
    { label: 'Common form', value: 'Fine powder or granule' },
    {
      label: 'Key consideration',
      value:
        'Phosphorus releases slowly, over a longer period than soluble phosphate fertilizers',
    },
    {
      label: 'Solubility',
      value: 'Low solubility in water; releases via soil weathering',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Bone meal is made by grinding processed animal bone, which is largely composed of calcium phosphate (hydroxyapatite) along with some residual protein-derived nitrogen. Steaming during processing removes fat and reduces pathogen risk while concentrating the mineral fraction.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Phosphorus content',
              description: 'About 15% P₂O₅, bound as calcium phosphate',
            },
            {
              term: 'Nitrogen content',
              description:
                'About 3% total nitrogen, from residual organic material',
            },
            {
              term: 'Calcium content',
              description: 'Substantial, as part of the bone mineral matrix',
            },
            {
              term: 'Release pattern',
              description:
                'Slow, dependent on soil microbial and chemical weathering of the mineral matrix',
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
          text: 'Bone meal supplies phosphorus and calcium as its primary nutrients, with a smaller nitrogen contribution from residual organic matter. Phosphorus release depends on gradual dissolution of the calcium phosphate mineral, a process influenced by soil pH and microbial activity.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus release is gradual rather than immediate',
            'Calcium is supplied alongside phosphorus as part of the bone mineral',
            'Nitrogen contribution is modest and slowly mineralised',
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
          text: 'Bone meal is commonly used in organic production systems and for establishing perennial crops, bulbs, and transplants such as garlic and onion, where a sustained phosphorus supply through root establishment is valued over the rapid release of soluble mineral phosphate fertilizers.',
        },
        {
          type: 'list',
          items: [
            'Accepted as an input in many organic farming standards',
            'Suited to establishment of perennial crops and bulb crops needing sustained phosphorus',
            'Provides a slow-release alternative to soluble mineral phosphate fertilizers',
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
          text: 'Because phosphorus release is slow, bone meal is generally applied and incorporated well ahead of, or at, planting rather than as an in-season top-dress, and rates are typically guided by soil phosphorus test results rather than a single universal figure.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and timing are soil- and crop-specific',
          text: 'The appropriate rate and timing depend on soil phosphorus test results, the crop, and local guidance, including organic certification standards where relevant. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because bone meal releases phosphorus gradually, the risk of rapid runoff loss immediately after application is generally lower than for highly soluble phosphate fertilizers, though repeated heavy use can still contribute to long-term soil phosphorus accumulation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Availability of animal-derived bone meal and any related sourcing or biosecurity restrictions vary by country; local regulations should be checked before use.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'rock-phosphate' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'vermicompost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'apple' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of bone meal as an organic phosphorus fertilizer, commonly used in organic and horticultural production. Sourcing and biosecurity rules vary by country.',
  climateContext:
    'Warmer, more biologically active soils generally speed mineralisation of bone meal’s organic and mineral phosphorus fractions.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Phosphorus release rate depends on soil pH and microbial activity and is not quantified here.',
    'Sourcing regulations for animal-derived bone meal vary by country and are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Bone meal typically analyses around 3% nitrogen and 15% phosphorus (as P₂O₅), together with a substantial, variable calcium content from the bone mineral matrix.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance on organic fertilizer phosphorus management describes bone meal composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance describes slow-release phosphorus behaviour of bone meal in soil.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Organic phosphorus fertilizer sources' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Slow-release phosphorus behaviour in soil',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Organic fertilizer phosphorus management',
    },
    { sourceId: 'ahdb', citedFor: 'Organic nutrient management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Bone Meal',
    description:
      'Bone meal fertilizer: composition, slow-release phosphorus and calcium supply, organic and horticultural use, and application principles.',
    keywords: [
      'bone meal fertilizer',
      'organic phosphorus fertilizer',
      'slow release phosphorus',
      'bone meal for bulbs',
    ],
  },
  structuredData: { article: true },
};
