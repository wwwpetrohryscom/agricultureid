import type { CultivarContent } from '@/types/content';

export const goldenPromise: CultivarContent = {
  id: 'golden-promise',
  slug: 'golden-promise',
  contentType: 'cultivar',
  title: 'Golden Promise',
  acceptedName: 'Golden Promise',
  category: 'Barley cultivar',
  parentCrop: { type: 'crop', slug: 'barley' },
  botanicalTaxon: 'Hordeum vulgare',
  cultivarType: 'Cultivar',
  breedingType:
    'Induced mutation (gamma-ray mutagenesis of the cultivar Maythorpe)',
  originCountry: 'United Kingdom',
  breederOrInstitution: 'Miln Marsters (breeding company)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Spring',
  intendedUse: [
    'Malting barley (brewing and distilling)',
    'Widely used model genotype in barley research and transformation',
  ],
  qualityTraits: [
    'Two-row spring malting barley',
    'Short, stiff straw and small, even grain, long valued for malt production, including for distilling',
  ],
  climateAdaptation:
    'A spring barley historically grown in Scotland and northern Britain, and long associated with malting for the Scotch whisky industry.',
  summary:
    'Golden Promise is a semi-dwarf two-row spring malting barley derived by gamma-ray mutation of the cultivar Maythorpe, historically important in Scottish malting and whisky and now a widely used model genotype in barley research and transformation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Golden Promise is a two-row spring malting barley (Hordeum vulgare) that originated as a semi-dwarf mutant. Seed of the older cultivar Maythorpe was treated with gamma radiation, and Golden Promise was isolated from the resulting mutants for its short, stiff straw and malting suitability. It was released in the late 1960s and first recommended for growing in Scotland in 1968.',
    },
    {
      type: 'paragraph',
      text: 'The short stature is largely due to an induced dwarfing mutation (the ari-e.GP allele), and the small, even grain made the variety well suited to malt production, including for distilling. Golden Promise became closely associated with Scottish malting and the Scotch whisky industry, and it is also widely used in the laboratory as a barley "transformation reference" cultivar.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Barley (Hordeum vulgare)' },
    { label: 'Type', value: 'Two-row spring malting barley cultivar' },
    { label: 'Origin', value: 'United Kingdom' },
    {
      label: 'Breeding method',
      value: 'Gamma-ray mutation of the cultivar Maythorpe',
    },
    { label: 'Growth habit', value: 'Spring' },
    {
      label: 'Notable use',
      value: 'Scottish malting and whisky; barley transformation model',
    },
  ],
  sections: [
    {
      id: 'origin-and-mutation-breeding',
      heading: 'Origin and mutation breeding',
      body: [
        {
          type: 'paragraph',
          text: 'Golden Promise is a classic example of mutation breeding. Seed of the spring barley Maythorpe was irradiated with gamma rays, and a large number of resulting lines were screened for improved stature and agronomic characteristics. Golden Promise was selected for its short, stiff straw — the result of an induced dwarfing mutation — and its malting suitability.',
        },
        {
          type: 'paragraph',
          text: 'Released in the late 1960s and first recommended in Scotland in 1968, it went on to be grown for several decades and remained associated with distilling malt long after newer varieties appeared.',
        },
      ],
    },
    {
      id: 'use-in-research',
      heading: 'Use in research',
      body: [
        {
          type: 'paragraph',
          text: 'Because Golden Promise is comparatively amenable to genetic transformation, it has become a standard model genotype in barley research and a "transformation reference" cultivar, with a genome assembly produced to support that work.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The gamma-ray mutation origin and dwarfing mutation are described here as documented history and genetics. This page does not make comparative yield or disease-resistance claims.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'barley' }],
  geographicScope:
    'Documented United Kingdom two-row spring malting barley, historically important in Scotland and now widely used as a research model; adaptation and performance are region- and season-specific.',
  climateContext:
    'A spring malting barley historically grown in Scotland and northern Britain.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Reported release dates vary in the literature (generally the late 1960s), so no single release year is asserted here; the current commercial registration status of the cultivar is likewise not asserted.',
  ],
  sourceReferences: [
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Classification of Hordeum vulgare and Golden Promise genome resources',
    },
    {
      sourceId: 'usda-grin',
      citedFor: 'Barley germplasm accession and characterization',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Golden Promise (malting barley cultivar)',
    description:
      'Golden Promise, a two-row spring malting barley created by gamma-ray mutation of Maythorpe, key to Scottish whisky malting and a barley transformation model.',
    keywords: [
      'Golden Promise barley',
      'mutation breeding barley',
      'malting barley',
      'barley transformation model',
    ],
  },
  structuredData: { article: true },
};
