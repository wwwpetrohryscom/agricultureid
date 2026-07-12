import type { BreedContent } from '@/types/content';

export const rhodeIslandRed: BreedContent = {
  id: 'rhode-island-red',
  slug: 'rhode-island-red',
  contentType: 'breed',
  title: 'Rhode Island Red',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['RIR'],
  category: 'Chicken breed',
  summary:
    'The Rhode Island Red is an American dual-purpose chicken breed developed in the late 19th century, valued for hardiness and a reliable output of brown eggs, and widely used as a farm fowl and in producing modern brown-egg laying stock.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Rhode Island Red is a dual-purpose chicken breed developed in the New England states of Rhode Island and Massachusetts in the late 1800s, drawing on Asian and Mediterranean stock such as Malay, Java, and Leghorn-type birds. It became one of the most successful and widely distributed farm breeds of the 20th century.',
    },
    {
      type: 'paragraph',
      text: 'The breed is known for its deep, rich mahogany-red plumage, robust constitution, and dependable laying of brown-shelled eggs. Heritage and utility lines coexist: commercial-type red hybrids derived in part from the breed are abundant, while traditional exhibition strains are tracked by conservation organisations in some countries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'American class; dual-purpose breed' },
    {
      label: 'Origin',
      value: 'United States (Rhode Island and Massachusetts)',
    },
    { label: 'Egg colour', value: 'Brown' },
    { label: 'Plumage', value: 'Deep mahogany to rust red' },
    { label: 'Temperament', value: 'Hardy, adaptable, generally docile' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Developed by farmers and breeders in New England from the 1880s, the Rhode Island Red was admitted to the American Poultry Association standard in the early 20th century, initially in single-comb and later rose-comb forms. It spread internationally as a productive, resilient dual-purpose bird and contributed genetics to many later brown-egg laying hybrids.',
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
            'A solid, rectangular "brick-shaped" body of moderate to heavy weight.',
            'Distinctive dark red plumage, sometimes with black in the tail and wings; single or rose comb.',
            'Yellow legs and skin; red earlobes typical of brown-egg breeds.',
            'A calm and adaptable disposition, though some strains include more assertive cockerels.',
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
          text: 'As a dual-purpose breed the Rhode Island Red is kept for both eggs and meat, though modern use leans toward reliable brown-egg laying. It is regarded as hardy, tolerant of variable conditions, and well suited to backyard, free-range, and smallholder systems. Heritage lines are maintained by fanciers and conservation groups distinct from the high-output commercial red hybrids.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Traits described are general to the breed. Conservation status differs between abundant commercial-type stock and traditional heritage lines, which some organisations monitor.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'United States',
  originRegion: 'New England (Rhode Island and Massachusetts)',
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
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      note: 'Traditional heritage lines tracked distinctly from abundant commercial-type stock.',
    },
    {
      registry: 'American Poultry Association (Standard of Perfection)',
      jurisdiction: 'United States',
      note: 'Recognised breed in single-comb and rose-comb forms.',
    },
  ],
  primaryUses: [
    'Egg production (brown-shelled eggs)',
    'Dual-purpose meat and eggs in traditional flocks',
    'Foundation genetics for brown-egg laying hybrids',
  ],
  physicalCharacteristics:
    'A heavy, rectangular bird with rich mahogany-red plumage, single or rose comb, red earlobes, and yellow legs. Some black may appear in the wings and tail.',
  productionCharacteristics:
    'A dependable layer of brown eggs and a reasonable meat carcass, giving genuine dual-purpose utility. Modern selection in many lines emphasises sustained laying.',
  climateAdaptation:
    'Hardy and adaptable across a wide range of climates, tolerating both heat and cold better than many lighter breeds given appropriate shelter.',
  managementContext:
    'A popular backyard, free-range, and smallholder breed valued for resilience and foraging ability. Heritage strains are maintained separately from commercial red layer hybrids.',
  geographicDistribution:
    'Distributed worldwide as a farm and backyard breed and, through derived hybrids, within the global brown-egg laying sector.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global breed overview; standards, strains, and populations vary by country and registry.',
  climateContext:
    'Kept across temperate and warmer regions; noted for all-round hardiness rather than specialisation to one climate.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'The term "Rhode Island Red" spans heritage exhibition lines and industrial red layer hybrids with very different performance; distinctions are described only qualitatively.',
    'Conservation risk status is not asserted as a single category because it varies by line, country, and population.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed recording and global diversity status',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Heritage-line conservation context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Breed origin and general characteristics',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rhode Island Red (chicken breed)',
    description:
      'The Rhode Island Red: a hardy American dual-purpose chicken known for brown eggs and resilience — origin, appearance, uses, and management.',
    keywords: [
      'Rhode Island Red',
      'dual-purpose chicken',
      'brown egg layer',
      'heritage breed',
    ],
  },
  structuredData: { article: true },
};
