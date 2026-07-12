import type { PestContent } from '@/types/content';

export const fruitFlies: PestContent = {
  id: 'pest-fruit-flies',
  slug: 'fruit-flies',
  contentType: 'pest',
  title: 'Fruit Flies',
  scientificName:
    'Family Tephritidae (order Diptera), including Bactrocera, Ceratitis, and related genera',
  alternativeNames: ['True fruit flies', 'Tephritid fruit flies'],
  category: 'Insect pest',
  subcategory: 'Fruit-infesting fly',
  pestGroup: 'Insect — Diptera (Tephritidae)',
  summary:
    'Fruit flies (family Tephritidae) are flies whose larvae develop inside ripening fruit, causing internal damage, rot, and premature drop in mango, orange, cucumber, and olive, and are subject to strict quarantine controls in many regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'True fruit flies (Tephritidae) are a large family of flies whose larvae, rather than the adults, cause the economic damage. Females puncture the skin of ripening or ripe fruit to lay eggs, and the maggots that hatch feed inside the flesh, often unnoticed until the fruit softens, discolours, or drops.',
    },
    {
      type: 'paragraph',
      text: 'Several genera, including Bactrocera and Ceratitis, are major quarantine pests because larvae can be transported inside apparently sound fruit, so international and domestic trade in host fruit is often restricted or regulated where these species occur.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Flies, order Diptera, family Tephritidae',
    },
    {
      label: 'Feeding',
      value:
        'Larvae feed inside fruit flesh; adults feed on nectar and honeydew',
    },
    {
      label: 'Key concern',
      value:
        'Internal fruit damage, rot, premature drop, and trade restrictions',
    },
    {
      label: 'Egg-laying',
      value: 'Females puncture fruit skin to insert eggs beneath the surface',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predatory ants, and some fungal pathogens',
    },
    {
      label: 'Sign',
      value:
        'Small puncture marks, internal maggots, soft or discoloured fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult tephritid flies are typically patterned with dark markings on clear or banded wings and are smaller than house flies. Larvae are legless, creamy-white maggots found feeding inside fruit, and are usually detected by cutting open suspect fruit rather than by seeing adults directly.',
        },
        {
          type: 'paragraph',
          text: 'Early external signs include small, discoloured puncture marks (oviposition stings) on the fruit surface, sometimes followed by resin or fluid oozing from the site.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females insert eggs just beneath the fruit skin; larvae hatch and feed within the fruit through several instars, then drop to the soil to pupate. Adults emerge from the soil to mate and seek new host fruit, and multiple generations can occur across a fruiting season in warm climates.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding breaks down fruit tissue, often allowing secondary decay organisms to enter, and heavily infested fruit softens, discolours, and drops prematurely. Damage frequently is not visible from the outside until infestation is advanced.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include mango, orange, cucumber, and olive, along with many other fruiting and cucurbit crops, with the specific species and host range varying by region.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Traps baited with food or pheromone lures are widely used to detect adult flies and track population trends ahead of and during fruit ripening, supporting decisions on timing and area-wide programmes.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit fly management typically combines several tactics, often coordinated at an area-wide scale because adults are mobile between orchards and host plants.',
        },
        {
          type: 'list',
          items: [
            'Use trapping and lures to monitor and, where appropriate, mass-trap adult flies',
            'Collect and destroy fallen and infested fruit to break the larval-to-pupal cycle',
            'Conserve parasitoid wasps and other natural enemies',
            'Follow quarantine and phytosanitary requirements for fruit movement where these pests are regulated',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any bait spray or insecticide use must follow current, locally authorized recommendations and product labels, and quarantine requirements vary by jurisdiction. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'olive' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found across tropical and subtropical fruit- and vegetable-growing regions worldwide; species present, host range, and quarantine status vary considerably by country.',
  climateContext:
    'Warm, humid conditions generally support faster development and more generations per year, and seasonal rainfall patterns can influence fruiting and infestation timing.',
  limitations: [
    'This is a general overview of a large family spanning many pest species, not species-level guidance for a specific crop, region, or quarantine status.',
    'Trapping thresholds, bait formulations, and quarantine rules are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'eppo-gd',
      citedFor: 'Species nomenclature, distribution, and quarantine status',
    },
    { sourceId: 'usda-aphis', citedFor: 'Quarantine and regulatory context' },
    { sourceId: 'fao', citedFor: 'Fruit fly management and trade context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fruit Flies',
    description:
      'Fruit flies (Tephritidae) explained: egg-laying and larval feeding inside fruit, damage signs, trap-based monitoring, and integrated management.',
    keywords: [
      'fruit flies',
      'Tephritidae',
      'Bactrocera',
      'fruit fly quarantine',
    ],
  },
  structuredData: { article: true },
};
