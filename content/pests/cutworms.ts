import type { PestContent } from '@/types/content';

export const cutworms: PestContent = {
  id: 'pest-cutworms',
  slug: 'cutworms',
  contentType: 'pest',
  title: 'Cutworms',
  scientificName:
    'Larvae of moths in family Noctuidae, e.g. Agrotis spp. (Lepidoptera)',
  alternativeNames: ['Cutworm caterpillars'],
  category: 'Insect pest',
  subcategory: 'Soil-dwelling caterpillar',
  pestGroup: 'Insect — Lepidoptera (Noctuidae larvae)',
  summary:
    'Cutworms are night-active caterpillars that shelter in soil or debris by day and sever young seedlings at or near the soil line, posing a classic early-season risk to newly established crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cutworms are the larvae of several moth species in the family Noctuidae. They hide in soil or plant debris during the day and feed at night, often severing young seedling stems at or just below the soil surface, a distinct and easily recognized pattern of damage.',
    },
    {
      type: 'paragraph',
      text: 'Because a single larva can cut down several seedlings across successive nights as it moves along a row, even modest populations can cause disproportionate stand losses in freshly planted or recently emerged crops.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Noctuidae' },
    {
      label: 'Feeding',
      value:
        'Chewing seedling stems at or below the soil line, mainly at night',
    },
    {
      label: 'Key concern',
      value: 'Seedling stand loss shortly after planting or emergence',
    },
    {
      label: 'Behaviour',
      value: 'Curl into a tight C-shape and hide in soil or debris by day',
    },
    {
      label: 'Natural enemies',
      value: 'Ground beetles, parasitoid wasps and flies, birds',
    },
    {
      label: 'Sign',
      value: 'Severed seedlings lying on the soil surface, larvae found nearby',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Cutworm larvae are plump, smooth, and somewhat greasy-looking, ranging from grey to brown to nearly black. When disturbed, they characteristically curl tightly into a C-shape, a useful field clue for distinguishing them from other soil-dwelling caterpillars.',
        },
        {
          type: 'list',
          items: [
            'Seedlings cut off at or just below the soil surface, often lying nearby',
            'Larvae curled in a tight C-shape when soil near a damaged plant is disturbed',
            'Damage concentrated in patches soon after planting or emergence',
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
          text: 'Adult moths lay eggs in soil or on plant debris and weeds, with timing that varies by species and region. In many temperate areas larvae overwinter in the soil, resuming feeding as temperatures rise in spring, while other species produce generations during the growing season.',
        },
        {
          type: 'paragraph',
          text: 'Larvae pass through several instars before pupating in the soil, and depending on species and climate, one to several generations can occur each year.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Newly transplanted or emerging seedlings are the most vulnerable stage, since larvae sever stems at the soil line, killing plants outright. Established plants with thicker stems are usually far less affected.',
        },
        {
          type: 'paragraph',
          text: 'Cutworms attack a broad range of vegetables and field crops, with maize, cabbage, lettuce, and tomato among the notable hosts.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pre-plant scouting for larvae in soil and debris, along with checking for early cutting damage right after planting or emergence, helps identify risk before losses accumulate. Pheromone traps are available for some species to track adult moth flight, and weedy field margins are worth inspecting since egg-laying is often associated with weeds and ground cover.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Cutworm management centres on reducing conditions that attract egg-laying moths and protecting the vulnerable seedling stage.',
        },
        {
          type: 'list',
          items: [
            'Control weeds ahead of planting, since they attract egg-laying moths and shelter larvae',
            'Scout closely in the first weeks after planting or emergence, when seedlings are most vulnerable',
            'Conserve ground beetles and other natural enemies',
            'Use physical seedling collars or barriers where practical for high-value transplants',
            'Consider tillage timing to disrupt overwintering or resident larvae',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on ground beetles and other natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'tomato' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'disc-harrow' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'european-corn-borer' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide wherever host crops are grown; species, seasonal timing, and pressure vary considerably by region and climate.',
  climateContext:
    'Overwintering strategy and generation timing depend heavily on regional temperature, with warmer climates supporting more generations per year.',
  limitations: [
    'This is a general overview of a group of species with similar habits, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field crop monitoring and management context',
    },
    { sourceId: 'umn-extension', citedFor: 'Vegetable crop scouting guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cutworms',
    description:
      'Cutworms explained: identification, life cycle, seedling-cutting damage, pre-plant monitoring, and integrated management for cutworm caterpillars.',
    keywords: [
      'cutworms',
      'Noctuidae larvae',
      'seedling pest',
      'soil caterpillar',
    ],
  },
  structuredData: { article: true },
};
