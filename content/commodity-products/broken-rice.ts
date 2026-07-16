import type { CommodityProductContent } from '@/types/content';

export const brokenRice: CommodityProductContent = {
  id: 'commodity-product-broken-rice',
  slug: 'broken-rice',
  contentType: 'commodity-product',
  title: 'Broken Rice',
  alternativeNames: ['Brokens', 'Rice brokens', 'Brewers rice', 'Riz brisé'],
  category: 'Milling co-product',
  subcategory: 'Graded rice fragments',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'milled-rice' },
  physicalForm: 'other',
  summary:
    'Broken rice is the fragment fraction separated from whole grains during rice milling. It is the same edible endosperm as white rice, sold apart because rice is priced on grain integrity rather than on what it is made of.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Broken rice is nutritionally and chemically the same thing as the whole white rice beside it. What separates the two is length. Rice is bought and sold on the appearance and integrity of the cooked grain, so a mill runs its output over length graders that sort whole kernels from fragments, and the fragments become a distinct commodity product with a distinct price — often a substantial discount to the whole grain they were part of an hour earlier.',
    },
    {
      type: 'paragraph',
      text: 'That makes brokens a co-product rather than a by-product, and the reasoning is worth being explicit about. This is a deliberately separated, size-graded, marketed stream with established food and industrial demand, not a residue that the mill needs to find a home for. The mill does not aim to produce brokens — it aims to minimise them — but what it separates is a real product sold on its own terms.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of rice milling' },
    { label: 'Made from', value: 'Milled rice (Oryza sativa)' },
    {
      label: 'What it is',
      value: 'Fragments of the same endosperm as whole white rice',
    },
    {
      label: 'Why it is separate',
      value: 'Rice is priced on grain integrity, not on composition',
    },
    {
      label: 'Graded by',
      value: 'Fragment size, over length graders, into defined fractions',
    },
    {
      label: 'Principal uses',
      value: 'Food, flour and starch, brewing and distilling, and feed',
    },
  ],
  sections: [
    {
      id: 'where-brokens-come-from',
      heading: 'Where brokens come from',
      body: [
        {
          type: 'paragraph',
          text: 'Almost all breakage is inherited rather than created. Fissures set in the kernel during paddy drying — when moisture moved through the grain too abruptly — survive hulling invisibly and then fail under the mechanical stress of whitening. Aggressive hulling and over-milling add to the total, and immature or chalky grains, being weaker, break more readily than sound ones. The mill can protect its whole-grain fraction with careful settings; it cannot recover kernels that were already cracked when they arrived.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Brokens are graded, not merely collected',
          text: 'Length graders sort fragments into defined size fractions — from large brokens down to the smallest fine material — and those fractions go to different markets. A mill sells brokens by grade, not as an undifferentiated stream.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Brokens are food, and in many markets are bought as such deliberately rather than as a compromise: they cook faster, they suit porridges and rice puddings, and several cuisines specifically prefer them for particular dishes. Beyond direct eating, they are the natural raw material for rice flour and rice starch, since a product that will be ground has no use for kernel integrity. Brewers rice — a broken fraction used as an adjunct in brewing — is a long-established outlet, as is distilling. Small and fine fragments go to feed and to pet food.',
        },
        {
          type: 'list',
          items: [
            'Food — cooked directly, and preferred for some dishes in several cuisines',
            'Food and industrial — milled into rice flour and processed for rice starch',
            'Beverage — brewers rice as a brewing adjunct, and distilling feedstock',
            'Feed — the finest fractions, into compound feed and pet food',
          ],
        },
        {
          type: 'paragraph',
          text: 'The international trade routinely names milled rice lots by their permitted broken content, and brokens are also blended back into whole rice up to a specified proportion. So the same material is at once a separate product and a component of the primary one, depending on the contract.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Brokens are specified by fragment size fraction and uniformity, by the proportion of fine material and rice flour dust carried with them, and by the usual measures of colour, chalkiness, damage, and freedom from foreign matter. Buyers grinding them into flour care about different things from buyers cooking them, so the specification follows the outlet.',
        },
        {
          type: 'paragraph',
          text: 'They store much as milled rice does — dry, cool, and protected from storage insects — with the added consideration that their greater surface area per unit weight, and the fines that travel with them, make them slightly more prone to moisture pickup and to attracting infestation than intact grains. Since the bran is gone, they carry the same low oil content and the same freedom from rancidity as the white rice they came from.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial', 'beverage'],
  majorQualityAttributes: [
    'Fragment size fraction and uniformity',
    'Fine material and dust content',
    'Chalkiness and damaged fragments',
    'Colour',
    'Moisture content',
    'Foreign material',
  ],
  processContext:
    'Separated from whole kernels by length graders after whitening; most of the breakage originates in fissures set during paddy drying rather than in the mill itself.',
  storageContext:
    'Stores like milled rice — dry, cool, and insect-protected — with a slightly greater tendency to pick up moisture and harbour infestation because of the fines that travel with it.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1006.40',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Broken rice.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity-product', slug: 'rice-bran' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Origins of rice breakage, length grading, and head rice yield',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Broken rice as a traded product and its food and industrial uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Broken rice grading fractions and defect categories',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Broken-size fraction definitions, grade names, and blending allowances are jurisdiction- and contract-specific.',
  limitations: [
    'This is a reference description of the product, not a grading determination, contract specification, or customs classification.',
    'No fraction-size definitions or broken-content percentages are given — these belong to the standard and the contract in force.',
    'Rice flour and rice starch are real downstream products but are not modelled as products of this page.',
    'Brokens are modelled as a co-product of milled rice because length grading after whitening is what separates them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Broken Rice: Co-Product of Rice Milling',
    description:
      'Broken rice as a milling co-product: fragments separated by length graders, why breakage traces back to paddy drying, its grades, and food and brewing uses.',
    keywords: [
      'broken rice',
      'brewers rice',
      'length grader',
      'rice fragments',
      'rice flour',
    ],
  },
  structuredData: { article: true },
};
