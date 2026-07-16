import type { CommodityContent } from '@/types/content';

export const freshLettuce: CommodityContent = {
  id: 'commodity-fresh-lettuce',
  slug: 'fresh-lettuce',
  contentType: 'commodity',
  title: 'Fresh Lettuce',
  alternativeNames: ['Salad lettuce', 'Crisphead lettuce', 'Iceberg lettuce'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Leafy salad',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Head or leaf rosette, cut at the base',
  sourceCrop: { type: 'crop', slug: 'lettuce' },
  summary:
    'Fresh lettuce is the cut head or leaf rosette of the lettuce plant, and it is among the most perishable commodities in the produce trade. Nothing about it improves after cutting: the entire commercial task is to remove field heat fast and never let the temperature rise again.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh lettuce is the traded commodity of the lettuce crop: heads or rosettes cut at the base, trimmed, and packed — very often in the field itself, on mobile rigs that cut, wrap, and box in one pass, because every handling step and every hour costs quality that cannot be recovered. The trade spans crisphead types, the romaine and butterhead types, and loose-leaf lettuce, along with the processed salad stream that takes whole heads and turns them into washed, cut, bagged product.',
    },
    {
      type: 'paragraph',
      text: 'Lettuce is the commodity that most sharply illustrates why the cold chain exists. It is a thin, open, high-surface-area tissue with a large cut wound, no protective skin, and no storage organ — it cannot ripen, cure, or improve, and it has no reserves to draw on. From the moment of cutting, everything that happens to a lettuce is a subtraction. This entry describes the harvested and traded head; the growing of the crop is on the lettuce crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (leafy salad)' },
    { label: 'Parent crop', value: 'Lettuce (Lactuca sativa)' },
    { label: 'Harvested part', value: 'Head or leaf rosette' },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; lettuce cannot ripen or improve after cutting',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Not chilling-sensitive; held as cold as it can be without freezing',
    },
    {
      label: 'Defining constraint',
      value: 'Extreme perishability — rapid cooling and an unbroken cold chain',
    },
    {
      label: 'Key quality attributes',
      value:
        'Freshness, turgidity, colour, head weight and firmness, freedom from tipburn',
    },
  ],
  sections: [
    {
      id: 'perishability',
      heading: 'Why lettuce is the perishability benchmark',
      body: [
        {
          type: 'paragraph',
          text: 'Every physical property of a lettuce works against its keeping. It is almost entirely water held in thin leaves with an enormous surface area relative to their mass, so it loses water fast and wilts visibly. It is cut across the base, leaving a large open wound that browns and admits decay. It is a growing tissue with a high metabolic rate and no storage reserves — unlike an onion bulb or a carrot root, there is nothing banked to live off.',
        },
        {
          type: 'paragraph',
          text: 'And it is non-climacteric, which removes the last consolation. A tomato picked firm gets better on the way to market; a lettuce cut in the field is at its best in that instant and declines from there. The commodity is therefore defined by a single logic — subtract heat immediately and keep it subtracted — and every commercial practice around it follows from that.',
        },
      ],
    },
    {
      id: 'rapid-cooling',
      heading: 'Vacuum cooling and the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce is the classic vacuum-cooled commodity. Packed product goes into a sealed chamber and the pressure is dropped until water evaporates from the leaves themselves; the evaporation pulls heat out of the tissue directly, cooling the whole head — interior included — in a fraction of the time a cold room would need. This suits lettuce precisely because of the same open, high-surface-area structure that makes it perishable, and it is why vacuum cooling is standard for this commodity while denser produce is cooled by other means.',
        },
        {
          type: 'paragraph',
          text: 'The cooling is not free: the water that leaves as vapour is weight off the product, so the process is controlled to take out heat without over-drying the leaf. Once cooled, the lot must simply stay cold. Lettuce tolerates temperatures near freezing — it is not chilling-sensitive — so there is no upper constraint to respect, only the discipline of never letting the chain break. Each warm interval spends quality permanently, and the losses accumulate across a chain in which no later step can add anything back.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No temperatures or shelf life are given here',
          text: 'Cooling targets, holding temperature and humidity, and achievable market life for lettuce are type-specific and set by sourced post-harvest guidance. Rather than publish a figure, this reference points to the USDA Agricultural Research Service handbook and the applicable national extension recommendation.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce grading is done largely by eye and hand in the field: head weight and firmness for crisphead types, freshness and turgidity, colour, trim, and freedom from defects. Because it is cut and packed in one motion, the grading decision is usually made by the cutter at the moment of harvest — there is no second look on a packing line, and the discipline of the crew is the quality control.',
        },
        {
          type: 'list',
          items: [
            'Tipburn — brown, necrotic leaf margins, a physiological disorder set before harvest',
            'Butt discoloration and browning at the cut base',
            'Russet spotting — small brown pits driven by ethylene exposure',
            'Pink rib and rib discoloration',
            'Wilting and loss of turgidity from water loss or warmth',
            'Bruising and crushing from handling or over-packing',
            'Decay and soft rots, entering through wounds and damaged leaves',
          ],
        },
        {
          type: 'paragraph',
          text: 'Two of these are worth separating from the rest. Tipburn arrives with the crop — it is set in the field, and no post-harvest care removes it. Russet spotting is the opposite: it is caused after harvest by ethylene, so lettuce stored or shipped with ethylene-producing commodities develops it in transit. Lettuce has no ripening to trigger, but it is damaged by ethylene all the same, and keeping it away from ethylene sources is a standing rule of the trade.',
        },
      ],
    },
    {
      id: 'packaging-and-streams',
      heading: 'Packaging and trade streams',
      body: [
        {
          type: 'paragraph',
          text: 'Packaging for lettuce is doing physical work, not decoration. Film wrapping and modified-atmosphere packaging hold humidity around the leaf and slow water loss and respiration; cartons are built to carry the load without crushing what is inside. Product moves refrigerated, quickly, and normally in dedicated rather than mixed loads, both for temperature and to keep it away from ethylene.',
        },
        {
          type: 'paragraph',
          text: 'The processed salad stream is a genuinely different commodity channel. Heads are delivered to a plant, cut, washed, dried, and bagged under modified atmosphere, which produces a convenient product with a shorter life than the intact head it came from: cutting multiplies the wounded surface, and every cut edge is a fresh site for browning and decay. Field quality standards for that stream differ accordingly — internal structure and freedom from tipburn matter more than the head appearance a retail buyer is sold on.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Freshness and turgidity',
    'Head weight and firmness',
    'Colour',
    'Trim and butt condition',
    'Freedom from tipburn',
    'Freedom from decay',
  ],
  commonDefects: [
    'Tipburn',
    'Butt discoloration',
    'Russet spotting from ethylene exposure',
    'Pink rib and rib discoloration',
    'Wilting and loss of turgidity',
    'Bruising and crushing',
    'Decay and soft rots',
  ],
  moistureContext:
    'Thin, high-surface-area leaves lose water very rapidly, and wilting is immediately visible and unsaleable. Vacuum cooling itself removes water from the tissue, so the process is balanced against over-drying; humidity retention is central throughout.',
  storageContext:
    'Held as cold as possible short of freezing, at high humidity, for short periods only. Not chilling-sensitive, but damaged by ethylene, so it is kept out of mixed storage with ethylene-producing commodities.',
  transportContext:
    'Moves refrigerated in film-wrapped cartons, usually in dedicated loads and at speed; the cold chain must be unbroken because no later step can restore quality lost to a warm interval.',
  majorProducingRegions: [
    'East Asia',
    'North America',
    'Europe',
    'Mediterranean and North Africa',
  ],
  majorTradingRegions: [
    'North America',
    'Europe (large intra-regional trade)',
    'East Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0705.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cabbage lettuce (head lettuce), fresh or chilled. Other lettuce types fall under 0705.19 within the same heading.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Lettuce as a traded fresh vegetable commodity and cold-chain context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Vacuum cooling, ethylene-induced russet spotting, and lettuce storage behaviour',
    },
    {
      sourceId: 'usda',
      citedFor: 'Lettuce grading attributes and defect description',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Lettuce post-harvest disorders including tipburn and rib discoloration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, pack specifications, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No cooling target, storage temperature, humidity, or market-life figure is given here — these are type-specific and belong to sourced post-harvest guidance.',
    'Crisphead, romaine, butterhead, and loose-leaf types differ in handling and market life; no single expectation covers the commodity.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Lettuce: The Most Perishable Salad Commodity',
    description:
      'Fresh lettuce as a commodity: why it is so perishable, vacuum cooling and the unbroken cold chain, tipburn and russet spotting, and humidity packaging.',
    keywords: [
      'fresh lettuce',
      'lettuce commodity',
      'vacuum cooling',
      'lettuce tipburn',
      'russet spotting',
    ],
  },
  structuredData: { article: true },
};
