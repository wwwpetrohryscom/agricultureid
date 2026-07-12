import type { BreedContent } from '@/types/content';

export const jerseyCattle: BreedContent = {
  id: 'breed-jersey-cattle',
  slug: 'jersey-cattle',
  contentType: 'breed',
  title: 'Jersey',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Jersey cattle'],
  summary:
    'The Jersey is a small fawn-coloured dairy breed from the Channel Island of Jersey, valued for feed-efficient production of milk that is high in butterfat and protein.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Jersey is one of the oldest dairy breeds, developed on the Channel Island of Jersey, where a long period of relative isolation and closed breeding produced a distinctive small, refined dairy animal. It is now kept internationally, both as a purebred and as a partner in crossbreeding programmes that aim to improve milk composition and fertility.',
    },
    {
      type: 'paragraph',
      text: 'Jerseys are typically some shade of fawn — from light tan to darker brown — often with a darker face, muzzle ring, and switch. The breed is prized less for milk volume than for the richness of its milk and its efficiency, converting feed into high-solids milk in a comparatively small body.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Jersey, Channel Islands' },
    { label: 'Coat', value: 'Fawn, ranging from light tan to dark brown' },
    { label: 'Build', value: 'Small, refined dairy conformation' },
    {
      label: 'Notable trait',
      value: 'Milk high in butterfat and protein; feed-efficient',
    },
    { label: 'Registries', value: 'FAO DAD-IS; national Jersey herd books' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed takes its name from the island of Jersey, the largest of the Channel Islands. Historic import restrictions on the island helped keep the population closed and encouraged consistent selection for dairy character, producing an early and highly uniform dairy breed. Exports spread the Jersey to Great Britain, North America, Oceania, and beyond, supported by island and national herd books.',
        },
        {
          type: 'paragraph',
          text: 'Because of its distinctive milk and small size, the Jersey has long been used both as a purebred dairy animal and as a way to raise the milk solids and fertility of other populations through crossbreeding, including well-known crosses with the Holstein Friesian.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Jerseys are small, fine-boned dairy cattle with a dished face and, often, darker points on the face, feet, and switch. The breed is kept primarily for milk, with surplus and cull animals contributing to beef supply.',
        },
        {
          type: 'paragraph',
          text: 'The breed is best known for milk that is high in butterfat and protein, which makes it attractive for cheese and butter production and under component-based milk pricing. Its smaller body size and reputation for feed efficiency and fertility are frequently cited advantages, particularly in pasture-based and grazing systems.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Jerseys are widely kept in temperate dairy regions and are often described as comparatively tolerant of warm conditions relative to larger dairy breeds, which has supported their use in a broad range of climates. As with any dairy breed, actual performance depends heavily on feeding, health, and management.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Comparisons between breeds — for example on heat tolerance or efficiency — are general tendencies reported in the literature and breed characterisations, not fixed values for any individual herd or environment.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'Jersey (Channel Islands)',
  originRegion: 'Island of Jersey, Channel Islands',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary dairy breed.',
    },
    {
      registry: 'Jersey Island and national Jersey herd books',
      jurisdiction: 'Multiple',
      note: 'Island and national breed associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Milk production',
    'Crossbreeding to improve milk solids and fertility',
  ],
  physicalCharacteristics:
    'Small, fine-boned dairy cattle with a dished face and a fawn coat that ranges from light tan to dark brown, often with darker face, muzzle ring, feet, and switch.',
  productionCharacteristics:
    'A dairy breed noted for milk that is high in butterfat and protein, and for feed efficiency in a small body; milk volume is typically lower than that of larger dairy breeds. Specific figures depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Kept mainly in temperate dairy regions but frequently described as comparatively tolerant of warm conditions relative to larger dairy breeds; performance still depends on feeding and management.',
  managementContext:
    'Common in pasture-based and grazing systems as well as housed dairies, where its small size, milk composition, and fertility are valued.',
  geographicDistribution:
    'Distributed internationally across temperate and warmer dairy regions, both as a purebred and as a crossbreeding partner.',
  connections: [
    { type: 'breed', slug: 'guernsey-cattle' },
    { type: 'breed', slug: 'brown-swiss' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management practices vary by country.',
  climateContext:
    'A temperate-origin dairy breed reported to tolerate warm conditions comparatively well among dairy breeds.',
  limitations: [
    'Jersey characteristics and performance vary with line, management, and environment, and comparative advantages such as heat tolerance or efficiency are general tendencies rather than fixed values.',
    'No milk-composition or bodyweight figures are given here because they depend on line, feeding, and system; current data should come from breed associations and production recording.',
    'FAO DAD-IS records the Jersey conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and distribution',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species-level taxonomy (Bos taurus)',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General breed history and description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Jersey (cattle breed)',
    description:
      'Jersey dairy cattle from the Channel Islands: small fawn dairy breed known for feed efficiency and milk high in butterfat and protein.',
    keywords: ['Jersey cattle', 'Jersey breed', 'dairy cattle', 'butterfat'],
  },
  structuredData: { article: true },
};
