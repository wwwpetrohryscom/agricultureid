import type { SoilTopicContent } from '@/types/content';

export const waterlogging: SoilTopicContent = {
  id: 'soil-topic-waterlogging',
  slug: 'waterlogging',
  contentType: 'soil-topic',
  title: 'Waterlogging',
  topicClass: 'physical',
  alternativeNames: ['Soil saturation', 'Excess soil water'],
  category: 'Soil physical condition',
  subcategory: 'Excess water',
  summary:
    'Waterlogging is the saturation of soil pore space with water for a period long enough to displace air and restrict root and microbial oxygen supply, arising from poor drainage, heavy rainfall, over-irrigation, or a shallow water table.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Waterlogging occurs when water fills soil pore space faster than it can drain, infiltrate deeper, or evaporate, leaving roots and soil organisms without adequate oxygen. It can be temporary, following a heavy rain or irrigation event, or persistent, where drainage is chronically poor or a water table sits close to the surface.',
    },
    {
      type: 'paragraph',
      text: 'Sensitivity to waterlogging varies considerably by crop: some species tolerate or even require periods of saturation, such as rice grown under flooded conditions, while many other crops suffer rapid root damage and yield loss under waterlogged conditions lasting more than a short period.',
    },
  ],
  keyFacts: [
    {
      label: 'Cause',
      value:
        'Poor drainage, heavy rainfall, over-irrigation, or a shallow water table',
    },
    {
      label: 'Core effect',
      value: 'Displaces soil air, restricting root and microbial oxygen supply',
    },
    {
      label: 'Assessed by',
      value:
        'Field observation of ponding, soil colour mottling, and drainage surveys',
    },
    {
      label: 'Crop sensitivity',
      value: 'Highly variable; some crops tolerate saturation, most do not',
    },
    {
      label: 'Most vulnerable soils',
      value: 'Fine-textured or compacted soils with slow internal drainage',
    },
    {
      label: 'Managed by',
      value:
        'Surface and subsurface drainage, avoiding compaction, and irrigation scheduling',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What waterlogging is',
      body: [
        {
          type: 'paragraph',
          text: 'Waterlogging is a condition rather than a single fixed threshold: it describes soil pore space remaining saturated, or very nearly so, for long enough that oxygen supply to roots and aerobic soil organisms becomes limiting. How quickly this becomes damaging depends on temperature, soil type, and the crop involved.',
        },
        {
          type: 'list',
          items: [
            'Surface waterlogging: standing or slow-draining water at or near the soil surface',
            'Subsurface waterlogging: saturation within the root zone even without visible surface water, often linked to a high water table',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why waterlogging matters',
      body: [
        {
          type: 'paragraph',
          text: 'Waterlogged, oxygen-depleted soil impairs root respiration, nutrient and water uptake, and can trigger root death in sensitive species within a period of hours to a few days depending on temperature and species. Anaerobic conditions also favour different microbial processes, including denitrification, which can increase nitrogen loss, and can promote some root-disease organisms.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Warmer temperatures generally shorten the time a waterlogged soil takes to become damaging, since oxygen demand and depletion both proceed faster in warm conditions.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How waterlogging is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Waterlogging is often identified through direct field observation of standing water or slow infiltration after rain or irrigation, through soil profile inspection for grey or mottled colours that indicate a history of saturation, and through monitoring of water-table depth where a shallow water table is a contributing factor.',
        },
      ],
    },
    {
      id: 'influencing-factors',
      heading: 'Factors influencing waterlogging risk',
      body: [
        {
          type: 'table',
          caption:
            'General factors affecting waterlogging risk (not universal figures)',
          columns: ['Factor', 'General influence'],
          rows: [
            [
              'Soil texture and structure',
              'Fine-textured or compacted soils generally drain more slowly, increasing risk',
            ],
            [
              'Landscape position',
              'Low-lying or poorly drained areas generally accumulate more water',
            ],
            [
              'Rainfall and irrigation management',
              'Heavy rainfall or over-irrigation relative to soil drainage capacity increases risk',
            ],
            [
              'Water-table depth',
              'A shallow water table generally raises the risk of subsurface saturation',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing waterlogging',
      body: [
        {
          type: 'paragraph',
          text: 'Management generally focuses on removing excess water more quickly, through surface or subsurface drainage systems, and on avoiding practices that slow drainage further, such as compaction from field traffic on wet soil.',
        },
        {
          type: 'list',
          items: [
            'Install or maintain surface drains and subsurface tile drainage where chronic waterlogging occurs',
            'Avoid heavy field traffic on wet soil, which compacts pores and slows drainage',
            'Schedule irrigation to match crop demand and avoid over-application',
            'Select waterlogging-tolerant crops or varieties on sites where drainage cannot be fully corrected',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Appropriate drainage design and crop choice depend on site-specific soil, landscape, and climate conditions; there is no single universal solution.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
  ],
  geographicScope:
    'General soil-science overview applicable worldwide; waterlogging risk depends strongly on local soil drainage, landscape position, rainfall, and irrigation practice.',
  climateContext:
    'Regions with intense or prolonged rainfall, or with high water tables, face greater waterlogging risk; warmer temperatures shorten the time to crop damage once saturated.',
  limitations: [
    'Crop tolerance to waterlogging varies substantially by species and even variety and is not exhaustively covered here.',
    'The time to damaging effects depends on temperature, soil type, and crop and is not quantified with a single figure here.',
    'Drainage solutions are site-specific; this entry describes general principles rather than engineering design guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil drainage, waterlogging, and management',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil water excess and crop response' },
    { sourceId: 'isric', citedFor: 'Global soil drainage class data' },
    { sourceId: 'ahdb', citedFor: 'Waterlogging management in field crops' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Waterlogging',
    description:
      'Waterlogging in soil explained: causes, effects on root oxygen supply and crops, how it is assessed, and drainage and management approaches.',
    keywords: [
      'waterlogging soil',
      'soil saturation',
      'poor drainage crops',
      'excess soil water',
    ],
  },
  structuredData: { article: true },
};
