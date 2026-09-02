import type { CropContent } from '@/types/content';

export const wingedBean: CropContent = {
  id: 'crop-winged-bean',
  slug: 'winged-bean',
  contentType: 'crop',
  title: 'Winged Bean',
  scientificName: 'Psophocarpus tetragonolobus',
  alternativeNames: ['Goa bean', 'Four-angled bean', 'Asparagus pea'],
  category: 'Pulse crop',
  subcategory: 'Perennial climbing legume grown as an annual',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Winged bean is the rare crop where pod, seed, leaf, flower and tuberous root are all harvested and eaten, and its tuber carries a protein content far above that of other root crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Winged bean is a vigorous tropical climbing legume named for the four frilled ridges that run the length of its pod. It is grown mainly for those pods, picked young as a vegetable.',
    },
    {
      type: 'paragraph',
      text: 'What sets it apart is that every organ is used. Immature pods, mature seed, young leaves, flowers and a starchy tuberous root are all eaten, and the root is notable for a protein content well above that of cassava, sweet potato or yam. A single planting therefore produces a vegetable, a pulse, a green and a root crop.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Harvested organs',
      value: 'Immature pod, mature seed, leaf, flower and tuberous root',
    },
    {
      label: 'Distinctive trait',
      value: 'Tuber protein content far above that of other root crops',
    },
    {
      label: 'Habit',
      value: 'Vigorous perennial climber, usually grown as a trellised annual',
    },
    {
      label: 'Flowering',
      value: 'Short-day in most types, which limits it outside the tropics',
    },
    {
      label: 'Nitrogen fixation',
      value: 'Nodulates heavily, including with cowpea-group rhizobia',
    },
  ],
  sections: [
    {
      id: 'every-part',
      heading: 'A crop with no discarded organ',
      body: [
        {
          type: 'paragraph',
          text: 'Pods are picked young as a vegetable, seed is dried and used as a pulse, leaves and flowers are eaten as greens, and the root is dug as a starchy tuber. Very few crops are harvested this comprehensively, and it is the reason winged bean recurs in food-security research as a candidate for smallholder systems.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'tuber',
      heading: 'A high-protein tuber',
      body: [
        {
          type: 'paragraph',
          text: 'The tuberous root carries a protein content substantially higher than cassava, sweet potato, taro or yam, which is unusual because root crops are typically energy sources with little protein. Harvesting the root ends the planting, so it competes with pod production rather than adding to it.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'short-day',
      heading: 'Photoperiod limits its range',
      body: [
        {
          type: 'paragraph',
          text: 'Most types flower only under short days, so plants grown at higher latitudes produce abundant vine and few pods. This is the main reason a crop repeatedly identified as promising has not spread far outside tropical latitudes, and photoperiod-insensitive material is the stated breeding priority.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'Trellised and vigorous',
      body: [
        {
          type: 'paragraph',
          text: 'The vine climbs several metres and needs a strong support, and pods hang free where they can be seen and picked. Trellis cost and the labour of repeated picking are the practical limits on planting size, as with most trellised tropical vegetables.',
        },
      ],
    },
    {
      id: 'picking',
      heading: 'Picked young, and often',
      body: [
        {
          type: 'paragraph',
          text: 'Pods become fibrous quickly, so they are picked young and every few days across a long season. A pod left to fill is a seed crop rather than a vegetable, and a grower chooses one or the other for a given planting rather than getting both from the same pods.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Heavy nodulation',
      body: [
        {
          type: 'paragraph',
          text: 'The crop nodulates strongly and fixes nitrogen well, and it associates with the broad cowpea rhizobia group, so it often nodulates without inoculation in soils where tropical legumes have grown. It leaves useful residual nitrogen, which is part of its value in mixed systems.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed-processing',
      heading: 'Seed needs processing',
      body: [
        {
          type: 'paragraph',
          text: 'Mature seed contains trypsin inhibitors and other antinutritional factors and requires thorough cooking, as most grain legumes do. Its oil and protein content are high for a pulse, which is why it has been examined as an oilseed as well as a vegetable.',
        },
      ],
    },
    {
      id: 'underused',
      heading: 'Repeatedly promoted, rarely adopted',
      body: [
        {
          type: 'paragraph',
          text: 'Winged bean has been highlighted as an underused crop by international bodies for decades without large-scale adoption, and the reasons are photoperiod sensitivity, trellis cost, high picking labour and the absence of improved cultivars. Naming the obstacles is more useful than repeating the promise.',
        },
      ],
    },
    {
      id: 'regions',
      heading: 'Where it is actually grown',
      body: [
        {
          type: 'paragraph',
          text: 'Production is concentrated in Papua New Guinea, Indonesia, Myanmar, Thailand, the Philippines and parts of South Asia and West Africa, largely in home gardens and small plots rather than as a field crop. Statistics for it are correspondingly thin.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'lablab' },
    { type: 'crop', slug: 'common-bean' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'Papua New Guinea, Indonesia, Myanmar, Thailand, the Philippines, South Asia and parts of West Africa, mainly in home gardens and small plots.',
  climateContext:
    'Humid tropical; short-day flowering in most types and intolerant of frost.',
  limitations: [
    'Comparative protein statements for the tuber are drawn from published analyses and vary with type and growing conditions; no figures are given here.',
    'Production statistics are incomplete because most of the crop is grown in home gardens.',
    'Photoperiod response differs between accessions and determines whether the crop will pod at a given latitude.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Underutilised crop assessment' },
    {
      sourceId: 'cabi',
      citedFor: 'Psophocarpus tetragonolobus compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Underutilised legume research' },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Underexploited tropical plants assessment',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Winged Bean',
    description:
      'Psophocarpus tetragonolobus as a crop: pod, seed, leaf, flower and tuber all harvested, a high-protein root and short-day flowering.',
    keywords: [
      'winged bean',
      'Psophocarpus tetragonolobus',
      'goa bean',
      'tuberous legume',
      'underutilised crop',
    ],
  },
  structuredData: { article: true },
};
