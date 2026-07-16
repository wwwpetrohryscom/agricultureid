import type { CommodityContent } from '@/types/content';

export const flaxseed: CommodityContent = {
  id: 'commodity-flaxseed',
  slug: 'flaxseed',
  contentType: 'commodity',
  title: 'Flaxseed',
  alternativeNames: ['Linseed', 'Common flax seed', 'Alsi'],
  category: 'Oilseed commodity',
  subcategory: 'Drying-oil and food oilseed',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Flat, glossy seed threshed from the boll (capsule)',
  sourceCrop: { type: 'crop', slug: 'flax' },
  summary:
    'Flaxseed, also called linseed, is the seed of Linum usitatissimum, crushed principally for an oil that dries by oxidation. The two names are not separate commodities: the seed is generally called flaxseed in food markets and linseed in industrial ones.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flaxseed is the flat, glossy seed threshed from the capsules of the flax plant. It is one of the older oilseeds in commerce, and it is traded for an oil with a property most food oils are bred to avoid: it dries. Exposed in a thin film, linseed oil oxidises and polymerises into a solid, which is exactly what a paint, a varnish, or a linoleum floor requires.',
    },
    {
      type: 'paragraph',
      text: 'Two naming points need care. First, flaxseed and linseed are the same seed under different market names — flaxseed dominates where the food and omega-3 trade is meant, linseed where oil for industrial use is meant — and the usage is a convention, not a botanical or grade distinction. Second, flax is a dual-purpose plant: fibre flax and oil flax are grown as different types for different products, and this entry is the seed commodity, not the fibre.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Oilseed' },
    { label: 'Parent crop', value: 'Flax (Linum usitatissimum)' },
    { label: 'Harvested part', value: 'Seed threshed from the boll' },
    {
      label: 'Naming',
      value:
        'Flaxseed in food markets; linseed in industrial oil markets — one seed',
    },
    {
      label: 'Defining property',
      value: 'Yields a drying oil that oxidises and polymerises in air',
    },
    {
      label: 'Principal uses',
      value: 'Crushing for oil, food and whole-seed use, feed, and seed',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, oil content, admixture, damaged and heated seed',
    },
  ],
  sections: [
    {
      id: 'one-seed-two-markets',
      heading: 'One seed, two markets',
      body: [
        {
          type: 'paragraph',
          text: 'The industrial market wants oil that dries hard and predictably, and it buys on oil content and the oil’s drying behaviour. The food market wants whole or milled seed and cold-pressed oil, bought on cleanliness, freshness, and freedom from rancidity, and sold on the strength of the seed’s alpha-linolenic acid content and its dietary fibre. The same field can supply either, but the specifications, handling standards, and buyers diverge completely once the lot is directed.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A convention, not a grade',
          text: 'Nothing in a grade standard distinguishes "flaxseed" from "linseed". The words track which market is being addressed. A reference source should say so rather than imply a technical difference that does not exist.',
        },
        {
          type: 'paragraph',
          text: 'Brown and golden (yellow) seed types are traded, and the difference is mostly one of appearance for food presentation rather than of processing behaviour — golden types are favoured where the visible seed matters in the finished food.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Crushing is the dominant pathway, and linseed oil is the intended output — the reason the crush is run. The cake or meal remaining afterwards is fed to livestock, principally ruminants, and it is a real market rather than a disposal route; AgricultureID does not yet publish a linseed cake entry, so that pathway is described here rather than linked.',
        },
        {
          type: 'list',
          items: [
            'Industrial oil — paints, varnishes, wood finishes, putty, and linoleum',
            'Food — whole and milled seed in bakery, cereals, and as a dietary fibre and omega-3 source',
            'Food — cold-pressed flaxseed oil, sold as a nutritional oil',
            'Feed — linseed cake and whole seed in ruminant rations',
            'Seed — retained or certified for planting',
          ],
        },
      ],
    },
    {
      id: 'quality-and-composition-context',
      heading: 'Quality attributes and composition context',
      body: [
        {
          type: 'paragraph',
          text: 'Lots are described by moisture, oil content, admixture and foreign material, and damaged, heated, or sprouted seed. Because the oil is highly unsaturated, seed that heats in store loses value quickly: free fatty acids rise and the oil’s condition deteriorates, and for a food lot that is a rejection, not a discount.',
        },
        {
          type: 'paragraph',
          text: 'Flaxseed contains cyanogenic glycosides — naturally occurring compounds documented in the food-safety literature as a consideration for both food and feed use of the seed. This entry states that the consideration exists and stops there. Any limits, tolerable intakes, processing effects, or acceptance criteria are matters for the applicable food and feed safety authorities, and they differ by jurisdiction and are revised.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A consideration noted, not quantified',
          text: 'No limits, intake figures, or processing claims relating to cyanogenic glycosides in flaxseed are published here. Consult the applicable food or feed safety authority.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Flaxseed is small, flat, and slippery — it flows very freely, packs densely, and finds gaps in bins and equipment that hold a cereal without trouble. That dense packing restricts airflow, so aeration is less effective than in coarse grain, and hot spots are correspondingly harder to manage. The seed also develops mucilage when wetted, which makes any moisture ingress in store or in transit a sticky, spoiling problem rather than merely a damp one.',
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
  primaryUses: ['oil', 'food', 'feed', 'seed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Oil content',
    'Admixture and foreign material',
    'Damaged and heated seed',
    'Free fatty acid content',
    'Seed type and colour (brown or golden)',
  ],
  commonDefects: [
    'Heat-damaged seed',
    'Sprouted seed',
    'Mould and storage fungi',
    'Immature and green seed',
    'Rancid seed',
    'Admixture and foreign material',
  ],
  moistureContext:
    'Traded and stored on a moisture basis; dense packing limits aeration, and wetted seed develops mucilage that compounds spoilage. Limits are set by national standards and contracts.',
  storageContext:
    'Stored in bulk; free-flowing and small enough to escape through gaps, dense-packing and therefore poorly aerated, and intolerant of heating because of the oil’s unsaturation.',
  transportContext:
    'Moves in bulk and in containers; food-destined lots are handled to tighter cleanliness standards than industrial crushing lots.',
  majorProducingRegions: [
    'North America',
    'Europe and Central Asia',
    'South Asia',
    'Middle East and North Africa',
  ],
  majorTradingRegions: [
    'North America',
    'Europe',
    'Central Asia',
    'East Asia (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1204.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Linseed, whether or not broken.',
    },
    {
      system: 'FAOSTAT',
      code: '333',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Linseed".',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'linseed-oil' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'flax' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Flax as an oilseed and the uses of linseed oil',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Flaxseed grading attributes and commodity handling context',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Cyanogenic glycosides in linseed as a documented food and feed consideration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, food and feed safety requirements, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'Reference information about the traded seed; it does not grade lots, assess food safety, or classify goods for customs.',
    'No cyanogenic glycoside limits, oil-content, or moisture figures are given here — authorities, standards, and contracts set them.',
    'The flaxseed/linseed naming convention is descriptive of market usage and is not applied uniformly by every trader or jurisdiction.',
    'The producing and trading regions given are broad groupings; they are not ordered by size and carry no data.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Flaxseed (Linseed): The Drying-Oil Oilseed',
    description:
      'Flaxseed as a commodity: why flaxseed and linseed name one seed in two markets, the drying oil it yields, food and industrial pathways, quality, and storage.',
    keywords: [
      'flaxseed',
      'linseed',
      'drying oil',
      'flaxseed commodity',
      'golden flax',
    ],
  },
  structuredData: { article: true },
};
