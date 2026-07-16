import type { CommodityProductContent } from '@/types/content';

export const ryeFlour: CommodityProductContent = {
  id: 'commodity-product-rye-flour',
  slug: 'rye-flour',
  contentType: 'commodity-product',
  title: 'Rye Flour',
  alternativeNames: ['Milled rye', 'Roggenmehl', 'Pumpernickel meal'],
  category: 'Primary milled product',
  subcategory: 'Cereal flour',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'rye-grain' },
  physicalForm: 'flour',
  summary:
    'Rye flour is the primary product of rye milling. Because rye bran does not separate cleanly from the endosperm, rye flours are graded by how much of the whole grain they retain rather than by a clean fractionation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rye flour is what a rye mill produces, and the milling itself is a different exercise from wheat milling. The rye kernel does not give up its bran the way a wheat kernel does: the bran is more tightly bound to a softer endosperm, and the grain does not fracture into cleanly separable fractions on the break rolls. A rye mill therefore cannot fully separate bran from endosperm, and it does not try to.',
    },
    {
      type: 'paragraph',
      text: 'The consequence shapes the whole product range. Rye flours are described by extraction — by how much of the grain ended up in the flour — running from light, low-extraction flours through medium flours to wholemeal rye and coarse rye meal. Ash content is the practical index of where a flour sits on that scale, and unlike wheat, where light flour is the default, dark and wholemeal rye flours are the mainstream products because they are what rye bread requires.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of rye milling' },
    { label: 'Made from', value: 'Rye grain (Secale cereale)' },
    {
      label: 'Milling character',
      value: 'Bran does not separate cleanly, so fractionation is incomplete',
    },
    {
      label: 'Graded by',
      value: 'Extraction rate, indexed in practice by ash content',
    },
    {
      label: 'Dough structure',
      value: 'Built by pentosans, not by a gluten network',
    },
    {
      label: 'Principal use',
      value: 'Food — sourdough rye breads and crispbreads',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What rye flour is',
      body: [
        {
          type: 'paragraph',
          text: 'Rye milling is a shorter, simpler process than wheat milling — fewer passes, less purification, and no expectation of a clean white stream. What comes off is a series of flours differing in how much bran material they carry, and the miller blends and specifies them by extraction. At the coarse end, rye meal and pumpernickel-type meals are essentially the whole grain ground, retaining everything.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rye flour does not behave like wheat flour',
          text: 'Rye proteins do not form a gluten network. Rye dough gets its structure from pentosans — water-binding carbohydrates — which is why rye breads are dense, moist, long-keeping, and made by acidified sourdough methods rather than by conventional straight-dough baking.',
        },
      ],
    },
    {
      id: 'why-sourdough',
      heading: 'Why rye bread is soured',
      body: [
        {
          type: 'paragraph',
          text: 'Sourdough is not tradition for its own sake in rye baking; it is a technical requirement. Rye starch gelatinises at a relatively low temperature, and rye is rich in amylase, so in a neutral dough the enzymes are still active while the starch is already gelatinising during baking — degrading it and giving a sticky, collapsed crumb. Acidifying the dough lowers the pH enough to suppress the enzyme and to strengthen the pentosan structure, which is what lets a rye loaf hold together at all.',
        },
        {
          type: 'paragraph',
          text: 'This connects the flour directly back to the grain. Because enzyme activity is the problem, the falling number of the rye a mill buys determines what its flour can do, and the miller has no way to add back what a sprouted lot has already lost. Rye flour quality is set in the field and confirmed at the intake bin.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality, safety, and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Rye flours are specified by extraction and ash, by falling number or an equivalent enzyme measure, by particle size, colour, and moisture. Higher-extraction flours carry more bran, more colour, more flavour — and more of whatever was on the outside of the grain, which is where the safety question enters. Ergot alkaloids, if sclerotia were not cleaned out of the grain, report to the flour, and the outer fractions carry proportionally more. Regulatory limits apply to the flour in its own right, and cleaning the grain is the control point.',
        },
        {
          type: 'paragraph',
          text: 'In handling, rye flour behaves as a cereal flour: hygroscopic, prone to compaction, and a substrate for storage insects. Wholemeal and high-extraction rye flours contain the germ and its oil, so they keep less well than light flours and are rotated more tightly — a familiar trade-off wherever a flour retains the whole grain.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Extraction rate',
    'Ash content',
    'Falling number (enzyme activity)',
    'Particle size',
    'Colour',
    'Moisture content',
  ],
  processContext:
    'Produced by roller milling rye through a shorter, simpler flow than wheat, with limited bran separation; flours are specified and blended by extraction rather than fractionated cleanly.',
  storageContext:
    'Hygroscopic, compacts in bulk, and supports storage insects; high-extraction and wholemeal rye flours retain germ oil and keep less well than light flours.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1102.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cereal flours other than of wheat or meslin, other than maize flour. The dedicated rye flour subheading 1102.10 was deleted from earlier HS editions, so rye flour now falls in this residual subheading.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rye' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'wheat-flour' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Rye milling products and their food uses' },
    {
      sourceId: 'efsa',
      citedFor:
        'Ergot alkaloids as a regulated contaminant carried into rye milling fractions',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European rye flour market context and cereal standards',
    },
    {
      sourceId: 'usda',
      citedFor: 'Rye flour composition and extraction context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with use concentrated in northern and eastern Europe. Flour type names, extraction grades, and contaminant limits are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, baking formula, or food-standards compliance statement.',
    'No extraction, ash, falling-number, or ergot figures are given — these are set by the standard, the mill, and the regulation in force.',
    'National rye flour type designations are defined within their own standards and do not translate directly between markets.',
    'Ergot limits and what is measured differ by jurisdiction; consult the applicable regulation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rye Flour: Primary Product of Rye Milling',
    description:
      'Rye flour as a commodity product: why rye bran will not separate cleanly, how extraction grades work, why rye bread needs sourdough, and ergot carryover.',
    keywords: [
      'rye flour',
      'rye milling',
      'extraction rate',
      'pentosans',
      'sourdough rye',
    ],
  },
  structuredData: { article: true },
};
