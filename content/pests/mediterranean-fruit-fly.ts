import type { PestContent } from '@/types/content';

export const mediterraneanFruitFly: PestContent = {
  id: 'pest-mediterranean-fruit-fly',
  slug: 'mediterranean-fruit-fly',
  contentType: 'pest',
  title: 'Mediterranean Fruit Fly',
  scientificName: 'Ceratitis capitata (Diptera: Tephritidae)',
  alternativeNames: ['Medfly'],
  category: 'Insect pest',
  subcategory: 'Fruit-infesting fly',
  pestGroup: 'Insect — Diptera (Tephritidae)',
  summary:
    'Mediterranean fruit fly is a highly damaging tephritid fruit fly with a very wide host range; females lay eggs in ripening fruit, and the maggots feed inside, making it a major quarantine pest of horticulture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mediterranean fruit fly, widely called the medfly, is one of the world’s most destructive fruit pests because of its very broad host range and its ability to establish in many warm and temperate climates. Females lay eggs beneath the skin of ripening fruit, and the maggots feed within, spoiling the fruit and opening it to rot.',
    },
    {
      type: 'paragraph',
      text: 'The medfly is a major quarantine concern that restricts trade in host fruit, and detections in fruit-free areas can trigger intensive eradication responses. Its management often involves area-wide programmes using monitoring, bait treatments, and the sterile-insect technique.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Diptera, family Tephritidae' },
    { label: 'Host range', value: 'Very broad across many fruit crops' },
    { label: 'Damaging stage', value: 'Larva (maggot) inside fruit' },
    {
      label: 'Key concern',
      value: 'Fruit spoilage and strict quarantine and trade limits',
    },
    {
      label: 'Management note',
      value: 'Managed by area-wide and sterile-insect programmes',
    },
    {
      label: 'Sign',
      value: 'Egg-laying punctures and maggots in softening fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, colourful flies with patterned wings, a habit typical of tephritid fruit flies. Larvae are pale, legless maggots found inside infested fruit. Because reliable species identification of tephritids can be difficult, suspected medfly finds are usually confirmed by specialists, often from trap catches.',
        },
        {
          type: 'paragraph',
          text: 'Field signs include small egg-laying punctures in the fruit skin, softening and premature colouring or dropping of fruit, and maggots and breakdown inside cut fruit. These signs, plus trap captures, are the basis for detection.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females insert eggs under the skin of host fruit, and the hatching maggots tunnel and feed inside before leaving the fruit to pupate, usually in the soil. Development is faster in warm weather, allowing several generations per year and continuous activity where host fruit is available across seasons.',
        },
        {
          type: 'paragraph',
          text: 'The very wide range of suitable hosts means that, in favourable climates, some fruit is often available to sustain populations through much of the year, which contributes to the pest’s persistence and spread.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Maggot feeding destroys the flesh of the fruit and provides entry for decay organisms, so infested fruit becomes unmarketable and often drops early. Beyond direct losses, the pest’s quarantine status can close markets to host fruit from infested areas, adding major economic costs through trade restrictions.',
        },
        {
          type: 'paragraph',
          text: 'The host range is very broad and includes citrus such as orange, lemon, and grapefruit, stone fruit such as peach and apricot, and tropical and subtropical fruit such as mango, guava, and fig, among many others.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Networks of baited traps are the primary tool for detecting and monitoring adult flies, and are used intensively in surveillance around production areas and ports. Fruit sampling for eggs and maggots complements trapping. In regulated areas, trap catches trigger defined quarantine and response actions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Medfly is managed most effectively through coordinated, area-wide programmes within integrated pest management, rather than by isolated treatment.',
        },
        {
          type: 'list',
          items: [
            'Support area-wide trapping and surveillance and follow quarantine requirements',
            'Practise sanitation by removing and destroying fallen and infested fruit that breed flies',
            'Use targeted bait applications and male-annihilation techniques where authorized',
            'Employ the sterile-insect technique as part of coordinated suppression or eradication where applied',
            'Use post-harvest treatments and certification to meet market access requirements',
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
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'apricot' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'guava' },
    { type: 'crop', slug: 'fig' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'farming-system', slug: 'organic-farming' },
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
    'Established in many warm and temperate fruit-growing regions and a major quarantine pest elsewhere; status and restrictions vary by region.',
  climateContext:
    'Warm conditions speed development and increase generations, while continuous availability of host fruit sustains populations year-round.',
  limitations: [
    'This is a general overview of the pest, not region-specific management or quarantine guidance.',
    'Thresholds, treatments, and quarantine actions are jurisdiction-specific and are not provided here.',
    'Species confirmation of tephritid fruit flies typically requires specialist identification.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-aphis',
      citedFor: 'Quarantine status and eradication response context',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Mediterranean Fruit Fly (Medfly)',
    description:
      'Mediterranean fruit fly (Ceratitis capitata, medfly): identification, biology, fruit damage, quarantine, monitoring, and area-wide management.',
    keywords: [
      'mediterranean fruit fly',
      'Ceratitis capitata',
      'medfly',
      'fruit fly quarantine',
    ],
  },
  structuredData: { article: true },
};
