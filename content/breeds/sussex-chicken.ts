import type { BreedContent } from '@/types/content';

export const sussexChicken: BreedContent = {
  id: 'sussex-chicken',
  slug: 'sussex-chicken',
  contentType: 'breed',
  title: 'Sussex',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Light Sussex', 'Speckled Sussex'],
  category: 'Chicken breed',
  summary:
    'The Sussex is an old English dual-purpose chicken breed from south-east England, kept for both eggs and meat, and recognised in several colour varieties of which the Light and Speckled are the most familiar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Sussex is a traditional dual-purpose chicken breed originating in the English county of Sussex, where it was long raised as a table fowl and layer. It is a calm, hardy, and adaptable breed available in several colour varieties, including Light, Speckled, and Red.',
    },
    {
      type: 'paragraph',
      text: 'Valued historically for producing good-quality meat as well as tinted to brown eggs, the Sussex was one of the important English utility breeds before the spread of specialised commercial poultry, and it remains popular in backyard and smallholder flocks.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'English breed; dual-purpose' },
    { label: 'Origin', value: 'England (county of Sussex)' },
    { label: 'Egg colour', value: 'Tinted to brown' },
    { label: 'Common varieties', value: 'Light, Speckled, Red and others' },
    { label: 'Temperament', value: 'Calm, docile, good forager' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Sussex descends from long-established table fowl of south-east England and was formalised as a breed in the early 20th century, with a breed club founded to promote it. The Light Sussex in particular became a widely used utility bird and featured in crossbreeding for both meat and eggs. The breed is recognised by the Poultry Club of Great Britain and other standards bodies.',
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
            'A broad, deep, well-fleshed body reflecting its history as a table breed.',
            'A single comb, red earlobes, and white legs and skin.',
            'Distinct colour patterns by variety: the Light has a white body with black neck and tail markings; the Speckled is mahogany flecked with white.',
            'A quiet, docile temperament that tolerates confinement while also foraging well.',
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
          text: 'The Sussex is a genuine dual-purpose breed, producing a good table carcass and a reliable supply of tinted to light-brown eggs. Its docility, hardiness, and willingness to forage make it a favourite for backyard, free-range, and smallholder keepers. The Light Sussex was also a traditional partner in utility crosses.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Traits described are general to the breed; the several colour varieties differ, and production depends on strain, feeding, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'England (Sussex)',
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
      registry: 'Poultry Club of Great Britain',
      jurisdiction: 'United Kingdom',
      note: 'Recognised breed with several standardised colour varieties.',
    },
  ],
  primaryUses: [
    'Dual-purpose meat and egg production',
    'Backyard and smallholder flocks',
    'Traditional utility crossbreeding (Light Sussex)',
  ],
  physicalCharacteristics:
    'A broad, deep-bodied fowl with a single comb, red earlobes, and white legs and skin. Colour varies by variety, from the black-marked white of the Light to the white-flecked mahogany of the Speckled.',
  productionCharacteristics:
    'A good table bird combined with steady laying of tinted to light-brown eggs, giving well-balanced dual-purpose value.',
  climateAdaptation:
    'Hardy and adaptable across temperate climates, tolerating both cooler conditions and general farmyard environments with basic shelter.',
  managementContext:
    'Docile and content in both confinement and free range, making it a versatile smallholder and backyard breed. The Light Sussex has a long history in crossbreeding.',
  geographicDistribution:
    'Common in the United Kingdom and kept internationally, especially among heritage-poultry and smallholder keepers.',
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global breed overview; standards, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Kept across temperate regions; regarded as a hardy all-round farmyard breed rather than climate-specialised.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Several colour varieties and utility versus exhibition lines exist with differing traits; only qualitative generalisations are given.',
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
    title: 'Sussex (chicken breed)',
    description:
      'The Sussex chicken: an old English dual-purpose breed in Light, Speckled, and other varieties — origin, appearance, uses, and management.',
    keywords: [
      'Sussex chicken',
      'Light Sussex',
      'Speckled Sussex',
      'dual-purpose breed',
    ],
  },
  structuredData: { article: true },
};
