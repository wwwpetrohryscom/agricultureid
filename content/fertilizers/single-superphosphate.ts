import type { FertilizerContent } from '@/types/content';

export const singleSuperphosphate: FertilizerContent = {
  id: 'fertilizer-single-superphosphate',
  slug: 'single-superphosphate',
  contentType: 'fertilizer',
  title: 'Single superphosphate',
  alternativeNames: ['SSP', 'Ordinary superphosphate'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '0-16-0',
  summary:
    'Single superphosphate is a lower-analysis phosphorus fertilizer made by treating phosphate rock with sulfuric acid, valued for supplying phosphorus, calcium, and sulfur together, particularly on legume and other sulfur-responsive crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Single superphosphate (SSP) is produced by acidulating phosphate rock with sulfuric acid, a process that converts a portion of the rock’s phosphorus into water-soluble monocalcium phosphate while retaining calcium sulfate (gypsum) as a co-product within the fertilizer.',
    },
    {
      type: 'paragraph',
      text: 'Because it is made with sulfuric rather than phosphoric acid, SSP has a lower phosphorus concentration than triple superphosphate, typically around 16% P₂O₅, but it supplies meaningful amounts of both calcium and sulfur alongside its phosphorus.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Phosphorus fertilizer with calcium and sulfur',
    },
    {
      label: 'Typical analysis',
      value: '0-16-0 (N-P₂O₅-K₂O), with calcium and sulfur',
    },
    { label: 'Nutrients supplied', value: 'Phosphorus, calcium, and sulfur' },
    { label: 'Common form', value: 'Granular or powdered solid' },
    {
      label: 'Key consideration',
      value:
        'Lower phosphorus concentration than triple superphosphate, offset by added calcium and sulfur',
    },
    {
      label: 'Solubility',
      value:
        'Water-soluble phosphorus fraction; gypsum component is moderately soluble',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'SSP is manufactured by treating phosphate rock with sulfuric acid, producing a mixture of water-soluble monocalcium phosphate and calcium sulfate. Its guaranteed analysis is typically around 16% P₂O₅, along with roughly 18–21% calcium and 11–12% sulfur, depending on the source rock and process.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Phosphorus content',
              description: 'About 16% P₂O₅, largely water-soluble',
            },
            {
              term: 'Calcium content',
              description: 'Substantial, from calcium phosphate and gypsum',
            },
            {
              term: 'Sulfur content',
              description: 'Substantial, from the gypsum co-product',
            },
            {
              term: 'Manufacture',
              description: 'Phosphate rock acidulated with sulfuric acid',
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
          text: 'SSP supplies phosphorus in a largely water-soluble form, together with meaningful amounts of both calcium and sulfate-sulfur, making it a multi-nutrient product despite its lower phosphorus concentration relative to triple superphosphate.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus is water-soluble and plant-available soon after application',
            'Calcium and sulfate-sulfur are supplied as substantial secondary nutrients',
            'No nitrogen or potassium is supplied',
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
          text: 'SSP is valued where a combined supply of phosphorus, calcium, and sulfur is useful, such as on legumes and oilseed crops with a sulfur requirement, and in cropping systems where its lower analysis and bulkier form are not a significant handling constraint.',
        },
        {
          type: 'list',
          items: [
            'Supplies three nutrients — phosphorus, calcium, and sulfur — in one product',
            'Useful on crops and soils with a sulfur requirement alongside phosphorus need',
            'Long-established product with a well-understood soil behaviour',
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
          text: 'As with other phosphate fertilizers, placement near the root zone improves phosphorus uptake efficiency because phosphorus is largely immobile in soil, while the sulfur and calcium components behave more like the sulfate and calcium supplied by other sources.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right phosphorus, calcium, and sulfur rate and placement depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus loss through erosion and runoff remains the main environmental concern common to phosphate fertilizers, while the sulfate component behaves similarly to other soluble sulfate sources, being mobile in the soil solution.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Erosion control and matching nutrient supply to crop and soil-test need help limit off-site movement of phosphorus; local terrain and regulation determine specific practices.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'triple-superphosphate' },
    { type: 'fertilizer', slug: 'rock-phosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'pea' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of single superphosphate as a multi-nutrient phosphorus fertilizer. Availability and relative use compared with higher-analysis phosphates vary by region.',
  climateContext:
    'Sulfur deficiency, which SSP helps address, is more common on soils with low organic matter and in regions with reduced atmospheric sulfur deposition.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nutrient rate recommendation.',
    'Phosphorus, calcium, and sulfur content vary somewhat by source rock and manufacturing process and should be confirmed from the product label.',
    'Phosphorus availability depends strongly on soil pH and phosphorus-fixing capacity, which are not detailed for specific soils here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        "Single superphosphate (SSP)'s guaranteed analysis is typically around 16% P₂O₅, along with roughly 18–21% calcium and 11–12% sulfur, depending on the source rock and process.",
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents SSP as a combined phosphorus, calcium, and sulfur fertilizer source and its typical composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'ahdb',
          evidenceNote:
            'AHDB nutrient management guidance describes SSP phosphorus, calcium, and sulfur content.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Phosphorus and sulfur fertilizer sources' },
    {
      sourceId: 'ifa',
      citedFor: 'Single superphosphate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus and sulfur behaviour in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Phosphorus and sulfur management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Single Superphosphate (SSP)',
    description:
      'Single superphosphate (SSP) fertilizer: combined phosphorus, calcium, and sulfur supply, composition, general use, and application principles.',
    keywords: [
      'single superphosphate',
      'SSP fertilizer',
      'phosphorus fertilizer',
      'ordinary superphosphate',
    ],
  },
  structuredData: { article: true },
};
