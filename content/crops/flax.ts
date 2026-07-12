import type { CropContent } from '@/types/content';

export const flax: CropContent = {
  id: 'crop-flax',
  slug: 'flax',
  contentType: 'crop',
  title: 'Flax',
  scientificName: 'Linum usitatissimum',
  alternativeNames: ['Linseed', 'Common flax'],
  category: 'Fiber crop',
  subcategory: 'Annual bast fiber and oilseed crop',
  botanicalFamily: 'Linaceae (flax family)',
  lifecycle: 'Annual',
  summary:
    'Flax is a slender annual grown in two distinct forms: fiber flax, cultivated for the bast fiber in its stem, and linseed (oilseed) flax, grown for its oil-rich seed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flax is cultivated in two main types selected for different purposes: fiber flax, grown tall and densely for long, uniform stem fibers used in linen textiles, and linseed types, bred shorter and more branched to maximize seed and oil yield.',
    },
    {
      type: 'paragraph',
      text: 'The crop has a long history of cultivation across temperate regions and remains agronomically and economically important both as a specialty fiber crop in parts of Europe and as an oilseed crop grown more widely in temperate cropping regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Linaceae (flax family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Linum usitatissimum' },
    {
      label: 'Primary uses',
      value: 'Bast fiber for linen textiles, linseed oil, meal',
    },
    {
      label: 'Climate',
      value: 'Cool, temperate; moderate moisture during establishment',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams with a fine seedbed',
      note: 'Fiber flax is particularly sensitive to seedbed quality.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Flax is grown in temperate cropping regions worldwide, with fiber flax production concentrated in parts of Western Europe with the specialized infrastructure needed for retting and fiber processing, while linseed (oilseed) flax is grown more broadly across temperate grain regions.',
        },
        {
          type: 'paragraph',
          text: 'Because fiber and linseed types are selected for different plant architectures and end uses, the two production streams are managed somewhat differently despite sharing the same species.',
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
            { term: 'Family', description: 'Linaceae (flax family)' },
            { term: 'Genus and species', description: 'Linum usitatissimum' },
            {
              term: 'Type groups',
              description:
                'Fiber flax (tall, sparsely branched) and linseed/oilseed flax (shorter, more branched, higher seed yield)',
            },
            {
              term: 'Growth habit',
              description:
                'Slender, erect annual herb with narrow leaves and blue or white flowers, producing capsules containing oil-rich seed',
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
          text: 'Flax is among the oldest cultivated plants, domesticated in the Fertile Crescent for both fiber and oil, and its cultivation spread across Europe and Asia over millennia before reaching other temperate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Today, fiber flax production is concentrated in parts of Western Europe, while linseed (oilseed) flax is grown across a wider range of temperate cropping regions. Production and trade figures are compiled by FAO, EU agricultural bodies, and national agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Flax is adapted to cool, temperate climates with moderate, well-distributed moisture, particularly during the early growth stages when the crop establishes its stand and fiber quality (in fiber types) is largely determined.',
        },
        {
          type: 'paragraph',
          text: 'Hot, dry conditions during flowering and seed fill can shorten the growing period and reduce yield, particularly in linseed types grown in more marginal environments.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Flax performs best on fertile, well-drained loam and clay loam soils with a fine, firm seedbed, since its small seeds and shallow root system are sensitive to poor soil structure and crusting.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Fiber flax in particular benefits from uniform, stone-free soils to support long, even stem growth. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Flax is established into a fine, firm seedbed using a seed drill at a density set according to whether fiber or seed yield is the primary goal, since plant density strongly affects branching and stem quality.',
        },
        {
          type: 'list',
          items: [
            'Type and cultivar selection according to fiber or linseed (oilseed) end use',
            'Fine, firm seedbed preparation suited to small-seeded establishment',
            'Density management, since higher density favors long, unbranched fiber stems',
            'Rotation with cereals or other broadleaf crops to manage disease pressure',
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
          text: 'Nitrogen supports vegetative growth but is managed carefully in fiber flax, since excess nitrogen can promote branching that reduces fiber quality; sulfur is also commonly considered in flax nutrition programs.',
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
          text: 'Flax is grown predominantly under rain-fed conditions in temperate regions with adequate seasonal rainfall, with water demand highest during establishment and stem elongation.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental irrigation is used in some drier production areas, primarily to support even establishment and reduce the risk of early-season moisture stress.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is a significant soil-borne disease of flax, capable of persisting in fields for years, while powdery mildew can affect foliage later in the season. Aphids are common sap-feeding pests, and flea beetles can damage seedlings, sometimes severely, during early establishment.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fiber flax is typically pulled (rather than cut) to preserve full stem length and then retted in the field or in water before fiber extraction, while linseed flax is combine-harvested once capsules and seed have dried down.',
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
            'Bast fiber processed into linen yarn and textiles',
            'Linseed oil for food, paints, and industrial applications',
            'Oilseed meal used as animal feed after oil extraction',
            'Straw and processing by-products used in specialty paper and composite materials',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'climate', slug: 'temperature' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'hemp' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'crop-rotation'],
  geographicScope:
    'Global overview of temperate production. Fiber flax and linseed flax differ in regional concentration and management.',
  climateContext:
    'Cool, temperate annual sensitive to heat and drought during flowering and seed fill.',
  limitations: [
    'Fiber-type retting methods and infrastructure requirements are highly regional and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global flax and linseed production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union fiber flax sector context',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Flax disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Flax',
    description:
      'A structured, evidence-based reference on flax: classification, climate and soil needs, fiber and linseed agronomy, diseases, pests, and uses.',
    keywords: ['flax', 'Linum usitatissimum', 'linseed', 'fiber crop'],
  },
  structuredData: { article: true },
};
