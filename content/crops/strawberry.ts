import type { CropContent } from '@/types/content';

export const strawberry: CropContent = {
  id: 'crop-strawberry',
  slug: 'strawberry',
  contentType: 'crop',
  title: 'Strawberry',
  scientificName: 'Fragaria × ananassa (garden strawberry)',
  alternativeNames: ['Garden strawberry'],
  category: 'Fruit crop',
  subcategory: 'Perennial groundcover fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial (often grown as annual)',
  summary:
    'Strawberry is a low-growing perennial fruit crop widely grown for fresh consumption and processing. Commercial production ranges from perennial matted-row systems to annual plasticulture, depending on climate and market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The garden strawberry is a hybrid species that arose from the crossing of two wild American strawberry species, combining large fruit size with wide climatic adaptability. It spreads by runners (stolons) that root to form new daughter plants, a trait exploited both for propagation and, in some systems, for natural stand renewal.',
    },
    {
      type: 'paragraph',
      text: 'Although botanically perennial, strawberry is frequently grown as an annual in intensive commercial systems, with new plants established each season on raised, plastic-mulched beds. In cooler climates, perennial matted-row systems that crop over several years remain common.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    {
      label: 'Life cycle',
      value: 'Perennial, commonly grown as an annual in intensive systems',
    },
    { label: 'Main species', value: 'Fragaria × ananassa' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, jam and preserves, frozen and processed products',
    },
    {
      label: 'Climate',
      value:
        'Temperate; flowering response depends on day length and cultivar type',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams, slightly acidic pH',
      note: 'Raised beds and plastic mulch are widely used to improve drainage.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Strawberry is grown across a wide range of climates, from short-season perennial plantings in cooler regions to intensive annual plasticulture systems in milder climates that allow multiple harvest windows or off-season production.',
        },
        {
          type: 'paragraph',
          text: 'Cultivars are commonly grouped by their flowering response to day length, including short-day (June-bearing), day-neutral, and everbearing types, which growers select to match their local season and target harvest window.',
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
            { term: 'Family', description: 'Rosaceae (rose family)' },
            { term: 'Genus', description: 'Fragaria' },
            {
              term: 'Principal species',
              description:
                'Fragaria × ananassa, an octoploid hybrid of Fragaria virginiana and Fragaria chiloensis',
            },
            {
              term: 'Growth habit',
              description:
                'Low-growing perennial herb spreading by stolons (runners), propagated vegetatively',
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
          text: 'The modern garden strawberry arose in 18th-century Europe from the accidental crossing of Fragaria virginiana, native to eastern North America, and Fragaria chiloensis, native to Chile and the west coast of the Americas, producing a hybrid with notably larger fruit than either parent.',
        },
        {
          type: 'paragraph',
          text: 'Strawberry is now cultivated commercially across temperate and subtropical regions worldwide. Production and trade statistics are compiled by FAO and national agencies and should be sourced from those primary datasets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering in many strawberry cultivars is triggered by day length and temperature, with short-day types initiating flowers under shortening autumn days and day-neutral types flowering largely independent of day length.',
        },
        {
          type: 'paragraph',
          text: 'Spring frost during bloom can damage or destroy flowers, and in some production regions, overhead sprinkler irrigation is used specifically to protect blossoms from frost through the release of latent heat as applied water freezes.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Strawberry prefers well-drained, sandy loam soils with good aeration and a slightly acidic pH, reflecting its relatively shallow, sensitive root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of root and crown rots. Raised beds are widely used to improve drainage and warm the soil earlier in the season; site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Strawberry is propagated from runners or, increasingly, from certified plug plants, and established either as an annual planting on plastic-mulched raised beds (plasticulture) or as a perennial matted-row planting that crops over multiple seasons.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to day-length response and target harvest window',
            'Use of certified, disease-tested planting material',
            'Plasticulture systems for annual production versus matted-row systems for perennial cropping',
            'Row spacing and plant density set according to the chosen system',
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
          text: 'Nitrogen supports vegetative growth but is managed carefully, since excess nitrogen can promote soft, disease-prone foliage and fruit at the expense of quality. Potassium and calcium both influence fruit firmness and shelf life.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Strawberry has a shallow root system and benefits from frequent, relatively light irrigation to maintain even soil moisture, particularly during establishment and fruit development. Drip irrigation under plastic mulch is standard in most intensive commercial systems.',
        },
        {
          type: 'paragraph',
          text: 'Overhead sprinkler systems are used in some regions both for irrigation and, as noted above, for frost protection during bloom.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold (Botrytis fruit rot) is one of the most damaging diseases of strawberry, affecting flowers and ripening fruit, particularly in humid or wet conditions. Powdery mildew affects leaves, flowers, and fruit and can be severe in warm, dry climates. Spider mites and thrips are common pests affecting foliage and fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, canopy and irrigation management to reduce humidity around fruit, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: "Strawberry fruit ripens rapidly and does not continue to ripen after picking, so harvest is done by hand at full color, often every one to three days during the peak season to keep pace with ripening. Rapid cooling after harvest is important given the fruit's high perishability.",
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
            'Jam, preserves, and other processed products',
            'Frozen fruit for food manufacturing and food service',
            'Juice and flavoring uses',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview. Production system (annual plasticulture versus perennial matted-row) is climate- and region-specific.',
  climateContext:
    'Temperate fruit crop with cultivar-dependent day-length flowering response; vulnerable to spring frost during bloom.',
  limitations: [
    'Choice between annual and perennial production systems is climate- and market-specific and not resolved here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global strawberry production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Strawberry disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for strawberry',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Strawberry',
    description:
      'A structured, evidence-based reference on strawberry: classification, climate needs, planting systems, nutrition, diseases, pests, and uses.',
    keywords: [
      'strawberry',
      'Fragaria ananassa',
      'strawberry production',
      'fruit crop',
    ],
  },
  structuredData: { article: true },
};
