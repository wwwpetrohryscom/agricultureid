import type { CommodityContent } from '@/types/content';

export const hazelnuts: CommodityContent = {
  id: 'commodity-hazelnuts',
  slug: 'hazelnuts',
  contentType: 'commodity',
  title: 'Hazelnuts',
  alternativeNames: ['Filberts', 'Cobnuts', 'Hazelnut kernels'],
  category: 'Tree nut commodity',
  subcategory: 'True nut',
  commodityClass: 'nut',
  physicalForm: 'seed',
  harvestedPart:
    'True nut, gathered after natural fall, traded in-shell or as kernels',
  sourceCrop: { type: 'crop', slug: 'hazelnut' },
  summary:
    'Hazelnuts are a true nut whose trade is dominated by a single industrial buyer type: confectionery. That demand shapes the commodity around kernel attributes — roundness, size uniformity, and how cleanly the skin comes off after roasting — rather than around appearance in the shell.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hazelnuts are one of the few traded nuts that are botanically a true nut — the shell is the fruit wall itself, not a stone inside a fleshy fruit as it is for almonds, walnuts, and pistachios. They are harvested by gathering nuts that have fallen naturally from the tree, which is a gentler and more forgiving harvest than shaking, but which leaves the crop lying on the ground where moisture and contamination find it.',
    },
    {
      type: 'paragraph',
      text: 'The commodity is defined less by botany than by who buys it. Most hazelnuts do not reach a consumer as nuts: they go to confectionery and spread manufacturers who roast them, remove the skins, and grind or embed them in a product. That buyer does not care what the shell looks like. It cares about kernel size uniformity, roundness, oil quality, and — decisively — whether the papery skin releases cleanly when the kernel is roasted. This entry describes the traded nut; the tree belongs to the hazelnut crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Nut (tree nut)' },
    { label: 'Parent crop', value: 'Hazelnut (Corylus avellana)' },
    { label: 'Botanically', value: 'A true nut — the shell is the fruit wall' },
    {
      label: 'Harvest method',
      value: 'Gathered from the ground after natural fall',
    },
    {
      label: 'Dominant demand',
      value:
        'Confectionery and spread manufacture, buying kernels rather than in-shell nuts',
    },
    {
      label: 'Distinctive quality attribute',
      value:
        'Pellicle (skin) removal after roasting — a make-or-break processing trait',
    },
    {
      label: 'Production concentration',
      value: 'Unusually concentrated in a small number of regions',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Hazelnuts drop from the tree when ripe, and the crop is collected from the orchard floor by sweeping and mechanical pickup, or by hand where terrain rules out machinery. The nuts are then dried, and either traded in-shell or cracked to yield kernels. In-shell hazelnuts serve a seasonal retail trade, but the volume flows as kernels, because the industrial buyers who dominate demand want kernels.',
        },
        {
          type: 'paragraph',
          text: 'Cultivar has direct commercial consequences. Round kernels are preferred by confectionery manufacturers because they embed and coat evenly, size uniformity determines how a batch roasts, and cultivars differ markedly in how readily the pellicle releases. A cultivar with an excellent flavour and a stubborn pellicle is a commercially awkward hazelnut.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The pellicle problem',
          text: 'The papery skin around a hazelnut kernel is bitter and is removed by roasting and abrasion. How completely it releases is a cultivar- and process-dependent trait, and it is one of the attributes industrial buyers specify most closely — a quality criterion invisible to anyone who has only seen the nut in its shell.',
        },
      ],
    },
    {
      id: 'ground-harvest-and-drying',
      heading: 'Ground harvest, drying, and its consequences',
      body: [
        {
          type: 'paragraph',
          text: 'Collecting nuts from the ground means collecting whatever they have been lying in. Nuts that sit on damp soil take up moisture, stain, and can begin supporting mould growth, and the interval between fall and collection is therefore a quality variable in the way that the interval between harvest and hulling is for pistachios. Wet seasons compress that window sharply.',
        },
        {
          type: 'paragraph',
          text: 'Drying follows collection and brings the nuts to a moisture at which they are stable in store. Hazelnuts, like other tree nuts, carry a mould and mycotoxin risk in inadequately dried lots, and the ground-contact harvest is precisely why that risk requires management. Once dry, the commodity behaves like other stored nuts: the shell affords protection, kernels are more exposed, and the eventual limit is rancidity in an oil-rich kernel rather than microbial spoilage.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Drying and storage figures are not given here',
          text: 'Target moisture, drying conditions, and storage regimes for hazelnuts are set by industry standards, contracts, and jurisdictional food-safety rules. Consult sourced post-harvest and food-safety guidance for the market concerned.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Kernel lots are specified on size and size uniformity, shape, colour, moisture, and defect incidence, with roasting behaviour and pellicle removal assessed on samples. In-shell lots are additionally judged on shell condition, cleanliness, and the proportion of well-filled nuts. Blanks — nuts whose kernel never developed — are a defect that cannot be seen from outside and are removed by density separation.',
        },
        {
          type: 'list',
          items: [
            'Blank and poorly filled nuts',
            'Mould growth and mycotoxin risk in lots collected wet or dried late',
            'Insect damage, including nuts damaged on the tree before fall',
            'Rancidity in kernels held warm, bright, or long',
            'Shrivelled, misshapen, and undersized kernels',
            'Poor pellicle release after roasting',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grade standards for hazelnuts are jurisdictional and versioned, and much of the trade also runs on contract descriptions written by industrial buyers to their own processing requirements — which can be more demanding, and more specific, than any public grade.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Confectionery is the destination for most of the crop: kernels roasted, skinned, and then whole, chopped, or ground into pastes for chocolate, spreads, and bakery. A smaller share reaches consumers as snack nuts and as in-shell nuts in seasonal retail. Kernels are pressed for hazelnut oil in modest quantities for culinary and cosmetic use, and shells from cracking are used as fuel and as a mulch and abrasive material.',
        },
        {
          type: 'list',
          items: [
            'Food — kernels for confectionery, spreads, and bakery, the dominant outlet',
            'Food — whole and in-shell nuts for the snack and seasonal retail trade',
            'Oil and industrial — hazelnut oil, and shells used as fuel, mulch, and abrasive',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['oil', 'industrial', 'energy'],
  majorQualityAttributes: [
    'Kernel size and size uniformity',
    'Kernel roundness and shape',
    'Pellicle release after roasting',
    'Moisture content',
    'Proportion of well-filled nuts',
    'Freedom from mould, insect damage, and rancidity',
  ],
  commonDefects: [
    'Blank and poorly filled nuts',
    'Mould and mycotoxin risk in wet-collected lots',
    'Insect damage',
    'Rancidity',
    'Shrivelled and misshapen kernels',
    'Poor pellicle release',
  ],
  moistureContext:
    'Nuts gathered from the orchard floor may pick up moisture before collection; drying to a stable moisture afterwards is what makes the commodity storable, with limits set by standards and contracts.',
  storageContext:
    'Held dry in-shell or as kernels, with cold storage and controlled packaging used for kernels because oil-rich kernels are limited by rancidity rather than by spoilage.',
  transportContext:
    'Moves as kernels in bags, cartons, and totes in dry containers, frequently vacuum-packed or under modified atmosphere; in-shell nuts ship as a smaller seasonal trade.',
  majorProducingRegions: [
    'The eastern Mediterranean and Black Sea region',
    'Southern Europe',
    'North America (Pacific northwest)',
    'The Caucasus and Central Asia',
  ],
  majorTradingRegions: [
    'The eastern Mediterranean (dominant exporting region)',
    'Europe (dominant importing region, driven by confectionery manufacture)',
    'North America',
    'East Asia',
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'walnuts' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Hazelnuts as a traded tree nut commodity and production concentration',
    },
    {
      sourceId: 'usda',
      citedFor: 'Hazelnut grade attributes and defect vocabulary',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European hazelnut sector and marketing context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on hazelnut botany and commercial use',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with production concentrated in a small number of regions. Grade standards and food-safety rules are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, processing specification, or food-safety assessment.',
    'No moisture, drying, storage, or mycotoxin figures are given here — these are set by standards, contracts, and food-safety authorities.',
    'Industrial buyer specifications frequently exceed public grade standards and are not reproduced here.',
    'Regions are listed to indicate where hazelnuts are grown and consumed, not to rank them by volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hazelnuts: A Nut Traded for Confectionery',
    description:
      'Hazelnuts as a commodity: gathered from the ground, dried for storage, and specified by confectionery buyers on kernel size, roundness, and pellicle release.',
    keywords: [
      'hazelnuts',
      'hazelnut kernels',
      'hazelnut commodity',
      'pellicle removal',
      'confectionery nuts',
    ],
  },
  structuredData: { article: true },
};
