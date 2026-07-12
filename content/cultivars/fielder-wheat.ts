import type { CultivarContent } from '@/types/content';

export const fielderWheat: CultivarContent = {
  id: 'fielder-wheat',
  slug: 'fielder-wheat',
  contentType: 'cultivar',
  title: 'Fielder',
  acceptedName: 'Fielder',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Cultivar',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'United States',
  yearReleased: '1974',
  breederOrInstitution: 'University of Idaho',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Soft white spring wheat conserved as germplasm; genebank presence reflects conservation and research use rather than current commercial registration.',
    },
  ],
  growthHabit: 'Spring',
  intendedUse: [
    'Soft white spring wheat (milling)',
    'Widely used model genotype for wheat tissue culture and genetic transformation',
  ],
  qualityTraits: [
    'Soft white spring wheat (soft, low-protein grain type suited to pastry and general soft-wheat products)',
    'Semi-dwarf, stiff-strawed, awned morphology',
  ],
  summary:
    'Fielder is a soft white spring bread wheat released by the University of Idaho in 1974 that is now used chiefly as a model genotype in wheat tissue culture and genetic transformation because it is unusually amenable to regeneration and transformation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fielder is a soft white spring bread wheat (Triticum aestivum) released by the University of Idaho in 1974. It has a semi-dwarf, stiff-strawed, awned form and the soft, low-protein grain typical of soft white wheats used for pastry and general soft-wheat products.',
    },
    {
      type: 'paragraph',
      text: 'Fielder is best known today as a laboratory workhorse: it is one of the wheat genotypes most amenable to tissue culture and Agrobacterium-mediated transformation, and it has been widely adopted as a model line in wheat functional-genomics and biotechnology research, with a dedicated genome assembly produced to support that work.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Soft white spring wheat cultivar' },
    { label: 'Released by', value: 'University of Idaho' },
    { label: 'Year released', value: '1974' },
    { label: 'Growth habit', value: 'Spring' },
    {
      label: 'Research use',
      value: 'Model genotype for wheat transformation and tissue culture',
    },
    {
      label: 'Registry status',
      value: 'Historical (older cultivar; conserved as germplasm)',
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
            { term: 'Market class', description: 'Soft white spring wheat' },
            { term: 'Released by', description: 'University of Idaho, 1974' },
            { term: 'Growth habit', description: 'Spring' },
            {
              term: 'Morphology',
              description: 'Semi-dwarf, stiff-strawed, white-chaffed, awned',
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
          text: 'Fielder is notable for how readily it regenerates in tissue culture and accepts introduced DNA, which makes it a preferred genotype for wheat genetic transformation. Because transformation and regeneration are difficult in many wheats, model lines such as Fielder are used to develop and test methods and to generate research materials.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This page describes Fielder as a documented cultivar and research model. It does not make agronomic-performance claims and does not address the regulatory status of any transformed material derived from it.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'wheat' }],
  geographicScope:
    'Documented United States soft white spring wheat cultivar, used internationally as a research and transformation model; agronomic adaptation is region- and season-specific.',
  climateContext:
    'A spring soft white wheat now used mainly as a laboratory model rather than for large-scale production.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Fielder is an older cultivar used mainly for research; its current commercial registration and availability are not asserted here.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor:
        'Soft white spring wheat germplasm accession and characterization',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Use of Fielder as a wheat tissue-culture and transformation genotype',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fielder (soft white spring wheat cultivar)',
    description:
      'Fielder, a soft white spring bread wheat released by the University of Idaho in 1974 and now a leading model genotype for wheat transformation.',
    keywords: [
      'Fielder wheat',
      'soft white spring wheat',
      'wheat transformation',
      'wheat model genotype',
    ],
  },
  structuredData: { article: true },
};
