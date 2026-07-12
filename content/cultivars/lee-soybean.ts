import type { CultivarContent } from '@/types/content';

export const leeSoybean: CultivarContent = {
  id: 'lee-soybean',
  slug: 'lee-soybean',
  contentType: 'cultivar',
  title: 'Lee',
  acceptedName: 'Lee',
  category: 'Soybean cultivar',
  parentCrop: { type: 'crop', slug: 'soybean' },
  botanicalTaxon: 'Glycine max',
  cultivarType: 'Cultivar (self-pollinated pure line)',
  breedingType: 'Cross-breeding and pure-line selection',
  originCountry: 'United States',
  originRegion: 'Southern United States',
  yearReleased: '1954',
  breederOrInstitution:
    'USDA U.S. Regional Soybean Laboratory (developed by E. E. Hartwig)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Lee is maintained in the USDA Soybean Germplasm Collection; specific accession identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Maturity Group VI',
  growthHabit: 'Annual, self-pollinating soybean',
  intendedUse: [
    'Grain and oilseed soybean production in the southern United States (historical)',
    'Foundation parent for southern U.S. and Brazilian soybean breeding',
    'Source of bacterial pustule resistance in breeding',
  ],
  climateAdaptation:
    'Maturity Group VI, historically adapted to the southern United States; maturity-group adaptation ties flowering and maturity to day length and latitude.',
  diseaseResistanceClaims: [
    'Historically characterized as resistant to bacterial pustule (Xanthomonas) through the Rxp gene inherited from its ancestor CNS. Disease reaction is pathogen- and environment-specific.',
  ],
  geographicAvailability:
    'Superseded by newer cultivars for commercial production; maintained as public germplasm and widely present in the pedigrees of later southern cultivars.',
  summary:
    'Lee is a public soybean cultivar released by the USDA in 1954 from the cross S-100 × CNS. A Maturity Group VI type bred for the southern United States, it was valued for disease resistance and became a foundational parent for southern U.S. and Brazilian breeding.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lee is a public soybean cultivar developed by the USDA’s U.S. Regional Soybean Laboratory and released in 1954. It was selected from the cross of the lines S-100 and CNS and is a Maturity Group VI type adapted to the southern United States.',
    },
    {
      type: 'paragraph',
      text: 'Lee was influential as a disease-resistant southern cultivar and became a widely used parent in soybean breeding programs in the southern United States and Brazil. Many later southern cultivars carry Lee in their pedigrees.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Soybean (Glycine max)' },
    { label: 'Type', value: 'Public self-pollinated cultivar' },
    {
      label: 'Developed by',
      value: 'USDA U.S. Regional Soybean Laboratory (Hartwig)',
    },
    { label: 'Released', value: '1954' },
    { label: 'Parentage', value: 'S-100 × CNS' },
    { label: 'Maturity group', value: 'VI' },
    {
      label: 'Notable trait',
      value: 'Bacterial pustule resistance (Rxp, inherited from CNS)',
    },
    { label: 'Registration status', value: 'Historical / public cultivar' },
  ],
  sections: [
    {
      id: 'development',
      heading: 'Development',
      body: [
        {
          type: 'paragraph',
          text: 'Lee was selected from the cross S-100 × CNS and released in 1954 by the USDA’s U.S. Regional Soybean Laboratory, whose southern breeding work was led by Edgar E. Hartwig. It was developed for the disease pressures and long growing season of the southern United States and classified in Maturity Group VI.',
        },
      ],
    },
    {
      id: 'disease-reaction-and-legacy',
      heading: 'Disease reaction and legacy',
      body: [
        {
          type: 'paragraph',
          text: 'Lee was regarded as a disease-resistant cultivar for the South and is documented as carrying resistance to bacterial pustule (Xanthomonas), conferred by the Rxp gene inherited from its ancestor CNS. Its adaptation and disease resistance made it a heavily used parent, and it appears in the ancestry of many later cultivars in the southern United States and in Brazil.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Disease reaction is context-specific',
          text: 'Documented disease resistance in Lee reflects historical characterization against specific pathogens and populations; reaction varies with the pathogen strain and the environment.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'disease-resistance',
      statement:
        'Lee is historically characterized as resistant to bacterial pustule (Xanthomonas) through the Rxp gene inherited from its ancestor CNS; disease reaction is pathogen strain– and environment-specific.',
      citations: [
        {
          sourceId: 'usda-ars',
          evidenceNote:
            'Characterization of Lee as a southern disease-resistant cultivar carrying Rxp bacterial-pustule resistance from CNS',
          evidenceTier: 1,
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'cultivar', slug: 'forrest-soybean' },
    { type: 'cultivar', slug: 'williams-82' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed by the USDA for the southern United States; used as a breeding parent in the U.S. South and Brazil.',
  climateContext:
    'Maturity Group VI soybean; maturity-group adaptation is latitude- and day-length-dependent.',
  limitations: [
    'Lee is a historical public cultivar largely superseded for commercial production; agronomic performance is environment-specific.',
    'Documented disease resistance reflects historical characterization against particular pathogens and populations and is not a guarantee of resistance under all conditions.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Maintenance of Lee in the USDA Soybean Germplasm Collection',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Release, parentage, and disease resistance of the Lee soybean cultivar',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lee (soybean cultivar)',
    description:
      'Lee is a 1954 USDA soybean cultivar (S-100 × CNS, Maturity Group VI) for the southern U.S., carrying Rxp bacterial-pustule resistance.',
    keywords: [
      'Lee soybean',
      'bacterial pustule',
      'Rxp gene',
      'Glycine max',
      'southern soybean',
    ],
  },
  structuredData: { article: true },
};
