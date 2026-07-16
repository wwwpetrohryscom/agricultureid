import type { CommodityProductContent } from '@/types/content';

export const cottonseedOil: CommodityProductContent = {
  id: 'commodity-product-cottonseed-oil',
  slug: 'cottonseed-oil',
  contentType: 'commodity-product',
  title: 'Cottonseed Oil',
  alternativeNames: ['Cotton seed oil'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Vegetable oil',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'cottonseed' },
  physicalForm: 'oil',
  summary:
    'Cottonseed oil is the oil extracted from cottonseed, produced alongside cottonseed meal. Refining removes the gossypol that restricts the meal, so the oil enters food use freely — the clearest case of two co-products diverging in regulatory standing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cottonseed oil is recovered when cottonseed is crushed. It has a long history as a food oil — it was among the first vegetable oils processed at industrial scale — and it is still valued in commercial frying and in food manufacture for its stability and neutral character once refined.',
    },
    {
      type: 'paragraph',
      text: 'What is worth understanding is how differently the two co-products of this crush are treated. Gossypol partitions such that refining removes it from the oil, while the meal retains it. The result is a food oil with no gossypol constraint sold beside a meal that cannot go into monogastric diets, both from the same seed and the same operation.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of cottonseed crushing' },
    { label: 'Made from', value: 'Cottonseed (Gossypium species)' },
    {
      label: 'Companion stream',
      value: 'Cottonseed meal, from the same crush',
    },
    {
      label: 'Traded states',
      value: 'Crude and refined, as distinct positions',
    },
    {
      label: 'Gossypol',
      value: 'Removed by refining — the constraint stays with the meal',
    },
    {
      label: 'Principal uses',
      value: 'Food — commercial frying, snack manufacture, cooking',
    },
  ],
  sections: [
    {
      id: 'refining',
      heading: 'Refining, colour, and gossypol',
      body: [
        {
          type: 'paragraph',
          text: 'Crude cottonseed oil is dark, and the pigments responsible are bound up with the gossypol the seed carries. Refining — degumming, neutralising, bleaching, and deodorising in the conventional sequence — addresses both together: the steps that lighten the oil are the steps that remove gossypol. This is why the food status of cottonseed oil is a matter of refining having been done, and why crude cottonseed oil is a refiner’s raw material rather than a food article.',
        },
        {
          type: 'paragraph',
          text: 'Cottonseed oil also contains waxes and is commonly winterised for uses where clouding at low temperature would be a defect, in the same manner as sunflower oil.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Refined status is the food question',
          text: 'Whether a cottonseed oil is fit for food use and how it must be described are determined by the applicable food-safety authority and standard, not by this entry. No limits or processing claims are published here.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Food — commercial deep frying, where oxidative stability is valued',
            'Food — snack food manufacture, baked goods, and shortenings',
            'Food — bottled cooking and salad oil in some markets',
            'Industrial — a minor outlet in soaps and oleochemicals',
          ],
        },
        {
          type: 'paragraph',
          text: 'Its position is that of a specialty-scale commodity oil: significant where cotton is crushed, largely absent where it is not, because supply follows lint production rather than oil demand.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Free fatty acid content, colour, moisture and impurities, and wax content describe the traded oil, and the refining cost of a crude parcel is substantially a function of its colour and free fatty acid load — both inherited from how the seed was handled between the gin and the crusher. Seed that sat wet in a pile yields oil that costs more to refine. It ships in bulk tanks and packed form, with tank cleanliness and cargo history conditions of acceptance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Free fatty acid content',
    'Colour (refining cost indicator)',
    'Moisture and impurities',
    'Wax content (winterisation indicator)',
    'Oxidative condition',
  ],
  processContext:
    'Extracted from cottonseed by pressing, solvent extraction, or both, and sold crude or refined; refining removes colour bodies and gossypol together, and winterisation removes waxes. Cottonseed meal is the simultaneous co-product.',
  storageContext:
    'Stored and shipped in bulk tanks and packed form; protected from heat, light, and air, with tank cleanliness and previous cargo history material to acceptance.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1512.21',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude cotton-seed oil, whether or not gossypol has been removed.',
    },
    {
      system: 'HS',
      code: '1512.29',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cotton-seed oil and its fractions, other than crude.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'commodity', slug: 'cottonseed' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cottonseed-meal' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Cottonseed oil processing and food uses' },
    {
      sourceId: 'usda',
      citedFor: 'Cottonseed oil product description and market context',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Gossypol in cottonseed-derived products as a food and feed safety consideration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Oil naming, compositional standards, and food-safety requirements are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a refining specification, food-standards statement, or food-safety assessment.',
    'No gossypol limits, refining-loss, fatty acid, or stability figures are given here; the applicable authority, standard, and contract set them.',
    'Statements about gossypol removal describe the conventional refining pathway at concept level and are not a compliance claim for any given oil.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cottonseed Oil: Co-Product of Cottonseed Crushing',
    description:
      'Cottonseed oil as a crushing co-product: why refining removes gossypol and colour together, crude versus refined, frying uses, and quality and handling.',
    keywords: [
      'cottonseed oil',
      'gossypol removal',
      'crude cottonseed oil',
      'frying oil',
      'vegetable oil',
    ],
  },
  structuredData: { article: true },
};
