import type { CommodityContent } from '@/types/content';

export const cowpeas: CommodityContent = {
  id: 'commodity-cowpeas',
  slug: 'cowpeas',
  contentType: 'commodity',
  title: 'Cowpeas',
  alternativeNames: [
    'Black-eyed peas',
    'Niébé',
    'Wake',
    'Southern peas',
    'Vigna seed',
  ],
  category: 'Pulse commodity',
  subcategory: 'Dry cowpea grain',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Mature dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'cowpea' },
  summary:
    'Cowpeas are the dry seed of Vigna unguiculata, a pulse of first importance in West Africa. Storage, not production, defines the commodity: bruchid beetles can destroy a stored crop, and managing them shapes when and how cowpeas are sold.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cowpeas are traded as dry grain across West Africa, South Asia, Brazil, and the southern United States, where they are known as black-eyed peas or southern peas. The crop is drought-tolerant and grows where more demanding pulses fail, which is why it anchors food systems in dry regions rather than serving a premium export trade — most cowpea moves in domestic and regional markets, not in global ones.',
    },
    {
      type: 'paragraph',
      text: 'Any honest account of this commodity has to lead with storage. Cowpea grain is exceptionally vulnerable to bruchid beetles, which enter the crop in the field and continue to multiply in store, and untreated grain can be devastated within months. This single fact governs the market: it forces sales at harvest into a glutted market, it drives the price cycle through the year, and it has made cowpea the crop around which hermetic storage technology was developed and popularised.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Cowpea (Vigna unguiculata)' },
    { label: 'Harvested part', value: 'Mature dry seed threshed from the pod' },
    {
      label: 'Regional importance',
      value:
        'A leading food pulse in West Africa; traded largely in domestic and regional markets',
    },
    {
      label: 'Defining constraint',
      value: 'Bruchid infestation in store, which can destroy an untreated lot',
    },
    {
      label: 'Storage response',
      value:
        'Hermetic storage, developed and scaled substantially around this commodity',
    },
    {
      label: 'Key quality attributes',
      value:
        'Insect damage, seed coat colour and eye pattern, size, moisture, splits',
    },
  ],
  sections: [
    {
      id: 'bruchids',
      heading: 'The bruchid problem and the storage answer',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea bruchids infest the crop before harvest, so grain arrives in store already carrying eggs and larvae that are not visible from the outside. In warm conditions the population develops through generations inside the stored grain, hollowing seeds and rendering a lot unmarketable. The damage is progressive and it is not reversible.',
        },
        {
          type: 'paragraph',
          text: 'The commercial effect is severe and specific: a farmer without effective storage must sell soon after harvest, when everyone else is selling and prices are at their lowest, and cannot hold grain to the lean season when prices are highest. The gap between those two prices is well documented, and it is a storage problem rather than a production problem.',
        },
        {
          type: 'paragraph',
          text: 'Hermetic storage addresses this by sealing grain so that the insects’ own respiration depletes the oxygen and they die without chemical treatment. Multi-layer hermetic bags were developed and disseminated at scale for cowpea in West Africa, and this is one of the clearest cases in agriculture of a storage technology being shaped around the needs of a single commodity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A market shaped by storage',
          text: 'For most commodities storage is downstream of the market. For cowpea, storage capability determines when the farmer can sell and therefore what the crop is worth — the storage question and the market question are the same question.',
        },
      ],
    },
    {
      id: 'trade-characteristics',
      heading: 'What the market specifies',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea markets are highly attentive to appearance, and preferences are strongly regional. Seed coat colour, the size and colour of the eye, seed size, and coat texture — smooth, rough, or wrinkled — all carry price, and a type prized in one market may be unsaleable in another a few hundred kilometres away. There is no single global specification for cowpea in the way there is for a bulk oilseed.',
        },
        {
          type: 'list',
          items: [
            'Insect damage — the first thing a buyer inspects and the dominant discount',
            'Seed coat colour and eye pattern — strongly regional preferences',
            'Seed size and uniformity',
            'Splits, broken seed, and shrivelled grain',
            'Moisture and freedom from mould',
          ],
        },
        {
          type: 'paragraph',
          text: 'The crop also supplies fodder: haulms are a valued dry-season feed in mixed crop-livestock systems, and in some systems the fodder value materially affects how the crop is harvested. Fodder is not the grain commodity described here, and AgricultureID does not publish a separate cowpea fodder entry.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea is eaten as whole cooked grain, milled into flour for fried and steamed preparations, and used in a wide range of regional dishes. It is a major dietary protein source in the regions where it is grown — which is why post-harvest losses in this commodity are a food-security matter and not only a commercial one. Grain unfit for food and screenings go to livestock, and a share of each harvest is retained as planting seed.',
        },
        {
          type: 'list',
          items: [
            'Food — whole cooked grain and milled flour preparations',
            'Feed — damaged grain, screenings, and haulms as dry-season fodder',
            'Seed — retained or purchased for planting',
          ],
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Grain is dried down after threshing and then must be protected. Alongside hermetic bags, traditional and improved practices are used — sun drying, sealed drums and containers, and ash or botanical admixtures in some systems — and the choice depends on scale, cost, and what is locally available. Whatever the method, cool, dry, sealed storage is what preserves the lot; grain held warm, damp, and open loses value quickly to both insects and mould.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure or treatment guidance',
          text: 'Safe storage moisture and duration depend on the climate, storage system, and holding period, and permitted treatments differ by jurisdiction. No targets, treatments, doses, or intervals are given here — consult the applicable national storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed', 'seed'],
  majorQualityAttributes: [
    'Freedom from insect damage',
    'Seed coat colour and eye pattern',
    'Seed size and uniformity',
    'Moisture content',
    'Splits and broken seed',
    'Seed coat texture',
  ],
  commonDefects: [
    'Bruchid damage and holed seed',
    'Live insects in the lot',
    'Mould and storage fungi',
    'Splits and broken seed',
    'Shrivelled and immature grain',
    'Discoloured and weather-stained seed',
  ],
  moistureContext:
    'Dried down after threshing and held dry; damp grain moulds and, more importantly, warm damp conditions accelerate bruchid development. Limits are set by national guidance and market practice.',
  storageContext:
    'The decisive stage for this commodity: hermetic bags, sealed drums, and other airtight systems are used to control bruchids without chemical treatment, and storage capability determines when a farmer can sell.',
  transportContext:
    'Moves in bags in domestic and regional trade rather than in bulk vessels; lots are inspected for live insects and damage at each transfer.',
  majorProducingRegions: [
    'West Africa',
    'Sub-Saharan Africa',
    'South Asia',
    'South America',
    'North America',
  ],
  majorTradingRegions: [
    'West Africa',
    'Sub-Saharan Africa',
    'South Asia',
    'South America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.35',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cow peas (Vigna unguiculata), dried and shelled.',
    },
    {
      system: 'FAOSTAT',
      code: '195',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Cow peas, dry".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'cowpea' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cowpea as a food pulse and post-harvest loss context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Cowpea bruchid damage and hermetic storage development in West Africa',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Cowpea storage technology and regional market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with the trade concentrated in West Africa, South Asia, and the Americas. Market preferences are strongly regional and storage regulation is jurisdiction-specific.',
  limitations: [
    'This entry is reference information; it is not a grading determination, a storage recommendation, or customs classification advice.',
    'No storage moisture figures, treatment methods, doses, or loss percentages are given here — practices and permitted treatments differ by jurisdiction and system.',
    'Market preferences for seed coat colour, eye, and texture are regional and change; no universal specification exists for this commodity.',
    'Regions are indicative groupings; much cowpea trade is informal and regional, so recorded flows understate it.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cowpeas: The Pulse Defined by Its Storage',
    description:
      'Cowpeas as a commodity: why bruchid beetles in store govern the market, hermetic storage, regional preferences for coat colour and eye, uses, and handling.',
    keywords: [
      'cowpeas',
      'black-eyed peas',
      'cowpea bruchid',
      'hermetic storage',
      'niebe',
    ],
  },
  structuredData: { article: true },
};
