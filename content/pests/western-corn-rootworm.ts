import type { PestContent } from '@/types/content';

export const westernCornRootworm: PestContent = {
  id: 'pest-western-corn-rootworm',
  slug: 'western-corn-rootworm',
  contentType: 'pest',
  title: 'Western Corn Rootworm',
  scientificName: 'Diabrotica virgifera virgifera (Coleoptera: Chrysomelidae)',
  alternativeNames: ['WCR'],
  category: 'Insect pest',
  subcategory: 'Root-feeding beetle larva',
  pestGroup: 'Insect — Coleoptera (Chrysomelidae)',
  summary:
    'Western corn rootworm is a beetle whose larvae feed on maize roots, causing lodging and yield loss, while adults feed on silks and leaves; it is notorious for adapting to control tactics such as crop rotation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Western corn rootworm is one of the most economically important insect pests of maize in the Americas and is an invasive pest in parts of Europe. The main damage is done by the larvae, which feed on and tunnel into maize roots, undermining the plant’s anchorage and its ability to take up water and nutrients.',
    },
    {
      type: 'paragraph',
      text: 'The pest is well known for its capacity to adapt to management tactics. Populations in some regions have overcome the classic control of rotating maize with another crop, and resistance has developed to certain insecticides and biotech traits, which makes diversified, integrated management especially important.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Chrysomelidae',
    },
    { label: 'Host', value: 'Maize (larvae specialize on maize roots)' },
    { label: 'Damaging stage', value: 'Larva (root feeder)' },
    {
      label: 'Key concern',
      value: 'Root pruning, lodging, and adaptation to control tactics',
    },
    {
      label: 'Adult damage',
      value: 'Silk clipping and leaf feeding that can affect pollination',
    },
    { label: 'Sign', value: 'Pruned roots and "goosenecked", lodged plants' },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small yellow-green beetles; in the western corn rootworm the wing covers are marked with dark striping or shading, and males and females differ somewhat in pattern. Larvae are slender, white, worm-like grubs with a dark head and a dark plate on the last segment, found feeding on and within maize roots.',
        },
        {
          type: 'paragraph',
          text: 'A characteristic symptom is "goosenecking", where plants with severely pruned roots lodge and then bend upward at the base as they try to right themselves. Digging and washing roots to look for feeding scars and tunnelling confirms larval activity.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'There is generally one generation per year. Eggs are laid in the soil, typically in maize fields in summer, and overwinter there. Larvae hatch the following spring and must find maize roots to feed on, developing through several stages before pupating in the soil and emerging as adults in summer to feed, mate, and lay eggs.',
        },
        {
          type: 'paragraph',
          text: 'Because eggs are usually laid in maize and larvae depend on maize roots, rotating to a non-host crop traditionally starved the larvae. In some regions, however, behavioural and developmental adaptations have reduced the effectiveness of rotation, underscoring the pest’s adaptability.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval root pruning reduces water and nutrient uptake and weakens anchorage, leading to lodging and goosenecking that hamper harvest and reduce yield. Adults feed on silks and leaves; heavy silk clipping during pollination can interfere with kernel set. Overall impact depends on larval density, soil conditions, and crop stage.',
        },
        {
          type: 'paragraph',
          text: 'Maize is the key host, including sweetcorn. Larvae are highly dependent on maize roots, which is central to both the damage and the management logic for this pest.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Adult populations are monitored with sticky traps and visual counts through the summer to estimate egg-laying pressure and inform decisions for the following season. Root damage is assessed by digging, washing, and rating roots for pruning. Field history and regional resistance status are important context for planning.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because the pest adapts to single tactics, durable management relies on diversifying and rotating approaches within an integrated pest management framework.',
        },
        {
          type: 'list',
          items: [
            'Use crop rotation where local populations have not adapted to it',
            'Rotate and diversify management tools, including biotech traits where authorized, to slow resistance',
            'Monitor adults to estimate risk and guide next-season decisions',
            'Manage planting and agronomy to promote vigorous root systems that tolerate some feeding',
            'Coordinate resistance management across an area given the pest’s adaptability',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or trait-based tactic must follow current, locally authorized recommendations, product labels, and resistance-management requirements. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sweetcorn' },
  ],
  connections: [
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'wireworms' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'european-corn-borer' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'Native to the Americas and invasive in parts of Europe; population behaviour, resistance status, and guidance vary by region.',
  climateContext:
    'Generally one generation per year, with eggs overwintering in soil and spring temperatures driving larval hatch and development.',
  limitations: [
    'This is a general overview, not region-specific guidance, and local resistance status strongly affects which tactics work.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'The effectiveness of crop rotation depends on whether local populations have adapted to it.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Maize rootworm monitoring and management',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Western Corn Rootworm',
    description:
      'Western corn rootworm (Diabrotica virgifera): identification, biology, maize root damage and lodging, monitoring, and resistance-aware management.',
    keywords: [
      'western corn rootworm',
      'Diabrotica virgifera',
      'maize root pest',
      'corn rootworm',
    ],
  },
  structuredData: { article: true },
};
