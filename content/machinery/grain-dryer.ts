import type { MachineryContent } from '@/types/content';

export const grainDryer: MachineryContent = {
  id: 'machinery-grain-dryer',
  slug: 'grain-dryer',
  contentType: 'machinery',
  title: 'Grain Dryer',
  category: 'Agricultural machinery',
  subcategory: 'Post-harvest grain-drying equipment',
  machineryClass: 'harvest',
  summary:
    'A grain dryer reduces the moisture content of freshly harvested grain to a level safe for storage, using heated or ambient air passed through the grain mass, protecting it from mould, insect damage, and spoilage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A grain dryer lowers the moisture content of harvested grain — such as maize, rice, or wheat — from the level at which it is combined to a target moisture safe for extended storage. Grain harvested at higher moisture, whether to allow earlier or more timely harvest or because of humid conditions, is at greater risk of mould growth, heating, and insect activity if stored without adequate drying.',
    },
    {
      type: 'paragraph',
      text: 'Drying works by passing a controlled airflow, heated to varying degrees depending on dryer type, through or across a mass of grain, carrying away moisture as air moves through the grain bed. Because excessive heat can damage grain quality (such as germination or milling characteristics), drying temperature and airflow are matched to the grain type and its end use.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Reducing grain moisture content to a safe level for storage',
    },
    {
      label: 'Key components',
      value:
        'Heat source (or ambient-air fan), plenum, and grain-holding bin or column',
    },
    {
      label: 'Common crops',
      value: 'Maize, rice, wheat, and other cereal and oilseed crops',
    },
    {
      label: 'Common configurations',
      value: 'Batch, continuous-flow, and in-bin (ambient or low-heat) dryers',
    },
    {
      label: 'Risk addressed',
      value: 'Mould growth, grain heating, and insect activity in stored grain',
    },
    {
      label: 'Operating consideration',
      value:
        'Airflow and temperature are set to the grain type and target end use',
    },
  ],
  sections: [
    {
      id: 'what-a-grain-dryer-is',
      heading: 'What a grain dryer is',
      body: [
        {
          type: 'paragraph',
          text: 'A grain dryer is a post-harvest processing tool rather than a field machine, typically installed at or near a grain storage site, and its role is to bring freshly harvested grain down to a moisture content that microorganisms and insects cannot readily exploit during storage.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Wet grain is loaded into a drying bin, column, or batch chamber',
            'Air, heated to a set temperature or used at ambient conditions, is forced through the grain mass',
            'Moisture is carried away in the airflow as it passes through or across the grain',
            'Grain is monitored and, in batch and continuous-flow systems, moved or discharged once target moisture is reached',
            'Dried grain is typically cooled before or during transfer to storage',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Drying is the link between harvest and safe storage: it allows grain to be harvested at a moisture content suited to field conditions and machine efficiency, rather than waiting in the field for natural dry-down, which carries its own risks from weather and pest exposure. In humid climates or during wet harvest seasons, drying capacity can be a limiting factor on how quickly grain can be harvested and moved off the field.',
        },
        {
          type: 'paragraph',
          text: 'Correctly dried and cooled grain is far less prone to spoilage in storage, protecting crop value between harvest and eventual sale, processing, or use.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Batch dryer',
              description:
                'Dries a fixed quantity of grain at a time before unloading and reloading.',
            },
            {
              term: 'Continuous-flow dryer',
              description:
                'Grain moves continuously through the dryer, allowing higher-volume, ongoing operation.',
            },
            {
              term: 'In-bin (natural-air or low-heat) dryer',
              description:
                'Uses ambient or slightly warmed air blown up through grain in a storage bin, drying more slowly over an extended period.',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Drying temperature that is too high for the grain type or end use can reduce seed germination, damage grain for milling or brewing, or create stress cracks, while insufficient drying leaves grain vulnerable to spoilage. Energy use for heated-air drying is also a significant operating cost, particularly at high moisture removal volumes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Target moisture levels and safe drying temperatures are crop- and end-use-specific; local extension and grain-storage guidance should inform drying decisions rather than a single fixed setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'thresher' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
  ],
  geographicScope:
    'General overview of grain dryers as used in post-harvest handling worldwide. Dryer type and scale vary with climate, crop, and farm or facility size.',
  limitations: [
    'This entry describes grain-dryer function and types in general terms; it does not specify target moisture levels or drying temperatures, which are crop- and end-use-specific.',
    'Energy source and drying capacity vary widely by region and facility and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Grain drying principles and dryer types',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest grain quality and storage research',
    },
    { sourceId: 'ahdb', citedFor: 'Grain storage and drying guidance context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of grain drying in reducing post-harvest loss',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Grain Dryer',
    description:
      'Grain dryers explained: how heated or ambient airflow reduces grain moisture for safe storage, plus their post-harvest role and main dryer types.',
    keywords: [
      'grain dryer',
      'grain drying',
      'post-harvest handling',
      'grain storage',
    ],
  },
  structuredData: { article: true },
};
