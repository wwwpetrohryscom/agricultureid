import type { CommodityProductContent } from '@/types/content';

export const wheatBran: CommodityProductContent = {
  id: 'commodity-product-wheat-bran',
  slug: 'wheat-bran',
  contentType: 'commodity-product',
  title: 'Wheat Bran',
  alternativeNames: ['Miller’s bran', 'Wheat feed (in part)'],
  category: 'Milling co-product',
  subcategory: 'Cereal bran',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'wheat-grain' },
  physicalForm: 'bran',
  summary:
    'Wheat bran is the outer layers of the wheat kernel, separated during milling. It is a genuine co-product rather than waste: it carries most of the kernel’s fibre and is traded for animal feed and for food use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat bran is the multi-layered outer covering of the wheat kernel, removed as roller milling separates the endosperm to make flour. Every mill producing white flour necessarily produces bran, and the stream has an established market — it is a co-product of milling, not a residue that must be disposed of.',
    },
    {
      type: 'paragraph',
      text: 'Bran carries a large share of the kernel’s dietary fibre and minerals, along with some adhering endosperm. Its composition and value depend on how cleanly the mill separates the fractions, so bran from different mills and different extraction rates is not identical.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of wheat milling' },
    { label: 'Made from', value: 'Wheat grain (Triticum aestivum)' },
    { label: 'Fraction of the kernel', value: 'Outer bran layers' },
    {
      label: 'Principal uses',
      value: 'Animal feed and food (fibre ingredient)',
    },
    {
      label: 'Composition driver',
      value: 'Extraction rate and separation efficiency of the mill',
    },
    {
      label: 'Companion streams',
      value: 'Flour (primary product) and wheat germ',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What wheat bran is',
      body: [
        {
          type: 'paragraph',
          text: 'The wheat kernel has three functional parts: the endosperm, the germ, and the bran. Bran is the outer protective covering, made up of several distinct layers. Because the mill’s objective is to recover endosperm as flour, the bran fraction is separated and collected — how much endosperm remains attached to it depends on the mill and the extraction rate chosen.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Co-product, not by-product',
          text: 'Bran is classed here as a co-product because it is a deliberate, marketed output of milling with a real feed and food value — not a low-value residual. The distinction is economic and technical, and it is applied per process rather than assumed.',
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
            'Animal feed — a widely used fibre and energy source in compound feeds',
            'Food — as a fibre ingredient in breakfast cereals, breads, and other foods',
            'Blended mill streams — sold in combination with other fractions as wheat feed',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because bran concentrates the kernel’s outer layers, it also concentrates anything carried on or near the kernel surface. That makes the soundness and cleanliness of the incoming grain, and the mill’s cleaning, directly relevant to the quality of the bran stream.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Bran is bulky and low in density relative to flour, which affects storage volume and transport economics. It takes up moisture readily and, because it carries oil-bearing material from the outer kernel, its keeping quality is shorter than that of white flour. It is handled in bulk and in bags, and is commonly pelleted to improve handling and density.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'food'],
  majorQualityAttributes: [
    'Fibre content',
    'Residual starch (separation efficiency)',
    'Moisture content',
    'Freedom from contamination',
  ],
  processContext:
    'Separated from the endosperm during roller milling of wheat grain; the quantity and composition depend on the extraction rate.',
  storageContext:
    'Bulky and hygroscopic with a shorter keeping quality than white flour; often pelleted for handling and transport.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2302.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Bran, sharps and other residues of wheat.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'cattle' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'wheat-flour' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Wheat milling co-products and their feed use',
    },
    { sourceId: 'usda', citedFor: 'Bran composition and product context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or food-standards statement.',
    'Composition varies with mill, extraction rate, and incoming grain; no universal analysis is given here.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Bran: Co-Product of Wheat Milling',
    description:
      'Wheat bran as a milling co-product: which kernel fraction it is, why it is a co-product rather than waste, its feed and food uses, and how it is handled.',
    keywords: [
      'wheat bran',
      'milling co-product',
      'wheat feed',
      'dietary fibre',
      'bran handling',
    ],
  },
  structuredData: { article: true },
};
