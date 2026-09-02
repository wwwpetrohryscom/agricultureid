import type { CropContent } from '@/types/content';

export const riceBean: CropContent = {
  id: 'crop-rice-bean',
  slug: 'rice-bean',
  contentType: 'crop',
  title: 'Rice Bean',
  scientificName: 'Vigna umbellata',
  alternativeNames: ['Red bean', 'Climbing mountain bean'],
  category: 'Pulse crop',
  subcategory: 'Warm-season grain legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Rice bean is the Asian Vigna grown where the rains are heaviest: it tolerates the wet, acid soils of monsoon hill agriculture that make mung bean and black gram fail, and it is usually intercropped rather than sown alone.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice bean is a warm-season grain legume of South and Southeast Asia, grown mainly in the hill agriculture of Nepal, north-east India, Myanmar, southern China and Indonesia. It is closely related to mung bean, black gram and adzuki bean and is grown in conditions none of them tolerate.',
    },
    {
      type: 'paragraph',
      text: 'It handles heavy monsoon rainfall, humid conditions and acid soils better than the other Asian Vigna pulses, and it is generally grown as an intercrop — with maize, in upland rice fields, on terrace risers — rather than as a sole crop. Its production is therefore hard to see in statistics that count sole-cropped area.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    { label: 'Genus', value: 'Vigna, with mung bean, black gram and adzuki' },
    {
      label: 'Adaptation',
      value: 'Wet, humid, acid conditions of monsoon hill agriculture',
    },
    {
      label: 'Cropping pattern',
      value: 'Predominantly intercropped rather than sole-cropped',
    },
    { label: 'Uses', value: 'Grain, fodder, green manure and cover' },
    {
      label: 'Status',
      value: 'Widely described as an underused pulse with thin formal breeding',
    },
  ],
  sections: [
    {
      id: 'wet',
      heading: 'A pulse for a wet season',
      body: [
        {
          type: 'paragraph',
          text: 'Most grain legumes fail in the humid, heavily rained hill agriculture of the eastern Himalaya and mainland Southeast Asia, because root disease and poor pod set follow the water. Rice bean holds on, which is why it appears where the other Asian Vigna pulses do not, and it is that tolerance rather than yield that keeps it in the system.',
        },
      ],
    },
    {
      id: 'intercrop',
      heading: 'Grown between other crops',
      body: [
        {
          type: 'paragraph',
          text: 'Rice bean is planted with maize, on the bunds of rice terraces and along field margins as often as it is sown in its own field. That has two consequences: national statistics understate it badly, and agronomic recommendations built for sole crops rarely describe how it is actually grown.',
        },
      ],
    },
    {
      id: 'fodder',
      heading: 'A dual-purpose crop',
      body: [
        {
          type: 'paragraph',
          text: 'The haulm is valued fodder and the crop is also cut green, so a planting can end as grain, as feed or as green manure depending on the season. In smallholder hill systems that flexibility is worth a great deal and is invisible in grain yield figures.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'vigna',
      heading: 'Within the Asian Vigna group',
      body: [
        {
          type: 'paragraph',
          text: 'It shares the genus with mung bean, black gram, adzuki and moth bean, and with them a set of pests, viruses and soil-borne diseases, so it gives no rotational break from them. Its distinctiveness is environmental: it occupies the wet end of a group otherwise adapted to dry conditions.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'hard-seed',
      heading: 'Hard seed and long cooking',
      body: [
        {
          type: 'paragraph',
          text: 'A substantial share of seed is hard-coated, which slows both field emergence and cooking. This is the same constraint that limits horse gram and several other minor pulses, and it is a stated breeding target where any breeding is done.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Indeterminate and shattering',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering and podding run over a long period and dry pods shatter, so harvest is a compromise and much of the crop is picked by hand in stages. The habit suits an intercrop, where progressive picking is practical, and suits a sole crop poorly.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Photoperiod sensitivity',
      body: [
        {
          type: 'paragraph',
          text: 'Many landraces are short-day and flower late when moved to higher latitudes, which is a barrier to using the crop outside its range and a stated obstacle in evaluation trials. Material has to be matched to latitude before any yield comparison means anything.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'genetic-resource',
      heading: 'A relative worth keeping',
      body: [
        {
          type: 'paragraph',
          text: 'Rice bean is used as a genetic resource for the more widely grown Asian Vigna crops, particularly for tolerance of wet conditions and for disease resistance. Part of the case for its germplasm collections rests on that rather than on its own area.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names that mislead',
      body: [
        {
          type: 'paragraph',
          text: '"Rice bean" reflects its use alongside rice rather than any relationship to it, and "red bean" collides with adzuki and with common bean in several markets. Records under either English name need resolving before they can be matched.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mung-bean' },
    { type: 'crop', slug: 'black-gram' },
    { type: 'crop', slug: 'adzuki-bean' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cover-crop'],
  geographicScope:
    'Nepal, north-east India, Bhutan, Myanmar, southern China, Thailand, Laos, Vietnam and Indonesia, mainly in hill agriculture.',
  climateContext:
    'Warm, humid monsoon conditions; tolerant of heavy rainfall and acid soils and often short-day in flowering.',
  limitations: [
    'Production statistics understate the crop because most of it is intercropped rather than sole-cropped.',
    'Photoperiod response differs between landraces and governs whether material performs outside its home latitude.',
    'Formal varietal recommendations are regional and thin.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'Vigna germplasm and underused legume research',
    },
    { sourceId: 'icar', citedFor: 'Indian hill agriculture pulse agronomy' },
    { sourceId: 'cabi', citedFor: 'Vigna umbellata compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Grain legume production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Rice Bean',
    description:
      'Vigna umbellata as a crop: a pulse for wet acid monsoon hill agriculture, grown intercropped, dual-purpose grain and fodder, and hard seed.',
    keywords: [
      'rice bean',
      'Vigna umbellata',
      'underused pulse',
      'hill agriculture',
      'intercrop',
    ],
  },
  structuredData: { article: true },
};
