import type { BreedContent } from '@/types/content';

export const belgianBlue: BreedContent = {
  id: 'breed-belgian-blue',
  slug: 'belgian-blue',
  contentType: 'breed',
  title: 'Belgian Blue',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Blanc-Bleu Belge', 'Belgian Blue-White'],
  summary:
    'The Belgian Blue is a heavily muscled beef breed from Belgium characterised by double muscling, producing very lean, high-yielding carcasses; its extreme muscularity has important calving-management implications.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Belgian Blue is a beef breed developed in Belgium, best known for the trait of double muscling — a pronounced muscular hypertrophy that gives the breed its distinctive rounded, heavily muscled appearance. It arose from local cattle improved during the 19th and 20th centuries and was later selected strongly for muscling.',
    },
    {
      type: 'paragraph',
      text: 'Coats are white, blue roan, or black, or combinations of these. The double-muscling characteristic is associated with variation in the myostatin gene, which normally limits muscle growth; in the Belgian Blue this results in exceptionally lean, high-yielding carcasses.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Belgium' },
    { label: 'Coat', value: 'White, blue roan, or black' },
    {
      label: 'Defining trait',
      value: 'Double muscling (muscular hypertrophy)',
    },
    { label: 'Notable trait', value: 'Very lean, high-yielding carcass' },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; Belgian and national Belgian Blue herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed developed in Belgium from local cattle, historically with some dual-purpose character, before selection concentrated on beef and, in particular, on the double-muscling trait. The modern Belgian Blue is a specialised beef breed defined by its extreme muscularity.',
        },
        {
          type: 'paragraph',
          text: 'Double muscling in the breed is linked to variation in the myostatin (GDF8) gene, which normally restrains muscle development. Belgian Blue genetics have been exported and are also used in crossbreeding to add muscling and yield to other beef and dairy-beef cattle.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Belgian Blues are large, strikingly muscled beef cattle, most obviously over the hindquarters and shoulders, with coats in white, blue roan, or black. They are kept for beef and produce very lean carcasses with a high proportion of saleable meat.',
        },
        {
          type: 'paragraph',
          text: 'A well-documented consequence of extreme muscling is that calving frequently requires close management, and assisted delivery is common in the purebred breed. This is an important, widely reported husbandry consideration associated with the double-muscling trait.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The breed is kept mainly in temperate systems, often with a significant housed component, reflecting both its origins and the management attention that the double-muscled type requires. It is used purebred and as a terminal sire for carcass yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'The double-muscling trait is associated with frequent calving difficulty in the purebred breed. Breeding and calving management are significant, welfare-relevant considerations that are governed by local regulation and veterinary advice; this record does not provide husbandry instructions.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'Belgium',
  originRegion: 'Belgium',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a beef breed.',
    },
    {
      registry: 'Belgian and national Belgian Blue herd books',
      jurisdiction: 'Multiple',
      note: 'The Belgian breed organisation and national associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production',
    'Terminal-sire crossbreeding for muscling and yield',
  ],
  physicalCharacteristics:
    'Large, heavily double-muscled beef cattle, most obviously over the hindquarters and shoulders, with coats in white, blue roan, or black.',
  productionCharacteristics:
    'A beef breed producing very lean, high-yielding carcasses through the double-muscling trait; extreme muscling is associated with frequent calving difficulty in the purebred breed. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Kept mainly in temperate systems, often with a significant housed component.',
  managementContext:
    'Used purebred and as a terminal sire; the double-muscled type requires particular attention to breeding and calving management.',
  geographicDistribution:
    'Concentrated in Belgium and neighbouring Europe, with populations elsewhere and widespread use of its genetics in crossbreeding.',
  connections: [
    { type: 'breed', slug: 'limousin' },
    { type: 'breed', slug: 'charolais' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management vary by country.',
  climateContext:
    'A temperate-origin beef breed commonly managed with housed components.',
  limitations: [
    'Belgian Blue characteristics and performance vary with line, management, and environment; double muscling is a defining trait whose expression and consequences still depend on genetics within the breed and management.',
    'No growth, carcass, or calving-rate figures are stated here because they depend on genetics, nutrition, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Belgian Blue conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Breeding, calving, and welfare decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and distribution',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species-level taxonomy (Bos taurus)',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General breed description and the double-muscling trait',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Belgian Blue (cattle breed)',
    description:
      'Belgian Blue beef cattle: double-muscled Belgian breed producing very lean, high-yielding carcasses, with notable calving-management implications.',
    keywords: [
      'Belgian Blue cattle',
      'double muscling',
      'myostatin',
      'lean beef breed',
    ],
  },
  structuredData: { article: true },
};
