import type { PestContent } from '@/types/content';

export const stinkBugs: PestContent = {
  id: 'pest-stink-bugs',
  slug: 'stink-bugs',
  contentType: 'pest',
  title: 'Stink Bugs',
  scientificName: 'Family Pentatomidae (order Hemiptera)',
  alternativeNames: ['Shield bugs'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Pentatomidae)',
  summary:
    'Stink bugs are shield-shaped, sap-feeding insects that release a distinctive odour when disturbed, damaging developing seeds and fruit in soybean, rice, and tomato through piercing-sucking feeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stink bugs (family Pentatomidae) are shield-shaped insects named for the pungent defensive odour they release when disturbed or crushed. Both nymphs and adults use piercing-sucking mouthparts to feed on plant sap, with a strong preference for developing seeds, grain, and fruit.',
    },
    {
      type: 'paragraph',
      text: 'Feeding punctures introduce saliva that can cause localised tissue collapse, discolouration, or malformed seeds, and in some crops also allows entry of secondary pathogens, so damage often affects quality as much as, or more than, overall yield.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Hemiptera, family Pentatomidae',
    },
    {
      label: 'Feeding',
      value: 'Piercing-sucking feeding on developing seeds, grain, and fruit',
    },
    {
      label: 'Key concern',
      value: 'Shrivelled or discoloured seeds and grain, and fruit blemishes',
    },
    {
      label: 'Appearance',
      value: 'Shield-shaped body; releases a strong odour when disturbed',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps and flies, predatory insects, and some birds',
    },
    {
      label: 'Sign',
      value:
        'Small dark puncture marks, shrivelled or discoloured seeds, cat-facing on fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult stink bugs have a broad, shield-shaped body, typically one to two centimetres long, in shades of green, brown, or grey depending on species. Nymphs resemble smaller, often more rounded and colourfully patterned versions of the adult, lacking fully developed wings.',
        },
        {
          type: 'paragraph',
          text: 'Feeding leaves small, dark puncture marks on pods, grain, or fruit, and can cause shrivelled or discoloured seeds in grain and legume crops, or dimpled, distorted ("cat-faced") fruit in crops such as tomato.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay barrel-shaped eggs in clusters on leaves. Nymphs pass through several stages, feeding throughout, before becoming winged adults. Many species overwinter as adults in leaf litter, field margins, or woodland edges, moving into crops as host plants become suitable, often around flowering or pod- and grain-fill stages.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding on developing seeds and grain can cause shrivelling, discolouration, and reduced germination, while feeding on fruit produces localised blemishes or malformation that reduce marketability even when overall yield loss is modest.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include soybean, rice, and tomato, along with many other legume, cereal, and fruiting vegetable crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Sweep-net sampling and visual counts of nymphs and adults, particularly around flowering and seed- or grain-fill stages, along with pheromone traps for some species, help track populations and inform decisions using local thresholds.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Stink bug management focuses on monitoring around the vulnerable reproductive stages of the crop, combined with habitat and natural-enemy considerations.',
        },
        {
          type: 'list',
          items: [
            'Scout fields around flowering and seed- or grain-fill, when damage risk is highest',
            'Conserve parasitoid wasps and flies and other natural enemies',
            'Manage weedy field margins that can host overwintering or migrating populations',
            'Use border or trap-crop strategies where locally validated',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on beneficial insects and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'tomato' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'cotton-bollworm' },
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide on legume, cereal, and fruiting vegetable crops; species present, host preference, and seasonal timing vary by region.',
  climateContext:
    'Warm conditions generally support more generations per season, and populations often build as field margins and weedy hosts dry out, pushing insects into adjacent crops.',
  limitations: [
    'This is a general overview of a large family of true bugs, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Monitoring and management context',
    },
    { sourceId: 'psu-extension', citedFor: 'Field scouting guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Stink Bugs',
    description:
      'Stink bugs explained: shield-bug identification, seed and fruit feeding damage, biology, threshold-based monitoring, and integrated management.',
    keywords: ['stink bugs', 'Pentatomidae', 'shield bug', 'seed feeding pest'],
  },
  structuredData: { article: true },
};
