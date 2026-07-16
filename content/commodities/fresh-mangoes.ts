import type { CommodityContent } from '@/types/content';

export const freshMangoes: CommodityContent = {
  id: 'commodity-fresh-mangoes',
  slug: 'fresh-mangoes',
  contentType: 'commodity',
  title: 'Fresh Mangoes',
  alternativeNames: ['Mango fruit', 'Table mangoes'],
  category: 'Fresh fruit commodity',
  subcategory: 'Tropical stone fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Drupe (the fleshy stone fruit, picked with a short stalk)',
  sourceCrop: { type: 'crop', slug: 'mango' },
  summary:
    'Fresh mangoes are the harvested tropical drupe, traded as a climacteric fruit picked mature but firm and ripened downstream. Chilling sensitivity, latex sap burn, and mandatory quarantine treatments for many export routes shape how the commodity is handled.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh mangoes are the traded fruit of the mango tree, picked at full maturity but still firm, and expected to ripen somewhere between the orchard and the consumer. Like the banana, the mango is climacteric and can be harvested unripe and ripened later — but unlike the banana, its harvest maturity is far harder to read from the outside, and the trade has never fully solved the problem of telling a mature mango from an immature one without cutting it open.',
    },
    {
      type: 'paragraph',
      text: 'The commodity also carries complications the temperate fruit trade never meets: a sap that burns the skin of the fruit it touches, a sensitivity to cold that rules out the deep refrigeration used for apples, and — because mango is a host for fruit flies — a set of mandatory quarantine treatments that must be applied to fruit entering many markets. This entry describes the harvested fruit as traded; the orchard is covered on the mango crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Mango (Mangifera indica)' },
    {
      label: 'Harvested part',
      value: 'Drupe, picked with a short stalk retained',
    },
    {
      label: 'Ripening behaviour',
      value: 'Climacteric: picked firm-mature and ripened after harvest',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Chilling-sensitive: cannot be held at temperate-fruit temperatures',
    },
    {
      label: 'Export constraint',
      value: 'Quarantine treatment required for many markets (fruit fly host)',
    },
    {
      label: 'Handling hazard',
      value: 'Stem latex causes sap burn on the fruit skin',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A mango lot is fruit of a declared cultivar, sized and packed by count, and moving with a declared maturity and a treatment history. Cultivar matters more than in most fruit trades because mango cultivars differ enormously in shape, fibre content, skin colour, flesh character, and how they behave when ripened — and because skin colour development is cultivar-specific, a red blush means ripeness in some cultivars and nothing at all in others.',
        },
        {
          type: 'paragraph',
          text: 'Because export mangoes are picked firm, an export lot arrives as a fruit that is not yet edible. Where in the chain it is ripened — at the importer, at a ripening facility, at the retailer, or at home — is a commercial decision, and both ready-to-eat and firm-for-ripening presentations exist side by side in the same markets.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Maturity is not colour',
          text: 'Mango harvest maturity is judged by cultivar-specific indicators — shoulder fill, flesh colour on cut sample fruit, dry matter, and specific gravity — rather than by skin colour, which develops on its own schedule and varies by cultivar and sun exposure.',
        },
      ],
    },
    {
      id: 'harvest-and-sap',
      heading: 'Harvest, latex, and sap burn',
      body: [
        {
          type: 'paragraph',
          text: "Mangoes are picked by hand, and the act of picking creates the commodity's signature problem. Cutting or snapping the stalk releases latex sap under pressure; where that sap lands on the skin of a fruit it causes sap burn, a blackened, corrosive-looking lesion that appears within hours and downgrades or condemns the fruit. The trade manages this by harvesting with a length of stalk retained, then de-stemming the fruit in a controlled way — inverted, over a bench, or in a wash — so the sap flows away from the fruit rather than across it.",
        },
        {
          type: 'paragraph',
          text: 'Harvest maturity itself is assessed on sampled fruit, using cultivar-specific indicators such as the filling of the shoulders relative to the stem, internal flesh colour, and dry matter. Immature fruit picked by mistake will soften without ever developing flavour or aroma — the recurring commercial failure of the mango trade, and the reason maturity assessment gets the attention it does.',
        },
      ],
    },
    {
      id: 'treatment-and-cold-chain',
      heading: 'Quarantine treatment and cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'Mango is a host for tephritid fruit flies, so a great deal of the export trade passes through a mandatory phytosanitary treatment before it can enter a market: hot water immersion, vapour heat, or irradiation, applied under an approved protocol and certified. This is a regulatory step, not a quality step, and it is one of the few cases where a fresh commodity is deliberately heated. It also stresses the fruit — treatment can advance ripening and, if misapplied, damage the flesh — so the treatment and the cold chain have to be designed together.',
        },
        {
          type: 'paragraph',
          text: 'After treatment the fruit is cooled and shipped, but only into the narrow band its physiology allows. Mangoes are chilling-sensitive: held too cold they develop grey, pitted skin, uneven ripening, and off flavours, and the injury shows up on arrival rather than in the container. Ripening at the destination is managed with warmth and ethylene in the same way as for bananas, though mangoes are the more delicate customer.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Treatment protocols and temperatures are regulated',
          text: "Quarantine treatment schedules and storage temperatures for mango are set by the importing country's plant-health authority and by sourced post-harvest guidance. AgricultureID publishes no schedules, temperatures, or durations.",
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: "Grading covers fruit size and count, shape typical of the cultivar, skin finish, firmness, and freedom from defects and disease. Internal quality — flesh colour, fibre, and the absence of internal breakdown — cannot be assessed non-destructively on every fruit, so it is inferred from sampling and from maturity control at harvest, and this is precisely where the trade's disputes arise.",
        },
        {
          type: 'list',
          items: [
            'Sap burn — black skin lesions from latex contact at harvest',
            'Anthracnose and stem-end rot — the dominant post-harvest diseases, often latent until ripening',
            'Chilling injury — pitting, grey skin, and failure to ripen evenly',
            'Immature fruit that softens without developing flavour',
            'Internal breakdown and jelly seed in over-mature or heat-stressed fruit',
            'Heat-treatment damage from misapplied quarantine protocols',
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Most mangoes are eaten fresh, and most are eaten in the countries that grow them — the export trade is a small share of a very large crop. Fruit outside export specification, and cultivars grown for processing, go to pulp and purée, dried slices, juice, and pickled products, with the large processing industries sitting in the main producing countries rather than in the importing ones.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh fruit, the dominant use both domestically and in export markets',
            'Food processing — pulp, purée, dried mango, and juice, largely at origin',
            'Beverage — nectars and juice blends made from pulp',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'industrial'],
  majorQualityAttributes: [
    'Harvest maturity (dry matter and flesh colour on sampled fruit)',
    'Fruit size and count per carton',
    'Firmness on arrival',
    'Skin finish and freedom from sap burn',
    'Freedom from anthracnose and stem-end rot',
    'Certified quarantine treatment where required',
  ],
  commonDefects: [
    'Sap burn',
    'Anthracnose and stem-end rot',
    'Chilling injury',
    'Immaturity at harvest',
    'Internal breakdown and jelly seed',
    'Heat-treatment injury',
  ],
  moistureContext:
    'Dry matter at harvest is used as a maturity indicator for mango rather than as a storage parameter; after harvest, water loss shows as skin shrivel and dull finish.',
  storageContext:
    'Held and shipped refrigerated but strictly above the chilling-injury threshold, then ripened with warmth and ethylene at destination; regimes are cultivar-specific.',
  transportContext:
    'Exported as palletised cartons in refrigerated containers, and by air for premium and ready-to-eat fruit; most export routes require a certified quarantine treatment before shipping.',
  majorProducingRegions: [
    'South Asia',
    'Southeast and East Asia',
    'Latin America and the Caribbean',
    'West and East Africa',
  ],
  majorTradingRegions: [
    'Latin America (major exporting region)',
    'South and Southeast Asia',
    'Europe and North America (major importing markets)',
    'The Middle East',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0804.50',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Guavas, mangoes and mangosteens, fresh or dried. The subheading is shared and does not isolate mangoes.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'host-plant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Mango as a traded tropical fruit commodity and its processing outlets',
    },
    {
      sourceId: 'usda',
      citedFor: 'Mango grade attributes and import requirement context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Mango post-harvest physiology, chilling injury, and quarantine treatment research',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Mango cultivar diversity and harvest maturity assessment in South Asia',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Quarantine treatment requirements, grade rules, and codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a phytosanitary protocol, treatment schedule, or grading determination.',
    'Quarantine treatments are set by importing-country plant-health authorities and are not reproduced here; confirm the requirements in force for the route concerned.',
    'No storage temperatures, dry-matter thresholds, or ripening schedules are given — these are cultivar- and market-specific.',
    'Producing and trading regions are listed indicatively; mango volumes by region are not ranked or quantified here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Mangoes: The Traded Tropical Drupe',
    description:
      'Fresh mangoes as a commodity: firm-mature harvest, sap burn, chilling sensitivity, quarantine heat treatment for export, ripening at destination, and defects.',
    keywords: [
      'fresh mangoes',
      'mango commodity',
      'sap burn',
      'mango quarantine treatment',
      'mango ripening',
    ],
  },
  structuredData: { article: true },
};
