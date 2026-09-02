import type { CropContent } from '@/types/content';

export const rhodesGrass: CropContent = {
  id: 'crop-rhodes-grass',
  slug: 'rhodes-grass',
  contentType: 'crop',
  title: 'Rhodes Grass',
  scientificName: 'Chloris gayana',
  alternativeNames: ['Katambora'],
  category: 'Forage crop',
  subcategory: 'Stoloniferous tropical perennial grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Rhodes grass tolerates saline and alkaline soil and saline irrigation water well enough to be the pasture grown where the water is too salty for anything else, and it spreads by stolons rather than sitting in a tussock.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rhodes grass is an African grass grown for pasture and hay across the warm subtropics. Unlike the big tropical tussock grasses it runs, spreading by stolons that root at the nodes, so a stand knits into a sward rather than standing in clumps.',
    },
    {
      type: 'paragraph',
      text: 'Its distinguishing agronomic property is tolerance of salinity and alkalinity. It is grown on moderately saline and sodic land and under irrigation with water too saline for other forages, which places it in irrigation schemes and reclamation programmes rather than only in pasture.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Habit',
      value: 'Stoloniferous; spreads to form a sward rather than a tussock',
    },
    {
      label: 'Distinguishing tolerance',
      value: 'Moderately saline and alkaline soils and saline irrigation water',
    },
    {
      label: 'Principal products',
      value: 'Grazing and hay; it is not suited to silage',
    },
    { label: 'Seed', value: 'Very light and fluffy, which complicates sowing' },
    {
      label: 'Drought',
      value: 'Less drought-tolerant than buffel or guinea grass',
    },
  ],
  sections: [
    {
      id: 'salinity',
      heading: 'Salt tolerance is the reason it is chosen',
      body: [
        {
          type: 'paragraph',
          text: 'Rhodes grass produces on moderately saline and alkaline soils and under irrigation with water other forages will not take, which is why it appears in irrigation districts of the Middle East, North Africa, Australia and Pakistan. It is also used in reclaiming sodic land, where its stolons cover ground quickly and organic matter accumulates.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'hay',
      heading: 'A hay crop, not a silage crop',
      body: [
        {
          type: 'paragraph',
          text: 'The grass cures well and is baled for hay at large scale, and it is the basis of an international trade in baled forage into countries that import most of their livestock feed. It does not ensile well, so a producer choosing Rhodes grass has chosen a hay system, with the drying weather that implies.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'stolons',
      heading: 'Stolons change how a stand behaves',
      body: [
        {
          type: 'paragraph',
          text: 'Because it runs and roots at the nodes, Rhodes grass repairs gaps, holds soil on erodible ground and competes with weeds in a way a tussock grass does not. The same habit makes it harder to remove from a field going back into crop, and it is why the grass is used for waterway and roadside stabilisation.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Light seed and a difficult sowing',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is very light and chaffy and will not flow through a conventional drill without either a special box or a carrier, so establishment is often by broadcasting onto a prepared surface and rolling. Poor stands in this crop are usually a sowing-mechanics problem rather than a seed-viability one.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Quality falls fast with age',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding value is good while the sward is young and leafy and drops sharply as it stems, so cutting or grazing interval decides the value of the crop more than total yield does. Rhodes grass hay cut late is bulk rather than feed.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'Drought tolerance is moderate, not high',
      body: [
        {
          type: 'paragraph',
          text: 'It survives a dry season but is less drought-hardy than buffel grass or guinea grass, and in low-rainfall pastures it thins where those persist. Its combination is water-responsive productivity with salt tolerance rather than survival on very low rainfall.',
        },
      ],
    },
    {
      id: 'nematodes',
      heading: 'Used against nematodes',
      body: [
        {
          type: 'paragraph',
          text: 'Some Rhodes grass cultivars are poor hosts for root-knot nematode and are used deliberately as a break in horticultural and cropping rotations for that reason. Whether a given cultivar has that property is a cultivar question, not a species one.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'ploidy',
      heading: 'Diploid and tetraploid types',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivars divide into diploid types, which are earlier and finer, and tetraploid types, which are later, coarser and generally higher-yielding. The two suit different systems, and seed of one is not a substitute for the other.',
        },
      ],
    },
    {
      id: 'escape',
      heading: 'Naturalisation',
      body: [
        {
          type: 'paragraph',
          text: 'Rhodes grass has naturalised widely outside sown pasture and is treated as an environmental weed in parts of Australia and the Pacific. As with the other sown tropical grasses, the traits that make it persist under grazing are the traits that make it persist where it is not wanted.',
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
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'stem-borers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'solonchak' },
    { type: 'soil', slug: 'saline-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'sodium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'irrigation-method', slug: 'border-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'center-pivot-irrigation' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'flat-storage-warehouse' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'signal-grass' },
    { type: 'crop', slug: 'guinea-grass' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['perennial-crop', 'forage'],
  geographicScope:
    'Native to Africa. Grown in Australia, the Middle East, North and East Africa, South Asia and the Americas, often under irrigation.',
  climateContext:
    'Warm subtropical to tropical; moderately drought-tolerant, tolerant of salinity and alkalinity and responsive to irrigation.',
  limitations: [
    'Salinity tolerance is relative and depends on cultivar, soil and irrigation management; no threshold is given here.',
    'Nematode resistance is a cultivar property and is not general to the species.',
    'Naturalisation and weed listings are region-specific and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical grassland and pasture context' },
    { sourceId: 'cabi', citedFor: 'Chloris gayana compendium data' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    { sourceId: 'au-qld-dpi', citedFor: 'Queensland pasture species guidance' },
    { sourceId: 'sa-mewa', citedFor: 'Irrigated forage production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Rhodes Grass',
    description:
      'Chloris gayana as a crop: salinity and alkalinity tolerance, stoloniferous sward, hay rather than silage, light seed and fast quality decline.',
    keywords: [
      'Rhodes grass',
      'Chloris gayana',
      'saline soil forage',
      'tropical hay',
      'stoloniferous grass',
    ],
  },
  structuredData: { article: true },
};
