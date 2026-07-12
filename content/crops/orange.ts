import type { CropContent } from '@/types/content';

export const orange: CropContent = {
  id: 'crop-orange',
  slug: 'orange',
  contentType: 'crop',
  title: 'Orange',
  scientificName: 'Citrus sinensis (sweet orange)',
  alternativeNames: ['Sweet orange'],
  category: 'Fruit crop',
  subcategory: 'Citrus tree fruit',
  botanicalFamily: 'Rutaceae (citrus family)',
  lifecycle: 'Perennial',
  summary:
    'Orange is an evergreen citrus tree grown in subtropical and tropical regions for its fresh fruit and juice. Orchards are established from grafted trees and remain productive for many years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The sweet orange is an evergreen citrus tree cultivated widely across subtropical and tropical climates for fresh consumption and, in many producing regions, for large-scale juice processing. Like most citrus, commercial orange trees are grafted, combining a fruiting variety with a rootstock chosen for its disease resistance, vigor, and soil adaptation.',
    },
    {
      type: 'paragraph',
      text: 'Rootstock selection has historically been shaped by regional disease pressures, since some rootstocks are susceptible to graft-transmissible pathogens that spread through infected propagation material or insect vectors. This makes certified, disease-tested nursery stock an important part of orchard establishment in many regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (citrus family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Citrus sinensis' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit and juice processing',
    },
    {
      label: 'Climate',
      value: 'Subtropical to tropical; frost-sensitive evergreen canopy',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained sandy loams; poor tolerance of waterlogging and salinity',
      note: 'Rootstock choice strongly affects soil and disease tolerance.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Orange is grown commercially across a band of subtropical and tropical regions suited to citrus, from large processing-oriented plantings supplying juice concentrate to orchards focused on fresh-market fruit.',
        },
        {
          type: 'paragraph',
          text: 'As an evergreen tree, orange does not have a dormant leafless season like temperate deciduous fruit crops, which shapes both its climate sensitivity and its year-round management needs.',
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
              term: 'Principal species',
              description: 'Citrus sinensis (sweet orange)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting a fruiting variety onto a selected rootstock',
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
          text: 'Sweet orange is believed to have originated in southern China and Southeast Asia, arising through the ancient hybridization of ancestral citrus species, before spreading via trade routes to the Mediterranean, and later to the Americas following European colonization.',
        },
        {
          type: 'paragraph',
          text: 'Today, orange production is concentrated in a number of subtropical and tropical growing regions worldwide. Production and trade statistics are compiled by FAO and national agencies and should be sourced from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Orange is adapted to subtropical and tropical climates and is notably sensitive to frost, which can damage or kill foliage, wood, and fruit depending on severity and duration. Cold-hardiness varies somewhat among citrus types, but sweet orange has limited frost tolerance overall.',
        },
        {
          type: 'paragraph',
          text: 'Fruit quality, including sugar and acid balance and peel color, is influenced by temperature patterns during maturation, with some cooler nighttime temperatures during ripening favoring peel coloration in certain climates.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Orange is generally grown on well-drained sandy loam soils, since citrus roots are highly sensitive to waterlogging and prolonged saturation. The crop also has limited tolerance of soil and irrigation-water salinity compared with many other tree crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts strongly with local soil and water-quality conditions. Site assessment should be based on local soil survey information and water testing where salinity is a concern.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a citrus orchard depends on certified, disease-tested nursery trees grafted onto a rootstock matched to local soil, disease pressure, and irrigation-water quality.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for disease resistance, vigor, and soil adaptation',
            'Use of certified, disease-tested planting material',
            'Canopy management and pruning suited to the local climate and pest pressure',
            'Windbreaks or frost-protection measures in marginal climates',
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
          text: 'Nitrogen supports vegetative growth and fruit yield, while citrus is also prone to micronutrient deficiencies, including zinc, which can appear as characteristic leaf mottling and reduced growth in affected trees.',
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
          text: 'Orange is grown both under irrigation in drier subtropical regions and with supplemental irrigation in more humid climates. Drip irrigation is widely used to supply water precisely while managing salinity in the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Water stress at key developmental stages can affect fruit size and, in some cases, fruit drop, so irrigation scheduling is matched to local evapotranspiration data and soil-moisture monitoring.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is a fungal disease that can affect citrus foliage, twigs, and fruit, particularly under humid conditions. Citrus is also affected by a range of other fungal, bacterial, and viral diseases whose regional importance varies considerably. Aphids can transmit graft-transmissible viruses in addition to direct feeding damage, and spider mites can affect leaves and fruit finish.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on certified disease-free planting material, resistant or tolerant rootstocks where relevant, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Orange fruit does not continue to ripen significantly after picking, so harvest timing is based on reaching an acceptable sugar-to-acid ratio and peel condition for the intended market, whether fresh consumption or juice processing. Fruit is typically hand-picked to avoid damage.',
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
            'Fresh-market fruit consumption',
            'Juice and juice-concentrate processing',
            'Peel-derived essential oils and by-products',
            'Marmalade and other processed foods',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'anthracnose' }],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'banana' },
  ],
  glossaryTerms: ['perennial-crop', 'micronutrient', 'yield'],
  geographicScope:
    'Global overview of subtropical and tropical production. Rootstock and disease pressure vary substantially by region.',
  climateContext:
    'Evergreen citrus tree adapted to subtropical and tropical climates; sensitive to frost.',
  limitations: [
    'Rootstock choice and disease pressure vary regionally and are not exhaustively covered here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global orange production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Citrus disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for citrus',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Orange',
    description:
      'A structured, evidence-based reference on orange: classification, climate needs, orchard establishment, nutrition, diseases, pests, and end uses.',
    keywords: ['orange', 'Citrus sinensis', 'citrus', 'orange orchard'],
  },
  structuredData: { article: true },
};
