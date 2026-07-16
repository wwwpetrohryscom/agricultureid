import type { CommodityContent } from '@/types/content';

export const cottonLint: CommodityContent = {
  id: 'commodity-cotton-lint',
  slug: 'cotton-lint',
  contentType: 'commodity',
  title: 'Cotton Lint',
  alternativeNames: ['Ginned cotton', 'Raw cotton', 'Cotton fibre'],
  category: 'Fibre commodity',
  subcategory: 'Ginned cotton fibre in bales',
  commodityClass: 'fibre',
  physicalForm: 'lint',
  harvestedPart:
    'Lint — the long seed-coat fibres, separated from the seed by ginning and baled',
  sourceCrop: { type: 'crop', slug: 'cotton' },
  summary:
    'Cotton lint is the ginned fibre: the cotton commodity that is actually traded, shipped, and spun. It is baled at the gin and bought against a classing description covering staple length, micronaire, strength, uniformity, colour, and leaf.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cotton lint is ginned cotton fibre, compressed into bales and identified individually. When markets, contracts, and trade statistics say "cotton", this is almost always what they mean: the fibre after the seed has been taken out of it, moving from gin to merchant to spinner, often across several borders on the way.',
    },
    {
      type: 'paragraph',
      text: 'Lint is unusual among agricultural commodities in the precision of its quality description. A cotton bale is not sold as a generic tonne of fibre but against a set of instrumentally measured attributes, because a spinner’s machinery is set up for a particular fibre and a mismatch shows up immediately as broken ends and rejected yarn. The whole trade rests on that measured description travelling with the bale.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fibre' },
    { label: 'Parent crop', value: 'Cotton (Gossypium spp.)' },
    {
      label: 'Produced by',
      value: 'Ginning seed cotton — lint pulled away from the seed',
    },
    {
      label: 'Traded form',
      value: 'Compressed, wrapped, individually identified bales',
    },
    { label: 'Principal use', value: 'Fibre — spinning into yarn' },
    {
      label: 'Classed on',
      value: 'Staple length, micronaire, strength, uniformity, colour, leaf',
    },
    {
      label: 'Chief modern defect',
      value: 'Contamination, especially plastic',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What cotton lint is',
      body: [
        {
          type: 'paragraph',
          text: 'Each lint fibre is a single elongated cell that grew out of the cotton seed coat and then dried into a flat, twisted ribbon. That natural twist — the convolution — is why cotton fibres grip one another when drawn and twisted, and therefore why cotton spins at all. The commodity is a mass of these cells, cleaned of seed and most trash, and pressed into a bale dense enough to ship economically.',
        },
        {
          type: 'paragraph',
          text: 'Lint is not homogeneous across the crop. Upland cotton accounts for the bulk of world supply; extra-long staple types, ginned on roller gins rather than saw gins, occupy a distinct and higher-priced segment. The species and type determine the range of fibre properties available, and no amount of processing at the gin can lengthen a staple that the plant did not grow.',
        },
      ],
    },
    {
      id: 'classing',
      heading: 'Classing: the language of the lint trade',
      body: [
        {
          type: 'paragraph',
          text: 'Lint quality is described by a group of measured attributes, most of them now determined instrumentally rather than by eye. They are not interchangeable and a bale is not summarised by one number: a spinner reads them together, because they describe different things about what the fibre will do on a machine.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Staple length',
              description:
                'The length of the fibres in the sample. It sets the yarn counts a lint can be spun to and is one of the strongest drivers of price.',
            },
            {
              term: 'Micronaire',
              description:
                'An airflow measurement reflecting fibre fineness and maturity together. Both very low and very high readings are discounted, so it is a value with a preferred range rather than a "more is better" attribute.',
            },
            {
              term: 'Strength and uniformity',
              description:
                'Fibre bundle strength, and how consistent fibre length is within the sample. Low uniformity means more short fibre and more waste in spinning.',
            },
            {
              term: 'Colour and leaf grade',
              description:
                'Reflectance and yellowness, and the amount of leaf trash left after ginning. Both affect appearance and dyeing, and both reflect weathering and gin cleaning.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Classing systems and their grade names are national and versioned, and the same bale can be described differently under different systems. AgricultureID reproduces no thresholds or grade tables: those belong to the issuing standard and to the contract that invokes it.',
        },
      ],
    },
    {
      id: 'defects-and-contamination',
      heading: 'Defects and contamination',
      body: [
        {
          type: 'paragraph',
          text: 'Some lint faults originate in the field and the weather — weathered, spotted, or grey cotton, and immature fibre that reads low on micronaire. Others are made at the gin: seed-coat fragments carried through with the fibre, neps, and fibre breakage from over-aggressive cleaning of over-dry cotton. Stickiness, caused by insect honeydew deposited on the fibre before harvest, is a particular commercial problem because it fouls spinning machinery and is not visible in a sample.',
        },
        {
          type: 'paragraph',
          text: 'Contamination is the defect the modern lint trade cares about most. Fragments of polypropylene twine, module wrap, plastic sheeting, hair, or jute enter with the seed cotton, survive ginning, and are only discovered when they appear as a flaw in dyed fabric — by which point the cost is enormous relative to the bale. The response is preventive, and it runs backwards from the spinner through the merchant to the gin and the field, since nothing at the gin reliably removes what should never have entered.',
        },
      ],
    },
    {
      id: 'baling-storage-and-pathways',
      heading: 'Baling, storage, and other fibre streams',
      body: [
        {
          type: 'paragraph',
          text: 'Lint leaves the gin as a pressed bale, wrapped and strapped, carrying a permanent identification that ties it to its classing data throughout its life. Bales are stored dry and under cover: lint takes up and gives off moisture with the air, and both very dry and damp bales are problems — the first because dry fibre is brittle and static-prone, the second because damp lint yellows, moulds, and, in a warehouse full of compressed fibre, presents a fire risk that dominates storage design.',
        },
        {
          type: 'paragraph',
          text: 'Not all fibre on the seed leaves with the lint. The saw gin takes the long fibres and leaves a layer of short fuzz still attached to the seed; those short fibres are recovered separately, downstream, as linters. They are a residual stream of the ginning chain rather than a second grade of lint, and they are treated as a by-product here.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Staple length',
    'Micronaire (fineness and maturity)',
    'Fibre bundle strength',
    'Length uniformity',
    'Colour grade',
    'Leaf grade and trash content',
    'Freedom from contamination',
  ],
  commonDefects: [
    'Plastic and foreign-matter contamination',
    'Stickiness from insect honeydew',
    'Seed-coat fragments and neps',
    'Weathered, spotted, or grey colour',
    'Immature fibre (low micronaire)',
    'Fibre breakage and short fibre from ginning',
  ],
  moistureContext:
    'Lint exchanges moisture with the surrounding air, and its condition at ginning and in store matters: over-dry fibre is brittle and breaks, damp fibre yellows and moulds. Specific regain targets are set by ginning and warehouse practice, not published here.',
  storageContext:
    'Held as pressed, wrapped, individually identified bales in dry covered warehouses; fire risk in dense stacked fibre is a governing consideration in warehouse design and operation.',
  transportContext:
    'One of the most widely shipped fibre commodities: bales move by truck, rail, and container across long international chains, with classing data and bale identity travelling with the lot.',
  majorProducingRegions: [
    'South Asia',
    'East Asia',
    'North America',
    'Central Asia',
    'Sub-Saharan Africa',
    'South America',
  ],
  majorTradingRegions: [
    'North America (major exporting region)',
    'East and South Asia (major spinning and importing region)',
    'Central Asia',
    'Sub-Saharan Africa (exporting region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '5201.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cotton, not carded or combed — the ginned lint as traded in bales, before any spinning preparation.',
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'seed-cotton' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cotton lint as the traded fibre commodity and its uses',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Cotton classing attributes and the structure of lint quality description',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Fibre properties, ginning effects, and contamination context',
    },
    { sourceId: 'usda-fas', citedFor: 'Lint trade structure and reporting' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Classing systems, grade names, and bale standards are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a classing determination, contract specification, or customs classification.',
    'No staple, micronaire, strength, or grade thresholds are reproduced here — they belong to the applicable classing standard and contract.',
    'Classing systems differ by country and are revised; the same bale can carry different descriptions under different systems.',
    'Regions are given to show where lint is produced and where it is spun; the lists are indicative and not ranked.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cotton Lint: The Traded Ginned Fibre',
    description:
      'Cotton lint as a commodity: ginned fibre in identified bales, classed on staple, micronaire, strength and colour, and why contamination costs most.',
    keywords: [
      'cotton lint',
      'ginned cotton',
      'cotton classing',
      'micronaire',
      'staple length',
    ],
  },
  structuredData: { article: true },
};
