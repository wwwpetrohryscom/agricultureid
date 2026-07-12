import type { CropContent } from '@/types/content';

export const groundnut: CropContent = {
  id: 'crop-groundnut',
  slug: 'groundnut',
  contentType: 'crop',
  title: 'Groundnut',
  scientificName: 'Arachis hypogaea',
  alternativeNames: ['Peanut', 'Earthnut'],
  category: 'Legume crop',
  subcategory: 'Oilseed legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Groundnut is an annual legume grown for its oil- and protein-rich seed, distinguished by geocarpy — its pods develop and mature underground — and valued both as a major oilseed and as a widely consumed food crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Groundnut has an unusual reproductive biology among cultivated crops: after flowers are pollinated above ground, a stalk-like structure called a peg elongates and pushes the fertilized ovary downward into the soil, where the pod develops and the seeds mature underground, a trait known as geocarpy.',
    },
    {
      type: 'paragraph',
      text: 'Cultivars are grouped into bunch (erect) and runner (prostrate, spreading) growth habits, which influence row spacing, weed management, and mechanical harvest. As a legume, groundnut forms a symbiotic relationship with compatible rhizobia in root nodules, enabling biological nitrogen fixation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Arachis hypogaea' },
    {
      label: 'Primary uses',
      value:
        'Edible oil, direct food consumption (roasted, peanut butter), protein meal for feed',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; requires a long frost-free period, sensitive to cold at establishment',
    },
    {
      label: 'Soil preference',
      value:
        'Loose, well-drained sandy soils that allow pegs to penetrate and pods to be dug cleanly',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnut is grown as an annual oilseed and food legume whose distinctive underground pod development sets it apart agronomically from nearly all other major crops, most notably in its strong preference for loose, easily penetrated soil.',
        },
        {
          type: 'paragraph',
          text: 'Production spans smallholder systems, especially across parts of Africa and Asia, to large mechanized operations in the Americas, with cultivar choice shaped by market use — confectionery, oil extraction, or roasting.',
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
            { term: 'Genus and species', description: 'Arachis hypogaea' },
            {
              term: 'Reproductive habit',
              description:
                'Geocarpic: pollinated flowers form a peg that pushes the developing pod underground to mature',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Common growth habits',
          columns: ['Growth habit', 'Description', 'Typical management'],
          rows: [
            [
              'Bunch (erect)',
              'Compact, upright plants with pods clustered close to the main stem',
              'Often suited to closer row spacing and mechanical harvest',
            ],
            [
              'Runner (prostrate)',
              'Spreading, trailing plants with pods distributed along lateral branches',
              'Typically grown at wider spacing to accommodate spreading growth',
            ],
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
          text: 'Groundnut was domesticated in South America, in the region of present-day Bolivia, Argentina, and Paraguay, and was subsequently spread by European traders to Africa and Asia, where it became deeply integrated into food systems and, in turn, was reintroduced to North America.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown pantropically and in warm temperate regions worldwide. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnut is a warm-season crop requiring a long frost-free period to complete its cycle, with germination, pegging, and pod development all favored by warm soil and air temperatures.',
        },
        {
          type: 'paragraph',
          text: 'The crop is sensitive to cold, particularly during establishment and again during pod-fill, and planting timing is set locally to ensure the growing season provides sufficient warm days for pod maturation.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Loose, well-drained sandy soils are strongly preferred because pegs must penetrate the soil easily for pods to form normally, and because pods are dug directly from the soil at harvest — heavier or compacted soils impede pegging and complicate clean harvest.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil texture in the pod-development zone is a particularly important, field-specific consideration for groundnut and should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnut is typically direct-seeded from shelled kernels, with row spacing set according to growth habit (bunch or runner). Rotation with cereals is recommended to manage the buildup of soilborne pathogens over time.',
        },
        {
          type: 'list',
          items: [
            'Growth habit selection (bunch or runner) matched to local row-spacing and harvest equipment',
            'Crop rotation with cereals to manage soilborne diseases',
            'Maintaining loose, friable soil in the pegging zone through appropriate tillage',
            'Timely weed management, since groundnut competes poorly with weeds during early growth',
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
          text: 'Biological nitrogen fixation can supply much of the crop’s nitrogen requirement where nodulation is effective. Calcium availability specifically within the pegging and pod zone is particularly important for groundnut, since calcium for pod and kernel development is absorbed directly by the developing pod rather than primarily through the roots.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and soil amendment programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering, pegging, and pod-fill are all moisture-sensitive stages in groundnut. In some regions, drought stress late in the season has also been linked to an increased risk of fungal contamination associated with aflatoxin, a recognized food-safety concern managed through variety choice, timely harvest, and proper drying and storage.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot can develop in wet or compacted soils, and anthracnose has been documented affecting groundnut foliage and pods in some regions. Thrips are a major pest, feeding directly on foliage and acting as vectors for certain plant viruses, while aphids are also present in many production areas.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Plants are lifted or dug once pods reach maturity, assessed by internal shell coloration and pod fill, since maturity cannot be judged from the foliage alone. After lifting, pods are dried before threshing, further drying, and storage — a critical step for both quality and safe storage.',
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
            'Crushed for edible groundnut (peanut) oil',
            'Direct food consumption — roasted, boiled, or processed into peanut butter and confectionery',
            'Protein meal by-product used in animal feed',
            'Haulm (vines) used as forage or fodder in some production systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'tractor' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'inoculum', 'macronutrient'],
  geographicScope:
    'Global overview. Growth habit selection, sowing timing, and input levels are region-specific and depend on local climate and soil.',
  climateContext:
    'Warm-season legume requiring a long frost-free period, grown pantropically and in warm temperate regions.',
  limitations: [
    'Growth habit selection and sowing timing are region-specific decisions not reduced to universal guidance here.',
    'Aflatoxin risk is a recognized food-safety consideration influenced by drought stress, harvest timing, and storage conditions.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of groundnut in global oilseed and food systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cgiar',
      citedFor: 'Groundnut research in tropical and semi-arid systems',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management for legume crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Groundnut',
    description:
      'A structured reference on groundnut (peanut): geocarpic pod development, soil and climate needs, nitrogen fixation, diseases, pests, and uses.',
    keywords: ['groundnut', 'peanut', 'Arachis hypogaea', 'groundnut agronomy'],
  },
  structuredData: { article: true },
};
