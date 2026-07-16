import type { CommodityContent } from '@/types/content';

export const freshTomatoes: CommodityContent = {
  id: 'commodity-fresh-tomatoes',
  slug: 'fresh-tomatoes',
  contentType: 'commodity',
  title: 'Fresh Tomatoes',
  alternativeNames: [
    'Table tomatoes',
    'Fresh-market tomatoes',
    'Salad tomatoes',
  ],
  category: 'Fresh vegetable commodity',
  subcategory: 'Fruit vegetable',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Berry (the fleshy fruit, picked with or without the calyx and stem)',
  sourceCrop: { type: 'crop', slug: 'tomato' },
  summary:
    'Fresh tomatoes are the harvested fruit of the tomato plant, traded as a perishable fresh-market commodity. Because the fruit is climacteric, it can be picked before full colour and ripened afterwards — and because it is chilling-sensitive, it cannot simply be held as cold as most vegetables.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh tomatoes are the traded fruit of the tomato plant: picked by hand or machine, sorted, packed, and moved to market as a living, respiring lot. Botanically the tomato is a fruit; commercially it is handled and sold as a vegetable, and it is one of the highest-volume fresh vegetable commodities in world trade.',
    },
    {
      type: 'paragraph',
      text: 'What governs the commodity is the state of the fruit at harvest and what happens to it afterwards. Tomatoes are climacteric — they continue to ripen after being detached from the plant — so maturity at picking, not just colour, decides how a lot will behave. They are also chilling-sensitive, which sets them apart from most vegetables in the cold chain. This entry describes the harvested and traded fruit; the growing of the plant is covered on the tomato crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (botanically a fruit)' },
    { label: 'Parent crop', value: 'Tomato (Solanum lycopersicum)' },
    { label: 'Harvested part', value: 'Berry (fleshy fruit)' },
    {
      label: 'Ripening behaviour',
      value: 'Climacteric — ripens after harvest in response to ethylene',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Chilling-sensitive; injured by storage that is too cold',
    },
    {
      label: 'Key quality attributes',
      value: 'Maturity, colour, firmness, size, freedom from defects',
    },
    {
      label: 'Main product pathways',
      value:
        'Paste and other concentrates, with pomace as a processing by-product',
    },
  ],
  sections: [
    {
      id: 'maturity-at-harvest',
      heading: 'Maturity at harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Tomatoes are not all picked at the same stage, and the stage chosen defines the commercial lot. Fruit destined for distant markets is commonly harvested mature-green — physiologically mature but not yet coloured — because firm green fruit tolerates handling and transport far better than soft coloured fruit. Fruit for nearer markets may be picked at breaker stage, when colour first appears, or held on the plant to colour more fully.',
        },
        {
          type: 'paragraph',
          text: 'The distinction that matters is between maturity and ripeness. A mature-green tomato has completed enough development to ripen properly once detached; an immature-green tomato has not, and will never develop acceptable colour, flavour, or texture no matter how it is handled afterwards. Picking immature fruit is therefore an irreversible quality loss, and judging maturity is a core skill in the harvest of this commodity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mature-green is not unripe-and-spoiled',
          text: 'Harvesting mature-green is a deliberate, legitimate commercial practice for a climacteric fruit, not a shortcut. The fruit completes ripening off the plant. What cannot be corrected later is harvesting before maturity.',
        },
      ],
    },
    {
      id: 'climacteric-ripening',
      heading: 'Climacteric ripening and ethylene',
      body: [
        {
          type: 'paragraph',
          text: 'The tomato is a climacteric fruit: after harvest it passes through a rise in respiration and produces ethylene, which drives the colour, softening, and flavour changes of ripening. This is why mature-green tomatoes can be shipped firm and ripened on arrival, and why ethylene is managed deliberately in the trade — applied in ripening rooms to bring a lot to a uniform stage, and excluded where fruit must be held back.',
        },
        {
          type: 'paragraph',
          text: 'Ethylene control cuts both ways. The same gas that ripens tomatoes on purpose will over-ripen them by accident if a lot is stored near an ethylene source, and tomatoes themselves emit ethylene that can damage sensitive commodities stored alongside them. Mixed-load compatibility is therefore a real commercial constraint, not a theoretical one.',
        },
      ],
    },
    {
      id: 'chilling-injury',
      heading: 'Chilling sensitivity and the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'Most vegetables keep best as close to freezing as they can safely be held. Tomatoes do not. As a warm-season fruit the tomato is chilling-sensitive: held below the temperature it tolerates, it suffers chilling injury — a physiological disorder that shows as failure to ripen or colour evenly, pitting, water-soaked patches, loss of flavour, and increased decay once the fruit is returned to warmer conditions.',
        },
        {
          type: 'paragraph',
          text: 'The damage is often invisible at the point where it happens and only appears further down the chain, which makes it a recurring source of commercial dispute: a lot can leave storage looking sound and arrive unsaleable. Chilling injury is also cumulative, so repeated brief exposures matter. The practical consequence is that tomatoes need their own temperature regime rather than the default vegetable setting, and that regime differs with the maturity stage of the fruit.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal temperature is given here',
          text: 'Safe holding temperature for tomatoes depends on the maturity stage, cultivar, intended holding period, and destination, and the thresholds are commodity-specific. AgricultureID does not publish a figure; consult sourced post-harvest guidance such as the USDA Agricultural Research Service handbook or the applicable national extension recommendation.',
        },
      ],
    },
    {
      id: 'quality-grading-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh tomatoes are graded on attributes that a buyer can verify on arrival: maturity and colour stage, firmness, size and uniformity, shape, and freedom from defects. Colour is often assessed against published stage charts so that a lot can be described consistently between seller and buyer. Grading is done by hand, by machine, or by both, and lots are commonly sized as well as graded.',
        },
        {
          type: 'list',
          items: [
            'Mechanical damage — bruising, compression, and abrasion from harvest and packing',
            'Cracking and splitting — radial or concentric, often set before harvest',
            'Chilling injury — uneven ripening, pitting, and flavour loss from over-cold holding',
            'Decay — soft rots and moulds, typically entering through wounds',
            'Sunscald and blotchy or uneven colour',
            'Overripe and soft fruit arriving past its useful stage',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the fruit is soft-skinned and continues to change after picking, tomato quality is a moving target rather than a fixed measurement: a lot is described at a moment in its life, and the grade recorded at packing is not necessarily the grade on arrival. Grade standards are jurisdictional and are revised, so the edition in force governs.',
        },
      ],
    },
    {
      id: 'pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Most fresh-market tomatoes are eaten as fresh fruit. A separate and much larger stream of tomatoes is grown, harvested, and delivered specifically for processing into concentrates — paste above all — and those fruit are handled as a bulk raw material rather than as fresh-market produce. Paste is the main intended output of that processing; the skins and seeds left after extraction leave the plant as pomace, a residual stream with feed value.',
        },
        {
          type: 'list',
          items: [
            'Food — sold and consumed as fresh fruit, the dominant use of this commodity',
            'Processing — concentration into paste and other tomato products',
            'Feed — pomace and out-grade fruit used in animal rations',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Maturity stage at harvest',
    'Colour stage and uniformity',
    'Firmness',
    'Size and shape uniformity',
    'Freedom from mechanical damage',
    'Freedom from decay',
  ],
  commonDefects: [
    'Bruising and compression damage',
    'Cracking and splitting',
    'Chilling injury',
    'Decay and soft rots',
    'Sunscald',
    'Uneven or blotchy ripening',
    'Immature fruit that will not ripen',
  ],
  moistureContext:
    'Tomatoes are a high-moisture living tissue that loses water continuously after harvest; water loss shows as softening, shrivel, and loss of gloss and saleable weight. Humidity management, not drying, is the concern for this commodity.',
  storageContext:
    'Held short-term under temperature and humidity chosen for the maturity stage; chilling-sensitive, so the cold-storage regime is warmer than for most vegetables and is set by sourced commodity-specific guidance.',
  transportContext:
    'Moves in cartons, trays, and returnable crates under refrigeration; ethylene emission makes mixed-load compatibility a live constraint, and firmness at loading largely determines arrival condition.',
  majorProducingRegions: [
    'East Asia and South Asia',
    'Mediterranean Europe and North Africa',
    'North America',
    'Latin America',
  ],
  majorTradingRegions: [
    'Europe (large intra-regional trade)',
    'North America',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0702.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Tomatoes, fresh or chilled. Processed tomato products are classified elsewhere.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'tomato-paste' }],
  byProducts: [{ type: 'commodity-product', slug: 'tomato-pomace' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Tomatoes as a traded fresh vegetable commodity and post-harvest handling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Climacteric ripening behaviour and chilling sensitivity of tomato fruit',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Fresh tomato grading attributes and maturity/colour stage description',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest defects and disorders of fresh-market tomatoes',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, maturity/colour stage charts, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No storage temperature, humidity, or shelf-life figure is given here — optimum conditions are maturity-stage- and cultivar-specific and belong to sourced post-harvest guidance.',
    'Grade standards and colour-stage charts differ by jurisdiction and are revised; confirm the edition in force.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Tomatoes: The Traded Vegetable Commodity',
    description:
      'Fresh tomatoes as a commodity: maturity at harvest, climacteric ripening and ethylene, chilling injury, grading and defects, plus the paste pathway.',
    keywords: [
      'fresh tomatoes',
      'tomato commodity',
      'mature-green tomatoes',
      'climacteric fruit',
      'tomato chilling injury',
    ],
  },
  structuredData: { article: true },
};
