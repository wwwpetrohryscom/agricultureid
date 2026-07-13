import type { BreedContent } from '@/types/content';

export const brownSwiss: BreedContent = {
  id: 'breed-brown-swiss',
  slug: 'brown-swiss',
  contentType: 'breed',
  title: 'Brown Swiss',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Braunvieh', 'Swiss Brown'],
  summary:
    'The Brown Swiss is a large grey-brown dairy breed originating in the Alps of Switzerland, one of the oldest dairy breeds, valued for milk suited to cheese-making and for a docile temperament.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Brown Swiss is a dairy breed that originated in the Alpine regions of Switzerland, where brown mountain cattle were kept for milk, meat, and work. It is considered one of the oldest of the modern dairy breeds, and its Alpine ancestor, the Braunvieh, remains a dual-purpose breed in parts of continental Europe.',
    },
    {
      type: 'paragraph',
      text: 'Animals are typically grey-brown to light brown, large-framed, and known for a calm temperament. Selection in North America emphasised dairy production, producing the specialised Brown Swiss dairy type distributed internationally, while European Braunvieh retained more dual-purpose character.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dairy (Braunvieh ancestor dual-purpose)' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Alpine Switzerland' },
    { label: 'Coat', value: 'Grey-brown to light brown' },
    { label: 'Build', value: 'Large-framed dairy conformation' },
    {
      label: 'Notable trait',
      value: 'Milk suited to cheese-making; docile temperament',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; national Brown Swiss / Braunvieh herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed descends from the brown cattle of the Swiss Alps, historically triple-purpose animals used for milk, meat, and draught. From these origins two directions of selection emerged: a specialised dairy Brown Swiss, developed strongly in North America and exported worldwide, and the dual-purpose Braunvieh maintained in continental Europe.',
        },
        {
          type: 'paragraph',
          text: 'National associations and international coordination maintain herd books for the dairy Brown Swiss and for Braunvieh, and the breed is used both purebred and in crossbreeding, including to improve milk protein and udder traits.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Brown Swiss are large, solid grey-brown dairy cattle with a reputation for docility and longevity. The specialised dairy type is kept for milk, while Braunvieh populations are used for both milk and beef.',
        },
        {
          type: 'paragraph',
          text: 'The breed’s milk is often valued for a favourable protein-to-fat relationship for cheese production, which supports its use in dairy regions with significant cheese-making. Brown Swiss genetics are also introduced into other dairy populations through crossbreeding.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Reflecting its mountain origins, the Brown Swiss is often described as adaptable and robust, and it is kept across a broad range of temperate and some warmer dairy regions. Management follows the production emphasis of the population, whether specialised dairy or dual-purpose.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Descriptions of adaptability and milk suitability for cheese are general breed tendencies; the composition and performance of any herd depend on genetics within the breed, feeding, and management.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dairy',
  originCountry: 'Switzerland',
  originRegion: 'Alpine Switzerland',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally; related to the Braunvieh dual-purpose breed.',
    },
    {
      registry: 'National Brown Swiss and Braunvieh herd books',
      jurisdiction: 'Multiple',
      note: 'National associations and international bodies maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Milk production (notably for cheese)',
    'Dual-purpose (Braunvieh) and crossbreeding',
  ],
  physicalCharacteristics:
    'Large-framed dairy cattle of solid grey-brown to light brown colour, known for a docile temperament and longevity.',
  productionCharacteristics:
    'A dairy breed whose milk is often valued for a favourable protein-to-fat relationship for cheese-making; European Braunvieh populations are dual-purpose. Specific figures depend on population, feeding, and system and are not stated here.',
  climateAdaptation:
    'Described as adaptable and robust, reflecting its Alpine origins; kept across temperate and some warmer dairy regions.',
  managementContext:
    'Managed as specialised dairy or dual-purpose depending on the population, and used in crossbreeding to improve milk components and udder traits.',
  geographicDistribution:
    'Distributed internationally, with dairy Brown Swiss populations across the Americas, Europe, and beyond, and Braunvieh maintained in continental Europe.',
  connections: [
    { type: 'breed', slug: 'simmental' },
    { type: 'breed', slug: 'holstein-friesian' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; dairy Brown Swiss and dual-purpose Braunvieh are selected and managed differently by country.',
  climateContext:
    'A temperate, Alpine-origin dairy breed regarded as robust and adaptable.',
  limitations: [
    'Brown Swiss characteristics and performance vary with population (specialised dairy versus dual-purpose Braunvieh), line, management, and environment; this record is a general description.',
    'No milk-composition, yield, or bodyweight figures are given here because they depend on population, feeding, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Brown Swiss conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, related Braunvieh population, and distribution',
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
    title: 'Brown Swiss (cattle breed)',
    description:
      'Brown Swiss dairy cattle: large grey-brown Alpine breed, one of the oldest dairy breeds, valued for cheese-suited milk and a docile temperament.',
    keywords: [
      'Brown Swiss cattle',
      'Braunvieh',
      'Swiss dairy breed',
      'cheese milk',
    ],
  },
  structuredData: { article: true },
};
