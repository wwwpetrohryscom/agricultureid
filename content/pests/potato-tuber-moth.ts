import type { PestContent } from '@/types/content';

export const potatoTuberMoth: PestContent = {
  id: 'pest-potato-tuber-moth',
  slug: 'potato-tuber-moth',
  contentType: 'pest',
  title: 'Potato Tuber Moth',
  scientificName: 'Phthorimaea operculella (Lepidoptera: Gelechiidae)',
  alternativeNames: ['PTM', 'Potato tuberworm'],
  category: 'Insect pest',
  subcategory: 'Leaf- and tuber-mining caterpillar',
  pestGroup: 'Insect — Lepidoptera (Gelechiidae)',
  summary:
    'Potato tuber moth is a small moth whose larvae mine potato leaves and, most damagingly, tunnel into tubers both in the field and in storage, making it a major pest of potato in warm regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potato tuber moth is a small moth that is one of the most important pests of potato in warm and dry regions, and it also attacks other solanaceous crops. Its larvae mine within leaves and stems, but the greatest concern is their tunnelling into tubers, which can occur in the field and continue in storage.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae feed inside plant tissue and tubers, the pest is hard to reach with contact controls and can cause severe, cumulative damage in poorly protected stores. Its ability to breed on tubers in storage makes clean seed, good hilling, and careful store management central to its control.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Gelechiidae' },
    { label: 'Main host', value: 'Potato, with other solanaceous crops' },
    {
      label: 'Damaging stage',
      value: 'Larva (mines leaves and tunnels tubers)',
    },
    {
      label: 'Key concern',
      value: 'Tuber damage in the field and in storage',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps and predators',
    },
    {
      label: 'Sign',
      value: 'Leaf mines and frass-filled tunnels in tubers',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, narrow, greyish-brown moths that are active at dusk and night. Larvae are small caterpillars, often pinkish or greenish, found within leaf mines, in stems, or tunnelling in tubers. Because the larvae are concealed, the pest is usually recognized from its mines and tunnels rather than from the insect itself.',
        },
        {
          type: 'paragraph',
          text: 'In leaves, larvae make blotch mines that turn brown; in tubers, they bore galleries filled with dark frass, often near the eyes, which can be seen when tubers are cut. These tuber tunnels, together with entry points at exposed tubers, are the most damaging and diagnostic signs.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs on foliage and on exposed tubers and in soil cracks. Larvae mine and tunnel through several instars before pupating on the plant, in debris, or in the store. The life cycle is short in warm conditions, giving many overlapping generations, and breeding can continue on tubers in storage where temperatures allow.',
        },
        {
          type: 'paragraph',
          text: 'Exposed tubers, whether through cracked soil, shallow planting, or in poorly sealed stores, are readily colonized, so protecting tubers from egg-laying moths is a recurring theme in the pest’s biology and management.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf and stem mining can reduce plant vigour, but the critical damage is tunnelling in tubers, which spoils them directly and opens them to rots, both in the field and during storage where losses can accumulate over time. Damage is often worst under warm, dry conditions and where tubers are exposed or stores are unprotected.',
        },
        {
          type: 'paragraph',
          text: 'Potato is the principal host. The moth can also develop on other solanaceous crops such as tomato, eggplant, and tobacco, though tuber damage in potato is its defining impact.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps track adult activity in the field and around stores to time management, and plant and tuber inspection checks for leaf mines and tuber tunnelling. Monitoring stored tubers is especially important, since infestations can build silently in storage if not detected early.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management combines clean seed, cultural practices that protect tubers, biological control, and careful store management within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Plant clean, uninfested seed tubers and use good hilling to keep tubers covered and protected',
            'Harvest promptly and avoid leaving exposed tubers in the field where moths can lay eggs',
            'Manage stores to exclude moths, keep tubers cool, and monitor for early infestation',
            'Conserve and, where available, use parasitoids and other natural enemies',
            'Practise field sanitation, removing cull piles and volunteers that harbour the pest',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or store treatment must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'eggplant' },
    { type: 'crop', slug: 'tobacco' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'colorado-potato-beetle' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A major potato pest in warm and dry regions worldwide, damaging in both field and storage; pressure and guidance vary by region.',
  climateContext:
    'Warm, dry conditions shorten the life cycle and favour many generations, and storage breeding continues where temperatures allow.',
  limitations: [
    'This is a general overview of the pest, not region-specific field or storage guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Storage losses depend heavily on store conditions and management practices.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'cip',
      citedFor: 'Potato pest management and storage research',
    },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Potato Tuber Moth',
    description:
      'Potato tuber moth (Phthorimaea operculella): identification, biology, leaf and tuber damage in field and storage, monitoring, and integrated management.',
    keywords: [
      'potato tuber moth',
      'Phthorimaea operculella',
      'potato pest',
      'tuberworm',
    ],
  },
  structuredData: { article: true },
};
