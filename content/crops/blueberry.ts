import type { CropContent } from '@/types/content';

export const blueberry: CropContent = {
  id: 'crop-blueberry',
  slug: 'blueberry',
  contentType: 'crop',
  title: 'Blueberry',
  scientificName:
    'Vaccinium corymbosum (northern highbush blueberry); other cultivated Vaccinium species and hybrids are grown regionally',
  alternativeNames: ['Highbush blueberry', 'Lowbush blueberry'],
  category: 'Fruit crop',
  subcategory: 'Perennial berry shrub',
  botanicalFamily: 'Ericaceae (heath family)',
  lifecycle: 'Perennial',
  summary:
    'Blueberry is a perennial deciduous shrub of the heath family grown for its fresh and processed fruit, distinguished by a strict requirement for acidic, well-drained, organic-rich soil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Blueberry is a woody perennial shrub cultivated for its small, dark-blue fruit, eaten fresh or processed into juice, jam, and baked and frozen products. Commercial production centers on highbush types in most regions, with lowbush and rabbiteye types important in specific climates.',
    },
    {
      type: 'paragraph',
      text: 'Unlike most fruit crops, blueberry belongs to the Ericaceae (heath family) along with cranberry, azalea, and rhododendron, and shares their characteristic requirement for distinctly acidic soil. This soil requirement is fundamental to successful establishment and is one of the most site-limiting factors in blueberry production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Ericaceae (heath family)' },
    { label: 'Life cycle', value: 'Perennial deciduous shrub' },
    {
      label: 'Main species',
      value: 'Vaccinium corymbosum and related Vaccinium species',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, processed and frozen products, juice',
    },
    {
      label: 'Climate',
      value:
        'Temperate; most types require winter chilling for normal flowering',
    },
    {
      label: 'Soil preference',
      value: 'Strongly acidic, well-drained, organic-rich soil',
      note: 'Most blueberry types require distinctly acidic soil; this is a defining, non-negotiable site requirement.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry is grown as a long-lived perennial shrub, planted once and cropped over many years. Commercial plantings are established from rooted cuttings or containerized nursery plants of selected cultivars rather than from seed.',
        },
        {
          type: 'paragraph',
          text: 'Because soil acidity requirements are so specific and difficult to fully correct after planting, site selection and pre-plant soil preparation are among the most consequential decisions in establishing a productive planting.',
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
            { term: 'Family', description: 'Ericaceae (heath family)' },
            { term: 'Genus', description: 'Vaccinium' },
            {
              term: 'Principal species',
              description:
                'Vaccinium corymbosum (northern highbush); other species and hybrids include southern highbush, rabbiteye (V. virgatum), and lowbush (V. angustifolium) types',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous, multi-stemmed woody shrub, commercially propagated by cuttings or tissue culture',
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
          text: 'Blueberry is native to North America, where wild Vaccinium species were long harvested before 20th-century breeding produced the cultivated highbush types that underlie most modern commercial production. Cultivation has since spread to other temperate and some subtropical regions with suitable acidic soils.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade statistics are compiled by national and international bodies and change over time with new plantings and market demand; current figures are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Most blueberry types require a period of winter chilling to break dormancy and flower normally, with the specific chilling requirement varying by cultivar and type; low-chill cultivars have been bred for milder climates.',
        },
        {
          type: 'paragraph',
          text: 'Spring frost during bloom is a significant risk, as flowers and young fruit are frost-sensitive, and can substantially reduce yield in an affected season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry requires distinctly acidic soil, generally well below the pH range suited to most other fruit and vegetable crops, along with good drainage and high organic matter content; peat and sandy, organic-amended soils are commonly favored.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Acidic soil is a strict requirement',
          text: 'Blueberry grown outside its required acidic soil range typically shows poor growth and iron-deficiency symptoms regardless of other management. Soil pH should be tested before planting, and correction (where feasible) should follow locally authorized guidance, since adjusting pH after establishment is difficult.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry is established from container-grown or bare-root nursery plants set into pre-acidified, organic-matter-amended soil or raised beds, since correcting soil pH broadly across a planted field afterward is slow and difficult.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to local chilling accumulation and market window',
            'Pre-plant soil acidification and organic matter incorporation where native soil pH is unsuitable',
            'Wide row spacing and raised beds in poorly drained sites to improve rooting conditions',
            'Cross-pollination between compatible cultivars, which can improve fruit size and set in many types',
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
          text: 'Blueberry has a shallow, fibrous root system adapted to acidic, low-nutrient soils and is notably prone to iron deficiency (chlorosis) when grown at insufficiently acidic pH, since iron availability to the plant depends strongly on soil acidity.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry has a shallow root system with limited drought tolerance and benefits from consistent soil moisture, particularly during fruit development. Drip irrigation is widely used to supply water precisely while avoiding prolonged waterlogging, which the shallow root system tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold (Botrytis) can affect blossoms and ripening fruit, particularly under cool, humid conditions, and anthracnose (ripe rot) affects fruit quality in warm, humid climates. Fruit flies, including species that attack ripening rather than only overripe fruit, are a significant insect pest concern in many regions, along with aphids.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, canopy management for airflow, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Blueberry is harvested by hand for the fresh market and increasingly by machine for processing markets, picked when fruit has reached full color and characteristic flavor, since the fruit does not continue ripening significantly after picking.',
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
            'Fresh-market eating berries',
            'Individually quick-frozen (IQF) fruit for food manufacturing',
            'Processed products including jam, juice, and baked-good fillings',
            'Dried and powdered products for supplements and food ingredients',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'podzol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cranberry' },
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'blackberry' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'soil-ph',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview. Cultivar, chilling requirement, and soil-acidification methods are region- and site-specific.',
  climateContext:
    'Temperate deciduous shrub requiring winter chill in most types; vulnerable to spring frost during bloom.',
  limitations: [
    'Required soil pH ranges and chilling hours vary by species type and cultivar and should be confirmed with local extension guidance before site selection.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global blueberry production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Blueberry disease and pest compendium data',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Blueberry soil acidification and management guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Blueberry cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Blueberry',
    description:
      'A structured, evidence-based reference on blueberry: classification, acidic-soil requirements, climate, nutrition, diseases, pests, and uses.',
    keywords: [
      'blueberry',
      'Vaccinium corymbosum',
      'berry crop',
      'acidic soil',
    ],
  },
  structuredData: { article: true },
};
