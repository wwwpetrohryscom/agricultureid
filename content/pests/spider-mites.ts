import type { PestContent } from '@/types/content';

export const spiderMites: PestContent = {
  id: 'pest-spider-mites',
  slug: 'spider-mites',
  contentType: 'pest',
  title: 'Spider Mites',
  scientificName:
    'Tetranychus urticae and related species (Acari: Tetranychidae)',
  alternativeNames: ['Twospotted spider mite', 'Red spider mite'],
  category: 'Mite pest',
  subcategory: 'Sap-feeding arachnid',
  pestGroup: 'Mite — Acari (Tetranychidae)',
  summary:
    'Spider mites are tiny sap-feeding arachnids, not insects, that thrive in hot, dry conditions and can cause serious stippling and leaf bronzing on many crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Spider mites are minute arachnids in the family Tetranychidae, related to spiders and ticks rather than to insects. They have eight legs as adults and feed by piercing leaf cells and removing their contents, which gives infested foliage a characteristic speckled or bronzed appearance. Many species produce fine silk webbing, especially under heavy infestation.',
    },
    {
      type: 'paragraph',
      text: 'Outbreaks are often associated with hot, dry weather, dusty field conditions, and moisture-stressed plants. Populations can also flare up after broad-spectrum insecticide applications remove the predatory mites and insects that normally keep spider mites in check, making them a classic example of a secondary pest in many cropping systems.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Arachnids, order Trombidiformes, family Tetranychidae',
    },
    { label: 'Feeding', value: 'Piercing and removing contents of leaf cells' },
    {
      label: 'Key concern',
      value: 'Stippling, bronzing, and leaf drop under heavy pressure',
    },
    {
      label: 'Favoured by',
      value: 'Hot, dry, dusty conditions and plant water stress',
    },
    {
      label: 'Natural enemies',
      value: 'Predatory mites, minute pirate bugs, lacewings',
    },
    {
      label: 'Sign',
      value: 'Fine webbing on leaf undersides and between leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Spider mites are extremely small, often under half a millimetre long, and are best seen with a hand lens. Colour varies by species and season, from pale green or yellow to reddish, and some species show characteristic dark spots on either side of the body.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mite vs. insect',
              description:
                'Adult mites have eight legs and no antennae, distinguishing them from six-legged insect pests.',
            },
            {
              term: 'Webbing',
              description:
                'Fine silk strands on leaf undersides and between leaves, most visible under heavy infestation.',
            },
            {
              term: 'Stippling',
              description:
                'Tiny pale or yellow speckles on the upper leaf surface where cell contents have been removed.',
            },
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
          text: 'Spider mites develop through egg, larval, two nymphal stages, and adult. Development is rapid in warm weather, and a generation can be completed in under two weeks under favourable conditions, allowing populations to build quickly over a season.',
        },
        {
          type: 'paragraph',
          text: 'Many species overwinter as mated adult females in plant debris, bark crevices, or nearby vegetation, resuming feeding and reproduction as temperatures rise in spring.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding removes chlorophyll-containing cell contents, producing stippling that can coalesce into bronzed or scorched-looking foliage. Severe, prolonged infestations can cause leaf drop, reduced photosynthesis, and yield or quality losses, particularly under hot, dry conditions that also favour the mites.',
        },
        {
          type: 'paragraph',
          text: 'Spider mites have an unusually broad host range spanning field crops, vegetables, fruit, and ornamentals. Notable hosts include cotton, strawberry, cucumber, and sweet pepper, among many others.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because early symptoms are subtle, regular inspection of leaf undersides with a hand lens is important, along with a simple shake test over white paper to dislodge and count mites. Monitoring should also note the presence of predatory mites and other natural enemies, since their activity strongly influences whether populations decline naturally.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Spider mite management works best as part of an integrated approach that reduces plant stress and conserves natural enemies rather than relying on reactive treatment alone.',
        },
        {
          type: 'list',
          items: [
            'Conserve predatory mites and other natural enemies by avoiding unnecessary broad-spectrum treatments',
            'Manage irrigation to avoid drought stress, which favours mite outbreaks',
            'Reduce dust near crops where practical, since dusty conditions favour mites',
            'Monitor regularly and use local thresholds to guide any intervention',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any miticide or insecticide use must follow current, locally authorized recommendations and product labels, and should account for effects on predatory mites and other beneficial organisms. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Global overview of a diverse mite family found wherever host crops are grown; species, hosts, and severity vary by region and climate.',
  climateContext:
    'Populations build fastest in hot, dry weather and can decline under cool, humid, or rainy conditions that favour natural enemies and fungal pathogens of mites.',
  limitations: [
    'This is a general overview of a large mite family, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Field identification of species-level distinctions typically requires magnification and, in some cases, expert confirmation.',
  ],
  sourceReferences: [
    {
      sourceId: 'uc-ipm',
      citedFor: 'Spider mite identification and IPM principles',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Spider mite biology, hosts, and distribution',
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
    title: 'Spider Mites',
    description:
      'Spider mites explained: identification, biology, feeding damage, monitoring methods, and integrated management for these tiny plant-feeding mites.',
    keywords: ['spider mites', 'Tetranychidae', 'mite pest', 'leaf stippling'],
  },
  structuredData: { article: true },
};
