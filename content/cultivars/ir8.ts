import type { CultivarContent } from '@/types/content';

export const ir8: CultivarContent = {
  id: 'ir8',
  slug: 'ir8',
  contentType: 'cultivar',
  title: 'IR8',
  acceptedName: 'IR8',
  alternativeNames: ['Miracle rice'],
  category: 'Rice cultivar',
  summary:
    'IR8 is a semi-dwarf indica rice released by the International Rice Research Institute (IRRI) in 1966. As the first widely grown IRRI variety, it became a symbol of the Green Revolution in rice and is best known today as a landmark in rice breeding history.',
  introduction: [
    {
      type: 'paragraph',
      text: 'IR8 is a semi-dwarf indica rice variety developed at the International Rice Research Institute (IRRI) in the Philippines and released in 1966. It was produced by crossing the tall, vigorous Indonesian variety Peta with the semi-dwarf Chinese/Taiwanese variety Dee-geo-woo-gen, combining short stature with responsiveness to fertilizer.',
    },
    {
      type: 'paragraph',
      text: 'Widely referred to at the time as "miracle rice", IR8 is remembered primarily for its historical role: it demonstrated that short-strawed, fertilizer-responsive rice could sharply raise productivity relative to traditional tall varieties, and it helped launch the changes in Asian rice farming often described as the Green Revolution. Its agronomic performance, like that of any variety, depended heavily on local conditions and management.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Varietal group', value: 'Indica' },
    { label: 'Type', value: 'Inbred, semi-dwarf variety' },
    { label: 'Parentage', value: 'Peta × Dee-geo-woo-gen (DGWG)' },
    {
      label: 'Developed by',
      value: 'International Rice Research Institute (IRRI)',
    },
    { label: 'Year released', value: '1966' },
    {
      label: 'Historical significance',
      value:
        'First widely grown IRRI semi-dwarf rice; associated with the Green Revolution',
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
          text: 'IR8 was bred at IRRI, in Los Baños, Philippines, during the institute’s first years of operation. It came from a cross between Peta, a tall Indonesian variety valued for vigour, and Dee-geo-woo-gen, a semi-dwarf variety from which IR8 inherited its short, stiff straw. The semi-dwarf plant type is central to the IR8 story because shorter plants are less prone to lodging (falling over) when carrying heavy grain or when nitrogen fertilizer is applied.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Parentage',
              description:
                'Peta (Indonesia) × Dee-geo-woo-gen (semi-dwarf source)',
            },
            {
              term: 'Institution',
              description:
                'International Rice Research Institute (IRRI), Los Baños, Philippines',
            },
            { term: 'Release year', description: '1966' },
            {
              term: 'Plant type',
              description: 'Semi-dwarf, stiff-strawed, erect, high-tillering',
            },
          ],
        },
      ],
    },
    {
      id: 'plant-type-and-significance',
      heading: 'Plant type and historical significance',
      body: [
        {
          type: 'paragraph',
          text: 'IR8 combined several traits that were unusual together in rice at the time: short stature, responsiveness to nitrogen fertilizer, resistance to lodging, and relative insensitivity to day length, which broadened the range of planting dates and locations where it could be grown. Under irrigated conditions with adequate fertilizer, these traits allowed markedly higher productivity than the traditional tall varieties it was compared with.',
        },
        {
          type: 'paragraph',
          text: 'Because of this, IR8 is widely cited as a turning point in the history of rice production in Asia and as an emblem of the Green Revolution. AgricultureID describes this significance as history: actual performance is environment- and management-specific, and no single yield figure represents the variety across the many conditions in which it was grown.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Historical accounts of IR8’s productivity reflect specific trials and farming conditions. They should not be read as a yield guarantee for any particular field or season.',
        },
      ],
    },
    {
      id: 'grain-quality-and-legacy',
      heading: 'Grain quality and legacy',
      body: [
        {
          type: 'paragraph',
          text: 'Early IR8 was widely noted for relatively coarse grain and cooking and eating quality that many consumers considered inferior to preferred traditional and later improved varieties. Subsequent IRRI lines, such as IR36 and IR64, were bred to improve grain quality, maturity, and pest and disease characteristics while retaining the semi-dwarf plant type pioneered by IR8.',
        },
        {
          type: 'paragraph',
          text: 'IR8 itself is no longer a leading commercial variety, but it remains historically important and appears in the pedigrees and breeding history of many later rice varieties. It is best understood today as a reference point in rice-breeding history rather than as a current recommendation.',
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
            {
              term: 'Cultivar type',
              description: 'Inbred line (semi-dwarf indica)',
            },
            {
              term: 'Registry status',
              description:
                'Historical — a landmark released variety; current registry standing is not asserted here',
            },
            {
              term: 'Documented by',
              description:
                'IRRI variety history and CGIAR Green Revolution accounts',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (indica group)',
  cultivarType: 'Inbred line (semi-dwarf indica)',
  breedingType: 'Cross-breeding (pedigree selection)',
  originCountry: 'Philippines',
  originRegion: 'Los Baños, Laguna (IRRI)',
  yearReleased: '1966',
  breederOrInstitution: 'International Rice Research Institute (IRRI)',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'International Rice Research Institute (IRRI)',
      sourceId: 'irri',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'IR8 is documented in IRRI’s variety history as its first widely released semi-dwarf variety (1966). Specific record identifiers are not reproduced here.',
    },
  ],
  maturityClass: 'Medium-duration',
  growthHabit: 'Semi-dwarf, stiff-strawed, erect, high-tillering',
  intendedUse: ['Staple food grain'],
  climateAdaptation: 'Bred for irrigated tropical lowland conditions',
  qualityTraits: [
    'Bold, relatively coarse indica grain',
    'Early IR8 was widely noted for cooking and eating quality considered inferior to preferred varieties of the time',
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'climate', slug: 'temperature' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'Developed at IRRI in the Philippines and grown across tropical Asia during the Green Revolution period; discussed here primarily as a historical variety rather than a current regional recommendation.',
  climateContext:
    'Bred for warm, irrigated tropical lowland rice systems; photoperiod-insensitive habit broadened its planting range.',
  limitations: [
    'Performance is environment- and management-specific; historical accounts of IR8’s productivity reflect particular trials and conditions and are not a yield guarantee.',
    'No single yield figure is stated here because none represents the variety across the range of conditions in which it was grown.',
    'IR8 is no longer a leading commercial variety; its current registry standing is not asserted and it is presented as a historical reference point.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'IR8 breeding history, parentage, and release (1966)',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Green Revolution context and semi-dwarf rice breeding',
    },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'IR8 (rice cultivar)',
    description:
      "IR8, the semi-dwarf 'miracle rice' released by IRRI in 1966: parentage, plant type, Green Revolution significance, and historical status.",
    keywords: [
      'IR8',
      'miracle rice',
      'IRRI',
      'semi-dwarf rice',
      'Green Revolution',
      'Oryza sativa indica',
    ],
  },
  structuredData: { article: true },
};
