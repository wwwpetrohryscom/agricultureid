import type { CropContent } from '@/types/content';

export const stevia: CropContent = {
  id: 'crop-stevia',
  slug: 'stevia',
  contentType: 'crop',
  title: 'Stevia',
  scientificName: 'Stevia rebaudiana',
  alternativeNames: ['Candyleaf', 'Sweetleaf'],
  category: 'Industrial crop',
  subcategory: 'Perennial leaf crop grown for sweetener glycosides',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Stevia is harvested before it flowers, because flowering reduces the steviol glycoside content of the leaf that the entire crop exists to supply — and it is short-day, so the crop is racing its own flowering signal.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stevia is grown for compounds, not for biomass. The leaf contains steviol glycosides, intensely sweet diterpene compounds that are extracted and purified into a non-caloric sweetener, and the crop is valued by glycoside content and profile rather than by tonnage.',
    },
    {
      type: 'paragraph',
      text: 'The agronomy follows from that. Glycoside concentration peaks around the onset of flowering and falls afterwards, and the plant is short-day, so harvest timing is a race against a photoperiod signal the grower cannot change.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Product', value: 'Steviol glycosides extracted from the leaf' },
    {
      label: 'Harvest timing',
      value: 'Cut at or just before flowering, when glycoside content peaks',
    },
    {
      label: 'Photoperiod',
      value: 'Short-day; flowering is triggered as daylength shortens',
    },
    {
      label: 'Propagation',
      value: 'Cuttings or plugs; seed germination is poor and variable',
    },
    {
      label: 'Habit',
      value: 'Perennial cut several times a year where winters allow',
    },
  ],
  sections: [
    {
      id: 'glycosides',
      heading: 'The crop is a compound, not a leaf',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers pay for total steviol glycoside content and for the ratio between individual glycosides, because the individual compounds differ in sweetness and in aftertaste. Two crops of identical leaf weight can be worth very different amounts, and a grower cannot judge the value of a harvest by looking at it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'flowering',
      heading: 'Harvest before flowering',
      body: [
        {
          type: 'paragraph',
          text: 'Glycoside concentration in the leaf rises to a peak around the beginning of flowering and declines once the plant commits to seed. Harvest is therefore cut at or just before that point, and a crop left a week or two too long is worth measurably less for the same weight of leaf.',
        },
      ],
    },
    {
      id: 'short-day',
      heading: 'A photoperiod clock the grower cannot reset',
      body: [
        {
          type: 'paragraph',
          text: "Because flowering is triggered by shortening days, the date at which the crop must be cut is set by latitude and season rather than by the grower's schedule. Supplementary lighting is used in nurseries to hold mother plants vegetative, but a field crop simply has a deadline.",
        },
      ],
    },
    {
      id: 'cuttings',
      heading: 'Propagated vegetatively',
      body: [
        {
          type: 'paragraph',
          text: 'Stevia seed germinates poorly and unevenly and the resulting plants vary widely in glycoside content, so commercial planting uses rooted cuttings or plugs of a selected clone. Nursery capacity is therefore part of the production system, and the cost of planting material is a large share of establishment.',
        },
      ],
    },
    {
      id: 'multiple-cuts',
      heading: 'Cut several times a year',
      body: [
        {
          type: 'paragraph',
          text: 'Where winters are mild the plant is perennial and is cut two or three times in a season and over several seasons, with the stand regrowing from the base after each cut. Cutting height determines regrowth vigour, and cutting too low weakens a stand that is meant to last years.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'drying',
      heading: 'Drying and leaf separation',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf is dried quickly after cutting to prevent degradation, then the leaf is separated from stem because stem dilutes the glycoside content of the delivered material. Leaf-to-stem ratio is part of the delivery specification and is a direct product of how the crop was cut and threshed.',
        },
      ],
    },
    {
      id: 'regulation',
      heading: 'Approval status varies',
      body: [
        {
          type: 'paragraph',
          text: "Steviol glycosides are permitted as a sweetener under food law in many jurisdictions and specific purities and glycosides are defined in those approvals. The regulatory position, not the agronomy, has driven the crop's expansion, and it differs by country and by individual glycoside.",
        },
      ],
    },
    {
      id: 'asteraceae',
      heading: 'A composite in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Stevia is in the daisy family with sunflower, lettuce and safflower, and it shares sclerotinia and septoria with them. A rotation that places it after another composite concentrates rather than breaks disease pressure.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'origin',
      heading: 'From a small native range',
      body: [
        {
          type: 'paragraph',
          text: 'Stevia rebaudiana is native to a limited area of Paraguay and adjacent Brazil, where it was used long before commercial interest, and production is now concentrated in China with substantial areas in Paraguay, Argentina, India, Vietnam and Kenya. The species has a much narrower natural range than its cultivated distribution suggests.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'septoria-tritici-blotch' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'ferralsol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'chicory' },
    { type: 'crop', slug: 'safflower' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'Native to Paraguay and adjacent Brazil. China dominates production, with significant areas in Paraguay, Argentina, India, Vietnam and Kenya.',
  climateContext:
    'Subtropical; short-day flowering, frost-sensitive top growth and a requirement for consistent moisture in a shallow-rooted crop.',
  limitations: [
    'Steviol glycoside content and profile depend on clone, environment and harvest timing and are not given as figures.',
    'Food-additive approvals and permitted purities differ by jurisdiction and are not reproduced here.',
    'Sweetness comparisons and dietary questions are outside the scope of this page.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Stevia rebaudiana compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'efsa', citedFor: 'Steviol glycoside additive assessment' },
    { sourceId: 'fao', citedFor: 'Industrial crop production context' },
    { sourceId: 'faostat', citedFor: 'Production statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Stevia',
    description:
      'Stevia rebaudiana as a crop: steviol glycosides as the product, harvest before flowering, short-day timing, vegetative propagation and leaf-to-stem ratio.',
    keywords: [
      'stevia',
      'Stevia rebaudiana',
      'steviol glycosides',
      'short-day crop',
      'leaf harvest',
    ],
  },
  structuredData: { article: true },
};
