import type { BreedContent } from '@/types/content';

export const tamworthPig: BreedContent = {
  id: 'tamworth-pig',
  slug: 'tamworth-pig',
  contentType: 'breed',
  title: 'Tamworth',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Tamworth is a ginger-red English pig, one of the oldest and least-improved British breeds. Hardy and an active forager, it is a bacon-type pig kept in outdoor systems and is of ongoing conservation interest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Tamworth is a traditional English pig breed associated with the town of Tamworth in Staffordshire. It is one of the oldest and least-improved British breeds, retaining a hardy, athletic character. Its coat is a distinctive ginger to golden-red, and it has a long snout, erect ears, and long legs.',
    },
    {
      type: 'paragraph',
      text: 'Historically valued as a bacon pig, the Tamworth is well suited to outdoor and pasture-based systems, being a hardy, active forager. As a traditional breed it is tracked by conservation organisations and maintained by dedicated breeders.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Bacon' },
    { label: 'Origin', value: 'England (Tamworth, Staffordshire)' },
    {
      label: 'Appearance',
      value: 'Ginger to golden-red coat, long snout, erect ears, long legs',
    },
    { label: 'Noted traits', value: 'Hardiness and active foraging ability' },
    {
      label: 'Conservation status',
      value:
        'Unknown here; a traditional breed of ongoing conservation interest',
    },
  ],
  sections: [
    {
      id: 'origin-and-character',
      heading: 'Origin and character',
      body: [
        {
          type: 'paragraph',
          text: 'The Tamworth is among the oldest recognised British pig breeds and one of the least influenced by imported bloodlines, which has helped it retain hardiness and foraging ability. It was exported to North America and Australia, where traditional-breed keepers maintain populations.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'list',
          items: [
            'Ginger to golden-red coat, sometimes described as one of the reddest pig breeds.',
            'Long head and snout, erect ears, and a long-legged, athletic frame.',
            'Hardy constitution suited to outdoor life and rooting.',
          ],
        },
      ],
    },
    {
      id: 'production-and-conservation',
      heading: 'Production and conservation',
      body: [
        {
          type: 'paragraph',
          text: 'The Tamworth is historically a bacon-type pig, producing a lean, well-flavoured carcass, and its foraging ability suits extensive and pasture-based systems. It is maintained as a heritage breed and appears on the priority lists of conservation organisations.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Conservation categories for traditional breeds are date-specific and differ between organisations and countries; consult the current listings rather than relying on a single fixed category.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Bacon',
  originCountry: 'United Kingdom',
  originRegion: 'Tamworth, Staffordshire, England',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
    {
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'A traditional breed tracked in U.S. conservation contexts; consult the current priority list for the present category.',
    },
  ],
  primaryUses: ['Bacon and pork production', 'Heritage and outdoor systems'],
  physicalCharacteristics:
    'Ginger to golden-red pig with a long head and snout, erect ears, and a long-legged, athletic frame. Hardy constitution suited to outdoor life and rooting.',
  productionCharacteristics:
    'Historically a bacon-type pig producing a lean, well-flavoured carcass, with strong foraging ability suited to extensive systems. Outcomes depend on feeding, system, and management, and are described only qualitatively.',
  climateAdaptation:
    'Notably hardy and cold-tolerant, well suited to outdoor and pasture-based systems in temperate climates; the pale-skinned red coat still benefits from shade in strong sun.',
  managementContext:
    'Kept mainly in heritage, outdoor, and pasture-based systems where its foraging ability is an asset. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in England and maintained in the United Kingdom, North America, and Australia, largely by heritage-breed and outdoor producers.',
  connections: [
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global; an English heritage breed maintained internationally in outdoor systems. Husbandry and regulation vary by country.',
  climateContext:
    'Hardy, cold-tolerant heritage pig suited to outdoor, pasture-based temperate systems.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance and carcass figures are highly system- and management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: the Tamworth is widely regarded as a traditional breed of conservation interest, but categories are date- and organisation-specific — consult current FAO DAD-IS and conservation listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Conservation context for a traditional pig breed',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Tamworth pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tamworth (pig breed)',
    description:
      'The Tamworth: a ginger-red English heritage pig, one of the oldest and hardiest British breeds, a bacon-type forager kept in outdoor systems.',
    keywords: ['Tamworth pig', 'heritage pig', 'bacon pig', 'pig breed'],
  },
  structuredData: { article: true },
};
