import type { CommodityContent } from '@/types/content';

export const tableGrapes: CommodityContent = {
  id: 'commodity-table-grapes',
  slug: 'table-grapes',
  contentType: 'commodity',
  title: 'Table Grapes',
  alternativeNames: ['Fresh grapes', 'Dessert grapes', 'Eating grapes'],
  category: 'Fresh fruit commodity',
  subcategory: 'Vine fruit for fresh consumption',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Bunch (the intact cluster of berries on its stem framework)',
  sourceCrop: { type: 'crop', slug: 'grape' },
  summary:
    'Table grapes are bunches of fresh grape berries traded for eating. They are non-climacteric, so they never sweeten after cutting, and the bunch — berries plus its green stem framework — must arrive intact, which makes harvest timing and an unbroken cold chain the whole commercial game.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Table grapes are the fresh vine fruit traded for eating, cut from the vine as whole bunches and handled as bunches from that moment on. The unit of trade is not the berry but the cluster: a bunch with shattered berries, a browned stem, or uneven colour is downgraded even when every berry on it is sound. This makes table grapes unusual among fresh fruit — the commodity carries its own presentation with it.',
    },
    {
      type: 'paragraph',
      text: 'Grapes do not ripen after harvest. Sugar accumulates on the vine and stops when the bunch is cut, so the eating quality of a table-grape lot is fixed at the moment of picking and can only decline thereafter. Everything the trade does after harvest is preservation, not improvement. This entry describes the harvested commodity; the viticulture that produced it belongs to the grape crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    {
      label: 'Parent crop',
      value: 'Grape (Vitis vinifera and related species)',
    },
    {
      label: 'Unit of trade',
      value: 'The intact bunch, not the individual berry',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: no further ripening or sweetening after picking',
    },
    {
      label: 'Quality basis',
      value:
        'Berry size, colour, firmness, bunch integrity, and stem freshness',
    },
    {
      label: 'Distinguished from',
      value:
        'Wine grapes, a separate commodity judged on vinification potential',
    },
    {
      label: 'Principal dried product',
      value: 'Raisins, from drying the fresh berries',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A table-grape lot is a quantity of bunches of a declared cultivar, trimmed and packed to a specification covering berry size, colour, and bunch weight. Cultivar drives almost everything the buyer cares about: berry size and shape, skin colour, seededness, texture, and how well the bunch holds together in transit. Seedless cultivars dominate much of the modern fresh trade, and the same seedless cultivars are frequently the ones dried into raisins, which is why a single vineyard block can serve either outlet.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Table grapes and wine grapes are different commodities',
          text: 'Both come from the grape crop, but they are bought on incompatible criteria. Table grapes are judged on the appearance and eating quality of an intact bunch; wine grapes are judged on sugar, acid, and phenolic composition for fermentation, and arrive at the winery crushed. Neither substitutes for the other, and AgricultureID models them as two commodities under one crop.',
        },
      ],
    },
    {
      id: 'harvest-and-maturity',
      heading: 'Harvest maturity and why it is final',
      body: [
        {
          type: 'paragraph',
          text: 'Because the berry is non-climacteric, it draws sugar from the vine until the bunch is cut and not one moment longer. A bunch harvested before it has accumulated enough sugar will never become sweeter, and no ripening room, ethylene treatment, or holding period will change that. Harvest maturity for table grapes is therefore assessed on the vine, on sampled bunches, using sugar and acid balance together with berry colour and firmness.',
        },
        {
          type: 'paragraph',
          text: 'Picking is done by hand, bunch by bunch, and much of the trimming and initial selection happens at the vine or at a field station rather than at a distant packhouse — the fruit is too easily damaged to justify extra handling steps. Bunches are cut, trimmed of undersized and defective berries, and moved into cooling quickly, because the stem framework begins to lose water and brown from the moment it is severed.',
        },
      ],
    },
    {
      id: 'cooling-and-transport',
      heading: 'Cooling, packaging, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Table grapes are precooled promptly after picking and then held and shipped under an unbroken cold chain. Two things degrade in parallel: the berries soften and detach, and the stems dry, brown, and become brittle. Stem condition is the visible clock on a bunch — buyers read a green, pliable stem as a lot that has been handled well, and a dry brown one as a lot that has not.',
        },
        {
          type: 'paragraph',
          text: 'Grey mould is the principal decay threat in stored and shipped grapes, and it spreads from berry to berry within a bunch. The trade addresses this with rapid cooling, careful trimming out of damaged berries, and packaging systems — including modified-atmosphere liners and sulphur dioxide-releasing pads in some markets — whose use and permitted residues are regulated jurisdictionally. Packaging also carries a mechanical job: it must hold the bunch still, because berry shatter is caused by movement.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Storage conditions are not published here',
          text: 'Optimum temperature, humidity, and permitted post-harvest treatments for table grapes are cultivar- and market-specific and are set by sourced post-harvest guidance and national regulation. No universal figures are given on this page.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Grading assesses the bunch as a whole and the berries on it. Berry size and uniformity, skin colour and its evenness across the bunch, berry firmness and attachment, and the freshness of the stem are all judged. Bunch weight and compactness matter for packing, and a bunch that is too loose or too straggly is trimmed or rejected regardless of berry quality.',
        },
        {
          type: 'list',
          items: [
            'Berry shatter — berries detaching from the stem in transit',
            'Stem browning and desiccation — the clearest visual marker of an aged lot',
            'Grey mould and other decay spreading within the bunch',
            'Cracked and split berries, often entry points for decay',
            'Uneven colour development and undersized berries within a bunch',
            'Bruising and crush damage from handling and over-packing',
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Table grapes are overwhelmingly sold as fresh fruit for eating. The principal transformation pathway is drying: the same berries, dried in the sun or in dehydrators, become raisins, a storable commodity product with a completely different handling profile from the fresh bunch. Fruit that fails fresh-market grade on bunch presentation but is otherwise sound is a common feedstock for drying, and some is pressed for juice.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh bunches for the dessert trade',
            'Drying — raisins and other dried vine fruit',
            'Beverage — pressing of off-grade fruit into juice',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage'],
  majorQualityAttributes: [
    'Berry size and uniformity',
    'Skin colour and its evenness across the bunch',
    'Berry firmness and attachment to the stem',
    'Stem freshness and pliability',
    'Bunch weight and compactness',
    'Sugar and acid balance at harvest',
  ],
  commonDefects: [
    'Berry shatter',
    'Stem browning and drying',
    'Grey mould and other decay',
    'Split and cracked berries',
    'Uneven colouring',
    'Handling bruises and crushed berries',
  ],
  moistureContext:
    'Water loss after harvest shows first in the stem framework, which browns and becomes brittle long before the berries visibly shrivel; humidity management in the cold chain addresses this.',
  storageContext:
    'Precooled quickly and held under refrigeration with humidity control; decay management and packaging systems are regulated and market-specific.',
  transportContext:
    'Shipped as packed cartons or punnets on pallets in refrigerated containers; packaging must immobilise the bunch because berry shatter is caused by movement.',
  majorProducingRegions: [
    'East Asia and the Middle East',
    'Mediterranean Europe',
    'North America',
    'South America and Southern Africa (counter-season supply)',
  ],
  majorTradingRegions: [
    'Europe',
    'North America',
    'East and Southeast Asia (major importing markets)',
    'Southern Hemisphere counter-season exporters',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0806.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Grapes, fresh. The subheading covers fresh grapes generally and does not separate table from wine grapes.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'raisins' }],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'wine-grapes' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Table grapes as a traded fresh fruit commodity and drying pathway',
    },
    {
      sourceId: 'usda',
      citedFor: 'Table grape grade attributes and pack specification context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Post-harvest behaviour of table grapes, decay, and stem condition',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European marketing standards context for fresh grapes',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Marketing standards, permitted post-harvest treatments, and codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a marketing-standard determination or a post-harvest treatment recommendation.',
    'Storage temperature, humidity, and permitted decay-control treatments are not given here — they are cultivar- and jurisdiction-specific.',
    'The HS subheading for fresh grapes does not distinguish table from wine grapes; classification depends on the facts of the consignment.',
    'Regional listings here indicate where table grapes are grown and traded; they are not ordered by volume or value.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Table Grapes: The Fresh Bunch as Traded',
    description:
      'Table grapes as a commodity: why the bunch is the unit of trade, non-climacteric harvest maturity, stem freshness, cold chain, defects, and the raisin pathway.',
    keywords: [
      'table grapes',
      'fresh grapes',
      'grape bunch quality',
      'non-climacteric fruit',
      'table grape cold chain',
    ],
  },
  structuredData: { article: true },
};
