import type { PestContent } from '@/types/content';

export const spottedWingDrosophila: PestContent = {
  id: 'pest-spotted-wing-drosophila',
  slug: 'spotted-wing-drosophila',
  contentType: 'pest',
  title: 'Spotted Wing Drosophila',
  scientificName: 'Drosophila suzukii (Diptera: Drosophilidae)',
  alternativeNames: ['SWD', 'Spotted-wing drosophila'],
  category: 'Insect pest',
  subcategory: 'Fruit-infesting vinegar fly',
  pestGroup: 'Insect — Diptera (Drosophilidae)',
  summary:
    'Spotted wing drosophila is a vinegar fly that, unlike its relatives, attacks sound ripening fruit; females use a saw-like ovipositor to lay eggs in intact soft fruit, and the maggots feed inside.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Spotted wing drosophila is a small vinegar fly from Asia that has become an invasive pest of soft and stone fruit across the Americas and Europe. Unlike most related vinegar flies, which breed in overripe or rotting fruit, this species attacks healthy, ripening fruit, which makes it far more damaging to marketable crops.',
    },
    {
      type: 'paragraph',
      text: 'The female has a serrated, saw-like egg-laying organ that allows her to cut into intact fruit skin and lay eggs inside. The maggots then feed within the fruit, causing it to soften and collapse, often shortly before or at harvest when losses are most costly.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Diptera, family Drosophilidae' },
    { label: 'Hosts', value: 'Soft and stone fruit, especially berries' },
    { label: 'Damaging stage', value: 'Larva (maggot) inside fruit' },
    {
      label: 'Key concern',
      value: 'Attacks sound, ripening fruit unlike other vinegar flies',
    },
    {
      label: 'Distinctive trait',
      value: 'Female’s saw-like ovipositor cuts intact fruit skin',
    },
    {
      label: 'Sign',
      value: 'Egg-laying scars and softening, collapsing fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small tan flies with red eyes. Males have a single dark spot near the tip of each wing, giving the pest its name, while females lack the spots but have a large, serrated ovipositor visible under magnification. Larvae are tiny white maggots found inside soft fruit.',
        },
        {
          type: 'paragraph',
          text: 'Because the flies resemble common vinegar flies, confirmation often relies on the wing spots in males and the ovipositor in females, together with finding maggots in sound rather than rotten fruit. Egg-laying scars and small breathing tubes protruding from the fruit surface are additional signs.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs in ripening fruit, and larvae feed inside before pupating in or near the fruit. The life cycle is very short in warm weather, so populations can build extremely quickly during the fruiting season and produce many overlapping generations, creating intense pressure at harvest time.',
        },
        {
          type: 'paragraph',
          text: 'The fly can use many cultivated and wild soft-fruited hosts, and wild hosts around fields serve as reservoirs. Its rapid reproduction and wide host use make sustained, well-timed management necessary through the ripening period.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Egg-laying and larval feeding cause fruit to soften, sink, and collapse, and the wounds admit rots and other vinegar flies, accelerating breakdown. Because attack occurs on sound, ripening fruit near harvest, even low infestation can render fruit unmarketable and cause rejection of consignments.',
        },
        {
          type: 'paragraph',
          text: 'Preferred hosts are soft and stone fruit, including blueberry, cherry, raspberry, strawberry, and blackberry, with grape also affected. Thin-skinned, soft fruit is generally most vulnerable.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Baited traps using fermenting attractants detect adult activity and help time management, and fruit sampling — floating or inspecting fruit for eggs and maggots — assesses infestation directly. Monitoring should intensify as fruit begins to ripen, when the crop becomes susceptible and pressure typically rises.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management combines sanitation, harvest practices, exclusion, and monitoring within integrated pest management, because the short life cycle and attack on sound fruit leave little margin for error.',
        },
        {
          type: 'list',
          items: [
            'Harvest frequently and completely, and promptly remove or destroy culls and dropped fruit that breed flies',
            'Cool fruit quickly after harvest to limit larval development in picked fruit',
            'Use exclusion netting on high-value plantings where practical',
            'Manage wild and unmanaged host plants around fields where feasible',
            'Time any treatment using trapping and fruit sampling, and rotate modes of action to slow resistance',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations, product labels, pre-harvest intervals, and resistance-management guidelines, and should protect pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'blackberry' },
    { type: 'crop', slug: 'grape' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'codling-moth' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Native to Asia and invasive across the Americas and Europe; a major pest of berries and soft fruit with pressure varying by region and season.',
  climateContext:
    'Warm conditions shorten the very rapid life cycle and drive explosive population growth during the fruiting season.',
  limitations: [
    'This is a general overview of the pest, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Separating this fly from common vinegar flies can require magnification and specialist checks.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Monitoring and management in berries',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Spotted Wing Drosophila',
    description:
      'Spotted wing drosophila (Drosophila suzukii): identification, biology, damage to ripening berries and soft fruit, monitoring, and integrated management.',
    keywords: [
      'spotted wing drosophila',
      'Drosophila suzukii',
      'berry pest',
      'SWD',
    ],
  },
  structuredData: { article: true },
};
