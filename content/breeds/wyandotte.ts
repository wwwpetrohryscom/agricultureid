import type { BreedContent } from '@/types/content';

export const wyandotte: BreedContent = {
  id: 'wyandotte',
  slug: 'wyandotte',
  contentType: 'breed',
  title: 'Wyandotte',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Silver-laced Wyandotte'],
  category: 'Chicken breed',
  summary:
    'The Wyandotte is an American dual-purpose chicken breed known for its rose comb, cold-hardiness, and many attractive laced and patterned colour varieties, kept for brown eggs, meat, and exhibition.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Wyandotte is a dual-purpose chicken breed developed in the United States in the 1870s and 1880s, first standardised as the Silver-laced variety. It was bred as a practical farm fowl and quickly became prized for both utility and appearance, spawning numerous colour varieties.',
    },
    {
      type: 'paragraph',
      text: 'Compact and rounded with a distinctive low rose comb, the Wyandotte is notably cold-hardy and generally docile. It lays brown eggs, provides a good meat carcass, and is widely kept by exhibition breeders and backyard poultry keepers.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'American class; dual-purpose' },
    { label: 'Origin', value: 'United States' },
    { label: 'Comb', value: 'Rose comb (cold-hardy)' },
    { label: 'Egg colour', value: 'Brown' },
    { label: 'Notable feature', value: 'Many laced and patterned varieties' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Silver-laced Wyandotte was admitted to the American Poultry Association standard in 1883, and further colours — including Golden-laced, White, Buff, Blue, Partridge, and Columbian — followed as the breed grew in popularity. Named after the Wyandot people, the breed became a staple American dual-purpose fowl and remains a favourite of the exhibition fancy.',
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
            'A rounded, medium-heavy body with full, dense plumage and a curved outline.',
            'A low, close-fitting rose comb that resists frostbite, aiding cold tolerance.',
            'Yellow legs and skin; red earlobes; an extensive range of solid and laced colour varieties.',
            'A generally calm, manageable temperament suited to mixed flocks.',
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
          text: 'The Wyandotte is kept as a dual-purpose bird for brown eggs and meat, and extensively for exhibition owing to its many decorative varieties. The rose comb and dense feathering make it well adapted to cold climates, and its calm nature suits backyard and free-range systems. As with many long-established breeds, utility and show strains can differ in productivity.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The many colour varieties share type but differ in availability and, between show and utility lines, in laying performance. Traits here are qualitative generalisations.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
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
      note: 'Recognised breed; Silver-laced variety standardised from 1883.',
    },
  ],
  primaryUses: [
    'Dual-purpose meat and egg production',
    'Exhibition across numerous colour varieties',
    'Backyard and smallholder flocks',
  ],
  physicalCharacteristics:
    'A rounded, medium-heavy bird with dense plumage, a low rose comb, red earlobes, and yellow legs. Recognised in many solid and laced colours, of which Silver-laced is the original.',
  productionCharacteristics:
    'A steady layer of brown eggs and a well-fleshed meat bird, offering balanced dual-purpose value; utility strains lay more consistently than heavy show lines.',
  climateAdaptation:
    'Very cold-hardy: the compact rose comb and dense feathering reduce frostbite risk, suiting the breed to cool and cold climates.',
  managementContext:
    'A calm, adaptable breed popular for backyard flocks and exhibition; its wide colour range makes it a favourite of hobby breeders.',
  geographicDistribution:
    'Kept internationally in backyard and show settings, with strong representation in North America and Europe.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'frost' },
  ],
  geographicScope:
    'Global breed overview; standards, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Particularly suited to cool and cold climates thanks to its rose comb and dense plumage.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Numerous colour varieties and show-versus-utility lines differ in traits; only qualitative generalisations are given.',
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
    title: 'Wyandotte (chicken breed)',
    description:
      'The Wyandotte chicken: a rose-combed, cold-hardy American dual-purpose breed with many laced colour varieties — origin, traits, and management.',
    keywords: [
      'Wyandotte',
      'Silver-laced Wyandotte',
      'rose comb',
      'dual-purpose chicken',
    ],
  },
  structuredData: { article: true },
};
