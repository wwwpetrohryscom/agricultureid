import type { FertilizerContent } from '@/types/content';

export const featherMeal: FertilizerContent = {
  id: 'fertilizer-feather-meal',
  slug: 'feather-meal',
  contentType: 'fertilizer',
  title: 'Feather meal',
  alternativeNames: ['Hydrolysed feather meal'],
  category: 'Fertilizer',
  subcategory: 'Organic nitrogen fertilizer',
  fertilizerClass: 'organic',
  typicalAnalysis: '~12-0-0',
  summary:
    'Feather meal is a slow-release organic nitrogen fertilizer made from steam-hydrolysed poultry feathers; it is high in nitrogen bound in keratin, which soil microbes break down gradually, giving a longer, more even nitrogen supply than fast-releasing organic sources.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Feather meal is produced by processing poultry feathers under heat and pressure (hydrolysis) and grinding the result into a meal. It typically analyses around 12% nitrogen, most of it contained in keratin, the tough structural protein of feathers.',
    },
    {
      type: 'paragraph',
      text: 'Keratin is resistant to breakdown, so feather meal releases its nitrogen slowly as soil microbes decompose the protein. This gives a more gradual, sustained nitrogen supply than readily mineralised organic sources such as blood meal, at the cost of a slower initial response.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Slow-release organic nitrogen fertilizer',
    },
    { label: 'Typical analysis', value: 'About 12-0-0' },
    { label: 'Nutrients supplied', value: 'Nitrogen' },
    { label: 'Common form', value: 'Dry meal or granule' },
    {
      label: 'Key consideration',
      value: 'Keratin nitrogen releases slowly for a sustained supply',
    },
    {
      label: 'Release pattern',
      value: 'Gradual as microbes break down keratin',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Feather meal is hydrolysed poultry feathers, which are almost entirely keratin protein. Steam hydrolysis makes the keratin more digestible to soil microbes and reduces pathogen risk. The product supplies around 12% nitrogen with negligible phosphorus and potassium.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Source',
              description:
                'Steam-hydrolysed poultry feathers, ground to a meal',
            },
            {
              term: 'Nitrogen content',
              description: 'About 12% total nitrogen, held in keratin protein',
            },
            {
              term: 'Other nutrients',
              description: 'Negligible phosphorus and potassium',
            },
            {
              term: 'Release pattern',
              description: 'Slow and sustained as keratin is broken down',
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
          text: 'Feather meal supplies nitrogen, released as microbes decompose keratin to ammonium and then nitrate. Because keratin is slow to break down, the nitrogen is metered out over weeks to months, reducing the peak leaching risk seen with quick-release sources while providing a longer background supply.',
        },
        {
          type: 'list',
          items: [
            'Keratin nitrogen is mineralised slowly by soil microbes',
            'Provides a longer, steadier supply than fast-releasing organic sources',
            'Supplies essentially no phosphorus or potassium',
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
          text: 'Feather meal is used in organic systems where a slow, season-long nitrogen supply is wanted, such as for longer-season and perennial crops. It is typically incorporated ahead of or at planting so that microbial breakdown can begin before peak crop demand.',
        },
        {
          type: 'list',
          items: [
            'Accepted as an input in many organic farming standards',
            'Suited to crops needing sustained rather than immediate nitrogen',
            'Applied ahead of demand to allow time for microbial breakdown',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and timing are crop- and region-specific',
          text: 'The right rate and timing depend on the crop, soil nitrogen status, temperature, and local guidance, including organic certification standards. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'The slow release that makes feather meal useful for sustained feeding also makes it a poor choice when a crop needs nitrogen immediately, and its release depends strongly on soil temperature and moisture. Sourcing of poultry by-products is subject to biosecurity rules that vary by country.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nitrogen release from feather meal slows markedly in cold soils, so its timing relative to crop demand matters. Availability and sourcing of poultry by-products are subject to regulation that varies by country.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'blood-meal' },
    { type: 'fertilizer', slug: 'poultry-manure' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'maize' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of feather meal as a slow-release organic nitrogen fertilizer used mainly in organic production. Sourcing rules for poultry by-products vary by country.',
  climateContext:
    'Nitrogen release from feather meal depends on soil temperature and moisture and is much slower in cold soils, affecting how it should be timed.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Its slow release makes it unsuitable for correcting an immediate nitrogen deficiency.',
    'Sourcing regulations for poultry by-products vary by country and are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Feather meal typically analyses around 12% nitrogen, most of it held in slowly decomposing keratin protein.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance on organic nitrogen sources describes feather meal nitrogen content and slow release.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS guidance describes slow nitrogen mineralisation from keratin-based amendments.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Organic nitrogen fertilizer sources' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Feather meal composition and slow-release nitrogen',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrogen mineralisation from organic amendments',
    },
    { sourceId: 'ahdb', citedFor: 'Organic nutrient management context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Feather Meal Fertilizer',
    description:
      'Feather meal: a slow-release organic nitrogen fertilizer from hydrolysed poultry feathers, its keratin nitrogen release, organic use, and its limits.',
    keywords: [
      'feather meal fertilizer',
      'organic nitrogen fertilizer',
      'slow release nitrogen',
      'hydrolysed feather meal',
    ],
  },
  structuredData: { article: true },
};
