import type { MachineryContent } from '@/types/content';

export const cultivator: MachineryContent = {
  id: 'machinery-cultivator',
  slug: 'cultivator',
  contentType: 'machinery',
  title: 'Cultivator',
  category: 'Agricultural machinery',
  subcategory: 'Secondary tillage and inter-row equipment',
  machineryClass: 'tillage',
  summary:
    'A cultivator uses rows of shanks, tines, or sweeps to stir and loosen shallow soil, used either as a secondary tillage tool for seedbed preparation or, mounted between crop rows, for mechanical weed control during the growing season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A cultivator is a general-purpose shallow-tillage implement built around a toolbar carrying shanks, tines, or sweeps that stir the soil surface without the more complete inversion of a moldboard plough or the disc action of a disc harrow. The term covers two related but distinct uses: field cultivators, which prepare or refine a seedbed before planting, and row-crop cultivators, which are guided between growing crop rows to control weeds and loosen surface soil during the season.',
    },
    {
      type: 'paragraph',
      text: 'Because cultivation disturbs soil less aggressively than primary tillage, it is often used as one of the final steps before planting to level and firm a seedbed, or as a repeated in-season pass in row crops to manage weeds where herbicide use is limited, supplemented, or avoided.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Shallow stirring of soil for seedbed preparation or in-season weed control',
    },
    {
      label: 'Key components',
      value:
        'Toolbar-mounted shanks, tines, or sweeps; optional guidance for row-crop use',
    },
    {
      label: 'Main uses',
      value:
        'Secondary tillage before planting; mechanical weeding between crop rows',
    },
    {
      label: 'Common configurations',
      value: 'Field cultivators, row-crop cultivators, and rotary cultivators',
    },
    {
      label: 'Effect on residue',
      value: 'Mixes some residue into the surface without full inversion',
    },
    {
      label: 'Operating consideration',
      value:
        'Working depth and shank spacing are set for the soil condition and crop stage',
    },
  ],
  sections: [
    {
      id: 'what-a-cultivator-is',
      heading: 'What a cultivator is',
      body: [
        {
          type: 'paragraph',
          text: 'A cultivator is defined less by a single fixed design than by its function: stirring and loosening shallow soil with rigid or spring-loaded shanks, tines, or sweeps. This flexible category spans implements used purely for seedbed preparation and implements precisely guided between rows of a standing crop.',
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
            'Shanks, tines, or sweeps mounted on a toolbar are drawn through the topsoil',
            'The tools loosen compacted or crusted soil and cut or uproot weeds',
            'In row-crop use, shields or guidance systems keep tools working between rows without damaging the crop',
            'Working depth and tool spacing are adjusted for the soil condition and crop stage',
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
          text: 'As a secondary tillage tool, cultivation refines the soil surface after primary tillage, breaking clods and levelling the field ahead of planting. As an in-season row-crop tool, cultivation loosens surface crusting, aerates the topsoil, and removes weeds that compete with the crop for light, water, and nutrients.',
        },
        {
          type: 'paragraph',
          text: 'Mechanical cultivation is a core practice in organic production systems, where herbicide use is restricted or excluded, and is also used in conventional systems to supplement or reduce reliance on herbicides.',
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
              term: 'Field cultivator',
              description:
                'Wide toolbar with spring-loaded shanks, used for secondary tillage and seedbed levelling.',
            },
            {
              term: 'Row-crop cultivator',
              description:
                'Narrower tool sets guided between crop rows for in-season weed control and soil aeration.',
            },
            {
              term: 'Rotary cultivator (rotary tiller)',
              description:
                'Powered, rotating tines that intensively mix soil, often used on smaller areas or for finer seedbed preparation.',
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
          text: 'Cultivation depth, timing, and frequency affect weed-control efficacy, soil moisture conservation, and the risk of disturbing crop roots or compacting soil at a consistent depth over repeated passes. Row-crop cultivation also requires accurate guidance to avoid damaging the growing crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Optimal cultivation timing and depth depend on weed growth stage, crop stage, and soil moisture; local agronomic guidance should inform scheduling rather than a fixed calendar.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'subsoiler' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-aeration' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  geographicScope:
    'General overview of cultivators as used in seedbed preparation and mechanical weed control worldwide. Design and use vary by crop, soil, and farming system.',
  limitations: [
    'This entry describes cultivator function and types in general terms; it does not specify working depths or cultivation schedules, which are crop- and region-specific.',
    'Weed-control effectiveness depends on weed species, growth stage, and soil moisture not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Cultivator function and mechanical weed control',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Tillage and cultivation research context',
    },
    { sourceId: 'ahdb', citedFor: 'Seedbed preparation guidance context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of cultivation in crop production systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cultivator',
    description:
      'Cultivators explained: how shanks, tines, and sweeps prepare a seedbed or control weeds between crop rows, plus field, row-crop, and rotary types.',
    keywords: [
      'cultivator',
      'secondary tillage',
      'mechanical weeding',
      'row-crop cultivation',
    ],
  },
  structuredData: { article: true },
};
