import type { CommodityProductContent } from '@/types/content';

export const durumFlour: CommodityProductContent = {
  id: 'commodity-product-durum-flour',
  slug: 'durum-flour',
  contentType: 'commodity-product',
  title: 'Durum Flour',
  alternativeNames: [
    'Semolina flour',
    'Fancy durum patent flour',
    'Semolina rimacinata',
  ],
  category: 'Milling co-product',
  subcategory: 'Fine durum endosperm',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'durum-wheat-grain' },
  producedBy: [{ type: 'processing-method', slug: 'semolina-production' }],
  physicalForm: 'flour',
  summary:
    'Durum flour is the fine endosperm fraction that a durum mill produces alongside semolina. It is a marketed co-product with real uses in breads, couscous, and noodles, not a milling loss.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A durum mill is set up to maximise coarse semolina, but no milling system can grind selectively enough to produce granules and nothing else. Some endosperm inevitably breaks down past the target size at every pass, and the mill collects it. That fine fraction is durum flour: the same endosperm as semolina, in a smaller particle size, and sold as a product in its own right.',
    },
    {
      type: 'paragraph',
      text: 'It is a co-product rather than a by-product because it is genuinely valuable and genuinely wanted. Durum flour carries the same protein character and the same yellow pigment as the semolina beside it, and there are established food markets that specifically prefer the finer particle — which means the mill is selling a second endosperm product, not disposing of a residue.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of durum milling' },
    { label: 'Made from', value: 'Durum wheat grain (Triticum durum)' },
    {
      label: 'Fraction of the kernel',
      value: 'Endosperm, in a fine particle size',
    },
    {
      label: 'Companion product',
      value: 'Semolina, the primary output of the same mill',
    },
    {
      label: 'Difference from semolina',
      value: 'Particle size, not composition or wheat class',
    },
    {
      label: 'Principal uses',
      value: 'Food — breads, couscous, and noodle products',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What durum flour is',
      body: [
        {
          type: 'paragraph',
          text: 'Durum flour is durum endosperm ground finer than semolina. It reaches the mill floor by two routes: as the fine material that falls through the sifters during normal semolina production, and, in some mills, by deliberately regrinding semolina to a finer specification for buyers who want it — the Italian trade name semolina rimacinata means exactly that, remilled semolina. Both routes give the same kind of product, and the second makes plain that this is a deliberate output.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not the same as bread flour',
          text: 'Durum flour is fine, but it is durum. Its gluten behaves differently from that of common wheat, so it is not a substitute for bread flour and is generally blended rather than used alone in conventional leavened baking.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Food — traditional durum breads of the Mediterranean and Middle East',
            'Food — couscous, where the fine fraction is agglomerated with semolina',
            'Food — fresh pasta and noodle products where a smoother dough is wanted',
            'Blending — combined with common wheat flour for particular bakery products',
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between durum flour and semolina is regulated in some markets, because pasta composition laws specify which durum fraction may be used in a product sold under a protected name. A mill therefore sells the two streams under defined descriptions rather than interchangeably.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Durum flour is assessed on the same attributes as semolina — particle size, ash, protein, colour, and moisture — with the size specification simply set finer. Its ash tends to run a little higher than the semolina from the same mill stream, because fine material picks up proportionally more of the bran fragments that grinding produces, and that shows in colour and speck appearance.',
        },
        {
          type: 'paragraph',
          text: 'It handles like other cereal flours: hygroscopic, prone to compaction and bridging in bulk, and a substrate for storage insects. Because it carries the same pigment as semolina, exposure to heat and prolonged storage dull the colour that its buyers are paying for.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Particle size',
    'Ash content',
    'Protein content',
    'Colour (yellow pigment)',
    'Moisture content',
  ],
  processContext:
    'Collected as the fine endosperm fraction produced alongside semolina during durum roller milling, or made deliberately by regrinding semolina to a finer specification.',
  storageContext:
    'Stored in bulk and bags; hygroscopic, compacts and bridges in bins, supports storage insects, and loses colour with heat and prolonged holding.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1101.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Wheat or meslin flour. The subheading does not distinguish durum flour from common wheat flour.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'semolina' },
    { type: 'commodity-product', slug: 'wheat-flour' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Durum milling fractions and their food uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Durum flour composition and its relationship to semolina',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'European market context for durum fractions and pasta composition rules',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product names, compositional standards, and pasta composition laws differ by jurisdiction.',
  limitations: [
    'This is a reference description, not a milling specification, formulation, or food-standards compliance statement.',
    'No particle-size, ash, or protein figures are given — these are mill- and contract-specific.',
    'Names for durum fractions differ by market and are defined within national standards; they do not translate directly.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Durum Flour: Co-Product of Semolina Milling',
    description:
      'Durum flour as a milling co-product: the fine durum endosperm fraction beside semolina, why it is a real product, its bread and couscous uses, and handling.',
    keywords: [
      'durum flour',
      'semolina rimacinata',
      'durum milling co-product',
      'couscous',
      'durum bread',
    ],
  },
  structuredData: { article: true },
};
