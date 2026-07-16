import type { CommodityProductContent } from '@/types/content';

export const riceHusk: CommodityProductContent = {
  id: 'commodity-product-rice-husk',
  slug: 'rice-husk',
  contentType: 'commodity-product',
  title: 'Rice Husk',
  alternativeNames: ['Rice hull', 'Paddy husk', 'Rice chaff'],
  category: 'Milling by-product',
  subcategory: 'Cereal hull',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'rice-paddy' },
  producedBy: [{ type: 'processing-method', slug: 'rice-dehulling' }],
  physicalForm: 'hull',
  summary:
    'Rice husk is the hard outer covering stripped from paddy during hulling. It is abrasive, high in silica, and almost indigestible, and it is generated in enormous volume wherever rice is milled.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every tonne of paddy that goes through a huller produces husk, and there is a great deal of it — the husk is a substantial share of the weight of the paddy, and it is the first thing a rice mill has to deal with. It is a genuine residual: it has almost no feeding value, it cannot be eaten, and its abrasiveness makes it hard on the machinery that handles it. The mill did not set out to make it; it set out to get rid of it.',
    },
    {
      type: 'paragraph',
      text: 'What makes husk interesting is what it is made of. It is unusually high in silica, drawn up by the rice plant and deposited in the husk structure, and that silica is why the husk is abrasive, why it burns to a mineral ash rather than away to nothing, and why the residue of burning it has industrial value. Husk is a by-product with real outlets, but they are outlets found for a residue rather than markets the mill serves.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of rice hulling' },
    { label: 'Made from', value: 'Rice paddy (Oryza sativa)' },
    { label: 'Fraction of the grain', value: 'The hull — lemma and palea' },
    {
      label: 'Distinctive property',
      value: 'High silica content: abrasive, and burns to a mineral ash',
    },
    {
      label: 'Principal uses',
      value: 'Fuel, bedding, and industrial silica sources',
    },
    {
      label: 'Not to be confused with',
      value:
        'Rice bran, which is a different, valuable stream from a later step',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What rice husk is',
      body: [
        {
          type: 'paragraph',
          text: 'The husk is the pair of floral structures — lemma and palea — that enclose the rice grain and are stripped off when rubber rolls or an impact huller shear them away. It is not a bran layer and it is not part of the seed: it is a covering that never was edible. It is largely cellulose, lignin, and silica, and its very low bulk density means the volume of husk a mill produces looks even more disproportionate than its weight.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Husk and bran are separate streams',
          text: 'Hulling removes the husk; whitening later removes the bran. Husk is abrasive, siliceous, and near-worthless as feed. Bran is oily, nutritious, and valuable. Treating them as one stream misstates both the economics and the safety profile of a rice mill.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The oldest and largest outlet is fuel. Husk has a usable calorific value and is available exactly where energy is needed — at the mill — so husk-fired furnaces drive paddy dryers and, at larger scale, husk-fuelled power generation. Burning concentrates the silica into rice husk ash, which is itself a product: a suitably burned ash is a pozzolanic material used in cement and concrete, and a source of silica for other industrial uses.',
        },
        {
          type: 'list',
          items: [
            'Energy — boiler and furnace fuel at the mill, notably for paddy drying, and power generation',
            'Industrial — rice husk ash as a pozzolan in cement and as a silica source',
            'Agriculture — animal bedding, poultry litter, and a horticultural substrate',
            'Feed — as a bulk fibre filler only, and of very limited value',
          ],
        },
        {
          type: 'paragraph',
          text: 'Uncontrolled burning and dumping of husk remain common where no outlet has been developed, and the piles are a nuisance and a fire risk. Where husk is used well, it is because a mill has invested in the equipment to use it — which is the practical difference between a residue and a resource.',
        },
      ],
    },
    {
      id: 'handling-and-safety',
      heading: 'Handling and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Husk is difficult material. It is extremely light and bulky, so transporting it any distance rarely pays and it is used near the mill or not at all. It is abrasive enough to wear conveying equipment. And the dust it generates is a respiratory hazard: silica-bearing dust is a recognised occupational concern, and mills that handle husk in volume manage it accordingly. Piles of dry husk are also a fire hazard, and they smoulder rather than burn cleanly once alight.',
        },
      ],
    },
  ],
  primaryUses: ['energy', 'industrial'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Silica and ash content',
    'Moisture content',
    'Bulk density',
    'Freedom from admixed bran and broken grain',
    'Calorific value',
  ],
  processContext:
    'Stripped from paddy during hulling, the first milling step, in which rubber rolls or an impact huller shear the lemma and palea from the grain to leave brown rice.',
  storageContext:
    'Very low bulk density makes storage volume the binding constraint and long-distance transport uneconomic; dry piles are a fire hazard and the dust is a respiratory concern.',
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'rice-bran' },
    { type: 'commodity', slug: 'brown-rice' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice hulling, husk generation, and husk use at the mill',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Rice milling by-products and their energy and agricultural uses',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Rice husk properties and post-harvest system context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, generated wherever rice is milled. Occupational dust rules and feed-use permissions are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not an engineering, combustion, or occupational-safety specification.',
    'No silica, ash, calorific, or husk-yield figures are given — these vary with variety, growing conditions, and the mill.',
    'No classification code is given: rice husk may be classified differently depending on its state and presentation, and AgricultureID does not guess a subheading.',
    'Rice husk ash is a distinct material produced by controlled combustion and is noted here rather than modelled as its own product.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Husk: By-Product of Rice Hulling',
    description:
      'Rice husk as a milling by-product: the siliceous hull stripped from paddy, why it differs entirely from rice bran, its fuel and ash uses, and handling hazards.',
    keywords: [
      'rice husk',
      'rice hull',
      'rice husk ash',
      'silica',
      'rice milling by-product',
    ],
  },
  structuredData: { article: true },
};
