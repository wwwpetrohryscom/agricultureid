import type { SoilTopicContent } from '@/types/content';

export const soilWaterRetention: SoilTopicContent = {
  id: 'soil-topic-soil-water-retention',
  slug: 'soil-water-retention',
  contentType: 'soil-topic',
  title: 'Soil Water Retention',
  topicClass: 'physical',
  alternativeNames: ['Water-holding capacity', 'Available water capacity'],
  category: 'Soil physical property',
  subcategory: 'Water storage',
  summary:
    'Soil water retention describes how much water a soil holds against gravity, and how much of that water is available for plant roots to extract. It depends on pore-size distribution, texture, and organic matter, and underpins irrigation and drought planning.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Water retention arises from capillary and adhesive forces that hold water within soil pores against the pull of gravity. Not all retained water is available to plants: some is held so tightly in the smallest pores that roots cannot extract it before wilting occurs.',
    },
    {
      type: 'paragraph',
      text: 'Two reference points are commonly used to describe this behavior: field capacity, the moisture remaining after gravitational drainage has largely finished, and the permanent wilting point, the moisture level below which a plant can no longer extract enough water to avoid wilting. The water held between these two points is termed available water capacity.',
    },
  ],
  keyFacts: [
    {
      label: 'Governed by',
      value: 'Pore-size distribution, texture, and organic matter content',
    },
    {
      label: 'Field capacity',
      value:
        'Moisture remaining after gravitational drainage (a concept, not a fixed value)',
    },
    {
      label: 'Permanent wilting point',
      value:
        'Moisture level below which a given plant can no longer extract enough water',
    },
    {
      label: 'Available water capacity',
      value:
        'Water held between field capacity and wilting point, usable by plants',
    },
    {
      label: 'Increased by',
      value: 'Higher organic matter content and finer texture, up to a point',
    },
    {
      label: 'Assessed via',
      value:
        'Laboratory moisture-retention curves, texture-based estimation, and field soil-moisture sensors',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What water retention is',
      body: [
        {
          type: 'paragraph',
          text: 'Water is held in soil pores by capillary action and adhesion to particle surfaces. Larger pores drain quickly under gravity, while progressively smaller pores hold water more tightly. The overall balance of pore sizes — shaped by texture and structure — determines how much water a soil can store and how easily that water can be released to roots.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Field capacity',
              description:
                'Soil moisture content after excess gravitational water has drained away.',
            },
            {
              term: 'Permanent wilting point',
              description:
                'Soil moisture level below which a plant cannot extract sufficient water to prevent lasting wilting; this varies somewhat by plant species.',
            },
            {
              term: 'Available water capacity',
              description:
                'The portion of stored water between field capacity and the wilting point that is usable by plants.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why water retention matters',
      body: [
        {
          type: 'paragraph',
          text: 'A soil’s available water capacity determines how long a crop can go between rainfall or irrigation events before experiencing water stress, making it central to irrigation scheduling and drought-risk assessment. Coarse, sandy soils typically hold less available water and require more frequent, lighter irrigation, while finer-textured soils can buffer longer intervals but may drain and aerate more slowly.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How water retention is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Laboratories can generate a soil moisture-retention curve by measuring water content at a series of applied pressures, giving a detailed picture of available water capacity. In practice, many assessments instead rely on texture-based estimation tools calibrated against measured soils, or on in-field sensors such as tensiometers and capacitance probes that track moisture over time.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Available water capacity figures from texture-class tables are estimates; measured values for a specific soil can differ, especially where organic matter or structure diverges from the typical case.',
        },
      ],
    },
    {
      id: 'organic-matter-and-compaction-effects',
      heading: 'Effects of organic matter and compaction',
      body: [
        {
          type: 'paragraph',
          text: 'Organic matter improves aggregation and adds pore space with favorable size distribution, generally increasing available water capacity in fine and coarse soils alike. Compaction, by contrast, can increase total water retained in fewer, smaller pores while reducing the plant-available fraction and restricting the rooting depth from which water can be drawn.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing water retention',
      body: [
        {
          type: 'paragraph',
          text: 'Management aims to protect and build the soil’s capacity to store plant-available water and to schedule irrigation around that capacity rather than a fixed calendar.',
        },
        {
          type: 'list',
          items: [
            'Add organic matter through compost, manure, or residue retention to improve available water capacity',
            'Use mulches to reduce surface evaporation and buffer soil moisture',
            'Relieve compaction so roots can access stored water throughout the profile',
            'Schedule irrigation using soil moisture monitoring or tools rather than a fixed calendar',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  connections: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'climate', slug: 'drought' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'biochar' },
  ],
  glossaryTerms: ['soil-texture', 'evapotranspiration'],
  geographicScope:
    'General soil-science overview applicable worldwide; retention values differ by soil and should be confirmed with local testing or reference data for the specific soil.',
  climateContext:
    'Evapotranspiration demand strongly affects how quickly stored water is depleted between rainfall or irrigation events.',
  limitations: [
    'Field capacity and wilting point are useful concepts, not fixed universal values; both vary with soil and, for wilting point, with plant species.',
    'Texture-based estimates of available water capacity are approximations; direct measurement is more reliable for a specific field.',
    'Irrigation needs depend on the crop, climate, and management system and are not addressed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil water retention and available water capacity',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil water storage concepts' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Irrigation scheduling and soil water use',
    },
    { sourceId: 'isric', citedFor: 'Global soil water-property data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Water Retention',
    description:
      'Soil water retention explained: field capacity, wilting point, and available water capacity, what drives them, and how to assess and manage them.',
    keywords: [
      'soil water retention',
      'available water capacity',
      'field capacity',
      'wilting point',
    ],
  },
  structuredData: { article: true },
};
