import type { PestContent } from '@/types/content';

export const rootAphids: PestContent = {
  id: 'pest-root-aphids',
  slug: 'root-aphids',
  contentType: 'pest',
  title: 'Root Aphids',
  scientificName: 'Various genera, family Aphididae (order Hemiptera)',
  alternativeNames: ['Subterranean aphids'],
  category: 'Insect pest',
  subcategory: 'Soil-dwelling sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Aphididae, root-feeding)',
  summary:
    'Root aphids are aphid species that feed below ground on plant roots rather than foliage, weakening crops such as lettuce, maize, and sorghum and often going unnoticed until wilting or stunting becomes visible above ground.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Root aphids are aphid species, or life stages of otherwise foliar aphid species, that feed on plant roots underground rather than on above-ground foliage. Because their feeding site is hidden below the soil surface, infestations are often detected only after visible symptoms such as wilting, yellowing, or stunted growth appear in the crop.',
    },
    {
      type: 'paragraph',
      text: 'Some root aphid species form close associations with ants, which protect and tend the aphid colonies underground in exchange for honeydew, a relationship that can make root aphid populations more persistent and harder to manage than surface-feeding aphids.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value:
        'Insects, order Hemiptera, family Aphididae (root-feeding species)',
    },
    {
      label: 'Feeding',
      value: 'Sucking sap from roots below the soil surface',
    },
    {
      label: 'Key concern',
      value:
        'Root damage causing wilting, stunting, and yield loss, often detected late',
    },
    {
      label: 'Notable association',
      value: 'Some species are tended by ants underground',
    },
    {
      label: 'Natural enemies',
      value: 'Predatory soil insects, parasitoids, entomopathogenic fungi',
    },
    {
      label: 'Sign',
      value:
        'Wilting or stunted plants despite adequate soil moisture, white waxy colonies visible on disturbed roots',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Root aphids are typically pale or waxy-coated, distinguishing them from the more variably coloured foliar aphids, and are found clustered on roots or the below-ground portion of stems when soil around affected plants is carefully disturbed.',
        },
        {
          type: 'paragraph',
          text: 'Above-ground signs are often the first clue: plants that wilt or appear stunted despite adequate soil moisture, sometimes with ants visibly active around the base of affected plants tending the colony below.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Like foliar aphids, root aphids can reproduce rapidly through asexual reproduction under favourable conditions, allowing underground colonies to expand quickly once established on a host root system.',
        },
        {
          type: 'paragraph',
          text: 'Some species alternate between root and foliar feeding at different life stages or times of year, while others remain root-associated throughout, often assisted in colonisation and protection by mutualistic ants.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Root feeding reduces the plant’s capacity to take up water and nutrients, producing wilting, yellowing, and stunted growth that can be mistaken for drought stress or nutrient deficiency until roots are inspected directly.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include lettuce, maize, and sorghum, among other crops where root aphid colonies can establish on the root system.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because root aphids are hidden below ground, monitoring relies on inspecting the roots of wilting or stunted plants, watching for associated ant activity at the plant base, and soil sampling in fields with a history of root aphid pressure.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Root aphid management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Rotate away from known host crops where root aphid pressure has been identified',
            'Manage ant populations that protect and spread root aphid colonies where they are a contributing factor',
            'Support soil biology and organic matter that favour natural predators and pathogens of soil insects',
            'Inspect roots of wilting or stunted plants to confirm root aphids before assuming other causes',
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
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found wherever host crops are grown worldwide; species, ant associations, and severity vary by region and soil type.',
  climateContext:
    'Soil temperature and moisture influence root aphid activity, and drought-stressed plants may show more pronounced symptoms from a given level of root feeding.',
  limitations: [
    'This is a general overview of a group of root-feeding aphid species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Root aphid biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'cornell-cals', citedFor: 'Monitoring and management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Root Aphids',
    description:
      'Root aphids explained: identification, biology, hidden root-feeding damage to crops, ant associations, monitoring, and integrated management principles.',
    keywords: ['root aphids', 'Aphididae', 'soil pest', 'root damage'],
  },
  structuredData: { article: true },
};
