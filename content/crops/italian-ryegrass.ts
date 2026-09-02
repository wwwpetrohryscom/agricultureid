import type { CropContent } from '@/types/content';

export const italianRyegrass: CropContent = {
  id: 'crop-italian-ryegrass',
  slug: 'italian-ryegrass',
  contentType: 'crop',
  title: 'Italian Ryegrass',
  scientificName: 'Lolium multiflorum',
  alternativeNames: ['Annual ryegrass', 'Westerwolds ryegrass'],
  category: 'Forage crop',
  subcategory: 'Short-lived ryegrass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual to short-lived perennial',
  summary:
    'Italian ryegrass is grown for speed. It establishes faster and yields more in its first year than any other sown temperate grass, and it is gone within one to three years, which is the point rather than a fault.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Where perennial ryegrass is sown to last, Italian ryegrass is sown to produce quickly and then be removed. It germinates fast, tillers hard, and delivers a large first-year yield, which makes it the standard short-term ley, catch crop and undersown component across temperate agriculture.',
    },
    {
      type: 'paragraph',
      text: 'It also flowers in its establishment year, which perennial ryegrass does not, and that single difference governs both its productivity and its short life.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Growth habit', value: 'Erect, fast-establishing, short-lived' },
    {
      label: 'Types',
      value: 'Italian (one to three years) and Westerwolds (a single year)',
    },
    {
      label: 'Distinguishing trait',
      value: 'Flowers in the year of sowing, unlike perennial ryegrass',
    },
    {
      label: 'Ploidy',
      value: 'Diploid and tetraploid cultivars, as in perennial ryegrass',
    },
    {
      label: 'Typical use',
      value: 'Short-term ley, catch crop, undersowing and winter cover',
    },
  ],
  sections: [
    {
      id: 'speed',
      heading: 'Speed is the specification',
      body: [
        {
          type: 'paragraph',
          text: 'Italian ryegrass emerges and tillers faster than any other sown temperate grass, and it is chosen where a field must produce within weeks rather than seasons. That makes it the default after a failed crop, after early-harvested arable, and wherever a short gap in the rotation must yield something.',
        },
      ],
    },
    {
      id: 'types',
      heading: 'Italian and Westerwolds',
      body: [
        {
          type: 'paragraph',
          text: 'Westerwolds types flower and finish within a single year; Italian types persist for two or three. The distinction is real and is the first selection decision, because sowing a Westerwolds type into a two-year ley leaves a field that dies in its second spring.',
        },
      ],
    },
    {
      id: 'perennial',
      heading: 'Against perennial ryegrass',
      body: [
        {
          type: 'paragraph',
          text: 'Perennial ryegrass does not flower in its sowing year and persists for many; Italian ryegrass does the opposite on both counts. The two are frequently sown together, the Italian carrying the first year while the perennial establishes underneath it.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'silage',
      heading: 'A silage grass',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is cut rather than grazed in most systems, and its high water-soluble carbohydrate content makes it ferment readily, so it ensiles more reliably than a legume or a coarse grass. Multiple cuts a year are normal in its first full season.',
        },
      ],
    },
    {
      id: 'catch-crop',
      heading: 'Catch cropping and nitrogen capture',
      body: [
        {
          type: 'paragraph',
          text: 'Sown after an arable crop, Italian ryegrass takes up residual soil nitrogen that would otherwise leach over winter, and returns it when incorporated. That role is separate from its forage value and is the reason it appears in arable rotations with no livestock at all.',
        },
      ],
    },
    {
      id: 'undersowing',
      heading: 'Undersown in cereals',
      body: [
        {
          type: 'paragraph',
          text: 'Because it establishes under a standing crop and grows away once the cereal is cut, Italian ryegrass is the usual undersown species where a ley is to follow a cereal. Sowing rate must be restrained or the ley competes with the cereal it was sown into.',
        },
      ],
    },
    {
      id: 'weed',
      heading: 'A weed in its own right',
      body: [
        {
          type: 'paragraph',
          text: 'Volunteer Italian ryegrass in a following arable crop is a serious competitive weed, and herbicide-resistant populations have developed in several regions. The traits that make it a good catch crop — fast establishment, vigorous tillering, abundant seed — are the traits that make the volunteer a problem.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Nitrogen response',
      body: [
        {
          type: 'paragraph',
          text: 'Response to applied nitrogen is strong and among the highest of the forage grasses, which is part of why first-year yields are so high. In a catch-crop role that responsiveness is being used to scavenge nitrogen already in the soil rather than to justify applying more.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Crown rust and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Crown rust affects Italian ryegrass in warm humid conditions and reduces palatability and feed quality before it reduces yield. Cultivars differ, and rust ratings appear on recommended lists in regions where it matters.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'forage-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'perennial-ryegrass' },
    { type: 'crop', slug: 'white-clover' },
    { type: 'crop', slug: 'red-clover' },
  ],
  glossaryTerms: ['forage', 'crop-rotation'],
  geographicScope:
    'Temperate regions worldwide. Type selection and recommended-list ratings are national.',
  climateContext:
    'Cool-season C3 grass; fast establishment and high first-year yield, with poor persistence beyond three years.',
  limitations: [
    'Persistence expectations differ sharply between Italian and Westerwolds types and are set by cultivar rather than by species.',
    'Herbicide-resistant volunteer populations are region-specific and control options are jurisdictional.',
    'Nitrogen application limits are set by national regulation in several jurisdictions.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Temperate forage grass production' },
    {
      sourceId: 'ahdb',
      citedFor: 'Grass species characteristics and short-term leys',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Lolium multiflorum compendium data and weed status',
    },
    { sourceId: 'usda-ars', citedFor: 'Forage grass research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Italian Ryegrass',
    description:
      'Lolium multiflorum as a forage crop: speed of establishment, Italian and Westerwolds types, catch cropping and nitrogen capture, and its weed status.',
    keywords: [
      'Italian ryegrass',
      'Lolium multiflorum',
      'Westerwolds',
      'catch crop',
      'short-term ley',
    ],
  },
  structuredData: { article: true },
};
