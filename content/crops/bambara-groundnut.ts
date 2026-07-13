import type { CropContent } from '@/types/content';

export const bambaraGroundnut: CropContent = {
  id: 'crop-bambara-groundnut',
  slug: 'bambara-groundnut',
  contentType: 'crop',
  title: 'Bambara Groundnut',
  scientificName: 'Vigna subterranea',
  alternativeNames: ['Bambara bean', 'Bambara nut', 'Voandzou', 'Njugu'],
  category: 'Legume crop',
  subcategory: 'Underground-fruiting grain legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Bambara groundnut is an African indigenous grain legume that develops its seed underground, prized for drought tolerance and its ability to yield on poor soils, providing a complete, protein- and carbohydrate-rich pulse.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bambara groundnut is an indigenous African grain legume that, like the peanut, ripens its pods below the soil surface after flowers are pushed down and buried. It is grown mainly by smallholder farmers across sub-Saharan Africa as a resilient food crop, and its seed is considered nutritionally well balanced, combining protein with a substantial carbohydrate content.',
    },
    {
      type: 'paragraph',
      text: 'The crop is valued above all for its hardiness: it produces a harvest under drought and on poor, sandy soils where more demanding crops fail. Like other legumes, it forms nodules with compatible rhizobia and contributes fixed nitrogen to the soil.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Vigna subterranea' },
    {
      label: 'Primary uses',
      value:
        'Dry and fresh seed boiled, roasted, or ground into flour; a complete pulse food',
    },
    {
      label: 'Climate',
      value: 'Hot tropics; markedly drought-tolerant once established',
    },
    {
      label: 'Soil preference',
      value: 'Light, well-drained sandy soils; tolerant of low fertility',
      note: 'Underground pod development favors loose, well-drained soils.',
    },
    {
      label: 'Cropping role',
      value: 'Resilient food legume on marginal land; fixes nitrogen',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut is grown chiefly for its seed, which develops underground and is eaten fresh or dried, boiled, roasted, or ground into flour. It is an important subsistence and food-security crop across the drier parts of sub-Saharan Africa and is grown to a lesser extent in parts of Asia and South America.',
        },
        {
          type: 'paragraph',
          text: 'As a hardy, largely landrace-based crop, it is often grown by women farmers on marginal land and provides a reliable food source in seasons and soils that are unfavorable to other crops.',
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
            { term: 'Genus and species', description: 'Vigna subterranea' },
            {
              term: 'Growth habit',
              description:
                'Low-growing annual forming a rosette of leaves; flowers are pushed to the soil and pods mature underground',
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
          text: 'Bambara groundnut is native to West Africa, where its wild relatives occur and where it was domesticated, and it has since spread across sub-Saharan Africa and to parts of Asia and the Americas. It remains predominantly a smallholder crop.',
        },
        {
          type: 'paragraph',
          text: 'Comprehensive statistics on planted area and production are limited because much of the crop is grown for subsistence; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut is a hot-climate crop requiring warm temperatures throughout its cycle and is sensitive to frost. It is notably drought-tolerant once established and can set a crop in seasons of limited or erratic rainfall.',
        },
        {
          type: 'paragraph',
          text: 'Some landraces are photoperiod-sensitive, and adaptation is often specific to the local environment, so locally adapted material is important for reliable performance.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut grows best on light, well-drained sandy and sandy-loam soils, which suit the underground development of its pods and reduce the risk of rot. It tolerates low fertility but, like related crops, is sensitive to waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Loose, well-drained soils ease penetration of the flower stalks and pod formation below the surface and reduce pod rot in this underground-fruiting crop.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut is direct-seeded at the onset of the rains, often as a sole crop or intercropped with cereals. Earthing up or light cultivation around the plants can support pod development, and weed control is important during early growth.',
        },
        {
          type: 'list',
          items: [
            'Locally adapted landrace or cultivar matched to season length and climate',
            'Sowing into loose, well-drained soil suited to underground pod formation',
            'Weed control and, in some systems, light earthing up around plants',
            'Rhizobial associations that in many soils establish with native rhizobia',
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
          text: 'Bambara groundnut fixes nitrogen through nodulation, often with native rhizobia, and is adapted to soils of low fertility. Phosphorus and, in some soils, calcium and other nutrients influence pod filling and yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut is grown almost entirely under rain-fed conditions, where its drought tolerance is a key advantage. Moisture during flowering and pod filling supports yield, but the crop can produce a harvest under water-limited conditions that would fail more demanding crops.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bambara groundnut is relatively hardy, but leaf spots, powdery mildew, and Fusarium wilt affect the crop under favorable conditions, and pod and root rots can occur on poorly drained soils. Storage pests damage dry seed.',
        },
        {
          type: 'paragraph',
          text: 'Aphids and other sap-feeding insects, along with thrips, are among the field pests. Management relies mainly on healthy seed, rotation, field sanitation, and locally adapted material, with authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Because pods mature underground, bambara groundnut is harvested by lifting or pulling whole plants, usually by hand, once the foliage begins to senesce. Fresh pods are dug earlier for immediate cooking, while seed for storage is dried thoroughly.',
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
            'Fresh seed boiled and eaten as a vegetable in the early season',
            'Dried seed boiled, roasted, or ground into flour for a range of dishes',
            'A nutritionally balanced pulse combining protein and carbohydrate',
            'Residues used as livestock fodder; crop contributes fixed nitrogen to soils',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'cowpea' },
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
    'inoculum',
    'macronutrient',
    'yield',
  ],
  geographicScope:
    'Global overview centered on smallholder production in sub-Saharan Africa. Landrace adaptation is often strongly local.',
  climateContext:
    'Hot-climate, drought-tolerant grain legume of the semi-arid tropics; frost-sensitive and often photoperiod-sensitive.',
  limitations: [
    'The crop is largely landrace-based, and adaptation is often specific to local environments.',
    'Production statistics are incomplete because much of the crop is grown for subsistence.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of bambara groundnut as an African food-security legume',
    },
    {
      sourceId: 'iita',
      citedFor: 'Research on African grain legumes and their agronomy',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Bambara groundnut crop and pest compendium data',
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
    title: 'Bambara Groundnut (Vigna subterranea)',
    description:
      'An evidence-based reference on bambara groundnut: underground-fruiting botany, drought tolerance, sandy-soil agronomy, nitrogen fixation, and uses.',
    keywords: [
      'bambara groundnut',
      'Vigna subterranea',
      'bambara bean',
      'African legume',
    ],
  },
  structuredData: { article: true },
};
