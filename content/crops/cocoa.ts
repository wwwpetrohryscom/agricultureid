import type { CropContent } from '@/types/content';

export const cocoa: CropContent = {
  id: 'crop-cocoa',
  slug: 'cocoa',
  contentType: 'crop',
  title: 'Cocoa',
  scientificName: 'Theobroma cacao',
  alternativeNames: ['Cacao'],
  category: 'Beverage crop',
  subcategory: 'Tropical understory tree crop',
  botanicalFamily:
    'Malvaceae (mallow family, formerly classified in Sterculiaceae)',
  lifecycle: 'Perennial',
  summary:
    'Cocoa is a tropical understory tree grown for the seeds inside its large pods, which are fermented, dried, and processed into cocoa and chocolate products, traditionally cultivated under a canopy of taller shade trees.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cocoa is a small, shade-tolerant tree native to tropical forest understories, where it naturally grows beneath a taller canopy; this origin is reflected in traditional cultivation systems that grow cocoa alongside shade trees, often including other productive species.',
    },
    {
      type: 'paragraph',
      text: 'Flowers and, subsequently, pods form directly on the trunk and older branches (cauliflory), an unusual growth pattern among cultivated tree crops. Each pod contains a number of seeds embedded in sweet pulp, which are removed, fermented, and dried before further processing.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Life cycle', value: 'Perennial understory tree' },
    { label: 'Main species', value: 'Theobroma cacao' },
    {
      label: 'Primary uses',
      value: 'Fermented, dried beans for cocoa and chocolate products',
    },
    {
      label: 'Climate',
      value: 'Warm, humid equatorial tropical lowland',
    },
    {
      label: 'Soil preference',
      value: 'Deep, fertile, well-drained loams and volcanic soils',
      note: 'Sensitive to waterlogging and requires reliable moisture.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa is grown predominantly by smallholder farmers across the humid tropics, with major production in West Africa, Southeast Asia, and Latin America, often as part of diversified farm systems that include other tree and food crops.',
        },
        {
          type: 'paragraph',
          text: 'Traditional shade-grown systems mimic the tree’s native forest-understory habitat, while more intensive, higher-input systems with reduced shade have also been developed to increase yield, involving different management trade-offs.',
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
            { term: 'Family', description: 'Malvaceae (mallow family)' },
            { term: 'Genus and species', description: 'Theobroma cacao' },
            {
              term: 'Genetic groups',
              description:
                'Criollo, Forastero, and Trinitario (a Criollo–Forastero hybrid group), differing in flavor, yield, and disease tolerance',
            },
            {
              term: 'Growth habit',
              description:
                'Small evergreen understory tree bearing flowers and pods directly on the trunk and branches (cauliflory)',
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
          text: 'Cocoa is native to the understory of tropical rainforests in the Amazon basin of South America, where it was domesticated in pre-Columbian times before spreading through Central America and, later, to West Africa and Southeast Asia during the colonial and post-colonial periods.',
        },
        {
          type: 'paragraph',
          text: 'West Africa, particularly Côte d’Ivoire and Ghana, now accounts for the large majority of global production, with significant cultivation also in Southeast Asia and Latin America. Production statistics are compiled by FAO and national and international cocoa-sector bodies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa requires consistently warm, humid conditions typical of equatorial lowland tropics, without a pronounced dry season, reflecting its origin as an understory species in ever-wet rainforest environments.',
        },
        {
          type: 'paragraph',
          text: 'The crop has essentially no cold or frost tolerance, and prolonged dry periods can cause flower and young pod loss, reducing yield in the following months.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa performs best on deep, fertile, well-drained soils with good moisture retention, including rich loams and, in some regions, volcanic soils, reflecting its high nutrient and water demand.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Cocoa is sensitive to waterlogging, which increases the risk of root diseases. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New plantings are established from seedlings or grafted planting material under an established or newly planted shade canopy, with shade level managed according to genetic group, local climate, and desired yield-versus-input balance.',
        },
        {
          type: 'list',
          items: [
            'Genetic group and clone selection for yield, flavor, and disease tolerance',
            'Shade-tree establishment or retention appropriate to the local climate and farming system',
            'Pruning to manage tree architecture and light penetration for pod development',
            'Long-term integration with other food and tree crops in diversified smallholder systems',
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
          text: 'Potassium is closely linked to pod development and bean quality, while nitrogen supports vegetative growth, particularly in young or less-shaded plantings with higher light exposure and growth rates.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa is grown predominantly under rain-fed conditions in consistently humid equatorial regions, with supplemental drip irrigation used in some plantations, particularly during establishment or in areas with a more pronounced dry season.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is sensitive to both drought stress and waterlogging, site drainage is managed alongside water supply.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect pods, leaves, and stems, particularly under wet conditions, while root rot can weaken or kill trees in poorly drained soils. Mealybugs feed on foliage and pods and can vector cocoa swollen shoot virus in affected regions, and the cocoa pod borer tunnels into developing pods, reducing bean recovery and quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant genetic material where available, field sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Ripe pods are cut from the trunk and branches by hand, then opened to remove the seeds and surrounding pulp, which are fermented over several days and subsequently dried before sale or further processing.',
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
            'Fermented, dried beans processed into cocoa liquor, cocoa butter, and cocoa powder',
            'Chocolate manufacturing for confectionery and food products',
            'Pod husks and other by-products used locally as mulch, animal feed, or in composting',
            'Shade trees in agroforestry cocoa systems providing additional food, timber, or fuelwood',
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
    { type: 'pest', slug: 'pod-borer' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'volcanic-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'tea' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of equatorial tropical production, concentrated in West Africa, Southeast Asia, and Latin America.',
  climateContext:
    'Warm, humid understory tree crop requiring consistent moisture without a pronounced dry season; no frost tolerance.',
  limitations: [
    'Genetic group, shade level, and fermentation practice vary substantially by region and are not detailed here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global cocoa production and smallholder role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Cocoa disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cgiar',
      citedFor: 'Cocoa genetic resources and agronomy research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cocoa',
    description:
      'A structured, evidence-based reference on cocoa: classification, tropical climate needs, agroforestry management, nutrition, diseases, pests, and uses.',
    keywords: ['cocoa', 'Theobroma cacao', 'cacao', 'cocoa cultivation'],
  },
  structuredData: { article: true },
};
