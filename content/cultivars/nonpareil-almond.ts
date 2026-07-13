import type { CultivarContent } from '@/types/content';

export const nonpareilAlmond: CultivarContent = {
  id: 'nonpareil-almond',
  slug: 'nonpareil-almond',
  contentType: 'cultivar',
  title: 'Nonpareil',
  acceptedName: 'Nonpareil',
  category: 'Almond cultivar',
  parentCrop: { type: 'crop', slug: 'almond' },
  botanicalTaxon: 'Prunus dulcis',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Clonal selection',
  originCountry: 'United States',
  originRegion: 'California',
  registrationStatus: 'historical',
  registryReferences: [
    {
      registry: 'USDA GRIN (National Plant Germplasm System)',
      sourceId: 'usda-grin',
      jurisdiction: 'United States',
      asOf: '2026-07-12',
      note: 'Nonpareil is documented as an almond (Prunus dulcis) cultivar within the U.S. germplasm system; specific accession identifiers are not linked here.',
    },
  ],
  growthHabit: 'Deciduous tree, clonally propagated by grafting',
  intendedUse: [
    'Snack and confectionery kernels',
    'Blanching and ingredient/manufacturing use',
    'Industry reference (benchmark) grade',
  ],
  climateAdaptation:
    'Mediterranean-type climates with winter chilling and a dry harvest period; blooms relatively early, leaving flowers vulnerable to spring frost.',
  soilAdaptation:
    'Deep, well-drained loams and sandy loams; intolerant of waterlogging.',
  qualityTraits: [
    'Light-colored, smooth, flat kernel that blanches well',
    'Soft ("paper") shell that hulls easily',
    'Kernel grade used as the industry benchmark for California almonds',
  ],
  summary:
    'Nonpareil is the dominant almond cultivar of California and the reference grade against which other California kernels are described — a soft-shelled, self-incompatible clone with a light, smooth kernel.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nonpareil is the most widely planted almond cultivar in California, the world’s largest almond-producing region, and it functions as the industry’s reference cultivar. It is a clonally propagated selection grown as a grafted deciduous tree and, like most almonds, is self-incompatible, so it must be interplanted with a compatible pollinizer to set a crop.',
    },
    {
      type: 'paragraph',
      text: 'The cultivar is valued for a light-colored, smooth, flat kernel in a soft ("paper") shell that hulls and blanches readily. Its kernel grade is used as the benchmark against which many other California kernels are graded and described. Nonpareil was introduced in California in the late 19th century, an origin commonly attributed to the nurseryman A. T. Hatch.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Almond (Prunus dulcis)' },
    { label: 'Botanical taxon', value: 'Prunus dulcis' },
    { label: 'Type', value: 'Cultivar (clonal, grafted)' },
    { label: 'Origin', value: 'California, United States (late 1800s)' },
    {
      label: 'Pollination',
      value: 'Self-incompatible; requires a compatible pollinizer cultivar',
    },
    { label: 'Shell', value: 'Soft ("paper") shell' },
    { label: 'Kernel', value: 'Light, smooth, flat; blanches well' },
    {
      label: 'Registry status',
      value:
        'Historical (heritage California cultivar; current status not verified)',
    },
  ],
  sections: [
    {
      id: 'identity-and-origin',
      heading: 'Identity and origin',
      body: [
        {
          type: 'paragraph',
          text: 'Nonpareil is a single, clonally maintained almond cultivar propagated by grafting onto selected rootstocks, so trees sold under the name are genetically the same selection. It has long been the leading cultivar in California and anchors much of the state’s planted area, both as a crop in its own right and as the standard other cultivars are compared to.',
        },
        {
          type: 'paragraph',
          text: 'The cultivar dates to the late 19th century in California and is commonly attributed to the nurseryman A. T. Hatch. Precise introduction dates vary between horticultural histories, so this record treats Nonpareil as a well-documented heritage cultivar rather than asserting an exact release year or a current variety-protection status.',
        },
      ],
    },
    {
      id: 'kernel-and-shell',
      heading: 'Kernel and shell characteristics',
      body: [
        {
          type: 'paragraph',
          text: 'Nonpareil produces a flat, smooth, light-colored kernel that blanches cleanly, which underlies its widespread use in confectionery, snacking, and manufactured products. The soft ("paper") shell hulls easily but seals less completely than the hard shells of some traditional cultivars — a physical characteristic of the type rather than a statement about pest or disease outcomes.',
        },
        {
          type: 'list',
          items: [
            'Kernel: flat, smooth, light-skinned, blanches well',
            'Shell: soft ("paper"), easily hulled',
            'Grading role: used as the benchmark kernel grade for California almonds',
          ],
        },
      ],
    },
    {
      id: 'pollination-and-orchard-role',
      heading: 'Pollination and orchard role',
      body: [
        {
          type: 'paragraph',
          text: 'Because Nonpareil is self-incompatible, orchards interplant it with one or more compatible pollinizer cultivars whose bloom overlaps its own, and they rely on insect pollinators (commonly managed honey bees) during bloom. Nonpareil blooms in mid-season and is typically among the earlier major California cultivars to reach harvest.',
        },
      ],
    },
    {
      id: 'adaptation',
      heading: 'Climate and soil adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Nonpareil is grown in Mediterranean-type climates that provide winter chilling for normal flowering and a dry period around harvest. Its relatively early bloom leaves flowers and young fruit exposed to spring frost, one of the main climate risks in its production. It performs best on deep, well-drained loams and sandy loams and is intolerant of waterlogging.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'cultivar', slug: 'carmel-almond' },
    { type: 'cultivar', slug: 'marcona-almond' },
  ],
  geographicScope:
    'Documented primarily in California, United States. Bloom timing, chilling needs, and kernel quality are specific to Mediterranean-type climates and orchard management.',
  climateContext:
    'Mediterranean-type tree-crop cultivar requiring winter chill; early bloom makes flowers frost-sensitive.',
  limitations: [
    'Nonpareil is self-incompatible and cannot be planted as a solid block without compatible pollinizer cultivars with overlapping bloom.',
    'Performance traits (bloom timing, chilling needs, kernel grade) are specific to California-type Mediterranean climates and management, and differ elsewhere.',
    'Current formal registry or variety-protection status is not verified here; the cultivar is treated as a historical heritage selection and no plant-variety protection is asserted.',
    'The late-19th-century introduction and the attribution to A. T. Hatch are drawn from horticultural histories, and exact dates vary between sources.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Almond (Prunus dulcis) cultivar and germplasm documentation',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'California almond cultivar and orchard management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nonpareil (almond cultivar)',
    description:
      'Nonpareil is the benchmark California almond cultivar: a soft-shelled, self-incompatible clone with a light, smooth kernel used as the industry reference grade.',
    keywords: [
      'Nonpareil almond',
      'almond cultivar',
      'California almond',
      'Prunus dulcis',
    ],
  },
  structuredData: { article: true },
};
