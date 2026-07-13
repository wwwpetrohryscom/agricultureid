import type { PestContent } from '@/types/content';

export const pinkBollworm: PestContent = {
  id: 'pest-pink-bollworm',
  slug: 'pink-bollworm',
  contentType: 'pest',
  title: 'Pink Bollworm',
  scientificName: 'Pectinophora gossypiella (Lepidoptera: Gelechiidae)',
  alternativeNames: ['PBW'],
  category: 'Insect pest',
  subcategory: 'Boll-boring caterpillar',
  pestGroup: 'Insect — Lepidoptera (Gelechiidae)',
  summary:
    'Pink bollworm is a moth whose caterpillars bore into cotton bolls and feed on seeds and lint, reducing yield and fibre quality; it is a classic target of area-wide and sterile-insect programmes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pink bollworm is one of the most damaging pests of cotton in many warm cotton-growing regions. The larva bores into developing bolls and feeds on the seeds and lint inside, causing losses that are hidden from view until the boll is opened, which makes early detection difficult.',
    },
    {
      type: 'paragraph',
      text: 'Because the larva is concealed within the boll and can enter a dormant state to survive between seasons, the pink bollworm has historically been hard to control with sprays alone. It has been a landmark target for area-wide management combining sterile-insect releases, mating disruption, and biotech cotton, which has led to its eradication from some regions.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Gelechiidae' },
    { label: 'Host', value: 'Primarily cotton' },
    { label: 'Damaging stage', value: 'Larva (bores into bolls)' },
    {
      label: 'Key concern',
      value: 'Seed and lint feeding that cuts yield and fibre quality',
    },
    {
      label: 'Management note',
      value: 'Target of area-wide, sterile-insect, and biotech programmes',
    },
    {
      label: 'Sign',
      value: 'Entry holes in bolls and pink larvae among damaged seeds',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Mature larvae are distinctive: cream-coloured with pink banding that gives the pest its name, found inside bolls among the seeds. Adults are small, dark, greyish-brown moths with fringed wings. Because the larva develops inside the boll, damage is often confirmed by opening bolls and finding larvae, feeding galleries, and stained lint.',
        },
        {
          type: 'paragraph',
          text: 'Early external signs can be subtle, such as tiny entry holes or "rosette" blooms where the flower fails to open normally. Opening suspect bolls remains the most reliable check.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs on or near developing bolls, and newly hatched larvae bore in to feed on seeds and lint before exiting to pupate. Multiple generations occur through a cotton season in warm climates. A key survival trait is diapause, in which larvae can remain dormant in seeds or crop debris over winter, re-emerging when conditions favour a new crop.',
        },
        {
          type: 'paragraph',
          text: 'This overwintering ability, combined with the concealed feeding habit, is why sanitation and area-wide timing of the cotton crop are so important in reducing carry-over populations.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding destroys seeds and cuts and stains lint, reducing both the quantity and quality of the harvested fibre, and feeding wounds can admit boll-rotting organisms. Because damage is internal, it can be extensive before it is obvious, so monitoring and preventive strategies are emphasized over reactive treatment.',
        },
        {
          type: 'paragraph',
          text: 'Cotton is the primary host. The pest’s close association with cotton bolls is central to both the damage it causes and the area-wide strategies used against it.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are widely used to detect adult activity and time management, and boll sampling — opening bolls to check for larvae and internal damage — assesses infestation directly. In area-wide programmes, coordinated trapping and reporting across many farms guide regional decisions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Pink bollworm is best managed through coordinated, preventive, area-wide strategies within integrated pest management rather than by individual reactive spraying.',
        },
        {
          type: 'list',
          items: [
            'Practise strict field sanitation, including destroying crop residues and stalks to reduce overwintering larvae',
            'Use uniform planting and harvest timing across an area to shorten the host window',
            'Employ mating disruption with pheromones where available to suppress reproduction',
            'Use biotech cotton and, in some programmes, sterile-insect releases as part of coordinated management',
            'Support area-wide monitoring and resistance management across farms',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or trait-based tactic must follow current, locally authorized recommendations, product labels, and resistance-management requirements, and should consider effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'cotton' }],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'cotton-bollworm' },
    { type: 'pest', slug: 'pod-borer' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A major cotton pest across many warm cotton regions, though eradicated from some areas through area-wide programmes; status varies by region.',
  climateContext:
    'Warm conditions allow several generations per cotton season, while diapause lets larvae survive winter in seeds and crop debris.',
  limitations: [
    'This is a general overview of the pest, not region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Regional status ranges from serious pest to eradicated, depending on past programmes.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Area-wide and eradication programme context',
    },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Pink Bollworm',
    description:
      'Pink bollworm (Pectinophora gossypiella): identification, biology, boll and lint damage in cotton, monitoring, and area-wide integrated management.',
    keywords: [
      'pink bollworm',
      'Pectinophora gossypiella',
      'cotton pest',
      'boll damage',
    ],
  },
  structuredData: { article: true },
};
