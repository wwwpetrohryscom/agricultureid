import type { PestContent } from '@/types/content';

export const soybeanCystNematode: PestContent = {
  id: 'pest-soybean-cyst-nematode',
  slug: 'soybean-cyst-nematode',
  contentType: 'pest',
  title: 'Soybean Cyst Nematode',
  scientificName: 'Heterodera glycines (phylum Nematoda)',
  alternativeNames: ['SCN'],
  category: 'Nematode pest',
  subcategory: 'Root-infecting cyst nematode',
  pestGroup: 'Nematode',
  summary:
    'Soybean cyst nematode is a microscopic soil roundworm that invades soybean roots and forms persistent egg-filled cysts; it is one of the most damaging pests of soybean and often causes yield loss with few obvious above-ground symptoms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean cyst nematode is a microscopic roundworm, not an insect, that is among the most economically damaging pests of soybean. Juveniles invade the roots and establish feeding sites, and the females swell and eventually form hardened cysts, each containing many eggs, that persist in the soil for years.',
    },
    {
      type: 'paragraph',
      text: 'A notable feature of this pest is that it frequently reduces yield without producing obvious above-ground symptoms, so losses can go unrecognized. Because the cysts are long-lived and the nematode has an extremely persistent soil stage, once a field is infested the goal shifts to managing populations over the long term rather than eliminating them.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Roundworms, phylum Nematoda (cyst nematode)' },
    { label: 'Host', value: 'Primarily soybean, with some other legumes' },
    {
      label: 'Feeding',
      value: 'Juveniles feed within roots at established feeding sites',
    },
    {
      label: 'Key concern',
      value: 'Yield loss, often with few above-ground symptoms',
    },
    {
      label: 'Persistence',
      value: 'Egg-filled cysts survive in soil for years',
    },
    {
      label: 'Sign',
      value: 'Tiny white-to-yellow females visible on roots when dug carefully',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The most reliable in-field sign is the presence of tiny lemon-shaped females on the roots, visible as white to pale yellow bodies about the size of a pinhead when plants are dug up carefully and the soil gently washed away — much smaller than the plant’s own nitrogen-fixing nodules. As females mature and die, they darken into brown cysts.',
        },
        {
          type: 'paragraph',
          text: 'Above ground, symptoms are often absent or non-specific, such as patchy stunting or yellowing that resembles nutrient or moisture stress. Confirming the pest and its population level generally requires laboratory soil analysis, which is the standard diagnostic approach.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Juveniles hatch from eggs in the soil, penetrate soybean roots, and establish specialized feeding sites. Females swell and rupture through the root surface, and their bodies become egg-filled cysts. Several generations can occur within a single soybean season in warm conditions, so populations can multiply rapidly on a susceptible crop.',
        },
        {
          type: 'paragraph',
          text: 'Eggs within cysts can remain viable in the soil for many years and hatch gradually, which is why the pest is so persistent and why it spreads readily with soil movement on equipment, in water, and by other means.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding damages roots and disrupts water and nutrient uptake and nodulation, reducing yield. Because damage is often hidden, fields can suffer meaningful losses that are mistaken for other stresses. Damage tends to be worse where populations are high and where plants face additional stress, and the nematode can interact with root diseases to increase harm.',
        },
        {
          type: 'paragraph',
          text: 'Soybean is the main host, with some other legumes and certain weeds able to support the nematode. Because it reproduces on susceptible soybean, cropping decisions strongly shape population trends over time.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Soil sampling and laboratory assay to detect the nematode and estimate egg population levels are the foundation of monitoring, ideally before deciding on variety and rotation for a field. Inspecting roots for females during the season and tracking population trends over years help evaluate whether management is keeping numbers in check.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management aims to keep populations below damaging levels over the long term through resistant varieties, rotation, and sanitation within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Use resistant soybean varieties and rotate the sources of resistance to slow adaptation by the nematode',
            'Rotate with non-host crops to reduce nematode populations over time',
            'Base variety and rotation decisions on soil sampling and population monitoring',
            'Prevent spread by cleaning soil from equipment moving between fields',
            'Manage overall plant health and root diseases that interact with the nematode',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any nematicide or seed-treatment use must follow current, locally authorized recommendations and product labels, and should be integrated with resistant varieties and rotation. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'root-aphids' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'A major soybean pest in many production regions; population levels, resistant varieties, and virulence differences vary by region.',
  climateContext:
    'Warm soil temperatures speed development and allow more generations per season, while cysts persist in soil through unfavourable periods.',
  limitations: [
    'This is a general overview of the pest, not region- or field-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Detecting the nematode and its population level typically requires laboratory soil analysis.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Sampling and management of soybean cyst nematode',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Cyst Nematode',
    description:
      'Soybean cyst nematode (Heterodera glycines): identification, biology, hidden root damage and yield loss, soil sampling, and integrated management.',
    keywords: [
      'soybean cyst nematode',
      'Heterodera glycines',
      'soybean pest',
      'cyst nematode',
    ],
  },
  structuredData: { article: true },
};
