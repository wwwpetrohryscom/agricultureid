import type { BreedContent } from '@/types/content';

export const charolais: BreedContent = {
  id: 'breed-charolais',
  slug: 'charolais',
  contentType: 'breed',
  title: 'Charolais',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Charolaise'],
  summary:
    'The Charolais is a large, white-to-cream French beef breed known for heavy muscling and growth, used worldwide as a terminal sire and for lean beef production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Charolais is a beef breed that originated in the Charolais district of east-central France, in and around Burgundy. Historically used for draught as well as meat, it was later selected as a specialised beef animal noted for size, growth, and muscle development.',
    },
    {
      type: 'paragraph',
      text: 'Charolais cattle are large-framed and characteristically white to creamy-white in colour. The breed has been exported widely and is one of the most influential Continental European beef breeds, particularly as a terminal sire crossed onto other breeds to increase growth and carcass yield.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Charolais region, east-central France' },
    { label: 'Coat', value: 'White to creamy-white' },
    { label: 'Build', value: 'Large-framed and heavily muscled' },
    {
      label: 'Notable trait',
      value: 'Growth and lean carcass yield; terminal-sire use',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; French and national Charolais herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed developed in the Charolais area of France, where white cattle were used historically for work and meat. Selection increasingly emphasised growth and muscling, and a herd book formalised the breed. Exports through the 20th century established Charolais populations across Europe, the Americas, Oceania, and Africa.',
        },
        {
          type: 'paragraph',
          text: 'Internationally, the Charolais became a leading source of terminal-sire genetics, valued for adding size and lean growth to crossbred calves out of other maternal breeds.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Charolais are large, powerfully built beef cattle with a white to creamy-white coat and heavy muscling, particularly over the hindquarters. Traditionally horned, polled lines have also been developed in some countries.',
        },
        {
          type: 'paragraph',
          text: 'The breed is used both as a purebred beef animal and, very widely, as a terminal sire to raise growth rate and lean meat yield in crossbred cattle. Its large mature size is associated with high feed requirements and, in some matings, with attention to calving management.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Charolais are kept across temperate and warmer beef regions and are managed in systems ranging from grazing to intensive finishing. Because of their size and growth potential, feeding and management are typically geared to supporting rapid, lean growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Large mature size brings higher feed requirements and, in terminal crossing, makes sire and dam selection and calving management important considerations that are specific to each system.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'France',
  originRegion: 'Charolais district, east-central France (Burgundy)',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded internationally as a transboundary beef breed.',
    },
    {
      registry: 'French and national Charolais herd books',
      jurisdiction: 'Multiple',
      note: 'The French breed organisation and national associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production',
    'Terminal-sire crossbreeding for growth and lean yield',
  ],
  physicalCharacteristics:
    'Large-framed, heavily muscled beef cattle with a white to creamy-white coat; traditionally horned, with polled lines in some countries.',
  productionCharacteristics:
    'A beef breed selected for size, growth, and lean carcass yield, widely used as a terminal sire. High growth potential is associated with high feed requirements; specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Kept across temperate and warmer beef regions in systems from grazing to intensive finishing.',
  managementContext:
    'Used as purebreds and very widely as terminal sires; large size means feeding and calving management are important and system-specific.',
  geographicDistribution:
    'One of the most widespread Continental beef breeds, with major populations in Europe, the Americas, Oceania, and Africa.',
  connections: [
    { type: 'breed', slug: 'limousin' },
    { type: 'breed', slug: 'simmental' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management vary by country.',
  climateContext:
    'A temperate-origin Continental beef breed kept across grazing and finishing systems.',
  limitations: [
    'Charolais characteristics and performance vary with line, management, and environment; growth and muscling are breed strengths rather than fixed values.',
    'No growth-rate or carcass figures are stated here because they depend on genetics, nutrition, and system and change over time; current data should come from breed associations and performance recording.',
    'FAO DAD-IS records the Charolais conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
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
    title: 'Charolais (cattle breed)',
    description:
      'Charolais beef cattle: large, white-coated French breed known for heavy muscling, growth, and use as a terminal sire in crossbreeding.',
    keywords: [
      'Charolais cattle',
      'French beef breed',
      'terminal sire',
      'beef cattle',
    ],
  },
  structuredData: { article: true },
};
