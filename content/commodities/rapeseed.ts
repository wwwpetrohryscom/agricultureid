import type { CommodityContent } from '@/types/content';

export const rapeseed: CommodityContent = {
  id: 'commodity-rapeseed',
  slug: 'rapeseed',
  contentType: 'commodity',
  title: 'Rapeseed',
  alternativeNames: ['Colza', 'Oilseed rape seed', 'Double-low rapeseed'],
  category: 'Oilseed commodity',
  subcategory: 'Brassica oilseed',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Small round seed, threshed from the pod (silique)',
  sourceCrop: { type: 'crop', slug: 'oilseed-rape' },
  summary:
    'Rapeseed is the harvested seed of oilseed rape, crushed for oil and meal. Modern trade is dominated by types bred low in erucic acid and glucosinolates — marketed as canola in some jurisdictions and as double-low or 00 rapeseed in others.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rapeseed is the small, dark, round seed threshed from the pods of oilseed rape and traded in bulk for crushing. It is one of the major oilseeds of temperate agriculture, and unlike soybeans it is crushed primarily for the oil, with meal as the second, lower-value stream.',
    },
    {
      type: 'paragraph',
      text: 'The commodity carries a naming complication that a reference entry has to handle carefully rather than gloss over. Rapeseed and canola are not simple synonyms: canola names a compositional category within rapeseed, and which name a lot travels under depends on the jurisdiction and market it is sold into. The section below sets that out.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Oilseed (a Brassica oilseed)' },
    {
      label: 'Parent crop',
      value: 'Oilseed rape (Brassica napus, and Brassica rapa types)',
    },
    { label: 'Harvested part', value: 'Seed threshed from the silique' },
    {
      label: 'Dominant trade type',
      value: 'Low erucic acid, low glucosinolate ("double-low"/"00") seed',
    },
    {
      label: 'Naming',
      value:
        'Canola is a defined category within rapeseed, not a synonym for it',
    },
    { label: 'Principal uses', value: 'Crushing for oil and meal; seed' },
    {
      label: 'Key quality attributes',
      value:
        'Moisture, admixture, oil content, erucic acid and glucosinolate status',
    },
  ],
  sections: [
    {
      id: 'rapeseed-and-canola',
      heading: 'Rapeseed, canola, and why the distinction matters',
      body: [
        {
          type: 'paragraph',
          text: 'Traditional rapeseed contained appreciable erucic acid in its oil and glucosinolates in its meal. Both were commercial problems: the first constrained food use of the oil, the second constrained how much meal could be fed. Plant breeding from the 1970s onward produced types low in erucic acid, and then types low in both erucic acid and glucosinolates — the "double-low" or "00" types that dominate trade today.',
        },
        {
          type: 'paragraph',
          text: 'Canola is the name given to that low-erucic, low-glucosinolate category, originating in Canada and defined against compositional criteria set out in the applicable standard. The important consequence is jurisdictional: a lot meeting those criteria is routinely called canola in Canada, the United States, and Australia, and the same seed is more often traded as double-low or 00 rapeseed in Europe. Meanwhile, high erucic acid rapeseed is still grown deliberately as a separate, segregated commodity for industrial oil use — and it is rapeseed, but it is emphatically not canola.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Not interchangeable terms',
          text: 'Rapeseed is the broader commodity; canola is a compositional category within it, defined by a standard and used as a market name in particular jurisdictions. Treating the words as synonyms erases both the high erucic acid trade and the fact that the definition is standard-bound and versioned.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID publishes no erucic acid or glucosinolate thresholds here. Those limits are set by the applicable national standard or trading contract, they differ between jurisdictions, and they are revised — the standard in force is the authority.',
        },
      ],
    },
    {
      id: 'crush-pathway',
      heading: 'The crushing pathway',
      body: [
        {
          type: 'paragraph',
          text: 'Crushing rapeseed yields oil and meal together. At concept level the seed is cleaned, conditioned, flaked, and pressed, and the press cake is commonly extracted further to recover remaining oil; the de-oiled solids are then processed into meal. Because the seed is small and thin-coated, rapeseed is normally crushed whole rather than dehulled, which is one reason its meal carries more fibre than dehulled soybean meal.',
        },
        {
          type: 'list',
          items: [
            'Rapeseed oil — the higher-value stream, for food use and biodiesel feedstock',
            'Rapeseed meal — the protein stream, sold into animal feed',
            'Screenings and cleaning residues — removed before crushing, of low value',
          ],
        },
      ],
    },
    {
      id: 'quality-and-trading',
      heading: 'Quality and trading practice',
      body: [
        {
          type: 'paragraph',
          text: 'Lots trade on moisture, admixture, and oil content, with erucic acid and glucosinolate status specified by contract because they define which market the seed can enter. Green, heated, or mouldy seed is penalised, and green seed is a particular issue: chlorophyll retained in immature seed carries into the oil and raises refining cost, so it is a quality problem rather than only a cosmetic one.',
        },
        {
          type: 'paragraph',
          text: 'Standards and contract descriptions are national and versioned. Meeting one describes a lot commercially; it is not a food-safety clearance and does not guarantee crush performance.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Rapeseed is small, dense-flowing, and oil-rich — a combination that makes it unforgiving in store. Small seed packs closely and resists airflow, so aeration is less effective than in a coarse cereal, and oil-bearing seed that heats develops free fatty acids that a crusher pays for. Lots often arrive above safe storage moisture and are dried promptly. Because the seed is small, it also finds every gap in handling equipment and storage structures, which makes bin preparation and sealing a practical concern.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the lot, climate, storage system, and holding period. No universal target is given here; consult the applicable national oilseed-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['oil', 'feed', 'seed'],
  secondaryUses: ['food', 'industrial', 'energy'],
  majorQualityAttributes: [
    'Moisture content',
    'Admixture and foreign material',
    'Oil content',
    'Erucic acid status (contract- and standard-defined)',
    'Glucosinolate status (contract- and standard-defined)',
    'Green and immature seed (chlorophyll)',
  ],
  commonDefects: [
    'Green or immature seed',
    'Heat-damaged seed',
    'Mould and storage fungi',
    'Sprouted seed',
    'Insect damage',
    'Admixture and foreign material',
  ],
  moistureContext:
    'Traded and stored on a moisture basis; small seed packs tightly and aerates poorly, so lots above the moisture appropriate for the intended holding period are dried promptly. Limits come from national standards and contracts.',
  storageContext:
    'Stored in bulk; small seed size restricts airflow and escapes through gaps, so bin preparation, drying, cooling, and monitoring are central to safe holding.',
  transportContext:
    'Moves in bulk by truck, rail, and vessel; segregation is essential where high erucic acid lots are handled alongside double-low seed.',
  majorProducingRegions: [
    'Europe',
    'North America',
    'East Asia and South Asia',
    'Australia',
  ],
  majorTradingRegions: [
    'North America',
    'Europe',
    'Australia',
    'East Asia (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1205.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Low erucic acid rape or colza seeds, whether or not broken.',
    },
    {
      system: 'HS',
      code: '1205.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Rape or colza seeds other than low erucic acid types.',
    },
    {
      system: 'FAOSTAT',
      code: '270',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Rape or colza seed".',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'rapeseed-oil' },
    { type: 'commodity-product', slug: 'rapeseed-meal' },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Rapeseed as a traded oilseed and its processing pathway',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Oilseed rape harvest quality, storage, and market context',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European rapeseed market and double-low seed context',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Rapeseed and canola trade nomenclature by market',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The canola/double-low designation, erucic acid and glucosinolate criteria, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'Reference content only: nothing here grades a lot, forms part of a contract, or constitutes customs classification advice.',
    'No erucic acid, glucosinolate, oil-content, or moisture figures are given here — those are set by the applicable standard or contract, which differ by jurisdiction and are revised.',
    'Whether a given lot may be marketed as canola depends on the standard in force in the destination market, not on the parent species alone.',
    'The region lists group where production and trade are concentrated; they are neither ranked nor a substitute for statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rapeseed: The Oilseed Behind Canola and 00 Types',
    description:
      'Rapeseed as a commodity: why canola is a defined category within rapeseed rather than a synonym, the crush into oil and meal, quality attributes, and storage.',
    keywords: [
      'rapeseed',
      'canola',
      'double-low rapeseed',
      'erucic acid',
      'oilseed rape commodity',
    ],
  },
  structuredData: { article: true },
};
