import type { CommodityContent } from '@/types/content';

export const coffeeCherries: CommodityContent = {
  id: 'commodity-coffee-cherries',
  slug: 'coffee-cherries',
  contentType: 'commodity',
  title: 'Coffee Cherries',
  alternativeNames: [
    'Coffee fruit',
    'Fresh coffee cherry',
    'Cereza (regional term)',
  ],
  category: 'Beverage crop commodity',
  subcategory: 'Fresh harvested fruit for processing',
  commodityClass: 'beverage-crop',
  physicalForm: 'cherry',
  harvestedPart:
    'Drupe (the whole fresh fruit, containing the seeds that become coffee beans)',
  sourceCrop: { type: 'crop', slug: 'coffee' },
  summary:
    'Coffee cherries are the fresh fruit picked from the coffee tree — a perishable commodity with a life measured in hours. They must reach processing the same day, because the sugary pulp begins fermenting immediately and defects formed here follow the coffee to the cup.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffee cherries are the fresh fruit of the coffee tree: a small red or yellow drupe with sweet pulp surrounding, typically, two seeds. Those seeds are what the world buys as coffee, but the cherry itself is a distinct commodity — one that is bought, weighed, and paid for at collection points across the producing world every harvest day, and one whose quality is almost entirely determined by the picker.',
    },
    {
      type: 'paragraph',
      text: 'It is also one of the most perishable commodities in agriculture. A picked cherry is a bag of sugar and water at tropical temperature, and it starts fermenting almost at once. The window between picking and processing is measured in hours, not days, and cherries that sit too long — in a sack, in a truck, in a heap at a collection station — produce defects that survive drying, survive storage, survive shipping, and appear in the cup months later on another continent. This entry describes the fresh fruit; the tree belongs to the coffee crop entry.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Beverage crop (fresh fruit for processing)',
    },
    {
      label: 'Parent crop',
      value: 'Coffee (Coffea arabica and Coffea canephora)',
    },
    {
      label: 'Harvested part',
      value: 'The whole fresh cherry, containing the coffee seeds',
    },
    {
      label: 'Perishability',
      value: 'Extreme: must reach processing the same day it is picked',
    },
    {
      label: 'Quality basis',
      value:
        'Ripeness at picking and the proportion of ripe cherries in the lot',
    },
    {
      label: 'Becomes',
      value:
        'Green coffee, via wet or dry processing — a separate traded commodity',
    },
    {
      label: 'Bought by',
      value: 'Wet mills, dry mills, and collection stations, usually daily',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A coffee cherry has a skin, a layer of sweet pulp, a slippery mucilage layer, a papery parchment, and a thin silverskin, all wrapped around the seeds. Every one of those layers has to be removed before there is a coffee bean to trade, and the differences between coffee processing methods are differences in when and how they come off. The cherry, in other words, is the raw material of an operation, and it is bought as such.',
        },
        {
          type: 'paragraph',
          text: "The trade in cherries is local by necessity. Smallholders deliver the day's picking to a wet mill or a collection station within a short distance and are paid on weight and on a visual assessment of ripeness. Estates process their own. Nothing about this trade crosses a border, because nothing in it could survive the journey — which is precisely why coffee cherries and green coffee are two different commodities and not two views of the same one.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The cherry is not the bean',
          text: "Coffee cherries and green coffee are both commodities of the coffee crop, but they are not related as commodity and product in AgricultureID's model. Green coffee is the internationally traded form, described on its own entry; the cherry is the perishable fresh fruit that processing turns into it.",
        },
      ],
    },
    {
      id: 'ripeness-and-picking',
      heading: 'Ripeness and picking',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee ripens unevenly. A single branch carries green, ripening, ripe, and overripe cherries at the same time, and the tree keeps producing through a harvest that runs for weeks or months. This is why fine coffee is picked selectively by hand, pass after pass, taking only the ripe cherries and returning days later for the next — a labour-intensive process that is the largest single cost in producing quality coffee.',
        },
        {
          type: 'paragraph',
          text: 'The alternative is strip picking, taking everything from the branch in one pass, which is faster and cheaper and delivers a mixed lot. Underripe cherries yield beans that taste grassy and astringent; overripe and dried cherries contribute fermented and mouldy flavours. Because the seed inside develops with the fruit, ripeness at picking sets a ceiling on the cup quality that no amount of skilled processing or careful roasting will lift.',
        },
      ],
    },
    {
      id: 'the-race-to-processing',
      heading: 'The race to processing',
      body: [
        {
          type: 'paragraph',
          text: 'Once picked, the cherry is on a clock. Its pulp is sugary and its skin is broken easily by handling, and at ambient tropical temperature microbial activity begins within hours. Cherries left heaped in sacks heat internally, ferment unevenly, and develop off flavours that pass into the seed. Delivery to the mill on the day of picking is therefore not a best practice but the basic requirement of the commodity, and the geography of coffee processing — mills scattered close to the farms rather than centralised — exists because of it.',
        },
        {
          type: 'paragraph',
          text: 'At the mill, cherries are usually floated in water as the first sorting step: ripe, dense cherries sink while underripe, dried, and insect-damaged ones float and are separated off. This simple density separation is one of the most effective quality interventions in the whole chain, and it is possible only because the lot is still fresh.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Timing and conditions belong to sourced guidance',
          text: 'Acceptable delivery intervals, holding conditions, and processing parameters for coffee cherries are set by regional practice and technical guidance. AgricultureID publishes no times, temperatures, or fermentation figures.',
        },
      ],
    },
    {
      id: 'processing-routes',
      heading: 'Processing routes: how the cherry becomes green coffee',
      body: [
        {
          type: 'paragraph',
          text: 'Two broad routes lead from cherry to green coffee, and the choice is one of the defining decisions of the coffee world. In the washed or wet route, the skin and pulp are stripped from the cherry mechanically within hours, the mucilage is removed by fermentation or friction, and the parchment-covered bean is dried. In the natural or dry route, the whole cherry is dried intact, fruit and all, and the dried layers are hulled off afterwards.',
        },
        {
          type: 'paragraph',
          text: 'The routes are not interchangeable, and they impose different demands on the cherry. Wet processing requires water, infrastructure, and speed, and it is unforgiving of unripe fruit — but it delivers a cleaner, more consistent bean. Dry processing needs little equipment but a long spell of dry weather and a great deal of turning and attention, since a thick fruit layer dried badly moulds. Honey and pulped-natural routes sit between them, removing skin but leaving some mucilage to dry on the bean.',
        },
        {
          type: 'list',
          items: [
            'Washed (wet) — skin and pulp removed immediately, mucilage removed, bean dried in parchment',
            'Natural (dry) — the whole cherry dried intact and hulled afterwards',
            'Honey and pulped-natural — skin removed, some mucilage left to dry on the bean',
          ],
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Cherry lots are assessed on the proportion of ripe fruit, freedom from foreign matter and debris, and the absence of overripe, dried, and damaged cherries. Because payment at collection is usually on weight with a ripeness assessment, the incentives in a cherry trade are worth understanding: a system that pays on weight alone rewards volume over selectivity, and cherry pricing structures are one of the levers producing countries use to influence coffee quality.',
        },
        {
          type: 'list',
          items: [
            'Underripe green cherries, yielding astringent, grassy beans',
            'Overripe and dried cherries picked from the branch or the ground',
            'Fermentation damage from cherries held too long before processing',
            'Insect damage, notably from the coffee berry borer',
            'Foreign matter — leaves, twigs, and stones in the delivered lot',
            'Crushed and split cherries from rough handling in transport',
          ],
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['food', 'feed'],
  majorQualityAttributes: [
    'Proportion of ripe cherries in the lot',
    'Time from picking to processing',
    'Freedom from overripe and dried cherries',
    'Freedom from insect damage',
    'Freedom from foreign matter',
    'Cherry integrity (unbroken skin)',
  ],
  commonDefects: [
    'Underripe green cherries',
    'Overripe and dried cherries',
    'Fermentation damage from delayed processing',
    'Coffee berry borer damage',
    'Foreign matter in the lot',
    'Crushed and split cherries',
  ],
  moistureContext:
    'The fresh cherry is high in water and sugar, which is exactly why it cannot wait; the moisture reduction that makes coffee storable happens during processing, not on this commodity.',
  storageContext:
    'Not a stored commodity in any meaningful sense. Cherries are held only for the hours between picking and milling, and holding them longer is itself the defect mechanism.',
  transportContext:
    'Moves in sacks and bins over short distances from farm to wet mill or collection station, usually on the day of picking; heaping and delay in transit cause fermentation damage.',
  majorProducingRegions: [
    'Central and South America',
    'East and West Africa',
    'Southeast Asia',
    'The Pacific and the Caribbean',
  ],
  majorTradingRegions: [
    'Traded only locally, from farm to mill; the fruit does not enter international trade',
    'Central and South America',
    'East Africa',
    'Southeast Asia',
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'sun-drying' }],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'green-coffee' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['perennial-crop', 'cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Coffee harvesting, cherry handling, and processing routes',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Coffee quality research and producing-country value-chain context',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Coffee production and harvest reporting context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on the coffee fruit and its structure',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Producing countries in the tropics. Cherry trading arrangements, pricing structures, and processing practice are strongly country- and region-specific.',
  limitations: [
    'This entry describes the fresh fruit as a commodity; it is not processing guidance, a quality protocol, or a pricing statement.',
    'No delivery intervals, fermentation times, or processing parameters are given here — these are regional and belong to sourced technical guidance.',
    'Processing routes are described at concept level; the terminology and practice vary between producing countries.',
    'Coffee-growing regions are listed indicatively and are not ranked by production volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Coffee Cherries: The Fresh Fruit at Harvest',
    description:
      'Coffee cherries as a commodity: the perishable fruit that must reach the mill the same day, ripeness at picking, and the wet and dry routes to green coffee.',
    keywords: [
      'coffee cherries',
      'coffee fruit',
      'coffee processing',
      'wet processing',
      'coffee ripeness',
    ],
  },
  structuredData: { article: true },
};
