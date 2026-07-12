import type { BreedContent } from '@/types/content';

export const pollDorset: BreedContent = {
  id: 'poll-dorset',
  slug: 'poll-dorset',
  contentType: 'breed',
  title: 'Poll Dorset',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'Australia',
  originRegion: 'Developed from the Dorset Horn',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Poll Dorset is a polled (hornless) meat sheep breed developed in Australia from the Dorset Horn, valued for prime-lamb production and an extended breeding season.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Poll Dorset is a white, polled meat breed developed in Australia during the mid-twentieth century from the Dorset Horn, into which the polled (hornless) gene was introduced from other breeds. It is a leading prime-lamb sire in Australia and is also kept in other countries.',
    },
    {
      type: 'paragraph',
      text: 'Like the Dorset Horn from which it derives, the Poll Dorset is noted for an ability to breed outside the main autumn season, which supports lamb production across a wider part of the year in suitable systems.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Australia; developed from the Dorset Horn' },
    { label: 'Breed type', value: 'Meat (prime-lamb sire)' },
    {
      label: 'Primary uses',
      value: 'Prime-lamb production; crossbreeding sire',
    },
    { label: 'Distinctive trait', value: 'Polled; extended breeding season' },
    {
      label: 'Registry',
      value: 'Dorset breed societies; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Poll Dorset was developed in Australia by selecting for a polled form of the Dorset Horn, introducing the hornless gene from other breeds while retaining the Dorset’s meat qualities and breeding characteristics. It became established as a distinct breed in the twentieth century and is registered through Dorset breed bodies in Australia and elsewhere.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Poll Dorsets are white-woolled, white-faced sheep of medium to large size, distinguished from the Dorset Horn chiefly by being polled. They are selected for meat conformation and lamb growth.',
        },
        {
          type: 'paragraph',
          text: 'A notable trait of the Dorset types is a relatively extended breeding season compared with strictly seasonal breeds, which can allow lambing outside the usual season where management and conditions permit.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Poll Dorset is used both as a purebred and as a terminal or maternal sire in prime-lamb systems, particularly in Australia where it is a prominent meat breed. It is also kept in New Zealand, North America, and other regions. Management follows general pasture-based sheep husbandry with an emphasis on lamb production.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The degree of out-of-season breeding depends on strain, individual animals, nutrition, and environment, and should not be assumed uniform across the breed.',
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
      note: 'Poll Dorset is recorded in the global breed inventory.',
    },
    {
      registry:
        'Dorset breed societies (e.g. Australian Poll Dorset associations; Continental Dorset Club)',
      jurisdiction: 'Australia, United States, and other countries',
      asOf: '2026-07-12',
      note: 'Poll and Horn Dorset are registered through national Dorset breed bodies; structures differ by country.',
    },
  ],
  primaryUses: [
    'Prime-lamb (meat) production',
    'Terminal and maternal crossbreeding',
  ],
  physicalCharacteristics:
    'White-woolled, white-faced, polled sheep of medium to large size, differing from the Dorset Horn mainly in being hornless.',
  productionCharacteristics:
    'Selected for meat conformation and lamb growth; the Dorset types are noted for a relatively extended breeding season.',
  climateAdaptation:
    'Kept in temperate pasture-based systems across several continents.',
  managementContext:
    'Used purebred and as a sire in prime-lamb systems; out-of-season breeding potential is managed according to system and conditions.',
  geographicDistribution:
    'Prominent in Australia, and also kept in New Zealand, North America, and other regions.',
  connections: [
    { type: 'breed', slug: 'corriedale' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; developed in Australia from the Dorset Horn and bred in several countries.',
  climateContext:
    'Temperate pasture-based systems; management emphasises lamb production.',
  limitations: [
    'The extent of out-of-season breeding and of growth and carcass traits varies with strain, management, and environment; general descriptions are indicative only.',
    'Conservation and registry status is date- and source-specific and differs between national populations and registries.',
    'The Poll Dorset is closely related to, but distinct from, the horned Dorset Horn; sources sometimes treat the Dorset types together.',
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
    title: 'Poll Dorset (sheep breed)',
    description:
      'The Poll Dorset, a polled meat sheep developed in Australia from the Dorset Horn and known for prime lambs and an extended breeding season: origin and traits.',
    keywords: ['Poll Dorset', 'Dorset sheep', 'prime lamb breed', 'Ovis aries'],
  },
  structuredData: { article: true },
};
