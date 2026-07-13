import type { PestContent } from '@/types/content';

export const brownMarmoratedStinkBug: PestContent = {
  id: 'pest-brown-marmorated-stink-bug',
  slug: 'brown-marmorated-stink-bug',
  contentType: 'pest',
  title: 'Brown Marmorated Stink Bug',
  scientificName: 'Halyomorpha halys (Hemiptera: Pentatomidae)',
  alternativeNames: ['BMSB'],
  category: 'Insect pest',
  subcategory: 'Sap- and fruit-feeding shield bug',
  pestGroup: 'Insect — Hemiptera (Pentatomidae)',
  summary:
    'Brown marmorated stink bug is an invasive shield bug from East Asia with a very wide host range that feeds on fruit, pods, and seeds, and is also a nuisance when adults aggregate in buildings to overwinter.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brown marmorated stink bug is a shield-shaped true bug native to East Asia that has become an invasive pest in North America, Europe, and elsewhere. It feeds with piercing-sucking mouthparts on a broad array of fruit, vegetables, and field crops, and its wide host range and strong dispersal make it difficult to manage at a landscape scale.',
    },
    {
      type: 'paragraph',
      text: 'In addition to crop damage, adults are a well-known household nuisance because they aggregate in large numbers on and inside buildings to overwinter. This overwintering behaviour and the insect’s ability to hitchhike in vehicles and cargo have contributed to its rapid spread.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Pentatomidae' },
    { label: 'Status', value: 'Invasive pest of Asian origin' },
    {
      label: 'Feeding',
      value: 'Pierces fruit, pods, and seeds with sucking mouthparts',
    },
    {
      label: 'Host range',
      value: 'Very broad: tree fruit, vegetables, legumes',
    },
    {
      label: 'Key concern',
      value: 'Fruit deformity and blemish, plus overwintering nuisance',
    },
    {
      label: 'Sign',
      value: 'Dimpled, corky, or discoloured fruit and pod injury',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are shield-shaped and mottled brown ("marmorated"), roughly the size of a fingernail. Helpful distinguishing features include alternating light and dark bands on the antennae and along the edge of the abdomen. Eggs are laid in tidy clusters on the underside of leaves, and the nymphs are more rounded and often more brightly patterned than adults.',
        },
        {
          type: 'paragraph',
          text: 'Several native stink bugs look broadly similar, so the banded antennae and abdominal margins are useful checks. A defensive odour when disturbed is characteristic of stink bugs generally and is the origin of the common name.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Overwintered adults become active in spring, feed, and lay clusters of eggs on host plants. Nymphs pass through several instars before maturing, and the number of generations per year depends on climate, with warmer regions supporting more. As days shorten in autumn, adults seek sheltered overwintering sites, including buildings.',
        },
        {
          type: 'paragraph',
          text: 'Because adults are highly mobile and use many hosts, they move between wild vegetation, orchards, and field crops through the season, which complicates monitoring and control on any single crop.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding punctures on developing fruit cause dimpling, corky or water-soaked areas, and internal discoloration that reduce marketability. On legumes and other seed crops, feeding on pods and seeds can cause deformity, abortion, and quality loss. Damage is often concentrated at field and orchard edges where bugs move in from surrounding vegetation.',
        },
        {
          type: 'paragraph',
          text: 'The host range is very broad and includes tree fruit such as apple, peach, and pear, grape, and field crops such as soybean and maize, along with many vegetables including tomato and sweet pepper.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone-baited traps are widely used to detect activity and time management decisions, and visual inspection focuses on crop edges and fruit clusters for adults, nymphs, egg masses, and early feeding injury. Because pressure often comes from the field margin, monitoring border rows closely helps target any response and reduce unnecessary whole-field treatment.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management combines monitoring, biological control, and cultural tactics within an integrated pest management framework, with attention to conserving natural enemies.',
        },
        {
          type: 'list',
          items: [
            'Monitor with pheromone traps and edge scouting to time and target any action',
            'Conserve and encourage natural enemies, including egg parasitoids that attack stink bug eggs',
            'Consider border-focused or perimeter management where damage concentrates at field edges',
            'Exclude and remove overwintering adults from buildings by sealing entry points',
            'Coordinate at an area-wide scale given the pest’s mobility and broad host use',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'leafhoppers' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Native to East Asia and invasive across North America and Europe; host mix, seasonality, and guidance vary by region.',
  climateContext:
    'Warmer climates allow more generations per year, and mild winters aid survival of overwintering adults in sheltered sites.',
  limitations: [
    'This is a general overview of a highly polyphagous invasive pest, not crop- or region-specific guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Natural-enemy establishment and effectiveness differ between invaded regions.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-aphis',
      citedFor: 'Invasive status and regulatory context',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Brown Marmorated Stink Bug',
    description:
      'Brown marmorated stink bug (Halyomorpha halys): identification, biology, broad-host fruit and pod damage, monitoring, and integrated management.',
    keywords: [
      'brown marmorated stink bug',
      'Halyomorpha halys',
      'BMSB',
      'invasive pest',
    ],
  },
  structuredData: { article: true },
};
