import type { PestContent } from '@/types/content';

export const tomatoLeafminer: PestContent = {
  id: 'pest-tomato-leafminer',
  slug: 'tomato-leafminer',
  contentType: 'pest',
  title: 'Tomato Leafminer',
  scientificName: 'Phthorimaea absoluta (Lepidoptera: Gelechiidae)',
  alternativeNames: [
    'Tuta absoluta',
    'South American tomato pinworm',
    'Tomato leaf miner',
  ],
  category: 'Insect pest',
  subcategory: 'Leaf- and fruit-mining caterpillar',
  pestGroup: 'Insect — Lepidoptera (Gelechiidae)',
  summary:
    'Tomato leafminer is a small moth whose larvae mine the leaves, stems, and fruit of tomato; it has spread rapidly across many regions and can cause severe losses in tomato crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato leafminer, long known under the name Tuta absoluta, is a small moth native to South America that has spread across Europe, Africa, the Middle East, and Asia to become one of the most serious pests of tomato worldwide. The damaging stage is the larva, which mines within leaves and can also bore into stems and fruit.',
    },
    {
      type: 'paragraph',
      text: 'Because the larva feeds inside plant tissue for much of its life, it is partly protected from contact controls, and its rapid life cycle and high reproductive rate allow populations and damage to escalate quickly. This combination has made it a high-priority quarantine and management concern in many tomato-growing regions.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Gelechiidae' },
    { label: 'Main host', value: 'Tomato, with other solanaceous crops' },
    {
      label: 'Damaging stage',
      value: 'Larva (mines leaves, stems, and fruit)',
    },
    {
      label: 'Key concern',
      value: 'Rapid spread and severe damage to tomato leaves and fruit',
    },
    {
      label: 'Natural enemies',
      value: 'Predatory bugs and parasitoid wasps',
    },
    {
      label: 'Sign',
      value: 'Irregular translucent leaf mines and fruit galleries',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, greyish moths with mottled, fringed wings that are active mainly at dusk and rest on the plant during the day. Larvae are small and cream to greenish, often with a darker band behind the head. The most conspicuous sign is the larval mine: an irregular, blotchy, translucent tunnel within the leaf that later turns brown.',
        },
        {
          type: 'paragraph',
          text: 'Larvae also bore into stems, growing points, and fruit, leaving entry holes and internal galleries often accompanied by dark frass. The blotch mines and fruit galleries distinguish this pest from the narrow, serpentine mines of true leaf-mining flies.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay small eggs on foliage, stems, and young fruit. Larvae mine and bore through several instars before pupating on the plant, in the soil, or in mines, and the life cycle is short in warm weather, giving many overlapping generations per year, especially in protected tomato production where conditions are favourable year-round.',
        },
        {
          type: 'paragraph',
          text: 'The pest can persist wherever host plants are available and moves readily with the trade in tomato fruit and plant material, which has driven its rapid international spread.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf mining reduces photosynthetic area and, when heavy, can lead to extensive drying of foliage. Boring into growing points can distort growth, and tunnelling into fruit causes direct damage and entry points for rots, making fruit unmarketable. Losses can be severe where populations are not managed, particularly under protected cultivation.',
        },
        {
          type: 'paragraph',
          text: 'Tomato is the principal host. The pest can also develop on other solanaceous crops such as potato and eggplant, though damage is usually most important on tomato.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are used to detect adults and monitor activity, and plant inspection focuses on finding fresh mines, damaged growing points, and fruit galleries. Early detection is especially important given the pest’s rapid population growth, and in regulated areas surveillance supports quarantine decisions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Effective management integrates exclusion, biological control, sanitation, and careful use of selective products, coordinated with any regulatory requirements.',
        },
        {
          type: 'list',
          items: [
            'Use exclusion measures such as insect netting and clean planting material in protected culture',
            'Conserve and release natural enemies, including predatory bugs and parasitoid wasps where available',
            'Practise strict sanitation, removing and destroying infested plants, fruit, and residues',
            'Rotate modes of action and rely on selective products to slow resistance and spare beneficials',
            'Follow quarantine, monitoring, and reporting requirements in regulated areas',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations, product labels, and resistance-management guidelines, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'eggplant' },
  ],
  connections: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'climate', slug: 'temperature' },
    { type: 'post-harvest', slug: 'cold-storage' },
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
    'Native to South America and now widespread across Europe, Africa, the Middle East, and Asia; regulatory status and pressure vary by region.',
  climateContext:
    'Warm conditions greatly shorten the life cycle and allow many generations, with protected cultivation supporting year-round development.',
  limitations: [
    'This is a general overview of a rapidly spreading pest, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Insecticide-resistance status varies regionally and affects available chemical options.',
  ],
  sourceReferences: [
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'efsa', citedFor: 'Pest risk and status in Europe' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Tomato Leafminer (Tuta absoluta)',
    description:
      'Tomato leafminer (Phthorimaea absoluta, Tuta absoluta): identification, biology, leaf and fruit mining damage, monitoring, and integrated management.',
    keywords: [
      'tomato leafminer',
      'Tuta absoluta',
      'Phthorimaea absoluta',
      'tomato pest',
    ],
  },
  structuredData: { article: true },
};
