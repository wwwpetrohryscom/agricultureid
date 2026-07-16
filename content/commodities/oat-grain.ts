import type { CommodityContent } from '@/types/content';

export const oatGrain: CommodityContent = {
  id: 'commodity-oat-grain',
  slug: 'oat-grain',
  contentType: 'commodity',
  title: 'Oat Grain',
  alternativeNames: ['Oats', 'Milling oats', 'Feed oats'],
  category: 'Cereal grain commodity',
  subcategory: 'Common oats',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (the groat) enclosed in a loose hull',
  sourceCrop: { type: 'crop', slug: 'oats' },
  summary:
    'Oat grain is the harvested oat caryopsis, traded with its loose hull still on. Because the hull is a large share of the delivered weight and is removed before food use, oats are bought on what will be left after dehulling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oat grain arrives in the trade as a hulled grain in the botanical sense: the edible kernel, called the groat, sits inside a papery hull that is not fused to it. That single structural fact drives the commercial logic of the commodity. A buyer taking oats for food is buying groats, not oats, and a large part of what is delivered will be stripped off and sold as something else entirely.',
    },
    {
      type: 'paragraph',
      text: 'Oats therefore trade on measures that predict what the mill will recover: bulk density, kernel plumpness, and the proportion of the lot that is hull rather than groat. Feed buyers apply looser criteria, since hull is roughage rather than loss for a ruminant. Both markets are assessing the delivered lot, not the crop that produced it.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Oats (Avena sativa)' },
    {
      label: 'Harvested part',
      value: 'Caryopsis (groat) inside a loose, unfused hull',
    },
    {
      label: 'Structural distinction',
      value: 'The hull is separable, unlike the fused bran of wheat or maize',
    },
    {
      label: 'Principal uses',
      value: 'Food (dehulled and flaked) and livestock feed',
    },
    {
      label: 'Key quality attributes',
      value: 'Test weight, groat percentage, plumpness, moisture, soundness',
    },
    {
      label: 'Main products',
      value: 'Rolled oats, with oat hulls as a by-product',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Traded oats are almost always hulled types — the hull comes off in a dehuller, not in the combine. Naked or hull-less oats exist and thresh free of the hull, but they are a niche commodity with different handling requirements and are not what the bulk oat trade means by oats. Colour is a trade descriptor, with white oats generally preferred for milling and other colours more common in feed channels.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hull, groat, bran',
          text: 'The hull is a separable outer covering removed by dehulling. The groat is the kernel inside it. The groat still carries its own bran layer, which is normally retained rather than removed — which is why oat food products are usually wholegrain.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Food processing of oats follows a distinctive sequence. The grain is cleaned and graded, dehulled to separate groats from hulls, and then kilned — a heat treatment that is not optional. Oat groats are rich in lipase, which would otherwise break down the grain oil and turn the product rancid quickly; kilning deactivates it and is what makes stable oat products possible. Kilned groats are then steamed and rolled into flakes, the primary product of the chain, or cut into steel-cut groats or ground into oatmeal.',
        },
        {
          type: 'paragraph',
          text: 'The hulls separated at the start are a genuine residual: bulky, abrasive, high in fibre and low in feeding value relative to the groat. They are marketed rather than discarded — as a fibre carrier in feed, as boiler fuel, and as an industrial feedstock — but they are a by-product, not a co-product, because the operation exists to recover groats and the hull is what is left.',
        },
        {
          type: 'list',
          items: [
            'Food — dehulled, kilned, and flaked into rolled oats and oatmeal',
            'Feed — fed whole or rolled, valued as a bulky, safe energy source for horses and ruminants',
            'Industrial — oat fractions used as ingredients in other manufacturing',
            'Seed — retained or certified for the next crop',
          ],
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality attributes and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Test weight carries more weight in the oat trade than in most cereals, because a light bushel signals a lot that is thin, hull-heavy, or poorly filled, and predicts a low groat recovery at the mill. Grade standards also count sound cultivated oats, wild oats, other grains, and foreign material, and millers add their own requirements for plumpness, groat percentage, and colour on top of the grade.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic defects reflect how the crop is harvested and how the grain is built. Thin and unfilled kernels come off the combine with the rest of the lot and dilute it. Hulls damaged in handling expose the groat prematurely. And because the hull is loose, oats carry more light material and dust than other cereals, so cleaning is central to preparing a lot for sale rather than incidental to it.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling context',
      body: [
        {
          type: 'paragraph',
          text: 'Oats store in bulk like other cereals, dried to a moisture appropriate to the holding period, then cooled, aerated, and monitored. Two practical differences stand out. The loose hull and low bulk density mean oats take more volume per tonne than wheat or maize, so bin capacity planned on wheat figures will not hold the same weight of oats. And the same light, dusty, low-density material flows and bridges differently, which affects augering, aeration airflow, and the fire and dust-explosion housekeeping around handling equipment.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed'],
  secondaryUses: ['seed', 'industrial'],
  majorQualityAttributes: [
    'Test weight (bulk density)',
    'Groat percentage',
    'Kernel plumpness',
    'Moisture content',
    'Sound cultivated oats',
    'Colour',
  ],
  commonDefects: [
    'Thin and unfilled kernels',
    'Damaged hulls exposing the groat',
    'Wild oats and other grain admixture',
    'Light material, dust, and foreign material',
    'Mould and storage fungi',
    'Insect damage',
  ],
  moistureContext:
    'Dried before storage to a moisture suited to the holding period and climate; the applicable limit comes from the grade standard and the buyer contract.',
  storageContext:
    'Stored dry, cool, and aerated; low bulk density means oats occupy more volume per tonne than most cereals, which affects bin capacity planning.',
  transportContext:
    'Moves in bulk and bags; the loose hull generates dust and light material, making cleaning and dust management part of routine handling.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'North America',
    'Australia',
    'South America',
  ],
  majorTradingRegions: [
    'Europe and Central Asia',
    'North America',
    'Australia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1004.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oats, other than seed. Oats for sowing fall under 1004.10.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'rolled-oats' }],
  byProducts: [{ type: 'commodity-product', slug: 'oat-hulls' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oats as a traded cereal and its food and feed uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Oat grading attributes, test weight, and defect categories',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Oat milling quality, groat recovery, and storage context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for oats and oat products',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, milling requirements, and tariff subheadings are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, milling specification, or customs classification.',
    'No test-weight, groat-percentage, or moisture figures are given — those are set by the applicable standard and contract.',
    'Naked (hull-less) oats are a distinct niche commodity with different handling and are not described here.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Oat Grain: The Traded Oats Commodity',
    description:
      'Oat grain as a commodity: why the loose hull makes groat recovery the thing being bought, how test weight predicts it, plus kilning, grading and storage.',
    keywords: [
      'oat grain',
      'milling oats',
      'groat percentage',
      'oat test weight',
      'oat dehulling',
    ],
  },
  structuredData: { article: true },
};
