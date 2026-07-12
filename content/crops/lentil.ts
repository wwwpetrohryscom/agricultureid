import type { CropContent } from '@/types/content';

export const lentil: CropContent = {
  id: 'crop-lentil',
  slug: 'lentil',
  contentType: 'crop',
  title: 'Lentil',
  scientificName: 'Lens culinaris',
  alternativeNames: ['Common lentil'],
  category: 'Legume crop',
  subcategory: 'Pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Lentil is an annual pulse legume grown for its small, disc-shaped edible seeds, valued as a dietary protein source, for its short growing season, and for its role as a nitrogen-fixing crop in semi-arid rotations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lentil is a low-growing, bushy annual with slender stems and small, feathery leaflets, bearing short pods close to the ground that each typically contain one or two lens-shaped seeds. Its compact stature and low pod set make lodging and harvest losses important management concerns.',
    },
    {
      type: 'paragraph',
      text: 'As a legume, lentil forms a symbiotic relationship with compatible Rhizobium bacteria in root nodules, allowing it to fix atmospheric nitrogen, a trait that supports its long-standing role in cereal-legume rotations in dryland farming systems.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Lens culinaris' },
    {
      label: 'Primary uses',
      value:
        'Dry seed for food (soups, dals, stews); animal feed from residues',
    },
    {
      label: 'Climate',
      value:
        'Cool-season; comparatively drought-tolerant, adapted to semi-arid environments',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams to sandy loams of moderate fertility; sensitive to waterlogging',
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
          text: 'Lentil is grown mainly as a dry pulse crop, harvested at full maturity for its seed. Its short stature and low-set pods, an adaptation to semi-arid environments, mean that harvest equipment and technique must be matched to minimize pod and seed losses at ground level.',
        },
        {
          type: 'paragraph',
          text: 'Production is concentrated in semi-arid and Mediterranean-type climates where the crop’s relatively low water requirement compared with many other food crops is a significant agronomic advantage.',
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
            { term: 'Genus and species', description: 'Lens culinaris' },
            {
              term: 'Growth habit',
              description:
                'Low-growing, bushy annual with slender, branching stems and small pinnate leaflets ending in tendrils',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing Rhizobium bacteria',
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
          text: 'Lentil is one of the earliest domesticated crops, cultivated in the Fertile Crescent alongside wheat, barley, pea, and chickpea, and spreading across the Mediterranean and South Asia in antiquity as agriculture expanded.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across a range of semi-arid and Mediterranean-type climates worldwide. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lentil is a cool-season crop, tolerant of frost during vegetative growth and comparatively drought-tolerant relative to many other pulse and grain legumes, which suits it to semi-arid production environments.',
        },
        {
          type: 'paragraph',
          text: 'Terminal drought and heat stress during flowering and pod fill are recognized as key yield-limiting factors, since moisture reserves are often depleted by the time the crop reaches its most sensitive reproductive stages.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lentil performs best on well-drained loams to sandy loams of moderate fertility. It is sensitive to waterlogging, which restricts root and nodule development and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage should be assessed with local soil survey data, since lentil is notably intolerant of even short periods of waterlogging.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Lentil is direct-seeded, typically in narrow rows, and seed is often treated with a compatible rhizobial inoculant in fields without a recent history of lentil or related legume production. Rotation with cereals is a standard practice in semi-arid cropping systems.',
        },
        {
          type: 'list',
          items: [
            'Inoculation with compatible Rhizobium strains in fields new to lentil production',
            'Crop rotation with cereals to manage soilborne diseases and break pest cycles',
            'Shallow, even sowing depth appropriate to the crop’s small seed size',
            'Weed management during early growth, given the crop’s low, slow-closing canopy',
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
          text: 'Biological nitrogen fixation can supply a substantial share of the crop’s nitrogen requirement when nodulation is effective, and overall soil fertility requirements are generally modest relative to cereal crops. Phosphorus availability, particularly on alkaline soils, is an important consideration.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Lentil is grown predominantly under rain-fed conditions in traditional production regions, with terminal drought at flowering and pod fill representing a major, often unavoidable, yield constraint. Supplemental irrigation is used in some production systems.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is available, crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is a significant soilborne disease of lentil in many production regions, and root rot complexes can also reduce stand and yield, particularly under wet conditions. Aphids and thrips are among the pests that feed on lentil foliage and, in the case of aphids, can transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Lentil is harvested once pods and foliage have dried at maturity, either by direct combining or by swathing followed by combining, depending on region and equipment. Because pods are borne low on a short plant, shattering and header losses are notable risks at harvest.',
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
            'Dry seed used whole or split in soups, dals, stews, and other dishes across many cuisines',
            'Lentil flour used as an ingredient in some food products',
            'Straw and screenings used in some regions as animal feed',
            'Use as a short-cycle rotation or cover crop in some cereal-based systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'chickpea' },
    { type: 'crop', slug: 'pea' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'inoculum', 'macronutrient'],
  geographicScope:
    'Global overview. Sowing timing, rotation interval, and input levels are region-specific and depend on local rainfall patterns and soil.',
  climateContext:
    'Cool-season, drought-tolerant pulse legume adapted to semi-arid and Mediterranean-type climates, predominantly rain-fed.',
  limitations: [
    'Sowing timing and rotation interval are region-specific decisions not reduced to universal guidance here.',
    'Terminal drought and heat stress at pod fill are recurring, often unavoidable constraints in rain-fed production.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of lentil in global food systems' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Pulse crop research in semi-arid systems' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management for pulse crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lentil',
    description:
      'A structured reference on lentil: classification, semi-arid climate adaptation, nitrogen fixation, soil needs, diseases, pests, and food uses.',
    keywords: ['lentil', 'Lens culinaris', 'pulse legume', 'lentil agronomy'],
  },
  structuredData: { article: true },
};
