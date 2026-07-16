import type { CommodityProductContent } from '@/types/content';

export const orangeJuice: CommodityProductContent = {
  id: 'commodity-product-orange-juice',
  slug: 'orange-juice',
  contentType: 'commodity-product',
  title: 'Orange Juice',
  alternativeNames: [
    'OJ',
    'Frozen concentrated orange juice',
    'Not-from-concentrate orange juice',
  ],
  category: 'Primary processed product',
  subcategory: 'Citrus juice',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-oranges' },
  producedBy: [{ type: 'processing-method', slug: 'citrus-juice-extraction' }],
  physicalForm: 'liquid',
  summary:
    'Orange juice is the primary product of the orange crop by volume, not a sideline of the fresh trade. It moves as frozen concentrate or as chilled not-from-concentrate juice, and the choice between those two forms shapes the entire processing industry.',
  introduction: [
    {
      type: 'paragraph',
      text: "Orange juice is one of the few cases where the processed product, not the fresh fruit, is the point of the crop. A very large share of the world's oranges are grown to be juiced, in groves planted for that purpose, harvested to a factory schedule, and delivered in bulk to plants that never assess the fruit's appearance. The extraction of the juice, and not the sale of the orange, is the business.",
    },
    {
      type: 'paragraph',
      text: 'The product exists in two commercially distinct forms. Frozen concentrated orange juice has most of its water evaporated away and ships and stores as a dense frozen mass, and it was the form that built the international juice trade. Not-from-concentrate juice is pasteurised single-strength juice, never concentrated, stored chilled in vast aseptic tanks and shipped in refrigerated vessels — a far more expensive proposition that a large part of the market pays for anyway.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of orange processing' },
    {
      label: 'Made from',
      value: 'Fresh oranges (Citrus sinensis), largely juicing cultivars',
    },
    {
      label: 'Two trade forms',
      value: 'Frozen concentrate and chilled not-from-concentrate juice',
    },
    {
      label: 'Preferred fruit',
      value:
        'Valencia-type oranges; navel juice develops bitterness on standing',
    },
    {
      label: 'Companion stream',
      value: 'Citrus peel and processing residues, recovered as by-products',
    },
    { label: 'Principal uses', value: 'Beverage, as juice and in blends' },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What orange juice is as a traded product',
      body: [
        {
          type: 'paragraph',
          text: 'Extraction squeezes the juice from the fruit while keeping the peel intact enough to avoid pressing its bitter oils into the juice — a mechanical problem specific to citrus, since the flavour-destroying material sits in the skin around the part being extracted. The raw juice is then finished to remove excess pulp, pasteurised to inactivate enzymes and microbes, and either concentrated by evaporation or held as single-strength juice.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Frozen concentrated orange juice',
              description:
                'Juice evaporated to a dense concentrate and frozen. Compact to ship, long to store, and reconstituted with water at the packing market.',
            },
            {
              term: 'Not-from-concentrate',
              description:
                'Pasteurised single-strength juice, never concentrated, held chilled in aseptic bulk tanks and shipped refrigerated at full volume.',
            },
            {
              term: 'Aroma and essence add-back',
              description:
                'Volatiles and oils recovered during processing and returned to the juice, because juice stripped of them tastes flat.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cultivar decides the juice',
          text: 'Valencia-type oranges dominate juicing because their juice holds up. Navel orange juice develops a bitter compound as it stands, which makes it excellent to drink immediately and poor to process — a clear case of a fresh-market virtue and a processing defect in the same fruit.',
        },
      ],
    },
    {
      id: 'quality-and-blending',
      heading: 'Quality, blending, and authenticity',
      body: [
        {
          type: 'paragraph',
          text: 'Juice is specified on soluble solids, acidity, and the ratio between them, along with colour, pulp content, and sensory character. None of these are things a processor creates: they arrive with the fruit, varying by cultivar, region, season, and maturity at harvest. What a processor does is blend — combining juice from different fruit, different groves, and different points in the season to hold a consistent product across a year in which no two deliveries are the same.',
        },
        {
          type: 'paragraph',
          text: 'Because orange juice is a high-volume, high-value commodity product sold on a simple promise, it attracts adulteration: dilution, added sugars, added pulp wash, and blending with cheaper juices are all known problems, and analytical authentication is a routine part of the trade. Product standards defining what may be called orange juice, and what may be added to it, are jurisdictional and are enforced by food authorities.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No compositional figures here',
          text: 'Soluble-solids and acid ratios, concentration levels, and pasteurisation conditions for orange juice are set by product standards, contracts, and food authorities in each jurisdiction. AgricultureID publishes no figures.',
        },
      ],
    },
    {
      id: 'trade-and-uses',
      heading: 'Trade and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Concentrate ships frozen in drums and in bulk, and has an established futures market — one of the few processed food products to have one, a mark of how standardised and how heavily traded it is. Not-from-concentrate moves chilled in dedicated aseptic tankers and shore tanks, a logistics chain built specifically for it. Both feed packers close to the consuming market, and essentially all of it is drunk, as juice or in blends and nectars, with smaller volumes used as a flavour and sweetening ingredient.',
        },
        {
          type: 'list',
          items: [
            'Beverage — orange juice as sold, reconstituted or not-from-concentrate',
            'Beverage — juice blends, nectars, and soft-drink bases',
            'Food — a flavour and juice-content ingredient in other products',
          ],
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['food'],
  majorQualityAttributes: [
    'Soluble solids and acidity ratio',
    'Colour',
    'Pulp content',
    'Sensory character and freedom from bitterness',
    'Consistency across a season through blending',
    'Authenticity (freedom from adulteration)',
  ],
  processContext:
    'Produced by mechanical extraction from whole oranges while keeping peel oils out of the juice, then finishing, pasteurisation, and either evaporation to concentrate or chilled aseptic storage as single-strength juice.',
  storageContext:
    'Concentrate is held frozen in drums and bulk; not-from-concentrate juice is held chilled in aseptic tanks, a far more demanding and costly storage proposition.',
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'citrus-peel' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Orange juice as the dominant processing pathway for the orange crop',
    },
    {
      sourceId: 'usda',
      citedFor: 'Orange juice product grade, composition, and standard context',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Orange juice trade flows and market reporting',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Juice compositional standards, naming, labelling, and permitted additions are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a processing specification, product standard, or food-standards compliance statement.',
    'No soluble-solids, acid-ratio, concentration, or pasteurisation figures are given here.',
    'What may be labelled orange juice, and what may be added to it, differs by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Orange Juice: Concentrate and Not-From-Concentrate',
    description:
      'Orange juice as the primary product of oranges: extraction without peel oils, frozen concentrate versus chilled NFC, blending for consistency, and authenticity.',
    keywords: [
      'orange juice',
      'frozen concentrated orange juice',
      'not from concentrate',
      'juice extraction',
      'juice blending',
    ],
  },
  structuredData: { article: true },
};
