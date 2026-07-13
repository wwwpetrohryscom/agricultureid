import type { BreedContent } from '@/types/content';

export const texel: BreedContent = {
  id: 'texel',
  slug: 'texel',
  contentType: 'breed',
  title: 'Texel',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'Netherlands',
  originRegion: 'Island of Texel, North Holland',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Texel is a heavily muscled meat sheep breed from the Dutch island of Texel, widely used across Europe and beyond as a terminal sire for lean, well-conformed carcasses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Texel originates from the island of Texel in the Netherlands and is known for exceptional muscling and lean carcass characteristics. It has become one of the most influential terminal-sire meat breeds in Europe and is bred in many other countries.',
    },
    {
      type: 'paragraph',
      text: 'Texel rams are widely crossed with ewes of other breeds to improve carcass conformation and leanness in market lambs. The breed is maintained through breed societies in the Netherlands, the United Kingdom, and elsewhere.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Island of Texel, Netherlands' },
    { label: 'Breed type', value: 'Meat (terminal sire)' },
    {
      label: 'Primary uses',
      value: 'Lean carcass lamb production; crossbreeding sire',
    },
    {
      label: 'Distinctive trait',
      value: 'Heavy muscling; white, wool-free face',
    },
    {
      label: 'Registry',
      value: 'Texel breed societies; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Texel was developed on its namesake island in the Netherlands and improved over the nineteenth and twentieth centuries into a specialised meat breed. From the later twentieth century it was exported widely and became a leading terminal sire in the United Kingdom and continental Europe, with populations also established in the Americas and Australasia.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Texels are white sheep with a distinctive white, wool-free face and legs, and are notable for pronounced muscling, particularly over the back and hindquarters. They are polled and of medium to large size.',
        },
        {
          type: 'paragraph',
          text: 'The breed is selected primarily for carcass merit, and Texel sires are used to enhance muscling and leanness in crossbred market lambs.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Texels are kept in temperate pasture-based and mixed systems and are prominent in prime-lamb production, both as purebreds and as crossing sires. The breed is widely distributed across Europe and in many other sheep-producing regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Muscling, growth, and carcass traits vary with bloodline, nutrition, and management; performance for a particular flock should be taken from breeders or recorded data.',
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
      note: 'Texel and its national populations are recorded in the global breed inventory.',
    },
    {
      registry:
        'Texel breed societies (e.g. British Texel Sheep Society; Dutch Texel associations)',
      jurisdiction: 'Netherlands, United Kingdom, and other countries',
      asOf: '2026-07-12',
      note: 'Herd books are maintained by national Texel breed bodies; structures differ by country.',
    },
  ],
  primaryUses: ['Lean carcass lamb production', 'Terminal-sire crossbreeding'],
  physicalCharacteristics:
    'White sheep with a white, wool-free face and legs, polled, and notably heavily muscled, especially over the loin and hindquarters.',
  productionCharacteristics:
    'Selected for carcass merit and leanness; widely used as a terminal sire to improve muscling in crossbred lambs.',
  climateAdaptation:
    'Suited to temperate pasture-based and mixed farming systems across many regions.',
  managementContext:
    'Managed in prime-lamb systems as purebred and crossing stock, with emphasis on carcass quality.',
  geographicDistribution:
    'Widely distributed across Europe and in the Americas, Australasia, and other sheep-producing regions.',
  connections: [{ type: 'farming-system', slug: 'mixed-farming' }],
  relatedTopics: [{ type: 'breed', slug: 'suffolk-sheep' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; Dutch in origin and bred in many sheep-producing countries.',
  climateContext:
    'Temperate pasture and mixed systems; management emphasises carcass quality.',
  limitations: [
    'Muscling, growth, and carcass traits vary with bloodline, nutrition, and management; general descriptions are indicative only.',
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
    title: 'Texel (sheep breed)',
    description:
      'The Texel, a heavily muscled meat sheep from the Dutch island of Texel and a leading terminal sire for lean lambs: origin, carcass traits, and distribution.',
    keywords: [
      'Texel sheep',
      'meat sheep breed',
      'terminal sire',
      'Ovis aries',
    ],
  },
  structuredData: { article: true },
};
