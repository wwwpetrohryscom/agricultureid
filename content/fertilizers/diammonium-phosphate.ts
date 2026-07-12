import type { FertilizerContent } from '@/types/content';

export const diammoniumPhosphate: FertilizerContent = {
  id: 'fertilizer-diammonium-phosphate',
  slug: 'diammonium-phosphate',
  contentType: 'fertilizer',
  title: 'Diammonium phosphate',
  alternativeNames: ['DAP', '(NH₄)₂HPO₄'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '18-46-0',
  summary:
    'Diammonium phosphate is the most widely traded phosphorus fertilizer in the world, supplying high concentrations of both phosphorus and nitrogen, with a locally alkaline reaction around the dissolving granule that briefly raises pH near the fertilizer band.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Diammonium phosphate (DAP), (NH₄)₂HPO₄, is manufactured by fully neutralising phosphoric acid with ammonia. It typically analyses around 18% nitrogen and 46% phosphorus (as P₂O₅), making it one of the highest-analysis solid fertilizers in global trade.',
    },
    {
      type: 'paragraph',
      text: 'Unlike monoammonium phosphate, DAP creates a temporary zone of elevated pH around the dissolving granule as ammonium is released, before nitrification lowers the pH again. It is used across a very wide range of crops and cropping systems worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Phosphorus fertilizer with nitrogen' },
    { label: 'Typical analysis', value: '18-46-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Phosphorus and nitrogen' },
    { label: 'Common form', value: 'Granular solid' },
    {
      label: 'Key consideration',
      value:
        'Creates a temporary alkaline zone around the granule as it dissolves',
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
          text: 'DAP is produced by fully neutralising phosphoric acid with ammonia gas, yielding a granular salt with a guaranteed analysis of roughly 18% nitrogen and 46% phosphorus. It is one of the world’s most widely produced and traded fertilizers.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: '(NH₄)₂HPO₄' },
            {
              term: 'Nitrogen content',
              description: 'About 18% total nitrogen, as ammonium',
            },
            {
              term: 'Phosphorus content',
              description: 'About 46% P₂O₅, highly water-soluble',
            },
            {
              term: 'Granule reaction',
              description:
                'Locally alkaline as the granule dissolves, then neutralises',
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
          text: 'DAP supplies phosphorus as its dominant nutrient in a highly water-soluble form, together with a substantial secondary contribution of nitrogen as ammonium, both released together as the granule dissolves.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus is supplied at high concentration and full water solubility',
            'Nitrogen is supplied as ammonium and nitrifies over time',
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
          text: 'DAP is used across cereal, oilseed, and many other cropping systems worldwide, often as a base phosphorus source in blended or compound fertilizer programs, and in some systems as a starter fertilizer.',
        },
        {
          type: 'list',
          items: [
            'High analysis reduces bulk and handling cost per unit of nutrient',
            'Full water solubility supports rapid nutrient release once applied',
            'Common base material for compound NPK fertilizers',
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
          text: 'Because phosphorus moves little through most soils, DAP is generally most effective when placed where developing roots can access it. Some care is taken to avoid placing DAP in direct contact with germinating seed at high rates, since the temporary alkaline reaction and ammonia release near the granule can affect sensitive seedlings.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The correct phosphorus rate, placement relative to seed, and starter strategy depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'As with other phosphate fertilizers, the principal environmental concern is phosphorus movement to surface water, mainly through erosion and runoff of phosphorus-enriched soil, which can contribute to eutrophication.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Erosion-control practices, appropriate timing relative to rainfall, and matching phosphorus supply to crop and soil-test need are general approaches to reducing off-site movement; specifics are locally determined.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'monoammonium-phosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of diammonium phosphate as a major traded phosphorus fertilizer. Blending practices and use vary by cropping system and region.',
  climateContext:
    'Cold soils slow phosphorus diffusion to roots, which can increase the practical importance of placement in early-season applications in cool climates.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a phosphorus rate recommendation.',
    'Phosphorus availability depends strongly on soil pH, texture, and phosphorus-fixing capacity, which are not detailed for specific soils here.',
    'Seed-safety considerations for in-furrow or seed-placed DAP vary by crop and rate and should follow local agronomic guidance.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Diammonium phosphate (DAP) typically analyses around 18% nitrogen and 46% phosphorus (as P₂O₅), one of the highest-analysis solid fertilizers in global trade.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents DAP as a major globally traded phosphorus fertilizer and its typical composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance describes DAP composition and phosphorus behaviour in soil.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global phosphorus fertilizer production and use',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Diammonium phosphate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus behaviour and loss pathways in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Phosphorus management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Diammonium Phosphate (DAP)',
    description:
      'Diammonium phosphate (DAP) fertilizer: high-analysis phosphorus and nitrogen composition, granule reaction, general use, and environmental notes.',
    keywords: [
      'diammonium phosphate',
      'DAP fertilizer',
      'phosphorus fertilizer',
      'DAP composition',
    ],
  },
  structuredData: { article: true },
};
