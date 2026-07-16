import type { CommodityContent } from '@/types/content';

export const soybeans: CommodityContent = {
  id: 'commodity-soybeans',
  slug: 'soybeans',
  contentType: 'commodity',
  title: 'Soybeans',
  alternativeNames: ['Soya beans', 'Soy beans', 'Soja'],
  category: 'Oilseed commodity',
  subcategory: 'Legume oilseed',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Seed, threshed from the pod at harvest',
  sourceCrop: { type: 'crop', slug: 'soybean' },
  summary:
    'Soybeans are the harvested seed of the soybean plant, traded in bulk as the world’s dominant oilseed. Most of the crop is crushed, splitting one commodity into two deliberate outputs — protein meal and oil — with hulls removed as a residual stream.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybeans are the traded seed of Glycine max: dry, roughly spherical beans threshed from the pod and moved in bulk by truck, rail, barge, and vessel. They are bought against grade descriptions and contract terms rather than by variety, and the great majority of tonnage never reaches a consumer as a bean — it goes to a crushing plant.',
    },
    {
      type: 'paragraph',
      text: 'What makes the soybean commercially distinctive is that crushing produces two valuable outputs at once. Meal and oil are not a product and a residue; they are co-products, and the relative value of the two drives the economics of the crush. This entry covers the harvested commodity — its trading forms, quality attributes, defects, and storage behaviour. The biology and agronomy of the growing plant belong to the soybean crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Oilseed (a leguminous oilseed)' },
    { label: 'Parent crop', value: 'Soybean (Glycine max)' },
    { label: 'Harvested part', value: 'Dry seed threshed from the pod' },
    {
      label: 'Principal uses',
      value: 'Crushing for meal and oil, direct food use, and seed',
    },
    {
      label: 'Dominant pathway',
      value: 'Crushing — yields meal and oil as simultaneous co-products',
    },
    {
      label: 'Key quality attributes',
      value:
        'Moisture, foreign material, splits, damaged and heat-damaged beans',
    },
    {
      label: 'Traded by',
      value: 'Grade description and contract terms, not variety alone',
    },
  ],
  sections: [
    {
      id: 'what-is-traded',
      heading: 'What is traded',
      body: [
        {
          type: 'paragraph',
          text: 'The soybean commodity is the cleaned, dry seed. Unlike cereals, which are dominated by a milling pathway, soybeans are traded primarily as a crushing raw material valued for what can be separated out of them. A smaller stream is traded for direct food manufacture — soyfoods such as tofu, soy milk, and fermented products — and these lots are commonly bought on tighter, buyer-specific descriptions than commodity crushing beans.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The bean is not the crop',
          text: 'Statements about nodulation, canopy, or maturity group describe the living soybean plant. Statements about splits, foreign material, and heat damage describe the harvested lot. Only the second belongs to this commodity.',
        },
      ],
    },
    {
      id: 'crush-pathway',
      heading: 'The crush and its outputs',
      body: [
        {
          type: 'paragraph',
          text: 'Crushing separates the bean into an oil fraction and a protein-rich solid fraction. At concept level the sequence is cleaning, cracking, dehulling, conditioning, flaking, and then oil separation, after which the de-oiled solids are processed into meal. Hulls removed before oil separation leave as a distinct, lower-value stream.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Soybean meal',
              description:
                'The de-oiled protein fraction, the principal protein ingredient in compound feeds worldwide. A co-product, not a residue.',
            },
            {
              term: 'Soybean oil',
              description:
                'The extracted oil, used in food and in industrial applications including biodiesel. Also a co-product.',
            },
            {
              term: 'Soybean hulls',
              description:
                'The seed coat removed during dehulling — a genuine by-product: real feed value, but residual and lower-value relative to meal and oil.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because meal and oil arise from the same pass, neither can be produced without the other. A crusher’s margin depends on the combined value of both streams against the cost of the beans, which is why soybean markets are quoted alongside meal and oil markets rather than in isolation.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean lots are described by moisture, foreign material, splits, and damaged beans, with heat damage treated separately because it signals mishandling in drying or storage. Oil and protein content matter greatly to a crusher and are often addressed by contract or premium schedule rather than by the base grade. Green, mouldy, or badly weathered beans reduce both grade and processing value.',
        },
        {
          type: 'paragraph',
          text: 'Splits deserve particular attention: the soybean has a large embryo and a thin seed coat, so beans that are handled roughly or dried too hard break apart. Split beans expose oil-bearing tissue, which accelerates deterioration in store and increases free fatty acid development. Grade standards are national and versioned, and meeting a grade is a commercial description — not a food-safety clearance or a guarantee of crush performance.',
        },
      ],
    },
    {
      id: 'storage-and-movement',
      heading: 'Storage and movement',
      body: [
        {
          type: 'paragraph',
          text: 'Soybeans are hygroscopic and respire in store; held too moist or too warm they heat, mould, and lose processing quality. They are also unusually sensitive to over-drying and rough handling, both of which raise the proportion of splits and cracked seed coats. Safe holding therefore depends on drying to a moisture appropriate to the intended storage period and climate, cooling the bulk, and monitoring it — with the applicable national storage guidance setting the figures.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the lot, climate, storage system, and holding period. AgricultureID publishes no universal target; consult the applicable national oilseed-storage guidance.',
        },
        {
          type: 'paragraph',
          text: 'Movement is in bulk, and lot identity matters: crushing beans, food-grade beans, and seed are segregated because their buyers are different and their descriptions are not interchangeable.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed', 'oil', 'seed'],
  secondaryUses: ['industrial', 'energy'],
  majorQualityAttributes: [
    'Moisture content',
    'Foreign material',
    'Splits',
    'Damaged beans',
    'Heat-damaged beans',
    'Oil and protein content (contract-specified)',
  ],
  commonDefects: [
    'Split beans',
    'Heat-damaged beans',
    'Green or immature beans',
    'Mould and storage fungi',
    'Insect damage',
    'Weather-damaged and discoloured beans',
    'Foreign material',
  ],
  moistureContext:
    'Traded and stored on a moisture basis. Both excess moisture and over-drying cause problems — the first invites heating and mould, the second increases splits. Limits are set by national grade standards and contracts.',
  storageContext:
    'Held in bulk in bins, silos, and flat stores; safe holding depends on drying, cooling, aeration, and monitoring for hot spots, insects, and moulds.',
  transportContext:
    'Moves in bulk by truck, rail, barge, and vessel. Handling drops and conveying increase splits, so transfer points are a quality consideration, not just a logistics one.',
  majorProducingRegions: [
    'South America',
    'North America',
    'East Asia and South Asia',
  ],
  majorTradingRegions: [
    'South America',
    'North America',
    'East Asia (major importing region)',
    'Europe (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1201.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Soya beans, whether or not broken, other than seed. Beans for sowing fall under 1201.10.',
    },
    {
      system: 'FAOSTAT',
      code: '236',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Soya beans".',
    },
  ],
  coProducts: [
    { type: 'commodity-product', slug: 'soybean-meal' },
    { type: 'commodity-product', slug: 'soybean-oil' },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'soybean-hulls' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Soybeans as a traded oilseed and the crushing pathway',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Soybean grading attributes and commodity handling context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Soybean market structure and crush co-product context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, contract terms, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'A reference description of the traded commodity — not a grading determination, a contract specification, or a customs classification.',
    'Grade standards and classification codes differ by jurisdiction and are revised; confirm the edition in force.',
    'No oil, protein, moisture, or crush-yield figures are given here — those are lot-, contract-, and process-specific.',
    'The producing and trading regions listed are indicative groupings rather than a ranking or a statistical series.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soybeans: The Traded Oilseed Commodity',
    description:
      'Soybeans as a commodity: what is harvested, why crushing yields meal and oil as co-products, quality attributes and defects, and storage and handling behaviour.',
    keywords: [
      'soybeans',
      'soybean commodity',
      'soybean crush',
      'oilseed trading',
      'soybean grading',
    ],
  },
  structuredData: { article: true },
};
