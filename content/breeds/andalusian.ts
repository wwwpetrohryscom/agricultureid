import type { BreedContent } from '@/types/content';

export const andalusian: BreedContent = {
  id: 'andalusian',
  slug: 'andalusian',
  contentType: 'breed',
  title: 'Andalusian',
  scientificName: 'Equus caballus',
  alternativeNames: ['Pura Raza Española', 'PRE', 'Spanish horse'],
  category: 'Horse breed',
  summary:
    'The Andalusian, known in Spain as the Pura Raza Española (PRE), is a Spanish baroque light horse breed of Iberian origin, elegant and strongly built, historically influential and prized today for classical dressage and haute école work.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Andalusian is a light horse breed from the Iberian Peninsula, known in Spain as the Pura Raza Española ("Pure Spanish Horse", or PRE). Long associated with the region of Andalusia, it is a strongly built yet elegant "baroque" type with an arched neck, abundant mane and tail, and naturally collected, elevated movement.',
    },
    {
      type: 'paragraph',
      text: 'Historically one of the most influential horse breeds in Europe and the Americas — shaping many light and warmblood breeds — the Andalusian remains highly valued for classical and competitive dressage, haute école, driving, and display. Grey is the most familiar colour, though bay and other colours occur.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Light/baroque riding horse' },
    { label: 'Origin', value: 'Spain (Iberian Peninsula)' },
    { label: 'Spanish name', value: 'Pura Raza Española (PRE)' },
    { label: 'Common colour', value: 'Grey (also bay and others)' },
    {
      label: 'Noted for',
      value: 'Collected movement; classical dressage aptitude',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Andalusian descends from ancient Iberian horses and was refined over centuries, becoming a prized war, riding, and court horse across Renaissance and Baroque Europe. It contributed to the foundation of numerous breeds worldwide. The Pura Raza Española studbook, historically associated with Spanish breeding institutions and administered under the national breeders’ association (ANCCE), defines the pure-bred population today.',
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
            'A compact, strongly muscled body of medium height with a well-arched, crested neck.',
            'A convex or straight facial profile, expressive eyes, and long, thick mane and tail.',
            'Grey is most common, but bay, black, and other solid colours occur.',
            'Naturally elevated, collected movement and a docile, intelligent, willing temperament.',
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
          text: 'The Andalusian excels in classical and competitive dressage and haute école, and is also used for driving, working equitation, mounted display, and general riding. Its trainability and presence make it a favourite for exhibition and film. It is managed as a riding horse on forage-based diets, with the abundant mane and tail benefiting from routine grooming.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The names "Andalusian" and "Pura Raza Española (PRE)" are used closely, but the PRE is a specific studbook-defined pure-bred population; related Iberian types exist. Traits described are qualitative.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Light',
  originCountry: 'Spain',
  originRegion: 'Andalusia (Iberian Peninsula)',
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
      registry: 'Pura Raza Española studbook (ANCCE)',
      jurisdiction: 'Spain',
      note: 'Studbook defining the pure-bred Spanish horse population.',
    },
  ],
  primaryUses: [
    'Classical and competitive dressage; haute école',
    'Driving, working equitation, and mounted display',
    'General riding and breeding',
  ],
  physicalCharacteristics:
    'A compact, muscular, medium-height horse with a crested, arched neck, a convex or straight profile, and a long, thick mane and tail. Grey predominates, with bay, black, and other colours also seen.',
  productionCharacteristics:
    'A riding, dressage, and breeding animal rather than a food-producing one; valued for collected movement, trainability, and presence.',
  climateAdaptation:
    'Adapted to the warm, dry Mediterranean climate of its origin and kept successfully across a range of climates with appropriate care.',
  managementContext:
    'Managed as a sport and riding horse on forage-based diets; its docile, willing temperament suits classical training, and the heavy mane and tail need regular grooming.',
  geographicDistribution:
    'Bred in Spain and internationally, with pure-bred (PRE) populations recorded through the Spanish studbook and related associations abroad.',
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'oats' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; the PRE studbook is Spain-based while the breed is kept internationally.',
  climateContext:
    'Suited to warm Mediterranean climates by origin and adaptable to temperate conditions with standard care.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'The relationship between the broad term "Andalusian" and the studbook-defined Pura Raza Española is nuanced and described only in general terms.',
    'Conservation risk status is not asserted here because it varies by population and registry.',
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
    title: 'Andalusian (horse breed)',
    description:
      'The Andalusian or Pura Raza Española (PRE): a Spanish baroque light horse prized for collected movement and classical dressage — origin, traits, and uses.',
    keywords: [
      'Andalusian horse',
      'Pura Raza Española',
      'PRE horse',
      'baroque horse',
    ],
  },
  structuredData: { article: true },
};
