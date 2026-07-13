import type { BreedContent } from '@/types/content';

export const nigerianDwarf: BreedContent = {
  id: 'nigerian-dwarf',
  slug: 'nigerian-dwarf',
  contentType: 'breed',
  title: 'Nigerian Dwarf',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Nigerian Dwarf is a miniature dairy goat developed in the United States from West African Dwarf stock. It is prized for high-butterfat milk relative to its small size and is popular on smallholdings and homesteads.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Nigerian Dwarf is a small dairy goat developed in the United States from West African Dwarf goats originally imported from West and Central Africa. Unlike cobby, meat-type miniature goats, it is proportioned like a scaled-down dairy goat and is bred specifically for milk.',
    },
    {
      type: 'paragraph',
      text: 'Its small size, colourful coats, gentle temperament, and rich, high-butterfat milk have made it very popular for smallholdings, homesteads, and hobby dairying, as well as for companionship. It is registered by American dairy-goat and miniature-goat associations.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dairy (miniature)' },
    { label: 'Origin', value: 'United States (from West African Dwarf stock)' },
    { label: 'Size', value: 'Miniature, dairy-proportioned' },
    {
      label: 'Milk character',
      value: 'Rich, comparatively high in butterfat',
    },
    {
      label: 'Conservation status',
      value: 'Not at risk (very popular and widely kept)',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Nigerian Dwarf was developed in the United States from West African Dwarf goats, with selection for dairy conformation and milk quality at a miniature size. It is distinct from the African Pygmy, which shares similar ancestry but is a cobby, meat-type miniature rather than a dairy animal.',
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
            'Small, finely built and proportioned like a miniature dairy goat.',
            'Erect ears and a straight profile; a wide range of coat colours and patterns.',
            'May be horned or disbudded, depending on management.',
          ],
        },
      ],
    },
    {
      id: 'production-and-management',
      heading: 'Production and management',
      body: [
        {
          type: 'paragraph',
          text: 'Despite its small size, the Nigerian Dwarf produces milk that is comparatively rich in butterfat, and its modest feed and space requirements suit small properties. It is widely used for home dairying and is also crossed to produce other miniature dairy goats.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Milk yield and composition depend on nutrition, lactation stage, and management. Small size does not reduce the need for appropriate feeding, shelter, and health care.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dairy',
  originCountry: 'United States',
  originRegion: 'Developed from West and Central African Dwarf stock',
  breedStatus: 'registered',
  conservationStatus: 'not-at-risk',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
  ],
  primaryUses: [
    'Milk production (smallholder and home dairy)',
    'Companion animal',
    'Miniature dairy crossbreeding',
  ],
  physicalCharacteristics:
    'Small, finely built dairy goat proportioned like a miniature of the larger dairy breeds, with erect ears, a straight profile, and a wide range of coat colours. May be horned or disbudded.',
  productionCharacteristics:
    'Produces comparatively rich, high-butterfat milk relative to its small size, with modest feed and space requirements. Yield and composition are strongly influenced by feeding, lactation stage, and management.',
  climateAdaptation:
    'A hardy, adaptable miniature goat kept across many climates on small properties; like all goats it benefits from adequate shelter, forage, and clean water.',
  managementContext:
    'Popular in smallholder, homestead, and hobby-dairy systems, valued for low space and feed needs. Nutrition, milking, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed and most numerous in the United States, with growing popularity in other countries among smallholders and hobby keepers.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Primarily the United States, with growing international popularity. Husbandry and regulation vary by country.',
  climateContext:
    'Adaptable miniature dairy goat kept across a range of climates with management.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Milk yield and composition are highly management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s popularity and wide keeping rather than any single formal listing.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on dwarf and dairy goat types',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nigerian Dwarf (goat breed)',
    description:
      'The Nigerian Dwarf: a miniature American dairy goat from West African Dwarf stock, prized for high-butterfat milk and popular on smallholdings and homesteads.',
    keywords: [
      'Nigerian Dwarf goat',
      'miniature dairy goat',
      'goat breed',
      'homestead goat',
    ],
  },
  structuredData: { article: true },
};
