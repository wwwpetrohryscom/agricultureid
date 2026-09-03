import type { CropContent } from '@/types/content';

export const mandarin: CropContent = {
  id: 'crop-mandarin',
  slug: 'mandarin',
  contentType: 'crop',
  title: 'Mandarin',
  scientificName: 'Citrus × aurantium Mandarin Group',
  alternativeNames: ['Tangerine', 'Clementine', 'Satsuma', 'Easy-peeler'],
  category: 'Fruit crop',
  subcategory: 'Evergreen citrus grown for easy-peeling fruit',
  botanicalFamily: 'Rutaceae (rue family)',
  lifecycle: 'Perennial',
  summary:
    'Mandarin is grown seedless, and seedlessness is an orchard-layout problem rather than a variety trait: the fruit sets without fertilisation, so a bee carrying compatible pollen from a neighbouring block puts seeds in it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mandarin is the loose-skinned citrus, sold as clementine, satsuma or tangerine according to type and market, and bought almost entirely on the promise that it peels easily and has no seeds. Under the treatment this corpus follows it is a cultivar group of Citrus × aurantium, the same hybrid taxon that carries sweet orange and grapefruit.',
    },
    {
      type: 'paragraph',
      text: "The seedless promise is the crop's central agronomic constraint. Many mandarins set fruit parthenocarpically and are seedless when isolated, and the same cultivars set seed readily when cross-pollinated. Since bees cannot be told which block to work, seedlessness is achieved by planting large solid blocks of one cultivar or by using pollen-sterile buffers.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (rue family)' },
    {
      label: 'Accepted placement',
      value:
        'Citrus × aurantium Mandarin Group, a cultivar group of the same hybrid as sweet orange',
    },
    {
      label: 'Fruit trait sold',
      value: 'Loose skin that peels by hand, and no seeds',
    },
    {
      label: 'Seedlessness',
      value:
        'Parthenocarpic set when isolated; cross-pollination puts seeds in the fruit',
    },
    {
      label: 'Orchard consequence',
      value: 'Solid single-cultivar blocks or pollen-sterile buffers',
    },
    {
      label: 'Season',
      value: 'Concentrated into autumn and winter in most producing regions',
    },
  ],
  sections: [
    {
      id: 'seedless',
      heading: 'Seedlessness is decided by the neighbours',
      body: [
        {
          type: 'paragraph',
          text: 'Mandarins that set fruit without fertilisation are seedless in isolation and seedy when a compatible cultivar flowers nearby, and honeybees move pollen across an agricultural landscape whatever a grower intends. The response is layout: large solid blocks of a single cultivar, or pollen-sterile cultivars planted as buffers. A seedy mandarin is not a failed variety; it is a variety that had company.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'parthenocarpy',
      heading: 'How much a cultivar can do alone',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivars differ in how well they set without pollination — satsuma sets heavily on its own while many clementines have low parthenocarpic capacity and need either a pollinizer, which brings seeds, or a growth-regulator programme, which does not. Choosing a mandarin cultivar is therefore choosing a pollination strategy at the same time.',
        },
      ],
    },
    {
      id: 'peel',
      heading: 'The peel is the product',
      body: [
        {
          type: 'paragraph',
          text: 'What separates a mandarin from an orange commercially is a rind that separates from the segments cleanly, and that property is judged by hand at the point of sale. It is also fragile: a fruit picked too mature, handled roughly or held too long becomes puffy, and puffiness is a grade-out that no amount of colour compensates for.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Clementine, satsuma, tangerine',
      body: [
        {
          type: 'paragraph',
          text: 'These are types within the group rather than separate crops, and the boundaries between them are commercial as much as botanical: satsumas are seedless and early, clementines are the Mediterranean easy-peeler, and "tangerine" is used loosely across markets. Trade records that use one of these names cannot be assumed to exclude the others.',
        },
      ],
    },
    {
      id: 'season',
      heading: 'A crop sold to a date',
      body: [
        {
          type: 'paragraph',
          text: 'Mandarin demand is concentrated in autumn and winter and, in several markets, around specific holidays, so harvest timing targets a window rather than a continuous season. Fruit that misses it sells at a substantially lower price, which makes maturity management commercially decisive in a way it is not for a storage citrus.',
        },
      ],
    },
    {
      id: 'group',
      heading: 'A cultivar group, not a species',
      body: [
        {
          type: 'paragraph',
          text: 'Records published under Citrus reticulata, Citrus deliciosa, Citrus clementina or Citrus unshiu all reach this crop under the treatment followed here. That is a naming fact rather than an agronomic one, and it matters when matching germplasm, plant-health or trade records that were written under a different treatment.',
        },
      ],
    },
    {
      id: 'hlb',
      heading: 'Huanglongbing and psyllids',
      body: [
        {
          type: 'paragraph',
          text: 'As with all citrus, huanglongbing determines whether new planting is viable in a region at all, and mandarins are affected like the rest of the genus. Clean nursery material, psyllid management and tolerant rootstocks are the standard responses where the disease is present.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'rootstock',
      heading: 'Rootstock decides the tree',
      body: [
        {
          type: 'paragraph',
          text: 'Mandarin scions are grafted, and the rootstock sets vigour, cold tolerance, salinity and calcareous-soil tolerance and disease response. In mandarin the rootstock also affects fruit size and rind quality, which are the traits the market grades on, so the choice reaches the product and not only the tree.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'cold',
      heading: 'Cold tolerance within citrus',
      body: [
        {
          type: 'paragraph',
          text: 'Satsuma types are among the more cold-tolerant citrus and are grown at the cool margin where sweet orange struggles, which is why mandarin production extends further from the equator than most of the genus. That tolerance is relative and does not survive a hard freeze.',
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
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'degreening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'citrus' },
    { type: 'crop', slug: 'grapefruit' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar'],
  geographicScope:
    'China is the largest producer, with substantial production in Spain, Turkey, Morocco, Egypt, Japan, Brazil and the United States.',
  climateContext:
    'Subtropical evergreen; among the more cold-tolerant citrus, with a harvest concentrated in autumn and winter.',
  limitations: [
    'Parthenocarpic capacity differs greatly between cultivars; species-level statements do not describe any particular one.',
    'Trade names within the group overlap and cannot be separated from a record that uses only one of them.',
    'Huanglongbing status and permitted controls differ by jurisdiction.',
  ],
  sourceReferences: [
    {
      sourceId: 'powo-plants-of-the-world-online',
      citedFor: 'Accepted placement in Citrus × aurantium',
    },
    { sourceId: 'wfo-world-flora-online', citedFor: 'Nomenclature' },
    { sourceId: 'cabi', citedFor: 'Citrus compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
    { sourceId: 'eppo', citedFor: 'Huanglongbing regulatory status' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Mandarin',
    description:
      'Mandarin as a crop: seedlessness decided by orchard layout, parthenocarpic set, the peel as the product, and a cultivar group of Citrus × aurantium.',
    keywords: [
      'mandarin',
      'clementine',
      'satsuma',
      'tangerine',
      'easy-peeler citrus',
    ],
  },
  structuredData: { article: true },
};
