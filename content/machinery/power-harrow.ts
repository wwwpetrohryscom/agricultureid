import type { MachineryContent } from '@/types/content';

export const powerHarrow: MachineryContent = {
  id: 'machinery-power-harrow',
  slug: 'power-harrow',
  contentType: 'machinery',
  title: 'Power Harrow',
  alternativeNames: ['Rotary harrow'],
  category: 'Agricultural machinery',
  subcategory: 'Secondary tillage equipment',
  machineryClass: 'tillage',
  summary:
    'A power harrow is a tractor-driven secondary tillage implement whose vertically mounted tines rotate on vertical axes to break down clods and prepare a level, fine seedbed without inverting the soil profile.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A power harrow uses power taken from the tractor’s power take-off (PTO) to drive pairs of tines that rotate about vertical axes, working the topsoil sideways rather than turning it over. This crumbling and levelling action produces a uniform, fine tilth suited to seed placement while largely preserving the existing layering of the soil beneath the worked depth.',
    },
    {
      type: 'paragraph',
      text: 'Because it is powered rather than relying only on forward draught, a power harrow can prepare a seedbed in fewer passes than some passive implements, and it is frequently combined with a seed drill in a single "one-pass" combination that cultivates and sows together. A rear roller or crumbler bar typically follows the tines to consolidate and set the working depth.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Secondary tillage and seedbed preparation',
    },
    {
      label: 'Working action',
      value:
        'PTO-driven tines rotating on vertical axes crumble and level the topsoil',
    },
    {
      label: 'Soil movement',
      value: 'Mixes and levels the surface layer without inverting the profile',
    },
    {
      label: 'Common pairing',
      value: 'Often mounted with a seed drill as a combined power-harrow drill',
    },
    {
      label: 'Depth control',
      value:
        'A rear roller or crumbler bar consolidates the tilth and sets working depth',
    },
    {
      label: 'Operating consideration',
      value:
        'Best suited to soil at a workable moisture; wet soil can smear and clod',
    },
  ],
  sections: [
    {
      id: 'what-a-power-harrow-is',
      heading: 'What a power harrow is',
      body: [
        {
          type: 'paragraph',
          text: 'A power harrow is a secondary-tillage implement used after primary cultivation (such as ploughing or deep loosening) to refine the surface into a seedbed. Unlike a plough, it does not invert the soil; its rotating tines work horizontally to shatter clods and produce an even, level surface for sowing.',
        },
        {
          type: 'paragraph',
          text: 'It is distinguished from a passive chain or spike harrow by being actively driven from the tractor PTO, which lets it develop a fine tilth even in firmer conditions and allows working depth and intensity to be set somewhat independently of forward speed.',
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
            'The tractor PTO drives a gear train along the top of the implement',
            'Paired tines mounted on rotors turn on vertical axes, sweeping through the topsoil',
            'The rotating tines crumble clods and level the surface without turning it over',
            'A following roller or crumbler bar consolidates the tilth and controls working depth',
            'In combination units, a seed drill mounted behind sows into the freshly prepared seedbed',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-tillage-sequence',
      heading: 'Role in the tillage sequence',
      body: [
        {
          type: 'paragraph',
          text: 'The power harrow sits at the seedbed-finishing stage of a conventional tillage sequence, after primary loosening has fractured and, where used, inverted the soil. Its ability to create a level, fine seedbed in one or two passes, and to be combined directly with a drill, can reduce the number of separate field operations and therefore the total field traffic before sowing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Because the tines actively work the topsoil, operating on wet soil can smear the surface and, over time, contribute to compaction of the layer just below the worked depth; timing to workable moisture matters.',
        },
      ],
    },
    {
      id: 'operating-considerations',
      heading: 'Operating considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Tilth fineness is governed by rotor speed, forward speed, working depth, and soil moisture, and an over-fine tilth can increase the risk of surface crusting and erosion on vulnerable soils. Matching working intensity to the crop and conditions — rather than working the soil as finely as possible — is generally preferred.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Appropriate working depth, rotor speed, and tilth vary with soil type, moisture, and the crop being established; there is no single universal setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'disc-harrow' },
    { type: 'machinery', slug: 'cultivator' },
    { type: 'machinery', slug: 'seed-drill' },
  ],
  connections: [
    { type: 'machinery', slug: 'tractor' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'planter' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-crusting' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  glossaryTerms: ['agronomy'],
  geographicScope:
    'General overview of the power harrow as used in mechanised seedbed preparation worldwide. Working depth, tilth, and pairing with drills are adapted to local soils, crops, and conditions.',
  limitations: [
    'This entry describes power-harrow function in general terms; it does not specify rotor speeds, working depths, or forward speeds, which are soil- and crop-specific.',
    'Effects on tilth, crusting, and compaction depend strongly on soil type and moisture at the time of working and are not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Seedbed preparation and secondary tillage practice',
    },
    { sourceId: 'fao', citedFor: 'Role of tillage in seedbed establishment' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Tillage effects on soil structure and surface condition',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Power Harrow',
    description:
      'Power harrows explained: how PTO-driven vertical tines crumble clods into a level seedbed without inverting soil, and their role in tillage.',
    keywords: [
      'power harrow',
      'rotary harrow',
      'secondary tillage',
      'seedbed preparation',
    ],
  },
  structuredData: { article: true },
};
