import type { SoilTopicContent } from '@/types/content';

export const soilCompaction: SoilTopicContent = {
  id: 'soil-topic-soil-compaction',
  slug: 'soil-compaction',
  contentType: 'soil-topic',
  title: 'Soil Compaction',
  topicClass: 'physical',
  alternativeNames: ['Soil densification'],
  category: 'Soil physical property',
  subcategory: 'Structural degradation',
  summary:
    'Soil compaction is the compression of soil particles into a denser mass with less pore space, usually caused by mechanical pressure from machinery or livestock traffic. It restricts root growth, water infiltration, and aeration.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Compaction occurs when external pressure — most often from machinery wheels, tillage implements, or concentrated livestock traffic — presses soil particles closer together, collapsing pore space. The result is a denser soil with fewer and smaller pores, which restricts water movement, air exchange, and root penetration.',
    },
    {
      type: 'paragraph',
      text: 'Compaction can occur at the surface or as a distinct subsurface layer, often called a plow pan or traffic pan, where repeated pressure at a consistent depth compresses soil just below the depth of regular tillage.',
    },
  ],
  keyFacts: [
    {
      label: 'Cause',
      value:
        'Mechanical pressure from machinery or livestock traffic, worse on wet soil',
    },
    {
      label: 'Indicator',
      value: 'Increased bulk density and reduced pore space',
    },
    {
      label: 'Assessed by',
      value:
        'Penetrometer resistance, spade/profile inspection, bulk-density sampling',
    },
    {
      label: 'Effects',
      value:
        'Restricted root growth, reduced infiltration, increased runoff and waterlogging risk',
    },
    {
      label: 'Most vulnerable soils',
      value: 'Fine-textured soils, though any soil can compact when wet',
    },
    {
      label: 'Managed by',
      value:
        'Controlled traffic, timing operations to soil moisture, deep-rooted cover crops, targeted subsoiling',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What compaction is',
      body: [
        {
          type: 'paragraph',
          text: 'Compaction is a physical rearrangement of soil particles and aggregates under load, most damaging when soil is wet and aggregates are weak. The effect is measured as an increase in bulk density — the mass of dry soil per unit volume — reflecting the loss of pore volume.',
        },
        {
          type: 'list',
          items: [
            'Surface compaction: forms at or near the soil surface from traffic or raindrop impact',
            'Subsurface (plow pan/traffic pan) compaction: a dense layer at a consistent depth from repeated tillage or wheel pressure',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why compaction matters',
      body: [
        {
          type: 'paragraph',
          text: 'Compacted layers physically resist root penetration, which can restrict rooting depth and limit access to water and nutrients lower in the profile even when they are present. Reduced macropore space also slows infiltration, increasing runoff and the risk of surface ponding or waterlogging after rain, and limits the oxygen available to roots and soil organisms.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How compaction is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'A hand-held or tractor-mounted penetrometer measures the force needed to push a probe into the soil, giving a profile of resistance with depth; sharp increases can indicate a compacted layer. Digging a profile pit or spade sample lets an observer examine root distribution, aggregate shape, and any platy or dense layers directly. Bulk-density sampling provides a quantitative laboratory measure.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Penetrometer readings are strongly affected by soil moisture at the time of testing, so comparisons are most reliable when soil moisture is similar between measurements.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing and preventing compaction',
      body: [
        {
          type: 'paragraph',
          text: 'Prevention is generally more effective and less costly than remediation. The most damaging combination is heavy axle loads on wet soil, so timing field traffic to drier conditions is one of the most effective controls.',
        },
        {
          type: 'list',
          items: [
            'Avoid heavy machinery traffic when soil is wet',
            'Use controlled-traffic patterns to confine compaction to defined lanes',
            'Grow deep-rooted cover crops that can help biologically loosen compacted layers over time',
            'Use targeted subsoiling or deep tillage only where testing confirms a compacted layer, and at appropriate soil moisture',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Mechanical remediation such as subsoiling can be undone quickly if traffic and moisture management do not also change; addressing the cause is essential.',
        },
      ],
    },
    {
      id: 'crop-and-machinery-considerations',
      heading: 'Crop and machinery considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Root crops and other species that need loose, well-aerated soil for development are particularly sensitive to compaction. Heavier equipment, such as tractors and combine harvesters, exerts greater ground pressure, especially when tire inflation and axle load are not matched to soil conditions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'crop', slug: 'carrot' },
    { type: 'climate', slug: 'rainfall' },
  ],
  glossaryTerms: ['soil-texture', 'cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; compaction risk depends on local soil texture, machinery, and moisture regime.',
  climateContext:
    'Wet conditions greatly increase compaction risk under a given traffic load; climate strongly influences safe working windows.',
  limitations: [
    'Penetrometer and bulk-density readings are strongly affected by moisture at the time of sampling and are best compared at similar moisture levels.',
    'Compaction risk and remediation approaches depend on local soil texture, climate, and equipment, and cannot be generalized to fixed rules.',
    'This entry describes general principles; it is not a substitute for site-specific assessment.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil compaction causes, assessment, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil compaction and structural degradation',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil compaction assessment guidance',
    },
    { sourceId: 'isric', citedFor: 'Global soil physical property data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Compaction',
    description:
      'Soil compaction explained: how machinery and traffic densify soil, its effect on roots and drainage, how it is assessed, and prevention strategies.',
    keywords: [
      'soil compaction',
      'bulk density',
      'penetrometer',
      'traffic pan',
    ],
  },
  structuredData: { article: true },
};
