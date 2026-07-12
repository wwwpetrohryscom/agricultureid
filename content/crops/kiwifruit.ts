import type { CropContent } from '@/types/content';

export const kiwifruit: CropContent = {
  id: 'crop-kiwifruit',
  slug: 'kiwifruit',
  contentType: 'crop',
  title: 'Kiwifruit',
  scientificName:
    'Actinidia deliciosa (fuzzy/green kiwifruit); Actinidia chinensis (gold kiwifruit)',
  alternativeNames: ['Kiwi', 'Chinese gooseberry'],
  category: 'Vine fruit crop',
  subcategory: 'Deciduous woody vine (liana)',
  botanicalFamily: 'Actinidiaceae',
  lifecycle: 'Perennial',
  summary:
    'Kiwifruit is a deciduous woody vine trained on a trellis or pergola system and grown for its fuzzy or smooth-skinned fruit. Vines are typically dioecious, requiring separate male and female plants for fruit set.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kiwifruit is grown commercially as a vigorous, deciduous woody vine (a liana) rather than as a freestanding tree or shrub. Because the vine climbs and needs physical support to fruit productively, plantings are built around a permanent trellis or pergola structure rather than an open orchard canopy.',
    },
    {
      type: 'paragraph',
      text: 'Most commercially grown kiwifruit cultivars are dioecious, meaning individual vines are either male or female. Female vines produce the fruit, but they require pollen from nearby male vines to set a commercial crop, so plantings interplant a proportion of male pollinizer vines among the female fruiting vines.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Actinidiaceae' },
    { label: 'Life cycle', value: 'Perennial deciduous woody vine' },
    {
      label: 'Main species',
      value: 'Actinidia deliciosa (green), Actinidia chinensis (gold)',
    },
    {
      label: 'Growth habit',
      value: 'Climbing liana trained on a trellis or pergola',
    },
    {
      label: 'Pollination',
      value:
        'Typically dioecious; requires male pollinizer vines among female fruiting vines',
    },
    {
      label: 'Climate',
      value:
        'Temperate; requires a winter chilling period for normal flowering',
      note: 'Vines are also frost-sensitive, particularly at bud break in spring.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Kiwifruit is grown as a long-lived, deciduous vine supported on a permanent trellis or pergola structure. Once established, a planting can remain productive for many years, making trellis design, cultivar choice, and pollinizer arrangement long-term decisions made largely at establishment.',
        },
        {
          type: 'paragraph',
          text: 'Green kiwifruit (Actinidia deliciosa) and gold kiwifruit (Actinidia chinensis) are the two principal commercial types, differing in skin texture, flesh color, and flavor, with cultivar-specific management practices in each case.',
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
            { term: 'Family', description: 'Actinidiaceae' },
            { term: 'Genus', description: 'Actinidia' },
            {
              term: 'Principal species',
              description:
                'Actinidia deliciosa (fuzzy/green kiwifruit) and Actinidia chinensis (gold kiwifruit)',
            },
            {
              term: 'Growth habit',
              description:
                'Vigorous, climbing, deciduous woody vine (liana), not a freestanding tree',
            },
            {
              term: 'Reproductive habit',
              description:
                'Predominantly dioecious, with separate male and female vines; female flowers require pollination from a male vine to set fruit',
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
          text: 'Kiwifruit originates from wild Actinidia species native to central and eastern China. Selection and breeding, followed by international spread and commercialization during the twentieth century, established it as a globally traded fruit grown in a number of temperate and mild-winter regions outside its native range.',
        },
        {
          type: 'paragraph',
          text: 'Current production areas, leading cultivars, and trade patterns change over time; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kiwifruit vines require a period of winter chilling to break dormancy and flower normally, similar to other temperate deciduous fruit crops, with the specific chilling need varying by species and cultivar.',
        },
        {
          type: 'paragraph',
          text: 'Spring frost is a significant risk, since new growth and flowers emerging after bud break are frost-sensitive and can be damaged or destroyed by a late cold event, potentially reducing or eliminating that season’s crop.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kiwifruit performs best on deep, well-drained loam and sandy soils with good moisture-holding capacity. The vine’s vigorous root system benefits from soil depth and structure, and it has poor tolerance of waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site assessment for a kiwifruit planting should draw on local soil survey information, including drainage characteristics, given the crop’s sensitivity to waterlogged conditions.',
        },
      ],
    },
    {
      id: 'planting-and-training',
      heading: 'Planting and training',
      body: [
        {
          type: 'paragraph',
          text: 'Because kiwifruit is a climbing vine rather than a self-supporting tree, establishing a planting centers on building a permanent trellis or pergola structure strong enough to support the vine’s weight and vigorous growth over many years, alongside selecting compatible male and female vines.',
        },
        {
          type: 'list',
          items: [
            'Trellis or pergola structure selection and construction as a permanent, load-bearing framework',
            'Selection of compatible male pollinizer and female fruiting vines, interplanted so pollinators are within reach of flowering female vines',
            'Training young vines onto the support structure and establishing a permanent framework of cordons or canes',
            'Ongoing pruning to manage vine vigor, light exposure, and fruiting wood renewal across many productive years',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The proportion and arrangement of male to female vines needed for adequate pollination varies with cultivar, vine layout, and reliance on managed pollination; specific ratios are a design decision best made with local horticultural guidance rather than a fixed universal figure.',
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen supports vine vigor and canopy development, which must be balanced against excessive shading of fruiting wood. Potassium influences fruit size and quality, while calcium is associated with fruit firmness and storage quality, as in many other tree and vine fruits.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Kiwifruit vines have a relatively high water demand due to their large leaf area and vigorous growth habit. Drip irrigation is widely used in commercial plantings to supply water efficiently to the root zone while managing canopy humidity.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during flowering and fruit development while preventing waterlogging, to which the vine’s root system is sensitive.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial canker of kiwifruit, caused by Pseudomonas syringae pv. actinidiae (commonly referred to as Psa), is a serious bacterial disease of the vine and wood that causes cankers, dieback, and, in severe cases, vine death, rather than merely superficial leaf spotting. It has caused serious documented disruption to kiwifruit industries in several major growing regions historically and remains a significant ongoing risk factor requiring careful biosecurity and orchard hygiene practices. Gray mold can affect flowers, fruit, and stored fruit, particularly under cool, humid conditions.',
        },
        {
          type: 'paragraph',
          text: 'Leaf rollers, scale insects, and thrips are common insect pests that can affect foliage and fruit finish.',
        },
        {
          type: 'paragraph',
          text: 'Management combines disease-tolerant cultivars and rootstocks where available, strict sanitation and biosecurity practices, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Kiwifruit is harvested by hand once fruit reaches a maturity standard, commonly assessed through internal indicators such as soluble solids content, since the fruit continues to ripen and soften significantly after picking during storage and handling.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Green versus gold kiwifruit',
          columns: ['Type', 'Species', 'Typical characteristics'],
          rows: [
            [
              'Green (fuzzy) kiwifruit',
              'Actinidia deliciosa',
              'Fuzzy brown skin, green flesh, tart-sweet flavor',
            ],
            [
              'Gold kiwifruit',
              'Actinidia chinensis',
              'Smoother, often bronze skin, yellow flesh, generally sweeter flavor',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating fruit',
            'Juice, purée, and processed fruit products',
            'Use in baked goods and prepared foods',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'fig' },
    { type: 'crop', slug: 'avocado' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Trellis design, cultivar choice, and pollinizer arrangement are region- and site-specific.',
  climateContext:
    'Temperate deciduous vine requiring winter chill; frost-sensitive at bud break and susceptible to significant bacterial disease pressure (Psa) in some regions.',
  limitations: [
    'Trellis system design, chilling-hour specifics, and male-to-female vine ratios are cultivar- and site-specific decisions not covered by universal values here.',
    'The regional presence and severity of bacterial canker (Psa) vary and should be confirmed against current local plant-health authority guidance.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global kiwifruit production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Bacterial canker (Psa) and kiwifruit pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Integrated pest management guidance relevant to kiwifruit pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kiwifruit',
    description:
      'A structured reference on kiwifruit: dioecious vine biology, trellis training, climate and soil needs, nutrition, bacterial canker risk, and uses.',
    keywords: [
      'kiwifruit',
      'Actinidia deliciosa',
      'kiwi vine',
      'kiwifruit trellis',
    ],
  },
  structuredData: { article: true },
};
