import type { CommodityContent } from '@/types/content';

export const milletGrain: CommodityContent = {
  id: 'commodity-millet-grain',
  slug: 'millet-grain',
  contentType: 'commodity',
  title: 'Millet Grain',
  alternativeNames: [
    'Millets',
    'Pearl millet grain',
    'Finger millet grain',
    'Proso millet',
  ],
  category: 'Cereal grain commodity',
  subcategory: 'Small-seeded millets',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (grain), threshed from the panicle or head',
  sourceCrop: { type: 'crop', slug: 'millet' },
  summary:
    'Millet grain covers several small-seeded cereals traded under one commercial name. Pearl, finger, proso, and foxtail millets are different species with different grain, and a lot is only meaningfully specified once the millet is named.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Millet is a commercial grouping, not a species. The name covers a set of small-seeded cereals from several genera — pearl millet, finger millet, proso millet, foxtail millet and others — that share small grain size, short growing seasons, and tolerance of hot, dry conditions, but little else. They differ in grain size, colour, structure, milling behaviour, and end use, and they are traded, priced, and consumed separately.',
    },
    {
      type: 'paragraph',
      text: 'That makes this entry deliberately general. Statements that hold across the millets are made here; statements that only hold for one of them are attributed to that millet by name. Anyone specifying a lot needs the species, not the word millet — a contract for millet without a named type has not described the goods.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    {
      label: 'Parent crop',
      value: 'Millet — several species across multiple genera',
    },
    { label: 'Harvested part', value: 'Caryopsis (grain)' },
    {
      label: 'Main traded types',
      value: 'Pearl, finger, proso, and foxtail millets',
    },
    {
      label: 'Principal uses',
      value:
        'Food staple in South Asia and the Sahel; feed and birdseed elsewhere',
    },
    {
      label: 'Key quality attributes',
      value: 'Species identity, moisture, purity, damage, foreign material',
    },
    {
      label: 'Specification requirement',
      value: 'The millet must be named; the group name is not a specification',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-covers',
      heading: 'What the commodity covers',
      body: [
        {
          type: 'paragraph',
          text: 'The millets that reach the market in quantity are distinct commodities behind a shared label. Pearl millet is the largest by volume and the staple of the Sahel and parts of India, with relatively large grey-white grain. Finger millet has very small red-brown seed and stores exceptionally well. Proso millet is the type most often traded into Western markets, much of it for birdseed rather than food. Foxtail millet has a long history in East Asia and is grown widely at small scale.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Name the millet',
          text: 'Grain size, colour, dehulling behaviour, flour properties, and keeping quality all differ between the millets. Any figure, tolerance, or process description that does not name the species should be treated as unreliable for a specific lot.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Where millets are staples, they are milled or pounded into flour for flatbreads, porridges, and stiff doughs, and fermented into traditional foods and beverages. Much of this processing happens at household or village scale, on hammer mills and hand tools rather than in industrial plants, which is one reason the millets have no large-scale commodity product chain of the kind wheat or maize have. In the temperate export trade the picture is different again: proso millet in particular moves largely as birdseed and pet food.',
        },
        {
          type: 'paragraph',
          text: 'No product pathways are asserted from this page. Millet flour is real and important, but it is species-specific and predominantly produced outside the industrial channel, and asserting a generic millet product would attach an edge to a commodity grouping rather than to a defined commodity. Where individual millets are given their own entries, their products can be modelled honestly.',
        },
        {
          type: 'list',
          items: [
            'Food — flour for flatbreads, porridges, and fermented preparations',
            'Food — whole cooked grain, particularly finger and foxtail millets',
            'Feed and birdseed — proso millet in the temperate export trade',
            'Beverage — traditional fermented drinks and malted preparations',
          ],
        },
      ],
    },
    {
      id: 'quality-and-trade-description',
      heading: 'Quality and trade description',
      body: [
        {
          type: 'paragraph',
          text: 'Because the millets are minor commodities in most jurisdictions, they are less often covered by detailed public grade standards than wheat, maize, or rice, and lots are frequently traded against buyer specifications instead. Those specifications turn on the same fundamentals — species and variety identity, moisture, purity, freedom from other grains and foreign material, colour and uniformity, and the proportion of shrivelled, damaged, or immature seed.',
        },
        {
          type: 'paragraph',
          text: 'Small grain size makes cleaning both harder and more important. Sand, soil, and small stones fall in the same size range as the grain and are not removed by screening alone, which is why gravity separation matters and why field drying practice — whether the grain touches bare soil — has a direct bearing on how clean a lot can be made.',
        },
      ],
    },
    {
      id: 'drying-storage-and-loss',
      heading: 'Drying, storage, and loss',
      body: [
        {
          type: 'paragraph',
          text: 'Millets are grown mostly where drying is done in the sun and storage is a bag or a traditional structure rather than an aerated silo. In that setting the loss risks are concrete: insects entering during a long storage season, re-wetting during unexpected rain, rodents, and moulds in grain binned before it was dry. Finger millet is a recognised exception — its very small, hard seed is known for keeping well over long periods, which is part of why it has a food-security role in the regions that grow it.',
        },
        {
          type: 'paragraph',
          text: 'Hermetic storage translates well to these conditions because it does not depend on power or on aeration, and threshing quality matters more than it might appear: grain damaged in threshing gives insects an entry point that intact seed does not.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed'],
  secondaryUses: ['beverage', 'seed'],
  majorQualityAttributes: [
    'Species and type identity',
    'Moisture content',
    'Purity and freedom from other grains',
    'Colour and uniformity',
    'Shrivelled and immature seed',
    'Sand, soil, and foreign material',
  ],
  commonDefects: [
    'Foreign material, particularly sand and small stones',
    'Admixture of other millets or grains',
    'Insect damage in store',
    'Mould from grain stored before drying',
    'Shrivelled and immature grain',
    'Threshing damage',
  ],
  moistureContext:
    'Usually sun dried after threshing and stored on a moisture basis suited to a long bag-storage season; targets depend on the millet, the climate, and local guidance.',
  storageContext:
    'Held in bags and traditional structures more often than in aerated silos; insects, rodents, and re-wetting are the dominant risks, and hermetic systems suit the setting well.',
  transportContext:
    'Moves mainly in bags in domestic staple markets; proso millet moves in bulk in the temperate birdseed and feed trade.',
  majorProducingRegions: [
    'Sub-Saharan Africa (Sahel)',
    'South Asia',
    'East Asia',
    'Europe and Central Asia',
  ],
  majorTradingRegions: [
    'South Asia',
    'Sub-Saharan Africa',
    'North America and Europe (birdseed and feed trade)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1008.29',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Millet, other than seed. Millet for sowing falls under 1008.21. The subheading covers the millets as a group, not an individual species.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'teff-grain' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Millets as traded cereals, their food uses, and storage context',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Millet species differences and grain quality in the semi-arid tropics',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Millet types, processing, and post-harvest handling in South Asia',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for millet as a statistical grouping',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with staple use concentrated in the Sahel, South Asia, and East Asia. Standards and tariff subheadings treat millet as a group.',
  limitations: [
    'Millet is a commercial and statistical grouping of several species; this entry describes the group and names species where a statement applies to only one.',
    'Because the group is heterogeneous, no grain-size, composition, or tolerance figures are given — a specification must name the millet.',
    'Many millets lack detailed public grade standards in most jurisdictions and are traded against buyer specifications instead.',
    'No product pathways are asserted here: millet processing is species-specific and largely non-industrial, and a generic edge would misrepresent it.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Millet Grain: Traded Small-Seeded Cereals',
    description:
      'Millet grain as a commodity group: pearl, finger, proso and foxtail millets compared, why a lot must name its species, and cleaning, drying and storage.',
    keywords: [
      'millet grain',
      'pearl millet',
      'finger millet',
      'proso millet',
      'millet storage',
    ],
  },
  structuredData: { article: true },
};
