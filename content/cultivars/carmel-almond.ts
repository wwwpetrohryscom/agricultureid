import type { CultivarContent } from '@/types/content';

export const carmelAlmond: CultivarContent = {
  id: 'carmel-almond',
  slug: 'carmel-almond',
  contentType: 'cultivar',
  title: 'Carmel',
  acceptedName: 'Carmel',
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
      note: 'Carmel is documented as an almond (Prunus dulcis) cultivar within the U.S. germplasm system; specific accession identifiers are not linked here.',
    },
  ],
  growthHabit: 'Deciduous tree, clonally propagated by grafting',
  intendedUse: [
    'Kernel production',
    'Pollinizer for Nonpareil-based orchards',
    'Ingredient/manufacturing use',
  ],
  climateAdaptation:
    'Mediterranean-type climates with winter chilling; blooms in overlap with Nonpareil, leaving flowers exposed to spring frost.',
  soilAdaptation:
    'Deep, well-drained loams and sandy loams; intolerant of waterlogging.',
  qualityTraits: [
    'Soft-shelled, with a narrower, more elongated kernel than Nonpareil',
    'Blooms in overlap with Nonpareil, making it a widely used pollinizer',
  ],
  summary:
    'Carmel is a soft-shelled California almond cultivar with an elongated kernel, long planted as a major pollinizer for Nonpareil because its bloom overlaps.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Carmel is a soft-shelled almond cultivar from California, historically one of the most widely planted cultivars in the state after Nonpareil. It is grown both for its own kernels and, very commonly, as a pollinizer whose bloom overlaps that of Nonpareil, helping cross-pollination in mixed orchards.',
    },
    {
      type: 'paragraph',
      text: 'Like other almond cultivars, Carmel is clonally propagated by grafting and is self-incompatible. Its kernel is typically narrower and more elongated than the flat, broad kernel of Nonpareil, a difference used in grading and marketing.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Almond (Prunus dulcis)' },
    { label: 'Botanical taxon', value: 'Prunus dulcis' },
    { label: 'Type', value: 'Cultivar (clonal, grafted)' },
    { label: 'Origin', value: 'California, United States' },
    {
      label: 'Pollination',
      value: 'Self-incompatible; blooms in overlap with Nonpareil',
    },
    { label: 'Shell', value: 'Soft shell' },
    { label: 'Kernel', value: 'Narrower, more elongated than Nonpareil' },
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
          text: 'Carmel is a single clonally maintained almond cultivar propagated by grafting, so trees grown under the name are the same genetic selection. It originated in California and became one of the state’s major cultivars during the second half of the 20th century, planted widely alongside Nonpareil.',
        },
        {
          type: 'paragraph',
          text: 'This record treats Carmel as a well-documented heritage cultivar and does not assert an exact release year or a current variety-protection status, both of which vary between sources or are not independently verified here.',
        },
      ],
    },
    {
      id: 'kernel-and-role',
      heading: 'Kernel characteristics and orchard role',
      body: [
        {
          type: 'paragraph',
          text: 'Carmel produces a soft-shelled nut with a kernel that is generally narrower and more elongated than Nonpareil’s. Its main orchard value, beyond its own kernels, has been as a pollinizer: its bloom overlaps that of Nonpareil, so it supplies compatible pollen during the shared bloom window.',
        },
        {
          type: 'list',
          items: [
            'Shell: soft, easily hulled',
            'Kernel: narrower and more elongated than Nonpareil',
            'Orchard role: common pollinizer for Nonpareil-based plantings',
          ],
        },
      ],
    },
    {
      id: 'adaptation',
      heading: 'Climate and soil adaptation',
      body: [
        {
          type: 'paragraph',
          text: 'Carmel is grown in the same Mediterranean-type California conditions as Nonpareil, requiring winter chilling for normal flowering and a dry harvest period. Because its bloom overlaps Nonpareil’s relatively early bloom, its flowers are similarly exposed to spring frost. It performs best on deep, well-drained soils.',
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
    { type: 'cultivar', slug: 'nonpareil-almond' },
    { type: 'cultivar', slug: 'marcona-almond' },
  ],
  geographicScope:
    'Documented primarily in California, United States. Bloom timing, chilling needs, and kernel quality are specific to Mediterranean-type climates and orchard management.',
  climateContext:
    'Mediterranean-type tree-crop cultivar requiring winter chill; bloom overlaps Nonpareil and is frost-exposed.',
  limitations: [
    'Carmel is self-incompatible and depends on compatible pollinizer cultivars; it is itself frequently used as the pollinizer rather than grown in solid blocks.',
    'Carmel is among the cultivars in which noninfectious bud failure ("crazy top"), a non-transmissible genetic disorder, has been documented; its expression is influenced by propagation source and heat exposure.',
    'Performance traits are specific to California-type Mediterranean climates and management and differ elsewhere.',
    'Current formal registry or variety-protection status is not verified here; the cultivar is treated as a historical heritage selection.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Almond (Prunus dulcis) cultivar and germplasm documentation',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'California almond cultivar guidance, including noninfectious bud failure',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Carmel (almond cultivar)',
    description:
      'Carmel is a soft-shelled California almond cultivar with an elongated kernel, long planted as a pollinizer because its bloom overlaps that of Nonpareil.',
    keywords: [
      'Carmel almond',
      'almond pollinizer',
      'California almond cultivar',
      'Prunus dulcis',
    ],
  },
  structuredData: { article: true },
};
