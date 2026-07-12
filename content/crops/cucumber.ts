import type { CropContent } from '@/types/content';

export const cucumber: CropContent = {
  id: 'crop-cucumber',
  slug: 'cucumber',
  contentType: 'crop',
  title: 'Cucumber',
  scientificName: 'Cucumis sativus',
  alternativeNames: ['Garden cucumber'],
  category: 'Vegetable crop',
  subcategory: 'Cucurbit (vine) vegetable',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Annual',
  summary:
    'Cucumber is a warm-season annual cucurbit vine grown for its edible fruit, cultivated in open fields, high tunnels, and greenhouses for both fresh-slicing and pickling markets.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cucumber is a trailing or climbing vine grown for its immature fruit, harvested well before seeds mature. Cultivars are broadly grouped into slicing types for fresh consumption and pickling types bred for smaller fruit size and uniform shape.',
    },
    {
      type: 'paragraph',
      text: 'Flowering habit varies among cultivars, with some producing separate male and female flowers on the same plant (monoecious) and others bred to produce mostly or entirely female flowers (gynoecious), a trait often paired with parthenocarpic fruit set in greenhouse production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Cucumis sativus' },
    {
      label: 'Primary uses',
      value: 'Fresh slicing consumption; pickling and other processed products',
    },
    {
      label: 'Climate',
      value:
        'Warm-season crop; frost-sensitive, grown widely under protected culture',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams rich in organic matter',
      note: 'Optimal ranges are variety- and system-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber is grown in an unusually wide range of systems, from low-input open fields to intensively managed, trellised greenhouse production, reflecting both strong market demand and the crop’s sensitivity to cool temperatures.',
        },
        {
          type: 'paragraph',
          text: 'Vining cultivars are commonly trellised to improve fruit quality, airflow, and harvest efficiency, particularly in protected culture, while some bush-type cultivars are bred for more compact, less trellis-dependent production.',
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
            { term: 'Genus and species', description: 'Cucumis sativus' },
            {
              term: 'Growth habit',
              description:
                'Trailing or climbing annual vine with tendrils; bush-type cultivars also exist',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Common flowering types',
          columns: ['Flowering type', 'Description', 'Typical production use'],
          rows: [
            [
              'Monoecious',
              'Separate male and female flowers on the same plant, requiring pollination for fruit set',
              'Common in open-field production',
            ],
            [
              'Gynoecious / parthenocarpic',
              'Predominantly female flowers, often setting fruit without pollination',
              'Widely used in greenhouse and high-tunnel production',
            ],
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
          text: 'Cucumber is believed to have been domesticated in the Indian subcontinent, with cultivation recorded in antiquity across South and West Asia before spreading to the Mediterranean, Europe, and eventually worldwide.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across a wide range of climates in both open-field and protected-culture systems. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber is a warm-season crop sensitive to frost and to chilling injury at low temperatures, with germination and vegetative growth both favored by warm soil and air temperatures.',
        },
        {
          type: 'paragraph',
          text: 'Protected-culture systems such as greenhouses and high tunnels are widely used in cooler climates and shoulder seasons to maintain the warm conditions the crop requires and to extend the production window.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber performs best on well-drained, fertile sandy loams rich in organic matter, which warm quickly in spring and support the crop’s rapid vegetative growth. It is sensitive to waterlogging, which increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil warming and drainage should be assessed locally, particularly for early-season open-field plantings.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber is established from direct seeding or transplants, with trellising commonly used for vining cultivars, especially in greenhouse and high-tunnel systems, to improve fruit quality and ease of harvest.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to production system (open field versus protected culture) and market type',
            'Trellising or support structures for vining types to improve airflow and fruit quality',
            'Crop rotation away from other cucurbits to manage soilborne disease and pest carryover',
            'Pollinator management in open-field, insect-pollinated plantings',
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
          text: 'Nitrogen and potassium support vigorous vine growth and fruit development, while boron availability is relevant to fruit set and quality in cucurbits. Requirements depend on soil or nutrient-solution supply, cultivar, and production system.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region- and system-specific',
          text: 'Fertilizer and nutrient-solution programs should follow local soil tests, water analysis, and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber has high water content and a relatively shallow root system, so consistent moisture is important throughout fruit development; moisture stress can lead to misshapen or bitter fruit in some conditions. Drip irrigation is widely used in both open-field and protected-culture production.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew and powdery mildew are among the most significant foliar diseases of cucumber and other cucurbits, with severity depending on humidity, cultivar resistance, and region. Whiteflies, aphids, spider mites, and thrips are common pests, some of which also transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, sanitation, field or greenhouse monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumber fruit is picked immature, at a size appropriate to the market — larger for slicing cucumbers, smaller and more uniform for pickling types. Frequent harvesting is needed to sustain fruit set and prevent overripe fruit from suppressing further yield.',
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
            'Fresh slicing use in salads and as a raw vegetable',
            'Pickling into a wide range of brined and fermented products',
            'Culinary use in cooked dishes in some cuisines',
            'Processing into cucumber-based condiments and beverages in some markets',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'tomato' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'micronutrient',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview. Production system (open field, high tunnel, or greenhouse), cultivar type, and input levels vary widely by region.',
  climateContext:
    'Warm-season crop sensitive to frost and chilling; grown in open-field and protected-culture systems across many climates.',
  limitations: [
    'Production system and cultivar flowering type are region- and operation-specific and are not reduced to universal guidance here.',
    'Disease and pest pressure varies considerably by region, season, and production system.',
    'Fertilizer and irrigation programs should follow local soil and water testing rather than generic rates.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of cucumber in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management for cucurbits',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cucumber production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cucumber',
    description:
      'An evidence-based reference on cucumber: classification, warm-season climate needs, agronomy, common diseases and pests, and harvest and uses.',
    keywords: [
      'cucumber',
      'Cucumis sativus',
      'cucurbit vegetable',
      'cucumber agronomy',
    ],
  },
  structuredData: { article: true },
};
