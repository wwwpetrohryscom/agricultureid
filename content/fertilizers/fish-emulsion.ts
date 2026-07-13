import type { FertilizerContent } from '@/types/content';

export const fishEmulsion: FertilizerContent = {
  id: 'fertilizer-fish-emulsion',
  slug: 'fish-emulsion',
  contentType: 'fertilizer',
  title: 'Fish emulsion',
  alternativeNames: ['Liquid fish fertilizer', 'Fish fertilizer'],
  category: 'Fertilizer',
  subcategory: 'Organic liquid fertilizer',
  fertilizerClass: 'organic',
  typicalAnalysis: '~5-1-1',
  summary:
    'Fish emulsion is a liquid organic fertilizer made from processed fish or fish by-products, supplying mainly nitrogen with smaller amounts of phosphorus, potassium, and micronutrients; it is fast-acting for an organic source and popular for foliar feeding and fertigation in organic and horticultural systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fish emulsion is a concentrated liquid fertilizer produced from fish and fish-processing by-products that have been partially broken down and stabilised. A common grade is around 5-1-1, indicating that nitrogen is its main nutrient, with modest phosphorus and potassium and a range of trace elements.',
    },
    {
      type: 'paragraph',
      text: 'Because its nutrients are in a partially digested, soluble liquid form, fish emulsion acts relatively quickly for an organic product and is easily applied through sprayers or irrigation. It is diluted with water before use and is valued as a gentle, quick-response feed rather than a bulk nutrient source.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Liquid organic fertilizer, mainly nitrogen',
    },
    { label: 'Typical analysis', value: 'About 5-1-1, plus micronutrients' },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen, with some phosphorus, potassium, and trace elements',
    },
    { label: 'Common form', value: 'Liquid concentrate, diluted before use' },
    {
      label: 'Key consideration',
      value:
        'Fast-acting for an organic source; suited to foliar and fertigation use',
    },
    { label: 'Solubility', value: 'Miscible with water as a diluted solution' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Fish emulsion is made by processing fish or fish waste into a stabilised liquid, often through partial enzymatic or heat breakdown. The result is a nutrient solution dominated by nitrogen, with lower phosphorus and potassium and a spread of micronutrients derived from the fish tissue. Exact analysis varies by product.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Source',
              description: 'Processed fish and fish-processing by-products',
            },
            {
              term: 'Primary nutrient',
              description:
                'Nitrogen, with smaller amounts of phosphorus and potassium',
            },
            {
              term: 'Micronutrients',
              description: 'A range of trace elements from the fish tissue',
            },
            {
              term: 'Physical form',
              description:
                'Liquid concentrate, diluted with water before application',
            },
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
          text: 'Fish emulsion supplies nitrogen as its main nutrient, in a partly soluble organic form that becomes available relatively quickly, along with modest phosphorus and potassium and a range of micronutrients. Its readily available nitrogen gives a prompt response but a shorter-lived effect than slow-release solids.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen is the dominant nutrient and is available relatively quickly',
            'Phosphorus, potassium, and micronutrients are supplied in smaller amounts',
            'Effect is prompt but shorter-lived than from slow-release organic solids',
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
          text: 'Fish emulsion is used in organic and horticultural systems as a quick feed, applied diluted as a foliar spray or through fertigation to seedlings, transplants, and container crops. Its fast, gentle action suits frequent light feeding rather than a single large application.',
        },
        {
          type: 'list',
          items: [
            'Accepted as an input in many organic farming standards',
            'Well suited to foliar feeding, fertigation, and container or transplant crops',
            'Best used as regular light feeds rather than one large dose',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and dilution are product- and crop-specific',
          text: 'The right dilution, rate, and frequency depend on the product, the crop, and local guidance, including organic certification standards. AgricultureID does not publish universal application rates; follow the product label and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Fish emulsion is a relatively low-analysis, more costly nutrient source per unit of nitrogen, so it is impractical for supplying large amounts of nitrogen to field crops. It has a strong odour, and concentrated or repeated foliar sprays can scorch sensitive foliage if not properly diluted.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Its low analysis and cost make fish emulsion better suited to horticulture and targeted feeding than to bulk field nutrition. Follow label dilution to avoid foliar scorch, and note the strong odour on application.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'seaweed-extract' },
    { type: 'fertilizer', slug: 'blood-meal' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient', 'micronutrient'],
  geographicScope:
    'Global overview of fish emulsion as a liquid organic fertilizer used mainly in organic and horticultural systems. Analysis and sourcing vary by product and region.',
  climateContext:
    'As a quick-release liquid, fish emulsion is often applied as frequent light feeds; released nitrogen is subject to leaching under heavy rainfall or irrigation.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Nutrient analysis is low and variable by product, making it impractical for bulk field nitrogen supply.',
    'Sourcing and processing of fish by-products vary by product and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Organic and liquid fertilizer sources' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Fish-based liquid fertilizer use in organic systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Organic nutrient sources and management',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Organic and horticultural nutrient context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Fish Emulsion Fertilizer',
    description:
      'Fish emulsion: a liquid organic fertilizer supplying mainly nitrogen plus trace elements, its fast action, foliar and fertigation use, and its limits.',
    keywords: [
      'fish emulsion fertilizer',
      'liquid fish fertilizer',
      'organic liquid fertilizer',
      'foliar fish fertilizer',
    ],
  },
  structuredData: { article: true },
};
