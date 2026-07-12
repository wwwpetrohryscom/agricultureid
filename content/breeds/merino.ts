import type { BreedContent } from '@/types/content';

export const merino: BreedContent = {
  id: 'merino',
  slug: 'merino',
  contentType: 'breed',
  title: 'Merino',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Wool',
  originCountry: 'Spain',
  originRegion:
    'Iberian Peninsula; extensively developed in Australia and other countries',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Merino is a fine-wool sheep breed of Spanish origin, renowned for producing some of the finest and highest-value apparel wool among sheep. It exists as many strains developed across the world, especially in Australia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Merino is among the most influential wool sheep breeds in the world, historically associated with Spain and later developed intensively in Australia, South Africa, South America, and elsewhere. It is kept above all for fine wool used in apparel textiles.',
    },
    {
      type: 'paragraph',
      text: 'Rather than a single uniform type, the Merino is a family of strains and bloodlines selected for wool fineness, fleece weight, body size, and adaptation to local conditions. This diversity makes broad generalisations approximate: a given flock reflects its particular strain, selection history, and environment.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    {
      label: 'Origin',
      value: 'Spain; widely developed in Australia and elsewhere',
    },
    { label: 'Breed type', value: 'Wool (fine wool)' },
    { label: 'Primary uses', value: 'Fine apparel wool; meat in some systems' },
    { label: 'Notable trait', value: 'Very fine, dense fleece' },
    {
      label: 'Registry',
      value: 'Recorded in FAO DAD-IS; national Merino stud registries',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Merino is historically associated with Spain, where fine-wool sheep were prized for centuries and their export was long restricted. From the eighteenth century onward Merinos were dispersed to other countries, where distinct national and regional strains were developed. In Australia in particular the Merino became the foundation of a major fine-wool industry, with several recognised strains selected for different environments and wool types.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Merinos are typically white-faced sheep of small to medium size, carrying a dense fleece of fine, well-crimped wool. Rams are frequently horned and ewes usually polled, and some strains carry loose skin or neck folds while others are relatively plain-bodied. The defining feature across strains is the fineness of the wool relative to most other breeds.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wool',
              description:
                'Selected primarily for fineness, softness, and fleece characteristics suited to high-value apparel textiles.',
            },
            {
              term: 'Meat',
              description:
                'A secondary output in many systems; some strains and crosses place greater emphasis on carcass traits.',
            },
          ],
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation, management, and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Merinos are widely kept on extensive pasture and rangeland, and Australian and similar strains are noted for hardiness under semi-arid and variable rangeland conditions. Management centres on wool production, including shearing and fleece handling, alongside general grazing husbandry. The breed and its derivatives are distributed across major wool-producing regions worldwide, including Australia, South Africa, South America, and parts of Europe and North America.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Wool fineness, fleece weight, body size, and skin-fold characteristics differ markedly between Merino strains and bloodlines; treat any general description as indicative rather than exact for a particular flock.',
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
      note: 'Merino and its national strains are recorded in the global breed inventory.',
    },
    {
      registry:
        'National Merino stud registries (e.g. Australian Stud Merino flock registers)',
      jurisdiction: 'Australia and other wool-producing countries',
      asOf: '2026-07-12',
      note: 'Merino stud/flock books are maintained by breed bodies in several countries; registry names and structures vary.',
    },
  ],
  primaryUses: [
    'Fine apparel wool',
    'Meat (secondary in some systems)',
    'Breed improvement and crossbreeding',
  ],
  physicalCharacteristics:
    'White-faced sheep of small to medium size with a dense, fine, well-crimped fleece; rams often horned and ewes usually polled; skin-fold development varies by strain.',
  productionCharacteristics:
    'Selected principally for fine wool of high textile value; fleece and body characteristics vary considerably among strains and bloodlines.',
  climateAdaptation:
    'Kept across a range of environments; Australian and related strains are noted for hardiness on extensive, semi-arid rangeland.',
  managementContext:
    'Managed primarily for wool, involving shearing and fleece handling alongside extensive or pasture-based grazing husbandry.',
  geographicDistribution:
    'Distributed worldwide in major wool-producing regions, including Australia, South Africa, South America, and parts of Europe and North America.',
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'breed', slug: 'rambouillet' },
    { type: 'breed', slug: 'corriedale' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; Spanish in origin and developed into many national and regional strains, notably in Australia.',
  climateContext:
    'Kept from temperate pasture to semi-arid rangeland; strain selection reflects local climate and wool goals.',
  limitations: [
    'The Merino is a family of strains and bloodlines; wool fineness, fleece weight, body size, and skin folds vary widely, so general descriptions are approximate.',
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
    title: 'Merino (sheep breed)',
    description:
      'The Merino, a fine-wool sheep of Spanish origin bred into many strains worldwide, notably in Australia: origin, wool traits, and rangeland adaptation.',
    keywords: ['Merino sheep', 'fine wool breed', 'Merino wool', 'Ovis aries'],
  },
  structuredData: { article: true },
};
