import type { BreedContent } from '@/types/content';

export const katahdin: BreedContent = {
  id: 'katahdin',
  slug: 'katahdin',
  contentType: 'breed',
  title: 'Katahdin',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'United States',
  originRegion: 'Maine, United States',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Katahdin is a North American hair sheep breed developed in Maine for low-maintenance meat production, carrying a hair coat that sheds so that shearing is not required.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Katahdin is a meat sheep breed developed in the United States, in Maine, during the mid-to-late twentieth century. It was created by combining hair sheep of Caribbean origin with several wool breeds and selecting for a hair coat that sheds, good meat characteristics, and ease of management.',
    },
    {
      type: 'paragraph',
      text: 'Because the coat sheds seasonally, Katahdins do not require shearing, which suits low-input meat systems. The breed has grown rapidly in numbers in North America and is registered through Katahdin Hair Sheep International.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Maine, United States' },
    { label: 'Breed type', value: 'Meat (shedding hair coat)' },
    { label: 'Primary uses', value: 'Low-maintenance meat lamb production' },
    {
      label: 'Distinctive trait',
      value: 'Hair coat that sheds; no shearing required',
    },
    {
      label: 'Registry',
      value: 'Katahdin Hair Sheep International; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Katahdin was developed by a breeder in Maine who crossed hair sheep imported from the Caribbean with wool breeds and later added further hair-sheep influence to fix a shedding coat while improving meat conformation. It was named after Mount Katahdin, and a breed association was established to register and promote the breed, which has since expanded widely in North America.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Katahdins are medium-sized meat sheep with a hair coat, in a variety of colours and patterns, that grows heavier in winter and sheds in warmer weather. They are selected for meat production and for low-maintenance traits rather than wool.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for ease of care, including the absence of a need for shearing, and is used both purebred and in crossbreeding for meat.',
        },
      ],
    },
    {
      id: 'adaptation-and-distribution',
      heading: 'Adaptation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Katahdins are adaptable and are kept across a range of conditions, including warm and humid environments as well as more temperate ones, in low-input, pasture-based meat systems. They are now widespread in the United States and are also kept in Canada and other countries.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Coat shedding, hardiness, and other traits vary between individuals, lines, and environments; general descriptions are not a substitute for flock records.',
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
      note: 'Katahdin is recorded in the global breed inventory.',
    },
    {
      registry: 'Katahdin Hair Sheep International (KHSI)',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Breed association maintaining the registry and breed standard.',
    },
  ],
  primaryUses: ['Low-maintenance meat lamb production', 'Crossbreeding'],
  physicalCharacteristics:
    'Medium-sized meat sheep with a hair coat in various colours that grows in winter and sheds in warmer weather; no wool fleece to shear.',
  productionCharacteristics:
    'Selected for meat and low-maintenance traits rather than wool; used purebred and in crossbreeding.',
  climateAdaptation:
    'Adaptable across warm, humid, and temperate conditions in low-input, pasture-based systems.',
  managementContext:
    'Managed in low-input meat systems, valued for ease of care including no requirement for shearing.',
  geographicDistribution:
    'Widespread in the United States, and also kept in Canada and other countries.',
  connections: [{ type: 'climate', slug: 'heat-stress' }],
  relatedTopics: [{ type: 'breed', slug: 'dorper' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; developed in the United States and expanding in North America and beyond.',
  climateContext:
    'Adaptable to warm, humid, and temperate conditions; a low-input hair breed.',
  limitations: [
    'Coat shedding, hardiness, and meat traits vary between individuals, lines, and environments; general descriptions are indicative only.',
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
    title: 'Katahdin (sheep breed)',
    description:
      'The Katahdin, a North American hair sheep from Maine bred for low-input meat with a shedding coat and no shearing: origin, traits, and adaptation.',
    keywords: ['Katahdin sheep', 'hair sheep', 'meat breed', 'shedding sheep'],
  },
  structuredData: { article: true },
};
