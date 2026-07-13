import type { FertilizerContent } from '@/types/content';

export const zincSulfate: FertilizerContent = {
  id: 'fertilizer-zinc-sulfate',
  slug: 'zinc-sulfate',
  contentType: 'fertilizer',
  title: 'Zinc sulfate',
  alternativeNames: ['Zinc sulphate', 'ZnSO₄'],
  category: 'Fertilizer',
  subcategory: 'Micronutrient fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~36% Zn (monohydrate)',
  summary:
    'Zinc sulfate is the most widely used zinc fertilizer, a water-soluble salt that also supplies sulfur, applied to soil or as a foliar spray to correct zinc deficiency in crops such as maize, rice, and citrus.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Zinc sulfate is a soluble zinc salt available as the monohydrate, which contains around 36% zinc, or the heptahydrate, which is lower in zinc but also fully soluble. It is the dominant material used to correct zinc deficiency, one of the most common micronutrient deficiencies worldwide.',
    },
    {
      type: 'paragraph',
      text: 'Because it dissolves readily, zinc sulfate delivers zinc in immediately plant-available form and also supplies sulfate-sulfur. It can be applied to soil, banded with other fertilizers, coated onto seed, or sprayed on foliage, giving it wide flexibility for deficiency correction.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Soluble zinc micronutrient fertilizer',
    },
    {
      label: 'Typical analysis',
      value: 'About 36% zinc (monohydrate); lower for the heptahydrate',
    },
    { label: 'Nutrients supplied', value: 'Zinc and sulfur' },
    { label: 'Common form', value: 'Water-soluble crystals or powder' },
    {
      label: 'Key consideration',
      value:
        'Corrects a very common micronutrient deficiency; soil or foliar use',
    },
    { label: 'Solubility', value: 'Highly water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Zinc sulfate is a hydrated zinc salt supplied mainly as the monohydrate (around 36% zinc) or the heptahydrate (lower zinc content). Both forms are fully water-soluble and supply zinc together with sulfate-sulfur, and the monohydrate’s higher analysis makes it common in dry blends.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chemical formula',
              description: 'ZnSO₄ (as mono- or heptahydrate)',
            },
            {
              term: 'Zinc content',
              description:
                'About 36% in the monohydrate; lower in the heptahydrate',
            },
            {
              term: 'Sulfur content',
              description: 'Supplied alongside zinc as sulfate',
            },
            { term: 'Solubility', description: 'Fully water-soluble' },
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
          text: 'Zinc sulfate supplies zinc, a micronutrient essential for enzyme function and growth-hormone metabolism, together with sulfate-sulfur. Once in soil, zinc availability falls as pH rises and can be reduced on calcareous, high-phosphorus, or heavily leached soils, which is why deficiency is common in those conditions.',
        },
        {
          type: 'list',
          items: [
            'Zinc is immediately available on dissolving but can be fixed at high soil pH',
            'Sulfate-sulfur is supplied alongside the zinc',
            'Deficiency is common on calcareous, sandy, or high-phosphorus soils',
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
          text: 'Zinc sulfate is used to correct or prevent zinc deficiency in responsive crops such as maize, rice, citrus, and pecan. It can be broadcast or banded into soil, applied as a seed coating, or sprayed on foliage; foliar sprays give a fast response where soil-applied zinc is quickly fixed.',
        },
        {
          type: 'list',
          items: [
            'Soil, seed, and foliar application are all practised',
            'Foliar sprays give a quick response on high-pH soils where zinc is fixed',
            'Responsive crops include maize, rice, and citrus',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Diagnose before treating; rates are region-specific',
          text: 'Zinc deficiency should be confirmed by soil or tissue testing before treatment, and the right rate and method depend on the crop, soil pH, and local guidance. AgricultureID does not publish universal fertilizer rates; follow testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Zinc is needed only in small amounts, and excessive application can be toxic to plants and can accumulate in soil, so it should be applied only where deficiency is confirmed. Soil-applied zinc is readily fixed on high-pH soils, which can favour foliar or banded placement for efficient correction.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because plant zinc requirements are small, over-application can be toxic and can build up in soil over time. Apply only where a deficiency is confirmed by testing.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'fertilizer', slug: 'manganese-sulfate' },
    { type: 'fertilizer', slug: 'copper-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'orange' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of zinc sulfate as the leading zinc fertilizer. Zinc deficiency is especially common on calcareous and high-pH soils in many cropping regions.',
  climateContext:
    'Zinc availability is lower on high-pH, calcareous soils, so deficiency and the need for correction are more common there regardless of climate.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Zinc requirements are small and over-application can be toxic and accumulate in soil.',
    'The efficiency of soil-applied zinc depends on soil pH and chemistry and is not quantified here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Zinc sulfate monohydrate contains about 36% zinc and is fully water-soluble, supplying sulfate-sulfur alongside the zinc.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents zinc sulfate as the principal zinc fertilizer and its zinc content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS micronutrient guidance describes zinc sulfate composition and use.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Zinc fertilizer sources and composition' },
    { sourceId: 'fao', citedFor: 'Micronutrient deficiency and correction' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Zinc availability and soil pH interactions',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Zinc micronutrient management guidance',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Zinc Sulfate Fertilizer',
    description:
      'Zinc sulfate: the leading zinc fertilizer, its zinc and sulfur supply, soil and foliar use to correct zinc deficiency, and the risk of over-application.',
    keywords: [
      'zinc sulfate fertilizer',
      'zinc deficiency correction',
      'micronutrient fertilizer',
      'zinc sulphate',
    ],
  },
  structuredData: { article: true },
};
