import type { LivestockContent } from '@/types/content';

export const pheasant: LivestockContent = {
  id: 'livestock-pheasant',
  slug: 'pheasant',
  contentType: 'livestock',
  title: 'Pheasant',
  scientificName: 'Phasianus colchicus',
  alternativeNames: ['Common pheasant', 'Ring-necked pheasant'],
  category: 'Livestock',
  subcategory: 'Poultry (game bird)',
  primaryProducts: ['Meat', 'Game and hunting stock', 'Eggs (minor)'],
  productionSystems: [
    'Game-bird rearing and release systems',
    'Commercial meat production',
    'Small-scale and hobbyist rearing',
  ],
  summary:
    'Pheasants are farmed game birds raised for meat, for release into hunting estates, and on a smaller scale for eggs. Reared under commercial, small-scale, and release-oriented systems, they form a distinct branch of poultry husbandry linked to game management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The common or ring-necked pheasant (Phasianus colchicus) is a game bird native to Asia that has been widely introduced and farmed elsewhere, particularly across Europe and North America. Pheasant farming developed largely to supply managed shooting estates with birds for release, alongside a smaller direct market for pheasant meat and, occasionally, eggs.',
    },
    {
      type: 'paragraph',
      text: 'As monogastric poultry, pheasants are reared on formulated rations similar to other game birds, but husbandry differs from conventional broiler or layer poultry in its emphasis on rearing birds fit for eventual release into semi-wild conditions, including exercise pens and gradual acclimatisation to outdoor cover.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Phasianus colchicus' },
    { label: 'Digestive type', value: 'Monogastric poultry' },
    {
      label: 'Primary products',
      value: 'Meat and game/hunting stock; eggs a minor product',
    },
    {
      label: 'Typical system',
      value: 'Rearing sheds and release pens linked to game estates',
    },
    {
      label: 'Feed base',
      value:
        'Formulated starter and grower rations, supplemented with natural foraging before release',
    },
    {
      label: 'Native range',
      value: 'Asia; widely introduced in Europe and North America',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pheasant production spans commercial meat farming and, more prominently in many countries, game-bird rearing for release onto managed shooting estates, with the two production goals shaping different rearing practices.',
        },
      ],
    },
    {
      id: 'types-and-production-lines',
      heading: 'Types and production lines',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Meat production lines',
              description:
                'Birds reared to processing weight for the table market.',
            },
            {
              term: 'Game-release rearing',
              description:
                'Birds reared in sheds and pens then released for managed shooting.',
            },
            {
              term: 'Breeding and laying stock',
              description:
                'Maintained to supply eggs and poults for the following season’s rearing.',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrition-and-feeding',
      heading: 'Nutrition and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Young pheasants are fed formulated starter and grower rations with protein levels matched to rapid early growth; birds destined for release are gradually transitioned toward natural foraging in outdoor pens before being released.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Nutrient requirements depend on growth stage and whether birds are destined for meat production or release. Poultry and game-bird nutrient references and local advisers should guide feeding.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Rearing-shed biosecurity and disease prevention are important during early growth, while the transition to release pens requires attention to stress, predator exposure, and acclimatisation to outdoor conditions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Veterinary and regulatory guidance',
          text: 'Animal health, disease control, medicines, and welfare are governed by regional regulations and professional veterinary advice. AgricultureID does not provide veterinary treatment instructions; follow local law and consult qualified professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Pheasant rearing is closely linked to game management and woodland habitat, with production timed to align release with regional hunting seasons and with implications for land management on shooting estates.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'quail' },
    { type: 'livestock', slug: 'chickens' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'temperature' },
  ],
  geographicScope:
    'Farmed and released widely across Europe, North America, and parts of Asia; regulation of game-bird rearing and release varies significantly by country.',
  climateContext:
    'Pheasants are adapted to temperate climates and are typically reared to align release timing with regional hunting seasons and forage availability.',
  limitations: [
    'This is a general species overview, not a system- or region-specific production guide.',
    'Health, medicine, and welfare practices are governed by local regulation and veterinary advice and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Pheasant farming and game-bird production context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Poultry and game-bird nutrition research',
    },
    { sourceId: 'woah', citedFor: 'Animal health and welfare standards' },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Poultry genetic resources and diversity',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pheasant',
    description:
      'A reference on farmed pheasants: game birds reared for meat and estate release, their nutrition, health and welfare, and production systems.',
    keywords: [
      'pheasant',
      'Phasianus colchicus',
      'game bird farming',
      'poultry',
    ],
  },
  structuredData: { article: true },
};
