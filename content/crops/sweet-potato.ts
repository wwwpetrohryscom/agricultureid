import type { CropContent } from '@/types/content';

export const sweetPotato: CropContent = {
  id: 'crop-sweet-potato',
  slug: 'sweet-potato',
  contentType: 'crop',
  title: 'Sweet Potato',
  scientificName: 'Ipomoea batatas',
  alternativeNames: ['Kumara'],
  category: 'Root and tuber crop',
  subcategory: 'Storage-root vegetable',
  botanicalFamily: 'Convolvulaceae (morning glory family)',
  lifecycle: 'Perennial vine, commonly grown as an annual for root harvest',
  summary:
    'Sweet potato is a tropical and subtropical vining crop grown for its starchy, nutrient-dense storage roots, valued for good performance on lighter soils and reasonable drought tolerance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweet potato is a trailing or vining plant grown for its swollen storage roots, which vary in flesh color from white through yellow, orange, and purple depending on cultivar, reflecting differences in carotenoid and anthocyanin content. It belongs to the morning glory family and is unrelated botanically to the potato.',
    },
    {
      type: 'paragraph',
      text: 'Although sweet potato is a perennial in frost-free tropical conditions, it is grown as an annual crop across most of its commercial range, propagated vegetatively from vine cuttings or rooted sprouts (slips) rather than from true seed.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Convolvulaceae (morning glory family)',
    },
    {
      label: 'Life cycle',
      value: 'Perennial vine, commonly grown as an annual for root harvest',
    },
    { label: 'Main species', value: 'Ipomoea batatas' },
    {
      label: 'Primary uses',
      value: 'Food (fresh and processed root), starch, animal feed',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive with good heat and moderate drought tolerance',
    },
    {
      label: 'Soil preference',
      value: 'Loose, well-drained sandy loams for good root shape',
      note: 'Heavy or compacted soils can restrict root development and shape.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato is grown for its edible storage roots, produced along a spreading or trailing vine, and is propagated vegetatively using vine cuttings or slips grown from a stored root rather than by direct seeding.',
        },
        {
          type: 'paragraph',
          text: 'Production spans large-scale mechanized systems in some countries and smallholder cultivation in many tropical and subtropical regions, where it serves as an important food-security crop due to its reasonable yield under modest input levels.',
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
              description: 'Convolvulaceae (morning glory family)',
            },
            { term: 'Genus', description: 'Ipomoea' },
            {
              term: 'Principal species',
              description: 'Ipomoea batatas (sweet potato)',
            },
            {
              term: 'Growth habit',
              description:
                'Trailing or vining perennial herb, propagated vegetatively and cultivated for its swollen adventitious storage roots',
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
          text: 'Sweet potato is believed to have originated in Central or South America, where it was domesticated in antiquity, before spreading to the Pacific Islands, Asia, and Africa through both pre-Columbian and later trade routes, becoming a major staple crop in many of these regions.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across the tropics and warm-temperate zones worldwide; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato requires warm temperatures throughout its growing period and is sensitive to frost and chilling injury, both in the field and during storage. It shows reasonable tolerance of heat and intermittent drought once established, compared with many other root and tuber crops.',
        },
        {
          type: 'paragraph',
          text: 'Day length can influence flowering and, in some cultivars, root development, adding a further region-specific dimension to cultivar choice.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato performs best on loose, well-drained sandy loams that allow storage roots to expand freely and develop a smooth, marketable shape; heavier or compacted soils can produce misshapen or constricted roots and complicate harvest.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Ridging or mounding is commonly used to improve drainage and give roots a looser rooting zone. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato is established by planting vine cuttings or rooted slips into ridges or mounds, a practice that improves drainage and eases later harvest, at spacing and timing suited to local climate and cultivar.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to flesh color, market use, and local day-length and disease pressure',
            'Use of disease-free planting material, since vegetative propagation can carry over pathogens between crops',
            'Ridging or mounding to promote well-shaped roots and ease of harvest',
            'Crop rotation to manage soil-borne pests and diseases',
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
          text: 'Potassium strongly influences storage-root development and quality, while phosphorus supports early root establishment; excessive nitrogen can favor vine growth at the expense of root yield.',
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
          text: 'Sweet potato is grown both rain-fed and under irrigation, with reasonable tolerance of short dry spells once established, though consistent moisture during storage-root bulking supports better yield and root shape. Furrow and drip irrigation are both used depending on scale and region.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot diseases and common scab can affect storage-root quality, particularly in poorly drained or previously infested soils. Root-knot nematodes are a significant below-ground pest, causing root galling and reduced quality, while white grubs and wireworms damage roots directly in the soil.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, disease-free planting material, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato is harvested once roots have reached marketable size, typically by lifting with hand tools in smallholder systems or with mechanized diggers in larger operations, taking care to minimize skinning and bruising, which affect storage life and market quality.',
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
            'Fresh-market and cooked root vegetable',
            'Processed products including flour, chips, and canned or dehydrated forms',
            'Starch extraction for food and industrial uses',
            'Vines and root residues used as livestock feed in some smallholder systems',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'common-scab' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'machinery', slug: 'cultivator' },
    { type: 'climate', slug: 'temperature' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'yam' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation', 'host-plant', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Warm-season tropical and subtropical crop, frost-sensitive with reasonable heat and moderate drought tolerance.',
  limitations: [
    'Day-length sensitivity and flowering behavior vary by cultivar and are not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of sweet potato in global food security',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cip',
      citedFor: 'Sweet potato breeding and agronomy research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Sweet potato disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sweet Potato',
    description:
      'A structured, evidence-based reference on sweet potato: classification, warm-season climate needs, soil, nutrition, diseases, pests, and uses.',
    keywords: ['sweet potato', 'Ipomoea batatas', 'root crop', 'tuber crop'],
  },
  structuredData: { article: true },
};
