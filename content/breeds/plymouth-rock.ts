import type { BreedContent } from '@/types/content';

export const plymouthRock: BreedContent = {
  id: 'plymouth-rock',
  slug: 'plymouth-rock',
  contentType: 'breed',
  title: 'Plymouth Rock',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Barred Rock', 'Rock'],
  category: 'Chicken breed',
  summary:
    'The Plymouth Rock is an American dual-purpose chicken breed, most familiar in its Barred variety, valued for docility, cold-hardiness, and steady production of brown eggs on farms and in backyard flocks.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Plymouth Rock is a dual-purpose chicken breed developed in the United States in the mid-19th century and standardised in New England. Its best-known form is the Barred Plymouth Rock, with crisp black-and-white barred plumage, though several other colour varieties are recognised.',
    },
    {
      type: 'paragraph',
      text: 'Long a mainstay of North American farmyards, the breed is prized for a calm temperament, hardiness in cold weather, and a good balance of egg and meat production. Barred Rock hens also feature in sex-linked crossbreeding because the barring gene allows day-old chicks to be sorted by markings.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'American class; dual-purpose breed' },
    { label: 'Origin', value: 'United States (New England)' },
    { label: 'Egg colour', value: 'Brown' },
    { label: 'Best-known variety', value: 'Barred (black-and-white)' },
    { label: 'Temperament', value: 'Docile, calm, cold-hardy' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Plymouth Rock was first exhibited in the United States in the mid-1800s and admitted to the American Poultry Association standard in 1874, with the Barred variety established first. It became one of the most popular general-purpose farm fowls in North America before the rise of specialised commercial strains, and it remains widely kept today.',
        },
      ],
    },
    {
      id: 'appearance-and-characteristics',
      heading: 'Appearance and characteristics',
      body: [
        {
          type: 'list',
          items: [
            'A medium-heavy, long and deep body with a single comb and red earlobes.',
            'Yellow legs and skin; several recognised colours, of which Barred is the most iconic.',
            'Distinct black-and-white barring in the Barred variety, a pattern used in sex-linked crosses.',
            'A generally docile, easily handled temperament suited to mixed flocks.',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Plymouth Rock is kept for both eggs and meat and is well regarded as a productive, low-maintenance dual-purpose bird. Its cold-hardiness and calm nature make it popular for backyard, free-range, and smallholder systems in temperate regions. The barring gene of the Barred Rock is exploited in traditional sex-linked crosses to distinguish male and female chicks at hatching.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Characteristics given are general to the breed; the several colour varieties and individual strains differ in detail, and performance depends on management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United States',
  originRegion: 'New England',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Chicken breed recorded in the global domestic animal diversity inventory.',
    },
    {
      registry: 'American Poultry Association (Standard of Perfection)',
      jurisdiction: 'United States',
      note: 'Recognised breed; Barred variety standardised from 1874.',
    },
  ],
  primaryUses: [
    'Dual-purpose meat and egg production',
    'Backyard and smallholder flocks',
    'Barred variety used in sex-linked crossbreeding',
  ],
  physicalCharacteristics:
    'A medium-heavy bird with a long, deep body, single comb, red earlobes, and yellow legs. The Barred variety shows regular black-and-white barring; other recognised colours exist.',
  productionCharacteristics:
    'A steady layer of brown eggs and a serviceable meat bird, offering balanced dual-purpose output rather than specialisation in either product.',
  climateAdaptation:
    'Notably cold-hardy and robust, making it well suited to cool and temperate climates with basic shelter.',
  managementContext:
    'Docile and easy to manage in mixed backyard and free-range flocks. The Barred Rock is a traditional parent in sex-linked crosses for chick sexing.',
  geographicDistribution:
    'Widely distributed, especially across North America and Europe, in both heritage farm flocks and hobby settings.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'frost' },
  ],
  geographicScope:
    'Global breed overview; standards, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Favoured in cool and temperate regions for its cold tolerance; kept more widely with appropriate management.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Multiple colour varieties and strains exist with differing traits; only qualitative generalisations are given.',
    'Conservation risk status is not asserted here because it varies by variety, country, and population.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin, history, and general characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Plymouth Rock (chicken breed)',
    description:
      'The Plymouth Rock chicken, including the Barred Rock: a docile, cold-hardy American dual-purpose breed — origin, traits, and management.',
    keywords: [
      'Plymouth Rock',
      'Barred Rock',
      'dual-purpose chicken',
      'brown egg breed',
    ],
  },
  structuredData: { article: true },
};
