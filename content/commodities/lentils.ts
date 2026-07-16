import type { CommodityContent } from '@/types/content';

export const lentils: CommodityContent = {
  id: 'commodity-lentils',
  slug: 'lentils',
  contentType: 'commodity',
  title: 'Lentils',
  alternativeNames: ['Masur', 'Lens seed', 'Red lentils', 'Green lentils'],
  category: 'Pulse commodity',
  subcategory: 'Whole and split market types',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Lens-shaped dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'lentil' },
  summary:
    'Lentils are the flat, lens-shaped dry seed of Lens culinaris, traded by cotyledon colour and seed size. Whether a lot is sold whole with its coat on or dehulled and split into a fast-cooking product is the decision that defines the market it enters.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lentils are traded as a pulse whose commercial identity rests on two independent attributes: the colour of the cotyledons inside the seed and the size of the seed itself. A lentil with red cotyledons under a brown coat looks brown on the outside — and the moment the coat comes off, it is a red lentil. The commodity’s naming follows what the buyer will see, which is not always what the seller is looking at.',
    },
    {
      type: 'paragraph',
      text: 'This makes processing form central rather than incidental. Whole lentils retain their coat and their shape and hold up in dishes where they must stay intact. Dehulled and split lentils cook fast and break down, and that behaviour is the point — it is what soups, dals, and purées require. The same field can supply either market, but the lot has to be directed, and the processing is what creates the article.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Lentil (Lens culinaris)' },
    {
      label: 'Harvested part',
      value: 'Lens-shaped dry seed threshed from the pod',
    },
    {
      label: 'Trading attributes',
      value: 'Cotyledon colour (red, green, yellow) and seed size',
    },
    {
      label: 'Processing forms',
      value: 'Whole with coat; dehulled whole (footballs); dehulled and split',
    },
    {
      label: 'Principal uses',
      value:
        'Food — whole and split culinary use; flours and ingredients; seed',
    },
    {
      label: 'Key quality attributes',
      value:
        'Size, colour, moisture, splits, chipped seed, and milling outturn',
    },
  ],
  sections: [
    {
      id: 'colour-and-size',
      heading: 'Colour, size, and what the buyer sees',
      body: [
        {
          type: 'paragraph',
          text: 'Cotyledon colour is the primary division. Red lentils dominate the dehulled and split trade; green and yellow types serve the whole-lentil markets, and the large green types are a distinct premium article valued for holding shape. Within each colour, size is specified — large green, small green, and the various red calibres — and it drives both price and cooking behaviour.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The coat conceals the class',
          text: 'A lentil’s seed coat colour and its cotyledon colour are different attributes. Trading terminology refers to the cotyledon, because that is what the finished food shows. This is a frequent source of confusion in describing the commodity and is worth stating explicitly.',
        },
      ],
    },
    {
      id: 'processing-forms',
      heading: 'Whole, football, and split',
      body: [
        {
          type: 'paragraph',
          text: 'Three forms reach buyers, and they are distinct commodities in practice. Whole lentils keep the coat. Dehulled whole lentils — known in parts of the trade as footballs — have the coat removed while the two cotyledons remain joined. Split lentils have been separated into individual cotyledons and cook fastest of all.',
        },
        {
          type: 'paragraph',
          text: 'Milling outturn governs the economics: what a processor cares about is how much of the intake emerges as whole splits rather than as chips, broken fragments, and powder. Outturn depends on seed condition, uniformity, and moisture at milling, so a lot’s value to a miller is not readable from its appearance as delivered.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID does not currently publish split lentil or lentil flour entries; these pathways are real and are described here rather than linked.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Lots are described by size, colour, and uniformity, and by moisture, splits and chipped seed, and foreign material. Because the lentil is thin and flat, it chips at the edges under handling stress in a way rounder pulses do not, and chipped seed is a graded defect. Weathering in the field stains coats and downgrades whole-lentil lots, though it matters less to a lot heading for dehulling — another instance where the destination determines whether a characteristic is a defect at all.',
        },
        {
          type: 'paragraph',
          text: 'Insect damage, and bruchids in particular, is a rejection issue in export trade rather than a discount, and phytosanitary requirements differ by destination market.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Lentils are handled gently: their flat shape makes them prone to chipping and splitting when dropped or conveyed hard, and every chip is a graded defect or a lost split. Over-dry seed is brittle and breaks; moist seed moulds and invites insects. Storage is kept cool, dry, and monitored, with insect protection, and hermetic systems are used where bruchid pressure warrants.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the type, form, climate, storage system, and holding period. No universal target is given here; consult the applicable national pulse-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'seed'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Cotyledon colour class',
    'Seed size and uniformity',
    'Moisture content',
    'Splits and chipped seed',
    'Milling outturn',
    'Staining and weathering (whole-lentil lots)',
  ],
  commonDefects: [
    'Chipped and split seed',
    'Insect damage, particularly bruchids',
    'Weather-stained and discoloured seed',
    'Shrivelled and immature seed',
    'Mould and storage fungi',
    'Foreign material and other pulses',
  ],
  moistureContext:
    'Held dry but not over-dried: brittle over-dry seed chips and splits in handling, while moist seed moulds and favours insects. Limits are contract- and standard-specific.',
  storageContext:
    'Kept cool, dry, monitored, and insect-protected; the flat seed is easily chipped, so storage and handling design bear directly on grade.',
  transportContext:
    'Moves in bags and containers; gentle handling protects the seed edge, and colour, size, and form segregation is maintained throughout.',
  majorProducingRegions: [
    'North America',
    'South Asia',
    'Australia',
    'Middle East and North Africa',
  ],
  majorTradingRegions: [
    'North America',
    'Australia',
    'South Asia (major importing region)',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.40',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Lentils, dried and shelled, whether or not skinned or split.',
    },
    {
      system: 'FAOSTAT',
      code: '201',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Lentils".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'lentil' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Lentils as a traded pulse and their processing forms',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Lentil grading attributes and market class context',
    },
    {
      sourceId: 'icar',
      citedFor: 'Lentil dehulling, splitting, and milling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Size conventions, grade standards, phytosanitary rules, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This is a reference description of the traded pulse, not a grading determination, contract specification, or customs classification.',
    'No size, moisture, milling-outturn, or defect-tolerance figures are given here — standards and contracts set them.',
    'Class and calibre names differ between producing and consuming markets; the same lot may be described differently in each.',
    'Regions are indicative groupings rather than ranked producers, and colour-class geography is not distinguished.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Lentils: Colour Classes and Split Trade Forms',
    description:
      'Lentils as a commodity: how cotyledon colour and seed size set the class, whole versus football versus split forms, milling outturn, defects, and storage.',
    keywords: [
      'lentils',
      'red lentils',
      'green lentils',
      'split lentils',
      'lentil milling',
    ],
  },
  structuredData: { article: true },
};
