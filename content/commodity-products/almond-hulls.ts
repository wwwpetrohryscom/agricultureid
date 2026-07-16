import type { CommodityProductContent } from '@/types/content';

export const almondHulls: CommodityProductContent = {
  id: 'commodity-product-almond-hulls',
  slug: 'almond-hulls',
  contentType: 'commodity-product',
  title: 'Almond Hulls',
  alternativeNames: ['Almond hull meal', 'Hulled almond residue'],
  category: 'Processing by-product',
  subcategory: 'Tree nut hulling residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'almonds' },
  physicalForm: 'hull',
  summary:
    'Almond hulls are the outer layer stripped from the almond fruit before shelling — the fleshy part of a drupe that dried on the tree. They are produced in volumes exceeding the kernels themselves and are fed to ruminants, the largest single outlet for the by-product.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An almond is the seed of a drupe, and a drupe has flesh. In a peach that flesh is the fruit; in an almond it dries and toughens on the tree into the hull, and it is stripped off and discarded from the human food chain before the nut is even cracked. The remarkable thing about it is the volume: hulling produces more hull material than the orchard produces kernels, so an almond processor is handling a bigger tonnage of by-product than of primary product.',
    },
    {
      type: 'paragraph',
      text: 'That volume forced the issue. A residue produced in such quantity cannot be dumped, and almond hulls found a substantial market as a ruminant feed — one of the clearest examples in agriculture of a by-product whose scale created its own industry. Unlike apple pomace or citrus peel, hulls arrive already dry, which makes them far easier to handle than most processing residues.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of almond hulling' },
    { label: 'Made from', value: 'Almonds (Prunus dulcis), at hulling' },
    { label: 'What it is', value: 'The dried outer layer of the almond drupe' },
    {
      label: 'Volume',
      value: 'Produced in greater tonnage than the kernels themselves',
    },
    {
      label: 'Handling advantage',
      value: 'Arrives dry from the tree, unlike wet processing residues',
    },
    {
      label: 'Principal use',
      value: 'Ruminant feed, particularly in dairy rations',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What almond hulls are',
      body: [
        {
          type: 'paragraph',
          text: 'As the almond fruit matures on the tree it dries, and the hull splits along a suture to expose the shell inside. Harvest brings down the whole dried fruit, and hulling is the first operation at the processor: the hull is separated mechanically from the shell, before any shelling takes place. What comes off is a light, dry, fibrous material carrying residual sugars from the fruit flesh.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hull, shell, kernel — three separations',
          text: 'Hulling removes the hull; shelling then cracks the shell off the kernel. The three streams are separated by two different operations and go to three different markets: feed, fuel and bedding, and food.',
        },
      ],
    },
    {
      id: 'feed-use',
      heading: 'Feed use',
      body: [
        {
          type: 'paragraph',
          text: 'Almond hulls are fed to ruminants, most prominently in dairy rations in the regions where almonds are grown at scale. They carry digestible fibre and residual sugars in a combination that suits a ruminant, and they are palatable — a genuine feed material rather than a filler. Because they are already dry, they store and transport like other dry feed ingredients rather than demanding the immediate drying or ensiling that wet residues do.',
        },
        {
          type: 'paragraph',
          text: "Composition is not uniform. Hulls from different cultivars differ in sugar and fibre, and how cleanly the huller separates hull from shell determines how much shell fragment ends up in the hull stream — shell being fibrous, indigestible, and a straightforward dilution of feed value. Hull lots are therefore specified partly on how little shell they contain, and the huller's separation efficiency is directly visible in the by-product's value.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No feed analyses or inclusion rates here',
          text: 'Nutritional composition and inclusion rates for almond hulls vary with cultivar, season, and separation efficiency, and feeding decisions require competent nutritional advice. AgricultureID publishes no analyses or rates.',
        },
      ],
    },
    {
      id: 'other-uses-and-handling',
      heading: 'Other uses and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond feed, hulls are used as a bedding and mulch material, as a substrate for mushroom growing, and as a feedstock for energy recovery and composting. Research interest in higher-value routes — extracting sugars for fermentation, or recovering functional compounds — reflects the fact that the volume available exceeds what the feed market can absorb in a strong production year.',
        },
        {
          type: 'paragraph',
          text: 'Handling is straightforward by by-product standards. Hulls are bulky and low in density, which drives transport cost rather than spoilage risk, and they are commonly stored in the open. They are hygroscopic and will take up moisture and mould if allowed to wet, and their residual sugar makes them attractive to insects and vertebrate pests in storage — the practical concerns are these rather than the rapid fermentation that governs wet residues.',
        },
        {
          type: 'list',
          items: [
            'Feed — ruminant rations, particularly dairy, the dominant outlet',
            'Bedding and mulch — livestock bedding and orchard mulch',
            'Industrial — mushroom growing substrate and fermentation feedstock',
            'Energy — biomass fuel and digester feedstock',
          ],
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['energy', 'industrial'],
  majorQualityAttributes: [
    'Freedom from shell fragments (separation efficiency)',
    'Sugar and fibre content',
    'Moisture content',
    'Freedom from mould',
    'Freedom from foreign material and orchard debris',
  ],
  processContext:
    'Separated from the shell at hulling, the first operation applied to the harvested almond fruit and prior to shelling; composition depends on cultivar and on how cleanly hull and shell are separated.',
  storageContext:
    'Arrives dry and stores like a dry feed material, commonly in the open; bulky and low in density, hygroscopic if wetted, and attractive to pests because of its residual sugar.',
  connections: [
    { type: 'crop', slug: 'almond' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'almond-kernels' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant', 'forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Tree nut processing residues and their feed uses',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Almond hull composition and utilisation research',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'Almond hulling stream and production context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Concentrated in almond-producing regions. Feed-material naming and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or feeding recommendation.',
    'Composition varies with cultivar, season, and huller separation efficiency; no analysis is given here.',
    'Hull feed use and its labelling fall under jurisdiction-specific feed rules; confirm what applies in the market concerned.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Almond Hulls: The Hulling By-Product Fed to Cattle',
    description:
      'Almond hulls as a by-product of almond hulling: the dried drupe flesh, produced in greater tonnage than kernels, used as ruminant feed, bedding, and fuel.',
    keywords: [
      'almond hulls',
      'almond hulling',
      'ruminant feed by-product',
      'dairy feed',
      'almond processing residue',
    ],
  },
  structuredData: { article: true },
};
