import type { CropContent } from '@/types/content';

export const breadfruit: CropContent = {
  id: 'crop-breadfruit',
  slug: 'breadfruit',
  contentType: 'crop',
  title: 'Breadfruit',
  scientificName: 'Artocarpus altilis',
  alternativeNames: ['Ulu', 'Uru', 'Fruta de pan'],
  category: 'Fruit and staple crop',
  subcategory: 'Starchy tropical tree fruit',
  botanicalFamily: 'Moraceae (mulberry family)',
  lifecycle: 'Perennial',
  summary:
    'Breadfruit is a large tropical tree grown for its starchy, carbohydrate-rich fruit eaten as a cooked staple, valued as a long-lived, low-maintenance food tree across the Pacific, Caribbean, and humid tropics.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Breadfruit is a large, long-lived tropical tree grown for its round, starchy fruit, which is eaten cooked as a carbohydrate staple much like a potato or bread when roasted, boiled, or fried. It is a traditional and culturally important food tree across the Pacific Islands and is also grown in the Caribbean, parts of Africa, and tropical Asia.',
    },
    {
      type: 'paragraph',
      text: 'A single mature tree can be highly productive and continue bearing for many years with relatively little care, which, together with the fruit’s nutritional value, has drawn renewed attention to breadfruit as a food-security crop. Most cultivated breadfruit is seedless and propagated vegetatively.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Moraceae (mulberry family)' },
    { label: 'Life cycle', value: 'Perennial (long-lived tree)' },
    { label: 'Scientific name', value: 'Artocarpus altilis' },
    {
      label: 'Primary uses',
      value:
        'Starchy fruit eaten cooked as a staple; also dried and milled into flour',
    },
    {
      label: 'Climate',
      value: 'Warm, humid lowland tropics; frost- and drought-sensitive',
    },
    {
      label: 'Soil preference',
      value:
        'Deep, fertile, well-drained soils; tolerant of sandy and coral soils',
      note: 'Grows on a range of island soils but needs good drainage.',
    },
    {
      label: 'Cropping role',
      value:
        'Long-lived, low-maintenance staple food tree; common in agroforestry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Breadfruit is grown chiefly for its starchy fruit, which is harvested mature but firm and cooked as a staple carbohydrate. The fruit can also be dried and ground into flour, extending its use beyond the fresh season. The tree is a familiar component of Pacific home gardens and agroforestry systems.',
        },
        {
          type: 'paragraph',
          text: 'Because most cultivated breadfruit is seedless and propagated vegetatively, particular cultivars with desirable fruit and bearing characteristics are maintained and distributed as clones.',
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
            { term: 'Genus and species', description: 'Artocarpus altilis' },
            {
              term: 'Growth habit',
              description:
                'Large evergreen or semi-deciduous tropical tree with a milky latex and large, deeply lobed leaves',
            },
            {
              term: 'Relatives',
              description:
                'Closely related to jackfruit and breadnut within the genus Artocarpus',
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
          text: 'Breadfruit was domesticated in the western Pacific and New Guinea region and carried across the Pacific by voyaging peoples over thousands of years. It was later introduced to the Caribbean and other tropical regions, where it is now widely grown.',
        },
        {
          type: 'paragraph',
          text: 'Production is largely for local consumption and is not fully captured in international statistics; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Breadfruit thrives in the warm, humid lowland tropics with high rainfall and is sensitive to frost, cool temperatures, and prolonged drought. It is best suited to equable tropical climates without severe dry seasons.',
        },
        {
          type: 'paragraph',
          text: 'Strong winds can damage the large-leaved, spreading trees, so sheltered sites are preferred in cyclone-prone areas.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Breadfruit grows on a range of soils, from deep fertile loams to the sandy and coral soils of Pacific atolls, provided drainage is good. It tolerates some salinity in coastal settings but is sensitive to waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Good drainage is essential, as breadfruit is susceptible to root rot on wet, poorly drained soils despite its tolerance of otherwise marginal island soils.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Seedless breadfruit is propagated vegetatively, traditionally from root suckers and root cuttings and, increasingly, through tissue culture to distribute selected cultivars widely. Once established, trees require relatively little maintenance beyond weed control, mulching, and pruning.',
        },
        {
          type: 'list',
          items: [
            'Vegetative propagation of selected seedless cultivars (root suckers, cuttings, or tissue culture)',
            'Site selection for good drainage and, where needed, wind shelter',
            'Mulching and organic matter to conserve moisture and supply nutrients',
            'Pruning to manage tree size and ease of harvest',
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
          text: 'Established breadfruit trees are relatively undemanding, but adequate nutrition, particularly on poor sandy and coral soils, supports growth and fruiting. Organic matter and mulch are widely used to build and maintain fertility in island systems.',
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
          text: 'Breadfruit is grown mainly under rain-fed conditions in high-rainfall tropics. In drier settings or on rapidly draining sandy and coral soils, irrigation supports establishment and consistent fruiting, and mulching helps conserve moisture.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit rots and anthracnose affect breadfruit, particularly under humid conditions and in ripe fruit, and root rot can occur on poorly drained soils. Good drainage, sanitation, and prompt handling of harvested fruit help limit losses.',
        },
        {
          type: 'paragraph',
          text: 'Mealybugs, scale insects, and fruit flies are among the pests affecting the tree and fruit. Management relies mainly on healthy planting material, sanitation, and monitoring, with authorized controls used according to their labels where warranted.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Breadfruit is harvested by hand or with picking poles once the fruit is mature but still firm, before it softens and ripens. The fruit is perishable and bruises easily, so careful handling and prompt cooking, processing, or marketing are important.',
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
            'Mature fruit roasted, boiled, steamed, or fried as a staple carbohydrate',
            'Fruit dried and milled into gluten-free flour for longer storage',
            'Ripe fruit used in sweet dishes; seeds of seeded types eaten cooked',
            'Timber, latex, and other tree products used in traditional Pacific cultures',
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
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'coconut' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'permaculture' },
  ],
  glossaryTerms: ['perennial-crop', 'yield'],
  geographicScope:
    'Global overview centered on the Pacific Islands and the humid tropics. Much production is for local consumption.',
  climateContext:
    'Warm, humid lowland tropical tree requiring good rainfall; frost-, drought-, and wind-sensitive.',
  limitations: [
    'Cultivars differ widely in fruit characteristics and seasonality; management is largely low-input and not reduced to universal guidance here.',
    'Production statistics are incomplete because much of the crop is grown for subsistence.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of breadfruit as a tropical staple tree crop',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Breadfruit crop, disease, and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'britannica',
      citedFor: 'Botanical description and history of use',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Breadfruit (Artocarpus altilis)',
    description:
      'An evidence-based reference on breadfruit: tree botany, humid-tropics agronomy, starchy staple use, propagation, soils, diseases, pests, and uses.',
    keywords: ['breadfruit', 'Artocarpus altilis', 'ulu', 'staple tree crop'],
  },
  structuredData: { article: true },
};
