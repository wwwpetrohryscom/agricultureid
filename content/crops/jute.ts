import type { CropContent } from '@/types/content';

export const jute: CropContent = {
  id: 'crop-jute',
  slug: 'jute',
  contentType: 'crop',
  title: 'Jute',
  scientificName: 'Corchorus olitorius and Corchorus capsularis',
  alternativeNames: ['Golden fiber'],
  category: 'Fiber crop',
  subcategory: 'Annual bast fiber crop',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual',
  summary:
    'Jute is a tall annual fiber crop grown mainly in the monsoon-fed floodplains of South Asia, valued for the strong, biodegradable bast fiber extracted from its stems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jute is grown for the fiber contained in the bark of its stem, extracted through a water-retting process after harvest. The crop is closely tied to the monsoon season and the alluvial floodplains of the Ganges-Brahmaputra delta, where it has long been a major smallholder cash crop.',
    },
    {
      type: 'paragraph',
      text: 'Two species are cultivated commercially, white jute (Corchorus capsularis) and tossa jute (Corchorus olitorius), which differ somewhat in fiber quality, growth habit, and regional preference.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Life cycle', value: 'Annual' },
    {
      label: 'Main species',
      value: 'Corchorus olitorius, Corchorus capsularis',
    },
    {
      label: 'Primary uses',
      value: 'Bast fiber for sacking, twine, and textiles',
    },
    {
      label: 'Climate',
      value: 'Warm, humid monsoon climate with heavy seasonal rainfall',
    },
    {
      label: 'Soil preference',
      value: 'Fertile alluvial floodplain soils',
      note: 'Retting requires access to standing or slow-moving water.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Jute is grown predominantly by smallholder farmers in the monsoon-affected floodplains of South Asia, where it fits into cropping calendars alongside rice and other staple crops on the same alluvial land.',
        },
        {
          type: 'paragraph',
          text: 'As a natural, biodegradable fiber, jute has continued relevance for sacking, packaging, and geotextile applications, alongside historical and ongoing use in twine and coarse textiles.',
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
            { term: 'Family', description: 'Malvaceae (mallow family)' },
            { term: 'Genus', description: 'Corchorus' },
            {
              term: 'Principal species',
              description:
                'Corchorus olitorius (tossa jute) and Corchorus capsularis (white jute)',
            },
            {
              term: 'Growth habit',
              description:
                'Tall, erect annual herb grown at high density for long, fibrous stems',
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
          text: 'Jute has long been cultivated in South Asia, with the Ganges-Brahmaputra delta region historically central to its production, processing, and trade, supporting major fiber industries in the surrounding countries.',
        },
        {
          type: 'paragraph',
          text: 'Production remains concentrated in South Asia today, with smaller cultivation in parts of Southeast Asia and elsewhere. Production and trade statistics are compiled by FAO and national agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Jute is closely tied to the monsoon season, requiring warm temperatures and abundant, well-distributed rainfall during its rapid vegetative growth phase to produce long, high-quality fiber-bearing stems.',
        },
        {
          type: 'paragraph',
          text: 'High humidity supports both crop growth and the subsequent retting process, in which harvested stems are soaked to separate the fiber from woody tissue.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Jute performs best on fertile alluvial soils typical of river floodplains, which combine good moisture supply with the nutrient replenishment provided by periodic flooding and sediment deposition.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Access to water for the retting process is as important a site consideration as field soil quality. Site suitability should be assessed with local soil survey and water-resource information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Jute is direct-seeded at high density to encourage tall, unbranched stems with long fiber-bearing sections, and early growth requires timely thinning and weed control.',
        },
        {
          type: 'list',
          items: [
            'High seeding density to promote tall, straight, fiber-rich stems',
            'Timely thinning to establish an even, well-spaced stand',
            'Weed control during early growth, before the canopy closes',
            'Rotation with rice or other crops common on the same floodplain land',
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
          text: 'Nitrogen supports the rapid vegetative growth central to fiber yield, while the fertile, regularly replenished alluvial soils typical of jute-growing floodplains reduce dependence on heavy fertilizer inputs relative to some other fiber crops.',
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
          text: 'Jute is grown predominantly under rain-fed monsoon conditions, with supplemental surface irrigation used in some areas to support establishment ahead of the main rains or during dry spells.',
        },
        {
          type: 'paragraph',
          text: 'After harvest, stems are commonly retted by submerging them in ponds, ditches, or slow-moving water for a period of days to weeks, a process that depends on adequate standing water rather than field irrigation.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose affects stems and leaves, particularly under wet conditions, and can reduce fiber quality, while root rot can occur in waterlogged or poorly drained soils. Stem borers and aphids are among the more common insect pests affecting stem quality and plant vigor.',
        },
        {
          type: 'paragraph',
          text: 'Management combines timely planting, field sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Stems are cut close to the ground once plants reach the appropriate maturity stage for fiber quality, then bundled and retted in water before the fiber is manually stripped, washed, and dried.',
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
            'Sacking and packaging materials, including bags for agricultural commodities',
            'Twine, rope, and coarse woven textiles',
            'Geotextiles and erosion-control fabric due to biodegradability',
            'Fiber by-products used in paper pulp and composite materials',
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
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'cotton' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'crop-rotation'],
  geographicScope:
    'Global overview of production concentrated in the monsoon-fed floodplains of South Asia.',
  climateContext:
    'Warm, humid monsoon-season crop requiring abundant rainfall during rapid vegetative growth.',
  limitations: [
    'Retting method and water access requirements are highly local and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global jute production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Jute disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Jute',
    description:
      'A structured, evidence-based reference on jute: classification, monsoon climate needs, agronomy, nutrition, diseases, pests, and bast-fiber uses.',
    keywords: ['jute', 'Corchorus', 'bast fiber crop', 'jute cultivation'],
  },
  structuredData: { article: true },
};
