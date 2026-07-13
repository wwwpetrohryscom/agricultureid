import type { FertilizerContent } from '@/types/content';

export const polymerCoatedUrea: FertilizerContent = {
  id: 'fertilizer-polymer-coated-urea',
  slug: 'polymer-coated-urea',
  contentType: 'fertilizer',
  title: 'Polymer-coated urea',
  alternativeNames: [
    'Controlled-release urea',
    'Polymer-coated controlled-release nitrogen',
  ],
  category: 'Fertilizer',
  subcategory: 'Controlled-release nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '~44-0-0',
  summary:
    'Polymer-coated urea is a controlled-release nitrogen fertilizer in which each urea granule is enclosed in a polymer membrane that meters nitrogen out gradually, reducing losses and often allowing a single application to feed a crop over much of its season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Polymer-coated urea is a controlled-release form of urea in which each granule is encapsulated in a thin polymer membrane. It analyses close to urea, at around 44% nitrogen, but its coating governs how quickly that nitrogen becomes available.',
    },
    {
      type: 'paragraph',
      text: 'Water diffuses through the polymer, dissolves the urea inside, and the dissolved nitrogen then diffuses back out at a controlled rate driven largely by soil temperature. This gradual release aims to match nitrogen supply to crop demand, lowering the leaching, volatilisation, and denitrification losses associated with a single dose of soluble urea.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Controlled-release nitrogen fertilizer',
    },
    { label: 'Typical analysis', value: 'About 44-0-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Nitrogen' },
    { label: 'Common form', value: 'Polymer-coated urea granules' },
    {
      label: 'Key consideration',
      value: 'Release is metered over time, largely by soil temperature',
    },
    {
      label: 'Release pattern',
      value: 'Gradual diffusion through the polymer coating',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Polymer-coated urea consists of standard urea granules enclosed in a polymer film. The coating slightly lowers the overall nitrogen analysis compared with uncoated urea, to around 44%, and its thickness and formulation determine the release duration, which is engineered for a target number of weeks or months.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Core material',
              description: 'Standard urea granules',
            },
            {
              term: 'Coating',
              description:
                'A polymer membrane controlling water entry and nitrogen release',
            },
            {
              term: 'Nitrogen content',
              description: 'Around 44%, slightly below uncoated urea',
            },
            {
              term: 'Release control',
              description:
                'Diffusion through the coating, driven mainly by soil temperature',
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
          text: 'Polymer-coated urea supplies nitrogen only, but releases it gradually. Once the urea diffuses out, it behaves like ordinary urea nitrogen, hydrolysing to ammonium and then nitrifying to nitrate. Because the release is spread over time and temperature-driven, less nitrogen is present at once, reducing the peak exposure to loss pathways.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen is released gradually rather than all at once',
            'Release rate rises with soil temperature, broadly tracking crop growth',
            'Once released, nitrogen behaves like conventional urea nitrogen',
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
          text: 'Polymer-coated urea is used where a single application can replace several splits, such as in cereals, maize, turf, and high-value horticulture, and where reducing nitrogen loss is a priority. It can be applied at or before planting to supply nitrogen through much of the season with fewer field passes.',
        },
        {
          type: 'list',
          items: [
            'Can reduce the number of in-season nitrogen applications',
            'Aims to lower leaching, volatilisation, and denitrification losses',
            'Used in cereals, maize, turf, and high-value horticultural crops',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and product choice are region-specific',
          text: 'The right nitrogen rate, product release duration, and placement depend on the crop, soil, expected temperatures, and local guidance. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance, and read the product label.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Because release depends on temperature, the timing of nitrogen availability may not perfectly match crop demand in every season, and an unusually cool or warm period can shift release earlier or later than intended. Coated products also typically cost more per unit of nitrogen, and the polymer residues left in soil are a growing consideration.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Temperature-driven release means the match to crop demand is not guaranteed in every season. Controlled-release products cost more per unit of nitrogen, and the fate of polymer coating residues in soil is an area of ongoing attention.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'urea-ammonium-nitrate' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'soil-topic', slug: 'soil-temperature' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of polymer-coated urea as a controlled-release nitrogen fertilizer. Release behaviour depends on soil temperature and therefore on climate and season.',
  climateContext:
    'Nitrogen release from the polymer coating is driven mainly by soil temperature, so warm soils speed release and cold soils slow it, affecting the match to crop demand.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen rate recommendation for any crop or region.',
    'Temperature-driven release may not match crop demand in every season and is not quantified here.',
    'Controlled-release products cost more per unit of nitrogen, and the soil fate of polymer residues is not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Polymer-coated urea analyses close to uncoated urea, at around 44% nitrogen, with a polymer membrane controlling the rate of nitrogen release.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents controlled-release and coated urea products and their characteristics.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS nutrient management guidance describes controlled-release nitrogen behaviour and loss reduction.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'ifa',
      citedFor: 'Controlled-release and coated urea characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Controlled-release nitrogen and loss reduction',
    },
    {
      sourceId: 'fao',
      citedFor: 'Enhanced-efficiency nitrogen fertilizer context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Nitrogen management and efficiency context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Polymer-Coated Urea (Controlled Release)',
    description:
      'Polymer-coated urea: a controlled-release nitrogen fertilizer whose polymer membrane meters nitrogen out by temperature, cutting losses, and its limits.',
    keywords: [
      'polymer-coated urea',
      'controlled release urea',
      'controlled release nitrogen',
      'enhanced efficiency fertilizer',
    ],
  },
  structuredData: { article: true },
};
