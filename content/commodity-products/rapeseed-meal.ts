import type { CommodityProductContent } from '@/types/content';

export const rapeseedMeal: CommodityProductContent = {
  id: 'commodity-product-rapeseed-meal',
  slug: 'rapeseed-meal',
  contentType: 'commodity-product',
  title: 'Rapeseed Meal',
  alternativeNames: [
    'Canola meal (low glucosinolate types)',
    'Rapeseed oilcake',
    'Rapeseed expeller',
  ],
  category: 'Oilseed crushing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'rapeseed' },
  physicalForm: 'meal',
  summary:
    'Rapeseed meal is the de-oiled solid fraction from crushing rapeseed, traded as a feed protein. Its modern feed role rests on double-low breeding: the reduction of glucosinolates transformed the meal from a constrained material into a mainstream ingredient.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rapeseed meal is what the crush leaves once the oil has been removed. It is a co-product with an established market in compound feed, most prominently in dairy rations, and it is sold as meal or as expeller depending on whether a solvent stage followed pressing.',
    },
    {
      type: 'paragraph',
      text: 'Its commercial history is unusual and worth stating plainly, because it explains the product. Meal from traditional rapeseed carried glucosinolates that limited how much could be fed. Breeding low-glucosinolate types — the second "low" in double-low, and part of what defines canola — changed the meal’s standing far more than it changed the oil’s. Where the parent seed meets the low-glucosinolate criteria of the applicable standard, the meal is commonly marketed as canola meal.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of rapeseed crushing' },
    {
      label: 'Made from',
      value: 'Rapeseed (Brassica napus, and Brassica rapa types)',
    },
    { label: 'Companion stream', value: 'Rapeseed oil, from the same crush' },
    {
      label: 'Naming',
      value:
        'Marketed as canola meal where the seed meets the applicable standard',
    },
    {
      label: 'Principal use',
      value: 'Animal feed, prominently in dairy rations',
    },
    {
      label: 'Key attributes',
      value: 'Protein, fibre, moisture, residual oil, glucosinolate status',
    },
  ],
  sections: [
    {
      id: 'why-double-low-mattered',
      heading: 'Why double-low breeding mattered here',
      body: [
        {
          type: 'paragraph',
          text: 'Glucosinolates are compounds present in Brassica seed whose breakdown products constrained the use of traditional rapeseed meal in animal diets. Low-glucosinolate types removed that constraint, and the meal moved from a material fed cautiously to one formulators use routinely. This is the clearest case in the oilseed complex of a breeding change whose principal beneficiary was the co-product rather than the main product.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Status, not thresholds',
          text: 'Glucosinolate criteria are set by the applicable standard or contract and differ by jurisdiction. This entry states that the status is specified and where it is specified; it publishes no limits.',
        },
      ],
    },
    {
      id: 'meal-and-expeller',
      heading: 'Meal and expeller',
      body: [
        {
          type: 'paragraph',
          text: 'Rapeseed is normally crushed without dehulling, so its meal carries the seed coat and is higher in fibre than dehulled soybean meal — one reason it is priced below soybean meal and sits more naturally in ruminant diets. Two forms reach the market: solvent-extracted meal, with little residual oil, and expeller or cold-pressed cake, which retains more oil and therefore more energy but keeps less well.',
        },
        {
          type: 'list',
          items: [
            'Dairy rations — the largest outlet in many temperate markets',
            'Beef and other ruminant feeding',
            'Pig and poultry diets — used at levels set by the formulator and diet',
            'Expeller cake — where residual oil is wanted as an energy source',
          ],
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Meal ships in bulk and in bags and is often pelleted for density and flow. It is hygroscopic and will cake, heat, and mould if held moist, and expeller grades with higher residual oil have shorter keeping quality than fully extracted meal. Meal that has heated in store has lost protein quality that no downstream step restores.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  majorQualityAttributes: [
    'Protein content',
    'Fibre content',
    'Residual oil content',
    'Moisture content',
    'Glucosinolate status (standard- and contract-defined)',
  ],
  processContext:
    'The de-oiled solids from crushing rapeseed, produced by solvent extraction after pressing or sold as expeller cake from pressing alone; the seed is normally crushed without dehulling. Oil is the simultaneous co-product.',
  storageContext:
    'Bulk or bagged, commonly pelleted; hygroscopic and liable to cake or heat if held moist, with expeller grades keeping less well than extracted meal.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2306.41',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues from the extraction of low erucic acid rape or colza seeds.',
    },
    {
      system: 'HS',
      code: '2306.49',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues of rape or colza seeds, other than low erucic acid types.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'rapeseed-oil' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed meals and their role in animal feed',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Rapeseed meal use in ruminant rations and market context',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Glucosinolates in Brassica feed materials as a feed-safety consideration',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Oilseed meals as feed ingredients in livestock nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming — rapeseed meal versus canola meal — and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or feed-safety assessment.',
    'No glucosinolate, protein, fibre, or inclusion-rate figures are given here; the applicable standard, contract, and formulator set them.',
    'Composition varies with the seed crushed and with whether the meal is solvent-extracted or expeller.',
    'Feed use and labelling of this meal are governed by the feed rules in force in the destination market.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rapeseed Meal: Co-Product of the Rapeseed Crush',
    description:
      'Rapeseed meal as a crushing co-product: how low-glucosinolate breeding made it a mainstream feed protein, meal versus expeller, and its handling and storage.',
    keywords: [
      'rapeseed meal',
      'canola meal',
      'glucosinolates',
      'rapeseed expeller',
      'dairy feed protein',
    ],
  },
  structuredData: { article: true },
};
