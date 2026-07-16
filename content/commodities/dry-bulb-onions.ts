import type { CommodityContent } from '@/types/content';

export const dryBulbOnions: CommodityContent = {
  id: 'commodity-dry-bulb-onions',
  slug: 'dry-bulb-onions',
  contentType: 'commodity',
  title: 'Dry Bulb Onions',
  alternativeNames: ['Storage onions', 'Dry onions', 'Cured onions'],
  category: 'Vegetable commodity',
  subcategory: 'Cured bulb',
  commodityClass: 'vegetable',
  physicalForm: 'other',
  harvestedPart:
    'Bulb (swollen leaf bases, lifted with tops and roots and then cured)',
  sourceCrop: { type: 'crop', slug: 'onion' },
  summary:
    'Dry bulb onions are the lifted, cured bulbs of the onion plant. Curing — drying the necks and setting the outer skins after lifting — is what separates this commodity from a merely harvested vegetable: it is the step that makes onions storable and tradeable over months rather than days.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dry bulb onions are the traded commodity obtained from the onion crop: bulbs lifted at maturity, cured until their necks are dry and their outer scales have set into papery skins, then topped, graded, and packed. The word "dry" in the trade name does not describe a dried food — the bulb inside is still a high-moisture living tissue. It describes the cured, skin-set condition that distinguishes this commodity from green or salad onions sold with their tops on.',
    },
    {
      type: 'paragraph',
      text: 'Among fresh vegetable commodities the onion is unusual in how long it can be held, and that longevity is not an inherent property of the bulb. It is manufactured after harvest, by curing, and it can be lost by curing badly. What is bought and sold is therefore as much a product of the days following lifting as of the season that produced the bulb. The growing of the crop is covered on the onion crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (cured bulb)' },
    { label: 'Parent crop', value: 'Onion (Allium cepa)' },
    { label: 'Harvested part', value: 'Bulb (swollen leaf bases)' },
    {
      label: 'Defining post-harvest step',
      value: 'Curing — drying the neck and setting the outer skins',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; the bulb does not ripen further after lifting',
    },
    {
      label: 'Key quality attributes',
      value:
        'Neck tightness, skin retention, firmness, size, freedom from sprouting',
    },
    {
      label: 'Main product pathway',
      value: 'Dehydrated onion (flakes, granules, and powder)',
    },
  ],
  sections: [
    {
      id: 'lifting-and-maturity',
      heading: 'Lifting and maturity',
      body: [
        {
          type: 'paragraph',
          text: 'Onion harvest begins when the tops fall over and start to dry down, signalling that bulb growth has finished. The bulbs are undercut or lifted from the soil and left with the tops attached at first, because the drying foliage is part of what the bulb draws on as the neck closes. Lifting too early gives a bulb with a thick, wet neck that will not cure properly; leaving the crop too long risks skins splitting and the bulb starting to regrow roots.',
        },
        {
          type: 'paragraph',
          text: 'The onion is non-climacteric. Unlike a tomato it will not develop or improve after being detached — there is no ripening process to complete. The bulb is a dormant storage organ, and everything post-harvest handling can do is preserve the condition it was lifted in and coax it into dormancy. Nothing later in the chain will make a poorly filled or immature bulb into a good one.',
        },
      ],
    },
    {
      id: 'curing',
      heading: 'Curing: the step that makes the commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Curing is the drying of the onion’s neck and outer scales after lifting. Two things are achieved at once. The neck — the wound left where the tops are or will be removed — dries and seals, closing the most direct route by which rots enter the bulb. The outermost fleshy scales dry into the thin papery skins that armour the bulb against water loss and mechanical damage in handling. Until both have happened, an onion is a perishable vegetable; once they have, it is a storage commodity.',
        },
        {
          type: 'paragraph',
          text: 'Curing is done in the field, in windrows or under the tops, where climate is dry and reliable; or in forced-air rooms and barns where it is not, which gives control at a cost in energy and handling. Either route can produce a well-cured bulb. What matters is that the neck is genuinely dry through, not merely dry on the surface — a bulb that looks cured but has a soft neck will rot in store, and the failure appears weeks after the point where it was caused.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Curing is not drying the onion',
          text: 'Curing dries the neck and the outer scales only. The edible bulb beneath stays a high-moisture living tissue — that is why cured onions are still handled as fresh produce, and why dehydration into flakes or powder is a separate industrial process producing a distinct product.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Cured onions are graded on firmness, size and uniformity, skin retention and colour, neck condition, and freedom from defects. Skin retention deserves particular attention because it is both a quality attribute in its own right — buyers want a bright, intact, well-covered bulb — and the bulb’s physical protection, so a lot that has shed its skins in handling is both less saleable and more fragile than the same lot with skins on. Onions are also traded by type and colour, since red, white, and yellow onions and the milder sweet types serve different markets.',
        },
        {
          type: 'list',
          items: [
            'Thick or soft necks — from immature lifting or incomplete curing, and the usual route for rot',
            'Neck rot and bacterial soft rots — often established before storage and only visible later',
            'Sprouting and rooting — dormancy breaking in store',
            'Bruising and skin loss from rough handling',
            'Doubles, splits, and bolted bulbs',
            'Black mould and other surface moulds on damaged or poorly cured bulbs',
          ],
        },
        {
          type: 'paragraph',
          text: 'A recurring theme in onion grading is delay: most of the serious defects are set at lifting or during curing, but present themselves in store or on arrival. A lot can grade well out of the field and fail months later. This is why the curing record matters commercially and why long-store lots are selected on how they were handled, not only on how they look.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage, dormancy, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'A well-cured onion can be held for months, and the object of storage is to keep the bulb dormant and dry. Onions are not chilling-sensitive, so unlike tomatoes or cucumbers they tolerate genuinely cold holding; the enemies are sprouting, rooting, and rots, and these are managed with temperature, low humidity, and continuous airflow through the bulk. Onion storage is distinctive in wanting dry air — most fresh produce is held humid to stop water loss, while onions are held dry to keep skins and necks sound.',
        },
        {
          type: 'paragraph',
          text: 'Storage life also depends on the onion itself: cultivars differ substantially in dormancy, and pungent storage types generally hold far longer than mild sweet types, which are traded as a short-season commodity. Onions move in bags, nets, bins, and cartons, ventilated rather than sealed, and the same airflow logic that governs the store governs the load.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No storage figures are given here',
          text: 'Storage temperature, humidity, airflow rate, and achievable storage duration for onions are commodity- and cultivar-specific and interact with how the lot was cured. AgricultureID does not publish figures; consult sourced post-harvest guidance such as the USDA Agricultural Research Service handbook or the applicable national extension recommendation.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Neck tightness and dryness',
    'Skin retention and colour',
    'Firmness',
    'Size and uniformity',
    'Freedom from sprouting and rooting',
    'Freedom from rots',
  ],
  commonDefects: [
    'Thick or soft necks',
    'Neck rot and bacterial soft rot',
    'Sprouting and rooting in store',
    'Skin loss and bruising',
    'Doubles, splits, and bolted bulbs',
    'Surface moulds on poorly cured bulbs',
  ],
  moistureContext:
    'The bulb remains a high-moisture tissue; only the neck and outer scales are dried, by curing. Storage aims at dry surrounding air to keep necks and skins sound, which is the opposite of the humid regime most fresh vegetables need.',
  storageContext:
    'Held long-term as a dormant organ under cool, dry, continuously ventilated conditions; not chilling-sensitive, so cold holding is tolerated. Storage life follows cultivar dormancy and the quality of curing.',
  transportContext:
    'Moves in nets, bags, bins, and cartons that are ventilated rather than sealed; skins protect the bulb in transit, so handling that strips skins raises losses downstream.',
  majorProducingRegions: [
    'South Asia and East Asia',
    'Europe',
    'North America',
    'North Africa and the Middle East',
  ],
  majorTradingRegions: [
    'Europe (large intra-regional trade)',
    'South and Southeast Asia',
    'North America',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0703.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Onions and shallots, fresh or chilled. The subheading covers shallots as well as onions; dried onions are classified elsewhere.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'dehydrated-onion' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'commodity', slug: 'garlic-bulbs' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Onions as a traded vegetable commodity and post-harvest curing context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Curing, dormancy, and storage behaviour of dry bulb onions',
    },
    {
      sourceId: 'usda',
      citedFor: 'Dry bulb onion grading attributes and defect description',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Onion curing, storage ventilation, and cultivar storage-life context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, size classes, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No curing or storage temperature, humidity, airflow, or duration figure is given here — these are cultivar- and system-specific and belong to sourced post-harvest guidance.',
    'Storage life differs greatly between pungent storage types and mild sweet types; no single expectation applies to the commodity as a whole.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dry Bulb Onions: The Cured, Storable Commodity',
    description:
      'Dry bulb onions as a commodity: why curing the neck and skins makes them storable, grading and defects, dormancy in store, and the dehydration pathway.',
    keywords: [
      'dry bulb onions',
      'onion curing',
      'storage onions',
      'onion grading',
      'onion neck rot',
    ],
  },
  structuredData: { article: true },
};
