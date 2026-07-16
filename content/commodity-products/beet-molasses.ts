import type { CommodityProductContent } from '@/types/content';

export const beetMolasses: CommodityProductContent = {
  id: 'commodity-product-beet-molasses',
  slug: 'beet-molasses',
  contentType: 'commodity-product',
  title: 'Beet Molasses',
  alternativeNames: ['Sugar beet molasses', 'Beet final molasses'],
  category: 'Manufacturing co-product',
  subcategory: 'Beet sugar mother liquor',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'sugar-beet' },
  physicalForm: 'syrup',
  summary:
    'Beet molasses is the final liquor of beet sugar manufacture, holding the sucrose that the beet’s own impurities would not release. It is bitter rather than sweet-tasting, which sends it to yeast growing and fermentation rather than to the feed uses cane molasses dominates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Beet molasses is what a beet factory has left when it stops crystallising. Like its cane counterpart, it is the mother liquor at the point where recovering further sucrose costs more than the sucrose is worth — but the resemblance is not as close as the shared name suggests, and treating the two as interchangeable is a mistake the market does not make.',
    },
    {
      type: 'paragraph',
      text: 'The difference comes from the beet itself. The impurities that carried the sugar into this stream — potassium, sodium, and amino nitrogen compounds — are still in it, along with betaine and raffinose, and they give beet molasses a composition and a taste of its own. It is not palatable in the way cane molasses is, and its markets reflect that.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of beet processing' },
    { label: 'Made from', value: 'Sugar beet (Beta vulgaris)' },
    {
      label: 'What it is',
      value: 'The final liquor after economic sugar recovery ends',
    },
    { label: 'Taste', value: 'Bitter — unlike the palatable cane molasses' },
    {
      label: 'Principal uses',
      value: 'Yeast production and industrial fermentation',
    },
    {
      label: 'Distinctive route',
      value: 'Desugarisation, recovering further sucrose chromatographically',
    },
    { label: 'Carries', value: 'Betaine, raffinose, and a high ash load' },
  ],
  sections: [
    {
      id: 'not-cane-molasses',
      heading: 'Why it is not cane molasses',
      body: [
        {
          type: 'paragraph',
          text: 'Both products are final molasses; they are not substitutes. Beet molasses carries a higher ash load, dominated by the potassium and sodium salts that made it in the first place, and it contains betaine and raffinose, neither of which features in cane molasses. Where cane molasses is dark, sweet, and readily eaten, beet molasses is bitter, and animals do not take to it in the same way.',
        },
        {
          type: 'paragraph',
          text: 'That single sensory fact redirects the whole commodity. Cane molasses goes to feed in enormous quantity because livestock like it; beet molasses is used in feed to a much more limited extent, and its centre of gravity lies in fermentation instead, where the organism doing the eating has no opinion on the flavour.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The intake analysis foretells the stream',
          text: 'The melassigenic impurities measured when beet arrives at the factory are the same ones that define this product: they divert sucrose into molasses, then remain there and determine what the molasses is good for.',
        },
      ],
    },
    {
      id: 'desugarisation',
      heading: 'Desugarisation and betaine',
      body: [
        {
          type: 'paragraph',
          text: 'Beet molasses has a second act that cane molasses does not. Because it still contains substantial sucrose, and because that sucrose is held there by soluble salts rather than by anything structural, it can be worked again by a separation technique rather than by more boiling. Chromatographic desugarisation passes the molasses through a resin bed that separates the sucrose from the non-sugars, and the recovered sugar is returned to the factory’s crystallisation.',
        },
        {
          type: 'paragraph',
          text: 'The process is not universal — it needs scale and capital, and it makes sense only where the value of the recovered sugar justifies it — but where it runs, it changes what the co-product is. It also opens a second stream: betaine, separated in the same operation, is recovered and sold as a distinct product for feed and other uses. Desugarised molasses, poorer in sucrose and concentrated in the non-sugars, then goes on to fermentation and feed markets in its own right.',
        },
      ],
    },
    {
      id: 'uses-and-handling',
      heading: 'Uses and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Yeast production is the classic use. Baker’s yeast propagation has drawn on beet molasses for a very long time, and beet molasses suits it well: the nitrogen compounds that make the product bitter are nutrients from a yeast’s point of view, so what is a defect in feed is close to a virtue in a fermenter. Beyond yeast, it feeds ethanol production and industrial fermentations for organic acids and amino acids, and it is used in feed within the limits its palatability and ash load allow.',
        },
        {
          type: 'paragraph',
          text: 'Handling matches cane molasses: bulk tanks, tankers, and pumped transfer, with viscosity falling as temperature rises so that cold molasses moves badly. It is bought analytically — total sugars first, then Brix, ash, and betaine content, with fermenters specifying what their organism needs. In storage, concentration is the preservative; diluted molasses supports microbial activity, which can generate gas and heat in a tank.',
        },
      ],
    },
  ],
  primaryUses: ['industrial', 'feed'],
  secondaryUses: ['energy'],
  majorQualityAttributes: [
    'Total sugars',
    'Brix (dissolved solids)',
    'Ash content',
    'Betaine content',
    'Fermentability for the intended organism',
    'Freedom from dilution and contamination',
  ],
  processContext:
    'Drawn off at the beet factory when no further sugar can economically be crystallised; where desugarisation is installed, it is worked again chromatographically to recover sucrose and betaine.',
  storageContext:
    'Held in bulk tanks and moved by pump and tanker; viscous when cold, and liable to microbial activity, gassing, and heating if diluted or left unmonitored.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1703.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Molasses other than cane molasses, within heading 17.03 covering molasses resulting from the extraction or refining of sugar.',
    },
  ],
  connections: [{ type: 'crop', slug: 'sugar-beet' }],
  relatedTopics: [
    { type: 'commodity-product', slug: 'molasses' },
    { type: 'commodity-product', slug: 'beet-pulp' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Beet molasses as a sugar-industry co-product and its fermentation and feed uses',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Beet processing co-product streams and desugarisation context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Beet sugar sector co-products and molasses markets',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate beet-processing regions worldwide. Feed-ingredient naming and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a feed formulation, fermentation specification, or nutritional statement.',
    'No sugar contents, ash levels, betaine contents, or inclusion rates are given — composition varies with factory, beet quality, and whether desugarisation is applied.',
    'Desugarisation is not universal; where it is used, the composition of the molasses leaving the factory differs accordingly.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Beet Molasses: Co-Product of Beet Sugar Making',
    description:
      'Beet molasses as a co-product: why it is bitter and unlike cane molasses, how desugarisation recovers sucrose and betaine, and its fermentation uses.',
    keywords: [
      'beet molasses',
      'desugarisation',
      'betaine',
      'yeast production',
      'sugar co-product',
    ],
  },
  structuredData: { article: true },
};
