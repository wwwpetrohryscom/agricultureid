import type { CommodityProductContent } from '@/types/content';

export const wheatStraw: CommodityProductContent = {
  id: 'commodity-product-wheat-straw',
  slug: 'wheat-straw',
  contentType: 'commodity-product',
  title: 'Wheat Straw',
  alternativeNames: ['Cereal straw', 'Wheat stubble (in part)'],
  category: 'Harvest by-product',
  subcategory: 'Cereal crop residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'wheat-grain' },
  physicalForm: 'straw',
  summary:
    'Wheat straw is the dry stem material left in the field once the grain has been threshed out. It is a by-product of harvesting the grain rather than of any processing method, and it has real uses — bedding, roughage, mushroom substrate, board, and fuel — set against the soil value of leaving it where it fell.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat straw is the stem of the wheat plant: the stalk that held the ear up, dried down and left behind once threshing has separated the grain from it. A combine takes in the whole standing crop, keeps the grain, and returns the straw to the ground behind it, either spread across the field or laid in a windrow for baling. Everything the plant built that was not the grain is, at that moment, straw.',
    },
    {
      type: 'paragraph',
      text: 'It is a by-product of the harvest itself, not of a mill or a factory. Nothing was processed to make it — it arises the moment the grain is threshed out, which is why it sits differently in the product tree from bran or germ. That distinction has a practical edge: straw is decided about in the field, at harvest, by a grower weighing what a bale is worth against what the straw would have done for the soil had it stayed.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of the wheat harvest' },
    {
      label: 'Made from',
      value: 'Wheat grain (Triticum aestivum) — the same crop',
    },
    {
      label: 'Part of the plant',
      value: 'Stem residue remaining after threshing',
    },
    {
      label: 'Arises from',
      value: 'Harvest and threshing — not from a processing method',
    },
    {
      label: 'Principal uses',
      value:
        'Animal bedding, roughage feed, mushroom substrate, board and fibre, fuel',
    },
    {
      label: 'Feeding value',
      value: 'Low — a bulk roughage rather than a nutritious feed',
    },
    {
      label: 'The trade-off',
      value: 'Straw sold is straw not returned to the soil',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What wheat straw is',
      body: [
        {
          type: 'paragraph',
          text: 'Straw is what remains of the stem and leaf once the plant has senesced and the grain has been taken from it. By harvest the plant has moved what it could into the ear, and the stem left behind is largely structural material — cellulose, hemicellulose, and lignin — which is precisely why straw behaves as it does. It is strong, bulky, slow to break down, and absorbent, and those properties, rather than any nutritional content, are what its uses are built on.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A by-product of harvest, not of processing',
          text: 'Bran and germ are separated from the grain by a mill; straw is separated from the grain by the combine. Because no processing method makes it, this entry lists no producing process — the straw is simply what the field yields alongside the commodity.',
        },
        {
          type: 'paragraph',
          text: 'How much straw a crop leaves, and in what condition, is not fixed. Variety and growing season set the height and stem strength of the crop; the cutting height set on the combine decides how much of the stem is gathered rather than left standing as stubble; and the weather between threshing and baling determines whether the swath is dry enough to bale well. Straw that has been rained on repeatedly in the windrow is a poorer material than straw baled promptly.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Straw is a genuinely useful material with established markets, and none of its uses treat it as something to be got rid of. What they have in common is that they draw on its bulk, its structure, and its absorbency rather than on its feeding value.',
        },
        {
          type: 'list',
          items: [
            'Animal bedding — the largest outlet in many regions, using straw’s absorbency and its bulk to keep housed stock dry and comfortable',
            'Roughage feed — fed to ruminants as a source of bulk and fibre, generally alongside more nutritious feeds rather than in place of them',
            'Mushroom substrate — composted and used as the growing medium for cultivated mushrooms, an outlet that depends on straw being clean',
            'Board and fibre — a raw material for particleboard and other panel and fibre products',
            'Fuel — burned or otherwise converted for heat and power, drawing on its bulk as a biomass feedstock',
          ],
        },
        {
          type: 'paragraph',
          text: 'The feeding value deserves to be stated honestly rather than talked up. Straw is a poor feed: it is low in protein and its energy is locked in fibre that ruminants digest slowly and incompletely, and non-ruminants scarcely at all. It is fed because it supplies bulk and physical fibre cheaply, not because it is nourishing, and rations built on it depend on what is fed alongside. Treatments exist that improve its digestibility, but they change the economics and do not turn straw into a nutritious feed.',
        },
      ],
    },
    {
      id: 'the-removal-trade-off',
      heading: 'Removing straw, or returning it',
      body: [
        {
          type: 'paragraph',
          text: 'Straw that is not baled is chopped and spread by the combine and incorporated into the soil. This is not disposal — it is a use, and it is the alternative against which every sale of straw is measured. Incorporated straw returns organic matter to the soil, and the nutrients the stem still holds go back with it rather than leaving the field on a trailer. Organic matter contributes to soil structure, to the soil’s capacity to hold water, and to the biological activity within it, and the material that maintains it has to come from somewhere.',
        },
        {
          type: 'paragraph',
          text: 'So removing straw for sale has a soil cost, and that is the honest way to put it. The bale earns money and the straw goes to a real use elsewhere; what leaves with it is organic matter and nutrients that will not be returned to that field. Incorporation has its own costs and complications in turn — straw is slow to break down, it must be dealt with by the following cultivations, and it can interfere with establishing the next crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A trade-off, not a rule',
          text: 'What the balance comes to depends on the soil, the rotation, the climate, the straw price, and what else is returning organic matter to that ground — a livestock farm with manure to spread and an arable farm without are not in the same position. AgricultureID sets out the trade-off; it does not tell a grower which way to resolve it, and no general recommendation would be sound.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Straw is baled from the windrow and handled, stacked, and hauled as bales. It is bulky and light for its volume, which dominates its economics: straw is expensive to move relative to what it is worth, so it tends to be used near where it was grown, and bale density is a real commercial variable rather than a technical detail. Baling depends on the swath being dry, which ties the whole operation to the weather in the days after harvest.',
        },
        {
          type: 'paragraph',
          text: 'In store, moisture is the thing that matters. Straw baled damp or stored wet will heat and mould — a spoilage problem for a bedding or feed material, a health problem for the stock it is used for, and, where bales heat substantially, a recognised fire risk in stacks. Straw is therefore baled dry and kept dry, under cover or sheeted, and stacks are built so that air can move around them.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'industrial', 'energy'],
  majorQualityAttributes: [
    'Moisture content at baling',
    'Bale density',
    'Freedom from mould and spoilage',
    'Cleanliness (soil and foreign matter)',
    'Colour and condition (weathering in the swath)',
  ],
  processContext:
    'Not the output of a processing method: straw is the stem residue left in the field once the combine has threshed the grain out of the standing crop, then either chopped and spread for incorporation or windrowed and baled.',
  storageContext:
    'Baled and stacked; bulky and costly to transport relative to its value, so usually used near where it was grown. Baled dry and kept dry — damp straw heats, moulds, and carries a fire risk in stacks.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1213.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cereal straw and husks, unprepared, whether or not chopped, ground, pressed or in the form of pellets. The subheading covers cereal straw generally, not wheat straw alone.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'wheat-bran' },
    { type: 'commodity-product', slug: 'wheat-germ' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant', 'forage', 'macronutrient'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cereal straw as a crop residue and its bedding, feed, and fuel uses',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Straw management at harvest: baling versus incorporation and its implications',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Crop residue removal and its relationship to soil organic matter and nutrients',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Straw as a low-quality roughage in ruminant nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global wheat-growing regions. Straw markets, residue-management practice, and any rules on field burning are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a residue-management recommendation, feed formulation, or agronomic decision aid.',
    'No straw yields, nutrient contents, digestibility values, or bale weights are given here — they vary with variety, season, cutting height, and baling, and are situation- and contract-specific.',
    'Whether straw is better sold or incorporated depends on the soil, rotation, climate, price, and organic matter returning from other sources; this entry sets out the trade-off and does not resolve it.',
    'Treatments that improve straw digestibility exist but are not described here; where they are used, they are governed by jurisdiction-specific feed rules.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Straw: The By-Product Left After Threshing',
    description:
      'Wheat straw as a harvest by-product: why no process makes it, its bedding, roughage, substrate, board, and fuel uses, and the soil cost of baling it off.',
    keywords: [
      'wheat straw',
      'cereal straw',
      'crop residue',
      'straw incorporation',
      'animal bedding',
    ],
  },
  structuredData: { article: true },
};
