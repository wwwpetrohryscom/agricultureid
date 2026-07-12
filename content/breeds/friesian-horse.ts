import type { BreedContent } from '@/types/content';

export const friesianHorse: BreedContent = {
  id: 'friesian-horse',
  slug: 'friesian-horse',
  contentType: 'breed',
  title: 'Friesian',
  scientificName: 'Equus caballus',
  alternativeNames: ['Frisian horse'],
  category: 'Horse breed',
  summary:
    'The Friesian is a Dutch horse breed from the province of Friesland, an elegant black "baroque"-type horse with a long, flowing mane and tail and lower-leg feathering, used chiefly for driving and dressage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Friesian is a horse breed originating in Friesland, in the northern Netherlands. Almost always black, with a powerful yet graceful build, long flowing mane and tail, and silky feathering on the lower legs, it is a classic example of a "baroque" type horse shaped by centuries of European carriage and riding traditions.',
    },
    {
      type: 'paragraph',
      text: 'Once used for agriculture and as a light war and coach horse, and at times close to extinction, the Friesian was preserved by a dedicated Dutch studbook and is today prized for carriage driving, dressage, and ceremonial and film work. Its distinctive high, animated trot is a hallmark of the breed.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Light/baroque carriage and riding horse' },
    { label: 'Origin', value: 'Netherlands (Friesland)' },
    { label: 'Colour', value: 'Almost always black' },
    {
      label: 'Distinctive traits',
      value: 'Flowing mane and tail; leg feathering; high trot',
    },
    { label: 'Registry', value: 'KFPS (Friesch Paarden-Stamboek)' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Friesian horses have been documented in their home region for many centuries and were influenced at various times by Iberian and other bloodlines. The Friesch Paarden-Stamboek (KFPS), founded in 1879, maintains the studbook that safeguarded the breed through periods when numbers fell critically low. Careful stewardship restored the population, and the breed is now popular internationally.',
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
            'A strong, compact, well-arched body of moderate height with a proud carriage.',
            'A glossy black coat (the studbook admits essentially only black), rarely with any white markings.',
            'Long, thick mane, tail, and forelock, and silky feathering on the lower legs.',
            'A powerful, elevated ("high-stepping") trot and a generally willing, gentle temperament.',
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
          text: 'Friesians are used above all for carriage and combined driving and for dressage, as well as for pleasure riding and ceremonial, display, and film roles where their striking looks and animated movement are prized. The abundant hair and leg feathering benefit from grooming and dry conditions. A relatively small founding population means the studbook manages breeding to sustain genetic health.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Breed traits are general; movement, size, and temperament vary by bloodline and training. The studbook applies strict criteria to registration.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Light',
  originCountry: 'Netherlands',
  originRegion: 'Friesland',
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
      registry: 'Koninklijke Vereniging Het Friesch Paarden-Stamboek (KFPS)',
      jurisdiction: 'Netherlands',
      note: 'Original and principal breed studbook, maintained since 1879.',
    },
  ],
  primaryUses: [
    'Carriage and combined driving',
    'Dressage and pleasure riding',
    'Ceremonial, display, and film work',
  ],
  physicalCharacteristics:
    'A compact, powerfully built black horse with an arched neck, long thick mane and tail, and silky lower-leg feathering; noted for an elevated, animated trot. White markings are rare and restricted by the studbook.',
  productionCharacteristics:
    'A driving and riding animal rather than a food-producing one; valued for presence, movement, and a willing temperament.',
  climateAdaptation:
    'Suited to the temperate maritime climate of its origin; the abundant hair and feathering call for grooming and dry conditions.',
  managementContext:
    'Managed as a driving and sport horse on forage-based diets; the studbook actively manages breeding given the breed’s relatively narrow founding base.',
  geographicDistribution:
    'Bred in the Netherlands and kept worldwide, with growing international populations tied to the KFPS studbook.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'humidity' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; the KFPS studbook is Netherlands-based while the breed is kept internationally.',
  climateContext:
    'Suited to temperate, maritime conditions; abundant hair benefits from dry, well-groomed management.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'The breed has a relatively narrow founding population managed by the studbook; genetic-health management is an ongoing consideration.',
    'Conservation risk status is not asserted here; the global population has recovered from historically low numbers.',
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
    title: 'Friesian (horse breed)',
    description:
      'The Friesian horse: an elegant black Dutch baroque breed with flowing mane, feathered legs, and a high trot, used for driving and dressage — origin and traits.',
    keywords: [
      'Friesian horse',
      'baroque horse',
      'black horse breed',
      'carriage horse',
    ],
  },
  structuredData: { article: true },
};
