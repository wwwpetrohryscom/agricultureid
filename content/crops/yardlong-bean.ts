import type { CropContent } from '@/types/content';

export const yardlongBean: CropContent = {
  id: 'crop-yardlong-bean',
  slug: 'yardlong-bean',
  contentType: 'crop',
  title: 'Yardlong Bean',
  scientificName: 'Vigna unguiculata subsp. sesquipedalis',
  alternativeNames: ['Asparagus bean', 'Long bean', 'Snake bean'],
  category: 'Vegetable crop',
  subcategory: 'Trellised vegetable cowpea',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Yardlong bean is cowpea grown for a pod that reaches half a metre or more, picked immature every day or two — a vegetable subspecies of a grain legume, and the two are managed as different crops entirely.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yardlong bean is a subspecies of cowpea, Vigna unguiculata subsp. sesquipedalis, selected for very long immature pods eaten as a vegetable. Pods commonly reach forty centimetres and more, and the crop is grown on trellises across Southeast and East Asia.',
    },
    {
      type: 'paragraph',
      text: 'Nothing about how it is grown resembles grain cowpea. It is trellised rather than field-sown, picked every day or two rather than harvested once, sold fresh rather than dried, and it needs the humid heat that grain cowpea is grown to avoid.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Taxonomic rank',
      value: 'A subspecies of Vigna unguiculata, the cowpea',
    },
    {
      label: 'Harvested organ',
      value: 'Immature pod, commonly 40 centimetres or longer',
    },
    {
      label: 'Harvest frequency',
      value: 'Every one to two days over a long season',
    },
    {
      label: 'System',
      value: 'Trellised, in vegetable rather than field-crop production',
    },
    { label: 'Region', value: 'Southeast and East Asia principally' },
  ],
  sections: [
    {
      id: 'subspecies',
      heading: 'A vegetable subspecies of a grain legume',
      body: [
        {
          type: 'paragraph',
          text: 'Grain cowpea and yardlong bean are the same species, and treating them as one crop produces nonsense in every practical dimension: sowing rate, trellis, picking interval, market and shelf life all differ. This page describes the vegetable subspecies; statements about cowpea as a grain legume do not transfer to it, and the reverse is equally untrue.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pod-length',
      heading: 'Length is the market trait',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers specify pod length, straightness and colour, and a pod that is short, curled or beginning to fill seed grades down. Because the pod continues to elongate and then to fill, the picking interval is what determines grade — a day late is a different product.',
        },
      ],
    },
    {
      id: 'picking',
      heading: 'Picked every day or two',
      body: [
        {
          type: 'paragraph',
          text: 'A trellised planting is picked continuously over months, and labour rather than yield potential determines how large a planting can be. This is the same constraint that governs bitter gourd and other trellised Asian vegetables, and it is why these crops are grown intensively on small areas.',
        },
      ],
    },
    {
      id: 'heat',
      heading: 'Grown in the heat and the wet',
      body: [
        {
          type: 'paragraph',
          text: 'The crop performs in the humid heat of the tropical wet season, when temperate vegetables fail, and it is one of the reliable vegetable crops of that period. That seasonal role, rather than its absolute yield, is what gives it its place in Asian vegetable systems.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'A legume in a vegetable rotation',
      body: [
        {
          type: 'paragraph',
          text: 'As a cowpea it nodulates and fixes nitrogen, so it leaves residual fertility in vegetable beds that mostly carry heavy feeders. That is a genuine rotational benefit and is one of the reasons it is grown between crops of leafy vegetables and solanaceous fruit.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pod borers set the spray decision',
      body: [
        {
          type: 'paragraph',
          text: 'Pod borers and bean flies attack the pods directly, and because the crop is picked every day or two the pre-harvest interval for any product is the binding constraint. That pushes management towards resistant material, netting, sanitation and biological options rather than towards products.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'Trellising',
      body: [
        {
          type: 'paragraph',
          text: 'The vine climbs two to three metres and needs a strong trellis, which is the main establishment cost and the reason plantings are small and intensively managed. Pods hanging clear of the canopy are straighter, cleaner and faster to pick, so the structure pays for itself in grade as well as in yield.',
        },
      ],
    },
    {
      id: 'shelf-life',
      heading: 'A short shelf life',
      body: [
        {
          type: 'paragraph',
          text: 'Immature pods lose water quickly and become limp and fibrous within a day or two, so the crop moves through short local chains or under refrigeration. It is a market-garden crop by construction.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names and confusion',
      body: [
        {
          type: 'paragraph',
          text: 'Asparagus bean, long bean, snake bean and Chinese long bean all name this crop, and "snake bean" is also applied to other species. Because the taxon is a subspecies, records keyed to Vigna unguiculata alone cannot distinguish it from grain cowpea.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'bitter-gourd' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Southeast and East Asia principally — China, Thailand, Vietnam, Indonesia, the Philippines — and grown for Asian markets elsewhere.',
  climateContext:
    'Humid tropical and subtropical; productive in wet-season heat and intolerant of cold.',
  limitations: [
    'This page describes the vegetable subspecies; grain cowpea is managed as a different crop and figures do not transfer between them.',
    'Grade standards for pod length and appearance are market-specific and are not reproduced here.',
    'Authorised control products and pre-harvest intervals are jurisdictional.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'Vigna germplasm and vegetable legume research',
    },
    { sourceId: 'fao', citedFor: 'Tropical vegetable production context' },
    {
      sourceId: 'cabi',
      citedFor: 'Vigna unguiculata subspecies compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cn-mara', citedFor: 'Chinese vegetable production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Yardlong Bean',
    description:
      'Vigna unguiculata subsp. sesquipedalis as a crop: a vegetable subspecies of cowpea, half-metre pods picked every day or two, trellising and wet-season heat.',
    keywords: [
      'yardlong bean',
      'asparagus bean',
      'Vigna unguiculata sesquipedalis',
      'long bean',
      'trellised vegetable',
    ],
  },
  structuredData: { article: true },
};
