import type { BreedContent } from '@/types/content';

export const marans: BreedContent = {
  id: 'marans',
  slug: 'marans',
  contentType: 'breed',
  title: 'Marans',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Poule de Marans', 'Cuckoo Marans'],
  category: 'Chicken breed',
  summary:
    'The Marans is a French dual-purpose chicken breed from the Atlantic port town of Marans, celebrated above all for laying eggs with an exceptionally dark, chocolate-brown shell.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Marans is a dual-purpose chicken breed originating around the town of Marans in western France, developed from local farmyard fowl crossed with game and other imported birds. It is best known for producing some of the darkest brown eggs of any chicken breed, a trait that has made it highly sought after by keepers and chefs.',
    },
    {
      type: 'paragraph',
      text: 'The breed exists in several colour varieties, with the Cuckoo (barred) and Black Copper among the most familiar, and in both feather-legged (traditional French) and clean-legged (common in Britain) forms. Beyond its eggs, the Marans is a hardy, good-natured farm bird yielding a respectable meat carcass.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    { label: 'Class / type', value: 'French breed; dual-purpose' },
    { label: 'Origin', value: 'France (town of Marans)' },
    { label: 'Egg colour', value: 'Very dark chocolate-brown' },
    { label: 'Common varieties', value: 'Cuckoo, Black Copper and others' },
    {
      label: 'Leg types',
      value: 'Feathered (French) and clean-legged (British)',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The Marans was developed in the marshland region around its namesake town, drawing on local hens and hardy game birds brought through the port. It was standardised in France in the early 20th century and later spread abroad. French standards traditionally call for lightly feathered legs, while British and some other standards recognise clean-legged birds; the breed was more recently admitted to standards in other countries, including recognition of the Black Copper variety in the United States.',
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
            'A medium-heavy, sturdy body with a single comb and red earlobes.',
            'Legs feathered in the traditional French type or clean in the British type, depending on standard.',
            'Multiple colour varieties, including Cuckoo (barred), Black Copper, Wheaten, and others.',
            'A generally calm, hardy, and active disposition suited to farm life.',
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
          text: 'The Marans is kept mainly for its distinctive dark eggs and as a dual-purpose farm bird. The depth of shell colour varies with the individual hen, her stage of lay, and strain, and typically fades over the laying cycle, so selection for egg colour is an ongoing focus for breeders. The breed is hardy and adaptable and suits backyard, free-range, and smallholder systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Dark shell colour varies by individual, strain, and stage of lay and generally lightens through the laying period; it is a qualitative, selectable trait rather than a fixed guarantee.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'France',
  originRegion: 'Marans (Charente-Maritime)',
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
      note: 'Recognised breed; British standard favours the clean-legged form.',
    },
  ],
  primaryUses: [
    'Egg production, prized for very dark brown eggs',
    'Dual-purpose meat and eggs',
    'Backyard and smallholder flocks',
  ],
  physicalCharacteristics:
    'A medium-heavy, sturdy bird with a single comb and red earlobes, either feather-legged (French type) or clean-legged (British type). Cuckoo, Black Copper, Wheaten, and other colours are recognised.',
  productionCharacteristics:
    'A moderate layer whose defining feature is exceptionally dark chocolate-brown egg shells; also a serviceable dual-purpose meat bird. Shell colour intensity varies and lightens through the laying cycle.',
  climateAdaptation:
    'Hardy and adaptable across temperate climates; the traditional feather-legged form benefits from drier footing to keep foot feathering clean.',
  managementContext:
    'A robust, good-natured breed for backyard and free-range systems; keepers often select individuals and strains specifically to maintain deep egg-shell colour.',
  geographicDistribution:
    'Widely kept in France and internationally among keepers valuing dark eggs, with both feather-legged and clean-legged forms distributed by region.',
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global breed overview; standards, leg types, colour varieties, and populations vary by country and registry.',
  climateContext:
    'Kept across temperate regions; regarded as a hardy, adaptable farmyard breed.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Egg-shell darkness is variable and selectable rather than fixed, and standards differ on leg feathering between countries.',
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
    title: 'Marans (chicken breed)',
    description:
      'The Marans chicken: a French dual-purpose breed famed for very dark chocolate-brown eggs — origin, varieties, egg-colour traits, and management.',
    keywords: [
      'Marans chicken',
      'dark brown eggs',
      'Cuckoo Marans',
      'Black Copper Marans',
    ],
  },
  structuredData: { article: true },
};
