import type { CommodityProductContent } from '@/types/content';

export const appleJuiceConcentrate: CommodityProductContent = {
  id: 'commodity-product-apple-juice-concentrate',
  slug: 'apple-juice-concentrate',
  contentType: 'commodity-product',
  title: 'Apple Juice Concentrate',
  alternativeNames: ['AJC', 'Concentrated apple juice'],
  category: 'Primary processed product',
  subcategory: 'Fruit juice concentrate',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-apples' },
  physicalForm: 'liquid',
  summary:
    'Apple juice concentrate is pressed apple juice with most of its water removed. Concentration turns a bulky, perishable liquid into a dense, storable, shippable one — which is why the world juice trade moves concentrate rather than juice.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Apple juice concentrate is what the apple processing industry is built to produce. Apples are pressed, the juice is clarified, and then most of its water is evaporated away, leaving a heavy, dense liquid that is a fraction of the original volume. It is the primary product of the processing stream in the strict sense: the operation exists to make it, and everything else the press produces is residue.',
    },
    {
      type: 'paragraph',
      text: 'The reason concentrate rather than juice dominates the trade is logistics. Juice is mostly water, and shipping water across oceans in refrigerated tanks is expensive; concentrate carries the same fruit solids in far less volume, stores frozen or chilled for long periods, and is reconstituted with water where it is consumed. A large share of the apple juice sold anywhere in the world spent its journey as concentrate.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of apple processing' },
    {
      label: 'Made from',
      value: 'Fresh apples (Malus domestica), largely processing-grade fruit',
    },
    { label: 'Physical form', value: 'Dense liquid, stored frozen or chilled' },
    {
      label: 'Why it exists',
      value: 'Removing water makes the juice cheap to ship and long to store',
    },
    {
      label: 'Companion stream',
      value: 'Apple pomace, the pressed solids, as a by-product',
    },
    {
      label: 'Principal uses',
      value: 'Reconstituted juice, blends, and as a sweetening ingredient',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What apple juice concentrate is',
      body: [
        {
          type: 'paragraph',
          text: 'Apples arriving at a juice plant are washed, milled to a mash, and pressed. The juice that comes off is cloudy and enzymatically active, and it is clarified and filtered before being fed to an evaporator, where heat under reduced pressure boils water away at a temperature low enough to limit damage to the juice. What leaves the evaporator is concentrate: the same fruit solids, sugars, and acids in a fraction of the water.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Concentration',
              description:
                'The removal of water from juice by evaporation, expressed as the degree to which the soluble solids have been raised relative to the single-strength juice.',
            },
            {
              term: 'Aroma recovery',
              description:
                'Volatile aroma compounds driven off during evaporation are captured separately and can be added back, because concentrate stripped of them reconstitutes into a flat juice.',
            },
            {
              term: 'Reconstitution',
              description:
                'Adding back water to return the concentrate to single-strength juice, done at or near the market where the juice is sold.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Concentration is not preservation alone',
          text: 'Removing water raises the solids concentration enough to suppress microbial growth, which is part of why concentrate keeps — but concentrate is still held frozen or chilled, and the primary commercial driver is shipping volume, not shelf stability.',
        },
      ],
    },
    {
      id: 'quality-and-inheritance',
      heading: 'Quality and what it inherits',
      body: [
        {
          type: 'paragraph',
          text: 'Concentrate is specified on soluble solids, acidity, colour, clarity, and the absence of off flavours, and it inherits every one of these from the fruit that went into the press. Cultivar mix determines the sugar-acid balance, and processors blend deliberately to hit a target — an all-dessert-apple concentrate is bland, and acidic culinary and cider cultivars are used to give it structure.',
        },
        {
          type: 'paragraph',
          text: 'The feedstock is largely fruit the fresh market rejected: undersized, misshapen, blemished, or coming out of storage past its fresh-market life. That is a legitimate and intended use of sound fruit, but it sets a limit — rotten, mouldy, or contaminated fruit brings its problems into the juice, and patulin, a mycotoxin produced by moulds that grow on damaged apples, is a documented and regulated concern in apple juice. Fruit selection and cleaning before pressing are the controls, and they matter more here than any step in the evaporator.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No compositional or safety figures here',
          text: 'Soluble-solids targets, concentration ratios, and mycotoxin limits for apple juice concentrate are set by product standards, contracts, and food-safety authorities in each jurisdiction. AgricultureID publishes no figures.',
        },
      ],
    },
    {
      id: 'handling-and-trade',
      heading: 'Handling and trade',
      body: [
        {
          type: 'paragraph',
          text: "Concentrate ships frozen in drums and totes, and chilled in bulk tanks and flexitanks for large flows. It is a genuinely international commodity product traded between hemispheres and between seasons, allowing a juice packer to run all year on fruit harvested at different times in different places. Because it is blended and reconstituted at destination, the concentrate trade also carries authenticity concerns — adulteration with sugars or with cheaper juices is a known issue, and analytical authentication is part of the trade's routine.",
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: "Most apple juice concentrate is reconstituted into apple juice for drinking. Beyond that it is one of the food industry's workhorse sweetening and juice-content ingredients: it goes into juice blends, where its mild flavour lets it carry more assertive juices, into nectars, cider and fermented drinks, and into confectionery, bakery, and preserves as a fruit-derived sweetener.",
        },
        {
          type: 'list',
          items: [
            'Beverage — reconstituted apple juice, juice blends, nectars, and cider',
            'Food — a fruit-derived sweetening and juice-content ingredient in confectionery, bakery, and preserves',
          ],
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['food'],
  majorQualityAttributes: [
    'Soluble solids concentration',
    'Acidity and sugar-acid balance',
    'Colour',
    'Clarity',
    'Freedom from off flavours',
    'Authenticity (freedom from adulteration)',
  ],
  processContext:
    'Produced by milling and pressing apples, clarifying and filtering the juice, then evaporating water under reduced pressure; aroma volatiles are recovered separately for add-back.',
  storageContext:
    'Held frozen in drums and totes or chilled in bulk tanks; the raised solids concentration suppresses microbial growth but the product is not stored at ambient temperature.',
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'apple-pomace' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Apple processing into juice and concentrate as a commodity pathway',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Apple juice and concentrate product grade and composition context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Apple processing stream and juice market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Juice compositional standards, labelling, and mycotoxin limits are jurisdiction-specific and revised.',
  limitations: [
    'This is a reference description of the product, not a processing specification, product standard, or food-safety compliance statement.',
    'No soluble-solids, concentration-ratio, or patulin figures are given here — these are set by standards, contracts, and food authorities.',
    'Juice naming, minimum juice content, and labelling rules differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Apple Juice Concentrate: The Traded Juice Form',
    description:
      'Apple juice concentrate as a product of fresh apples: pressing, clarification and evaporation, aroma recovery, and why concentrate ships instead of juice.',
    keywords: [
      'apple juice concentrate',
      'juice evaporation',
      'reconstituted juice',
      'apple processing',
      'aroma recovery',
    ],
  },
  structuredData: { article: true },
};
