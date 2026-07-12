import type { CropContent } from '@/types/content';

export const mango: CropContent = {
  id: 'crop-mango',
  slug: 'mango',
  contentType: 'crop',
  title: 'Mango',
  scientificName: 'Mangifera indica',
  category: 'Fruit crop',
  subcategory: 'Tropical tree fruit',
  botanicalFamily: 'Anacardiaceae (cashew family)',
  lifecycle: 'Perennial',
  summary:
    'Mango is a tropical and subtropical evergreen tree grown widely for its fresh fruit. Orchards are established from grafted trees, which take several years to reach significant bearing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mango is a large evergreen tree cultivated throughout the tropics and warmer subtropics, prized for its fragrant, sweet fruit. Commercial orchards are established from trees grafted onto seedling rootstocks, since grafting preserves the characteristics of a chosen cultivar and shortens the time to bearing compared with seedling trees.',
    },
    {
      type: 'paragraph',
      text: 'Flowering in mango is influenced by a period of relatively cool or dry conditions that helps trigger flower induction, and orchard management in many regions is built around encouraging or, where needed, chemically supporting this transition from vegetative to reproductive growth.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Anacardiaceae (cashew family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Mangifera indica' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, juice and pulp, processed products',
    },
    {
      label: 'Climate',
      value: 'Tropical to warm subtropical; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained soils with wide pH tolerance',
      note: 'Sensitive to prolonged waterlogging regardless of soil type.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mango is one of the most important tropical tree fruits, grown across a wide belt of tropical and subtropical regions for both domestic consumption and export. Trees can become large and long-lived, with orchard spacing and pruning shaped by the eventual canopy size.',
        },
        {
          type: 'paragraph',
          text: 'Flowering, and therefore yield, in mango can be strongly influenced by weather patterns preceding the flowering season, making year-to-year production more variable in some regions than for crops with less climate-dependent flowering.',
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
            { term: 'Family', description: 'Anacardiaceae (cashew family)' },
            { term: 'Genus', description: 'Mangifera' },
            {
              term: 'Principal species',
              description: 'Mangifera indica',
            },
            {
              term: 'Growth habit',
              description:
                'Large evergreen tree, commercially propagated by grafting onto seedling rootstocks',
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
          text: 'Mango originated in the region spanning South Asia and Myanmar, where it has been cultivated for thousands of years, and later spread throughout Southeast Asia, Africa, and, following European exploration and colonization, to the Americas and other tropical regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Mango is now grown across the tropics and warm subtropics, with major production concentrated in South and Southeast Asia, alongside significant production in Africa and the Americas. Production and trade figures are compiled by FAO and should be taken from primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mango is adapted to tropical and warm subtropical climates and has essentially no frost tolerance; young growth and flowers are particularly vulnerable to cold damage.',
        },
        {
          type: 'paragraph',
          text: 'A distinct dry or cool period is often important for triggering flower induction, and unusually wet or mild conditions during this window can reduce or delay flowering and, in turn, yield.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mango tolerates a wide range of soil types and pH levels provided drainage is good, with deep, well-drained soils generally preferred to support its extensive root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging is poorly tolerated and can cause root decline and reduced tree vigor. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Mango orchards are established from grafted trees on seedling rootstocks, with spacing set to accommodate the eventual size of the canopy, which can be substantial in older, ungrafted-style plantings.',
        },
        {
          type: 'list',
          items: [
            'Cultivar and rootstock selection matched to climate and market',
            'Wide spacing or planned canopy management for large mature trees',
            'Pruning to manage tree size and light penetration in modern high-density systems',
            'Management practices timed around the flower-induction period',
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
          text: 'Nitrogen supports vegetative growth, but excessive nitrogen close to the flowering period can favor continued vegetative growth at the expense of flowering in some cultivars and climates. Potassium is important for fruit size and quality.',
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
          text: 'Mango is grown both rain-fed in regions with a suitable dry-then-wet seasonal pattern and under irrigation elsewhere. In some production systems, irrigation is deliberately withheld or reduced ahead of the flowering period to help encourage flower induction, before being resumed to support fruit development.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is used in many commercial orchards to apply water efficiently to the root zone while supporting this staged approach to water management.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is one of the most economically important diseases of mango, affecting flowers, young fruit, and ripening or stored fruit. Powdery mildew can also affect flowering panicles and young fruit, reducing fruit set in affected seasons. Thrips and aphids are among the insect pests that can damage flowers, foliage, or developing fruit.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Mango is typically harvested at a mature-green stage assessed by indicators such as fruit shape, shoulder fill, and days after flowering, then allowed to ripen off the tree. Fruit is handled carefully during harvest, since the sap released at the stem end can cause skin irritation and blemishes.',
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
            'Fresh-market fruit consumption',
            'Juice, pulp, and nectar processing',
            'Dried mango and other processed snack products',
            'Pickles and chutneys made from unripe (green) fruit',
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
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of tropical and subtropical production. Flower-induction behavior and cultivar choice vary by region.',
  climateContext:
    'Tropical to warm-subtropical evergreen tree with no meaningful frost tolerance.',
  limitations: [
    'Flower-induction management and cultivar choice are climate- and region-specific and not exhaustively covered here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global mango production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Mango disease and pest compendium data',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Mango genetic resources and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mango',
    description:
      'A structured, evidence-based reference on mango: classification, climate needs, orchard establishment, nutrition, diseases, pests, and uses.',
    keywords: ['mango', 'Mangifera indica', 'tropical fruit', 'mango orchard'],
  },
  structuredData: { article: true },
};
