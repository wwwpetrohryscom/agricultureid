import type { BreedContent } from '@/types/content';

export const brahmaChicken: BreedContent = {
  id: 'brahma-chicken',
  slug: 'brahma-chicken',
  contentType: 'breed',
  title: 'Brahma',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Brahma Pootra'],
  category: 'Chicken breed',
  summary:
    'The Brahma is a very large, feather-legged chicken breed developed in the United States from imported Asian stock, historically important as a meat fowl and now valued as an imposing, cold-hardy dual-purpose and exhibition breed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Brahma is one of the largest domestic chicken breeds, developed in the United States in the mid-19th century from big, feather-legged Asian fowl imported through Chinese ports. Renowned for its size and stately carriage, it was once nicknamed the "King of poultry" and was a leading meat breed before the rise of specialised broilers.',
    },
    {
      type: 'paragraph',
      text: 'The Brahma is distinguished by its heavy build, feathered legs and feet, small pea comb, and calm temperament. Recognised in Light, Dark, and Buff varieties, it is today kept mainly for exhibition, as a hardy dual-purpose farm bird, and as a docile large breed for backyard flocks.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'Asiatic class; meat and dual-purpose' },
    { label: 'Origin', value: 'United States (from imported Asian stock)' },
    { label: 'Size', value: 'Among the largest chicken breeds' },
    { label: 'Comb', value: 'Small pea comb (cold-tolerant)' },
    { label: 'Distinctive feature', value: 'Feathered legs and feet' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Brahma was developed in the United States around the 1840s to 1850s from large feather-legged birds imported from Asia, and it was refined by American and later English breeders. The exact ancestral details are debated, but the breed was standardised in the Light and Dark varieties in the mid-1800s, with Buff added later. It became a foundational heavy meat breed of the era.',
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
            'A very large, tall, and deep-bodied fowl with an upright, imposing stance.',
            'Feathered shanks and toes, a small pea comb, and dense plumage suited to cold.',
            'Recognised colours include Light (white with black hackle and tail markings), Dark, and Buff.',
            'A notably calm, gentle temperament despite its size.',
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
          text: 'Historically a major table breed, the Brahma is today kept chiefly for exhibition, as a docile large-breed backyard bird, and as a hardy dual-purpose fowl that also lays brown eggs, often continuing through winter. Its feathered feet benefit from dry conditions, as muddy or wet ground can soil and damage foot feathering, and its size calls for adequate housing and perching.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Feathered legs and large size mean the breed suits dry, spacious housing; traits described are qualitative and vary by strain and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Meat',
  originCountry: 'United States',
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
      note: 'Recognised breed in Light, Dark, and Buff varieties.',
    },
  ],
  primaryUses: [
    'Historical meat production',
    'Exhibition and ornamental large-breed keeping',
    'Dual-purpose winter brown-egg laying in cold regions',
  ],
  physicalCharacteristics:
    'A very large, tall fowl with a deep body, feathered shanks and toes, a small pea comb, and dense plumage. Light, Dark, and Buff colour varieties are recognised.',
  productionCharacteristics:
    'Slow-growing but yielding a large meat carcass; a moderate layer of brown eggs, notable for continuing to lay in cold weather when many breeds slow down.',
  climateAdaptation:
    'Very cold-hardy: the pea comb and heavy, feathered plumage suit cold climates. In heat and wet conditions the abundant feathering, including on the feet, needs careful management.',
  managementContext:
    'A gentle giant suited to backyard and exhibition keeping; requires roomy, dry housing and sturdy low perches, and dry footing to protect foot feathering.',
  geographicDistribution:
    'Kept internationally as an exhibition and backyard breed, with historical importance in North America and Europe as a meat fowl.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'frost' },
  ],
  geographicScope:
    'Global breed overview; standards, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Best suited to cold and temperate climates; the heavy, feather-footed plumage requires dry conditions and heat management.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'The precise Asian ancestry of the breed is historically debated and is described only in general terms.',
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
    title: 'Brahma (chicken breed)',
    description:
      'The Brahma chicken: a very large, feather-legged, cold-hardy breed once a leading meat fowl — origin, appearance, uses, and management.',
    keywords: [
      'Brahma chicken',
      'feather-legged breed',
      'large chicken',
      'meat breed',
    ],
  },
  structuredData: { article: true },
};
