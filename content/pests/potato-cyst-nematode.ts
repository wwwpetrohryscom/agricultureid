import type { PestContent } from '@/types/content';

export const potatoCystNematode: PestContent = {
  id: 'pest-potato-cyst-nematode',
  slug: 'potato-cyst-nematode',
  contentType: 'pest',
  title: 'Potato Cyst Nematode',
  scientificName:
    'Globodera rostochiensis and Globodera pallida (phylum Nematoda)',
  alternativeNames: ['PCN', 'Golden nematode', 'Pale cyst nematode'],
  category: 'Nematode pest',
  subcategory: 'Root-infecting cyst nematode',
  pestGroup: 'Nematode',
  summary:
    'Potato cyst nematode refers to two microscopic soil roundworms that invade potato roots and form long-lived cysts; they cause patchy poor growth, are strictly regulated quarantine pests, and persist in soil for many years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potato cyst nematode is the collective name for two closely related microscopic roundworms that are among the most important soil-borne pests of potato. Juveniles invade the roots and establish feeding sites, and the females swell and become hardened cysts, each containing many eggs, that remain in the soil for years.',
    },
    {
      type: 'paragraph',
      text: 'These nematodes are strictly regulated quarantine pests in many countries because of their damage potential and extreme persistence, so their presence triggers official controls on the movement of soil, seed potatoes, and machinery. Once a field is infested, the practical aim is long-term population management rather than eradication.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Roundworms, phylum Nematoda (cyst nematodes)' },
    { label: 'Main host', value: 'Potato, with some other solanaceous crops' },
    {
      label: 'Feeding',
      value: 'Juveniles feed within roots at established feeding sites',
    },
    {
      label: 'Key concern',
      value: 'Patchy poor growth and yield loss; a regulated quarantine pest',
    },
    {
      label: 'Persistence',
      value: 'Egg-filled cysts survive in soil for many years',
    },
    {
      label: 'Sign',
      value: 'Tiny cysts on roots and patches of stunted, unthrifty plants',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The diagnostic sign is the presence of tiny, spherical cysts on potato roots, visible as pinhead-sized bodies when plants are dug up carefully and roots washed. In one species the maturing females turn golden-yellow before browning, while in the other they remain pale before darkening; both eventually form brown cysts in the soil.',
        },
        {
          type: 'paragraph',
          text: 'Above ground, symptoms are often non-specific: patches of stunted, yellowing, wilting, poorly growing plants that can be mistaken for nutrient deficiency or drought. Because the two species and their populations must be distinguished for management and regulation, laboratory soil analysis is the standard means of confirmation.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Juveniles hatch from eggs in the soil, stimulated by substances released from potato roots, then invade the roots and establish feeding sites. Females swell, rupture through the root surface, and their bodies become egg-filled cysts. There is generally one generation per potato crop, but each cyst protects many eggs that can hatch over successive seasons.',
        },
        {
          type: 'paragraph',
          text: 'The protective cyst allows eggs to remain viable in soil for many years, so populations decline only slowly in the absence of a host. This persistence, combined with easy spread in soil on machinery, seed tubers, and footwear, underlies the strict quarantine measures applied to the pest.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Root invasion impairs water and nutrient uptake, producing patchy stunting, wilting, and yield loss that worsens as soil populations rise. Damage is often first noticed as expanding poor-growth patches in a field. Beyond direct yield effects, the regulatory status of the pest can restrict cropping and the movement of potatoes and soil from infested land.',
        },
        {
          type: 'paragraph',
          text: 'Potato is the principal host, with some other solanaceous crops such as tomato and eggplant able to support the nematodes. Because they multiply on susceptible potato, rotation and variety choice strongly influence population trends.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Soil sampling and laboratory analysis to detect cysts, identify the species, and estimate egg populations are the basis of monitoring and are often required before planting potatoes on land of unknown status. Inspecting roots for cysts during the season and watching for patches of poor growth complement formal testing, and in regulated areas surveillance supports official quarantine decisions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, long rotations, sanitation, and strict adherence to quarantine rules within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Use resistant or tolerant varieties matched to the local species and population',
            'Use long rotations away from potato and other hosts to reduce populations over time',
            'Plant certified, clean seed potatoes and base decisions on soil testing',
            'Prevent spread by thoroughly cleaning soil from machinery, tools, and footwear',
            'Follow official quarantine, movement, and reporting requirements where the pest is regulated',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any nematicide use must follow current, locally authorized recommendations and product labels, and, where the pest is regulated, management must comply with official quarantine protocols. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'eggplant' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'colorado-potato-beetle' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'A regulated quarantine pest of potato in many regions; species present, populations, and resistant varieties vary by region.',
  climateContext:
    'Temperate potato-growing conditions suit the nematodes, and cysts persist in soil for many years through unfavourable periods.',
  limitations: [
    'This is a general overview of two related species, not species- or field-specific management guidance.',
    'Thresholds, treatments, and quarantine actions are jurisdiction-specific and are not provided here.',
    'Distinguishing the two species and their populations requires laboratory analysis.',
  ],
  sourceReferences: [
    { sourceId: 'eppo', citedFor: 'Pest categorization and quarantine status' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'efsa', citedFor: 'Pest risk and status in Europe' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Potato Cyst Nematode',
    description:
      'Potato cyst nematode (Globodera rostochiensis and G. pallida): identification, biology, root damage, quarantine status, soil testing, and management.',
    keywords: [
      'potato cyst nematode',
      'Globodera',
      'golden nematode',
      'potato pest',
    ],
  },
  structuredData: { article: true },
};
