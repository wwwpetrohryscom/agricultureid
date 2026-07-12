import type { CropContent } from '@/types/content';

export const tobacco: CropContent = {
  id: 'crop-tobacco',
  slug: 'tobacco',
  contentType: 'crop',
  title: 'Tobacco',
  scientificName: 'Nicotiana tabacum',
  alternativeNames: ['Cultivated tobacco'],
  category: 'Industrial crop',
  subcategory: 'Annual leaf crop',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Annual',
  summary:
    'Tobacco is a warm-season annual grown for its leaves, which are cured through various methods after harvest to produce the raw leaf used in manufactured tobacco products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tobacco is cultivated as a broad-leaved annual, typically established from transplants raised in seedbeds or trays before being set out in the field, where the crop is grown specifically for its large leaves rather than for fruit or seed.',
    },
    {
      type: 'paragraph',
      text: 'After harvest, leaves undergo a curing process — commonly flue-curing, air-curing, fire-curing, or sun-curing depending on the tobacco type — which changes their color, chemistry, and aroma and is a defining step in determining the character of the finished leaf. Tobacco cultivation is subject to national and regional agricultural and public-health regulation in many jurisdictions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Nicotiana tabacum' },
    {
      label: 'Primary uses',
      value: 'Cured leaf for manufactured tobacco products',
    },
    {
      label: 'Climate',
      value: 'Warm-season crop; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams to loams',
      note: 'Soil type strongly influences leaf type and curing suitability.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco is grown in warm-season cropping regions across several continents, with production systems and leaf types (such as flue-cured, burley, and oriental tobaccos) varying according to climate, soil, and curing method.',
        },
        {
          type: 'paragraph',
          text: 'As a labor- and input-intensive crop, tobacco production involves substantial management through transplanting, topping, and curing stages, and is grown by both smallholder and larger commercial operations depending on the region.',
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
            { term: 'Genus and species', description: 'Nicotiana tabacum' },
            {
              term: 'Leaf-type groups',
              description:
                'Flue-cured (Virginia), burley (air-cured), and oriental/sun-cured types, among others, distinguished by curing method and leaf character',
            },
            {
              term: 'Growth habit',
              description:
                'Erect annual herb with large leaves, typically established from transplants and topped to remove the flower head during growth',
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
          text: 'Nicotiana tabacum originates from South America, where it was cultivated by indigenous peoples prior to European contact, after which cultivation spread globally through trade over the following centuries.',
        },
        {
          type: 'paragraph',
          text: 'Tobacco is grown today across a range of warm-season cropping regions worldwide. Production statistics and regulatory frameworks are compiled and administered by national agricultural, trade, and public-health authorities alongside FAO data.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco requires a warm growing season with adequate moisture during establishment and vegetative growth, and is sensitive to frost, which restricts field planting to the frost-free part of the growing season in temperate regions.',
        },
        {
          type: 'paragraph',
          text: 'Temperature and moisture during leaf maturation influence leaf chemistry and curing quality, which is one reason leaf type and regional climate are closely linked.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco is commonly grown on well-drained sandy loam to loam soils, with soil type influencing leaf texture and chemistry; different leaf types are often associated with particular soil conditions in traditional producing regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of root diseases and can affect leaf quality. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco is typically established from transplants raised in seedbeds, greenhouses, or float trays, then transplanted into the field once seedlings reach an appropriate size.',
        },
        {
          type: 'list',
          items: [
            'Leaf-type and cultivar selection matched to curing method and market requirements',
            'Transplanting into a well-prepared, well-drained seedbed',
            'Topping (removal of the flower head) and sucker control to direct growth into leaf development',
            'Rotation with other crops to manage soil-borne disease pressure',
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
          text: 'Nitrogen strongly influences leaf size and chemistry, and is managed carefully since excess nitrogen can affect leaf quality and curing characteristics. Potassium contributes to leaf structure and burn quality in the cured product.',
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
          text: 'Tobacco is grown both rain-fed and under irrigation, with consistent moisture particularly important during establishment and early leaf expansion.',
        },
        {
          type: 'paragraph',
          text: 'Water stress or excess late in the season can affect leaf size, texture, and curing quality, so irrigation scheduling in irrigated systems is tied closely to growth stage.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Tobacco mosaic virus, one of the first plant viruses identified, can reduce leaf quality and yield, while downy mildew (blue mold) can cause serious losses under cool, moist conditions. Aphids are common sap-feeding pests that can also transmit certain viruses, and cutworms can damage seedlings soon after transplanting.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, sanitation to limit virus spread, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Leaves are harvested either by removing individual leaves as they ripen from the bottom of the plant upward (priming) or by cutting the whole stalk, depending on leaf type, and are then cured using flue-, air-, fire-, or sun-curing methods appropriate to the tobacco type.',
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
            'Cured leaf as the primary raw material for manufactured tobacco products',
            'Seed used for oil extraction in some regions',
            'Leaf and stem by-products used in some horticultural and industrial applications',
            'Crop residues managed through incorporation or removal as part of field sanitation',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'temperature' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of warm-season production, spanning multiple leaf types and curing traditions across producing regions.',
  climateContext:
    'Warm-season, frost-sensitive annual; leaf chemistry and curing quality are sensitive to temperature and moisture during maturation.',
  limitations: [
    'Leaf type, curing method, and regulatory frameworks vary substantially by country and region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global tobacco production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Tobacco disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tobacco',
    description:
      'A structured, evidence-based reference on tobacco: classification, climate and soil needs, agronomy, curing, diseases, pests, and leaf uses.',
    keywords: [
      'tobacco',
      'Nicotiana tabacum',
      'leaf crop',
      'tobacco cultivation',
    ],
  },
  structuredData: { article: true },
};
