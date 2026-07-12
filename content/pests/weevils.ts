import type { PestContent } from '@/types/content';

export const weevils: PestContent = {
  id: 'pest-weevils',
  slug: 'weevils',
  contentType: 'pest',
  title: 'Weevils',
  scientificName: 'Family Curculionidae (order Coleoptera)',
  alternativeNames: ['Snout beetles', 'True weevils'],
  category: 'Insect pest',
  subcategory: 'Root-, stem-, and grain-feeding beetle',
  pestGroup: 'Insect — Coleoptera (Curculionidae)',
  summary:
    'Weevils are beetles with an elongated snout used for feeding and egg-laying, and the family includes species that damage sweet potato and cotton in the field and infest stored rice and other grain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'True weevils (family Curculionidae) are one of the largest beetle families, unified by a distinctive elongated snout (rostrum) tipped with chewing mouthparts, which females also use to bore small holes for egg-laying. The family includes species that attack living plants in the field as well as species that infest stored grain and other commodities.',
    },
    {
      type: 'paragraph',
      text: 'Because feeding and egg-laying habits vary widely by species — from root- and stem-boring larvae to internal grain feeders — weevil damage is correspondingly diverse, ranging from tunnelled roots and tubers to hollowed-out stored grain kernels.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Curculionidae',
    },
    {
      label: 'Feeding',
      value:
        'Adults chew foliage, stems, or grain; larvae often bore into roots, stems, or grain',
    },
    {
      label: 'Key concern',
      value:
        'Root and tuber tunnelling in the field, and hollowed kernels in stored grain',
    },
    {
      label: 'Distinguishing feature',
      value: 'Elongated snout (rostrum) with chewing mouthparts at the tip',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitoid wasps, predatory beetles, entomopathogenic fungi and nematodes',
    },
    {
      label: 'Sign',
      value:
        'Notched leaf margins, tunnels in roots or tubers, small holes and dust in stored grain',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult weevils are recognisable by their elongated snout and elbowed antennae, with body size and colour varying enormously by species. Larvae are typically legless, C-shaped grubs found inside plant tissue, soil, or stored grain, depending on species habit.',
        },
        {
          type: 'paragraph',
          text: 'Field signs include distinctive notched or scalloped leaf margins from adult feeding and internal tunnels in roots or tubers, while stored-grain species leave small round exit holes and fine dust in infested kernels.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females use their snout to chew a small cavity in plant tissue or a grain kernel before depositing an egg inside. Larvae develop within this protected site, feeding until pupation, and for species affecting root and tuber crops, larvae often complete development in the soil near the host plant.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'In the field, larval tunnelling into roots and tubers causes internal damage and scarring that reduces marketability, while adult feeding on foliage and stems can reduce vigour. In storage, internal grain feeders reduce weight, germination, and quality, and can render grain unmarketable if infestations are heavy.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include sweet potato and cotton in the field, and stored rice and other cereal grain, reflecting the range of habits across this large family.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are available for several economically important weevil species and help track field or storage populations. Inspecting roots, tubers, and stems for tunnelling, and sampling stored grain for internal feeding and exit holes, complete a monitoring programme.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because weevil species range from field pests to stored-product pests, management combines field sanitation, timing, and storage hygiene as appropriate to the species involved.',
        },
        {
          type: 'list',
          items: [
            'Use clean, weevil-free planting material and rotate away from known high-risk sequences',
            'Harvest promptly and handle roots and tubers carefully to limit entry points for infestation',
            'Store grain clean, dry, and in sealed conditions to limit stored-grain weevil populations',
            'Conserve parasitoid wasps and other natural enemies where relevant',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide, fumigant, or seed-treatment use must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'rice' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'cotton-bollworm' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'One of the largest beetle families, found worldwide across field crops and stored commodities; species, habits, and host importance vary widely by region.',
  climateContext:
    'Warm, humid conditions generally favour faster development in the field and, for stored-grain species, more rapid population growth in storage unless grain is kept cool and dry.',
  limitations: [
    'This is a general overview of an extremely large and diverse beetle family, not species-level guidance for a specific crop, storage system, or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'usda-aphis', citedFor: 'Regulatory and quarantine context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Weevils',
    description:
      'Weevils explained: snout-beetle identification, root and tuber tunnelling, stored-grain infestation, monitoring, and integrated management.',
    keywords: ['weevils', 'Curculionidae', 'snout beetle', 'stored grain pest'],
  },
  structuredData: { article: true },
};
