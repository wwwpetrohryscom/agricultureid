import type { CropContent } from '@/types/content';

export const signalGrass: CropContent = {
  id: 'crop-signal-grass',
  slug: 'signal-grass',
  contentType: 'crop',
  title: 'Signal Grass',
  scientificName: 'Urochloa brizantha',
  alternativeNames: [
    'Palisade grass',
    'Brachiaria brizantha (former name)',
    'Marandu',
  ],
  category: 'Forage crop',
  subcategory: 'Tropical perennial tussock grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Signal grass is an East African grass that became the pasture of Brazil, planted on something in the order of fifty million hectares — and because it reproduces by apomixis, most of that area is a small number of clones.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Signal grass is native to East and Central Africa and was introduced to tropical America in the 1960s. It is now the most widely sown pasture grass in Brazil, reported at around fifty million hectares, and the cultivar Marandu alone accounts for much of it.',
    },
    {
      type: 'paragraph',
      text: "Two facts govern the crop. It reproduces largely by apomixis, producing seed that is a clone of the mother plant, so a cultivar is a fixed genotype and a country's pasture can be genetically very narrow. And its dominance over other Urochloa species is owed less to yield than to resistance to spittlebug, the principal insect pest of tropical pasture.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Accepted name',
      value: 'Urochloa brizantha, transferred from Brachiaria',
    },
    {
      label: 'Origin and use',
      value:
        'Native to East and Central Africa; sown mainly in tropical America',
    },
    {
      label: 'Reported area in Brazil',
      value: 'In the order of 50 million hectares',
    },
    {
      label: 'Reproduction',
      value: 'Largely apomictic; seed is a clone of the mother plant',
    },
    {
      label: 'Reason for dominance',
      value: 'Spittlebug resistance rather than yield alone',
    },
  ],
  sections: [
    {
      id: 'apomixis',
      heading: 'Seed that is a clone',
      body: [
        {
          type: 'paragraph',
          text: 'Apomictic seed forms without fertilisation, so a signal grass cultivar reproduces itself exactly through seed. That is commercially convenient — a farmer sowing Marandu gets Marandu — and it is why breeding the genus is difficult, because a breeder needs sexual plants to make a cross at all. It also means a vast planted area can rest on very few genotypes.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'spittlebug',
      heading: 'Spittlebug decides which species is planted',
      body: [
        {
          type: 'paragraph',
          text: 'Spittlebugs are the main insect pest of tropical pastures in the Americas, and infestations reduce both forage production and its feeding value, with large reported losses in liveweight gain per hectare. Signal grass displaced other Urochloa species across Brazil mainly because it tolerates them better, which is an unusually direct case of one pest determining what a continent plants.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'monoculture',
      heading: 'The risk of a narrow pasture',
      body: [
        {
          type: 'paragraph',
          text: 'A pasture built from a handful of apomictic clones over tens of millions of hectares is exposed in the way any genetically uniform crop is: a pathogen or an insect biotype that overcomes the resistance has almost no barrier to spread. Breeding programmes work on interspecific hybrids specifically to widen that base.',
        },
      ],
    },
    {
      id: 'acid-soils',
      heading: 'Acid, low-fertility ground',
      body: [
        {
          type: 'paragraph',
          text: 'Signal grass produces on the acid, aluminium-rich, low-phosphorus soils of the Cerrado and comparable tropical savannas, which is what made large-scale pasture establishment there possible. It is not indifferent to fertility — it responds strongly to phosphorus and nitrogen — but it survives where many grasses do not.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment from seed',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is sown from seed rather than planted vegetatively, which is what allows establishment at scale, and seed quality is variable because much of it is harvested from pasture rather than produced under seed-crop conditions. Poor establishment in this crop is usually a seed-quality problem.',
        },
      ],
    },
    {
      id: 'photosensitisation',
      heading: 'A grazing hazard that is real',
      body: [
        {
          type: 'paragraph',
          text: 'Urochloa species contain steroidal saponins that have been associated with hepatogenous photosensitisation in grazing cattle and especially sheep, under conditions that are not fully predictable. It is a documented animal-health consideration of the genus and a reason the grasses are managed differently for sheep than for cattle.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Grazing management',
      body: [
        {
          type: 'paragraph',
          text: 'The grass forms a tall tussock and loses feeding value quickly as it stems and seeds, so rotational grazing that keeps it vegetative produces far more animal product than continuous grazing at low stocking. Degraded signal grass pasture — stemmy, weedy and low-yielding — is a large and well-documented problem in Brazil, and it is a management outcome rather than a fault of the species.',
        },
      ],
    },
    {
      id: 'name',
      heading: 'A genus that moved',
      body: [
        {
          type: 'paragraph',
          text: 'The grass is still widely sold and published as Brachiaria brizantha. Both authorities now accept Urochloa brizantha, and both names must be recognised when matching seed catalogues, research literature and trade records.',
        },
      ],
    },
    {
      id: 'invasive',
      heading: 'Where it is a weed',
      body: [
        {
          type: 'paragraph',
          text: 'Sown pasture grasses of this genus have escaped and are listed as environmental weeds in parts of Australia, the Pacific and tropical America, where they invade riparian zones and displace native vegetation. A grass selected to persist under grazing on poor soil is, by construction, difficult to remove.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'napier-grass' },
    { type: 'crop', slug: 'guinea-grass' },
    { type: 'crop', slug: 'rhodes-grass' },
  ],
  glossaryTerms: ['perennial-crop', 'forage'],
  geographicScope:
    'Native to East and Central Africa. Sown at very large scale in Brazil and elsewhere in tropical America, and in tropical Africa, Asia and northern Australia.',
  climateContext:
    'Humid and subhumid tropics; productive on acid, low-phosphorus soils and tolerant of a marked dry season.',
  limitations: [
    'Planted-area figures are national estimates from production literature and are not measured inventories.',
    'Photosensitisation risk depends on animal species, plant condition and other factors that are not predictable from the species alone.',
    'Weed and invasive listings differ by jurisdiction and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'embrapa', citedFor: 'Brazilian tropical pasture research' },
    { sourceId: 'cgiar', citedFor: 'Urochloa forage breeding and germplasm' },
    {
      sourceId: 'cabi',
      citedFor: 'Urochloa brizantha compendium data and invasive status',
    },
    { sourceId: 'fao', citedFor: 'Tropical grassland and pasture context' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Signal Grass',
    description:
      'Urochloa brizantha as a crop: apomictic seed and clonal pastures, spittlebug resistance as the reason for its dominance, acid soils and grazing management.',
    keywords: [
      'signal grass',
      'palisade grass',
      'Urochloa brizantha',
      'Brachiaria',
      'tropical pasture',
    ],
  },
  structuredData: { article: true },
};
