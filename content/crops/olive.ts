import type { CropContent } from '@/types/content';

export const olive: CropContent = {
  id: 'crop-olive',
  slug: 'olive',
  contentType: 'crop',
  title: 'Olive',
  scientificName: 'Olea europaea',
  alternativeNames: ['Common olive'],
  category: 'Tree fruit crop',
  subcategory: 'Mediterranean oil and table fruit',
  botanicalFamily: 'Oleaceae (olive family)',
  lifecycle: 'Perennial',
  summary:
    'Olive is a long-lived evergreen tree grown across Mediterranean-type climates for oil and table fruit, tolerant of drought, heat, and poor soils once established.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Olive is one of the defining perennial crops of Mediterranean-type climates, grown for its fruit, which is pressed for oil or cured for table consumption. Trees can remain productive for many decades, and some traditional groves are far older, making orchard-level decisions long-term commitments.',
    },
    {
      type: 'paragraph',
      text: 'Cultivars are selected according to end use — oil, table, or dual-purpose — and orchard systems range from widely spaced traditional groves to modern high-density hedgerow plantings designed for mechanical harvest.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Oleaceae (olive family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Olea europaea' },
    {
      label: 'Primary uses',
      value: 'Olive oil, table (cured) olives',
    },
    {
      label: 'Climate',
      value: 'Mediterranean-type; hot, dry summers and mild, wet winters',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, often calcareous soils; tolerant of poor soils',
      note: 'Tolerance to salinity and drought varies by cultivar.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Olive is grown across Mediterranean-climate regions worldwide, from long-established groves around the Mediterranean basin to newer plantings in similar climates elsewhere, spanning traditional low-density orchards and intensive mechanized systems.',
        },
        {
          type: 'paragraph',
          text: 'The crop’s tolerance of heat, drought, and marginal soils has supported its cultivation on land less suited to many other tree crops, though yield and oil quality still respond strongly to management and climate.',
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
            { term: 'Family', description: 'Oleaceae (olive family)' },
            { term: 'Genus', description: 'Olea' },
            {
              term: 'Principal species',
              description: 'Olea europaea (cultivated olive)',
            },
            {
              term: 'Growth habit',
              description:
                'Long-lived evergreen tree, commercially propagated from cuttings and grown in traditional or hedgerow orchard systems',
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
          text: 'Olive cultivation traces back thousands of years around the eastern Mediterranean basin, spreading across southern Europe, North Africa, and the Near East before later introduction to other Mediterranean-type climates, including parts of the Americas, southern Africa, and Australia.',
        },
        {
          type: 'paragraph',
          text: 'Production remains concentrated around the Mediterranean basin, with current production, cultivar, and trade figures compiled by FAO, national agencies, and, within the European Union, EU agricultural authorities.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Olive is adapted to Mediterranean-type climates with hot, dry summers and mild, wet winters, and it requires a period of winter chilling for normal flowering, though its chilling requirement is modest compared with many temperate fruit trees.',
        },
        {
          type: 'paragraph',
          text: 'The crop tolerates high summer temperatures and drought well once established, but young trees and blossom are more vulnerable to frost, which can damage or kill tissue in unusually cold winters.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Olive tolerates a wide range of soils, including shallow, stony, and calcareous (chalky) soils where many other tree crops perform poorly, provided drainage is adequate. Well-structured loams support the best growth and yield.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging is poorly tolerated and increases the risk of root diseases such as Verticillium wilt. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New groves are established from cultivars selected for oil or table use, climate adaptation, and, increasingly, suitability for mechanical harvest, with spacing set according to the chosen training and harvest system.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for oil or table use and regional climate adaptation',
            'Training system choice, from traditional open-vase forms to modern hedgerow systems for mechanical harvest',
            'Pruning to maintain light penetration and manage the biennial (alternate) bearing tendency of many cultivars',
            'Long-term orchard floor and irrigation management across many productive decades',
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
          text: 'Nitrogen supports vegetative growth and fruit set, while boron is closely linked to flower and fruit set in olive, with deficiency associated with poor fruiting. Potassium supports fruit growth and oil accumulation.',
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
          text: 'Traditional olive groves are often grown rain-fed, relying on the tree’s deep rooting and drought tolerance, while modern intensive orchards commonly use deficit irrigation, applying water strategically below full crop demand to manage vigor and support oil quality.',
        },
        {
          type: 'paragraph',
          text: 'Water stress at critical stages such as flowering and fruit set can reduce yield, so irrigated systems schedule deficits carefully around these periods.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose affects fruit, causing rot that reduces oil quality, particularly under wet conditions near harvest, while Verticillium wilt is a soil-borne fungal disease that can cause serious dieback and tree loss, especially where susceptible crops preceded the grove. The olive fruit fly is a major insect pest affecting fruit quality, and scale insects can weaken trees and promote sooty mold.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Olive is harvested by hand, with hand-held or mechanical shakers, or with continuous mechanical harvesters in hedgerow systems, with timing set by intended use and desired ripeness, since oil composition and table-olive processing both depend on fruit maturity at picking.',
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
            'Extraction of olive oil for culinary and food-industry use',
            'Curing and processing of table olives',
            'By-products such as pomace used for oil extraction residues, animal feed, or fuel',
            'Ornamental and landscape use in Mediterranean-climate regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'chalky-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of Mediterranean-type climate production. Cultivar, training system, and irrigation strategy are region- and site-specific.',
  climateContext:
    'Mediterranean-type climate tree crop tolerant of heat and drought; requires modest winter chilling and is frost-sensitive when young or in bloom.',
  limitations: [
    'Cultivar choice, training system, and deficit-irrigation strategy are site- and market-specific decisions not covered by universal values here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global olive production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union olive sector agronomy and policy context',
    },
    { sourceId: 'cabi', citedFor: 'Olive disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Olive',
    description:
      'A structured, evidence-based reference on olive: classification, Mediterranean climate needs, orchard management, nutrition, diseases, pests, and uses.',
    keywords: ['olive', 'Olea europaea', 'olive oil', 'olive orchard'],
  },
  structuredData: { article: true },
};
