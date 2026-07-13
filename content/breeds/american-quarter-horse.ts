import type { BreedContent } from '@/types/content';

export const americanQuarterHorse: BreedContent = {
  id: 'american-quarter-horse',
  slug: 'american-quarter-horse',
  contentType: 'breed',
  title: 'American Quarter Horse',
  scientificName: 'Equus caballus',
  alternativeNames: ['Quarter Horse'],
  category: 'Horse breed',
  summary:
    'The American Quarter Horse is a compact, powerfully muscled light horse breed from the United States, named for its speed over a quarter-mile and celebrated as a versatile stock horse with a calm, willing temperament.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The American Quarter Horse is a light horse breed developed in the United States, tracing to colonial-era crosses of English and Spanish stock and later infusions of Thoroughbred and other blood. Its name comes from its exceptional speed over short distances of about a quarter of a mile.',
    },
    {
      type: 'paragraph',
      text: 'Known for a muscular, compact build, a calm and cooperative nature, and "cow sense," the Quarter Horse became the definitive American ranch and stock horse. It is registered by the American Quarter Horse Association, one of the largest breed registries in the world.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Light stock horse' },
    { label: 'Origin', value: 'United States' },
    { label: 'Named for', value: 'Speed over the quarter-mile' },
    { label: 'Temperament', value: 'Calm, willing, quick, versatile' },
    { label: 'Registry', value: 'American Quarter Horse Association (AQHA)' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Short-distance racing horses were bred in the American colonies from the 17th century, combining sturdy Spanish-derived stock with imported English horses. As settlement moved west, these agile, powerful horses proved ideal for working cattle. The American Quarter Horse Association was founded in 1940 to record the breed, which has since become extremely numerous and widespread.',
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
            'A compact, well-balanced body with notably heavy, powerful hindquarters.',
            'A short, refined head, muscular shoulders, and strong legs built for quick starts and turns.',
            'Many recognised solid colours, with sorrel (a reddish chestnut) especially common.',
            'A calm, trainable temperament combined with speed and agility over short distances.',
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
          text: 'The Quarter Horse is a versatile working and sport horse used for ranch and cattle work, western disciplines such as cutting, reining, and roping, barrel racing, sprint racing, and pleasure riding. Its docile nature and athleticism make it popular with amateur and professional riders alike. Like all horses it is managed on a forage-based diet suited to its workload.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Different bloodlines emphasise sprint racing, cattle work, halter conformation, or pleasure riding; traits here are qualitative generalisations across the breed.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Light',
  originCountry: 'United States',
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
      registry: 'American Quarter Horse Association (AQHA)',
      jurisdiction: 'United States',
      note: 'Primary breed registry; among the largest studbooks worldwide.',
    },
  ],
  primaryUses: [
    'Ranch and cattle work',
    'Western performance disciplines and sprint racing',
    'Pleasure and general riding',
  ],
  physicalCharacteristics:
    'A compact, muscular light horse with powerful hindquarters, a short refined head, and strong legs. Many solid colours occur, with sorrel/chestnut common. Built for rapid acceleration and agility.',
  productionCharacteristics:
    'A working and sport animal rather than a food-producing one; valued for sprinting speed, agility, cattle-working aptitude, and a trainable disposition.',
  climateAdaptation:
    'Hardy and adaptable across a range of climates typical of North American ranchlands, requiring standard shelter, water, and forage.',
  managementContext:
    'Managed as a versatile riding and stock horse on forage-based diets; specialised bloodlines suit racing, cutting, reining, or pleasure use.',
  geographicDistribution:
    'Extremely numerous in the United States and kept internationally, making it one of the most populous horse breeds worldwide.',
  connections: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'oats' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; the AQHA studbook is US-based while the breed is kept internationally.',
  climateContext:
    'Kept across varied climates from rangeland to stable management, with no strong single-climate specialisation.',
  limitations: [
    'This is a general breed profile, not bloodline-specific or veterinary guidance.',
    'Distinct bloodlines emphasise racing, cattle work, halter, or pleasure use and differ in build and aptitude.',
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
    title: 'American Quarter Horse (horse breed)',
    description:
      'The American Quarter Horse: a compact, muscular US stock horse named for quarter-mile speed and prized for cattle work and versatility — origin and traits.',
    keywords: [
      'American Quarter Horse',
      'stock horse',
      'western riding',
      'AQHA',
    ],
  },
  structuredData: { article: true },
};
