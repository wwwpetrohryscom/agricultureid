import type { CropContent } from '@/types/content';

export const jerusalemArtichoke: CropContent = {
  id: 'crop-jerusalem-artichoke',
  slug: 'jerusalem-artichoke',
  contentType: 'crop',
  title: 'Jerusalem Artichoke',
  scientificName: 'Helianthus tuberosus',
  alternativeNames: ['Sunchoke', 'Topinambour'],
  category: 'Root and tuber crop',
  subcategory: 'Perennial sunflower grown for tubers',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Perennial',
  summary:
    'Jerusalem artichoke stores inulin rather than starch, which is what makes it useful industrially and what makes it hard to eradicate: every tuber fragment left in the ground regrows the crop next season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jerusalem artichoke is a North American sunflower grown for tubers, and it is neither from Jerusalem nor an artichoke. Its carbohydrate is inulin, a fructose polymer, rather than the starch stored by potato, and that difference explains both its industrial interest and its digestive reputation.',
    },
    {
      type: 'paragraph',
      text: "The crop is also effectively permanent once planted. Tubers left in the soil at harvest sprout the following year, and a field that has grown it retains it as a volunteer for years, which is why the planting decision is closer to a rotation commitment than a season's choice.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Genus', value: 'Helianthus, the same genus as sunflower' },
    {
      label: 'Storage carbohydrate',
      value: 'Inulin, a fructan, rather than starch',
    },
    {
      label: 'Persistence',
      value:
        'Tuber fragments left at harvest regrow; the crop persists as a volunteer',
    },
    {
      label: 'Storage',
      value: 'Thin-skinned tubers that lose moisture rapidly out of ground',
    },
    { label: 'Habit', value: 'Tall perennial, commonly two to three metres' },
  ],
  sections: [
    {
      id: 'inulin',
      heading: 'Inulin, not starch',
      body: [
        {
          type: 'paragraph',
          text: "The tuber stores inulin, a chain of fructose units, and this is the basis of the crop's industrial use as a source of fructose syrup and prebiotic fibre. It is also why the tubers are poorly digested by many people, producing the flatulence for which the crop is well known — a property that is a food-quality fact rather than a health statement.",
        },
      ],
    },
    {
      id: 'persistence',
      heading: 'A crop that will not leave',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest never removes every tuber, and each fragment left in the soil produces a plant the next season. A field that has carried Jerusalem artichoke keeps producing volunteers for years, and in some regions the plant is listed as an invasive weed of riverbanks and field margins. Planting it changes what that ground can be used for afterwards.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Tubers that will not store',
      body: [
        {
          type: 'paragraph',
          text: 'The tuber has a thin skin and no true dormancy, and it dehydrates quickly once lifted, so it does not store like a potato. Standard practice is to leave the crop in the ground and lift as required, which works where winters are mild and fails where the ground freezes solid.',
        },
      ],
    },
    {
      id: 'sunflower',
      heading: 'A sunflower without the seed',
      body: [
        {
          type: 'paragraph',
          text: 'As a Helianthus the plant shares sclerotinia and rust with sunflower and cannot be rotated against it, and it flowers late and often does not set useful seed at higher latitudes. Propagation is by tuber, not seed, so seed set is irrelevant to production.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'height',
      heading: 'A very tall crop',
      body: [
        {
          type: 'paragraph',
          text: 'Plants reach two to three metres and shade heavily, which suppresses weeds without herbicide and makes the crop useful as a screen or windbreak. The same height means lodging in exposed sites and a large volume of top growth to deal with before lifting.',
        },
      ],
    },
    {
      id: 'low-input',
      heading: 'Low input by necessity and by nature',
      body: [
        {
          type: 'paragraph',
          text: 'The crop tolerates poor soils, needs little fertiliser and has few serious pests in most regions, which is genuinely attractive. That low-input profile combined with the persistence problem means it is usually placed on ground with no better use rather than in a productive rotation.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'lifting',
      heading: 'Lifting an irregular tuber',
      body: [
        {
          type: 'paragraph',
          text: 'Tubers are knobbly and set at variable depth around the plant, so mechanical lifting damages a substantial share and cleaning is difficult. Cultivar selection for smoother, more compact tubers is the main breeding objective and directly determines whether the crop can be handled at scale.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'A name that explains nothing',
      body: [
        {
          type: 'paragraph',
          text: '"Jerusalem" is generally taken as a corruption of the Italian girasole, for sunflower, and the artichoke reference is to a perceived similarity in flavour. Neither part of the name identifies the plant, and topinambour, the French and Central European name, is the one used in most industrial literature.',
        },
      ],
    },
    {
      id: 'industry',
      heading: 'Where the industry actually is',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial production is concentrated in France, Germany, the Netherlands and parts of Eastern Europe, largely for inulin extraction and for spirits, with small fresh-vegetable markets elsewhere. It is an industrial feedstock more than a vegetable in volume terms.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'machinery', slug: 'potato-harvester' },
    { type: 'machinery', slug: 'cultivator' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sweet-potato' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'Native to North America; commercially produced in France, Germany, the Netherlands and Eastern Europe, mainly for inulin and spirits.',
  climateContext:
    'Cold-hardy temperate perennial; tubers overwinter in the ground where soil does not freeze deeply.',
  limitations: [
    'Digestive effects of inulin are a food-composition fact; no dietary or health guidance is given here.',
    'Invasive and weed listings differ by jurisdiction and are not reproduced here.',
    'Production statistics are incomplete because much of the crop is grown on small areas for industrial contracts.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and native distribution',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Helianthus tuberosus compendium data and invasive status',
    },
    {
      sourceId: 'fr-agriculture-gouv',
      citedFor: 'French topinambour production context',
    },
    { sourceId: 'fao', citedFor: 'Root and tuber crop context' },
    { sourceId: 'faostat', citedFor: 'Production statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Jerusalem Artichoke',
    description:
      'Helianthus tuberosus as a crop: inulin instead of starch, tubers that regrow from fragments, poor storage out of ground and industrial inulin production.',
    keywords: [
      'Jerusalem artichoke',
      'sunchoke',
      'Helianthus tuberosus',
      'inulin',
      'topinambour',
    ],
  },
  structuredData: { article: true },
};
