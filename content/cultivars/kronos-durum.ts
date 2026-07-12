import type { CultivarContent } from '@/types/content';

export const kronosDurum: CultivarContent = {
  id: 'kronos-durum',
  slug: 'kronos-durum',
  contentType: 'cultivar',
  title: 'Kronos',
  acceptedName: 'Kronos',
  category: 'Durum wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum turgidum subsp. durum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United States',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  growthHabit: 'Spring',
  intendedUse: [
    'Durum wheat for semolina and pasta',
    'Widely used tetraploid reference genotype in wheat genetics (TILLING) research',
  ],
  qualityTraits: [
    'Durum (tetraploid) wheat producing hard, amber grain for semolina and pasta',
  ],
  climateAdaptation:
    'Grown as irrigated "Desert Durum" in the hot, arid conditions of the southwestern United States.',
  summary:
    'Kronos is a United States durum wheat, grown as irrigated Desert Durum, that has become the standard tetraploid reference genotype in wheat genetics through a sequenced TILLING mutant population used to study gene function.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kronos is a durum wheat (Triticum turgidum subsp. durum) grown in the United States, where durum of this type is produced as irrigated "Desert Durum" in the hot, arid southwest. Like other durum wheats it yields hard, amber grain used to make semolina for pasta.',
    },
    {
      type: 'paragraph',
      text: 'Kronos is best known in research as the tetraploid counterpart to the bread wheat Cadenza: a large chemically mutagenized (EMS) TILLING population was created in Kronos and had its exome sequenced, giving scientists a way to find mutations in individual durum-wheat genes. This resource was developed by a collaboration among US and UK research institutes.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (durum, Triticum turgidum subsp. durum)' },
    { label: 'Type', value: 'Durum (tetraploid) wheat cultivar' },
    { label: 'Origin', value: 'United States' },
    { label: 'Growth habit', value: 'Spring' },
    {
      label: 'Adaptation',
      value: 'Irrigated "Desert Durum" (hot, arid conditions)',
    },
    {
      label: 'Research use',
      value: 'Tetraploid TILLING mutant population; reference genotype',
    },
    { label: 'End use', value: 'Semolina and pasta' },
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
              description:
                'Triticum turgidum subsp. durum (tetraploid durum wheat)',
            },
            {
              term: 'Origin',
              description: 'United States (grown as irrigated Desert Durum)',
            },
            { term: 'Growth habit', description: 'Spring' },
            { term: 'End use', description: 'Semolina for pasta' },
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
          text: 'Kronos is widely used as a durum reference genotype in wheat functional genomics. A TILLING population — a collection of lines each carrying many chemically induced point mutations — was generated in Kronos and had its exome sequenced, allowing researchers to identify lines mutated in a chosen gene. Together with the hexaploid cultivar Cadenza, Kronos underpins a large part of publicly available wheat mutant resources.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page describes Kronos as a documented durum cultivar and research reference. No agronomic-performance claims are made, and its detailed commercial breeding history and registry status are not asserted here.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'climate', slug: 'drought' },
  ],
  geographicScope:
    'Documented United States durum wheat used internationally as a tetraploid wheat genetics reference; agronomic adaptation is region- and season-specific.',
  climateContext:
    'A durum wheat grown as irrigated Desert Durum in hot, arid regions and used widely as a research genotype.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'No release year or breeder is asserted here because reliable details were not confirmed; Kronos is described mainly through its documented use as a durum research reference genotype.',
  ],
  sourceReferences: [
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Classification of Triticum turgidum subsp. durum and Kronos exome/sequence resources',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'United States durum wheat research context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kronos (durum wheat cultivar)',
    description:
      'Kronos, a US durum wheat grown as Desert Durum and now the standard tetraploid reference genotype in wheat genetics via a sequenced TILLING population.',
    keywords: [
      'Kronos durum wheat',
      'durum wheat cultivar',
      'wheat TILLING population',
      'Desert Durum',
    ],
  },
  structuredData: { article: true },
};
