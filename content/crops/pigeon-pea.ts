import type { CropContent } from '@/types/content';

export const pigeonPea: CropContent = {
  id: 'crop-pigeon-pea',
  slug: 'pigeon-pea',
  contentType: 'crop',
  title: 'Pigeon Pea',
  scientificName: 'Cajanus cajan',
  alternativeNames: ['Red gram', 'Tur', 'Arhar', 'Congo pea', 'Gandule bean'],
  category: 'Legume crop',
  subcategory: 'Grain and dual-purpose pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Short-lived perennial, usually grown as an annual',
  summary:
    'Pigeon pea is a deep-rooted, drought-tolerant grain legume grown mainly in the semi-arid tropics for its protein-rich dry seed, and valued in mixed cropping and rotations for its nitrogen-fixing ability.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pigeon pea is a woody, deep-rooted grain legume grown predominantly across the semi-arid tropics of South Asia, eastern and southern Africa, and parts of the Caribbean and Latin America. Although botanically a short-lived perennial, it is most often cultivated as an annual or as a one-to-two-year crop.',
    },
    {
      type: 'paragraph',
      text: 'Its deep taproot and hardy growth habit allow it to extract moisture and nutrients from lower soil layers, making it a resilient component of intercropping systems where it is frequently grown alongside cereals such as sorghum, maize, or millet. Like other legumes, it forms root nodules with compatible rhizobia, contributing biologically fixed nitrogen to the cropping system.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    {
      label: 'Life cycle',
      value: 'Short-lived perennial, usually grown as an annual',
    },
    { label: 'Scientific name', value: 'Cajanus cajan' },
    {
      label: 'Primary uses',
      value:
        'Dry split seed (dal), fresh green peas, fodder, fuelwood, and green manure',
    },
    {
      label: 'Climate',
      value:
        'Warm semi-arid tropics; notably drought-tolerant once established',
    },
    {
      label: 'Soil preference',
      value: 'Wide range of well-drained soils; sensitive to waterlogging',
      note: 'Deep rooting supports growth on lighter and marginal soils.',
    },
    {
      label: 'Cropping role',
      value:
        'Common intercrop with cereals; nitrogen fixation benefits rotations',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pigeon pea is grown chiefly for its dry seed, which is dehulled and split into dal in South Asia, and eaten as a fresh green pea in the Caribbean and Africa. The crop also supplies fodder, staking material, and fuelwood, and its residues and leaf fall improve soil fertility.',
        },
        {
          type: 'paragraph',
          text: 'Maturity types range from very early lines that fit into short growing seasons to traditional long-duration types that flower after the rains and are well suited to intercropping and residual-moisture cropping.',
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
            { term: 'Genus and species', description: 'Cajanus cajan' },
            {
              term: 'Growth habit',
              description:
                'Erect, woody, short-lived perennial shrub bearing trifoliate leaves and pods on a deeply rooted framework',
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
          text: 'Pigeon pea is generally considered to have been domesticated in the Indian subcontinent, from where it spread to Africa and, through the movement of people and trade, to the Caribbean and Latin America. India remains the largest producer and consumer.',
        },
        {
          type: 'paragraph',
          text: 'Current figures on planted area, production, and trade by country are compiled by FAO and national statistical agencies and should be consulted directly for up-to-date values.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pigeon pea is a warm-season crop of the tropics and subtropics, sensitive to frost and cool temperatures but notably tolerant of heat and drought once its deep root system is established. Many traditional types are photoperiod-sensitive, flowering as day length shortens.',
        },
        {
          type: 'paragraph',
          text: 'The crop is well adapted to environments with a distinct rainy season followed by a dry period, during which its deep roots continue to draw on stored soil moisture.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pigeon pea grows on a wide range of soils, from sandy loams to heavier clays, provided drainage is adequate. It is markedly sensitive to waterlogging, which impairs root and nodule function and increases the risk of soilborne wilt.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good internal drainage is a priority when siting pigeon pea, since standing water is strongly associated with root damage and wilt. Assess drainage using local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Pigeon pea is direct-seeded at the onset of the rains, frequently as an intercrop with a faster-maturing cereal that is harvested first, leaving the pigeon pea to complete its cycle on residual moisture. Spacing and maturity type are matched to the cropping system and season length.',
        },
        {
          type: 'list',
          items: [
            'Maturity type (early, medium, or long duration) matched to season length and cropping system',
            'Intercropping with cereals such as sorghum, millet, or maize in many smallholder systems',
            'Rotation and field selection to limit build-up of soilborne wilt',
            'Rhizobial inoculation in fields new to the crop where effective nodulation is uncertain',
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
          text: 'Biological nitrogen fixation can supply much of the crop’s nitrogen requirement where nodulation is effective. Phosphorus is often the most limiting nutrient in the semi-arid soils where pigeon pea is grown, and the crop is noted for its ability to access sparingly soluble soil phosphorus.',
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
          text: 'Pigeon pea is grown largely under rain-fed conditions, where its deep rooting and drought tolerance are central advantages. Supplemental irrigation is used in some higher-input systems, particularly for early-maturing types grown outside the main rainy season.',
        },
        {
          type: 'paragraph',
          text: 'Even given its drought tolerance, adequate moisture during flowering and pod fill supports yield, while excess water and poor drainage remain more damaging than short dry spells.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt, caused by a soilborne fungus, is among the most damaging diseases of pigeon pea in many regions and is aggravated by poor drainage and continuous cropping. Sterility mosaic and root rots also cause losses under favorable conditions.',
        },
        {
          type: 'paragraph',
          text: 'Pod borers are the principal insect threat, feeding directly on developing seed, while aphids and other sap feeders can transmit viruses and reduce vigor. Management combines resistant or tolerant cultivars, rotation, field monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry pigeon pea is harvested once pods have matured and dried, by hand picking in smallholder systems or by mechanical means where the crop is grown as a determinate, uniform stand. Green pigeon pea is picked at an immature, tender stage for fresh use.',
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
            'Dry seed dehulled and split into dal, a dietary protein staple in South Asia',
            'Fresh green seed used as a vegetable, especially in the Caribbean and Africa',
            'Foliage and residues used as livestock fodder and forage',
            'Woody stems used as fuel and staking material; leaf fall and residues improve soil fertility',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'inoculum',
    'macronutrient',
    'yield',
  ],
  geographicScope:
    'Global overview centered on the semi-arid tropics of South Asia and Africa. Maturity type, spacing, and cropping system are region-specific.',
  climateContext:
    'Warm-season, drought-tolerant grain legume of the semi-arid tropics; frost-sensitive and often photoperiod-sensitive.',
  limitations: [
    'Maturity type selection and intercropping arrangements are region- and system-specific and not reduced to universal guidance here.',
    'Waterlogging sensitivity means drainage quality strongly affects performance and wilt risk.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of pigeon pea in semi-arid food systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'icar', citedFor: 'Pulse agronomy and breeding in South Asia' },
    {
      sourceId: 'cabi',
      citedFor: 'Pigeon pea disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Pigeon Pea (Cajanus cajan)',
    description:
      'An evidence-based reference on pigeon pea: botany, semi-arid climate and soil needs, nitrogen fixation, intercropping, diseases, pests, and uses.',
    keywords: ['pigeon pea', 'Cajanus cajan', 'red gram', 'pulse legume'],
  },
  structuredData: { article: true },
};
