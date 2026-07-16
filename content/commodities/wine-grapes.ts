import type { CommodityContent } from '@/types/content';

export const wineGrapes: CommodityContent = {
  id: 'commodity-wine-grapes',
  slug: 'wine-grapes',
  contentType: 'commodity',
  title: 'Wine Grapes',
  alternativeNames: [
    'Winemaking grapes',
    'Vinification grapes',
    'Wine varietals (as fruit)',
  ],
  category: 'Fresh fruit commodity',
  subcategory: 'Vine fruit for vinification',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Berry (the whole fruit, delivered as bunches or as machine-harvested berries)',
  sourceCrop: { type: 'crop', slug: 'grape' },
  summary:
    'Wine grapes are grapes harvested for fermentation rather than for eating. They are bought on composition — sugar, acidity, pH, and phenolic ripeness — not on appearance, and the lot has hours rather than weeks to reach the winery intact.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wine grapes are the fruit of the same crop as table grapes but a different article of trade. Nobody inspects a wine-grape lot for berry size or bunch presentation. What is purchased is a composition: the sugar that will become alcohol, the acidity and pH that will govern stability and taste, and the phenolic material in skins and seeds that will supply colour, tannin, and structure. Appearance is almost irrelevant, because the fruit is going to be crushed.',
    },
    {
      type: 'paragraph',
      text: 'This makes the wine-grape trade unlike other fresh fruit. The commodity is not stored, ripened, or presented — it is delivered, usually within hours of picking, to a receiving winery that will begin processing it the same day. Its quality window is measured in hours, and the entire logistical design exists to protect composition between the vine and the crusher.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Fruit (fresh produce, delivered for processing)',
    },
    { label: 'Parent crop', value: 'Grape (Vitis vinifera), wine cultivars' },
    {
      label: 'Quality basis',
      value:
        'Sugar, titratable acidity, pH, and phenolic ripeness — not appearance',
    },
    {
      label: 'Ripening behaviour',
      value:
        'Non-climacteric: composition is fixed at picking and cannot improve',
    },
    {
      label: 'Distinguished from',
      value: 'Table grapes, judged on bunch presentation and eating quality',
    },
    {
      label: 'Time to processing',
      value: 'Hours; the lot is not a stored commodity',
    },
    {
      label: 'Harvest method',
      value: 'Hand-picked bunches or machine-harvested berries',
    },
  ],
  sections: [
    {
      id: 'a-distinct-commodity',
      heading: 'Why this is a distinct commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Two commodities under one crop is the correct model here because the buying criteria have almost nothing in common. A table-grape buyer wants large, evenly coloured, firmly attached berries on a presentable bunch, and will reject a lot on cosmetic grounds alone. A wine-grape buyer wants a defined sugar-to-acid balance, a workable pH, ripe tannins, and clean, undamaged fruit — and would happily take a bunch a supermarket would never display. Wine cultivars typically carry smaller, thicker-skinned berries with a higher skin-to-pulp ratio, which is a defect for eating and an asset for extraction.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'One crop, two trades',
          text: 'The grape crop entry describes the vine. Table grapes and wine grapes are separate commodity entries because they are separately specified, separately priced, and not interchangeable. A statement true of one is frequently false of the other.',
        },
      ],
    },
    {
      id: 'composition-and-ripeness',
      heading: 'Composition and the ripeness decision',
      body: [
        {
          type: 'paragraph',
          text: 'Grapes are non-climacteric: sugar accumulation stops when the bunch leaves the vine. Because of this, the harvest date is the winemaking decision that cannot be revisited. Growers and winemakers track sugar concentration as it rises and acidity as it falls through ripening, and pick at the point where the two are in the balance the intended wine style requires — earlier for lighter, higher-acid wines, later for riper, higher-alcohol styles.',
        },
        {
          type: 'paragraph',
          text: 'Sugar alone is an incomplete guide. Phenolic or physiological ripeness — the state of tannins in the skins and seeds, and the development of colour and aroma compounds — advances on its own timetable, and a lot can reach target sugar while its tannins remain harsh. Ripeness assessment is therefore a composite judgement made on sampled fruit, and it is why the same block can be picked on different dates for different wines.',
        },
      ],
    },
    {
      id: 'harvest-and-delivery',
      heading: 'Harvest, integrity, and delivery',
      body: [
        {
          type: 'paragraph',
          text: 'Wine grapes are picked either by hand, as whole bunches into small containers, or by machine, which shakes berries free of the stems and delivers loose fruit and juice. The choice affects what arrives: hand picking allows whole-bunch handling and selection, while machine harvesting is faster and enables night picking, but breaks more skins. Both routes are designed around the same objective — get the fruit to the winery before its composition changes.',
        },
        {
          type: 'paragraph',
          text: 'Broken skins start the clock. Once juice is exposed it oxidises and wild fermentation and acetic spoilage can begin, so damaged fruit deteriorates far faster than intact fruit. Night and early-morning harvesting is common precisely because cooler fruit slows these reactions during transport. Fruit that sits too long in a warm bin before crushing arrives at the winery as a different commodity from the one that was picked.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No compositional targets here',
          text: 'Target sugar, acidity, and pH at harvest depend on cultivar, region, vintage, and intended wine style, and are set by the winery contract and regional practice. AgricultureID publishes no universal figures; consult sourced regional guidance.',
        },
      ],
    },
    {
      id: 'contracts-and-defects',
      heading: 'Contracts, payment, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Wine grapes are typically bought on contract between a grower and a winery rather than traded on an open spot market, and payment terms commonly reference measured composition at delivery alongside weight, sometimes with yield caps or block-level provenance conditions attached. Regional appellation and geographical-indication schemes may further restrict which cultivars, areas, and practices qualify — these are legal frameworks around the commodity, and they are jurisdiction-specific.',
        },
        {
          type: 'list',
          items: [
            'Broken and split berries — the entry point for oxidation and spoilage organisms',
            'Bunch rot and sour rot — decay that carries directly into the fermenting must',
            'Raisined or shrivelled berries — desiccation shifting sugar and yield',
            'Excessive material other than grapes — leaves, stems, and debris from machine harvesting',
            'Delivery delay and heat in the bin — composition changing before the crusher',
          ],
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['food'],
  majorQualityAttributes: [
    'Sugar concentration at harvest',
    'Titratable acidity and pH',
    'Phenolic (tannin and colour) ripeness',
    'Berry and skin integrity',
    'Freedom from rot',
    'Material other than grapes in the delivered lot',
  ],
  commonDefects: [
    'Bunch rot and sour rot',
    'Split and damaged berries',
    'Raisining and shrivel',
    'Oxidised juice from crushed fruit in transit',
    'Excess leaves, stems, and debris',
    'Uneven ripeness within a delivered lot',
  ],
  moistureContext:
    'Berry water content concentrates or dilutes everything measured at delivery: late-season shrivel raises sugar while rain close to harvest can dilute it, so composition is assessed on the fruit as delivered.',
  storageContext:
    'Not a stored commodity. Fruit is held only briefly in bins before crushing, and cooling during that interval exists to slow oxidation and spontaneous fermentation.',
  transportContext:
    'Moves short distances in bins, gondolas, or tipping trailers from vineyard to winery, often at night; distance and time to the crusher are limiting design constraints.',
  majorProducingRegions: [
    'Mediterranean and Western Europe',
    'North America (Pacific coast)',
    'South America (Southern Cone)',
    'Oceania and Southern Africa',
  ],
  majorTradingRegions: [
    'Predominantly domestic and intra-regional; the fruit rarely crosses borders',
    'Europe',
    'North America',
    'Southern Hemisphere wine regions',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0806.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Grapes, fresh. The subheading covers fresh grapes generally; it does not create a separate line for wine grapes, and fresh wine grapes are seldom traded across borders.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-chain' }],
  connections: [
    { type: 'crop', slug: 'grape' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'table-grapes' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Grapes for vinification as a distinct commodity use of the grape crop',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'European wine sector framework, cultivar and geographical-indication context',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Wine grape production and sector reporting context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on grape ripening and vinification fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Appellation rules, permitted cultivars, and contract practice are strongly jurisdiction-specific.',
  limitations: [
    'This entry describes the harvested fruit as a commodity; it is not winemaking guidance, a contract specification, or an appellation compliance statement.',
    'No target sugar, acidity, or pH values are given — they depend on cultivar, region, vintage, and wine style.',
    'Appellation and geographical-indication rules vary by jurisdiction and are revised; confirm the framework in force.',
    'The wine regions named are indicative of where the fruit is grown, and are not a ranked or exhaustive list.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wine Grapes: Fruit Traded for Vinification',
    description:
      'Wine grapes as a commodity distinct from table grapes: bought on sugar, acid, pH and phenolic ripeness, delivered to the winery in hours, and never stored.',
    keywords: [
      'wine grapes',
      'vinification',
      'grape ripeness',
      'sugar acid balance',
      'winery delivery',
    ],
  },
  structuredData: { article: true },
};
