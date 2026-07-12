import type { FertilizerContent } from '@/types/content';

export const struvite: FertilizerContent = {
  id: 'fertilizer-struvite',
  slug: 'struvite',
  contentType: 'fertilizer',
  title: 'Struvite',
  alternativeNames: [
    'Magnesium ammonium phosphate',
    'Recovered phosphorus fertilizer',
  ],
  category: 'Fertilizer',
  subcategory: 'Recovered phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '~5-28-0, plus magnesium',
  summary:
    'Struvite is a magnesium ammonium phosphate mineral that can be recovered from wastewater treatment or livestock manure processing and used as a slow-release phosphorus and nitrogen fertilizer, notable as a nutrient-recovery product within a circular approach to phosphorus supply.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Struvite (magnesium ammonium phosphate, MgNH₄PO₄·6H₂O) forms naturally in some wastewater treatment and manure processing systems, where it can foul pipes and equipment. Deliberately precipitating and harvesting it converts that nuisance mineral into a fertilizer product, typically analysing around 5% nitrogen and 28% phosphorus (as P₂O₅), with a meaningful magnesium content.',
    },
    {
      type: 'paragraph',
      text: 'Because struvite has low solubility in water, it releases its nitrogen and phosphorus gradually as soil conditions weather the mineral, giving it a slow-release character similar in principle to some coated or mineral phosphorus fertilizers, while also representing a recovered, recycled nutrient source rather than one mined from virgin rock phosphate.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Recovered magnesium ammonium phosphate fertilizer',
    },
    {
      label: 'Typical analysis',
      value: 'About 5-28-0, plus magnesium',
    },
    {
      label: 'Nutrients supplied',
      value: 'Phosphorus, nitrogen, and magnesium',
    },
    { label: 'Common form', value: 'Granular crystalline solid' },
    {
      label: 'Key consideration',
      value:
        'Low water solubility gives a slow-release nutrient profile and low leaching risk',
    },
    { label: 'Solubility', value: 'Low solubility in water' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Struvite is recovered by controlled precipitation from nutrient-rich streams such as municipal wastewater or livestock manure digestate, where magnesium, ammonium, and phosphate combine into a crystalline mineral. Recovered products typically guarantee around 5% nitrogen and 28% phosphorus, with magnesium content that varies by source stream and process.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Mineral formula', description: 'MgNH₄PO₄·6H₂O' },
            {
              term: 'Phosphorus content',
              description: 'About 28% P₂O₅',
            },
            {
              term: 'Nitrogen content',
              description: 'About 5% total nitrogen, as ammonium',
            },
            {
              term: 'Source',
              description:
                'Recovered from wastewater treatment or manure processing streams, not mined',
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
          text: 'Struvite supplies phosphorus, nitrogen, and magnesium together in a single low-solubility mineral, releasing these nutrients gradually as the crystal weathers in soil rather than dissolving rapidly on contact with soil moisture.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus is the dominant nutrient by guaranteed analysis',
            'Nitrogen is present as ammonium, released alongside phosphorus as the mineral weathers',
            'Magnesium is supplied as part of the same mineral structure',
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
          text: 'Struvite is used as a slow-release phosphorus fertilizer on crops such as maize, wheat, and tomato, and is of particular interest as a recovered nutrient product that diverts phosphorus and nitrogen from wastewater or manure streams back into crop production, supporting a more circular approach to phosphorus supply.',
        },
        {
          type: 'list',
          items: [
            'Provides sustained phosphorus availability over an extended period',
            'Recovers and recycles nutrients from wastewater or manure processing streams',
            'Low solubility limits immediate nutrient loss after application',
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
          text: 'Because struvite releases nutrients gradually, general practice is to apply and incorporate it ahead of or at planting rather than as a rapid-response top-dress, with rates guided by soil phosphorus test results and crop phosphorus demand rather than a single universal figure.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and suitability depend on soil test and product source',
          text: 'The appropriate rate depends on soil phosphorus test results, the crop, and the specific recovered product’s guaranteed analysis, which can vary by source stream and process. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Struvite’s low solubility generally reduces the risk of rapid phosphorus runoff loss compared with highly soluble phosphate fertilizers, and recovering it from wastewater or manure streams can help reduce nutrient discharge from those systems while providing a recycled alternative to phosphorus mined from finite rock phosphate reserves.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Regulatory approval, quality standards, and availability of recovered struvite products vary by country and processing facility.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'rock-phosphate' },
    { type: 'fertilizer', slug: 'monoammonium-phosphate' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tomato' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-amendments' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of struvite as a recovered phosphorus fertilizer; availability depends on local wastewater or manure-processing recovery infrastructure, which varies widely by country.',
  climateContext:
    'Release rate depends on soil weathering conditions rather than climate directly; suitability is similar across climates where soil phosphorus testing indicates a need.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Guaranteed analysis varies by source stream and recovery process and is not exhaustively specified here.',
    'Availability of recovered struvite products depends on local wastewater or manure-processing infrastructure, which is limited in many regions.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Recovered struvite fertilizer typically analyses around 5% nitrogen and 28% phosphorus (as P₂O₅), together with a variable magnesium content depending on the source stream and process.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents nutrient-recovery fertilizers, including struvite, and typical recovered nutrient content.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance describes struvite composition and slow-release phosphorus behaviour.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Nutrient recovery and recycled phosphorus fertilizers',
    },
    { sourceId: 'ifa', citedFor: 'Struvite product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Slow-release phosphorus behaviour in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Phosphorus fertilizer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Struvite',
    description:
      'Struvite fertilizer: composition, recovery from wastewater and manure streams, slow-release phosphorus and nitrogen supply, and application principles.',
    keywords: [
      'struvite fertilizer',
      'recovered phosphorus fertilizer',
      'magnesium ammonium phosphate',
      'nutrient recovery fertilizer',
    ],
  },
  structuredData: { article: true },
};
