import type { PestContent } from '@/types/content';

export const podBorer: PestContent = {
  id: 'pest-pod-borer',
  slug: 'pod-borer',
  contentType: 'pest',
  title: 'Pod Borer',
  scientificName:
    'Helicoverpa armigera and Maruca vitrata (order Lepidoptera, families Noctuidae and Crambidae)',
  alternativeNames: ['Legume pod borer', 'Gram pod borer', 'Bean pod borer'],
  category: 'Insect pest',
  subcategory: 'Pod-feeding caterpillar',
  pestGroup: 'Insect — Lepidoptera (Helicoverpa/Maruca)',
  summary:
    'Pod borer is a general term for caterpillars, chiefly Helicoverpa armigera and Maruca vitrata, that feed on the flowers and pods of legumes, boring into pods to consume developing seeds in chickpea, common bean, and pea.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pod borer refers to caterpillars that attack the reproductive parts of legume crops, most notably Helicoverpa armigera (a broadly polyphagous noctuid moth) and Maruca vitrata (the legume pod borer, more specific to beans and peas). Both feed on flowers and buds before boring into developing pods.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae spend much of their feeding time inside pods, where seeds are directly consumed, pod borers can cause substantial yield and quality loss even at relatively low visible densities, making early scouting and flowering-stage protection especially important.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Caterpillars, order Lepidoptera, chiefly Noctuidae and Crambidae',
    },
    {
      label: 'Feeding',
      value: 'Flowers, buds, and developing pods and seeds',
    },
    {
      label: 'Key concern',
      value: 'Direct seed loss and pod damage reducing yield and grade',
    },
    {
      label: 'Vulnerable stage',
      value: 'Flowering and early pod-set are the periods of highest risk',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitoid wasps, predatory bugs, and entomopathogenic viruses and fungi',
    },
    {
      label: 'Sign',
      value:
        'Round entry holes in pods, hollowed or partly eaten seeds, frass near pods',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae vary in colour from green to brown or pink, often with faint longitudinal stripes, and can reach three to four centimetres at maturity. A characteristic sign is a round hole bored into the side of a pod, with the larva’s head and part of its body often visible inside while feeding.',
        },
        {
          type: 'paragraph',
          text: 'Adult moths are medium-sized and night-flying, and are rarely seen in the field; scouting therefore relies mainly on checking flowers, buds, and pods for larvae, entry holes, and frass.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Moths lay eggs singly on leaves, buds, and flowers. Young larvae first feed on flowers and foliage before moving to developing pods, where later instars cause most of the damage by boring in and consuming seeds from within. Several overlapping generations can occur within a single season under warm conditions.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding on flowers and buds reduces pod set, while boring into formed pods destroys developing seeds directly and can allow secondary rots to enter through the wound. A single larva often moves between several pods during development, damaging more than it fully consumes.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include chickpea, common bean, and pea, along with many other legumes and, for the more polyphagous Helicoverpa armigera, a wide range of unrelated crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular inspection of flowers and pods from the start of flowering, combined with pheromone traps to track adult moth activity, helps determine when populations are building and whether local thresholds are approached.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Pod borer management focuses on protecting the flowering-to-pod-fill window using a combination of tactics rather than a single approach.',
        },
        {
          type: 'list',
          items: [
            'Scout flowers and pods regularly from early flowering onward',
            'Conserve parasitoid wasps, predatory bugs, and other natural enemies',
            'Use resistant or tolerant varieties where available',
            'Consider trap or intercrop plantings and timely planting to reduce exposure during peak moth activity',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or biopesticide use must follow current, locally authorized recommendations and product labels, and should consider effects on pollinators and beneficial insects during flowering. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'pea' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'cotton-bollworm' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Widespread across legume-growing regions in warmer temperate, subtropical, and tropical climates; the dominant species and pressure vary by region and season.',
  climateContext:
    'Warm temperatures shorten generation time and can allow more generations per season, while humid conditions favour survival of eggs and young larvae.',
  limitations: [
    'This entry covers a group of related pod-feeding caterpillars, chiefly two genera, rather than a single species in full detail.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'fao', citedFor: 'Crop damage and pest-management context' },
    { sourceId: 'cgiar', citedFor: 'Legume pest-management research context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pod Borer',
    description:
      'Pod borer explained: Helicoverpa and Maruca caterpillar biology, flower and pod feeding in legumes, scouting, and integrated management.',
    keywords: [
      'pod borer',
      'legume pod borer',
      'Helicoverpa armigera',
      'Maruca vitrata',
    ],
  },
  structuredData: { article: true },
};
