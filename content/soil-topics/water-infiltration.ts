import type { SoilTopicContent } from '@/types/content';

export const waterInfiltration: SoilTopicContent = {
  id: 'soil-topic-water-infiltration',
  slug: 'water-infiltration',
  contentType: 'soil-topic',
  title: 'Water Infiltration',
  topicClass: 'physical',
  alternativeNames: ['Soil infiltration', 'Infiltration rate'],
  category: 'Soil physical property',
  subcategory: 'Water movement',
  summary:
    'Water infiltration is the process by which water at the surface enters the soil. The infiltration rate determines how much rainfall or irrigation soaks in versus running off, and depends strongly on structure, texture, surface condition, and how wet the soil already is.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Water infiltration is the entry of water through the soil surface into the profile. The rate at which this happens sets the balance between water that soaks in to recharge soil moisture and water that runs off or ponds. High infiltration captures rainfall and irrigation for crops and reduces erosion; low infiltration wastes water as runoff and increases the risk of surface erosion and flooding.',
    },
    {
      type: 'paragraph',
      text: 'Infiltration typically starts fast into dry soil and slows as the profile wets and the surface pores fill, approaching a steadier rate governed largely by how quickly water can pass through the wetted soil below. Surface condition is decisive: an open, well-aggregated surface infiltrates far better than a crusted, compacted, or bare one.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value: 'The entry of surface water into the soil through the surface',
    },
    {
      label: 'Infiltration rate',
      value:
        'Starts high into dry soil and declines toward a steadier rate as soil wets',
    },
    {
      label: 'Favoured by',
      value:
        'Open structure, surface residue, macropores, and stable aggregates',
    },
    {
      label: 'Reduced by',
      value:
        'Surface crusting, compaction, bare soil, and fine surface texture',
    },
    {
      label: 'Consequence of low infiltration',
      value: 'Runoff, erosion, poor water capture, and increased flooding risk',
    },
    {
      label: 'Why it matters',
      value: 'Determines how much rainfall and irrigation is stored for crops',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What infiltration is',
      body: [
        {
          type: 'paragraph',
          text: 'Infiltration is distinct from the redistribution and drainage of water once it is inside the soil. It concerns specifically the passage of water across the surface into the topmost soil. The instantaneous infiltration rate declines over the course of a rainfall or irrigation event as the surface pores fill and the wetting front moves downward, eventually settling toward a near-steady rate.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Infiltration rate',
              description:
                'The speed at which water enters the soil surface, usually declining during an event.',
            },
            {
              term: 'Wetting front',
              description:
                'The boundary between wetted soil above and drier soil below as water moves down.',
            },
            {
              term: 'Runoff',
              description:
                'Water that fails to infiltrate and flows across the surface, often carrying soil with it.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-affects-it',
      heading: 'What controls infiltration',
      body: [
        {
          type: 'list',
          items: [
            'Surface condition: crusting, sealing, and compaction sharply reduce infiltration, while residue cover and open structure raise it',
            'Texture: coarse, sandy surfaces generally infiltrate faster than fine, clayey ones',
            'Structure and macropores: stable aggregates, cracks, root channels, and earthworm burrows create fast pathways for water',
            'Initial moisture: dry soil infiltrates quickly at first, then slows as it wets',
            'Slope and rainfall intensity: steep slopes and intense rain increase the share of water lost to runoff',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'A surface crust formed by raindrop impact on bare, unprotected soil can cut infiltration dramatically and trigger runoff even where the underlying soil is permeable.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why infiltration matters',
      body: [
        {
          type: 'paragraph',
          text: 'Infiltration governs how effectively rainfall and irrigation are captured. Where it is high, more water is stored in the root zone and less is lost to runoff and erosion. Where it is low, water ponds or runs off, crops receive less of the water applied, and soil and nutrients are carried away, degrading both the field and downstream water quality.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Improving infiltration',
      body: [
        {
          type: 'paragraph',
          text: 'Management that protects the surface and builds structure improves infiltration. Keeping the surface covered with residue or growing plants shields it from crusting, while reduced tillage, organic matter, and stable aggregation maintain the macropores and channels that let water in.',
        },
        {
          type: 'list',
          items: [
            'Maintain surface cover with residue, mulch, or cover crops to prevent crusting and slow runoff',
            'Reduce tillage and traffic to preserve macropores, aggregates, and biopores',
            'Build organic matter and stable aggregation to keep the surface open',
            'Use contour practices or roughened surfaces on slopes to give water more time to infiltrate',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-crusting' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'contour-farming' },
  ],
  glossaryTerms: ['soil-texture', 'cover-crop'],
  geographicScope:
    'Global. Infiltration principles apply everywhere, but rates and constraints depend on local texture, structure, surface condition, slope, and rainfall intensity.',
  climateContext:
    'Intense or prolonged rainfall can exceed the infiltration capacity of the soil, generating runoff and erosion; the risk is greatest on bare, crusted, or compacted surfaces.',
  limitations: [
    'Infiltration rate is highly variable in space and time and changes with surface condition and moisture, so single measurements have limited generality.',
    'Field measurement methods differ and can give different values, complicating direct comparison between studies.',
    'This entry describes general principles; site-specific measurement is needed to quantify infiltration for design decisions.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Infiltration, surface condition, and soil health',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil water infiltration and runoff' },
    { sourceId: 'isric', citedFor: 'Global soil hydraulic property data' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Infiltration in relation to irrigation and water management',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Water Infiltration',
    description:
      'Soil water infiltration explained: how water enters the soil, what controls the infiltration rate, why runoff and crusting reduce it, and how to improve it.',
    keywords: [
      'water infiltration',
      'infiltration rate',
      'soil runoff',
      'rainfall infiltration',
    ],
  },
  structuredData: { article: true },
};
