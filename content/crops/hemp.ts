import type { CropContent } from '@/types/content';

export const hemp: CropContent = {
  id: 'crop-hemp',
  slug: 'hemp',
  contentType: 'crop',
  title: 'Hemp',
  scientificName: 'Cannabis sativa',
  alternativeNames: ['Industrial hemp'],
  category: 'Fiber crop',
  subcategory: 'Annual bast fiber and oilseed crop',
  botanicalFamily: 'Cannabaceae (hemp family)',
  lifecycle: 'Annual',
  summary:
    'Industrial hemp is a fast-growing annual grown for bast fiber, seed oil, and seed meal, cultivated from low-cannabinoid cultivars under regulatory frameworks that govern seed source and permitted THC content.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Industrial hemp refers to Cannabis sativa cultivars bred and legally regulated for fiber, grain, and oilseed production rather than for cannabinoid content, with permitted cultivation generally requiring the use of approved, low-THC seed and compliance with national or regional licensing rules.',
    },
    {
      type: 'paragraph',
      text: 'The crop grows rapidly and produces a tall, fibrous stem, making it agronomically comparable in some respects to other bast fiber crops such as flax and jute, while its seed is also pressed for oil or processed into meal.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cannabaceae (hemp family)' },
    { label: 'Life cycle', value: 'Annual' },
    {
      label: 'Main species',
      value: 'Cannabis sativa (low-cannabinoid cultivars)',
    },
    {
      label: 'Primary uses',
      value:
        'Bast fiber, seed oil, seed meal, hurd/shiv for construction materials',
    },
    {
      label: 'Climate',
      value:
        'Temperate to warm-temperate; rapid vegetative growth in warm conditions',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams and silt loams',
      note: 'Cultivation is subject to regional licensing and cultivar-approval requirements.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Industrial hemp is grown across a range of temperate and warm-temperate regions under regulatory frameworks that specify approved, low-cannabinoid cultivars and set permitted THC thresholds, with cultivation typically requiring licensing or registration.',
        },
        {
          type: 'paragraph',
          text: 'Production is directed toward one or more of three main products — fiber, grain (seed), or a dual fiber-and-grain harvest — and cultivar choice and management practices differ according to which product is the primary target.',
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
            { term: 'Family', description: 'Cannabaceae (hemp family)' },
            { term: 'Genus and species', description: 'Cannabis sativa' },
            {
              term: 'Cultivated form',
              description:
                'Low-cannabinoid, fiber- and grain-type cultivars registered for industrial hemp production',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing, erect annual herb producing a fibrous stem and, in female plants, seed-bearing flower clusters',
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
          text: 'Cannabis sativa has a long history of cultivation across Asia and Europe for fiber and seed, with hemp fiber historically important in rope, sailcloth, and textile production before competition from other fibers and changing regulation reduced its cultivation in many regions during the twentieth century.',
        },
        {
          type: 'paragraph',
          text: 'Renewed interest in natural fibers, seed oil, and construction materials has led to expanded industrial hemp cultivation in parts of Europe, North America, and Asia under modern regulatory frameworks. Production statistics are compiled by FAO and national agencies where hemp is tracked as a distinct crop.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Hemp grows best in temperate to warm-temperate climates with warm conditions and adequate moisture during its rapid vegetative growth phase, which can produce substantial stem height within a single growing season.',
        },
        {
          type: 'paragraph',
          text: 'The crop is sensitive to late spring frosts at establishment but, once growing vigorously, tolerates a range of temperate growing-season conditions found across many mid-latitude cropping regions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Hemp performs best on fertile, well-drained loam and silt loam soils with good structure, reflecting its rapid growth rate and substantial nutrient and water demand over a relatively short season.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Compacted or poorly drained soils restrict root development and can increase disease risk. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Hemp is established using certified, regionally approved low-cannabinoid seed, drilled into a well-prepared seedbed, with plant density set according to whether fiber, grain, or dual-purpose production is intended.',
        },
        {
          type: 'list',
          items: [
            'Use of certified, regionally approved cultivars and seed sources in compliance with local licensing requirements',
            'Density management, since higher density favors fiber stem quality while lower density favors seed yield',
            'Timely weed control during early establishment, before the rapid canopy closure that later suppresses weeds',
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
          text: 'Nitrogen supports the rapid vegetative growth central to both fiber and seed yield, while potassium contributes to stem strength and seed development. Hemp is a relatively nutrient-demanding crop given its fast growth rate and biomass accumulation.',
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
          text: 'Hemp is grown both rain-fed, in regions with adequate seasonal rainfall, and under irrigation elsewhere, with water demand highest during the rapid vegetative growth phase.',
        },
        {
          type: 'paragraph',
          text: 'Consistent moisture supports even stand development and stem quality, particularly in fiber-type production, where uniformity affects processing efficiency.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold can affect stems and flower clusters under humid conditions, particularly later in the season, and Fusarium wilt can cause vascular disease and stand loss in susceptible fields. The European corn borer can bore into hemp stalks, weakening them, and aphids are common sap-feeding pests.',
        },
        {
          type: 'paragraph',
          text: 'Management combines cultivar selection, crop rotation, monitoring, and — where justified and permitted — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fiber hemp is typically cut and, in many systems, field-retted before baling, while grain hemp is combine-harvested once seed has matured; dual-purpose systems sequence grain and fiber harvest to recover both products from the same crop.',
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
            'Bast fiber for textiles, cordage, and technical nonwoven products',
            'Woody hurd (shiv) used in construction materials such as hempcrete and insulation',
            'Seed pressed for oil used in food and industrial applications',
            'Seed meal used as animal feed after oil extraction',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'temperature' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'flax' },
    { type: 'crop', slug: 'jute' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'cultivar'],
  geographicScope:
    'Global overview of regulated industrial hemp production across temperate and warm-temperate regions.',
  climateContext:
    'Fast-growing temperate to warm-temperate annual with substantial vegetative growth in a single season.',
  limitations: [
    'Licensing, permitted cultivars, and THC-threshold regulations vary by country and region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global industrial hemp production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Hemp disease and pest compendium data' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union industrial hemp regulatory context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Hemp',
    description:
      'A structured, evidence-based reference on industrial hemp: classification, agronomy, soil needs, diseases, pests, and fiber, seed, and hurd uses.',
    keywords: ['hemp', 'Cannabis sativa', 'industrial hemp', 'bast fiber crop'],
  },
  structuredData: { article: true },
};
