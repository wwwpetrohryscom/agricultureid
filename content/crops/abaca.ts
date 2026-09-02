import type { CropContent } from '@/types/content';

export const abaca: CropContent = {
  id: 'crop-abaca',
  slug: 'abaca',
  contentType: 'crop',
  title: 'Abaca',
  scientificName: 'Musa textilis',
  alternativeNames: ['Manila hemp', 'Manila fibre'],
  category: 'Fibre crop',
  subcategory: 'Perennial banana relative grown for leaf-sheath fibre',
  botanicalFamily: 'Musaceae (banana family)',
  lifecycle: 'Perennial',
  summary:
    "Abaca is a banana that is never harvested for fruit: the crop is the fibre in its leaf sheaths, stripped by hand from cut stems, and it holds strength in seawater in a way that made it the world's marine cordage fibre.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Abaca looks like a banana plant and belongs to the same genus, but nothing about it is grown for fruit. The product is the long fibre running through the leaf sheaths that form its pseudostem, extracted by cutting the stem and stripping the sheaths.',
    },
    {
      type: 'paragraph',
      text: "The fibre resists deterioration in salt water, which made Manila hemp the standard material for ships' rope before synthetics, and its strength and porosity now put it into specialty papers where no other plant fibre performs as well.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Musaceae (banana family)' },
    { label: 'Genus', value: 'Musa, the same genus as edible banana' },
    {
      label: 'Harvested part',
      value: 'Fibre from the leaf sheaths of the pseudostem',
    },
    {
      label: 'Distinguishing property',
      value: 'Retains strength in salt water',
    },
    {
      label: 'Principal producer',
      value:
        'The Philippines, which supplies the large majority of world output',
    },
    {
      label: 'Modern end use',
      value: 'Specialty papers including tea bags, filters and banknote stock',
    },
  ],
  sections: [
    {
      id: 'not-fruit',
      heading: 'A banana grown for stem, not fruit',
      body: [
        {
          type: 'paragraph',
          text: 'The plant produces small seedy inedible fruit that is of no commercial interest. Harvest means cutting mature pseudostems at flowering, separating the leaf sheaths and extracting the fibre from each. The plant then regrows from suckers, so an abaca stand is a perennial that is cut over rather than replanted.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'tuxying',
      heading: 'Stripping by hand',
      body: [
        {
          type: 'paragraph',
          text: 'The traditional and still dominant extraction method separates the outer fibre-bearing layer from each sheath, then draws it under a knife to scrape away the pulp. It is skilled manual work, and the grade of fibre depends on how it is done. Mechanical decorticators exist but hand-stripped fibre still commands the higher grades.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'seawater',
      heading: 'Strength in salt water',
      body: [
        {
          type: 'paragraph',
          text: 'Abaca fibre resists rotting in seawater far better than the other natural cordage fibres, which is the property that made it the standard for marine rope worldwide until synthetic fibres displaced it. That single characteristic is why the crop was established across the tropics rather than staying a local fibre.',
        },
      ],
    },
    {
      id: 'paper',
      heading: 'Specialty paper is the modern market',
      body: [
        {
          type: 'paragraph',
          text: 'The fibre is long, strong and porous, and it goes into tea bags, coffee filters, sausage casings, electrolytic papers and currency stock, including banknote papers. These are small-volume, high-specification markets, and they are the reason the crop survived the loss of the cordage trade.',
        },
      ],
    },
    {
      id: 'philippines',
      heading: 'A single-country supply',
      body: [
        {
          type: 'paragraph',
          text: 'The Philippines produces the large majority of world abaca, with Ecuador the main second source. A typhoon season or a disease outbreak in the Philippine producing regions is a world supply event, and the crop has no substitute at the fibre specifications its markets require.',
        },
      ],
    },
    {
      id: 'viruses',
      heading: 'Virus is the standing threat',
      body: [
        {
          type: 'paragraph',
          text: 'Abaca bunchy top and abaca bract mosaic have destroyed large areas of the crop and remain the principal constraint on production. Because the crop is propagated vegetatively from suckers, infected planting material spreads disease directly, and clean planting material schemes are the main control.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Grown under shade',
      body: [
        {
          type: 'paragraph',
          text: 'Abaca is commonly grown under coconut or forest shade rather than in open monoculture, which suits its natural understorey habit and makes it a component of agroforestry systems rather than a standalone plantation crop in most of its range.',
        },
      ],
    },
    {
      id: 'grades',
      heading: 'Fibre grading',
      body: [
        {
          type: 'paragraph',
          text: "Fibre is graded by colour, cleanliness, strength and stripping quality under an official grading system, and the price spread between grades is wide. A grower's income depends more on stripping and drying care than on tonnage, which is unusual among field crops.",
        },
      ],
    },
    {
      id: 'drying',
      heading: 'Sun drying determines colour',
      body: [
        {
          type: 'paragraph',
          text: 'Stripped fibre is sun-dried, and rain on drying fibre discolours it and drops it grades. Drying capacity during a wet harvest is therefore a direct commercial constraint, and covered drying is a common investment where the market pays for the higher grades.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'panama-disease' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'hemp' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'The Philippines supplies the large majority of world output, with Ecuador the principal second producer.',
  climateContext:
    'Humid tropical with high year-round rainfall; typhoon damage is a major production risk in the main producing region.',
  limitations: [
    'Official fibre grading systems are national and are not reproduced here.',
    'Virus status and clean planting material schemes are jurisdiction-specific.',
    'Yield and fibre recovery vary widely with stripping method and are not given as figures.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Natural fibre production and trade context' },
    { sourceId: 'cabi', citedFor: 'Musa textilis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    { sourceId: 'iita', citedFor: 'Musa research context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Abaca',
    description:
      'Musa textilis as a crop: leaf-sheath fibre rather than fruit, hand stripping, strength in seawater, specialty paper markets and virus pressure.',
    keywords: [
      'abaca',
      'Manila hemp',
      'Musa textilis',
      'natural fibre',
      'specialty paper',
    ],
  },
  structuredData: { article: true },
};
