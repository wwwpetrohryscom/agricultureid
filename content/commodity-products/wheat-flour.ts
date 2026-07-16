import type { CommodityProductContent } from '@/types/content';

export const wheatFlour: CommodityProductContent = {
  id: 'commodity-product-wheat-flour',
  slug: 'wheat-flour',
  contentType: 'commodity-product',
  title: 'Wheat Flour',
  alternativeNames: ['Milled wheat', 'Straight-run flour'],
  category: 'Primary milled product',
  subcategory: 'Cereal flour',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'wheat-grain' },
  physicalForm: 'flour',
  summary:
    'Wheat flour is the primary product of milling wheat grain: the endosperm reduced to a fine powder after the bran and germ are separated. Extraction rate, protein, and particle size determine which flours suit which end uses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat flour is what milling is run to produce. Roller milling progressively breaks the wheat kernel and separates the starchy endosperm from the outer bran layers and the germ, then reduces the endosperm to flour. Bran and germ leave the mill as co-products with their own markets, so a mill produces several saleable streams from one commodity.',
    },
    {
      type: 'paragraph',
      text: 'Flours are not interchangeable. The class of wheat milled, the extraction rate, the protein content, and the particle size together determine whether a flour suits bread, biscuits, noodles, or another use. Flour is a product of the commodity, and its properties are inherited from the grain and from how the grain was milled.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of milling' },
    { label: 'Made from', value: 'Wheat grain (Triticum aestivum)' },
    { label: 'Fraction of the kernel', value: 'Endosperm' },
    {
      label: 'Co-products of the same process',
      value: 'Bran and wheat germ',
    },
    {
      label: 'Key attributes',
      value: 'Extraction rate, protein content, particle size, ash content',
    },
    { label: 'Principal uses', value: 'Food (baking and other cereal foods)' },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What wheat flour is',
      body: [
        {
          type: 'paragraph',
          text: 'Flour is the milled endosperm of the wheat kernel. The endosperm is the kernel’s starch and protein reserve; the bran is its protective outer layers and the germ is the embryo. Roller milling exists to separate these fractions cleanly, because they behave very differently in food use — bran and germ carry oil, fibre, and colour that change how a flour performs and how long it keeps.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Extraction rate',
              description:
                'The proportion of the grain recovered as flour. Lower-extraction flours are whiter and contain less bran; higher-extraction flours retain more of the kernel.',
            },
            {
              term: 'Ash content',
              description:
                'A mineral measure used as an indirect indicator of how much bran is present in a flour.',
            },
            {
              term: 'Wholemeal flour',
              description:
                'Flour containing all of the kernel fractions in their original proportions.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-use',
      heading: 'Quality and end use',
      body: [
        {
          type: 'paragraph',
          text: 'Protein content and quality largely determine baking behaviour: higher-protein flours from hard wheats form stronger gluten networks suited to bread, while lower-protein flours from soft wheats suit biscuits and cakes. Particle size, damaged starch, and enzyme activity also matter, which is why flours are specified for a use rather than treated as a single commodity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Inherited from the grain',
          text: 'A mill cannot add protein or soundness that the grain did not have. Flour specification therefore begins with the class and grade of wheat purchased.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Flour is stored and shipped in bulk and in bags. It takes up moisture from the air, can support storage insects, and — because milling redistributes the kernel’s oil-bearing fractions — flours retaining germ have a shorter keeping quality than white flours. Storage conditions and stock rotation therefore matter to flour as much as to the grain it came from.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Extraction rate',
    'Protein content',
    'Ash content',
    'Particle size',
    'Moisture content',
  ],
  processContext:
    'Produced by roller milling of wheat grain, which separates endosperm from bran and germ and progressively reduces the endosperm to flour.',
  storageContext:
    'Stored in bulk or bags; hygroscopic, susceptible to storage insects, and shorter-keeping where germ is retained.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1101.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Wheat or meslin flour.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Wheat milling products and their food uses' },
    {
      sourceId: 'usda',
      citedFor: 'Flour composition and wheat class suitability',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Milling quality and flour specification context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Flour naming, compositional standards, and fortification requirements are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, recipe, or food-standards compliance statement.',
    'Flour naming and compositional/fortification requirements differ by jurisdiction; consult the applicable food authority.',
    'No extraction, protein, or ash figures are given here — they are mill-, class-, and contract-specific.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Flour: Primary Product of Wheat Milling',
    description:
      'Wheat flour as a commodity product: the milled endosperm, how extraction rate and protein shape end use, its bran and germ co-products, and storage behaviour.',
    keywords: [
      'wheat flour',
      'roller milling',
      'extraction rate',
      'flour protein',
      'milling co-products',
    ],
  },
  structuredData: { article: true },
};
