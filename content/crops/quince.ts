import type { CropContent } from '@/types/content';

export const quince: CropContent = {
  id: 'crop-quince',
  slug: 'quince',
  contentType: 'crop',
  title: 'Quince',
  scientificName: 'Cydonia oblonga',
  alternativeNames: ['Common quince'],
  category: 'Fruit crop',
  subcategory: 'Deciduous pome fruit tree',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Quince is grown for two unrelated purposes: a hard, aromatic fruit that is almost always cooked, and a dwarfing rootstock that shaped the design of European pear orchards.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Quince occupies an unusual position among fruit crops. As a fruit it is hard, astringent and rarely eaten raw, sold to be cooked into paste, jelly and preserves, and its value lies in a pectin content and aroma that survive cooking.',
    },
    {
      type: 'paragraph',
      text: "As a rootstock it is more important still: quince stocks are what made dwarf pear orchards possible in Europe, and a large share of the world's planted pear trees sit on quince roots. The same species is therefore a minor fruit and a major piece of orchard infrastructure.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Genus', value: 'Cydonia, a genus with a single species' },
    {
      label: 'Fruit use',
      value: 'Almost always cooked; high pectin and strong aroma',
    },
    { label: 'Second role', value: 'Dwarfing rootstock for European pear' },
    {
      label: 'Compatibility limit',
      value:
        'Several pear cultivars are graft-incompatible with quince and need an interstem',
    },
    { label: 'Main disease constraint', value: 'Fire blight susceptibility' },
  ],
  sections: [
    {
      id: 'cooked',
      heading: 'A fruit that is not eaten raw',
      body: [
        {
          type: 'paragraph',
          text: 'Most quince cultivars are too hard and astringent to eat fresh and are cooked, when they soften, turn pink or red and set firmly because of their high pectin. Quality traits for this crop are therefore aroma and pectin rather than sugar, texture or fresh appearance, and a quince selected to be eaten raw is a different and much rarer thing.',
        },
      ],
    },
    {
      id: 'rootstock',
      heading: 'The rootstock role',
      body: [
        {
          type: 'paragraph',
          text: 'Quince rootstocks dwarf European pear, bring it into bearing early and make intensive trained pear orchards possible, which is why quince is planted in nurseries at a scale far beyond what its fruit market would justify. A grower buying pear trees is usually buying quince roots without thinking about it.',
        },
      ],
    },
    {
      id: 'incompatibility',
      heading: 'Graft incompatibility and interstems',
      body: [
        {
          type: 'paragraph',
          text: 'Several important pear cultivars will not form a durable union on quince and fail years after planting. The standard solution is an interstem of a compatible pear worked between quince root and the desired cultivar, a three-part tree. That complication is the main limit on quince rootstock use.',
        },
      ],
    },
    {
      id: 'fire-blight',
      heading: 'Fire blight',
      body: [
        {
          type: 'paragraph',
          text: 'Quince is highly susceptible to fire blight, both as an orchard tree and as a rootstock, and in regions where the disease is established this restricts planting and nursery production. Where quince rootstock is unavailable for that reason, pear orchards revert to more vigorous pear stocks and a different orchard design.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'monotypic',
      heading: 'A genus of one',
      body: [
        {
          type: 'paragraph',
          text: 'Cydonia oblonga is the only species in its genus, distinct from the flowering quinces of Chaenomeles and from the Chinese quince Pseudocydonia sinensis. Those are ornamental or minor fruit plants sold under overlapping names, and matching a record for "quince" requires resolving which genus is meant.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Aroma and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Quince stores for months in cool conditions and its aroma is strong enough to taint other produce held with it, so it is stored separately. The fruit also bruises to brown patches readily despite its hardness, which surprises handlers used to treating a hard fruit as robust.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Self-fertile, mostly',
      body: [
        {
          type: 'paragraph',
          text: 'Quince is largely self-fertile, so a solitary tree will crop, which is unusual among the pome fruits and is one reason it persists in gardens and field margins long after commercial planting stops.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'turkey',
      heading: 'Where it is grown commercially',
      body: [
        {
          type: 'paragraph',
          text: 'Turkey is the largest producer, with substantial production in Uzbekistan, China, Iran, Morocco and Argentina, mostly for processing. It is grown in small blocks and mixed plantings rather than in large monocultures, so production statistics for it are less reliable than for the major pome fruits.',
        },
      ],
    },
    {
      id: 'marmalade',
      heading: 'A word that moved',
      body: [
        {
          type: 'paragraph',
          text: "The word marmalade derives from the Portuguese for quince, marmelo, and originally described quince paste rather than the citrus preserve it now names in English. The paste itself — membrillo, marmelada, cotognata — remains the crop's principal product across the Mediterranean and Latin America.",
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fire-blight' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'leaf-rollers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'asian-pear' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'Turkey is the leading producer, followed by Uzbekistan, China, Iran, Morocco and Argentina. Nursery production for rootstock is concentrated in western Europe.',
  climateContext:
    'Temperate deciduous tree with a moderate chilling requirement; tolerant of heavier and wetter soils than most pome fruit.',
  limitations: [
    'Graft compatibility between specific pear cultivars and specific quince rootstock clones is a nursery-level question not covered here.',
    'Production statistics for quince are less complete than for major pome fruits because much of it is grown in mixed and garden plantings.',
    'Fire blight status and permitted controls differ by jurisdiction.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Cydonia oblonga compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'eppo', citedFor: 'Fire blight regulatory status' },
    { sourceId: 'tr-tarim', citedFor: 'Turkish quince production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Quince',
    description:
      'Cydonia oblonga as a crop: a cooked, high-pectin fruit and the dwarfing rootstock behind European pear orchards, with graft incompatibility and fire blight.',
    keywords: [
      'quince',
      'Cydonia oblonga',
      'pear rootstock',
      'membrillo',
      'pome fruit',
    ],
  },
  structuredData: { article: true },
};
