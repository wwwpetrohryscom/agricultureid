import type { BreedContent } from '@/types/content';

export const saanen: BreedContent = {
  id: 'saanen',
  slug: 'saanen',
  contentType: 'breed',
  title: 'Saanen',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Saanen is a large white Swiss dairy goat widely regarded as one of the highest-yielding milk breeds. It is distributed internationally and underpins many commercial dairy-goat herds.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Saanen originated in the Saanen valley of the Bern canton in Switzerland and is one of the most widely distributed specialised dairy-goat breeds. It is known for consistent, high milk output and a calm temperament, and has been exported around the world as a foundation dairy breed.',
    },
    {
      type: 'paragraph',
      text: 'Saanens are large, short-haired, and predominantly white or cream. Because of their pale skin they are sensitive to strong sunlight and generally benefit from shade. A coloured variant selected from Saanen bloodlines is known as the Sable.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Origin', value: 'Switzerland (Saanen valley)' },
    {
      label: 'Appearance',
      value: 'Large, white or cream, short-haired, erect ears',
    },
    { label: 'Primary use', value: 'Milk production' },
    {
      label: 'Conservation status',
      value: 'Not at risk (widely distributed internationally)',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Saanen was developed in western Switzerland as a specialised dairy goat and exported widely from the late nineteenth and early twentieth centuries. It is now recognised in dairy-goat herd books across Europe, the Americas, Oceania, and beyond.',
        },
        {
          type: 'paragraph',
          text: 'Its consistency and high yield have made it a common choice for both purebred dairy herds and as an improver in crossbreeding for milk. The Sable is a coloured variant arising within Saanen bloodlines.',
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
            'Large-framed with a short, fine, predominantly white or cream coat.',
            'Erect ears and a straight or slightly dished facial profile.',
            'May be horned or naturally polled; pale skin is sensitive to strong sun.',
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
          text: 'The Saanen is selected primarily for milk volume and is often described as one of the highest-yielding dairy-goat breeds, though butterfat concentration tends to be lower than in breeds such as the Anglo-Nubian. It is well suited to intensive and semi-intensive dairy systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because of pale skin and short hair, Saanens generally benefit from shade and shelter in hot, sunny conditions. Milk yield and composition depend strongly on nutrition, stage of lactation, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dairy',
  originCountry: 'Switzerland',
  originRegion: 'Saanen valley, Bern canton',
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
  primaryUses: ['Milk production', 'Improver in dairy crossbreeding'],
  physicalCharacteristics:
    'Large, short-haired, predominantly white or cream dairy goat with erect ears and a straight or slightly dished profile. Pale skin is sensitive to strong sunlight; animals may be horned or polled.',
  productionCharacteristics:
    'Selected primarily for high milk volume and often cited among the highest-yielding dairy-goat breeds, with butterfat concentration typically lower than higher-fat breeds. Yield and composition are strongly influenced by feeding, lactation stage, and management.',
  climateAdaptation:
    'Developed in a temperate Alpine environment; performs well in temperate dairy systems and benefits from shade and shelter where sunlight and heat are intense because of its pale skin and short coat.',
  managementContext:
    'Common in intensive and semi-intensive dairy systems worldwide, from specialised commercial dairies to smallholdings. Nutrition, milking management, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Originating in Switzerland and now one of the most widely distributed dairy-goat breeds, found across Europe, the Americas, Australia and New Zealand, and parts of Asia and Africa.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; a Swiss dairy breed distributed internationally. Husbandry and regulation vary by country.',
  climateContext:
    'Temperate-origin dairy goat kept across many climates with appropriate shade, shelter, and management.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Milk yield and composition are highly management-dependent and are described only qualitatively here.',
    'FAO DAD-IS conservation status is assessed per national population; the not-at-risk assessment reflects broad international distribution rather than any single country.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Saanen goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Saanen (goat breed)',
    description:
      'The Saanen: a large white Swiss dairy goat known for high milk yield, a calm temperament, and wide international distribution in commercial dairy herds.',
    keywords: ['Saanen goat', 'dairy goat', 'goat breed', 'Swiss dairy goat'],
  },
  structuredData: { article: true },
};
