import type { CropContent } from '@/types/content';

export const carrot: CropContent = {
  id: 'crop-carrot',
  slug: 'carrot',
  contentType: 'crop',
  title: 'Carrot',
  scientificName: 'Daucus carota subsp. sativus',
  alternativeNames: ['Cultivated carrot'],
  category: 'Vegetable crop',
  subcategory: 'Root vegetable',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Biennial, grown as an annual for root harvest',
  summary:
    'Carrot is a biennial root vegetable grown for its edible taproot, cultivated worldwide for fresh consumption, processing, and, in some systems, livestock feed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Carrot is grown for its enlarged, tapering taproot, which stores carbohydrates and carotenoid pigments and is harvested well before the plant would naturally flower in its second year. Root shape, color, and size vary widely among cultivars and market classes.',
    },
    {
      type: 'paragraph',
      text: 'Because the harvested organ is a root that must grow straight and unbranched to meet fresh-market standards, carrot production places particular emphasis on soil physical condition — depth, looseness, and freedom from stones or compaction — alongside the climate and nutrient factors common to other vegetable crops.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Biennial, grown as an annual' },
    { label: 'Scientific name', value: 'Daucus carota subsp. sativus' },
    {
      label: 'Primary uses',
      value:
        'Fresh consumption, processing (juice, canning, freezing), and animal feed in some systems',
    },
    {
      label: 'Climate',
      value:
        'Cool-season crop; root quality favored by moderate temperatures during bulking',
    },
    {
      label: 'Soil preference',
      value:
        'Deep, loose, stone-free sandy loams that allow straight root development',
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
          text: 'Carrot is a taprooted biennial grown commercially as an annual root crop. Seedlings are typically thinned or precision-seeded to a target spacing, since crowding produces small, misshapen roots, while adequate spacing supports uniform size at harvest.',
        },
        {
          type: 'paragraph',
          text: 'Market classes range from slender, tapered types to blocky, cylindrical processing types, and cultivar choice is matched to intended use — fresh bunching, bagged fresh-cut, or processing.',
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
            { term: 'Family', description: 'Apiaceae (carrot/parsley family)' },
            {
              term: 'Genus and species',
              description: 'Daucus carota subsp. sativus',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial forming a rosette of finely divided leaves above a fleshy taproot; flowers in an umbel only if allowed to overwinter',
            },
            {
              term: 'Harvested organ',
              description:
                'Enlarged taproot, harvested before the plant bolts and flowers',
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
          text: 'Cultivated carrot descends from wild Daucus carota populations native to Central Asia and the Near East, with orange-rooted types becoming dominant in Western Europe from roughly the sixteenth century onward. It is now grown across temperate and subtropical regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies and should be consulted directly, since figures shift with weather and markets each season.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Carrot is a cool-season crop; root color, sweetness, and shape develop best under moderate temperatures, while high temperatures during root bulking are associated with poorer color development and increased bitterness in some cultivars.',
        },
        {
          type: 'paragraph',
          text: 'The crop tolerates light frost better than many vegetables, and roots left in the ground into cool weather in some production systems can develop increased sweetness, though harvest timing is ultimately set by local conditions and market needs.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, loose, well-drained sandy loams free of stones, clods, and compaction are strongly preferred, since any physical obstruction in the root zone can cause forking, splitting, or misshapen roots that reduce marketable yield.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Subsoil compaction from previous tillage or heavy equipment traffic can affect root straightness even when the surface soil appears suitable; field history should be assessed locally.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Carrot is nearly always direct-seeded, often with precision seeders, because the crop does not transplant well. Seedbeds are prepared to be fine, firm, and free of clods to support even germination and unobstructed root development.',
        },
        {
          type: 'list',
          items: [
            'Deep tillage or bed preparation to remove compaction and stones ahead of sowing',
            'Precision seeding and, where needed, thinning to achieve target plant spacing',
            'Crop rotation to manage soilborne pests and diseases',
            'Consistent early-season moisture to support even germination',
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
          text: 'Potassium and phosphorus are both important for root development, while excess nitrogen late in the season can favor top growth over root quality in some conditions. Requirements depend on soil supply, target yield, and cultivar.',
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
          text: 'Consistent soil moisture is important throughout the growing cycle, particularly during germination and root bulking; irregular watering is associated with root cracking and forking in some conditions. Drip and sprinkler irrigation are both used depending on region and scale.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Carrot root rot complexes and damping-off of seedlings are notable disease risks, particularly in poorly drained or compacted soils. Aphids can build up on foliage and transmit certain viruses, while wireworms — the larvae of click beetles — can tunnel into roots and reduce marketable quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines rotation, soil drainage improvement, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Carrots are lifted once roots reach target size and color for the intended market, using mechanical lifters or harvesters in commercial production. Careful handling at harvest reduces bruising and breakage that shorten storage life.',
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
            'Fresh consumption, whole, bagged, or as fresh-cut ("baby") carrots',
            'Processing into juice, canned, and frozen products',
            'Culinary use across a wide range of cuisines, raw and cooked',
            'Cull roots and tops used in some regions as livestock feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'potato' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['crop-rotation', 'cultivar', 'soil-texture', 'yield'],
  geographicScope:
    'Global overview. Cultivar market class, sowing method, and input levels are region-specific and depend on local soil, climate, and market.',
  climateContext:
    'Cool-season root crop grown across temperate and subtropical regions, rain-fed or irrigated.',
  limitations: [
    'Soil depth and freedom from stones or compaction are field-specific factors not reduced to universal guidance here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of carrot in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for carrot' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Carrot production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Carrot',
    description:
      'A structured reference on carrot: classification, soil and climate needs for straight root development, nutrition, diseases, pests, and harvest.',
    keywords: ['carrot', 'Daucus carota', 'root vegetable', 'carrot agronomy'],
  },
  structuredData: { article: true },
};
