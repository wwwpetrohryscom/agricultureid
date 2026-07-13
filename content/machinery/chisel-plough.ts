import type { MachineryContent } from '@/types/content';

export const chiselPlough: MachineryContent = {
  id: 'machinery-chisel-plough',
  slug: 'chisel-plough',
  contentType: 'machinery',
  title: 'Chisel Plough',
  alternativeNames: ['Chisel plow', 'Ripper (light)'],
  category: 'Agricultural machinery',
  subcategory: 'Primary tillage equipment',
  machineryClass: 'tillage',
  summary:
    'A chisel plough is a primary tillage implement fitted with curved, narrow shanks that fracture and loosen the soil to depth without inverting it, leaving more crop residue on the surface than a moldboard plough.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A chisel plough carries a row of staggered, curved shanks (chisels) that are drawn through the soil to break up and loosen it, disrupting compacted layers and improving conditions for water infiltration and root growth. Unlike a moldboard plough, it does not turn the soil over, so a substantial proportion of surface crop residue remains in place.',
    },
    {
      type: 'paragraph',
      text: 'Because it loosens without full inversion, the chisel plough is often used as a reduced-tillage alternative to the moldboard plough, sitting between intensive inversion tillage and no-till systems. It works shallower than a dedicated subsoiler but can still relieve moderate compaction while retaining protective residue cover.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Primary tillage — loosening and fracturing soil to depth',
    },
    {
      label: 'Working action',
      value: 'Curved shanks shatter the soil without inverting the profile',
    },
    {
      label: 'Residue effect',
      value: 'Retains more surface residue than a moldboard plough',
    },
    {
      label: 'Relation to subsoiler',
      value:
        'Works shallower than a subsoiler; relieves moderate rather than deep compaction',
    },
    {
      label: 'Typical use',
      value: 'A component of reduced-tillage or conservation-oriented systems',
    },
    {
      label: 'Draught',
      value:
        'Requires substantial tractor power, increasing with depth and soil resistance',
    },
  ],
  sections: [
    {
      id: 'what-a-chisel-plough-is',
      heading: 'What a chisel plough is',
      body: [
        {
          type: 'paragraph',
          text: 'A chisel plough is a primary tillage tool designed to loosen and aerate soil while conserving surface residue. Its narrow, curved shanks lift and shatter the soil as they pass, breaking clods and compacted layers, but they leave the soil essentially in place rather than turning a furrow slice.',
        },
        {
          type: 'paragraph',
          text: 'This non-inversion action is the key contrast with the moldboard plough, which flips the soil and buries most residue. By keeping residue near the surface, the chisel plough helps protect against erosion and moisture loss while still achieving deeper loosening than most secondary tillage tools.',
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
            'Staggered curved shanks are set across the frame to cover the working width',
            'As the implement is drawn forward, each shank fractures and lifts a zone of soil',
            'Compacted layers within the working depth are broken up, improving porosity',
            'Surface residue is partially mixed but largely retained on top of the soil',
            'The loosened, residue-covered surface is then usually refined by secondary tillage before sowing',
          ],
        },
      ],
    },
    {
      id: 'role-in-tillage-systems',
      heading: 'Role in tillage systems',
      body: [
        {
          type: 'paragraph',
          text: 'The chisel plough is commonly chosen where growers want to loosen soil and relieve moderate compaction while keeping residue on the surface — a middle path between full inversion tillage and no-till. Retaining residue supports erosion control and moisture conservation, which makes the implement a frequent component of conservation-oriented tillage programmes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'A chisel plough loosens to a moderate depth; genuinely deep compaction, such as a dense subsoil pan, is usually addressed with a subsoiler operating below the chisel’s reach.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Effective loosening depends on operating when the soil is neither too wet nor too dry: working wet soil can smear rather than shatter, while very hard dry soil greatly increases draught and fuel use. Working depth and shank spacing are matched to the compaction problem and the tractor power available.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not prescribe working depths or shank spacings, which depend on soil type, compaction, moisture, and the cropping system; consult local guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'moldboard-plough' },
    { type: 'machinery', slug: 'subsoiler' },
    { type: 'machinery', slug: 'cultivator' },
  ],
  connections: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'subsoiler' },
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
  ],
  glossaryTerms: ['agronomy'],
  geographicScope:
    'General overview of the chisel plough as used in mechanised primary tillage worldwide. Working depth and use within a tillage system are adapted to local soils and cropping.',
  limitations: [
    'This entry describes chisel-plough function in general terms; it does not give working depths, shank spacings, or draught figures, which are soil- and tractor-specific.',
    'The degree of residue retention and compaction relief depends on soil type, moisture, and how the tool is set, and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Reduced-tillage practice and residue management',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of tillage and residue retention in soil conservation',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Primary cultivation and soil-loosening practice',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Chisel Plough',
    description:
      'Chisel ploughs explained: how curved shanks loosen and fracture soil without inversion, retain residue, and fit reduced-tillage systems.',
    keywords: [
      'chisel plough',
      'chisel plow',
      'primary tillage',
      'reduced tillage',
    ],
  },
  structuredData: { article: true },
};
