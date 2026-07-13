import type { BreedContent } from '@/types/content';

export const orpington: BreedContent = {
  id: 'orpington',
  slug: 'orpington',
  contentType: 'breed',
  title: 'Orpington',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Buff Orpington'],
  category: 'Chicken breed',
  summary:
    'The Orpington is a large, soft-feathered English dual-purpose chicken breed developed in Kent in the late 19th century, popular for its docile temperament, cold-hardiness, and, in its Buff variety, striking golden plumage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Orpington is a heavy, deep-bodied dual-purpose chicken breed created by William Cook near the town of Orpington in Kent, England, in the 1880s. Bred from several existing breeds, it was intended as a productive utility fowl that also presented well, and it quickly became fashionable.',
    },
    {
      type: 'paragraph',
      text: 'Recognised in several colours, the Buff Orpington is the best known. The breed is characterised by abundant, loose plumage that gives a full, rounded outline, together with a calm disposition and good tolerance of cold, making it a favourite for backyard flocks and exhibition.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'English breed; dual-purpose' },
    { label: 'Origin', value: 'England (Orpington, Kent)' },
    { label: 'Egg colour', value: 'Light brown' },
    { label: 'Best-known variety', value: 'Buff (golden)' },
    { label: 'Temperament', value: 'Docile, calm, cold-hardy' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'William Cook introduced the first (Black) Orpington in 1886, followed by other colours including the enduringly popular Buff. The breed spread quickly in Britain and abroad as an attractive dual-purpose fowl, and heavier exhibition strains later diverged from the more utilitarian early type. It is recognised by the Poultry Club of Great Britain and the American Poultry Association.',
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
            'A large, heavy bird with a broad, deep body and profuse, loose feathering giving a rounded, low-set appearance.',
            'A single comb, red earlobes, and white skin; legs are unfeathered.',
            'Several colour varieties, of which Buff (a warm golden shade) is the most iconic; Black, White, and Blue are also recognised.',
            'A gentle, calm temperament, with hens inclined to go broody.',
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
          text: 'The Orpington is kept as a dual-purpose bird and, increasingly, for exhibition and as a docile backyard pet. Its dense plumage confers good cold tolerance but can require attention to cleanliness and, in hot climates, shade and ventilation. Hens are often reliable broodies and mothers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Modern exhibition Orpingtons are often larger and less productive than early utility strains; traits here are qualitative generalisations across the breed.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United Kingdom',
  originRegion: 'England (Orpington, Kent)',
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
    'Exhibition and ornamental backyard keeping',
    'Brooding and natural incubation',
  ],
  physicalCharacteristics:
    'A large, deep-bodied bird with abundant loose plumage, a single comb, red earlobes, white skin, and clean (unfeathered) legs. Buff is the signature colour, alongside Black, White, and Blue.',
  productionCharacteristics:
    'A moderate layer of light-brown eggs and a substantial meat carcass; utility strains lay better than heavy exhibition lines. Hens are frequently broody.',
  climateAdaptation:
    'Dense feathering gives good cold-hardiness; in hot climates shade, ventilation, and clean bedding help offset the heavy plumage.',
  managementContext:
    'A calm, easily tamed breed suited to backyard and exhibition settings; its broodiness makes it useful for natural incubation but can interrupt laying.',
  geographicDistribution:
    'Kept internationally in backyard and show flocks, with strong followings in the United Kingdom, Europe, and North America.',
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'frost' },
  ],
  geographicScope:
    'Global breed overview; standards, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Well suited to cool and temperate climates owing to heavy plumage; kept more widely with heat management.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Exhibition and utility strains differ markedly in size and productivity; only qualitative generalisations are given.',
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
    title: 'Orpington (chicken breed)',
    description:
      'The Orpington chicken, including the Buff Orpington: a large, docile, cold-hardy English dual-purpose breed — origin, traits, and management.',
    keywords: [
      'Orpington chicken',
      'Buff Orpington',
      'dual-purpose breed',
      'heavy chicken',
    ],
  },
  structuredData: { article: true },
};
