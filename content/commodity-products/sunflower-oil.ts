import type { CommodityProductContent } from '@/types/content';

export const sunflowerOil: CommodityProductContent = {
  id: 'commodity-product-sunflower-oil',
  slug: 'sunflower-oil',
  contentType: 'commodity-product',
  title: 'Sunflower Oil',
  alternativeNames: ['Sunflowerseed oil', 'High-oleic sunflower oil'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Vegetable oil',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'sunflower-seed' },
  physicalForm: 'oil',
  summary:
    'Sunflower oil is the oil separated from sunflower seed during crushing, traded crude or refined and in linoleic, mid-oleic, and high-oleic types. It is a co-product produced alongside sunflower meal.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sunflower oil is recovered when sunflower seed is crushed, and it reaches buyers in two states: crude, sold on to refiners, and refined, ready for food use. It is prized in cooking and food manufacture for its light colour and neutral flavour, and it competes directly with other liquid vegetable oils on price and functional behaviour.',
    },
    {
      type: 'paragraph',
      text: 'A distinguishing feature is that sunflower oil is not one oil. The fatty acid type of the parent seed — linoleic, mid-oleic, or high-oleic — carries straight through to the oil and determines its oxidative stability and suitability for extended frying. That type is decided in the field and preserved through segregation; a refinery cannot convert one into another.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of sunflower crushing' },
    { label: 'Made from', value: 'Sunflower seed (Helianthus annuus)' },
    { label: 'Companion stream', value: 'Sunflower meal, from the same crush' },
    {
      label: 'Traded states',
      value: 'Crude and refined, as distinct positions',
    },
    {
      label: 'Types',
      value: 'Linoleic, mid-oleic, and high-oleic — set by the parent seed',
    },
    {
      label: 'Key attributes',
      value:
        'Fatty acid type, free fatty acids, colour, moisture and impurities',
    },
  ],
  sections: [
    {
      id: 'types-and-stability',
      heading: 'Types and stability',
      body: [
        {
          type: 'paragraph',
          text: 'Conventional sunflower oil is high in linoleic acid, which gives a light, neutral oil but limits resistance to oxidation at frying temperatures. High-oleic types shift the balance toward oleic acid and are markedly more stable, which is why they command a premium in commercial frying and in applications needing a long shelf life. Mid-oleic types sit between the two and were developed as a general-purpose compromise.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The type is inherited, not made',
          text: 'Fatty acid type comes from the seed delivered to the plant. Refining removes impurities; it does not alter which type an oil is. A high-oleic claim is a claim about supply-chain segregation.',
        },
      ],
    },
    {
      id: 'crude-refined-and-uses',
      heading: 'From crude to end use',
      body: [
        {
          type: 'paragraph',
          text: 'Crude sunflower oil carries waxes, phospholipids, free fatty acids, and pigments. Refining removes them in stages, and sunflower oil adds a step other oils often do not need: winterisation, which removes waxes that would otherwise cloud the oil when it cools. A cloudy bottle on a cold shelf is a defect of appearance, and winterisation is the process answer to it.',
        },
        {
          type: 'list',
          items: [
            'Food — bottled cooking oil, commercial frying, dressings, and food manufacture',
            'Food manufacture — high-oleic types where oxidative stability is required',
            'Industrial — a minor outlet in oleochemicals and coatings',
          ],
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Free fatty acid content, colour, moisture and impurities, and wax content describe the traded oil. Much of its condition is inherited from the seed: seed that heated in store yields oil with a higher free fatty acid load and a higher refining cost. Bulk movement is by tank and parcel tanker, where previous cargo history and tank cleanliness are conditions of acceptance rather than details.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Fatty acid type (linoleic, mid-oleic, high-oleic)',
    'Free fatty acid content',
    'Colour',
    'Moisture and impurities',
    'Wax content (winterisation indicator)',
  ],
  processContext:
    'Separated from sunflower seed during crushing by pressing, solvent extraction, or pressing followed by extraction; refining conventionally includes winterisation to remove waxes. Meal is the simultaneous co-product.',
  storageContext:
    'Stored and shipped in bulk tanks and packed form; protected from heat, light, and air, with tank cleanliness and previous cargo history material to acceptance.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1512.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude sunflower-seed or safflower oil. The subheading covers both oils, so it does not distinguish them.',
    },
    {
      system: 'HS',
      code: '1512.19',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sunflower-seed or safflower oil and fractions, other than crude.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'sunflower-meal' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Vegetable oil processing and food uses' },
    {
      sourceId: 'usda-fas',
      citedFor: 'Sunflower oil trade and market context',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Sunflower oil market context in the European Union',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Oil naming and compositional standards are jurisdiction-specific; the high-oleic designation is defined by market convention and contract.',
  limitations: [
    'This is a reference description of the product, not a refining specification or food-standards statement.',
    'No fatty acid composition, refining loss, or stability figures are given here — they are type-, lot-, and process-specific.',
    'The HS subheadings cited cover sunflower-seed and safflower oil together and therefore do not identify sunflower oil uniquely.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sunflower Oil: Co-Product of the Sunflower Crush',
    description:
      'Sunflower oil as a crushing co-product: linoleic, mid-oleic and high-oleic types, why winterisation matters, crude versus refined, and quality and handling.',
    keywords: [
      'sunflower oil',
      'high oleic sunflower oil',
      'winterisation',
      'crude sunflower oil',
      'vegetable oil',
    ],
  },
  structuredData: { article: true },
};
