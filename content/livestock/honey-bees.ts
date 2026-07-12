import type { LivestockContent } from '@/types/content';

export const honeyBees: LivestockContent = {
  id: 'livestock-honey-bees',
  slug: 'honey-bees',
  contentType: 'livestock',
  title: 'Honey Bees',
  scientificName: 'Apis mellifera',
  alternativeNames: ['Western honey bee', 'Managed honey bee colonies'],
  category: 'Livestock',
  subcategory: 'Managed pollinator (social insect)',
  primaryProducts: [
    'Honey',
    'Beeswax',
    'Pollination services',
    'Propolis and royal jelly (minor products)',
  ],
  productionSystems: [
    'Fixed-apiary (stationary) beekeeping',
    'Migratory / pollination-service beekeeping',
    'Smallholder and backyard beekeeping',
  ],
  summary:
    'Honey bees are managed social insects kept in hives for honey and wax production and, increasingly, for the pollination services their colonies provide to many crops. Colony health depends on forage availability, disease and pest management, and beekeeping practices that vary from backyard hives to large migratory operations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Honey bees (Apis mellifera) are the most widely managed pollinator insect, kept in hives (apiaries) for honey, beeswax, and other hive products, and increasingly valued for the pollination services their colonies provide to many flowering crops. Unlike vertebrate livestock, a honey bee colony is managed as a superorganism — a single, cohesive unit built around one queen, thousands of workers, and, seasonally, drones.',
    },
    {
      type: 'paragraph',
      text: 'Beekeeping ranges from small backyard or smallholder apiaries kept mainly for honey, to large commercial and migratory operations that move hives between crops to provide contracted pollination services as well as produce honey. Colony productivity and survival depend heavily on the availability of diverse flowering forage, weather, and management of pests and diseases.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Apis mellifera (Western honey bee)' },
    {
      label: 'Unit of management',
      value:
        'The colony (queen, workers, and seasonal drones), not the individual bee',
    },
    {
      label: 'Primary products',
      value: 'Honey, beeswax, and pollination services',
    },
    {
      label: 'Feed base',
      value:
        'Nectar and pollen from flowering plants; supplemental feeding in dearth periods',
    },
    {
      label: 'Main systems',
      value: 'Stationary and migratory (pollination-service) beekeeping',
    },
    {
      label: 'Ecological role',
      value:
        'Managed pollinator for many fruit, vegetable, oilseed, and seed crops',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Beekeeping serves two closely linked purposes: producing honey and other hive products, and providing pollination services that support the yield and quality of many insect-pollinated crops. Some operations focus mainly on honey production from relatively stationary apiaries, while others are built around migratory pollination contracts, moving hives seasonally to align with crop flowering.',
        },
      ],
    },
    {
      id: 'colony-biology-and-management',
      heading: 'Colony biology and management',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Queen',
              description:
                'The colony’s sole reproductive female; her presence, pheromones, and egg-laying underpin colony cohesion, growth, and replacement (requeening).',
            },
            {
              term: 'Workers',
              description:
                'Sterile female bees that forage, nurse brood, build comb, and defend the hive, with tasks changing as they age.',
            },
            {
              term: 'Drones',
              description:
                'Seasonal males whose sole role is mating with queens from other colonies.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Routine management includes regular hive inspections, monitoring for swarming behaviour, and maintaining or replacing queens to sustain colony strength across the season.',
        },
      ],
    },
    {
      id: 'forage-and-feeding',
      heading: 'Forage and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Honey bee colonies depend on nectar — an energy source, concentrated into honey — and pollen, a protein, lipid, and micronutrient source used to rear brood, gathered from flowering plants within flight range of the hive. Because forage availability shifts through the season and across landscapes, colonies can experience periods of abundance and periods of dearth, and beekeepers may provide supplemental sugar syrup or pollen substitute during shortages or to support colony build-up.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutritional needs shift with colony size, season, and brood-rearing demand. Regional beekeeping extension guidance and experienced local beekeepers are the best source for feeding and management timing.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and colony welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Colony health depends on adequate forage, protection from pesticide exposure, and management of pests and diseases such as Varroa mites and brood diseases, several of which are notifiable in many countries because of their capacity to spread between colonies and regions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Regulatory and professional guidance',
          text: 'Bee health, permitted treatments, and apiary registration are governed by regional regulations and animal or plant health authorities. AgricultureID does not provide treatment instructions; follow local law and consult qualified apiary inspection or veterinary guidance.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond honey and wax, managed honey bee colonies provide pollination services that support the productivity of many fruit, vegetable, oilseed, and seed crops, making beekeeping both a product in its own right and an input to broader crop production. Colony losses linked to pests, disease, forage loss, and pesticide exposure are an active area of research and policy attention in many regions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'goats' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global overview; forage availability, seasonal management, and beekeeping regulations vary widely by region and climate.',
  climateContext:
    'Colony activity and forage availability are strongly seasonal and climate-dependent, from year-round tropical foraging to temperate regions with a dormant winter cluster period.',
  limitations: [
    'This is a general species and management overview, not a beekeeping how-to or region-specific husbandry guide.',
    'Pest, disease, and treatment guidance is governed by local regulation and professional advice and is not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Pollinators, pollination services, and apiculture',
    },
    { sourceId: 'usda-ars', citedFor: 'Honey bee biology and health research' },
    { sourceId: 'woah', citedFor: 'Bee disease and animal health standards' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Applied beekeeping and pollination guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Honey Bees',
    description:
      'A reference on honey bees: colony biology, forage and feeding, colony health, and the honey production and crop pollination services they provide.',
    keywords: ['honey bees', 'Apis mellifera', 'pollination', 'beekeeping'],
  },
  structuredData: { article: true },
};
