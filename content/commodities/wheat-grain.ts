import type { CommodityContent } from '@/types/content';

export const wheatGrain: CommodityContent = {
  id: 'commodity-wheat-grain',
  slug: 'wheat-grain',
  contentType: 'commodity',
  title: 'Wheat Grain',
  alternativeNames: [
    'Common wheat grain',
    'Bread wheat grain',
    'Wheat kernels',
  ],
  category: 'Cereal grain commodity',
  subcategory: 'Common (bread) wheat',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Caryopsis (the dry, one-seeded fruit, traded as the grain or kernel)',
  sourceCrop: { type: 'crop', slug: 'wheat' },
  summary:
    'Wheat grain is the harvested caryopsis of common wheat (Triticum aestivum), traded as a bulk cereal commodity and milled mainly into flour. It is classified commercially by class, moisture, protein, and soundness rather than by the agronomy of the growing crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat grain is the traded commodity obtained from the wheat crop: the dry caryopsis threshed from the ear at harvest. It is one of the most widely traded agricultural commodities in the world, moving in bulk by road, rail, barge, and vessel, and it is bought and sold against defined grade descriptions rather than by variety alone.',
    },
    {
      type: 'paragraph',
      text: 'The commodity is not the same entity as the growing plant. What matters commercially about wheat grain — its moisture, test weight, protein, soundness, and freedom from foreign material — are properties of the harvested lot, measured after harvest, and they determine how it can be stored, milled, and sold. This entry describes the commodity; the agronomy of the plant is covered on the wheat crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Common wheat (Triticum aestivum)' },
    { label: 'Harvested part', value: 'Caryopsis (grain/kernel)' },
    {
      label: 'Principal uses',
      value: 'Food (milling into flour), feed, and seed',
    },
    {
      label: 'Traded by',
      value: 'Class and grade description, not variety alone',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, test weight, protein, soundness, foreign material',
    },
    {
      label: 'Main products',
      value: 'Flour, with bran and wheat germ as milling co-products',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat grain as traded is the threshed, cleaned caryopsis of common wheat. Commercially it is divided into classes that reflect kernel hardness, colour, and growth habit — hard or soft, red or white, winter or spring — because these traits determine milling and baking behaviour. Durum wheat, used for pasta, is a different species and is traded as a separate commodity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Crop, class, and commodity',
          text: 'The wheat crop is a living plant; a wheat class is a commercial grouping of grain with shared processing behaviour; the commodity is the harvested lot being bought and sold. A statement true of one is not automatically true of the others.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Most wheat grain is milled for food. Milling separates the kernel into flour (the endosperm), bran (the outer layers), and germ (the embryo) — flour is the primary product, while bran and germ are genuine co-products with their own feed and food markets rather than waste. Grain that does not meet milling requirements is commonly sold as feed wheat, and a portion of every crop is retained or sold as seed.',
        },
        {
          type: 'list',
          items: [
            'Food — milled into flour for bread, biscuits, and other baked goods',
            'Feed — grain not meeting milling specifications, fed to livestock',
            'Seed — retained or certified for planting the next crop',
            'Industrial — starch and gluten extraction, and fermentation feedstock',
          ],
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality attributes and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat grain is graded against published standards that measure a defined set of attributes. Moisture governs whether a lot can be stored safely; test weight is a bulk-density measure long used as a general soundness indicator; protein content strongly influences milling and baking performance and is often priced separately from grade. Damaged kernels, foreign material, and dockage all reduce grade, and sprouting or mould can render a lot unsuitable for milling.',
        },
        {
          type: 'paragraph',
          text: 'Grades are jurisdictional and versioned: the same lot can grade differently under different national standards. Meeting a grade is a commercial description, not a food-safety clearance, and not a guarantee of suitability for a particular mill or contract.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat grain is hygroscopic and biologically active: stored too moist or too warm it respires, heats, and supports storage moulds and insects. Safe storage therefore depends on drying to a moisture content appropriate to the intended storage duration and climate, then keeping the bulk cool and monitored. It moves and stores in bulk — farm bins, silos, warehouses, barges, and vessels — which makes lot identity, sampling, and segregation by class and grade central to the trade.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the commodity, climate, storage system, and intended holding period. AgricultureID does not publish a universal target; consult the applicable national grain-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed', 'seed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Moisture content',
    'Test weight',
    'Protein content',
    'Damaged kernels',
    'Foreign material and dockage',
    'Sprout damage (falling number)',
  ],
  commonDefects: [
    'Sprouted kernels',
    'Heat-damaged kernels',
    'Mould and storage fungi',
    'Insect damage',
    'Shrunken and broken kernels',
    'Foreign material',
  ],
  moistureContext:
    'Wheat is traded and stored on a moisture basis; lots above the moisture appropriate for the intended storage period must be dried. Specific limits are set by national grade standards and buyer contracts.',
  storageContext:
    'Stored in bulk in bins, silos, and warehouses; safe holding depends on drying, cooling, aeration, and monitoring for hot spots, insects, and moulds.',
  transportContext:
    'Moves in bulk by truck, rail, barge, and vessel, and in bags at smaller scale; segregation by class and grade and lot identity are central to handling.',
  majorProducingRegions: [
    'East Asia and South Asia',
    'Europe and Central Asia',
    'North America',
    'Australia',
  ],
  majorTradingRegions: [
    'Europe and Central Asia',
    'North America',
    'Australia',
    'Middle East and North Africa (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1001.99',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Wheat and meslin, other than durum wheat, at 6-digit subheading level.',
    },
    {
      system: 'FAOSTAT',
      code: '15',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Wheat".',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'wheat-flour' }],
  coProducts: [{ type: 'commodity-product', slug: 'wheat-bran' }],
  applicableGrades: [{ type: 'commodity-grade', slug: 'usda-wheat-grades' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['yield'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Wheat as a traded cereal commodity and its uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Wheat classes, grading attributes, and commodity context',
    },
    { sourceId: 'ahdb', citedFor: 'Wheat grain quality and storage context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Classes, grade standards, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'Grade standards and classification codes differ by jurisdiction and are revised; always confirm the edition in force.',
    'No universal moisture, test-weight, or protein figure is given here — those depend on the standard, class, contract, and intended storage.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Grain: The Traded Cereal Commodity',
    description:
      'Wheat grain as a commodity: what is harvested, how it is classed and graded, its quality attributes, storage context, and the products it is milled into.',
    keywords: [
      'wheat grain',
      'wheat commodity',
      'wheat grading',
      'milling wheat',
      'feed wheat',
    ],
  },
  structuredData: { article: true },
};
