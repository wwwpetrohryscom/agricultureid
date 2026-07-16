import type { CommodityContent } from '@/types/content';

export const warePotatoes: CommodityContent = {
  id: 'commodity-ware-potatoes',
  slug: 'ware-potatoes',
  contentType: 'commodity',
  title: 'Ware Potatoes',
  alternativeNames: [
    'Table potatoes',
    'Ware crop potatoes',
    'Consumption potatoes',
  ],
  category: 'Root and tuber commodity',
  subcategory: 'Potato for table use',
  commodityClass: 'root-tuber',
  physicalForm: 'root-tuber',
  harvestedPart: 'Tuber (a swollen underground stem, not a true root)',
  sourceCrop: { type: 'crop', slug: 'potato' },
  summary:
    'Ware potatoes are potato tubers lifted and traded for table consumption, as distinct from certified seed potatoes and from lots contracted to processors. They are sold on size, skin finish, and freedom from defects, and they remain living tissue throughout storage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ware potatoes are the potato tubers destined for eating: lifted from the field, cured, graded, and sold to retailers, wholesalers, and caterers for direct consumption. The word "ware" marks a commercial destination rather than a botanical category — the same field can yield tubers that go to the ware market, to a processor, or, under a separate certification regime, to the seed trade.',
    },
    {
      type: 'paragraph',
      text: 'What matters commercially about a ware lot belongs to the harvested tuber, not to the plant that produced it: tuber size distribution, skin finish, flesh colour, and freedom from greening, damage, and rots. A potato tuber is also alive after lifting — it respires, loses water, and eventually breaks dormancy and sprouts — so the commodity behaves quite unlike a dry cereal grain in store.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Root and tuber' },
    { label: 'Parent crop', value: 'Potato (Solanum tuberosum)' },
    { label: 'Harvested part', value: 'Tuber (swollen stem)' },
    { label: 'Principal use', value: 'Food — direct table consumption' },
    {
      label: 'Distinct trade categories',
      value: 'Ware, seed (certified), and processing potatoes',
    },
    {
      label: 'Key quality attributes',
      value: 'Size grading, skin finish, freedom from greening and damage',
    },
    {
      label: 'Storage behaviour',
      value: 'Living tissue: respires, transpires, sprouts',
    },
  ],
  sections: [
    {
      id: 'ware-seed-and-processing',
      heading: 'Ware, seed, and processing potatoes',
      body: [
        {
          type: 'paragraph',
          text: 'The potato trade separates three destinations, and they are not interchangeable lots. Ware potatoes are graded for appearance and eating quality and move into fresh retail and food service. Processing potatoes are contracted against attributes that matter to the fryer or crisp line rather than to the shopper. Seed potatoes are a distinct trade category altogether: they are planting material, produced under statutory certification schemes with field inspection and health testing, and they are traded on phytosanitary status and generation rather than on how they look on a shelf.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Ware potatoes',
              description:
                'Tubers graded and sold for table consumption; judged on size, shape, skin finish, and freedom from defects.',
            },
            {
              term: 'Seed potatoes',
              description:
                'Certified planting material traded under a separate regulatory and phytosanitary regime; a distinct commodity category, not a grade of ware.',
            },
            {
              term: 'Processing potatoes',
              description:
                'Tubers contracted to a manufacturer against processing attributes such as dry matter, reducing-sugar level, and tuber dimensions.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A destination, not a species difference',
          text: 'Ware, seed, and processing potatoes can share a variety and a growing region. What separates them is the specification they are grown and traded against, and — for seed — a certification framework that ware potatoes do not enter.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Ware grading is largely visual and dimensional. Lots are sized against riddle or screen dimensions set by the contract, and buyers specify shape regularity, skin finish, and flesh colour. Because the tuber is sold whole and unpeeled, surface condition carries a great deal of the commercial value: common scab, mechanical wounds, and skin abrasion from harvesting and handling all downgrade a lot even where the flesh beneath is sound.',
        },
        {
          type: 'paragraph',
          text: 'Greening is the defect that most clearly distinguishes potatoes from other traded produce. Tubers exposed to light — in the field, on the grader, or in a lit display — develop chlorophyll, and that greening accompanies the accumulation of naturally occurring glycoalkaloids in the tuber. Green tubers are therefore rejected on sight, and the whole handling chain from lifting to retail is built around keeping the crop dark. Internal disorders such as hollow heart and blackspot bruising are invisible externally and are assessed by cutting sample tubers.',
        },
        {
          type: 'list',
          items: [
            'Greening from light exposure at any point in the chain',
            'Mechanical damage, skinning, and blackspot bruising from handling',
            'Sprouting once dormancy breaks in store',
            'Common scab and other surface blemishes',
            'Soft rots and dry rots developing from wounds',
            'Hollow heart, secondary growth, and other internal disorders',
          ],
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage, curing, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'A lifted tuber is a living organ with a dormancy period, and ware storage is the management of that biology. Freshly lifted potatoes are first cured — held warm and humid so that wounds suberise and the skin sets — before the store is pulled down to its holding temperature. Thereafter the store manages respiration heat, water loss, sprout development, and disease, using ventilation and humidity control rather than the drying that governs grain.',
        },
        {
          type: 'paragraph',
          text: 'Temperature choice involves a genuine trade-off. Colder storage suppresses sprouting and rots but drives cold-induced sweetening, in which tuber starch is converted to reducing sugars; that matters most to fry and crisp colour, and is one reason processing lots and ware lots are held on different regimes. Transport is short-chain and protective: potatoes move in pallet boxes, bulk trailers, and bags, and must be kept dark, ventilated, and away from both frost and condensation.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage regime',
          text: 'Holding temperature, humidity, and duration depend on variety, dormancy, intended market, and store design. AgricultureID publishes no universal figure — consult the applicable national potato-storage guidance and the contract.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'The ware market is by definition a food market: the tuber is sold to be cooked whole or prepared as bought. Beyond that, potatoes that fall outside table specification have established outlets rather than being discarded — undersize, misshapen, and blemished tubers commonly move to livestock feed or into starch extraction, which values dry matter and cares nothing for skin finish.',
        },
        {
          type: 'paragraph',
          text: 'Starch manufacture is the principal industrial pathway from the potato. Where starch is a planned output, dedicated high-dry-matter starch varieties are grown for it as a commercial category of their own; out-of-specification ware tubers supplement that supply. This entry models the starch pathway from the traded potato commodity, which is where the ware trade connects to it.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Tuber size distribution',
    'Shape regularity',
    'Skin finish and blemish level',
    'Freedom from greening',
    'Freedom from mechanical damage and bruising',
    'Freedom from rots and internal disorders',
  ],
  commonDefects: [
    'Greening',
    'Mechanical damage and skinning',
    'Blackspot bruising',
    'Sprouting',
    'Common scab',
    'Soft rot and dry rot',
    'Hollow heart',
  ],
  moistureContext:
    'Unlike dry grain, ware potatoes are not dried or traded on a moisture basis. The tuber is high in water and loses it steadily by transpiration, so store humidity is managed to limit shrinkage rather than to reduce moisture.',
  storageContext:
    'Cured first so wounds suberise and skins set, then held cool, dark, humid, and ventilated; the regime balances sprout and rot suppression against cold-induced sweetening.',
  transportContext:
    'Moves in pallet boxes, bulk trailers, and bags over relatively short chains; must stay dark and ventilated and be protected from frost, heat, and condensation.',
  majorProducingRegions: [
    'East Asia and South Asia',
    'Europe and Central Asia',
    'North America',
    'Andean South America',
  ],
  majorTradingRegions: [
    'Europe (substantial intra-regional trade)',
    'North America',
    'Middle East and North Africa (importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0701.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Potatoes, fresh or chilled, other than seed. Seed potatoes are classified separately under 0701.10, which mirrors the commercial split between ware and seed.',
    },
    {
      system: 'FAOSTAT',
      code: '116',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Potatoes". The FAOSTAT item covers the crop as a whole and is not limited to the ware market.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'potato-starch' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'potato-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'machinery', slug: 'potato-harvester' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'cassava-roots' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Potato as a traded root and tuber commodity and its uses',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Potato tuber handling, storage behaviour, and market categories',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Ware grading attributes, defects, and store management context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Ware size grades, marketing standards, and seed certification schemes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the ware commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'Seed potatoes are a separate certified trade category and are not described here beyond the distinction itself.',
    'No storage temperature, humidity, dry-matter, or sizing figures are given — these are set by variety, market, contract, and national guidance.',
    'The regions listed group where the crop is grown and traded in broad terms; they are not a ranking or a share of output.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Ware Potatoes: The Traded Table Potato',
    description:
      'Ware potatoes as a commodity: how table lots differ from seed and processing potatoes, what greening means for grade, and how tubers behave in store.',
    keywords: [
      'ware potatoes',
      'table potatoes',
      'potato commodity',
      'potato grading',
      'potato storage',
    ],
  },
  structuredData: { article: true },
};
