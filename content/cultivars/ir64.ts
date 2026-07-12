import type { CultivarContent } from '@/types/content';

export const ir64: CultivarContent = {
  id: 'ir64',
  slug: 'ir64',
  contentType: 'cultivar',
  title: 'IR64',
  acceptedName: 'IR64',
  category: 'Rice cultivar',
  summary:
    'IR64 is a semi-dwarf indica rice released by the International Rice Research Institute (IRRI) in 1985. Valued for its grain quality and broad adaptation, it became one of the most widely grown and widely studied rice varieties in tropical Asia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'IR64 is a semi-dwarf indica rice variety developed at the International Rice Research Institute (IRRI) in the Philippines and released in 1985. It followed earlier IRRI lines such as IR8 and IR36 and was bred to combine good agronomic performance with the long, slender grain and cooking quality preferred in many markets.',
    },
    {
      type: 'paragraph',
      text: 'IR64 went on to be grown very widely across South and Southeast Asia and became a common benchmark, or check variety, in rice research and breeding. As with any variety, its behaviour in the field depends on local environment and crop management.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Indica' },
    { label: 'Type', value: 'Inbred, semi-dwarf variety' },
    {
      label: 'Developed by',
      value: 'International Rice Research Institute (IRRI)',
    },
    { label: 'Year released', value: '1985' },
    {
      label: 'Grain',
      value: 'Long, slender white grain with intermediate amylose content',
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
          text: 'IR64 was bred at IRRI, in Los Baños, Philippines, and released in 1985. It descends from IRRI’s pedigree breeding programme, which by that period was crossing improved semi-dwarf lines to combine plant type, grain quality, and pest and disease characteristics in a single variety. Like other IRRI releases of its era, IR64 carries the short, fertilizer-responsive plant type first popularised by IR8.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Institution',
              description:
                'International Rice Research Institute (IRRI), Los Baños, Philippines',
            },
            { term: 'Release year', description: '1985' },
            { term: 'Varietal group', description: 'Indica' },
            {
              term: 'Plant type',
              description: 'Semi-dwarf, fertilizer-responsive',
            },
          ],
        },
      ],
    },
    {
      id: 'grain-quality-and-adoption',
      heading: 'Grain quality and adoption',
      body: [
        {
          type: 'paragraph',
          text: 'IR64 is particularly associated with grain quality: it produces long, slender grain with intermediate amylose content, a combination linked to the cooking and eating characteristics preferred across much of tropical Asia. This quality, together with broad adaptation, contributed to its very wide cultivation and to its frequent use as a quality and performance benchmark in rice breeding programmes.',
        },
        {
          type: 'paragraph',
          text: 'Because it was so widely grown and studied, IR64 also became a common reference variety in rice research, including physiology, quality, and breeding studies. It appears in the parentage of many later varieties developed at IRRI and by national programmes.',
        },
      ],
    },
    {
      id: 'adaptation-and-use',
      heading: 'Adaptation and use',
      body: [
        {
          type: 'paragraph',
          text: 'IR64 was developed for irrigated and favourable rainfed lowland conditions in the tropics. It is grown as a staple food grain. Its suitability for any specific location depends on the local growing season, water regime, and prevailing pests and diseases, which vary widely across rice-growing regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Variety recommendations for a given area are issued by national and local agricultural authorities and change over time. This page describes IR64’s documented characteristics rather than recommending it for a particular location.',
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
                'Historical — a widely grown released variety; current registry standing is not asserted here',
            },
            {
              term: 'Documented by',
              description:
                'IRRI variety history and CGIAR rice-research literature',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (indica group)',
  cultivarType: 'Inbred line (indica)',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Philippines',
  originRegion: 'Los Baños, Laguna (IRRI)',
  yearReleased: '1985',
  breederOrInstitution: 'International Rice Research Institute (IRRI)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'International Rice Research Institute (IRRI)',
      sourceId: 'irri',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'IR64 is documented in IRRI’s variety history as a widely grown semi-dwarf indica released in 1985. Specific record identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Medium-duration',
  growthHabit: 'Semi-dwarf, fertilizer-responsive',
  intendedUse: ['Staple food grain'],
  climateAdaptation: 'Irrigated and favourable rainfed lowland tropics',
  qualityTraits: [
    'Long, slender white grain',
    'Intermediate amylose content associated with widely preferred cooking quality',
    'Frequently used as a grain-quality and performance benchmark in indica rice breeding',
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'Developed at IRRI in the Philippines and grown very widely across South and Southeast Asia; local suitability is region- and season-specific.',
  climateContext:
    'Bred for warm irrigated and favourable rainfed lowland rice systems in the tropics.',
  limitations: [
    'Performance is environment- and management-specific and cannot be reduced to a single figure.',
    'Variety recommendations are set by national and local authorities and change over time; this page is descriptive, not a recommendation.',
    'The current registry standing of IR64 is not asserted here; it is documented primarily through IRRI’s variety history.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'IR64 breeding history, release (1985), and grain-quality characterization',
    },
    { sourceId: 'cgiar', citedFor: 'Rice-improvement context within CGIAR' },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'IR64 (rice cultivar)',
    description:
      'IR64, an IRRI semi-dwarf indica rice released in 1985: breeding history, long-slender grain quality, benchmark-variety adoption, and status.',
    keywords: [
      'IR64',
      'IRRI',
      'indica rice',
      'semi-dwarf rice',
      'rice grain quality',
      'Oryza sativa',
    ],
  },
  structuredData: { article: true },
};
