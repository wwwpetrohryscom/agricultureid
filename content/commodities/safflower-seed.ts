import type { CommodityContent } from '@/types/content';

export const safflowerSeed: CommodityContent = {
  id: 'commodity-safflower-seed',
  slug: 'safflower-seed',
  contentType: 'commodity',
  title: 'Safflower Seed',
  alternativeNames: ['Carthamus seed', 'Kusum seed', 'False saffron seed'],
  category: 'Oilseed commodity',
  subcategory: 'Minor oilseed',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Achene (hulled seed) threshed from the flower head',
  sourceCrop: { type: 'crop', slug: 'safflower' },
  summary:
    'Safflower seed is the harvested achene of Carthamus tinctorius, a minor oilseed traded in high-linoleic and high-oleic types. Its thick hull and modest oil content keep it a niche crush, while bird food is a substantial outlet in its own right.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Safflower seed is the small, hulled seed threshed from the flower heads of safflower. It is a minor oilseed by world volume and it is grown largely where its drought tolerance suits dryland rotations, which means supply is concentrated, variable between seasons, and thin compared with the major oilseeds.',
    },
    {
      type: 'paragraph',
      text: 'The commodity has two things worth understanding. Its hull is thick and its oil content is modest for an oilseed, which sets the terms on which a crusher will look at it. And its outlets are unusually diverse for a seed of its scale: crushing for a premium cooking oil, a substantial bird food trade that buys whole seed, and — separate from the seed entirely — a dye and food-colour trade in the plant’s petals.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Oilseed (a minor oilseed)' },
    { label: 'Parent crop', value: 'Safflower (Carthamus tinctorius)' },
    { label: 'Harvested part', value: 'Achene threshed from the flower head' },
    {
      label: 'Two oil types',
      value: 'High-linoleic and high-oleic, traded and contracted separately',
    },
    {
      label: 'Principal uses',
      value: 'Crushing for oil, bird food, feed from cake, and seed',
    },
    {
      label: 'Commercial constraint',
      value: 'Thick hull and modest oil content relative to major oilseeds',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, oil content, hull proportion, admixture, damaged seed',
    },
  ],
  sections: [
    {
      id: 'types',
      heading: 'The two oil types',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is traded as two distinct articles defined by the fatty acid profile of the oil the seed carries. High-linoleic types were historically the standard and yield an oil low in saturates, sold where that profile is the selling point. High-oleic types yield a considerably more oxidatively stable oil suited to frying and to uses needing a long hold, and they command the premium that stability earns.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Decided in the seed, preserved by segregation',
          text: 'As with sunflower, the fatty acid type is a property of the delivered seed. It is established by the type grown and kept by segregation through the chain — a crusher cannot make one type from the other, and commingling destroys the premium.',
        },
      ],
    },
    {
      id: 'the-hull-problem',
      heading: 'The hull, and why the crush is niche',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower carries a thick, fibrous hull enclosing a comparatively small kernel. Two commercial consequences follow. First, the oil recoverable per tonne delivered is lower than for the leading oilseeds, so a crusher pays less per tonne for the same plant time — safflower has to price its way in. Second, if the seed is crushed without decortication, the resulting meal is heavily diluted with hull, giving a high-fibre, low-protein feed. Decortication improves the meal but adds a step and a cost.',
        },
        {
          type: 'paragraph',
          text: 'The result is that safflower crushing tends to be a specialty business serving a premium oil market rather than a commodity crush competing on volume. AgricultureID does not currently publish safflower oil or safflower meal entries; both pathways are real and are described here rather than linked.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses beyond the crush',
      body: [
        {
          type: 'paragraph',
          text: 'Bird food is a genuine and, in some markets, a leading outlet: whole safflower seed is bought for wild-bird and caged-bird mixes, and that trade buys on appearance, plumpness, and cleanliness rather than on oil content. Lots meeting bird-food standards can be worth more than the same seed sold to a crusher, so the two markets compete for supply.',
        },
        {
          type: 'list',
          items: [
            'Oil — a premium cooking oil, with high-oleic types serving frying and stability markets',
            'Bird food — whole seed for wild-bird and caged-bird mixes',
            'Feed — cake or meal from crushing, generally fibrous unless the seed was decorticated',
            'Seed — retained or certified for planting',
            'Dye and colour — from the plant’s petals, a separate product from the seed',
          ],
        },
        {
          type: 'paragraph',
          text: 'The petal trade deserves a clarifying note because the name invites confusion: safflower petals have long been used as a colourant and are sometimes sold as a saffron substitute. They are not saffron, which comes from an unrelated plant, and they are not a product of the seed commodity described here.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower seed is light, hulled, and bulky, so bins fill by volume well before they fill by weight and freight is priced accordingly. The hull affords the kernel some protection, which makes the seed a little more forgiving in store than a naked oilseed, but it does not remove the fundamentals: seed held moist heats and moulds, and heated seed loses oil quality that shows up as free fatty acids at the crusher and as rejection in the bird-food trade.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the lot, climate, storage system, and holding period. No universal target is given here; consult the applicable national oilseed-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['oil', 'feed', 'seed'],
  secondaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Oil content',
    'Fatty acid type (high-linoleic or high-oleic)',
    'Hull proportion',
    'Admixture and foreign material',
    'Seed appearance and plumpness (bird-food lots)',
  ],
  commonDefects: [
    'Immature and poorly filled seed',
    'Heat-damaged seed',
    'Mould and storage fungi',
    'Insect damage',
    'Discoloured seed',
    'Hull fragments, chaff, and foreign material',
  ],
  moistureContext:
    'Traded and stored on a moisture basis; the hull affords some protection but seed held moist still heats and moulds, and heating costs oil quality. Limits are contract- and standard-specific.',
  storageContext:
    'Bulky and light, so storage is volume-limited rather than weight-limited; kept dry, cool, and insect-protected.',
  transportContext:
    'Low density means volume typically limits loads before weight does; bird-food lots are handled to protect seed appearance.',
  majorProducingRegions: [
    'South Asia',
    'North America',
    'Central Asia',
    'Middle East and North Africa',
    'Australia',
  ],
  majorTradingRegions: [
    'North America',
    'South Asia',
    'Central Asia',
    'Europe (importing region for bird food and oil)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1207.60',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Safflower (Carthamus tinctorius) seeds, whether or not broken.',
    },
    {
      system: 'FAOSTAT',
      code: '280',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Safflower seed".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'safflower' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Safflower as a minor oilseed and its uses' },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Safflower seed market types and commodity context',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Safflower seed and oil use in South Asian production and markets',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Trade conventions, bird-food standards, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'A reference description of a minor oilseed — not a grading determination, contract specification, or customs classification.',
    'No oil-content, hull-proportion, fatty acid, or moisture figures are given here — those are type-, lot-, and contract-specific.',
    'Safflower oil shares HS subheadings 1512.11 and 1512.19 with sunflower oil, so those codes do not identify safflower oil uniquely; no oil entry is published here.',
    'Region groupings here are indicative, and for a minor oilseed the pattern shifts between seasons.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Safflower Seed: A Minor Oilseed Commodity',
    description:
      'Safflower seed as a commodity: high-linoleic and high-oleic types, why the thick hull keeps crushing niche, the bird food outlet, quality, and storage.',
    keywords: [
      'safflower seed',
      'high oleic safflower',
      'minor oilseed',
      'bird food seed',
      'carthamus tinctorius',
    ],
  },
  structuredData: { article: true },
};
