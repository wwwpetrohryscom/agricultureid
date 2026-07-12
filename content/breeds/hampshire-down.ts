import type { BreedContent } from '@/types/content';

export const hampshireDown: BreedContent = {
  id: 'hampshire-down',
  slug: 'hampshire-down',
  contentType: 'breed',
  title: 'Hampshire Down',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'United Kingdom',
  originRegion: 'Hampshire, southern England',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Hampshire Down is an English Down meat breed with a dark face and legs, used chiefly as a terminal sire to produce fast-growing, well-conformed market lambs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Hampshire Down is a meat sheep breed from southern England, one of the group of British "Down" breeds developed with Southdown influence. It has a dark brown to black face and legs and wool over the poll, and is valued for early lamb growth.',
    },
    {
      type: 'paragraph',
      text: 'Like other Down breeds, the Hampshire Down is used primarily as a terminal sire, crossed with ewes of other breeds to produce market lambs. It is maintained by a breed society in the United Kingdom and is bred in a number of other countries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Hampshire, southern England' },
    { label: 'Breed type', value: 'Meat (Down breed; terminal sire)' },
    {
      label: 'Primary uses',
      value: 'Market lamb production; crossbreeding sire',
    },
    {
      label: 'Distinctive trait',
      value: 'Dark face and legs; wool over the poll',
    },
    {
      label: 'Registry',
      value: 'Hampshire Down Sheep Breeders’ Association; FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Hampshire Down developed in Hampshire in the nineteenth century by combining local horned sheep of the region with Southdown blood, producing a larger Down breed selected for meat and early maturity. It was organised through a breed society and has been exported to various countries.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Hampshire Downs are polled sheep of medium to large size with a characteristic dark brown to black face and legs, wool extending over the poll, and a white body fleece. They are selected chiefly for lamb growth and carcass quality.',
        },
        {
          type: 'paragraph',
          text: 'As a Down breed, the Hampshire Down is used mainly as a terminal sire, contributing growth and conformation to crossbred lambs.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Hampshire Downs are kept in temperate pasture-based and mixed farming systems, principally for prime-lamb production. The breed is found in the United Kingdom and in other regions including continental Europe and North and South America.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Growth and carcass characteristics vary with bloodline, nutrition, and management; flock-specific performance should come from breeders or recorded data.',
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
      note: 'Hampshire Down is recorded in the global breed inventory.',
    },
    {
      registry: 'Hampshire Down Sheep Breeders’ Association',
      jurisdiction: 'United Kingdom',
      asOf: '2026-07-12',
      note: 'UK breed society maintaining the flock book; associations exist in other countries.',
    },
  ],
  primaryUses: ['Market lamb (meat) production', 'Terminal-sire crossbreeding'],
  physicalCharacteristics:
    'Polled, medium to large sheep with a dark brown to black face and legs, wool over the poll, and a white body fleece.',
  productionCharacteristics:
    'Selected for early lamb growth and carcass quality; used chiefly as a terminal sire on other breeds.',
  climateAdaptation:
    'Suited to temperate pasture-based and mixed farming systems.',
  managementContext:
    'Managed in prime-lamb systems, with emphasis on lamb growth rather than wool.',
  geographicDistribution:
    'Found in the United Kingdom and in regions including continental Europe and the Americas.',
  connections: [{ type: 'farming-system', slug: 'mixed-farming' }],
  relatedTopics: [{ type: 'breed', slug: 'suffolk-sheep' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope: 'Global; English in origin and bred in several countries.',
  climateContext:
    'Temperate pasture and mixed systems; management emphasises lamb growth.',
  limitations: [
    'Growth and carcass traits vary with bloodline, nutrition, and management; general descriptions are indicative only.',
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
    title: 'Hampshire Down (sheep breed)',
    description:
      'The Hampshire Down, an English Down meat breed with a dark face used as a terminal sire for market lambs: origin, physical traits, and management context.',
    keywords: [
      'Hampshire Down',
      'Down sheep breed',
      'terminal sire',
      'Ovis aries',
    ],
  },
  structuredData: { article: true },
};
