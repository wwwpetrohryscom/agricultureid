import type { CommodityProductContent } from '@/types/content';

export const cassavaStarch: CommodityProductContent = {
  id: 'commodity-product-cassava-starch',
  slug: 'cassava-starch',
  contentType: 'commodity-product',
  title: 'Cassava Starch',
  alternativeNames: ['Tapioca starch', 'Manioc starch', 'Native tapioca'],
  category: 'Primary extracted product',
  subcategory: 'Root and tuber starch',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'cassava-roots' },
  physicalForm: 'other',
  summary:
    'Cassava starch, traded widely as tapioca starch, is starch washed out of fresh cassava roots and dried to a white powder. It is the form in which most internationally traded cassava actually moves, and it is a different product from cassava flour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cassava starch is the purified starch of the cassava root: granules released by rasping the peeled root, washed clean of fibre, protein, and solubles, dewatered, and dried. In most of the world’s trade it is called tapioca starch, a name inherited from the older tapioca trade rather than from any difference in what the product is.',
    },
    {
      type: 'paragraph',
      text: 'It is the reason cassava reaches distant markets at all. The root is bulky, wet, and perishable within days; the starch is dry, stable, and light, and it can be shipped anywhere. Extraction converts an intensely local commodity into a global one, and starch factories are consequently built close to the fields that feed them.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of starch extraction' },
    { label: 'Made from', value: 'Fresh cassava roots (Manihot esculenta)' },
    { label: 'Trade name', value: 'Tapioca starch' },
    {
      label: 'Process type',
      value: 'Wet extraction, run within days of lifting',
    },
    {
      label: 'Distinguishing feature',
      value: 'Bland flavour and clear, cohesive paste',
    },
    { label: 'Principal uses', value: 'Food and industrial applications' },
    {
      label: 'Not the same as',
      value: 'Cassava flour, which is the milled whole root',
    },
  ],
  sections: [
    {
      id: 'starch-is-not-flour',
      heading: 'Cassava starch is not cassava flour',
      body: [
        {
          type: 'paragraph',
          text: 'The two products come from the same root and are routinely confused, but they are made differently and behave differently. Cassava flour is the whole peeled root, dried and milled: it retains the root’s fibre, protein, and minerals along with its starch, and it carries the colour and flavour that come with them. Cassava starch is the starch alone, washed free of everything else by a wet process, and it is white, bland, and functionally consistent.',
        },
        {
          type: 'paragraph',
          text: 'The difference is not one of grade or refinement level within a single product. They are separate products, made on different equipment, sold to different buyers, at different prices, for different purposes — and a recipe or formulation calling for one will generally fail with the other.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'And tapioca is a name, not a plant',
          text: 'Tapioca is a trade name for cassava starch and for products made from it, such as pearls. There is no tapioca plant: the crop is cassava throughout.',
        },
      ],
    },
    {
      id: 'extraction',
      heading: 'Extraction against the clock',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava starch extraction is a race with the raw material. Roots begin deteriorating within days of lifting, and a deteriorated root gives less starch and gives it dirtier, so the factory schedule is dictated by the delivery, not the other way round. Roots are washed and peeled, rasped to a fine mash that ruptures the cells, and the starch is washed out of the fibrous residue.',
        },
        {
          type: 'paragraph',
          text: 'The starch milk is then separated from the solubles, refined through repeated washing, dewatered, and dried — commonly by flash drying, which is fast enough to avoid damaging granules that are already free of their protective cell walls. Two residual streams accumulate: peel, taken off at the front of the line, and the fibrous pulp left after the starch is washed out. Both are handled as residuals with feed and other uses rather than as products the factory is run to make.',
        },
      ],
    },
    {
      id: 'properties-and-uses',
      heading: 'Properties and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava starch pastes at a comparatively low temperature to a clear, cohesive, notably bland gel. The neutral flavour is a genuine commercial advantage — there is no cereal note to mask — and the clarity suits applications where the thickener must not be seen. Its cohesive, somewhat stringy texture is prized in some food traditions and engineered away in others.',
        },
        {
          type: 'list',
          items: [
            'Food — thickening, texturising, and the base for tapioca pearls and snacks',
            'Industrial — paper and board manufacture',
            'Industrial — adhesives, textile sizing, and binders',
            'Feedstock — native starch converted into modified starches and sweeteners',
            'Energy — fermentation substrate for ethanol',
          ],
        },
        {
          type: 'paragraph',
          text: 'As with other native starches, the paste is not robust to prolonged heat, shear, and acid, so a large share of production is modified before use. Native and modified cassava starches are separate commercial goods, and permitted modifications are a matter for food regulation in the market of use.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers assess whiteness, starch purity, moisture, ash, residual fibre, and the absence of specks and off-odour — most of which are readings on how well the factory washed the starch and how fresh the roots were. Viscosity behaviour is specified where the application demands it. The product ships as a dry powder in bags, big bags, and bulk; it is hygroscopic and cakes in humid air, and like any fine organic powder in bulk handling it carries a dust explosion hazard.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'industrial'],
  secondaryUses: ['energy'],
  majorQualityAttributes: [
    'Whiteness',
    'Starch purity',
    'Moisture content',
    'Ash and residual fibre',
    'Freedom from specks and off-odour',
    'Viscosity profile',
  ],
  processContext:
    'Extracted by wet processing within days of lifting: roots are washed, peeled, and rasped, the starch is washed out of the fibre, then refined, dewatered, and dried.',
  storageContext:
    'Traded as a dry powder in bags, big bags, and bulk; hygroscopic and prone to caking, and a dust explosion hazard in bulk handling.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1108.14',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Manioc (cassava) starch.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'gari' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cassava starch as an extracted product and its food and industrial uses',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Cassava processing routes and the starch versus flour distinction',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Cassava starch extraction and product context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade, with extraction concentrated in tropical producing regions. Food-ingredient naming and permitted modifications are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a processing specification, formulation, or food-standards compliance statement.',
    'No starch contents, extraction yields, gelatinisation temperatures, or viscosity figures are given here — they are variety-, plant-, and method-specific.',
    'Permitted starch modifications and their labelling differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cassava Starch: Tapioca Starch From Fresh Roots',
    description:
      'Cassava starch as a commodity product: wet extraction against a perishable root, why it is not cassava flour, and its bland clear paste and industrial uses.',
    keywords: [
      'cassava starch',
      'tapioca starch',
      'starch versus flour',
      'wet extraction',
      'native starch',
    ],
  },
  structuredData: { article: true },
};
