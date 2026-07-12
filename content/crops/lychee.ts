import type { CropContent } from '@/types/content';

export const lychee: CropContent = {
  id: 'crop-lychee',
  slug: 'lychee',
  contentType: 'crop',
  title: 'Lychee',
  scientificName: 'Litchi chinensis',
  alternativeNames: ['Litchi'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical/tropical evergreen tree',
  botanicalFamily: 'Sapindaceae (soapberry family)',
  lifecycle: 'Perennial',
  summary:
    'Lychee is an evergreen subtropical tree grown for its sweet, aromatic fruit. Unusually among subtropical trees, it has a genuine winter cool-period requirement to induce flowering, and its fruit is notable for rapid post-harvest quality decline.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lychee (Litchi chinensis) is a long-lived evergreen tree grown across subtropical and tropical-margin regions for its distinctive fresh fruit, valued for its fragrant, sweet flesh beneath a rough, colorful skin.',
    },
    {
      type: 'paragraph',
      text: 'Lychee is notable among subtropical fruit trees for having a genuine, moderate requirement for a cool period, typically a run of cool nights in the weeks before bloom, in order to induce flowering. This places it in an unusual climatic niche: it needs warmth for general growth and fruiting, yet still depends on a cool induction period, which constrains where it can be grown reliably.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Sapindaceae (soapberry family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Litchi chinensis' },
    {
      label: 'Flowering trigger',
      value: 'Requires a cool period before bloom to induce flowering',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit; also dried or processed',
    },
    {
      label: 'Postharvest note',
      value:
        'Skin browns quickly after harvest, requiring prompt cooling and handling',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lychee is grown as a long-lived evergreen tree in subtropical and tropical-margin climates, with orchards typically established from grafted trees to maintain cultivar characteristics such as fruit size, flavor, and seed size.',
        },
        {
          type: 'paragraph',
          text: 'The crop is prized for its fresh fruit quality but presents distinct agronomic challenges, including its cool-period flowering requirement and the fruit’s tendency toward rapid postharvest skin browning, both of which shape production and marketing decisions.',
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
            { term: 'Family', description: 'Sapindaceae (soapberry family)' },
            { term: 'Genus', description: 'Litchi' },
            {
              term: 'Principal species',
              description: 'Litchi chinensis',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting, budding, or air-layering to maintain cultivar trueness',
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
          text: 'Lychee originates from southern China and neighboring parts of Southeast Asia, where it has been cultivated for a very long history, and has since spread to other subtropical and tropical-margin regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current production areas, leading cultivars, and trade patterns change over time; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lychee requires warm temperatures for general vegetative growth and fruit development, but unusually for a warm-climate tree, it also has a genuine, moderate requirement for a cool period, typically a run of cool nights, in the weeks before bloom to induce flower initiation.',
        },
        {
          type: 'paragraph',
          text: 'This combination means lychee is best suited to subtropical and tropical-margin zones that experience a distinct cool season without severe frost, since insufficient cool induction can result in poor flowering, while damaging cold can injure the tree itself.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lychee performs best on deep, well-drained loam and sandy soils. Good drainage is important, as the crop has poor tolerance of waterlogged conditions, which can lead to root stress and decline.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site assessment for a lychee planting should draw on local soil survey information, particularly regarding drainage and depth.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a lychee orchard begins with selecting cultivars suited to the local climate, particularly the reliability of a sufficient cool induction period for flowering, along with propagation material produced by grafting, budding, or air-layering to ensure trueness to type.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to local cool-season reliability for flower induction',
            'Propagation by grafting, budding, or air-layering to maintain cultivar characteristics',
            'Tree spacing and canopy management suited to the growing region and equipment',
            'Long-term orchard floor and canopy management across many productive years',
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
          text: 'Nitrogen supports vegetative growth but must be timed carefully, since excessive vegetative flush near the flowering period can compete with flower induction. Potassium supports fruit size and quality, and boron is a micronutrient commonly monitored in lychee for its role in flowering and fruit set.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Lychee has some drought tolerance once established but benefits from consistent moisture during fruit development to support fruit size and reduce fruit cracking. Drip irrigation is commonly used in commercial plantings to apply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Some growers manage soil moisture deliberately around the flower-induction period, reflecting the interaction between water status and the tree’s cool-period flowering physiology; specific practices are highly region- and cultivar-dependent.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect lychee leaves, flowers, and fruit, particularly under warm, humid conditions, while root rot can affect trees on poorly drained sites.',
        },
        {
          type: 'paragraph',
          text: 'The litchi stink bug (Tessaratoma papillosa) is a genuinely major, well-documented pest specific to lychee and related crops, feeding on flowers, young shoots, and developing fruit and capable of causing significant damage to flowering and fruit set where populations are high. Fruit flies and mealybugs are also common pests affecting fruit quality and marketability.',
        },
        {
          type: 'paragraph',
          text: 'Management combines monitoring, orchard sanitation, and — where justified — locally authorized control products applied according to their labels, alongside cultural practices that reduce stink bug buildup.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Lychee is harvested by hand, typically in clusters, once fruit reaches full color and sweetness, since the fruit does not continue to ripen significantly after picking. A key postharvest characteristic of lychee is that its skin browns quickly after harvest, so prompt cooling, careful handling, and rapid movement to market or cold storage are important to preserve fresh appearance and quality.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Major lychee pest and disease pressure points',
          columns: ['Issue', 'Type', 'Primary concern'],
          rows: [
            [
              'Litchi stink bug',
              'Pest',
              'Damage to flowers and developing fruit',
            ],
            [
              'Fruit flies',
              'Pest',
              'Fruit infestation affecting marketability',
            ],
            ['Anthracnose', 'Disease', 'Lesions on leaves, flowers, and fruit'],
            ['Root rot', 'Disease', 'Root stress on poorly drained sites'],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating fruit',
            'Dried lychee ("lychee nuts")',
            'Processed products including juice, canned, and preserved fruit',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'guava' },
    { type: 'crop', slug: 'avocado' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cool-period reliability, cultivar choice, and pest pressure are region- and site-specific.',
  climateContext:
    'Subtropical to tropical-margin evergreen tree with a genuine cool-period requirement for flower induction, despite otherwise needing warm growing conditions.',
  limitations: [
    'Cool-period length and timing needed for reliable flowering are cultivar- and site-specific and are not expressed here as fixed values.',
    'Regional pest pressure, including from the litchi stink bug, varies and should be confirmed against current local guidance.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global lychee production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Litchi stink bug and lychee disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidance relevant to lychee pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lychee',
    description:
      'A reference on lychee: cool-period flowering biology, climate and soil needs, orchard establishment, nutrition, the litchi stink bug, and postharvest care.',
    keywords: ['lychee', 'litchi chinensis', 'lychee tree', 'litchi fruit'],
  },
  structuredData: { article: true },
};
