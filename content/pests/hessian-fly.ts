import type { PestContent } from '@/types/content';

export const hessianFly: PestContent = {
  id: 'pest-hessian-fly',
  slug: 'hessian-fly',
  contentType: 'pest',
  title: 'Hessian Fly',
  scientificName: 'Mayetiola destructor (Diptera: Cecidomyiidae)',
  alternativeNames: ['Barley midge'],
  category: 'Insect pest',
  subcategory: 'Stem-infesting gall midge',
  pestGroup: 'Insect — Diptera (Cecidomyiidae)',
  summary:
    'Hessian fly is a small gall midge whose larvae feed at the base of wheat and other small grains, weakening and stunting plants and causing stems to lodge; it is managed largely through resistant varieties and planting timing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hessian fly is a tiny gall midge that is a long-standing and serious pest of wheat and other small-grain cereals in many regions. The damage is caused by the larvae (maggots), which feed at the base of tillers behind the leaf sheaths, disrupting the plant’s growth and structure rather than eating leaves outright.',
    },
    {
      type: 'paragraph',
      text: 'Larval feeding stunts and weakens plants and can cause stems to break and lodge, especially near harvest. Because the adult is short-lived and the larva is hidden, management focuses on preventive tactics — particularly resistant varieties and adjusting planting date — rather than on treating an active infestation.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Diptera, family Cecidomyiidae' },
    { label: 'Hosts', value: 'Wheat and other small grains' },
    { label: 'Damaging stage', value: 'Larva feeding at the tiller base' },
    {
      label: 'Key concern',
      value: 'Stunting, weakening, and lodging of cereal stems',
    },
    {
      label: 'Management note',
      value: 'Managed mainly by resistant varieties and planting date',
    },
    {
      label: 'Sign',
      value: 'Stunted, dark-green tillers and stems that lodge',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, delicate, dark midges that are rarely seen and live only briefly. Larvae are small, legless maggots found behind the leaf sheath at the base of the tiller. A well-known immature stage is the "flaxseed": a small, hard, brown puparium resembling a flax seed, tucked at the stem base, which is often the easiest life stage to find.',
        },
        {
          type: 'paragraph',
          text: 'Infested plants are often stunted with unusually dark, thickened leaves in the vegetative stage, and later develop weakened stems that break and lodge. Finding maggots or flaxseed-stage puparia behind the sheath confirms the pest.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs on the leaves, and the hatching larvae move down to feed at the base of the tiller before forming the flaxseed puparium. Several generations can occur per year depending on climate, commonly with distinct autumn and spring generations in winter-cereal regions, and the flaxseed stage carries the insect through unfavourable periods.',
        },
        {
          type: 'paragraph',
          text: 'The insect survives between crops in stubble and volunteer cereals as the flaxseed stage, so residue and volunteer management, along with the timing of planting relative to adult activity, strongly influence infestation.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding at the tiller base stunts and weakens plants; early infestation of seedlings can kill tillers, while later feeding weakens the stem so that it breaks and lodges before or during harvest, complicating harvest and reducing yield. The extent of loss depends on generation timing relative to crop stage and on varietal resistance.',
        },
        {
          type: 'paragraph',
          text: 'Wheat is the principal host, with barley and other small grains and grasses also affected. Resistant wheat varieties are a cornerstone of management where the pest is important.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Monitoring relies on inspecting plants for stunting and, at the stem base, for maggots and flaxseed-stage puparia, and on tracking adult activity where degree-day models or regional advisories exist to indicate safe planting windows. Field history and the regional prevalence of resistance-breaking biotypes are important context.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because larvae are concealed, management is preventive and cultural, centred on host resistance and timing, within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant wheat varieties suited to the local biotype situation',
            'Adjust planting date to avoid the main period of adult activity where advisories exist',
            'Control volunteer cereals and manage stubble that harbour the overwintering stage',
            'Use crop rotation and field sanitation to reduce carry-over',
            'Conserve natural enemies and base decisions on field history and monitoring',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and is generally of limited value against the concealed larvae compared with resistant varieties and planting timing. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'triticale' },
  ],
  connections: [
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'A pest of small-grain cereals in many wheat-growing regions; generation timing, biotypes, and resistant varieties vary by region.',
  climateContext:
    'Temperature drives generation timing, and the flaxseed stage lets the insect survive unfavourable periods between crops.',
  limitations: [
    'This is a general overview of the pest, not region-specific planting-date or variety guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Resistance-breaking biotypes can defeat specific resistant varieties, so local advice matters.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Host resistance and biotype research',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Hessian Fly',
    description:
      'Hessian fly (Mayetiola destructor): identification, biology, stem damage and lodging in wheat, monitoring, resistant varieties, and management.',
    keywords: [
      'hessian fly',
      'Mayetiola destructor',
      'wheat pest',
      'gall midge',
    ],
  },
  structuredData: { article: true },
};
