import type { CommodityContent } from '@/types/content';

export const greenCardamom: CommodityContent = {
  id: 'commodity-green-cardamom',
  slug: 'green-cardamom',
  contentType: 'commodity',
  title: 'Green Cardamom',
  alternativeNames: ['Small cardamom', 'True cardamom', 'Cardamom capsules'],
  category: 'Spice commodity',
  subcategory: 'Dried capsule spice',
  commodityClass: 'spice',
  physicalForm: 'other',
  harvestedPart:
    'Capsule (the pod, picked slightly immature and dried whole with the seeds inside)',
  sourceCrop: { type: 'crop', slug: 'cardamom' },
  summary:
    'Green cardamom is the dried capsule of the cardamom plant, traded whole with its seeds sealed inside. The commodity is graded above all on the green of its husk — a colour that curing is designed to preserve and that the capsule starts losing the moment it is dry.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Green cardamom is the traded commodity of the cardamom plant: capsules picked from the flowering shoots slightly before full ripeness, cured, cleaned, and graded for a trade that pays close attention to how they look. It is among the highest-value spices by weight, sold to the food trade, to extractors, and into markets — the Middle East above all — where cardamom is a staple rather than an occasional flavouring.',
    },
    {
      type: 'paragraph',
      text: 'The commodity has a quirk worth stating at the outset: what is bought is a container. The aroma lives in the seeds inside the capsule, and the green husk contributes little flavour of its own — but the husk is what the buyer grades, and it is also the packaging that keeps the seeds’ volatile oils from escaping. So cardamom is traded whole, on the appearance of a part that is not the part you use. This entry describes the harvested and cured capsule; the growing of the crop is on the cardamom crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Spice' },
    { label: 'Parent crop', value: 'Cardamom (Elettaria cardamomum)' },
    { label: 'Harvested part', value: 'Capsule (pod) with seeds enclosed' },
    {
      label: 'Harvest stage',
      value: 'Picked slightly immature, before the capsule splits',
    },
    {
      label: 'Defining post-harvest step',
      value:
        'Controlled curing that dries the capsule while retaining its green colour',
    },
    {
      label: 'Key quality attributes',
      value:
        'Green colour, capsule size, volatile oil, freedom from splits and immature pods',
    },
    {
      label: 'Trade note',
      value:
        'Sold whole because the intact husk retains the seeds’ volatile oils',
    },
  ],
  sections: [
    {
      id: 'harvest-and-curing',
      heading: 'Harvest timing and curing for colour',
      body: [
        {
          type: 'paragraph',
          text: 'Cardamom capsules are picked slightly immature, and the timing is set by a defect rather than by ripeness. Left to ripen fully, the capsule splits open on the plant — and a split capsule is a downgraded capsule, because it has stopped being a sealed container and its seeds are exposed to the air. Since capsules on a single shoot mature unevenly, the crop is picked over repeatedly by hand across a season, taking only what is ready.',
        },
        {
          type: 'paragraph',
          text: 'Curing then has to accomplish two things that pull in opposite directions. The capsule must be dried enough to be stable, but it must stay green while it happens — and green is exactly what chlorophyll does not do when it is heated, lit, or dried slowly. Cardamom curing is therefore a controlled operation in a way that many spice dryings are not: capsules are cured in flue-cured or electric drying houses at moderate, controlled heat and away from direct sun, because open sun-drying, straightforward and cheap as it is for chillies or pepper, bleaches cardamom to a pale straw colour and destroys most of its value.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The colour is not the flavour',
          text: 'Green husk colour drives the price of cardamom but contributes almost none of its aroma, which sits in the seeds. A bleached capsule may be perfectly aromatic and still fail its grade. This is an honest case of a commodity graded substantially on appearance rather than on the attribute the buyer ultimately uses.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Cardamom grades are built on colour and size. Depth and uniformity of green comes first, then capsule size — bold, large capsules command a premium and are sorted by screening — followed by volatile oil content, which carries the aroma, and the proportion of splits, empty, malformed, and immature capsules in the lot. Grade names are origin-specific and often refer to a producing region or a screen size rather than to any universal scale.',
        },
        {
          type: 'list',
          items: [
            'Bleached or yellowed capsules from sun exposure or poorly controlled curing',
            'Split and open capsules that no longer seal the seeds',
            'Immature and shrivelled capsules, light and poorly filled',
            'Empty capsules with little or no seed inside',
            'Loss of volatile oil from over-drying, age, or storage in the open',
            'Extraneous matter — stalks, husk fragments, and foreign material',
            'Mould on inadequately dried lots',
          ],
        },
        {
          type: 'paragraph',
          text: 'Two of the defects here are really the same event seen from different sides. A split capsule fails on appearance and loses aroma, because the split is both a visual defect and the breach of the seal that was keeping the volatile oil in. That is the logic that runs through cardamom grading: the husk’s condition is a proxy for what has happened to the seeds inside, which the buyer cannot see.',
        },
      ],
    },
    {
      id: 'storage-and-trade',
      heading: 'Storage, aroma loss, and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Cured cardamom is a dry, ambient-stable commodity that ships in bags, cartons, and containers without refrigeration, but it is a decaying asset in two respects at once. The green fades — pigments degrade with light, heat, and time, so a lot loses grade value in store even when nothing goes wrong with it — and the volatile oil escapes gradually, taking the aroma with it. Cardamom is therefore stored sealed, cool, and dark, and lots are traded with an eye on age in a way that a more inert spice would not be.',
        },
        {
          type: 'paragraph',
          text: 'Both problems explain why the commodity moves whole and why the trade resists grinding it early. The intact husk is a natural barrier holding the seeds’ oils in place, and ground cardamom loses aroma quickly once that barrier is gone — so the capsule is sold as-is, and grinding happens close to use. As a dried spice cardamom carries the same standing requirement to be adequately dried and kept dry, since inadequately dried or rewetted lots support moulds like any tropical dried commodity.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No curing or grade figures are given here',
          text: 'Curing temperatures and schedules, target moisture, volatile-oil minima, and screen-size bands for cardamom are origin- and standard-specific. AgricultureID does not publish figures; consult the standard in force and the origin grade description.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Green colour depth and uniformity',
    'Capsule size (boldness)',
    'Volatile oil content',
    'Freedom from splits',
    'Seed fill',
    'Moisture content',
  ],
  commonDefects: [
    'Bleached or yellowed capsules',
    'Split and open capsules',
    'Immature and shrivelled capsules',
    'Empty capsules',
    'Loss of volatile oil',
    'Extraneous matter and stalks',
    'Mould on inadequately dried lots',
  ],
  moistureContext:
    'Traded dry, but the drying is constrained by colour: it must go far enough for stability while staying gentle enough to keep the husk green. Inadequately dried or rewetted lots support moulds, as with any tropical dried spice.',
  storageContext:
    'Ambient-stable in sealed packaging, held cool and dark; both the green colour and the volatile oil degrade with light, heat, and time, so age is a real commercial factor even in a sound lot.',
  transportContext:
    'Ships in bags, cartons, and containers without refrigeration; moves whole rather than ground because the intact husk retains the seeds’ volatile oils, and protection from moisture and light governs arrival quality.',
  majorProducingRegions: [
    'South Asia',
    'Central America',
    'Southeast Asia',
    'East Africa',
  ],
  majorTradingRegions: [
    'Middle East',
    'South Asia',
    'Europe',
    'Central America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0908.31',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cardamoms, neither crushed nor ground. Crushed or ground cardamom falls under 0908.32.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'hermetic-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'post-harvest', slug: 'curing' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cardamom as a traded spice commodity, curing practice, and trade context',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Cardamom harvest timing, controlled curing for colour retention, and grading attributes',
    },
    {
      sourceId: 'usda',
      citedFor: 'Whole spice product description and quality attributes',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Cardamom botany, producing origins, and commercial description',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade; production concentrated in humid tropical highlands. Grade names and screen sizes are origin-specific and classification codes are versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No curing temperature, schedule, moisture, volatile-oil, or screen-size figures are given here — these are origin- and standard-specific and belong to sourced guidance.',
    'Cardamom grade names are origin-specific and often reference a producing region or screen size; there is no universal grading scale for the commodity.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Green Cardamom: The Cured Capsule Spice Commodity',
    description:
      'Green cardamom as a commodity: picking before capsules split, curing that preserves the green husk, grading on colour and size, and volatile oil loss in store.',
    keywords: [
      'green cardamom',
      'cardamom commodity',
      'cardamom curing',
      'cardamom grading',
      'small cardamom',
    ],
  },
  structuredData: { article: true },
};
