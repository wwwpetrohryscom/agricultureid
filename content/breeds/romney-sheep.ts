import type { BreedContent } from '@/types/content';

export const romneySheep: BreedContent = {
  id: 'romney-sheep',
  slug: 'romney-sheep',
  contentType: 'breed',
  title: 'Romney',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'Romney Marsh, Kent, England',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Romney is a dual-purpose longwool sheep breed from the Romney Marsh of Kent, England, valued for long-stapled wool and meat and noted for hardiness on wet, low-lying pasture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Romney, sometimes called Romney Marsh or Kent, is a longwool dual-purpose breed originating in the marshland of south-east England. It produces long, lustrous wool and meat, and is historically associated with hardiness on wet, low-lying grazing.',
    },
    {
      type: 'paragraph',
      text: 'The breed was exported widely and became especially important in New Zealand, where Romney and Romney-derived sheep form a large part of the national flock. It is maintained by breed societies in the United Kingdom, New Zealand, and other countries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Romney Marsh, Kent, England' },
    { label: 'Breed type', value: 'Dual-purpose (longwool and meat)' },
    { label: 'Primary uses', value: 'Long-stapled wool; meat' },
    { label: 'Notable trait', value: 'Hardiness on wet, low-lying pasture' },
    {
      label: 'Registry',
      value: 'Romney breed societies; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Romney developed on the Romney Marsh of Kent, a low, wet coastal landscape, where sheep adapted to damp underfoot conditions were valued. From the nineteenth century the breed was exported extensively, and it became a foundation of the New Zealand sheep industry, where it and its derivatives are very numerous.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Romneys are white-faced, typically polled sheep carrying a long, lustrous fleece of longwool type. As a dual-purpose breed they are kept for both wool and meat, with the balance depending on the system and market.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The breed is traditionally regarded as hardy on wet ground; the extent of any advantage depends on management, environment, and selection, and is described here in general terms only.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Romneys are kept in pasture-based systems, including lowland and hill grazing, and are managed for both a wool clip and lamb or mutton production. The breed is distributed internationally, with particularly large populations in New Zealand alongside the United Kingdom, the Americas, and other regions.',
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
      note: 'Romney and its national populations are recorded in the global breed inventory.',
    },
    {
      registry:
        'Romney breed societies (e.g. UK Romney Sheep Breeders’ Society; New Zealand Romney associations)',
      jurisdiction: 'United Kingdom, New Zealand, and other countries',
      asOf: '2026-07-12',
      note: 'Herd books are maintained by national Romney breed bodies; structures differ by country.',
    },
  ],
  primaryUses: ['Long-stapled wool', 'Meat (lamb and mutton)', 'Crossbreeding'],
  physicalCharacteristics:
    'White-faced, usually polled sheep with a long, lustrous longwool fleece; medium to large in size.',
  productionCharacteristics:
    'Dual-purpose, producing both longwool and meat; traditionally regarded as hardy on damp, low-lying pasture.',
  climateAdaptation:
    'Associated with cool, moist, low-lying grazing environments, and adaptable to a range of temperate pasture systems.',
  managementContext:
    'Managed in pasture-based lowland and hill systems for a combination of wool and meat.',
  geographicDistribution:
    'International, with very large populations in New Zealand and substantial numbers in the United Kingdom and the Americas.',
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; English in origin, with a major presence in New Zealand.',
  climateContext:
    'Cool, moist temperate grazing; noted historically for tolerance of wet ground.',
  limitations: [
    'Wool and meat characteristics and any wet-ground hardiness vary with strain, management, and environment; general descriptions are indicative only.',
    'Conservation and registry status is date- and source-specific and differs between national populations and registries.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Breed record, origin, and characteristics in the global inventory',
    },
    { sourceId: 'cabi', citedFor: 'Breed characterization and background' },
    {
      sourceId: 'britannica',
      citedFor: 'General historical and background context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Romney (sheep breed)',
    description:
      'The Romney, a dual-purpose longwool from Kent and a mainstay of New Zealand flocks: origin, wool and meat traits, and wet-pasture hardiness.',
    keywords: ['Romney sheep', 'Romney Marsh', 'longwool breed', 'Ovis aries'],
  },
  structuredData: { article: true },
};
