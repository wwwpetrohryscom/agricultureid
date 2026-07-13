import type { BreedContent } from '@/types/content';

export const kiko: BreedContent = {
  id: 'kiko',
  slug: 'kiko',
  contentType: 'breed',
  title: 'Kiko',
  scientificName: 'Capra hircus',
  category: 'Goat breed',
  summary:
    'The Kiko is a meat goat developed in New Zealand from feral goats selected for hardiness, growth, and survivability under low-input hill-country conditions. It is widely used in extensive and pasture-based meat systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Kiko is a meat-goat breed developed in New Zealand in the late twentieth century. Breeders selected hardy feral goats, crossed them with dairy bucks, and then bred for animals that performed and survived under demanding, low-input hill-country conditions with minimal intervention.',
    },
    {
      type: 'paragraph',
      text: 'The result is a robust, fast-growing meat goat prized for hardiness and good foraging ability. The name derives from a Māori word for meat or flesh. The breed has since become popular in extensive and pasture-based meat production, particularly in the United States.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Meat' },
    { label: 'Origin', value: 'New Zealand' },
    {
      label: 'Selection basis',
      value: 'Hardiness, growth, and survivability under low-input conditions',
    },
    { label: 'Primary use', value: 'Meat production and crossbreeding' },
    {
      label: 'Appearance',
      value: 'Medium-large, often horned; frequently white or cream',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Kiko was created by selecting feral New Zealand goats and crossing them with dairy bucks, then applying strong selection for growth and survivability under extensive hill-country management. The goal was a low-maintenance meat goat that required minimal intervention, and dedicated breed associations now register the breed in New Zealand and the United States.',
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
            'Medium-to-large, well-muscled frame suited to meat production.',
            'Frequently white or cream, though other colours occur; often horned.',
            'Selected for a robust constitution and good mobility on rough terrain.',
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
          text: 'The Kiko is valued for rapid growth, good maternal ability, and strong performance under extensive, low-input conditions, and is often used in meat-goat crossbreeding to add hardiness and foraging ability. It is well suited to pasture- and browse-based systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'As a relatively recent composite breed, the Kiko is still expanding in numbers; its conservation status is not classified here. Performance is highly dependent on management and environment.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Meat',
  originCountry: 'New Zealand',
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
  ],
  primaryUses: ['Meat production', 'Meat-goat crossbreeding'],
  physicalCharacteristics:
    'Medium-to-large, well-muscled meat goat, frequently white or cream and often horned, selected for a robust constitution and good mobility on rough terrain.',
  productionCharacteristics:
    'Selected for rapid growth, good maternal ability, and survivability under extensive, low-input hill-country management; commonly used in crossbreeding to add hardiness and foraging ability. Performance is highly management- and environment-dependent.',
  climateAdaptation:
    'Bred for demanding, low-input pasture and hill conditions, and adaptable to a range of extensive and pasture-based environments with appropriate management.',
  managementContext:
    'Suited to extensive, pasture- and browse-based meat systems and used in structured crossbreeding. Nutrition, parasite control, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed in New Zealand and now widely raised in the United States, with a presence in other meat-goat regions.',
  connections: [
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global; a New Zealand meat breed now prominent in the United States. Husbandry and regulation vary by country.',
  climateContext:
    'Developed for demanding, low-input pasture and hill conditions; adaptable across extensive systems.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Performance figures are highly system- and management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown: as a recent composite breed its populations are expanding and are not assigned a risk category here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the Kiko goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kiko (goat breed)',
    description:
      'The Kiko: a New Zealand meat goat selected from feral stock for hardiness, growth, and survivability, widely used in low-input, pasture-based meat systems.',
    keywords: ['Kiko goat', 'meat goat', 'goat breed', 'hardy goat'],
  },
  structuredData: { article: true },
};
