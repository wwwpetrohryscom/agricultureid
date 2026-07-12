import type { BreedContent } from '@/types/content';

export const newHampshireChicken: BreedContent = {
  id: 'new-hampshire-chicken',
  slug: 'new-hampshire-chicken',
  contentType: 'breed',
  title: 'New Hampshire',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['New Hampshire Red'],
  category: 'Chicken breed',
  summary:
    'The New Hampshire is an American dual-purpose chicken breed selectively developed from the Rhode Island Red for faster growth and earlier maturity, valued as a productive meat-and-egg bird with a rich chestnut-red plumage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The New Hampshire is a dual-purpose chicken breed developed in the United States in the early 20th century by intensively selecting Rhode Island Red stock in the state of New Hampshire. Breeders emphasised rapid growth, early feathering, early maturity, and vigour rather than a new colour or type.',
    },
    {
      type: 'paragraph',
      text: 'The result is a robust, medium-heavy fowl with lighter, more chestnut-red plumage than the Rhode Island Red, laying brown eggs and producing a good meat carcass. It has been used both as a farm and exhibition bird and in commercial meat crosses.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'American class; dual-purpose' },
    { label: 'Origin', value: 'United States (New Hampshire)' },
    { label: 'Derived from', value: 'Rhode Island Red' },
    { label: 'Egg colour', value: 'Brown' },
    { label: 'Selected for', value: 'Fast growth and early maturity' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'From the 1910s onward, New England breeders selected Rhode Island Red lines specifically for quick growth and early maturity, and the New Hampshire was admitted to the American Poultry Association standard in 1935 as a distinct breed. It became important both for meat and as a parent in broiler and dual-purpose crosses in the mid-20th century.',
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
            'A medium-heavy, well-rounded body built for a good balance of meat and eggs.',
            'Plumage a lighter, brighter chestnut or salmon-red than the deep mahogany of the Rhode Island Red.',
            'A single comb, red earlobes, and yellow legs and skin.',
            'A generally calm and vigorous disposition; birds mature and feather early.',
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
          text: 'The New Hampshire is a practical dual-purpose breed kept for brown eggs and meat, and it is valued where early maturity and good growth are priorities. It suits backyard, free-range, and smallholder systems and has been used in crossbreeding for meat production. Hardy and adaptable, it performs well under ordinary farm management.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Selection goals differed between meat-oriented and exhibition strains, so growth and laying vary; traits here are qualitative generalisations.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United States',
  originRegion: 'New Hampshire',
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
      note: 'Recognised as a distinct breed from 1935.',
    },
  ],
  primaryUses: [
    'Dual-purpose meat and egg production',
    'Meat-oriented crossbreeding',
    'Backyard and smallholder flocks',
  ],
  physicalCharacteristics:
    'A medium-heavy bird with a rounded body, bright chestnut to salmon-red plumage, a single comb, red earlobes, and yellow legs. Lighter in colour than the Rhode Island Red.',
  productionCharacteristics:
    'A good layer of brown eggs and a well-fleshed meat bird, distinguished within its family by early maturity and rapid growth.',
  climateAdaptation:
    'Hardy and adaptable across temperate climates, tolerating cold and general farm conditions with basic shelter.',
  managementContext:
    'A vigorous, easy-to-keep dual-purpose breed for backyard, free-range, and smallholder systems; early maturity suits keepers wanting a quicker return.',
  geographicDistribution:
    'Kept across North America and Europe in farm, backyard, and exhibition flocks, and used in dual-purpose crosses.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global breed overview; standards, strains, and populations vary by country and registry.',
  climateContext:
    'Kept across temperate regions; valued as a hardy all-round dual-purpose breed.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Meat-oriented and exhibition strains differ in growth and laying; only qualitative generalisations are given.',
    'Conservation risk status is not asserted here because it varies by country and population.',
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
    title: 'New Hampshire (chicken breed)',
    description:
      'The New Hampshire chicken: an American dual-purpose breed bred from the Rhode Island Red for fast growth and early maturity — origin, traits, and use.',
    keywords: [
      'New Hampshire chicken',
      'New Hampshire Red',
      'dual-purpose breed',
      'brown egg layer',
    ],
  },
  structuredData: { article: true },
};
