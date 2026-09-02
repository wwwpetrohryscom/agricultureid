import type { CropContent } from '@/types/content';

export const berseemClover: CropContent = {
  id: 'crop-berseem-clover',
  slug: 'berseem-clover',
  contentType: 'crop',
  title: 'Berseem Clover',
  scientificName: 'Trifolium alexandrinum',
  alternativeNames: ['Egyptian clover'],
  category: 'Forage crop',
  subcategory: 'Winter annual forage legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Berseem clover is the winter forage of irrigated subtropical agriculture. It is an annual cut four or five times in a season, and in the Nile valley and the Indo-Gangetic plain it is the crop that carries dairy animals through winter.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Berseem is grown where the winter is mild and irrigation is available, and it occupies the cool season between summer crops. Sown in autumn, it is cut repeatedly through winter and spring and then finished before the summer crop goes in.',
    },
    {
      type: 'paragraph',
      text: 'That fit — a high-yielding legume in the season when nothing else is growing — is why it is the dominant winter forage of Egypt, Pakistan and northern India rather than a minor clover.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    { label: 'Life cycle', value: 'Winter annual, not perennial' },
    {
      label: 'Cutting',
      value:
        'Multiple cuts in one season; multi-cut and single-cut types exist',
    },
    {
      label: 'Nitrogen',
      value:
        'Fixes atmospheric nitrogen; a break in cereal-dominated irrigated rotations',
    },
    {
      label: 'Water',
      value: 'Grown under irrigation in its principal regions',
    },
    {
      label: 'Bloat risk',
      value: 'Present, as with other high-protein non-tannin legumes',
    },
  ],
  sections: [
    {
      id: 'season',
      heading: 'A crop for the cool season',
      body: [
        {
          type: 'paragraph',
          text: 'Berseem grows in the window between summer crops in subtropical irrigated systems, when temperatures are too low for the main cereal or cotton crop and irrigation water is available. It converts an otherwise idle season into forage, which is why it fits so completely into those rotations.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'multi-cut',
      heading: 'Cut repeatedly, not once',
      body: [
        {
          type: 'paragraph',
          text: 'Multi-cut types regrow from the crown after each harvest and are cut four or five times in a season; single-cut types produce one large harvest and then flower. Choosing between them is a decision about whether the field is producing feed continuously or clearing for a following crop.',
        },
      ],
    },
    {
      id: 'regrowth',
      heading: 'Where the regrowth comes from',
      body: [
        {
          type: 'paragraph',
          text: 'Cutting height matters because regrowth comes from buds low on the crown, and cutting below them ends the stand for the season. The last cut of the year is normally taken higher or left for seed, since the plant is annual and will not regrow after it anyway.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Nitrogen in an irrigated cereal rotation',
      body: [
        {
          type: 'paragraph',
          text: 'As a legume it fixes its own nitrogen and leaves a residue for the following rice, cotton or maize crop, which in intensively cropped irrigated systems is a real part of the fertility budget. Applied nitrogen suppresses fixation and is not used on an established stand.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'bloat',
      heading: 'Bloat',
      body: [
        {
          type: 'paragraph',
          text: 'Berseem is high in soluble protein and low in condensed tannins, so it carries a bloat risk for ruminants grazing it directly. In its principal systems it is cut and fed rather than grazed, which manages the hazard by the way the crop is used rather than by intake control.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Sowing and inoculation',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is small and sown shallow into a fine irrigated seedbed, often broadcast into standing water in rice-based systems. The appropriate rhizobia are usually present where berseem has been grown, and inoculation matters on ground with no history of it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Irrigation dependence',
      body: [
        {
          type: 'paragraph',
          text: 'Berseem is not a dryland crop: its yield in the systems that grow it depends on repeated irrigation through the cool season. That dependence ties it to canal and tubewell command areas and excludes it from rainfed winter agriculture in the same regions.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed production',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is taken from the final growth after the last forage cut, which means a grower chooses between a further cut and a seed crop. That trade-off, and the pollinator requirement shared with the other clovers, keeps seed production regionally concentrated.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Feeding and conservation',
      body: [
        {
          type: 'paragraph',
          text: 'Most berseem is fed fresh as cut, because the systems that grow it feed daily from a nearby plot. Where it is conserved, its high moisture and low sugar make wilting essential, and it is more often dried than ensiled.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'temperature' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'red-clover' },
    { type: 'crop', slug: 'white-clover' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['forage', 'crop-rotation', 'ruminant'],
  geographicScope:
    'Egypt and the Nile valley, Pakistan and northern India, with smaller use in the Mediterranean and the southern United States.',
  climateContext:
    'Subtropical cool season under irrigation; frost-sensitive at the extremes of its range and intolerant of summer heat.',
  limitations: [
    'Cutting numbers and intervals vary with type, sowing date and region; national guidance governs.',
    'Bloat risk is treated as categorical; susceptibility depends on animal, feeding method and management, and veterinary guidance governs.',
    'Yields depend almost entirely on irrigation availability and are not given.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Irrigated winter forage systems' },
    { sourceId: 'icar', citedFor: 'Indian berseem agronomy and varieties' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Trifolium alexandrinum compendium data' },
    { sourceId: 'usda-ars', citedFor: 'Forage legume research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Berseem Clover',
    description:
      'Trifolium alexandrinum as a forage legume: the cool-season crop of irrigated subtropical rotations, multi-cut regrowth, nitrogen fixation and bloat risk.',
    keywords: [
      'berseem clover',
      'Trifolium alexandrinum',
      'Egyptian clover',
      'winter forage',
      'multi-cut',
    ],
  },
  structuredData: { article: true },
};
