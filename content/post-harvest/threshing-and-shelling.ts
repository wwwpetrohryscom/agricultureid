import type { PostHarvestContent } from '@/types/content';

export const threshingAndShelling: PostHarvestContent = {
  id: 'post-harvest-threshing-and-shelling',
  slug: 'threshing-and-shelling',
  contentType: 'post-harvest',
  title: 'Threshing and Shelling',
  postHarvestClass: 'handling',
  alternativeNames: ['Threshing', 'Shelling', 'Grain separation'],
  category: 'Post-harvest operation',
  subcategory: 'Handling & conditioning',
  summary:
    'Threshing and shelling separate grain or seed from the plant structures that hold it — the ear, head, pod, or husk — so the grain can be cleaned, dried, and stored. Done poorly, they cause grain damage and loss.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Threshing and shelling are the operations that free the edible grain or seed from the plant parts enclosing it. Threshing generally refers to separating grain from cereal heads or ears and from straw, while shelling refers to removing grain or seed from pods, cobs, or husks — for example shelling maize from the cob or groundnuts from their pods. Both turn the harvested plant into loose grain ready for cleaning, drying, and storage.',
    },
    {
      type: 'paragraph',
      text: 'These steps can be done by hand — beating, treading, or rubbing — or by machines ranging from small motorised threshers to the threshing mechanism inside a combine harvester. Whatever the method, the goal is to release the grain completely while avoiding cracking, breaking, or bruising it, because damaged grain stores poorly, loses value, and has reduced germination if kept for seed.',
    },
  ],
  keyFacts: [
    {
      label: 'Threshing',
      value: 'Separating grain from cereal heads or ears and from straw',
    },
    {
      label: 'Shelling',
      value: 'Removing grain or seed from pods, cobs, or husks',
    },
    {
      label: 'Methods',
      value:
        'Hand beating or treading, motorised threshers, and combine harvesters',
    },
    {
      label: 'Key quality risk',
      value: 'Cracked, broken, or bruised grain from over-aggressive threshing',
    },
    {
      label: 'Loss risk',
      value: 'Unthreshed grain left behind and scattered or spilled grain',
    },
    {
      label: 'Feeds into',
      value: 'Grain cleaning, drying, and storage',
    },
  ],
  sections: [
    {
      id: 'what-happens',
      heading: 'What threshing and shelling do',
      body: [
        {
          type: 'paragraph',
          text: 'In both operations, force is applied to the harvested material to detach the grain: impact, rubbing, or a combination. In a thresher or combine, a rotating drum and concave rub and beat the crop so that grain is knocked loose and then separated from straw and chaff. Hand methods use beating against a surface, treading, or rubbing between hands or boards. The looser the grain is held by the plant, the gentler the action needed.',
        },
        {
          type: 'paragraph',
          text: 'Getting this force right is the central challenge. Too little, and grain is left attached and lost; too much, and grain is cracked or split. Crop moisture matters greatly here: grain that is too moist threshes incompletely and bruises, while grain that is too dry may shatter or crack.',
        },
      ],
    },
    {
      id: 'quality-and-loss',
      heading: 'Quality and loss',
      body: [
        {
          type: 'list',
          items: [
            'Mechanical damage — cracks, splits, and bruising — from over-aggressive threshing, which lowers grade and storability.',
            'Incomplete threshing that leaves grain attached to heads, cobs, or pods and is lost.',
            'Scattered and spilled grain during handling of the threshed material.',
            'Reduced germination in grain kept for seed if kernels are cracked or bruised.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because cracked grain is far more vulnerable to storage insects and moulds, gentle and complete threshing directly supports safe storage. Adjusting drum speed and clearance, and threshing at an appropriate crop moisture, reduces both damage and loss.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Thresh or shell at a crop moisture that frees the grain without cracking it.',
            'Adjust machine settings — such as drum speed and clearance — to the crop and its condition.',
            'Minimise grain left behind on heads, cobs, or pods, and reduce spillage.',
            'Handle grain kept for seed especially gently to protect germination.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Moisture affects threshing quality',
          text: 'Grain threshed too moist bruises and threshes incompletely, while grain that is too dry can shatter; timing threshing to grain condition improves both recovery and quality.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'machinery', slug: 'thresher' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Threshing and shelling in post-harvest systems',
    },
    {
      sourceId: 'irri',
      citedFor: 'Threshing of paddy and grain quality and loss',
    },
    {
      sourceId: 'iita',
      citedFor: 'Shelling of maize and legumes in smallholder systems',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Methods range from hand threshing to combine harvesters depending on crop and scale.',
  limitations: [
    'Optimum threshing force and settings are crop- and condition-specific; over-aggressive threshing damages grain.',
    'Grain moisture at threshing strongly affects damage and recovery and varies with crop and climate.',
    'This entry describes principles and trade-offs, not settings for a specific thresher or combine.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Threshing and Shelling: Separating Grain',
    description:
      'How threshing and shelling separate grain and seed from ears, pods, cobs, and husks — hand and mechanised methods, grain damage and loss, and good practice.',
    keywords: [
      'threshing',
      'shelling',
      'grain separation',
      'maize shelling',
      'grain damage',
    ],
  },
  structuredData: { article: true },
};
