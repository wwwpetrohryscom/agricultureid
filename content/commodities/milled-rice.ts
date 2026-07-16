import type { CommodityContent } from '@/types/content';

export const milledRice: CommodityContent = {
  id: 'commodity-milled-rice',
  slug: 'milled-rice',
  contentType: 'commodity',
  title: 'Milled Rice',
  alternativeNames: ['White rice', 'Polished rice', 'Wholly milled rice'],
  category: 'Cereal grain commodity',
  subcategory: 'Milled (white) rice',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Starchy endosperm of the caryopsis, after the hull, bran layers, and germ are removed',
  sourceCrop: { type: 'crop', slug: 'rice' },
  summary:
    'Milled rice is white rice: the endosperm left after the hull, bran, and germ have been removed. It is the form in which rice reaches most consumers and dominates international rice trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Milled rice is the third and final traded state of the rice grain. Whitening machines abrade the bran layers and germ from brown rice, leaving the starchy endosperm; polishing may follow to smooth the surface. The result is the rice that most of the world buys, cooks, and eats, and the form that accounts for the overwhelming majority of internationally traded rice volume.',
    },
    {
      type: 'paragraph',
      text: 'Two commercial facts define this commodity. First, it is sold on appearance and integrity to an unusual degree — whole white grains of even length command a premium, and the proportion of broken kernels is the single largest price determinant. Second, removing the bran removes the oil, and with it the rancidity problem that limits brown rice: milled rice, kept dry and free of insects, is a comparatively stable long-term store.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Rice (Oryza sativa)' },
    { label: 'What has been removed', value: 'Hull, bran layers, and germ' },
    { label: 'What remains', value: 'Starchy endosperm' },
    {
      label: 'Position in the chain',
      value: 'Produced by whitening brown rice; the dominant traded rice form',
    },
    {
      label: 'Principal price driver',
      value: 'Proportion of whole kernels versus broken rice',
    },
    { label: 'Co-product of the same step', value: 'Broken rice' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Whitening is abrasion. The brown rice grain is passed through machines that rub the bran layers away against abrasive surfaces or against other grains, and the degree to which this is carried is a choice — rice may be under-milled, well-milled, or highly milled, and the degree of milling is itself a contract term. Every pass takes weight off the grain and takes some grains apart, which is why the operation is a balance between whiteness and breakage rather than a single fixed process.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Degree of milling is a specification, not a constant',
          text: 'How much bran is removed varies by market and contract. Terms such as well-milled and reasonably well-milled are defined within particular standards; they are not universal descriptions and do not carry across jurisdictions unchanged.',
        },
      ],
    },
    {
      id: 'grading-and-brokens',
      heading: 'Grading and the economics of brokens',
      body: [
        {
          type: 'paragraph',
          text: 'Milled rice trades on grain integrity above all. Contracts are commonly written around a stated maximum broken content, and rice is described in the market by that figure — the trade routinely names lots by their broken percentage. Whole grains and broken grains are separated by length graders inside the mill, then recombined to specification or sold apart, which makes broken rice a deliberate, marketed co-product of milling rather than waste.',
        },
        {
          type: 'paragraph',
          text: 'Beyond brokens, standards measure chalkiness, damaged and discoloured kernels, red-streaked grains, paddy and unhulled grains carried through, foreign material, and the degree of milling itself. Grain length and shape classes and aromatic varietal identity sit alongside the grade as separate descriptors: a lot is bought as a class plus a grade plus, often, a variety, not as a grade alone.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Breakage is inherited, not created at the mill',
          text: 'Most breakage traces back to fissures set during paddy drying or to aggressive hulling. Careful milling limits further damage but cannot recover whole grains from a lot that was already cracked.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Almost all milled rice is food, cooked as whole grains. The stream separated out during grading — broken rice — has its own established outlets in flour and starch, brewing and distilling, feed, and food use where grain integrity does not matter, and it is modelled here as a co-product of this commodity because it is produced deliberately, graded, and sold. Parboiled rice, in which paddy is soaked, steamed, and dried before milling, is a distinct processing route with different milling behaviour and is not covered on this page.',
        },
        {
          type: 'list',
          items: [
            'Food — the principal traded and consumed form of rice worldwide',
            'Food and industrial — broken rice into flour, starch, brewing, and distilling',
            'Feed — brokens and off-specification lots',
          ],
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'With the bran and germ gone, milled rice carries little oil and stores well: kept dry, cool, and protected from insects, it holds for extended periods without the rancidity that constrains brown rice. Storage insects remain the real threat, since the grain has no hull and a smooth, edible surface, and infestation in bagged stock is a persistent problem in warm climates. Sealed and hermetic systems are widely used for exactly this reason.',
        },
        {
          type: 'paragraph',
          text: 'Milled rice moves internationally in bags and in bulk over long distances, and because it is bought partly on appearance, it is handled to avoid the abrasion, breakage, and moisture pickup that would degrade a lot after it has already been graded. Packaging is part of the commodity, not an afterthought.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Broken kernel content',
    'Degree of milling',
    'Whiteness and translucency',
    'Chalky grains',
    'Grain length and uniformity',
    'Moisture content',
  ],
  commonDefects: [
    'Excess broken kernels',
    'Chalky and immature grains',
    'Damaged, discoloured, and heat-damaged kernels',
    'Red-streaked grains',
    'Unhulled paddy grains carried through',
    'Storage insect infestation',
  ],
  moistureContext:
    'Milled and held at a moisture low enough for extended storage and for the grain to hold its condition in bags; applicable limits sit in the grade standard and the sales contract.',
  storageContext:
    'The most storable of the three rice forms because the oil-bearing bran has been removed; storage insects rather than rancidity are the dominant risk.',
  transportContext:
    'Traded internationally over long distances in bags and in bulk; handled to avoid abrasion, additional breakage, and moisture pickup after grading.',
  majorProducingRegions: [
    'South Asia',
    'Southeast Asia',
    'East Asia',
    'Sub-Saharan Africa',
    'South America',
  ],
  majorTradingRegions: [
    'South Asia',
    'Southeast Asia',
    'Sub-Saharan Africa (major importing region)',
    'Middle East (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1006.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Semi-milled or wholly milled rice, whether or not polished or glazed.',
    },
  ],
  coProducts: [{ type: 'commodity-product', slug: 'broken-rice' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'brown-rice' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Whitening, degree of milling, breakage, and rice quality',
    },
    {
      sourceId: 'fao',
      citedFor: 'Milled rice as the dominant traded rice form and its uses',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Milled rice grading attributes, classes, and defect categories',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage and milled-equivalent conventions',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Milling-degree terms, grade names, and tariff subheadings are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity; it is not a grading determination, contract specification, or customs classification.',
    'No broken-content percentages, milling-degree definitions, or moisture limits are given — these belong to the standard and contract in force.',
    'Parboiled rice is a distinct processing route with different milling and cooking behaviour and is not described here.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Milled Rice: The White Rice Commodity',
    description:
      'Milled rice as a commodity: endosperm left after hull, bran and germ removal. Why broken content drives price, how degree of milling is specified, and storage.',
    keywords: [
      'milled rice',
      'white rice commodity',
      'degree of milling',
      'broken rice content',
      'rice grading',
    ],
  },
  structuredData: { article: true },
};
