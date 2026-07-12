import type { CropContent } from '@/types/content';

export const onion: CropContent = {
  id: 'crop-onion',
  slug: 'onion',
  contentType: 'crop',
  title: 'Onion',
  scientificName: 'Allium cepa',
  alternativeNames: ['Bulb onion', 'Common onion'],
  category: 'Vegetable crop',
  subcategory: 'Bulb vegetable (Allium)',
  botanicalFamily: 'Amaryllidaceae (formerly Alliaceae)',
  lifecycle: 'Biennial, grown as an annual for bulb harvest',
  summary:
    'Onion is a biennial Allium grown worldwide for its pungent, storable bulb, one of the most widely traded vegetable crops and a foundational culinary ingredient in most world cuisines.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Onion is a bulb vegetable grown for its swollen, layered leaf bases, which are consumed fresh, cooked, and in a wide range of processed and dehydrated forms. It is a biennial by nature — flowering only in its second year — but is grown commercially as an annual, harvested for its bulb before flowering occurs.',
    },
    {
      type: 'paragraph',
      text: 'Bulb formation is triggered by the interaction of day length and temperature, and cultivars are grouped as short-day, intermediate-day, or long-day types according to the photoperiod they require to bulb. Matching cultivar type to local latitude is a central agronomic decision in onion production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Amaryllidaceae (Allium)' },
    { label: 'Life cycle', value: 'Biennial, grown as an annual' },
    { label: 'Scientific name', value: 'Allium cepa' },
    {
      label: 'Primary uses',
      value:
        'Fresh and cooked culinary bulb; dehydrated, pickled, and powdered products',
    },
    {
      label: 'Climate',
      value:
        'Bulbing governed by day length and temperature; short-, intermediate-, and long-day types',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained, fertile sandy loams; shallow, moisture-sensitive root system',
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
          text: 'Onion is propagated from seed, from small immature bulbs called sets, or from transplants, and each method carries different tradeoffs in cost, timing, and disease risk that are weighed locally. Its shallow, sparsely branched root system makes the crop comparatively sensitive to short-term water and nutrient shortages near the soil surface.',
        },
        {
          type: 'paragraph',
          text: 'Because onion does not flower in its first year under normal commercial production, growers select cultivars primarily for bulb size, storage quality, pungency, and day-length response rather than for flowering traits.',
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
              description:
                'Amaryllidaceae, subfamily Allioideae (formerly treated as Alliaceae)',
            },
            { term: 'Genus and species', description: 'Allium cepa' },
            {
              term: 'Growth habit',
              description:
                'Biennial monocot forming a bulb of fleshy, concentric leaf bases; flowers in a spherical umbel only in the second season',
            },
            {
              term: 'Root system',
              description:
                'Shallow, fibrous, and largely unbranched, with limited capacity to explore soil for water and nutrients',
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
          text: 'Onion is believed to have originated in Central Asia, with cultivation extending into prehistory across the Near East and Mediterranean before spreading throughout the Old World and, later, to the Americas. It is now grown on every populated continent under an unusually broad range of climates.',
        },
        {
          type: 'paragraph',
          text: 'Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies and should be consulted directly for up-to-date figures, since production shifts year to year with weather and markets.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Bulbing in onion is a photoperiod- and temperature-dependent response: short-day cultivars form bulbs under roughly 10–12 hours of daylight and are grown at lower latitudes, while long-day cultivars require 14–16 hours and are grown at higher latitudes, with intermediate-day types suited to the zone between. Growing a cultivar outside its adapted day-length range typically results in poor or premature bulbing.',
        },
        {
          type: 'paragraph',
          text: 'Exposure to prolonged cold during early growth can induce premature flowering (bolting) before an economic bulb has formed, which is one reason planting timing is matched carefully to local temperature patterns.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Onion performs best on well-drained, fertile sandy loams free of clods and compaction, which allow uniform bulb expansion and easy harvest. Because its root system is shallow, the crop is comparatively intolerant of both drought stress and waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil texture and drainage class should be assessed with local soil survey information, since bulb shape and skin quality are both sensitive to soil physical conditions.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Stand establishment method — direct-seeding, sets, or transplants — is chosen based on local labor, equipment, season length, and disease history. Because onion seedlings are slow-growing and narrow-leaved, weed competition during early establishment is a major management concern.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to local day length (short-, intermediate-, or long-day type)',
            'Crop rotation away from other Allium species to reduce soilborne disease carryover',
            'Effective early-season weed control given the crop’s slow, shallow-rooted establishment',
            'Adequate plant spacing to support uniform bulb size and airflow that reduces disease pressure',
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
          text: 'Nitrogen supports leaf and bulb growth, while sulfur is notable in onion because it is a precursor of the flavor and pungency compounds characteristic of the crop. Phosphorus and potassium support root development and bulb quality. Actual requirements depend on soil supply, target yield, and cultivar.',
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
          text: 'Because of its shallow root system, onion generally requires frequent, light irrigation rather than infrequent deep watering, particularly during bulb bulking. Irrigation is commonly reduced or withheld in the weeks before harvest to encourage the neck to dry down and the bulb to cure properly.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, using methods and reference values published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is one of the most damaging foliar diseases of onion in cool, humid conditions, and Fusarium basal rot is a significant soilborne disease affecting the bulb base. Thrips are the most important insect pest of onion in many regions, causing direct feeding damage and, in some areas, transmitting viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, rotation away from other Alliums, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Maturity is signaled by the tops (foliage) yellowing, softening at the neck, and falling over. Bulbs are typically lifted, field-cured, and then dried further under controlled conditions before topping and storage, since proper curing strongly influences storage life.',
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
            'Fresh and cooked culinary use as a foundational aromatic in most world cuisines',
            'Dehydrated products such as onion powder, flakes, and granules',
            'Pickled and other processed onion products',
            'By-products and residues used in some regions as livestock feed or soil amendment',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [{ type: 'pest', slug: 'thrips' }],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'carrot' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: [
    'cultivar',
    'crop-rotation',
    'soil-texture',
    'evapotranspiration',
  ],
  geographicScope:
    'Global overview. Cultivar day-length type, propagation method, and input levels are region-specific and depend on local latitude and season length.',
  climateContext:
    'Day-length- and temperature-sensitive bulb crop grown across temperate to subtropical regions, rain-fed or irrigated.',
  limitations: [
    'Matching cultivar day-length type to local latitude is a regional decision not reduced to a single universal recommendation here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of onion in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest and disease management for onion',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Onion production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Onion',
    description:
      'An evidence-based reference on onion: classification, day-length bulbing, soil and water needs, common diseases and pests, harvest, and storage uses.',
    keywords: ['onion', 'Allium cepa', 'bulb vegetable', 'onion agronomy'],
  },
  structuredData: { article: true },
};
