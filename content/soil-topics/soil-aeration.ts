import type { SoilTopicContent } from '@/types/content';

export const soilAeration: SoilTopicContent = {
  id: 'soil-topic-soil-aeration',
  slug: 'soil-aeration',
  contentType: 'soil-topic',
  title: 'Soil Aeration',
  topicClass: 'physical',
  alternativeNames: ['Soil air exchange'],
  category: 'Soil physical property',
  subcategory: 'Gas exchange',
  summary:
    'Soil aeration is the exchange of oxygen and carbon dioxide between the soil and the atmosphere through pore space, essential for root respiration and aerobic microbial activity, and strongly reduced by compaction or waterlogging.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil aeration describes how readily oxygen diffuses into the soil profile and carbon dioxide and other gases diffuse out, a process that depends on the volume, size, and continuity of air-filled pore space. Roots and most soil microorganisms require oxygen for respiration, making adequate aeration essential to root and soil biological function.',
    },
    {
      type: 'paragraph',
      text: 'Aeration is closely tied to soil structure and water content: when pores fill with water, whether from rainfall, irrigation, or compaction-driven pore collapse, air-filled space and gas exchange both decline, and can approach zero in saturated or severely compacted soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Governed by',
      value: 'Volume, size, and continuity of air-filled pore space',
    },
    {
      label: 'Reduced by',
      value: 'Compaction, waterlogging, and fine, poorly structured soils',
    },
    {
      label: 'Assessed by',
      value:
        'Bulk density, pore-space estimates, and oxygen or redox measurement',
    },
    {
      label: 'Consequence of poor aeration',
      value:
        'Restricted root respiration, reduced nutrient uptake, root and microbial stress',
    },
    {
      label: 'Most vulnerable soils',
      value: 'Fine-textured or compacted soils, especially when saturated',
    },
    {
      label: 'Improved by',
      value:
        'Reducing compaction, improving drainage, and building stable soil structure',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil aeration is',
      body: [
        {
          type: 'paragraph',
          text: 'Soil pore space is divided between water-filled and air-filled pores at any given time; aeration refers specifically to the air-filled portion and how well it connects to the atmosphere to allow oxygen in and carbon dioxide out. Larger, well-connected macropores generally support aeration far better than small, poorly connected micropores.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Macropores',
              description:
                'Larger pores that drain readily and support rapid gas exchange',
            },
            {
              term: 'Micropores',
              description:
                'Smaller pores that retain water and exchange gas more slowly',
            },
            {
              term: 'Air-filled porosity',
              description:
                'The proportion of total soil volume occupied by air at a given time',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why aeration matters',
      body: [
        {
          type: 'paragraph',
          text: 'Roots need oxygen for respiration to actively take up water and nutrients; when aeration is poor, root growth and function decline, and in severe or prolonged cases roots can die from oxygen deprivation. Aerobic soil microorganisms that drive much of nutrient cycling and organic matter decomposition are similarly constrained by poor aeration, while some undesirable anaerobic processes become more prominent.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How aeration is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Aeration status is often inferred indirectly from bulk density and estimated total and air-filled porosity, from visual signs such as poor root development or grey, mottled soil colours indicating recurring low-oxygen conditions, or measured more directly with oxygen diffusion or soil redox potential instruments in research settings.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil colour mottling reflects a history of low-oxygen conditions built up over time, rather than the aeration status at the moment of observation.',
        },
      ],
    },
    {
      id: 'influencing-factors',
      heading: 'Factors influencing aeration',
      body: [
        {
          type: 'list',
          items: [
            'Compaction collapses macropores and reduces air-filled porosity and gas exchange',
            'Waterlogging fills pore space with water, displacing air and restricting oxygen supply',
            'Fine-textured soils generally have smaller pores and slower gas exchange than coarse-textured soils',
            'Stable soil aggregation supports macropore networks that favour good aeration',
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing soil aeration',
      body: [
        {
          type: 'paragraph',
          text: 'Improving or protecting aeration generally means avoiding compaction, ensuring adequate drainage so pores are not persistently waterlogged, and building stable soil structure that maintains a network of connected macropores over time.',
        },
        {
          type: 'list',
          items: [
            'Avoid field traffic on wet soil, which compacts pores and reduces aeration',
            'Improve drainage where persistent waterlogging limits air-filled pore space',
            'Use targeted subsoiling where compacted layers are confirmed by testing',
            'Build organic matter and stable aggregation to support macropore networks',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Mechanical aeration such as subsoiling addresses a compacted layer but does not prevent recompaction if traffic and moisture management do not also change.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'waterlogging' },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'machinery', slug: 'subsoiler' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'carrot' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'climate', slug: 'rainfall' },
  ],
  glossaryTerms: ['soil-texture'],
  geographicScope:
    'General soil-science overview applicable worldwide; aeration constraints depend on local soil texture, drainage, rainfall, and management.',
  climateContext:
    'Frequent, heavy rainfall increases the likelihood of temporary waterlogging and reduced aeration, particularly on poorly drained or fine-textured soils.',
  limitations: [
    'Direct measurement of soil aeration status requires specialised instruments not routinely available to most growers.',
    'Compaction and drainage constraints on aeration depend on local soil texture and cannot be generalized to fixed rules.',
    'This entry describes general principles; site-specific assessment should guide management decisions.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil pore space, aeration, and root function',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil aeration and gas exchange' },
    { sourceId: 'isric', citedFor: 'Global soil physical property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil aeration assessment and management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Aeration',
    description:
      'Soil aeration explained: how oxygen and carbon dioxide exchange through pore space, why it matters for roots and microbes, and how to manage it.',
    keywords: [
      'soil aeration',
      'soil pore space',
      'root oxygen soil',
      'air-filled porosity',
    ],
  },
  structuredData: { article: true },
};
