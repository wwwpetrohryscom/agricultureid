import type { CommodityProductContent } from '@/types/content';

export const skimMilk: CommodityProductContent = {
  id: 'commodity-product-skim-milk',
  slug: 'skim-milk',
  contentType: 'commodity-product',
  title: 'Skim Milk',
  alternativeNames: ['Skimmed milk', 'Separated milk', 'Non-fat milk'],
  category: 'Dairy separation co-product',
  subcategory: 'Fluid dairy stream',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'raw-cow-milk' },
  physicalForm: 'liquid',
  summary:
    'Skim milk is the fat-depleted stream produced when whole milk is centrifugally separated. It is a co-product of separation rather than a residue: it carries the protein, lactose, and minerals of the original milk and is the basis of a large share of the dairy ingredient trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Skim milk is what remains when the fat is spun out of whole milk. A centrifugal separator exploits the density difference between fat globules and the aqueous phase, dividing the incoming milk into two streams at once: a fat-rich cream and a fat-depleted skim. Neither is left over from the other. Separation is performed precisely because the processor wants both, which is what makes skim milk a co-product in the strict sense.',
    },
    {
      type: 'paragraph',
      text: 'Removing the fat removes neither the value nor the substance of the milk. The protein — casein and whey protein — stays in the skim stream, along with the lactose and most of the minerals. In practice skim milk is the more versatile of the two streams: it is the working base for standardising fluid milks and the feedstock for the powders and protein ingredients that let dairy value travel and keep.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of milk separation' },
    { label: 'Made from', value: 'Raw cow milk' },
    {
      label: 'Produced by',
      value: 'Centrifugal separation — yields cream and skim simultaneously',
    },
    {
      label: 'Retains',
      value: 'Protein, lactose, and minerals; the fat leaves with the cream',
    },
    { label: 'Companion stream', value: 'Cream' },
    {
      label: 'Principal uses',
      value: 'Standardising fluid milk; powders and dairy ingredients',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What skim milk is',
      body: [
        {
          type: 'paragraph',
          text: 'Whole milk is an emulsion: fat globules dispersed through an aqueous phase that holds protein, lactose, and minerals in solution and suspension. Because fat is less dense than that aqueous phase, a centrifuge can move the two apart quickly and cleanly. The separator therefore does not remove an impurity — it divides one liquid into two, each with a defined composition, and both leave the machine as products.',
        },
        {
          type: 'paragraph',
          text: 'How completely the fat is removed is a setting, not a fact of nature. Separation is run to a target, and what counts as skim, semi-skimmed, or standardised whole milk is defined by fat content specifications set in regulation and in product standards rather than by the separator itself.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Co-product, not residue',
          text: 'Skim milk is classed as a co-product because separation is a deliberate operation whose purpose is to obtain both streams, and both are marketed. Calling skim the leftover of cream production — or the reverse — misstates the process.',
        },
      ],
    },
    {
      id: 'standardisation',
      heading: 'Standardisation: why separation happens at all',
      body: [
        {
          type: 'paragraph',
          text: 'Raw milk arrives at a processor with whatever fat content the herd, the season, and the feeding gave it. Products, by contrast, must be consistent. The way the industry resolves this is to separate the incoming milk completely and then recombine skim and cream in measured proportions to hit the fat content the product requires. Separation is thus not primarily about making skim milk for its own sake — it is the mechanism that turns a variable input into defined outputs.',
        },
        {
          type: 'paragraph',
          text: 'That reframing explains the plant. Skim is the base into which cream is metered back; surplus cream goes to butter or cream products; surplus skim goes to drying or to protein fractionation. The two streams balance each other across the whole site, and the relative demand for fat and for non-fat solids in a market is what determines which stream is the constraint at any moment.',
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
            'Standardising fluid milks to a defined fat content',
            'Skim milk powder — a globally traded, storable dairy ingredient',
            'Cheese, yoghurt, and other fermented products where fat is adjusted',
            'Protein fractionation into casein, caseinate, and milk protein concentrates',
            'Animal feed, principally as a liquid stream fed on or near the farm',
          ],
        },
        {
          type: 'paragraph',
          text: 'Drying is the pathway that matters most for trade. Liquid skim milk is perishable and mostly water, so it does not travel; skim milk powder is shelf-stable, dense, and shipped worldwide, and it is one of the reference commodities of the international dairy market. The powder is a further processed product with its own manufacture and specifications, and it is not modelled here as a pathway of the fluid stream.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'As a fluid, skim milk inherits the perishability of the milk it came from: it is held chilled and moved quickly, and the separation step neither sterilises it nor extends its life. Its keeping quality is not better than whole milk’s simply because the fat has gone — the microbial and enzymatic processes that limit raw milk act on the aqueous phase, which is exactly what skim milk is. Fat-related faults such as lipolysed off-flavours are the exception, being carried away with the cream.',
        },
        {
          type: 'paragraph',
          text: 'Separation also happens early enough in the plant that it interacts with everything after it. Separators are commonly run on warm milk, and the clarifying and standardising steps sit alongside them, so the skim stream is usually created, adjusted, and heat-treated within a tightly coupled sequence rather than stored as an intermediate.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Residual fat content',
    'Protein content',
    'Total solids and solids-not-fat',
    'Microbiological condition',
    'Temperature through handling',
  ],
  processContext:
    'Produced by centrifugal separation of whole milk, which yields cream and skim simultaneously; the degree of fat removal is set to a target rather than being inherent to the process.',
  storageContext:
    'Perishable and held chilled like the raw milk it came from; removing fat does not improve keeping quality, because the processes that limit raw milk act on the aqueous phase that skim milk is.',
  commodityCodes: [
    {
      system: 'HS',
      code: '0401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Milk and cream, not concentrated nor containing added sugar, at 4-digit heading level; subheadings separate milk by fat content. Skim milk powder is a concentrated product and falls outside this heading.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cream' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Milk separation, standardisation, and dairy product streams',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Dairy product item coverage and trade context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Fluid milk processing and dairy stream balance context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Fat content definitions, product names, and compositional standards for skimmed and semi-skimmed milks are jurisdiction-specific.',
  limitations: [
    'A reference description of the product — not a processing specification, formulation, or food-standards statement.',
    'No fat content values or compositional figures are given: those are defined by jurisdiction-specific product standards and by contract.',
    'Composition follows the incoming raw milk, which varies with herd, season, and feeding.',
    'Covers the fluid stream; skim milk powder is a further processed product not described on this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Skim Milk: Co-Product of Milk Separation',
    description:
      'Skim milk as a dairy co-product: how centrifugal separation splits whole milk, why standardisation drives it, what skim retains, and where the stream goes.',
    keywords: [
      'skim milk',
      'skimmed milk',
      'milk separation',
      'milk standardisation',
      'dairy co-product',
    ],
  },
  structuredData: { article: true },
};
