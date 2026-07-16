import type { QualityAttributeContent } from '@/types/content';

export const insectDamage: QualityAttributeContent = {
  id: 'quality-attribute-insect-damage',
  slug: 'insect-damage',
  contentType: 'quality-attribute',
  title: 'Insect Damage',
  alternativeNames: ['Insect-damaged kernels (IDK)'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'biological',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'Not a census of a current infestation — a damaged kernel records that an insect fed on it at some point in the past; it says nothing about whether a live infestation exists in the lot now. A lot that was fumigated or has since been cooled retains every mark of damage it ever accumulated, even though no live insects remain.',
    'Not able to rule out an early or hidden infestation — internal feeders such as weevils and the lesser grain borer develop entirely inside the kernel and emerge only once they reach the adult stage, so a lot can be heavily infested internally while showing almost no visible external damage.',
    'Not a measure of live insect numbers — the count of damaged kernels does not translate into a population estimate.',
    'Not a food-safety verdict on its own — insect fragments and contamination are assessed and regulated separately from visible kernel damage, and while insect activity raises moisture and heat in a way that favours mould growth, damage alone does not confirm that a toxin is present.',
    'Not a measure of weight loss — damage is scored as a share of kernels or mass affected, not as the quantity of grain actually consumed or lost to feeding.',
  ],
  typicalUnits: ['% of kernels damaged', '% by mass'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'cowpeas' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  summary:
    'Insect damage is kernels bored, tunnelled, or fed on by storage insects — a defined factor in grain standards, assessed by examining a drawn sample. Because it records feeding that has already happened, it is a poor guide to whether a lot is infested right now, and it can miss a serious hidden infestation entirely.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Insect-damaged kernels — commonly abbreviated IDK in grain grading — are kernels that show visible evidence of feeding by storage insects: exit holes, tunnelling, boring, or surface gouging left by pests that have fed on or developed within the grain. It is a defined grading factor in national grain standards, assessed by drawing a representative sample from the lot and examining it, kernel by kernel, for these marks.',
    },
    {
      type: 'paragraph',
      text: 'The count of damaged kernels is a useful, standardised, and objective grading figure, but it measures accumulated history, not present state. A kernel carries its damage marks indefinitely once fed on, regardless of whether the insect responsible is still alive, was killed by fumigation, or died naturally from cold. Reading a damage count as a live-infestation status check — in either direction — is the single most consequential misuse of this attribute.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Kernels bored, tunnelled, or fed on by storage insects, assessed on a drawn sample',
    },
    {
      label: 'Grading role',
      value:
        'A defined, standardised factor (insect-damaged kernels, IDK) in national grain grade standards',
    },
    {
      label: 'What it is not',
      value:
        'A record of the past, not a real-time census of live insects presently in the lot',
    },
    {
      label: 'Hidden-infestation risk',
      value:
        'Internal feeders (weevils, lesser grain borer) develop inside the kernel and can leave almost no visible damage until they emerge',
    },
    {
      label: 'Temperature monitoring role',
      value:
        'A surveillance proxy only — it detects heat from activity near the sensor, not a lot-wide count',
    },
    {
      label: 'Not a safety verdict',
      value:
        'Regulated separately from insect fragments and contamination; damage does not confirm a toxin is present',
    },
    {
      label: 'Control',
      value:
        'Governed by product labels, national regulation, and qualified pest-control operators',
    },
  ],
  sections: [
    {
      id: 'what-insect-damage-is',
      heading: 'What insect damage is and how it is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Insect damage is assessed visually on a representative sample drawn from the lot: an inspector examines individual kernels for exit holes, internal tunnelling visible on cutting or breaking a kernel, surface gouging, or other feeding marks characteristic of storage insects. The share of kernels showing this damage is reported as the grading figure. It is a manual, visual method — no instrument counts damage automatically, and the result depends on the sample drawn being genuinely representative of the lot.',
        },
        {
          type: 'paragraph',
          text: 'Because the assessment looks at physical evidence left behind rather than at the insects themselves, it necessarily lags behind, and can diverge sharply from, the actual pest status of the lot at the moment of inspection.',
        },
      ],
    },
    {
      id: 'a-record-of-the-past-not-a-census-of-the-present',
      heading: 'A record of the past, not a census of the present',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Damage marks do not disappear when insects do',
          text: 'A kernel that was damaged months ago and then fumigated, cooled, or otherwise cleared of live insects still shows the damage. A high insect-damage figure on such a lot describes its history, not its current infestation status — the lot may now be completely free of live insects.',
        },
        {
          type: 'paragraph',
          text: 'The reverse failure is more consequential: an early or hidden infestation can produce almost no visible damage. Internal feeders such as weevils and the lesser grain borer lay eggs inside or bore into the kernel and complete larval development entirely within it, emerging only once they reach adulthood. A lot can therefore be heavily infested internally — with substantial numbers of insects developing inside apparently sound kernels — while a visual inspection finds very little damage to report, because the insects have not yet emerged.',
        },
      ],
    },
    {
      id: 'temperature-as-a-surveillance-proxy',
      heading: 'Temperature monitoring as a surveillance proxy',
      body: [
        {
          type: 'paragraph',
          text: 'Because visible damage lags behind an active infestation, stored-grain monitoring often adds temperature probes at fixed points through the bulk. Insect feeding and respiration generate heat, so a rising temperature reading near a probe can be an early warning of activity before it produces visible kernel damage.',
        },
        {
          type: 'paragraph',
          text: 'This is a surveillance proxy, not a direct measurement of insect numbers or damage. A probe only senses heat that reaches its location, and a stable or normal temperature reading is not evidence that a lot is free of insects — activity in a pocket of the bulk away from the sensors can go undetected. Probe readings and grain-probe sampling, which determines what a drawn sample actually contains, work together with visual inspection rather than substituting for it.',
        },
      ],
    },
    {
      id: 'control-and-regulation',
      heading: 'Control and regulation',
      body: [
        {
          type: 'paragraph',
          text: 'Where an active infestation is confirmed, control measures — fumigation, aeration, sanitation, or other interventions — are governed by product labels, national pesticide and food-safety regulation, and qualified pest-control operators. This entry does not describe fumigant doses or treatment procedures; those are set out in the applicable product label and regulatory framework and must be applied by suitably qualified personnel.',
        },
      ],
    },
  ],
  connections: [
    { type: 'pest', slug: 'weevils' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest losses caused by storage insects and their effect on grain quality',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Biology of internal-feeding storage insects and the limits of visual damage detection',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Insect-damaged kernels as an assessed factor in US grain grading',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store monitoring guidance covering insect pests and temperature surveillance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Insect-damaged kernels is a defined grading factor in several national grain standards; the specific pest species of concern and the grading thresholds applied differ by region and commodity.',
  limitations: [
    'A damage count reflects cumulative history and does not confirm whether live insects are currently present in the lot.',
    'Internal feeders can infest a lot heavily while producing little or no visible external damage, so a low damage figure does not rule out infestation.',
    'Temperature-probe readings are a surveillance proxy for activity near the sensor, not a direct or complete measure of insect presence across the bulk.',
    'This entry describes the attribute and its assessment in general terms; the applicable grade standard, contract specification, or national regulation sets specific grading and control requirements.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Insect Damage: A Record of Feeding, Not a Census',
    description:
      'What insect-damaged kernels measure in grain grading, why visible damage lags a live infestation, and why hidden internal feeders can leave grain looking clean.',
    keywords: [
      'insect damage',
      'insect-damaged kernels',
      'stored grain insects',
      'grain grading',
      'grain pest monitoring',
    ],
  },
  structuredData: { article: true },
};
