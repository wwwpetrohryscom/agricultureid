import type { CropContent } from '@/types/content';

export const switchgrass: CropContent = {
  id: 'crop-switchgrass',
  slug: 'switchgrass',
  contentType: 'crop',
  title: 'Switchgrass',
  scientificName: 'Panicum virgatum',
  alternativeNames: ['Tall panic grass'],
  category: 'Industrial crop',
  subcategory: 'Perennial warm-season native grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Switchgrass is harvested after the crop has already moved its nutrients back into the roots, because a biomass buyer wants low ash and low nitrogen — the opposite of what a forage grower would cut for.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Switchgrass is a North American prairie grass grown as a bioenergy and biomass crop, and its management inverts the logic of forage grass. A hay crop is cut while it is green and nutritious. A biomass crop is cut after senescence, once the plant has translocated nitrogen, potassium and other minerals back into its rhizomes.',
    },
    {
      type: 'paragraph',
      text: 'That delayed harvest gives a drier, lower-ash, lower-nitrogen feedstock that burns and converts better, and it leaves the nutrients in the field so that fertiliser requirement falls. The crop is also strongly ecotype-specific, and moving material between latitudes is the fastest way to lose a stand.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthesis', value: 'C4, warm-season' },
    {
      label: 'Harvest timing',
      value: 'After senescence, when nutrients have moved to the rhizomes',
    },
    {
      label: 'Two ecotypes',
      value: 'Lowland, taller and southern; upland, shorter and northern',
    },
    {
      label: 'Establishment',
      value: 'Slow, with seed dormancy; a stand may take two to three years',
    },
    {
      label: 'Stand life',
      value: 'Productive for a decade or more once established',
    },
  ],
  sections: [
    {
      id: 'senescence',
      heading: 'Cut after the plant has taken its nutrients back',
      body: [
        {
          type: 'paragraph',
          text: 'Harvesting after senescence, often after a killing frost or in the following late winter, gives material that is drier and much lower in nitrogen, potassium and ash. Those are exactly the properties a combustion or conversion buyer specifies, and they also mean the nutrients stay on the farm. A grower who cuts switchgrass green has produced a worse feedstock and exported their own fertility.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'ecotypes',
      heading: 'Ecotype must match latitude',
      body: [
        {
          type: 'paragraph',
          text: 'Lowland ecotypes are taller and higher-yielding and come from southern populations; upland ecotypes are shorter and adapted to northern conditions. Moving a southern ecotype north produces a stand that fails to harden and winterkills; moving a northern one south produces a stand that flowers early and yields poorly. Ecotype and origin latitude are the first selection decision, ahead of yield.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Slow to establish',
      body: [
        {
          type: 'paragraph',
          text: 'Seed carries dormancy and seedlings are small and weak competitors, so establishment takes one to three seasons and full yield arrives later still. Weed control in the establishment year determines whether a stand exists at all, and most switchgrass failures are establishment failures rather than production failures.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'longevity',
      heading: 'A decade or more from one planting',
      body: [
        {
          type: 'paragraph',
          text: 'Once established, a stand produces for a decade or longer with modest inputs, which spreads the establishment cost across many harvests. That profile suits marginal land held for a long term and suits a buyer who needs a predictable annual tonnage.',
        },
      ],
    },
    {
      id: 'c4',
      heading: 'C4 efficiency on poor ground',
      body: [
        {
          type: 'paragraph',
          text: 'As a C4 grass switchgrass uses water and nitrogen efficiently and produces substantial biomass on land that would not support a row crop, and it is deep-rooted enough to build soil carbon and to hold erodible ground. Those characteristics, not tonnage alone, are the reason it is favoured in conservation programmes.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'native',
      heading: 'A native prairie species',
      body: [
        {
          type: 'paragraph',
          text: 'Switchgrass is a component of North American tallgrass prairie and is planted for conservation, wildlife habitat and streambank stabilisation as much as for biomass. That dual role means large areas are established under conservation programmes rather than for a biomass market.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'A feedstock without a settled market',
      body: [
        {
          type: 'paragraph',
          text: "The crop's expansion has repeatedly tracked bioenergy policy rather than agronomy, and growers have established stands for conversion facilities that were not built. Because a stand takes years to establish and lasts a decade, a policy change strands the grower in a way an annual crop would not.",
        },
      ],
    },
    {
      id: 'baling',
      heading: 'Harvest as large bales',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is mown, field-dried and baled in large square or round bales, using standard hay equipment, which lowers the barrier to entry. Bale density and moisture at baling determine transport economics, and transport cost is usually what limits how far a stand can be from a conversion plant.',
        },
      ],
    },
    {
      id: 'not-forage',
      heading: 'Not a forage crop as managed',
      body: [
        {
          type: 'paragraph',
          text: 'Although switchgrass can be grazed and cut for hay when young, the management that produces good biomass produces poor forage, and vice versa. Yield and quality figures from forage trials do not describe a biomass stand and should not be read across.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'podzol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'flat-storage-warehouse' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'napier-grass' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'sorghum' },
  ],
  glossaryTerms: ['perennial-crop', 'forage'],
  geographicScope:
    'Native across most of North America east of the Rocky Mountains; grown for biomass in the United States and Canada and trialled in Europe and China.',
  climateContext:
    'Warm-season C4 perennial; ecotype adaptation to latitude, not climate zone alone, determines where a given seed source will persist.',
  limitations: [
    'Ecotype recommendations are regional and seed source matters more than cultivar name; no specific recommendations are given here.',
    'Yields depend heavily on establishment success and stand age and single-year figures are not representative.',
    'Bioenergy policy support differs by jurisdiction and changes independently of the crop.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and native distribution',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Switchgrass biomass and ecotype research',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Conservation planting guidance' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Biomass crop production guidance',
    },
    { sourceId: 'cabi', citedFor: 'Panicum virgatum compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Switchgrass',
    description:
      'Panicum virgatum as a crop: harvest after senescence for low ash and nitrogen, lowland and upland ecotypes by latitude, slow establishment and long stand life.',
    keywords: [
      'switchgrass',
      'Panicum virgatum',
      'biomass crop',
      'ecotype',
      'C4 grass',
    ],
  },
  structuredData: { article: true },
};
