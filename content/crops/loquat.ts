import type { CropContent } from '@/types/content';

export const loquat: CropContent = {
  id: 'crop-loquat',
  slug: 'loquat',
  contentType: 'crop',
  title: 'Loquat',
  scientificName: 'Eriobotrya japonica',
  alternativeNames: ['Japanese medlar', 'Nispero', 'Pipa'],
  category: 'Fruit crop',
  subcategory: 'Subtropical evergreen pome fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Loquat is a subtropical evergreen tree of the rose family grown for its sweet-tart, early-ripening pome fruit, distinctive for flowering in autumn or winter and fruiting in early spring ahead of most tree fruits.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Loquat is a small evergreen tree of the rose family, related to apple and pear, grown for its clusters of small, sweet-tart, orange to yellow fruit. It is notable for its unusual seasonality: it flowers in autumn or early winter and ripens its fruit in early spring, well ahead of most other tree fruits.',
    },
    {
      type: 'paragraph',
      text: 'Native to China and long cultivated in East Asia, loquat is grown across subtropical and mild-temperate regions worldwide, both as a commercial fruit and as an ornamental and dooryard tree. Its early fruit fills a gap in the fresh-fruit calendar, though its autumn-winter flowering makes it vulnerable to frost.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial (evergreen tree)' },
    { label: 'Scientific name', value: 'Eriobotrya japonica' },
    {
      label: 'Primary uses',
      value:
        'Fresh fruit; also used in preserves, syrups, and processed products',
    },
    {
      label: 'Climate',
      value:
        'Subtropical to mild-temperate; autumn/winter flowering vulnerable to frost',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams; adaptable to a range of soils',
      note: 'Requires good drainage; sensitive to waterlogging.',
    },
    {
      label: 'Distinctive trait',
      value:
        'Flowers in autumn/winter and fruits in early spring, ahead of most tree fruits',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Loquat is grown mainly for its early-season fresh fruit, prized for arriving before most other tree fruits, and also for preserves, syrups, and other products. Trees are grown commercially in orchards and very widely as ornamental and backyard trees for their attractive evergreen foliage and fruit.',
        },
        {
          type: 'paragraph',
          text: 'Because the fruit ripens in clusters and is delicate, fruit thinning and careful handling are used to improve size and quality for the fresh market.',
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
            { term: 'Family', description: 'Rosaceae (rose family)' },
            { term: 'Genus and species', description: 'Eriobotrya japonica' },
            {
              term: 'Growth habit',
              description:
                'Small to medium evergreen tree with large, leathery leaves, bearing pome fruit in clusters',
            },
            {
              term: 'Relatives',
              description:
                'A pome fruit related to apple, pear, and quince within the rose family',
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
          text: 'Loquat is native to south-central China and has been cultivated in China and Japan for a very long time. It has since spread to subtropical and mild-temperate regions worldwide, including the Mediterranean basin, South Asia, and the Americas.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Loquat is adapted to subtropical and mild-temperate climates. The tree itself is fairly cold-hardy, but because it flowers in autumn or early winter and carries young fruit through winter, its flowers and developing fruit are vulnerable to frost, which is the main climatic limitation on cropping.',
        },
        {
          type: 'paragraph',
          text: 'Mild winters and warm springs favor good fruit set and early ripening, while hot, dry conditions during fruit development can reduce quality.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Loquat grows on a range of soils but does best on deep, fertile, well-drained loams. Good drainage is essential, as the tree is sensitive to waterlogging, which promotes root problems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'While adaptable, loquat performs best on well-drained soils; waterlogged conditions predispose the tree to root and collar rots.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Loquat is grown from seed for rootstocks and ornamentals, while selected fruiting cultivars are propagated by grafting to reproduce their fruit quality and shorten the time to bearing. Fruit thinning, pruning, and, in frost-prone areas, protection of the developing fruit are important management practices.',
        },
        {
          type: 'list',
          items: [
            'Grafted cultivars used to propagate selected fruiting types true to type',
            'Fruit thinning to improve fruit size and quality for the fresh market',
            'Pruning to maintain an open, manageable canopy and remove damaged wood',
            'Frost protection of autumn-winter flowers and developing fruit where feasible',
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
          text: 'Loquat responds to balanced nutrition, with nitrogen supporting growth and potassium contributing to fruit development and quality. Excessive vigor can delay bearing and increase disease susceptibility, so nutrition is balanced against tree vigor.',
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
          text: 'Loquat benefits from adequate, regular moisture during fruit development in late winter and spring, and irrigation is used in areas with dry springs. Good drainage is maintained to avoid waterlogging, and consistent moisture supports fruit size and reduces splitting.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fire blight, a bacterial disease of the rose family, can seriously affect loquat, killing blossoms and shoots, and loquat scab and anthracnose blemish leaves and fruit. Root and collar rots occur on poorly drained soils.',
        },
        {
          type: 'paragraph',
          text: 'Fruit flies attack the ripening fruit, and aphids, scale insects, and birds also cause damage. Management combines sanitation, removal of blighted wood, fruit protection such as bagging in some systems, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Loquat is harvested by hand when the fruit is fully colored and ripe, since it does not improve in sweetness after picking. The delicate fruit bruises easily and has a short shelf life, so it is picked carefully, often with the stalk attached, and marketed promptly.',
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
            'Fresh fruit valued as one of the earliest tree fruits of the season',
            'Preserves, jams, syrups, and jellies made from the fruit',
            'Use in juices, desserts, and, in some regions, traditional preparations',
            'Ornamental use of the evergreen tree in gardens and landscapes',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fire-blight' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'pear' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview across subtropical and mild-temperate regions, with origins and major traditional use in East Asia.',
  climateContext:
    'Subtropical to mild-temperate evergreen pome; autumn-winter flowering makes flowers and young fruit vulnerable to frost.',
  limitations: [
    'Cultivar choice and frost management depend strongly on local climate and are not reduced to universal guidance here.',
    'The fruit is delicate and short-lived, with quality set at harvest since it does not sweeten afterward.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of loquat in subtropical fruit production',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Loquat crop, disease, and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Loquat cultivation and care guidance' },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Loquat (Eriobotrya japonica)',
    description:
      'An evidence-based reference on loquat: evergreen pome botany, early fruiting, frost risk, soils, fire blight, pests, and fresh and processed uses.',
    keywords: ['loquat', 'Eriobotrya japonica', 'Japanese medlar', 'nispero'],
  },
  structuredData: { article: true },
};
