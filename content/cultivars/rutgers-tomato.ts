import type { CultivarContent } from '@/types/content';

export const rutgersTomato: CultivarContent = {
  id: 'rutgers-tomato',
  slug: 'rutgers-tomato',
  contentType: 'cultivar',
  title: 'Rutgers',
  category: 'Tomato cultivar',
  subcategory: 'Historic American main-crop tomato',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Rutgers',
  cultivarType: 'Historic cultivar',
  breedingType: 'Cross-bred selection',
  originCountry: 'United States',
  originRegion: 'New Jersey',
  yearReleased: '1934',
  breederOrInstitution:
    'New Jersey Agricultural Experiment Station, Rutgers University (with the Campbell Soup Company)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Cited at the collection level for tomato germplasm and cultivar nomenclature; no specific accession identifier is asserted.',
    },
  ],
  maturityClass: 'Mid-season',
  growthHabit: 'Indeterminate',
  intendedUse: ['Processing (canning and juice)', 'Fresh market'],
  climateAdaptation:
    'A warm-season main-crop tomato historically bred for eastern United States conditions; adaptation of modern strains varies by region.',
  qualityTraits: [
    'Rounded red fruit suited to both canning and fresh use',
    'Developed as a dual-purpose main-crop tomato',
    'Bred from a cross of established mid-twentieth-century varieties',
  ],
  summary:
    'Rutgers is a historic American tomato released in 1934 by the New Jersey Agricultural Experiment Station, bred for both canning and fresh market and long a standard in the eastern United States.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rutgers is a historic American tomato released in 1934 by the New Jersey Agricultural Experiment Station at Rutgers University, developed in cooperation with the Campbell Soup Company. It was bred as a dual-purpose main-crop tomato serving both the canning trade and the fresh market.',
    },
    {
      type: 'paragraph',
      text: 'The original Rutgers came from a cross of earlier varieties and became one of the most widely grown tomatoes in the mid-twentieth-century United States. Its influence persists, though the strains sold today often differ from the 1934 release.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Historic main-crop tomato' },
    { label: 'Growth habit', value: 'Indeterminate' },
    { label: 'Origin', value: 'New Jersey, United States' },
    { label: 'Released', value: '1934' },
    {
      label: 'Breeder',
      value: 'New Jersey Agricultural Experiment Station, Rutgers University',
    },
    { label: 'Registration status', value: 'Historical' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Rutgers is described as a main-crop tomato bearing rounded red fruit well suited to canning and juice as well as fresh use. It was bred from a cross of established varieties of its day and released as a dependable dual-purpose type for eastern growers.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Indeterminate' },
            { term: 'Released', description: '1934' },
            {
              term: 'Intended use',
              description: 'Canning, juice, and fresh market',
            },
          ],
        },
      ],
    },
    {
      id: 'history-and-strains',
      heading: 'History and modern strains',
      body: [
        {
          type: 'paragraph',
          text: 'Rutgers was a leading commercial and home-garden tomato for decades and remains a recognized heritage name. Over time, various reselections and improved strains have been distributed under the Rutgers name, so modern seed may not match the characteristics of the original 1934 release.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because the Rutgers name covers the original variety and later reselections, growers seeking specific traits should confirm which strain a supplier offers.',
        },
      ],
    },
  ],
  connections: [{ type: 'irrigation-method', slug: 'drip-irrigation' }],
  geographicScope:
    'Bred in New Jersey for eastern United States production and grown widely across North America; modern strains differ from the historic release.',
  climateContext:
    'Warm-season main-crop tomato originally developed for eastern United States field conditions.',
  limitations: [
    'Many strains distributed as Rutgers are later reselections that differ from the original 1934 variety, so the name alone does not fix the plant’s exact characteristics.',
    'Whether the historic type is best described as indeterminate or semi-determinate is reported with some variation across sources.',
    'Its historical adaptation to eastern United States conditions does not guarantee comparable behaviour in other regions.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Tomato germplasm, parentage, and cultivar nomenclature (collection level)',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for Solanum lycopersicum',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rutgers (tomato cultivar)',
    description:
      'Rutgers is a historic American tomato released in 1934 by Rutgers University for canning and fresh market. Its origin, traits, strains, and caveats.',
    keywords: [
      'Rutgers tomato',
      'heritage tomato',
      'New Jersey tomato',
      'canning tomato',
    ],
  },
  structuredData: { article: true },
};
