import type { CommodityProductContent } from '@/types/content';

export const cornmeal: CommodityProductContent = {
  id: 'commodity-product-cornmeal',
  slug: 'cornmeal',
  contentType: 'commodity-product',
  title: 'Cornmeal',
  alternativeNames: ['Maize meal', 'Corn meal', 'Mealie meal', 'Polenta meal'],
  category: 'Primary milled product',
  subcategory: 'Maize endosperm meal',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'maize-grain' },
  producedBy: [
    { type: 'processing-method', slug: 'hammer-milling' },
    { type: 'processing-method', slug: 'maize-dry-milling' },
  ],
  physicalForm: 'meal',
  summary:
    'Cornmeal is the principal food output of maize dry milling: ground endosperm, sold across a range of particle sizes. It is a staple food across much of Africa and the Americas and the basis of polenta, grits, and cornbread.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cornmeal is what dry milling produces when it is run for food. The maize kernel is tempered with water, then degerminated — cracked so that the tough germ and bran separate from the brittle endosperm — and the endosperm is ground and sifted into a series of fractions. The coarsest are grits, the middle range is meal, the finest is maize flour, and the boundaries between them are set by sieve size rather than by any change in what the material is.',
    },
    {
      type: 'paragraph',
      text: 'It is the primary product of the route because it is the reason the mill is running: the germ and bran that come off alongside it are recovered and sold, but they are what the operation removes, not what it is for. As a staple, cornmeal feeds far more people than the international maize trade statistics suggest, since most of it is milled and eaten close to where the grain was grown.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of maize dry milling' },
    { label: 'Made from', value: 'Maize grain (Zea mays)' },
    { label: 'Fraction of the kernel', value: 'Endosperm' },
    {
      label: 'Streams of the same process',
      value: 'Maize germ (co-product) and maize bran (by-product)',
    },
    {
      label: 'Particle size range',
      value: 'Grits, meal, and flour are the same material at different sizes',
    },
    {
      label: 'Principal use',
      value: 'Food — porridges, polenta, grits, and cornbread',
    },
  ],
  sections: [
    {
      id: 'degermination-and-fractions',
      heading: 'Degermination and the milling fractions',
      body: [
        {
          type: 'paragraph',
          text: 'Everything about industrial cornmaking follows from the structure of the kernel. The germ is large, oily, and tough; the bran is fibrous; the endosperm is brittle. Tempering toughens the germ and bran further so that a degerminator can shear them off in one piece rather than shattering them into the meal. The cleaner that separation is, the lower the oil and fibre in the resulting meal — and oil is what makes cornmeal go rancid.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Degerminated meal',
              description:
                'Meal from which germ and bran have been separated. Lower in oil and fibre, and much longer-keeping.',
            },
            {
              term: 'Whole-grain cornmeal',
              description:
                'Meal in which the whole kernel is ground with nothing removed, including stone-ground meal. Fuller flavour, shorter keeping.',
            },
            {
              term: 'Grits',
              description:
                'The coarsest endosperm fraction, sifted out above meal size. Same material, larger particles.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This means "cornmeal" names two rather different products. Degerminated meal is a stable commodity that ships and stores; whole-grain and stone-ground meal keeps the germ oil and has a limited life. A specification that does not say which is being sold has not described the goods.',
        },
      ],
    },
    {
      id: 'uses-and-nixtamalisation',
      heading: 'Uses, and where masa differs',
      body: [
        {
          type: 'paragraph',
          text: 'Cornmeal is eaten as thick and thin porridges across eastern and southern Africa, as polenta in northern Italy, as grits in the American South, and as the base of cornbreads and coatings worldwide. Colour follows the grain — yellow and white maize give yellow and white meal, and the preference between them is regional and strong.',
        },
        {
          type: 'paragraph',
          text: 'Masa is not cornmeal. Tortillas and related foods are made from nixtamalised maize: the grain is cooked and steeped in an alkaline solution, which loosens the pericarp, changes the starch and protein, and releases bound niacin. That is a chemical process with a different product, not a fineness of grind, and grinding dry cornmeal will not produce it.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fortification is common and jurisdictional',
          text: 'Where maize meal is a staple, many countries mandate fortification with specified micronutrients. What must be added, and to which mill outputs, is set by national regulation.',
        },
      ],
    },
    {
      id: 'quality-and-storage',
      heading: 'Quality and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Cornmeal is specified by particle size distribution, by the residual fat that indicates how completely the germ was removed, and by ash and fibre, which indicate residual bran. Colour and freedom from dark specks matter to buyers. Moisture governs keeping quality, as with any milled product.',
        },
        {
          type: 'paragraph',
          text: 'Two risks dominate storage. Rancidity is a function of how much germ oil is left, so degerminated meal outlasts whole-grain meal by a wide margin under the same conditions. And mycotoxins pass through milling: aflatoxins and fumonisins present in the grain are not destroyed by grinding, and they distribute unevenly between the fractions. Meal made from contaminated maize is contaminated meal, and the regulatory limits apply to it in its own right.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Particle size distribution',
    'Residual fat (degermination efficiency)',
    'Ash and fibre content',
    'Colour and speck count',
    'Moisture content',
    'Mycotoxin status',
  ],
  processContext:
    'Produced by dry milling maize: the grain is cleaned, tempered, degerminated to separate germ and bran, and the endosperm is ground and sifted into grits, meal, and flour fractions.',
  storageContext:
    'Keeping quality is set by residual germ oil — degerminated meal stores far longer than whole-grain meal; hygroscopic and susceptible to storage insects.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1103.13',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Groats and meal of maize (corn). Finer maize flour is classified separately under 1102.20.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'maize-germ' },
    { type: 'commodity-product', slug: 'maize-bran' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Maize dry milling, meal as a staple food, and fortification context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Maize milling fractions and product composition',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize kernel structure and its effect on milling behaviour',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product names, particle-size grades, fortification mandates, and mycotoxin limits are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, recipe, or food-standards compliance statement.',
    'No particle-size, fat, ash, or shelf-life figures are given — these are mill-, product-, and contract-specific.',
    'Fortification requirements and mycotoxin limits are set by national regulation and are not reproduced here.',
    'Nixtamalised maize products (masa, tortillas) come from a different process and are not covered by this entry.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cornmeal: Primary Product of Maize Milling',
    description:
      'Cornmeal as a commodity product: degerminated maize endosperm, how grits, meal and flour differ, why germ oil limits shelf life, and mycotoxin carryover.',
    keywords: [
      'cornmeal',
      'maize meal',
      'degermination',
      'maize dry milling',
      'polenta grits',
    ],
  },
  structuredData: { article: true },
};
