import type { PestContent } from '@/types/content';

export const moleCrickets: PestContent = {
  id: 'pest-mole-crickets',
  slug: 'mole-crickets',
  contentType: 'pest',
  title: 'Mole Crickets',
  scientificName: 'Family Gryllotalpidae (order Orthoptera)',
  alternativeNames: ['Mole cricket nymphs and adults'],
  category: 'Insect pest',
  subcategory: 'Soil-dwelling insect',
  pestGroup: 'Insect — Orthoptera (Gryllotalpidae)',
  summary:
    'Mole crickets are soil-dwelling insects with specialised digging front legs that tunnel through soil, severing roots and dislodging seedlings in maize, groundnut, and other crops, with damage often first visible as raised surface tunnels.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mole crickets are large, burrowing insects of the family Gryllotalpidae, named for their mole-like, spade-shaped front legs adapted for digging through soil. They spend most of their life underground, tunnelling near the surface to feed on roots, seedling stems, and organic matter, and to construct burrow systems used for shelter and, in males, sound-amplified mating calls.',
    },
    {
      type: 'paragraph',
      text: 'Because mole crickets live and feed below ground, damage is often first noticed as raised, ridged tunnels across the soil surface, wilting or loosened seedlings whose roots have been severed or disturbed, and irregular bare patches in affected fields.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Orthoptera, family Gryllotalpidae',
    },
    {
      label: 'Feeding',
      value:
        'Tunnelling through soil; feeding on roots, seedling stems, and organic matter',
    },
    {
      label: 'Key concern',
      value: 'Seedling loss and root damage from soil tunnelling',
    },
    {
      label: 'Habitat',
      value: 'Burrows in moist, well-drained soil near the surface',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitic wasps and flies, some entomopathogenic nematodes, birds',
    },
    {
      label: 'Sign',
      value:
        'Raised, ridged surface tunnels, loosened or wilting seedlings, bare patches',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult mole crickets are large, brownish insects with enlarged, shovel-like front legs used for digging, short forewings, and a cylindrical body adapted for moving through burrows. They are mostly nocturnal and rarely seen above ground during the day.',
        },
        {
          type: 'list',
          items: [
            'Raised, ridged tunnels visible across the soil surface, especially after rain',
            'Loosened or wilting seedlings with roots severed or disturbed at the base',
            'Irregular bare or thinning patches in affected fields',
            'Adults occasionally seen at the soil surface at night or attracted to lights',
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
          text: 'Mole crickets develop through incomplete metamorphosis, with females laying eggs in underground chambers and nymphs resembling smaller, wingless adults as they grow through several moults, a process that can span one or more seasons depending on species and climate.',
        },
        {
          type: 'paragraph',
          text: 'Males produce loud calling songs amplified by their burrow openings to attract mates, a distinctive behaviour that is also exploited for acoustic trapping and monitoring in some management programmes.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Tunnelling activity disturbs and severs roots and can dislodge or desiccate seedlings directly, with damage often most severe soon after planting when young root systems are most vulnerable to disruption.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include maize, groundnut, and potato, among other field and vegetable crops with vulnerable seedling or root stages.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'A soapy-water soil flush can bring mole crickets to the surface for direct counts, while tracking surface tunnelling after rain and using light or acoustic traps for adults help estimate activity and timing of risk.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Mole cricket management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitic wasps and flies, entomopathogenic nematodes, and birds',
            'Monitor with soil flushes and surface tunnel tracking to judge risk before planting',
            'Time cultivation to disrupt burrows and expose nymphs where appropriate for the system',
            'Manage soil moisture and drainage, since tunnelling activity often increases after rainfall',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on beneficial soil organisms. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'potato' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in warm-temperate to tropical regions worldwide wherever moist, well-drained soils support host crops; species and pressure vary regionally.',
  climateContext:
    'Soil moisture and temperature strongly influence tunnelling activity and seasonal life-cycle timing, with activity typically increasing after rainfall.',
  limitations: [
    'This is a general overview of a family of soil-dwelling pests, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    {
      sourceId: 'cabi',
      citedFor: 'Mole cricket biology, hosts, and importance',
    },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Monitoring and management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mole Crickets',
    description:
      'Mole crickets explained: identification, biology and life cycle, root and seedling damage from soil tunnelling, monitoring, and management principles.',
    keywords: ['mole crickets', 'Gryllotalpidae', 'soil pest', 'root damage'],
  },
  structuredData: { article: true },
};
