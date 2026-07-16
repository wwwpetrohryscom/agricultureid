import type { CommodityProductContent } from '@/types/content';

export const semolina: CommodityProductContent = {
  id: 'commodity-product-semolina',
  slug: 'semolina',
  contentType: 'commodity-product',
  title: 'Semolina',
  alternativeNames: ['Durum semolina', 'Semola', 'Semolina di grano duro'],
  category: 'Primary milled product',
  subcategory: 'Coarse durum endosperm',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'durum-wheat-grain' },
  physicalForm: 'meal',
  summary:
    'Semolina is the primary product of durum milling: coarse, angular particles of durum endosperm, sized and purified for pasta making. Its particle size is the point, not an incidental property.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Semolina is what a durum mill exists to make. Where a bread-wheat mill reduces endosperm to fine flour, a durum mill does the opposite: it grinds gently and repeatedly, sifting and purifying between passes, to recover the endosperm as coarse granular particles of a controlled size while removing bran specks and germ. The finer flour that arises anyway is separated off as durum flour, a co-product of the same operation.',
    },
    {
      type: 'paragraph',
      text: 'The coarseness is functional. Pasta is made by hydrating semolina and extruding it under pressure, and coarse, hard, angular particles hydrate evenly and produce a dough that holds its shape through extrusion and drying. Fine flour hydrates too fast and unevenly, giving a sticky dough and a weaker product. This is why semolina is specified by particle size distribution rather than treated as a flour that happens to be gritty.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of durum milling' },
    { label: 'Made from', value: 'Durum wheat grain (Triticum durum)' },
    {
      label: 'Fraction of the kernel',
      value: 'Endosperm, recovered as coarse particles',
    },
    { label: 'Co-product of the same milling', value: 'Durum flour' },
    {
      label: 'Key attributes',
      value: 'Particle size distribution, ash, protein, speck count, colour',
    },
    { label: 'Principal use', value: 'Food — dried and fresh pasta, couscous' },
  ],
  sections: [
    {
      id: 'what-semolina-is',
      heading: 'What semolina is',
      body: [
        {
          type: 'paragraph',
          text: 'Semolina is durum endosperm in granular form. Durum milling proceeds through a long sequence of break rolls, sifters, and purifiers — the purifier being the machine that distinguishes this milling system, using air currents over a sieve to separate light bran-bearing particles from denser pure endosperm of the same size. The mill is judged on how much clean semolina it recovers at the target size with the fewest bran specks.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Purification',
              description:
                'Air-and-sieve separation of particles by density as well as size, removing bran-attached fragments that a sifter alone would pass.',
            },
            {
              term: 'Specks',
              description:
                'Visible dark particles of bran or black-point-affected material carried into the semolina. Counted, because they show in the finished pasta.',
            },
            {
              term: 'Ash content',
              description:
                'A mineral measure used as an indirect indicator of how much bran material a semolina contains.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-end-use',
      heading: 'Quality and end use',
      body: [
        {
          type: 'paragraph',
          text: 'Particle size and its uniformity govern hydration and therefore dough behaviour. Protein content and quality govern the firmness of the cooked pasta and its resistance to overcooking. Colour — the bright amber-yellow the market expects — comes from carotenoid pigment carried in the grain and is diminished by oxidative enzymes during processing, so it depends on both the durum bought and how it was handled. Speck count and ash together describe how cleanly the mill separated bran.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bounded by the grain',
          text: 'A mill can protect colour, control particle size, and minimise specks. It cannot create pigment, protein, or vitreousness that the durum lot did not bring with it — semolina quality begins at the purchase of the grain.',
        },
        {
          type: 'paragraph',
          text: 'Names vary and are not interchangeable across markets. Coarser and finer semolina grades, and the finer durum flour beyond them, are defined within particular national compositional standards, and pasta laws in several jurisdictions specify what may be used to make a product sold under a given name.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Semolina is stored and shipped in bulk and in bags. It is hygroscopic, and because its particles are large and free-flowing, it segregates by size during pneumatic conveying and in silos — a coarse fraction and a fine fraction can separate in transit, which matters when the buyer specified a distribution. It supports storage insects like any milled cereal product, so stock rotation and hygiene in bins and pasta plants are routine practice.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Particle size distribution',
    'Speck count',
    'Ash content',
    'Protein content',
    'Colour (yellow pigment)',
    'Moisture content',
  ],
  processContext:
    'Produced by gradual roller milling of durum wheat with repeated sifting and air purification, which recovers clean coarse endosperm particles and separates bran, germ, and fine durum flour.',
  storageContext:
    'Held in bulk and bags; hygroscopic, prone to size segregation during pneumatic conveying, and susceptible to storage insects.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1103.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Groats and meal of wheat. The subheading covers wheat groats and meal generally, not durum semolina alone.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'durum-flour' },
    { type: 'commodity-product', slug: 'wheat-flour' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Durum milling products and their food uses' },
    {
      sourceId: 'usda',
      citedFor: 'Semolina composition, specks, and durum quality relationships',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Durum grain quality traits underlying semolina and pasta performance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Semolina grade names, compositional standards, and pasta composition laws are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, pasta formulation, or food-standards compliance statement.',
    'No particle-size, ash, protein, or speck figures are given — these are mill-, market-, and contract-specific.',
    'Semolina grade names differ between markets and do not translate directly; consult the applicable compositional standard.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Semolina: Primary Product of Durum Milling',
    description:
      'Semolina as a commodity product: coarse purified durum endosperm, why particle size decides pasta dough behaviour, plus specks, colour and handling.',
    keywords: [
      'semolina',
      'durum milling',
      'pasta semolina',
      'purifier',
      'particle size',
    ],
  },
  structuredData: { article: true },
};
