import type { CropContent } from '@/types/content';

export const papaya: CropContent = {
  id: 'crop-papaya',
  slug: 'papaya',
  contentType: 'crop',
  title: 'Papaya',
  scientificName: 'Carica papaya',
  alternativeNames: ['Pawpaw'],
  category: 'Tropical fruit crop',
  subcategory: 'Fast-growing tree-like herb',
  botanicalFamily: 'Caricaceae',
  lifecycle: 'Perennial',
  summary:
    'Papaya is a fast-growing, short-lived tropical perennial grown for its fleshy fruit. It has a soft, herbaceous-woody trunk rather than true wood, and its sex expression — dioecious, monoecious, or hermaphrodite — shapes orchard design.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Papaya is a fast-growing tropical fruit crop that reaches a productive, tree-like size within a relatively short time, then remains productive for only a few years before typical commercial replanting. Its trunk is soft and largely herbaceous rather than true wood, distinguishing its growth form from longer-lived woody fruit trees.',
    },
    {
      type: 'paragraph',
      text: 'Papaya populations include distinct sex types — female, male, and hermaphrodite plants, occurring in dioecious, monoecious, or gynodioecious combinations depending on the population and cultivar. Because flower and fruit characteristics differ by sex type, managing sex expression, including how seedlings are thinned once flowering reveals plant sex, is a genuinely important part of orchard design and fruit-shape outcomes.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Caricaceae' },
    { label: 'Life cycle', value: 'Fast-growing, short-lived perennial' },
    { label: 'Main species', value: 'Carica papaya' },
    {
      label: 'Primary uses',
      value: 'Fresh ripe fruit; unripe fruit used in cooking in some cuisines',
    },
    {
      label: 'Climate',
      value: 'Tropical and warm subtropical; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Drainage is critical; papaya is highly susceptible to root and stem rot in wet soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya grows rapidly from seed to a fruiting, tree-like plant within a short time relative to most other tropical tree fruits, and commercial plantings are typically productive for only a handful of years before yields decline and replanting becomes worthwhile. Its soft trunk and rapid growth set it apart from longer-lived woody perennial fruit crops.',
        },
        {
          type: 'paragraph',
          text: 'Because papaya can be raised directly from seed to a fruiting plant relatively quickly, and because plant sex is not apparent until flowering, nursery and early-field management practices, including how growers handle the eventual mix of sexes, strongly shape orchard design.',
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
            { term: 'Family', description: 'Caricaceae' },
            { term: 'Genus', description: 'Carica' },
            {
              term: 'Principal species',
              description: 'Carica papaya (cultivated papaya)',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing, single-stemmed perennial with a soft, largely herbaceous trunk rather than true wood, topped by a crown of large palmate leaves',
            },
            {
              term: 'Sex types',
              description:
                'Populations and cultivars include female, male, and hermaphrodite plants, occurring as dioecious, monoecious, or gynodioecious types depending on genetics; sex is not visible until flowering',
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
          text: 'Papaya is native to the lowland tropics of Central America and southern Mexico, from where it spread widely through the tropics via early trade and later global dispersal, becoming a common dooryard and commercial fruit crop across tropical and warm subtropical regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Production areas, dominant cultivars, and trade volumes change over time and by region; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya requires warm, frost-free conditions and grows best in consistently warm tropical and warm subtropical climates. It is notably frost-sensitive, and even brief cold exposure can damage or kill plants, restricting the crop to climates without significant cold periods or to protected situations.',
        },
        {
          type: 'paragraph',
          text: 'Wind can also damage papaya, since its soft trunk and large leaf crown are vulnerable to breakage or lodging, making site exposure a relevant climate-related consideration.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya requires deep, well-drained soils, with loams and sandy loams generally favored. Good drainage is one of the most critical soil factors for this crop, since papaya is highly susceptible to root and stem rot under waterlogged or poorly aerated conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sites with a history of poor drainage or a high water table should be avoided or improved before planting. Local soil survey information should guide site-specific drainage assessment.',
        },
      ],
    },
    {
      id: 'establishment-and-management',
      heading: 'Establishment and orchard management',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya orchards are typically established from nursery-raised seedlings transplanted into the field once large enough to establish well. Because plant sex is unknown until flowering, growers commonly plant more seedlings per intended final planting site than needed and thin to the desired sex mix once flowering reveals plant sex.',
        },
        {
          type: 'list',
          items: [
            'Seedling raising in a nursery followed by field transplanting once plants are established',
            'Plant spacing set according to cultivar vigor and orchard management system',
            'Sex-type management, including over-planting and later thinning once flowering reveals plant sex',
            'Staking or windbreak provision in exposed sites, given the crop’s soft trunk and top-heavy crown',
          ],
        },
        {
          type: 'table',
          caption: 'Papaya fruit types by intended use',
          columns: ['Use category', 'Harvest stage', 'Typical use'],
          rows: [
            [
              'Fresh (ripe) papaya',
              'Harvested as fruit ripens or approaches ripeness',
              'Eaten fresh as a dessert or breakfast fruit',
            ],
            [
              'Green (unripe) papaya',
              'Harvested while fully immature and firm',
              'Used as a cooking vegetable in salads and savory dishes in a number of cuisines',
            ],
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
          text: 'Nitrogen supports the rapid vegetative growth characteristic of papaya, while potassium contributes to fruit size and quality. Calcium status is relevant to fruit and plant tissue integrity, consistent with its role across many rapidly growing fruit crops.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya has a relatively high water requirement given its rapid growth rate and large leaf area, and drip irrigation is widely used in commercial plantings to supply water efficiently while avoiding the waterlogging that the crop tolerates poorly.',
        },
        {
          type: 'paragraph',
          text: 'Because drainage and irrigation interact so closely for papaya, irrigation system design generally aims to keep the root zone consistently moist without allowing standing water.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is one of the most important diseases of papaya worldwide, affecting both standing fruit in the field and fruit in storage and transit, where post-harvest rot can cause significant losses. Root and stem rot caused by soilborne pathogens, particularly Phytophthora species, is serious in poorly drained soils, reinforcing the crop’s strong drainage requirement.',
        },
        {
          type: 'paragraph',
          text: 'Beyond fungal disease, papaya growers in many regions also contend with viral disease pressure, which can be a significant production constraint; management of specific viral diseases depends heavily on local strains and control programs and is not covered in detail here.',
        },
        {
          type: 'paragraph',
          text: 'Common pests include mealybugs and whiteflies, both of which can also serve as disease vectors, and fruit flies, whose larvae damage ripening fruit and can restrict market access in some regions.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, site drainage, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Papaya intended for fresh ripe consumption is generally picked once the skin begins to show color break, since fruit continues to ripen after harvest, while fruit for green/cooking use is picked fully immature and firm. Harvest maturity indicators vary by cultivar and intended market, so a universal days-to-harvest figure is not given here.',
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
            'Fresh ripe fruit eaten as a dessert or breakfast fruit',
            'Green (unripe) fruit used as a cooking vegetable in various cuisines',
            'Processed products including juice, puree, and dried fruit',
            'Papain, a proteolytic enzyme derived from the fruit and latex, used in food and industrial applications',
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
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'pineapple' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Sex-type management, spacing, and input rates are region- and cultivar-specific.',
  climateContext:
    'Fast-growing tropical perennial; requires warm, frost-free conditions and is sensitive to wind exposure.',
  limitations: [
    'Sex-type ratios, seedling thinning practice, and spacing are examples of region- and cultivar-specific decisions not covered by universal values here.',
    'Production and yield statistics change over time and should be taken from primary datasets such as FAOSTAT.',
    'Viral disease pressure is a significant factor in many papaya-growing regions but is not addressed in disease-specific detail on this page; local plant-protection guidance should be consulted.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global papaya production and agronomy context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Papaya pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidance relevant to papaya pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Papaya',
    description:
      'A reference on papaya: fast-growing tropical perennial classification, sex-type management, climate and soil needs, diseases, pests, and harvest stages.',
    keywords: ['papaya', 'Carica papaya', 'tropical fruit', 'papaya sex types'],
  },
  structuredData: { article: true },
};
