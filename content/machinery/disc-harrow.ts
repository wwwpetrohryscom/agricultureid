import type { MachineryContent } from '@/types/content';

export const discHarrow: MachineryContent = {
  id: 'machinery-disc-harrow',
  slug: 'disc-harrow',
  contentType: 'machinery',
  title: 'Disc Harrow',
  category: 'Agricultural machinery',
  subcategory: 'Secondary tillage equipment',
  machineryClass: 'tillage',
  summary:
    'A disc harrow uses rows of angled, concave discs to cut, mix, and break up soil and residue, commonly used as a secondary tillage tool to prepare a finer seedbed or to incorporate crop residue and previous tillage clods.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A disc harrow consists of gangs of rotating, concave discs mounted on a common frame. As the implement is pulled through the field, the discs cut into the soil surface, slicing and partially inverting a shallower layer than primary tillage tools, breaking clods and mixing crop residue into the topsoil.',
    },
    {
      type: 'paragraph',
      text: 'Because it works at a shallower depth and with less complete inversion than a moldboard plough, a disc harrow is typically classed as secondary tillage — used to refine a seedbed after primary tillage, or on its own for lighter residue and clod management.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Cutting, mixing, and levelling soil and residue at shallow depth',
    },
    {
      label: 'Key components',
      value: 'Gangs of concave discs mounted on a frame',
    },
    {
      label: 'Typical use',
      value:
        'Secondary tillage after primary tillage, or residue/stubble management',
    },
    {
      label: 'Common configurations',
      value: 'Tandem, offset, and vertical-tillage disc designs',
    },
    {
      label: 'Effect on residue',
      value: 'Partially incorporates residue rather than fully burying it',
    },
    {
      label: 'Operating consideration',
      value:
        'Disc angle and working depth are adjusted for the soil and residue condition',
    },
  ],
  sections: [
    {
      id: 'what-a-disc-harrow-is',
      heading: 'What a disc harrow is',
      body: [
        {
          type: 'paragraph',
          text: 'A disc harrow is defined by its rotating disc gangs, which cut and stir soil rather than fully inverting it. This gives a shallower, more residue-retentive form of tillage compared with a moldboard plough, useful for breaking clods, levelling the surface, and managing crop residue.',
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
            'Concave discs, set at an angle to the direction of travel, are pulled through the soil',
            'Each disc cuts and lifts a thin layer of soil, partially turning it and slicing residue',
            'Opposing gangs of discs mix soil and residue and level the surface',
            'Working depth and disc angle can be adjusted to change the intensity of soil disturbance',
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
          text: 'Disc harrowing is commonly used after primary tillage to break down clods and create a finer, more uniform seedbed ahead of planting, and it is also used on standing stubble or crop residue to size and partially incorporate it before or between crops.',
        },
        {
          type: 'paragraph',
          text: 'Because it disturbs the soil less than full inversion tillage, disc harrowing can be one component of a reduced-tillage approach, though the level of soil disturbance still depends on depth, disc type, and number of passes.',
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
              term: 'Tandem disc harrow',
              description:
                'Front and rear gangs angled in opposite directions for balanced, even tillage',
            },
            {
              term: 'Offset disc harrow',
              description:
                'Gangs offset to one side, suited to working under tree canopies or near obstacles',
            },
            {
              term: 'Vertical-tillage disc',
              description:
                'Uses near-vertical, wavy-edged discs to size residue with minimal soil inversion',
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
          text: 'Disc angle, weight, and working depth affect how aggressively the implement mixes soil and residue, and repeated shallow discing over time can create a compacted layer (a tillage pan) at a consistent working depth in some soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'How many disc-harrow passes, at what depth, and in what rotation position is a soil- and residue-specific decision best guided by local agronomic recommendations rather than a fixed rule.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'moldboard-plough' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cotton' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  geographicScope:
    'General overview of disc harrows as used in secondary tillage and residue management worldwide. Configuration and depth choices vary by soil and region.',
  limitations: [
    'This entry describes disc harrow function and types in general terms; it does not recommend specific working depths or pass numbers, which are soil- and residue-specific.',
    'Tillage-pan formation risk depends on soil type, moisture, and management history not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Disc harrow function and secondary tillage practice',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Tillage intensity and soil structure effects',
    },
    { sourceId: 'ahdb', citedFor: 'Seedbed preparation context' },
    { sourceId: 'fao', citedFor: 'Tillage systems in global agriculture' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Disc Harrow',
    description:
      'Disc harrows explained: how angled disc gangs cut, mix, and level soil and residue, their role in secondary tillage, and common configurations.',
    keywords: [
      'disc harrow',
      'secondary tillage',
      'seedbed preparation',
      'residue management',
    ],
  },
  structuredData: { article: true },
};
