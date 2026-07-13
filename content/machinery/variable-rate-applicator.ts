import type { MachineryContent } from '@/types/content';

export const variableRateApplicator: MachineryContent = {
  id: 'machinery-variable-rate-applicator',
  slug: 'variable-rate-applicator',
  contentType: 'machinery',
  title: 'Variable-Rate Applicator',
  alternativeNames: ['Variable-rate application system', 'VRA equipment'],
  category: 'Agricultural machinery',
  subcategory: 'Precision-agriculture equipment',
  machineryClass: 'precision',
  summary:
    'A variable-rate applicator adjusts the application rate of an input — such as seed, fertilizer, lime, or pesticide — automatically across a field, following a prescription map or real-time sensor data rather than applying a single uniform rate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Variable-rate application (VRA) is the technology that lets a spreader, drill, or sprayer change how much it applies as it moves across a field, so that different zones receive rates matched to their needs. Instead of treating the whole field uniformly, the equipment increases or decreases output in response to a pre-loaded prescription map or to sensors reading crop or soil conditions on the go.',
    },
    {
      type: 'paragraph',
      text: 'VRA is a core component of precision agriculture. It builds on positioning (GPS/GNSS) and controllers that translate a map location into a target rate, driving the metering system of the implement accordingly. The aim is to place inputs where they give most benefit, potentially improving efficiency and reducing over-application in low-need areas.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Adjusting input application rates automatically across a field',
    },
    {
      label: 'Inputs commonly varied',
      value: 'Seed, fertilizer, lime, and crop-protection products',
    },
    {
      label: 'Two main approaches',
      value:
        'Map-based (prescription maps) and sensor-based (real-time readings)',
    },
    {
      label: 'Enabling technologies',
      value:
        'GNSS positioning, rate controllers, and variable-rate metering systems',
    },
    {
      label: 'Data foundation',
      value:
        'Relies on soil sampling, yield data, imagery, or sensors to define needs',
    },
    {
      label: 'Intended benefit',
      value:
        'Matching inputs to spatial variation rather than treating fields uniformly',
    },
  ],
  sections: [
    {
      id: 'what-variable-rate-application-is',
      heading: 'What variable-rate application is',
      body: [
        {
          type: 'paragraph',
          text: 'Variable-rate application is the practice, and the equipment, that vary input rates within a field according to mapped or sensed differences in soil and crop conditions. Rather than a distinct machine, VRA is usually a capability added to spreaders, drills, planters, and sprayers through rate controllers and compatible metering systems.',
        },
        {
          type: 'paragraph',
          text: 'It rests on the idea that fields are not uniform: soil fertility, texture, moisture, and yield potential vary spatially, so a single field-wide rate over-applies in some places and under-applies in others. VRA aims to align application with that variation.',
        },
      ],
    },
    {
      id: 'map-based-and-sensor-based-approaches',
      heading: 'Map-based and sensor-based approaches',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Map-based VRA',
              description:
                'A prescription map, built beforehand from soil tests, yield history, or imagery, tells the controller what rate to apply at each location as the machine passes over it, guided by positioning.',
            },
            {
              term: 'Sensor-based VRA',
              description:
                'On-the-go sensors measure a crop or soil property in real time (for example canopy reflectance) and the controller adjusts the rate immediately, without a pre-made map.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The two approaches can also be combined, using a base map refined by live sensor readings during application.',
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
            'Field variation is characterised through soil sampling, yield maps, imagery, or sensors',
            'A prescription map is created, or a sensor system is configured, to define target rates',
            'A GNSS receiver tracks the machine’s position in the field',
            'A rate controller matches the position to the prescribed or sensed rate',
            'The implement’s metering system changes output on the move to hit the target rate',
          ],
        },
      ],
    },
    {
      id: 'considerations-and-limitations',
      heading: 'Considerations and limitations',
      body: [
        {
          type: 'paragraph',
          text: 'The value of VRA depends on whether within-field variation is large enough, and well enough understood, to justify varying inputs, and on the quality of the underlying data. Equipment compatibility, controller calibration, and accurate maps all affect results, and benefits vary widely between fields and inputs.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not claim specific input savings or yield gains from variable-rate application. Outcomes depend on the field, the input, data quality, and management, and are not generalised here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'machinery', slug: 'agricultural-drone' },
    { type: 'machinery', slug: 'fertilizer-spreader' },
  ],
  connections: [
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'machinery', slug: 'fertilizer-spreader' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'planter' },
    { type: 'machinery', slug: 'self-propelled-sprayer' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  glossaryTerms: ['agronomy'],
  geographicScope:
    'General overview of variable-rate application technology as used in precision agriculture worldwide. Its value depends on local field variability, data, and economics.',
  limitations: [
    'This entry describes VRA in general terms; it does not claim specific input savings or yield effects, which depend on field variability, data quality, and management.',
    'Benefits require sufficient within-field variation and reliable underlying data; VRA is not automatically advantageous on uniform fields.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Precision nutrient management and variable-rate practice',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Precision-farming and variable-rate application context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of precision technologies in input use efficiency',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Variable-Rate Applicator',
    description:
      'Variable-rate application explained: how map-based and sensor-based systems adjust seed, fertilizer, and pesticide rates across a field.',
    keywords: [
      'variable-rate application',
      'VRA',
      'precision agriculture',
      'prescription maps',
    ],
  },
  structuredData: { article: true },
};
