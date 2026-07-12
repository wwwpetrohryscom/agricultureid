import type { MachineryContent } from '@/types/content';

export const moldboardPlough: MachineryContent = {
  id: 'machinery-moldboard-plough',
  slug: 'moldboard-plough',
  contentType: 'machinery',
  title: 'Moldboard Plough',
  alternativeNames: ['Moldboard plow'],
  category: 'Agricultural machinery',
  subcategory: 'Primary tillage equipment',
  machineryClass: 'tillage',
  summary:
    'The moldboard plough is a primary tillage implement that cuts, lifts, and inverts a slice of soil, burying surface residue and weeds while creating a loosened seedbed layer, historically the dominant tool for preparing land ahead of planting.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A moldboard plough works by cutting a continuous slice of soil with a share and then turning it over with a curved moldboard, inverting the furrow so that surface residue, weeds, and crop debris are buried beneath a layer of loosened soil. This full inversion distinguishes it from other tillage tools that loosen soil without turning it over.',
    },
    {
      type: 'paragraph',
      text: 'Moldboard ploughing was for a long time the standard first step in seedbed preparation in many regions. Its use has declined in areas that have adopted reduced- or no-tillage systems to protect soil structure and organic matter, though it remains in use where full inversion is wanted for specific weed, residue, or soil-management reasons.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Cutting, lifting, and inverting a slice of soil (primary tillage)',
    },
    {
      label: 'Key components',
      value: 'Shares, moldboards, and a frame carrying multiple furrow bottoms',
    },
    {
      label: 'Effect on residue',
      value: 'Buries surface residue and weeds beneath the inverted soil layer',
    },
    {
      label: 'Typical timing',
      value: 'Used ahead of secondary tillage and seedbed preparation',
    },
    {
      label: 'Trend',
      value:
        'Use has declined in regions favouring conservation and reduced tillage',
    },
    {
      label: 'Contrast',
      value:
        'Distinguished from disc harrows and chisel ploughs, which do not fully invert the soil',
    },
  ],
  sections: [
    {
      id: 'what-a-moldboard-plough-is',
      heading: 'What a moldboard plough is',
      body: [
        {
          type: 'paragraph',
          text: 'A moldboard plough is defined by its inversion action: each furrow bottom cuts, lifts, and rotates a slice of soil so material that was on the surface ends up buried. This is the most intensive common form of primary tillage in terms of soil disturbance.',
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
            'A coulter or disc cuts the leading edge of the furrow slice vertically',
            'The share cuts the slice horizontally at the working depth',
            'The moldboard, a curved surface behind the share, lifts and rotates the slice',
            'The inverted slice is deposited into the previous furrow, burying surface material',
            'Multiple furrow bottoms mounted on one frame repeat this across the working width',
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
          text: 'Moldboard ploughing is typically the first operation in a conventional tillage sequence, followed by secondary tillage (such as disc harrowing) to break clods and prepare a finer seedbed before drilling or planting. Burying crop residue and weed seed can help manage certain pests, diseases, and weed pressure that survive on or near the surface.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because it fully inverts the soil, moldboard ploughing also exposes bare soil to erosion and can accelerate the loss of soil organic matter compared with reduced-tillage methods, which is a central reason many regions have shifted toward conservation tillage.',
        },
      ],
    },
    {
      id: 'variations',
      heading: 'Variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mounted plough',
              description:
                'Attached to the tractor’s three-point linkage, lifted fully clear of the ground for transport',
            },
            {
              term: 'Trailed (semi-mounted) plough',
              description:
                'Carried partly on its own wheels, used for larger working widths',
            },
            {
              term: 'Reversible plough',
              description:
                'Can turn furrows in one direction only, avoiding the open and back furrows left by one-way ploughs',
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
          text: 'Ploughing depth, timing, and frequency affect soil structure, organic matter, and erosion risk, and these effects are strongly influenced by soil type, slope, rainfall pattern, and climate. Many farms now choose selectively between moldboard ploughing and reduced- or no-tillage approaches depending on the field and rotation.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Whether and how often to plough is a soil- and region-specific management decision; it is not addressed here as a universal recommendation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
  ],
  geographicScope:
    'General overview of moldboard ploughing as a primary tillage method used historically and in some regions currently. Adoption and practice vary widely by region and farming system.',
  limitations: [
    'This entry describes plough function and general effects; it does not recommend ploughing depth, frequency, or timing, which are soil- and region-specific.',
    'The magnitude of erosion or organic-matter effects depends on local soil, slope, and climate and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Tillage effects on soil structure and organic matter',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Moldboard plough operation and tillage sequence',
    },
    { sourceId: 'fao', citedFor: 'Tillage systems in global agriculture' },
    { sourceId: 'ahdb', citedFor: 'Tillage management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Moldboard Plough',
    description:
      'The moldboard plough explained: how it cuts, lifts, and inverts soil for primary tillage, its role in seedbed preparation, and its declining use.',
    keywords: [
      'moldboard plough',
      'primary tillage',
      'plowing',
      'soil inversion',
    ],
  },
  structuredData: { article: true },
};
