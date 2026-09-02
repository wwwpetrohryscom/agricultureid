import type { CropContent } from '@/types/content';

export const asianPear: CropContent = {
  id: 'crop-asian-pear',
  slug: 'asian-pear',
  contentType: 'crop',
  title: 'Asian Pear',
  scientificName: 'Pyrus pyrifolia',
  alternativeNames: ['Nashi', 'Sand pear', 'Apple pear'],
  category: 'Fruit crop',
  subcategory: 'Deciduous pome fruit tree',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Asian pear is eaten crisp straight from the tree, which inverts everything about European pear handling: it does not ripen after picking, so maturity at harvest is final and there is no ripening room to correct a mistake.',
  introduction: [
    {
      type: 'paragraph',
      text: 'European pear is picked hard and ripened off the tree, softening to a buttery texture. Asian pear is not: it is harvested ready to eat, stays crisp, and does not soften in storage. What comes off the tree is what the consumer gets.',
    },
    {
      type: 'paragraph',
      text: 'That single difference reorganises the whole crop. Harvest maturity has to be judged correctly the first time, fruit is picked over several passes as it colours, and the bruising tolerance of a crisp fruit picked ripe is far lower than that of a hard-picked European pear.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    {
      label: 'Ripening behaviour',
      value: 'Ripens on the tree; does not soften after picking',
    },
    { label: 'Eating texture', value: 'Crisp and juicy rather than buttery' },
    {
      label: 'Harvest',
      value: 'Several selective passes as fruit reaches colour and maturity',
    },
    {
      label: 'Standard practice',
      value: 'Individual fruit bagging in much of East Asia',
    },
    {
      label: 'Pollination',
      value: 'Largely self-incompatible; a compatible pollinizer is required',
    },
  ],
  sections: [
    {
      id: 'non-melting',
      heading: 'Ready at harvest, not after it',
      body: [
        {
          type: 'paragraph',
          text: 'Because the fruit does not soften off the tree, there is no post-harvest ripening step that can rescue fruit picked early. Immature Asian pear stays hard and starchy indefinitely, and over-mature fruit goes mealy on the tree. Harvest judgement is therefore the single largest quality decision in the crop, and it is made repeatedly across the block.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'bagging',
      heading: 'Fruit bagging as routine practice',
      body: [
        {
          type: 'paragraph',
          text: 'In Japan, Korea and China individual fruit are commonly bagged on the tree, protecting the skin from russeting, insects and blemish and producing the unmarked finish those markets require. It is heavily labour-intensive and it is the main reason the crop is grown at high value per fruit rather than high tonnage per hectare.',
        },
      ],
    },
    {
      id: 'thinning',
      heading: 'Severe thinning',
      body: [
        {
          type: 'paragraph',
          text: 'Asian pear sets far more fruit than it can size, and blocks are thinned hard, often to one fruit per cluster, because size grade drives the price more than total yield does. A block thinned late or lightly produces a large crop of unsellable small fruit.',
        },
      ],
    },
    {
      id: 'bruising',
      heading: 'A crisp fruit handled ripe',
      body: [
        {
          type: 'paragraph',
          text: 'Harvesting at eating ripeness means the fruit arrives in the packhouse at its most bruise-sensitive, and pressure marks that a hard European pear would shrug off show as brown patches within days. Padded picking, shallow bins and careful grading are not refinements here but the basic requirement.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Cross-pollination is required',
      body: [
        {
          type: 'paragraph',
          text: 'Most cultivars are self-incompatible and need a compatible pollinizer flowering at the same time, and hand pollination is widely practised in East Asian orchards to guarantee set and fruit shape. Orchard design begins with pollinizer placement rather than with the main cultivar.',
        },
      ],
    },
    {
      id: 'fire-blight',
      heading: 'Fire blight sets where it can be grown',
      body: [
        {
          type: 'paragraph',
          text: 'Pyrus pyrifolia is susceptible to fire blight, and that susceptibility rather than climate is what limits its planting in regions where the bacterium is established. Orchard siting, pruning practice and cultivar choice all follow from the disease status of the region.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage without ripening',
      body: [
        {
          type: 'paragraph',
          text: 'The fruit stores for months under refrigeration and simply stays as it was picked, which is commercially useful but means storage cannot improve anything. Superficial disorders and core breakdown are the storage risks rather than over-ripening.',
        },
      ],
    },
    {
      id: 'not-european',
      heading: 'Not a substitute for European pear',
      body: [
        {
          type: 'paragraph',
          text: 'Asian pear and European pear are different species with different textures, uses and markets, and a buyer expecting one will reject the other. The English names "apple pear" and "sand pear" both describe the texture rather than any relationship to apple.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'rootstock',
      heading: 'Rootstocks',
      body: [
        {
          type: 'paragraph',
          text: 'Asian pear is typically grown on Pyrus rootstocks rather than the quince stocks used for many European pears, because quince compatibility is poor across the species. That difference removes the dwarfing option that shapes European pear orchard design and pushes Asian pear towards larger trees and trained systems.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fire-blight' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'punnet-clamshell' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'quince' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'China, Japan and Korea account for most production, with plantings in Australia, New Zealand, Chile and the United States for export and domestic markets.',
  climateContext:
    'Temperate deciduous tree with a winter chilling requirement; frost at bloom and fire blight pressure are the main siting constraints.',
  limitations: [
    'Chilling requirements and harvest windows are cultivar-specific and are not given here.',
    'Fire blight status and control options differ by jurisdiction.',
    'Bagging practice varies by market and is not universal outside East Asia.',
  ],
  sourceReferences: [
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'jp-maff', citedFor: 'Japanese pear production practice' },
    { sourceId: 'cabi', citedFor: 'Pyrus pyrifolia compendium data' },
    { sourceId: 'cornell-cals', citedFor: 'Pome fruit orchard management' },
    { sourceId: 'eppo', citedFor: 'Fire blight regulatory status' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Asian Pear',
    description:
      'Pyrus pyrifolia as a crop: ripening on the tree rather than after picking, fruit bagging, hard thinning, pollinizers and fire blight susceptibility.',
    keywords: [
      'Asian pear',
      'nashi',
      'Pyrus pyrifolia',
      'sand pear',
      'fruit bagging',
    ],
  },
  structuredData: { article: true },
};
