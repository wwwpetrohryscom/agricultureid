import type { NutrientContent } from '@/types/content';

export const magnesium: NutrientContent = {
  id: 'nutrient-magnesium',
  slug: 'magnesium',
  contentType: 'nutrient',
  title: 'Magnesium',
  symbol: 'Mg',
  alternativeNames: ['Mg'],
  category: 'Plant nutrient',
  subcategory: 'Secondary macronutrient',
  nutrientClass: 'secondary-macronutrient',
  summary:
    'Magnesium is a secondary macronutrient at the centre of every chlorophyll molecule and a cofactor for many plant enzymes. Deficiency commonly appears as interveinal yellowing of older leaves, especially on light, acidic, or potassium-rich soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Magnesium (Mg) is a secondary macronutrient best known as the central atom of the chlorophyll molecule, making it essential for photosynthesis. It also activates numerous enzymes involved in energy transfer, protein synthesis, and carbohydrate metabolism.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up magnesium as the Mg²⁺ ion from the soil solution. Magnesium is held on the cation exchange capacity of soils alongside calcium and potassium, and its availability is strongly influenced by competition from these other cations as well as by soil pH.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Mg' },
    { label: 'Class', value: 'Secondary macronutrient' },
    { label: 'Plant-available form', value: 'Magnesium ion (Mg²⁺)' },
    {
      label: 'Main role',
      value: 'Central atom of chlorophyll; enzyme cofactor',
    },
    {
      label: 'Deficiency sign',
      value: 'Interveinal chlorosis on older leaves',
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
          text: 'Every chlorophyll molecule has magnesium at its centre, so magnesium is directly required for photosynthesis. Magnesium also activates many enzymes involved in energy transfer (including those that use ATP), protein synthesis, and the loading of sugars into the phloem for transport to fruit, grain, and storage organs.',
        },
        {
          type: 'paragraph',
          text: 'Because it underpins both photosynthesis and sugar transport, adequate magnesium supports both leaf greenness and the movement of carbohydrates to developing yield components.',
        },
      ],
    },
    {
      id: 'magnesium-in-the-soil',
      heading: 'Magnesium in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Magnesium shares the cation exchange capacity of soils with calcium and potassium, and the balance among these three cations affects how much magnesium is available for uptake. Light, sandy, and acidic soils generally hold less magnesium and are more prone to leaching losses and deficiency.',
        },
        {
          type: 'list',
          items: [
            'Low cation exchange capacity (sandy or low-organic-matter soils) limits the magnesium reserve',
            'High potassium or calcium saturation can suppress magnesium uptake through cation competition',
            'Soil acidity reduces magnesium availability and is often addressed together with liming',
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
          text: 'Magnesium is mobile within the plant, so it is withdrawn from older leaves to support new growth when supply is short. The classic symptom is interveinal chlorosis on older leaves — the veins stay green while the tissue between them yellows, sometimes described as a marbled or mottled pattern — which can progress to necrosis in severe cases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Interveinal chlorosis is also a symptom of manganese and iron deficiency, and can be worsened by high potassium fertilization. Confirm magnesium status with soil or tissue testing before acting.',
        },
      ],
    },
    {
      id: 'excess-and-cation-balance',
      heading: 'Excess and cation balance',
      body: [
        {
          type: 'paragraph',
          text: 'Magnesium is rarely directly toxic to plants at levels found in agricultural soils. The more common practical issue is the reverse relationship: heavy potassium fertilization, or naturally high soil potassium or calcium, can suppress magnesium uptake and induce deficiency through cation competition.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right magnesium rate and source depend on soil test magnesium levels, soil cation balance, and crop. AgricultureID does not publish universal magnesium rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Magnesium, potassium, and calcium compete for uptake at the root and for exchange sites in the soil, so their balance matters as much as the absolute amount of any one nutrient. Magnesium is also functionally linked to nitrogen, since both are required for chlorophyll and photosynthetic capacity.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-ph' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of magnesium as a plant nutrient. Soil testing and fertilizer recommendations are region-specific and are not given here.',
  climateContext:
    'Magnesium uptake can be reduced in cool, wet soils and where potassium uptake is high, since the two ions compete for the same uptake pathways.',
  limitations: [
    'This entry describes magnesium’s role and behaviour; it is not a magnesium recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with soil or plant testing, since interveinal chlorosis has several possible nutrient causes.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of magnesium in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Magnesium in soils and cation exchange',
    },
    { sourceId: 'ahdb', citedFor: 'Magnesium management context' },
    { sourceId: 'ifa', citedFor: 'Magnesium-supplying fertilizer products' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Magnesium',
    description:
      'Magnesium as a plant nutrient: its role in chlorophyll and enzymes, soil availability, deficiency symptoms, excess effects, and interactions.',
    keywords: [
      'magnesium',
      'plant nutrient',
      'macronutrient',
      'magnesium deficiency',
    ],
  },
  structuredData: { article: true },
};
