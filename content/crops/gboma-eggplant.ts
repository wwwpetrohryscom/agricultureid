import type { CropContent } from '@/types/content';

export const gbomaEggplant: CropContent = {
  id: 'crop-gboma-eggplant',
  slug: 'gboma-eggplant',
  contentType: 'crop',
  title: 'Gboma Eggplant',
  scientificName: 'Solanum macrocarpon',
  alternativeNames: ['Gboma', 'African eggplant', 'Bitter garden egg'],
  category: 'Vegetable crop',
  subcategory: 'Solanaceous leaf and fruit vegetable',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Gboma eggplant is grown mainly for its leaves, on a shrub that reaches two metres and is cut over rather than harvested once — which makes it a standing leaf crop rather than a vegetable in the usual sense.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gboma is the second cultivated African eggplant, distinct from scarlet eggplant and from the common eggplant of Europe and Asia. It is grown across West and Central Africa, and although its fruit is eaten, the leaves and young shoots are the principal harvest in most of its range.',
    },
    {
      type: 'paragraph',
      text: 'The plant is a shrub that can reach two metres, and it is picked over repeatedly rather than harvested once. That habit puts it closer to a perennial leaf crop than to an annual vegetable, and it is why gboma appears in home gardens and field margins as much as in vegetable beds.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Species status',
      value:
        'An African domesticate, distinct from scarlet eggplant and common eggplant',
    },
    {
      label: 'Principal harvest',
      value: 'Leaves and young shoots; fruit is also eaten',
    },
    {
      label: 'Habit',
      value: 'Shrub reaching about two metres, picked over repeatedly',
    },
    { label: 'Region', value: 'West and Central Africa' },
    {
      label: 'Compositional note',
      value:
        'Contains steroidal glycoalkaloids, as other cultivated Solanum do',
    },
  ],
  sections: [
    {
      id: 'leaf-crop',
      heading: 'A leaf crop from a shrub',
      body: [
        {
          type: 'paragraph',
          text: 'Most of the harvest is leaves and young shoots taken repeatedly from a standing plant, and a single planting supplies greens across a long season. That changes the economics: the labour is in picking rather than in establishment, and the crop occupies its ground for months rather than weeks.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'not-scarlet',
      heading: 'Not scarlet eggplant',
      body: [
        {
          type: 'paragraph',
          text: 'Solanum macrocarpon and Solanum aethiopicum are different species with different leaves, different fruit and different cultivar structures, and both are called African eggplant in English. Publications and market records that use only the common name cannot be assigned to one of them without further evidence.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'bitterness',
      heading: 'Bitter fruit and bitter leaves',
      body: [
        {
          type: 'paragraph',
          text: 'Both leaf and fruit are bitter in most material, and that bitterness is part of what the market buys rather than a defect. Studies comparing gboma and scarlet eggplant report differences in phenolic and glycoalkaloid composition between the two, which is consistent with their different eating character.',
        },
      ],
    },
    {
      id: 'glycoalkaloids',
      heading: 'Glycoalkaloids in a leafy crop',
      body: [
        {
          type: 'paragraph',
          text: 'The plant contains steroidal glycoalkaloids including solasonine and solamargine, and concentrations differ between accessions and between organs. Because the leaves are the main harvest rather than a fruit, this is a compositional characteristic worth stating explicitly; consumption questions belong to food authorities and no threshold is given here.',
        },
      ],
    },
    {
      id: 'nightshade',
      heading: 'A nightshade in a nightshade rotation',
      body: [
        {
          type: 'paragraph',
          text: 'Gboma hosts the same soil-borne pathogens as tomato, pepper, eggplant and scarlet eggplant, so it provides no rotational break from any of them. West African vegetable gardens frequently grow several of these in sequence on the same beds, and the disease consequences are cumulative.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Seed and volunteers',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is grown from seed and self-seeds readily where fruit is left, so gboma persists around homesteads and in fallows without deliberate planting. Much of the crop in its range is maintained this way rather than sown as a field crop.',
        },
      ],
    },
    {
      id: 'humidity',
      heading: 'A wet-season crop',
      body: [
        {
          type: 'paragraph',
          text: 'It grows through the rains in the humid tropics and is affected by the leaf diseases that season brings, and dry-season production depends on irrigation. Its productivity in the wet season is part of why it is valued: it supplies greens when many vegetables fail.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'A crop in domestic markets',
      body: [
        {
          type: 'paragraph',
          text: 'Gboma moves through local and urban markets in West and Central Africa and hardly at all in international trade, so its economic significance is invisible in the statistics that describe globally traded vegetables. The evidence base for it is regional research and extension rather than trade data.',
        },
      ],
    },
    {
      id: 'genepool',
      heading: 'Value to breeding',
      body: [
        {
          type: 'paragraph',
          text: 'As a close relative of common eggplant, gboma is examined as a source of resistance traits for eggplant breeding, though crossing barriers are stronger than with scarlet eggplant. Its role in the eggplant gene pool is a reason for the germplasm collections held for it.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'early-blight' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'scarlet-eggplant' },
    { type: 'crop', slug: 'eggplant' },
    { type: 'crop', slug: 'amaranth' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'West and Central Africa, notably Benin, Togo, Nigeria, Ghana and Cameroon. Also grown in parts of the Caribbean and Southeast Asia.',
  climateContext:
    'Humid tropical; grown through the rainy season and under irrigation in the dry season.',
  limitations: [
    'Glycoalkaloid content varies between accessions and between plant organs and is not quantified here.',
    'Production statistics are incomplete because the crop moves through domestic markets.',
    'English common names overlap with other African eggplants and with common eggplant.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor: 'West African vegetable production research',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'African indigenous vegetable germplasm research',
    },
    { sourceId: 'cabi', citedFor: 'Solanum macrocarpon compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'African vegetable production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Gboma Eggplant',
    description:
      'Solanum macrocarpon as a crop: a leaf harvest from a two-metre shrub, distinct from scarlet eggplant, bitterness, glycoalkaloids and nightshade rotation.',
    keywords: [
      'gboma eggplant',
      'Solanum macrocarpon',
      'African eggplant',
      'leafy vegetable',
      'West Africa',
    ],
  },
  structuredData: { article: true },
};
