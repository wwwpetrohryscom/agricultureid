import type { PestContent } from '@/types/content';

export const russianWheatAphid: PestContent = {
  id: 'pest-russian-wheat-aphid',
  slug: 'russian-wheat-aphid',
  contentType: 'pest',
  title: 'Russian Wheat Aphid',
  scientificName: 'Diuraphis noxia (Hemiptera: Aphididae)',
  alternativeNames: ['RWA'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding cereal aphid',
  pestGroup: 'Insect — Hemiptera (Aphididae)',
  summary:
    'Russian wheat aphid is a small aphid of small-grain cereals whose feeding injects toxins that cause distinctive leaf streaking and rolling, trapping the developing head and reducing yield.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Russian wheat aphid is a small, pale green aphid that is a serious pest of wheat and barley in many dryland cereal regions. Unlike some aphids whose main damage is virus transmission, this species causes striking direct injury: its feeding introduces substances that disrupt the plant, producing characteristic symptoms out of proportion to the number of aphids present.',
    },
    {
      type: 'paragraph',
      text: 'Affected leaves develop whitish, yellow, or purplish streaks and roll tightly along their length, which shelters the aphids and can trap the emerging head, causing it to become distorted. The pest spread widely from its region of origin to become established across several continents.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Aphididae' },
    { label: 'Hosts', value: 'Wheat, barley, and other small grains' },
    {
      label: 'Feeding',
      value: 'Sucks sap and injects damaging substances',
    },
    {
      label: 'Key concern',
      value: 'Leaf streaking and rolling that trap and distort the head',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, ladybirds, and lacewings',
    },
    {
      label: 'Sign',
      value: 'White-to-purple leaf streaks and tightly rolled leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The aphid is small, spindle-shaped, and pale green with a light waxy bloom, and it notably lacks the prominent cornicles (tail-like tubes) seen in many other aphids. It shelters inside rolled leaves, so it can be hidden from view even when symptoms are obvious. A useful cue is a small projection above the tail that gives the rear a twin-tailed appearance.',
        },
        {
          type: 'paragraph',
          text: 'The symptoms are often more diagnostic than the insect: longitudinal white, yellow, or purplish streaking on leaves, tightly rolled leaves, and, at heading, trapped or bleached, distorted heads that stand awry. Unrolling affected leaves usually reveals the colonies.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Like many aphids, Russian wheat aphid can reproduce rapidly, with females often producing live young without mating during the growing season, allowing populations to build quickly under favourable conditions. Winged forms disperse to new plants and fields. The rolled-leaf habit shelters colonies from weather, natural enemies, and contact controls.',
        },
        {
          type: 'paragraph',
          text: 'Populations are favoured by dry, stressed conditions in cereal crops, and the aphid can persist on volunteer cereals and grassy hosts between crops, aiding carry-over and spread.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding causes the characteristic streaking and leaf rolling and reduces the plant’s photosynthetic capacity. When the flag leaf rolls around an emerging head, the head can be trapped and distorted, directly reducing grain set. Damage tends to be worse on drought-stressed crops, and even modest aphid numbers can cause significant symptoms because of the injected toxins.',
        },
        {
          type: 'paragraph',
          text: 'Wheat and barley are the principal hosts, with other small grains and grasses also affected. Varietal resistance and crop stress strongly influence how much damage a given infestation causes.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Scouting looks for the tell-tale streaking and rolled leaves and, on unrolling, the sheltered colonies, with attention to crop stage and the proportion of tillers affected. Because symptoms can appear with relatively few aphids, decisions weigh symptom severity, crop stress, natural-enemy activity, and local economic thresholds.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, cultural practices, and conservation of natural enemies within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant wheat and barley varieties where they are available',
            'Control volunteer cereals and grassy hosts that carry the aphid between crops',
            'Manage crop stress, since drought-stressed crops tend to suffer more damage',
            'Conserve natural enemies such as parasitoid wasps, ladybirds, and lacewings',
            'Base any intervention on scouting, symptom severity, and local economic thresholds',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider that rolled leaves shelter aphids from contact sprays and that natural enemies should be conserved. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leafhoppers' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A pest of small-grain cereals in many dryland regions after spreading from its area of origin; pressure and resistant varieties vary by region.',
  climateContext:
    'Dry, stressed conditions favour damage, and warm weather speeds the aphid’s rapid reproduction and population build-up.',
  limitations: [
    'This is a general overview of the pest, not variety- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Different biotypes can overcome specific resistant varieties, so local resistance status matters.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Russian Wheat Aphid',
    description:
      'Russian wheat aphid (Diuraphis noxia): identification, biology, leaf streaking and rolling damage in cereals, monitoring, and integrated management.',
    keywords: [
      'russian wheat aphid',
      'Diuraphis noxia',
      'wheat aphid',
      'cereal pest',
    ],
  },
  structuredData: { article: true },
};
