import type { BreedContent } from '@/types/content';

export const australorp: BreedContent = {
  id: 'australorp',
  slug: 'australorp',
  contentType: 'breed',
  title: 'Australorp',
  scientificName: 'Gallus gallus domesticus',
  alternativeNames: ['Australian Orpington'],
  category: 'Chicken breed',
  summary:
    'The Australorp is an Australian dual-purpose chicken breed developed from Orpington stock and selected strongly for laying ability, becoming famous for its brown-egg productivity while retaining a docile, hardy character.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Australorp is a dual-purpose chicken breed developed in Australia in the early 20th century from imported Orpington and other utility stock. Australian breeders emphasised practical egg production over exhibition form, and the resulting fowl earned a reputation as one of the outstanding brown-egg layers among heavy breeds.',
    },
    {
      type: 'paragraph',
      text: 'Most familiar in a lustrous beetle-green-sheened black plumage, the Australorp combines strong laying performance with a calm temperament and general hardiness, and it is kept worldwide in backyard, free-range, and smallholder flocks.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Chicken (Gallus gallus domesticus)' },
    {
      label: 'Class / type',
      value: 'Australian breed; dual-purpose (laying emphasis)',
    },
    { label: 'Origin', value: 'Australia' },
    { label: 'Egg colour', value: 'Brown' },
    { label: 'Typical plumage', value: 'Black with green sheen' },
    { label: 'Temperament', value: 'Docile, calm, hardy' },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'The breed arose from Australian selection of Orpington-derived utility stock in the years around 1900 to 1920, with a name coined to signal the "Australian Orpington" lineage. It gained lasting fame through laying-competition results that demonstrated exceptional egg output for a heavy breed, and it was subsequently recognised by poultry standards in Australia, the United Kingdom, and the United States.',
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
            'A solid, well-rounded body of moderate to heavy weight, less exaggerated than exhibition Orpingtons.',
            'A single comb and red earlobes; the classic plumage is deep black with a green or beetle sheen in good light.',
            'Dark legs and eyes complement the black plumage; other colours are recognised in some countries.',
            'A quiet, docile temperament that adapts to confinement and free range alike.',
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
          text: 'The Australorp is kept mainly for reliable brown-egg production, with a serviceable meat carcass making it genuinely dual-purpose. Its calm nature, adaptability, and hardiness suit backyard, free-range, and smallholder systems in a range of climates. Historic laying records are exceptional cases; everyday output depends on strain, feeding, and management.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Famous historical laying records reflect selected competition birds under intensive conditions and should not be read as typical for the breed today.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'chickens' },
  species: 'Chicken (Gallus gallus domesticus)',
  breedType: 'Dual-purpose',
  originCountry: 'Australia',
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
      note: 'Recognised breed; also standardised in Australia and the United Kingdom.',
    },
  ],
  primaryUses: [
    'Egg production (brown-shelled eggs)',
    'Dual-purpose meat and eggs in traditional flocks',
    'Backyard and smallholder keeping',
  ],
  physicalCharacteristics:
    'A rounded, moderately heavy bird, most often glossy black with a green sheen, with a single comb, red earlobes, and dark legs. Some standards recognise additional colours.',
  productionCharacteristics:
    'A strong, sustained layer of brown eggs — historically celebrated for high output among heavy breeds — while still yielding a useful meat carcass.',
  climateAdaptation:
    'Hardy and adaptable across warm to temperate climates; the practical body type copes better with heat than very heavily feathered breeds while remaining cold-tolerant.',
  managementContext:
    'A docile, low-maintenance breed well suited to backyard and free-range systems, valued where dependable laying and easy handling are priorities.',
  geographicDistribution:
    'Distributed worldwide, with particular popularity in Australia, and common among backyard and smallholder keepers elsewhere.',
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  geographicScope:
    'Global breed overview; standards, strains, and populations vary by country and registry.',
  climateContext:
    'Kept across warm and temperate regions; regarded as an adaptable, all-round laying breed.',
  limitations: [
    'This is a general breed profile, not strain-specific performance data or husbandry guidance.',
    'Historic record-setting laying figures are exceptional and not representative of typical flock performance.',
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
    title: 'Australorp (chicken breed)',
    description:
      'The Australorp: an Australian dual-purpose chicken famed as a productive brown-egg layer — origin, appearance, egg-laying reputation, and management.',
    keywords: [
      'Australorp',
      'brown egg layer',
      'dual-purpose chicken',
      'Australian breed',
    ],
  },
  structuredData: { article: true },
};
