import type { CommodityProductContent } from '@/types/content';

export const soybeanOil: CommodityProductContent = {
  id: 'commodity-product-soybean-oil',
  slug: 'soybean-oil',
  contentType: 'commodity-product',
  title: 'Soybean Oil',
  alternativeNames: ['Soya bean oil', 'Soy oil'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Vegetable oil',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'soybeans' },
  producedBy: [
    { type: 'processing-method', slug: 'degumming' },
    { type: 'processing-method', slug: 'oil-clarification' },
    { type: 'processing-method', slug: 'solvent-extraction' },
  ],
  physicalForm: 'oil',
  summary:
    'Soybean oil is the oil fraction separated from soybeans during crushing, traded crude or refined. It is one of the most widely produced vegetable oils, used in food manufacture and as an industrial and biodiesel feedstock, and it is a co-product alongside soybean meal.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean oil is the liquid fraction recovered when soybeans are crushed. It moves in two commercial states: crude oil, sold to refiners and processors, and refined oil, which has been through refining steps that remove the compounds making crude oil unsuitable for direct food use. The two are separate trading positions with separate specifications.',
    },
    {
      type: 'paragraph',
      text: 'Soybean oil exists because soybeans are crushed, and soybeans are crushed largely because the feed industry wants meal. That relationship is what distinguishes soybean oil from oils whose parent seed is crushed principally for the oil itself: its supply is tied to meal demand, and the two co-products are priced against each other.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of soybean crushing' },
    { label: 'Made from', value: 'Soybeans (Glycine max)' },
    { label: 'Companion stream', value: 'Soybean meal, from the same crush' },
    {
      label: 'Traded states',
      value: 'Crude and refined, as distinct positions',
    },
    {
      label: 'Principal uses',
      value: 'Food manufacture, plus industrial and biodiesel feedstock',
    },
    {
      label: 'Key attributes',
      value:
        'Free fatty acids, moisture and impurities, colour, oxidative stability',
    },
  ],
  sections: [
    {
      id: 'crude-and-refined',
      heading: 'Crude and refined oil',
      body: [
        {
          type: 'paragraph',
          text: 'Crude soybean oil carries phospholipids, free fatty acids, pigments, and trace material from the seed. Refining removes these in stages — degumming, neutralising, bleaching, and deodorising are the conventional sequence — and each stage targets a specific class of compound. Degumming is commercially notable because the gums removed are themselves recovered as lecithin rather than discarded.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Crude is a trading position, not a defect',
          text: 'Crude oil is a normal, specified commodity sold onward to refiners. It is not failed or spoiled oil, and it is not interchangeable with refined oil in food use.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant outlet is food: cooking and frying oil, and a base for margarines, shortenings, dressings, and processed foods. Beyond food, soybean oil is a feedstock for biodiesel and for oleochemical uses such as coatings, inks, and lubricants. The balance between food and fuel outlets is policy-sensitive and shifts with biofuel mandates, which is why the same oil can face very different demand in different jurisdictions.',
        },
        {
          type: 'list',
          items: [
            'Food — frying and cooking oil, margarines, shortenings, dressings',
            'Energy — biodiesel and renewable diesel feedstock',
            'Industrial — coatings, printing inks, lubricants, and other oleochemicals',
            'Lecithin — recovered from degumming as an emulsifier for food and industry',
          ],
        },
      ],
    },
    {
      id: 'quality-and-storage',
      heading: 'Quality and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Oil quality is described by free fatty acid content, moisture and impurities, colour, and oxidative condition. These attributes are inherited: oil pressed from beans that were split, heated, or stored badly starts with a higher free fatty acid load, and refining costs more as a result. Soybean oil’s fatty acid profile makes it relatively susceptible to oxidation, so protection from heat, light, air, and metal contact governs how it is stored and shipped.',
        },
        {
          type: 'paragraph',
          text: 'It moves in bulk — tanks, tank containers, rail cars, and parcel tankers — where tank cleanliness and previous cargo history are material to acceptance, and in packed form for retail and food service.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['industrial', 'energy'],
  majorQualityAttributes: [
    'Free fatty acid content',
    'Moisture and impurities',
    'Colour',
    'Oxidative stability',
    'Phosphorus content (degumming indicator)',
  ],
  processContext:
    'Separated from soybeans during crushing and sold crude or refined; refining conventionally proceeds through degumming, neutralising, bleaching, and deodorising. Meal is the simultaneous co-product.',
  storageContext:
    'Stored and shipped in bulk tanks and in packed form; susceptible to oxidation, so protection from heat, light, air, and metal contact matters, as does tank cleanliness.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1507.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude soya-bean oil, whether or not degummed.',
    },
    {
      system: 'HS',
      code: '1507.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Soya-bean oil and its fractions, other than crude.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'soybean-meal' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Vegetable oil production pathways and food uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Soybean oil product description and market context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Food and biofuel outlets for soybean oil',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Oil naming, compositional standards, and biofuel eligibility rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a refining specification, food-standards statement, or fuel-quality assessment.',
    'No fatty acid composition, refining loss, or yield figures are given here — they are lot- and process-specific.',
    'Biofuel policy and eligibility change frequently and differ by jurisdiction; confirm current rules with the applicable authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Oil: Co-Product of the Soybean Crush',
    description:
      'Soybean oil as a crushing co-product: crude versus refined trading positions, food and biodiesel outlets, quality attributes, and how it is stored and shipped.',
    keywords: [
      'soybean oil',
      'soya bean oil',
      'crude soybean oil',
      'vegetable oil',
      'biodiesel feedstock',
    ],
  },
  structuredData: { article: true },
};
