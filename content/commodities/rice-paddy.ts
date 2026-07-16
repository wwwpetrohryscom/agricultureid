import type { CommodityContent } from '@/types/content';

export const ricePaddy: CommodityContent = {
  id: 'commodity-rice-paddy',
  slug: 'rice-paddy',
  contentType: 'commodity',
  title: 'Rice Paddy',
  alternativeNames: [
    'Rough rice',
    'Paddy rice',
    'Rice in the husk',
    'Unhusked rice',
  ],
  category: 'Cereal grain commodity',
  subcategory: 'Rough (unhusked) rice',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Caryopsis still enclosed in its hull (lemma and palea), as it leaves the field',
  sourceCrop: { type: 'crop', slug: 'rice' },
  summary:
    'Rice paddy is rice as it comes off the field: the grain still enclosed in its hull. It is the first of three separately traded rice commodities, and the form in which rice is dried and stored before milling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice paddy — rough rice — is the harvested, threshed rice grain with its hull still on. The hull is a tough, silica-rich husk formed from two floral structures, and it is not a bran layer: it is a separate covering that must be mechanically stripped before the grain is edible. Paddy is the form in which most rice is dried, stored, and traded domestically, because the hull is an excellent natural package.',
    },
    {
      type: 'paragraph',
      text: 'Rice is modelled on AgricultureID as three distinct commodities rather than one, because that is how it is traded, tariffed, and specified. Paddy is hulled to give brown rice; brown rice is milled to give milled rice. Each stage is a real commercial boundary with its own price, its own classification code, and its own storage behaviour, and none of the three is a product of the others in the processing sense — they are successive traded states of the same grain.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    {
      label: 'Parent crop',
      value: 'Rice (Oryza sativa, and Oryza glaberrima in West Africa)',
    },
    {
      label: 'Physical state',
      value: 'Grain enclosed in the hull, as harvested',
    },
    {
      label: 'Position in the chain',
      value: 'Paddy → brown rice (hulling) → milled rice (whitening)',
    },
    {
      label: 'Why it is stored as paddy',
      value:
        'The hull protects the grain from insects, moisture, and rancidity',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, fissuring, purity, immature and chalky grains',
    },
    { label: 'By-product of hulling', value: 'Rice husk' },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Paddy is the whole rice grain in its hull. Underneath the hull sits the caryopsis proper — bran layers, germ, and starchy endosperm — and removing the hull is the first and least destructive of the two milling operations rice undergoes. Because the hull is inedible and indigestible, paddy has essentially no direct food use; its value lies entirely in what it will mill out to.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hull is not bran',
          text: 'The hull (husk) is a floral covering removed by hulling; the bran is the true seed coat and aleurone, removed later by whitening. Conflating the two makes rice husk and rice bran look like the same stream, and they are not — they have different composition, different uses, and different markets.',
        },
        {
          type: 'paragraph',
          text: 'Paddy is described commercially by grain type — long, medium, and short grain — and by varietal group, since aromatic and speciality rices are bought as identity-preserved lots. These descriptors travel with the grain through hulling and milling, which is why segregation begins at the dryer, not at the mill.',
        },
      ],
    },
    {
      id: 'drying-and-fissuring',
      heading: 'Drying and the fissuring problem',
      body: [
        {
          type: 'paragraph',
          text: 'Nothing determines the value of a paddy lot more than how it was dried. Rice kernels fissure — develop internal cracks — when moisture moves through them too abruptly, whether by drying too fast or by allowing dry grain to re-absorb moisture. Fissured kernels survive hulling but break during whitening, and broken grains sell at a discount to whole ones. The damage is therefore invisible in the paddy, permanent, and paid for two processing steps later.',
        },
        {
          type: 'paragraph',
          text: 'This is why rice drying is conventionally done in stages with tempering periods between passes, and why sun drying on hard surfaces, though widespread and effective when managed, carries a fissuring risk if grain is dried too thin, too hot, or re-wetted by dew or rain. Timeliness matters too: paddy arrives wet and warm, and delay before drying invites mould and discolouration.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Head rice yield is decided before the mill',
          text: 'The proportion of whole kernels a lot will produce is largely fixed by harvest timing and drying practice. A mill can protect head rice yield; it cannot restore what fissuring has already cost.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality attributes and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Paddy is graded on moisture, purity, and the condition of the grain inside the hull. Standards and contracts look at immature and chalky kernels, discoloured and damaged grains, red-streaked grains, admixture of other varieties or of red rice, and foreign material including stones and mud picked up during field drying. Many paddy specifications are written in terms of the milling outcome — the total milled rice and the whole-kernel fraction a sample yields on a test mill — because that is what the buyer is actually purchasing.',
        },
        {
          type: 'paragraph',
          text: 'Grade names, grain-length classes, and the tolerances behind them are national. The same paddy lot can grade differently under different standards, and a grade is a commercial description rather than a food-safety clearance.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Paddy stores better than either brown or milled rice, and that is the main reason rice is held in this form. The hull is a physical barrier against storage insects and slows moisture exchange, and because the bran layer stays intact and undisturbed, the oil it carries is less exposed to the rancidity that shortens the life of brown rice. Sealed and hermetic systems extend this further where humidity makes conventional storage difficult.',
        },
        {
          type: 'paragraph',
          text: 'Paddy is bulky relative to the rice it contains — a substantial share of its weight is hull that will be discarded — so long-distance international trade is dominated by milled rice, while paddy moves shorter distances between farm, dryer, store, and mill, in bulk and in bags.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Moisture content',
    'Milling and whole-kernel yield potential',
    'Fissured kernels',
    'Immature and chalky grains',
    'Varietal purity and red rice admixture',
    'Foreign material',
  ],
  commonDefects: [
    'Fissured (cracked) kernels from drying or re-wetting',
    'Discoloured and heat-damaged grains',
    'Immature and chalky kernels',
    'Mould growth from delayed drying',
    'Red rice and varietal admixture',
    'Stones, mud, and field foreign material',
  ],
  moistureContext:
    'Arrives from the field wet and must be dried promptly, in stages with tempering, to avoid fissuring; the target depends on the drying system, climate, and holding period, and is set by local guidance and contract.',
  storageContext:
    'The preferred long-term storage form for rice: the intact hull resists insects and slows moisture and oxygen exchange, protecting the bran oil beneath it.',
  transportContext:
    'Moves mostly over short distances between farm, dryer, store, and mill in bulk and bags; its hull makes it bulky for long-haul trade, which is dominated by milled rice.',
  majorProducingRegions: [
    'South Asia',
    'Southeast Asia',
    'East Asia',
    'Sub-Saharan Africa',
    'South America',
  ],
  majorTradingRegions: [
    'Southeast Asia',
    'South Asia',
    'Mercosur (regional paddy trade)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1006.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Rice in the husk (paddy or rough).',
    },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'rice-husk' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Paddy drying, fissuring, milling yield, and storage behaviour',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Rice as a traded commodity and the paddy/husked/milled distinction',
    },
    {
      sourceId: 'usda',
      citedFor: 'Rough rice grading attributes and grain-length classes',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for rice in its traded forms',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Rice grade standards, grain-length classes, and tariff subheadings are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity, not the growing rice crop, and is not a grading determination or customs classification.',
    'No moisture targets, milling-yield figures, or defect tolerances are given — these are set by the applicable standard, drying system, and contract.',
    'Paddy, brown rice, and milled rice are modelled as separate commodities because they are separately traded and tariffed; they are successive states of the same grain, not products of one another.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rice Paddy: Rough Rice as Harvested',
    description:
      'Rice paddy as a commodity: the grain still in its hull, why fissuring during drying decides milling value, how it is graded, and why rice stores best as paddy.',
    keywords: [
      'rice paddy',
      'rough rice',
      'paddy drying',
      'fissuring',
      'head rice yield',
    ],
  },
  structuredData: { article: true },
};
