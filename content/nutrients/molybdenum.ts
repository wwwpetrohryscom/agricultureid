import type { NutrientContent } from '@/types/content';

export const molybdenum: NutrientContent = {
  id: 'nutrient-molybdenum',
  slug: 'molybdenum',
  contentType: 'nutrient',
  title: 'Molybdenum',
  symbol: 'Mo',
  alternativeNames: ['Mo'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Molybdenum is a micronutrient required in the smallest amounts of any essential element, but it is essential for nitrogen fixation and nitrate metabolism. Unlike most micronutrients, its availability increases with soil pH, so deficiency is concentrated on acidic soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Molybdenum (Mo) is required by plants in smaller quantities than any other essential element, yet it is indispensable: it is a cofactor for nitrate reductase, the enzyme that converts nitrate into forms the plant can use, and for nitrogenase, the enzyme that legume–rhizobia symbioses use to fix atmospheric nitrogen.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up molybdenum as the molybdate ion (MoO4²⁻). Unusually among micronutrients, molybdenum availability increases as soil pH rises, so — in contrast to iron, manganese, zinc, and boron — molybdenum deficiency is most common on acidic soils rather than alkaline ones.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Mo' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Molybdate (MoO4²⁻)' },
    {
      label: 'Main role',
      value: 'Nitrogen fixation and nitrate reductase enzyme',
    },
    {
      label: 'Deficiency sign',
      value: 'Interveinal mottling; "whiptail" in brassica crops',
    },
    {
      label: 'Mobility in plant',
      value: 'Variable — symptoms and expression differ by species',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Molybdenum is a cofactor for nitrate reductase, the enzyme plants use to convert absorbed nitrate into forms usable for amino acid synthesis, and for nitrogenase, the enzyme that rhizobia bacteria use to fix atmospheric nitrogen in symbiosis with legume roots. Because of this, molybdenum status affects both direct nitrate use and, in legumes, biological nitrogen fixation.',
        },
      ],
    },
    {
      id: 'molybdenum-in-the-soil',
      heading: 'Molybdenum in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Unlike most micronutrients, molybdenum becomes more available as soil pH rises. Deficiency is therefore concentrated on acidic, often high-rainfall or heavily leached soils, and has historically been corrected by liming to raise pH as much as by direct molybdenum application.',
        },
        {
          type: 'list',
          items: [
            'Acidic soils are the main setting for molybdenum deficiency',
            'Liming to raise soil pH increases molybdenum availability',
            'High-rainfall, leached soils are more prone to deficiency than drier, less-leached soils',
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
          text: 'In legumes, molybdenum deficiency impairs nitrogen fixation, producing poor nodulation and nitrogen-deficiency-like symptoms even when soil nitrogen is adequate. In brassica crops, a classic symptom is "whiptail" — narrow, distorted, and often chlorotic leaves.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because molybdenum deficiency in legumes resembles nitrogen deficiency, and whiptail can resemble other stresses in brassicas, soil pH testing and plant tissue analysis are the most reliable way to confirm the cause.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Molybdenum is rarely directly toxic to plants at levels found in agricultural soils. However, excess molybdenum accumulated in forage can cause molybdenosis in grazing ruminants such as cattle and sheep, a disorder that induces secondary copper deficiency in the animal — a notable example of a plant-nutrient issue with direct implications for livestock health.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Management is soil- and region-specific',
          text: 'Whether liming or molybdenum application is appropriate depends on soil pH, crop, and, for forage, livestock health considerations. AgricultureID does not publish universal molybdenum or liming rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Molybdenum and sulfur show a documented antagonism, with high sulfate availability reducing molybdenum uptake. Molybdenum is also functionally tied to nitrogen: in legumes it is essential for the nitrogen-fixation process itself, and in other crops it is required for the enzyme that processes absorbed nitrate.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'livestock', slug: 'cattle' },
  ],
  glossaryTerms: ['micronutrient', 'ruminant'],
  geographicScope:
    'Global overview of molybdenum as a plant nutrient. Liming and application guidance are soil- and region-specific and are not given here.',
  climateContext:
    'Molybdenum availability increases with soil pH, so deficiency is most common on acidic soils, particularly in high-rainfall regions where liming has not been practised.',
  limitations: [
    'This entry describes molybdenum’s role and behaviour; it is not a molybdenum or liming recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with soil pH testing and plant tissue analysis, since symptoms in legumes resemble nitrogen deficiency.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of molybdenum in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Molybdenum availability and soil pH relationships',
    },
    { sourceId: 'ahdb', citedFor: 'Molybdenum management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Molybdenum deficiency diagnosis in legumes',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Molybdenum',
    description:
      'Molybdenum as a plant micronutrient: its role in nitrogen fixation and enzymes, soil pH effects, deficiency symptoms, and interactions with legumes.',
    keywords: [
      'molybdenum',
      'plant nutrient',
      'micronutrient',
      'nitrogen fixation',
    ],
  },
  structuredData: { article: true },
};
