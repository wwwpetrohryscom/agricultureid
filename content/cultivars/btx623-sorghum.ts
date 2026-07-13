import type { CultivarContent } from '@/types/content';

export const btx623Sorghum: CultivarContent = {
  id: 'btx623-sorghum',
  slug: 'btx623-sorghum',
  contentType: 'cultivar',
  title: 'BTx623',
  acceptedName: 'BTx623',
  category: 'Sorghum inbred line',
  parentCrop: { type: 'crop', slug: 'sorghum' },
  botanicalTaxon: 'Sorghum bicolor',
  cultivarType: 'Inbred line',
  breedingType: 'Pedigree breeding using sorghum conversion-program germplasm',
  originCountry: 'United States',
  originRegion: 'Texas',
  yearReleased: '1977',
  breederOrInstitution:
    'Texas Agricultural Experiment Station, Texas A&M University (developed by Fred R. Miller)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'BTx623 is maintained as a public grain sorghum inbred accession in the U.S. National Plant Germplasm System; specific record identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Early-to-medium maturing; dwarf (combine-height) grain type',
  growthHabit:
    'Annual, short-statured (dwarf) grain sorghum maintained as an inbred maintainer (B) line',
  intendedUse: [
    'Maintainer (B) parent line in hybrid grain sorghum breeding',
    'Reference genome for sorghum',
    'Genetics and genomics research',
  ],
  climateAdaptation:
    'Warm-season grain sorghum; short (combine-height) stature suits mechanized grain production. Adaptation and performance are environment-specific.',
  qualityTraits: [
    'White/tan-seeded grain sorghum',
    'Dwarf, combine-height plant stature',
  ],
  geographicAvailability:
    'Available as public germplasm through the U.S. National Plant Germplasm System and used widely as a reference genotype and breeding parent.',
  summary:
    'BTx623 is a public grain sorghum inbred line developed at Texas A&M University and released in 1977 as a maintainer (B) line for hybrid breeding. It is the source of the sorghum reference genome and a standard genetic reference for the species.',
  introduction: [
    {
      type: 'paragraph',
      text: 'BTx623 is a public inbred line of grain sorghum developed at the Texas Agricultural Experiment Station (Texas A&M University) by Fred R. Miller and released in 1977. It was bred as a maintainer (B) line — used in the cytoplasmic male-sterility system to maintain a corresponding male-sterile (A) line — and it is a short-statured, combine-height grain type.',
    },
    {
      type: 'paragraph',
      text: 'BTx623 was derived from the cross BTx3197 × SC170, the latter a line from the sorghum conversion program that introduced tropical (caudatum/Zera-zera) germplasm into short, early-flowering backgrounds adapted to temperate mechanized production. BTx623 is best known today as the source of the sorghum reference genome.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Sorghum (Sorghum bicolor)' },
    { label: 'Type', value: 'Public inbred maintainer (B) line' },
    { label: 'Developed by', value: 'Texas A&M University (F. R. Miller)' },
    { label: 'Released', value: '1977' },
    { label: 'Parentage', value: 'BTx3197 × SC170 (conversion-program line)' },
    { label: 'Plant type', value: 'Dwarf, combine-height grain sorghum' },
    {
      label: 'Notable status',
      value: 'Source of the sorghum reference genome (2009)',
    },
    {
      label: 'Registration status',
      value: 'Historical / public research line',
    },
  ],
  sections: [
    {
      id: 'background-and-development',
      heading: 'Background and development',
      body: [
        {
          type: 'paragraph',
          text: 'BTx623 was released in 1977 from the Texas A&M sorghum breeding program. Its pedigree, BTx3197 × SC170, combines an adapted kafir-background maintainer line with a converted line (SC170) from the sorghum conversion program, which shortened and made photoperiod-insensitive otherwise tall, tropical germplasm so it could be used in temperate breeding.',
        },
        {
          type: 'paragraph',
          text: 'As a maintainer (B) line, BTx623 is used in hybrid grain sorghum production alongside its corresponding male-sterile (A) line: hybrid seed production in sorghum relies on cytoplasmic male sterility, in which B-lines maintain the sterile A-lines that serve as seed parents.',
        },
      ],
    },
    {
      id: 'reference-genome',
      heading: 'Role as the sorghum reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'BTx623 was chosen as the genotype for the first sequenced and assembled sorghum genome, reported in 2009, making sorghum one of the early grass species with a reference genome. Because of this role, BTx623 has become a standard genetic and genomic reference and is used extensively in sorghum research, including as a parent of mapping populations.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Public research line, not a finished commercial variety',
          text: 'BTx623 is a public inbred maintainer line and research reference. It is used as a parent in hybrid breeding rather than grown as a stand-alone commercial variety.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'sorghum' }],
  glossaryTerms: ['cultivar', 'annual-crop', 'yield'],
  geographicScope:
    'Developed in Texas, United States, for warm-season grain sorghum; used internationally as a reference genotype and breeding parent.',
  climateContext:
    'Warm-season grain sorghum germplasm; adaptation and performance are environment-specific and evaluated in a breeding context.',
  limitations: [
    'BTx623 is a public inbred maintainer line and research reference, not a stand-alone commercial variety; its performance is not representative of the hybrids to which it contributes.',
    'Pedigree notation for the SC170 parent is written slightly differently across sources; the general conversion-program background is well documented.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Maintenance of BTx623 as a public sorghum inbred accession',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Sorghum conversion-program germplasm and the BTx623 reference genome',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'BTx623 (sorghum inbred line)',
    description:
      'BTx623 is a public grain sorghum inbred maintainer line (Texas A&M, 1977) derived from BTx3197 × SC170 and the source of the 2009 sorghum reference genome.',
    keywords: [
      'BTx623',
      'sorghum inbred',
      'maintainer line',
      'Sorghum bicolor',
      'reference genome',
    ],
  },
  structuredData: { article: true },
};
