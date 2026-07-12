import type { CultivarContent } from '@/types/content';

export const microTom: CultivarContent = {
  id: 'micro-tom',
  slug: 'micro-tom',
  contentType: 'cultivar',
  title: 'Micro-Tom',
  category: 'Tomato cultivar',
  subcategory: 'Miniature dwarf tomato / research model line',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Micro-Tom',
  cultivarType: 'Miniature dwarf cultivar (widely used as a model line)',
  breedingType: 'Bred cultivar (selection combining dwarfing mutations)',
  originCountry: 'United States',
  yearReleased: '1989',
  breederOrInstitution:
    'University of Florida (Agricultural Experiment Station)',
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
  maturityClass: 'Early (short life cycle)',
  growthHabit: 'Determinate dwarf',
  intendedUse: [
    'Research model system',
    'Originally released as a miniature ornamental / container tomato',
  ],
  climateAdaptation:
    'A very small dwarf plant well suited to growth chambers, greenhouses, and containers; it is grown in controlled conditions far more than in the open field.',
  qualityTraits: [
    'Miniature, compact dwarf plant habit',
    'Short life cycle enabling high-density research culture',
    'Small fruit; grown for study and display rather than commercial harvest',
  ],
  summary:
    'Micro-Tom is a miniature dwarf tomato released by the University of Florida in 1989 as an ornamental type, later adopted worldwide as a compact model system for tomato research.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Micro-Tom is a miniature dwarf tomato originally released by the University of Florida in 1989 as a small ornamental and container plant. Its very compact size and short life cycle later made it a widely used model system for tomato genetics, physiology, and molecular biology.',
    },
    {
      type: 'paragraph',
      text: 'The plant’s small stature comes from combining dwarfing mutations, which allow many individuals to be grown in a small space under controlled conditions. This practicality, rather than any commercial fruit value, is why Micro-Tom is so widely cultivated in research settings.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Miniature dwarf cultivar / model line' },
    { label: 'Growth habit', value: 'Determinate dwarf' },
    { label: 'Origin', value: 'University of Florida, United States' },
    { label: 'Released', value: '1989' },
    {
      label: 'Primary use',
      value: 'Research model system (originally ornamental)',
    },
    { label: 'Registration status', value: 'Historical / reference line' },
  ],
  sections: [
    {
      id: 'identity-and-type',
      heading: 'Identity and type',
      body: [
        {
          type: 'paragraph',
          text: 'Micro-Tom is characterized by an extremely compact, determinate dwarf habit and a short generation time. These features let researchers raise large numbers of plants in growth chambers and small greenhouse areas, which is central to its role as a laboratory model.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            {
              term: 'Growth habit',
              description: 'Determinate dwarf (miniature)',
            },
            {
              term: 'Origin',
              description: 'University of Florida, released 1989',
            },
            {
              term: 'Primary use',
              description: 'Research model system; originally ornamental',
            },
          ],
        },
      ],
    },
    {
      id: 'use-as-a-model',
      heading: 'Use as a model system',
      body: [
        {
          type: 'paragraph',
          text: 'Because of its size, speed, and amenability to transformation, Micro-Tom has been adopted internationally as a reference background for tomato research, including studies of fruit development, hormones, and gene function. Many mutant and transgenic lines have been produced in this background.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Micro-Tom is bred for laboratory convenience. Its dwarf traits are not representative of field or greenhouse production cultivars, and it is not grown for commercial fruit.',
        },
      ],
    },
  ],
  connections: [{ type: 'farming-system', slug: 'greenhouse-farming' }],
  geographicScope:
    'Originating at the University of Florida and now used in research laboratories worldwide; it is a controlled-environment plant rather than a field crop.',
  climateContext:
    'Grown chiefly under controlled conditions in growth chambers and greenhouses because of its dwarf habit and short cycle.',
  limitations: [
    'Micro-Tom is a research and ornamental line, so its compact traits do not reflect the behaviour of commercial field or greenhouse tomatoes.',
    'Its dwarf phenotype results from specific mutations, meaning physiological findings in this background are not always directly transferable to standard cultivars.',
    'It is distributed mainly through research germplasm channels, and precise seed sources can differ between laboratories.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and cultivar nomenclature (collection level)',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor: 'Species classification for Solanum lycopersicum',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Micro-Tom (tomato model line)',
    description:
      'Micro-Tom is a miniature dwarf tomato released by the University of Florida in 1989 and now a widely used research model system. Its traits and caveats.',
    keywords: [
      'Micro-Tom',
      'dwarf tomato',
      'tomato model system',
      'Solanum lycopersicum',
    ],
  },
  structuredData: { article: true },
};
