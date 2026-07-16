import type { CommodityContent } from '@/types/content';

export const sorghumGrain: CommodityContent = {
  id: 'commodity-sorghum-grain',
  slug: 'sorghum-grain',
  contentType: 'commodity',
  title: 'Sorghum Grain',
  alternativeNames: ['Grain sorghum', 'Milo', 'Great millet', 'Jowar'],
  category: 'Cereal grain commodity',
  subcategory: 'Grain sorghum',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (grain), threshed from the panicle',
  sourceCrop: { type: 'crop', slug: 'sorghum' },
  summary:
    'Sorghum grain is the harvested caryopsis of grain sorghum, traded as a feed grain in the export market and eaten as a staple across the semi-arid tropics. Tannin content and grain colour are its distinctive trade descriptors.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sorghum grain occupies two largely separate worlds. In the international trade it is a feed grain, moving in bulk and priced against maize as an energy source. Across the semi-arid tropics of Africa and South Asia it is a food staple, ground into flour for flatbreads and porridges and fermented into traditional beverages. The same commodity name covers both, but the lots, the quality expectations, and the marketing channels rarely overlap.',
    },
    {
      type: 'paragraph',
      text: 'The commodity has one attribute no other major cereal makes central: the presence or absence of condensed tannins in the grain. Tannin-containing sorghums resist bird damage and weathering in the field but bind protein and reduce digestibility when fed or eaten. Whether a lot carries tannins is therefore a property of the delivered grain that changes its value and its use, and it is described in trade terms rather than left to the crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Sorghum (Sorghum bicolor)' },
    { label: 'Harvested part', value: 'Caryopsis (grain)' },
    {
      label: 'Principal uses',
      value: 'Feed in the export trade; food staple in the semi-arid tropics',
    },
    {
      label: 'Distinctive descriptor',
      value: 'Tannin type — tannin-free versus tannin-containing grain',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, tannin type, colour, damage, foreign material',
    },
    {
      label: 'Also traded as',
      value: 'A gluten-free grain for specialist food markets',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Traded sorghum is grain sorghum — the types grown for their seed — as distinct from forage, sweet, and broomcorn sorghums, which are the same species grown and harvested for entirely different products. Grain sorghum is small, round, and hard, and threshes free of its glumes. Colour ranges from white through red and bronze to brown, and colour is a commercial descriptor rather than a cosmetic one, since it correlates loosely with pericarp and testa characteristics that affect processing.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Grain sorghum is one of several sorghums',
          text: 'Forage sorghum, sweet sorghum (harvested for stalk juice), and broomcorn are grown from the same species for different harvested parts. Only grain sorghum is described here; the others are separate commodities from the same crop.',
        },
      ],
    },
    {
      id: 'tannins-and-end-use',
      heading: 'Tannins and end use',
      body: [
        {
          type: 'paragraph',
          text: 'Some sorghums carry a pigmented testa layer containing condensed tannins; most of the sorghum grown for the international feed trade does not. The trade-off is real in both directions. Tannins deter birds and slow weathering and pre-harvest sprouting in humid conditions, which is why tannin types persist where those pressures are severe. But tannins bind proteins and depress digestibility and palatability, so tannin-free grain is preferred where the lot is destined for feed or for straightforward food use.',
        },
        {
          type: 'paragraph',
          text: 'Because this is a property of the grain rather than of the field, it travels with the lot and is declared. Where tannin sorghum is a food staple, processing addresses it — decortication removes the outer layers that carry the tannins, and fermentation and other traditional preparations reduce their effect. That processing is real and widespread, but it is a household and small-mill practice more than an industrial commodity pathway, so no tannin-removal product is asserted here.',
        },
      ],
    },
    {
      id: 'uses-and-quality',
      heading: 'Uses, quality, and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Feed is the largest single outlet by traded volume: sorghum is fed whole, cracked, or ground, and its energy value approaches that of maize, which is what it is priced against. Food use is dominated by milling into flour and by decortication into rice-like grains, and there are established beverage uses, both traditional opaque beers and industrial brewing. Sorghum is naturally free of gluten-forming proteins, which has opened a specialist food market for it beyond its staple regions.',
        },
        {
          type: 'list',
          items: [
            'Feed — a maize-equivalent energy grain in compound and on-farm feeding',
            'Food — flour for flatbreads and porridges; decorticated grain cooked whole',
            'Beverage — traditional opaque beers and industrial brewing adjuncts',
            'Energy — fermentation feedstock where locally economic',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grading follows the general cereal pattern: moisture, test weight, damaged and heat-damaged kernels, broken material, and foreign material. Weathered, discoloured, and mould-damaged grain is downgraded, and because sorghum stands in the field on an exposed panicle, weathering damage before harvest is a common origin of a poor lot.',
        },
      ],
    },
    {
      id: 'drying-storage-and-losses',
      heading: 'Drying, storage, and storage losses',
      body: [
        {
          type: 'paragraph',
          text: 'Much of the world sorghum crop is harvested and stored in hot climates where the storage insect pressure is severe and the margin for error on moisture is small. Sun drying on prepared surfaces remains the dominant method at smallholder scale, with mechanical drying used in the commercial export chains. Threshing from the panicle, whether by machine or by hand, sets the amount of broken and cracked grain that will go into store, and broken grain is what storage insects find first.',
        },
        {
          type: 'paragraph',
          text: 'Sorghum is one of the grains where hermetic storage has made the clearest difference. Sealed containers deprive insects of oxygen and hold moisture stable, and they are used from bag scale upward. Conventional bulk storage works too, but depends on getting the grain dry and keeping it dry — a harder task in a monsoon climate than in a temperate one.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'food'],
  secondaryUses: ['beverage', 'energy', 'seed'],
  majorQualityAttributes: [
    'Moisture content',
    'Tannin type',
    'Grain colour',
    'Test weight',
    'Damaged and weathered kernels',
    'Broken grain and foreign material',
  ],
  commonDefects: [
    'Weathered and discoloured grain',
    'Mould damage and pre-harvest sprouting',
    'Broken and cracked kernels from threshing',
    'Insect damage in store',
    'Bird-damaged grain',
    'Foreign material and panicle fragments',
  ],
  moistureContext:
    'Dried after threshing, by sun or mechanically, before storage; in hot humid climates the window between harvest moisture and mould growth is short, and the applicable target is set by local guidance and the contract.',
  storageContext:
    'Stored in bags, bins, and silos; insect pressure is high in the warm climates where much of the crop is grown, and hermetic systems are widely used at both small and commercial scale.',
  transportContext:
    'Moves in bulk by truck, rail, and vessel in the export trade, and in bags in domestic staple markets.',
  majorProducingRegions: [
    'Sub-Saharan Africa',
    'North America',
    'South Asia',
    'South America',
    'Australia',
  ],
  majorTradingRegions: [
    'North America',
    'Australia',
    'South America',
    'East Asia (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1007.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Grain sorghum, other than seed. Sorghum for sowing falls under 1007.10.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'millet-grain' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sorghum as a food staple and traded feed grain, and its uses',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Sorghum grain quality, tannin types, and semi-arid tropics context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Sorghum grading attributes and commodity classes',
    },
    {
      sourceId: 'icar',
      citedFor: 'Sorghum grain use and post-harvest handling in South Asia',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with staple food use concentrated in the semi-arid tropics. Standards, classes, and tariff subheadings are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity, not the sorghum crop, and is not a grading determination, feed formulation, or customs classification.',
    'No tannin, moisture, test-weight, or energy-value figures are given — these depend on the type, the standard, and the analysis in use.',
    'Forage, sweet, and broomcorn sorghums are separate commodities from the same species and are not described here.',
    'Decortication and traditional processing of tannin sorghum are real practices but are not modelled as commodity products on this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sorghum Grain: Traded Cereal Commodity',
    description:
      'Sorghum grain as a commodity: its split feed and staple-food markets, why tannin type and colour change its value, and drying, grading and storage practice.',
    keywords: [
      'sorghum grain',
      'grain sorghum',
      'milo',
      'sorghum tannins',
      'sorghum storage',
    ],
  },
  structuredData: { article: true },
};
