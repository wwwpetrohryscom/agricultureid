import type { SoilTopicContent } from '@/types/content';

export const nitrogenCycle: SoilTopicContent = {
  id: 'soil-topic-nitrogen-cycle',
  slug: 'nitrogen-cycle',
  contentType: 'soil-topic',
  title: 'Nitrogen Cycle',
  topicClass: 'chemical',
  alternativeNames: ['Soil nitrogen cycle', 'Nitrogen transformations'],
  category: 'Soil chemical process',
  subcategory: 'Nutrient cycling',
  summary:
    'The nitrogen cycle is the set of biological and chemical transformations that move nitrogen between the atmosphere, soil organic matter, and mineral forms plants take up. Understanding it is central to supplying nitrogen efficiently while limiting losses to water and air.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The nitrogen cycle describes how nitrogen moves and changes form as it passes between the atmosphere, soil organic matter, soil microorganisms, and plants. Although the atmosphere is overwhelmingly nitrogen gas, plants cannot use this form directly and depend instead on mineral forms, chiefly ammonium and nitrate, produced by biological fixation and by the breakdown of organic matter.',
    },
    {
      type: 'paragraph',
      text: 'Because nitrogen is often the nutrient most limiting to crop growth, and because its mineral forms are mobile and prone to loss, the balance of these transformations has large consequences for both productivity and the environment. Managing nitrogen well means working with the cycle to keep nitrogen in plant-available forms at the right time while minimising losses to leaching and to the atmosphere.',
    },
  ],
  keyFacts: [
    {
      label: 'Core forms',
      value:
        'Atmospheric nitrogen gas, organic nitrogen, ammonium, and nitrate',
    },
    {
      label: 'Nitrogen fixation',
      value:
        'Conversion of nitrogen gas to plant-usable forms by microbes, including legume symbionts',
    },
    {
      label: 'Mineralization',
      value: 'Microbial release of ammonium as organic matter decomposes',
    },
    {
      label: 'Nitrification',
      value: 'Microbial oxidation of ammonium to nitrate',
    },
    {
      label: 'Main loss pathways',
      value:
        'Nitrate leaching, denitrification to gases, and ammonia volatilization',
    },
    {
      label: 'Why it matters',
      value:
        'Governs nitrogen availability to crops and losses to water and air',
    },
  ],
  sections: [
    {
      id: 'key-transformations',
      heading: 'The key transformations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen passes through a series of microbially driven transformations. Fixation brings atmospheric nitrogen into the soil-plant system; mineralization and immobilization exchange nitrogen between organic and mineral forms; nitrification converts ammonium to nitrate; and denitrification returns nitrogen to the atmosphere as gases. Each step is carried out largely by soil organisms and is sensitive to moisture, temperature, aeration, and pH.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Nitrogen fixation',
              description:
                'Conversion of atmospheric nitrogen gas into usable forms by specialised microbes, including bacteria in symbiosis with legumes.',
            },
            {
              term: 'Mineralization and immobilization',
              description:
                'Release of ammonium as organic matter decomposes, and the reverse uptake of mineral nitrogen into microbial biomass.',
            },
            {
              term: 'Nitrification',
              description:
                'Microbial oxidation of ammonium to nitrate, which is mobile and readily leached.',
            },
            {
              term: 'Denitrification',
              description:
                'Conversion of nitrate to nitrogen gases under low-oxygen conditions, a loss from the soil.',
            },
          ],
        },
      ],
    },
    {
      id: 'gains-and-losses',
      heading: 'Gains and losses of soil nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'Soil nitrogen is gained through biological fixation, additions of fertilizer and manure, and deposition from the atmosphere. It is lost when nitrate leaches below the root zone, when denitrification releases nitrogen gases from wet or waterlogged soils, and when ammonia volatilizes from surface-applied fertilizers and manures, especially under warm, alkaline conditions. Because nitrate is highly mobile, timing and placement of nitrogen inputs strongly affect how much is captured by the crop.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Nitrate is negatively charged and poorly held by most soils, so it moves readily with drainage water; excess or poorly timed nitrogen is a major cause of nitrate loss to groundwater and surface water.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why the cycle matters',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen is frequently the nutrient that limits crop yield, so the rate at which the cycle supplies plant-available nitrogen is central to productivity. At the same time, the mobility of nitrate and the gaseous losses from denitrification and volatilization make nitrogen a major environmental concern. Efficient nitrogen management depends on synchronising supply from the cycle with crop demand.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Working with the nitrogen cycle',
      body: [
        {
          type: 'list',
          items: [
            'Match nitrogen supply to crop demand in rate and timing so mineral nitrogen is taken up rather than lost',
            'Use legumes and organic matter to build the soil nitrogen supply through biological fixation and mineralization',
            'Protect against nitrate leaching with cover crops and by avoiding excess applications ahead of drainage periods',
            'Manage placement and incorporation of fertilizers and manures to limit ammonia volatilization',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-microorganisms' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['macronutrient', 'cover-crop', 'crop-rotation'],
  geographicScope:
    'Global. The nitrogen cycle operates in all soils, but rates of transformation and the balance of gains and losses depend on local climate, soil conditions, and management.',
  limitations: [
    'Rates of nitrogen transformation vary widely with moisture, temperature, aeration, and pH, so general statements cannot predict a specific soil.',
    'The balance between supply and loss is difficult to measure directly in the field and is usually estimated indirectly.',
    'This entry describes general principles; nitrogen management should be guided by local soil testing and crop requirements.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil nitrogen cycle, transformations, and management',
    },
    { sourceId: 'fao-soils', citedFor: 'Nitrogen cycling and soil fertility' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Nitrogen transformations and losses',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General overview of the nitrogen cycle',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Nitrogen Cycle',
    description:
      'The soil nitrogen cycle explained: fixation, mineralization, nitrification, and denitrification, plus the losses that shape nitrogen management.',
    keywords: [
      'nitrogen cycle',
      'soil nitrogen',
      'nitrification denitrification',
      'nitrogen fixation',
    ],
  },
  structuredData: { article: true },
};
