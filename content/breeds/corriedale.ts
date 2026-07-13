import type { BreedContent } from '@/types/content';

export const corriedale: BreedContent = {
  id: 'corriedale',
  slug: 'corriedale',
  contentType: 'breed',
  title: 'Corriedale',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Dual-purpose',
  originCountry: 'New Zealand',
  originRegion: 'Developed in New Zealand and Australia',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Corriedale is a dual-purpose sheep breed developed in New Zealand and Australia by crossing longwool rams with Merino ewes, producing both medium wool and meat; it is very numerous in South America.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Corriedale is one of the oldest of the crossbred, dual-purpose sheep breeds, developed in New Zealand and Australia in the late nineteenth and early twentieth centuries. It was created by crossing longwool rams, such as Lincoln or Leicester, with Merino ewes and then fixing an intermediate, dual-purpose type.',
    },
    {
      type: 'paragraph',
      text: 'The breed combines medium-fine wool with useful meat characteristics and adaptability, and became widely distributed. It is especially numerous in South America, where it forms a large part of the flocks of countries such as Uruguay and Argentina, and is also kept in North America, Australasia, and elsewhere.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'New Zealand and Australia' },
    { label: 'Breed type', value: 'Dual-purpose (wool and meat)' },
    {
      label: 'Foundation',
      value: 'Longwool (Lincoln/Leicester) rams × Merino ewes',
    },
    {
      label: 'Notable trait',
      value: 'Medium-fine wool with meat conformation',
    },
    {
      label: 'Registry',
      value: 'Corriedale associations; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Corriedale was developed by crossing longwool sires with Merino ewes and interbreeding the crossbreds to fix a stable dual-purpose type; the name derives from an estate in New Zealand associated with the breed’s development. It was among the first such fixed halfbred breeds and was exported widely, becoming a foundation breed in the temperate grasslands of South America in particular.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Corriedales are white-faced, generally polled sheep of medium to large size carrying a dense fleece of medium-fine wool that is intermediate between the fine Merino and the coarser longwools. As a dual-purpose breed they are managed for both a wool clip and meat.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wool',
              description:
                'Medium-fine fleece intermediate between the Merino and longwool parent types, used for a range of textile purposes.',
            },
            {
              term: 'Meat',
              description:
                'Reasonable carcass conformation supports lamb and mutton production alongside wool.',
            },
          ],
        },
      ],
    },
    {
      id: 'adaptation-and-distribution',
      heading: 'Adaptation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Corriedale is valued for adaptability and dual-purpose output in extensive temperate grazing systems. It is very numerous in South America and is also kept in North America, Australasia, and other regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Wool fineness and carcass traits vary with strain, selection, and environment; the breed spans a range of types between its Merino and longwool ancestry.',
        },
      ],
    },
  ],
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Corriedale and its national populations are recorded in the global breed inventory.',
    },
    {
      registry:
        'Corriedale breed associations (e.g. in South America, North America, and Australasia)',
      jurisdiction: 'Multiple countries',
      asOf: '2026-07-12',
      note: 'Herd books are maintained by national Corriedale associations; structures differ by country.',
    },
  ],
  primaryUses: ['Medium-fine wool', 'Meat (lamb and mutton)', 'Crossbreeding'],
  physicalCharacteristics:
    'White-faced, usually polled sheep of medium to large size with a dense fleece of medium-fine wool intermediate between Merino and longwool.',
  productionCharacteristics:
    'Dual-purpose, producing both medium-fine wool and meat; valued for adaptability in extensive grazing.',
  climateAdaptation:
    'Suited to extensive temperate grazing systems, including the grasslands of South America.',
  managementContext:
    'Managed in extensive pasture systems for a combination of wool and meat.',
  geographicDistribution:
    'Very numerous in South America, and also kept in North America, Australasia, and other regions.',
  connections: [
    { type: 'breed', slug: 'merino' },
    { type: 'breed', slug: 'lincoln-longwool' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; developed in New Zealand and Australia, with a major presence in South America.',
  climateContext:
    'Extensive temperate grazing; a widely adaptable dual-purpose type.',
  limitations: [
    'The Corriedale spans a range of types between its Merino and longwool ancestry; wool and carcass traits vary with strain and management.',
    'Conservation and registry status is date- and source-specific and differs between national populations and registries.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Breed record, origin, and characteristics in the global inventory',
    },
    { sourceId: 'cabi', citedFor: 'Breed characterization and background' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Corriedale (sheep breed)',
    description:
      'The Corriedale, a dual-purpose breed from New Zealand and Australia, bred from longwool rams and Merino ewes and numerous in South America: origin and traits.',
    keywords: [
      'Corriedale sheep',
      'dual-purpose breed',
      'halfbred sheep',
      'Ovis aries',
    ],
  },
  structuredData: { article: true },
};
