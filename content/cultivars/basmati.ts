import type { CultivarContent } from '@/types/content';

export const basmati: CultivarContent = {
  id: 'basmati',
  slug: 'basmati',
  contentType: 'cultivar',
  title: 'Basmati',
  alternativeNames: ['Basmati rice'],
  category: 'Aromatic rice (landrace group)',
  summary:
    'Basmati is not a single cultivar but a group of aromatic, long-grain rices traditionally grown in the Indian subcontinent. The name is protected as a Geographical Indication in India and Pakistan for basmati meeting defined criteria, and the group includes both traditional landraces and modern improved lines.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Basmati refers to a group of aromatic, long-grain rices traditionally cultivated in northern India and Pakistan, in and around the Indo-Gangetic Plain. It is modelled here as a landrace and varietal group rather than a single cultivar: many distinct varieties are recognised as basmati, from long-established traditional landraces to modern improved and evolved lines.',
    },
    {
      type: 'paragraph',
      text: 'Basmati is defined above all by grain and cooking characteristics — long, slender grains that elongate markedly on cooking, a distinctive aroma, and a non-sticky, fluffy texture. Because "basmati" is both a market category and a protected name, its precise definition (which varieties and growing regions qualify) is set by national authorities rather than by a single botanical description.',
    },
  ],
  keyFacts: [
    { label: 'Parent species', value: 'Rice (Oryza sativa)' },
    { label: 'Group', value: 'Aromatic rice (landrace and varietal group)' },
    {
      label: 'Not a single cultivar',
      value: 'A group of many aromatic long-grain varieties',
    },
    {
      label: 'Traditional region',
      value: 'Indo-Gangetic Plain (northern India and Pakistan)',
    },
    {
      label: 'Signature traits',
      value: 'Long grain, marked cooking elongation, characteristic aroma',
    },
    {
      label: 'Name protection',
      value:
        'Geographical Indication (GI) protection in India and Pakistan for qualifying basmati',
    },
    { label: 'Primary use', value: 'Premium aromatic long-grain rice' },
  ],
  sections: [
    {
      id: 'a-group-not-a-single-cultivar',
      heading: 'A group, not a single cultivar',
      body: [
        {
          type: 'paragraph',
          text: 'It is important to understand basmati as a group rather than one variety. Traditional basmati includes landraces and pure-line selections such as Basmati 370 and Taraori (Karnal Local) basmati, which are typically tall, photoperiod-sensitive, and prone to lodging. Modern breeding has added improved basmati lines — for example the Pusa Basmati series developed in India — that combine basmati grain and aroma characteristics with shorter stature and other agronomic improvements.',
        },
        {
          type: 'paragraph',
          text: 'Because the group spans very different plant types, a single set of agronomic figures cannot represent basmati as a whole. Traits such as plant height, maturity, and photoperiod sensitivity vary substantially between traditional landraces and improved lines.',
        },
      ],
    },
    {
      id: 'grain-and-cooking-characteristics',
      heading: 'Grain and cooking characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'The defining features of basmati are sensory. The grains are long and slender and elongate markedly during cooking, and the rice has a distinctive aroma associated with the compound 2-acetyl-1-pyrroline, which is also found in other aromatic rices. When cooked, basmati is characteristically non-sticky and fluffy, with grains that remain separate — qualities prized in South Asian, Middle Eastern, and international cuisines.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Aroma and cooking quality in basmati are strongly influenced by variety and by the specific region and environment in which the rice is grown, which is part of the rationale for geographic protection of the name.',
        },
      ],
    },
    {
      id: 'geographical-indication-protection',
      heading: 'Geographical Indication protection',
      body: [
        {
          type: 'paragraph',
          text: 'The name "basmati" is protected as a Geographical Indication (GI) in India and Pakistan, where authorities define the varieties and growing areas that may be marketed as basmati. A Geographical Indication protects the name and its link to origin; it is a different legal instrument from plant-variety protection, which applies to individual named varieties. Basmati and its protection have also been the subject of trade and legal disputes internationally.',
        },
        {
          type: 'paragraph',
          text: 'Because the qualifying criteria are set by national schemes and can change, AgricultureID does not reproduce a definitive list of protected basmati varieties or growing regions here; these should be taken from the relevant national authorities.',
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
              description: 'Oryza sativa (aromatic group)',
            },
            {
              term: 'Entity type',
              description:
                'Landrace and varietal group (aromatic long-grain), not a single cultivar',
            },
            {
              term: 'Registry status',
              description:
                'Historical — a traditional aromatic rice group; the name (not a single cultivar) carries Geographical Indication protection in India and Pakistan',
            },
          ],
        },
      ],
    },
  ],
  parentCrop: { type: 'crop', slug: 'rice' },
  botanicalTaxon: 'Oryza sativa (aromatic group)',
  cultivarType: 'Landrace and varietal group (aromatic long-grain)',
  breedingType:
    'Traditional landrace and pure-line selection, with modern improved basmati lines',
  originCountry: 'India and Pakistan',
  originRegion:
    'Indo-Gangetic Plain / Himalayan foothills of the Indian subcontinent',
  registrationStatus: 'historical',
  protectedStatus:
    'The name "basmati" carries Geographical Indication (GI) protection in India and Pakistan for qualifying basmati; GI protects the name and its link to origin and is distinct from plant-variety protection of individual cultivars.',
  growthHabit:
    'Variable across the group: traditional basmati landraces are tall and lodging-prone; improved basmati lines are shorter-statured',
  intendedUse: [
    'Premium aromatic long-grain rice (staple and specialty food grain)',
  ],
  climateAdaptation:
    'Traditionally grown on the Indo-Gangetic Plain under irrigated and rainfed lowland conditions; aroma and quality are strongly region- and environment-dependent',
  qualityTraits: [
    'Long, slender grain that elongates markedly on cooking',
    'Characteristic aroma associated with the compound 2-acetyl-1-pyrroline',
    'Non-sticky, fluffy cooked texture with grains that remain separate',
  ],
  geographicAvailability:
    'Cultivated mainly in northern India and Pakistan (Indo-Gangetic Plain) and traded internationally as a premium rice.',
  connections: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'climate', slug: 'monsoon' },
  ],
  geographicScope:
    'An aromatic rice group traditionally grown in the Indo-Gangetic Plain of northern India and Pakistan; treated here as a group of varieties rather than a single cultivar, and traded internationally as premium rice.',
  climateContext:
    'Traditionally grown in the warm plains and foothills of the Indian subcontinent under lowland conditions; aroma expression is strongly region- and environment-dependent.',
  limitations: [
    'Basmati is a group of aromatic long-grain varieties, not a single cultivar; a single release year, breeder, plant type, or set of agronomic figures cannot represent the whole group.',
    'The definition of qualifying basmati (permitted varieties and growing regions) is set by national Geographical Indication schemes, can change over time, and has been the subject of international disputes; authoritative criteria should be taken from national authorities.',
    'Geographical Indication protection applies to the name and its origin, and is distinct from plant-variety protection of individual named basmati cultivars.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'Aromatic rice classification and grain-quality characterization',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Traditional and improved basmati varieties (e.g. Pusa Basmati lines) and Indian context',
    },
    { sourceId: 'gbif', citedFor: 'Species classification (Oryza sativa)' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Basmati (aromatic rice group)',
    description:
      'Basmati, a group of aromatic long-grain rices from the Indian subcontinent, not a single cultivar: traditional and improved varieties, and GI protection.',
    keywords: [
      'basmati',
      'aromatic rice',
      'long-grain rice',
      'Geographical Indication',
      'Pusa Basmati',
      'Oryza sativa',
    ],
  },
  structuredData: { article: true },
};
