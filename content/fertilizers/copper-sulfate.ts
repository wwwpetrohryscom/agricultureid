import type { FertilizerContent } from '@/types/content';

export const copperSulfate: FertilizerContent = {
  id: 'fertilizer-copper-sulfate',
  slug: 'copper-sulfate',
  contentType: 'fertilizer',
  title: 'Copper sulfate',
  alternativeNames: ['Copper sulphate', 'Bluestone', 'CuSO₄·5H₂O'],
  category: 'Fertilizer',
  subcategory: 'Micronutrient fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~25% Cu (pentahydrate)',
  summary:
    'Copper sulfate is a soluble copper salt used to correct copper deficiency, most often on peat and organic soils, and is also a component of copper-based fungicides; because copper is needed only in tiny amounts and can accumulate to toxic levels, it must be used with care.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Copper sulfate is a soluble copper salt, most familiar as the blue pentahydrate crystals (bluestone) containing around 25% copper. As a fertilizer it corrects copper deficiency, a micronutrient shortage most common on peat, muck, and sandy soils.',
    },
    {
      type: 'paragraph',
      text: 'The same compound is a long-standing basis for copper fungicides, such as Bordeaux mixture, so copper sulfate has a dual identity as both a nutrient source and a crop-protection ingredient. Because plants need only very small amounts of copper and it accumulates in soil, careful use is essential.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Soluble copper micronutrient fertilizer',
    },
    { label: 'Typical analysis', value: 'About 25% copper (pentahydrate)' },
    { label: 'Nutrients supplied', value: 'Copper and sulfur' },
    { label: 'Common form', value: 'Blue water-soluble crystals or powder' },
    {
      label: 'Key consideration',
      value:
        'Copper is needed in tiny amounts and can accumulate to toxic levels',
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
          text: 'Copper sulfate is most commonly supplied as the pentahydrate, blue crystals containing around 25% copper, though a less-hydrated monohydrate with higher copper content is also used. It is fully water-soluble and supplies copper together with sulfate-sulfur.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chemical formula',
              description: 'CuSO₄·5H₂O (pentahydrate)',
            },
            {
              term: 'Copper content',
              description:
                'About 25% in the pentahydrate; higher in the monohydrate',
            },
            {
              term: 'Sulfur content',
              description: 'Supplied alongside copper as sulfate',
            },
            {
              term: 'Dual use',
              description:
                'Also a basis for copper fungicides such as Bordeaux mixture',
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
          text: 'Copper sulfate supplies copper, a micronutrient needed for enzyme systems, photosynthesis, and reproductive development, along with sulfate-sulfur. Copper is strongly held by soil organic matter, which is why deficiency is most common on peat and muck soils, and it moves little once bound.',
        },
        {
          type: 'list',
          items: [
            'Copper is available on dissolving but is strongly bound by soil organic matter',
            'Deficiency is most common on peat, muck, and sandy soils',
            'Sulfate-sulfur is supplied alongside the copper',
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
          text: 'Copper sulfate is used to correct copper deficiency in crops such as cereals grown on organic soils, applied to soil or as a foliar spray. Because copper binds tightly and persists, a soil application can last for several seasons, and foliar sprays are used where a quick, controlled dose is preferred.',
        },
        {
          type: 'list',
          items: [
            'Corrects copper deficiency, notably in cereals on peat and muck soils',
            'Soil applications can remain effective over several seasons',
            'Foliar sprays give a quick, controlled dose when needed',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Diagnose before treating; rates are region-specific',
          text: 'Copper deficiency should be confirmed by soil or tissue testing, and the right rate and method depend on the crop, soil, and local guidance. AgricultureID does not publish universal fertilizer rates; follow testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Copper is required only in very small amounts, and because it accumulates in soil and does not readily leach, repeated applications, including from copper fungicides, can build up to levels toxic to plants and soil organisms. Copper sulfate is also toxic to aquatic life, so runoff to water should be avoided.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Copper accumulates in soil and can reach levels toxic to plants and soil life, so total copper inputs, including from fungicides, should be tracked. Copper sulfate is toxic to fish and aquatic organisms; prevent runoff to watercourses and follow local regulation and the product label.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'fertilizer', slug: 'zinc-sulfate' },
    { type: 'fertilizer', slug: 'manganese-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'copper' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oats' },
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['micronutrient'],
  geographicScope:
    'Global overview of copper sulfate as a copper fertilizer and fungicide base. Copper deficiency is most common on organic (peat and muck) and sandy soils.',
  climateContext:
    'Copper deficiency is governed mainly by soil type, especially organic soils, rather than climate; runoff risk to water rises under heavy rainfall after application.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Copper requirements are tiny and copper accumulates in soil, so cumulative inputs must be managed to avoid toxicity.',
    'Copper sulfate is toxic to aquatic life; environmental and regulatory constraints vary by region and are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Copper sulfate pentahydrate contains about 25% copper and is fully water-soluble, supplying sulfate-sulfur alongside the copper.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents copper sulfate among copper fertilizer sources and its copper content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS micronutrient guidance describes copper sulfate composition and use.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Copper fertilizer sources and composition' },
    { sourceId: 'fao', citedFor: 'Micronutrient deficiency and correction' },
    {
      sourceId: 'us-epa',
      citedFor: 'Copper sulfate aquatic toxicity and environmental handling',
    },
    { sourceId: 'ahdb', citedFor: 'Copper deficiency management context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Copper Sulfate Fertilizer',
    description:
      'Copper sulfate: a soluble copper fertilizer for deficiency on peat and organic soils, its dual role in fungicides, and the risk of soil and aquatic toxicity.',
    keywords: [
      'copper sulfate fertilizer',
      'copper deficiency correction',
      'micronutrient fertilizer',
      'copper sulphate bluestone',
    ],
  },
  structuredData: { article: true },
};
