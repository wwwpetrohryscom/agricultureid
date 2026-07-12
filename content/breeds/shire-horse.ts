import type { BreedContent } from '@/types/content';

export const shireHorse: BreedContent = {
  id: 'shire-horse',
  slug: 'shire-horse',
  contentType: 'breed',
  title: 'Shire',
  scientificName: 'Equus caballus',
  alternativeNames: ['Shire horse'],
  category: 'Horse breed',
  summary:
    'The Shire is an English heavy draught horse breed, among the tallest and most powerful of all horses, historically used for farm work, haulage, and brewery drays and now a conservation-priority breed kept for showing and heritage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Shire is a heavy draught horse breed developed in the English Midlands, celebrated as one of the largest and strongest horse breeds in the world. It descends from the great "black" horses of England and was refined into a powerful agricultural and haulage animal.',
    },
    {
      type: 'paragraph',
      text: 'Standing very tall with heavy feathering on the lower legs, the Shire was indispensable for ploughing, pulling carts and canal boats, and hauling brewery drays before mechanisation. Numbers fell dramatically in the 20th century, and the breed is now a conservation priority maintained largely for showing, driving, promotion, and heritage.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Heavy draught horse' },
    { label: 'Origin', value: 'England (Midlands)' },
    { label: 'Noted for', value: 'Great height and pulling power' },
    { label: 'Distinctive traits', value: 'Feathered legs; large stature' },
    { label: 'Registry', value: 'Shire Horse Society' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Shire developed from England’s heavy "great horse" and black cart-horse lineages, shaped in counties such as Lincolnshire, Leicestershire, and Derbyshire. The Shire Horse Society (originally the English Cart Horse Society) was established in 1878 to record the breed. Once numbering in the millions across British agriculture and industry, Shires declined sharply with mechanisation, and conservation bodies including the Rare Breeds Survival Trust and The Livestock Conservancy now monitor the breed.',
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
            'A very tall, massive, deep-bodied horse among the largest of all breeds.',
            'Abundant, fine feathering on the lower legs and a strong, arched neck.',
            'Commonly black, bay, brown, or grey, often with white leg markings.',
            'A gentle, calm "gentle giant" temperament despite great size and power.',
          ],
        },
      ],
    },
    {
      id: 'uses-and-management',
      heading: 'Uses and management',
      body: [
        {
          type: 'paragraph',
          text: 'Once the mainstay of heavy farm and urban haulage, the Shire is now used chiefly for showing, carriage and dray driving, forestry, promotion, and heritage demonstrations, and for crossbreeding to add size and substance. Its exceptional size means large feed and space requirements, and the leg feathering needs care to keep the skin beneath healthy. The breed relies on breeders and enthusiasts to maintain its numbers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The Shire is a conservation-priority breed; specific risk categories differ between national conservation organisations and are not asserted here as a single status.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Draught',
  originCountry: 'United Kingdom',
  originRegion: 'England (Midlands)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Horse breed recorded in the global domestic animal diversity inventory.',
    },
    {
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      note: 'Draught breed monitored on the Conservation Priority List.',
    },
    {
      registry: 'Shire Horse Society',
      jurisdiction: 'United Kingdom',
      note: 'Breed studbook maintained since 1878.',
    },
  ],
  primaryUses: [
    'Showing and exhibition',
    'Carriage, dray, and team driving; promotion',
    'Forestry, heritage draught work, and crossbreeding',
  ],
  physicalCharacteristics:
    'A very tall, massive, deep-bodied draught horse with heavy lower-leg feathering and a strong arched neck, commonly black, bay, brown, or grey with white leg markings.',
  productionCharacteristics:
    'A draught and exhibition animal, not a food-producing one; renowned for pulling power and size and valued for a docile temperament.',
  climateAdaptation:
    'Suited to the cool, temperate climate of its origin; the great size and heavy feathering call for dry footing and careful management in wet or hot conditions.',
  managementContext:
    'Requires substantial feed, space, and robust facilities; feathering needs attention to skin health. Populations are sustained by showing, driving, promotion, and heritage interest.',
  geographicDistribution:
    'Kept in the United Kingdom, North America, and elsewhere in modest numbers, largely for showing, driving, and heritage rather than farm draught.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'barley' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks and conservation categories vary by country and organisation.',
  climateContext:
    'Best suited to cool, temperate climates; heavy feathering and size require dry, managed conditions.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'Conservation status differs between national bodies and is not asserted here as a single global category.',
    'Trait descriptions are qualitative and vary by bloodline and management.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Draught-breed conservation context',
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
    title: 'Shire (horse breed)',
    description:
      'The Shire horse: an English heavy draught breed among the tallest and strongest of all horses, now conservation-priority — origin, traits, and uses.',
    keywords: ['Shire horse', 'draught horse', 'heavy horse', 'gentle giant'],
  },
  structuredData: { article: true },
};
