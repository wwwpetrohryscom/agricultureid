import type { CropContent } from '@/types/content';

export const adzukiBean: CropContent = {
  id: 'crop-adzuki-bean',
  slug: 'adzuki-bean',
  contentType: 'crop',
  title: 'Adzuki Bean',
  scientificName: 'Vigna angularis',
  alternativeNames: ['Azuki', 'Red bean'],
  category: 'Pulse crop',
  subcategory: 'Annual grain legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Adzuki bean is grown almost entirely to be made into sweet paste, so it is bred and graded for seed coat colour, uniform size and cooking behaviour rather than for protein or yield.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Adzuki is a small red grain legume grown in Japan, China and Korea, and unlike almost every other pulse it is destined mainly for confectionery. It is boiled and mashed into an, the sweet bean paste that fills much of East Asian baking and confectionery.',
    },
    {
      type: 'paragraph',
      text: 'That end use governs the crop. Buyers specify a deep uniform red, an even seed size, and cooking behaviour that produces smooth paste, and a crop that fails those specifications is worth far less regardless of its yield or protein content.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Genus',
      value: 'Vigna, with cowpea and mung bean rather than Phaseolus',
    },
    { label: 'Principal end use', value: 'Sweet bean paste for confectionery' },
    {
      label: 'Grading criteria',
      value: 'Seed coat colour, size uniformity and cooking behaviour',
    },
    {
      label: 'Premium origin',
      value: 'Hokkaido in Japan, where most Japanese production is grown',
    },
    {
      label: 'Habit',
      value: 'Short-season warm-climate annual, erect to semi-vining',
    },
  ],
  sections: [
    {
      id: 'paste',
      heading: 'Bred for paste, not for protein',
      body: [
        {
          type: 'paragraph',
          text: 'The value of an adzuki crop is set by how it behaves when boiled and mashed: seed coat that separates cleanly, cotyledon that breaks down smoothly, colour that carries into the product. Breeding and grading follow those criteria, which is why adzuki quality standards look nothing like those for a food-legume such as lentil or common bean.',
        },
      ],
    },
    {
      id: 'colour',
      heading: 'Colour is a grade',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, even red is required, and weathering, delayed harvest or rain on a mature crop dulls it. Colour loss is the most common reason a crop is downgraded, and it can happen in the last week of a season that went well until then.',
        },
      ],
    },
    {
      id: 'vigna',
      heading: 'A Vigna, not a Phaseolus',
      body: [
        {
          type: 'paragraph',
          text: 'Adzuki sits with cowpea and mung bean in Vigna rather than with common and lima bean in Phaseolus. Its pest and disease profile follows the Vigna group, and rotation planning that treats all "beans" as one thing gets this wrong.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'hokkaido',
      heading: 'Hokkaido as an origin',
      body: [
        {
          type: 'paragraph',
          text: 'Most Japanese adzuki is grown in Hokkaido, and Hokkaido origin carries a price premium in the domestic confectionery trade in the way a named region does for a wine grape. Imported adzuki from China and elsewhere competes on price into a different segment of the same market.',
        },
      ],
    },
    {
      id: 'short-season',
      heading: 'A short warm season',
      body: [
        {
          type: 'paragraph',
          text: 'Adzuki needs warmth but not a long season, and it is sown after the risk of frost and matures within a few months, which is what allows it in Hokkaido and in the northern United States and Canada. It is frost-sensitive at both ends of the season.',
        },
      ],
    },
    {
      id: 'indeterminate',
      heading: 'Uneven maturity',
      body: [
        {
          type: 'paragraph',
          text: 'Many types flower and set over an extended period, so pods at the base are dry while those at the top are green. Desiccation or windrowing is used to even the crop for harvest, and getting this wrong costs either shattered pods or immature seed.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Pod shattering and harvest loss',
      body: [
        {
          type: 'paragraph',
          text: 'Dry pods split, and a crop left standing in hot dry conditions loses seed on the ground. Harvest is taken slightly early and finished by drying, which is the same compromise most pulses face but with a higher penalty here because seed value is high.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotational fit',
      body: [
        {
          type: 'paragraph',
          text: 'As a legume it fixes nitrogen and works as a break from cereals, and in Hokkaido it rotates with sugar beet, potato and wheat. It shares soil-borne diseases with other Vigna species and should not follow them closely.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling a delicate seed',
      body: [
        {
          type: 'paragraph',
          text: 'The seed coat cracks under rough handling and cracked seed cooks unevenly and shows in the finished paste. Slower augers, lower drops and careful drying are standard, and the crop is handled more like a seed crop than like a commodity pulse.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mung-bean' },
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'common-bean' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'China is the largest producer by volume; Japan and Korea are the principal high-value markets, with Hokkaido the premium Japanese origin.',
  climateContext:
    'Warm-season short-cycle annual; frost-sensitive and adapted to a temperate summer rather than a tropical one.',
  limitations: [
    'Grading standards for colour and size are buyer- and market-specific and are not reproduced here.',
    'Cultivar-specific maturity and cooking behaviour are not covered.',
    'Trade data frequently aggregates adzuki with other small dry beans.',
  ],
  sourceReferences: [
    {
      sourceId: 'jp-maff',
      citedFor: 'Japanese adzuki production and grading context',
    },
    { sourceId: 'cabi', citedFor: 'Vigna angularis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    { sourceId: 'cgiar', citedFor: 'Vigna germplasm research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Adzuki Bean',
    description:
      'Vigna angularis as a crop: bred and graded for sweet paste rather than protein, colour as a grade, Hokkaido origin premium and delicate seed handling.',
    keywords: [
      'adzuki bean',
      'azuki',
      'Vigna angularis',
      'red bean paste',
      'Hokkaido',
    ],
  },
  structuredData: { article: true },
};
