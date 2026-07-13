import type { CropContent } from '@/types/content';

export const tamarind: CropContent = {
  id: 'crop-tamarind',
  slug: 'tamarind',
  contentType: 'crop',
  title: 'Tamarind',
  scientificName: 'Tamarindus indica',
  alternativeNames: ['Imli', 'Tamarindo', 'Indian date'],
  category: 'Fruit and tree crop',
  subcategory: 'Leguminous fruit tree',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Perennial',
  summary:
    'Tamarind is a long-lived tropical legume tree grown for its tangy, pulpy pods used as a souring agent and flavoring, valued for hardiness, drought tolerance, and multipurpose products across the semi-arid tropics.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tamarind is a large, long-lived tropical tree of the legume family, grown for its curved pods filled with a sticky, tangy pulp used worldwide as a souring agent, flavoring, and ingredient in sauces, drinks, confections, and savory dishes. It is a familiar tree of home gardens, avenues, and agroforestry systems across the semi-arid tropics.',
    },
    {
      type: 'paragraph',
      text: 'The tree is prized for its hardiness and drought tolerance, thriving in hot, seasonally dry climates and on poor soils where few fruit trees succeed. Although a legume, tamarind is grown primarily as a fruit and multipurpose tree, providing pulp, seeds, timber, shade, and fodder.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Perennial (long-lived tree)' },
    { label: 'Scientific name', value: 'Tamarindus indica' },
    {
      label: 'Primary uses',
      value:
        'Fruit pulp as a souring agent and flavoring; seeds, timber, and shade',
    },
    {
      label: 'Climate',
      value:
        'Hot, semi-arid tropics; drought- and heat-tolerant, frost-sensitive',
    },
    {
      label: 'Soil preference',
      value:
        'Wide range of well-drained soils, including sandy and lateritic soils',
      note: 'Deep-rooted and hardy; tolerant of poor soils but not waterlogging.',
    },
    {
      label: 'Cropping role',
      value: 'Multipurpose fruit, shade, and agroforestry tree',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Tamarind is grown chiefly for the pulp of its pods, which is used fresh or processed into paste, concentrate, and other products for cooking and beverages. Sweeter dessert types are eaten fresh, while sour types are used mainly for culinary souring. The tree also yields seeds, valued timber, shade, and fodder.',
        },
        {
          type: 'paragraph',
          text: 'As a hardy, low-maintenance tree, tamarind is common in dryland home gardens and agroforestry, where a single mature tree can be productive for many decades.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Tamarindus indica' },
            {
              term: 'Growth habit',
              description:
                'Large, long-lived evergreen or semi-evergreen tree with a dense crown, feathery leaves, and curved indehiscent pods',
            },
            {
              term: 'Note on nitrogen fixation',
              description:
                'A legume, but effective nodulation and nitrogen fixation are limited and variable compared with grain legumes',
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
          text: 'Tamarind is generally considered to be of tropical African origin, from where it was carried to South Asia in antiquity and became deeply associated with Indian cuisine, and later distributed throughout the tropics, including Southeast Asia and the Americas.',
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
          text: 'Tamarind is well adapted to hot, semi-arid tropical climates with a pronounced dry season, and established trees are notably drought- and heat-tolerant. It is sensitive to frost, particularly when young, which limits its cultivation in cooler areas.',
        },
        {
          type: 'paragraph',
          text: 'A dry period aids flowering and fruit ripening, and the deep-rooted tree draws on stored soil moisture through the dry season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tamarind grows on a wide range of soils, from deep alluvial loams to poor sandy and lateritic soils, provided drainage is adequate. It is deep-rooted and hardy but, like most trees, is sensitive to prolonged waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Tamarind’s tolerance of poor, dry soils makes it valuable for dryland planting, but good drainage remains important for healthy growth.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Tamarind is grown from seed or, to reproduce selected fruit types and shorten the time to bearing, from grafted or budded plants. Once established, the hardy tree requires little maintenance beyond formative pruning and sanitation.',
        },
        {
          type: 'list',
          items: [
            'Grafted or budded plants used to propagate selected sweet or sour types true to type',
            'Site selection for good drainage and protection of young trees from frost',
            'Formative pruning to develop a strong framework',
            'Sanitation to limit pod pests and post-harvest losses',
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
          text: 'Established tamarind trees are undemanding and tolerate low-fertility soils. Adequate nutrition supports growth and consistent pod production, particularly for young and grafted trees being brought into bearing.',
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
          text: 'Tamarind is grown mainly under rain-fed conditions and, once established, needs little or no irrigation thanks to its deep roots and drought tolerance. Irrigation supports establishment of young trees and can improve fruiting in very dry settings.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Tamarind is a hardy tree with relatively few serious diseases, though anthracnose, powdery mildew, leaf spots, and sooty mold occur, and root rots can affect trees on poorly drained soils. Post-harvest pests and molds affect stored pulp.',
        },
        {
          type: 'paragraph',
          text: 'Scale insects and mealybugs infest the tree, and pod-boring insects and stored-product beetles damage the pods and pulp. Management relies mainly on healthy planting material, sanitation, proper drying and storage of pulp, and authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Tamarind pods are harvested when fully mature, when the shell becomes brittle and the pulp develops its characteristic color and tang. Pods are picked or shaken from the tree, then the pulp is extracted and dried or processed for storage and marketing.',
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
            'Pulp used as a souring agent and flavoring in sauces, chutneys, drinks, and savory dishes',
            'Sweet types eaten fresh; pulp processed into paste, concentrate, and confectionery',
            'Seeds used for food, starch, and gum; timber valued for its hardness',
            'Tree used for shade, windbreaks, fodder, and in agroforestry',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'date-palm' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview across the semi-arid tropics, with South Asia a major center of use. Often grown as a home-garden and agroforestry tree.',
  climateContext:
    'Hot, semi-arid tropical tree; drought- and heat-tolerant once established, frost-sensitive when young.',
  limitations: [
    'Sweet and sour types differ in use, and much production is from scattered home-garden and roadside trees, so management is not reduced to universal guidance here.',
    'Effective nitrogen fixation is limited and variable, so tamarind is treated primarily as a fruit and multipurpose tree.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of tamarind as a multipurpose tropical tree crop',
    },
    {
      sourceId: 'icar',
      citedFor: 'Tamarind horticulture and cultivar research in South Asia',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Tamarind crop, disease, and pest compendium data',
    },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Tamarind (Tamarindus indica)',
    description:
      'An evidence-based reference on tamarind: leguminous tree botany, semi-arid drought tolerance, pod pulp uses, soils, diseases, pests, and agroforestry.',
    keywords: ['tamarind', 'Tamarindus indica', 'imli', 'tamarind tree'],
  },
  structuredData: { article: true },
};
