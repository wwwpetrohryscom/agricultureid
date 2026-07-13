import type { CropContent } from '@/types/content';

export const dragonFruit: CropContent = {
  id: 'crop-dragon-fruit',
  slug: 'dragon-fruit',
  contentType: 'crop',
  title: 'Dragon Fruit',
  scientificName: 'Selenicereus undatus (syn. Hylocereus undatus)',
  alternativeNames: ['Pitaya', 'Pitahaya', 'Strawberry pear'],
  category: 'Fruit crop',
  subcategory: 'Climbing cactus fruit',
  botanicalFamily: 'Cactaceae (cacti)',
  lifecycle: 'Perennial',
  summary:
    'Dragon fruit is a climbing cactus grown in warm, dry-adapted conditions for its striking, mildly sweet fruit, valued for drought tolerance, night-blooming flowers, and production on trellised, long-lived plants.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dragon fruit, or pitaya, is the fruit of climbing, epiphytic cacti grown in the tropics and subtropics. The plants produce large, showy, night-blooming flowers and colorful fruit with soft, mildly sweet flesh dotted with small seeds. Several species are cultivated, with white-fleshed and red-fleshed types among the most common.',
    },
    {
      type: 'paragraph',
      text: 'As cacti, dragon fruit plants use crassulacean acid metabolism (CAM) photosynthesis and are well adapted to warm, relatively dry conditions and drought, though they still require support and, for reliable fruit set in some types, assisted pollination. They are grown as long-lived, trellised perennials.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cactaceae (cacti)' },
    { label: 'Life cycle', value: 'Perennial (long-lived climbing cactus)' },
    {
      label: 'Scientific name',
      value: 'Selenicereus undatus (syn. Hylocereus undatus)',
    },
    {
      label: 'Primary uses',
      value:
        'Fresh fruit; also used in juices, desserts, and processed products',
    },
    {
      label: 'Climate',
      value: 'Warm tropics and subtropics; drought-tolerant, frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, light soils; intolerant of waterlogging',
      note: 'Rots readily on wet, poorly drained soils despite drought tolerance.',
    },
    {
      label: 'Support',
      value:
        'Grown on posts or trellises with the climbing stems trained upward',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit is grown for its distinctive fruit, sold fresh and used in juices and desserts, with strong demand in specialty and export markets. Plants are trained on sturdy posts or trellises, and, because the flowers open at night, pollination is carried out by nocturnal pollinators or by hand in some cultivars to ensure fruit set.',
        },
        {
          type: 'paragraph',
          text: 'Its CAM physiology and drought tolerance make it suited to warm, seasonally dry environments, and once established a planting can remain productive for many years.',
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
            { term: 'Family', description: 'Cactaceae (cactus family)' },
            {
              term: 'Principal species',
              description:
                'Selenicereus undatus (formerly Hylocereus undatus) and related species',
            },
            {
              term: 'Growth habit',
              description:
                'Climbing, epiphytic cactus with fleshy, three-angled stems, aerial roots, and large night-blooming flowers',
            },
            {
              term: 'Photosynthesis',
              description:
                'Uses crassulacean acid metabolism (CAM), aiding water-use efficiency',
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
          text: 'Dragon fruit is native to the Americas, particularly Central America and Mexico, and has become a major cultivated fruit in Southeast Asia, notably Vietnam, as well as in other tropical and subtropical regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit grows best in warm tropical and subtropical climates and is sensitive to frost. As a drought-tolerant cactus it withstands dry periods well, but very high temperatures and intense sun can scorch the stems, and some shade is beneficial in the hottest conditions.',
        },
        {
          type: 'paragraph',
          text: 'Flowering is influenced by day length in some types, and supplemental night lighting is used in intensive systems in parts of Asia to extend the flowering season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit requires light, well-drained soils and is intolerant of waterlogging, which readily causes stem and root rots. It tolerates a range of soil types, including sandy and stony soils, provided drainage is excellent and organic matter is adequate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Despite its drought tolerance, dragon fruit rots readily in wet, poorly drained soils, so free drainage is essential.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit is propagated easily from stem cuttings, which establish quickly and come into bearing within a couple of years. Plants are trained up sturdy posts or trellises with a supporting frame at the top, over which the stems cascade and fruit.',
        },
        {
          type: 'list',
          items: [
            'Propagation from stem cuttings of selected types',
            'Sturdy post or trellis support with a frame to carry the cascading stems',
            'Pruning to manage the mass of stems and encourage productive growth',
            'Pollination management, including hand or night-time pollination for some cultivars',
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
          text: 'Dragon fruit responds to balanced nutrition and organic matter, which support stem growth and fruiting on the productive frame. As a CAM plant with shallow, spreading roots, it benefits from well-aerated soils and adequate but not excessive water and nutrients.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit tolerates drought but produces best with regular, moderate moisture during growth and fruiting, commonly supplied by drip irrigation in commercial plantings. Overwatering and poor drainage are more damaging than short dry spells.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Stem and fruit spots, anthracnose, and stem rots are among the diseases affecting dragon fruit, especially under wet or humid conditions, and root and basal rots occur on poorly drained soils. Good drainage and sanitation are central to disease management.',
        },
        {
          type: 'paragraph',
          text: 'Mealybugs and scale insects colonize stems and fruit, ants tend these sap feeders, and fruit flies and birds damage ripening fruit. Management combines sanitation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dragon fruit is harvested by cutting the fruit from the stem once it has developed full skin color, a few days to a week or so after the color change begins. Because the fruit does not sweeten much after picking, harvest timing is important for eating quality.',
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
            'Fresh fruit eaten out of hand and in fruit salads',
            'Juice, smoothies, and desserts, with red-fleshed types also valued for their color',
            'Processed products including preserves and dried fruit',
            'Ornamental value of the plants and their large night-blooming flowers',
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
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'aloe-vera' },
    { type: 'crop', slug: 'guava' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview across the tropics and subtropics, with major production in Southeast Asia and origins in the Americas.',
  climateContext:
    'Warm, drought-tolerant CAM cactus; frost-sensitive and intolerant of waterlogging; some types day-length-influenced in flowering.',
  limitations: [
    'Species and type selection and pollination requirements vary by cultivar and are not reduced to universal guidance here.',
    'Fruit sweetens little after harvest, so timing strongly affects eating quality.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of dragon fruit (pitaya) in tropical fruit production',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Dragon fruit crop, disease, and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Dragon Fruit (Selenicereus undatus)',
    description:
      'An evidence-based reference on dragon fruit (pitaya): cactus botany, CAM drought tolerance, trellising, pollination, drainage, diseases, and uses.',
    keywords: ['dragon fruit', 'pitaya', 'Selenicereus undatus', 'Hylocereus'],
  },
  structuredData: { article: true },
};
