import type { PestContent } from '@/types/content';

export const grasshoppers: PestContent = {
  id: 'pest-grasshoppers',
  slug: 'grasshoppers',
  contentType: 'pest',
  title: 'Grasshoppers',
  scientificName: 'Suborder Caelifera, family Acrididae (order Orthoptera)',
  alternativeNames: ['Short-horned grasshoppers'],
  category: 'Insect pest',
  subcategory: 'Foliage-feeding insect',
  pestGroup: 'Insect — Orthoptera',
  summary:
    'Grasshoppers are chewing insects that feed on foliage and can build to damaging densities on wheat, maize, and sorghum during warm, dry periods, occasionally reaching outbreak levels distinct from, but related to, locust behaviour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grasshoppers (suborder Caelifera, mainly family Acrididae) are chewing insects found in grasslands, rangelands, and field margins worldwide. Most species live at low, background densities, but populations of some can increase sharply under favourable conditions and move into adjacent crops in search of food.',
    },
    {
      type: 'paragraph',
      text: 'Grasshoppers are closely related to locusts, and in a few species the same insects can shift between a solitary form and a swarming, migratory phase, though most grassland grasshopper species of concern to crops remain solitary and cause localized rather than swarm-scale damage.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Orthoptera, mainly family Acrididae',
    },
    {
      label: 'Feeding',
      value: 'Chewing leaves, stems, and seed heads',
    },
    {
      label: 'Key concern',
      value:
        'Defoliation and, at high densities, significant yield loss in field margins and crops',
    },
    {
      label: 'Outbreak pattern',
      value:
        'Populations can build rapidly after warm, dry seasons that favour egg survival',
    },
    {
      label: 'Natural enemies',
      value:
        'Birds, predatory insects, parasitic flies and nematodes, entomopathogenic fungi',
    },
    {
      label: 'Sign',
      value:
        'Ragged, chewed leaf margins, defoliated patches, insects visible in field margins',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Grasshoppers have large hind legs adapted for jumping, short antennae relative to their body (distinguishing them from crickets and katydids), and chewing mouthparts. Colour and size vary widely among species, from a couple of centimetres to several centimetres long.',
        },
        {
          type: 'paragraph',
          text: 'Damage appears as ragged, irregular feeding along leaf margins and, at higher densities, complete stripping of foliage and feeding on seed heads and stems.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Most pest grasshopper species overwinter as eggs laid in soil, particularly in undisturbed field margins, rangeland, and roadsides. Nymphs hatch in spring and develop through several instars before becoming winged adults, with warm, dry conditions generally favouring egg survival and faster development.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding reduces photosynthetic leaf area and can damage seed heads directly, with the greatest impact typically occurring when large numbers move from drying field margins or rangeland into adjacent crops as vegetation there declines.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include wheat, maize, and sorghum, along with many rangeland grasses and other field crops, particularly at field edges.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Counting nymphs and adults in field margins and rangeland during spring, and monitoring conditions known to favour outbreaks, such as warm, dry weather following egg-laying seasons, help anticipate movement into crops and inform timely field-edge scouting.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Grasshopper management typically targets field margins and early nymphal stages before large populations move into the crop itself.',
        },
        {
          type: 'list',
          items: [
            'Monitor field margins and rangeland for nymphs early in the season',
            'Conserve birds, predatory insects, and entomopathogenic natural enemies',
            'Manage vegetation at field edges to reduce egg-laying and early nymphal habitat where appropriate',
            'Coordinate monitoring and any response at a landscape scale, since populations move between rangeland and cropland',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or bait use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'desert-locust' },
    { type: 'pest', slug: 'armyworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide wherever grassland, rangeland, or field crops occur; outbreak-prone species and typical triggers vary by region.',
  climateContext:
    'Warm, dry conditions during and after egg-laying generally favour higher survival and faster nymphal development, and drought can accelerate movement from drying rangeland into irrigated or greener crops.',
  limitations: [
    'This is a general overview of a large family of grassland and field insects, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'usda-aphis', citedFor: 'Monitoring and regulatory context' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Field scouting and cultural management context',
    },
    { sourceId: 'fao', citedFor: 'Outbreak context and management principles' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Grasshoppers',
    description:
      'Grasshoppers explained: identification, field-margin egg-laying biology, defoliation risk in cereals, outbreak monitoring, and management principles.',
    keywords: [
      'grasshoppers',
      'Acrididae',
      'cereal defoliation',
      'Orthoptera pest',
    ],
  },
  structuredData: { article: true },
};
