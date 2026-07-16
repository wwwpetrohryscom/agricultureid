import type { CommodityContent } from '@/types/content';

export const sunflowerSeed: CommodityContent = {
  id: 'commodity-sunflower-seed',
  slug: 'sunflower-seed',
  contentType: 'commodity',
  title: 'Sunflower Seed',
  alternativeNames: ['Sunflowerseed', 'Sunflower kernels (dehulled)'],
  category: 'Oilseed commodity',
  subcategory: 'Oilseed and confectionery types',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Achene (the dry, one-seeded fruit, traded as the seed)',
  sourceCrop: { type: 'crop', slug: 'sunflower' },
  summary:
    'Sunflower seed is the harvested achene of the sunflower, traded in two commercially distinct streams: small, dark oilseed types grown for crushing, and larger striped confectionery types grown for snack and bird-food markets.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sunflower seed is the traded fruit of Helianthus annuus. What buyers call the seed is botanically an achene: a hull enclosing a single kernel. That structure matters commercially, because almost everything done with the commodity — crushing, snacking, or kernel supply — begins with a decision about whether and how to remove the hull.',
    },
    {
      type: 'paragraph',
      text: 'The commodity splits into two markets that are not interchangeable. Oilseed types are small, black, thin-hulled, and destined for crushing into oil and meal. Confectionery types are larger, striped, thicker-hulled, and selected for size, appearance, and kernel fill for in-shell snacks, kernel supply, and bird food. A lot bought for one market will usually not satisfy the other.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Oilseed' },
    { label: 'Parent crop', value: 'Sunflower (Helianthus annuus)' },
    { label: 'Harvested part', value: 'Achene — hull plus kernel' },
    {
      label: 'Two market streams',
      value:
        'Oilseed types for crushing; confectionery types for food and bird feed',
    },
    {
      label: 'Principal uses',
      value:
        'Crushing for oil and meal, snack and kernel food use, bird food, seed',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, admixture, seed size and screen grade, damaged seed',
    },
    {
      label: 'Oil types',
      value: 'Linoleic, mid-oleic, and high-oleic, traded separately',
    },
  ],
  sections: [
    {
      id: 'the-two-streams',
      heading: 'Two commodities in one name',
      body: [
        {
          type: 'paragraph',
          text: 'Treating "sunflower seed" as a single commodity conceals a real commercial division. Oilseed-type lots are valued for what a crusher can extract from them and are bought on oil content, moisture, and admixture. Confectionery-type lots are valued for physical characteristics a crusher would not care about — seed length and width against screen sizes, hull appearance, kernel fill, and freedom from staining and insect injury.',
        },
        {
          type: 'paragraph',
          text: 'A further division cuts across both: fatty acid type. Linoleic, mid-oleic, and high-oleic sunflower produce oils with different stability and end uses, and lots are grown, segregated, and contracted by type. This is a property of the delivered seed and its identity preservation, not something a crusher can create.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Segregation is the product',
          text: 'For high-oleic and confectionery lots, the commercial value rests on identity being preserved from field to buyer. Once commingled with a commodity oilseed lot, the premium is gone and cannot be recovered by processing.',
        },
      ],
    },
    {
      id: 'crush-pathway',
      heading: 'The crushing pathway',
      body: [
        {
          type: 'paragraph',
          text: 'Crushing sunflower seed produces oil and meal together. Described at concept level, the seed is cleaned, usually dehulled to a chosen degree, conditioned and flaked, and the oil is then separated — commonly by pressing, by solvent extraction, or by pressing followed by extraction of the press cake. The de-oiled solids become meal.',
        },
        {
          type: 'paragraph',
          text: 'How much hull is removed before extraction is the central process choice, because hull dilutes the protein of the resulting meal and adds fibre. Plants therefore market sunflower meals at more than one specification, and the same seed can yield meaningfully different meals depending on that decision.',
        },
      ],
    },
    {
      id: 'quality-and-trading',
      heading: 'Quality and trading practice',
      body: [
        {
          type: 'paragraph',
          text: 'Oilseed lots trade on moisture, admixture and foreign material, and oil content, with damaged, sprouted, or mouldy seed reducing value. Confectionery lots add screen-size grading, colour and stripe definition, kernel fill, and freedom from insect damage and staining. Because the hull is bulky and the kernel is where the value sits, weight alone describes a lot poorly — which is why sizing and admixture are so prominent in sunflower trade.',
        },
        {
          type: 'paragraph',
          text: 'Standards and contract descriptions are national and versioned. Meeting one is a commercial description, not a food-safety clearance, and it does not guarantee performance in a particular crush or packing line.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower seed is low in bulk density and high in oil, a combination that makes it demanding in store. Oil-bearing seed does not tolerate heating: hot spots develop free fatty acids that cost the crusher, and in confectionery lots any heating shows up as off-flavour and rejected kernels. Fine hull debris and dust accumulate in bins and restrict airflow, so cleaning before storage is not optional housekeeping — it is what makes aeration work.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the seed type, climate, storage system, and holding period. AgricultureID gives no universal target; consult the applicable national oilseed-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['oil', 'food', 'feed', 'seed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Admixture and foreign material',
    'Oil content (oilseed types)',
    'Seed size against screen grades (confectionery types)',
    'Fatty acid type (linoleic, mid-oleic, high-oleic)',
    'Damaged and discoloured seed',
  ],
  commonDefects: [
    'Mould and storage fungi',
    'Heat-damaged seed',
    'Insect-damaged seed',
    'Sprouted seed',
    'Empty or poorly filled hulls',
    'Staining and discoloration (confectionery types)',
    'Hull debris and foreign material',
  ],
  moistureContext:
    'Traded and stored on a moisture basis; oil-bearing seed held too moist heats and develops free fatty acids. Limits are set by national standards and by contract.',
  storageContext:
    'Low bulk density and high oil content make cleaning, cooling, and monitoring central; hull debris restricts airflow and undermines aeration if not removed.',
  transportContext:
    'Moves in bulk and in bags; low density means volume rather than weight often limits loads, and confectionery lots are handled gently to protect hull appearance.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'Eastern Europe (Black Sea region)',
    'South America',
    'North America',
  ],
  majorTradingRegions: [
    'Black Sea region',
    'Europe',
    'South Asia (major oil importing region)',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1206.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sunflower seeds, whether or not broken.',
    },
    {
      system: 'FAOSTAT',
      code: '267',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Sunflower seed".',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'sunflower-oil' },
    { type: 'commodity-product', slug: 'sunflower-meal' },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sunflower seed as a traded oilseed and its processing pathway',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Sunflower seed trade streams and market types',
    },
    { sourceId: 'ahdb', citedFor: 'Oilseed quality and storage context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade descriptions, screen-size conventions, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This is reference information about the commodity; it does not grade a lot, specify a contract, or classify goods for customs.',
    'Screen sizes, admixture limits, and oil-content bases differ by market and contract; no figures are given here.',
    'The oilseed/confectionery division and the fatty acid types are commercial categories whose definitions vary between markets.',
    'Regions named here indicate where the commodity is grown and traded in quantity; they are not ranked and carry no volumes.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sunflower Seed: Oilseed and Confectionery Types',
    description:
      'Sunflower seed as a commodity: the oilseed and confectionery streams, high-oleic segregation, the crush into oil and meal, quality attributes, and storage.',
    keywords: [
      'sunflower seed',
      'confectionery sunflower',
      'high oleic sunflower',
      'oilseed commodity',
      'sunflower crush',
    ],
  },
  structuredData: { article: true },
};
