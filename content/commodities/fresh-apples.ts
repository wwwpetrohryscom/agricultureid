import type { CommodityContent } from '@/types/content';

export const freshApples: CommodityContent = {
  id: 'commodity-fresh-apples',
  slug: 'fresh-apples',
  contentType: 'commodity',
  title: 'Fresh Apples',
  alternativeNames: ['Dessert apples', 'Eating apples', 'Culinary apples'],
  category: 'Fresh fruit commodity',
  subcategory: 'Pome fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Pome (the fleshy fruit, hand-picked with the stalk attached)',
  sourceCrop: { type: 'crop', slug: 'apple' },
  summary:
    'Fresh apples are the harvested pome fruit traded as a perishable commodity. Because apples are climacteric they can be picked mature and held in cooled or controlled-atmosphere rooms for months, which makes picking maturity and storage regime the decisive commercial variables.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh apples are the traded commodity taken from the apple orchard: individual fruit, picked by hand at a chosen stage of maturity, moved out of the field and into cooling as a living, respiring lot. Unlike a dry grain, an apple continues to metabolise after picking, and every commercial decision that follows — when to cool it, in what atmosphere to hold it, when to release it — is a decision about how fast that metabolism is allowed to run.',
    },
    {
      type: 'paragraph',
      text: 'The commodity is distinct from the tree that produced it. What is bought and sold is a lot of fruit described by cultivar, size, colour, firmness, and freedom from defects, and backed by a storage history. This entry covers the harvested fruit as an article of trade; the biology and management of the orchard belong to the apple crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Apple (Malus domestica)' },
    { label: 'Harvested part', value: 'Pome fruit, picked with the stalk' },
    {
      label: 'Ripening behaviour',
      value:
        'Climacteric: continues to ripen after picking, driven by ethylene',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Not chilling-sensitive; tolerates near-freezing storage',
    },
    {
      label: 'Traded on',
      value: 'Cultivar, size, colour, firmness, and defect tolerance',
    },
    {
      label: 'Storage character',
      value:
        'One of the longest-storing fresh fruits under controlled atmosphere',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'An apple lot as traded is a quantity of individual fruit of a declared cultivar, packed to a size and colour specification. Cultivar is not a cosmetic label here: it governs firmness, background and blush colour, susceptibility to storage disorders, and how long the fruit can be held, so cultivar is written into the contract alongside grade. Fruit destined for processing is bought against different criteria from fruit destined for the fresh counter, and the two streams separate at the packhouse rather than in the orchard.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The lot is alive',
          text: 'A picked apple respires, transpires, and produces ethylene. Its condition on arrival is the sum of its maturity at picking and everything that happened to its temperature and atmosphere afterwards. There is no step in the chain that restores quality already lost.',
        },
      ],
    },
    {
      id: 'maturity-at-harvest',
      heading: 'Maturity at harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Picking maturity is the single decision that constrains everything downstream. Apples picked immature never develop full flavour or colour and are prone to storage disorders; apples picked overmature are already advanced along the ripening curve, soften quickly, and cannot be held long. Because the window differs by cultivar, orchard, and season, commercial harvest timing is judged from maturity indices — starch conversion, background colour, firmness, and the onset of ethylene production — assessed on sampled fruit rather than by calendar date.',
        },
        {
          type: 'paragraph',
          text: 'Lots intended for long storage are typically picked at the earlier end of the commercial window, before the climacteric rise is well under way, while fruit for immediate sale can be picked riper. A single orchard block is therefore often picked more than once, and the resulting lots are kept separate because they will not behave the same way in store.',
        },
      ],
    },
    {
      id: 'cooling-and-storage',
      heading: 'Cooling, storage, and atmosphere',
      body: [
        {
          type: 'paragraph',
          text: 'Field heat is removed promptly after picking, because respiration and softening both accelerate with temperature. Apples are not chilling-sensitive, so they can be held close to their freezing point without the tissue damage that afflicts tropical fruit; this tolerance is why apples store longer than almost any other fresh fruit. Beyond refrigeration, long-term holding uses controlled atmosphere, in which oxygen is reduced and carbon dioxide raised to slow respiration further and delay softening.',
        },
        {
          type: 'paragraph',
          text: 'Ethylene management runs alongside temperature control, since apples both produce ethylene and respond to it, and stored apples can accelerate the ripening of other produce held with them. Cultivars also differ in their susceptibility to storage disorders such as internal browning and superficial scald, which is why storage regimes are set cultivar by cultivar.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Storage temperature, atmosphere composition, and holding duration are cultivar-, region-, and disorder-specific, and AgricultureID publishes no universal target. Consult sourced post-harvest guidance and the recommendations in force for the cultivar and market concerned.',
        },
      ],
    },
    {
      id: 'grading-and-defects',
      heading: 'Grading, sizing, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Apples are graded on attributes that can be judged on the individual fruit: size, ground and blush colour, shape, firmness, and the presence of defects. Packhouse lines sort by weight or diameter and increasingly by optical assessment of colour and surface blemishes, so grading is a fruit-by-fruit operation rather than a bulk sample assessment as it is for grain. Sizing matters commercially because packs are sold by count, and a lot that sizes poorly loses value even when it is sound.',
        },
        {
          type: 'list',
          items: [
            'Bruising and handling damage — the dominant loss cause, accumulated at every transfer point',
            'Russeting, hail marks, and limb rub — surface defects that downgrade fresh-market fruit',
            'Storage disorders — superficial scald, internal browning, and bitter pit developing during holding',
            'Rots — post-harvest fungal decay entering through wounds and the stalk cavity',
            'Softening and mealiness — texture loss in fruit held beyond its storage life',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grade standards for apples are jurisdictional and versioned, and a lot can grade differently under different national schemes. Meeting a grade describes appearance and soundness; it is not a statement about eating quality, storage history, or food-safety status.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'The great majority of the fresh-apple crop is sold as whole fruit for eating and cooking. Fruit that is sound but fails fresh-market grade on size, shape, or colour — together with lots that have reached the end of their storage life — is diverted to processing, where juice and concentrate are the largest outlets. Pressing for juice leaves apple pomace, the residual solids, as a genuine by-product with feed and ingredient uses.',
        },
        {
          type: 'list',
          items: [
            'Food — whole fresh fruit for the dessert and culinary trade',
            'Beverage — pressing into juice, concentrate, and fermented cider',
            'Processing — slices, purée, and dried product from off-grade fruit',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'industrial'],
  majorQualityAttributes: [
    'Maturity at harvest',
    'Flesh firmness',
    'Size and count per pack',
    'Ground and blush colour',
    'Freedom from bruising and surface defects',
    'Storage disorder incidence',
  ],
  commonDefects: [
    'Bruising from handling and drops',
    'Russeting and surface blemishes',
    'Superficial scald and internal browning',
    'Bitter pit',
    'Post-harvest rots',
    'Softening and mealy texture',
  ],
  moistureContext:
    'Apples lose water by transpiration after picking, which shows as weight loss and shrivel; humidity control in store, not drying, is the relevant moisture concern for this commodity.',
  storageContext:
    'Cooled promptly after harvest and held refrigerated or under controlled atmosphere; tolerant of near-freezing temperatures, with regimes set by cultivar and intended storage length.',
  transportContext:
    'Moves as packed cartons or bulk bins on pallets in refrigerated road, rail, and sea containers; the cold chain must be continuous and pack formats are built to limit bruising.',
  majorProducingRegions: [
    'East Asia',
    'Europe and Central Asia',
    'North America',
    'Southern Hemisphere counter-season suppliers (South America, Southern Africa, Oceania)',
  ],
  majorTradingRegions: [
    'Europe',
    'North America',
    'Southern Hemisphere counter-season exporters',
    'Middle East and South Asia (major importing markets)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0808.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Apples, fresh, at 6-digit subheading level.',
    },
  ],
  primaryProducts: [
    { type: 'commodity-product', slug: 'apple-juice-concentrate' },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'apple-pomace' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Apples as a traded fresh fruit commodity and post-harvest handling',
    },
    {
      sourceId: 'usda',
      citedFor: 'Fresh apple grading attributes and market classes',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Apple maturity indices, storage disorders, and controlled-atmosphere behaviour',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Apple storage management and fresh-market quality context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, size classes, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, storage recommendation, or customs classification.',
    'Storage temperature, atmosphere, and duration are cultivar- and region-specific and are deliberately not given here; consult sourced post-harvest guidance.',
    'Grade standards and size classes differ by jurisdiction and are revised; confirm the edition in force.',
    'The producing and trading regions listed are indicative groupings of where the commodity moves, not a ranking by volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Apples: The Traded Pome Fruit Commodity',
    description:
      'Fresh apples as a commodity: picking maturity, climacteric ripening, controlled-atmosphere storage, grading by size and colour, defects, and product pathways.',
    keywords: [
      'fresh apples',
      'apple commodity',
      'apple storage',
      'controlled atmosphere apples',
      'apple grading',
    ],
  },
  structuredData: { article: true },
};
