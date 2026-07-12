import type { CultivarContent } from '@/types/content';

export const williams82: CultivarContent = {
  id: 'williams-82',
  slug: 'williams-82',
  contentType: 'cultivar',
  title: 'Williams 82',
  acceptedName: 'Williams 82',
  category: 'Soybean cultivar',
  parentCrop: { type: 'crop', slug: 'soybean' },
  botanicalTaxon: 'Glycine max',
  cultivarType: 'Cultivar (self-pollinated pure line)',
  breedingType:
    'Backcross introgression (recurrent parent Williams; donor parent Kingwa)',
  originCountry: 'United States',
  breederOrInstitution: 'USDA-ARS and the University of Illinois',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Williams 82 is maintained in the USDA Soybean Germplasm Collection (Urbana, Illinois); specific accession identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Maturity Group III',
  growthHabit: 'Annual, self-pollinating soybean',
  intendedUse: [
    'Reference genome and genetic reference for soybean research',
    'Public cultivar and breeding parent',
    'Grain and oilseed production (historical)',
  ],
  climateAdaptation:
    'Maturity Group III, historically adapted to the central U.S. Corn Belt latitudes; maturity-group adaptation ties flowering and maturity to day length and latitude.',
  diseaseResistanceClaims: [
    'Carries the Rps1-k allele introgressed from the donor parent Kingwa, associated with race-specific resistance to certain isolates of Phytophthora sojae (Phytophthora root and stem rot). Rps genes are race-specific and can be overcome by other pathogen isolates.',
  ],
  geographicAvailability:
    'Maintained as public germplasm and used worldwide as the primary soybean reference genome; not a current commercial variety.',
  summary:
    'Williams 82 is a public soybean cultivar developed by USDA-ARS and the University of Illinois by backcrossing a Phytophthora-resistance region from Kingwa into the cultivar Williams. It is the primary reference genome for soybean research.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Williams 82 is a public soybean cultivar developed by USDA-ARS and the University of Illinois. It was produced by backcrossing to introgress a Phytophthora root-rot resistance region (carrying the Rps1-k allele) from the donor parent Kingwa into the recurrent parent Williams, a Maturity Group III cultivar.',
    },
    {
      type: 'paragraph',
      text: 'Williams 82 is best known as the soybean reference genome: an assembly of this cultivar was first reported in 2010 and it has since served as the main reference used by the soybean research community. It is maintained in the USDA Soybean Germplasm Collection.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Soybean (Glycine max)' },
    { label: 'Type', value: 'Public self-pollinated cultivar' },
    { label: 'Developed by', value: 'USDA-ARS and the University of Illinois' },
    {
      label: 'Parentage',
      value: 'Williams (recurrent) × Kingwa (donor of Rps1-k)',
    },
    { label: 'Maturity group', value: 'III' },
    {
      label: 'Notable status',
      value: 'Primary soybean reference genome (first reported 2010)',
    },
    {
      label: 'Registration status',
      value: 'Historical / public reference cultivar',
    },
  ],
  sections: [
    {
      id: 'development',
      heading: 'Development',
      body: [
        {
          type: 'paragraph',
          text: 'Williams 82 was derived by backcrossing: the cultivar Williams served as the recurrent parent, while a chromosomal region carrying the Rps1-k resistance allele was transferred in from the donor parent Kingwa. The aim was to add Phytophthora root-rot resistance to the Williams background while retaining most of Williams’ agronomic characteristics.',
        },
      ],
    },
    {
      id: 'reference-genome',
      heading: 'Role as the soybean reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'An assembled genome of Williams 82 was first reported in 2010 and became the standard reference for the soybean research community, underpinning gene annotation, comparative genomics, and marker development. Successive assemblies and analyses have continued to use Williams 82 as the primary reference cultivar.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Reference line, not a current commercial variety',
          text: 'Williams 82 is valued today primarily as a genetic and genomic reference and public breeding parent rather than as a commercial production variety.',
        },
      ],
    },
    {
      id: 'disease-reaction',
      heading: 'Disease reaction',
      body: [
        {
          type: 'paragraph',
          text: 'Williams 82 carries the Rps1-k allele introgressed from Kingwa, associated with resistance to certain isolates of Phytophthora sojae, the cause of Phytophthora root and stem rot. Resistance conferred by single Rps genes is race-specific: it is effective against some pathogen isolates and can be overcome by others, and its usefulness depends on the local pathogen population.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'disease-resistance',
      statement:
        'Williams 82 carries the Rps1-k allele introgressed from the donor parent Kingwa, associated with race-specific resistance to Phytophthora sojae (Phytophthora root and stem rot); such single-gene Rps resistance is race-specific and can be overcome by other isolates.',
      citations: [
        {
          sourceId: 'usda-ars',
          evidenceNote:
            'Development of Williams 82 by backcross introgression of the Rps1-k Phytophthora-resistance region from Kingwa into Williams',
          evidenceTier: 1,
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'cultivar', slug: 'forrest-soybean' },
    { type: 'cultivar', slug: 'lee-soybean' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed in the United States (USDA-ARS / University of Illinois); used worldwide as the soybean reference genome.',
  climateContext:
    'Maturity Group III soybean; maturity-group adaptation is latitude- and day-length-dependent.',
  limitations: [
    'Williams 82 is a public reference cultivar and breeding parent rather than a current commercial variety; agronomic performance is environment-specific.',
    'Rps1-k Phytophthora resistance is race-specific and can be overcome by other pathogen isolates; it should not be read as broad or durable resistance.',
    'A precise release year is reported inconsistently across sources and is therefore not stated here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Maintenance of Williams 82 in the USDA Soybean Germplasm Collection',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Development by Rps1-k backcross introgression and use as the soybean reference genome',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Williams 82 (soybean cultivar)',
    description:
      'Williams 82 is the primary soybean reference genome — a USDA-ARS/Illinois cultivar carrying Rps1-k Phytophthora resistance backcrossed from Kingwa.',
    keywords: [
      'Williams 82',
      'soybean reference genome',
      'Rps1-k',
      'Glycine max',
      'Phytophthora sojae',
    ],
  },
  structuredData: { article: true },
};
