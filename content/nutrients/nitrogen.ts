import type { NutrientContent } from '@/types/content';

export const nitrogen: NutrientContent = {
  id: 'nutrient-nitrogen',
  slug: 'nitrogen',
  contentType: 'nutrient',
  title: 'Nitrogen',
  symbol: 'N',
  alternativeNames: ['N'],
  category: 'Plant nutrient',
  subcategory: 'Primary macronutrient',
  nutrientClass: 'primary-macronutrient',
  summary:
    'Nitrogen is a primary macronutrient central to plant growth, forming part of amino acids, proteins, and chlorophyll. It is the nutrient most often limiting yield and the one most widely managed through fertilization.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nitrogen (N) is an essential plant nutrient required in larger amounts than any other mineral element. It is a building block of amino acids and proteins, nucleic acids, and chlorophyll, and it strongly influences vegetative growth, leaf area, and — in many crops — yield and protein content.',
    },
    {
      type: 'paragraph',
      text: 'Although the atmosphere is about 78% nitrogen gas, plants cannot use nitrogen in that form directly. They take up nitrogen mainly as nitrate and ammonium from the soil solution, supplied by soil organic-matter mineralisation, biological nitrogen fixation, and fertilizers.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'N' },
    { label: 'Class', value: 'Primary macronutrient' },
    {
      label: 'Plant-available forms',
      value: 'Nitrate (NO₃⁻) and ammonium (NH₄⁺)',
    },
    { label: 'Main role', value: 'Proteins, nucleic acids, and chlorophyll' },
    {
      label: 'Deficiency sign',
      value: 'General yellowing (chlorosis), starting on older leaves',
    },
    {
      label: 'Mobility in plant',
      value: 'Mobile — deficiency appears first in older tissue',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen is a component of every protein and enzyme, of the chlorophyll that drives photosynthesis, and of nucleic acids. Adequate nitrogen supports leaf and canopy development, photosynthetic capacity, and the accumulation of protein in grains and forage.',
        },
        {
          type: 'paragraph',
          text: 'Because nitrogen is so closely tied to growth, its supply has a large effect on yield potential. However, more nitrogen is not always better: supply must be matched to crop demand and to the soil’s own contribution.',
        },
      ],
    },
    {
      id: 'nitrogen-in-the-soil',
      heading: 'Nitrogen in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Most soil nitrogen is held in organic matter and becomes plant-available only as microorganisms mineralise it to ammonium and then nitrate. Nitrate is highly soluble and can be lost by leaching below the root zone, while nitrogen can also be lost to the air through denitrification and ammonia volatilisation.',
        },
        {
          type: 'list',
          items: [
            'Biological fixation by legumes and free-living microbes adds nitrogen from the atmosphere',
            'Mineralisation of organic matter releases plant-available nitrogen',
            'Leaching, denitrification, and volatilisation are the main loss pathways',
          ],
        },
      ],
    },
    {
      id: 'deficiency',
      heading: 'Deficiency symptoms',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen is mobile within the plant, so deficiency symptoms appear first on older, lower leaves as the plant moves nitrogen to new growth. Typical signs are uniform pale-green to yellow leaves (chlorosis), reduced growth and tillering, and, if severe, early senescence and lower yield and protein.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Yellowing has several possible causes, including sulfur deficiency and waterlogging. Confirm nitrogen status with plant or soil testing before acting.',
        },
      ],
    },
    {
      id: 'excess-and-environment',
      heading: 'Excess and environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Excess nitrogen can produce lush, disease- and lodging-prone growth, delay maturity, and reduce quality in some crops. Nitrogen lost from fields is also an environmental concern: nitrate can reach groundwater and surface water, and nitrous oxide is a potent greenhouse gas.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right nitrogen rate, source, timing, and placement depend on the crop, soil, yield goal, and local regulations. AgricultureID does not publish universal nitrogen rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen interacts with other nutrients: sulfur is needed alongside nitrogen for protein synthesis, and an imbalance can limit the response to nitrogen. Adequate phosphorus and potassium are needed for the crop to convert nitrogen into yield. Managing nitrogen well therefore means managing overall nutrient balance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'sulfur' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'fertilizer', slug: 'calcium-ammonium-nitrate' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph', 'soil-texture'],
  geographicScope:
    'Global overview of nitrogen as a plant nutrient. Fertilizer rates, timing, and regulations are region-specific and are not given here.',
  climateContext:
    'Nitrogen losses and mineralisation rates depend strongly on temperature and moisture.',
  limitations: [
    'This entry describes nitrogen’s role and behaviour; it is not a nitrogen recommendation for any specific crop or region.',
    'Deficiency diagnosis should be confirmed with soil or plant testing, as symptoms overlap with other disorders.',
  ],
  claims: [
    {
      field: 'atmospheric-composition',
      statement: 'The atmosphere is about 78% nitrogen gas by volume.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO reference material on nitrogen in agriculture states the composition of air, which is about 78% nitrogen gas by volume.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of nitrogen in plant nutrition' },
    { sourceId: 'usda-nrcs', citedFor: 'Nitrogen in soils and losses' },
    { sourceId: 'ahdb', citedFor: 'Nitrogen management context' },
    { sourceId: 'ifa', citedFor: 'Nitrogen fertilizer products and use' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nitrogen',
    description:
      'Nitrogen as a plant nutrient: its role in proteins and chlorophyll, behaviour in soil, deficiency symptoms, excess and environmental effects, and interactions.',
    keywords: [
      'nitrogen',
      'plant nutrient',
      'macronutrient',
      'nitrogen deficiency',
    ],
  },
  structuredData: { article: true },
};
