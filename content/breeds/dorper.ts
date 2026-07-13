import type { BreedContent } from '@/types/content';

export const dorper: BreedContent = {
  id: 'dorper',
  slug: 'dorper',
  contentType: 'breed',
  title: 'Dorper',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'South Africa',
  originRegion: 'Developed for arid regions of South Africa',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Dorper is a South African meat sheep breed developed for arid conditions, carrying a short coat of mixed hair and wool that sheds, so shearing is generally not required.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Dorper is a meat sheep breed developed in South Africa in the twentieth century by crossing Dorset Horn with Blackhead Persian sheep, with the aim of producing a hardy meat animal suited to arid and extensive conditions. It typically has a white body and a black head, while a predominantly white form is known as the White Dorper.',
    },
    {
      type: 'paragraph',
      text: 'A defining feature is its short coat of mixed hair and wool that is shed, so the breed generally does not require shearing. The Dorper has spread widely and is now kept in many countries with warm or dry climates as well as in more temperate regions.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'South Africa' },
    { label: 'Breed type', value: 'Meat (shedding hair/wool coat)' },
    { label: 'Foundation', value: 'Dorset Horn × Blackhead Persian' },
    {
      label: 'Distinctive trait',
      value: 'Shedding coat; no shearing generally required',
    },
    {
      label: 'Registry',
      value: 'Dorper Sheep Breeders’ Society of South Africa; FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Dorper was developed in South Africa to provide a meat sheep able to perform under arid, extensive conditions, combining the meat qualities of the Dorset Horn with the hardiness and adaptability of the Blackhead Persian. It was organised through a breed society and has since been exported to many countries, valued for its low-maintenance coat and adaptability.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Dorpers are medium-sized, typically polled meat sheep with a short coat of mixed hair and wool that sheds seasonally. The standard Dorper has a black head and white body, while the White Dorper is predominantly white. The breed is selected for meat production and hardiness rather than wool.',
        },
        {
          type: 'paragraph',
          text: 'Because the coat is shed, Dorpers generally do not need shearing, which reduces some of the labour and cost associated with wool breeds.',
        },
      ],
    },
    {
      id: 'adaptation-and-distribution',
      heading: 'Adaptation and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Dorper is associated with arid and semi-arid, extensive grazing systems and is noted for tolerance of hot, dry conditions and for non-selective grazing. It is now distributed across many countries in Africa, the Americas, Australia, and elsewhere.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The completeness of shedding and other traits varies between individuals, strains, and environments; not all animals shed equally cleanly.',
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
      note: 'Dorper (and White Dorper) are recorded in the global breed inventory.',
    },
    {
      registry:
        'Dorper Sheep Breeders’ Society of South Africa (and associations such as the American Dorper Sheep Breeders’ Society)',
      jurisdiction: 'South Africa, United States, and other countries',
      asOf: '2026-07-12',
      note: 'Herd books are maintained by national Dorper breed bodies; structures differ by country.',
    },
  ],
  primaryUses: [
    'Meat production',
    'Extensive grazing in arid regions',
    'Crossbreeding',
  ],
  physicalCharacteristics:
    'Medium-sized, typically polled meat sheep with a short shedding coat of mixed hair and wool; standard Dorper has a black head and white body, the White Dorper is predominantly white.',
  productionCharacteristics:
    'Selected for meat and hardiness rather than wool; the shedding coat means shearing is generally not required.',
  climateAdaptation:
    'Noted for tolerance of hot, dry, arid and semi-arid conditions and for non-selective grazing.',
  managementContext:
    'Managed in extensive meat systems, often as a low-maintenance breed that does not require shearing.',
  geographicDistribution:
    'Distributed across many countries in Africa, the Americas, Australia, and other regions.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
  ],
  relatedTopics: [{ type: 'breed', slug: 'katahdin' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; South African in origin and widely distributed in warm and dry regions.',
  climateContext:
    'Arid and semi-arid extensive grazing; noted for heat and drought tolerance.',
  limitations: [
    'The completeness of coat shedding and other traits varies between individuals, strains, and environments; general descriptions are indicative only.',
    'The standard Dorper and the White Dorper are related but distinct in colour; sources sometimes treat them together.',
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
    title: 'Dorper (sheep breed)',
    description:
      'The Dorper, a hardy South African meat sheep with a shedding coat for arid regions: origin from Dorset Horn and Blackhead Persian, traits, and distribution.',
    keywords: ['Dorper sheep', 'hair sheep', 'meat breed', 'shedding sheep'],
  },
  structuredData: { article: true },
};
