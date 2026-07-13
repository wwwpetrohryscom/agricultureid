import type { PestContent } from '@/types/content';

export const yellowStemBorer: PestContent = {
  id: 'pest-yellow-stem-borer',
  slug: 'yellow-stem-borer',
  contentType: 'pest',
  title: 'Yellow Stem Borer',
  scientificName: 'Scirpophaga incertulas (Lepidoptera: Crambidae)',
  alternativeNames: ['Rice yellow stem borer', 'YSB'],
  category: 'Insect pest',
  subcategory: 'Stem-boring caterpillar',
  pestGroup: 'Insect — Lepidoptera (Crambidae)',
  summary:
    'Yellow stem borer is a moth whose caterpillars tunnel inside rice stems, killing central shoots ("deadhearts") in young crops and causing empty, whitened panicles ("whiteheads") in older crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yellow stem borer is among the most important insect pests of rice in tropical Asia. The damage is caused by the caterpillar (larval) stage, which bores into and feeds within the rice stem, severing the flow of water and nutrients to the growing point or developing panicle.',
    },
    {
      type: 'paragraph',
      text: 'Because the larva feeds concealed inside the stem, the pest is often recognized by its symptoms rather than by the insect itself: dead central shoots in the vegetative stage and empty, erect, whitish panicles at the reproductive stage. Adults are pale moths that are active at night and lay eggs in masses on the foliage.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Crambidae' },
    { label: 'Host', value: 'Primarily rice' },
    { label: 'Damaging stage', value: 'Larva (stem-boring caterpillar)' },
    {
      label: 'Key concern',
      value: 'Deadhearts in young crops and whiteheads at panicle stage',
    },
    {
      label: 'Natural enemies',
      value: 'Egg parasitoids and larval parasitoids',
    },
    {
      label: 'Sign',
      value: 'Dead central shoots and empty, whitened panicles',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult female moths are pale yellowish-white, and each forewing typically bears a small dark spot. Egg masses are laid on leaves and covered with buff-coloured scales from the female. Larvae are pale and found inside the stem, so confirming their presence usually means splitting affected tillers lengthwise.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Deadheart',
              description:
                'The dead, easily pulled central shoot of a vegetative-stage tiller caused by a larva feeding at its base.',
            },
            {
              term: 'Whitehead',
              description:
                'An erect, empty, whitish panicle produced when a larva damages the stem at or after heading.',
            },
          ],
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Moths lay egg masses on the leaves, and newly hatched larvae move to the stem and bore inside, where they feed and develop through several instars before pupating within the stem. In warm conditions the life cycle is completed in a few weeks, giving several overlapping generations across a rice-growing season.',
        },
        {
          type: 'paragraph',
          text: 'Larvae can survive in rice stubble and volunteer plants between crops, so carry-over between seasons is an important part of the pest cycle in continuously cropped rice systems.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'When larvae feed inside the stem of vegetative-stage plants, the central leaf whorl dries and can be pulled out easily, producing a deadheart. When damage occurs around or after panicle emergence, the panicle fails to fill and stands erect and whitish as a whitehead. Losses depend heavily on crop stage at attack and on the proportion of tillers affected.',
        },
        {
          type: 'paragraph',
          text: 'Rice is the primary host. The relationship between the number of borers and actual yield loss varies with plant compensation, timing, and variety.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Monitoring combines counting deadhearts and whiteheads in the field with tracking adult moth activity, often using light traps or pheromone traps where available, and inspecting foliage for egg masses. These observations, judged against local economic thresholds, guide whether and when action is warranted.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management uses cultural, biological, and monitoring-based tactics together within an integrated pest management framework.',
        },
        {
          type: 'list',
          items: [
            'Use tolerant or less susceptible varieties and appropriate planting dates where recommended',
            'Practise field sanitation, including managing stubble and volunteer rice that carry larvae between crops',
            'Conserve egg and larval parasitoids and other natural enemies',
            'Avoid excessive nitrogen, which can favour borer build-up',
            'Base any intervention on scouting for egg masses and early symptoms against local thresholds',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider timing relative to the concealed larval stage and effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'rice' }],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'european-corn-borer' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A major rice stem borer in tropical and subtropical Asia; species mix, pressure, and guidance vary by region and rice ecosystem.',
  climateContext:
    'Warm temperatures shorten the life cycle and allow more generations, while stubble and volunteers help the pest carry over between crops.',
  limitations: [
    'This is a general overview of the pest, not variety- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'The relationship between borer numbers and yield loss varies with plant compensation and timing.',
  ],
  sourceReferences: [
    { sourceId: 'irri', citedFor: 'Rice stem borer biology and IPM guidance' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Yellow Stem Borer',
    description:
      'Yellow stem borer (Scirpophaga incertulas) in rice: identification, biology, deadheart and whitehead damage, monitoring, and integrated management.',
    keywords: [
      'yellow stem borer',
      'Scirpophaga incertulas',
      'rice stem borer',
      'whiteheads',
    ],
  },
  structuredData: { article: true },
};
