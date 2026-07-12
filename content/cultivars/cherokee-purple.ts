import type { CultivarContent } from '@/types/content';

export const cherokeePurple: CultivarContent = {
  id: 'cherokee-purple',
  slug: 'cherokee-purple',
  contentType: 'cultivar',
  title: 'Cherokee Purple',
  category: 'Tomato cultivar',
  subcategory: 'Heirloom "black" beefsteak tomato',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Cherokee Purple',
  cultivarType: 'Heirloom',
  breedingType: 'Open-pollinated',
  originCountry: 'United States',
  originRegion: 'Tennessee (as commercially popularized)',
  registrationStatus: 'historical',
  maturityClass: 'Mid-season',
  growthHabit: 'Indeterminate',
  intendedUse: ['Fresh (slicing / beefsteak)'],
  climateAdaptation:
    'A warm-season indeterminate heirloom grown mainly in gardens; like other beefsteak types it favours a warm season for good fruit development.',
  qualityTraits: [
    'Large, flattened beefsteak fruit',
    'Dusky pink-purple colour with darker shoulders',
    'One of the well-known "black" or "purple" heirloom tomatoes',
  ],
  summary:
    'Cherokee Purple is an heirloom beefsteak tomato with dusky pink-purple fruit, popularized in the United States in the early 1990s and now a widely grown "black" heirloom.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cherokee Purple is an heirloom beefsteak tomato known for large, flattened fruit in a dusky pink-purple colour with darker shoulders. It grows on indeterminate plants and is grown for fresh use, valued as one of the best-known "black" or "purple" heirloom tomatoes.',
    },
    {
      type: 'paragraph',
      text: 'The variety was named and distributed commercially in the United States in the early 1990s, having been received from a Tennessee gardener. An older origin story linking it to the Cherokee people is often repeated but is anecdotal and not independently documented.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Heirloom beefsteak (indeterminate)' },
    { label: 'Growth habit', value: 'Indeterminate' },
    { label: 'Fruit', value: 'Large, dusky pink-purple beefsteak' },
    { label: 'Primary use', value: 'Fresh slicing' },
    { label: 'Popularized', value: 'United States, early 1990s' },
    { label: 'Registration status', value: 'Historical / heirloom' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Cherokee Purple is characterized by large beefsteak fruit whose skin and flesh take on a muddy rose-to-purple hue, often with green shoulders. The plants are indeterminate and fruit over an extended period, and the tomato is grown chiefly for fresh eating.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Indeterminate' },
            {
              term: 'Fruit type',
              description: 'Large beefsteak, dusky pink-purple',
            },
            {
              term: 'Intended use',
              description: 'Fresh slicing and table use',
            },
          ],
        },
      ],
    },
    {
      id: 'name-and-history',
      heading: 'Name and history',
      body: [
        {
          type: 'paragraph',
          text: 'The tomato entered wider circulation after a gardener in the United States received seed from a Tennessee source, named it Cherokee Purple, and shared it through the heirloom-seed community in the early 1990s. Its rise in popularity dates from that period.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The account of a much older Cherokee origin is part of the variety’s lore rather than a documented fact, and the "purple" label is a descriptive colour term, not a botanical classification.',
        },
      ],
    },
  ],
  connections: [{ type: 'soil', slug: 'loam-soil' }],
  geographicScope:
    'Popularized in the United States and now grown internationally by heirloom-tomato enthusiasts; its earlier history is not independently verified.',
  climateContext:
    'Warm-season indeterminate heirloom grown mainly in gardens across temperate and warm regions.',
  limitations: [
    'The pre-commercial history of Cherokee Purple is anecdotal and not independently documented, so no verified breeder or exact origin date is asserted here.',
    'Fruit colour terms such as "purple" and "black" are descriptive and can vary with ripeness, light, and growing conditions.',
    'As an indeterminate heirloom, its plant behaviour and fruit quality depend heavily on the local climate and season.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and heirloom cultivar nomenclature',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cherokee Purple (tomato cultivar)',
    description:
      'Cherokee Purple is an heirloom beefsteak tomato with dusky purple fruit, popularized in the early 1990s. Its traits, name history, and honest caveats.',
    keywords: [
      'Cherokee Purple',
      'heirloom tomato',
      'black tomato',
      'beefsteak tomato',
    ],
  },
  structuredData: { article: true },
};
