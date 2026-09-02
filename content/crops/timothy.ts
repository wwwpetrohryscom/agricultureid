import type { CropContent } from '@/types/content';

export const timothy: CropContent = {
  id: 'crop-timothy',
  slug: 'timothy',
  contentType: 'crop',
  title: 'Timothy',
  scientificName: 'Phleum pratense',
  alternativeNames: ['Timothy grass', 'Herd grass'],
  category: 'Forage crop',
  subcategory: 'Cool-season perennial hay grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Timothy is the hay grass of cool temperate agriculture. It is late-heading, stores its reserves in a swollen stem base rather than in a crown, and is cut rather than grazed — which is why it dominates the export hay trade and disappears under close stocking.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Timothy is grown to be cut. It is the standard of the traded hay market for horses and dairy cattle, valued for a soft leaf, low dust and a consistent appearance that buyers can specify, and it is one of very few forage grasses whose main market is a visible, graded product rather than a grazed sward.',
    },
    {
      type: 'paragraph',
      text: 'The reason it behaves as it does sits at the base of the stem. Timothy stores its carbohydrate reserves in a swollen internode — a haplocorm, often called a corm — just above the soil surface, and cutting or grazing below that structure removes the reserve the plant regrows from.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C3, cool-season' },
    {
      label: 'Storage organ',
      value: 'Swollen basal internode (haplocorm) at the stem base',
    },
    {
      label: 'Heading',
      value: 'Late relative to the other sown temperate grasses',
    },
    {
      label: 'Principal use',
      value: 'Conserved hay, widely traded and graded',
    },
    {
      label: 'Chief weakness',
      value: 'Poor tolerance of close or frequent defoliation',
    },
  ],
  sections: [
    {
      id: 'corm',
      heading: 'The corm decides the cutting height',
      body: [
        {
          type: 'paragraph',
          text: 'Because the reserve sits in a swollen stem base a few centimetres above the ground rather than in a crown at soil level, timothy is unusually sensitive to how low it is cut. A stand mown or grazed below that internode loses its regrowth capacity for the season, which is why timothy thins out of mixed swards under continuous stocking while ryegrass persists.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'late-heading',
      heading: 'Late heading is the agronomic advantage',
      body: [
        {
          type: 'paragraph',
          text: 'Timothy heads later than cocksfoot, ryegrass or meadow fescue, which spreads the first-cut workload on a mixed grassland farm and gives a wider window in which the crop is still at cutting quality. In a mixture it is the component that holds quality longest, and in a pure stand it sets the harvest date for the farm.',
        },
      ],
    },
    {
      id: 'hay-trade',
      heading: 'A graded export commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Very little forage is traded internationally, and timothy is the exception. Compressed timothy hay moves in container quantities to dairy and equine markets, bought on colour, leaf retention, stem fineness and freedom from weeds — a specification more like a horticultural crop than a forage, and one that rewards dry harvest weather above yield.',
        },
      ],
    },
    {
      id: 'winter',
      heading: 'Cold tolerance and where it sits',
      body: [
        {
          type: 'paragraph',
          text: 'Timothy is among the most winter-hardy of the sown temperate grasses and occupies ground too cold or too wet for perennial ryegrass to persist. That hardiness is paired with poor drought tolerance and a shallow root system, so it succeeds where summers are cool and moist and fails where they are not.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is very small and must be sown shallow into a firm seedbed; deep sowing is the usual cause of a failed stand. Establishment is slower than ryegrass, which is why timothy is often undersown into a cereal or sown with a nurse component that is then removed at the first cut.',
        },
      ],
    },
    {
      id: 'clover',
      heading: 'Grown with clover',
      body: [
        {
          type: 'paragraph',
          text: 'Timothy is a standard partner for red clover in a cutting ley, because both are cut rather than grazed and their harvest dates broadly coincide. The combination supplies the clover with a companion that will not shade it out early and supplies the grass with nitrogen it would otherwise be fertilised for.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Feed value',
      body: [
        {
          type: 'paragraph',
          text: 'Digestibility falls with maturity as it does in every grass, but timothy retains leaf well and its stem remains comparatively soft into heading, which is why hay cut slightly late is still acceptable where a coarser grass would not be. Buyers of horse hay frequently prefer a later cut for exactly that reason.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed production',
      body: [
        {
          type: 'paragraph',
          text: 'Timothy seed is produced in regions with dry harvest weather, and the crop is managed to hold the head intact to maturity. The seed is among the smallest of the forage grasses, which makes cleaning demanding and makes seed rate calculations sensitive to purity as much as to weight.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'What ends a stand',
      body: [
        {
          type: 'paragraph',
          text: 'Stands decline through loss of the basal storage structures rather than through disease, and the usual causes are cutting too low, cutting too often, or grazing aftermath too hard in autumn. Where disease matters it is generally a leaf spot complex in humid conditions, which reduces hay quality more than it reduces yield.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'red-clover' },
    { type: 'crop', slug: 'perennial-ryegrass' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Cool temperate regions of Europe, North America and northern Asia. Cutting dates and recommended-list ratings are national.',
  climateContext:
    'Cool-season C3 grass; among the most winter-hardy sown grasses and poorly tolerant of summer drought.',
  limitations: [
    'Cutting heights and intervals are set by national guidance and by the system; the principle here does not substitute for a local recommendation.',
    'Hay grade specifications are set by individual markets and buyers and are not reproduced.',
    'Heading date ratings are national conventions and are not directly comparable between recommended lists.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Temperate forage grass production context' },
    {
      sourceId: 'ahdb',
      citedFor: 'Grass species characteristics and cutting management',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Phleum pratense compendium data' },
    { sourceId: 'usda-ars', citedFor: 'Forage grass research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Timothy',
    description:
      'Phleum pratense as a hay crop: the basal storage corm that sets cutting height, late heading, cold hardiness and the graded export hay trade.',
    keywords: [
      'timothy',
      'Phleum pratense',
      'timothy hay',
      'forage grass',
      'haplocorm',
    ],
  },
  structuredData: { article: true },
};
