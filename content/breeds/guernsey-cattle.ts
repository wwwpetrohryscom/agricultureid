import type { BreedContent } from '@/types/content';

export const guernseyCattle: BreedContent = {
  id: 'breed-guernsey-cattle',
  slug: 'guernsey-cattle',
  contentType: 'breed',
  title: 'Guernsey',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Guernsey cattle'],
  summary:
    'The Guernsey is a fawn-and-white dairy breed from the Channel Island of Guernsey, known for rich, golden-tinged milk and a docile temperament.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Guernsey is a dairy breed developed on the Channel Island of Guernsey, one of the group of islands that also produced the Jersey. Like its neighbour, it was shaped by a relatively closed island population and long selection for dairy character.',
    },
    {
      type: 'paragraph',
      text: 'Guernseys are fawn (shades of tan to red) with white markings, and are of moderate size — larger than the Jersey but smaller than the main mainland dairy breeds. The breed is particularly associated with rich milk that carries a golden tint attributed to its carotene content.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Guernsey, Channel Islands' },
    { label: 'Coat', value: 'Fawn with white markings' },
    { label: 'Build', value: 'Moderate-sized dairy conformation' },
    {
      label: 'Notable trait',
      value: 'Rich, golden-tinted milk; docile temperament',
    },
    { label: 'Registries', value: 'FAO DAD-IS; national Guernsey herd books' },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed was developed on the island of Guernsey, where import controls kept the population largely closed and selection focused on dairy qualities. Exports established Guernsey herds in Great Britain, North America, and elsewhere, supported by island and national herd books.',
        },
        {
          type: 'paragraph',
          text: 'Over the 20th century the Guernsey remained a specialist dairy breed prized for milk quality, though in several countries its numbers declined relative to higher-volume breeds, and conservation-minded organisations have monitored some national populations.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Guernseys are moderate-sized dairy cattle with a fawn-and-white coat and a reputation for a calm, manageable temperament. The breed is kept for milk, with surplus animals entering beef supply.',
        },
        {
          type: 'paragraph',
          text: 'Its milk is known for richness and a characteristic golden colour associated with beta-carotene, which has supported niche and branded dairy marketing. Guernseys are often kept in pasture-based systems where their efficiency and temperament are valued.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The breed is kept mainly in temperate dairy regions and suits grazing systems well. As with other dairy breeds, milk quality and yield depend heavily on feeding, health, and management.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The golden tint and richness of Guernsey milk are characteristic breed traits; the exact composition of milk from any herd depends on genetics within the breed, diet, and stage of lactation.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'Guernsey (Channel Islands)',
  originRegion: 'Island of Guernsey, Channel Islands',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a dairy breed.',
    },
    {
      registry: 'Guernsey Island and national Guernsey herd books',
      jurisdiction: 'Multiple',
      note: 'Island and national breed associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: ['Milk production', 'Niche and branded dairy products'],
  physicalCharacteristics:
    'Moderate-sized dairy cattle with a fawn coat and white markings, larger than the Jersey but smaller than the main mainland dairy breeds, and a reputation for a docile temperament.',
  productionCharacteristics:
    'A dairy breed known for rich milk with a characteristic golden tint attributed to carotene content; milk volume is typically lower than that of the highest-yielding breeds. Specific figures depend on line, feeding, and system and are not stated here.',
  climateAdaptation:
    'Kept mainly in temperate dairy regions and well suited to grazing systems.',
  managementContext:
    'Common in pasture-based dairies; some national populations are monitored by conservation-focused organisations owing to reduced numbers relative to high-volume breeds.',
  geographicDistribution:
    'Distributed across temperate dairy regions including the British Isles and North America, with smaller populations elsewhere.',
  connections: [
    { type: 'breed', slug: 'jersey-cattle' },
    { type: 'breed', slug: 'ayrshire-cattle' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management practices vary by country.',
  climateContext:
    'A temperate-origin dairy breed well suited to pasture-based systems.',
  limitations: [
    'Guernsey characteristics and milk quality vary with line, management, and environment; the golden tint and richness are characteristic traits rather than fixed values.',
    'No milk-composition or bodyweight figures are given here because they depend on line, feeding, and lactation stage; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Guernsey conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown); some national populations are separately monitored.',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
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
      sourceId: 'livestock-conservancy',
      citedFor: 'Breed history and conservation monitoring in North America',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General breed description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Guernsey (cattle breed)',
    description:
      'Guernsey dairy cattle from the Channel Islands: fawn-and-white breed known for rich, golden-tinted milk and a docile temperament.',
    keywords: [
      'Guernsey cattle',
      'Channel Island cattle',
      'dairy breed',
      'golden milk',
    ],
  },
  structuredData: { article: true },
};
