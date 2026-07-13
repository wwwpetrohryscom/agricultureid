import type { BreedContent } from '@/types/content';

export const gloucestershireOldSpots: BreedContent = {
  id: 'gloucestershire-old-spots',
  slug: 'gloucestershire-old-spots',
  contentType: 'breed',
  title: 'Gloucestershire Old Spots',
  scientificName: 'Sus scrofa domesticus',
  alternativeNames: ['Old Spots', 'GOS'],
  category: 'Pig breed',
  summary:
    'The Gloucestershire Old Spots is a white, black-spotted English pig with large lop ears, traditionally a hardy pasture and orchard pig. It is a dual-purpose heritage breed of ongoing conservation interest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Gloucestershire Old Spots is a traditional English pig breed from the Berkeley Vale of Gloucestershire, recognised by its white coat with distinctive black spots and its large, forward-hanging lop ears. It is often nicknamed the "orchard pig" from its historical association with being kept on pasture and in orchards.',
    },
    {
      type: 'paragraph',
      text: 'A docile, hardy, and thrifty breed, the Gloucestershire Old Spots is valued as a dual-purpose pig for pork and bacon and for its foraging and grazing ability. It is maintained by a dedicated breeders’ club and is tracked by conservation organisations.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Dual-purpose (pork and bacon)' },
    { label: 'Origin', value: 'England (Berkeley Vale, Gloucestershire)' },
    {
      label: 'Appearance',
      value: 'White with black spots; large lop ears falling over the face',
    },
    { label: 'Traditional role', value: 'Hardy pasture and "orchard" pig' },
    {
      label: 'Conservation status',
      value: 'Unknown here; a heritage breed of ongoing conservation interest',
    },
  ],
  sections: [
    {
      id: 'origin-and-tradition',
      heading: 'Origin and tradition',
      body: [
        {
          type: 'paragraph',
          text: 'The breed developed in the Berkeley Vale of Gloucestershire as a hardy farm pig kept on pasture, orchards, and dairy by-products. Its dedicated pedigree herd book is among the oldest for a spotted pig, and the breed is maintained today largely by heritage and outdoor producers. Traditional Gloucestershire Old Spots pork also holds a recognised protected food designation in the United Kingdom.',
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
            'White coat marked with one or more well-defined black spots.',
            'Large lop ears that hang forward over the face.',
            'Deep, hardy frame with a docile temperament and good foraging ability.',
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
          text: 'As a dual-purpose pig, the Gloucestershire Old Spots produces pork and bacon and is suited to extensive, pasture-based systems thanks to its hardiness and grazing habit. It is a heritage breed monitored by conservation bodies in the United Kingdom and the United States.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Conservation categories for heritage breeds are date-specific and vary between organisations and countries; consult the current listings rather than relying on a single fixed category.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'Berkeley Vale, Gloucestershire, England',
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
      note: 'A heritage breed tracked in U.S. conservation contexts; consult the current priority list for the present category.',
    },
  ],
  primaryUses: [
    'Pork and bacon production',
    'Heritage and pasture-based systems',
  ],
  physicalCharacteristics:
    'White pig marked with one or more well-defined black spots, with large lop ears hanging forward over the face. Deep, hardy frame, docile temperament, and good foraging ability.',
  productionCharacteristics:
    'A dual-purpose pig producing pork and bacon, well suited to extensive, pasture-based systems thanks to hardiness and a grazing habit. Outcomes depend on feeding, system, and management, and are described only qualitatively.',
  climateAdaptation:
    'Hardy and thrifty, well suited to outdoor and pasture-based systems in temperate climates; the pale skin benefits from shade and wallows in strong sun.',
  managementContext:
    'Kept mainly in heritage, outdoor, and pasture-based systems, historically alongside orchards and dairying. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Gloucestershire and maintained in the United Kingdom and United States, largely by heritage and outdoor producers.',
  connections: [
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global; an English heritage breed maintained mainly in the UK and US. Husbandry and regulation vary by country.',
  climateContext:
    'Hardy heritage pig suited to outdoor, pasture-based temperate systems with shade and wallows.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance and carcass figures are highly system- and management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: the breed is widely regarded as a heritage breed of conservation interest, but categories are date- and organisation-specific — consult current FAO DAD-IS and conservation listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Conservation context for a heritage pig breed',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Gloucestershire Old Spots pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Gloucestershire Old Spots (pig breed)',
    description:
      'The Gloucestershire Old Spots: a white, black-spotted, lop-eared English heritage pig, a hardy pasture and "orchard" breed of ongoing conservation interest.',
    keywords: [
      'Gloucestershire Old Spots',
      'Old Spots pig',
      'heritage pig',
      'pig breed',
    ],
  },
  structuredData: { article: true },
};
