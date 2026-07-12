import type { CropContent } from '@/types/content';

export const pumpkin: CropContent = {
  id: 'crop-pumpkin',
  slug: 'pumpkin',
  contentType: 'crop',
  title: 'Pumpkin',
  scientificName:
    'Cucurbita pepo, Cucurbita maxima, and Cucurbita moschata (species cultivated as pumpkin vary by region and type)',
  alternativeNames: ['Winter squash'],
  category: 'Vegetable crop',
  subcategory: 'Cucurbit (vine) vegetable',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Annual',
  summary:
    'Pumpkin is a warm-season vining crop grown for its large, hard-rinded fruit, harvested mature and valued for both food use and long storage life compared with summer squash types.',
  introduction: [
    {
      type: 'paragraph',
      text: '"Pumpkin" is a common name applied to certain cultivated types within several species of Cucurbita, harvested at full maturity when the rind has hardened, distinguishing them from summer squash types of the same genus that are picked immature.',
    },
    {
      type: 'paragraph',
      text: 'The hardened rind and mature seed of pumpkin support substantially longer storage than summer squash, and the crop is grown both for direct food use and, in many markets, for seasonal decorative and cultural uses.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    { label: 'Life cycle', value: 'Annual' },
    {
      label: 'Main species',
      value: 'Cucurbita pepo, Cucurbita maxima, Cucurbita moschata',
    },
    {
      label: 'Primary uses',
      value:
        'Fresh and processed food; seed oil and snacks; decorative and cultural use',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive with a relatively long time to maturity',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams',
      note: 'Sprawling vines and large fruit benefit from ample space and consistent moisture.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin is grown as a warm-season annual on typically sprawling vines, though some bush-type cultivars exist, producing large fruit that are harvested once fully mature and the rind has hardened sufficiently for storage and handling.',
        },
        {
          type: 'paragraph',
          text: 'Because several distinct Cucurbita species are marketed as "pumpkin" depending on region and fruit type, cultivar and species selection is an important early decision matched to local climate and intended use.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Cucurbitaceae (gourd family)' },
            {
              term: 'Principal species',
              description:
                'Cucurbita pepo, Cucurbita maxima, and Cucurbita moschata, depending on regional pumpkin type',
            },
            {
              term: 'Growth habit',
              description:
                'Vining or, in some cultivars, bush-type annual bearing large fruit with a hard mature rind',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Cucurbita species grown as pumpkin were domesticated in the Americas, among the earliest crops cultivated there, with different species domesticated in different regions before spreading globally following European contact.',
        },
        {
          type: 'paragraph',
          text: 'Pumpkin is now grown widely across temperate and warm regions worldwide; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin requires warm soil and air temperatures for germination and growth and is sensitive to frost, with a comparatively long period from sowing to full fruit maturity relative to summer squash types.',
        },
        {
          type: 'paragraph',
          text: 'Field planting is timed to allow the crop to reach maturity before the first autumn frost in temperate regions, since immature fruit generally does not store as well.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin performs best on fertile, well-drained loams with good moisture-holding capacity, supporting the extensive vine growth and large fruit size characteristic of the crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin is typically direct-seeded after soil has warmed and frost risk has passed, at wide spacing to accommodate the sprawling vine growth of most cultivars, though transplants are used in some systems for an earlier start.',
        },
        {
          type: 'list',
          items: [
            'Species and cultivar selection matched to fruit size, use (food or decorative), and local season length',
            'Crop rotation with non-cucurbit crops to manage soil-borne disease and pest carryover',
            'Adequate pollinator activity, since fruit set depends on pollen transfer between separate male and female flowers',
            'Fruit thinning in some systems to concentrate plant resources on fewer, larger fruit',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen supports the extensive vegetative growth needed before fruiting, while potassium contributes to fruit size, rind quality, and storage life.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin has substantial water demand during vine growth and fruit development, given the size of the mature fruit, and both furrow and drip irrigation are used depending on scale and region, alongside rain-fed production in areas with adequate seasonal rainfall.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew and downy mildew are common foliar diseases of pumpkin, capable of reducing leaf area and, in turn, fruit size and quality if unmanaged. Aphids and whiteflies are notable insect pests, both directly and as virus vectors.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pumpkin is harvested once the fruit has reached full color and the rind has hardened enough to resist puncture, generally cut from the vine with a portion of stem attached, since fruit with a broken or missing stem tends to store poorly.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Fresh and processed food, including canned puree, soups, and baked goods',
            'Seed roasted as a snack or pressed for oil',
            'Livestock feed in some production regions',
            'Decorative and seasonal cultural uses in some markets',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'temperature' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'zucchini' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'maize' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'host-plant', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Warm-season crop with a relatively long maturity period; frost-sensitive and timed to mature before autumn frost in temperate regions.',
  limitations: [
    'The term "pumpkin" spans several Cucurbita species with different sizes, uses, and agronomy; this entry is a general overview rather than species-specific detail.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of pumpkin and winter squash in vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Cucurbit disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for pumpkin',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pumpkin',
    description:
      'A structured, evidence-based reference on pumpkin: classification, warm-season climate needs, soil, nutrition, diseases, pests, and uses.',
    keywords: ['pumpkin', 'Cucurbita', 'winter squash', 'cucurbit vegetable'],
  },
  structuredData: { article: true },
};
