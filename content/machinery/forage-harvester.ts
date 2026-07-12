import type { MachineryContent } from '@/types/content';

export const forageHarvester: MachineryContent = {
  id: 'machinery-forage-harvester',
  slug: 'forage-harvester',
  contentType: 'machinery',
  title: 'Forage Harvester',
  alternativeNames: ['Silage harvester', 'Chopper harvester'],
  category: 'Agricultural machinery',
  subcategory: 'Forage harvesting equipment',
  machineryClass: 'harvest',
  summary:
    'A forage harvester cuts standing forage crops such as grass, legumes, or whole-plant maize and chops them into small pieces for silage, blowing the chopped material into a following trailer or truck in a single continuous pass.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A forage harvester is built to cut and finely chop bulky green crops — grasses, legumes such as alfalfa, and whole-plant maize among others — producing material with a particle size suited to packing, fermenting, and storing as silage. Unlike a combine harvester, which threshes and separates grain, a forage harvester processes the entire above-ground plant material and delivers it, rather than depositing it on the ground, directly into a following trailer via a spout.',
    },
    {
      type: 'paragraph',
      text: 'Interchangeable header attachments allow a single forage harvester to work with different crops: a pickup header gathers pre-cut, wilted forage rows for hay or grass silage, while a row-crop header cuts and feeds standing maize or other tall row crops directly into the chopping mechanism.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Cutting and finely chopping forage crops for silage in a single pass',
    },
    {
      label: 'Key components',
      value:
        'Header (pickup or row-crop), chopping cylinder, and discharge spout',
    },
    {
      label: 'Common crops',
      value:
        'Grass and legume forage (for example alfalfa) and whole-plant maize',
    },
    {
      label: 'Output',
      value:
        'Finely chopped material blown into a following trailer for silage',
    },
    {
      label: 'Common configurations',
      value: 'Self-propelled and tractor-drawn (PTO) forage harvesters',
    },
    {
      label: 'Operating consideration',
      value:
        'Chop length and header choice are set to the crop and target forage quality',
    },
  ],
  sections: [
    {
      id: 'what-a-forage-harvester-is',
      heading: 'What a forage harvester is',
      body: [
        {
          type: 'paragraph',
          text: 'A forage harvester is defined by its chopping function and continuous discharge, processing bulky green material into uniform, densely packable pieces rather than cutting and leaving it in a windrow. This makes it the standard harvesting tool for producing silage at scale.',
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
            'A header cuts standing forage or picks up a pre-cut windrow',
            'Crop material is fed into a rotating chopping cylinder or drum fitted with knives',
            'The cylinder chops the material to a set length',
            'An accelerator and discharge spout blow the chopped forage into a trailer travelling alongside or behind',
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
          text: 'Forage harvesting is the central step linking standing forage or silage-maize crops to livestock feed supply, and the resulting chop length and moisture content strongly influence how well the material packs, ferments, and stores in a silo, clamp, or bag. Because it works continuously without stopping to unload, the forage harvester is typically paired with a fleet of trailers to keep pace with its output.',
        },
        {
          type: 'paragraph',
          text: 'Timely harvesting at the right crop moisture and maturity stage is important for silage quality, linking the operation closely to livestock feeding programmes on mixed crop–livestock farms.',
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
              term: 'Self-propelled forage harvester',
              description:
                'A dedicated, high-capacity machine used on larger operations and by contractors.',
            },
            {
              term: 'Trailed (PTO-driven) forage harvester',
              description:
                'Pulled and powered by a separate tractor, common on smaller or mixed farms.',
            },
            {
              term: 'Pickup header',
              description:
                'Gathers pre-cut, wilted forage rows for grass or legume silage.',
            },
            {
              term: 'Row-crop header',
              description:
                'Cuts and feeds standing maize or other tall row crops directly.',
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
          text: 'Chop length affects both silage packing density and fibre length available to livestock, and is adjusted according to crop type and target feed quality. High machine and labour costs mean that many smaller livestock operations use contractors for forage harvesting rather than owning the equipment.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Optimal harvest timing, moisture content, and chop length are crop- and system-specific; local forage and livestock nutrition guidance should inform these decisions rather than a fixed rule.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  geographicScope:
    'General overview of forage harvesters as used in silage production worldwide. Scale, header type, and crop use vary by farm size and region.',
  limitations: [
    'This entry describes forage harvester function and types in general terms; it does not specify chop lengths or harvest moisture targets, which are crop- and system-specific.',
    'Silage fermentation quality depends on storage method, packing, and management not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Forage harvesting and silage-making practice',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Forage and silage production research context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Forage harvesting and silage quality guidance context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of mechanised forage harvesting in livestock systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Forage Harvester',
    description:
      'Forage harvesters explained: how headers and chopping cylinders process grass, legume, and maize silage crops, their role in feed supply, and machine types.',
    keywords: [
      'forage harvester',
      'silage harvester',
      'chopper harvester',
      'silage making',
    ],
  },
  structuredData: { article: true },
};
