import type { MachineryContent } from '@/types/content';

export const combineHarvester: MachineryContent = {
  id: 'machinery-combine-harvester',
  slug: 'combine-harvester',
  contentType: 'machinery',
  title: 'Combine Harvester',
  alternativeNames: ['Combine'],
  category: 'Agricultural machinery',
  subcategory: 'Harvesting equipment',
  machineryClass: 'harvest',
  summary:
    'A combine harvester is a self-propelled machine that cuts, threshes, separates, and cleans grain and oilseed crops in a single pass, combining operations that were once performed by several separate machines.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The combine harvester takes its name from combining the harvesting steps of reaping (cutting the crop), threshing (separating grain from the plant), and winnowing or cleaning (removing chaff and debris) into one continuous operation performed while the machine moves across the field.',
    },
    {
      type: 'paragraph',
      text: 'Combines are built around interchangeable front-end headers suited to different crops, feeding harvested material into an internal threshing and separating mechanism, then storing clean grain in an onboard tank for periodic unloading into a trailer or truck.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Cutting, threshing, separating, and cleaning grain in one pass',
    },
    {
      label: 'Key components',
      value:
        'Header, threshing cylinder/rotor, separating and cleaning systems, grain tank',
    },
    { label: 'Common crops', value: 'Cereals, oilseeds, and grain legumes' },
    {
      label: 'Propulsion',
      value: 'Self-propelled, typically wheeled or tracked',
    },
    {
      label: 'Header types',
      value:
        'Grain (cereal) header, draper header, corn (row-crop) header, among others',
    },
    {
      label: 'Operating consideration',
      value:
        'Header choice and settings are matched to the crop and its condition',
    },
  ],
  sections: [
    {
      id: 'what-a-combine-harvester-is',
      heading: 'What a combine harvester is',
      body: [
        {
          type: 'paragraph',
          text: 'A combine harvester is a large, self-propelled machine purpose-built for gathering mature grain and oilseed crops efficiently at scale. It replaced the historical sequence of separate reaping, stooking, threshing, and winnowing operations with a single continuous process.',
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
            'The header cuts or gathers the standing crop and feeds it into the machine',
            'A threshing mechanism (cylinder-and-concave or rotor design) separates grain from stalks and heads',
            'Straw walkers or rotary separators recover remaining loose grain from the residue',
            'Cleaning shoe and fans winnow chaff and light material from the grain using airflow and sieves',
            'Clean grain is elevated into an onboard tank; straw and chaff are discharged or spread behind the machine',
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
          text: 'The combine harvester marks the culmination of a grain or oilseed crop’s field life, converting a standing crop into stored, marketable grain. Timeliness matters: harvesting at the correct crop moisture and maturity affects grain quality, storability, and field losses, and combine capacity often sets the pace of the whole harvest operation.',
        },
        {
          type: 'paragraph',
          text: 'Residue left behind by the combine — straw and chaff — also feeds into subsequent operations, whether baled for livestock bedding and feed, incorporated by tillage, or retained on the surface as part of a conservation-tillage system.',
        },
      ],
    },
    {
      id: 'header-types-and-variations',
      heading: 'Header types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Grain (cereal) header',
              description:
                'A cutter-bar header for wheat, barley, and similar close-standing cereals',
            },
            {
              term: 'Draper header',
              description:
                'Uses moving belts rather than an auger to feed cut material gently into the machine',
            },
            {
              term: 'Row-crop (corn) header',
              description:
                'Individual row units that strip or snap ears from stalks, used for maize',
            },
            {
              term: 'Flexible/floating cutter-bar header',
              description:
                'Follows ground contour closely, useful for low-podding crops such as soybean',
            },
          ],
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Combine settings — cylinder or rotor speed, concave clearance, and fan and sieve adjustment — are tuned to the specific crop and its moisture content to balance threshing effectiveness against grain damage and losses. Because combines are large and heavy, they can also contribute to soil compaction, particularly when field traffic occurs on wet soil.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Optimal harvest moisture, header choice, and machine settings vary by crop, variety, and region; consult crop- and region-specific guidance rather than a single universal setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  geographicScope:
    'General overview of combine harvesters as used in mechanised grain and oilseed production worldwide. Header types and settings are adapted to regional crops and conditions.',
  limitations: [
    'This entry describes combine function and components in general terms; it does not specify harvest-moisture targets or machine settings, which are crop- and variety-specific.',
    'Field-loss and grain-damage figures vary with machine, crop, and operating conditions and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Combine harvester operation and settings',
    },
    { sourceId: 'usda-nass', citedFor: 'Grain harvest statistics context' },
    { sourceId: 'usda-ars', citedFor: 'Harvest machinery research context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of mechanised harvest in grain production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Combine Harvester',
    description:
      'Combine harvesters explained: how cutting, threshing, separating, and cleaning combine into one pass, header types, and their role in grain harvest.',
    keywords: [
      'combine harvester',
      'grain harvest',
      'harvesting machinery',
      'header types',
    ],
  },
  structuredData: { article: true },
};
