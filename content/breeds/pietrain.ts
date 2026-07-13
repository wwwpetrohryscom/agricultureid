import type { BreedContent } from '@/types/content';

export const pietrain: BreedContent = {
  id: 'pietrain',
  slug: 'pietrain',
  contentType: 'breed',
  title: 'Pietrain',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Pietrain is a Belgian pig breed, white with black spots, exceptionally heavily muscled and used as a terminal sire to add leanness and muscling. It is historically associated with the halothane stress-susceptibility gene.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Pietrain originated in the village of Piétrain in Belgium and is renowned for extreme muscling and a high lean-meat yield. It is a medium-sized white pig marked with black spots, often ringed with lighter pigment, and has erect ears.',
    },
    {
      type: 'paragraph',
      text: 'The breed is used chiefly as a terminal sire to increase leanness and carcass muscling in crossbred market pigs. It is historically associated with a high frequency of the halothane (stress-susceptibility) gene, and breeding programmes have selected stress-negative lines to manage the associated effects on stress sensitivity and meat quality.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Pork (lean meat); terminal sire' },
    { label: 'Origin', value: 'Belgium (village of Piétrain)' },
    {
      label: 'Appearance',
      value: 'White with black spots; erect ears; very heavily muscled',
    },
    { label: 'Noted trait', value: 'Exceptional muscling and lean yield' },
    {
      label: 'Conservation status',
      value: 'Not at risk (a widely used commercial sire breed)',
    },
  ],
  sections: [
    {
      id: 'origin-and-role',
      heading: 'Origin and role',
      body: [
        {
          type: 'paragraph',
          text: 'Developed in Belgium in the mid-twentieth century, the Pietrain became prized for its extreme muscling and is now used internationally as a terminal sire, frequently in combination with other sire breeds to balance muscling with robustness.',
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
            'Medium-sized, white-coated with irregular black spots often ringed by lighter pigment.',
            'Erect ears and exceptionally well-developed muscling, particularly of the hams and loin.',
            'Compact, heavily muscled conformation.',
          ],
        },
      ],
    },
    {
      id: 'production-and-genetics',
      heading: 'Production and genetics',
      body: [
        {
          type: 'paragraph',
          text: 'The Pietrain delivers very high leanness and carcass muscling, which is the basis of its terminal-sire role. It is historically associated with a high frequency of the halothane gene (linked to porcine stress syndrome), which can affect stress sensitivity and meat quality; selection for stress-negative animals is used to manage this.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The presence of the halothane allele varies by line, and many modern Pietrain populations are selected to be stress-negative. Genetic details are line-specific and are described here only in general, non-prescriptive terms.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Pork',
  originCountry: 'Belgium',
  originRegion: 'Piétrain, Wallonia',
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
    'Medium-sized, white-coated pig with irregular black spots often ringed by lighter pigment, erect ears, and exceptionally well-developed muscling, particularly of the hams and loin.',
  productionCharacteristics:
    'Delivers very high leanness and carcass muscling as a terminal sire. Historically associated with the halothane (stress-susceptibility) gene affecting stress sensitivity and meat quality; stress-negative selection is widely used. Outcomes are line- and management-dependent.',
  climateAdaptation:
    'Kept mainly in housed and semi-intensive systems; heavily muscled pigs can be more sensitive to heat stress, so ventilation and thermal management are important considerations.',
  managementContext:
    'Used chiefly as a terminal sire within structured commercial crossbreeding. Housing, ventilation, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Belgium and used internationally as a terminal sire, with populations and sire lines across Europe and beyond.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global; a Belgian breed used internationally as a terminal sire. Husbandry and regulation vary by country.',
  climateContext:
    'Mainly housed or semi-intensive; heavy muscling can increase sensitivity to heat, making ventilation important.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'The halothane-gene association varies by line and over time; it is described in general terms only and is not a health, treatment, or management recommendation.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects the breed’s wide use as a commercial sire line.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Pietrain pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pietrain (pig breed)',
    description:
      'The Pietrain: a Belgian, black-spotted white pig famed for extreme muscling and lean yield, used as a terminal sire and linked to the halothane stress gene.',
    keywords: ['Pietrain pig', 'terminal sire', 'lean pork', 'pig breed'],
  },
  structuredData: { article: true },
};
