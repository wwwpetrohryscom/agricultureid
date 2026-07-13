import type { CropContent } from '@/types/content';

export const blackGram: CropContent = {
  id: 'crop-black-gram',
  slug: 'black-gram',
  contentType: 'crop',
  title: 'Black Gram',
  scientificName: 'Vigna mungo',
  alternativeNames: ['Urad', 'Urd bean', 'Black lentil', 'Mash'],
  category: 'Legume crop',
  subcategory: 'Short-duration pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Black gram is a warm-season pulse of South Asia grown for its small, dark, protein-rich seed, widely used split and ground in staple foods, and valued as a short-season rotation and rice-fallow crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Black gram, known as urad in South Asia, is a small-seeded pulse legume closely related to mung bean. It is a dietary staple across the Indian subcontinent, where its split and ground seed is central to many everyday foods, and it is grown mainly as a short-duration crop within cereal-based cropping systems.',
    },
    {
      type: 'paragraph',
      text: 'The crop tolerates a range of conditions, including the residual moisture of rice fallows, and improves soil fertility through nitrogen fixation. Like other legumes, it forms nodules with compatible rhizobia and contributes residual nitrogen and organic matter to the rotation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Vigna mungo' },
    {
      label: 'Primary uses',
      value:
        'Split and whole dry seed, flour and batter, and dhal; residues as fodder',
    },
    {
      label: 'Climate',
      value:
        'Warm season; short cycle suited to rice fallows and catch cropping',
    },
    {
      label: 'Soil preference',
      value: 'Loams to heavier clay loams; tolerant of a range of soils',
      note: 'Better suited than many pulses to heavier, moisture-retentive soils.',
    },
    {
      label: 'Cropping role',
      value: 'Rice-fallow and rotation legume; fixes nitrogen',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Black gram is grown mainly for its dry seed, which is used split, whole, or ground into flour and batter for staple foods across South Asia. Its short duration and adaptability allow it to be grown in the main season, in rice fallows, and as a catch crop.',
        },
        {
          type: 'paragraph',
          text: 'The crop is often grown on residual soil moisture after rice, using its ability to establish and mature quickly on heavier soils that retain moisture into the dry season.',
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
            { term: 'Genus and species', description: 'Vigna mungo' },
            {
              term: 'Growth habit',
              description:
                'Spreading, hairy annual herb bearing trifoliate leaves and short pods with small dark seeds',
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
          text: 'Black gram is generally considered to have been domesticated in the Indian subcontinent, which remains the center of its production and consumption, with additional cultivation elsewhere in Asia.',
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
          text: 'Black gram is a warm-season crop requiring high temperatures and is sensitive to frost. Its short cycle allows it to be grown in the rainy season and in the cooler, drier post-rice period where residual moisture is available.',
        },
        {
          type: 'paragraph',
          text: 'Excessive rainfall during pod maturity can cause seed weathering and favor disease, so drier conditions during ripening are preferred.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Black gram grows on a wide range of soils and is somewhat better suited than many pulses to heavier, moisture-retentive clay loams, a trait that supports its use in rice-fallow cropping. It nonetheless requires adequate drainage and is sensitive to prolonged waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Its tolerance of heavier soils underpins black gram’s role in rice fallows, but standing water still damages roots and nodules.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Black gram is direct-seeded, often broadcast into a standing or recently harvested rice crop to exploit residual moisture, or sown into a prepared seedbed in the main season. Weed control during early growth is important because the crop establishes slowly.',
        },
        {
          type: 'list',
          items: [
            'Short-duration cultivar matched to the cropping window and season',
            'Sowing timed to make use of residual moisture in rice-fallow systems',
            'Timely weed management during slow early establishment',
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
          text: 'Effective nodulation supplies much of the crop’s nitrogen requirement. Phosphorus is often limiting, and adequate early nutrient availability supports nodulation and pod set in this short-season crop.',
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
          text: 'Black gram is grown under both rain-fed and residual-moisture conditions, with supplemental irrigation used in some systems. Moisture during flowering and pod fill supports yield, while the crop remains intolerant of standing water.',
        },
        {
          type: 'paragraph',
          text: 'In rice-fallow cropping, the crop relies largely on stored soil moisture, making cultivar duration and sowing timing important to match the drying profile of the soil.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew and anthracnose are common foliar diseases, and yellow mosaic virus, transmitted by whiteflies, is a major disease of black gram in South Asia. Root rots occur under wet, poorly drained conditions.',
        },
        {
          type: 'paragraph',
          text: 'Whiteflies, aphids, thrips, and pod borers are important insect pests, and storage weevils damage dry seed. Management combines resistant cultivars, whitefly control to limit virus spread, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Black gram is harvested once pods have matured and dried, typically by hand pulling or cutting in smallholder systems because of uneven maturity and a spreading habit. Dry weather during ripening reduces losses from seed weathering.',
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
            'Split and whole dry seed used in dhal and a wide range of staple dishes',
            'Ground seed used in batters and fermented foods across South Asia',
            'Residues and haulms fed to livestock as fodder',
            'Use as a short-season legume to improve soil fertility in rotations',
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
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'lentil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'inoculum',
    'macronutrient',
    'yield',
  ],
  geographicScope:
    'Global overview centered on the Indian subcontinent, including rice-fallow cropping. Cultivar duration and disease pressure vary by region.',
  climateContext:
    'Warm-season, short-duration pulse tolerant of heavier soils and residual-moisture cropping; frost-sensitive.',
  limitations: [
    'Cultivar duration and sowing timing in rice-fallow systems are region-specific and not reduced to universal guidance here.',
    'Whitefly-transmitted yellow mosaic virus is a major but regionally variable constraint.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of black gram in South Asian pulse cropping',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'icar',
      citedFor: 'Black gram agronomy and rice-fallow cropping research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Black gram disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Black Gram (Vigna mungo)',
    description:
      'An evidence-based reference on black gram (urad): botany, rice-fallow agronomy, soil needs, nitrogen fixation, diseases, pests, and food uses.',
    keywords: ['black gram', 'Vigna mungo', 'urad', 'pulse legume'],
  },
  structuredData: { article: true },
};
