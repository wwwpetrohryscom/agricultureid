import type { SoilTopicContent } from '@/types/content';

export const soilStructure: SoilTopicContent = {
  id: 'soil-topic-soil-structure',
  slug: 'soil-structure',
  contentType: 'soil-topic',
  title: 'Soil Structure',
  topicClass: 'physical',
  alternativeNames: ['Soil tilth', 'Soil aggregation'],
  category: 'Soil physical property',
  subcategory: 'Structure and aggregation',
  summary:
    'Soil structure is the arrangement of sand, silt, clay, and organic matter into aggregates and the pore spaces between them. It governs how water infiltrates, how easily roots grow, and how well a soil resists erosion and compaction.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil structure describes how individual mineral and organic particles bind together into aggregates (peds) and how those aggregates are arranged, creating a network of pores of different sizes. Unlike texture, which is fixed by particle-size composition, structure is dynamic and responds to management, biological activity, and weather.',
    },
    {
      type: 'paragraph',
      text: 'Well-developed structure creates a mix of large pores that drain freely and allow air exchange, and smaller pores that retain water for plant use. Degraded structure — compacted, crusted, or massive — restricts roots, slows infiltration, and increases the risk of runoff and erosion.',
    },
  ],
  keyFacts: [
    { label: 'Also called', value: 'Soil tilth (in a management sense)' },
    {
      label: 'Formed from',
      value: 'Aggregation of mineral particles and organic matter',
    },
    {
      label: 'Key property',
      value: 'Pore-size distribution (macropores and micropores)',
    },
    {
      label: 'Degraded by',
      value: 'Compaction, tillage, loss of organic matter, raindrop impact',
    },
    {
      label: 'Assessed by',
      value: 'Field/visual assessment and laboratory aggregate-stability tests',
    },
    {
      label: 'Improved by',
      value: 'Organic matter additions, roots, reduced disturbance',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil structure is',
      body: [
        {
          type: 'paragraph',
          text: 'Structure arises when clay, organic matter, roots, and soil organisms bind particles into aggregates of varying size and shape — commonly described as granular, blocky, platy, or columnar. The spaces between and within aggregates form the pore network that holds air and water.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Aggregate (ped)',
              description:
                'A cluster of soil particles held together more strongly than they are attached to surrounding material.',
            },
            {
              term: 'Macropores',
              description:
                'Larger pores between aggregates that drain freely and allow air movement and root penetration.',
            },
            {
              term: 'Micropores',
              description:
                'Smaller pores within aggregates that retain water against gravity for plant uptake.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why structure matters',
      body: [
        {
          type: 'paragraph',
          text: 'Structure controls how readily water infiltrates and moves through a profile, how much air reaches roots, and how easily roots can extend to explore for water and nutrients. It also strongly influences a soil’s resistance to erosion, since stable aggregates resist being detached and carried away by water or wind.',
        },
        {
          type: 'list',
          items: [
            'Good structure supports rapid infiltration and reduces runoff',
            'Adequate macropore space allows root growth and gas exchange',
            'Stable aggregates resist surface sealing, crusting, and erosion',
            'Poor structure can limit yield even where nutrients and moisture are otherwise adequate',
          ],
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How structure is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Structure is commonly evaluated in the field by digging a spade of soil and examining aggregate size, shape, and how readily it breaks apart, alongside signs such as root distribution, earthworm channels, and mottling that indicates poor aeration. Laboratory methods, including wet-sieving aggregate-stability tests, provide a more quantitative measure.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Structural condition varies with recent tillage, moisture, and season, so assessments are most meaningful when repeated over time rather than judged from a single visit.',
        },
      ],
    },
    {
      id: 'structure-and-erosion',
      heading: 'Structure, surface sealing, and erosion',
      body: [
        {
          type: 'paragraph',
          text: 'Bare, poorly aggregated soil surfaces are vulnerable to raindrop impact, which breaks down aggregates into fine particles that clog pores and form a surface seal or crust. This reduces infiltration, increases runoff, and accelerates erosion — effects that compound over successive rainfall events on unprotected soil.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing soil structure',
      body: [
        {
          type: 'paragraph',
          text: 'Structure is built and protected primarily by encouraging biological activity and organic matter, and by minimizing mechanical disturbance and traffic that break aggregates apart or compact pore space.',
        },
        {
          type: 'list',
          items: [
            'Add organic matter (crop residues, compost, manure) to feed aggregate-forming organisms',
            'Maintain living roots and cover to stabilize aggregates and add organic inputs continuously',
            'Reduce tillage intensity and avoid working or trafficking soil when wet',
            'Use crop rotations that vary rooting depth and residue type',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Structural damage from compaction or excessive tillage can take years of careful management to reverse, so prevention is far more effective than remediation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-biology' },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'crop', slug: 'wheat' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'machinery', slug: 'moldboard-plough' },
  ],
  glossaryTerms: ['soil-texture', 'cover-crop', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; structural behaviour depends on local texture, climate, and management and should be assessed on site.',
  climateContext:
    'Rainfall intensity, freeze–thaw cycles, and wetting–drying cycles all interact strongly with structural stability.',
  limitations: [
    'Structure is dynamic and changes with season, moisture, and recent management, so single-visit assessments are only a snapshot.',
    'This entry describes structure in general terms; it is not a substitute for local soil survey or on-site assessment.',
    'Recovery times and best practices vary by soil type and climate and cannot be generalized to a fixed schedule.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil structure, aggregation, and assessment',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil structure and function' },
    {
      sourceId: 'isric',
      citedFor: 'Global soil property and structure information',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil structure and health assessment',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Structure',
    description:
      'Soil structure explained: how aggregates and pore spaces form, why they matter for roots, water, and erosion, and how to assess and manage them.',
    keywords: [
      'soil structure',
      'soil aggregation',
      'soil tilth',
      'pore space',
    ],
  },
  structuredData: { article: true },
};
