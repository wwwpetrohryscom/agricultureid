import type { CropContent } from '@/types/content';

export const einkorn: CropContent = {
  id: 'crop-einkorn',
  slug: 'einkorn',
  contentType: 'crop',
  title: 'Einkorn',
  scientificName: 'Triticum monococcum',
  alternativeNames: ['Farro piccolo', 'Small spelt'],
  category: 'Cereal grain',
  subcategory: 'Hulled diploid wheat',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Einkorn is the only diploid wheat in cultivation — a single genome where bread wheat has three — and it is hulled, low-yielding and grown almost entirely because of what it is rather than what it produces.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Einkorn carries two sets of chromosomes where emmer carries four and bread wheat six: diploid, AA, 14 chromosomes. It is the oldest domesticated wheat and the simplest genetically, and it is the only one of the three hulled wheats that never acquired a second genome.',
    },
    {
      type: 'paragraph',
      text: 'It is also the least productive. Einkorn survives in cultivation on very small areas, and the reasons for growing it are its tolerance of poor ground, its distinct grain, and a specialty market that values the species itself.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Ploidy',
      value:
        'Diploid, 2n = 2x = 14, genome AA — the only diploid wheat cultivated',
    },
    {
      label: 'Grain form',
      value: 'Hulled; a single grain per spikelet in most types',
    },
    { label: 'Yield', value: 'The lowest of the cultivated wheats' },
    { label: 'Tolerance', value: 'Poor, shallow and low-fertility soils' },
    {
      label: 'Market',
      value: 'Small specialty and heritage production, chiefly in Europe',
    },
  ],
  sections: [
    {
      id: 'diploid',
      heading: 'The only diploid wheat',
      body: [
        {
          type: 'paragraph',
          text: 'Every other cultivated wheat is polyploid — emmer and durum tetraploid, spelt and bread wheat hexaploid — and einkorn alone remained diploid. That makes it the simplest wheat genome and a reference point in wheat genetics, and it is the reason einkorn appears in research far out of proportion to its planted area.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'one-grain',
      heading: 'One grain to a spikelet',
      body: [
        {
          type: 'paragraph',
          text: 'The name means single grain, and most einkorn types set one grain per spikelet where emmer sets two and bread wheat more. That is a large part of why yields are low, and it is not a defect that breeding has been able to remove without leaving the species.',
        },
      ],
    },
    {
      id: 'hulled',
      heading: 'Hulled, and tightly so',
      body: [
        {
          type: 'paragraph',
          text: 'Einkorn threshes as a spikelet and needs dehulling before milling, like emmer and spelt. Its glumes are tight and dehulling losses are correspondingly high, which further reduces the usable yield from an already low harvest.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Grown on ground that will carry nothing better',
      body: [
        {
          type: 'paragraph',
          text: 'Einkorn tolerates shallow, stony, dry and infertile soils, and it is grown on exactly that kind of land in the few regions where it persists. On good ground it is comprehensively outyielded and there is no reason to choose it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'farro',
      heading: 'Farro piccolo',
      body: [
        {
          type: 'paragraph',
          text: 'In the Italian farro trade einkorn is farro piccolo, the smallest of the three. Because the term farro is applied to all three hulled wheats without distinction in much of the market, einkorn is frequently sold under a name that does not identify it.',
        },
      ],
    },
    {
      id: 'grain',
      heading: 'A visibly different grain',
      body: [
        {
          type: 'paragraph',
          text: 'Einkorn grain is small, narrow and often deep yellow, and it holds its shape in cooking, which is what the specialty market is buying. It mills to a soft flour with weak dough properties, so it is used in flatbreads, porridges and whole-grain preparations more than in leavened loaves.',
        },
      ],
    },
    {
      id: 'gluten',
      heading: 'Gluten and health claims',
      body: [
        {
          type: 'paragraph',
          text: 'Einkorn contains gluten and is not suitable for people who must avoid it. Its gluten differs in composition from bread wheat gluten, and claims that follow from that about digestibility or tolerance are contested in the literature and are not made here.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'A genetic resource',
      body: [
        {
          type: 'paragraph',
          text: 'Einkorn is maintained in germplasm collections well beyond what its cultivation would justify, because a diploid wheat is a tractable model for traits that are hard to study in a hexaploid. Its value to wheat breeding is disproportionate to its area, which is the standard argument for conserving a minor crop.',
        },
      ],
    },
    {
      id: 'agronomy',
      heading: 'Habit and harvest',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is tall, thin-stemmed and lodges readily, and it is normally grown at very low input for that reason. Harvest is straightforward but the spike is brittle in some landraces, so cutting slightly early is common where shattering is a risk.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cereal-leaf-beetle' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'cambisol' },
    { type: 'soil', slug: 'sandy-soil' },
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
    { type: 'crop', slug: 'emmer' },
    { type: 'crop', slug: 'spelt' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Very small areas in Italy, the Balkans, Turkey and central Europe. Germplasm holdings are far larger than production.',
  climateContext:
    'Temperate; tolerant of shallow, dry and infertile soils and grown at low input.',
  limitations: [
    'Einkorn contains gluten and is not suitable for people who must avoid it; claims about differing tolerance are contested and are not made here.',
    'Yields as harvested and after dehulling are different quantities and are not interchangeable.',
    'Production is too small and too informal to be reliably represented in national statistics.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Underutilised cereal context' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat ploidy series and genetic resources',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Triticum monococcum compendium data' },
    { sourceId: 'gbif', citedFor: 'Occurrence and taxonomic cross-reference' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Einkorn',
    description:
      'Triticum monococcum as a crop: the only cultivated diploid wheat, one grain per spikelet, hulled grain, poor-soil tolerance and its role as a genetic resource.',
    keywords: [
      'einkorn',
      'Triticum monococcum',
      'farro piccolo',
      'diploid wheat',
      'hulled wheat',
    ],
  },
  structuredData: { article: true },
};
