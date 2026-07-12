import type { BreedContent } from '@/types/content';

export const nellore: BreedContent = {
  id: 'breed-nellore',
  slug: 'nellore',
  contentType: 'breed',
  title: 'Nellore',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus indicus)',
  alternativeNames: ['Nelore', 'Ongole (Indian ancestor)'],
  summary:
    'The Nellore is a white zebu beef breed derived from the Indian Ongole and developed extensively in Brazil, valued for heat and parasite tolerance and now a dominant beef breed in tropical South America.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Nellore (Nelore in Portuguese) is a beef breed of zebu (Bos taurus indicus) type derived from the Ongole cattle of India. Imported to Brazil from the late 19th and early 20th centuries, the breed was developed there into a large tropical beef population and became central to South American beef production.',
    },
    {
      type: 'paragraph',
      text: 'Nellore cattle are typically white to light grey with dark skin, and show the zebu features of a shoulder hump, loose skin and dewlap, and dark points. Their well-documented tolerance of heat, humidity, and external parasites underlies their success in tropical grazing systems.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef (zebu)' },
    { label: 'Species', value: 'Bos taurus indicus (zebu)' },
    {
      label: 'Origin',
      value: 'Ongole cattle of India; developed extensively in Brazil',
    },
    { label: 'Coat', value: 'White to light grey with dark skin' },
    {
      label: 'Appearance',
      value: 'Shoulder hump, loose skin and dewlap, dark points',
    },
    { label: 'Notable trait', value: 'Heat, humidity, and parasite tolerance' },
    {
      label: 'Registries',
      value:
        'FAO DAD-IS; Brazilian zebu association; Indian breed registration',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed derives from the Ongole cattle of the Indian subcontinent, historically associated with the coastal region of present-day Andhra Pradesh. Imports to Brazil were bred and selected into the Nelore, and the breed expanded to become the foundation of Brazil’s large tropical beef herd.',
        },
        {
          type: 'paragraph',
          text: 'Registration and improvement in Brazil are coordinated through the national zebu breeders’ organisation, while in India the Ongole is recognised and characterised among indigenous breeds. Nellore genetics are widely used across tropical beef production and in composite breeds.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Nellore are large white-to-grey zebu cattle with a shoulder hump, pronounced dewlap and loose skin, and dark points; they are kept overwhelmingly for beef. The breed’s hardiness suits extensive grazing on tropical pastures.',
        },
        {
          type: 'paragraph',
          text: 'Because zebu breeds are generally later maturing than specialised taurine beef breeds, Nellore production and crossbreeding programmes are designed around this. Crossing Nellore with taurine beef breeds is a common strategy to combine tropical adaptation with growth and carcass traits.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Nellore is highly adapted to hot, humid tropical conditions, with tolerance of heat and resistance to many external parasites, and the ability to perform on tropical forages. These traits make it a mainstay of extensive beef systems in tropical South America and beyond.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Tropical adaptation and parasite tolerance are strong breed traits but are relative to environment; water, forage, shade, and herd-health management remain necessary and are specific to each system.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'India (Ongole ancestor); developed in Brazil',
  originRegion:
    'Coastal Andhra Pradesh, India; developed extensively in Brazil',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a zebu beef breed.',
    },
    {
      registry: 'Brazilian zebu breeders’ association (ABCZ)',
      jurisdiction: 'Brazil',
      note: 'Coordinates Nelore registration and improvement in Brazil; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production in tropical regions',
    'Crossbreeding for tropical adaptation',
  ],
  physicalCharacteristics:
    'Large zebu beef cattle, white to light grey with dark skin, showing a shoulder hump, loose skin and dewlap, and dark points.',
  productionCharacteristics:
    'A tropical beef breed valued for hardiness on tropical pastures rather than early maturity; zebu breeds are generally later maturing than specialised taurine beef breeds, and Nellore is widely crossed with taurine breeds. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Highly adapted to hot, humid tropical conditions, with heat tolerance and resistance to many external parasites and the ability to perform on tropical forages.',
  managementContext:
    'A mainstay of extensive tropical beef systems, used purebred and as a base for crossbreeding and composite breeds.',
  geographicDistribution:
    'A dominant beef breed in Brazil and widespread across tropical South America, with populations in other tropical regions and, as the Ongole, in India.',
  connections: [
    { type: 'breed', slug: 'brahman' },
    { type: 'breed', slug: 'gir-cattle' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; registry rules differ between Brazil and India, and adaptation claims are relative to environment.',
  climateContext:
    'A zebu beef breed adapted to hot, humid tropical grazing conditions.',
  limitations: [
    'Nellore characteristics and performance vary with line, management, and environment; tropical adaptation and parasite tolerance are relative strengths rather than absolute protections.',
    'No growth, maturity, or carcass figures are stated here because they depend on genetics, nutrition, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Nellore conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record, transboundary status, and distribution',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Zebu (Nelore) beef production and research in Brazil',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Recognition and characterisation of the Ongole ancestor in India',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General zebu and breed description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nellore (cattle breed)',
    description:
      'Nellore (Nelore) zebu beef cattle: white Indian-derived breed developed in Brazil, valued for heat and parasite tolerance in tropical beef systems.',
    keywords: ['Nellore cattle', 'Nelore', 'Ongole', 'zebu beef breed'],
  },
  structuredData: { article: true },
};
