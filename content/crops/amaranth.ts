import type { CropContent } from '@/types/content';

export const amaranth: CropContent = {
  id: 'crop-amaranth',
  slug: 'amaranth',
  contentType: 'crop',
  title: 'Amaranth',
  scientificName: 'Amaranthus (A. cruentus, A. hypochondriacus, A. caudatus)',
  alternativeNames: [
    'Grain amaranth',
    'Vegetable amaranth',
    'Callaloo',
    'Rajgira',
  ],
  category: 'Pseudocereal and leafy vegetable',
  subcategory: 'Grain and leaf crop',
  botanicalFamily: 'Amaranthaceae (amaranths)',
  lifecycle: 'Annual',
  summary:
    'Amaranth is a fast-growing warm-season crop grown both as a gluten-free grain (pseudocereal) and as a nutritious leafy vegetable, valued for heat and drought tolerance and highly efficient C4 growth.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Amaranth encompasses several cultivated species of the genus Amaranthus grown for two distinct purposes: grain amaranths, whose small seeds are a gluten-free pseudocereal, and vegetable amaranths, whose leaves and tender stems are a widely eaten leafy vegetable across Africa, Asia, and the Americas.',
    },
    {
      type: 'paragraph',
      text: 'The grain amaranths were staple crops of pre-Columbian Mesoamerica, while leaf amaranths are among the most important traditional leafy vegetables in the tropics. As fast-growing C4 plants, amaranths tolerate heat and drought and grow rapidly, and their seed and leaves are noted for their nutritional value.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaranthaceae (amaranths)' },
    { label: 'Life cycle', value: 'Annual' },
    {
      label: 'Scientific name',
      value: 'Amaranthus (several cultivated species)',
    },
    {
      label: 'Primary uses',
      value:
        'Gluten-free grain (popped, flour, porridge) and leaves as a vegetable',
    },
    {
      label: 'Climate',
      value: 'Warm season; heat- and drought-tolerant, fast-growing',
    },
    {
      label: 'Soil preference',
      value:
        'Wide range of well-drained soils; adaptable and tolerant of low fertility',
      note: 'Very small seed favors a fine, firm seedbed for establishment.',
    },
    {
      label: 'Crop type',
      value: 'Dual grain (pseudocereal) and leafy-vegetable crop',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Amaranth is grown either for grain, as a gluten-free pseudocereal used popped, milled into flour, or cooked as porridge, or as a leafy vegetable harvested for its tender leaves and stems. Some species and cultivars serve both purposes, and ornamental amaranths are also grown.',
        },
        {
          type: 'paragraph',
          text: 'Vegetable amaranth is among the most important traditional leafy greens in warm regions, valued for rapid growth and nutritional quality, while grain amaranth is grown for its distinctive small, nutritious seed.',
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
            { term: 'Family', description: 'Amaranthaceae (amaranth family)' },
            { term: 'Genus', description: 'Amaranthus' },
            {
              term: 'Principal grain species',
              description:
                'Amaranthus cruentus, A. hypochondriacus, and A. caudatus',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing, often tall warm-season annual with broad leaves and dense seed heads, using C4 photosynthesis',
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
          text: 'Grain amaranths were domesticated in the Americas and were important staples of Mesoamerican and Andean civilizations. Vegetable amaranths are grown throughout the warm regions of Africa, Asia, and the Americas, where several species are cultivated and gathered.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production are limited and often incomplete; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Amaranth is a warm-season crop that grows best in warm to hot conditions and is sensitive to frost. As a C4 plant, it tolerates heat and drought well and grows rapidly, though some grain types are photoperiod-sensitive in their flowering.',
        },
        {
          type: 'paragraph',
          text: 'Vegetable amaranth’s speed of growth allows repeated harvests over a warm season, while grain amaranth completes its cycle over a longer period to mature seed.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Amaranth grows on a wide range of well-drained soils and tolerates moderately low fertility, though it responds strongly to fertile, moisture-retentive soils, particularly for leaf production. Good drainage is important, as seedlings are susceptible to damping-off in wet soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'A fine, firm, well-drained seedbed suits amaranth’s very small seed and reduces the risk of seedling damping-off.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Amaranth is established from very small seed, either sown directly or, for some vegetable crops, transplanted. Because the seed is tiny and seedlings are initially slow, a fine seedbed and early weed control are important.',
        },
        {
          type: 'list',
          items: [
            'Species and cultivar chosen for grain or leaf production',
            'Fine, firm, well-drained seedbed suited to the very small seed',
            'Early weed control during slow seedling establishment',
            'Repeated cut-and-come-again harvesting for leaf crops',
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
          text: 'Nitrogen strongly promotes leaf growth in vegetable amaranth, while balanced nutrition supports grain production. Amaranth can accumulate nitrate under high nitrogen supply, a consideration for leaf crops.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Amaranth is grown both under rain-fed conditions and with irrigation. Its C4 physiology gives it good drought tolerance, but consistent moisture supports the tender, rapid growth desired in leaf crops.',
        },
        {
          type: 'paragraph',
          text: 'For grain production, adequate moisture during growth and seed set supports yield, while drier conditions during maturity aid harvest.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Damping-off affects amaranth seedlings in wet conditions, and root rots, leaf spots, and white rust occur under favorable conditions. Good drainage and crop rotation help limit these problems.',
        },
        {
          type: 'paragraph',
          text: 'Flea beetles, aphids, leaf miners, and caterpillars are among the insect pests, with defoliating insects of particular concern for leaf crops. Management combines rotation, field sanitation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Vegetable amaranth is harvested by cutting young plants or repeatedly picking tender leaves and shoots. Grain amaranth is harvested once seed heads mature and dry, with care taken because the small seed can shatter and requires gentle threshing and cleaning.',
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
            'Grain popped, milled into gluten-free flour, or cooked as porridge and in confections',
            'Leaves and tender stems cooked as a nutritious leafy vegetable',
            'Some species grown as ornamentals and for natural pigments',
            'Residues used as livestock feed in some systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'quinoa' },
    { type: 'crop', slug: 'spinach' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview across warm regions of the Americas, Africa, and Asia. Grain and leaf types differ in management and end use.',
  climateContext:
    'Warm-season C4 crop tolerant of heat and drought; frost-sensitive and, in some grain types, photoperiod-sensitive.',
  limitations: [
    'Grain and vegetable types differ substantially in management and are not reduced to universal guidance here.',
    'Leaf crops grown with high nitrogen can accumulate nitrate, a food-quality consideration.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of amaranth as a grain and leafy vegetable',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification and nomenclature of Amaranthus',
    },
    { sourceId: 'cabi', citedFor: 'Amaranth crop and pest compendium data' },
    {
      sourceId: 'britannica',
      citedFor: 'Botanical description and history of use',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Amaranth (Amaranthus)',
    description:
      'An evidence-based reference on amaranth: grain and leaf types, C4 heat and drought tolerance, agronomy, gluten-free grain, diseases, pests, and uses.',
    keywords: ['amaranth', 'Amaranthus', 'grain amaranth', 'leafy vegetable'],
  },
  structuredData: { article: true },
};
