import type { CropContent } from '@/types/content';

export const jackfruit: CropContent = {
  id: 'crop-jackfruit',
  slug: 'jackfruit',
  contentType: 'crop',
  title: 'Jackfruit',
  scientificName: 'Artocarpus heterophyllus',
  alternativeNames: ['Jack', 'Kathal', 'Nangka', 'Langka'],
  category: 'Fruit crop',
  subcategory: 'Large tropical tree fruit',
  botanicalFamily: 'Moraceae (mulberry family)',
  lifecycle: 'Perennial',
  summary:
    'Jackfruit is a large tropical tree bearing the biggest tree-borne fruit, eaten ripe as a sweet fruit and unripe as a starchy vegetable and increasingly as a plant-based meat substitute, valued for hardiness and high yield.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jackfruit is a large tropical tree of the mulberry family that produces the largest of all tree-borne fruits. The fruit is versatile: eaten ripe as a sweet dessert fruit, and harvested unripe as a starchy vegetable whose fibrous flesh has gained international popularity as a plant-based meat substitute.',
    },
    {
      type: 'paragraph',
      text: 'Native to South and Southeast Asia, jackfruit is a hardy, productive tree that can yield large quantities of fruit with relatively modest inputs, and it is valued for its edible flesh, seeds, timber, and role in home gardens and agroforestry across the humid tropics.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Moraceae (mulberry family)' },
    { label: 'Life cycle', value: 'Perennial (long-lived tree)' },
    { label: 'Scientific name', value: 'Artocarpus heterophyllus' },
    {
      label: 'Primary uses',
      value:
        'Ripe fruit eaten fresh; unripe fruit as a vegetable and meat substitute; edible seeds',
    },
    {
      label: 'Climate',
      value: 'Warm, humid tropics and subtropics; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams and sandy loams',
      note: 'Deep-rooted; sensitive to waterlogging.',
    },
    {
      label: 'Notable trait',
      value: 'Produces the largest known tree-borne fruit',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit is grown for its very large fruit, used at two distinct stages: unripe, when the firm, starchy flesh is cooked as a vegetable or processed as a meat alternative, and ripe, when the sweet, aromatic flesh is eaten fresh or made into a range of products. The nutritious seeds are also eaten cooked.',
        },
        {
          type: 'paragraph',
          text: 'The tree is common in home gardens and mixed agroforestry systems across South and Southeast Asia and is grown more widely through the humid tropics. Fruit and flesh characteristics vary widely among cultivars, from soft to firm types.',
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
            {
              term: 'Genus and species',
              description: 'Artocarpus heterophyllus',
            },
            {
              term: 'Growth habit',
              description:
                'Large evergreen tropical tree with milky latex, bearing very large compound fruits on the trunk and main branches',
            },
            {
              term: 'Relatives',
              description:
                'Closely related to breadfruit within the genus Artocarpus',
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
          text: 'Jackfruit is native to the rainforests of South and Southeast Asia, with India and Bangladesh long-standing centers of cultivation, and it has spread across the humid tropics of Asia, Africa, and the Americas. It is often grown as a backyard and agroforestry tree rather than in large plantations.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production are limited and often incomplete; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit grows best in the warm, humid tropics and subtropics with well-distributed rainfall, and is sensitive to frost and prolonged drought, though established trees tolerate short dry spells. It is best suited to lowland and mid-elevation tropical climates.',
        },
        {
          type: 'paragraph',
          text: 'Deep rooting gives established trees reasonable resilience, but young trees and fruit set are sensitive to moisture stress and cold.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit performs best on deep, fertile, well-drained loams and sandy loams that allow its deep root system to develop. It is sensitive to waterlogging, which can cause root and collar rots, so good drainage is essential.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Deep, freely draining soils suit the tree’s extensive root system; standing water is a leading cause of decline in jackfruit.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit is grown from seed or, to reproduce selected cultivars, from grafted or budded plants. Grafting preserves desirable fruit traits and shortens the time to bearing. Established trees need relatively little maintenance beyond pruning, sanitation, and fruit thinning.',
        },
        {
          type: 'list',
          items: [
            'Grafted or budded plants used to propagate selected cultivars true to type',
            'Site selection for deep, well-drained soil and shelter from frost',
            'Pruning and training to manage tree size and ease harvest',
            'Fruit thinning and sanitation to support fruit size and limit pests and rots',
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
          text: 'Jackfruit trees are moderately demanding, and balanced nutrition supports vegetative growth and the heavy fruit load the tree can carry. Organic matter and mulching are widely used in smallholder systems to maintain fertility.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit is grown mainly under rain-fed conditions in the humid tropics. Irrigation supports establishment, growth, and fruiting in areas with a pronounced dry season, while good drainage remains essential to avoid root and collar rots.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose and fruit rots affect jackfruit, particularly under humid conditions, and root and collar rots occur on poorly drained soils. Good drainage, sanitation, and prompt handling of fruit help limit losses.',
        },
        {
          type: 'paragraph',
          text: 'Fruit flies attack ripening fruit, and mealybugs, scale insects, and shoot and fruit borers also affect the tree. Management combines sanitation, fruit bagging in some systems, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Jackfruit is harvested by cutting the heavy fruit from the trunk or branches, at an immature stage for vegetable use or when mature and beginning to soften and become aromatic for fresh use. Given the fruit’s size and weight, careful handling is important.',
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
            'Ripe flesh eaten fresh and used in desserts, drinks, and preserves',
            'Unripe flesh cooked as a vegetable and processed as a plant-based meat substitute',
            'Seeds boiled or roasted as a nutritious food',
            'Timber, latex, and other tree products used locally',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'banana' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview centered on South and Southeast Asia. Often grown as a home-garden and agroforestry tree rather than in plantations.',
  climateContext:
    'Warm, humid tropical tree with good rainfall requirements; frost- and drought-sensitive when young.',
  limitations: [
    'Cultivars differ widely in flesh type and fruit characteristics; management is largely low-input and not reduced to universal guidance here.',
    'Production statistics are incomplete because much of the crop is grown in home gardens.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of jackfruit as a tropical fruit and food crop',
    },
    {
      sourceId: 'icar',
      citedFor: 'Jackfruit horticulture and cultivar research in South Asia',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Jackfruit crop, disease, and pest compendium data',
    },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Jackfruit (Artocarpus heterophyllus)',
    description:
      'An evidence-based reference on jackfruit: tree botany, tropical agronomy, ripe and unripe fruit uses, meat substitute, soils, diseases, and pests.',
    keywords: [
      'jackfruit',
      'Artocarpus heterophyllus',
      'jack',
      'tropical fruit',
    ],
  },
  structuredData: { article: true },
};
