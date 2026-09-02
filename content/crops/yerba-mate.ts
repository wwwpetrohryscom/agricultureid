import type { CropContent } from '@/types/content';

export const yerbaMate: CropContent = {
  id: 'crop-yerba-mate',
  slug: 'yerba-mate',
  contentType: 'crop',
  title: 'Yerba Mate',
  scientificName: 'Ilex paraguariensis',
  alternativeNames: ['Mate', 'Erva-mate', "Ka'a"],
  category: 'Beverage crop',
  subcategory: 'Evergreen holly grown for leaf',
  botanicalFamily: 'Aquifoliaceae (holly family)',
  lifecycle: 'Perennial',
  summary:
    'Yerba mate leaf has to be flash-heated within about a day of cutting to stop it browning, so the first processing step sits in the field — and the finished product is then aged for months before it is sold.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yerba mate is a holly, grown for leaves and fine stems that are dried and steeped as a beverage across Argentina, Brazil, Paraguay and Uruguay. It is a major crop in that region and almost unknown as agriculture elsewhere.',
    },
    {
      type: 'paragraph',
      text: 'Its processing is unusual at both ends. Cut leaf begins to oxidise immediately and must be flash-heated over fire within roughly a day to arrest it, so the first processing step has to happen close to the field. The dried product is then aged for many months, sometimes years, before it reaches the market.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Aquifoliaceae (holly family)' },
    { label: 'Harvested part', value: 'Leaves and fine stems' },
    {
      label: 'First processing step',
      value: 'Flash heating over fire within about 24 hours of cutting',
    },
    { label: 'Ageing', value: 'Commonly nine months or more before sale' },
    {
      label: 'Sexual system',
      value: 'Dioecious; male and female plants are separate',
    },
    { label: 'Principal producers', value: 'Brazil, Argentina and Paraguay' },
  ],
  sections: [
    {
      id: 'sapecado',
      heading: 'Flash heating in the first day',
      body: [
        {
          type: 'paragraph',
          text: 'Cut mate leaf oxidises rapidly, losing colour and aroma, so the branches are passed briefly through flame — seconds to a few minutes — to denature the enzymes responsible. This has to happen within about a day of cutting, which places the first processing plant near the plantation and makes harvest logistics part of product quality rather than a separate concern.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'drying',
      heading: 'Drying after heating',
      body: [
        {
          type: 'paragraph',
          text: 'Flash heating is followed by a longer drying stage in hot air or over wood smoke, which takes the material down to a storable moisture and, where smoke is used, contributes a characteristic flavour. Smoke-dried and hot-air-dried mate are distinguishable products and different national markets prefer different ones.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'ageing',
      heading: 'Months of ageing',
      body: [
        {
          type: 'paragraph',
          text: 'Dried mate is stored and aged, commonly for nine months or more and in premium grades longer, during which the harshness declines and the flavour settles. Working capital tied up in ageing stock is a structural feature of the industry and one reason processing is concentrated in larger firms.',
        },
      ],
    },
    {
      id: 'pruning',
      heading: 'Harvest is a pruning operation',
      body: [
        {
          type: 'paragraph',
          text: "Trees are cut back hard on a cycle of one to two years, removing most of the year's growth, and the plant regrows from the pruned framework. Harvest severity determines both this year's yield and next year's, and over-cutting shortens the productive life of a plantation that should last decades.",
        },
      ],
    },
    {
      id: 'dioecious',
      heading: 'Separate sexes',
      body: [
        {
          type: 'paragraph',
          text: 'Ilex paraguariensis is dioecious, so a seed orchard needs both sexes and only female trees produce fruit. Since the crop is leaf rather than fruit, this matters for propagation and seed supply rather than for the harvest, and commercial plantings increasingly use selected clonal material.',
        },
      ],
    },
    {
      id: 'germination',
      heading: 'Difficult seed',
      body: [
        {
          type: 'paragraph',
          text: "Mate seed has a deep dormancy and germinates slowly and erratically, historically over many months, which made nursery production a bottleneck for the crop's expansion. Stratification and clonal propagation from cuttings are the standard responses.",
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Forest and plantation systems',
      body: [
        {
          type: 'paragraph',
          text: 'Traditional production harvests from native stands and shaded systems under remnant forest, while modern plantations grow the crop in full sun at high density. The two systems give different yields, different leaf composition and different landscape outcomes, and both operate side by side in the producing region.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'caffeine',
      heading: 'A caffeine-bearing crop',
      body: [
        {
          type: 'paragraph',
          text: 'Mate leaf contains caffeine and related methylxanthines, which is why the crop sits with coffee, tea and cocoa as a stimulant beverage crop despite belonging to a completely unrelated family. AgricultureID records the compound class as a characteristic of the leaf; consumption questions belong to food and health authorities.',
        },
      ],
    },
    {
      id: 'regional',
      heading: 'A regionally enormous, globally small crop',
      body: [
        {
          type: 'paragraph',
          text: 'Consumption is concentrated in Argentina, Uruguay, Paraguay, southern Brazil and Syria and Lebanon, the last two through historical migration. Production and trade statistics for the crop are dominated by that regional market, and global beverage data rarely captures it properly.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'ambient-warehouse-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tea' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Southern Brazil, north-eastern Argentina and Paraguay. Consumption is concentrated in the same region plus Uruguay, Syria and Lebanon.',
  climateContext:
    'Humid subtropical; requires high rainfall, tolerates light frost and is grown both under shade and in full sun.',
  limitations: [
    'Processing times and temperatures differ between operations and national traditions; the figures given are general ranges.',
    'Caffeine content varies with leaf age, system and processing and is not quantified here.',
    'Consumption and health questions are outside the scope of this page.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Ilex paraguariensis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'ar-agri',
      citedFor: 'Argentine yerba mate production context',
    },
    { sourceId: 'br-mapa', citedFor: 'Brazilian erva-mate production context' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Yerba Mate',
    description:
      'Ilex paraguariensis as a crop: flash heating within a day of cutting, drying and months of ageing, harvest as hard pruning and shade versus full-sun systems.',
    keywords: [
      'yerba mate',
      'Ilex paraguariensis',
      'erva-mate',
      'sapecado',
      'beverage crop',
    ],
  },
  structuredData: { article: true },
};
