import type { BreedContent } from '@/types/content';

export const silkie: BreedContent = {
  id: 'silkie',
  slug: 'silkie',
  contentType: 'breed',
  title: 'Silkie',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Silky', 'Chinese Silk Chicken'],
  category: 'Chicken breed',
  summary:
    'The Silkie is an ancient ornamental chicken breed of Asian origin, unmistakable for its fluffy, fur-like plumage, black skin and bones, five toes, and famously broody, docile nature.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Silkie is an ornamental chicken breed of ancient Asian origin, long documented in China and described by early travellers to the region. It is one of the most distinctive of all poultry breeds, with soft, downy plumage that lacks the barbicels that hold ordinary feathers together, giving a fur- or silk-like appearance.',
    },
    {
      type: 'paragraph',
      text: 'Beyond its unusual feathering, the Silkie is notable for dark blue-black skin, muscle, and bones (a condition known as fibromelanosis), five toes instead of the usual four, feathered legs, and a small walnut-shaped comb. It is celebrated for an exceptionally calm temperament and strong broodiness, and is kept worldwide as a pet, exhibition, and broody breed.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'Ornamental / bantam and standard forms' },
    { label: 'Origin', value: 'Asia (long associated with China)' },
    { label: 'Plumage', value: 'Fluffy, silk-like (lacks feather barbicels)' },
    { label: 'Distinctive traits', value: 'Black skin and bones; five toes' },
    { label: 'Temperament', value: 'Very docile; strongly broody' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Silkie has been kept in Asia for many centuries and reached Europe by way of trade routes, where its unusual appearance made it a curiosity and then a popular ornamental breed. It is recognised by poultry standards internationally, with both bearded and non-bearded forms and, in some countries, distinct bantam and larger standard sizes.',
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
            'Soft, fluffy plumage lacking functional barbicels, so the birds cannot fly and appear fur-like.',
            'Fibromelanosis: dark blue to black skin, meat, and bones, a genetically distinctive trait.',
            'Five toes on each foot (rather than four), with feathering on the legs.',
            'A small, dark walnut comb, dark wattles, and turquoise-blue earlobes; a gentle, tame disposition.',
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
          text: 'Silkies are kept chiefly as ornamental and companion birds and for exhibition, and their reliable broodiness makes them prized as natural incubators for the eggs of other poultry. They lay a modest number of small, cream to tinted eggs. Because the open plumage is not waterproof and offers limited insulation, Silkies need dry, draught-free housing and protection from wet and cold; their inability to fly also makes them vulnerable to predators.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The non-waterproof plumage and inability to fly mean Silkies require sheltered, secure management. Traits described are qualitative and vary by strain and size.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Ornamental',
  originCountry: 'China',
  originRegion: 'Asia',
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
      note: 'Recognised ornamental breed with several colours and bearded/non-bearded forms.',
    },
  ],
  primaryUses: [
    'Ornamental and companion keeping',
    'Exhibition',
    'Natural incubation and brooding of other poultry eggs',
  ],
  physicalCharacteristics:
    'A small, rounded bird with soft, silk-like plumage lacking barbicels, black skin and bones (fibromelanosis), five toes, feathered legs, a dark walnut comb, and blue earlobes.',
  productionCharacteristics:
    'A light layer of small cream to tinted eggs; not a meat or high-output egg breed. Hens are exceptionally broody and make dependable natural incubators.',
  climateAdaptation:
    'The open, non-waterproof plumage gives poor insulation and no rain resistance, so the breed needs dry, sheltered conditions and protection from cold and wet.',
  managementContext:
    'Kept as a docile pet, show, and broody breed; requires secure, dry housing because it cannot fly to escape predators and its plumage soils easily.',
  geographicDistribution:
    'Kept worldwide as an ornamental and hobby breed, with an especially long history in East Asia.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'humidity' },
  ],
  geographicScope:
    'Global breed overview; standards, colours, and size classes vary by country and registry.',
  climateContext:
    'Requires sheltered, dry conditions in all climates owing to non-waterproof plumage; poorly suited to exposure, wet, or severe cold.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'The precise early history and route of spread from Asia are only broadly documented.',
    'Conservation risk status is not asserted here because it varies by country and population.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin, history, and distinctive characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Silkie (chicken breed)',
    description:
      'The Silkie chicken: an ancient Asian ornamental breed with silk-like plumage, black skin and bones, five toes, and famous broodiness — traits and care.',
    keywords: [
      'Silkie chicken',
      'ornamental breed',
      'fibromelanosis',
      'broody hen',
    ],
  },
  structuredData: { article: true },
};
