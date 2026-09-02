import type { CropContent } from '@/types/content';

export const pakChoi: CropContent = {
  id: 'crop-pak-choi',
  slug: 'pak-choi',
  contentType: 'crop',
  title: 'Pak Choi',
  scientificName: 'Brassica rapa Chinensis Group',
  alternativeNames: ['Bok choy', 'Chinese white cabbage'],
  category: 'Vegetable crop',
  subcategory: 'Brassica rapa cultivar group',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Pak choi is the non-heading Brassica rapa: a rosette of thick white petioles and dark blades harvested whole, fast enough to crop several times a season and sold as a unit rather than by weight of leaf.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pak choi does not form a head. It grows as an open rosette in which the swollen white petiole is as much of the product as the blade, and the whole plant is cut at the base and sold intact.',
    },
    {
      type: 'paragraph',
      text: 'It shares its species with Chinese cabbage and turnip, and it shares their pests and their bolting risk, but its short cycle and unit sale make it behave commercially more like a salad crop than like a brassica.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Rank', value: 'Cultivar group of Brassica rapa' },
    {
      label: 'Habit',
      value: 'Non-heading rosette; petiole and blade both eaten',
    },
    { label: 'Cycle', value: 'Very short; multiple crops a season are normal' },
    {
      label: 'Sale unit',
      value: 'Whole plant, graded by size rather than by weight of leaf',
    },
    {
      label: 'Principal risk',
      value: 'Bolting after cold, as in the rest of the species',
    },
  ],
  sections: [
    {
      id: 'non-heading',
      heading: 'Rosette rather than head',
      body: [
        {
          type: 'paragraph',
          text: 'Where Chinese cabbage forms a dense upright head, pak choi stays open, and the swollen petiole becomes the bulk of the harvested plant. That structure means there is no interior to protect and no tipburn problem, and it also means the crop has no storage buffer — what is in the field is what is saleable.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'baby',
      heading: 'Baby and full size are different crops',
      body: [
        {
          type: 'paragraph',
          text: 'Pak choi is grown both to full size and as baby leaf or baby head, and the two use different spacings, different cultivars and different harvest equipment. A baby crop can be ready in a few weeks, which is what makes the species a mainstay of intensive multiple-cropping systems.',
        },
      ],
    },
    {
      id: 'bolting',
      heading: 'Bolting',
      body: [
        {
          type: 'paragraph',
          text: 'Like the rest of Brassica rapa, pak choi flowers after cold exposure followed by lengthening days, and a spring sowing caught by a cold spell bolts before it is saleable. Bolting-resistant cultivars and sowing-date discipline are the controls, and there is no rescue once the stem extends.',
        },
      ],
    },
    {
      id: 'unit',
      heading: 'Sold as a unit',
      body: [
        {
          type: 'paragraph',
          text: 'Because the plant is sold whole, uniformity of size and shape matters more than total yield, and a field with variable plants has a low marketable proportion even at good tonnage. Even establishment and even water supply are therefore quality inputs rather than yield inputs.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water and petiole quality',
      body: [
        {
          type: 'paragraph',
          text: 'The thick petiole is mostly water, and irregular supply produces stringy or hollow petioles that fail on eating quality. The crop is short enough that a single dry period covers a large fraction of its life.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Flea beetles and the short cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Flea beetle damage on young leaves is cosmetic and therefore commercially serious on a crop sold whole and eaten raw or lightly cooked. Because the cycle is short, an early infestation affects the harvested product directly rather than being outgrown.',
        },
      ],
    },
    {
      id: 'clubroot',
      heading: 'Rotation within one species',
      body: [
        {
          type: 'paragraph',
          text: 'Pak choi, Chinese cabbage and turnip are the same species, so rotating between them is no rotation at all for clubroot or for the other soil-borne brassica diseases. Intensive multiple cropping of the species on the same ground is the situation clubroot most exploits.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'protected',
      heading: 'Grown under protection',
      body: [
        {
          type: 'paragraph',
          text: 'Much pak choi is grown in tunnels or glass in temperate regions, which controls the cold exposure that causes bolting and extends the season at both ends. That makes it a protected-cropping vegetable in many markets rather than a field crop.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Bok choy, pak choi, and what is meant',
      body: [
        {
          type: 'paragraph',
          text: 'The names bok choy and pak choi are used interchangeably for this group, while Shanghai or green-stemmed types are cultivars within it rather than a separate group. Chinese cabbage refers to the heading Pekinensis Group and is a different product from the same species.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'diamondback-moth' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'chinese-cabbage' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'radish' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'East and Southeast Asia, with worldwide production for Asian vegetable markets and protected cropping in temperate regions.',
  climateContext:
    'Cool-season fast vegetable; bolts after cold exposure and suffers quality loss under irregular water supply.',
  limitations: [
    'Baby-leaf and full-size production are different systems and their yields are not comparable.',
    'Bolting-resistance ratings are cultivar scales set by seed companies and national trials.',
    'Clubroot resistance is pathotype-specific.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Asian vegetable production context' },
    { sourceId: 'cabi', citedFor: 'Brassica rapa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cornell-cals', citedFor: 'Vegetable production guidance' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Pak Choi',
    description:
      'Pak choi as a Brassica rapa cultivar group: the non-heading rosette, baby and full-size systems, bolting, unit sale and the single-species rotation trap.',
    keywords: [
      'pak choi',
      'bok choy',
      'Brassica rapa',
      'Chinensis Group',
      'baby leaf',
    ],
  },
  structuredData: { article: true },
};
