import type { CommodityContent } from '@/types/content';

export const greenCoffee: CommodityContent = {
  id: 'commodity-green-coffee',
  slug: 'green-coffee',
  contentType: 'commodity',
  title: 'Green Coffee',
  alternativeNames: ['Green coffee beans', 'Unroasted coffee', 'Raw coffee'],
  category: 'Beverage crop commodity',
  subcategory: 'Dried, hulled seed',
  commodityClass: 'beverage-crop',
  physicalForm: 'bean',
  harvestedPart:
    'Seed of the coffee cherry, dried and hulled — the internationally traded form',
  sourceCrop: { type: 'crop', slug: 'coffee' },
  summary:
    'Green coffee is the dried, hulled coffee seed: the form in which coffee crosses borders, sits in warehouses, and is priced on world markets. It is a storable commodity graded by origin, screen size, defect count, and cup quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Green coffee is the coffee commodity. When the trade press quotes a coffee price, when a container of coffee crosses an ocean, when a warehouse holds coffee stock, the thing in question is green coffee — the dried, hulled seed, still unroasted, stable for months, and traded in bags and bulk liners between producing and consuming countries. Everything before it is producing-country business; everything after it is roasting.',
    },
    {
      type: 'paragraph',
      text: 'It arrives at this state through processing rather than through any product transformation of the cherry commodity: the fresh cherry is pulped or dried, the bean is dried down to a stable moisture, and the parchment and remaining layers are hulled away, leaving the green bean. AgricultureID models green coffee and coffee cherries as two commodities of the coffee crop, linked by that processing, rather than as commodity and product — because green coffee is a distinct traded form of the harvested seed, not a manufactured output.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Beverage crop (dried seed)' },
    {
      label: 'Parent crop',
      value: 'Coffee (Coffea arabica and Coffea canephora)',
    },
    {
      label: 'What it is',
      value: 'The dried, hulled coffee seed, unroasted and storable',
    },
    {
      label: 'Two commercial species',
      value: 'Arabica and robusta, priced and specified separately',
    },
    {
      label: 'Graded on',
      value:
        'Origin, screen size, defect count, and — for specialty — cup score',
    },
    {
      label: 'Comes from',
      value: 'Coffee cherries, via wet or dry processing and hulling',
    },
    {
      label: 'Trade character',
      value: 'One of the most actively traded agricultural commodities',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A green coffee lot is dried, hulled beans identified by origin, species, processing method, crop year, and grade. Two species carry the commercial trade. Arabica is the higher-priced, more aromatic, more demanding species, grown at altitude; robusta is hardier, higher in caffeine, harsher in the cup, and cheaper, and dominates instant coffee and blends. They trade on separate markets at separate prices and are never treated as interchangeable.',
        },
        {
          type: 'paragraph',
          text: 'Processing method travels with the lot as part of its identity, because a washed and a natural coffee from the same farm are recognisably different products. So does crop year: coffee ages, and a fresh crop and a past crop are distinguished commercially even where the older lot is perfectly sound.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Green coffee is not a product of coffee cherries',
          text: 'It is a second commodity of the coffee crop — the harvested seed in its traded, stabilised form. Processing links the two, but the relationship is not a commodity-to-product transformation, and AgricultureID does not model it as one.',
        },
      ],
    },
    {
      id: 'grading',
      heading: 'How green coffee is graded',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee grading is unusual in combining physical measurement with sensory assessment. The physical side counts and classifies defects in a sample — black beans, sour beans, insect-damaged beans, broken beans, and foreign matter — and screens the beans by size, since a lot of uniform size roasts evenly and a mixed one does not. Density, colour, and moisture are assessed alongside.',
        },
        {
          type: 'paragraph',
          text: "The sensory side is cupping: the coffee is roasted, brewed, and tasted under a standardised procedure, and scored. For the specialty trade the cup score is the grade that matters most, and a lot with a perfect defect count and a dull cup will not command a specialty price. Grading systems are national and vary widely — origins classify by altitude, by screen, by defect count, or by combinations of these — so a grade name means something only in the context of its origin's system.",
        },
        {
          type: 'list',
          items: [
            'Black and sour beans — the classic primary defects, from overripe or damaged cherries',
            'Insect-damaged beans, notably from the coffee berry borer',
            'Broken, chipped, and cut beans from hulling and handling',
            'Foreign matter — stones, sticks, and husk fragments',
            'Faded, bleached, and mouldy beans from drying or storage problems',
            'Uneven screen size within a lot, causing uneven roasting',
          ],
        },
      ],
    },
    {
      id: 'moisture-and-storage',
      heading: 'Moisture, storage, and ageing',
      body: [
        {
          type: 'paragraph',
          text: 'Green coffee behaves like other dried seed commodities: it is hygroscopic, and its moisture governs whether it stores safely. Dried insufficiently, it moulds and carries an ochratoxin risk that importing jurisdictions regulate; dried too far or too fast, the bean is damaged and the cup suffers. The moisture band that satisfies both constraints is narrow, and it is set by contract and by origin standard rather than by any universal figure.',
        },
        {
          type: 'paragraph',
          text: "Even correctly dried and stored, green coffee ages. It fades in colour, loses aroma and acidity, and develops the flat, woody character the trade calls past crop — not spoilage, just decline, and it is why crop year is part of a lot's identity. Storage in warehouses at origin and destination is managed against humidity, temperature, and taint, coffee being notably good at absorbing odours from whatever it is stored beside. Hermetic and vacuum packaging is used to slow the decline for high-value lots.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No moisture or storage figures here',
          text: 'Safe moisture, storage conditions, and mycotoxin limits for green coffee are set by contracts, origin standards, and food-safety authorities. AgricultureID publishes no thresholds; consult the standard in force and sourced post-harvest guidance.',
        },
      ],
    },
    {
      id: 'trade-and-uses',
      heading: 'Trade and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Green coffee moves from producing countries to roasters, mostly in bags in containers, increasingly in bulk liners, and — for the highest-value lots — in vacuum or barrier packaging. Its price is discovered on futures markets for the two species, with physical lots trading at a differential to the market that reflects origin, grade, certification, and quality. This makes green coffee one of the very few agricultural commodities whose price a consumer might read about in a newspaper.',
        },
        {
          type: 'paragraph',
          text: 'Essentially all of it is roasted for drinking, whether as roast and ground coffee or as the feedstock for soluble and instant manufacture, which draws heavily on robusta. Decaffeination is applied to green coffee before roasting and yields caffeine as a recovered by-product for other industries. The husks and hulls left at the dry mill are used locally for fuel, mulch, and — as cascara — a beverage in their own right.',
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['industrial', 'food'],
  majorQualityAttributes: [
    'Species (arabica or robusta) and origin',
    'Screen size and uniformity',
    'Defect count in the sample',
    'Cup score under standardised assessment',
    'Moisture content',
    'Crop year and freshness',
  ],
  commonDefects: [
    'Black and sour beans',
    'Insect-damaged beans',
    'Broken and chipped beans',
    'Foreign matter',
    'Mouldy and faded beans',
    'Past-crop flatness in aged lots',
  ],
  moistureContext:
    'Green coffee is traded on a moisture basis: too moist and moulds and ochratoxin risk follow in store, too dry and the bean is damaged and the cup declines. Bands are set by contract and origin standard.',
  storageContext:
    'Stored in bags and bulk in warehouses at origin and destination, managed against humidity, heat, and taint; hermetic and vacuum packaging is used to slow ageing in high-value lots.',
  transportContext:
    'Ships in jute or woven bags and in bulk container liners on long ocean routes; the commodity is highly susceptible to taint and to condensation damage in containers.',
  majorProducingRegions: [
    'South and Central America',
    'Southeast Asia',
    'East and West Africa',
    'The Pacific and the Caribbean',
  ],
  majorTradingRegions: [
    'South America and Southeast Asia (dominant exporting regions)',
    'Europe and North America (major importing markets)',
    'East Asia',
    'The Middle East',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0901.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Coffee, not roasted, not decaffeinated. Decaffeinated unroasted coffee falls under a separate subheading.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'coffee-cherries' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['perennial-crop', 'cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Green coffee as the internationally traded form and its post-harvest handling',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Green coffee trade flows, species split, and market reporting',
    },
    {
      sourceId: 'worldbank',
      citedFor: 'Coffee commodity market and price discovery context',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'General reference on coffee species and commercial preparation',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grading systems are national and differ substantially between origins; food-safety limits are jurisdiction-specific.',
  limitations: [
    'This is a reference account of the traded bean; it is not a grading or cupping determination, a contract specification, or a customs classification.',
    'Grading systems vary by origin and are not interchangeable; no grade thresholds, defect counts, or cup scores are reproduced here.',
    'No moisture bands, storage conditions, or mycotoxin limits are given — these are set by contracts, origin standards, and food-safety authorities.',
    'The exporting and importing regions given are indicative groupings, not a ranking by volume or value.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Green Coffee: The Traded Unroasted Bean',
    description:
      'Green coffee as a commodity: the dried, hulled bean that crosses borders. Arabica and robusta, screen size and defect grading, cupping, moisture, and ageing.',
    keywords: [
      'green coffee',
      'unroasted coffee',
      'coffee grading',
      'arabica robusta',
      'coffee cupping',
    ],
  },
  structuredData: { article: true },
};
