import type { BreedContent } from '@/types/content';

export const limousin: BreedContent = {
  id: 'breed-limousin',
  slug: 'limousin',
  contentType: 'breed',
  title: 'Limousin',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Limousine'],
  summary:
    'The Limousin is a golden-red French beef breed from the Limousin region, known for heavy muscling, high dressing percentage, and lean meat, and widely used as a terminal sire.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Limousin is a beef breed that originated in the Limousin and Marche regions of west-central France, an area of relatively poor soils where cattle were historically used for work and meat. Selection later concentrated on beef traits, producing a muscular animal well regarded for carcass yield.',
    },
    {
      type: 'paragraph',
      text: 'Limousins are typically a golden-red to wheat colour, sometimes lighter around the eyes and muzzle. The breed has been exported widely and, like the Charolais, is an important Continental European source of terminal-sire genetics for lean, high-yielding beef.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef' },
    { label: 'Species', value: 'Bos taurus' },
    { label: 'Origin', value: 'Limousin region, west-central France' },
    { label: 'Coat', value: 'Golden-red to wheat colour' },
    { label: 'Build', value: 'Muscular, with high dressing percentage' },
    {
      label: 'Notable trait',
      value: 'Lean, high-yielding carcass; terminal-sire use',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; French and national Limousin herd books',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The breed developed in the Limousin area of France, where hardy cattle were used for draught and meat on demanding terrain. As mechanisation reduced the need for draught animals, breeders selected the Limousin as a specialised beef breed emphasising muscling and carcass quality, and formalised it through a herd book.',
        },
        {
          type: 'paragraph',
          text: 'Exports from the later 20th century onward established Limousin populations across Europe, the Americas, Oceania, and Africa, where the breed is prized as a terminal sire and for producing lean beef.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Limousins are muscular beef cattle of golden-red to wheat colour, traditionally horned, with polled lines developed in some countries. They are noted for a high proportion of saleable meat and a relatively lean carcass.',
        },
        {
          type: 'paragraph',
          text: 'The breed is used as a purebred and, very widely, as a terminal sire to improve muscling and dressing percentage in crossbred cattle. Compared with some very large Continental breeds, Limousins are often described as more moderate in mature size while retaining strong carcass traits.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'Limousins are kept across temperate and warmer beef regions in systems from grazing to intensive finishing. Their reputation for hardiness reflects the demanding environment in which the breed developed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Muscling and carcass yield are breed strengths supported by selection; their expression in any herd depends on genetics within the breed, nutrition, and management, and on how cattle are finished.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'France',
  originRegion: 'Limousin and Marche regions, west-central France',
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
      registry: 'French and national Limousin herd books',
      jurisdiction: 'Multiple',
      note: 'The French breed organisation and national associations maintain the herd books; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production',
    'Terminal-sire crossbreeding for muscling and yield',
  ],
  physicalCharacteristics:
    'Muscular beef cattle of golden-red to wheat colour, traditionally horned with polled lines in some countries, noted for a high proportion of saleable meat.',
  productionCharacteristics:
    'A beef breed selected for muscling, high dressing percentage, and lean meat, and widely used as a terminal sire; often described as moderate in mature size relative to the largest Continental breeds. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Kept across temperate and warmer beef regions in systems from grazing to intensive finishing; developed in a demanding environment and regarded as hardy.',
  managementContext:
    'Used as purebreds and very widely as terminal sires in commercial beef production.',
  geographicDistribution:
    'A widespread Continental beef breed with major populations across Europe, the Americas, Oceania, and Africa.',
  connections: [
    { type: 'breed', slug: 'charolais' },
    { type: 'breed', slug: 'belgian-blue' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; herd-book rules and management vary by country.',
  climateContext:
    'A temperate-origin Continental beef breed kept across grazing and finishing systems.',
  limitations: [
    'Limousin characteristics and performance vary with line, management, and environment; muscling and carcass yield are breed strengths rather than fixed values.',
    'No growth-rate or carcass figures are stated here because they depend on genetics, nutrition, and finishing; current data should come from breed associations and performance recording.',
    'FAO DAD-IS records the Limousin conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown).',
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
    title: 'Limousin (cattle breed)',
    description:
      'Limousin beef cattle: golden-red French breed known for heavy muscling, high dressing percentage, lean meat, and terminal-sire use.',
    keywords: [
      'Limousin cattle',
      'French beef breed',
      'terminal sire',
      'lean beef',
    ],
  },
  structuredData: { article: true },
};
