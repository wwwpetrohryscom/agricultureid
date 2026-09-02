import type { CropContent } from '@/types/content';

export const bitterGourd: CropContent = {
  id: 'crop-bitter-gourd',
  slug: 'bitter-gourd',
  contentType: 'crop',
  title: 'Bitter Gourd',
  scientificName: 'Momordica charantia',
  alternativeNames: ['Bitter melon', 'Karela', 'Ampalaya'],
  category: 'Vegetable crop',
  subcategory: 'Trellised annual cucurbit',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Annual',
  summary:
    'Bitter gourd is grown for a fruit whose bitterness is the product rather than a defect, and every part of its management, from clipped seed to overhead trellis to picking every few days, follows from a fruit that must be sold immature.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every cucurbit has been selected away from bitterness, because the cucurbitacins that cause it are toxic in quantity. Bitter gourd is the exception: it is grown for a fruit that is deliberately, strongly bitter, and a mild one is a failure.',
    },
    {
      type: 'paragraph',
      text: 'It is a major vegetable across South and Southeast Asia and in the Caribbean, grown on trellises as a vigorous annual vine and picked green every few days over a long season, so labour rather than yield potential usually decides how large a planting can be.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    {
      label: 'Habit',
      value:
        'Vigorous annual climbing vine, trellised in commercial production',
    },
    { label: 'Harvested organ', value: 'Immature fruit, harvested green' },
    {
      label: 'Selected trait',
      value: 'Bitterness, which is the product rather than a defect',
    },
    {
      label: 'Pollination',
      value:
        'Monoecious and insect-pollinated; fruit set depends on pollinator activity',
    },
    {
      label: 'Seed',
      value: 'Hard-coated; commonly clipped and soaked before sowing',
    },
  ],
  sections: [
    {
      id: 'bitterness',
      heading: 'Bitterness is the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Selection in bitter gourd has run in the opposite direction from the rest of the family: cultivars are chosen and priced for bitterness, texture and colour, and consumers distinguish types by how sharp they are. A crop grown in conditions that reduce bitterness has lost its market rather than improved.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'Grown on a trellis',
      body: [
        {
          type: 'paragraph',
          text: 'The vine is vigorous and the fruit hangs, so commercial production uses overhead trellises that keep fruit straight, clean and reachable. Trellis construction is the largest establishment cost and the main reason the crop is grown on small intensive plots rather than field-scale.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvested immature, and often',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit is picked green and immature; left on the vine it turns orange, splits and is lost. That means picking every few days through a long season, and labour rather than yield is the constraint on how large a planting can be.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Monoecious and pollinator-dependent',
      body: [
        {
          type: 'paragraph',
          text: 'Male and female flowers are separate on the same plant and insect pollination is required, so fruit set depends on pollinator activity during flowering. Hand pollination is practised in protected cultivation and where pollinators are scarce, which is labour that field crops do not need.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed that will not start on its own',
      body: [
        {
          type: 'paragraph',
          text: 'The seed has a hard, thick coat and germinates slowly and unevenly if sown dry. Growers routinely clip or nick the seed coat and soak the seed before sowing, and raise transplants rather than direct-drilling, because a gappy stand under a trellis wastes the structure that has already been built.',
        },
      ],
    },
    {
      id: 'fruit-fly',
      heading: 'Fruit fly is the defining pest',
      body: [
        {
          type: 'paragraph',
          text: 'Tephritid fruit flies lay into developing fruit and are the principal cause of loss, and because the fruit is picked immature there is little tolerance for damage. Bagging individual fruit, protein bait sprays and sanitation of fallen fruit are the standard responses.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'virus',
      heading: 'Virus pressure',
      body: [
        {
          type: 'paragraph',
          text: 'Whitefly- and aphid-transmitted viruses are a major constraint in warm regions, and because the crop is picked repeatedly over a long season an infection early in the cycle costs the whole planting. Vector management and resistant material are the controls.',
        },
      ],
    },
    {
      id: 'types',
      heading: 'Types differ by region',
      body: [
        {
          type: 'paragraph',
          text: 'Indian types are typically narrow, spiny and dark; Chinese types are longer, paler and smoother; and the two are not substitutes in their markets. A grower selects to a market’s expected shape and colour as much as to yield.',
        },
      ],
    },
    {
      id: 'soil',
      heading: 'Soils and water',
      body: [
        {
          type: 'paragraph',
          text: 'The crop needs free-draining soil and consistent moisture through fruiting, and it is intolerant of waterlogging. On heavy ground it is grown on raised beds, which also keeps the base of the vine dry and reduces collar rots.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'pumpkin' },
    { type: 'crop', slug: 'zucchini' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'South and Southeast Asia, southern China, parts of Africa and the Caribbean. Type preferences are strongly regional.',
  climateContext:
    'Warm-season tropical and subtropical vine; requires consistent moisture and free drainage and is intolerant of waterlogging.',
  limitations: [
    'Non-food and traditional preparation uses of the species are outside the scope of an agronomic page and are not covered here.',
    'Bitterness intensity varies with cultivar, maturity and growing conditions and is not quantified.',
    'Authorised control products for fruit fly and virus vectors are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical vegetable production context' },
    { sourceId: 'icar', citedFor: 'Indian cucurbit agronomy and varieties' },
    { sourceId: 'cabi', citedFor: 'Momordica charantia compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Tropical vegetable research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Bitter Gourd',
    description:
      'Momordica charantia as a crop: bitterness as the selected trait, hard-coated seed, trellis systems, immature harvest and fruit fly pressure.',
    keywords: [
      'bitter gourd',
      'bitter melon',
      'Momordica charantia',
      'karela',
      'trellised cucurbit',
    ],
  },
  structuredData: { article: true },
};
