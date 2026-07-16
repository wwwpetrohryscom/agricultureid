import type { CommodityContent } from '@/types/content';

export const seedCotton: CommodityContent = {
  id: 'commodity-seed-cotton',
  slug: 'seed-cotton',
  contentType: 'commodity',
  title: 'Seed Cotton',
  alternativeNames: ['Unginned cotton', 'Raw cotton as picked', 'Kapas'],
  category: 'Fibre commodity',
  subcategory: 'Cotton as harvested, before ginning',
  commodityClass: 'fibre',
  physicalForm: 'other',
  harvestedPart:
    'Seed cotton — the mass of lint fibres still attached to the seed, taken from the opened boll',
  sourceCrop: { type: 'crop', slug: 'cotton' },
  summary:
    'Seed cotton is cotton as it leaves the field: lint and seed together, still joined, as harvested from the opened boll. It is an intermediate commodity that exists only between picking and ginning, where it is separated into the two commodities that are actually traded.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Seed cotton is what a cotton harvester actually collects. In the opened boll, the fibres are not a separate object — each lint fibre is an outgrowth of the seed coat, so the cotton comes off the plant as a tangled mass of fibre with seed embedded throughout it. That combined material, before anything has been separated, is seed cotton.',
    },
    {
      type: 'paragraph',
      text: 'It is a commodity with a deliberately short life. Seed cotton exists as a traded thing only in the interval between the field and the gin, and its whole handling is arranged around getting it there in condition. Nothing is sold as seed cotton to a spinner or a crusher; both of those buyers want one of the two streams that ginning produces.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fibre' },
    { label: 'Parent crop', value: 'Cotton (Gossypium spp.)' },
    {
      label: 'Harvested part',
      value: 'Lint and seed together, from the opened boll',
    },
    { label: 'Exists between', value: 'Harvest and ginning' },
    { label: 'Separated by', value: 'Ginning — into lint and seed' },
    {
      label: 'Principal uses',
      value: 'Fibre and oil, both realised only after ginning',
    },
    {
      label: 'Traded internationally?',
      value: 'No — the ginned lint is the traded commodity',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What seed cotton is',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton lint fibres are epidermal hairs of the cotton seed: they grow out of the seed coat and remain anchored to it until they are mechanically pulled away. This is why cotton, alone among the major fibre commodities, arrives from the field as a composite. Flax and jute fibres are separated from a stem; cotton fibre has to be separated from a seed, and the seed is not a trivial fraction — by weight, seed makes up the larger part of a load of seed cotton and lint the smaller.',
        },
        {
          type: 'paragraph',
          text: 'How seed cotton looks on arrival depends on how it was taken off the plant. Spindle pickers twist the seed cotton out of open bolls and leave much of the plant behind; stripper harvesters take bolls, burrs, and stems together and deliver a far trashier product; hand picking, still substantial in several producing countries, is the most selective of the three. The harvest method therefore sets how much cleaning the gin has to do before it can separate anything.',
        },
      ],
    },
    {
      id: 'ginning',
      heading: 'Ginning: how one commodity becomes two',
      body: [
        {
          type: 'paragraph',
          text: 'Ginning is the operation that defines the cotton chain. A gin cleans the seed cotton, then pulls the lint away from the seed — saw gins for most upland cotton, roller gins for longer-stapled types — and the single delivered commodity leaves the gin as two distinct commodities travelling to entirely different industries. The lint is baled and goes to spinners; the seed goes to crushers, feeders, and planting-seed processors.',
        },
        {
          type: 'paragraph',
          text: 'This is what makes seed cotton conceptually important rather than merely transitional. The lint and the seed are not a primary product and a by-product of one another: they are two commodities that were physically joined until the gin parted them, each with its own market, its own quality language, and its own price. The share of a load that comes out as lint — the turnout — is the number that determines what a grower is paid, since the grower is effectively selling both streams through the gin.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Two commodities, not a product tree',
          text: 'AgricultureID models lint and cottonseed as commodities in their own right rather than as products derived from seed cotton, because ginning separates what was already there rather than transforming it into something new.',
        },
      ],
    },
    {
      id: 'modules-and-moisture',
      heading: 'Modules, moisture, and the wait for the gin',
      body: [
        {
          type: 'paragraph',
          text: 'Gins cannot process a harvest as fast as harvesters can gather it, so seed cotton waits. It is compacted in the field into modules — large, dense, weather-shedding blocks, either built into rectangular modules or wrapped as round bales by the harvester itself — and these sit at the field edge or the gin yard until their turn comes. Module building is what allows harvest and ginning to be decoupled, and it is one of the defining practices of a mechanised cotton industry.',
        },
        {
          type: 'paragraph',
          text: 'Moisture is the constraint that governs the wait. Seed cotton packed damp does not simply stay damp: the mass respires and supports microbial activity, temperature rises inside the module, and the result is degraded fibre colour, damaged seed with impaired viability and oil quality, and in bad cases heating severe enough to be a genuine hazard. Cotton harvested with high moisture, or wetted by rain before the module is covered, is the classic cause. The trade-off runs the other way as well, since very dry seed cotton is brittle and gins with more fibre damage.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No moisture figure given',
          text: 'Safe module moisture and holding time depend on the harvest method, module type, weather, and gin schedule. AgricultureID publishes no threshold — consult national cotton ginning and module-storage guidance.',
        },
      ],
    },
    {
      id: 'quality-and-trade',
      heading: 'Quality and how seed cotton is sold',
      body: [
        {
          type: 'paragraph',
          text: 'Seed cotton is not graded in the elaborate way lint is, because its quality attributes are mostly predictions of what the gin will produce. Buyers and gins look at trash and burr content, moisture, the presence of foreign matter, and evidence of weathering, staining, or heating in the module. Contamination is assessed here first and matters enormously: plastic from wrapping, twine, or field debris entering a module is far cheaper to keep out than to remove from lint later.',
        },
        {
          type: 'paragraph',
          text: 'Because ginning happens close to the field and produces the forms everyone downstream actually wants, seed cotton does not enter international trade. Growers deliver to a gin, are paid on lint turnout, lint grade, and seed, and the commodity ceases to exist at that point. Trade statistics reported for cotton describe lint; production statistics are often reported as seed cotton, which is a frequent source of confusion when the two are compared without conversion.',
        },
      ],
    },
  ],
  primaryUses: ['fibre', 'oil'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Moisture at harvest and in the module',
    'Trash, burr, and stem content',
    'Freedom from plastic and foreign contamination',
    'Freedom from weathering and staining',
    'Absence of heating in the module',
    'Harvest method (picked, stripped, or hand-picked)',
  ],
  commonDefects: [
    'Heating and microbial damage in damp modules',
    'Weathered, stained, or discoloured cotton',
    'Excess burrs, leaf, and stem trash',
    'Plastic and other foreign contamination',
    'Seed damage from moisture or rough handling',
    'Brittle fibre from over-dry harvesting',
  ],
  moistureContext:
    'Moisture is the central handling variable: seed cotton packed damp heats and degrades in the module, while over-dry cotton gins brittle. It is managed at harvest and at the gin rather than being a trading specification.',
  storageContext:
    'Held briefly in field or yard modules and round bales that shed weather and allow harvest to be decoupled from ginning; holding is a queue for the gin, not a storage strategy.',
  transportContext:
    'Moves short distances from field to gin on module trucks and trailers; the commodity does not travel further, since ginning converts it into the forms the market wants.',
  majorProducingRegions: [
    'South Asia',
    'East Asia',
    'North America',
    'Central Asia',
    'Sub-Saharan Africa',
    'South America',
  ],
  majorTradingRegions: [
    'None — seed cotton is ginned locally; see cotton lint for the traded commodity',
  ],
  commodityCodes: [
    {
      system: 'FAOSTAT',
      code: '328',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Seed cotton, unginned". Production is commonly reported on a seed-cotton basis while trade is reported as lint — the two are not directly comparable.',
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'cotton-lint' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Seed cotton as harvested and the ginning separation into lint and seed',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Harvest methods, module storage, and seed cotton moisture behaviour',
    },
    {
      sourceId: 'usda-fas',
      citedFor:
        'Reporting of cotton production on a seed-cotton basis versus lint trade',
    },
    {
      sourceId: 'icar',
      citedFor: 'Hand-picked seed cotton handling and ginning context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global cotton-producing regions. Harvest and module practice differ by production system; ginning regulation is jurisdiction-specific.',
  limitations: [
    'This entry describes the intermediate commodity in reference terms; it is not a ginning specification, module-storage protocol, or customs classification.',
    'No moisture thresholds, turnout percentages, lint-to-seed ratios, or holding times are given here — all depend on variety, method, climate, and gin.',
    'No HS code is given: seed cotton is not separately identified in the tariff at a level this entry is confident of, and the cotton headings describe ginned fibre.',
    'The producing regions listed indicate where cotton is grown at scale; they are not ranked and carry no output figures.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Seed Cotton: Cotton as Harvested, Before Ginning',
    description:
      'Seed cotton as a commodity: lint and seed still joined from the boll, how ginning separates them into two traded commodities, and why module moisture rules.',
    keywords: [
      'seed cotton',
      'unginned cotton',
      'ginning',
      'cotton modules',
      'lint turnout',
    ],
  },
  structuredData: { article: true },
};
