import type { CommodityProductContent } from '@/types/content';

export const tomatoPaste: CommodityProductContent = {
  id: 'commodity-product-tomato-paste',
  slug: 'tomato-paste',
  contentType: 'commodity-product',
  title: 'Tomato Paste',
  alternativeNames: [
    'Tomato concentrate',
    'Double concentrate',
    'Triple concentrate',
  ],
  category: 'Primary processed product',
  subcategory: 'Vegetable concentrate',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-tomatoes' },
  producedBy: [{ type: 'processing-method', slug: 'tomato-paste-production' }],
  physicalForm: 'other',
  summary:
    'Tomato paste is the primary product of tomato processing: fruit crushed, screened, and evaporated until the soluble solids are concentrated. It is traded in bulk as a shelf-stable intermediate and remade into sauces, ketchup, and canned products further down the chain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato paste is what a tomato processing line is run to produce. Fruit arriving at the factory is washed, sorted, chopped, and heated; the juice is separated from skins and seeds, then evaporated until most of its water is gone and the soluble solids are concentrated into a dense, dark red paste. The concentration step is the whole point: it turns a fragile, seasonal, mostly-water commodity into a stable ingredient that can be stored and shipped year-round.',
    },
    {
      type: 'paragraph',
      text: 'Paste is an intermediate rather than a finished food. Most of it is bought by other manufacturers and reconstituted — diluted back and formulated — into sauces, ketchup, soups, and canned tomato products. That makes paste one of the clearest examples of a commodity product whose value lies in transport and storage economics as much as in the ingredient itself.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of tomato processing' },
    { label: 'Made from', value: 'Tomatoes delivered for processing' },
    {
      label: 'Defining operation',
      value: 'Evaporation to concentrate soluble solids',
    },
    {
      label: 'Traded by',
      value:
        'Concentration, colour, and consistency against contract specification',
    },
    {
      label: 'Companion stream',
      value: 'Pomace (skins and seeds) as a by-product of extraction',
    },
    { label: 'Principal use', value: 'Food manufacturing ingredient' },
  ],
  sections: [
    {
      id: 'processing-tomatoes',
      heading: 'The raw material is not fresh-market fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Paste is made from tomatoes grown, harvested, and delivered specifically for processing. These fruit are typically machine-harvested in bulk, moved in trailers rather than cartons, and delivered to the factory within a short window — they are handled as a raw material stream, not as fresh produce. They are selected for concentration behaviour, colour, and solids rather than for the appearance and shipping firmness that fresh-market fruit is picked for.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Same commodity, different commercial channel',
          text: 'Processing tomatoes and fresh-market tomatoes are the same harvested commodity in botanical terms, but they are distinct commercial streams with different cultivars, harvest methods, delivery logistics, and quality criteria. Paste is not made from surplus salad tomatoes.',
        },
      ],
    },
    {
      id: 'hot-break-cold-break',
      heading: 'Hot break and cold break',
      body: [
        {
          type: 'paragraph',
          text: 'The temperature at which crushed fruit is first heated determines much of what the finished paste will do in a customer’s formulation. Heating rapidly and hard — the hot break route — inactivates the fruit’s own pectin-degrading enzymes before they can work, preserving pectin and yielding a paste of high viscosity suited to thick sauces and ketchup. Heating gently — the cold break route — lets those enzymes act, giving a thinner paste with a fresher flavour profile, used where low viscosity or lighter character is wanted.',
        },
        {
          type: 'paragraph',
          text: 'Hot break and cold break paste are therefore not interchangeable, and a contract specifies which is required. This is a genuine processing fork rather than a quality ranking: neither is a defective version of the other.',
        },
      ],
    },
    {
      id: 'quality-and-specification',
      heading: 'Quality and specification',
      body: [
        {
          type: 'paragraph',
          text: 'Paste is bought against a specification rather than by name. Concentration is expressed as soluble solids and is the headline term of any contract — the descriptive labels used in trade, such as double or triple concentrate, correspond to concentration bands defined by the standard or contract in force rather than to any universal value. Colour, consistency or viscosity, and defect counts such as black specks and skin or seed fragments are all specified alongside it.',
        },
        {
          type: 'paragraph',
          text: 'Much of what a buyer is judging traces straight back to the incoming fruit. Colour, solids, and mould counts are inherited from the raw material and the speed with which it reached the evaporator; a processor can protect them but cannot create them. Paste quality therefore begins in the field and in the delivery window, not at the factory gate.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No concentration figures are given here',
          text: 'The soluble-solids bands that define paste grades, and any defect limits, are set by the applicable standard and by the purchase contract. AgricultureID does not reproduce them; consult the standard in force for the jurisdiction and the contract terms.',
        },
      ],
    },
    {
      id: 'packing-and-storage',
      heading: 'Packing, storage, and use',
      body: [
        {
          type: 'paragraph',
          text: 'Most paste moves in bulk aseptic packaging — sterile bags inside drums or bins — which lets it be held and shipped at ambient temperature without refrigeration and is the reason a seasonal crop can supply a year-round manufacturing industry. Smaller volumes are canned or packed in consumer formats. Paste is acidic and heat-treated, which underpins its stability, but it darkens and loses colour quality over time, and that ageing is accelerated by warm storage.',
        },
        {
          type: 'list',
          items: [
            'Food manufacturing — the dominant use, as an ingredient reconstituted into sauces, ketchup, soups, and canned products',
            'Food service and retail — smaller volumes packed for direct use',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Soluble solids concentration',
    'Colour',
    'Consistency and viscosity',
    'Hot break or cold break character',
    'Mould count and defect specks',
  ],
  processContext:
    'Produced by washing, sorting, chopping, and heating tomatoes, separating juice from skins and seeds, then evaporating the juice to concentrate its soluble solids; the break temperature at the heating step sets the viscosity character of the paste.',
  storageContext:
    'Held in bulk aseptic bags in drums or bins, or in cans, at ambient temperature; stable through acidity and heat treatment but darkens and loses colour quality with warm or prolonged storage.',
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'tomato-pomace' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Tomato processing pathways and the role of concentrate in trade',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Hot break and cold break processing and their effect on paste consistency',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Processing tomato product description and specification attributes',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Processing tomato raw-material handling and delivery quality context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product naming, concentration bands, and compositional standards for tomato concentrates are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a processing specification, formulation, or food-standards compliance statement.',
    'No soluble-solids, colour, viscosity, or defect figures are given here — they are set by the applicable standard and the purchase contract.',
    'Concentrate naming conventions such as double and triple concentrate differ by jurisdiction and market.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tomato Paste: Primary Product of Tomato Processing',
    description:
      'Tomato paste as a commodity product: how concentration works, hot break versus cold break, specification by soluble solids, and aseptic bulk storage.',
    keywords: [
      'tomato paste',
      'tomato concentrate',
      'hot break paste',
      'cold break paste',
      'processing tomatoes',
    ],
  },
  structuredData: { article: true },
};
