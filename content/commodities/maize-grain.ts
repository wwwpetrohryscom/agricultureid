import type { CommodityContent } from '@/types/content';

export const maizeGrain: CommodityContent = {
  id: 'commodity-maize-grain',
  slug: 'maize-grain',
  contentType: 'commodity',
  title: 'Maize Grain',
  alternativeNames: [
    'Corn grain',
    'Field corn',
    'Shelled corn',
    'Maize kernels',
  ],
  category: 'Cereal grain commodity',
  subcategory: 'Field maize',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (kernel), shelled from the cob',
  sourceCrop: { type: 'crop', slug: 'maize' },
  summary:
    'Maize grain is the shelled kernel of the maize crop and one of the largest cereal commodities by volume. Most of it is used for feed and industrial processing rather than eaten directly, and it is graded on moisture, damage, and broken kernels.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maize grain — corn, in North American usage — is the dry kernel shelled from the cob at harvest and traded in bulk. It is distinct from sweetcorn, which is harvested immature as a vegetable and is a different commodity entirely. Field maize enters the trade as a dry, free-flowing grain destined mainly for animal feed and for wet and dry milling, with direct food use concentrated in the regions where maize is a staple.',
    },
    {
      type: 'paragraph',
      text: 'What matters about a maize lot is not how the plant grew but how the kernels arrived: their moisture at delivery, how much mechanical damage shelling and handling caused, and whether the lot carries mould or mycotoxin contamination. Maize is frequently harvested wet and dried artificially, which makes drying practice — and the stress cracking that aggressive drying causes — a quality issue built into the commodity itself.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Maize (Zea mays)' },
    {
      label: 'Harvested part',
      value: 'Caryopsis (kernel), shelled from the cob',
    },
    {
      label: 'Principal uses',
      value: 'Feed, industrial processing (milling, starch, ethanol), and food',
    },
    {
      label: 'Not the same as',
      value: 'Sweetcorn, which is a separate immature-harvest commodity',
    },
    {
      label: 'Key quality attributes',
      value:
        'Moisture, broken kernels and foreign material, test weight, damage',
    },
    {
      label: 'Principal safety concern',
      value: 'Mycotoxin-producing storage and field moulds',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Traded maize is dent or flint field maize, shelled and dried. Kernel type matters commercially: dent maize, with its soft starch core, dominates bulk feed and wet-milling trade, while harder flint types behave differently in dry milling and resist storage insect damage better. Colour is also a trade descriptor — yellow maize dominates the international feed trade, while white maize carries a distinct food market and is priced separately where it is a staple.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Field maize, sweetcorn, popcorn',
          text: 'These are different commodities from overlapping crop material. Field maize is harvested dry as a grain; sweetcorn is harvested immature as a vegetable; popcorn is a specialty type traded on expansion characteristics. This entry covers field maize grain only.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Maize supports more distinct processing routes than any other cereal. Dry milling separates the kernel into endosperm fractions — grits, meal, and flour — plus germ and bran; cornmeal is the primary food output of that route, while the germ is recovered as a valuable oil-bearing co-product and the bran leaves as a residual feed stream. Wet milling instead steeps the kernel to extract starch, yielding starch, sweeteners, gluten feed, and gluten meal. A large share of the crop bypasses milling entirely and is fed whole or ground, and in several countries a further large share is fermented to fuel ethanol.',
        },
        {
          type: 'list',
          items: [
            'Feed — fed whole, cracked, or ground, and as the energy base of compound feeds',
            'Food — dry-milled into meal, grits, and flour; nixtamalised for tortillas and masa',
            'Industrial — wet-milled for starch and sweeteners; fermented for ethanol',
            'Energy — fuel ethanol feedstock, with distillers grains returning to feed',
            'Seed — hybrid seed production, a separate identity-preserved trade',
          ],
        },
        {
          type: 'paragraph',
          text: 'The product pathways modelled here cover the dry-milling route. Wet-milling outputs and distillers grains are real and commercially large, but they are separate processing chains and are not asserted as products of this commodity page until they are described in their own right.',
        },
      ],
    },
    {
      id: 'quality-grading-and-mycotoxins',
      heading: 'Quality, grading, and mycotoxins',
      body: [
        {
          type: 'paragraph',
          text: 'Maize grades on moisture, test weight, total damaged kernels including heat damage, and the combined category of broken corn and foreign material. That last measure is unusually important for maize: the kernel is large and the germ sits exposed at one end, so shelling, augering, and drop-handling all generate fines and broken pieces. Broken material stores worse than whole grain, concentrates in the centre of a bin, and impedes aeration, so the physical condition of a lot has direct consequences for how long it can be held.',
        },
        {
          type: 'paragraph',
          text: 'Maize is also the cereal most consistently associated with mycotoxin risk. Fungi in the Aspergillus and Fusarium genera can colonise the grain both in the field and in store and can produce toxins including aflatoxins and fumonisins. Regulatory limits for these exist in most jurisdictions, apply to the lot rather than to the crop, and are enforced independently of the commercial grade — a lot can meet its grade and still be rejected on a mycotoxin result.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grade and safety are different tests',
          text: 'Meeting a numerical grade is a commercial description. Mycotoxin compliance is a separate, jurisdiction-specific food and feed safety requirement with its own sampling rules. Neither substitutes for the other.',
        },
      ],
    },
    {
      id: 'drying-storage-and-transport',
      heading: 'Drying, storage, and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'In temperate production maize is routinely combined above safe storage moisture and dried mechanically, which makes the grain dryer part of the commodity chain rather than an optional refinement. Drying too fast or too hot induces stress cracks in the endosperm; cracked kernels break more readily in later handling and lose value in dry and wet milling alike. In warm climates the pressure runs the other way — the window between harvest moisture and mould growth is short, and hermetic or well-managed conventional storage is what protects the lot.',
        },
        {
          type: 'paragraph',
          text: 'Once dry, maize moves in bulk by truck, rail, barge, and vessel in very large volumes, and stores in everything from on-farm bins to port terminals. Because broken material and fines drive both storage risk and grade, cleaning before storage and careful handling at every transfer point repay themselves across the chain.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'food', 'industrial'],
  secondaryUses: ['energy', 'seed'],
  majorQualityAttributes: [
    'Moisture content',
    'Broken corn and foreign material',
    'Test weight',
    'Total damaged kernels',
    'Heat-damaged kernels',
    'Stress cracking',
    'Mycotoxin status',
  ],
  commonDefects: [
    'Broken kernels and fines',
    'Heat damage from over-aggressive drying',
    'Stress cracks',
    'Mould growth and mycotoxin contamination',
    'Insect damage in store',
    'Foreign material and cob fragments',
  ],
  moistureContext:
    'Commonly harvested above safe storage moisture and dried before binning; the limit that applies is set by the grade standard, climate, and intended holding period rather than by any single figure.',
  storageContext:
    'Stored in bins, silos, and terminals; fines and broken kernels impede aeration and concentrate storage risk, and mould control is the dominant concern in warm or humid conditions.',
  transportContext:
    'Moves in very large bulk volumes by truck, rail, barge, and vessel; every transfer point generates additional broken material.',
  majorProducingRegions: [
    'North America',
    'South America',
    'East Asia',
    'Sub-Saharan Africa',
    'Europe and Central Asia',
  ],
  majorTradingRegions: [
    'North America',
    'South America',
    'East Asia (major importing region)',
    'North Africa and the Middle East (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1005.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Maize (corn), other than seed. Maize for sowing falls under 1005.10.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'cornmeal' }],
  coProducts: [{ type: 'commodity-product', slug: 'maize-germ' }],
  byProducts: [{ type: 'commodity-product', slug: 'maize-bran' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Maize as a traded cereal, its uses, and mycotoxin context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Maize grading attributes and commodity classes',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize kernel types and grain quality context',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Maize drying, stress cracking, and storage management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, mycotoxin limits, and tariff subheadings are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, feed formulation, or customs classification.',
    'No moisture, test-weight, damage, or mycotoxin figures are given here — those are set by the applicable standard and regulation.',
    'Wet-milling outputs, distillers grains, and gluten feed are real maize pathways but are not modelled as products of this page.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Maize Grain: The Traded Corn Commodity',
    description:
      'Maize grain as a commodity: shelled field corn, its feed, milling and industrial pathways, why broken kernels and mycotoxins drive grade, and drying practice.',
    keywords: [
      'maize grain',
      'corn commodity',
      'field corn',
      'maize grading',
      'broken corn foreign material',
    ],
  },
  structuredData: { article: true },
};
