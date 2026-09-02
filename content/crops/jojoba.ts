import type { CropContent } from '@/types/content';

export const jojoba: CropContent = {
  id: 'crop-jojoba',
  slug: 'jojoba',
  contentType: 'crop',
  title: 'Jojoba',
  scientificName: 'Simmondsia chinensis',
  alternativeNames: ['Goat nut', 'Deer nut'],
  category: 'Industrial crop',
  subcategory: 'Perennial desert shrub grown for liquid wax',
  botanicalFamily: 'Simmondsiaceae',
  lifecycle: 'Perennial',
  summary:
    'Jojoba is the only plant known to store a liquid wax rather than a triglyceride oil in its seed, and it is dioecious and wind-pollinated, so roughly one plant in ten in a plantation is a male that will never bear a crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'What is sold as jojoba oil is not an oil. The seed stores liquid wax esters rather than the triglycerides that every other oilseed accumulates, and jojoba is the only plant known to do this. That single biochemical fact is the reason the crop exists commercially.',
    },
    {
      type: 'paragraph',
      text: 'It is a long-lived evergreen shrub of the Sonoran Desert, dioecious and wind-pollinated, which means a plantation must carry males for pollen and those males produce no seed. Managing that ratio is the first design decision in establishing a planting.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Simmondsiaceae, a family with a single genus',
    },
    {
      label: 'Seed storage compound',
      value: 'Liquid wax esters, not triglyceride oil',
    },
    {
      label: 'Uniqueness',
      value: 'The only plant known to store liquid wax in its seed',
    },
    {
      label: 'Sexual system',
      value: 'Dioecious; separate male and female plants',
    },
    { label: 'Pollination', value: 'Wind' },
    {
      label: 'Habit',
      value:
        'Long-lived evergreen desert shrub; plantations remain productive for decades',
    },
  ],
  sections: [
    {
      id: 'wax',
      heading: 'A wax, not an oil',
      body: [
        {
          type: 'paragraph',
          text: 'Jojoba seed accumulates long-chain wax esters that are liquid at room temperature, in place of the triglycerides stored by every other oilseed. The resulting fluid does not go rancid in the way a triglyceride oil does and behaves as a lubricant rather than a fat, which is why it is used in cosmetics and industrial lubricants and not as a food oil.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'dioecious',
      heading: 'Males occupy productive ground',
      body: [
        {
          type: 'paragraph',
          text: 'Because the species is dioecious, a plantation needs male plants for pollen and those plants never bear seed. Sex cannot be determined from a seedling, so seed-raised plantings must be grown on, sexed at first flowering and rogued, or the field must be established from cuttings of known sex — which is why clonal propagation dominates commercial planting.',
        },
      ],
    },
    {
      id: 'clones',
      heading: 'Clonal establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Vegetative propagation from selected clones fixes both sex and yield, and genetic variability between clones is wide enough that clone choice is the single largest determinant of plantation yield. A seed-raised jojoba field is a lottery in a way a clonal one is not.',
        },
      ],
    },
    {
      id: 'wind',
      heading: 'Wind pollination and plantation layout',
      body: [
        {
          type: 'paragraph',
          text: 'Pollen moves on wind rather than by insects, so male placement follows prevailing wind direction rather than convenience, and windbreaks that improve the rest of a farm can reduce pollen movement here. This is an unusual constraint that follows directly from the pollination biology.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'desert',
      heading: 'A crop for land that grows nothing else',
      body: [
        {
          type: 'paragraph',
          text: 'Jojoba is native to the Sonoran Desert and is grown commercially in arid regions on ground with no alternative agricultural use, and it has been studied for its role in stabilising degraded dryland. Its economic case rests on that placement rather than on yield per hectare.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'slow',
      heading: 'A plantation that takes years to pay',
      body: [
        {
          type: 'paragraph',
          text: 'The shrub is slow to come into bearing and reaches full production only after several years, and it then produces for decades. That profile makes establishment capital and clone selection decisive, and it makes jojoba a poor fit for growers who need return within a season.',
        },
      ],
    },
    {
      id: 'simmondsin',
      heading: 'Simmondsin in the meal',
      body: [
        {
          type: 'paragraph',
          text: 'The seed meal contains simmondsin, an antinutritional compound that suppresses feed intake, and its concentration varies substantially between clones. That restricts the use of the press cake as feed and means the crop earns from the wax alone unless the meal is treated.',
        },
      ],
    },
    {
      id: 'family',
      heading: 'A family of one',
      body: [
        {
          type: 'paragraph',
          text: 'Simmondsia chinensis is the only species in the genus and the family Simmondsiaceae, so it has no close crop relatives and no relative from which agronomy can be borrowed. Its taxonomic isolation is part of why its unique seed chemistry has no parallel in cultivation.',
        },
      ],
    },
    {
      id: 'name',
      heading: 'A misleading epithet',
      body: [
        {
          type: 'paragraph',
          text: 'The species epithet chinensis records a collection error rather than an origin; the plant is North American and does not occur naturally in China. The name is nonetheless the accepted one, and it should not be read as a distribution statement.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'chalky-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'aridity-index' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'processing-method', slug: 'mechanical-pressing' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'castor-bean' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'date-palm' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Native to the Sonoran Desert of Mexico and the south-western United States; grown commercially in Argentina, Israel, Egypt, Peru and Australia.',
  climateContext:
    'Arid and semi-arid; deep-rooted, frost-sensitive when young and productive on land unsuited to annual crops.',
  limitations: [
    'Clone performance differs widely and published yields refer to specific clones and sites rather than to the species.',
    'Simmondsin concentration in meal varies by clone; feed use is restricted and jurisdiction-specific.',
    'Jojoba wax is not a food oil and food-use questions are outside the scope of this page.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and native distribution',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Jojoba germplasm and arid-land crop research',
    },
    { sourceId: 'cabi', citedFor: 'Simmondsia chinensis compendium data' },
    { sourceId: 'fao', citedFor: 'Arid-zone industrial crop context' },
    { sourceId: 'gbif', citedFor: 'Occurrence and distribution records' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Jojoba',
    description:
      'Simmondsia chinensis as a crop: liquid wax esters instead of oil, dioecious plantations and male ratio, clonal establishment, simmondsin in the meal.',
    keywords: [
      'jojoba',
      'Simmondsia chinensis',
      'liquid wax ester',
      'dioecious crop',
      'desert plantation',
    ],
  },
  structuredData: { article: true },
};
