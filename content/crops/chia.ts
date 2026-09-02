import type { CropContent } from '@/types/content';

export const chia: CropContent = {
  id: 'crop-chia',
  slug: 'chia',
  contentType: 'crop',
  title: 'Chia',
  scientificName: 'Salvia hispanica',
  alternativeNames: ['Chia seed', 'Salba'],
  category: 'Oilseed crop',
  subcategory: 'Annual short-day seed crop',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Annual',
  summary:
    "Chia flowers only when day length falls below roughly twelve hours, which for decades confined commercial seed production to tropical and subtropical latitudes and made the crop's geography a photoperiod problem rather than a climate one.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Chia is a mint-family annual grown for a small seed that swells into a gel in water. Its agronomy is dominated by one trait: it is a short-day plant with a flowering threshold reported near 11.8 to 12 hours of daylight.',
    },
    {
      type: 'paragraph',
      text: "That threshold is why chia planted at higher latitudes grows vigorously all season and then flowers too late to fill seed before frost. Until photoperiod-insensitive material appeared, the crop's commercial range was set by daylength rather than by heat, water or soil.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    {
      label: 'Flowering trigger',
      value: 'Short day; threshold reported near 11.8 to 12 hours',
    },
    {
      label: 'Consequence',
      value:
        'Traditional cultivars flower too late to fill seed at high latitudes',
    },
    {
      label: 'Reported yield contrast',
      value:
        'Roughly an order of magnitude lower in European trials than in areas of origin',
    },
    {
      label: 'Breeding response',
      value: 'Early-flowering and long-day types developed to extend the range',
    },
    {
      label: 'Seed property',
      value: 'Mucilage that forms a gel on contact with water',
    },
  ],
  sections: [
    {
      id: 'photoperiod',
      heading: 'A daylength threshold, not a temperature one',
      body: [
        {
          type: 'paragraph',
          text: 'Chia initiates flowering as daylength falls below a threshold reported at roughly 11.8 to 12 hours. Above that, plants continue vegetative growth regardless of how warm or well-watered they are. This is why a chia crop at a temperate latitude can look excellent in August and yield almost nothing: it has not been told to flower.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'latitude',
      heading: 'What the threshold does to yield',
      body: [
        {
          type: 'paragraph',
          text: 'Seed yields reported for commercial varieties in areas of origin are roughly an order of magnitude above what trials at European latitudes have recorded, and the gap is attributed to photoperiod rather than to agronomy. The plant flowers so late that low temperature and early frost destroy the crop before seed fills.',
        },
      ],
    },
    {
      id: 'dark-period',
      heading: 'An uninterrupted dark period',
      body: [
        {
          type: 'paragraph',
          text: 'Flower initiation in chia requires a continuous dark period, and brief artificial light at night is reported to disrupt it. That makes stray light a real consideration for trial sites and for production near lit infrastructure, which is unusual among field crops.',
        },
      ],
    },
    {
      id: 'breeding',
      heading: 'Breaking the threshold',
      body: [
        {
          type: 'paragraph',
          text: 'Early-flowering and photoperiod-insensitive accessions and mutants have been developed specifically to move the crop northward, and modelling of the resulting range expansion has been published for the United States. The relevant question for a grower at a given latitude is therefore which material they have, not whether chia grows there.',
        },
      ],
    },
    {
      id: 'mucilage',
      heading: 'The mucilage is the product',
      body: [
        {
          type: 'paragraph',
          text: 'The seed coat releases a soluble mucilage that hydrates into a gel, and that property rather than the oil is what most buyers are purchasing. It also means the seed must be kept dry through harvest and storage, because moisture on the seed surface begins the reaction that the buyer wants to happen in a bowl.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Indeterminate flowering and shattering',
      body: [
        {
          type: 'paragraph',
          text: 'Chia flowers over an extended period and matures unevenly, so seed at the base of a spike is shed while seed at the tip is still filling. Harvest timing is a compromise between shatter loss and immature seed, and it is the main yield leak in commercial production.',
        },
      ],
    },
    {
      id: 'escape',
      heading: 'A crop that can naturalise',
      body: [
        {
          type: 'paragraph',
          text: 'Chia has been assessed as a potential invasive species in some regions, because seed shed at harvest germinates readily and the plant establishes outside cultivation. Where it is newly introduced this is a siting consideration and not merely a rotation question.',
        },
      ],
    },
    {
      id: 'seed-size',
      heading: 'Very small seed and a fine seedbed',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is tiny and sown shallow, which demands a fine, firm, level seedbed and reliable moisture at the surface for emergence. Establishment failures in chia are usually seedbed failures rather than seed failures.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'mint-family',
      heading: 'A mint, not an oilseed in the usual sense',
      body: [
        {
          type: 'paragraph',
          text: 'Chia sits in the Lamiaceae with basil, mint and perilla rather than among the composite or brassica oilseeds, and its pest and disease profile follows the mint family rather than the oilseed rotation. It is not a rotational substitute for sunflower or canola in any pathogen sense.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sesame' },
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'basil' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Mexico, Central and South America, and Australia. Higher-latitude production depends on photoperiod-insensitive material.',
  climateContext:
    'Warm-season frost-sensitive annual whose range is set by daylength at flowering rather than by heat or rainfall.',
  limitations: [
    'Reported photoperiod thresholds and yields come from trial literature and differ between accessions; they are not a specification for any particular cultivar.',
    'Naturalisation risk assessments are region-specific and are not reproduced here.',
    'Food composition and dietary properties of the seed are outside the scope of this page.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Underutilised crop production context' },
    {
      sourceId: 'cabi',
      citedFor: 'Salvia hispanica compendium data and naturalisation status',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Underutilised species research' },
    { sourceId: 'cl-minagri', citedFor: 'Chilean chia agronomy trials' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Chia',
    description:
      'Salvia hispanica as a crop: the twelve-hour daylength flowering threshold that sets its geography, yield gap by latitude, mucilage and shattering losses.',
    keywords: [
      'chia',
      'Salvia hispanica',
      'short-day flowering',
      'photoperiod',
      'chia seed production',
    ],
  },
  structuredData: { article: true },
};
