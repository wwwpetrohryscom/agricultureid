import type { FertilizerContent } from '@/types/content';

export const greensand: FertilizerContent = {
  id: 'fertilizer-greensand',
  slug: 'greensand',
  contentType: 'fertilizer',
  title: 'Greensand',
  alternativeNames: ['Glauconite', 'Glauconitic sandstone'],
  category: 'Fertilizer',
  subcategory: 'Slow-release potassium and soil conditioner',
  fertilizerClass: 'mineral-potassium',
  summary:
    'Greensand is a naturally mined glauconite mineral used chiefly in organic and horticultural systems as a slow-release, low-analysis source of potassium and iron and as a soil conditioner, though its nutrient release is slow and modest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Greensand is a marine sedimentary mineral rich in glauconite, an iron-potassium silicate that gives the material its characteristic greenish colour. It has a long history of use as a soil conditioner and a slow-release source of potassium and iron.',
    },
    {
      type: 'paragraph',
      text: 'Its potassium content is low and variable, and because the potassium is locked in a silicate structure, it becomes available only very gradually as the mineral weathers. Greensand is therefore valued more for its slow, gentle contribution and its physical conditioning of soil than as a primary potassium fertilizer.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Slow-release mineral potassium source and soil conditioner',
    },
    {
      label: 'Composition',
      value: 'Glauconite, an iron-potassium silicate',
    },
    {
      label: 'Nutrients supplied',
      value: 'Small amounts of potassium and iron, plus trace elements',
    },
    { label: 'Common form', value: 'Fine mineral sand or granule' },
    {
      label: 'Key consideration',
      value: 'Low, variable analysis; potassium released very slowly',
    },
    { label: 'Solubility', value: 'Very low; releases by slow weathering' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Greensand is mined from deposits of glauconitic sandstone laid down in ancient marine environments. Its glauconite content carries potassium, iron, and small quantities of other elements bound within a silicate mineral, so the guaranteed potassium analysis is low and varies considerably between sources.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Principal mineral',
              description: 'Glauconite, an iron-potassium silicate',
            },
            {
              term: 'Potassium content',
              description:
                'Low and variable, bound within the silicate structure',
            },
            {
              term: 'Other elements',
              description: 'Iron and small amounts of trace elements',
            },
            {
              term: 'Release pattern',
              description: 'Very slow, dependent on gradual mineral weathering',
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
          text: 'Greensand supplies potassium and iron, but only as the silicate mineral slowly weathers, so the immediate nutrient contribution is small. Its fine, porous structure can also help hold moisture and improve the workability of some soils, which contributes to its reputation as a conditioner.',
        },
        {
          type: 'list',
          items: [
            'Potassium and iron are released slowly as the mineral weathers',
            'Immediate nutrient availability is low compared with soluble fertilizers',
            'Physical properties can help soil moisture retention and structure',
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
          text: 'Greensand is used mainly in organic and horticultural systems, applied to soil as a long-term, slow-release amendment rather than to meet an immediate potassium need. Because release is slow, it is incorporated and allowed to contribute over multiple seasons.',
        },
        {
          type: 'list',
          items: [
            'Used as a long-term amendment and conditioner in organic and garden systems',
            'Contributes potassium and iron gradually rather than quickly',
            'Where a prompt potassium response is needed, a soluble source is more effective',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Not a substitute for a soluble potassium source',
          text: 'Because its potassium is released very slowly, greensand should not be relied on to correct an acute potassium deficiency. Confirm potassium status by soil testing and follow regional agronomic guidance for rates and sources.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Independent evidence for a rapid crop response to greensand is limited, and its low, variable analysis means large quantities would be needed to supply meaningful potassium. It is best regarded as a slow soil-building and conditioning input rather than a nutrient fertilizer with a predictable, near-term effect.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Claims of rapid nutrient benefit from greensand are not well supported; its main documented roles are slow potassium and iron supply and soil conditioning. Treat any specific analysis on a product label as source-dependent.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'rock-phosphate' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'soil-topic', slug: 'soil-amendments' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Used mainly in organic and horticultural settings near glauconite deposits. Composition and any nutrient benefit vary strongly by source.',
  climateContext:
    'Weathering of glauconite, and therefore any nutrient release, is faster in warm, moist, biologically active soils than in cold or dry ones.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation.',
    'Potassium analysis is low and variable, and release is too slow to correct acute deficiency.',
    'Evidence for a rapid crop response to greensand is limited; it is chiefly a slow-release conditioner.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Slow-release mineral amendments and soil conditioning',
    },
    { sourceId: 'cornell-cals', citedFor: 'Greensand use in organic systems' },
    { sourceId: 'fao', citedFor: 'Mineral potassium sources in agriculture' },
    { sourceId: 'rhs', citedFor: 'Greensand use in horticulture' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Greensand (Glauconite) Fertilizer',
    description:
      'Greensand (glauconite): a slow-release, low-analysis mineral source of potassium and iron used as a soil conditioner, with an honest look at its limits.',
    keywords: [
      'greensand fertilizer',
      'glauconite',
      'slow release potassium',
      'organic soil conditioner',
    ],
  },
  structuredData: { article: true },
};
