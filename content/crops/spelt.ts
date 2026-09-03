import type { CropContent } from '@/types/content';

export const spelt: CropContent = {
  id: 'crop-spelt',
  slug: 'spelt',
  contentType: 'crop',
  title: 'Spelt',
  scientificName: 'Triticum aestivum subsp. spelta',
  alternativeNames: ['Dinkel', 'Farro grande'],
  category: 'Cereal grain',
  subcategory: 'Hulled hexaploid wheat',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Spelt is bread wheat’s hulled subspecies: the same hexaploid genome, wrapped in glumes that threshing will not remove. That single difference adds a processing step, changes the supply chain and defines the crop commercially.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Spelt is not a different species from bread wheat. Both authorities place it as Triticum aestivum subsp. spelta — the same hexaploid AABBDD genome, 42 chromosomes — and the agronomy follows accordingly. What separates it is the spike.',
    },
    {
      type: 'paragraph',
      text: 'In free-threshing wheat the glumes release the grain at threshing. In spelt they do not: the grain comes off the combine still enclosed, and a separate dehulling operation is needed before anything can be milled. Everything commercially distinctive about the crop follows from that.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Ploidy',
      value:
        'Hexaploid, 2n = 6x = 42, genomes AABBDD — the same as bread wheat',
    },
    {
      label: 'Rank',
      value: 'Subspecies of Triticum aestivum under both authorities',
    },
    {
      label: 'Grain form',
      value: 'Hulled: glumes adhere and are not released by threshing',
    },
    { label: 'Extra operation', value: 'Dehulling before milling' },
    {
      label: 'Market',
      value: 'Specialty milling and organic systems, chiefly central Europe',
    },
  ],
  sections: [
    {
      id: 'hulled',
      heading: 'The glume is the whole difference',
      body: [
        {
          type: 'paragraph',
          text: 'Spelt threshes as a spikelet rather than a grain, with the glumes still attached, so the harvested tonnage includes hull that must be removed before milling. Dehulling loss is substantial and is the reason spelt yields are quoted in two different ways — as harvested, and as dehulled — which makes casual yield comparison with wheat misleading.',
        },
      ],
    },
    {
      id: 'same-species',
      heading: 'Why it is not a different wheat',
      body: [
        {
          type: 'paragraph',
          text: 'Because spelt carries the same genome as bread wheat, it shares its diseases, its rusts and much of its agronomy, and the two cross readily. Claims that spelt is fundamentally different from wheat in composition or in gluten do not follow from its taxonomy, and it is not suitable for people who must avoid wheat gluten.',
        },
      ],
    },
    {
      id: 'agronomy',
      heading: 'Where it is grown, and why',
      body: [
        {
          type: 'paragraph',
          text: 'Spelt is grown chiefly in central Europe on land and in systems where its tolerance of poorer soils and lower inputs is worth more than the yield it gives up. Its long straw and tolerance of low fertility suit organic rotations, where a crop that performs adequately without heavy nitrogen is worth more than a crop that needs it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'straw',
      heading: 'Long straw and lodging',
      body: [
        {
          type: 'paragraph',
          text: 'Spelt is tall and lodges readily on fertile ground or with generous nitrogen, which caps how intensively it can be grown. That is a constraint rather than a defect: the crop is chosen for situations where the nitrogen would not be applied anyway.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'sowing',
      heading: 'Winter habit and sowing',
      body: [
        {
          type: 'paragraph',
          text: 'Most spelt is autumn-sown and requires vernalisation. Because the sown unit is a spikelet rather than a grain, seed rates are calculated differently from wheat and drill calibration must account for the hull, which is a routine source of establishment error for growers new to it.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'The dehulling chain',
      body: [
        {
          type: 'paragraph',
          text: 'Dehulling requires equipment a conventional grain chain does not have, so spelt production is tied to the existence of a local dehuller. That infrastructure dependency, more than agronomy, determines where the crop is grown, and it is why spelt areas are regionally concentrated rather than spread across wheat country.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Milling and baking',
      body: [
        {
          type: 'paragraph',
          text: 'Spelt gluten is generally more extensible and less elastic than bread wheat gluten, which changes dough handling more than it changes nutrition. Bakers adjust hydration and mixing rather than treating it as a substitute, and over-mixing is the characteristic failure.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Naming and confusion with farro',
      body: [
        {
          type: 'paragraph',
          text: 'The Italian term farro covers einkorn, emmer and spelt together, so a product labelled farro may be any of the three. A reader matching a purchase to a species will need the botanical name, because the culinary term does not distinguish three different ploidy levels.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Disease',
      body: [
        {
          type: 'paragraph',
          text: 'Spelt is affected by the same rusts and blotches as bread wheat, and the hull gives some protection against Fusarium infection of the grain itself without protecting the spike. Resistance ratings from bread wheat trials do not transfer, because spelt cultivars are a separate and much smaller breeding pool.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
    { type: 'plant-disease', slug: 'septoria-tritici-blotch' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cereal-leaf-beetle' },
    { type: 'pest', slug: 'hessian-fly' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'luvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'vernalization' },
    { type: 'climate', slug: 'frost' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'emmer' },
    { type: 'crop', slug: 'einkorn' },

    { type: 'crop', slug: 'durum-wheat' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Chiefly central Europe, with smaller production in North America. Dehulling infrastructure rather than climate sets where it is grown.',
  climateContext:
    'Temperate winter cereal; tolerant of poorer soils and lower nitrogen than bread wheat, and prone to lodging on fertile ground.',
  limitations: [
    'Yields as harvested and after dehulling are different quantities and are not interchangeable; no dehulling loss figure is given here.',
    'Spelt contains wheat gluten and is not suitable for people who must avoid it.',
    'Composition claims comparing spelt with bread wheat vary widely between studies and with nitrogen supply.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Cereal production and utilisation context' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat ploidy, genome relationships and breeding',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Triticum aestivum compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Spelt',
    description:
      'Triticum aestivum subsp. spelta: the adhering glume that adds a dehulling step, the same hexaploid genome as bread wheat, and the farro naming problem.',
    keywords: [
      'spelt',
      'Triticum spelta',
      'hulled wheat',
      'dinkel',
      'dehulling',
    ],
  },
  structuredData: { article: true },
};
