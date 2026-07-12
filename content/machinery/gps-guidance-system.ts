import type { MachineryContent } from '@/types/content';

export const gpsGuidanceSystem: MachineryContent = {
  id: 'machinery-gps-guidance-system',
  slug: 'gps-guidance-system',
  contentType: 'machinery',
  title: 'GPS Guidance System',
  alternativeNames: ['Satellite guidance system', 'Auto-steer system'],
  category: 'Agricultural machinery',
  subcategory: 'Precision-agriculture equipment',
  machineryClass: 'precision',
  summary:
    'A GPS guidance system uses satellite positioning to steer or assist steering of farm machinery along precise, repeatable paths, reducing overlap and skips during field operations and enabling other precision-agriculture functions such as section control.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A GPS (satellite) guidance system determines a vehicle’s position in the field to a high degree of precision and uses that information either to display steering guidance to the operator or to automatically steer the machine (auto-steer) along a planned path.',
    },
    {
      type: 'paragraph',
      text: 'Because it establishes an accurate, repeatable record of where a machine has travelled and where its implement is working, satellite guidance underlies many other precision-agriculture capabilities, including controlling individual boom or planter sections and building field maps of yield or input application.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Satellite-based positioning for steering guidance or auto-steer',
    },
    {
      label: 'Core technology',
      value:
        'Global Navigation Satellite System (GNSS) receivers, often with correction signals',
    },
    {
      label: 'Common benefit',
      value: 'Reduced overlap and skips between adjacent passes',
    },
    {
      label: 'Enables',
      value:
        'Section/row control, variable-rate application, and field mapping',
    },
    {
      label: 'Typical accuracy tiers',
      value:
        'Range from sub-metre to centimetre-level, depending on the correction service used',
    },
    {
      label: 'Used with',
      value:
        'Tractors, sprayers, seed drills, planters, and combine harvesters',
    },
  ],
  sections: [
    {
      id: 'what-a-gps-guidance-system-is',
      heading: 'What a GPS guidance system is',
      body: [
        {
          type: 'paragraph',
          text: 'A GPS guidance system is a positioning and steering-assistance technology rather than an implement itself; it is fitted to tractors, sprayers, planters, and combines to guide them along accurate paths across the field, whether by displaying guidance lines to the driver or by directly controlling the steering.',
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
            'A GNSS receiver on the machine calculates its position from satellite signals',
            'A correction signal (from a base station or a subscription service) refines raw satellite positioning to improve accuracy',
            'Guidance software calculates and displays the machine’s position relative to a planned path (such as parallel field passes)',
            'On auto-steer systems, the guidance computer controls the steering mechanism directly to follow the path',
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
          text: 'Accurate guidance reduces overlap and skips during tillage, planting, spraying, and harvest, which can lower input use, reduce operator fatigue, and allow operation in low-visibility conditions such as dust, darkness, or fog. Consistent pass-to-pass positioning also supports controlled-traffic approaches that confine wheel traffic to fixed lanes to limit compaction elsewhere in the field.',
        },
        {
          type: 'paragraph',
          text: 'Positioning data from guidance systems also feeds other precision functions: automatic section control on sprayers and planters, variable-rate application, and the georeferenced yield and as-applied maps used in precision-agriculture record-keeping.',
        },
      ],
    },
    {
      id: 'types-and-accuracy-tiers',
      heading: 'Types and accuracy tiers',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Lightbar/assisted-steering guidance',
              description:
                'Displays position relative to the planned path; the operator steers manually',
            },
            {
              term: 'Auto-steer',
              description:
                'Directly controls the steering mechanism to follow the planned path',
            },
            {
              term: 'Correction service',
              description:
                'A satellite- or ground-based signal that improves raw GNSS accuracy, offered at multiple accuracy/subscription tiers',
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
          text: 'The accuracy tier needed depends on the task: coarser accuracy may be adequate for broad-acre tillage guidance, while planting, strip-till, and repeated-pass operations often justify higher-accuracy correction services. Signal availability, subscription costs, and equipment compatibility are practical factors in adoption.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Specific accuracy figures and correction-service options change with technology and provider; consult current equipment and service documentation rather than fixed values.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'agricultural-drone' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  connections: [
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'agricultural-drone' },
  ],
  geographicScope:
    'General overview of GPS/GNSS guidance systems as used across mechanised farming worldwide. Correction-service availability and accuracy vary by region and provider.',
  limitations: [
    'This entry describes guidance-system function and types in general terms; it does not recommend specific accuracy tiers or providers.',
    'Actual positioning accuracy depends on the correction service, equipment, and local signal conditions, which are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'GPS/GNSS guidance and precision-agriculture equipment',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Precision-agriculture technology research context',
    },
    { sourceId: 'ahdb', citedFor: 'Precision-farming technology context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of digital tools in agricultural production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'GPS Guidance System',
    description:
      'GPS/GNSS guidance systems explained: how satellite positioning enables auto-steer, reduced overlap, and section control across farm machinery.',
    keywords: [
      'GPS guidance',
      'auto-steer',
      'GNSS farming',
      'precision agriculture equipment',
    ],
  },
  structuredData: { article: true },
};
