import type { CropContent } from '@/types/content';

export const mulberry: CropContent = {
  id: 'crop-mulberry',
  slug: 'mulberry',
  contentType: 'crop',
  title: 'Mulberry',
  scientificName: 'Morus (M. alba, M. nigra, M. rubra)',
  alternativeNames: ['White mulberry', 'Black mulberry', 'Shahtoot'],
  category: 'Fruit and tree crop',
  subcategory: 'Deciduous tree grown for fruit and silkworm forage',
  botanicalFamily: 'Moraceae (mulberry family)',
  lifecycle: 'Perennial',
  summary:
    'Mulberry is a fast-growing deciduous tree grown both for its sweet berries and, above all, for its leaves, which are the essential food of silkworms, making it the foundation crop of silk production (sericulture).',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mulberry is a hardy, fast-growing deciduous tree of the genus Morus grown for two main purposes: its soft, sweet berries, eaten fresh and processed, and, most importantly on a global scale, its foliage, which is the sole food of the silkworm. This makes mulberry the foundation crop of sericulture, the rearing of silkworms for silk.',
    },
    {
      type: 'paragraph',
      text: 'White mulberry is the species most used for silkworm rearing and is intensively cultivated and pruned to produce large quantities of tender leaves, while black and other mulberries are grown more for their fruit. The tree is adaptable and grown across temperate, subtropical, and tropical regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Moraceae (mulberry family)' },
    { label: 'Life cycle', value: 'Perennial (deciduous tree)' },
    { label: 'Scientific name', value: 'Morus (several cultivated species)' },
    {
      label: 'Primary uses',
      value:
        'Leaves as silkworm food (sericulture); berries as fruit; leaves as fodder',
    },
    {
      label: 'Climate',
      value: 'Adaptable across temperate, subtropical, and tropical regions',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams; tolerant of a range of soils',
      note: 'Adaptable but most productive on fertile, well-drained soils.',
    },
    {
      label: 'Distinctive role',
      value: 'The essential feed crop underpinning silk production',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mulberry is grown for its leaves and its fruit. In sericulture, mulberry is cultivated intensively, often as low bushes or coppiced trees, and pruned repeatedly to yield abundant tender leaves for feeding silkworms. Fruit production, by contrast, favors tree forms of fruiting types such as black mulberry.',
        },
        {
          type: 'paragraph',
          text: 'Beyond silk and fruit, mulberry leaves are used as livestock fodder, and the tree serves in agroforestry, shade, and soil-conservation roles. Its fast growth and tolerance of pruning make it well suited to repeated leaf harvest.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Family',
              description: 'Moraceae (fig and mulberry family)',
            },
            { term: 'Genus', description: 'Morus' },
            {
              term: 'Principal species',
              description:
                'Morus alba (white, for silkworm rearing), M. nigra (black, for fruit), and M. rubra (red)',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing deciduous tree or shrub that tolerates heavy pruning and coppicing; bears aggregate berries',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'White mulberry originated in eastern Asia and has been cultivated for silk production in China for thousands of years, spreading with sericulture across Asia and into Europe. Black mulberry is associated with western Asia, and red mulberry with North America. Mulberry is now grown widely for silk, fruit, and fodder.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on cultivated area for fruit and for sericulture are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mulberry is highly adaptable, growing across temperate, subtropical, and tropical climates. Temperate types are deciduous and winter-hardy, while in warm climates growth and leaf production can continue over a longer season, supporting multiple silkworm rearings per year.',
        },
        {
          type: 'paragraph',
          text: 'Leaf yield and quality, which are critical for silkworm rearing, depend on temperature, moisture, and management, and are favored by warm, moist growing conditions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mulberry grows on a wide range of soils but is most productive on deep, fertile, well-drained loams and alluvial soils with good moisture-holding capacity. It tolerates a range of pH but is sensitive to prolonged waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'For intensive leaf production in sericulture, fertile, well-drained soils and good moisture support the frequent, heavy leaf harvests the crop must sustain.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Mulberry is propagated readily from cuttings and also by grafting for fruiting types. For sericulture, plants are established at high density and trained as bushes or coppiced trees, then pruned on a regular cycle to stimulate the flush of tender leaves used for feeding.',
        },
        {
          type: 'list',
          items: [
            'Propagation from cuttings, with grafting used for selected fruiting cultivars',
            'Training as bushes or coppice for intensive leaf production in sericulture',
            'Regular pruning to stimulate tender, high-quality leaf flushes',
            'Weed, moisture, and nutrient management to sustain repeated leaf harvests',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Intensive leaf harvesting removes substantial nutrients, so mulberry grown for sericulture has significant nitrogen demand to sustain leaf production and quality, alongside phosphorus and potassium. Organic matter is widely used to maintain fertility.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Mulberry grown intensively for leaf benefits from consistent moisture to maintain rapid regrowth after each harvest, and irrigation is common in sericulture regions with a dry season. Fruit-oriented and fodder plantings are often grown under rain-fed conditions.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew, leaf spots, and root rots affect mulberry, and leaf diseases are of particular concern in sericulture because leaf quality directly affects silkworm health. Good sanitation and pruning help manage foliar disease.',
        },
        {
          type: 'paragraph',
          text: 'Aphids, mealybugs, scale insects, thrips, and mites infest the foliage. In sericulture, pest and disease management is complicated by the need to avoid residues that could harm silkworms, so cultural methods and careful, silkworm-safe practices are emphasized.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'For sericulture, mulberry leaves are harvested by picking leaves or cutting leafy shoots on a schedule matched to silkworm rearing cycles. Fruit is harvested when fully colored and ripe; because the soft berries are highly perishable and stain readily, they are handled gently and used or processed quickly.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Leaves as the essential food of silkworms, underpinning silk production',
            'Berries eaten fresh and made into juices, preserves, and dried fruit',
            'Leaves and prunings used as nutritious livestock fodder',
            'Tree used in agroforestry, shade, windbreaks, and soil conservation',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fig' },
    { type: 'crop', slug: 'mango' },
  ],
  connections: [
    { type: 'livestock', slug: 'silkworms' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'forage', 'yield'],
  geographicScope:
    'Global overview. Intensive leaf cultivation for sericulture is concentrated in Asia; fruit and fodder use is more widespread.',
  climateContext:
    'Adaptable deciduous tree grown across temperate, subtropical, and tropical climates; leaf quality is central for sericulture.',
  limitations: [
    'Management differs sharply between intensive leaf production for silk and fruit or fodder production, and is not reduced to universal guidance here.',
    'In sericulture, pest and disease control is constrained by the need to protect silkworms from residues.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Role of mulberry in sericulture and as a fruit and fodder tree',
    },
    {
      sourceId: 'icar',
      citedFor: 'Mulberry cultivation and sericulture research in South Asia',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Mulberry crop, disease, and pest compendium data',
    },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Mulberry (Morus)',
    description:
      'An evidence-based reference on mulberry: tree botany, sericulture leaf production, fruit and fodder uses, soils, pruning, diseases, and pests.',
    keywords: ['mulberry', 'Morus alba', 'sericulture', 'silkworm food'],
  },
  structuredData: { article: true },
};
