import type { CropContent } from '@/types/content';

export const lablab: CropContent = {
  id: 'crop-lablab',
  slug: 'lablab',
  contentType: 'crop',
  title: 'Lablab',
  scientificName: 'Lablab purpureus',
  alternativeNames: [
    'Hyacinth bean',
    'Dolichos bean',
    'Bonavist bean',
    'Egyptian kidney bean',
  ],
  category: 'Legume crop',
  subcategory: 'Multipurpose grain, vegetable, and forage legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Short-lived perennial, often grown as an annual',
  summary:
    'Lablab is a vigorous, drought-tolerant tropical legume grown for dry seed, edible green pods, high-quality forage, and as a cover crop and green manure, valued for its adaptability and nitrogen fixation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lablab, also called hyacinth bean or dolichos, is a vigorous climbing or trailing legume grown across the tropics and subtropics for several purposes: its dry seed as a pulse, its tender green pods as a vegetable, its foliage as livestock forage, and the whole plant as a cover crop and green manure.',
    },
    {
      type: 'paragraph',
      text: 'Botanically a short-lived perennial, it is commonly grown as an annual. It is prized for its drought tolerance, rapid growth, and adaptability, and, like other legumes, it forms nodules with compatible rhizobia, fixing nitrogen and improving soil fertility.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    {
      label: 'Life cycle',
      value: 'Short-lived perennial, often grown as an annual',
    },
    { label: 'Scientific name', value: 'Lablab purpureus' },
    {
      label: 'Primary uses',
      value:
        'Dry seed, green pods and beans, forage, cover crop, and green manure',
    },
    {
      label: 'Climate',
      value: 'Warm tropics and subtropics; drought-tolerant once established',
    },
    {
      label: 'Soil preference',
      value: 'Wide range of well-drained soils, from sands to clays',
      note: 'Adaptable, but sensitive to prolonged waterlogging.',
    },
    {
      label: 'Cropping role',
      value: 'Multipurpose food, forage, and soil-improving legume',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lablab is a multipurpose legume grown for food, feed, and soil improvement. In some regions its dry seed is a staple pulse and its immature pods a common vegetable, while in others it is grown primarily as a forage legume or as a cover crop in conservation and mixed-farming systems.',
        },
        {
          type: 'paragraph',
          text: 'The crop’s vigorous, twining growth and deep rooting give it drought tolerance and make it useful for ground cover, weed suppression, and the production of large amounts of nitrogen-rich biomass.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Lablab purpureus' },
            {
              term: 'Growth habit',
              description:
                'Vigorous climbing or trailing legume with trifoliate leaves, showy flowers, and flattened pods',
            },
            {
              term: 'Root system',
              description:
                'Deep taproot bearing nodules that host nitrogen-fixing rhizobia',
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
          text: 'Lablab is generally considered to have an African origin, with a long history of cultivation and diversity in Africa and South Asia. It is now grown throughout the tropics and subtropics for food, forage, and soil improvement.',
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
          text: 'Lablab is a warm-season crop of the tropics and subtropics, sensitive to frost but tolerant of heat and, once established, of drought. Its deep roots allow it to remain productive during dry periods that limit shallower-rooted crops.',
        },
        {
          type: 'paragraph',
          text: 'Some types are photoperiod-sensitive, flowering as day length shortens, which affects the timing of seed and forage production.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lablab grows on a wide range of soils, from sands to heavy clays, provided drainage is adequate. It tolerates moderately low fertility and a range of pH but is sensitive to prolonged waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Lablab’s broad soil adaptability makes it useful across varied environments, but good drainage remains important for healthy roots and nodulation.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Lablab is direct-seeded, either as a sole crop, intercropped with cereals, or undersown as a cover crop. Its vigorous growth suppresses weeds once established, though early weed control supports a good stand.',
        },
        {
          type: 'list',
          items: [
            'Type and end use (grain, vegetable, forage, or cover crop) chosen to match the objective',
            'Intercropping or relay cropping with cereals in many smallholder systems',
            'Use as a cover crop and green manure to build soil fertility and suppress weeds',
            'Rhizobial inoculation in fields where effective nodulation is uncertain',
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
          text: 'Lablab fixes nitrogen through nodulation and produces abundant biomass, making it an effective green manure and cover crop. Phosphorus supply supports nodulation and growth, particularly on weathered tropical soils.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Lablab is grown mainly under rain-fed conditions, where its drought tolerance is a key advantage for both forage and seed production. Supplemental irrigation is used in some vegetable and seed-production systems.',
        },
        {
          type: 'paragraph',
          text: 'Its deep root system allows continued growth on stored soil moisture, extending the useful period of forage production into dry spells.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew, anthracnose, and leaf spots affect lablab under favorable conditions, and root rots occur on poorly drained soils. Viruses transmitted by sap-feeding insects can also affect the crop.',
        },
        {
          type: 'paragraph',
          text: 'Pod borers, aphids, whiteflies, and thrips are among the insect pests. Management combines resistant material, rotation, field sanitation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry lablab seed is harvested once pods mature and dry, often by hand because of the crop’s spreading, indeterminate habit. Green pods and immature beans are picked at a tender stage, and forage is cut or grazed at a suitable growth stage.',
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
            'Dry seed used as a pulse; some types require processing to reduce anti-nutritional compounds',
            'Immature pods and beans eaten as a green vegetable',
            'High-quality forage and fodder for ruminant livestock',
            'Use as a cover crop and green manure for soil fertility and weed suppression',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'common-bean' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  glossaryTerms: [
    'crop-rotation',
    'cover-crop',
    'inoculum',
    'forage',
    'macronutrient',
  ],
  geographicScope:
    'Global overview across the tropics and subtropics. End use (food, forage, or cover crop) and type vary widely by region.',
  climateContext:
    'Warm-season, drought-tolerant multipurpose legume; frost-sensitive and sometimes photoperiod-sensitive.',
  limitations: [
    'End use and type selection are region- and objective-specific and not reduced to universal guidance here.',
    'Some grain types require processing to reduce anti-nutritional compounds before consumption.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of lablab as a food, forage, and cover-crop legume',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Lablab crop, forage, and pest compendium data',
    },
    {
      sourceId: 'iita',
      citedFor: 'Research on tropical legumes and cover crops',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Botanical description and classification',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Lablab (Lablab purpureus)',
    description:
      'An evidence-based reference on lablab (hyacinth bean): multipurpose botany, drought tolerance, forage and cover-crop use, nitrogen fixation, and pests.',
    keywords: ['lablab', 'Lablab purpureus', 'hyacinth bean', 'forage legume'],
  },
  structuredData: { article: true },
};
