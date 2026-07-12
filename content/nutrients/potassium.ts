import type { NutrientContent } from '@/types/content';

export const potassium: NutrientContent = {
  id: 'nutrient-potassium',
  slug: 'potassium',
  contentType: 'nutrient',
  title: 'Potassium',
  symbol: 'K',
  alternativeNames: ['K'],
  category: 'Plant nutrient',
  subcategory: 'Primary macronutrient',
  nutrientClass: 'primary-macronutrient',
  summary:
    'Potassium is a primary macronutrient that regulates water relations, enzyme activation, and the movement of sugars within the plant. It is required in amounts similar to nitrogen but, unlike nitrogen, is not part of any organic plant compound.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potassium (K) is one of the three primary macronutrients. Unlike nitrogen and phosphorus, it is not incorporated into organic molecules; instead it functions as a free ion that regulates osmotic pressure, activates a wide range of enzymes, and controls the opening and closing of stomata.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up potassium as the K⁺ ion from the soil solution. Soil potassium is held in several pools — in the soil solution, adsorbed on the exchange sites of clay and organic matter (the cation exchange capacity), and fixed within certain clay minerals — which together buffer the amount available to roots at any time.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'K' },
    { label: 'Class', value: 'Primary macronutrient' },
    { label: 'Plant-available form', value: 'Potassium ion (K⁺)' },
    { label: 'Main role', value: 'Osmotic regulation and enzyme activation' },
    {
      label: 'Deficiency sign',
      value: 'Marginal scorch (necrosis) on older leaves',
    },
    {
      label: 'Mobility in plant',
      value: 'Mobile — deficiency appears first in older leaves',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium regulates the osmotic pressure that drives water uptake and controls the opening and closing of stomata, giving it a central role in water-use efficiency and drought response. It activates more than fifty enzymes involved in photosynthesis, respiration, and protein synthesis.',
        },
        {
          type: 'paragraph',
          text: 'Potassium also assists the loading and movement of sugars from leaves to developing grain, fruit, and storage roots, and is associated with sturdier stems and improved tolerance to some stresses, including cold and certain diseases.',
        },
      ],
    },
    {
      id: 'potassium-in-the-soil',
      heading: 'Potassium in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Soil potassium exists in several interconnected forms, and the balance between them determines how much is available to roots at a given time. Clay-rich soils generally hold and buffer more potassium than sandy soils, where potassium can be lost by leaching.',
        },
        {
          type: 'list',
          items: [
            'Solution potassium — immediately available, but present in small amounts',
            'Exchangeable potassium — held on cation exchange sites, the main reserve for uptake',
            'Fixed potassium — trapped within certain clay mineral layers, released only slowly',
            'Mineral potassium — held within soil minerals, released over the long term as they weather',
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
          text: 'Potassium is mobile within the plant, so deficiency symptoms appear first on older leaves, typically as scorching or necrosis along the leaf margin and tip while the leaf interior remains green. Affected plants often show weaker stems, greater lodging risk, and reduced fruit or grain quality.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Marginal leaf scorch has several possible causes, including drought stress and other nutrient imbalances. Confirm potassium status with soil or plant testing before acting.',
        },
      ],
    },
    {
      id: 'excess-and-cation-balance',
      heading: 'Excess and cation balance',
      body: [
        {
          type: 'paragraph',
          text: 'Plants can absorb potassium beyond their immediate needs, a phenomenon known as luxury consumption, without direct toxicity. However, because potassium, calcium, and magnesium compete for the same root uptake sites and soil exchange sites, an excess of one cation can induce or worsen a deficiency of another — most notably, heavy potassium fertilization is a recognised trigger for induced magnesium deficiency.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right potassium rate, source, and timing depend on soil test potassium levels, soil cation balance, and crop. AgricultureID does not publish universal potassium rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium interacts closely with calcium and magnesium through competition for uptake and for exchange sites on soil colloids, so soil test interpretation often considers the balance among these three cations rather than potassium alone.',
        },
        {
          type: 'table',
          caption: 'Cation competition on soil exchange sites',
          columns: ['Cation', 'Common effect of a large excess'],
          rows: [
            [
              'Potassium (K⁺)',
              'Can suppress magnesium and, to a lesser extent, calcium uptake',
            ],
            ['Calcium (Ca²⁺)', 'Can suppress magnesium and potassium uptake'],
            ['Magnesium (Mg²⁺)', 'Can suppress potassium and calcium uptake'],
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'fertilizer', slug: 'sulfate-of-potash' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'banana' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'livestock', slug: 'cattle' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of potassium as a plant nutrient. Soil testing, fertilizer recommendations, and cation-balance guidance are region-specific and are not given here.',
  climateContext:
    'Potassium uptake and availability are influenced by soil moisture; drought can restrict the diffusion of potassium to roots even where soil potassium reserves are adequate.',
  limitations: [
    'This entry describes potassium’s role and behaviour; it is not a potassium recommendation for any specific crop, soil, or region.',
    'Deficiency and cation-balance issues should be confirmed with soil and plant testing, since potassium interacts strongly with calcium and magnesium availability.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of potassium in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Potassium pools and behaviour in soils',
    },
    { sourceId: 'ahdb', citedFor: 'Potassium management context' },
    { sourceId: 'ifa', citedFor: 'Potassium fertilizer products and use' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Potassium',
    description:
      'Potassium as a plant nutrient: its role in water regulation, soil availability, deficiency symptoms, excess effects, and interactions.',
    keywords: [
      'potassium',
      'plant nutrient',
      'macronutrient',
      'potassium deficiency',
    ],
  },
  structuredData: { article: true },
};
