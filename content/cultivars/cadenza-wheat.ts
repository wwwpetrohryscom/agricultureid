import type { CultivarContent } from '@/types/content';

export const cadenzaWheat: CultivarContent = {
  id: 'cadenza-wheat',
  slug: 'cadenza-wheat',
  contentType: 'cultivar',
  title: 'Cadenza',
  acceptedName: 'Cadenza',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United Kingdom',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Spring',
  intendedUse: [
    'Spring bread wheat',
    'Widely used reference genotype in wheat genetics and mutation (TILLING) research',
  ],
  qualityTraits: ['Spring bread wheat of breadmaking-quality type'],
  summary:
    'Cadenza is a United Kingdom spring bread wheat that has become one of the most widely used reference genotypes in wheat genetics, including a sequenced hexaploid TILLING mutant population developed for gene-function research.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cadenza is a spring bread wheat (Triticum aestivum) bred in the United Kingdom and grown as a breadmaking-quality spring variety. Beyond its use as a farm cultivar, it has become a standard reference genotype in wheat research.',
    },
    {
      type: 'paragraph',
      text: 'Cadenza is one of two cultivars — with the durum wheat Kronos — used to build large chemically mutagenized (EMS) TILLING populations whose exomes were sequenced to allow researchers to find mutations in specific wheat genes. This work was carried out as a collaboration among UK and US research institutes, and Cadenza is also among the hexaploid wheats with a research genome assembly.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Spring bread wheat cultivar' },
    { label: 'Origin', value: 'United Kingdom' },
    { label: 'Growth habit', value: 'Spring' },
    { label: 'Quality type', value: 'Breadmaking-quality spring wheat' },
    {
      label: 'Research use',
      value: 'Hexaploid TILLING mutant population; reference genotype',
    },
  ],
  sections: [
    {
      id: 'origin-and-classification',
      heading: 'Origin and classification',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Species',
              description: 'Triticum aestivum (hexaploid bread wheat)',
            },
            { term: 'Origin', description: 'United Kingdom' },
            { term: 'Growth habit', description: 'Spring' },
            {
              term: 'Quality type',
              description: 'Breadmaking-quality spring wheat',
            },
          ],
        },
      ],
    },
    {
      id: 'use-in-research',
      heading: 'Use in research',
      body: [
        {
          type: 'paragraph',
          text: 'Cadenza is widely used as a reference genotype in wheat functional genomics. A large TILLING population — a collection of lines carrying many chemically induced point mutations — was generated in Cadenza and had its exome sequenced, so that researchers can identify plants carrying mutations in a gene of interest without growing the entire population.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page describes Cadenza as a documented cultivar and research reference. No agronomic-performance claims are made, and its current position on any national variety list is not asserted here.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'wheat' }],
  geographicScope:
    'Documented United Kingdom spring bread wheat used internationally as a wheat genetics reference; agronomic adaptation is region- and season-specific.',
  climateContext:
    'A spring bread wheat of temperate United Kingdom origin, now widely used as a research genotype.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'No release year or breeder is asserted here because reliable details were not confirmed; Cadenza is described mainly through its documented use as a research reference genotype.',
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'United Kingdom wheat variety and agronomy context',
    },
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Classification of Triticum aestivum and Cadenza genome/sequence resources',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cadenza (spring wheat cultivar)',
    description:
      'Cadenza, a UK spring bread wheat now widely used as a wheat-genetics reference, including a sequenced hexaploid TILLING mutant population.',
    keywords: [
      'Cadenza wheat',
      'spring bread wheat',
      'wheat TILLING population',
      'wheat reference genotype',
    ],
  },
  structuredData: { article: true },
};
