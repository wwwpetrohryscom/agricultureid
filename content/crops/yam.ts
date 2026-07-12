import type { CropContent } from '@/types/content';

export const yam: CropContent = {
  id: 'crop-yam',
  slug: 'yam',
  contentType: 'crop',
  title: 'Yam',
  scientificName:
    'Dioscorea spp., principally Dioscorea rotundata, D. alata, and D. cayenensis',
  alternativeNames: ['Guinea yam', 'White yam', 'Water yam'],
  category: 'Root and tuber crop',
  subcategory: 'Tropical tuber crop',
  botanicalFamily: 'Dioscoreaceae (yam family)',
  lifecycle:
    'Perennial climbing vine, cultivated in annual tuber-production cycles from seed tubers',
  summary:
    'Yam is a climbing tropical vine grown for its starchy underground tubers, propagated from seed tubers or setts and a staple and culturally significant crop across parts of West Africa, the Caribbean, and Asia-Pacific.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Yam is grown for its large, starchy tubers, which are produced underground by a climbing vine typically trained onto stakes or living support. The genus Dioscorea includes several cultivated species with different tuber shapes, skin colors, and regional importance.',
    },
    {
      type: 'paragraph',
      text: 'Unlike many root crops, yam is propagated from seed tubers or tuber pieces ("setts") rather than stem cuttings, and a substantial share of each harvest is typically retained as planting material for the following season, which is a major factor in yam production economics.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Dioscoreaceae (yam family)' },
    {
      label: 'Life cycle',
      value: 'Perennial vine, grown in annual tuber cycles',
    },
    {
      label: 'Main species',
      value: 'Dioscorea rotundata, D. alata, D. cayenensis',
    },
    {
      label: 'Primary uses',
      value: 'Staple food starch, boiled, pounded, or fried',
    },
    {
      label: 'Climate',
      value:
        'Warm, humid tropical; requires a distinct dry season for maturity',
    },
    {
      label: 'Soil preference',
      value: 'Deep, loose, well-drained sandy loams',
      note: 'Tuber shape and yield are sensitive to soil compaction and stoniness.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Yam is a major staple and cash crop in parts of West Africa, where it also carries strong cultural and ceremonial significance, alongside production in the Caribbean and tropical Asia-Pacific.',
        },
        {
          type: 'paragraph',
          text: 'Production is labor-intensive, involving mounding or ridging, staking of the climbing vines, and careful handling of seed tubers, which makes yam more input- and labor-demanding than many other root and tuber crops.',
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
            { term: 'Family', description: 'Dioscoreaceae (yam family)' },
            { term: 'Genus', description: 'Dioscorea' },
            {
              term: 'Principal species',
              description:
                'Dioscorea rotundata and D. cayenensis (white and yellow Guinea yams), D. alata (water yam)',
            },
            {
              term: 'Growth habit',
              description:
                'Herbaceous climbing vine producing one or more underground storage tubers per plant',
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
          text: 'Yam species were independently domesticated in West Africa and in Southeast Asia, giving rise to distinct groups of cultivated Dioscorea species that later spread through trade and migration to other tropical regions, including the Caribbean.',
        },
        {
          type: 'paragraph',
          text: 'West Africa remains the leading production region today, with significant cultivation also found in the Caribbean, tropical Asia, and the Pacific. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Yam requires a warm, humid growing season for vine and tuber development, followed by a distinct dry period that triggers vine senescence and tuber maturity, making rainfall seasonality as important as total rainfall.',
        },
        {
          type: 'paragraph',
          text: 'The crop has essentially no frost or cold tolerance and is restricted to tropical and warm subtropical growing zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Yam performs best on deep, loose, well-drained sandy loam soils that allow tubers to expand freely; compacted, stony, or heavy clay soils restrict tuber growth and can cause misshapen tubers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of tuber rot in storage and in the field. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Fields are typically prepared into mounds or ridges to give tubers a deep, loose rooting zone, and seed tubers or setts are planted at the start of the rains.',
        },
        {
          type: 'list',
          items: [
            'Selection of healthy, disease-free seed tubers or setts for planting',
            'Mounding or ridging to provide a loose, well-drained rooting zone',
            'Staking of vines onto poles or living supports to improve light interception',
            'Weed control during early growth, before the vine canopy closes over the stakes',
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
          text: 'Potassium supports tuber bulking and starch accumulation, while nitrogen contributes to vine growth, particularly early in the season. Yam is often grown with organic amendments incorporated during mound or ridge preparation.',
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
          text: 'Yam is grown predominantly under rain-fed conditions timed to the wet season, with the following dry season used for tuber maturation and harvest. Supplemental surface irrigation is used in some production systems to extend planting windows or support establishment.',
        },
        {
          type: 'paragraph',
          text: 'Excess soil moisture late in the season can promote tuber rot, so drainage is managed alongside water supply.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose, causing leaf and stem lesions and dieback, is one of the most damaging foliar diseases of yam, particularly on water yam. Root-knot nematodes damage tubers and reduce marketable quality and storability, while yam weevils attack tubers both in the field and in storage.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on clean, disease-free seed tubers, resistant varieties where available, field sanitation, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Yam tubers are lifted by hand, carefully to avoid bruising and wounds that shorten storage life, once vines have senesced during the dry season. A portion of the harvest is set aside as seed tubers for the next planting.',
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
            'Staple food starch, boiled, pounded, roasted, or fried',
            'Processed into flour and other convenience products in some markets',
            'Seed tubers retained for the following planting cycle',
            'Cultural and ceremonial significance in parts of West Africa',
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
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'sweet-potato' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'host-plant'],
  geographicScope:
    'Global overview of tropical production, concentrated in West Africa, the Caribbean, and tropical Asia-Pacific.',
  climateContext:
    'Warm, humid tropical vine requiring a marked wet-to-dry seasonal transition; no frost tolerance.',
  limitations: [
    'Species and cultivar diversity, mound/ridge practices, and seed-tuber management vary substantially by region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global yam production and food-security role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cip',
      citedFor: 'Root and tuber crop research and agronomy',
    },
    { sourceId: 'cabi', citedFor: 'Yam disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Yam',
    description:
      'A structured, evidence-based reference on yam: classification, climate and soil needs, establishment, nutrition, diseases, pests, harvest, and uses.',
    keywords: ['yam', 'Dioscorea', 'root and tuber crop', 'yam cultivation'],
  },
  structuredData: { article: true },
};
