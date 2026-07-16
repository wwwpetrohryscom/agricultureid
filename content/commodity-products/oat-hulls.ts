import type { CommodityProductContent } from '@/types/content';

export const oatHulls: CommodityProductContent = {
  id: 'commodity-product-oat-hulls',
  slug: 'oat-hulls',
  contentType: 'commodity-product',
  title: 'Oat Hulls',
  alternativeNames: ['Oat husks', 'Oat hull fibre', 'Oat shells'],
  category: 'Milling by-product',
  subcategory: 'Cereal hull',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'oat-grain' },
  physicalForm: 'hull',
  summary:
    'Oat hulls are the papery outer covering separated from the groat during dehulling. They are a bulky, fibrous, low-value residual, generated in large volume because the hull is a substantial share of the delivered oat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The oat hull is not fused to the kernel — it is a loose covering that a dehuller cracks off cleanly — and it makes up a large enough share of the weight of a lot of oats that removing it fundamentally changes what a mill has. A miller who buys oats is buying groats and hulls together and will sell them separately, and the hull side of that transaction is worth very little per tonne.',
    },
    {
      type: 'paragraph',
      text: 'Hulls are therefore a by-product in the strict sense used here: a residual output of low value that the process removes rather than aims to produce. That contrasts with maize germ, separated in a comparable step from a comparable position on the kernel, which feeds an oil industry and commands a real price. The classification is made per process on the economics and the intent, not by analogy between anatomical parts.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of oat dehulling' },
    { label: 'Made from', value: 'Oat grain (Avena sativa)' },
    {
      label: 'Fraction of the grain',
      value: 'The hull — a loose outer covering',
    },
    {
      label: 'Composition',
      value:
        'Almost entirely insoluble fibre; very low in protein, starch, and oil',
    },
    {
      label: 'Principal uses',
      value: 'Feed fibre carrier, boiler fuel, and industrial feedstock',
    },
    {
      label: 'Handling character',
      value: 'Extremely light and bulky; commonly pelleted or burned on site',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What oat hulls are',
      body: [
        {
          type: 'paragraph',
          text: 'The hull is composed of the lemma and palea, the floral structures that enclose the oat grain, and it is almost pure structural material — cellulose, hemicellulose, and lignin, with little of nutritional interest. Because it is loose rather than fused, impact dehulling separates it in a fairly clean break, and aspiration then divides the light hulls from the dense groats by weight. What varies between mills is how many groats are lost into the hull stream and how much broken groat material contaminates it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hull is not oat bran',
          text: 'Oat bran is a fraction of the groat, separated from groat material after dehulling, and it carries the soluble beta-glucan fibre oats are valued for. The hull is the discarded covering and carries almost none of it. The two are not interchangeable and are not the same stream.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Fuel is the most common outlet, and the logic is the same as for rice husk: the material is available in quantity at the mill, where energy is needed, and it is not worth transporting far. Beyond that, hulls serve as a bulk fibre carrier in feed — used to dilute an over-rich ration rather than to nourish anything — as animal bedding, and as a purified insoluble fibre ingredient where they are cleaned and milled for the purpose. There is also long-standing industrial interest in oat hulls as a source of furfural, because their high pentosan content suits that chemistry.',
        },
        {
          type: 'list',
          items: [
            'Feed — a bulk fibre carrier and ration diluent, not a nutrient source',
            'Energy — boiler fuel burned at the mill',
            'Industrial — purified insoluble fibre ingredients; furfural feedstock',
            'Agriculture — bedding and horticultural substrate',
          ],
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Hulls are the classic awkward mill stream: very low bulk density, so the volume is disproportionate to the weight; dusty, so containment and extraction matter; abrasive enough to wear at conveying equipment over time; and a fire risk in dry piles. Pelleting is common and is done purely to make the material transportable, since a loose hull costs more to move than it is worth. They take up moisture readily and, with adhering broken groat material carrying some oil, a hull stream that sits damp does not stay sound indefinitely.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['energy', 'industrial'],
  majorQualityAttributes: [
    'Fibre content',
    'Groat and broken-groat contamination',
    'Moisture content',
    'Bulk density',
    'Freedom from foreign material',
  ],
  processContext:
    'Separated from the groat during impact dehulling of oats, then divided from the groats by aspiration on the basis of their much lower density.',
  storageContext:
    'Bulky, light, dusty, and abrasive; usually pelleted to make transport economic or burned on site, and a fire hazard in dry piles.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'livestock', slug: 'cattle' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'rolled-oats' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oat milling residues and their feed and energy uses',
    },
    { sourceId: 'usda', citedFor: 'Oat hull composition and product context' },
    {
      sourceId: 'ahdb',
      citedFor: 'Oat grain structure, dehulling, and mill stream context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, combustion specification, or nutritional statement.',
    'No fibre, hull-percentage, or calorific figures are given — these vary with the oat lot and the mill.',
    'No classification code is given: hulls may be classified differently depending on their state and presentation, and AgricultureID does not guess a subheading.',
    'Oat bran is a distinct and far more valuable fraction of the groat and is not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Oat Hulls: By-Product of Oat Dehulling',
    description:
      'Oat hulls as a milling by-product: the loose fibrous covering removed from groats, why they differ from oat bran, their feed and fuel uses, and handling issues.',
    keywords: [
      'oat hulls',
      'oat husks',
      'oat dehulling',
      'fibre carrier',
      'milling by-product',
    ],
  },
  structuredData: { article: true },
};
