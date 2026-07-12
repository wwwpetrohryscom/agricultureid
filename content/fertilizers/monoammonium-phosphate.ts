import type { FertilizerContent } from '@/types/content';

export const monoammoniumPhosphate: FertilizerContent = {
  id: 'fertilizer-monoammonium-phosphate',
  slug: 'monoammonium-phosphate',
  contentType: 'fertilizer',
  title: 'Monoammonium phosphate',
  alternativeNames: ['MAP', 'NH₄H₂PO₄'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '11-52-0',
  summary:
    'Monoammonium phosphate is a high-analysis, water-soluble phosphorus fertilizer that also supplies a modest amount of nitrogen, widely used as a starter and blending material because of its low salt index and slightly acidifying reaction near the granule.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Monoammonium phosphate (MAP), NH₄H₂PO₄, is manufactured by reacting phosphoric acid with ammonia in proportions that leave the product acidic. Its typical analysis is about 11% nitrogen and 52% phosphorus (expressed as P₂O₅), making it one of the most concentrated phosphorus fertilizers in common use.',
    },
    {
      type: 'paragraph',
      text: 'Because MAP dissolves readily and creates a localised zone of low pH around the dissolving granule, it is a common choice for starter fertilizer applications near the seed or root zone at planting, and it is also blended with other materials to build compound NPK products.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Phosphorus fertilizer with nitrogen' },
    { label: 'Typical analysis', value: '11-52-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Phosphorus and nitrogen' },
    {
      label: 'Common form',
      value: 'Granular solid; also used in soluble/fertigation formulations',
    },
    {
      label: 'Key consideration',
      value: 'Phosphorus availability is strongly influenced by soil pH',
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
          text: 'MAP is produced by partially neutralising phosphoric acid with ammonia, yielding an acidic salt with a guaranteed analysis of roughly 11% nitrogen and 52% phosphorus (as P₂O₅). It contains no potassium.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'NH₄H₂PO₄' },
            {
              term: 'Nitrogen content',
              description: 'About 11% total nitrogen, as ammonium',
            },
            {
              term: 'Phosphorus content',
              description: 'About 52% P₂O₅, highly water-soluble',
            },
            {
              term: 'Granule reaction',
              description: 'Acidic zone forms around the dissolving granule',
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
          text: 'MAP supplies phosphorus, its dominant nutrient, in a highly water-soluble form, along with a smaller amount of nitrogen as ammonium. The phosphorus and nitrogen are released together as the granule dissolves in soil moisture.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus is the primary nutrient, at high concentration and full water solubility',
            'Nitrogen is supplied as ammonium, a secondary but useful contribution',
            'No potassium or micronutrients are supplied',
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
          text: 'MAP is widely used as a starter fertilizer placed near the seed or root zone at planting, where early phosphorus availability supports root establishment, and as a base material for compound fertilizer blends and soluble fertigation programs.',
        },
        {
          type: 'list',
          items: [
            'High phosphorus concentration reduces bulk and handling cost per unit of nutrient',
            'Complete water solubility suits banded starter placement and fertigation',
            'Common building block for NPK blends and liquid fertilizer formulations',
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
          text: 'Phosphorus from MAP, as with other phosphate fertilizers, is most effective when placed close to developing roots, since phosphorus moves little in most soils. General practice accounts for soil phosphorus status and pH, both of which strongly affect phosphorus availability.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right phosphorus rate, placement, and starter strategy depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus lost from fields, whether dissolved or attached to eroded soil particles, can contribute to the eutrophication of surface waters. Because phosphorus binds strongly to many soils, surface runoff and erosion, rather than leaching, are usually the main loss pathways of concern.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Practices that reduce erosion and runoff, such as maintaining ground cover and avoiding application before heavy rainfall, help limit off-site phosphorus movement; specifics depend on local topography and regulation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of monoammonium phosphate as a phosphorus fertilizer. Suitability for starter placement and blending practices vary by cropping system and region.',
  climateContext:
    'Cold, wet soils in early spring can restrict root growth and phosphorus diffusion, increasing the practical value of concentrated, soluble phosphorus placed near the root zone in some systems.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a phosphorus rate recommendation.',
    'Phosphorus availability from MAP depends strongly on soil pH, texture, and phosphorus-fixing capacity, which are not detailed for specific soils here.',
    'Starter-placement benefits are context-dependent and should be evaluated against local trial data and soil test results.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Monoammonium phosphate (MAP) typically analyses about 11% nitrogen and 52% phosphorus (expressed as P₂O₅).',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents MAP as a phosphorus fertilizer source and its typical nitrogen and phosphorus content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance describes MAP composition and phosphorus behaviour in soil.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Phosphorus fertilizer sources and plant availability',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Monoammonium phosphate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus behaviour and loss pathways in soil',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Phosphorus management and starter fertilizer context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Monoammonium Phosphate (MAP)',
    description:
      'Monoammonium phosphate (MAP) fertilizer: high-analysis phosphorus and nitrogen composition, starter use, application principles, and environmental notes.',
    keywords: [
      'monoammonium phosphate',
      'MAP fertilizer',
      'phosphorus fertilizer',
      'starter fertilizer',
    ],
  },
  structuredData: { article: true },
};
