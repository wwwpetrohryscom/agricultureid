import type { CommodityProductContent } from '@/types/content';

export const citrusPeel: CommodityProductContent = {
  id: 'commodity-product-citrus-peel',
  slug: 'citrus-peel',
  contentType: 'commodity-product',
  title: 'Citrus Peel',
  alternativeNames: [
    'Citrus pulp',
    'Dried citrus pulp pellets',
    'Citrus processing residue',
  ],
  category: 'Processing by-product',
  subcategory: 'Citrus juicing residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-oranges' },
  producedBy: [{ type: 'processing-method', slug: 'citrus-juice-extraction' }],
  physicalForm: 'other',
  summary:
    'Citrus peel is the peel, rag, and seed residue left after oranges are juiced — roughly half the fruit by weight. Too voluminous to discard and too wet to store, it is dried into pellets for ruminant feed and mined for pectin and peel oil.',
  introduction: [
    {
      type: 'paragraph',
      text: "Juicing an orange leaves most of the orange behind. The peel, the white pith, the membranes the trade calls rag, and the seeds together account for a very large share of the fruit's weight, and a juice plant running at scale produces this residue in quantities that would overwhelm any disposal route. Turning it into something saleable was never optional for the citrus industry — it was a condition of the industry existing at that scale.",
    },
    {
      type: 'paragraph',
      text: "The result is one of the most thoroughly exploited by-products in food processing. The same residue yields a bulk ruminant feed, a substantial share of the world's commercial pectin, and citrus peel oil for flavour and fragrance. It is still a by-product — it is not why the plant exists, and its value is well below the juice's — but it is a by-product that has been engineered into three separate markets.",
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of citrus juice extraction' },
    {
      label: 'Made from',
      value: 'Fresh oranges (Citrus sinensis), via juicing',
    },
    {
      label: 'Composition',
      value: 'Peel, pith, rag, and seeds left after the juice is extracted',
    },
    {
      label: 'Share of the fruit',
      value: 'A very large fraction of the fruit weight, not a trimming',
    },
    {
      label: 'Companion stream',
      value: 'Orange juice, the primary product of the same extraction',
    },
    {
      label: 'Principal uses',
      value: 'Ruminant feed, pectin extraction, and peel oil recovery',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What citrus peel is',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus extraction is designed to take the juice out of the fruit while leaving the peel structure as intact as possible, because peel oils ruin juice. What remains after extraction is the whole rest of the fruit: the coloured outer flavedo carrying the oil glands, the white albedo beneath it, the segment membranes, and the seeds. It comes off the line wet, acidic, and continuous, for as long as the plant runs.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'By-product, but an intensively used one',
          text: 'Citrus peel is a residual output of lower value than the juice, which is what makes it a by-product rather than a co-product. That it supports three established markets is a measure of how completely the industry has exploited it, not a reclassification of its role.',
        },
      ],
    },
    {
      id: 'drying-and-pelleting',
      heading: 'Drying and pelleting',
      body: [
        {
          type: 'paragraph',
          text: 'Wet peel is a problem for the same reasons apple pomace is: heavy, quick to ferment, impossible to stockpile. The standard route is to treat the wet residue with lime, which breaks down the pectin and releases bound water so the material can be pressed, then to press it and dry the pressed cake and pellet it. The result — dried citrus pulp pellets — is a stable, dense, shippable feed commodity that travels internationally, and it is the transformation that made the residue worth handling.',
        },
        {
          type: 'paragraph',
          text: 'The liquid pressed out is not discarded either: it is concentrated into citrus molasses, itself a feed ingredient and a fermentation substrate. Drying is energy-intensive, and the economics of pelleting swing with fuel prices and with how far the nearest livestock market sits from the plant.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No process figures here',
          text: 'Liming rates, pressing and drying conditions, and pellet specifications for citrus pulp vary by plant and by market. AgricultureID publishes no figures; consult sourced technical and feed guidance.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: "Dried citrus pulp pellets are a well-established energy and fibre feed for ruminants, valued for a digestible fibre that behaves differently from cereal starch, and traded across borders as a feed commodity. Pectin extraction takes citrus peel — along with apple pomace — as its principal raw material, and citrus peel is the source of much of the world's commercial pectin. Peel oil, recovered from the flavedo during or after extraction, is a valuable flavour and fragrance material and also a solvent and cleaning agent.",
        },
        {
          type: 'list',
          items: [
            'Feed — dried citrus pulp pellets for ruminants, the largest outlet by volume',
            'Feed — citrus molasses from the pressed liquid',
            'Industrial — pectin extraction, with citrus peel a principal raw material',
            'Industrial — citrus peel oil for flavour, fragrance, and solvent use',
            'Food — candied peel and fibre ingredients from selected material',
          ],
        },
        {
          type: 'paragraph',
          text: "Because the peel is the fruit's outer surface, it concentrates whatever was applied to or deposited on the fruit, which makes the incoming fruit's treatment history directly relevant to the by-product's suitability for feed and food use. Feed use and permitted materials are governed by the feed regulations of the jurisdiction concerned.",
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['industrial', 'food'],
  majorQualityAttributes: [
    'Moisture content after drying',
    'Pellet durability and density',
    'Fibre and residual sugar content',
    'Freedom from mould and fermentation damage',
    'Freedom from residues carried on the peel',
  ],
  processContext:
    'Left after juice extraction from oranges; typically limed to release bound water, pressed, dried, and pelleted, with the pressed liquid concentrated into citrus molasses.',
  storageContext:
    'Wet peel cannot be stored and ferments quickly; dried pellets are stable, stored and shipped in bulk like other dry feed materials, and are hygroscopic.',
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'orange-juice' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant', 'forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Citrus processing residues, their drying, and their feed and industrial uses',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Citrus peel utilisation, pectin, and peel oil recovery research',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on citrus peel composition and products',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-material naming, permitted uses, and residue rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or processing plan.',
    'Composition varies with fruit, extraction method, and drying; no universal analysis is given here.',
    'Permitted feed use, residue rules, and labelling for citrus pulp are governed by jurisdictional feed regulation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Citrus Peel: The Juicing By-Product',
    description:
      'Citrus peel as a by-product of orange juicing: peel, rag and seeds left after extraction, limed and pelleted into ruminant feed, plus pectin and oil recovery.',
    keywords: [
      'citrus peel',
      'citrus pulp pellets',
      'citrus molasses',
      'pectin',
      'citrus peel oil',
    ],
  },
  structuredData: { article: true },
};
