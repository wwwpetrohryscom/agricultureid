import type { CommodityContent } from '@/types/content';

export const rawCowMilk: CommodityContent = {
  id: 'commodity-raw-cow-milk',
  slug: 'raw-cow-milk',
  contentType: 'commodity',
  title: 'Raw Cow Milk',
  alternativeNames: ['Raw bovine milk', 'Farm-gate milk', 'Whole raw milk'],
  category: 'Livestock product commodity',
  subcategory: 'Bovine dairy',
  commodityClass: 'livestock-product',
  physicalForm: 'liquid',
  harvestedPart:
    'Whole milk as drawn at milking, before separation or heat treatment',
  sourceLivestock: { type: 'livestock', slug: 'cattle' },
  summary:
    'Raw cow milk is the untreated liquid obtained at milking from dairy cattle, collected as a bulk commodity and moved chilled to a processor. It is bought on compositional and hygiene criteria rather than on volume alone, and it is the feedstock from which the whole dairy chain is built.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Raw cow milk is the commodity that leaves a dairy farm: the whole milk drawn at milking, pooled in a farm tank, and collected for processing. It is not a finished dairy product and, in most markets, it is not what reaches a consumer — it is an intermediate traded between the farm and the processor, usually under a supply contract rather than on an open spot market.',
    },
    {
      type: 'paragraph',
      text: 'Two features dominate how this commodity behaves commercially. It is highly perishable, so the clock starts at milking and the lot must be cooled immediately and kept cold until it is processed. And it is heterogeneous: its composition varies with the animal, stage of lactation, feeding, and season, so the same volume of milk is not the same commodity from one collection to the next. Both facts follow from the harvested lot, not from the husbandry of the herd, which is covered on the cattle page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Livestock product (dairy)' },
    {
      label: 'Source animal',
      value: 'Cattle (Bos taurus and Bos indicus dairy herds)',
    },
    { label: 'Physical form', value: 'Liquid, collected and moved in bulk' },
    {
      label: 'Principal use',
      value: 'Food — processed into fluid milk and dairy products',
    },
    {
      label: 'Traded on',
      value: 'Compositional criteria and hygiene criteria, per contract',
    },
    {
      label: 'Defining constraint',
      value:
        'Highly perishable — cooled immediately after milking and held chilled',
    },
    { label: 'Main separation streams', value: 'Cream and skim milk' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded lot is bulk raw milk: the pooled output of a herd over one or more milkings, held in a farm tank and collected by tanker. Pooling matters, because it means the commodity is an average rather than the milk of any one animal. A collection is normally combined again with milk from other farms in the tanker and at the reception dock, so the lot identity that a payment or a rejection attaches to is defined by the collection and sampling arrangements, not by the physical liquid alone.',
        },
        {
          type: 'paragraph',
          text: 'Milk is an emulsion of fat in an aqueous phase carrying protein, lactose, and minerals. Its commercial value is driven mainly by the fat and protein it carries, because those are the components processors recover into products. This is why milk is very commonly paid for on a component basis rather than by volume: a litre is a unit of handling, not a unit of value.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Animal, herd, and lot',
          text: 'The dairy cow is a living animal; the herd is a management unit; the commodity is the pooled, cooled milk being collected and sold. A statement true of one is not automatically true of the others.',
        },
      ],
    },
    {
      id: 'trading-criteria',
      heading: 'How it is bought: composition and hygiene',
      body: [
        {
          type: 'paragraph',
          text: 'Raw milk trades against two distinct families of criteria. Compositional criteria describe what the milk contains — principally fat and protein, and often lactose, total solids, and solids-not-fat. These determine how much product the milk will make and therefore what it is worth. Hygiene criteria describe the condition of the milk as a lot: microbiological load, somatic cell measurements, freezing point (as a check on added water), temperature at collection, and freedom from residues and inhibitory substances.',
        },
        {
          type: 'paragraph',
          text: 'A collection that fails a hygiene criterion can be rejected outright, whereas compositional results usually adjust price rather than acceptance. That asymmetry is the basic commercial logic of the commodity: composition sets value, hygiene sets admissibility.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No numerical criteria are given here',
          text: 'The limits that apply to compositional and hygiene criteria — and the consequences of exceeding them — are set by jurisdiction-specific regulation and by the individual supply contract. They differ between countries and are revised over time. AgricultureID publishes no universal figures; consult the regulation in force in the relevant jurisdiction and the applicable contract.',
        },
      ],
    },
    {
      id: 'perishability-and-cold-chain',
      heading: 'Perishability and the cold chain',
      body: [
        {
          type: 'paragraph',
          text: 'Milk is a nutrient-rich liquid at body temperature when it is drawn, which makes it an excellent growth medium. Cooling immediately after milking is what turns a rapidly deteriorating fluid into a storable lot: chilling slows microbial growth and enzymatic change, buying the time needed to accumulate a tanker load and reach a processor. The commodity therefore exists inside an unbroken cold chain from the farm tank through collection to reception.',
        },
        {
          type: 'paragraph',
          text: 'Because deterioration is cumulative and irreversible, time and temperature history matter as much as the reading taken at reception. Milk that has been warm and then re-chilled may test acceptably on temperature yet carry the consequences of the excursion. Handling is also mechanical: excessive agitation, air incorporation, and pumping can damage the fat globules and affect how the milk separates and processes downstream.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Essentially all raw cow milk goes to food use, but almost none of it is consumed in the form in which it is traded. At the processor it is standardised and heat-treated, and the first physical operation applied to most of it is separation — centrifugal division into a fat-rich cream stream and a fat-depleted skim stream. These are genuine co-products: separation deliberately produces both at once, both are marketed, and the processor recombines them in chosen proportions to make fluid milks of defined fat content.',
        },
        {
          type: 'list',
          items: [
            'Fluid milk — standardised and heat-treated for retail and catering',
            'Cheese, butter, yoghurt, and other fermented and concentrated products',
            'Milk powders and dried dairy ingredients for storage and long-distance trade',
            'Dairy ingredients for the wider food industry',
          ],
        },
        {
          type: 'paragraph',
          text: 'Downstream of separation, further streams appear — buttermilk from churning, whey from cheesemaking — but these derive from those processes rather than directly from the raw milk lot, and they are not modelled here as pathways of this commodity.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Raw milk is stored on-farm in insulated, refrigerated bulk tanks and moved in insulated road tankers, typically over short distances to a nearby processing site. Unlike a grain, it cannot wait: there is no drying step that converts it into a stable commodity, so storage is a matter of holding a perishable lot for hours or days, not months. Long-distance and long-duration dairy trade therefore happens in processed forms — powders, cheese, butter — not in raw milk.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes raw cow milk as a traded commodity. It is not milking guidance, veterinary advice, hygiene instruction, or a food-safety determination, and it makes no statement about the fitness of any milk for any use. The sale, treatment, and consumption of raw milk are regulated, and the rules differ sharply between jurisdictions.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Fat content',
    'Protein content',
    'Total solids and solids-not-fat',
    'Microbiological load',
    'Somatic cell measurements',
    'Temperature at collection',
    'Freezing point (added-water check)',
    'Freedom from residues and inhibitory substances',
  ],
  commonDefects: [
    'Elevated microbial counts from delayed or inadequate cooling',
    'Off-flavours and rancidity from lipolysis or feed carry-over',
    'Added water (detected as a raised freezing point)',
    'Residues of veterinary medicines or cleaning agents',
    'Visible abnormality, sediment, or extraneous matter',
    'Damage to fat globules from over-agitation in handling',
  ],
  moistureContext:
    'Milk is predominantly water and is not traded on a moisture basis. The corresponding measure is total solids, and the freezing point is used as a check on whether water has been added.',
  storageContext:
    'Held in refrigerated farm bulk tanks for hours to a few days and kept chilled without interruption; there is no drying or curing step that renders the raw commodity shelf-stable.',
  transportContext:
    'Collected by insulated road tanker on short, scheduled routes to a processor; loads from multiple farms are commingled, so sampling at collection defines lot identity for payment and rejection.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'South Asia',
    'North America',
    'South America',
    'Oceania',
  ],
  majorTradingRegions: [
    'Largely domestic — the raw commodity is rarely traded across borders',
    'International dairy trade moves in processed forms rather than as raw milk',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Milk and cream, not concentrated nor containing added sugar or other sweetening matter, at 4-digit heading level; subheadings distinguish fat content. Raw farm-gate milk rarely crosses a customs border, so this heading is given as classification context rather than as a description of routine trade.',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'skim-milk' },
    { type: 'commodity-product', slug: 'cream' },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'sheep-milk' },
    { type: 'commodity', slug: 'goat-milk' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Raw milk as a traded dairy commodity and its collection chain',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Dairy commodity item coverage and producing-region context',
    },
    {
      sourceId: 'woah',
      citedFor: 'Animal-health context relevant to milk-producing herds',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Milk composition, payment criteria, and farm-to-processor handling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Compositional and hygiene requirements, payment schemes, and rules on raw-milk sale are jurisdiction-specific and revised over time.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not milking, veterinary, hygiene, or food-safety guidance and makes no determination about any lot.',
    'No numerical compositional or hygiene limits are given: those are set by jurisdiction-specific regulation and by supply contracts, and they differ between markets.',
    'Composition varies with animal, breed, lactation stage, feeding, and season, so no universal analysis is stated here.',
    'Producing regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Raw Cow Milk: The Traded Dairy Commodity',
    description:
      'Raw cow milk as a commodity: what leaves the dairy farm, why it is cooled at once, the compositional and hygiene criteria it trades on, and what it becomes.',
    keywords: [
      'raw cow milk',
      'raw milk commodity',
      'milk composition',
      'bulk milk collection',
      'dairy cold chain',
    ],
  },
  structuredData: { article: true },
};
