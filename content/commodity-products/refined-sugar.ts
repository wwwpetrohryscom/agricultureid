import type { CommodityProductContent } from '@/types/content';

export const refinedSugar: CommodityProductContent = {
  id: 'commodity-product-refined-sugar',
  slug: 'refined-sugar',
  contentType: 'commodity-product',
  title: 'Refined Sugar',
  alternativeNames: [
    'White sugar',
    'Refined cane sugar',
    'Granulated sugar',
    'Plantation white (in part)',
  ],
  category: 'Primary manufactured product',
  subcategory: 'Purified crystalline sucrose',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'sugarcane' },
  physicalForm: 'crystal',
  summary:
    'Refined sugar is white sugar: raw cane sugar stripped of the molasses film and the impurities that colour it. Refining is the step that finishes cane sugar — and the step beet largely does not need, because a beet factory produces white sugar directly without a raw-sugar stage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Refined sugar is what raw sugar becomes. A cane mill delivers a crystal that is already mostly sucrose but still wears a thin film of the syrup it grew in, and that film is what makes raw sugar brown, faintly aromatic, and unfit for most of the uses white sugar is put to. Refining takes it off, and then goes further: the sugar is dissolved, cleaned of the colour and impurities carried in the liquor, and crystallised again into the white product that reaches households and food manufacturers.',
    },
    {
      type: 'paragraph',
      text: 'The distinction from raw sugar is worth holding onto, because the two are often spoken of as one commodity. They are different products at different stages, traded by different businesses, in different forms, usually in different countries. Raw sugar is a bulk feedstock shipped loose in a ship’s hold; refined sugar is a finished food, bagged, and specified on how clean it is. Cleanliness is not a quality of refined sugar so much as it is the entire product.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of cane refining' },
    {
      label: 'Made from',
      value: 'Sugarcane (Saccharum spp. hybrids), via raw sugar',
    },
    {
      label: 'What refining removes',
      value: 'The molasses film, colour, and other non-sugars',
    },
    {
      label: 'Distinguished from raw sugar by',
      value: 'Purity and colour — not by the sucrose itself',
    },
    {
      label: 'The beet asymmetry',
      value:
        'Beet factories produce white sugar directly, with no raw-sugar stage',
    },
    {
      label: 'Colour specified by',
      value: 'ICUMSA units, as set by the contract',
    },
    { label: 'Principal uses', value: 'Food and industrial' },
  ],
  sections: [
    {
      id: 'what-refining-does',
      heading: 'What refining does',
      body: [
        {
          type: 'paragraph',
          text: 'Refining begins by washing the raw crystal to take off the syrup film clinging to it — the affination step, and on its own a substantial purification, since much of what makes raw sugar impure is sitting on the outside of the crystal rather than inside it. The washed sugar is then dissolved, and the liquor is clarified and decolourised to remove the colouring matter and non-sugars that came through in solution. From that cleaned liquor sucrose is crystallised once more, and the crystals are spun off, dried, and screened to the grain the buyer wants.',
        },
        {
          type: 'paragraph',
          text: 'What underlies all of it is the same principle that produced the raw crystal in the first place: a growing sucrose crystal excludes most of what is around it, so crystallisation is itself a purification. Refining is largely a matter of doing that again from a cleaner starting liquor, having removed by washing and decolourisation the impurities that a single crystallisation from cane juice could not exclude.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The sucrose does not change',
          text: 'Refining removes things; it does not transform the sugar. The sucrose in raw sugar, in refined cane sugar, and in beet sugar is the same molecule. What refining changes is what is present alongside it — which is why refined cane sugar and refined beet sugar are indistinguishable in the bag.',
        },
      ],
    },
    {
      id: 'raw-versus-refined',
      heading: 'Raw sugar and refined sugar are not the same product',
      body: [
        {
          type: 'paragraph',
          text: 'Raw sugar is centrifuged crystal that has been spun free of most of its mother liquor but not washed clean of it. It is deliberately unfinished, because a cane mill stops where it does for structural reasons: cane must be crushed close to where it grows, while the last stages of purification are a different business done at a different scale, usually near the people who will eat the sugar. Raw sugar exists because sugar has to travel, and it is the form in which it travels well.',
        },
        {
          type: 'paragraph',
          text: 'Refined sugar is the other end of that journey. The colour that distinguishes the two is a coating and a contaminant load, not a property of the sucrose beneath it, so the difference between raw and refined is a difference in what has been taken away. That is also why they are handled so differently: raw sugar can be poured into a hold and grabbed out because it is going to be dissolved anyway, whereas refined sugar is bagged and protected, since anything it picks up defeats the point of having refined it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title:
            'Refined sugar is not a brown speciality sugar with the colour left in',
          text: 'The brown sugars sold at retail are separate goods made by their own routes, and bulk raw sugar is a refinery feedstock rather than a consumer product. Neither the word "raw" nor the colour makes them the same thing as an unfinished refinery input.',
        },
      ],
    },
    {
      id: 'cane-and-beet',
      heading: 'Why beet is refined differently',
      body: [
        {
          type: 'paragraph',
          text: 'Refining is not something done only to raw cane sugar. A sugar beet factory refines too — but it refines the juice, directly, as part of one continuous operation, and it does so without ever making a raw sugar. Beet juice purification is integral to the process rather than a stage bolted on afterwards: the juice is cleaned before it is evaporated, and the sugar that crystallises out of the cleaned syrup is already white. Roots go in one end of the factory and finished white sugar comes out the other.',
        },
        {
          type: 'paragraph',
          text: 'The reason for the asymmetry is geography rather than chemistry. Beet grows in the temperate regions that consume the sugar, so there is no long haul between field and consumer to justify an intermediate product, and nothing is gained by stopping halfway. Cane grows in the tropics and much of its demand is elsewhere, so the industry splits in two — mills in the cane, refineries at the ports and near the markets — and raw sugar is what passes between them.',
        },
        {
          type: 'paragraph',
          text: 'This is a distinction that is commonly missed, and missing it makes the sugar product tree look inconsistent. It is not: refined sugar sits downstream of raw sugar on the cane side, while on the beet side white sugar is the factory’s own primary product and is described here as beet sugar. Two routes, differently organised, converging on one product.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality, storage, and handling',
      body: [
        {
          type: 'paragraph',
          text: 'White sugar is bought on purity, colour, and grain. Colour is expressed in ICUMSA units — an internationally used scale on which a lower number means a whiter sugar — and what is required is set by the buyer and the contract rather than by any universal standard, because a soft drink maker, a baker, and a bulk industrial user are not asking for the same sugar. Grain size and uniformity, moisture, ash, and freedom from foreign matter complete the picture. Beyond a point these are all cleanliness measures, which is fitting for a product defined by what has been removed from it.',
        },
        {
          type: 'paragraph',
          text: 'Sugar is hygroscopic and it cakes, so refined sugar is conditioned before it goes into a silo and the atmosphere around it is controlled — a silo of caked sugar is a serious problem to recover. It moves in bags, big bags, and bulk. And as with any fine dry organic solid handled in quantity, sugar dust is a recognised explosion hazard that handling systems are engineered around rather than an incidental housekeeping matter.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Polarisation and purity',
    'Colour in ICUMSA units',
    'Grain size and uniformity',
    'Moisture content',
    'Ash content',
    'Freedom from foreign matter',
  ],
  processContext:
    'Produced at a cane refinery: raw sugar is washed free of its molasses film, dissolved, clarified and decolourised, then recrystallised, dried, and screened to the grain required. Beet white sugar reaches the same product by refining beet juice directly, without a raw-sugar stage.',
  storageContext:
    'Held in silos, bags, big bags, and bulk; hygroscopic and prone to caking, so it is conditioned before silo storage, and sugar dust is an explosion hazard in bulk handling.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1701',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cane or beet sugar and chemically pure sucrose, in solid form, at heading level. The heading covers both cane and beet sugar; while its raw-sugar subheadings separate beet from cane, the subheadings covering refined sugar do not distinguish which crop it came from.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'commodity', slug: 'sugarcane' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'raw-sugar' },
    { type: 'commodity-product', slug: 'beet-sugar' },
    { type: 'commodity-product', slug: 'molasses' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Refined sugar as a manufactured product and the milling-to-refining pathway',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Sugar sector structure, cane refining, and beet and cane sugar as equivalent products',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Beet sector production of white sugar in one integrated factory',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Sugar refining: affination, decolourisation, and recrystallisation',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Sugar standards, colour specifications, contract bases, and market regimes are jurisdiction- and contract-specific.',
  limitations: [
    'This is a reference description of the product, not a refinery specification, contract specification, or customs classification.',
    'No ICUMSA colour values, purity figures, refining yields, or recovery data are given here — they belong to the applicable contract and standard and are process- and contract-specific.',
    'Refinery configurations differ, and decolourisation in particular is done by more than one route; this entry describes the general sequence rather than any particular plant.',
    'Sugar markets are subject to jurisdiction-specific quota, tariff, and preference regimes that this entry does not describe.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Refined Sugar: Turning Raw Cane Sugar White',
    description:
      'Refined sugar as a commodity product: what refining strips from the raw crystal, how it differs from raw sugar, and why beet needs no raw-sugar stage.',
    keywords: [
      'refined sugar',
      'white sugar',
      'sugar refining',
      'affination',
      'raw sugar versus refined',
    ],
  },
  structuredData: { article: true },
};
