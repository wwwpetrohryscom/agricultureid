import type { CommodityProductContent } from '@/types/content';

export const maltedBarley: CommodityProductContent = {
  id: 'commodity-product-malted-barley',
  slug: 'malted-barley',
  contentType: 'commodity-product',
  title: 'Malted Barley',
  alternativeNames: ['Barley malt', 'Malt', 'Brewing malt', 'Distilling malt'],
  category: 'Primary processed product',
  subcategory: 'Cereal malt',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'barley-grain' },
  producedBy: [{ type: 'processing-method', slug: 'malting' }],
  physicalForm: 'whole-grain',
  summary:
    'Malted barley is barley that has been germinated under control and then kilned to arrest the process. Malting is the deliberate partial sprouting of a grain — the one cereal transformation that requires the commodity to be alive.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Malting is the strangest of the cereal transformations. Every other grain process treats sprouting as damage: a sprouted wheat lot is downgraded, a sprouted rye lot fails its falling number. Malting does it on purpose. Barley is steeped in water until the embryo wakes, allowed to germinate for a controlled period, and then dried in a kiln at the moment the grain has developed the enzymes and modified the endosperm to the extent wanted — and not one stage further.',
    },
    {
      type: 'paragraph',
      text: 'What the maltster is buying and selling is enzymatic potential. Germination produces the enzymes that will later convert starch to fermentable sugar, and it breaks down the cell walls and protein matrix that would otherwise lock the starch away. Kilning stops the seedling from consuming what it has just made and, through the temperature and duration chosen, sets the colour and flavour of the finished malt.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of malting barley' },
    { label: 'Made from', value: 'Barley grain (Hordeum vulgare)' },
    {
      label: 'The process',
      value: 'Steeping, controlled germination, and kilning to arrest it',
    },
    {
      label: 'Unique requirement',
      value: 'The incoming grain must be alive and able to germinate evenly',
    },
    {
      label: 'What is being sold',
      value: 'Enzyme potential, extract yield, and endosperm modification',
    },
    {
      label: 'Principal uses',
      value: 'Brewing and distilling; malt-based foods',
    },
  ],
  sections: [
    {
      id: 'the-process',
      heading: 'Steeping, germination, kilning',
      body: [
        {
          type: 'paragraph',
          text: 'Steeping raises the moisture of the grain in cycles of immersion and air rest — the air rests matter, because a drowned embryo suffocates. Germination then proceeds in a controlled bed, turned to prevent the rootlets matting and cooled to carry away the heat the living grain generates. The maltster is watching the acrospire, the shoot growing under the husk, because its length indexes how far modification of the endosperm has gone. Kilning then dries the green malt and halts everything.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Modification',
              description:
                'The breakdown of endosperm cell walls and protein during germination, which makes the starch accessible. Under-modified malt yields poorly; over-modified malt has spent too much of itself.',
            },
            {
              term: 'Green malt',
              description:
                'Germinated barley before kilning, still wet and biologically active.',
            },
            {
              term: 'Culms (malt rootlets)',
              description:
                'The rootlets that grow during germination, removed after kilning and sold as a feed ingredient.',
            },
          ],
        },
      ],
    },
    {
      id: 'kilning-and-malt-types',
      heading: 'Kilning and the range of malts',
      body: [
        {
          type: 'paragraph',
          text: 'The kiln is where a single process becomes a product range. Dried gently at low temperature, malt stays pale and keeps its full enzyme complement — base malt, which supplies the bulk of any grist and does the converting. Taken hotter, sugars and amino acids react and the malt darkens and develops flavour, at the cost of the enzymes that heat destroys. Roasted and crystal malts, taken further still, contribute colour and flavour but little or no enzymatic activity, and are used in small proportions alongside base malt rather than on their own.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Colour and enzyme power trade off',
          text: 'Heat that develops colour destroys enzymes. That trade-off is why a grist is built from a pale base malt plus small additions of darker malts, rather than from a single malt kilned to the wanted colour.',
        },
      ],
    },
    {
      id: 'uses-and-quality',
      heading: 'Uses and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Brewing and distilling take the great majority of malt, and each has its own priorities — brewers weigh extract, colour, and flavour; malt distillers weigh extract and enzyme power and want little colour. Beyond drinks, malt goes into malt extract and malted milk, into breads and breakfast cereals, and into vinegar. The culms removed after kilning are sold into feed, so even the malthouse has its residual stream.',
        },
        {
          type: 'paragraph',
          text: 'Malt is bought against a specification covering extract yield, enzyme activity, colour, protein and its soluble fraction, and the completeness of modification — with a homogeneity requirement, because a batch in which some grains modified fully and others hardly at all performs worse than its average suggests. Most of these outcomes are set by the barley: the maltster manages what the grain brings and cannot exceed it.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Kilned malt is drier and far more friable than the barley it came from — modification has made the endosperm crumbly, which is exactly what milling before mashing requires. That friability makes it vulnerable in handling: augering and free fall crush grains and generate fines that a brewer did not order. Malt is also strongly hygroscopic, and malt that picks up moisture loses the crispness that makes it mill properly, so it is kept dry, cool, and protected from storage insects.',
        },
      ],
    },
  ],
  primaryUses: ['beverage', 'food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Extract yield',
    'Enzyme activity (diastatic power)',
    'Degree of modification and homogeneity',
    'Colour',
    'Total and soluble protein',
    'Moisture content',
  ],
  processContext:
    'Made by steeping barley in cycles of water and air rest, germinating it under controlled temperature and turning, and kilning to arrest germination and set colour; rootlets are removed after kilning.',
  storageContext:
    'Kept dry, cool, and insect-free; friable after modification, so handling generates fines, and strongly hygroscopic, with moisture pickup harming milling behaviour.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1107.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Malt, not roasted. Roasted malt is classified under 1107.20.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'pearl-barley' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Malt as a processed cereal product and its beverage uses',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Malting process, malt specification, and barley quality requirements',
    },
    {
      sourceId: 'usda',
      citedFor: 'Malting barley requirements and malt product context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Malt specifications are buyer-specific, and beverage composition rules differ by jurisdiction.',
  limitations: [
    'This is a reference description of the product, not a malting specification, brewing recipe, or process manual.',
    'No extract, colour, enzyme, protein, or moisture figures are given — malt is bought against buyer-specific specifications.',
    'Malts from other cereals exist and are used in brewing and distilling; this entry covers barley malt only.',
    'Malt rootlets (culms) are a real feed stream from the malthouse but are not modelled as a separate product here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Malted Barley: Primary Product of Malting',
    description:
      'Malted barley as a commodity product: deliberate controlled germination, why steeping and kilning decide enzyme power and colour, and how malt is specified.',
    keywords: [
      'malted barley',
      'barley malt',
      'malting process',
      'diastatic power',
      'kilning',
    ],
  },
  structuredData: { article: true },
};
