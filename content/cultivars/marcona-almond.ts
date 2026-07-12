import type { CultivarContent } from '@/types/content';

export const marconaAlmond: CultivarContent = {
  id: 'marcona-almond',
  slug: 'marcona-almond',
  contentType: 'cultivar',
  title: 'Marcona',
  acceptedName: 'Marcona',
  category: 'Almond cultivar',
  parentCrop: { type: 'crop', slug: 'almond' },
  botanicalTaxon: 'Prunus dulcis',
  cultivarType: 'Cultivar (clonal)',
  breedingType: 'Clonal selection (traditional)',
  originCountry: 'Spain',
  originRegion: 'Eastern (Mediterranean) Spain',
  registrationStatus: 'historical',
  growthHabit: 'Deciduous tree, clonally propagated by grafting',
  intendedUse: [
    'Confectionery (for example, turrón and premium snacking)',
    'Premium whole-kernel use',
  ],
  climateAdaptation:
    'Mediterranean climates of Spain; a traditional early-blooming type, which increases exposure of flowers to spring frost.',
  soilAdaptation:
    'Well-drained soils typical of Mediterranean almond districts.',
  qualityTraits: [
    'Rounded, plump kernel distinct from the flat California kernel types',
    'High oil content associated with confectionery use',
    'Hard-shelled traditional Spanish type',
  ],
  summary:
    'Marcona is a traditional Spanish almond cultivar with a rounded, plump, high-oil kernel prized for confectionery such as turrón and for premium snacking.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Marcona is a traditional almond cultivar of Mediterranean Spain, valued for a distinctive rounded, plump kernel that differs markedly from the flat kernels of the leading California cultivars. It is widely regarded in confectionery for its texture and high oil content and is closely associated with Spanish products such as turrón.',
    },
    {
      type: 'paragraph',
      text: 'Like other almonds, Marcona is clonally propagated and self-incompatible. As a traditional Spanish type it is typically hard-shelled and early-blooming, both characteristics that distinguish it from the soft-shelled, mid-season California cultivars.',
    },
  ],
  keyFacts: [
    { label: 'Parent crop', value: 'Almond (Prunus dulcis)' },
    { label: 'Botanical taxon', value: 'Prunus dulcis' },
    { label: 'Type', value: 'Cultivar (clonal, traditional Spanish)' },
    { label: 'Origin', value: 'Mediterranean Spain' },
    { label: 'Pollination', value: 'Self-incompatible' },
    { label: 'Shell', value: 'Hard shell (traditional type)' },
    {
      label: 'Kernel',
      value: 'Rounded, plump, high oil; prized for confectionery',
    },
    {
      label: 'Registry status',
      value: 'Historical (traditional cultivar; current status not verified)',
    },
  ],
  sections: [
    {
      id: 'identity-and-origin',
      heading: 'Identity and origin',
      body: [
        {
          type: 'paragraph',
          text: 'Marcona is a traditional Spanish almond cultivar, long grown in the Mediterranean almond districts of eastern Spain. It is documented as a recognized, distinct cultivar rather than a generic type, and is propagated clonally so that trees grown under the name share the same selection.',
        },
        {
          type: 'paragraph',
          text: 'This record treats Marcona as a well-documented traditional cultivar and does not assert a specific release year, breeder, or current variety-protection status, none of which are independently verified here.',
        },
      ],
    },
    {
      id: 'kernel-and-use',
      heading: 'Kernel characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Marcona’s kernel is rounded and plump, with a high oil content, and is prized in confectionery and premium snacking. These qualities, together with its hard traditional shell, distinguish it from the flat, soft-shelled kernels of the dominant California cultivars.',
        },
        {
          type: 'list',
          items: [
            'Kernel: rounded, plump, high in oil',
            'Shell: hard (traditional Spanish type)',
            'Typical uses: confectionery such as turrón, and premium snacking',
          ],
        },
      ],
    },
    {
      id: 'adaptation',
      heading: 'Climate and bloom timing',
      body: [
        {
          type: 'paragraph',
          text: 'As a traditional Mediterranean Spanish cultivar, Marcona is early-blooming. Early bloom is a recognized frost risk for almonds, because flowers and young fruit are frost-sensitive, so bloom timing is an important consideration where Marcona is grown outside its traditional districts.',
        },
      ],
    },
  ],
  connections: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'cultivar', slug: 'nonpareil-almond' },
    { type: 'cultivar', slug: 'carmel-almond' },
  ],
  geographicScope:
    'Traditional to Mediterranean Spain. Bloom timing and kernel quality are specific to that context; behavior elsewhere is not characterized here.',
  climateContext:
    'Traditional Mediterranean Spanish almond cultivar; early bloom increases frost exposure.',
  limitations: [
    'Marcona is self-incompatible and, like other almonds, requires compatible pollinizers to set a crop.',
    'As an early-blooming type, Marcona is particularly exposed to spring frost, and its suitability outside traditional Spanish districts depends heavily on local frost risk.',
    'Exact release year, breeder, and current registry or variety-protection status are not verified here; the cultivar is treated as a traditional heritage selection.',
    'Kernel and quality descriptions reflect its established confectionery reputation and are not a graded specification.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-grin',
      citedFor: 'Almond (Prunus dulcis) cultivar and germplasm documentation',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Almond cultivar characteristics and Mediterranean production context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Marcona (almond cultivar)',
    description:
      'Marcona is a traditional Spanish almond cultivar with a rounded, plump, high-oil kernel prized for confectionery such as turrón and for premium snacking.',
    keywords: [
      'Marcona almond',
      'Spanish almond',
      'almond cultivar',
      'Prunus dulcis',
    ],
  },
  structuredData: { article: true },
};
