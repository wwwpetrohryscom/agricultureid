import type { CropContent } from '@/types/content';

export const sourCherry: CropContent = {
  id: 'crop-sour-cherry',
  slug: 'sour-cherry',
  contentType: 'crop',
  title: 'Sour Cherry',
  scientificName: 'Prunus cerasus',
  alternativeNames: ['Tart cherry', 'Morello', 'Amarelle'],
  category: 'Fruit crop',
  subcategory: 'Deciduous stone fruit tree',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Sour cherry is a different species from sweet cherry, self-fertile where sweet cherry is not, and shake-harvested into water tanks because it is destined for processing rather than the fresh market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweet cherry and sour cherry share a name and a genus and almost nothing else in how they are grown. Sour cherry is Prunus cerasus, a tetraploid species of hybrid origin, and it is self-fertile, so an orchard does not need a pollinizer cultivar.',
    },
    {
      type: 'paragraph',
      text: 'The larger difference is where the fruit goes. Almost all sour cherry is processed into juice, pie filling, dried fruit and concentrate, so it is mechanically shaken from the tree into catching frames and moved in water, a harvest that would destroy a fresh-market crop.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    {
      label: 'Species',
      value: 'Prunus cerasus, distinct from sweet cherry Prunus avium',
    },
    { label: 'Ploidy', value: 'Tetraploid, of hybrid origin' },
    {
      label: 'Pollination',
      value: 'Largely self-fertile; no pollinizer cultivar required',
    },
    { label: 'Harvest', value: 'Mechanically shaken and handled in water' },
    {
      label: 'Destination',
      value: 'Overwhelmingly processed rather than sold fresh',
    },
  ],
  sections: [
    {
      id: 'two-species',
      heading: 'Two cherries, two crops',
      body: [
        {
          type: 'paragraph',
          text: 'Prunus cerasus is tetraploid and of hybrid origin, while sweet cherry Prunus avium is diploid. They differ in self-fertility, in tree habit, in harvest method and in market, and figures for one do not describe the other. The shared English word "cherry" hides a division as real as that between the two pears.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'self-fertile',
      heading: 'Self-fertility changes orchard design',
      body: [
        {
          type: 'paragraph',
          text: 'Sour cherry sets on its own pollen, so a block can be a single cultivar and does not need pollinizer rows or matched bloom timing. That simplification is significant: sweet cherry orchard layout is largely dictated by pollination compatibility, and sour cherry escapes it.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'shake',
      heading: 'Shake harvest into water',
      body: [
        {
          type: 'paragraph',
          text: 'Trunk shakers drop the fruit onto inverted-umbrella catching frames, and the fruit is transferred into water tanks and cooled immediately, because a shaken cherry bruises within hours in air. Hydrocooling within a short window of harvest is what keeps the fruit usable, and it is why processing capacity has to sit close to the orchard.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'A processing crop by design',
      body: [
        {
          type: 'paragraph',
          text: 'Because essentially the whole crop is processed, quality is judged on colour, soluble solids, acidity and pit removal rather than on appearance, and the orchard is managed for a uniform, once-over machine harvest rather than for grade-out fruit. Cultivars are selected for a stem that releases cleanly under shaking.',
        },
      ],
    },
    {
      id: 'frost',
      heading: 'Spring frost is the yield event',
      body: [
        {
          type: 'paragraph',
          text: 'Sour cherry blooms early and a single frost during bloom can remove a national crop, which is why production statistics for the crop swing far more between years than area planted would suggest. Site selection for air drainage is the main defence, and in some regions it is the only one.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'cracking',
      heading: 'Rain cracking',
      body: [
        {
          type: 'paragraph',
          text: 'Rain close to harvest is absorbed through the skin and splits the fruit, and split fruit is unusable even for processing because it ferments. This is the same risk that drives the covering of sweet cherry orchards, but covering is rarely economic for a processing crop, so the risk is largely carried rather than managed.',
        },
      ],
    },
    {
      id: 'types',
      heading: 'Morello and Amarelle',
      body: [
        {
          type: 'paragraph',
          text: 'Sour cherries divide into dark-fleshed, dark-juiced morello types and light-fleshed, clear-juiced amarelle types, and processors specify one or the other because the juice colour carries directly into the product. This is a real market division within the crop rather than a description of appearance.',
        },
      ],
    },
    {
      id: 'rootstock',
      heading: 'Rootstock and tree size',
      body: [
        {
          type: 'paragraph',
          text: 'Sour cherry is worked onto Prunus rootstocks that control vigour and suit mechanical harvest, because a shaker needs a trunk of a particular size and a canopy that releases fruit cleanly. Tree architecture in this crop is designed around the machine.',
        },
      ],
    },
    {
      id: 'regions',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Turkey, Poland, Russia, Ukraine, Hungary, Serbia and the United States are the principal producers, and in the United States production is heavily concentrated in Michigan. The crop is grown in cold-winter continental climates where sweet cherry is often marginal.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spotted-wing-drosophila' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'japanese-beetle' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'plum' },
    { type: 'crop', slug: 'apricot' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Turkey, Poland, Russia, Ukraine, Hungary and Serbia are the leading producers; United States production is concentrated in Michigan.',
  climateContext:
    'Cold temperate with a winter chilling requirement; early bloom makes spring frost the dominant yield risk.',
  limitations: [
    'Cultivar-specific chilling requirements, bloom dates and shaker suitability are not given here.',
    'Production varies severely between years because of frost, so single-year figures are poor indicators of capacity.',
    'This page describes sour cherry; sweet cherry is a separate species with different agronomy.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Prunus cerasus compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-nass', citedFor: 'United States production statistics' },
    {
      sourceId: 'pl-minrol',
      citedFor: 'Polish sour cherry production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Sour Cherry',
    description:
      'Prunus cerasus as a crop: a self-fertile species distinct from sweet cherry, shake harvest into water, processing markets and spring frost risk.',
    keywords: [
      'sour cherry',
      'tart cherry',
      'Prunus cerasus',
      'morello',
      'shake harvest',
    ],
  },
  structuredData: { article: true },
};
