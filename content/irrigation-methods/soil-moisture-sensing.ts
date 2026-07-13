import type { IrrigationMethodContent } from '@/types/content';

export const soilMoistureSensing: IrrigationMethodContent = {
  id: 'irrigation-method-soil-moisture-sensing',
  slug: 'soil-moisture-sensing',
  contentType: 'irrigation-method',
  title: 'Soil Moisture Sensing',
  alternativeNames: ['Soil moisture monitoring', 'Soil water sensing'],
  category: 'Irrigation method',
  subcategory: 'Irrigation-management practice',
  methodClass: 'management',
  summary:
    'Soil moisture sensing uses instruments placed in the root zone to measure how much water the soil holds or how tightly it holds it, providing the field data used to decide when and how much to irrigate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil moisture sensing is the measurement of soil water status in the crop root zone to guide irrigation decisions. Rather than relying only on a calendar or on visual judgement, growers install sensors that indicate either how much water the soil currently contains or how strongly the soil is holding that water, and use the readings to time and size irrigations.',
    },
    {
      type: 'paragraph',
      text: 'Sensors fall into two broad families: those that estimate volumetric water content (such as capacitance and time-domain reflectometry probes) and those that measure soil water tension or potential (such as tensiometers and granular matrix or gypsum blocks). Both are used as inputs to irrigation scheduling, often alongside weather-based estimates of crop water demand.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Irrigation-management practice' },
    {
      label: 'What it measures',
      value: 'Soil water content or soil water tension in the crop root zone',
    },
    {
      label: 'Two sensor families',
      value:
        'Water-content sensors (capacitance, TDR) and tension sensors (tensiometers, matric blocks)',
    },
    {
      label: 'Primary use',
      value: 'Deciding when to irrigate and, with interpretation, how much',
    },
    {
      label: 'Common pairing',
      value:
        'Combined with weather-based crop water-demand estimates for scheduling',
    },
    {
      label: 'Placement matters',
      value:
        'Sensors must sit in representative locations and depths to be meaningful',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'paragraph',
          text: 'Water-content sensors respond to a physical property of the soil that changes with moisture — for example how the soil affects an electrical signal — and are calibrated to estimate the fraction of the soil volume occupied by water. Tension sensors instead indicate how hard a plant must work to extract water, which relates directly to plant water availability. Readings can be taken manually or logged continuously and sent to software for interpretation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Water-content sensors',
              description:
                'Capacitance, time-domain reflectometry (TDR), and similar probes estimate the volumetric water content of the soil.',
            },
            {
              term: 'Tension (potential) sensors',
              description:
                'Tensiometers and granular matrix or gypsum blocks measure how tightly the soil holds water, reflecting how available it is to the crop.',
            },
          ],
        },
      ],
    },
    {
      id: 'using-the-data-for-scheduling',
      heading: 'Using the data for scheduling',
      body: [
        {
          type: 'paragraph',
          text: 'The point of sensing is to inform irrigation scheduling: readings show when soil water in the root zone has fallen to a level where the crop would benefit from irrigation, helping avoid both under-watering that stresses the crop and over-watering that wastes water and can cause leaching or waterlogging. Sensors at several depths help show how far down the crop is drawing water and whether irrigation is reaching, or passing beyond, the root zone.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil moisture data is most powerful combined with an estimate of crop water demand (for example from evapotranspiration) — the sensors show what the soil holds, while the demand estimate anticipates how fast it will be used.',
        },
      ],
    },
    {
      id: 'getting-reliable-readings',
      heading: 'Getting reliable readings',
      body: [
        {
          type: 'paragraph',
          text: 'Sensor readings are only as useful as their placement and interpretation. Sensors must be installed in soil representative of the field and in good contact with it, at depths that match the crop’s rooting, and their output is interpreted against the soil’s own water-holding behaviour. A single poorly placed sensor can be misleading, so representative siting and, for some sensor types, calibration are important.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Different soils hold water very differently, so the same numerical reading can mean different things in sand versus clay. Interpretation is soil-specific, not universal.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Soil moisture sensing adds equipment and management effort but can improve irrigation timing and water-use efficiency, and it fits naturally within precision-agriculture systems where data is logged and mapped. It complements rather than replaces field observation and knowledge of the crop and soil.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not specify sensor types, placement depths, or trigger thresholds for any crop or soil, which are site-specific; consult local guidance and sensor documentation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  connections: [
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'irrigation-method', slug: 'lateral-move-irrigation' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'General overview of soil moisture sensing as used in irrigation management worldwide. Sensor choice, placement, and interpretation depend on local soils and crops.',
  climateContext:
    'Soil moisture sensing is especially valuable where water is limited, as it helps match irrigation to actual root-zone water status as evaporative demand changes.',
  limitations: [
    'This entry describes soil moisture sensing in general terms; it does not specify sensor types, depths, or trigger thresholds, which are soil- and crop-specific.',
    'Readings depend on correct placement, contact, and interpretation, and the same value can mean different things in different soils.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil moisture monitoring for irrigation scheduling',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Soil water measurement and irrigation management',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Use of soil moisture data in irrigation decisions',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Moisture Sensing',
    description:
      'Soil moisture sensing explained: how content and tension sensors measure root-zone water to guide irrigation scheduling and improve water use.',
    keywords: [
      'soil moisture sensing',
      'soil moisture monitoring',
      'tensiometer',
      'irrigation scheduling',
    ],
  },
  structuredData: { article: true },
};
