import type { CropContent } from '@/types/content';

export const grapefruit: CropContent = {
  id: 'crop-grapefruit',
  slug: 'grapefruit',
  contentType: 'crop',
  title: 'Grapefruit',
  scientificName: 'Citrus × paradisi',
  alternativeNames: ['Pomelo-orange hybrid citrus'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical evergreen citrus',
  botanicalFamily: 'Rutaceae (citrus family)',
  lifecycle: 'Perennial',
  summary:
    'Grapefruit is an evergreen subtropical citrus tree grown for fresh fruit and juice. Unlike many citrus species, it is a comparatively recent hybrid rather than an ancient, naturally occurring citrus type.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grapefruit (Citrus × paradisi) is an evergreen citrus tree grown commercially in subtropical and warm-temperate regions for fresh consumption and juice. Trees are long-lived, grafted perennials that, once established, remain productive for many years under suitable climate and management.',
    },
    {
      type: 'paragraph',
      text: 'Botanically, grapefruit is notable for being a relatively recent citrus hybrid rather than one of the small number of ancestral citrus species. It is generally understood to have arisen from a cross involving pomelo and sweet orange, first documented in the Caribbean, and was only later recognized and propagated as a distinct commercial crop.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (citrus family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Citrus × paradisi' },
    {
      label: 'Origin',
      value:
        'Recent hybrid (pomelo × sweet orange), first documented in the Caribbean',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit and juice',
    },
    {
      label: 'Climate',
      value:
        'Subtropical to warm-temperate; moderately frost-sensitive like most citrus',
      note: 'Grown on grafted trees using rootstocks selected for local site and disease conditions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Grapefruit is grown as a grafted, long-lived evergreen tree across subtropical and warm-temperate citrus regions. Commercial groves combine a fruiting cultivar with a rootstock chosen for the local soil, climate, and disease pressure, a decision made once at planting that shapes management for the productive life of the grove.',
        },
        {
          type: 'paragraph',
          text: 'Fresh-market and juice production both draw on grapefruit, with cultivar choice, packing standards, and market destination varying widely by region.',
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
            { term: 'Family', description: 'Rutaceae (citrus family)' },
            { term: 'Genus', description: 'Citrus' },
            {
              term: 'Principal species/hybrid',
              description:
                'Citrus × paradisi, a hybrid rather than an ancestral citrus species',
            },
            {
              term: 'Hybrid origin',
              description:
                'Generally understood to have originated from a cross involving pomelo (Citrus maxima) and sweet orange (Citrus sinensis)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting a fruiting cultivar onto a selected citrus rootstock',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A comparatively recent citrus',
          text: 'Grapefruit is not one of the handful of ancient citrus species; it is a more recently arisen hybrid, first documented in the Caribbean before spreading to other citrus-growing regions.',
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Grapefruit emerged in the Caribbean as a hybrid between pomelo and sweet orange and was subsequently selected and propagated as a distinct commercial fruit, later spreading to other subtropical citrus-growing regions worldwide.',
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
          text: 'Grapefruit is adapted to subtropical and warm-temperate climates with warm growing seasons. Like most citrus, it is moderately sensitive to frost, and cold events can damage foliage, wood, or fruit depending on severity and tree condition.',
        },
        {
          type: 'paragraph',
          text: 'Site selection for grapefruit groves typically considers cold-air drainage and proximity to moderating influences such as large water bodies, since low-lying frost pockets carry greater risk of cold damage.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Grapefruit performs best on deep, well-drained loam and sandy soils. Good internal drainage is important, as citrus roots are sensitive to prolonged waterlogging and the root diseases it favors.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock selection interacts strongly with soil conditions, including drainage, salinity tolerance, and susceptibility to soil-borne pathogens. Site assessment should draw on local soil survey information.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a grapefruit grove begins with selecting a rootstock suited to the site, since rootstock strongly influences tree vigor, size, cold tolerance, and resistance to soil-borne diseases, while the scion cultivar determines fruit type and market fit.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for site adaptation, vigor, and disease tolerance',
            'Cultivar selection for fresh-market or juice markets, including pigmented (pink/red) or white-fleshed types',
            'Tree spacing and canopy management suited to the growing region and equipment',
            'Long-term grove floor and canopy management across many productive years',
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
          text: 'Nitrogen supports vegetative growth and fruit development but must be balanced against excessive flush growth. Zinc and boron are micronutrients frequently monitored in citrus, since deficiencies can affect leaf condition, fruit set, and fruit quality.',
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
          text: 'Grapefruit is commonly irrigated in commercial production, with drip irrigation and micro-sprinkler irrigation both widely used to apply water efficiently to the root zone while limiting foliage wetting.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during flowering and fruit development while preventing waterlogging, which citrus tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus canker is a significant bacterial disease of grapefruit and other citrus in affected regions, causing lesions on leaves, stems, and fruit and prompting strict quarantine and sanitation measures where present. Anthracnose can affect leaves, twigs, and fruit, particularly under warm, humid conditions.',
        },
        {
          type: 'paragraph',
          text: 'Scale insects and fruit flies are common pests affecting fruit quality and marketability. Citrus psyllids are a genuine, major biosecurity concern for citrus worldwide because they can vector huanglongbing (citrus greening disease); their regional presence and risk vary and should be assessed against current local and national plant-health guidance rather than assumed.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant rootstocks and cultivars, grove sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grapefruit is harvested by hand once fruit reaches a maturity standard assessed through indicators such as size, color, and internal quality, since citrus does not continue to ripen significantly after picking. Harvest timing and duration vary by cultivar and region.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'White- versus pink/red-fleshed grapefruit',
          columns: ['Type', 'Flesh characteristic', 'Typical use'],
          rows: [
            [
              'White-fleshed',
              'Pale flesh, generally lower in the pigment lycopene',
              'Fresh eating and juice',
            ],
            [
              'Pink/red-fleshed',
              'Pigmented flesh due to lycopene content',
              'Fresh eating and juice; marketed for visual appeal and flavor differences',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating fruit',
            'Juice and juice blends',
            'Peel and by-products used in smaller-scale processing',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'lime' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, cultivar, and cold-hardiness specifics are region- and site-specific.',
  climateContext:
    'Subtropical to warm-temperate evergreen citrus, moderately frost-sensitive.',
  limitations: [
    'Rootstock and cultivar choice, spacing, and cold-protection practices are site- and region-specific decisions not covered by universal values here.',
    'Regional presence and pressure of citrus pests and diseases such as psyllids and huanglongbing vary and should be confirmed against current local plant-health authority guidance.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global grapefruit and citrus production context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Citrus canker and citrus pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for citrus',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Grapefruit',
    description:
      'An evidence-based reference on grapefruit: hybrid origin, climate and soil needs, grove establishment, nutrition, citrus diseases and pests, and uses.',
    keywords: [
      'grapefruit',
      'Citrus paradisi',
      'citrus fruit',
      'grapefruit grove',
    ],
  },
  structuredData: { article: true },
};
