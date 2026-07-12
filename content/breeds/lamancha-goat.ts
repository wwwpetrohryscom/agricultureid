import type { BreedContent } from '@/types/content';

export const lamanchaGoat: BreedContent = {
  id: 'lamancha-goat',
  slug: 'lamancha-goat',
  contentType: 'breed',
  title: 'LaMancha',
  scientificName: 'Capra hircus',
  alternativeNames: ['American LaMancha'],
  category: 'Goat breed',
  summary:
    'The LaMancha is an American dairy goat instantly recognised by its very short external ears. Developed in the United States from Spanish-descended goats, it is valued for a calm temperament and steady milk production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The LaMancha is a dairy goat developed in the United States, principally in the western states, from short-eared goats of Spanish descent. It is the only major dairy-goat breed generally recognised as having been developed in the United States and is registered by American dairy-goat associations.',
    },
    {
      type: 'paragraph',
      text: 'Its most distinctive feature is its very short external ears, which occur in two recognised forms: the "gopher" ear, extremely short with little or no cartilage, and the slightly longer "elf" ear. The breed is known for a calm, tractable temperament and dependable dairy performance.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Goat (Capra hircus)' },
    { label: 'Breed type', value: 'Dairy' },
    {
      label: 'Origin',
      value: 'United States (developed from Spanish-descended goats)',
    },
    {
      label: 'Distinctive feature',
      value: 'Very short external ears ("gopher" and "elf" types)',
    },
    { label: 'Primary use', value: 'Milk production' },
    { label: 'Temperament', value: 'Calm and tractable' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The LaMancha was developed in the United States in the twentieth century from short-eared goats tracing to Spanish stock brought to the Americas. Selection produced a standardised dairy breed with the characteristic short ear and reliable milk output, now maintained in American dairy-goat herd books.',
        },
      ],
    },
    {
      id: 'physical-characteristics',
      heading: 'Physical characteristics',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Gopher ear',
              description:
                'Very short ear with little or no cartilage, essentially no external ear structure; required for registered bucks under some registries.',
            },
            {
              term: 'Elf ear',
              description:
                'Slightly longer ear with a small amount of cartilage, still much shorter than in other breeds.',
            },
            {
              term: 'General conformation',
              description:
                'Medium-sized, sturdy dairy goat with a straight facial profile, occurring in many colours.',
            },
          ],
        },
      ],
    },
    {
      id: 'production-and-temperament',
      heading: 'Production and temperament',
      body: [
        {
          type: 'paragraph',
          text: 'The LaMancha is valued for a steady, persistent lactation and milk with good butterfat, together with a notably calm temperament that suits hand-milking and smallholder management. It is used in both purebred dairy herds and crossbreeding.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Milk yield and composition depend on nutrition, lactation stage, and management. As an American breed, its conservation status is reported per national population; consult current registry and conservation listings for present figures.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'goats' },
  species: 'Goat (Capra hircus)',
  breedType: 'Dairy',
  originCountry: 'United States',
  originRegion: 'Western United States',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Breed recorded in the global inventory of livestock breeds.',
    },
    {
      registry: 'The Livestock Conservancy',
      sourceId: 'livestock-conservancy',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'A U.S.-developed heritage dairy breed noted in conservation contexts; consult the current priority list for the present category.',
    },
  ],
  primaryUses: ['Milk production', 'Dairy crossbreeding'],
  physicalCharacteristics:
    'Medium-sized, sturdy dairy goat defined by very short external ears in two forms — the "gopher" ear (little or no cartilage) and the slightly longer "elf" ear. Straight facial profile; occurs in many colours.',
  productionCharacteristics:
    'Valued for a steady, persistent lactation and milk with good butterfat, together with a calm temperament suited to hand-milking. Yield and composition are strongly influenced by feeding, lactation stage, and management.',
  climateAdaptation:
    'A hardy, adaptable dairy goat kept across a range of North American climates; like all goats it benefits from adequate shelter, forage, and clean water.',
  managementContext:
    'Common in smallholder, homestead, and commercial dairy-goat systems in North America. Nutrition, milking, and welfare follow local practice and veterinary guidance.',
  geographicDistribution:
    'Developed and most numerous in the United States, with a presence in Canada and other countries through dairy-goat breeders.',
  connections: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Primarily North America; a U.S.-developed dairy breed with a presence elsewhere. Husbandry and regulation vary by country.',
  climateContext:
    'Adaptable dairy goat kept across temperate and warmer North American climates with management.',
  limitations: [
    'This is a breed characterisation, not husbandry, breeding, or veterinary guidance.',
    'Milk yield and composition are highly management-dependent and are described only qualitatively here.',
    'Conservation status is left as unknown here: as a national breed its FAO DAD-IS risk category is population-specific and changes over time; consult current listings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and characterisation in the global inventory',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Conservation context for a U.S. heritage dairy breed',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General background on the LaMancha goat',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'LaMancha (goat breed)',
    description:
      'The LaMancha: an American dairy goat known for its very short "gopher" and "elf" ears, a calm temperament, and steady, good-butterfat milk production.',
    keywords: ['LaMancha goat', 'dairy goat', 'goat breed', 'short-eared goat'],
  },
  structuredData: { article: true },
};
