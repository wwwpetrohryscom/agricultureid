import type { CropContent } from '@/types/content';

export const kodoMillet: CropContent = {
  id: 'crop-kodo-millet',
  slug: 'kodo-millet',
  contentType: 'crop',
  title: 'Kodo Millet',
  scientificName: 'Paspalum scrobiculatum',
  alternativeNames: ['Kodra', 'Varagu', 'Ditch millet'],
  category: 'Cereal crop',
  subcategory: 'Hardy small millet',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Kodo millet is the one cereal whose grain is routinely tested before it is eaten: infected grain causes a documented poisoning syndrome, and that hazard rather than yield is what governs how the crop is handled.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kodo millet is an Indian domesticate grown across the drier parts of the subcontinent, notably in Madhya Pradesh, Chhattisgarh and the Deccan. It is exceptionally hardy, keeps well in store, and produces on shallow, stony, low-fertility ground where little else does.',
    },
    {
      type: 'paragraph',
      text: 'It also carries a hazard that no other cereal carries in the same way. Grain infected in the head — associated in the literature with ergot and with Aspergillus and Penicillium producing cyclopiazonic acid — causes a recognised poisoning syndrome, kodua poisoning. Handling the crop means handling that risk.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Origin',
      value: 'An Indian domesticate, cultivated for a very long period',
    },
    {
      label: 'Hazard',
      value:
        'Kodua poisoning from infected grain; ergot and mycotoxin-producing fungi implicated',
    },
    {
      label: 'Adaptation',
      value: 'Shallow, stony, low-fertility soils and low rainfall',
    },
    {
      label: 'Storage',
      value: 'Grain stores unusually well, reportedly for years',
    },
    { label: 'Producing region', value: 'Central and peninsular India' },
  ],
  sections: [
    {
      id: 'poisoning',
      heading: 'The grain hazard, stated plainly',
      body: [
        {
          type: 'paragraph',
          text: 'Kodo grain infected in the field produces a poisoning syndrome recorded in Indian medical and agricultural literature. Ergot on the ear head is one implicated agent, and infestation by Aspergillus and Penicillium producing cyclopiazonic acid is another. The practical consequence is that grain harvested in wet conditions is treated with suspicion and old, well-dried grain is preferred. AgricultureID records the hazard as a fact about the crop and gives no diagnostic or clinical guidance.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'wet-harvest',
      heading: 'Weather at harvest is a safety question',
      body: [
        {
          type: 'paragraph',
          text: 'Because infection is associated with rain and humidity during grain fill and ripening, harvest weather in this crop determines not only quality but whether the grain is used at all. That is an unusual relationship: in most cereals wet harvest costs grade, here it can cost the crop entirely.',
        },
      ],
    },
    {
      id: 'hardiness',
      heading: 'Grown where nothing else is',
      body: [
        {
          type: 'paragraph',
          text: 'Kodo produces on shallow, gravelly, low-fertility soils under low and erratic rainfall, and it is grown on the poorest land in the districts where it is important. Its yields are low, and that is a statement about where it is placed as much as about its potential.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Grain that keeps',
      body: [
        {
          type: 'paragraph',
          text: 'The grain is famously durable in storage, reported to remain usable for several years, which historically made it a famine reserve. In a rainfed system with uncertain seasons, a grain that stores is worth more than its yield alone suggests.',
        },
      ],
    },
    {
      id: 'weed-crop',
      heading: 'A cultivated grass with a wild counterpart',
      body: [
        {
          type: 'paragraph',
          text: 'Paspalum scrobiculatum occurs both as a cultivated cereal and as a widespread wild and weedy grass, and the two are the same species. That continuum makes seed source and field history matter, and it complicates any statement about the species that does not say which form is meant.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'dehulling',
      heading: 'Dehulling is the bottleneck',
      body: [
        {
          type: 'paragraph',
          text: 'As with the other small millets, the grain is husked and separating that husk at village scale is slow. Dehulling equipment suited to small millets is a limiting factor on their use, and it is the most frequently named intervention in Indian small-millet programmes.',
        },
      ],
    },
    {
      id: 'policy',
      heading: 'Renewed policy attention',
      body: [
        {
          type: 'paragraph',
          text: "Indian policy has promoted millets strongly in recent years, and kodo has moved from a neglected crop to one with procurement and promotion behind it. That has changed the crop's prospects without changing its agronomy, and the grain-safety question travels with the expansion.",
        },
      ],
    },
    {
      id: 'duration',
      heading: 'A longer season than the other small millets',
      body: [
        {
          type: 'paragraph',
          text: 'Kodo takes longer to mature than foxtail or barnyard millet, and it is grown as a main-season rainfed crop rather than as a catch crop. Within the small millets it is the hardy, long-storing one rather than the quick one.',
        },
      ],
    },
    {
      id: 'genomics',
      heading: 'Recent genetic work',
      body: [
        {
          type: 'paragraph',
          text: "Genome and genetics work on kodo millet is recent and limited compared with the major cereals, and improvement has relied largely on selection within landraces. The gap between the crop's regional importance and its research base is the ordinary condition of a small millet.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'common-smut' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'finger-millet' },
    { type: 'crop', slug: 'foxtail-millet' },
    { type: 'crop', slug: 'sorghum' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Central and peninsular India — Madhya Pradesh, Chhattisgarh, Karnataka and neighbouring states. Grown at small scale elsewhere in South Asia.',
  climateContext:
    'Semi-arid rainfed; hardy on shallow, stony, infertile soils and grown as a main-season monsoon crop.',
  limitations: [
    'The grain-safety hazard is recorded as an agricultural fact. No diagnostic, clinical or testing guidance is given and none should be inferred.',
    'The species occurs as both a cultivated cereal and a wild grass, so species-level records may describe either.',
    'Yield figures reflect the marginal land the crop is usually placed on rather than its potential.',
  ],
  sourceReferences: [
    {
      sourceId: 'icar',
      citedFor: 'Indian small millet agronomy and grain safety literature',
    },
    { sourceId: 'cgiar', citedFor: 'Small millet germplasm research' },
    { sourceId: 'cabi', citedFor: 'Paspalum scrobiculatum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Millet production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Kodo Millet',
    description:
      'Paspalum scrobiculatum as a crop: the kodua poisoning hazard from infected grain, hardiness on stony ground, long grain storage and dehulling constraints.',
    keywords: [
      'kodo millet',
      'Paspalum scrobiculatum',
      'kodua poisoning',
      'small millet',
      'India',
    ],
  },
  structuredData: { article: true },
};
