import type { BreedContent } from '@/types/content';

export const cornishChicken: BreedContent = {
  id: 'cornish-chicken',
  slug: 'cornish-chicken',
  contentType: 'breed',
  title: 'Cornish',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Indian Game', 'Cornish Game'],
  category: 'Chicken breed',
  summary:
    'The Cornish, known in Britain as the Indian Game, is a heavily muscled English meat breed prized for its broad breast and compact build, and it is a principal ancestor of modern commercial broiler chickens.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Cornish, called the Indian Game in the United Kingdom, is a meat-type chicken breed developed in Cornwall, England, in the 19th century from game and Asian bloodlines. It is defined by exceptional muscling, a wide, deep breast, and a hard, close-fitting feather.',
    },
    {
      type: 'paragraph',
      text: 'Although a poor layer and slow to mature as a purebred, the Cornish is of enormous commercial significance: crosses of Cornish (or Cornish-derived) males with Plymouth Rock-type females form the genetic basis of most modern broiler chickens raised for meat worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'Meat breed (game ancestry)' },
    { label: 'Origin', value: 'England (Cornwall)' },
    { label: 'Body type', value: 'Broad-breasted, heavily muscled, compact' },
    { label: 'Feather', value: 'Hard, close, tight-fitting' },
    { label: 'Notable role', value: 'Foundation of modern broiler crosses' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Bred in Cornwall from crosses involving Old English Game and Asian game fowl such as Aseel and Malay, the breed was standardised in the late 1800s as the Indian Game and exported to North America as the Cornish. In the 20th century its heavy musculature made it the sire line of choice for meat crosses, and Cornish genetics underpin the global broiler industry.',
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
            'A thick-set, muscular body carried on wide-set, sturdy legs, with a broad and prominent breast.',
            'Short, hard, close feathering that gives a lean, "gamey" outline, and a small pea comb.',
            'Recognised colours include Dark (the classic laced form), White, and White-laced Red.',
            'An assertive game temperament; birds are often kept in smaller groups.',
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
          text: 'As a purebred the Cornish is kept for meat and exhibition; it lays relatively few eggs and matures slowly compared with commercial hybrids. Its greatest role is genetic: as a terminal sire crossed with dual-purpose hens to produce fast-growing, meaty offspring. The wide stance and heavy build call for good footing and management to support leg health.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The purebred Cornish is distinct from the fast-growing commercial "Cornish Cross" broiler, which is a hybrid derived in part from Cornish genetics. Traits here describe the purebred.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Meat',
  originCountry: 'United Kingdom',
  originRegion: 'England (Cornwall)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Chicken breed recorded in the global domestic animal diversity inventory (as Cornish / Indian Game).',
    },
    {
      registry: 'American Poultry Association (Standard of Perfection)',
      jurisdiction: 'United States',
      note: 'Recognised as the Cornish; known as Indian Game under British standards.',
    },
  ],
  primaryUses: [
    'Meat production (purebred and as a crossbreeding sire)',
    'Foundation genetics for commercial broiler crosses',
    'Exhibition',
  ],
  physicalCharacteristics:
    'A compact, exceptionally muscular bird with a broad breast, wide-set legs, hard close feathering, and a small pea comb. Dark (laced), White, and White-laced Red varieties are recognised.',
  productionCharacteristics:
    'A meat breed with heavy muscling and high breast-meat proportion but low egg output and slow purebred growth; commercially exploited through crossbreeding for rapid-growing meat birds.',
  climateAdaptation:
    'The short, hard feathering offers little insulation, so the breed favours warm to temperate conditions and needs protection from severe cold.',
  managementContext:
    'Kept in smaller groups owing to its game temperament; the heavy build benefits from sound footing and careful management. Central to broiler production as a sire line rather than as a farm layer.',
  geographicDistribution:
    'Purebred flocks are kept internationally for meat and exhibition, while Cornish-derived genetics are present in broilers produced worldwide.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  geographicScope:
    'Global breed overview; standards, names (Cornish / Indian Game), and populations vary by country and registry.',
  climateContext:
    'Better suited to warm and temperate climates given its sparse, hard feathering; cold protection is needed in winter.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'The purebred Cornish differs substantially from the commercial Cornish Cross broiler hybrid; this record describes the purebred.',
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
    title: 'Cornish / Indian Game (chicken breed)',
    description:
      'The Cornish (Indian Game) chicken: a heavily muscled English meat breed and a key ancestor of modern broilers — origin, traits, and management.',
    keywords: [
      'Cornish chicken',
      'Indian Game',
      'meat breed',
      'broiler ancestor',
    ],
  },
  structuredData: { article: true },
};
