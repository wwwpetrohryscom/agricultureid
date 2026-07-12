import type { MachineryContent } from '@/types/content';

export const tractor: MachineryContent = {
  id: 'machinery-tractor',
  slug: 'tractor',
  contentType: 'machinery',
  title: 'Tractor',
  category: 'Agricultural machinery',
  subcategory: 'Power unit',
  machineryClass: 'power',
  summary:
    'The tractor is the primary power source on most farms, supplying drawbar pull, hydraulic power, and power take-off (PTO) drive to pull and operate implements for tillage, seeding, spraying, harvesting, and haulage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A tractor is a self-propelled engine-driven vehicle built to generate high torque at low speed, giving it the pulling power needed to draw and drive field implements. Rather than performing a single task itself, a tractor supplies power to a wide range of attached or towed equipment, which is why it is the central machine in most mechanised farming operations.',
    },
    {
      type: 'paragraph',
      text: 'Power leaves the tractor through several routes: the drawbar for towed loads, the three-point linkage for mounted implements, hydraulic outlets for cylinders and motors, and the power take-off (PTO) shaft for implements with their own rotating components, such as mowers or spreaders. Matching tractor power and these outputs to an implement is a routine part of choosing equipment.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Power source for towed and mounted field implements',
    },
    {
      label: 'Power outputs',
      value: 'Drawbar, three-point linkage, hydraulics, power take-off (PTO)',
    },
    {
      label: 'Common configurations',
      value: 'Two-wheel drive, four-wheel drive, articulated, tracked',
    },
    { label: 'Typical fuel', value: 'Diesel, predominantly' },
    {
      label: 'Selection factors',
      value: 'Power output, weight, and implement compatibility',
    },
    {
      label: 'Role in cycle',
      value:
        'Used across tillage, planting, spraying, and harvest-support operations',
    },
  ],
  sections: [
    {
      id: 'what-a-tractor-is',
      heading: 'What a tractor is',
      body: [
        {
          type: 'paragraph',
          text: 'A tractor combines an engine, transmission, and chassis engineered for sustained pulling and power-transfer work rather than for speed. Its low-range gearing and traction-focused design let it maintain steady output under heavy draft loads, such as pulling a loaded implement through soil.',
        },
        {
          type: 'list',
          items: [
            'Provides mobile power rather than performing a single fixed task',
            'Engineered for high torque and traction at working speeds',
            'Compatible with a broad ecosystem of interchangeable implements',
          ],
        },
      ],
    },
    {
      id: 'how-a-tractor-delivers-power',
      heading: 'How a tractor delivers power',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Drawbar',
              description:
                'A rear hitch point for towed implements and trailers',
            },
            {
              term: 'Three-point linkage',
              description:
                'A standardised mounting system that raises, lowers, and controls rear- or front-mounted implements',
            },
            {
              term: 'Power take-off (PTO)',
              description:
                'A rotating shaft that drives an implement’s own moving parts, such as a mower blade or baler mechanism',
            },
            {
              term: 'Hydraulic outlets',
              description:
                'Supply pressurised oil to power implement cylinders, motors, or folding mechanisms',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because these four outputs can be combined, a single tractor can tow a trailer, lift an implement, drive its rotating parts, and operate its hydraulics all at once, which is what makes it a general-purpose power platform rather than a task-specific machine.',
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Tractors are involved at almost every stage of crop production where mechanisation is used: seedbed preparation and tillage, planting or drilling, in-season spraying and cultivation, and haulage of inputs and harvested material. On many farms the tractor fleet, rather than any single implement, determines how much field work can be completed within a given weather window.',
        },
        {
          type: 'paragraph',
          text: 'In livestock and mixed operations, tractors also power forage-handling equipment, such as mowers and balers, and are used for general materials handling around the farmstead.',
        },
      ],
    },
    {
      id: 'tractor-types-and-configurations',
      heading: 'Types and configurations',
      body: [
        {
          type: 'list',
          items: [
            'Two-wheel-drive (2WD) tractors — lighter, common for lower-draft tasks and established markets',
            'Four-wheel-drive (4WD) and articulated tractors — higher traction and power for heavy tillage and large-scale operations',
            'Compact and utility tractors — smaller frames for orchards, vineyards, livestock, and mixed-use farms',
            'Track-laying (crawler) tractors — reduced ground pressure for very heavy draft loads or sensitive soils',
          ],
        },
      ],
    },
    {
      id: 'selection-and-operating-considerations',
      heading: 'Selection and operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Choosing and running a tractor involves balancing engine power and weight against the implements it will operate, the field size and terrain, and the soil conditions it will work in. Oversized or undersized power relative to the implement reduces efficiency and can accelerate wear.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Wheel or track configuration, tyre inflation, and ballast all influence soil compaction risk, particularly on wet or fine-textured soils. Specific weight, tyre, and pressure recommendations are equipment- and soil-specific.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'baler' },
  ],
  connections: [
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'moldboard-plough' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'gps-guidance-system' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'crop', slug: 'wheat' },
  ],
  geographicScope:
    'General overview of tractors as used across mechanised farming systems worldwide. Typical power classes, fuel types, and configurations vary by region and farm scale.',
  limitations: [
    'This entry describes tractor function and configuration in general terms; it does not recommend specific makes, models, or power ratings.',
    'Compaction risk and ballast/tyre-pressure guidance depend on soil type and moisture and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Tractor power delivery and implement matching',
    },
    { sourceId: 'usda-ars', citedFor: 'Field machinery research context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of farm mechanisation in production systems',
    },
    { sourceId: 'usda-nass', citedFor: 'Farm machinery use context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tractor',
    description:
      'Tractors as the core farm power source: how drawbar, linkage, PTO, and hydraulic outputs work, their production-cycle role, and main configurations.',
    keywords: ['tractor', 'farm tractor', 'agricultural machinery', 'PTO'],
  },
  structuredData: { article: true },
};
