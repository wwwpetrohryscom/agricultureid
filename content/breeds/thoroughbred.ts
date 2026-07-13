import type { BreedContent } from '@/types/content';

export const thoroughbred: BreedContent = {
  id: 'thoroughbred',
  slug: 'thoroughbred',
  contentType: 'breed',
  title: 'Thoroughbred',
  scientificName: 'Equus caballus',
  alternativeNames: ['English Thoroughbred'],
  category: 'Horse breed',
  summary:
    'The Thoroughbred is a hot-blooded light horse breed developed in England for racing, tracing to three foundation Oriental stallions, and prized for speed, athleticism, and its influence on sport-horse breeding worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Thoroughbred is a light, hot-blooded horse breed developed in England in the 17th and 18th centuries specifically for racing. Every modern Thoroughbred traces in the male line to one of three imported Oriental foundation stallions — the Byerley Turk, the Darley Arabian, and the Godolphin Arabian — bred to fast native mares.',
    },
    {
      type: 'paragraph',
      text: 'Recorded in closed studbooks descended from the General Stud Book, the breed is celebrated for speed, stamina, and athleticism. Beyond racing, Thoroughbreds are widely used in eventing, showjumping, and other sport, and their blood underpins many warmblood and sport-horse breeds.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Light, hot-blooded sport and racing horse' },
    { label: 'Origin', value: 'England (17th–18th centuries)' },
    {
      label: 'Foundation sires',
      value: 'Byerley Turk, Darley Arabian, Godolphin Arabian',
    },
    { label: 'Noted for', value: 'Speed, stamina, and athleticism' },
    { label: 'Studbook', value: 'Closed; descends from the General Stud Book' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Organised racing and selective breeding in England brought together imported Arabian, Barb, and Turkoman ("Oriental") stallions with running mares to create a faster racehorse. The General Stud Book, first published by Weatherbys in 1791, established the closed pedigree records that define the breed, and Thoroughbred racing and breeding subsequently spread across the world under national Jockey Club and studbook authorities.',
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
            'A tall, lean, athletic horse with a deep chest, sloping shoulders, and long legs.',
            'A refined head, long neck, and fine coat; typically bay, chestnut, brown, grey, or black.',
            'Built for galloping speed and endurance, with a spirited, sensitive temperament.',
            'Considerable variation in size and type between racing and sport lines.',
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
          text: 'Thoroughbreds are bred principally for flat and jump racing, and off the track they are widely retrained for eventing, showjumping, dressage, hunting, and general riding. As athletic, high-metabolism horses managed on forage-based diets, they often need careful conditioning and feeding. Their genetics have been central to developing sport-horse and warmblood populations globally.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Breed traits are general and vary between purpose-bred racing and sport lines; individual temperament, soundness, and aptitude depend on bloodline, training, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Light',
  originCountry: 'United Kingdom',
  originRegion: 'England',
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
      registry:
        'General Stud Book (Weatherbys) and national Jockey Club studbooks',
      jurisdiction: 'Global',
      note: 'Closed studbooks maintaining Thoroughbred pedigrees internationally.',
    },
  ],
  primaryUses: [
    'Flat and jump racing',
    'Sport (eventing, showjumping, dressage) and general riding',
    'Foundation and improvement breeding of sport horses',
  ],
  physicalCharacteristics:
    'A tall, lean, deep-chested horse with long legs, sloping shoulders, a refined head, and a fine coat, usually bay, chestnut, brown, grey, or black. Conformation is built for galloping speed.',
  productionCharacteristics:
    'A racing and sport animal rather than a food-producing one; selected for speed, stamina, and athleticism and highly influential as breeding stock.',
  climateAdaptation:
    'A fine-coated horse best suited to temperate management; in hot or cold extremes it depends on the shelter, rugs, and feeding appropriate to a high-metabolism athlete.',
  managementContext:
    'Managed as an athletic riding and racing horse on forage-based diets with conditioning; requires attentive care of soundness, feeding, and workload.',
  geographicDistribution:
    'Bred and raced worldwide, with major populations in Europe, North America, Australasia, and Asia.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'barley' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks and racing authorities vary by country within a shared closed pedigree.',
  climateContext:
    'Kept across temperate and warmer regions under managed conditions suited to an athletic light horse.',
  limitations: [
    'This is a general breed profile, not bloodline-specific or veterinary guidance.',
    'Racing and sport lines differ in size and type; descriptions are qualitative generalisations.',
    'Conservation risk status is not asserted here; the breed is globally numerous.',
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
    title: 'Thoroughbred (horse breed)',
    description:
      'The Thoroughbred: a hot-blooded English racing horse tracing to three foundation sires, prized for speed and sport-horse influence — origin and traits.',
    keywords: [
      'Thoroughbred horse',
      'racehorse',
      'General Stud Book',
      'sport horse',
    ],
  },
  structuredData: { article: true },
};
