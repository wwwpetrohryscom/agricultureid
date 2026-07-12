import type { CultivarContent } from '@/types/content';

export const chineseSpring: CultivarContent = {
  id: 'chinese-spring',
  slug: 'chinese-spring',
  contentType: 'cultivar',
  title: 'Chinese Spring',
  acceptedName: 'Chinese Spring',
  category: 'Wheat cultivar',
  parentCrop: { type: 'crop', slug: 'wheat' },
  botanicalTaxon: 'Triticum aestivum',
  cultivarType: 'Reference line',
  breedingType: 'Landrace selection',
  originCountry: 'China',
  originRegion: 'Sichuan (selected from a local white landrace)',
  registrationStatus: 'historical',
  registrationAsOf: '2026-07-12',
  registryReferences: [
    {
      registry: 'USDA GRIN — National Small Grains Collection',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Widely distributed genetic-stock/reference line conserved as germplasm; genebank presence reflects conservation and research use, not commercial registration.',
    },
  ],
  growthHabit: 'Spring',
  intendedUse: [
    'Genetic and cytogenetic reference line',
    'Reference genome for bread wheat',
  ],
  summary:
    'Chinese Spring is a landrace-derived bread wheat that became the standard genetic and cytogenetic reference line for wheat and was chosen for the first hexaploid bread wheat reference genome, released by the International Wheat Genome Sequencing Consortium in 2018.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chinese Spring is a bread wheat (Triticum aestivum) selected from a Chinese landrace and long used as the standard reference line in wheat genetics. Because an extensive set of cytogenetic stocks — including chromosome addition, deletion, and nulli-tetrasomic lines developed by Ernest Sears — was available in its background, it became the genotype of choice for dissecting the wheat genome.',
    },
    {
      type: 'paragraph',
      text: 'For the same reason, Chinese Spring was selected by the International Wheat Genome Sequencing Consortium for the first high-quality reference genome of hexaploid bread wheat, released in 2018. It is grown almost entirely for research rather than for commercial grain production.',
    },
  ],
  keyFacts: [
    { label: 'Crop', value: 'Wheat (bread wheat, Triticum aestivum)' },
    { label: 'Type', value: 'Landrace-derived reference line' },
    { label: 'Origin', value: 'China (selected from a local landrace)' },
    { label: 'Growth habit', value: 'Spring' },
    {
      label: 'Genetic stocks',
      value: 'Cytogenetic lines developed by Ernest Sears',
    },
    {
      label: 'Reference genome',
      value: 'First hexaploid wheat reference (IWGSC, 2018)',
    },
    {
      label: 'Registry status',
      value: 'Historical (reference line; conserved as germplasm)',
    },
  ],
  sections: [
    {
      id: 'origin-and-history',
      heading: 'Origin and history',
      body: [
        {
          type: 'paragraph',
          text: 'Chinese Spring was selected from a Chinese landrace and, unlike many modern cultivars, is relatively free of alien chromosome introgressions. This genetic background, together with its crossability with related grasses, made it especially useful for early genetic and cytogenetic study of wheat.',
        },
        {
          type: 'paragraph',
          text: 'Over the twentieth century, researchers — notably Ernest Sears — developed a large collection of chromosome-based genetic stocks in the Chinese Spring background. These stocks allowed the behavior of individual wheat chromosomes and chromosome arms to be studied and made Chinese Spring the de facto reference genotype for the crop.',
        },
      ],
    },
    {
      id: 'role-as-a-reference',
      heading: 'Role as a reference line and genome',
      body: [
        {
          type: 'paragraph',
          text: 'Because so many genetic tools existed in its background, Chinese Spring was chosen for the first reference genome sequence of hexaploid bread wheat. That reference, released by the International Wheat Genome Sequencing Consortium in 2018, underpins much subsequent wheat genetics and breeding research.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Chinese Spring is used primarily as a research reference. It is not presented here as a commercial production variety, and no agronomic-performance claims are made.',
        },
      ],
    },
  ],
  connections: [{ type: 'crop', slug: 'wheat' }],
  geographicScope:
    'Documented bread wheat reference line used globally in wheat genetics and genomics research rather than in commercial cultivation.',
  climateContext:
    'A spring bread wheat maintained as a research reference rather than for production in any particular climate.',
  limitations: [
    'Adaptation and trait notes are region- and season-specific, and performance varies by environment.',
    'Chinese Spring is a research reference line; details of its landrace origin are summarized, and no release year is asserted because it derives from a selected landrace rather than a formal breeding release.',
  ],
  sourceReferences: [
    {
      sourceId: 'ncbi-taxonomy',
      citedFor:
        'Classification of Triticum aestivum and the Chinese Spring reference-genome assembly',
    },
    {
      sourceId: 'usda-grin',
      citedFor:
        'Chinese Spring genetic-stock/germplasm accession and characterization',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chinese Spring (wheat reference-genome cultivar)',
    description:
      'Chinese Spring, the landrace-derived reference bread wheat behind the first hexaploid wheat genome (IWGSC, 2018) and wheat’s classic cytogenetic stocks.',
    keywords: [
      'Chinese Spring wheat',
      'wheat reference genome',
      'IWGSC',
      'wheat cytogenetic stocks',
    ],
  },
  structuredData: { article: true },
};
