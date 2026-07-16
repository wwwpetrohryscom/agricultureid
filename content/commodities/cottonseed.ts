import type { CommodityContent } from '@/types/content';

export const cottonseed: CommodityContent = {
  id: 'commodity-cottonseed',
  slug: 'cottonseed',
  contentType: 'commodity',
  title: 'Cottonseed',
  alternativeNames: ['Cotton seed', 'Whole cottonseed', 'Fuzzy cottonseed'],
  category: 'Oilseed commodity',
  subcategory: 'Oilseed separated at ginning',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Seed separated from the lint during ginning of seed cotton',
  sourceCrop: { type: 'crop', slug: 'cotton' },
  summary:
    'Cottonseed is the seed separated from lint when seed cotton is ginned. It arises as a co-product of a fibre crop yet is traded in its own right as an oilseed and as a livestock feed, and gossypol — a compound native to the seed — governs where it can be used.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cottonseed occupies a position no other oilseed shares. Nobody grows cotton for the seed: the crop is grown for lint, seed cotton is ginned to separate the two, and the seed comes off that operation as a co-product. Yet once separated, cottonseed is bought, sold, shipped, crushed, and fed as a commodity on its own terms — which is why it is modelled here as a commodity rather than as a product of something else.',
    },
    {
      type: 'paragraph',
      text: 'Its supply follows from lint economics rather than oilseed demand. Cottonseed volumes rise and fall with cotton area and gin throughput, not with what crushers or dairy feeders would like to buy, and this inelasticity is a defining feature of the market. The second defining feature is gossypol, a compound the plant makes for its own defence, which restricts the seed and its meal to uses where the animal can tolerate it.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Oilseed (separated from a fibre crop at ginning)',
    },
    { label: 'Parent crop', value: 'Cotton (Gossypium species)' },
    {
      label: 'Origin in the chain',
      value: 'Co-product of ginning seed cotton, traded as its own commodity',
    },
    {
      label: 'Principal uses',
      value:
        'Crushing for oil and meal; whole seed fed to ruminants; planting seed',
    },
    {
      label: 'Defining constraint',
      value: 'Gossypol — restricts use in non-ruminant diets',
    },
    {
      label: 'Trade forms',
      value: 'Fuzzy (linters attached), delinted, and de-linted planting seed',
    },
    {
      label: 'Supply driver',
      value: 'Cotton lint economics and gin throughput, not oilseed demand',
    },
  ],
  sections: [
    {
      id: 'from-gin-to-commodity',
      heading: 'From the gin to a commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Seed cotton arriving at a gin is a mixture of lint and seed. Ginning separates them, and the gin then has two products to sell: lint, which is the reason the operation exists, and seed, which leaves as fuzzy cottonseed — still carrying the short fibres, called linters, that the gin saw could not remove.',
        },
        {
          type: 'paragraph',
          text: 'Those linters are themselves recovered at crushing plants and delinting operations and sold into cellulose-based industrial uses. AgricultureID does not yet publish a cotton linters entry, so the pathway is described here rather than linked.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A co-product that is also a commodity',
          text: 'Cottonseed is a co-product of ginning and, simultaneously, a commodity with its own buyers, prices, specifications, and codes. The two statements are not in tension: where a material sits in one process does not determine whether it is traded in its own right.',
        },
      ],
    },
    {
      id: 'gossypol',
      heading: 'Gossypol and where cottonseed can go',
      body: [
        {
          type: 'paragraph',
          text: 'Gossypol is a terpenoid produced in the pigment glands of the cotton plant and present in the seed. It is toxic to monogastric animals — pigs and poultry in particular — and this fact, rather than protein or oil content, determines the shape of the cottonseed market. Mature ruminants are considerably more tolerant, because rumen function binds a substantial part of the compound, so cottonseed and its meal flow overwhelmingly to cattle rather than to pig and poultry diets.',
        },
        {
          type: 'paragraph',
          text: 'The distinction between free and bound gossypol is the one the trade turns on: free gossypol is the biologically active fraction, and processing conditions influence how much of it remains free. Refining removes gossypol from the oil, which is why cottonseed oil is a food oil while cottonseed meal remains restricted. Glandless cotton varieties, bred to lack the pigment glands, have been developed and would remove the constraint, but they have not displaced conventional cotton in commercial production.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A constraint stated, not quantified',
          text: 'Permitted uses and any limits on gossypol in feed are set by feed-safety authorities and differ by jurisdiction. This entry states that the constraint exists and which species it concerns. It gives no limits, inclusion rates, or dosages — consult the applicable authority.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses and pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Cottonseed has an outlet that most oilseeds do not: it is fed whole. Whole cottonseed is valued in dairy rations because it delivers energy, protein, and effective fibre in a single ingredient — an unusual combination that makes it attractive despite its handling difficulties. The rest is crushed, yielding oil and meal together, and a small share is retained as planting seed.',
        },
        {
          type: 'list',
          items: [
            'Feed — whole cottonseed in dairy and beef rations',
            'Crushing — cottonseed oil and cottonseed meal, produced together',
            'Seed — delinted and treated seed for planting',
            'Industrial — linters recovered for cellulose uses',
          ],
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Fuzzy cottonseed is notoriously awkward material. The linters make it fibrous and bridging: it hangs up in bins and hoppers, resists free flow, and does not behave like a free-flowing grain in handling equipment. Feeders and gins deal with this by storing it in flat piles and moving it with loaders rather than by relying on gravity flow. Some seed is treated with additives to improve flow, a practice specific to this commodity.',
        },
        {
          type: 'paragraph',
          text: 'Stored wet or in poorly drained piles, cottonseed heats and moulds, and heated seed loses both oil quality and feed value. Because the commodity leaves the gin at the pace the gin sets rather than at the pace buyers want it, storage is often a necessity rather than a choice, which makes pile management a routine part of the trade.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the form, climate, storage method, and holding period. No universal target is given here; consult the applicable national guidance.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'oil', 'seed'],
  secondaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Oil content',
    'Free fatty acid content',
    'Linter content (fuzzy or delinted)',
    'Foreign material and gin trash',
    'Free gossypol status (contract-specified)',
  ],
  commonDefects: [
    'Heat-damaged seed',
    'Mouldy seed',
    'Immature and undeveloped seed',
    'Insect damage',
    'Gin trash, leaf, and foreign material',
    'Rancid seed',
  ],
  moistureContext:
    'Held dry; seed stored wet, especially in outdoor piles, heats and moulds, and heated seed loses both oil quality and feed value. Limits are set by contract and by national guidance.',
  storageContext:
    'Fibrous and bridging in flow, so commonly stored in flat piles and handled with loaders rather than by gravity; drainage and pile management are central.',
  transportContext:
    'Moves in bulk trailers, containers, and by rail; the linters make it slow and awkward to load and unload compared with free-flowing oilseeds.',
  majorProducingRegions: [
    'East Asia and South Asia',
    'North America',
    'Central Asia',
    'Sub-Saharan Africa',
    'South America',
  ],
  majorTradingRegions: [
    'North America',
    'South Asia',
    'Central Asia',
    'East Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1207.29',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cotton seeds, other than seed for sowing — the subheading covering cottonseed traded for crushing and feed.',
    },
    {
      system: 'HS',
      code: '1207.21',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cotton seeds, seed for sowing.',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'cottonseed-oil' },
    { type: 'commodity-product', slug: 'cottonseed-meal' },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'cotton-linters' }],
  storageSystems: [{ type: 'post-harvest', slug: 'grain-storage' }],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cottonseed as an oilseed separated at ginning and its uses',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Cottonseed trade forms, ginning context, and market description',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Cottonseed supply as a function of cotton lint production',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Gossypol in cottonseed products as a documented feed-safety consideration',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Whole cottonseed and gossypol tolerance in livestock feeding',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed rules for gossypol-bearing materials, trade conventions, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This is a reference account of the commodity, not a grading determination, feed-safety assessment, or customs classification.',
    'No gossypol limits, inclusion rates, oil-content, or moisture figures are given here — feed authorities, standards, and contracts set them. Species tolerance is stated qualitatively and varies with animal age, physiological state, diet, and the free-versus-bound fraction.',
    'A FAOSTAT item code is not cited here because the correct derived-item code could not be confirmed.',
    'Regions are indicative groupings only, reflecting where cotton is ginned rather than a ranked series.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cottonseed: Oilseed Co-Product of Cotton Ginning',
    description:
      'Cottonseed as a commodity: how ginning separates it from lint, why gossypol steers it to ruminants, whole-seed feeding, crushing pathways, and handling.',
    keywords: [
      'cottonseed',
      'whole cottonseed',
      'gossypol',
      'cotton ginning',
      'dairy feed',
    ],
  },
  structuredData: { article: true },
};
