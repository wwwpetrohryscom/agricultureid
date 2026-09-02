import type { CropContent } from '@/types/content';

export const seaBuckthorn: CropContent = {
  id: 'crop-sea-buckthorn',
  slug: 'sea-buckthorn',
  contentType: 'crop',
  title: 'Sea Buckthorn',
  scientificName: 'Hippophae rhamnoides',
  alternativeNames: ['Seaberry', 'Sallowthorn'],
  category: 'Fruit crop',
  subcategory: 'Nitrogen-fixing deciduous shrub',
  botanicalFamily: 'Elaeagnaceae (oleaster family)',
  lifecycle: 'Perennial',
  summary:
    "Sea buckthorn berries cannot practically be picked: the standard commercial harvest is to cut the fruiting branch, freeze it, and shake the berries off — which destroys next season's wood on that shoot and turns pruning and harvest into the same operation.",
  introduction: [
    {
      type: 'paragraph',
      text: "Sea buckthorn carries small berries pressed tightly along thorny shoots, and the berries burst if pulled. The industry's answer is to cut the whole fruiting branch, freeze it, and shake the frozen berries free.",
    },
    {
      type: 'paragraph',
      text: "That solves the picking problem and creates the crop's central agronomic tension: the wood removed at harvest is the wood that would have carried part of the next crop, so harvest and pruning are one decision. It is also dioecious and wind-pollinated, so a planting must carry males that never fruit.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Elaeagnaceae (oleaster family)' },
    {
      label: 'Harvest method',
      value: 'Fruiting branches cut, frozen, and berries shaken free',
    },
    {
      label: 'Consequence',
      value:
        'Harvest removes bearing wood; harvest and pruning are one operation',
    },
    {
      label: 'Sexual system',
      value: 'Dioecious; separate male and female plants, wind-pollinated',
    },
    {
      label: 'Nitrogen fixation',
      value: 'Root nodules with Frankia actinobacteria',
    },
    { label: 'Cold tolerance', value: 'Survives extreme continental winters' },
  ],
  sections: [
    {
      id: 'branch-harvest',
      heading: 'Harvest by cutting and freezing',
      body: [
        {
          type: 'paragraph',
          text: 'The berries are soft, tightly attached and surrounded by rigid thorns, so hand picking is slow and destructive. Commercial practice is to cut fruiting branches, freeze them, and shake the berries off while frozen, which is fast and clean and requires a freezing facility next to the field.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pruning-conflict',
      heading: 'Harvest is pruning',
      body: [
        {
          type: 'paragraph',
          text: 'Because the cut branch is bearing wood, a block harvested this way is effectively pruned by the harvest, and growers manage the shrub on a rotation of shoots so that some wood is always two seasons ahead of the cut. Planning the cut is planning the next crop, which is not true of any fruit that is picked.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'dioecious',
      heading: 'Males in the row',
      body: [
        {
          type: 'paragraph',
          text: 'Male and female plants are separate and pollen moves on wind, so a planting carries male plants that never bear fruit, positioned for prevailing wind. Sex cannot be told from a young seedling, so commercial plantings use vegetatively propagated material of known sex.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'A fruit crop that fixes nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'Sea buckthorn forms root nodules with Frankia actinobacteria and fixes atmospheric nitrogen, which is why it establishes on poor sand, mine spoil and eroding slopes, and why it is planted for land reclamation as often as for fruit. Very few fruit crops bring their own nitrogen.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'thorns',
      heading: 'Thorns shape every operation',
      body: [
        {
          type: 'paragraph',
          text: 'The shoots are rigid and sharply thorned, and this governs row spacing, pruning method, protective equipment and the impossibility of hand harvest at scale. It is the practical reason the branch-cutting method became standard rather than an alternative.',
        },
      ],
    },
    {
      id: 'suckering',
      heading: 'Suckering and spread',
      body: [
        {
          type: 'paragraph',
          text: 'The shrub suckers strongly from roots and spreads laterally out of the row, which is useful for erosion control and a maintenance burden in an orchard. Where it has been planted outside its range it has naturalised, and in some regions it is treated as a woody invader.',
        },
      ],
    },
    {
      id: 'cold',
      heading: 'Extreme cold hardiness',
      body: [
        {
          type: 'paragraph',
          text: 'Mature plants tolerate deep continental winters, which is why the crop is grown in Siberia, Mongolia, northern China, the Canadian prairies and the Baltic. Cold is rarely the limiting factor for this crop; harvest labour and processing capacity are.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'A processed crop, not a fresh one',
      body: [
        {
          type: 'paragraph',
          text: 'The berries are intensely acidic and are almost never sold fresh; the crop moves as juice, purée, and oil pressed from seed and pulp. The economics therefore depend on processing capacity within reach of the field, and a grower without a processor has an unsellable crop.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Slow to first crop',
      body: [
        {
          type: 'paragraph',
          text: 'Plants take several years to come into bearing and reach full production later still, and because harvest removes wood, yields build unevenly. The long establishment combined with the need for a nearby freezer and processor is what keeps the crop marginal outside regions with an established industry.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'verticillium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'podzol' },
    { type: 'soil', slug: 'fluvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'wind' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'blackcurrant' },
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'cranberry' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Northern China, Mongolia, Russia, the Baltic states, Germany and the Canadian prairies. China holds the largest planted area.',
  climateContext:
    'Cold continental and coastal; extremely winter-hardy, drought-tolerant once established and tolerant of saline and poor soils.',
  limitations: [
    'Harvest practice differs between operations and some growers use whole-plant or mechanical systems; branch cutting and freezing is the common commercial method rather than the only one.',
    'Naturalisation and invasive listings are region-specific and are not reproduced here.',
    'Composition and processing yields of the oil fractions are outside the scope of this page.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Hippophae rhamnoides compendium data' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    { sourceId: 'fao', citedFor: 'Non-conventional fruit crop context' },
    {
      sourceId: 'cn-mara',
      citedFor: 'Chinese sea buckthorn production context',
    },
    {
      sourceId: 'ca-sk-agr',
      citedFor: 'Prairie fruit crop production guidance',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Sea Buckthorn',
    description:
      'Hippophae rhamnoides as a crop: branch-cut and freeze harvest, harvest as pruning, dioecious plantings, Frankia nitrogen fixation and processing dependence.',
    keywords: [
      'sea buckthorn',
      'Hippophae rhamnoides',
      'seaberry',
      'branch harvest',
      'nitrogen-fixing shrub',
    ],
  },
  structuredData: { article: true },
};
