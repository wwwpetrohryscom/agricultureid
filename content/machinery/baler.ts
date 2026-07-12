import type { MachineryContent } from '@/types/content';

export const baler: MachineryContent = {
  id: 'machinery-baler',
  slug: 'baler',
  contentType: 'machinery',
  title: 'Baler',
  category: 'Agricultural machinery',
  subcategory: 'Forage-handling equipment',
  machineryClass: 'harvest',
  summary:
    'A baler gathers cut, dried forage or crop residue from the ground and compresses it into round or rectangular bales bound with twine, net wrap, or wire, producing a compact, storable, and transportable form for feeding or bedding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A baler is towed behind a windrow of cut material — typically hay, straw, or other forage that has been mown and dried in the field — and picks it up, compresses it, and forms it into bales that hold their shape for handling, storage, and transport.',
    },
    {
      type: 'paragraph',
      text: 'Baling is the step that converts a loose, bulky windrow into a dense, uniform unit, dramatically reducing the volume and handling effort compared with loose forage, which is central to why it became standard practice for hay and straw.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value: 'Compressing cut, dried forage or residue into bound bales',
    },
    {
      label: 'Key components',
      value:
        'Pickup mechanism, compression chamber, binding system (twine, net, or wire)',
    },
    {
      label: 'Common bale shapes',
      value: 'Round bales and rectangular (square) bales',
    },
    { label: 'Typical material', value: 'Hay, straw, and other dried forage' },
    {
      label: 'Preceding step',
      value: 'Mowing and field-drying (curing) of the material before baling',
    },
    { label: 'End use', value: 'Livestock feed, bedding, and mulch' },
  ],
  sections: [
    {
      id: 'what-a-baler-is',
      heading: 'What a baler is',
      body: [
        {
          type: 'paragraph',
          text: 'A baler’s role is to collect windrowed material and form it into a compact, bound unit. It follows mowing and field curing in the forage-harvest sequence, and the resulting bales are the standard unit for storing and transporting hay, straw, and similar material.',
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
            'A pickup reel lifts windrowed material from the ground into the machine',
            'The material is fed into a compression chamber',
            'A plunger (rectangular balers) or rotating belts/rollers (round balers) compress the material into shape',
            'Twine, net wrap, or wire is applied to bind the bale and hold its form',
            'The finished bale is ejected onto the field for collection',
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
          text: 'Baling completes the forage harvest sequence that begins with mowing and field-drying, and its timing relative to moisture content affects storage quality: material baled too wet is prone to heating and mould, while material baled too dry can shatter and lose leaf material.',
        },
        {
          type: 'paragraph',
          text: 'Baled hay, straw, and silage-wrapped forage are central inputs to livestock feeding programs, and straw bales are also used for bedding, mulch, and erosion control.',
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
              term: 'Round baler',
              description:
                'Forms cylindrical bales, commonly handled with front-end loaders or bale spears',
            },
            {
              term: 'Small rectangular (square) baler',
              description:
                'Produces smaller bales traditionally handled manually',
            },
            {
              term: 'Large rectangular baler',
              description:
                'Produces large, dense rectangular bales suited to bulk handling and transport',
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
          text: 'Moisture content at baling, bale density, and storage conditions (such as shelter from rain) all affect forage quality retention and the risk of spoilage or, in extreme cases, spontaneous combustion in improperly cured hay.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Target baling moisture varies by crop, bale type, and storage method; consult regional forage-management guidance rather than a single fixed value.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'horses' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'machinery', slug: 'rotary-mower' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'General overview of balers as used in forage and straw handling worldwide. Bale types and typical practice vary by region and farming system.',
  limitations: [
    'This entry describes baler function and types in general terms; it does not specify target moisture levels, which vary by crop, bale type, and storage method.',
    'Storage risks such as mould or heating depend on moisture, bale density, and storage conditions not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Baler operation and forage handling',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Forage quality and storage research context',
    },
    { sourceId: 'ahdb', citedFor: 'Forage and hay management context' },
    {
      sourceId: 'fao',
      citedFor: 'Role of forage conservation in livestock systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Baler',
    description:
      'Agricultural balers explained: how pickup, compression, and binding systems form hay and straw into round or rectangular bales for storage and feeding.',
    keywords: ['baler', 'hay baler', 'round bales', 'forage equipment'],
  },
  structuredData: { article: true },
};
