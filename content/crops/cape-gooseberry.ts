import type { CropContent } from '@/types/content';

export const capeGooseberry: CropContent = {
  id: 'crop-cape-gooseberry',
  slug: 'cape-gooseberry',
  contentType: 'crop',
  title: 'Cape Gooseberry',
  scientificName: 'Physalis peruviana',
  alternativeNames: ['Goldenberry', 'Uchuva', 'Aguaymanto', 'Physalis'],
  category: 'Fruit crop',
  subcategory: 'Solanaceous fruit grown as an annual or short-lived perennial',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Cape gooseberry is the sweet Physalis, harvested when the husk dries and the fruit drops — and that husk, which the market treats as packaging, is what gives an otherwise delicate berry weeks of shelf life.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cape gooseberry is a South American Physalis grown for a small orange berry enclosed in a papery calyx. Colombia and Peru are the principal exporters, and the fruit reaches European and North American markets as goldenberry or physalis.',
    },
    {
      type: 'paragraph',
      text: 'It is not tomatillo. Physalis peruviana is eaten ripe and sweet; Physalis philadelphica, the tomatillo, is harvested green and acidic for sauces. Both are husk-bearing Physalis, both are called physalis in some markets, and confusing them produces the wrong crop entirely.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Distinct from tomatillo',
      value:
        'Physalis philadelphica is a different species, harvested green and acidic',
    },
    {
      label: 'Harvest signal',
      value: 'The husk dries and the fruit drops or detaches easily',
    },
    {
      label: 'The husk',
      value:
        'Dry calyx that protects the fruit and extends shelf life substantially',
    },
    { label: 'Principal exporters', value: 'Colombia and Peru' },
    {
      label: 'Habit',
      value:
        'Sprawling perennial, usually grown as an annual and often trellised',
    },
  ],
  sections: [
    {
      id: 'husk',
      heading: 'The husk is the packaging',
      body: [
        {
          type: 'paragraph',
          text: 'The dry papery calyx is left on the fruit for export, and it protects the berry from abrasion and water loss well enough to give it a shelf life measured in weeks rather than days. Fruit sold husked is a different, shorter-lived product. It is one of the few crops where the plant supplies its own packaging and the market pays for it.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'not-tomatillo',
      heading: 'Not tomatillo',
      body: [
        {
          type: 'paragraph',
          text: 'Cape gooseberry is eaten ripe and sweet; tomatillo is picked green, is sharply acidic and is used for sauces. They are different species, grown for different markets, harvested at different stages. The shared genus and the shared husk make them look like variants of one crop, and treating them that way gets both wrong.',
        },
      ],
    },
    {
      id: 'drop-harvest',
      heading: 'Harvested as it drops',
      body: [
        {
          type: 'paragraph',
          text: 'The fruit is ready when the calyx dries to a straw colour and the berry detaches easily or falls, so harvest means repeated collection over a long period rather than a single pick. Fruit left on the ground picks up soil and rots, so picking frequency is a quality decision.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'Trellised for grade',
      body: [
        {
          type: 'paragraph',
          text: 'The plant sprawls widely and fruit in contact with soil is lost, so commercial production trellises or stakes it. Trellising also spreads the canopy for light and makes repeated picking practical, and it is the main establishment cost.',
        },
      ],
    },
    {
      id: 'andes',
      heading: 'An Andean crop with a South African name',
      body: [
        {
          type: 'paragraph',
          text: 'The plant is South American, and "cape gooseberry" records its nineteenth-century cultivation at the Cape of Good Hope rather than any origin there. In its home region it is uchuva in Colombia and aguaymanto in Peru, and export documentation may use any of these names.',
        },
      ],
    },
    {
      id: 'export',
      heading: 'Built on export',
      body: [
        {
          type: 'paragraph',
          text: "Colombian and Peruvian production is oriented to export, so the crop is grown to importing markets' size, colour and residue specifications rather than to a domestic standard. That makes market access requirements, rather than agronomy, the binding constraint for many growers.",
        },
      ],
    },
    {
      id: 'solanaceae',
      heading: 'A nightshade in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'It hosts the soil-borne wilts and several viruses of the nightshade family, so it cannot be rotated against tomato, potato, pepper, eggplant or tomatillo. Fusarium wilt in particular is a serious constraint in the Andean production zones.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'perennial',
      heading: 'Perennial habit, annual management',
      body: [
        {
          type: 'paragraph',
          text: 'The plant is a short-lived perennial that can crop for more than a year, but disease build-up and declining fruit size usually make replanting the better choice. Growers therefore treat a perennial as an annual for reasons that are pathological rather than botanical.',
        },
      ],
    },
    {
      id: 'volunteers',
      heading: 'Seeds freely',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit left in the field seeds readily and the plant volunteers persistently, which carries virus and soil-borne disease into following crops. Removing unharvested fruit is a disease-management step rather than tidiness.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'punnet-clamshell' },
    { type: 'post-harvest', slug: 'precooling' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tomatillo' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Native to the Andes. Colombia and Peru dominate export production, with cultivation also in South Africa, Kenya, Ecuador, China and India.',
  climateContext:
    'Cool subtropical highland; frost-sensitive and grown at altitude in the tropics for a long mild season.',
  limitations: [
    'Export market residue and grade requirements are set by importing jurisdictions and are not reproduced here.',
    'Species-level statements do not distinguish the several Physalis crops that share common names.',
    'Cultivar-specific yields and season lengths are not covered.',
  ],
  sourceReferences: [
    {
      sourceId: 'co-minagri',
      citedFor: 'Colombian export horticulture context',
    },
    {
      sourceId: 'pe-midagri',
      citedFor: 'Peruvian Andean crop production context',
    },
    { sourceId: 'cabi', citedFor: 'Physalis peruviana compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'fao',
      citedFor: 'Tropical and subtropical fruit production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Cape Gooseberry',
    description:
      'Physalis peruviana as a crop: the husk as packaging and shelf life, distinct from tomatillo, drop harvest, trellising and export-oriented production.',
    keywords: [
      'cape gooseberry',
      'Physalis peruviana',
      'goldenberry',
      'uchuva',
      'aguaymanto',
    ],
  },
  structuredData: { article: true },
};
