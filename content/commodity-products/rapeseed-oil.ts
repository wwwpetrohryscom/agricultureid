import type { CommodityProductContent } from '@/types/content';

export const rapeseedOil: CommodityProductContent = {
  id: 'commodity-product-rapeseed-oil',
  slug: 'rapeseed-oil',
  contentType: 'commodity-product',
  title: 'Rapeseed Oil',
  alternativeNames: ['Colza oil', 'Canola oil (low erucic acid types)'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Vegetable oil',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'rapeseed' },
  physicalForm: 'oil',
  summary:
    'Rapeseed oil is the oil separated from rapeseed during crushing. Low erucic acid oil is a major food oil — sold as canola oil in several markets — while high erucic acid oil is a segregated industrial product, and the two are not interchangeable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rapeseed oil is the principal reason rapeseed is crushed. It moves crude to refiners and refined into food and industrial channels, and in temperate agriculture it is among the most significant vegetable oils by volume, competing with soybean, sunflower, and palm oil in both food and fuel outlets.',
    },
    {
      type: 'paragraph',
      text: 'The oil inherits the compositional category of the seed it came from. Oil pressed from low erucic acid seed is the food-grade article marketed as canola oil in Canada, the United States, and Australia and as rapeseed oil in Europe. Oil from high erucic acid seed is a distinct product with industrial uses, kept segregated throughout the chain. The name on the tank follows the seed and the jurisdiction, not the refinery.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of rapeseed crushing' },
    {
      label: 'Made from',
      value: 'Rapeseed (Brassica napus, and Brassica rapa types)',
    },
    { label: 'Companion stream', value: 'Rapeseed meal, from the same crush' },
    {
      label: 'Two distinct products',
      value: 'Low erucic acid food oil; high erucic acid industrial oil',
    },
    {
      label: 'Traded states',
      value: 'Crude and refined, as distinct positions',
    },
    {
      label: 'Key attributes',
      value:
        'Erucic acid status, free fatty acids, chlorophyll and colour, impurities',
    },
  ],
  sections: [
    {
      id: 'food-and-industrial',
      heading: 'Two oils, one heading',
      body: [
        {
          type: 'paragraph',
          text: 'Low erucic acid rapeseed oil is used as a cooking and bottled oil, in food manufacture, and as a biodiesel feedstock; in the European Union it is a leading biodiesel raw material, which ties its price to fuel policy as much as to food demand. High erucic acid rapeseed oil goes to oleochemical uses such as slip agents, lubricants, and plasticisers, where erucic acid is the point rather than the problem.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Segregation, not processing',
          text: 'The difference between the food and industrial oils is decided in the seed and preserved by segregation. Refining cannot convert high erucic acid oil into a food-grade low erucic acid oil, and the two must not be conflated because they share an HS heading.',
        },
      ],
    },
    {
      id: 'refining-and-chlorophyll',
      heading: 'Refining and the chlorophyll problem',
      body: [
        {
          type: 'paragraph',
          text: 'Crude rapeseed oil is degummed, neutralised, bleached, and deodorised in the conventional sequence. Rapeseed brings a specific burden to the bleaching stage: chlorophyll carried over from green, immature seed gives the oil a green cast and impairs its oxidative stability. Removing it consumes bleaching capacity and materials, which is why crushers price green seed down — the cost appears in the refinery, not the field.',
        },
        {
          type: 'list',
          items: [
            'Food — bottled cooking oil, frying, margarines, and food manufacture',
            'Energy — a leading biodiesel feedstock, particularly in Europe',
            'Industrial — oleochemicals, principally from high erucic acid oil',
          ],
        },
      ],
    },
    {
      id: 'quality-and-movement',
      heading: 'Quality and movement',
      body: [
        {
          type: 'paragraph',
          text: 'Free fatty acid content, colour and chlorophyll, moisture and impurities, and phosphorus describe the traded oil, alongside the erucic acid status that determines which market it can enter. It ships in bulk tanks, rail cars, and parcel tankers, where tank cleanliness and previous cargo history are acceptance conditions — and where the food/industrial segregation must hold, because a shared tank undoes it.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['industrial', 'energy'],
  majorQualityAttributes: [
    'Erucic acid status (standard- and contract-defined)',
    'Free fatty acid content',
    'Chlorophyll content and colour',
    'Moisture and impurities',
    'Phosphorus content (degumming indicator)',
  ],
  processContext:
    'Separated from rapeseed during crushing, typically by pressing followed by extraction of the press cake, then sold crude or refined through degumming, neutralising, bleaching, and deodorising. Meal is the simultaneous co-product.',
  storageContext:
    'Stored and shipped in bulk tanks and packed form; tank cleanliness and previous cargo history matter, and food and industrial grades must be kept segregated.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1514.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude low erucic acid rape or colza oil.',
    },
    {
      system: 'HS',
      code: '1514.19',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Low erucic acid rape or colza oil and fractions, other than crude.',
    },
    {
      system: 'HS',
      code: '1514.91',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude rape, colza, or mustard oil other than low erucic acid types.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'rapeseed-meal' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Vegetable oil processing pathways and food uses',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Rapeseed oil food and biodiesel outlets in the European Union',
    },
    { sourceId: 'ahdb', citedFor: 'Rapeseed crushing and oil quality context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Oil naming — rapeseed oil versus canola oil — and compositional standards are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a refining specification, food-standards statement, or fuel-quality assessment.',
    'No erucic acid, fatty acid composition, chlorophyll, or refining-loss figures are given here; the applicable standard or contract sets them.',
    'The low erucic acid and other rape/colza oil HS subheadings are distinct — 1514.91 and 1514.99 also cover mustard oil and so are not specific to rapeseed.',
    'Biofuel policy and eligibility differ by jurisdiction and change frequently.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rapeseed Oil: Food and Industrial Grades Compared',
    description:
      'Rapeseed oil as a crushing co-product: low versus high erucic acid grades, the canola naming question, chlorophyll and refining, and quality and movement.',
    keywords: [
      'rapeseed oil',
      'canola oil',
      'erucic acid',
      'colza oil',
      'biodiesel feedstock',
    ],
  },
  structuredData: { article: true },
};
