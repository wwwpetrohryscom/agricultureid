import type { CultivarContent } from '@/types/content';

export const ir36: CultivarContent = {
  id: 'ir36',
  slug: 'ir36',
  contentType: 'cultivar',
  title: 'IR36',
  acceptedName: 'IR36',
  category: 'Rice cultivar',
  summary:
    'IR36 is an early-maturing semi-dwarf indica rice released by the International Rice Research Institute (IRRI) in 1976. Bred from a complex, many-parent pedigree, it became one of the most widely planted rice varieties in the world during the late 1970s and 1980s.',
  introduction: [
    {
      type: 'paragraph',
      text: 'IR36 is a semi-dwarf indica rice variety developed at the International Rice Research Institute (IRRI) in the Philippines and released in 1976. It was notable both for its early maturity, which allowed farmers to grow more crops per year, and for a complex pedigree that combined many parents, including a wild rice species, to assemble multiple pest and disease characteristics in one variety.',
    },
    {
      type: 'paragraph',
      text: 'For a period in the late 1970s and 1980s, IR36 was among the most widely planted rice varieties in the world. It is discussed here as an important variety in rice-breeding history; its behaviour in any specific field depended, as always, on local environment and management.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Indica' },
    {
      label: 'Type',
      value: 'Inbred, semi-dwarf variety (many-parent pedigree)',
    },
    {
      label: 'Developed by',
      value: 'International Rice Research Institute (IRRI)',
    },
    { label: 'Year released', value: '1976' },
    {
      label: 'Maturity',
      value: 'Early-maturing, supporting multiple cropping',
    },
    { label: 'Primary use', value: 'Staple food grain' },
  ],
  sections: [
    {
      id: 'origin-and-breeding-history',
      heading: 'Origin and breeding history',
      body: [
        {
          type: 'paragraph',
          text: 'IR36 was bred at IRRI, in Los Baños, Philippines, and released in 1976. Its pedigree is often cited as an example of complex, multi-parent rice breeding: it drew on many cultivated parents and on the wild species Oryza nivara, which was used as a source of resistance to rice grassy stunt virus. This use of a wild relative to introduce a specific trait is one of the best-documented examples of its kind in rice breeding.',
        },
        {
          type: 'paragraph',
          text: 'The variety was bred for early maturity and for resistance to several pests and diseases of tropical lowland rice, characteristics that suited it to intensive, multiple-cropping systems.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Institution',
              description:
                'International Rice Research Institute (IRRI), Los Baños, Philippines',
            },
            { term: 'Release year', description: '1976' },
            {
              term: 'Pedigree',
              description:
                'Complex, many-parent pedigree including the wild species Oryza nivara',
            },
            {
              term: 'Plant type',
              description: 'Semi-dwarf, early-maturing indica',
            },
          ],
        },
      ],
    },
    {
      id: 'early-maturity-and-adoption',
      heading: 'Early maturity and adoption',
      body: [
        {
          type: 'paragraph',
          text: 'A defining feature of IR36 was its short growth duration. Earlier maturity meant a crop could be harvested sooner, which in favourable systems allowed two or even three rice crops per year, or a rice crop to fit within a rotation. Together with its resistance characteristics, this contributed to very wide adoption, and for a time IR36 was reported to be the most widely grown rice variety in the world.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The number of crops that can be grown per year depends on climate, water availability, and local farming systems; early maturity is an enabling trait, not a guarantee of multiple cropping in every setting.',
        },
      ],
    },
    {
      id: 'pest-and-disease-characteristics',
      heading: 'Pest and disease characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'IR36 was bred to carry resistance to rice grassy stunt virus, a trait historically introgressed from the wild rice Oryza nivara, and it was selected for resistance to several other pests and diseases of its era. Resistance in rice is not permanent: the effectiveness of any resistance depends on location and on how pest and pathogen populations change over time, so historical resistance should not be read as guaranteed protection today.',
        },
      ],
    },
    {
      id: 'classification-and-status',
      heading: 'Classification and status',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Botanical taxon',
              description: 'Oryza sativa (indica group)',
            },
            { term: 'Cultivar type', description: 'Inbred line (indica)' },
            {
              term: 'Registry status',
              description:
                'Historical — a landmark, widely grown released variety; current registry standing is not asserted here',
            },
            {
              term: 'Documented by',
              description:
                'IRRI variety history and CGIAR rice-breeding literature',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (indica group)',
  cultivarType: 'Inbred line (indica)',
  breedingType: 'Cross-breeding (many-parent pedigree selection)',
  originCountry: 'Philippines',
  originRegion: 'Los Baños, Laguna (IRRI)',
  yearReleased: '1976',
  breederOrInstitution: 'International Rice Research Institute (IRRI)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'International Rice Research Institute (IRRI)',
      sourceId: 'irri',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'IR36 is documented in IRRI’s variety history as an early-maturing semi-dwarf indica released in 1976. Specific record identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Early-maturing',
  growthHabit: 'Semi-dwarf, early-maturing',
  intendedUse: ['Staple food grain'],
  climateAdaptation:
    'Irrigated and rainfed lowland tropics; suited to multiple-cropping systems',
  qualityTraits: ['Long, slender indica grain'],
  diseaseResistanceClaims: [
    'Historically bred to carry resistance to rice grassy stunt virus, introgressed from the wild species Oryza nivara — a well-documented example of wild-relative use in rice breeding. Resistance durability is location- and population-specific and should not be read as guaranteed present-day protection.',
  ],
  claims: [
    {
      field: 'disease-resistance',
      statement:
        'IR36 was bred to carry resistance to rice grassy stunt virus, historically introgressed from the wild rice Oryza nivara.',
      citations: [
        {
          sourceId: 'irri',
          evidenceNote:
            'IRRI variety history and pedigree documentation for IR36 (grassy stunt resistance from Oryza nivara)',
          evidenceTier: 1,
        },
        {
          sourceId: 'cgiar',
          evidenceNote: 'CGIAR accounts of wild-relative use in rice breeding',
          evidenceTier: 1,
        },
      ],
    },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'climate', slug: 'monsoon' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'Developed at IRRI in the Philippines and grown very widely across tropical Asia during the late 1970s and 1980s; discussed here mainly as a historically important variety.',
  climateContext:
    'Bred for warm tropical lowland rice systems; early maturity supported intensive, multiple-cropping farming.',
  limitations: [
    'Performance is environment- and management-specific; no single yield figure is stated because none represents the variety across conditions.',
    'Historical resistance (including to grassy stunt virus) is location- and population-specific and can be eroded as pests and pathogens change; it is not a guarantee of present-day protection.',
    'The current registry standing of IR36 is not asserted here; it is documented primarily through IRRI’s variety history.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'IR36 breeding history, pedigree, early maturity, and grassy stunt resistance from Oryza nivara',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Wild-relative use and Green Revolution rice breeding context',
    },
    {
      sourceId: 'gbif',
      citedFor: 'Species classification (Oryza sativa; Oryza nivara)',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'IR36 (rice cultivar)',
    description:
      'IR36, an early-maturing IRRI semi-dwarf indica released in 1976: complex pedigree, Oryza nivara grassy-stunt resistance, and historical status.',
    keywords: [
      'IR36',
      'IRRI',
      'indica rice',
      'Oryza nivara',
      'grassy stunt virus',
      'early-maturing rice',
    ],
  },
  structuredData: { article: true },
};
