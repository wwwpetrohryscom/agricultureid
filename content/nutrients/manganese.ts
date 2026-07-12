import type { NutrientContent } from '@/types/content';

export const manganese: NutrientContent = {
  id: 'nutrient-manganese',
  slug: 'manganese',
  contentType: 'nutrient',
  title: 'Manganese',
  symbol: 'Mn',
  alternativeNames: ['Mn'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Manganese is a micronutrient essential to the water-splitting step of photosynthesis and to several other enzyme systems. Its availability is unusually sensitive to soil pH and drainage, making it prone to both deficiency and toxicity depending on conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Manganese (Mn) is a micronutrient best known for its role in the oxygen-evolving complex of photosystem II, the step of photosynthesis that splits water to release oxygen. It also activates enzymes involved in respiration, lignin synthesis, and defence against oxidative stress.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up manganese mainly as the Mn²⁺ ion. Manganese availability is unusually sensitive to soil conditions: it increases in acidic and waterlogged, low-oxygen soils, where more manganese is present in the soluble Mn²⁺ form, and decreases in well-aerated, high-pH soils, where it is oxidised to less available forms.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Mn' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Manganese ion (Mn²⁺)' },
    {
      label: 'Main role',
      value: 'Photosynthesis (oxygen-evolving complex) and enzyme activation',
    },
    {
      label: 'Deficiency sign',
      value: 'Interveinal chlorosis with a fine, green venation pattern',
    },
    {
      label: 'Mobility in plant',
      value: 'Immobile — deficiency appears first in young to middle leaves',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Manganese is required for the oxygen-evolving complex of photosystem II, the part of photosynthesis that splits water molecules to release the oxygen plants produce. It also activates enzymes involved in respiration, lignin synthesis for cell wall strength, and antioxidant defence against oxidative stress.',
        },
      ],
    },
    {
      id: 'manganese-in-the-soil',
      heading: 'Manganese in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Manganese availability responds strongly to soil pH and drainage, in the opposite direction to how these factors affect deficiency in most other micronutrients: manganese becomes more available as soils become more acidic or waterlogged, and less available as they become more alkaline or well aerated.',
        },
        {
          type: 'list',
          items: [
            'High-pH mineral soils are prone to manganese deficiency',
            'Sandy soils and peat or other organic soils are also commonly deficiency-prone',
            'Strongly acidic, poorly drained soils are prone to the opposite problem — manganese toxicity',
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
          text: 'Manganese deficiency appears as interveinal chlorosis with a fine, still-green venation pattern, sometimes accompanied by small necrotic (dead) spots. It is most often seen on high-pH mineral soils and on peat or other organic soils where manganese availability is naturally low.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Manganese deficiency symptoms can resemble those of iron or magnesium deficiency. Soil and plant tissue testing help confirm the cause.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Manganese toxicity is common on strongly acidic, poorly drained soils, where the soluble Mn²⁺ form accumulates to excess. Symptoms include brown speckling and crinkling of leaves and stunted root growth. Raising soil pH through liming is the standard corrective approach in principle, though the appropriate rate depends on the soil.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Management is soil- and region-specific',
          text: 'Whether a soil is prone to manganese deficiency or toxicity depends on its pH and drainage. AgricultureID does not publish universal manganese application or liming rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Manganese competes with iron, zinc, and copper for uptake, so an excess of one can affect the availability of the others. Because manganese availability is so closely tied to soil pH, liming decisions made to manage other nutrients can shift a soil between manganese deficiency and toxicity risk.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'boron' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'barley' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of manganese as a plant nutrient. Correction methods and application or liming rates are soil- and region-specific and are not given here.',
  climateContext:
    'Manganese availability increases under waterlogged or acidic conditions and decreases in well-drained, high-pH soils.',
  limitations: [
    'This entry describes manganese’s role and behaviour; it is not a manganese or liming recommendation for any specific crop, soil, or region.',
    'Deficiency and toxicity diagnosis should be confirmed with soil and plant tissue testing, since symptoms overlap with other nutrient disorders.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of manganese in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Manganese availability, pH, and drainage relationships',
    },
    { sourceId: 'ahdb', citedFor: 'Manganese management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Manganese deficiency and toxicity diagnosis',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Manganese',
    description:
      'Manganese as a plant micronutrient: its role in photosynthesis and enzymes, soil pH effects, deficiency symptoms, toxicity, and interactions.',
    keywords: [
      'manganese',
      'plant nutrient',
      'micronutrient',
      'manganese deficiency',
    ],
  },
  structuredData: { article: true },
};
