import type { CropContent } from '@/types/content';

export const cherry: CropContent = {
  id: 'crop-cherry',
  slug: 'cherry',
  contentType: 'crop',
  title: 'Cherry',
  scientificName:
    'Prunus avium (sweet cherry); Prunus cerasus (sour/tart cherry)',
  alternativeNames: ['Sweet cherry', 'Sour cherry', 'Tart cherry'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate stone fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Cherry is a temperate deciduous stone fruit grown as sweet cherry for fresh eating and sour/tart cherry mainly for processing, both propagated by grafting and requiring substantial winter chilling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cherry orchards are established from grafted trees combining a fruiting cultivar with a rootstock chosen for size control, anchorage, and site adaptation, as is standard for tree fruit crops. Two distinct species are grown commercially: sweet cherry (Prunus avium), used mainly for fresh consumption, and sour or tart cherry (Prunus cerasus), used predominantly for processing into juice, dried fruit, and baked-good fillings.',
    },
    {
      type: 'paragraph',
      text: 'Sweet cherry cultivars are largely self-incompatible, meaning most varieties cannot set a commercial crop with their own pollen and require a compatible pollinizer variety planted nearby, an important consideration in orchard design. Cherry also blooms relatively early in many growing regions, making spring frost a significant production risk.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Prunus avium, Prunus cerasus' },
    {
      label: 'Primary uses',
      value:
        'Fresh fruit (sweet cherry); juice, dried, and processed fruit (sour cherry)',
    },
    {
      label: 'Climate',
      value:
        'Temperate; comparatively high winter chilling requirement among stone fruits',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams and sandy soils; poor tolerance of waterlogging',
      note: 'Sweet cherry orchard design must account for pollinizer compatibility between varieties.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cherry is grown as a grafted, long-lived perennial tree. Commercial production is divided between sweet cherry, grown mainly for the fresh market, and sour or tart cherry, grown mainly for processing, with each species having distinct orchard management traditions.',
        },
        {
          type: 'paragraph',
          text: 'Because cherry is propagated clonally and cropped over many seasons, decisions on rootstock, cultivar, and — for sweet cherry — pollinizer variety are made once at establishment and shape orchard management for the life of the planting.',
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
            { term: 'Family', description: 'Rosaceae (rose family)' },
            { term: 'Genus', description: 'Prunus' },
            {
              term: 'Principal species',
              description:
                'Prunus avium (sweet cherry) and Prunus cerasus (sour or tart cherry)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Sweet cherry and sour cherry differ not only in fruit use but in tree habit and pollination biology: sweet cherry trees tend to be more vigorous and largely self-incompatible, while many sour cherry cultivars are self-fertile, simplifying orchard pollination design for that species.',
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet cherry and sour cherry both originate from regions spanning Europe and western Asia, with long histories of cultivation and selection across these areas before spreading to other temperate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production of both species is now established across temperate regions on multiple continents. Production statistics and leading cultivars change over time and are best obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cherry trees require a period of winter chilling to break dormancy and flower normally; the chilling requirement varies by cultivar, but cherry is generally noted as having a comparatively high chilling requirement among stone fruits, which restricts the species to genuinely cold-winter temperate climates compared with some other Prunus crops.',
        },
        {
          type: 'paragraph',
          text: 'Cherry tends to bloom relatively early in many growing regions, making spring frost during bloom one of the most significant climate risks for the crop, since flowers and young fruitlets are frost-sensitive.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cherry performs best on deep, well-drained soils with good structure. Loams and sandy loams are generally favored, and the crop is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock selection interacts strongly with soil conditions, including drainage and depth. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a cherry orchard begins with choosing a rootstock and cultivar combination suited to the site and market. For sweet cherry, orchard design must also account for pollinizer compatibility, since most sweet cherry cultivars are self-incompatible and require a different, cross-compatible variety planted nearby to set a commercial crop; sour cherry cultivars are more commonly self-fertile.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Pollinizer selection for sweet cherry, given widespread self-incompatibility among cultivars',
            'Training and pruning system matched to planting density and species',
            "Frost-management planning given the crop's relatively early bloom in many regions",
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
          text: 'Potassium supports fruit size and quality in cherry, while calcium status is closely linked to fruit firmness, a particularly important quality trait for sweet cherry given its susceptibility to rain-induced cracking near harvest. Boron plays a role in flowering and fruit set.',
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
          text: 'Cherry is grown both rain-fed and under irrigation, with water demand highest during fruit development. Drip irrigation is widely used in modern orchards to apply water precisely to the root zone while avoiding the waterlogging cherry tolerates poorly.',
        },
        {
          type: 'paragraph',
          text: 'Cherries are notably susceptible to rain-induced fruit cracking as fruit approaches maturity, since ripening fruit absorbs water rapidly through the skin. This makes rainfall near harvest, rather than irrigation alone, a major fruit-quality risk that growers manage through cultivar choice, canopy management, and, in some regions, protective covers.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold can affect blossoms and ripening fruit, particularly in humid or wet conditions, while powdery mildew affects shoots and leaves. Bacterial leaf spot can cause lesions on leaves and fruit in some regions. Insect pests include aphids, which distort growth and can transmit viruses, fruit flies, which infest ripening fruit, and scale insects, which affect vigor.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cherry fruit does not continue to ripen appreciably after picking, so harvest timing is based on maturity indicators such as color, size, and firmness, with fruit picked at or near full ripeness for fresh-market sweet cherry. Sour cherry grown for processing is often mechanically harvested, while fresh-market sweet cherry is typically hand-picked with the stem attached to reduce injury and extend shelf life.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Sweet vs. sour cherry comparison',
          columns: [
            'Feature',
            'Sweet cherry (Prunus avium)',
            'Sour/tart cherry (Prunus cerasus)',
          ],
          rows: [
            [
              'Primary use',
              'Fresh eating',
              'Processing (juice, dried, baking)',
            ],
            [
              'Self-compatibility',
              'Largely self-incompatible; needs a pollinizer',
              'Many cultivars are self-fertile',
            ],
            [
              'Typical products',
              'Fresh fruit, some canning',
              'Juice, dried fruit, pie and baking fillings',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating cherries (sweet cherry)',
            'Juice and juice blends',
            'Dried and canned fruit',
            'Pie fillings and other baked-good ingredients',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'plum' },
    { type: 'crop', slug: 'apricot' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, cultivar, pollinizer, and chilling requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous stone fruit with a comparatively high winter chilling requirement among stone fruits; vulnerable to spring frost given relatively early bloom.',
  limitations: [
    'Rootstock, pollinizer pairing, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global cherry production and cultivation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Cherry pest and disease compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for cherry',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cherry cultivar and orchard management research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cherry',
    description:
      'A reference on cherry: sweet vs. sour species, chilling and frost risk, pollinizer needs, rain-cracking, soil needs, diseases, and uses.',
    keywords: ['cherry', 'Prunus avium', 'Prunus cerasus', 'stone fruit'],
  },
  structuredData: { article: true },
};
