import type { CropContent } from '@/types/content';

export const blackCumin: CropContent = {
  id: 'crop-black-cumin',
  slug: 'black-cumin',
  contentType: 'crop',
  title: 'Black Cumin',
  scientificName: 'Nigella sativa',
  alternativeNames: ['Nigella', 'Kalonji', 'Black seed', 'Habbat al-barakah'],
  category: 'Spice crop',
  subcategory: 'Annual seed spice',
  botanicalFamily: 'Ranunculaceae (buttercup family)',
  lifecycle: 'Annual',
  summary:
    'Black cumin is a buttercup-family seed spice, unrelated to cumin, to caraway and to every other seed spice in the trade — all of which come from the carrot family — and its name collides with two of them.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Black cumin is grown for small black seeds used across the Middle East, South Asia, North Africa and the Mediterranean, sprinkled on bread, added to pickles and used in spice mixtures. Egypt, India, Turkey, Iran, Syria and Ethiopia are the principal producers.',
    },
    {
      type: 'paragraph',
      text: 'Almost every seed spice in the trade — cumin, coriander, caraway, fennel, anise, dill — belongs to the carrot family. Black cumin does not. It is a Ranunculaceae, related to the ornamental love-in-a-mist, and it shares neither chemistry nor agronomy with the crops its English name places it among.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Ranunculaceae (buttercup family)' },
    {
      label: 'Unrelated to',
      value: 'Cumin (Cuminum cyminum) and caraway (Carum carvi), both Apiaceae',
    },
    { label: 'Harvested organ', value: 'Small black seeds from a dry capsule' },
    {
      label: 'Principal producers',
      value: 'Egypt, India, Turkey, Iran, Syria and Ethiopia',
    },
    {
      label: 'Habit',
      value: 'Short cool-season annual, finely divided leaves',
    },
    {
      label: 'Naming hazard',
      value: 'Called black caraway and black onion seed in different markets',
    },
  ],
  sections: [
    {
      id: 'family',
      heading: 'A seed spice from the wrong family',
      body: [
        {
          type: 'paragraph',
          text: 'Cumin, coriander, caraway, fennel, anise and dill are all Apiaceae, and their agronomy, diseases and processing have a great deal in common. Black cumin is a Ranunculaceae, so none of that carries across: its diseases, its rotation position and its aroma chemistry are its own. Any recommendation reasoned from "seed spice" rather than from this species is likely to be wrong.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Three misleading names',
      body: [
        {
          type: 'paragraph',
          text: 'It is called black cumin, black caraway and black onion seed in different markets, and it is none of those plants. Bunium persicum is also called black cumin in parts of Central and South Asia, and that is an Apiaceae. Resolving which plant a record means is unavoidable before any trade or research figure can be used.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'capsule',
      heading: 'A capsule, not an umbel',
      body: [
        {
          type: 'paragraph',
          text: 'The seeds develop inside an inflated capsule with several chambers rather than in the umbel that carries every Apiaceae seed spice, and the capsule shatters when fully ripe. Harvest is taken before full dry-down and finished under cover, which is the same compromise other seed spices face for a different anatomical reason.',
        },
      ],
    },
    {
      id: 'cool-season',
      heading: 'A cool short season',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is sown in the cool season — as a rabi crop in South Asia and as a winter crop around the Mediterranean — and matures in a few months. It needs cool conditions during vegetative growth and dry weather at ripening, and rain at harvest stains the seed and drops its grade.',
        },
      ],
    },
    {
      id: 'grade',
      heading: 'Graded on colour and cleanliness',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers judge the seed on blackness, uniformity, freedom from soil and stem, and aroma. Because the seed is small and the plants are cut and threshed, cleaning is a large share of post-harvest work and the main determinant of price within a crop.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'thymoquinone',
      heading: 'Aroma and seed oil',
      body: [
        {
          type: 'paragraph',
          text: 'The characteristic aroma is associated with thymoquinone and related compounds, and a fixed and an essential oil are both extracted from the seed for food and non-food uses. Composition varies with origin and season, and AgricultureID records the compound class rather than asserting a concentration.',
        },
      ],
    },
    {
      id: 'medicine',
      heading: 'Traditional use is not a claim',
      body: [
        {
          type: 'paragraph',
          text: 'The seed has a long history of non-food use across its range. This page covers the crop agronomically and leaves preparation, efficacy and regulatory questions to clinical and food authorities, which is where they belong.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotational position',
      body: [
        {
          type: 'paragraph',
          text: 'As a Ranunculaceae it shares few pathogens with the cereals and legumes it is grown between, which makes it a genuine break crop in the cool-season rotations of Egypt, India and Turkey. That is a real if modest advantage over rotating one Apiaceae spice against another.',
        },
      ],
    },
    {
      id: 'smallholder',
      heading: 'A smallholder crop with concentrated trade',
      body: [
        {
          type: 'paragraph',
          text: 'Production is spread across many small growers while the export trade is concentrated in a few countries and a few processors, so price formation happens far from the field. That structure is typical of the seed-spice trade and shapes how the crop is contracted and graded.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cumin' },
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'fennel' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Egypt, India, Turkey, Iran, Syria and Ethiopia are the principal producers, with trade into the Middle East, South Asia and Europe.',
  climateContext:
    'Cool-season annual; sown in winter or the rabi season and requiring dry weather at ripening.',
  limitations: [
    'Non-food and traditional preparation uses of the seed are outside the scope of an agronomic page and are not covered here.',
    'Seed composition varies with origin and season and is not quantified here.',
    'Several unrelated plants are traded under the name black cumin; records must be resolved to a species.',
  ],
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Indian seed spice agronomy' },
    { sourceId: 'fao', citedFor: 'Spice production and trade context' },
    { sourceId: 'cabi', citedFor: 'Nigella sativa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'tr-tarim', citedFor: 'Turkish spice production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Black Cumin',
    description:
      'Nigella sativa as a crop: a Ranunculaceae among carrot-family seed spices, three misleading names, capsule harvest, cool-season growth and grading on colour.',
    keywords: [
      'black cumin',
      'Nigella sativa',
      'kalonji',
      'black seed',
      'seed spice',
    ],
  },
  structuredData: { article: true },
};
