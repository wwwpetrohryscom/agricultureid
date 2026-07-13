import type { BreedContent } from '@/types/content';

export const simmental: BreedContent = {
  id: 'breed-simmental',
  slug: 'simmental',
  contentType: 'breed',
  title: 'Simmental',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Fleckvieh', 'Simmental Fleckvieh'],
  summary:
    'The Simmental is a large dual-purpose breed originating in the Simme Valley of Switzerland, kept for both beef and milk and among the most widely distributed cattle breeds in the world.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Simmental is one of the oldest and most widespread cattle breeds, taking its name from the Simme Valley in the Bernese Oberland of Switzerland. Historically it served as a triple-purpose animal for milk, meat, and draught, and it spread across continental Europe and beyond as a dual-purpose beef-and-dairy breed.',
    },
    {
      type: 'paragraph',
      text: 'Simmentals are typically red or gold and white, or yellow and white, often with a white face. In much of continental Europe the dual-purpose type is known as Fleckvieh, while in some export markets selection has emphasised the beef role; both trace to the same origin.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Dual-purpose (beef and dairy)' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Simme Valley, Switzerland' },
    { label: 'Coat', value: 'Red or gold and white, often with a white face' },
    {
      label: 'Also known as',
      value: 'Fleckvieh (continental European dual-purpose type)',
    },
    {
      label: 'Notable trait',
      value: 'Combined milk and beef performance; wide distribution',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; national Simmental / Fleckvieh herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed originated in the Simme Valley of Switzerland and was valued historically for milk, meat, and work. As it spread through Europe it was developed as a dual-purpose animal, and national populations — often under the name Fleckvieh — were selected to balance milk and beef according to local demand.',
        },
        {
          type: 'paragraph',
          text: 'Simmental genetics were exported worldwide during the 20th century. In some countries, particularly for beef markets, selection emphasised growth and muscling, while European Fleckvieh breeding retained strong dual-purpose milk-and-beef performance. International federations coordinate Simmental and Fleckvieh breeding across many countries.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Simmentals are large cattle, generally red or gold and white with a white or partly white face; both horned and polled animals occur. The breed is used for milk, beef, or both, depending on the population and the market it serves.',
        },
        {
          type: 'paragraph',
          text: 'As a dual-purpose breed it is valued for combining reasonable milk output with good growth and carcass characteristics, along with maternal traits. Simmental is also widely used in crossbreeding, contributing growth, milk, and frame to crossbred cattle.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The breed is kept across a wide range of temperate and warmer regions, in systems that vary from dairy-oriented to beef-oriented. Management is matched to the production emphasis of the particular population, whether milk, beef, or a balance of the two.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because Simmental and Fleckvieh populations are selected differently for milk and beef, breed averages and management practices differ substantially between countries and lines.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Dual-purpose',
  originCountry: 'Switzerland',
  originRegion: 'Simme Valley, Bernese Oberland, Switzerland',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary dual-purpose breed.',
    },
    {
      registry: 'National Simmental and Fleckvieh herd books',
      jurisdiction: 'Multiple',
      note: 'National associations and international federations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production',
    'Milk production',
    'Dual-purpose and crossbreeding',
  ],
  physicalCharacteristics:
    'Large cattle, generally red or gold and white (or yellow and white), commonly with a white or partly white face; both horned and polled animals occur.',
  productionCharacteristics:
    'A dual-purpose breed valued for combining milk output with growth and carcass quality, plus maternal traits; some populations are selected mainly for beef, others (Fleckvieh) for balanced milk and beef. Specific figures depend on population, feeding, and system and are not stated here.',
  climateAdaptation:
    'Adaptable across temperate and warmer regions; management is matched to whether the population is selected for milk, beef, or both.',
  managementContext:
    'Kept in dairy-oriented, beef-oriented, and mixed systems, and widely used in crossbreeding to add growth, milk, and frame.',
  geographicDistribution:
    'Among the most widely distributed cattle breeds, with large populations across Europe, the Americas, Africa, and Asia.',
  connections: [
    { type: 'breed', slug: 'charolais' },
    { type: 'breed', slug: 'brown-swiss' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; Simmental and Fleckvieh populations are selected and managed differently by country.',
  climateContext:
    'A temperate-origin dual-purpose breed kept across a broad range of climates and systems.',
  limitations: [
    'Simmental characteristics and performance vary strongly with population (beef-selected versus dual-purpose Fleckvieh), line, management, and environment; this record is a general description.',
    'No milk-yield, growth, or carcass figures are stated here because they depend on population, feeding, and system and change over time; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Simmental conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
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
    title: 'Simmental (cattle breed)',
    description:
      'Simmental dual-purpose cattle: large Swiss-origin breed (Fleckvieh) kept for beef and milk, and among the most widely distributed cattle worldwide.',
    keywords: [
      'Simmental cattle',
      'Fleckvieh',
      'dual-purpose cattle',
      'Swiss cattle breed',
    ],
  },
  structuredData: { article: true },
};
