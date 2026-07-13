import type { BreedContent } from '@/types/content';

export const borderLeicester: BreedContent = {
  id: 'border-leicester',
  slug: 'border-leicester',
  contentType: 'breed',
  title: 'Border Leicester',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'Border region of England and Scotland',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Border Leicester is an English longwool breed with distinctive upright ears and a Roman nose, used widely as a crossing sire to produce prolific crossbred (mule) ewes in stratified sheep systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Border Leicester is a longwool sheep breed developed in the border country of England and Scotland from the improved Dishley (English) Leicester. It is recognised by its upright, alert ears, bare head, and Roman-nosed profile.',
    },
    {
      type: 'paragraph',
      text: 'The breed is best known as a crossing sire in the stratified sheep systems of the United Kingdom, where Border Leicester rams are mated to hill and upland ewes to produce crossbred "mule" or "greyface" ewes valued for prolificacy and mothering. It is also kept in Australia, North America, and elsewhere.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Border region of England and Scotland' },
    { label: 'Breed type', value: 'Dual-purpose longwool; crossing sire' },
    {
      label: 'Primary uses',
      value: 'Crossbred (mule) ewe production; wool and meat',
    },
    {
      label: 'Distinctive trait',
      value: 'Upright ears; Roman nose; long lustrous wool',
    },
    {
      label: 'Registry',
      value: 'Society of Border Leicester Sheep Breeders; FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Border Leicester descends from the improved Leicester longwool associated with the eighteenth-century breeder Robert Bakewell, developed in the border region into a distinct type. It became a key crossing breed in the British stratified system, in which hardy hill ewes are crossed with longwool sires to produce crossbred breeding ewes for lowland flocks.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Border Leicesters are large, white, polled sheep with a bare head, prominent upright ears, a Roman nose, and a long, lustrous longwool fleece. They are valued not only for wool and meat but especially as sires of prolific, milky crossbred ewes.',
        },
        {
          type: 'paragraph',
          text: 'In the stratified system, Border Leicester rams crossed with hill ewes produce crossbred females that combine hardiness from the dam with the size, prolificacy, and mothering contributed by the sire.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'The Border Leicester is used mainly as a crossing sire in pasture-based and mixed systems, and is maintained as a purebred by breeders. It is widely used in the United Kingdom and is also kept in Australia, North America, and other regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Prolificacy and other traits of crossbred progeny depend on both parent breeds and on management, and vary between systems.',
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
      note: 'Border Leicester and its national populations are recorded in the global breed inventory.',
    },
    {
      registry: 'Society of Border Leicester Sheep Breeders',
      jurisdiction: 'United Kingdom',
      asOf: '2026-07-12',
      note: 'UK breed society maintaining the flock book; associations exist in other countries.',
    },
  ],
  primaryUses: ['Crossbred (mule) ewe production', 'Longwool', 'Meat'],
  physicalCharacteristics:
    'Large, white, polled sheep with a bare head, upright ears, a Roman nose, and a long, lustrous longwool fleece.',
  productionCharacteristics:
    'Used chiefly as a crossing sire to produce prolific, milky crossbred ewes; also a source of longwool and meat.',
  climateAdaptation:
    'Kept in temperate pasture-based and mixed systems, and central to stratified hill-and-lowland systems.',
  managementContext:
    'Managed primarily as a crossing sire within stratified sheep systems, alongside purebred flocks.',
  geographicDistribution:
    'Widely used in the United Kingdom, and also kept in Australia, North America, and other regions.',
  connections: [
    { type: 'breed', slug: 'lincoln-longwool' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; British in origin and central to UK stratified sheep systems.',
  climateContext:
    'Temperate pasture and mixed systems; used across hill and lowland strata.',
  limitations: [
    'Crossbred progeny performance depends on both parent breeds and management; general descriptions are indicative only.',
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
    title: 'Border Leicester (sheep breed)',
    description:
      'The Border Leicester, an English longwool used as a crossing sire for prolific mule ewes: origin, distinctive looks, and role in stratified sheep systems.',
    keywords: [
      'Border Leicester',
      'longwool breed',
      'crossing sire',
      'mule ewe',
    ],
  },
  structuredData: { article: true },
};
