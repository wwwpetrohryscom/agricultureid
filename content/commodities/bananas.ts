import type { CommodityContent } from '@/types/content';

export const bananas: CommodityContent = {
  id: 'commodity-bananas',
  slug: 'bananas',
  contentType: 'commodity',
  title: 'Bananas',
  alternativeNames: [
    'Dessert bananas',
    'Cavendish bananas',
    'Green bananas (trade form)',
  ],
  category: 'Fresh fruit commodity',
  subcategory: 'Tropical fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Fruit, cut as bunches and separated into hands and clusters',
  sourceCrop: { type: 'crop', slug: 'banana' },
  summary:
    'Bananas are the archetypal engineered fresh-fruit commodity: harvested mature but green, shipped in a refrigerated, ethylene-free state that suspends ripening, then ripened deliberately in rooms at the destination. The green fruit and the yellow fruit are the same lot at two managed stages.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bananas are traded green. This is the single fact that organises the entire commodity: the fruit that leaves the plantation is mature but hard and starchy, and it is kept that way — cool, and scrupulously free of ethylene — for the weeks it spends at sea. It arrives still green, and only then is it ripened on purpose, in sealed rooms, on a schedule set by the buyer. The yellow banana on a shelf is the end of an industrial process, not the state in which the fruit was picked.',
    },
    {
      type: 'paragraph',
      text: 'This works because bananas are strongly climacteric. They ripen after harvest, they ripen in response to ethylene, and once ripening begins they produce their own ethylene and drive the process to completion. That biology is both the opportunity — ripening can be postponed and then triggered at will — and the risk, since a single lot that starts ripening early can carry a whole container with it. This entry covers the commodity and its handling; the plantation crop is described on the banana crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    {
      label: 'Parent crop',
      value: 'Banana (Musa spp.), predominantly Cavendish cultivars',
    },
    {
      label: 'Trade form',
      value: 'Harvested mature-green; ripened at the destination market',
    },
    {
      label: 'Ripening behaviour',
      value: 'Climacteric and strongly ethylene-responsive',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Chilling-sensitive: cold below tolerance causes irreversible injury',
    },
    {
      label: 'Harvest maturity measure',
      value: 'Fruit fullness (grade/calibre), not colour',
    },
    {
      label: 'Trade character',
      value: 'One of the highest-volume fresh fruits in world trade',
    },
  ],
  sections: [
    {
      id: 'the-mature-green-trade',
      heading: 'The mature-green trade',
      body: [
        {
          type: 'paragraph',
          text: 'Bananas cannot be shipped ripe — a ripe banana would not survive a fortnight at sea, and its texture would not survive the handling. The trade therefore harvests fruit that has reached full physiological maturity but has not begun to ripen, and then works to keep it in that suspended state. Harvest maturity is judged by the fullness of the finger — how round it has become in cross-section, sometimes called grade or calibre — rather than by colour, because a mature-green banana and an immature one look much the same.',
        },
        {
          type: 'paragraph',
          text: "Bunches are cut from the plant, then dehanded and cut into clusters, washed to remove latex from the cut crowns, and packed into cartons, usually within hours and usually on the plantation itself. The crown cut is the fruit's main wound and the main entry point for the crown rots that dog the trade, so its treatment and hygiene get disproportionate attention.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Green life is the currency',
          text: 'The interval a lot can be held before it begins to ripen on its own is what the supply chain spends. Advanced harvest maturity, warmth, injury, and any exposure to ethylene all shorten it, and it cannot be replenished.',
        },
      ],
    },
    {
      id: 'ethylene-and-cold-chain',
      heading: 'Ethylene exclusion and the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'Two controls hold ripening off. The first is temperature: the fruit is cooled soon after packing and shipped refrigerated, which slows respiration and extends green life. The second is atmosphere: ethylene must be kept away from the fruit, because bananas respond to traces of it. Ripening fruit, damaged fruit, and other produce are all ethylene sources, which is why mixed loads are a hazard and why ventilation and controlled or modified atmospheres are used on long voyages to hold down oxygen and vent the ethylene the fruit itself emits.',
        },
        {
          type: 'paragraph',
          text: 'The temperature control is bounded from below. Bananas are chilling-sensitive, and holding them below their tolerance causes chilling injury — a dull, greyish skin, failure to ripen properly, and hard core — that only becomes visible later and cannot be undone. The shipping temperature is therefore a narrow compromise: cold enough to suspend ripening, never cold enough to injure. This is precisely the opposite of the apple case, where near-freezing storage is routine.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No temperatures published here',
          text: 'The transport and ripening temperatures for bananas are tightly specified commercially and sit close to the chilling-injury threshold. AgricultureID gives no figures; consult sourced post-harvest guidance and the applicable shipping specification.',
        },
      ],
    },
    {
      id: 'ripening-at-destination',
      heading: 'Ripening at destination',
      body: [
        {
          type: 'paragraph',
          text: 'At the destination the process is reversed on purpose. Cartons go into sealed ripening rooms where the fruit is warmed and dosed with ethylene, which triggers the climacteric. Starch converts to sugar, the peel degreens, the flesh softens, and the fruit passes through the colour stages the trade uses as a common language for how far along a pallet is. Because the fruit then produces its own ethylene, the room must be ventilated and its temperature managed as the fruit generates its own heat.',
        },
        {
          type: 'paragraph',
          text: 'Ripening is scheduled, not merely permitted. A ripener is asked to deliver fruit at a specified colour stage on a specified day, and the room conditions are set to hit that target. This makes bananas one of the clearest illustrations of the difference between a crop and a commodity: the eating quality is manufactured downstream, on a timetable, thousands of kilometres from where the fruit grew.',
        },
      ],
    },
    {
      id: 'defects-and-quality',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh-market bananas are specified on finger length and calibre, cluster size and presentation, peel cleanliness, and freedom from injury and decay. Because the peel bruises and scars easily and every mark is visible on a pale yellow surface, mechanical damage is the leading downgrade — and much of it is inflicted long before the fruit is ripe, then revealed when the peel degreens.',
        },
        {
          type: 'list',
          items: [
            "Crown rot — decay entering at the cut crown, the trade's characteristic post-harvest disease",
            'Chilling injury — dull peel, poor ripening, and hard core from cold below tolerance',
            'Bruising, scarring, and neck injury from handling',
            'Premature ripening in transit — usually traced to heat, delay, or an ethylene source',
            'Latex staining from the crown cut',
            'Uneven ripening across a pallet or room',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The internationally traded banana is a dessert fruit eaten fresh. Cooking bananas and plantains, which are handled and consumed quite differently, are a separate matter and are not what moves through the mature-green export chain. Fruit rejected at packing — off-calibre, scarred, or otherwise unfit for the carton — stays in the producing country and is eaten locally, dried, or fed to livestock rather than exported.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh dessert fruit, the dominant use of exported bananas',
            'Food processing — purée, dried fruit, and flour from off-grade fruit, largely at origin',
            'Feed — rejected fruit and plantation residues used locally',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Harvest maturity (finger fullness or calibre)',
    'Finger length and cluster presentation',
    'Green life remaining on arrival',
    'Peel condition and freedom from scarring',
    'Freedom from crown rot',
    'Uniformity of ripening response',
  ],
  commonDefects: [
    'Crown rot and other post-harvest decay',
    'Chilling injury',
    'Bruising, scarring, and neck damage',
    'Premature ripening in transit',
    'Latex staining',
    'Uneven ripening',
  ],
  moistureContext:
    'Banana peel is a poor moisture barrier relative to a citrus rind, and water loss shows as neck shrivel and dull peel; humidity in transit and in ripening rooms is managed for this reason.',
  storageContext:
    'Not stored in the usual sense: fruit is held refrigerated and ethylene-free to preserve green life, then ripened deliberately in sealed rooms at destination.',
  transportContext:
    'Moves as palletised cartons in refrigerated sea containers on long voyages, with ventilation or controlled atmosphere to vent ethylene; mixed loads with ethylene-producing produce are avoided.',
  majorProducingRegions: [
    'Central and South America',
    'South and Southeast Asia',
    'West and East Africa',
    'The Caribbean',
  ],
  majorTradingRegions: [
    'Latin America (dominant exporting region)',
    'Europe (major importing region)',
    'North America',
    'East Asia and the Middle East',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0803.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Bananas, fresh or dried, other than plantains. Plantains fall under a separate subheading.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bananas as a traded fresh fruit commodity, export chain, and market structure',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Banana ripening physiology, ethylene response, and chilling injury',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Banana trade reporting and market context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on banana fruit and its commercial handling',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Import requirements, ripening practice, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a shipping specification, ripening protocol, or customs classification.',
    'No transport or ripening temperatures, ethylene concentrations, or green-life durations are given here; consult sourced post-harvest guidance.',
    'The entry covers dessert bananas in the mature-green export trade; plantains and cooking bananas differ in handling and classification.',
    'The exporting and importing regions given are indicative of trade direction, not a ranking of volumes or market shares.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bananas: The Mature-Green Traded Commodity',
    description:
      'Bananas as a commodity: harvested mature-green, shipped cold and ethylene-free, then ripened to order at destination. Green life, chilling injury, crown rot.',
    keywords: [
      'bananas',
      'mature green bananas',
      'banana ripening',
      'ethylene management',
      'banana cold chain',
    ],
  },
  structuredData: { article: true },
};
