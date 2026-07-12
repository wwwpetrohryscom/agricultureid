import type { CultivarContent } from '@/types/content';

export const heinz1706: CultivarContent = {
  id: 'heinz-1706',
  slug: 'heinz-1706',
  contentType: 'cultivar',
  title: 'Heinz 1706',
  category: 'Tomato cultivar',
  subcategory: 'Processing tomato (inbred line)',
  parentCrop: { type: 'crop', slug: 'tomato' },
  botanicalTaxon: 'Solanum lycopersicum',
  acceptedName: 'Heinz 1706',
  cultivarType: 'Processing cultivar (inbred line)',
  breedingType: 'Self-pollinated inbred selection',
  originCountry: 'United States',
  breederOrInstitution: 'H. J. Heinz Company (breeding program)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Plant Germplasm System',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Cited at the collection level for tomato germplasm and cultivar nomenclature; no specific accession identifier is asserted here.',
    },
  ],
  maturityClass: 'Mid-season',
  growthHabit: 'Determinate',
  intendedUse: ['Processing (paste, sauce, and canning)'],
  climateAdaptation:
    'A warm-season processing type grown mainly in open fields; specific adaptation depends on the production region and system.',
  qualityTraits: [
    'Determinate plant habit suited to concentrated fruit set',
    'Fruit used for paste, sauce, and canned products',
    'Cultivar sequenced for the tomato reference genome',
  ],
  summary:
    'Heinz 1706 is a determinate processing tomato developed within the H. J. Heinz breeding program, best known as the cultivar sequenced for the first high-quality tomato reference genome.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Heinz 1706 is a processing-type tomato associated with the H. J. Heinz Company breeding program. As a determinate line bred for mechanized processing production, it belongs to the group of tomatoes grown primarily for paste, sauce, and canned products rather than for the fresh market.',
    },
    {
      type: 'paragraph',
      text: 'The line became widely known in plant science when it was chosen as the cultivar for the tomato reference genome, published in 2012 by the Tomato Genome Consortium. That role has made Heinz 1706 a recurring reference point in tomato genetics and genomics.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Solanum lycopersicum (tomato)' },
    { label: 'Type', value: 'Processing tomato (determinate)' },
    { label: 'Growth habit', value: 'Determinate' },
    { label: 'Primary use', value: 'Processing (paste, sauce, canning)' },
    { label: 'Origin', value: 'United States (H. J. Heinz breeding program)' },
    {
      label: 'Notable status',
      value: 'Cultivar sequenced for the tomato reference genome (2012)',
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
          text: 'Heinz 1706 is characterized as a determinate processing tomato: the plant sets fruit over a comparatively concentrated period, a habit that suits once-over mechanical harvest common in processing systems. It is an inbred (self-pollinated) line rather than an F1 hybrid.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parent crop',
              description: 'Tomato (Solanum lycopersicum)',
            },
            { term: 'Growth habit', description: 'Determinate' },
            {
              term: 'Breeding type',
              description: 'Self-pollinated inbred selection',
            },
            {
              term: 'Intended use',
              description: 'Processing into paste, sauce, and canned products',
            },
          ],
        },
      ],
    },
    {
      id: 'reference-genome',
      heading: 'Role as a reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'Heinz 1706 was selected as the cultivar for the tomato reference genome assembly, reported by the Tomato Genome Consortium in 2012. Because of this, it is frequently used as a baseline in genetic mapping, gene annotation, and comparative studies of cultivated tomato and its wild relatives.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Reference-genome status describes the line’s role in research. It does not by itself indicate commercial availability, current registration, or suitability for any particular growing region.',
        },
      ],
    },
  ],
  connections: [{ type: 'irrigation-method', slug: 'drip-irrigation' }],
  geographicScope:
    'Documented as a United States processing tomato and a genomics reference line. Where it is grown commercially and how it performs are region- and system-specific and are not generalized here.',
  climateContext:
    'Warm-season processing tomato grown mainly in open-field systems; performance depends on local climate and management.',
  limitations: [
    'Public documentation for Heinz 1706 emphasizes its role as a genomics reference cultivar; agronomic performance figures are region- and season-specific and are not asserted here.',
    'Determinate growth habit is a documented trait, but plant behaviour and fruit development still vary with environment and management.',
    'Heinz maintains many numbered processing lines; details of any single line, including release dates, are not fully public.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Tomato germplasm and cultivar nomenclature (collection level)',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Species classification for Solanum lycopersicum and genomic reference context',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Taxonomic backbone for the tomato species',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Heinz 1706 (tomato cultivar)',
    description:
      'Heinz 1706 is a determinate processing tomato and the cultivar sequenced for the 2012 tomato reference genome. Type, use, and honest limitations.',
    keywords: [
      'Heinz 1706',
      'tomato reference genome',
      'processing tomato',
      'Solanum lycopersicum',
    ],
  },
  structuredData: { article: true },
};
