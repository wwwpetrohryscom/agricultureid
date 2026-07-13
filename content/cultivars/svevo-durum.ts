import type { CultivarContent } from '@/types/content';

export const svevoDurum: CultivarContent = {
  id: 'svevo-durum',
  slug: 'svevo-durum',
  contentType: 'cultivar',
  title: 'Svevo',
  acceptedName: 'Svevo',
  category: 'Durum wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum turgidum subsp. durum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Italy',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  intendedUse: [
    'Durum wheat for semolina and pasta',
    'Durum reference-genome cultivar',
  ],
  qualityTraits: [
    'Durum (tetraploid) wheat grown for high-quality semolina and pasta',
  ],
  climateAdaptation:
    'A modern Italian durum adapted to Mediterranean durum-growing conditions, where durum is typically autumn-sown.',
  summary:
    'Svevo is a modern Italian durum wheat grown for pasta whose genome was sequenced as a durum reference, providing a framework for studying the domestication and improvement of tetraploid wheat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Svevo is a modern Italian durum wheat (Triticum turgidum subsp. durum) grown mainly for pasta production. Like other Mediterranean durums it is typically autumn-sown and yields hard, amber grain milled into semolina.',
    },
    {
      type: 'paragraph',
      text: 'Svevo is widely known in research because it was chosen for a high-quality durum-wheat reference genome, published in 2019, which has since been used as a framework for studying the genetic diversity, domestication history, and improvement of tetraploid wheat. An updated, higher-quality assembly of the Svevo genome has subsequently been released.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (durum, Triticum turgidum subsp. durum)' },
    { label: 'Type', value: 'Durum (tetraploid) wheat cultivar' },
    { label: 'Origin', value: 'Italy' },
    { label: 'End use', value: 'Semolina and pasta' },
    {
      label: 'Reference genome',
      value: 'Durum reference genome published in 2019',
    },
    {
      label: 'Registry status',
      value:
        'Historical (reference-genome cultivar; current listing not verified)',
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
              description:
                'Triticum turgidum subsp. durum (tetraploid durum wheat)',
            },
            { term: 'Origin', description: 'Italy' },
            { term: 'End use', description: 'Semolina for pasta' },
            {
              term: 'Sowing',
              description:
                'Typically autumn-sown in Mediterranean durum systems',
            },
          ],
        },
      ],
    },
    {
      id: 'role-as-a-reference',
      heading: 'Role as a reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'Svevo was selected for a durum-wheat reference genome sequence, published in 2019, that provided a high-quality framework for tetraploid wheat. Researchers have used it to examine signatures of domestication and breeding across the durum genome and to support genetic studies and breeding, and an improved assembly has since been produced.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page describes Svevo as a documented durum cultivar and reference genome. No agronomic-performance claims are made, and its current national or EU variety-list status is not asserted here.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'wheat' }],
  geographicScope:
    'Documented Italian durum wheat used internationally as a durum reference genome; agronomic adaptation is region- and season-specific.',
  climateContext:
    'A modern Italian durum adapted to Mediterranean conditions and used widely as a reference genome.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'No release year or breeder is asserted here because reliable details were not confirmed; Svevo is described mainly through its documented use as a durum reference genome.',
  ],
  sourceReferences: [
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Classification of Triticum turgidum subsp. durum and the Svevo reference-genome assembly',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Durum wheat improvement and germplasm context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Svevo (durum wheat cultivar)',
    description:
      'Svevo, a modern Italian durum wheat grown for pasta and chosen for a durum reference genome (2019) used to study tetraploid wheat improvement.',
    keywords: [
      'Svevo durum wheat',
      'durum wheat cultivar',
      'durum reference genome',
      'Italian durum',
    ],
  },
  structuredData: { article: true },
};
