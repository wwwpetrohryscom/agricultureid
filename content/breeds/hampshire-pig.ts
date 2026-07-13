import type { BreedContent } from '@/types/content';

export const hampshirePig: BreedContent = {
  id: 'hampshire-pig',
  slug: 'hampshire-pig',
  contentType: 'breed',
  title: 'Hampshire',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Hampshire is a black pig with a distinctive white belt over the shoulders and forelegs, developed in the United States from English belted stock. It is a lean, muscular breed used mainly as a terminal sire.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Hampshire is an American pig breed established from belted hogs of English origin, and named for Hampshire in England. It is instantly recognised by its black coat with a white belt encircling the body over the shoulders and front legs, together with erect ears.',
    },
    {
      type: 'paragraph',
      text: 'Hampshires are muscular, lean pigs valued for carcass quality and high lean-meat yield, and they are widely used as terminal sires over hybrid dam lines in commercial pork production.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Pork (lean meat); terminal sire' },
    { label: 'Origin', value: 'United States (from English belted stock)' },
    {
      label: 'Appearance',
      value:
        'Black with a white belt over the shoulders and forelegs; erect ears',
    },
    { label: 'Noted trait', value: 'Muscularity and high lean-meat yield' },
    {
      label: 'Conservation status',
      value: 'Not at risk (a major global commercial breed)',
    },
  ],
  sections: [
    {
      id: 'origin-and-role',
      heading: 'Origin and role',
      body: [
        {
          type: 'paragraph',
          text: 'Developed in the United States, particularly in Kentucky, from imported English belted pigs, the Hampshire became a leading American sire breed. It is used chiefly as a terminal sire, contributing leanness and muscling to crossbred market pigs.',
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
            'Black-coated with a clean white belt encircling the body over the shoulders and front legs.',
            'Erect ears and a muscular, well-proportioned frame.',
            'Selected for a lean, meaty carcass.',
          ],
        },
      ],
    },
    {
      id: 'production-characteristics',
      heading: 'Production characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'The Hampshire is valued for muscularity, leanness, and a high proportion of lean meat in the carcass, which suits its role as a terminal sire. It combines these carcass traits with good hardiness.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Carcass and growth outcomes depend on the specific line, nutrition, and management, and are described here only in qualitative terms.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Pork',
  originCountry: 'United States',
  originRegion: 'Kentucky (from English belted stock)',
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
    'Terminal sire in commercial crossbreeding',
    'Lean pork production',
  ],
  physicalCharacteristics:
    'Black-coated pig with a clean white belt encircling the body over the shoulders and front legs, and erect ears. Muscular, well-proportioned frame selected for a lean, meaty carcass.',
  productionCharacteristics:
    'Valued for muscularity, leanness, and a high proportion of lean meat, suiting its terminal-sire role, combined with good hardiness. Outcomes depend strongly on line, nutrition, and management.',
  climateAdaptation:
    'A hardy breed adaptable to intensive, semi-intensive, and outdoor systems across a range of climates with appropriate shade and shelter.',
  managementContext:
    'Used mainly as a terminal sire within structured commercial crossbreeding, and also in outdoor pork production. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed in the United States and now used internationally as a sire breed, with populations across the Americas, Europe, and beyond.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global; an American breed used internationally as a terminal sire. Husbandry and regulation vary by country.',
  climateContext:
    'Hardy and adaptable across intensive to outdoor systems with shade and shelter.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance and carcass figures are highly line- and management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s status as a major global commercial line.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'U.S. swine breeding and production research context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Hampshire pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Hampshire (pig breed)',
    description:
      'The Hampshire pig: a black, white-belted American breed known for muscularity and high lean-meat yield, used mainly as a terminal sire in pork production.',
    keywords: ['Hampshire pig', 'belted pig', 'terminal sire', 'pig breed'],
  },
  structuredData: { article: true },
};
