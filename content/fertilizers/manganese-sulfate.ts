import type { FertilizerContent } from '@/types/content';

export const manganeseSulfate: FertilizerContent = {
  id: 'fertilizer-manganese-sulfate',
  slug: 'manganese-sulfate',
  contentType: 'fertilizer',
  title: 'Manganese sulfate',
  alternativeNames: ['Manganese sulphate', 'MnSO₄'],
  category: 'Fertilizer',
  subcategory: 'Micronutrient fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~32% Mn (monohydrate)',
  summary:
    'Manganese sulfate is the most widely used manganese fertilizer, a soluble salt supplying manganese and sulfur, applied especially as a foliar spray to correct manganese deficiency on high-pH and organic soils where soil-applied manganese is quickly made unavailable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Manganese sulfate is a soluble manganese salt, commonly the monohydrate at around 32% manganese, used to correct manganese deficiency. It supplies both manganese and sulfate-sulfur and dissolves readily for soil or foliar application.',
    },
    {
      type: 'paragraph',
      text: 'A key practical point is that manganese applied to soil is rapidly oxidised to less available forms, especially on high-pH, calcareous, and organic soils. For this reason foliar sprays are often the more reliable route for correcting manganese deficiency in the field.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Soluble manganese micronutrient fertilizer',
    },
    { label: 'Typical analysis', value: 'About 32% manganese (monohydrate)' },
    { label: 'Nutrients supplied', value: 'Manganese and sulfur' },
    { label: 'Common form', value: 'Water-soluble crystals or powder' },
    {
      label: 'Key consideration',
      value:
        'Soil-applied manganese is quickly fixed; foliar sprays are often preferred',
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
          text: 'Manganese sulfate is a hydrated manganese salt, supplied mainly as the monohydrate at around 32% manganese. It is fully water-soluble and delivers manganese together with sulfate-sulfur, which makes it convenient for both spray solutions and dry blends.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chemical formula',
              description: 'MnSO₄ (commonly the monohydrate)',
            },
            {
              term: 'Manganese content',
              description: 'About 32% in the monohydrate',
            },
            {
              term: 'Sulfur content',
              description: 'Supplied alongside manganese as sulfate',
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
          text: 'Manganese sulfate supplies manganese, a micronutrient involved in photosynthesis and enzyme systems, along with sulfate-sulfur. In soil, manganese availability is strongly controlled by pH: at higher pH it is oxidised to poorly available forms, so deficiency is common on limed, calcareous, and high-organic-matter soils.',
        },
        {
          type: 'list',
          items: [
            'Manganese availability drops sharply as soil pH rises',
            'Soil-applied manganese is rapidly oxidised to less available forms',
            'Sulfate-sulfur is supplied alongside the manganese',
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
          text: 'Manganese sulfate is used to correct manganese deficiency in crops such as cereals, soybean, and other legumes, often by foliar spray because soil applications are quickly fixed on the high-pH soils where deficiency is most common. Repeat sprays are sometimes needed within a season.',
        },
        {
          type: 'list',
          items: [
            'Foliar sprays are often more reliable than soil applications',
            'Banded soil placement can reduce fixation compared with broadcasting',
            'Responsive crops include cereals and legumes on high-pH soils',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Diagnose before treating; rates are region-specific',
          text: 'Manganese deficiency should be confirmed by soil or tissue testing, and the right rate and method depend on the crop, soil pH, and local guidance. AgricultureID does not publish universal fertilizer rates; follow testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Because soil-applied manganese is rapidly made unavailable on the soils where it is most often deficient, soil correction can be inefficient and short-lived, and foliar treatment may need repeating. As with other micronutrients, manganese is required only in small amounts and excess can be harmful.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'On high-pH soils, soil-applied manganese is fixed quickly, so foliar sprays and repeat applications are often needed. Apply only where deficiency is confirmed, as manganese is required in small amounts.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'fertilizer', slug: 'zinc-sulfate' },
    { type: 'fertilizer', slug: 'copper-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'manganese' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'oats' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of manganese sulfate as the leading manganese fertilizer. Manganese deficiency is most common on high-pH, calcareous, and organic soils.',
  climateContext:
    'Manganese availability is governed largely by soil pH rather than climate; deficiency is concentrated on limed, calcareous, and peaty soils.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Soil-applied manganese is rapidly fixed on high-pH soils, so correction can be inefficient and short-lived.',
    'Manganese requirements are small and over-application can be harmful.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Manganese sulfate monohydrate contains about 32% manganese and is fully water-soluble, supplying sulfate-sulfur alongside the manganese.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents manganese sulfate as the principal manganese fertilizer and its manganese content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS micronutrient guidance describes manganese sulfate composition and foliar use.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'ifa',
      citedFor: 'Manganese fertilizer sources and composition',
    },
    { sourceId: 'fao', citedFor: 'Micronutrient deficiency and correction' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Manganese availability and soil pH interactions',
    },
    { sourceId: 'ahdb', citedFor: 'Manganese deficiency management context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Manganese Sulfate Fertilizer',
    description:
      'Manganese sulfate: the main manganese fertilizer, its manganese and sulfur supply, why foliar sprays suit high-pH soils, and its limitations.',
    keywords: [
      'manganese sulfate fertilizer',
      'manganese deficiency',
      'micronutrient fertilizer',
      'manganese sulphate foliar',
    ],
  },
  structuredData: { article: true },
};
