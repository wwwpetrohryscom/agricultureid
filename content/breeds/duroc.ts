import type { BreedContent } from '@/types/content';

export const duroc: BreedContent = {
  id: 'duroc',
  slug: 'duroc',
  contentType: 'breed',
  title: 'Duroc',
  scientificName: 'Sus scrofa domesticus',
  category: 'Pig breed',
  summary:
    'The Duroc is a red American pig breed widely used as a terminal sire. It is valued for growth rate, hardiness, and meat with notable intramuscular fat (marbling).',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Duroc is a red-coated pig breed developed in the United States during the nineteenth century, drawing on the Duroc of New York and the Jersey Red of New Jersey. It is one of the most important terminal sire breeds in modern pork production.',
    },
    {
      type: 'paragraph',
      text: 'Durocs are muscular, hardy pigs known for fast growth, good feed conversion, and meat that tends to carry more intramuscular fat than many lean modern lines, a trait associated with eating quality. They are commonly used as the sire over hybrid dam lines.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Pig (Sus scrofa domesticus)' },
    { label: 'Breed type', value: 'Pork (meat); terminal sire' },
    { label: 'Origin', value: 'United States' },
    {
      label: 'Appearance',
      value: 'Red (golden to dark mahogany), drooping ears, muscular',
    },
    { label: 'Noted trait', value: 'Growth and intramuscular fat (marbling)' },
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
          text: 'Developed in the northeastern United States from red strains, the Duroc became a leading American breed and spread internationally. It is used chiefly as a terminal sire, contributing growth and meat quality to crossbred market pigs.',
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
            'Solid red coat ranging from light golden to dark mahogany.',
            'Medium-to-large, muscular frame with partly drooping ears.',
            'Hardy constitution suited to varied systems, including outdoor rearing.',
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
          text: 'The Duroc is valued for rapid growth, good feed efficiency, and robustness, and for meat with comparatively high intramuscular fat that is associated with tenderness and flavour. These qualities make it a preferred terminal sire in many crossbreeding programmes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Growth and meat-quality outcomes depend on the specific line, nutrition, and management, and are described here only in qualitative terms.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'pigs' },
  species: 'Pig (Sus scrofa domesticus)',
  breedType: 'Pork',
  originCountry: 'United States',
  originRegion: 'Northeastern United States',
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
  primaryUses: ['Terminal sire in commercial crossbreeding', 'Pork production'],
  physicalCharacteristics:
    'Medium-to-large, muscular pig with a solid red coat (golden to dark mahogany) and partly drooping ears. Hardy constitution suited to varied systems, including outdoor rearing.',
  productionCharacteristics:
    'Valued for rapid growth, good feed efficiency, robustness, and meat with comparatively high intramuscular fat associated with eating quality. Outcomes depend strongly on line, nutrition, and management.',
  climateAdaptation:
    'A hardy breed adaptable to intensive, semi-intensive, and outdoor systems across a range of climates with appropriate shade and shelter.',
  managementContext:
    'Used mainly as a terminal sire within structured commercial crossbreeding, and also in outdoor and pasture-based pork production. Housing, nutrition, biosecurity, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed in the United States and now one of the most widely used sire breeds worldwide, present across the Americas, Europe, and Asia.',
  connections: [
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global; an American breed used worldwide as a terminal sire. Husbandry and regulation vary by country.',
  climateContext:
    'Hardy and adaptable across intensive to outdoor systems with shade and shelter.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance and meat-quality figures are highly line- and management-dependent and are described only qualitatively here.',
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
      citedFor: 'General background on the Duroc pig',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Duroc (pig breed)',
    description:
      'The Duroc: a red American pig widely used as a terminal sire, valued for growth rate, hardiness, and meat with notable intramuscular fat (marbling).',
    keywords: ['Duroc pig', 'terminal sire', 'red pig', 'pig breed'],
  },
  structuredData: { article: true },
};
