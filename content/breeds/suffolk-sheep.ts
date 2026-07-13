import type { BreedContent } from '@/types/content';

export const suffolkSheep: BreedContent = {
  id: 'suffolk-sheep',
  slug: 'suffolk-sheep',
  contentType: 'breed',
  title: 'Suffolk',
  category: 'Sheep breed',
  parentLivestock: { type: 'livestock', slug: 'sheep' },
  species: 'Sheep (Ovis aries)',
  breedType: 'Meat',
  originCountry: 'United Kingdom',
  originRegion: 'Suffolk and East Anglia, England',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  summary:
    'The Suffolk is an English meat sheep breed with a distinctive black, wool-free head and legs, widely used as a terminal sire to produce fast-growing market lambs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Suffolk is one of the most widely used meat sheep breeds internationally, recognised by its black, bare head and legs and its heavily muscled, growthy conformation. It arose in eastern England from crossing Southdown rams with the local Norfolk Horn, and was established as a distinct breed in the nineteenth century.',
    },
    {
      type: 'paragraph',
      text: 'Suffolks are best known as terminal sires: Suffolk rams are mated to ewes of other breeds to produce crossbred lambs valued for rapid growth and carcass quality. The breed is maintained by breed societies in the United Kingdom and many other countries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Sheep (Ovis aries)' },
    { label: 'Origin', value: 'Suffolk / East Anglia, England' },
    { label: 'Breed type', value: 'Meat (terminal sire)' },
    {
      label: 'Primary uses',
      value: 'Market lamb production; crossbreeding sire',
    },
    {
      label: 'Distinctive trait',
      value: 'Black, wool-free head and legs; polled',
    },
    {
      label: 'Registry',
      value: 'Suffolk breed societies; recorded in FAO DAD-IS',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Suffolk developed in the Suffolk area of East Anglia, England, from crossing Southdown rams with Norfolk Horn ewes. Selection combined the meat qualities of the Southdown with the size and hardiness of the local stock, and the breed was recognised and organised through a breed society in the nineteenth century. It has since been exported widely and is bred in many sheep-producing countries.',
        },
      ],
    },
    {
      id: 'characteristics',
      heading: 'Physical and production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Suffolks are large, muscular, polled sheep with a black face and legs that are free of wool, and a white fleece over the body. They are selected chiefly for growth and carcass conformation rather than wool.',
        },
        {
          type: 'paragraph',
          text: 'As a terminal-sire breed, Suffolk rams are commonly crossed with ewes of other breeds so that all resulting lambs are marketed, taking advantage of the breed’s growth rate and muscling.',
        },
      ],
    },
    {
      id: 'management-and-distribution',
      heading: 'Management and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Suffolks are kept in temperate pasture-based and mixed farming systems and are prominent in prime-lamb production. Management follows general sheep husbandry with an emphasis on growth, and the breed is widely distributed across the United Kingdom, continental Europe, North America, Australasia, and beyond.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Growth rate, mature size, and carcass characteristics vary with bloodline, nutrition, and management; figures for individual flocks should come from breeders or performance records.',
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
      note: 'Suffolk and its national populations are recorded in the global breed inventory.',
    },
    {
      registry: 'Suffolk Sheep Society',
      jurisdiction: 'United Kingdom',
      asOf: '2026-07-12',
      note: 'UK breed society maintaining the herd book; equivalent associations exist in other countries.',
    },
  ],
  primaryUses: ['Market lamb (meat) production', 'Terminal-sire crossbreeding'],
  physicalCharacteristics:
    'Large, muscular, polled sheep with a black, wool-free head and legs and a white body fleece.',
  productionCharacteristics:
    'Selected for growth rate and carcass conformation; widely used as a terminal sire on other breeds to produce market lambs.',
  climateAdaptation:
    'Suited to temperate pasture-based and mixed farming systems; kept across a wide range of temperate regions.',
  managementContext:
    'Managed in prime-lamb and mixed systems, typically with an emphasis on lamb growth rather than wool.',
  geographicDistribution:
    'Widely distributed, including the United Kingdom, continental Europe, North America, and Australasia.',
  connections: [{ type: 'farming-system', slug: 'mixed-farming' }],
  relatedTopics: [{ type: 'breed', slug: 'hampshire-down' }],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; English in origin and bred in many sheep-producing countries.',
  climateContext:
    'Predominantly temperate pasture and mixed systems; management emphasises lamb growth.',
  limitations: [
    'Growth, size, and carcass traits vary with bloodline, nutrition, and management; general descriptions are indicative only.',
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
    title: 'Suffolk (sheep breed)',
    description:
      'The Suffolk, an English meat sheep with a black wool-free head, widely used as a terminal sire for market lambs: origin, characteristics, and management.',
    keywords: [
      'Suffolk sheep',
      'meat sheep breed',
      'terminal sire',
      'Ovis aries',
    ],
  },
  structuredData: { article: true },
};
