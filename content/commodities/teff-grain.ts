import type { CommodityContent } from '@/types/content';

export const teffGrain: CommodityContent = {
  id: 'commodity-teff-grain',
  slug: 'teff-grain',
  contentType: 'commodity',
  title: 'Teff Grain',
  alternativeNames: ['Teff', "T'ef", 'Tef', 'Eragrostis grain'],
  category: 'Cereal grain commodity',
  subcategory: 'Teff',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Caryopsis (grain) — the smallest of the cultivated cereal grains',
  sourceCrop: { type: 'crop', slug: 'teff' },
  summary:
    'Teff grain is the caryopsis of an Ethiopian cereal and the smallest cultivated grain in the world. Its size means it is milled whole rather than fractionated, and it is the base of injera, the staple bread of Ethiopia and Eritrea.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Teff is a cereal of the Horn of Africa, grown at scale essentially only in Ethiopia and Eritrea, where it is the grain of injera — the large, spongy, fermented flatbread that anchors the national cuisine. It is a true grass and a true cereal, and its defining physical property is size: the grain is so small that a great many of them weigh what a single wheat kernel does.',
    },
    {
      type: 'paragraph',
      text: 'That size has one overriding commercial consequence. Teff cannot practically be fractionated the way larger cereals are — separating bran, germ, and endosperm from a grain that small is not economic — so it is milled whole. Every teff flour is therefore a wholegrain flour, not by choice or marketing but by physics, which is unusual among traded cereals and explains much of the commodity behaviour that follows.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Teff (Eragrostis tef)' },
    { label: 'Harvested part', value: 'Caryopsis (grain)' },
    {
      label: 'Defining property',
      value:
        'The smallest cultivated cereal grain, milled whole rather than fractionated',
    },
    {
      label: 'Principal use',
      value:
        'Food — flour for injera, the staple bread of Ethiopia and Eritrea',
    },
    {
      label: 'Production concentration',
      value:
        'Overwhelmingly Ethiopia, with Eritrea and small export plantings elsewhere',
    },
    {
      label: 'Key quality attributes',
      value: 'Colour, purity, moisture, freedom from soil and sand',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Teff grain is traded principally by colour. White teff is the most valued in Ethiopian markets and commands a premium; brown and mixed teffs are cheaper and widely eaten. The colour grades are commercial and consumer-driven, and they carry through into the flour and into the injera, whose appearance is the visible result of the grain that went into it. Beyond colour, teff is bought on cleanliness and moisture, since there is little else to measure in a grain too small to assess kernel by kernel.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Whole-grain by necessity',
          text: 'Teff is not fractionated into bran, germ, and endosperm because the grain is too small for the separation to be practical. Teff flour is wholegrain as a matter of processing reality, not of product positioning.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant use is injera. Teff flour is mixed with water and left to ferment for days, and the fermented batter is poured onto a clay griddle to make the bread; the process is a defining feature of the commodity chain rather than a downstream detail, because it is what almost all teff is for. Teff also appears in porridges and traditional beverages, and it has a small but growing export market as a gluten-free wholegrain, sold as grain and as flour.',
        },
        {
          type: 'paragraph',
          text: 'A second, genuinely important use has nothing to do with the grain. Teff straw is prized as livestock feed and as a binder in mud construction, and its value is a real part of the economics of growing the crop. It is a separate harvested product from the same plant, not a product of this commodity, and it is noted rather than modelled here.',
        },
        {
          type: 'list',
          items: [
            'Food — wholegrain flour fermented into injera',
            'Food — porridges and traditional preparations',
            'Food — export sales as a gluten-free wholegrain and flour',
            'Beverage — traditional fermented drinks',
          ],
        },
        {
          type: 'paragraph',
          text: 'No product pathway is asserted from this page. Teff flour is real and is essentially the only industrial transformation of the commodity, but it has no entry on the platform yet, and an edge is created here only when both ends of it are documented.',
        },
      ],
    },
    {
      id: 'cleanliness-and-quality',
      heading: 'Cleanliness and quality',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant quality problem in the teff trade is contamination with soil, sand, and small stones. The grain is smaller than much of the mineral material it is threshed and dried alongside, so screening — which works by size — cannot separate them, and the fine grit that remains ends up in the flour and in the injera. Cleaning teff therefore depends on density-based separation and washing rather than on the screen decks that clean a wheat lot, and it is laborious.',
        },
        {
          type: 'paragraph',
          text: 'This traces directly to how the grain is handled: teff is commonly threshed on prepared ground and sun dried on surfaces that may be swept earth, and every point of contact with bare soil adds to the load. Weed seeds in the same size range are a parallel problem for the same reason. There is no widely applied public grade standard for teff of the kind the major cereals have; lots are bought on colour, cleanliness, and moisture, assessed by the buyer.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling context',
      body: [
        {
          type: 'paragraph',
          text: 'Teff is sun dried after threshing and stored dry in bags and traditional structures, and it stores reasonably well when it is properly dried — the small, hard grain gives storage insects less to work with than a large soft kernel does. The handling hazards are those of a very fine grain: it flows almost like a liquid, escapes through gaps that would hold any other cereal, and generates dust, so container integrity and bag quality matter more than they would for a coarser grain.',
        },
        {
          type: 'paragraph',
          text: 'Because production is geographically concentrated and domestic demand is high, most teff never enters international trade at all. Export volumes are small, have at times been restricted by Ethiopian policy to protect domestic supply, and are supplied partly from plantings established outside the region.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Grain colour (white, mixed, brown)',
    'Freedom from soil, sand, and stones',
    'Moisture content',
    'Weed seed content',
    'Uniformity',
  ],
  commonDefects: [
    'Soil, sand, and grit that screening cannot remove',
    'Weed seeds of similar size to the grain',
    'Mould from grain stored before it was dry',
    'Insect damage in store',
    'Colour mixing that lowers the grade',
  ],
  moistureContext:
    'Sun dried after threshing and stored dry; no widely applied public standard sets a limit, so moisture is assessed against local practice and the buyer requirement.',
  storageContext:
    'Held in bags and traditional structures; the small, hard grain stores well when properly dried, but its fineness means containers must be genuinely tight.',
  transportContext:
    'Moves mainly in bags in domestic Ethiopian and Eritrean markets; international trade is small and has at times been policy-restricted.',
  majorProducingRegions: [
    'Ethiopia',
    'Eritrea',
    'Small export plantings in North America, Europe, and Australia',
  ],
  majorTradingRegions: [
    'Ethiopia and Eritrea (domestic markets)',
    'Diaspora and speciality markets in North America and Europe',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1008.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Teff is not named at 6-digit level and falls within "other cereals". Confirm national classification, which may subdivide further.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'millet-grain' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Teff as an Ethiopian staple cereal, its uses, and trade context',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Teff grain characteristics and post-harvest handling constraints',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Placement of Eragrostis tef within the grasses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for teff within cereal statistics',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Production and consumption are concentrated in Ethiopia and Eritrea; export markets are small. Classification below the HS heading is national.',
  limitations: [
    'This entry describes the commodity; it is not a grading determination, milling specification, or customs classification.',
    'No grain-weight, moisture, or contamination figures are given: teff has no widely applied public grade standard and is bought on buyer assessment.',
    'Teff is not named at 6-digit level in the HS nomenclature and falls within the residual "other cereals" subheading; national tariffs may subdivide it differently.',
    'Teff straw is a valuable separate harvested product of the same crop and is not modelled as a product of this commodity.',
    'Export policy affecting teff has changed over time; trade statements here are general context, not a current statement of the rules in force.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Teff Grain: The Smallest Cereal Commodity',
    description:
      'Teff grain as a commodity: the smallest cultivated cereal, milled whole because it cannot be fractionated. Covers injera, colour grades, grit, and storage.',
    keywords: [
      'teff grain',
      'teff commodity',
      'injera',
      'Eragrostis tef',
      'teff cleaning',
    ],
  },
  structuredData: { article: true },
};
