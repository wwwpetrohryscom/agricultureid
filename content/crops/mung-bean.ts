import type { CropContent } from '@/types/content';

export const mungBean: CropContent = {
  id: 'crop-mung-bean',
  slug: 'mung-bean',
  contentType: 'crop',
  title: 'Mung Bean',
  scientificName: 'Vigna radiata',
  alternativeNames: ['Green gram', 'Golden gram', 'Moong', 'Mung'],
  category: 'Legume crop',
  subcategory: 'Short-duration pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Mung bean is a fast-maturing, warm-season pulse grown across Asia for its small green protein-rich seed, widely used whole, split, sprouted, and as flour, and valued as a short-season rotation and catch crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mung bean, also called green gram, is a small-seeded pulse legume grown mainly across South and Southeast Asia and increasingly in Australia and Africa. Its short growing cycle allows it to fit between longer-season crops as a catch or relay crop, and it is a familiar ingredient worldwide in the form of bean sprouts.',
    },
    {
      type: 'paragraph',
      text: 'The crop is valued for its digestible protein, its quick maturity, and its ability to improve soil fertility through nitrogen fixation. Like other legumes, it forms nodules with compatible rhizobia and leaves residual nitrogen and organic matter for following crops.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Vigna radiata' },
    {
      label: 'Primary uses',
      value:
        'Whole and split dry seed, sprouts, flour, and dhal; residues as fodder',
    },
    {
      label: 'Climate',
      value: 'Warm season; short cycle suited to catch and relay cropping',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams of moderate fertility',
      note: 'Sensitive to waterlogging, especially at flowering and pod fill.',
    },
    {
      label: 'Cropping role',
      value: 'Short-duration rotation and catch crop; fixes nitrogen',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mung bean is grown mainly for its dry seed, consumed whole, split into dhal, ground into flour, or germinated into bean sprouts. Its short duration makes it a flexible crop that fits into the gaps of cereal-based cropping systems.',
        },
        {
          type: 'paragraph',
          text: 'Because it matures quickly and fixes nitrogen, mung bean is often grown as a summer catch crop or relay crop, providing an additional harvest and a fertility benefit within an annual rotation.',
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
            { term: 'Genus and species', description: 'Vigna radiata' },
            {
              term: 'Growth habit',
              description:
                'Erect to semi-erect annual herb bearing trifoliate leaves and slender pods that mature over an extended period',
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
          text: 'Mung bean is generally considered to have been domesticated in the Indian subcontinent, from where it spread across Asia. It remains most important in South and Southeast Asia, with expanding production in Australia and parts of Africa.',
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
          text: 'Mung bean is a warm-season crop that requires high temperatures and is sensitive to frost and cool conditions. Its short cycle allows it to be grown in the warm months of temperate regions and in the dry season of the tropics where moisture allows.',
        },
        {
          type: 'paragraph',
          text: 'Prolonged wet weather during pod maturity can cause seed to sprout in the pod and favor foliar disease, so drier conditions during ripening are preferred.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mung bean performs best on well-drained loams and sandy loams of moderate fertility. It is sensitive to waterlogging, particularly around flowering and pod fill, and to strongly acidic or saline soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good drainage is important, since even short periods of waterlogging around flowering can sharply reduce mung bean yield.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Mung bean is direct-seeded into a warm, moist seedbed, often as a short catch crop or relay crop within a cereal rotation. Because the crop competes weakly with weeds when young, early weed management is important.',
        },
        {
          type: 'list',
          items: [
            'Short-duration cultivar chosen to fit the available window between main crops',
            'Direct seeding into warm, well-drained soil with good moisture at establishment',
            'Timely weed control during the crop’s slow early growth',
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
          text: 'Effective nodulation supplies much of the crop’s nitrogen requirement. Phosphorus and, on some soils, potassium and micronutrients such as zinc influence nodulation and yield; short-season crops benefit from adequate early nutrient availability.',
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
          text: 'Mung bean is grown both under rain-fed conditions and with irrigation. Its short cycle limits total water use, but moisture during flowering and pod fill is important, and the crop is intolerant of standing water.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, careful drainage and avoidance of waterlogging are as important as the water applied.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is a common foliar disease, particularly in cooler or humid growing periods, and anthracnose and root rots also affect the crop. Yellow mosaic, transmitted by whiteflies, is a major virus disease of mung bean in South Asia.',
        },
        {
          type: 'paragraph',
          text: 'Whiteflies, aphids, thrips, and pod borers are key insect pests, and storage weevils damage dry seed after harvest. Management combines resistant cultivars, whitefly control to limit virus spread, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Because pods mature unevenly and can shatter, mung bean is often harvested in one or more hand pickings in smallholder systems, while uniform-maturing cultivars can be machine harvested. Dry, settled weather during ripening reduces losses from sprouting and weathering.',
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
            'Whole and split dry seed cooked in soups, dhal, and porridges',
            'Germinated seed sold as bean sprouts',
            'Flour and starch used in noodles, desserts, and processed foods',
            'Residues and haulms used as livestock fodder; crop used as green manure',
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
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'chickpea' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'inoculum',
    'macronutrient',
    'yield',
  ],
  geographicScope:
    'Global overview centered on South and Southeast Asia. Cropping window, cultivar duration, and disease pressure vary by region.',
  climateContext:
    'Warm-season, short-duration pulse suited to catch and relay cropping; frost-sensitive and intolerant of waterlogging.',
  limitations: [
    'Cultivar duration and cropping window are region-specific choices not reduced to universal guidance here.',
    'Whitefly-transmitted yellow mosaic virus is a major but regionally variable constraint.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of mung bean in Asian pulse-based cropping',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'icar',
      citedFor: 'Mung bean agronomy and breeding in South Asia',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Mung bean disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Mung Bean (Vigna radiata)',
    description:
      'An evidence-based reference on mung bean: botany, short-season agronomy, soil needs, nitrogen fixation, diseases, pests, and food and sprout uses.',
    keywords: ['mung bean', 'Vigna radiata', 'green gram', 'pulse legume'],
  },
  structuredData: { article: true },
};
