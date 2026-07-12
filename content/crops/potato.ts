import type { CropContent } from '@/types/content';

export const potato: CropContent = {
  id: 'crop-potato',
  slug: 'potato',
  contentType: 'crop',
  title: 'Potato',
  scientificName: 'Solanum tuberosum',
  alternativeNames: ['White potato', 'Irish potato'],
  category: 'Tuber crop',
  subcategory: 'Root and tuber crop',
  botanicalFamily: 'Solanaceae (nightshades)',
  lifecycle: 'Grown as an annual; propagated vegetatively from seed tubers',
  summary:
    'Potato is a tuber crop grown for its starchy underground tubers, a major staple food and vegetable crop cultivated across temperate regions and highland areas of the tropics.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potato is one of the most widely grown food crops in the world, valued for its high yield of edible energy per unit area and its versatility in cooking and processing. Unlike most major crops, it is propagated commercially not from true seed but from seed tubers, or pieces of tubers, each carrying viable buds known as eyes.',
    },
    {
      type: 'paragraph',
      text: 'The edible tuber is a swollen underground stem, not a root, that develops at the tip of underground stolons. Tuber initiation and bulking are influenced by day length and temperature, and thousands of varieties exist, reflecting the crop’s long history of selection in its Andean center of origin and subsequent breeding worldwide.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshades)' },
    {
      label: 'Life cycle',
      value: 'Grown as an annual; vegetatively propagated',
    },
    { label: 'Scientific name', value: 'Solanum tuberosum' },
    {
      label: 'Primary uses',
      value: 'Fresh consumption, processed food products, starch, animal feed',
    },
    {
      label: 'Climate',
      value:
        'Cool to temperate; sensitive to frost and to heat during tuber bulking',
    },
    {
      label: 'Soil preference',
      value: 'Loose, well-drained sandy loams that allow tubers to expand',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Potato is grown from seed tubers rather than true seed in almost all commercial production, which makes seed tuber quality and health a central agronomic concern. The crop is notable for converting a large share of its growth into harvestable tuber yield relative to many other staple crops.',
        },
        {
          type: 'paragraph',
          text: 'Because potato is propagated vegetatively, seed tuber sourcing, certification, and disease status are especially important, and practices differ by region depending on local seed systems and regulation.',
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
            { term: 'Family', description: 'Solanaceae (nightshade family)' },
            { term: 'Genus and species', description: 'Solanum tuberosum' },
            {
              term: 'Edible organ',
              description:
                'Tuber — a swollen underground stem formed at the tip of a stolon, not a root',
            },
            {
              term: 'Growth habit',
              description:
                'Herbaceous annual with a sprawling above-ground stem and compound leaves',
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
          text: 'Potato was domesticated in the Andean highlands of what is now Peru and Bolivia, where wild and cultivated relatives show the greatest genetic diversity. It was introduced to Europe following contact with the Americas and subsequently spread worldwide, becoming a staple crop in many temperate and highland regions.',
        },
        {
          type: 'paragraph',
          text: 'Potato is now grown across a wide range of countries and climates. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies and should be drawn from those primary sources.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Potato is a cool-season crop that grows best with moderate day temperatures and cool nights, conditions that favor tuber initiation and bulking. It is sensitive to frost, particularly to foliage, and to prolonged heat, which can reduce tuber set and quality.',
        },
        {
          type: 'paragraph',
          text: 'In tropical regions, potato is often grown at higher elevations where temperatures are cooler, illustrating how climate suitability depends on both latitude and elevation rather than latitude alone.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Potato performs best on loose, well-drained soils such as sandy loams that allow tubers to expand freely and support even tuber shape. Compacted or heavy soils can restrict tuber development and increase the risk of misshapen tubers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil structure and drainage should be assessed with local soil survey information, since both strongly influence tuber quality and disease risk.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Potato is established by planting whole seed tubers or cut seed pieces, each bearing at least one viable eye, into a prepared seedbed. Plants are typically hilled or ridged during the season to cover developing tubers and protect them from light exposure, which causes greening.',
        },
        {
          type: 'list',
          items: [
            'Use of certified, disease-tested seed tubers where available',
            'Crop rotation away from potato and related solanaceous crops to manage soilborne diseases and pests',
            'Hilling or ridging to cover developing tubers and support drainage',
            'Variety selection matched to local climate, disease pressure, and intended market or use',
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
          text: 'Potato has a relatively high potassium requirement, which supports tuber development and quality, alongside nitrogen and phosphorus needs that influence canopy growth and early root and tuber establishment. Requirements depend on soil supply, target yield, and variety.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Potato has a relatively shallow root system and benefits from consistent soil moisture, particularly during tuber initiation and bulking. Both water deficit and waterlogging during this period can reduce yield and tuber quality.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate; reference methods and data are published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Late blight, caused by the oomycete Phytophthora infestans, is one of the most historically significant potato diseases and remains an important production risk in many regions under humid conditions. The Colorado potato beetle is a major defoliating pest in parts of its range, and aphids can reduce vigor and transmit viruses that degrade seed tuber quality.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant or tolerant varieties, certified disease-free seed, crop rotation, field monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Potato is typically harvested after the foliage has died back or been deliberately desiccated, which allows tuber skins to set and reduces bruising during lifting. Harvested tubers are often cured under controlled conditions before long-term storage to promote wound healing.',
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
            'Fresh consumption, boiled, baked, roasted, or fried',
            'Processed products such as frozen fries, chips, and dehydrated potato products',
            'Starch extraction for food and industrial applications',
            'Lower-grade tubers and processing by-products used in animal feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'late-blight' }],
  commonPests: [
    { type: 'pest', slug: 'colorado-potato-beetle' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [{ type: 'crop', slug: 'tomato' }],
  glossaryTerms: ['annual-crop', 'cultivar', 'soil-texture', 'yield'],
  geographicScope:
    'Global overview. Variety choice, seed tuber sourcing, and disease management are strongly region-specific given the wide range of environments in which potato is produced.',
  climateContext:
    'Cool-season crop sensitive to frost and heat; grown in temperate zones and at elevation in highland tropical regions.',
  limitations: [
    'Variety selection, seed tuber sourcing, and planting depth are region-specific decisions not covered by universal values here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Late blight risk and severity vary greatly with local climate and should be monitored through local disease forecasting services where available.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of potato in global food security and agronomy',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'cip',
      citedFor: 'Potato genetic resources and agronomy research',
    },
    { sourceId: 'usda-ars', citedFor: 'Potato disease and pest research' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Regional potato agronomy and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Potato',
    description:
      'A structured, evidence-based reference on potato: classification, climate and soil needs, agronomy, tuber development, diseases, pests, and uses.',
    keywords: ['potato', 'Solanum tuberosum', 'tuber crop', 'root crop'],
  },
  structuredData: { article: true },
};
