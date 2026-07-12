import type { CropContent } from '@/types/content';

export const pecan: CropContent = {
  id: 'crop-pecan',
  slug: 'pecan',
  contentType: 'crop',
  title: 'Pecan',
  scientificName: 'Carya illinoinensis',
  alternativeNames: ['Pecan nut'],
  category: 'Tree nut crop',
  subcategory: 'Deciduous nut tree',
  botanicalFamily: 'Juglandaceae (walnut family)',
  lifecycle: 'Perennial',
  summary:
    'Pecan is a large deciduous nut tree native to North America, grown commercially for its oil-rich kernel used as a snack nut and in baking and confectionery.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pecan is a long-lived deciduous tree of the walnut family grown for its thin-shelled, oil-rich nut. Orchards are established from grafted cultivars selected for nut size, shell thickness, and disease tolerance, and trees may remain productive for many decades once established.',
    },
    {
      type: 'paragraph',
      text: 'Commercial production is concentrated in warm-temperate and subtropical regions with hot summers, since nut fill and kernel quality depend on an extended period of summer heat following a winter chilling period that breaks bud dormancy.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Juglandaceae (walnut family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Carya illinoinensis' },
    { label: 'Primary uses', value: 'Snack nut, baking, and confectionery' },
    {
      label: 'Climate',
      value:
        'Warm-temperate to subtropical, with a winter chilling requirement',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and sandy loams',
      note: 'Optimal ranges vary by cultivar and region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pecan trees are large, wind-pollinated, and monoecious, bearing separate male and female flowers on the same tree at different times, a trait called dichogamy that shapes cultivar pairing in orchard design. Most orchards mix cultivars with complementary flowering types to ensure adequate pollination.',
        },
        {
          type: 'paragraph',
          text: 'Trees are slow to reach full bearing, often taking a decade or more, and commercial groves represent a long-term investment. Production ranges from large mechanized orchards to smaller diversified farms.',
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
            { term: 'Family', description: 'Juglandaceae (walnut family)' },
            { term: 'Genus', description: 'Carya' },
            { term: 'Principal species', description: 'Carya illinoinensis' },
            {
              term: 'Growth habit',
              description:
                'Large deciduous tree bearing compound leaves and nuts enclosed in a four-valved husk',
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
          text: 'Pecan is native to river valleys of the south-central United States and northern Mexico, where wild trees were harvested long before formal cultivation began. Selection of superior seedling trees in the nineteenth century led to the grafted cultivars that underpin the modern industry.',
        },
        {
          type: 'paragraph',
          text: 'The United States and Mexico account for most global production, with additional plantings established in South Africa, Australia, Peru, and other regions with suitable climates. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pecan requires a period of winter chilling to break dormancy, followed by a long, hot growing season for nuts to fill properly; regions with insufficient summer heat produce poorly filled kernels. Late spring frosts during bud break and pollination can substantially reduce yield.',
        },
        {
          type: 'paragraph',
          text: 'Deep, well-drained, fertile loams and sandy loams, historically river-bottom soils, support the extensive root systems these large trees require. Shallow, poorly drained, or compacted soils restrict rooting and increase susceptibility to root disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site selection should account for rooting depth, drainage, and local frost risk; suitability should be confirmed with local soil survey and extension information.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Grafted cultivars selected for regional adaptation, alternate-bearing tendency, and pollination compatibility',
            'Orchard layout planned around complementary pollen-shed and flower-receptivity timing between cultivars',
            'Canopy and crop-load management to moderate the pronounced alternate-bearing (biennial yield) pattern common in pecan',
            'Long juvenile period before full production, requiring sustained orchard management over many years',
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
          text: 'Nitrogen supports shoot and canopy growth, while zinc is widely recognized as a critical micronutrient for pecan; deficiency causes rosetting and reduced leaf and nut development in many production regions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf-tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Pecan has a high water requirement during nut fill, and irrigation is standard in many production regions, particularly in drier climates. Water stress during this period can reduce kernel fill and nut quality.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling is based on local evapotranspiration estimates, soil moisture monitoring, and tree age, since young and mature trees differ substantially in water use.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect foliage and nut husks under humid conditions, while root rot can weaken or kill trees on poorly drained sites. The pecan weevil is a significant nut-infesting pest in parts of the growing range, and aphids are common sap-feeding pests of foliage.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Anthracnose',
              'Disease',
              'Affects foliage and husks in humid conditions',
            ],
            [
              'Root rot',
              'Disease',
              'Favored by poor drainage and waterlogging',
            ],
            ['Pecan weevil', 'Pest', 'Larvae feed inside developing nuts'],
            ['Aphids', 'Pest', 'Sap-feeding insects affecting foliage'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Nuts mature in autumn as the husk splits and dries. Mechanical trunk shakers are widely used in commercial orchards to dislodge nuts, which are then collected from the orchard floor, cleaned, and dried to a moisture content suitable for storage.',
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
            'Shelled kernels eaten as a snack nut, raw or roasted',
            'Baking and confectionery, including pies, pralines, and baked goods',
            'Pecan oil pressed from kernels for culinary use',
            'Shells used in some regions as mulch, fuel, or an abrasive material',
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
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'walnut' },
    { type: 'crop', slug: 'chestnut' },
    { type: 'crop', slug: 'almond' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; major production in the United States and Mexico, with expanding production in South Africa, Australia, and Peru.',
  climateContext:
    'Warm-temperate to subtropical deciduous tree crop requiring winter chilling and a long, hot growing season; sensitive to late spring frost.',
  limitations: [
    'Nut fill, quality, and alternate-bearing patterns vary by cultivar and region and are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Pecan research and disease information',
    },
    { sourceId: 'cabi', citedFor: 'Pecan pest and disease compendium data' },
    { sourceId: 'fao', citedFor: 'Global tree nut production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pecan',
    description:
      'A structured, evidence-based reference on pecan: classification, climate and soil needs, orchard management, nutrition, diseases, pests, harvest, and uses.',
    keywords: [
      'pecan',
      'Carya illinoinensis',
      'tree nut crop',
      'pecan orchard',
    ],
  },
  structuredData: { article: true },
};
