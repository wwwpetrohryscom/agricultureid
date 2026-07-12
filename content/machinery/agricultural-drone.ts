import type { MachineryContent } from '@/types/content';

export const agriculturalDrone: MachineryContent = {
  id: 'machinery-agricultural-drone',
  slug: 'agricultural-drone',
  contentType: 'machinery',
  title: 'Agricultural Drone',
  alternativeNames: ['Unmanned Aerial Vehicle (UAV)', 'Agricultural UAV'],
  category: 'Agricultural machinery',
  subcategory: 'Precision-agriculture equipment',
  machineryClass: 'precision',
  summary:
    'An agricultural drone is an unmanned aerial vehicle equipped with cameras, sensors, or spray systems, used to scout crops from above, capture imagery for mapping and stress detection, or apply crop-protection products to targeted areas.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Agricultural drones are small, typically multirotor unmanned aircraft flown over fields to capture aerial imagery or, on models built for the purpose, to spray liquid products. Their vantage point and manoeuvrability let them cover ground quickly and access areas that are difficult to scout or treat from the ground.',
    },
    {
      type: 'paragraph',
      text: 'Two broad uses dominate current agricultural drone practice: imaging drones that carry cameras or multispectral sensors for crop scouting, mapping, and stress detection, and spraying drones that carry a tank and nozzle system for targeted application of crop-protection products.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Aerial crop imaging/scouting or targeted spray application',
    },
    {
      label: 'Common sensors',
      value: 'RGB (visible-light), multispectral, and thermal cameras',
    },
    {
      label: 'Common uses',
      value:
        'Crop scouting, stand-count and stress mapping, and precision spraying',
    },
    {
      label: 'Typical platform',
      value: 'Multirotor unmanned aircraft, often battery-powered',
    },
    {
      label: 'Regulatory context',
      value:
        'Operation is generally subject to aviation-authority rules and licensing',
    },
    {
      label: 'Complementary role',
      value:
        'Provides data or targeted treatment used alongside ground scouting and equipment',
    },
  ],
  sections: [
    {
      id: 'what-an-agricultural-drone-is',
      heading: 'What an agricultural drone is',
      body: [
        {
          type: 'paragraph',
          text: 'An agricultural drone is a remotely piloted or autonomously flown aircraft, generally a multirotor design, equipped for either data capture or product application over cropland. It is one part of the broader set of precision-agriculture tools that gather field-level information or apply inputs at fine spatial resolution.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          items: [
            'Imaging drones fly a pre-planned flight path over a field, capturing overlapping photos or sensor readings',
            'Captured imagery is stitched and processed into maps showing plant stand, canopy vigour, or stress patterns',
            'Spraying drones carry a tank, pump, and nozzles, applying product to a targeted area guided by GPS waypoints',
            'Flight planning and, in many cases, autonomous or semi-autonomous navigation are managed through companion software',
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
          text: 'Drones are used throughout the season for scouting: identifying emergence gaps, mapping weed patches, and flagging areas of crop stress that may indicate pest, disease, nutrient, or water issues for ground follow-up. Spraying drones can then apply treatment to identified problem areas, which is particularly useful on sloped, wet, or otherwise hard-to-access terrain.',
        },
        {
          type: 'paragraph',
          text: 'Because they generate spatial data quickly and repeatably, drones support the broader precision-agriculture workflow of mapping variability within a field and directing inputs where they are needed rather than applying them uniformly.',
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
              term: 'Imaging (mapping) drone',
              description:
                'Carries RGB, multispectral, or thermal cameras for scouting and mapping',
            },
            {
              term: 'Spraying drone',
              description:
                'Carries a tank and nozzle system for targeted product application',
            },
            {
              term: 'Fixed-wing drone',
              description:
                'Covers larger areas per flight, used mainly for imaging over extensive acreage',
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
          text: 'Battery flight time, payload capacity, sensor quality, and weather conditions such as wind all constrain what a given drone can cover and how reliable its data or application is in a single flight. Operators are generally required to follow national aviation-authority regulations covering registration, pilot licensing, and airspace restrictions.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Rules governing drone operation and, particularly, aerial spraying vary by country and are updated frequently; confirm current regulatory requirements with the relevant national aviation and agricultural authorities before operating.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  connections: [
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'climate', slug: 'drought' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'General overview of agricultural drone use for imaging and spraying worldwide. Regulatory frameworks and adoption levels vary considerably by country.',
  limitations: [
    'This entry describes drone function and use cases in general terms; it does not cover specific regulations, which vary by country and change over time.',
    'Sensor and platform capability varies widely by model and is not specified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Remote-sensing and drone research context',
    },
    { sourceId: 'iastate-extension', citedFor: 'Drone use in crop scouting' },
    {
      sourceId: 'fao',
      citedFor: 'Role of digital and precision tools in agriculture',
    },
    { sourceId: 'ahdb', citedFor: 'Precision-agriculture technology context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Agricultural Drone',
    description:
      'Agricultural drones explained: how imaging and spraying UAVs support crop scouting, stress mapping, and targeted application in precision farming.',
    keywords: [
      'agricultural drone',
      'UAV farming',
      'crop scouting drone',
      'precision agriculture',
    ],
  },
  structuredData: { article: true },
};
