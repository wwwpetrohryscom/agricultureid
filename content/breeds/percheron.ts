import type { BreedContent } from '@/types/content';

export const percheron: BreedContent = {
  id: 'percheron',
  slug: 'percheron',
  contentType: 'breed',
  title: 'Percheron',
  scientificName: 'Equus caballus',
  category: 'Horse breed',
  summary:
    'The Percheron is a French heavy draught horse breed from the Perche region of Normandy, typically grey or black, known for combining great strength with relative elegance and clean, largely unfeathered legs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Percheron is a heavy draught horse breed that originated in the Perche region of northern France. Historically influenced by Arabian and other Oriental blood, it is known among draught breeds for a comparatively refined, elegant appearance while retaining substantial power.',
    },
    {
      type: 'paragraph',
      text: 'Percherons are most often grey or black, muscular and well-proportioned, with relatively clean legs carrying little of the heavy feathering seen in some other draught breeds. Once vital for agriculture, transport, and military haulage, they are now used for driving, showing, forestry, crossbreeding, and some farm work.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Horse (Equus caballus)' },
    { label: 'Type', value: 'Heavy draught horse' },
    { label: 'Origin', value: 'France (Perche region, Normandy)' },
    { label: 'Typical colour', value: 'Grey or black' },
    {
      label: 'Distinctive traits',
      value: 'Powerful yet elegant; largely clean-legged',
    },
    { label: 'Historical influence', value: 'Arabian and Oriental blood' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Developed over centuries in the Perche district, the breed drew on Oriental stallions that lent refinement and quality, later consolidated into a heavy agricultural and coach horse. Percherons were exported in large numbers to North America and elsewhere from the 19th century and became one of the most popular draught breeds internationally. Breed societies in France and importing countries maintain the studbooks.',
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
            'A large, muscular, well-balanced body with a broad, deep chest and strong hindquarters.',
            'A relatively refined head reflecting Oriental ancestry, and clean legs with little feathering.',
            'Predominantly grey or black coats, often with dappling in greys.',
            'A willing, docile, and intelligent temperament valued in work and driving.',
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
          text: 'The Percheron is used for carriage and team driving, showing, forestry, some farm draught work, and crossbreeding to produce heavier sport and riding horses. Its clean legs are simpler to manage than heavily feathered breeds, though its size demands generous feed and space. A calm temperament makes it a popular heavy horse for both work and exhibition.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Breed traits are general; size, colour ratios, and type vary by bloodline and country. Individual aptitude depends on training and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'horses' },
  species: 'Horse (Equus caballus)',
  breedType: 'Draught',
  originCountry: 'France',
  originRegion: 'Perche (Normandy)',
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
      registry: 'Percheron breed societies (France and importing countries)',
      jurisdiction: 'Global',
      note: 'National studbooks maintain the breed in France, North America, and elsewhere.',
    },
  ],
  primaryUses: [
    'Carriage and team driving; showing',
    'Forestry and some farm draught work',
    'Crossbreeding for heavier sport and riding horses',
  ],
  physicalCharacteristics:
    'A large, muscular draught horse with a broad chest, strong hindquarters, a relatively refined head, and clean (lightly feathered) legs. Coats are predominantly grey or black, greys often dappled.',
  productionCharacteristics:
    'A draught, driving, and crossbreeding animal rather than a food-producing one; valued for power combined with relative elegance and a docile temperament.',
  climateAdaptation:
    'Adaptable within temperate climates; the largely clean legs simplify wet-weather management compared with heavily feathered draught breeds.',
  managementContext:
    'Requires ample feed and space but is comparatively easy-legged to manage; popular for driving and showing and as a base for heavy sport-horse crosses.',
  geographicDistribution:
    'Kept in France, North America, and many other countries, and historically among the most widely exported draught breeds.',
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  glossaryTerms: ['forage'],
  geographicScope:
    'Global breed overview; studbooks and type vary by country while sharing a common French origin.',
  climateContext:
    'Suited to temperate climates; a robust draught breed managed with standard heavy-horse care.',
  limitations: [
    'This is a general breed profile, not veterinary or detailed husbandry guidance.',
    'Colour ratios, size, and type vary by bloodline and country; descriptions are qualitative.',
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
    title: 'Percheron (horse breed)',
    description:
      'The Percheron: a French heavy draught horse, often grey or black, known for power with elegance and clean legs — origin, traits, uses, and management.',
    keywords: [
      'Percheron horse',
      'draught horse',
      'French breed',
      'heavy horse',
    ],
  },
  structuredData: { article: true },
};
