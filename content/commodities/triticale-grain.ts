import type { CommodityContent } from '@/types/content';

export const triticaleGrain: CommodityContent = {
  id: 'commodity-triticale-grain',
  slug: 'triticale-grain',
  contentType: 'commodity',
  title: 'Triticale Grain',
  alternativeNames: ['Triticale', 'Wheat-rye hybrid grain'],
  category: 'Cereal grain commodity',
  subcategory: 'Triticale',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (grain), threshed from the ear',
  sourceCrop: { type: 'crop', slug: 'triticale' },
  summary:
    'Triticale grain is the caryopsis of a man-made wheat-rye hybrid, traded almost entirely as a feed grain. It is a real cereal commodity with a thin market and few dedicated standards, and it is usually priced against feed wheat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Triticale is the grain of a deliberately created hybrid genus, produced by crossing wheat with rye and doubling the chromosomes of the result. It is the only significant cereal commodity that does not occur in nature, and the intention behind it was straightforward: combine the grain quality and yield of wheat with the hardiness and tolerance of rye. The grain that results is recognisably its own thing rather than either parent.',
    },
    {
      type: 'paragraph',
      text: 'Commercially it is a feed grain. Triticale never developed the milling market its creators hoped for, because its dough behaviour sits awkwardly between wheat and rye and suits neither established baking system well. What it has instead is a solid, unglamorous position as an energy and protein source for livestock, grown where conditions are marginal for wheat and consumed close to where it is produced.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    {
      label: 'Parent crop',
      value: 'Triticale (×Triticosecale) — a wheat × rye hybrid',
    },
    { label: 'Harvested part', value: 'Caryopsis (grain)' },
    { label: 'Dominant use', value: 'Livestock feed' },
    {
      label: 'Market structure',
      value: 'Thin, largely domestic, often priced against feed wheat',
    },
    {
      label: 'Standards position',
      value: 'Few dedicated public grade standards; traded on specification',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, test weight, protein, soundness, ergot',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Triticale grain is typically larger and more shrivelled-looking than wheat, and its bulk density is often lower — a legacy of the grain-filling problems that dogged early triticales and that breeding has reduced without wholly eliminating. Modern triticales are much improved, but test weight remains the attribute a buyer looks at first, and it is the reason triticale rarely trades at wheat parity even when it feeds as well.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A hybrid genus, not a wheat class',
          text: 'Triticale is not a type of wheat and not a type of rye. It is a separate crop and a separate commodity with its own tariff subheading, and figures for wheat or rye do not apply to it.',
        },
      ],
    },
    {
      id: 'uses-and-market',
      heading: 'Uses and market position',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding is what triticale is for. It goes into compound feeds and on-farm rations as an energy source with usefully higher protein than most feed wheat, it is fed to pigs and poultry as well as ruminants, and a substantial share of the crop never becomes a grain commodity at all — it is cut whole and ensiled as forage, which is a different harvested product from the same crop and not covered here.',
        },
        {
          type: 'paragraph',
          text: 'Marginal outlets exist and are worth stating accurately rather than inflating. Some triticale is milled and blended into flour for specialty and wholegrain breads. Some is used as a fermentation and distilling feedstock where it is cheaper than wheat. Neither is large enough or standardised enough to model as a product pathway from this commodity, so none is asserted.',
        },
        {
          type: 'list',
          items: [
            'Feed — the dominant use, in compound feeds and on-farm rations',
            'Forage — the crop cut whole for silage, a separate harvested product',
            'Food — limited milling into blended and specialty breads',
            'Energy — fermentation and distilling feedstock where locally economic',
          ],
        },
      ],
    },
    {
      id: 'quality-and-specification',
      heading: 'Quality and specification',
      body: [
        {
          type: 'paragraph',
          text: 'Because triticale is a minor commodity, many jurisdictions have no dedicated grade standard for it, and lots are bought against contract specifications or against the standard for feed wheat. The attributes measured are the familiar ones — moisture, test weight, foreign material, damaged and sprouted grain, and protein where it is being priced. Sprouting resistance is generally weaker than wheat and closer to rye, so falling number and visible sprout damage matter in a wet harvest.',
        },
        {
          type: 'paragraph',
          text: 'Triticale inherits susceptibility to ergot from its rye parentage, and sclerotia can appear in a harvested lot. Where the grain enters feed or food channels, the same jurisdictional limits that apply to rye apply here, and cleaning is the practical response. This is a real point of difference from wheat and one a buyer used to wheat may not anticipate.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling context',
      body: [
        {
          type: 'paragraph',
          text: 'Triticale stores like other small grains: dried to a moisture appropriate to the holding period, then cooled, aerated, and monitored for heating and insects. The practical notes are its lower bulk density, which means a bin holds fewer tonnes than the same bin of wheat, and the value of cleaning both to remove ergot and to lift a lot that is carrying screenings. Most triticale moves short distances in bulk, often from farm to a local feed mill, so long-haul handling questions arise less often than for the major cereals.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['food', 'energy', 'seed'],
  majorQualityAttributes: [
    'Test weight (bulk density)',
    'Moisture content',
    'Protein content',
    'Sprout damage and falling number',
    'Ergot content',
    'Foreign material and screenings',
  ],
  commonDefects: [
    'Low test weight and shrivelled grain',
    'Sprouted grain',
    'Ergot sclerotia',
    'Mould and storage fungi',
    'Insect damage',
    'Foreign material',
  ],
  moistureContext:
    'Dried and stored on the same moisture basis as other small grains, with the applicable limit set by the contract or by the feed-wheat standard used in its place.',
  storageContext:
    'Held dry, cool, and aerated; lower bulk density than wheat reduces the tonnage a given bin holds, and cleaning addresses both ergot and screenings.',
  transportContext:
    'Moves mostly in bulk over short distances between farm and local feed mill; long-haul international trade is limited.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'North America',
    'South America',
    'Australia',
  ],
  majorTradingRegions: ['Europe and Central Asia', 'North America'],
  commodityCodes: [
    {
      system: 'HS',
      code: '1008.60',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Triticale, at 6-digit subheading level.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'grain-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'rye-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Triticale as a traded cereal and its predominantly feed use',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Triticale as a bred hybrid genus and its grain characteristics',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Triticale feed value, market position, and storage context',
    },
    { sourceId: 'faostat', citedFor: 'Commodity item coverage for triticale' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global but concentrated in Europe and the Americas. Few jurisdictions publish dedicated triticale grade standards.',
  limitations: [
    'This entry describes the commodity; it is not a grading determination, feed formulation, or customs classification.',
    'No test-weight, protein, moisture, or ergot figures are given — many jurisdictions have no dedicated triticale standard and lots trade on contract specification.',
    'Triticale grown and cut for forage or silage is a separate harvested product from the same crop and is not described here.',
    'Milling and distilling uses exist but are too limited and unstandardised to model as product pathways from this commodity.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Triticale Grain: The Hybrid Cereal Commodity',
    description:
      'Triticale grain as a commodity: a bred wheat-rye hybrid traded for feed, why test weight limits its price, its ergot risk, and how thin markets specify it.',
    keywords: [
      'triticale grain',
      'triticale commodity',
      'wheat rye hybrid',
      'feed grain',
      'triticale test weight',
    ],
  },
  structuredData: { article: true },
};
