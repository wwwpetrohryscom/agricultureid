import type { CommodityProductContent } from '@/types/content';

export const beetSugar: CommodityProductContent = {
  id: 'commodity-product-beet-sugar',
  slug: 'beet-sugar',
  contentType: 'commodity-product',
  title: 'Beet Sugar',
  alternativeNames: ['White beet sugar', 'Refined beet sugar'],
  category: 'Primary manufactured product',
  subcategory: 'Crystalline sucrose from sugar beet',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'sugar-beet' },
  physicalForm: 'crystal',
  summary:
    'Beet sugar is crystalline sucrose made from sugar beet, normally produced as finished white sugar in one integrated factory rather than as a raw crystal for refining elsewhere. Chemically it is the same sucrose as cane sugar, and the finished products are indistinguishable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Beet sugar is sucrose extracted from sugar beet and crystallised into the white sugar that reaches households and food manufacturers. It supplies the temperate world with a domestically grown sweetener, and it does so through a factory model quite different from cane’s: one plant takes in roots and puts out finished sugar, without a separate refinery step in another country.',
    },
    {
      type: 'paragraph',
      text: 'The most important thing to say about the product is what does not distinguish it. Sucrose from beet and sucrose from cane are the same molecule, and once both are refined to white sugar there is no compositional or functional difference between them worth speaking of. Beet sugar and cane sugar are two routes to one product, and the choice between them is a question of geography, agriculture, and policy rather than of what ends up in the bag.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of beet processing' },
    { label: 'Made from', value: 'Sugar beet (Beta vulgaris)' },
    {
      label: 'Usual output',
      value: 'Finished white sugar, produced in one integrated factory',
    },
    {
      label: 'Extraction method',
      value: 'Diffusion — hot water through sliced cossettes',
    },
    {
      label: 'Identical to cane sugar?',
      value: 'Yes, once refined: the same sucrose molecule',
    },
    {
      label: 'Colour specified by',
      value: 'ICUMSA units, as set by the contract',
    },
    {
      label: 'Simultaneous streams',
      value: 'Beet pulp and beet molasses, both co-products',
    },
  ],
  sections: [
    {
      id: 'one-factory-not-two',
      heading: 'One factory, not two',
      body: [
        {
          type: 'paragraph',
          text: 'The structural contrast with cane is worth stating plainly. A cane mill makes raw sugar and ships it to a refinery, often on another continent, because cane grows in the tropics and much of the demand is elsewhere. A beet factory does the whole job in one place: sliced beet in at one end, white sugar out at the other, in a single continuous operation during the campaign.',
        },
        {
          type: 'paragraph',
          text: 'Beet grows in the same temperate regions that consume the sugar, so there is no long haul to justify an intermediate product, and beet juice purification is integral to the process rather than an added stage. That is why the primary product of the beet commodity is finished sugar itself, and why "raw beet sugar" — though it exists as a tariff category and is occasionally produced — is not the industry’s normal output.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the process shapes the product tree',
          text: 'AgricultureID models beet sugar as the primary product of sugar beet and raw sugar as the primary product of sugarcane. That asymmetry is not an editorial inconsistency: it reflects a real difference in how the two industries are organised.',
        },
      ],
    },
    {
      id: 'how-it-is-made',
      heading: 'How beet sugar is made',
      body: [
        {
          type: 'paragraph',
          text: 'Beet is washed, weighed, tared, and sliced into thin strips called cossettes. Sugar is then drawn out by diffusion — hot water flowing counter to the cossettes, so that sugar passes out of the cells into the water — rather than by the crushing that cane gets. This is a real difference, and it works because the beet cell will surrender its contents to hot water while the cane stalk must be torn apart.',
        },
        {
          type: 'paragraph',
          text: 'The raw juice that emerges carries a substantial load of non-sugars and is purified before anything else can happen: lime is added and then carbon dioxide, forming a precipitate that adsorbs and carries out impurities, and the purified juice is filtered. It is then evaporated to a thick syrup and boiled under vacuum until sucrose crystallises. The crystals are spun off, washed, dried, and screened; the syrup they came from is recycled through further crystallisation stages until what is left is beet molasses.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality, storage, and handling',
      body: [
        {
          type: 'paragraph',
          text: 'White sugar is bought on purity, colour, and grain. Colour is expressed in ICUMSA units — an internationally used scale where a lower number means a whiter sugar — and the value required is set by the buyer and the contract, since a soft drink maker and a bulk industrial user are not asking for the same thing. Grain size, moisture, ash, and freedom from any foreign matter complete the specification. Beyond a certain point these are cleanliness measures, and cleanliness is essentially what a refined sugar is.',
        },
        {
          type: 'paragraph',
          text: 'Sugar is hygroscopic and it cakes. Silo storage of white sugar therefore involves conditioning the crystal before it goes in and controlling the atmosphere around it, because a silo of caked sugar is a serious problem to recover. It ships in bags, big bags, and bulk, and — as with any fine dry organic solid handled in quantity — sugar dust is an explosion hazard that handling systems are designed around.',
        },
      ],
    },
    {
      id: 'the-streams-alongside',
      heading: 'The streams alongside',
      body: [
        {
          type: 'paragraph',
          text: 'A beet factory sells three things, not one. The exhausted cossettes leave diffusion as beet pulp, pressed and usually dried and pelleted for the feed market. The final liquor leaves crystallisation as beet molasses, carrying the sucrose that the beet’s own impurities refused to release. Both have real markets and are planned for, which is why this reference treats them as co-products rather than residues.',
        },
        {
          type: 'paragraph',
          text: 'The relationship between the three is direct. The melassigenic impurities the factory pays attention to at beet intake are the ones that will divert sucrose into the molasses stream instead of into the sugar; the quality of the beet delivered therefore determines, before processing even begins, how the outputs will divide between them.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Polarisation and purity',
    'Colour in ICUMSA units',
    'Grain size and uniformity',
    'Moisture content',
    'Ash content',
    'Freedom from foreign matter',
  ],
  processContext:
    'Made in one integrated factory: beet is sliced into cossettes, sugar is extracted by hot-water diffusion, the juice is purified with lime and carbon dioxide, then evaporated and crystallised to white sugar.',
  storageContext:
    'Held in silos, bags, big bags, and bulk; hygroscopic and prone to caking, so it is conditioned before silo storage, and sugar dust is an explosion hazard in bulk handling.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1701',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cane or beet sugar and chemically pure sucrose, in solid form, at heading level. Subheading 1701.12 covers raw beet sugar specifically; the white sugar that beet factories normally produce falls in the heading’s other subheadings.',
    },
  ],
  connections: [{ type: 'crop', slug: 'sugar-beet' }],
  relatedTopics: [
    { type: 'commodity-product', slug: 'raw-sugar' },
    { type: 'commodity-product', slug: 'beet-molasses' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Beet sugar as a manufactured product and the beet processing pathway',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Beet sugar sector structure and integrated factory production',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Beet and cane sugar as equivalent products in the sugar market',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate production regions worldwide. Sugar standards, colour specifications, and market regimes are jurisdiction- and contract-specific.',
  limitations: [
    'This is a reference description of the product, not a factory specification, contract specification, or customs classification.',
    'No ICUMSA colour values, purity figures, extraction rates, or recovery data are given here — they belong to the applicable contract and standard.',
    'Sugar markets are subject to jurisdiction-specific quota, tariff, and support regimes that this entry does not describe.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Beet Sugar: White Sugar From the Beet Factory',
    description:
      'Beet sugar as a commodity product: diffusion and crystallisation in one integrated factory, why it is identical to cane sugar, and how it is specified.',
    keywords: [
      'beet sugar',
      'white sugar',
      'diffusion extraction',
      'ICUMSA colour',
      'sugar factory',
    ],
  },
  structuredData: { article: true },
};
