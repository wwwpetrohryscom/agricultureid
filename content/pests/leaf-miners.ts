import type { PestContent } from '@/types/content';

export const leafMiners: PestContent = {
  id: 'pest-leaf-miners',
  slug: 'leaf-miners',
  contentType: 'pest',
  title: 'Leaf Miners',
  scientificName:
    'Various species, notably Liriomyza spp. (Diptera: Agromyzidae); also Lepidoptera and other larvae',
  alternativeNames: ['Leafminer flies', 'Serpentine leafminers'],
  category: 'Insect pest',
  subcategory: 'Leaf-tunneling larva',
  pestGroup: 'Insect — various (Diptera/Lepidoptera larvae)',
  summary:
    'Leaf miners are larvae from several unrelated insect groups that tunnel within leaf tissue, producing distinctive winding mines, and are common pests of vegetable crops, especially under protected cultivation.',
  introduction: [
    {
      type: 'paragraph',
      text: '"Leaf miner" is a functional term rather than a single taxonomic group: it describes larvae from several different insect orders, most commonly small flies in the family Agromyzidae, but also some moths and beetles, that feed inside leaf tissue, tunneling between the upper and lower leaf surfaces and leaving visible winding or blotch-shaped mines.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae feed protected within the leaf for most of their development, they are difficult to reach with contact-based approaches, and management relies heavily on monitoring adult activity, conserving parasitoids, and cultural sanitation. Problems are often most severe in protected or greenhouse vegetable production, where warm, stable conditions favour rapid generations.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value:
        'Insects from several orders, most commonly Diptera; also Lepidoptera',
    },
    {
      label: 'Feeding',
      value:
        'Larvae tunnel within leaf tissue between the upper and lower surfaces',
    },
    {
      label: 'Key concern',
      value:
        'Visible mines reduce photosynthetic area and marketability of leafy crops',
    },
    {
      label: 'Generations',
      value:
        'Multiple overlapping generations possible, especially in warm or protected conditions',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps are often key regulators of populations',
    },
    {
      label: 'Sign',
      value: 'Winding or blotch-shaped pale tunnels visible on leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Mines appear as winding, serpentine tunnels or, in some species, larger blotch-shaped patches, depending on the species involved. Tiny puncture marks from adult feeding or egg-laying are often visible on the leaf surface, and larvae can sometimes be seen within a mine when the leaf is held up to light.',
        },
        {
          type: 'list',
          items: [
            'Pale, winding or blotch-shaped tunnels visible on the leaf surface',
            'Small puncture marks from adult feeding or egg-laying',
            'Larvae visible within a mine when the leaf is held to the light',
            'Round exit or parasitoid emergence holes in older mines',
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
          text: 'In many fly species, adult females puncture the leaf and lay eggs inside the tissue, while some moth species lay eggs on the leaf surface. Larvae hatch and tunnel within the leaf, feeding on the internal tissue between the upper and lower surfaces. Mature larvae often exit the mine to pupate in the soil or on the leaf surface, depending on species, and multiple generations are possible within a season, especially in warm greenhouse conditions.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Mines reduce photosynthetic leaf area and can cause premature leaf drop under heavy infestation. On crops grown for their leaves, such as spinach, or where fruit quality depends on healthy foliage, damage can be economically significant even at moderate mine densities.',
        },
        {
          type: 'paragraph',
          text: 'Hosts include tomato, sweet pepper, and spinach among many other vegetable and ornamental crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Yellow sticky traps are widely used to monitor adult fly activity, alongside regular scouting of leaves for fresh mines and puncture marks. Checking older mines for parasitoid emergence holes gives an indication of natural biological control already in progress.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf miner management centres on conserving natural enemies and reducing conditions that allow populations to build unchecked.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, which are often highly effective natural regulators',
            'Remove and destroy heavily mined leaves and plant debris to reduce carry-over',
            'Use yellow sticky traps to monitor and help reduce adult populations',
            'Maintain greenhouse or protected-culture sanitation and screening to exclude adults',
            'Avoid unnecessary broad-spectrum treatments that disrupt parasitoids',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on parasitoid wasps and other beneficial insects. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'spinach' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
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
    'Global overview spanning several unrelated insect groups; species present, hosts, and severity vary considerably by region and production system.',
  climateContext:
    'Warm, stable temperatures, common in protected and greenhouse production, favour faster development and more overlapping generations per season.',
  limitations: [
    'This is a general overview of a functional pest group spanning multiple insect orders, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
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
    title: 'Leaf Miners',
    description:
      'Leaf miners explained: identification, tunneling biology, leaf damage in vegetable crops, monitoring with sticky traps, and integrated management.',
    keywords: [
      'leaf miners',
      'Liriomyza',
      'leaf mining insects',
      'vegetable pest',
    ],
  },
  structuredData: { article: true },
};
