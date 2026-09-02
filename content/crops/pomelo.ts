import type { CropContent } from '@/types/content';

export const pomelo: CropContent = {
  id: 'crop-pomelo',
  slug: 'pomelo',
  contentType: 'crop',
  title: 'Pomelo',
  scientificName: 'Citrus maxima',
  alternativeNames: ['Pummelo', 'Shaddock'],
  category: 'Fruit crop',
  subcategory: 'Evergreen citrus tree',
  botanicalFamily: 'Rutaceae (rue family)',
  lifecycle: 'Perennial',
  summary:
    "Pomelo is one of citrus's few true ancestral species rather than a hybrid, and grapefruit descends from it. Its thick albedo, which is peeled and discarded, means most of a very large fruit is not sold.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Most of the citrus in cultivation is hybrid. Pomelo is not: it is one of the small number of ancestral citrus species from which the hybrids were assembled, and grapefruit arose from a cross involving it. A pomelo page is therefore about a parent, not a product of the citrus complex.',
    },
    {
      type: 'paragraph',
      text: 'As a crop it is defined by size and by peel. Fruit commonly reach one to two kilograms, and a very thick white albedo is removed and discarded before eating, so the edible fraction of a pomelo is small relative to what is harvested and shipped.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (rue family)' },
    {
      label: 'Taxonomic status',
      value:
        'A true species and a founding parent of the citrus hybrid complex',
    },
    { label: 'Descendant', value: 'Grapefruit derives from a pomelo cross' },
    {
      label: 'Fruit size',
      value: 'Commonly one to two kilograms; the largest citrus',
    },
    {
      label: 'Peel',
      value: 'Very thick albedo, removed and discarded before eating',
    },
    {
      label: 'Principal markets',
      value: 'China, Southeast Asia and increasingly export trade',
    },
  ],
  sections: [
    {
      id: 'ancestral',
      heading: 'A parent species, not a hybrid',
      body: [
        {
          type: 'paragraph',
          text: 'Pomelo is one of the ancestral citrus species alongside mandarin and citron, and the familiar hybrids were built from combinations of them. That places it differently in a crop encyclopedia from orange or grapefruit: statements about pomelo are statements about a species, while statements about its descendants are statements about hybrid groups.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'grapefruit',
      heading: 'Grapefruit is a descendant',
      body: [
        {
          type: 'paragraph',
          text: 'Grapefruit originated from a cross involving pomelo, and the two are frequently confused in markets and in trade data even though they are different crops with different fruit, seasons and destinations. Any record matching between them has to distinguish parent from descendant rather than treat them as variants.',
        },
      ],
    },
    {
      id: 'albedo',
      heading: 'Most of the fruit is peel',
      body: [
        {
          type: 'paragraph',
          text: 'The thick white albedo that gives pomelo its size is removed and discarded, so a large harvested weight converts to a modest edible weight. That governs packing, freight economics and waste handling, and it is the reason peeled and segmented pomelo has become a significant product form.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'size',
      heading: 'Handling a very large citrus',
      body: [
        {
          type: 'paragraph',
          text: 'At one to two kilograms, pomelos are packed in low counts per carton, bruise where they contact each other, and cannot be handled on lines set up for oranges. Harvest is by hand with clippers, and dropped fruit is lost, which pushes labour cost per tonne well above that of small citrus.',
        },
      ],
    },
    {
      id: 'seedy',
      heading: 'Seeds and cultivar groups',
      body: [
        {
          type: 'paragraph',
          text: 'Many traditional pomelos are heavily seeded, and low-seed selections command a premium; cultivar groups differ in flesh colour, acidity and seediness more widely than within most citrus crops. The market buys a named type rather than "pomelo".',
        },
      ],
    },
    {
      id: 'huanglongbing',
      heading: 'Huanglongbing',
      body: [
        {
          type: 'paragraph',
          text: 'Pomelo is affected by huanglongbing, the disease that has reshaped citrus industries worldwide, and its presence determines whether new planting is viable in a region at all. Nursery material under protection and vector management are the standard responses where the disease is present.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'drug-interaction',
      heading: 'Furanocoumarins and the grapefruit question',
      body: [
        {
          type: 'paragraph',
          text: 'Pomelo, like grapefruit, contains furanocoumarins, the compound class behind the well-known interaction between grapefruit and certain medicines. AgricultureID records this as a compositional fact about the fruit; questions of medicine interaction belong to pharmaceutical and clinical sources rather than an agronomic page.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and rind disorders',
      body: [
        {
          type: 'paragraph',
          text: "The thick rind gives pomelo a longer natural shelf life than thin-skinned citrus, but it is prone to rind pitting and to chilling injury if held too cold, so storage temperature is a narrower window than the fruit's toughness suggests.",
        },
      ],
    },
    {
      id: 'festival',
      heading: 'Seasonal demand',
      body: [
        {
          type: 'paragraph',
          text: 'A large share of pomelo demand in East Asia is concentrated around autumn festivals, so harvest timing is aimed at a date rather than at a continuous market. Fruit that misses the window sells at a substantially lower price, which makes maturity management commercially decisive.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'huanglongbing' },
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'ferralsol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'waxing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'degreening' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lime' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'China, Vietnam, Thailand, Malaysia and Indonesia are the main producers, with export trade growing to East Asian and Western markets.',
  climateContext:
    'Subtropical to tropical evergreen citrus; frost-sensitive and requiring warm conditions through a long fruit development period.',
  limitations: [
    'Interactions between furanocoumarin-containing fruit and medicines are a clinical matter and no guidance is given here.',
    'Cultivar groups differ widely in seediness, flesh colour and acidity; species-level statements do not describe any particular type.',
    'Huanglongbing status and quarantine requirements differ by jurisdiction.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Citrus maxima compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    { sourceId: 'cn-mara', citedFor: 'Chinese citrus production context' },
    { sourceId: 'eppo', citedFor: 'Huanglongbing regulatory status' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Pomelo',
    description:
      'Citrus maxima as a crop: an ancestral citrus species and grapefruit parent, thick albedo and low edible fraction, handling a very large fruit, huanglongbing.',
    keywords: [
      'pomelo',
      'pummelo',
      'Citrus maxima',
      'shaddock',
      'ancestral citrus',
    ],
  },
  structuredData: { article: true },
};
