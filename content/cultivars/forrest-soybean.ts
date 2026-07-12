import type { CultivarContent } from '@/types/content';

export const forrestSoybean: CultivarContent = {
  id: 'forrest-soybean',
  slug: 'forrest-soybean',
  contentType: 'cultivar',
  title: 'Forrest',
  acceptedName: 'Forrest',
  category: 'Soybean cultivar',
  parentCrop: { type: 'crop', slug: 'soybean' },
  botanicalTaxon: 'Glycine max',
  cultivarType: 'Cultivar (self-pollinated pure line)',
  breedingType: 'Cross-breeding and pure-line selection',
  originCountry: 'United States',
  originRegion: 'Mid-southern United States (Mississippi)',
  yearReleased: '1973',
  breederOrInstitution: 'USDA-ARS (registered by E. E. Hartwig and J. M. Epps)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Forrest is maintained in the USDA Soybean Germplasm Collection; specific accession identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Maturity Group V',
  growthHabit: 'Annual, self-pollinating soybean',
  intendedUse: [
    'Grain and oilseed soybean production in the mid-South (historical)',
    'Source of soybean cyst nematode resistance in breeding',
    'Reference genotype for genetic mapping of nematode resistance',
  ],
  climateAdaptation:
    'Maturity Group V, historically adapted to the mid-southern United States; maturity-group adaptation ties flowering and maturity to day length and latitude.',
  pestResistanceClaims: [
    'Released as a soybean cyst nematode (Heterodera glycines) resistant cultivar; resistance to the population historically designated race 3 is conditioned by two loci (Rhg1 and Rhg4). Resistance is specific to particular nematode populations (races / HG types) and is not effective against all of them.',
  ],
  geographicAvailability:
    'Superseded by newer cultivars for commercial production; maintained as public germplasm and used as a resistance source and reference genotype.',
  summary:
    'Forrest is a public soybean cultivar released by USDA-ARS in 1973 from the cross Dyer × Bragg. A Maturity Group V cultivar for the mid-South, it is best known as a soybean cyst nematode–resistant line and a reference source of that resistance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Forrest is a public soybean cultivar developed by USDA-ARS and registered in 1973. It was selected from the cross of the cultivars Dyer and Bragg and is a Maturity Group V type adapted to the mid-southern United States.',
    },
    {
      type: 'paragraph',
      text: 'Forrest became an important early example of a soybean cyst nematode (SCN) resistant cultivar and has since been used extensively as a resistance source and as a parent in genetic-mapping populations studying the inheritance of SCN resistance.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Soybean (Glycine max)' },
    { label: 'Type', value: 'Public self-pollinated cultivar' },
    { label: 'Developed by', value: 'USDA-ARS (Hartwig and Epps)' },
    { label: 'Released', value: '1973' },
    { label: 'Parentage', value: 'Dyer × Bragg' },
    { label: 'Maturity group', value: 'V' },
    {
      label: 'Notable trait',
      value: 'Soybean cyst nematode resistance (race 3; Rhg1 and Rhg4 loci)',
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
          text: 'Forrest was selected from the cross Dyer × Bragg and registered in 1973 through the USDA-ARS soybean program serving the southern United States. As a Maturity Group V cultivar, it was suited to mid-South latitudes.',
        },
      ],
    },
    {
      id: 'nematode-resistance',
      heading: 'Soybean cyst nematode resistance',
      body: [
        {
          type: 'paragraph',
          text: 'Forrest was released as a cultivar resistant to soybean cyst nematode (Heterodera glycines). Its resistance to the nematode population historically designated race 3 is conditioned by two loci, commonly referred to as Rhg1 and Rhg4, and Forrest has been widely used as a parent in mapping populations that dissected this resistance.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Resistance is population-specific',
          text: 'Soybean cyst nematode populations differ in virulence (described by races or "HG types"). Forrest’s resistance is effective against some populations and not others, so it should not be read as broad or durable resistance to the nematode.',
        },
      ],
    },
    {
      id: 'status',
      heading: 'Status and use',
      body: [
        {
          type: 'paragraph',
          text: 'Forrest has been superseded by newer cultivars for commercial production but remains significant as public germplasm: it is used as a resistance source in breeding and as a reference genotype in nematode-resistance research.',
        },
      ],
    },
  ],
  claims: [
    {
      field: 'pest-resistance',
      statement:
        'Forrest was released as a soybean cyst nematode (Heterodera glycines) resistant cultivar; resistance to the population historically designated race 3 is conditioned by the Rhg1 and Rhg4 loci and is specific to particular nematode populations (races / HG types).',
      citations: [
        {
          sourceId: 'usda-ars',
          evidenceNote:
            'Registration and characterization of Forrest as an SCN-resistant cultivar and mapping of its bigenic race-3 resistance',
          evidenceTier: 1,
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'cultivar', slug: 'lee-soybean' },
    { type: 'cultivar', slug: 'williams-82' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed by USDA-ARS for the mid-southern United States; used internationally as a resistance source and research genotype.',
  climateContext:
    'Maturity Group V soybean; maturity-group adaptation is latitude- and day-length-dependent.',
  limitations: [
    'Forrest is a historical public cultivar largely superseded for commercial production; agronomic performance is environment-specific.',
    'Soybean cyst nematode resistance is population-specific (race / HG type) and can be eroded by shifts in the local nematode population; it is not universal resistance.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Maintenance of Forrest in the USDA Soybean Germplasm Collection',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Registration, parentage, and soybean cyst nematode resistance of Forrest',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Forrest (soybean cultivar)',
    description:
      'Forrest is a 1973 USDA-ARS soybean cultivar (Dyer × Bragg, Maturity Group V) and a classic soybean cyst nematode–resistant line (Rhg1/Rhg4 loci).',
    keywords: [
      'Forrest soybean',
      'soybean cyst nematode',
      'Rhg1',
      'Rhg4',
      'Glycine max',
    ],
  },
  structuredData: { article: true },
};
