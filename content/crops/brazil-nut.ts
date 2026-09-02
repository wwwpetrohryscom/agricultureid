import type { CropContent } from '@/types/content';

export const brazilNut: CropContent = {
  id: 'crop-brazil-nut',
  slug: 'brazil-nut',
  contentType: 'crop',
  title: 'Brazil Nut',
  scientificName: 'Bertholletia excelsa',
  alternativeNames: ['Para nut', 'Castanha-do-Pará'],
  category: 'Nut crop',
  subcategory: 'Wild-harvested Amazonian forest tree',
  botanicalFamily: 'Lecythidaceae (Brazil nut family)',
  lifecycle: 'Perennial',
  summary:
    'Brazil nut is the major internationally traded nut that has no plantations: repeated attempts to cultivate it have produced trees that grow but do not fruit, because the pollinator and its supporting forest cannot be planted with the tree.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every tree nut in world trade comes from orchards. Brazil nut does not. The crop is gathered from wild trees standing in intact Amazonian forest across Brazil, Bolivia and Peru, and the commercial trade in it is a forest-collection industry rather than an agricultural one.',
    },
    {
      type: 'paragraph',
      text: 'Plantation attempts in South America and in Southeast Asia have failed for a consistent reason: the flowers are pollinated by large-bodied bees that need an intact forest to complete their own life cycle, so trees planted in cleared ground grow well and set little or no fruit.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lecythidaceae' },
    {
      label: 'Production system',
      value: 'Wild harvest from standing forest, not plantation',
    },
    {
      label: 'Pollination',
      value: 'Large-bodied bees able to open the hooded flower',
    },
    {
      label: 'Fruit development',
      value: 'Reported at around fourteen months from flower to mature fruit',
    },
    {
      label: 'Seed dispersal',
      value: 'Agoutis, which gnaw open the fruit and cache the seeds',
    },
    { label: 'Producing countries', value: 'Brazil, Bolivia and Peru' },
  ],
  sections: [
    {
      id: 'no-plantation',
      heading: 'The crop that cannot be planted',
      body: [
        {
          type: 'paragraph',
          text: 'Plantation trials in South America and Southeast Asia have produced healthy trees that fail to fruit. The flower has a hooded structure that only strong, large-bodied bees can force open, and those bees depend on the wider forest, including particular orchids, for their own reproduction. Clearing land to plant the tree removes what makes the tree productive.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'agouti',
      heading: 'Dispersal by a rodent',
      body: [
        {
          type: 'paragraph',
          text: "The fruit is a hard woody capsule that almost nothing can open. Agoutis gnaw through it, eat some seeds and bury others, and the buried caches are what regenerate the species. The tree's entire reproductive cycle therefore runs through a pollinator and a disperser that a plantation cannot supply.",
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'fourteen-months',
      heading: 'A very long fruit development',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit take around fourteen months from flowering to maturity, so a tree carries two crops at different stages simultaneously. That timescale removes most of the management levers available in orchard crops and means a poor flowering shows up in trade more than a year later.',
        },
      ],
    },
    {
      id: 'collection',
      heading: 'Harvest from the forest floor',
      body: [
        {
          type: 'paragraph',
          text: 'Mature capsules fall from trees up to fifty metres tall, and collectors gather them from the ground, break them open and extract the seeds. Falling capsules weighing a kilogram or more are a genuine hazard and collection is avoided in high wind. Collection is seasonal, remote and organised through extractive communities and cooperatives.',
        },
      ],
    },
    {
      id: 'aflatoxin',
      heading: 'Aflatoxin is the trade constraint',
      body: [
        {
          type: 'paragraph',
          text: 'Nuts lying on a humid forest floor and moved slowly to processing are exposed to Aspergillus, and aflatoxin contamination has repeatedly triggered import restrictions and rejections in European and other markets. Speed from forest to drying, and sorting at the shell stage, are the controls, and they are the main quality investment in the chain.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'A commercial argument for standing forest',
      body: [
        {
          type: 'paragraph',
          text: 'Because the tree only produces in intact forest, the value of the harvest gives a direct economic reason to leave the forest standing, and Brazil nut concessions are used as a conservation instrument in all three producing countries. Very few crops link their own productivity to the preservation of the ecosystem around them.',
        },
      ],
    },
    {
      id: 'selenium',
      heading: 'Selenium in the seed',
      body: [
        {
          type: 'paragraph',
          text: 'Brazil nuts accumulate selenium from soil at concentrations far above other foods, and the amount varies enormously with where the tree grew. AgricultureID records this as a compositional characteristic of the crop that varies by origin; dietary questions belong to food and health authorities.',
        },
      ],
    },
    {
      id: 'protection',
      heading: 'Legal protection of the tree',
      body: [
        {
          type: 'paragraph',
          text: 'Cutting Brazil nut trees is restricted by law in Brazil and in the other producing countries, so the trees persist in cleared pasture as isolated survivors. Those isolated trees generally produce poorly, which demonstrates in the field what the plantation trials showed experimentally.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'supply',
      heading: 'A supply that cannot respond to price',
      body: [
        {
          type: 'paragraph',
          text: 'Because there is no planting decision, no cultivar and no orchard, the supply of Brazil nuts is fixed by the forest and by the season, and high prices cannot bring more production. Year-to-year output moves with rainfall and with collection labour, and that is the whole of the supply response.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cashew' },
    { type: 'crop', slug: 'macadamia' },
    { type: 'crop', slug: 'walnut' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Amazonian Brazil, Bolivia and Peru. Bolivia is the largest exporter of shelled nuts.',
  climateContext:
    'Humid tropical lowland rainforest; the crop depends on intact forest rather than on a manageable climate envelope.',
  limitations: [
    'Selenium concentration varies by soil and origin over a very wide range; no figures or dietary guidance are given here.',
    'Aflatoxin limits and import requirements are set by importing jurisdictions and are not reproduced here.',
    'Production statistics reflect collection and export rather than a measurable planted area.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Non-timber forest product context' },
    { sourceId: 'cabi', citedFor: 'Bertholletia excelsa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    {
      sourceId: 'br-mapa',
      citedFor: 'Brazilian extractive production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Brazil Nut',
    description:
      'Bertholletia excelsa as a crop: wild harvest instead of plantations, bee pollination requiring intact forest, agouti dispersal, aflatoxin and fixed supply.',
    keywords: [
      'Brazil nut',
      'Bertholletia excelsa',
      'wild harvest',
      'Amazon',
      'aflatoxin',
    ],
  },
  structuredData: { article: true },
};
