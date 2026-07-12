import type { CropContent } from '@/types/content';

export const chestnut: CropContent = {
  id: 'crop-chestnut',
  slug: 'chestnut',
  contentType: 'crop',
  title: 'Chestnut',
  scientificName:
    'Castanea sativa (European chestnut); other cultivated species include Castanea dentata (American chestnut) and Castanea mollissima (Chinese chestnut)',
  alternativeNames: ['Sweet chestnut'],
  category: 'Tree nut crop',
  subcategory: 'Deciduous nut tree',
  botanicalFamily: 'Fagaceae (beech family)',
  lifecycle: 'Perennial',
  summary:
    'Chestnut is a deciduous nut tree of the beech family grown for its starchy, relatively low-oil nut, eaten roasted or boiled and processed into flour and other products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chestnut trees produce spiny burrs that split open at maturity to release one or more nuts. Unlike most tree nuts, the chestnut kernel is high in starch and low in oil, giving it a texture and culinary role closer to a starchy staple than an oilseed nut.',
    },
    {
      type: 'paragraph',
      text: 'Several Castanea species and their hybrids are cultivated worldwide, selected in part for resistance to chestnut blight, a disease that historically devastated American chestnut populations and continues to shape breeding and orchard siting decisions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fagaceae (beech family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    {
      label: 'Main species',
      value: 'Castanea sativa, C. mollissima, C. dentata',
    },
    {
      label: 'Primary uses',
      value: 'Roasted or boiled nut, flour, confectionery',
    },
    {
      label: 'Climate',
      value: 'Cool to warm temperate, with a winter chilling requirement',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, acidic sandy loams',
      note: 'Chestnut generally performs poorly on calcareous (high-pH) soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chestnut is grown both as a traditional orchard crop in parts of Europe and Asia and, increasingly, as an alternative tree crop elsewhere. Trees can be very long-lived, and in some regions old chestnut groves have been managed for nut production for centuries.',
        },
        {
          type: 'paragraph',
          text: 'Production combines dedicated orchards of grafted cultivars with, in some traditional areas, semi-wild or coppiced stands managed for both timber and nuts.',
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
            { term: 'Family', description: 'Fagaceae (beech family)' },
            { term: 'Genus', description: 'Castanea' },
            {
              term: 'Principal species',
              description:
                'Castanea sativa, Castanea mollissima, Castanea crenata, Castanea dentata, and interspecific hybrids',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree bearing nuts enclosed in a spiny burr that splits at maturity',
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
          text: 'European chestnut is native to southern Europe, western Asia, and North Africa, where it has long been cultivated as a staple food tree in some regions. Chinese and Japanese chestnuts are native to East Asia, and American chestnut was historically dominant across the eastern forests of North America before the introduction of chestnut blight in the early twentieth century.',
        },
        {
          type: 'paragraph',
          text: 'Today, leading producers include China, Turkey, South Korea, and countries in southern Europe. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chestnut requires a period of winter chilling and is generally adapted to cool to warm temperate climates with moderate, well-distributed rainfall. Prolonged heat and drought during summer can stress trees and affect nut fill.',
        },
        {
          type: 'paragraph',
          text: 'Trees prefer well-drained, moderately acidic sandy loams and generally perform poorly on shallow, waterlogged, or strongly calcareous soils, which restrict root development and increase disease susceptibility.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site suitability, including soil pH and drainage, should be confirmed with local soil survey information before establishing an orchard.',
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
            'Grafted cultivars, often chosen for blight tolerance and nut quality, established on suitable rootstocks',
            'Spacing and pruning managed to develop a productive canopy and ease of harvest',
            'Cross-pollination between compatible cultivars generally needed for good nut set',
            'Long-term orchard planning given the extended productive life of chestnut trees',
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
          text: 'Nitrogen and potassium support vegetative growth and nut development, and boron has been associated with fruit set and quality in some chestnut-growing regions.',
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
          text: 'Chestnut is grown both rain-fed, in regions with reliably moist summers, and under supplemental irrigation where summers are drier. Water stress during nut development can reduce yield and kernel quality.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, scheduling follows local evapotranspiration estimates and soil moisture monitoring appropriate to the orchard system.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Chestnut blight, a bark canker disease, historically devastated American chestnut populations and remains a major consideration in breeding and site selection in affected regions. Among the diseases tracked here, anthracnose can affect leaves and nuts, while root rot, particularly ink disease caused by Phytophthora species, can kill trees on poorly drained sites. The chestnut weevil is a significant nut-infesting pest, and aphids are a common foliage pest.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Anthracnose', 'Disease', 'Affects leaves and developing nuts'],
            [
              'Root rot',
              'Disease',
              'Includes ink disease on poorly drained sites',
            ],
            ['Weevils', 'Pest', 'Larvae develop inside nuts, reducing quality'],
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
          text: 'Nuts drop from the tree as burrs split open in autumn and are collected from the ground, either by hand or with mechanical sweepers and harvesters, then cleaned and cured before storage or sale.',
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
            'Roasted or boiled whole nuts eaten as a starchy food',
            'Chestnut flour used in baking and regional dishes',
            'Processed products such as candied chestnuts (marrons glacés) and purées',
            'Timber and coppice wood from chestnut trees used in some traditional production systems',
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
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pecan' },
    { type: 'crop', slug: 'walnut' },
    { type: 'crop', slug: 'hazelnut' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; major production in China, with significant production also in Turkey, South Korea, and southern Europe.',
  climateContext:
    'Cool to warm temperate deciduous tree crop with a winter chilling requirement; generally intolerant of prolonged heat, drought, or waterlogging.',
  limitations: [
    'Chestnut blight and regional disease pressure vary considerably and are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global chestnut production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Chestnut disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'rhs', citedFor: 'Cultivation and site-selection guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chestnut',
    description:
      'A structured, evidence-based reference on chestnut: classification, climate and soil needs, orchard management, diseases, pests, harvest, and food uses.',
    keywords: [
      'chestnut',
      'Castanea sativa',
      'tree nut crop',
      'chestnut cultivation',
    ],
  },
  structuredData: { article: true },
};
