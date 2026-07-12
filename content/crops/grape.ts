import type { CropContent } from '@/types/content';

export const grape: CropContent = {
  id: 'crop-grape',
  slug: 'grape',
  contentType: 'crop',
  title: 'Grape',
  scientificName:
    'Vitis vinifera (European grape); interspecific hybrids and American Vitis species such as Vitis labrusca are also cultivated',
  alternativeNames: ['Wine grape', 'Table grape'],
  category: 'Fruit crop',
  subcategory: 'Perennial vine fruit',
  botanicalFamily: 'Vitaceae (grape family)',
  lifecycle: 'Perennial',
  summary:
    'Grape is a woody perennial vine grown worldwide for wine, table fruit, raisins, and juice. Vineyards are established from grafted or own-rooted vines and cropped over many years on trellised training systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grapevines are long-lived, climbing perennials trained onto trellis systems to support the canopy and simplify management. Vitis vinifera, the species behind most wine and much table-grape production, is grown across a wide range of temperate and Mediterranean-type climates, while other Vitis species and hybrids are used in regions with more challenging winters or disease pressure.',
    },
    {
      type: 'paragraph',
      text: 'Because vines can remain productive for decades, decisions on rootstock, trellis system, and row orientation are made at planting and shape management for the life of the vineyard. End use — wine, fresh table fruit, drying, or juice — strongly influences cultivar choice and canopy management.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Vitaceae (grape family)' },
    { label: 'Life cycle', value: 'Perennial woody vine' },
    { label: 'Main species', value: 'Vitis vinifera' },
    {
      label: 'Primary uses',
      value: 'Wine, table fruit, raisins, juice',
    },
    {
      label: 'Climate',
      value: 'Temperate to Mediterranean; ripening driven by cumulative heat',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy or loam soils; tolerates lower fertility',
      note: 'Rootstock and soil interact strongly with vigor and disease pressure.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Grapevines are grown as trained, trellised perennials rather than replanted annually. Vineyard systems range from mechanized, high-volume production to smaller plantings managed for specific wine styles or fresh-market quality.',
        },
        {
          type: 'paragraph',
          text: "Because Vitis vinifera is susceptible to the root-feeding insect phylloxera in many regions, much of the world's vinifera production is grafted onto resistant rootstocks derived from American Vitis species, making rootstock choice a central establishment decision.",
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
            { term: 'Family', description: 'Vitaceae (grape family)' },
            { term: 'Genus', description: 'Vitis' },
            {
              term: 'Principal species',
              description:
                'Vitis vinifera, together with hybrid and rootstock material derived from American Vitis species',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous, climbing woody vine trained onto a trellis or support structure',
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
          text: 'Vitis vinifera originates from the region spanning the Caucasus, the Near East, and the eastern Mediterranean, where it was domesticated for wine production in antiquity before spreading throughout the Mediterranean basin and, later, worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Today grape is grown on every populated continent, from cool-climate wine regions to hot, irrigated table-grape production areas. Regional production and trade statistics are compiled by bodies such as FAO and should be sourced from those primary datasets rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Grape ripening is closely tied to accumulated heat over the growing season, and regions are often characterized by heat-summation indices used to match cultivars to climate. Adequate warmth during ripening supports sugar accumulation and flavor development.',
        },
        {
          type: 'paragraph',
          text: 'Prolonged drought and extreme heat can stress vines and affect fruit composition, while excess rainfall near harvest raises the risk of fruit splitting and bunch rot.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Grapevines are adaptable and often perform well on soils of only moderate fertility, since excessive vigor can reduce fruit quality. Well-drained sandy and loam soils are widely favored, and deep rooting allows vines to draw on subsoil moisture.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil depth, drainage, and water-holding capacity influence vine vigor and, in wine production, are often considered part of the broader site character. Local soil survey information should guide site selection.',
        },
      ],
    },
    {
      id: 'vineyard-establishment',
      heading: 'Vineyard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a vineyard involves selecting a rootstock suited to local soil and pest pressure, a cultivar matched to the intended product and climate, and a trellis and training system suited to mechanization and canopy management goals.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for phylloxera resistance and soil adaptation',
            'Cultivar choice matched to wine style, table use, or drying',
            'Trellis system and row orientation set at planting',
            'Canopy management (shoot positioning, leaf removal) to balance yield and fruit quality',
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
          text: 'Potassium supports fruit ripening and is taken up in significant amounts by the crop, while magnesium deficiency can contribute to premature bunch-stem necrosis in some regions. Nutrient status is generally monitored through petiole or leaf-blade analysis rather than soil testing alone.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local tissue testing and regional viticultural guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Grape is grown both rain-fed, particularly in traditional Mediterranean-climate wine regions, and under irrigation in drier production areas. Drip irrigation is the dominant method in irrigated vineyards, allowing controlled deficit irrigation to manage vine vigor and fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Mild, managed water stress is sometimes used deliberately in wine-grape production to influence berry size and composition, in contrast to the more consistent moisture typically favored for table grapes.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew and powdery mildew are two of the most significant fungal diseases of grape, both capable of damaging leaves and clusters under favorable conditions. Gray mold (Botrytis bunch rot) can affect ripening or ripe fruit, particularly in wet conditions near harvest. Spider mites and thrips are among the pests that can affect foliage and fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines canopy management for airflow, resistant or tolerant cultivars where available, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grape is harvested when sugar, acid, and flavor development reach the target profile for the intended product, whether fresh table fruit, wine, or raisins. Harvest may be by hand or machine, and timing balances fruit quality against weather risk.',
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
            'Wine production across still, sparkling, and fortified styles',
            'Fresh table-grape consumption',
            'Raisins and other dried products',
            'Juice, and by-products such as grape seed oil and pomace',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'fertilizer', slug: 'sulfate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'strawberry' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'evapotranspiration', 'yield'],
  geographicScope:
    'Global overview. Cultivar, rootstock, and trellis choices are highly region- and end-use-specific.',
  climateContext:
    'Perennial vine crop with ripening driven by cumulative seasonal heat; grown rain-fed or irrigated depending on region.',
  limitations: [
    'Rootstock, trellis system, and irrigation strategy are site- and end-use-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global grape production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Grape disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for grape',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Grape',
    description:
      'A structured, evidence-based reference on grape: classification, climate needs, vineyard establishment, nutrition, diseases, pests, and end uses.',
    keywords: ['grape', 'Vitis vinifera', 'viticulture', 'vineyard'],
  },
  structuredData: { article: true },
};
