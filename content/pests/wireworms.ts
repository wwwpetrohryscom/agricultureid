import type { PestContent } from '@/types/content';

export const wireworms: PestContent = {
  id: 'pest-wireworms',
  slug: 'wireworms',
  contentType: 'pest',
  title: 'Wireworms',
  scientificName: 'Larvae of click beetles, family Elateridae (Coleoptera)',
  alternativeNames: ['Click beetle larvae'],
  category: 'Insect pest',
  subcategory: 'Soil-dwelling beetle larva',
  pestGroup: 'Insect — Coleoptera (Elateridae larvae)',
  summary:
    'Wireworms are the soil-dwelling larvae of click beetles, feeding on seeds, roots, and tubers for several years before pupating, and are often worse in fields recently converted from grassland.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wireworms are the larval stage of click beetles (family Elateridae), a group named for the audible click adults make when righting themselves. Larvae are slender, hard-bodied, and shiny yellow-brown, and unlike most insect pests they can remain in the soil for several years before completing development.',
    },
    {
      type: 'paragraph',
      text: 'Because adult beetles prefer to lay eggs in grassy or weedy ground, damage is often most severe in fields recently converted from pasture, sod, or long fallow to arable cropping. Larvae feed on germinating seeds and below-ground plant parts, making them a particular risk to stand establishment and to tuber and root crops.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Elateridae (larval stage)',
    },
    {
      label: 'Feeding',
      value: 'Chewing seeds, roots, underground stems, and tubers',
    },
    {
      label: 'Key concern',
      value: 'Poor stand establishment and tuber tunneling or scarring',
    },
    {
      label: 'Larval stage',
      value:
        'Can persist in soil for two to five years, depending on species and climate',
    },
    {
      label: 'Natural enemies',
      value: 'Predatory ground beetles, entomopathogenic nematodes and fungi',
    },
    {
      label: 'Sign',
      value: 'Small round tunnels in tubers, missing or damaged seedlings',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult click beetles are elongated, dark, and streamlined, and are named for the clicking mechanism they use to flip upright if turned on their back. The larvae, wireworms, are hard, shiny, jointed, cylindrical, and yellow-brown, growing up to about two and a half centimetres.',
        },
        {
          type: 'table',
          caption: 'Adult click beetle versus larval wireworm',
          columns: ['Stage', 'Appearance', 'Where found'],
          rows: [
            [
              'Adult (click beetle)',
              'Elongated, dark, streamlined body',
              'On foliage and soil surface',
            ],
            [
              'Larva (wireworm)',
              'Hard, shiny, jointed, yellow-brown, cylindrical',
              'In soil, feeding on roots and seeds',
            ],
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
          text: 'Adult beetles lay eggs in soil, especially in grassy or weedy areas, during spring and summer. Larvae then live in the soil for multiple years, feeding intermittently and moving through the soil profile seasonally, staying deeper during cold or dry periods and closer to the surface in moist, mild conditions, before eventually pupating and emerging as adults.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae feed on planted seeds and germinating seedlings, creating gaps in the crop stand, and tunnel into roots and below-ground storage organs such as potato tubers, causing internal tunnels and surface scarring that reduce marketability.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include potato, maize, and sugar beet among others, with risk often elevated in fields with a recent history of grassland or pasture.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pre-plant bait traps, such as buried grain or potato pieces checked after one to two weeks, help estimate wireworm risk before a susceptible crop is planted. Soil sampling and a review of field history, particularly recent grassland or sod, provide additional risk indicators.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because wireworms persist in soil for years, management focuses on pre-plant risk assessment and reducing conditions that favour large populations.',
        },
        {
          type: 'list',
          items: [
            'Use pre-plant bait trapping or soil sampling to assess risk before planting susceptible crops',
            'Avoid planting highly susceptible crops immediately after grassland or sod where risk is high',
            'Conserve ground beetles, entomopathogenic nematodes, and other natural enemies',
            'Manage soil drainage, since larvae move toward moist soil zones',
            'Rotate away from high-risk sequences where wireworm pressure is known to be elevated',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or seed-treatment use must follow current, locally authorized recommendations and product labels, and should consider effects on soil-dwelling natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'colorado-potato-beetle' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in temperate and subtropical arable regions worldwide; species, persistence, and risk factors vary by region and land-use history.',
  climateContext:
    'Larvae move within the soil profile in response to temperature and moisture, sheltering deeper during cold or dry spells and feeding nearer the surface in mild, moist conditions.',
  limitations: [
    'This is a general overview of a soil-dwelling larval stage spanning many species, not region-specific guidance for a particular crop.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'ahdb',
      citedFor:
        'Risk assessment and monitoring guidance for potato and field crops',
    },
    {
      sourceId: 'psu-extension',
      citedFor: 'Field scouting and cultural management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wireworms',
    description:
      'Wireworms explained: identification, multi-year soil biology, seedling and tuber damage, pre-plant risk monitoring, and integrated management.',
    keywords: ['wireworms', 'click beetle larvae', 'Elateridae', 'potato pest'],
  },
  structuredData: { article: true },
};
