import type { CommodityContent } from '@/types/content';

export const pigeonPeas: CommodityContent = {
  id: 'commodity-pigeon-peas',
  slug: 'pigeon-peas',
  contentType: 'commodity',
  title: 'Pigeon Peas',
  alternativeNames: [
    'Red gram',
    'Toor',
    'Arhar',
    'Tur',
    'Congo pea',
    'Gandule',
  ],
  category: 'Pulse commodity',
  subcategory: 'Dry pigeon pea grain',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Mature dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'pigeon-pea' },
  summary:
    'Pigeon peas are the dry seed of Cajanus cajan, traded overwhelmingly as a milling raw material. Almost all of the crop is dehulled and split into toor dal, and the difficulty of that milling — the seed coat clings — is the commodity’s defining commercial fact.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pigeon peas are a pulse whose commodity identity is inseparable from a single processing step. Very little pigeon pea is eaten whole. The seed is dehulled and split into dal — toor or arhar dal, a staple of Indian cooking — and the trade in whole pigeon peas is essentially a trade in raw material for mills.',
    },
    {
      type: 'paragraph',
      text: 'This matters because pigeon pea is difficult to mill. Its seed coat adheres tightly to the cotyledons, more tightly than in most pulses, and getting it off without shattering the seed into powder and fragments is the central technical challenge of the dal industry. A lot’s value is therefore a prediction about milling outturn — how much clean, whole split it will yield — and that prediction cannot be read off the seed’s appearance.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Pigeon pea (Cajanus cajan)' },
    { label: 'Harvested part', value: 'Mature dry seed threshed from the pod' },
    {
      label: 'Dominant pathway',
      value:
        'Dehulling and splitting into toor dal — the reason the commodity is bought',
    },
    {
      label: 'Defining difficulty',
      value: 'A tightly adhering seed coat, which makes clean milling hard',
    },
    {
      label: 'The value question',
      value: 'Milling outturn — the share recovered as whole clean split',
    },
    {
      label: 'Key quality attributes',
      value:
        'Milling outturn, seed size, moisture, insect damage, and foreign material',
    },
  ],
  sections: [
    {
      id: 'milling',
      heading: 'Why milling defines this commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Dal milling loosens the seed coat and separates the cotyledons. Because the pigeon pea coat clings, mills condition the seed before dehulling — the classic approaches involve alternating wetting and drying, and the application of oil or water treatments, to break the bond between coat and cotyledon. These are commercial processes refined over generations, and their effectiveness varies with the lot.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is that milling outturn is the number that matters in this trade, and it is genuinely uncertain at the point of purchase. Seed that was dried too hard, harvested immature, damaged by insects, or held badly mills worse, and the loss shows up as powder and broken fragments rather than as saleable split. Two lots that look alike can perform quite differently, which is why established mills buy on their own experience of origins and suppliers as much as on inspection.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The article is the split, not the seed',
          text: 'Whole pigeon peas are traded almost entirely to be milled. AgricultureID does not currently publish a toor dal entry, so this dominant pathway is described here rather than linked — it is real and central, but no product page exists to point at.',
        },
      ],
    },
    {
      id: 'trade-structure',
      heading: 'Trade structure',
      body: [
        {
          type: 'paragraph',
          text: 'The trade has an unusual geography. Consumption is heavily concentrated in South Asia, while a significant share of production for that market comes from East Africa and Myanmar, grown specifically for export to Indian mills. Supply therefore responds to a single destination market’s demand and policy, and Indian import measures — which change — have direct and rapid effects on growers thousands of kilometres away.',
        },
        {
          type: 'paragraph',
          text: 'Beyond South Asia, pigeon pea is a food crop across Africa and the Caribbean, where it is also eaten as a green vegetable pea harvested immature. That green form is a different commodity from the dry grain described here, harvested at a different stage for a different use.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Lots are described by seed size and uniformity, moisture, insect damage, immature and shrivelled seed, and foreign material — all read through the lens of what they imply for milling. Pod borer damage carried in from the field and bruchid damage developed in store both hollow the seed and cost outturn directly.',
        },
        {
          type: 'paragraph',
          text: 'Colour and appearance matter less than they do in a pulse sold whole, since the coat is destined for removal, but weathering and mould still signal a lot that will mill poorly. As with other pulses moving in international trade, live insects are a phytosanitary matter at the border rather than a discount at the mill gate, and requirements differ by destination.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Pigeon peas are stored dry and protected from insects, with bruchids the principal threat as in other pulses. The commodity carries a particular tension: seed dried very hard resists milling and shatters, while seed held moist moulds and attracts insects, so the storage window serves the mill as well as the store. Hermetic systems are used where insect pressure is high, and cool, dry, monitored storage is the standard elsewhere.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the climate, storage system, holding period, and intended milling. No universal target is given here; consult the applicable national pulse-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'seed'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Milling outturn',
    'Seed size and uniformity',
    'Moisture content',
    'Insect damage (pod borer and bruchid)',
    'Immature and shrivelled seed',
    'Foreign material',
  ],
  commonDefects: [
    'Bruchid damage and holed seed',
    'Pod borer damage carried from the field',
    'Shrivelled and immature seed',
    'Mould and storage fungi',
    'Broken seed',
    'Weather-stained seed',
    'Foreign material and other pulses',
  ],
  moistureContext:
    'Held within a window that serves both storage and milling: over-dried seed shatters and mills poorly, while moist seed moulds and favours insect development. Limits are set by market practice and contract.',
  storageContext:
    'Stored dry, cool, and insect-protected, with hermetic systems used where bruchid pressure is high; storage condition bears directly on milling outturn.',
  transportContext:
    'Moves in bags and containers on the East Africa and Myanmar to South Asia routes; phytosanitary requirements differ by destination and live insects are a border issue.',
  majorProducingRegions: [
    'South Asia',
    'East Africa',
    'Southeast Asia',
    'Caribbean and Central America',
  ],
  majorTradingRegions: [
    'South Asia (dominant importing and consuming region)',
    'East Africa',
    'Southeast Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.60',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Pigeon peas (Cajanus cajan), dried and shelled.',
    },
    {
      system: 'FAOSTAT',
      code: '197',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Pigeon peas".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'pigeon-pea' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Pigeon pea as a traded pulse and its food uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'icar',
      citedFor: 'Pigeon pea dal milling, conditioning, and outturn context',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Pigeon pea production and trade between East Africa and South Asia',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with consumption concentrated in South Asia. Grade conventions, import measures, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'A reference account of the commodity — not a grading determination, a milling specification, or a customs classification.',
    'No milling-outturn, moisture, or defect-tolerance figures are given here — they are lot-, mill-, and contract-specific. Conditioning practices are described at concept level, not reproduced as procedures.',
    'Import measures affecting this trade change frequently; confirm current rules with the applicable authority.',
    'The regions listed are indicative groupings; production grown for export to South Asian mills is not distinguished within them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pigeon Peas: Red Gram Traded for Dal Milling',
    description:
      'Pigeon peas as a commodity: why almost all the crop is milled into toor dal, the clinging seed coat that makes milling hard, trade routes, and storage.',
    keywords: ['pigeon peas', 'red gram', 'toor dal', 'arhar', 'dal milling'],
  },
  structuredData: { article: true },
};
