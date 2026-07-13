import type { CropContent } from '@/types/content';

export const cowpea: CropContent = {
  id: 'crop-cowpea',
  slug: 'cowpea',
  contentType: 'crop',
  title: 'Cowpea',
  scientificName: 'Vigna unguiculata',
  alternativeNames: ['Black-eyed pea', 'Southern pea', 'Crowder pea', 'Niebe'],
  category: 'Legume crop',
  subcategory: 'Grain, vegetable, and fodder pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Cowpea is a heat- and drought-tolerant grain legume of the tropics and subtropics, grown for protein-rich dry seed, edible green pods and leaves, and fodder, and valued in rotations for nitrogen fixation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cowpea is one of the most important grain legumes of the dry tropics, particularly in sub-Saharan Africa, where it is a key source of dietary protein and a versatile crop providing dry seed, fresh pods, edible leaves, and livestock fodder. It is also grown widely in Asia and the Americas, where it is known as the black-eyed pea or southern pea.',
    },
    {
      type: 'paragraph',
      text: 'The crop is prized for its tolerance of heat and drought and its ability to grow on poor, sandy soils where many other crops struggle. Like other legumes, cowpea forms root nodules with compatible rhizobia, fixing atmospheric nitrogen and improving soil fertility for following crops.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Vigna unguiculata' },
    {
      label: 'Primary uses',
      value: 'Dry seed, fresh pods and leaves as a vegetable, and fodder',
    },
    {
      label: 'Climate',
      value: 'Hot tropics and subtropics; drought- and heat-tolerant',
    },
    {
      label: 'Soil preference',
      value: 'Wide range including light sandy soils; well-drained',
      note: 'Sensitive to waterlogging; performs on soils too poor for many crops.',
    },
    {
      label: 'Cropping role',
      value:
        'Intercrop and rotation legume; fixes nitrogen and can serve as a cover crop',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea is a multipurpose legume grown for its dry seed, its tender green pods and leaves used as vegetables, and its haulms fed to livestock. Growth habit ranges from erect determinate types suited to grain production to spreading, indeterminate types used for fodder and ground cover.',
        },
        {
          type: 'paragraph',
          text: 'Its short growing cycle and drought tolerance make it well suited to rain-fed cropping in the dry tropics, where it is commonly intercropped with cereals such as sorghum, millet, and maize.',
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
            { term: 'Genus and species', description: 'Vigna unguiculata' },
            {
              term: 'Growth habit',
              description:
                'Annual herb ranging from erect to prostrate and climbing, bearing trifoliate leaves and long pods',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing rhizobia',
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
          text: 'Cowpea is widely regarded as having been domesticated in Africa, where the greatest diversity of the crop and its wild relatives occurs, before spreading to Asia and, later, to the Americas. Sub-Saharan Africa remains the center of production and consumption.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area, production, and trade by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea is a warm-season crop requiring high temperatures for good growth and is sensitive to frost and cool conditions. It is among the more heat- and drought-tolerant grain legumes, completing its cycle rapidly and escaping late-season drought in short-season environments.',
        },
        {
          type: 'paragraph',
          text: 'Excessive humidity and rainfall during flowering and pod fill can favor foliar disease and reduce grain quality, so the crop is often best adapted to warm, relatively dry growing seasons.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea grows on a wide range of soils and is notably productive on light, sandy soils of low fertility where many other crops perform poorly. Good drainage is important, as the crop is sensitive to waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Cowpea’s adaptation to poor sandy soils makes it valuable on marginal land, but drainage and freedom from prolonged waterlogging remain important for healthy roots and nodules.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cowpea is direct-seeded once soils are warm, either as a sole crop or intercropped with cereals. Growth habit is chosen to match the objective, with erect types favored for grain and spreading types for fodder and soil cover.',
        },
        {
          type: 'list',
          items: [
            'Cultivar and growth habit matched to end use (grain, vegetable, or fodder)',
            'Intercropping with cereals in many smallholder dry-tropics systems',
            'Timely weed control during early establishment, when cowpea competes poorly',
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
          text: 'Effective nodulation allows biological nitrogen fixation to meet much of the crop’s nitrogen demand. Phosphorus is frequently limiting on the sandy, weathered soils where cowpea is grown, and phosphorus supply is often key to good nodulation and yield.',
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
          text: 'Cowpea is grown mainly under rain-fed conditions, where its short cycle and drought tolerance allow it to produce a crop in seasons too dry or short for many alternatives. Supplemental irrigation is used in some systems, especially for vegetable-type production.',
        },
        {
          type: 'paragraph',
          text: 'Moisture during flowering and pod fill supports yield, while the crop’s ability to mature quickly helps it avoid terminal drought in marginal environments.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Insect pests are the leading constraint to cowpea production. Legume pod borers attack flowers and developing pods, aphids feed on foliage and transmit viruses, and flower thrips damage the reproductive structures. Storage weevils cause serious losses in dry seed after harvest.',
        },
        {
          type: 'paragraph',
          text: 'Anthracnose and root rots are among the fungal diseases affecting the crop, particularly under humid conditions and poor drainage. Management combines resistant cultivars, field sanitation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry cowpea is harvested once pods have matured and dried; because pods often mature unevenly, hand picking in several passes is common in smallholder systems, while uniform determinate types can be machine harvested. Green pods and leaves are picked at a tender stage for fresh use.',
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
            'Dry seed used in a wide range of dishes and as a protein staple across Africa, Asia, and the Americas',
            'Tender green pods and leaves eaten as vegetables',
            'Haulms and residues fed to livestock as high-quality fodder',
            'Use as a cover crop and green manure to improve soil fertility',
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
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'groundnut' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'cover-crop',
    'inoculum',
    'macronutrient',
  ],
  geographicScope:
    'Global overview centered on the dry tropics of sub-Saharan Africa. Growth habit, cropping system, and pest pressure vary widely by region.',
  climateContext:
    'Warm-season, heat- and drought-tolerant grain legume adapted to short rain-fed seasons and poor sandy soils.',
  limitations: [
    'Cultivar choice and cropping arrangement are region- and objective-specific decisions not reduced to universal guidance here.',
    'Insect pests, both in the field and in storage, are a major and variable constraint.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of cowpea in African food and farming systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'iita',
      citedFor: 'Cowpea breeding, agronomy, and pest management research',
    },
    { sourceId: 'cabi', citedFor: 'Cowpea disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cowpea (Vigna unguiculata)',
    description:
      'An evidence-based reference on cowpea: botany, heat and drought tolerance, sandy-soil adaptation, nitrogen fixation, diseases, pests, and uses.',
    keywords: ['cowpea', 'Vigna unguiculata', 'black-eyed pea', 'grain legume'],
  },
  structuredData: { article: true },
};
