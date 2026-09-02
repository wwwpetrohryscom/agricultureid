import type { CropContent } from '@/types/content';

export const emmer: CropContent = {
  id: 'crop-emmer',
  slug: 'emmer',
  contentType: 'crop',
  title: 'Emmer',
  scientificName: 'Triticum turgidum subsp. dicoccum',
  alternativeNames: ['Farro medio', 'Hulled tetraploid wheat'],
  category: 'Cereal grain',
  subcategory: 'Hulled tetraploid wheat',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Emmer is the tetraploid hulled wheat: the same AABB genome as durum, wrapped in glumes that threshing will not release. It is the wheat that fed the ancient Near East and now survives in a handful of specialty and marginal systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Emmer sits between einkorn and spelt in the wheat ploidy series and shares its genome with durum. It formed from a hybridisation between Triticum urartu and a relative of Aegilops speltoides, giving the AABB tetraploid from which durum was later selected as a free-threshing form.',
    },
    {
      type: 'paragraph',
      text: 'Emmer kept the hull. That is what separates it commercially from durum and what places it, with einkorn and spelt, in the group of hulled wheats sold under the Italian name farro.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Ploidy',
      value: 'Tetraploid, 2n = 4x = 28, genomes AABB — the same as durum',
    },
    {
      label: 'Grain form',
      value: 'Hulled: glumes adhere and are not released by threshing',
    },
    {
      label: 'Relationship to durum',
      value:
        'Durum is the free-threshing form selected from the same tetraploid lineage',
    },
    {
      label: 'Authority coverage',
      value:
        'Resolved by Plants of the World Online; not placed by World Flora Online',
    },
    {
      label: 'Principal regions',
      value: 'Italy, Ethiopia, Turkey and parts of the Near East',
    },
  ],
  sections: [
    {
      id: 'ploidy',
      heading: 'Where it sits in the wheat series',
      body: [
        {
          type: 'paragraph',
          text: 'Emmer is the middle rung of a three-step ploidy series: einkorn is diploid, emmer tetraploid, spelt and bread wheat hexaploid. Emmer arose first, from a cross between a diploid A-genome wheat and a B-genome relative, and the later cross of that tetraploid with Aegilops tauschii produced the hexaploids.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'durum',
      heading: 'Emmer and durum',
      body: [
        {
          type: 'paragraph',
          text: 'Durum and emmer share the AABB genome and differ in threshing behaviour: durum releases its grain, emmer does not. That makes them the same story told twice — one form that entered industrial agriculture and one that did not — and it is why emmer agronomy resembles durum agronomy more than it resembles spelt.',
        },
      ],
    },
    {
      id: 'ethiopia',
      heading: 'A living staple, not only a heritage grain',
      body: [
        {
          type: 'paragraph',
          text: 'Emmer is often written about as an archaeological crop, and in Ethiopia it is a working one, grown on smallholdings in the highlands and used in traditional foods. Treating it purely as a European specialty grain misdescribes where most of the remaining diversity and most of the everyday use actually are.',
        },
      ],
    },
    {
      id: 'marginal',
      heading: 'Grown where better wheats are not',
      body: [
        {
          type: 'paragraph',
          text: 'Emmer tolerates shallow, stony and low-fertility soils and short seasons better than modern bread wheat, and that tolerance rather than its yield is why it persists in mountainous and semi-arid regions. Its advantage disappears on good land.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'hulled',
      heading: 'Dehulling',
      body: [
        {
          type: 'paragraph',
          text: 'Like spelt, emmer harvests as a spikelet and needs a dehulling step before milling, and the same infrastructure constraint applies: production sits where a dehuller exists. Dehulling losses are higher than for spelt because the emmer glume is tighter.',
        },
      ],
    },
    {
      id: 'taxonomy',
      heading: 'A name resting on one authority',
      body: [
        {
          type: 'paragraph',
          text: 'Plants of the World Online gives Triticum turgidum subsp. dicoccum; World Flora Online returns no placement for the name. The corpus therefore publishes emmer on a single taxonomic source, which is recorded on the identity rather than smoothed over.',
        },
      ],
    },
    {
      id: 'farro',
      heading: 'Farro, again',
      body: [
        {
          type: 'paragraph',
          text: 'The Italian farro trade distinguishes farro piccolo (einkorn), farro medio (emmer) and farro grande (spelt), and emmer is the one most often meant when farro is used without qualification in Italy. A product labelled only farro cannot be resolved to a species without further information.',
        },
      ],
    },
    {
      id: 'agronomy',
      heading: 'Sowing and habit',
      body: [
        {
          type: 'paragraph',
          text: 'Emmer is tall, lodges on fertile ground and is usually grown at low input, which is a deliberate match to the situations that suit it rather than a limitation to be fertilised away. Both winter and spring types are grown depending on region.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'use',
      heading: 'What it is used for',
      body: [
        {
          type: 'paragraph',
          text: 'Emmer is used whole in soups and salads more than it is milled to flour, which suits a grain that is difficult to mill finely and holds its shape when cooked. That end use, rather than baking quality, is what the specialty market is buying.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
    { type: 'plant-disease', slug: 'fusarium-head-blight' },
    { type: 'plant-disease', slug: 'stem-rust' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cereal-leaf-beetle' },
    { type: 'pest', slug: 'hessian-fly' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'luvisol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'dryland-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'durum-wheat' },
    { type: 'crop', slug: 'spelt' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Italy, Ethiopia, Turkey and parts of the Near East and Caucasus. Most remaining landrace diversity is outside Europe.',
  climateContext:
    'Temperate to semi-arid; tolerant of shallow soils, short seasons and low fertility.',
  limitations: [
    'The identity rests on a single taxonomic authority; World Flora Online returns no placement for the name.',
    'Yields as harvested and after dehulling are different quantities and are not interchangeable.',
    'Emmer contains wheat gluten and is not suitable for people who must avoid it.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cereal production and underutilised crop context',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat ploidy series and genome relationships',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Triticum turgidum compendium data' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Emmer',
    description:
      'Triticum turgidum subsp. dicoccum as a crop: the tetraploid hulled wheat that shares durum’s genome, its Ethiopian and Italian production, and dehulling.',
    keywords: [
      'emmer',
      'Triticum dicoccum',
      'farro',
      'hulled wheat',
      'tetraploid wheat',
    ],
  },
  structuredData: { article: true },
};
