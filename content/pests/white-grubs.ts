import type { PestContent } from '@/types/content';

export const whiteGrubs: PestContent = {
  id: 'pest-white-grubs',
  slug: 'white-grubs',
  contentType: 'pest',
  title: 'White Grubs',
  scientificName:
    'Larvae of scarab beetles, family Scarabaeidae (order Coleoptera), including Phyllophaga, Holotrichia, and Popillia species',
  alternativeNames: ['Grubs', 'Scarab grubs', 'Root grubs'],
  category: 'Insect pest',
  subcategory: 'Soil-dwelling beetle larva',
  pestGroup: 'Insect — Coleoptera (Scarabaeidae larvae)',
  summary:
    'White grubs are the soil-dwelling larvae of scarab beetles that feed on roots and underground plant parts, causing patchy wilting and stand loss in cereals, tubers, and sugarcane over a one- to three-year life cycle.',
  introduction: [
    {
      type: 'paragraph',
      text: 'White grubs are the larval stage of scarab beetles (family Scarabaeidae), a large group that includes chafers and June beetles. The larvae are plump, C-shaped, and whitish with a distinct brown head capsule, and are usually found curled in the soil close to plant roots.',
    },
    {
      type: 'paragraph',
      text: 'Unlike many insect pests, white grubs can remain below ground for one to three years, passing through several larval stages before pupating. Because they feed almost entirely on roots and other underground tissue, damage is often noticed only after plants wilt or fail to establish, which makes below-ground scouting important.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Scarabaeidae (larval stage)',
    },
    { label: 'Feeding', value: 'Chewing roots, tubers, and underground stems' },
    {
      label: 'Key concern',
      value: 'Root pruning causing wilting, stand loss, and lodging',
    },
    {
      label: 'Larval stage',
      value:
        'Often persists in soil for one to three years depending on species',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitic wasps, entomopathogenic fungi and nematodes, birds',
    },
    {
      label: 'Sign',
      value:
        'Patches of wilting or dying plants that lift easily from the soil',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult scarab beetles vary in size and colour by species but are typically stout-bodied and oval. The larvae, white grubs, are creamy white to greyish, C-shaped when at rest, with a brown head and three pairs of legs near the front of the body.',
        },
        {
          type: 'paragraph',
          text: 'The pattern of hairs and spines on the underside of the last abdominal segment (the raster) is used to distinguish species. Grubs are typically found a few centimetres below the soil surface, near roots.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Adult beetles emerge and lay eggs in soil, often in grassy or turf areas, during warmer months. Eggs hatch into larvae that grow through successive instars, with the largest, most damaging larvae typically present in the final year before pupation.',
        },
        {
          type: 'paragraph',
          text: 'Grubs move vertically in the soil profile with the seasons, feeding nearer the surface in warm, moist conditions and retreating deeper to overwinter, before eventually pupating and emerging as adult beetles.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae sever roots and tunnel into tubers and underground stems, reducing the plant’s ability to take up water and nutrients. Affected plants may wilt in patches, especially during dry weather, and severely damaged plants can be lifted from the soil with little resistance.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include maize, potato, and sugarcane, with risk often elevated in fields recently converted from pasture, turf, or long fallow, similar to other soil-dwelling beetle larvae.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Digging and inspecting soil around roots before planting a susceptible crop helps estimate grub density and risk. Monitoring adult beetle flights, for example with light traps, can also help time field inspections and anticipate egg-laying periods.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because white grubs persist in the soil for extended periods, management relies on assessing risk before planting and reducing conditions that favour large populations.',
        },
        {
          type: 'list',
          items: [
            'Sample soil for grubs before planting susceptible root and tuber crops',
            'Avoid planting high-risk crops immediately after grassland, turf, or long fallow',
            'Conserve parasitic wasps, entomopathogenic fungi and nematodes, and insectivorous birds',
            'Consider tillage timing, which can expose grubs to predators and desiccation',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or soil-applied treatment must follow current, locally authorized recommendations and product labels, and should consider effects on soil-dwelling natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sugarcane' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in temperate, subtropical, and tropical regions worldwide wherever scarab beetles occur; species, host range, and life-cycle length vary regionally.',
  climateContext:
    'Larval feeding intensity and vertical movement in the soil are strongly influenced by soil moisture and temperature, with wilting often most visible during dry spells that compound root loss.',
  limitations: [
    'This is a general overview of a large larval group spanning many scarab species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field scouting and cultural management context',
    },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory and distribution context for scarab pests',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'White Grubs',
    description:
      'White grubs explained: scarab beetle biology, root and tuber damage, pre-plant soil sampling, and integrated management for cereals and tubers.',
    keywords: [
      'white grubs',
      'scarab beetle larvae',
      'Scarabaeidae',
      'root pest',
    ],
  },
  structuredData: { article: true },
};
