import type { MachineryContent } from '@/types/content';

export const subsoiler: MachineryContent = {
  id: 'machinery-subsoiler',
  slug: 'subsoiler',
  contentType: 'machinery',
  title: 'Subsoiler',
  alternativeNames: ['Deep ripper', 'Ripper'],
  category: 'Agricultural machinery',
  subcategory: 'Deep (primary) tillage equipment',
  machineryClass: 'tillage',
  summary:
    'A subsoiler uses one or more narrow shanks drawn well below normal tillage depth to shatter compacted subsurface soil layers, improving root penetration, water infiltration, and drainage without inverting the topsoil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A subsoiler is a heavy tillage implement designed to fracture compacted soil layers — such as a plough pan or naturally dense subsoil — that lie below the depth reached by routine tillage or cultivation. Rather than mixing or inverting soil like a plough or disc harrow, a subsoiler’s narrow shanks lift and shatter the soil as they pass through it, leaving most of the surface structure and residue largely undisturbed.',
    },
    {
      type: 'paragraph',
      text: 'Because compacted layers restrict root growth and slow water movement, subsoiling is used where compaction has been identified as limiting crop performance, typically as an occasional operation rather than a routine annual pass, since deep tillage demands substantial power and can be unnecessary or even counterproductive where compaction is not present.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Fracturing compacted subsurface soil layers without full surface inversion',
    },
    {
      label: 'Key components',
      value:
        'Narrow shanks (tines) with points or wings, mounted on a heavy frame',
    },
    {
      label: 'Typical working depth',
      value: 'Below normal tillage depth, targeting the compacted layer',
    },
    {
      label: 'Power requirement',
      value: 'High draft force; typically requires a powerful tractor',
    },
    {
      label: 'Typical use',
      value:
        'Occasional, targeted operation rather than routine annual tillage',
    },
    {
      label: 'Operating consideration',
      value: 'Effectiveness depends on soil moisture at the time of operation',
    },
  ],
  sections: [
    {
      id: 'what-a-subsoiler-is',
      heading: 'What a subsoiler is',
      body: [
        {
          type: 'paragraph',
          text: 'A subsoiler is distinguished from other tillage tools by its depth and its narrow point of soil disturbance: rather than working a wide, continuous layer at shallow depth, it targets a compacted zone with one or more shanks spaced across the working width, lifting and cracking the soil as it passes.',
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
            'Narrow shanks are set to a depth below the identified compacted layer',
            'As the implement is pulled forward, each shank lifts and fractures the soil ahead of and around it',
            'Shattering relieves compaction and creates channels that improve water infiltration and root penetration',
            'The surface layer is largely left in place, unlike full-inversion tillage',
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
          text: 'Subsoiling is typically carried out where compaction — from repeated wheel traffic, heavy equipment on wet soil, or naturally dense subsoil layers — is diagnosed as restricting root growth, water infiltration, or drainage. It is usually timed outside the growing season and, where possible, when soil moisture allows effective shattering rather than smearing.',
        },
        {
          type: 'paragraph',
          text: 'Because deep tillage does not address the underlying causes of compaction, subsoiling is often paired with practices such as controlled traffic, reduced axle loads, or cover cropping to limit recompaction over time.',
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
              term: 'Straight-shank subsoiler',
              description:
                'Simple, rigid shanks that lift and shatter soil in a single straight pass.',
            },
            {
              term: 'Winged subsoiler',
              description:
                'Shanks fitted with horizontal wings that widen the zone of soil disturbance at depth.',
            },
            {
              term: 'Parabolic-shank ripper',
              description:
                'Curved shank profile designed to reduce draft force while still lifting and fracturing soil.',
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
          text: 'Subsoiling performed when soil is too wet can smear and compress soil around the shank rather than shattering it, sometimes worsening the problem it aims to fix. High draft requirements also mean fuel and equipment costs are significant, reinforcing the case for subsoiling only where compaction is confirmed rather than as a routine practice.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Whether, when, and how deep to subsoil is a soil- and compaction-specific decision; diagnostic tools such as penetrometer testing and local agronomic guidance should inform the decision rather than a fixed schedule.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'moldboard-plough' },
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  geographicScope:
    'General overview of subsoilers as used to relieve soil compaction worldwide. Need, depth, and timing vary by soil type, climate, and cropping system.',
  limitations: [
    'This entry describes subsoiler function and types in general terms; it does not recommend specific working depths, which are compaction- and soil-specific.',
    'Diagnosing compaction and deciding whether subsoiling is warranted requires soil assessment not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Subsoiling practice and compaction relief',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Soil compaction and deep-tillage research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Soil management and tillage guidance context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Tillage systems and soil compaction in global agriculture',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Subsoiler',
    description:
      'Subsoilers explained: how deep shanks fracture compacted soil layers to improve drainage and root growth, when they are used, and common shank types.',
    keywords: ['subsoiler', 'deep tillage', 'soil compaction', 'ripper'],
  },
  structuredData: { article: true },
};
