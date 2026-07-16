import type { CommodityContent } from '@/types/content';

export const ryeGrain: CommodityContent = {
  id: 'commodity-rye-grain',
  slug: 'rye-grain',
  contentType: 'commodity',
  title: 'Rye Grain',
  alternativeNames: ['Rye', 'Bread rye', 'Feed rye'],
  category: 'Cereal grain commodity',
  subcategory: 'Common rye',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (grain), threshed free of the glumes',
  sourceCrop: { type: 'crop', slug: 'rye' },
  summary:
    'Rye grain is the harvested caryopsis of rye, milled mainly into rye flour for dense breads and used for feed and distilling. Falling number and ergot are the two attributes that most often decide where a lot goes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rye grain is a bread cereal traded on a small fraction of wheat volumes but with a well-defined market, concentrated in northern and eastern Europe where rye bread is a staple. It is also a feed grain and the base of a distinct distilling tradition. Its commodity behaviour differs from wheat in ways that follow directly from its chemistry rather than from any agronomic preference.',
    },
    {
      type: 'paragraph',
      text: 'Two things dominate the assessment of a rye lot. Rye is highly susceptible to sprouting and enzyme activity, so the falling number test — which measures how far starch-degrading enzymes have already gone — separates breadmaking rye from feed rye more decisively than in any other cereal. And rye is the classic host of ergot, a fungal structure that arrives in the harvested lot as a hard, dark body and is regulated as a contaminant with real toxicity.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Rye (Secale cereale)' },
    { label: 'Harvested part', value: 'Caryopsis (grain)' },
    {
      label: 'Principal uses',
      value: 'Food (rye bread and crispbread), feed, and distilling',
    },
    {
      label: 'Decisive milling attribute',
      value: 'Falling number — enzyme activity from sprouting',
    },
    {
      label: 'Principal contaminant',
      value: 'Ergot sclerotia, regulated in food and feed',
    },
    { label: 'Main product', value: 'Rye flour' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Rye grain is longer, narrower, and greener-grey than wheat, and it behaves differently in the bakery because of what it contains rather than how it looks. Rye proteins do not form a gluten network in the way wheat proteins do; instead rye doughs are structured largely by pentosans, water-binding carbohydrates that give rye breads their dense crumb and long keeping. This is why rye flour is not a substitute for wheat flour and why rye bread is made by sourdough acidification rather than by conventional straight dough methods.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Rye is not a lesser wheat',
          text: 'Rye and wheat are different species with different dough chemistry. Rye is bought for what it does — dense, acidified, long-keeping breads — not as a cheaper stand-in for wheat, and it is graded against its own criteria.',
        },
      ],
    },
    {
      id: 'falling-number-and-milling-quality',
      heading: 'Falling number and milling quality',
      body: [
        {
          type: 'paragraph',
          text: 'Alpha-amylase breaks starch down. In a grain that has begun to germinate in the ear — which rye does readily under wet conditions near harvest — enzyme activity rises and the starch in the resulting flour is degraded during baking, giving a sticky, collapsed crumb. The falling number test measures the viscosity of a heated flour slurry and so indexes that activity; low results mean high enzyme activity and unsuitability for breadmaking.',
        },
        {
          type: 'paragraph',
          text: 'Because rye tolerates far less enzyme activity than wheat before its baking performance fails, falling number functions as the practical gate on the milling market. A lot below the miller requirement is not spoiled — it is feed or distilling grain, where enzyme activity is irrelevant or even useful. The threshold itself is a contract and standard matter and varies by market and product.',
        },
      ],
    },
    {
      id: 'ergot-and-safety',
      heading: 'Ergot and lot safety',
      body: [
        {
          type: 'paragraph',
          text: 'Ergot is the overwintering body of the fungus Claviceps purpurea, which replaces a developing grain in the ear with a hard, dark sclerotium. Rye, being cross-pollinated with open florets, is the cereal most exposed to infection, and the sclerotia are harvested along with the grain. They contain alkaloids that are toxic to humans and livestock — historically the cause of ergotism — and they are regulated accordingly in both food and feed.',
        },
        {
          type: 'paragraph',
          text: 'From a commodity standpoint ergot is a contaminant of the harvested lot, not a crop disease to be managed at this stage. It is addressed by cleaning: sclerotia differ from grain in size, shape, density, and colour, so gravity separation, indented cylinders, and optical sorting can reduce their number. Limits, sampling rules, and whether alkaloid content or sclerotia count is measured all depend on the jurisdiction and the applicable regulation.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Ergot limits are regulatory, not commercial',
          text: 'Ergot is subject to food and feed safety rules with their own sampling requirements. Meeting a commercial grade does not demonstrate compliance, and no figures are published here — consult the regulation in force.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Rye is dried and stored much as other cereals are: to a moisture appropriate to the holding period, then kept cool, aerated, and monitored. The distinctive handling requirement is cleaning. Because ergot removal and the separation of light, thin, and foreign material both happen before the grain is stored or shipped, cleaning equipment is closer to the centre of a rye chain than of a wheat chain, and the screenings it takes off must themselves be managed rather than casually fed.',
        },
        {
          type: 'paragraph',
          text: 'Rye moves in bulk by truck, rail, and vessel, and is segregated by intended market since the milling and feed routes have different requirements and prices.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed'],
  secondaryUses: ['beverage', 'seed'],
  majorQualityAttributes: [
    'Falling number (alpha-amylase activity)',
    'Ergot content',
    'Moisture content',
    'Test weight',
    'Foreign material and screenings',
    'Sound grain proportion',
  ],
  commonDefects: [
    'Sprouted grain and low falling number',
    'Ergot sclerotia',
    'Heat-damaged kernels',
    'Mould and storage fungi',
    'Shrivelled and thin kernels',
    'Foreign material',
  ],
  moistureContext:
    'Dried and held on a moisture basis appropriate to the storage period and climate; the applicable limit is set by the grade standard and contract.',
  storageContext:
    'Stored dry, cool, and aerated in bins and silos; cleaning to remove ergot and screenings normally precedes storage and shipment.',
  transportContext:
    'Moves in bulk by truck, rail, and vessel, segregated by intended market because milling and feed lots meet different requirements.',
  majorProducingRegions: [
    'Northern and Eastern Europe',
    'Europe and Central Asia',
    'North America',
  ],
  majorTradingRegions: ['Europe and Central Asia', 'North America'],
  commodityCodes: [
    {
      system: 'HS',
      code: '1002.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Rye, other than seed. Rye for sowing falls under 1002.10.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'rye-flour' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'triticale-grain' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Rye as a traded cereal and its food and feed uses',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Ergot alkaloids as a regulated contaminant of rye in food and feed',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European rye market context and cereal marketing standards',
    },
    {
      sourceId: 'usda',
      citedFor: 'Rye grading attributes and defect categories',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with production and consumption concentrated in northern and eastern Europe. Standards, ergot limits, and tariff subheadings are jurisdiction-specific.',
  limitations: [
    'This entry is reference information, not a grading determination, milling specification, or food-safety compliance statement.',
    'No falling-number thresholds, ergot limits, or moisture figures are given — these are set by the applicable standard and regulation.',
    'Ergot regulation differs by jurisdiction in both the limit and what is measured (sclerotia or alkaloids); confirm the rule in force.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rye Grain: Bread and Feed Cereal Commodity',
    description:
      'Rye grain as a commodity: why falling number gates the milling market, how ergot is handled as a regulated contaminant, plus rye dough chemistry and storage.',
    keywords: [
      'rye grain',
      'rye commodity',
      'falling number',
      'ergot sclerotia',
      'rye milling',
    ],
  },
  structuredData: { article: true },
};
