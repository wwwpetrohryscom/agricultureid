import type { CropContent } from '@/types/content';

export const mothBean: CropContent = {
  id: 'crop-moth-bean',
  slug: 'moth-bean',
  contentType: 'crop',
  title: 'Moth Bean',
  scientificName: 'Vigna aconitifolia',
  alternativeNames: ['Mat bean', 'Matki', 'Turkish gram'],
  category: 'Pulse crop',
  subcategory: 'Arid-zone grain legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Moth bean is the most drought-hardy and heat-tolerant of the Asian Vigna pulses, and it protects its own root zone: a dense mat of low foliage that shades the soil, holds moisture and reduces erosion.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moth bean is grown across the arid and semi-arid north-west of India, principally in Rajasthan, and in adjacent parts of Pakistan. Among the Asian Vigna pulses it is the one that holds on in the hottest, driest conditions.',
    },
    {
      type: 'paragraph',
      text: 'Two traits do the work. A deep, fast-penetrating taproot reaches moisture other pulses cannot, and a dense, low, mat-like canopy shades the soil surface, keeping it moister and cooler and reducing erosion on the sandy soils it is grown on. The crop protects the conditions it depends on.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Position among Asian Vigna',
      value: 'The most drought-hardy and heat-tolerant of the group',
    },
    { label: 'Root system', value: 'Deep and fast-penetrating taproot' },
    {
      label: 'Canopy',
      value: 'Dense, low, mat-forming; shades and cools the soil surface',
    },
    {
      label: 'Principal region',
      value: 'Rajasthan and the arid north-west of the Indian subcontinent',
    },
    { label: 'Uses', value: 'Pulse, sprouted grain, fodder and soil cover' },
  ],
  sections: [
    {
      id: 'drought',
      heading: 'Drought hardiness in a Vigna',
      body: [
        {
          type: 'paragraph',
          text: 'Moth bean is described in the pulse literature as the most drought-hardy and heat-tolerant of the Asian Vigna species, producing at temperatures around 40 degrees where mung bean and black gram fail. That places it at the arid margin of pulse cultivation, and it is grown where the alternative is bare ground.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'mat',
      heading: 'A canopy that manages its own soil',
      body: [
        {
          type: 'paragraph',
          text: 'The plant spreads into a dense low mat rather than standing upright, and that mat shades the soil, keeps it moist, lowers its temperature and reduces wind erosion on sandy ground. The crop is therefore used deliberately as a soil cover in the Thar margins, a role separate from its grain.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'rajasthan',
      heading: 'A crop of one region',
      body: [
        {
          type: 'paragraph',
          text: "Cultivation is heavily concentrated in Rajasthan and adjacent arid districts, which means national production tracks the rainfall of a single region. Recorded yields are low, and they reflect the environment the crop occupies rather than the plant's response to good conditions.",
        },
      ],
    },
    {
      id: 'sprouts',
      heading: 'Grain, sprouts and fodder',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is eaten as a pulse and widely as sprouted matki, and the haulm is valued fodder in a region where fodder is scarce through the dry season. The fodder value is a substantial part of why the crop is grown and is invisible in grain production statistics.',
        },
      ],
    },
    {
      id: 'orphan',
      heading: 'An orphan legume',
      body: [
        {
          type: 'paragraph',
          text: 'Moth bean is repeatedly described in the literature as an orphan pulse: agriculturally significant in its region, thinly researched, with breeding based mainly on selection within landraces and only recent molecular work. That status is a fact about research investment rather than about the crop.',
        },
      ],
    },
    {
      id: 'vigna',
      heading: 'Within the Vigna group',
      body: [
        {
          type: 'paragraph',
          text: 'It shares the genus with cowpea, mung bean, black gram, adzuki and rice bean, and with them a set of pests and soil-borne diseases, so it does not break a Vigna rotation. Its distinctiveness is environmental rather than taxonomic.',
        },
      ],
    },
    {
      id: 'indeterminate',
      heading: 'Indeterminate and uneven',
      body: [
        {
          type: 'paragraph',
          text: 'The plant flowers and pods over an extended period and matures unevenly, so harvest is a compromise and much of the crop is pulled by hand rather than cut. Shattering of dry pods adds to the loss, as it does in most arid-zone pulses.',
        },
      ],
    },
    {
      id: 'yellow-mosaic',
      heading: 'Virus',
      body: [
        {
          type: 'paragraph',
          text: 'Yellow mosaic disease, transmitted by whitefly, affects the Asian Vigna group including moth bean, and it is the disease most often limiting where irrigation extends the season. In the driest rainfed cultivation, vector pressure is lower and the crop is comparatively clean.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names to keep apart',
      body: [
        {
          type: 'paragraph',
          text: 'Matki, moth, mat bean and Turkish gram all refer to this crop. "Moth" is a transliteration and not the English word for the insect, and the crop is unrelated to Turkey. Records naming it in English are frequently mis-parsed for exactly that reason.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'charcoal-rot' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mung-bean' },
    { type: 'crop', slug: 'black-gram' },
    { type: 'crop', slug: 'cowpea' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop'],
  geographicScope:
    'Rajasthan and the arid north-west of India, and adjacent parts of Pakistan. Small areas elsewhere in South Asia and the United States.',
  climateContext:
    'Arid and semi-arid; heat- and drought-hardy, grown rainfed in a short monsoon window.',
  limitations: [
    'Drought and heat tolerance are relative to other Asian Vigna pulses and are not given as thresholds.',
    "Production is concentrated in one region, so national figures track that region's rainfall rather than the crop's potential.",
    'Formal varietal recommendations are regional and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Indian arid-zone pulse agronomy' },
    { sourceId: 'cgiar', citedFor: 'Vigna germplasm research' },
    { sourceId: 'cabi', citedFor: 'Vigna aconitifolia compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Grain legume production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Moth Bean',
    description:
      'Vigna aconitifolia as a crop: the most drought- and heat-hardy Asian Vigna, a mat canopy that cools its own soil, fodder value and orphan-crop research status.',
    keywords: [
      'moth bean',
      'Vigna aconitifolia',
      'matki',
      'arid pulse',
      'Rajasthan',
    ],
  },
  structuredData: { article: true },
};
