import type { PestContent } from '@/types/content';

export const orientalFruitFly: PestContent = {
  id: 'pest-oriental-fruit-fly',
  slug: 'oriental-fruit-fly',
  contentType: 'pest',
  title: 'Oriental Fruit Fly',
  scientificName: 'Bactrocera dorsalis (Diptera: Tephritidae)',
  alternativeNames: ['OFF'],
  category: 'Insect pest',
  subcategory: 'Fruit-infesting fly',
  pestGroup: 'Insect — Diptera (Tephritidae)',
  summary:
    'Oriental fruit fly is a highly invasive tephritid with a very broad host range; females lay eggs in ripening fruit and the maggots feed inside, making it a serious quarantine pest of tropical and subtropical fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oriental fruit fly is one of the most damaging and invasive fruit flies in the world, attacking a very wide range of tropical and subtropical fruits. As with other tephritid fruit flies, the female lays eggs beneath the skin of ripening fruit and the maggots develop inside, ruining the fruit and admitting decay.',
    },
    {
      type: 'paragraph',
      text: 'Its broad host range, strong flight, and ability to establish quickly make it a high-priority quarantine pest. Detections in fruit-producing areas that are free of it can prompt intensive eradication efforts, and its presence can restrict trade in host fruit.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Diptera, family Tephritidae' },
    {
      label: 'Host range',
      value: 'Very broad across tropical and subtropical fruit',
    },
    { label: 'Damaging stage', value: 'Larva (maggot) inside fruit' },
    {
      label: 'Key concern',
      value: 'Fruit spoilage and strict quarantine and trade limits',
    },
    {
      label: 'Status',
      value: 'Highly invasive, subject to eradication responses',
    },
    {
      label: 'Sign',
      value: 'Egg-laying punctures and maggots in ripening fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are medium-sized flies with clear wings marked by dark bands and a body pattern typical of the genus, though closely related species are easily confused, so identification is usually confirmed by specialists. Larvae are pale, legless maggots found inside infested fruit.',
        },
        {
          type: 'paragraph',
          text: 'Field signs include egg-laying punctures on the fruit skin, premature softening, colouring, and dropping of fruit, and maggots with internal breakdown when fruit is cut open. Trap catches are the primary means of detection and monitoring.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs under the skin of host fruit, and maggots feed inside before dropping to pupate in the soil. Development is rapid in warm climates, giving multiple generations per year and near-continuous activity where suitable host fruit is available, which supports high population levels and quick spread.',
        },
        {
          type: 'paragraph',
          text: 'The very broad host range means fruit is often available across seasons in tropical and subtropical areas, helping the fly persist and making area-wide coordination important for its management.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Maggot feeding destroys the flesh and lets decay organisms in, so infested fruit rots and drops and becomes unmarketable. As a regulated quarantine pest, oriental fruit fly can also close export markets to host fruit from infested areas, adding substantial indirect costs.',
        },
        {
          type: 'paragraph',
          text: 'The host range is very broad and includes mango, guava, papaya, banana, avocado, and citrus such as orange, among many other fruits. Susceptibility varies with fruit type and ripeness.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Baited trapping networks, often using male-attractant lures, are the main tool for detecting and tracking adults and are central to surveillance around production areas and ports. Fruit sampling for eggs and maggots complements trapping, and in regulated areas trap detections trigger defined quarantine and response actions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management relies on coordinated, area-wide programmes within integrated pest management, similar to those used against other major fruit flies.',
        },
        {
          type: 'list',
          items: [
            'Support area-wide trapping and surveillance and follow quarantine requirements',
            'Practise sanitation by collecting and destroying fallen and infested fruit',
            'Use male-annihilation and targeted bait techniques where authorized',
            'Employ the sterile-insect technique in coordinated suppression or eradication where applied',
            'Use approved post-harvest treatments and certification to meet market-access requirements',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide, bait, or post-harvest treatment must follow current, locally authorized recommendations and product labels, and, in regulated areas, official quarantine protocols. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'guava' },
    { type: 'crop', slug: 'papaya' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'avocado' },
    { type: 'crop', slug: 'orange' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Native to Asia and highly invasive across tropical and subtropical regions; a serious quarantine pest with status varying by region.',
  climateContext:
    'Warm conditions speed development and increase generations, while continuous host-fruit availability sustains populations year-round.',
  limitations: [
    'This is a general overview of the pest, not region-specific management or quarantine guidance.',
    'Thresholds, treatments, and quarantine actions are jurisdiction-specific and are not provided here.',
    'The oriental fruit fly belongs to a complex of similar species that require specialist identification.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-aphis',
      citedFor: 'Quarantine status and eradication response context',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Oriental Fruit Fly',
    description:
      'Oriental fruit fly (Bactrocera dorsalis): identification, biology, fruit damage, quarantine status, monitoring, and area-wide management.',
    keywords: [
      'oriental fruit fly',
      'Bactrocera dorsalis',
      'fruit fly',
      'quarantine pest',
    ],
  },
  structuredData: { article: true },
};
