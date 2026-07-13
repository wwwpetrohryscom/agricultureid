import type { PestContent } from '@/types/content';

export const bollWeevil: PestContent = {
  id: 'pest-boll-weevil',
  slug: 'boll-weevil',
  contentType: 'pest',
  title: 'Boll Weevil',
  scientificName: 'Anthonomus grandis (Coleoptera: Curculionidae)',
  alternativeNames: ['Cotton boll weevil'],
  category: 'Insect pest',
  subcategory: 'Fruiting-body-feeding weevil',
  pestGroup: 'Insect — Coleoptera (Curculionidae)',
  summary:
    'Boll weevil is a snout beetle whose adults and larvae attack cotton squares and bolls, historically causing enormous losses and prompting one of the largest coordinated eradication programmes in agriculture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Boll weevil is a small snout beetle that became one of the most historically destructive pests of cotton after spreading into the cotton belt of North America. Adults feed on and lay eggs in the cotton fruiting bodies — the squares (flower buds) and bolls — and the larvae develop inside, destroying the structures that would become harvestable fibre.',
    },
    {
      type: 'paragraph',
      text: 'The economic and social impact of the boll weevil was so severe that it drove large, coordinated eradication programmes combining trapping, sanitation, and treatment across whole regions. These programmes have removed the weevil from many areas, and where it persists it remains a serious, closely monitored pest.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Curculionidae',
    },
    { label: 'Host', value: 'Primarily cotton' },
    {
      label: 'Damaging stages',
      value: 'Adults and larvae attacking squares and bolls',
    },
    {
      label: 'Key concern',
      value: 'Destruction of fruiting forms that carry the crop',
    },
    {
      label: 'Management note',
      value: 'Subject of large-scale coordinated eradication programmes',
    },
    {
      label: 'Sign',
      value: 'Punctured, flared squares that yellow and drop',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small greyish to brownish weevils with the long curved snout typical of the family, used to puncture cotton squares and bolls. Larvae are pale, legless grubs that develop hidden inside the fruiting structures. Because larvae are concealed, damage is usually recognized from the reaction of the plant rather than from the insect directly.',
        },
        {
          type: 'paragraph',
          text: 'Characteristic signs include feeding and egg-laying punctures on squares, and infested squares that flare open, yellow, and drop from the plant. Dissecting fallen or damaged squares reveals larvae or feeding cavities.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Adults emerge from overwintering shelter, move into cotton, and feed before females lay eggs singly in punctures in squares or bolls. Larvae feed and pupate within the fruiting body, and several generations can occur through a season in warm climates, so populations can build rapidly once cotton begins fruiting.',
        },
        {
          type: 'paragraph',
          text: 'Adults overwinter in sheltered sites such as leaf litter and field margins. This overwintering, together with the concealed larval habit, makes end-of-season sanitation and the timing of the cotton crop important for reducing carry-over.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Both adult feeding and larval development destroy squares and young bolls, directly removing the plant’s fruiting potential. Infested squares commonly drop, and damaged bolls may rot or fail to produce sound lint. Because the pest strikes the fruiting forms that carry the crop, even moderate infestations can cause serious losses.',
        },
        {
          type: 'paragraph',
          text: 'Cotton is the principal host. The weevil’s dependence on cotton fruiting bodies is central both to its damage and to the sanitation-based logic of eradication programmes.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are the backbone of boll weevil detection and are used intensively in eradication and containment programmes to find and track weevils. In-field checks for punctured, flared, and dropped squares complement trapping. Coordinated, area-wide trapping and reporting guide regional decisions where programmes operate.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Boll weevil management is most effective as a coordinated, area-wide effort combining monitoring, sanitation, and treatment within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Support area-wide trapping and reporting where eradication or containment programmes operate',
            'Practise strict field sanitation, including timely stalk destruction to remove late-season food and shelter',
            'Use uniform planting and harvest timing to shorten the availability of fruiting cotton',
            'Reduce overwintering habitat around fields where practical',
            'Coordinate any treatment regionally to maintain programme effectiveness',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and, where eradication programmes operate, must align with their coordinated protocols. AgricultureID does not provide specific chemical treatment instructions.',
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
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'cotton-bollworm' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A historic cotton pest of the Americas, eradicated from many areas through coordinated programmes but still present in parts of its range.',
  climateContext:
    'Warm conditions allow several generations per cotton season, while adults overwinter in sheltered field margins and litter.',
  limitations: [
    'This is a general overview of the pest, not region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Regional status ranges from eradicated to actively damaging, depending on programme history.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Eradication programme and regulatory context',
    },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Boll Weevil',
    description:
      'Boll weevil (Anthonomus grandis): identification, biology, square and boll damage in cotton, monitoring, and area-wide integrated management.',
    keywords: [
      'boll weevil',
      'Anthonomus grandis',
      'cotton pest',
      'cotton weevil',
    ],
  },
  structuredData: { article: true },
};
