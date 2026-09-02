import type { CropContent } from '@/types/content';

export const limaBean: CropContent = {
  id: 'crop-lima-bean',
  slug: 'lima-bean',
  contentType: 'crop',
  title: 'Lima Bean',
  scientificName: 'Phaseolus lunatus',
  alternativeNames: ['Butter bean', 'Sieva bean', 'Madagascar bean'],
  category: 'Pulse crop',
  subcategory: 'Annual or short-lived perennial grain legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Lima bean seed contains cyanogenic glucosides, and the concentration differs enough between types that commercial cultivars are specifically selected for low levels while wild and coloured landraces can be dangerous raw.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lima bean is a Phaseolus grown for both fresh and dry seed, in two distinct size classes that behave as separate crops. The large-seeded Lima types and the small-seeded Sieva types differ in adaptation, growth habit and market.',
    },
    {
      type: 'paragraph',
      text: 'It is also one of the few widely grown food legumes with a real toxicity consideration: the seed contains cyanogenic glucosides that release hydrogen cyanide, at concentrations that vary greatly between types. Commercial cultivars are selected for low levels; wild and dark-coloured landraces can carry much more.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    { label: 'Genus', value: 'Phaseolus, with common bean and runner bean' },
    {
      label: 'Two size classes',
      value: 'Large-seeded Lima types and small-seeded Sieva types',
    },
    {
      label: 'Toxicity',
      value: 'Cyanogenic glucosides in the seed, varying widely by type',
    },
    {
      label: 'Commercial selection',
      value: 'Cultivars specifically selected for low glucoside content',
    },
    {
      label: 'Habit',
      value:
        'Bush and pole types; some forms are short-lived perennials in the tropics',
    },
  ],
  sections: [
    {
      id: 'cyanogenic',
      heading: 'Cyanogenic glucosides',
      body: [
        {
          type: 'paragraph',
          text: 'Lima bean seed contains linamarin and related compounds that release hydrogen cyanide when the tissue is damaged. Concentration varies by type: commercial white-seeded cultivars are selected to be low, while wild forms and some dark-coloured landraces are much higher. Thorough boiling in an open vessel is the traditional preparation, and this is a real reason the crop is not eaten raw anywhere in its range.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'two-classes',
      heading: 'Two crops in one species',
      body: [
        {
          type: 'paragraph',
          text: 'Large-seeded Lima types are grown in cooler subtropical conditions and are the fresh and canned product familiar in North America, while small-seeded Sieva types are more heat-tolerant and dominate tropical production. Adaptation, disease resistance and market differ between them, and a variety recommendation for one class does not apply to the other.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'perennial',
      heading: 'Not reliably annual',
      body: [
        {
          type: 'paragraph',
          text: 'In frost-free conditions lima bean persists and crops for more than one season, and traditional tropical production uses it as a semi-perennial climber on supports around homesteads. Temperate production treats it as an annual, and the same species therefore appears in production statistics under two very different systems.',
        },
      ],
    },
    {
      id: 'heat',
      heading: 'Flowering and heat',
      body: [
        {
          type: 'paragraph',
          text: 'Pod set fails at high night temperature, and the crop drops flowers rather than setting under heat stress, which is the main cause of yield failure in hot seasons. Sowing dates are chosen so that flowering avoids the hottest part of the season rather than to maximise season length.',
        },
      ],
    },
    {
      id: 'fresh-dry',
      heading: 'Fresh and dry markets',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh green lima is harvested at a specific seed fill and moved cold, while dry lima is taken to maturity and handled as a pulse. The two require different cultivars, different harvest equipment and different post-harvest chains, and a grower commits to one at planting.',
        },
      ],
    },
    {
      id: 'phaseolus',
      heading: 'A Phaseolus with different diseases',
      body: [
        {
          type: 'paragraph',
          text: 'Lima bean is more resistant to some common bean diseases and more susceptible to others, notably downy mildew of lima bean, which does not affect common bean. Treating the two as interchangeable in a rotation or a spray programme misses that.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'nectaries',
      heading: 'Extrafloral nectaries',
      body: [
        {
          type: 'paragraph',
          text: 'Lima bean bears extrafloral nectaries that attract ants and other predatory insects, a defence association that has made the species a model in the study of indirect plant defence. In the field it means the crop supports a predator community that a grower can either conserve or destroy.',
        },
      ],
    },
    {
      id: 'pole',
      heading: 'Pole and bush habits',
      body: [
        {
          type: 'paragraph',
          text: 'Pole types climb and crop over a long period, suiting hand harvest and home production; bush types set concentrated and suit machine harvest. That difference determines whether the crop is a garden staple or a field crop in any given region.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names that overlap',
      body: [
        {
          type: 'paragraph',
          text: 'Butter bean, Madagascar bean and Sieva bean all refer to this species or to types within it, while butter bean is also used for other beans in some markets. Matching trade or recipe records for "butter bean" requires resolving the species first.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'mung-bean' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Grown across the Americas, West Africa, Madagascar and Southeast Asia. Large-seeded types dominate in the United States and Peru; small-seeded types across the tropics.',
  climateContext:
    'Warm-season legume; pod set fails under high night temperature and the crop is frost-sensitive.',
  limitations: [
    'Cyanogenic glucoside content varies by type and growing conditions; no threshold or preparation guidance is given here and food-safety questions belong to food authorities.',
    'Large-seeded and small-seeded classes differ enough that species-level statements describe neither precisely.',
    'Authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Phaseolus lunatus compendium data' },
    { sourceId: 'cgiar', citedFor: 'Phaseolus germplasm research' },
    { sourceId: 'fao', citedFor: 'Grain legume production context' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Lima Bean',
    description:
      'Phaseolus lunatus as a crop: cyanogenic glucosides varying by type, large- and small-seeded classes, heat failure at pod set and fresh versus dry markets.',
    keywords: [
      'lima bean',
      'butter bean',
      'Phaseolus lunatus',
      'cyanogenic glucosides',
      'Sieva bean',
    ],
  },
  structuredData: { article: true },
};
