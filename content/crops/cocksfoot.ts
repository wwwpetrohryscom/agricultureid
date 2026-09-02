import type { CropContent } from '@/types/content';

export const cocksfoot: CropContent = {
  id: 'crop-cocksfoot',
  slug: 'cocksfoot',
  contentType: 'crop',
  title: 'Cocksfoot',
  scientificName: 'Dactylis glomerata',
  alternativeNames: ['Orchardgrass', 'Orchard grass'],
  category: 'Forage crop',
  subcategory: 'Cool-season perennial bunch grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Cocksfoot is the shade- and drought-tolerant grass of temperate pasture. It grows in dense tussocks rather than a uniform sward, which is both why it survives dry summers and why it becomes unpalatable if left.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cocksfoot occupies the ground perennial ryegrass cannot: dry summers, light soils, and under trees. It is deep-rooted, tolerant of shade to a degree unusual among forage grasses, and it keeps growing through dry spells that stop a ryegrass sward.',
    },
    {
      type: 'paragraph',
      text: 'It also grows as a tussock. That habit is inseparable from the tolerance, and it is the reason cocksfoot has a reputation for coarseness — a tussock left ungrazed becomes stemmy and is then refused, and the sward degrades into clumps and gaps.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C3, cool-season' },
    { label: 'Growth habit', value: 'Dense tussock-forming bunch grass' },
    {
      label: 'Distinguishing tolerance',
      value: 'Shade and summer drought, well beyond perennial ryegrass',
    },
    {
      label: 'Principal weakness',
      value: 'Loses palatability rapidly once stemmy',
    },
    {
      label: 'Typical use',
      value: 'Grazed pasture and silage in mixtures; agroforestry understorey',
    },
  ],
  sections: [
    {
      id: 'tussock',
      heading: 'The tussock is the whole story',
      body: [
        {
          type: 'paragraph',
          text: 'Cocksfoot forms dense tufts rather than spreading into an even sward, and the crown of each tuft protects growing points from heat and grazing. That is the structural basis of its drought and grazing tolerance, and it is also why an under-grazed stand becomes a field of coarse clumps separated by bare ground.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'Drought and summer growth',
      body: [
        {
          type: 'paragraph',
          text: 'Deep roots and the tussock habit let cocksfoot keep producing through summer dry spells that check ryegrass, which is why it appears in mixtures intended to fill the mid-season gap. It recovers from severe drought by regrowing from the tuft rather than reseeding.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'The grass for under trees',
      body: [
        {
          type: 'paragraph',
          text: 'Cocksfoot tolerates shade better than the other sown temperate grasses, which is why the English name of its American counterpart is orchardgrass and why it is the default understorey grass in silvopastoral and orchard systems. Yield falls under shade as it does for any grass; the difference is that the stand persists.',
        },
      ],
    },
    {
      id: 'palatability',
      heading: 'Managed hard, or refused',
      body: [
        {
          type: 'paragraph',
          text: 'Palatability falls quickly once the tuft goes stemmy, and stock then graze around it, which accelerates the decline. Cocksfoot therefore needs firmer grazing management than ryegrass — earlier and harder — and it is the grass most often blamed for a sward that has got away.',
        },
      ],
    },
    {
      id: 'mixtures',
      heading: 'In a mixture',
      body: [
        {
          type: 'paragraph',
          text: 'Cocksfoot is vigorous at establishment and can dominate a mixture sown at too high a rate, suppressing clover and finer grasses in the first year. Sowing rates in mixtures are deliberately conservative for that reason rather than as an economy.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is light and chaffy, which makes it awkward to drill evenly and makes calibration matter. Establishment is otherwise vigorous, and cocksfoot is one of the more reliable grasses to sow into a rough or dry seedbed.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Nitrogen response',
      body: [
        {
          type: 'paragraph',
          text: 'Response to nitrogen is strong and comparable to ryegrass at moderate rates, but cocksfoot converts it into stem more readily, so heavy nitrogen without matching grazing pressure produces exactly the coarse growth that ends its usefulness.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Silage and hay',
      body: [
        {
          type: 'paragraph',
          text: 'Cocksfoot is cut for silage in mixtures and makes acceptable hay if taken early. Its water-soluble carbohydrate content is lower than ryegrass, so it ferments less readily and benefits from wilting and, where practised, an additive.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Rust and stand decline',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf rust affects cocksfoot in warm humid conditions and reduces palatability and quality more than yield; cultivars differ in susceptibility. Stand decline is otherwise a management outcome — open ground between tussocks admits weeds long before the grass itself dies.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'forage-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'perennial-ryegrass' },
    { type: 'crop', slug: 'white-clover' },
    { type: 'crop', slug: 'timothy' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Temperate regions worldwide, including areas too dry or too shaded for perennial ryegrass. Recommended-list ratings are national.',
  climateContext:
    'Cool-season C3 grass with strong summer drought and shade tolerance; sensitive to lax grazing rather than to climate.',
  limitations: [
    'Grazing intervals and residual heights are set by national guidance and by system.',
    'Shade tolerance is relative to other sown grasses and does not mean yield is maintained under shade.',
    'Rust susceptibility is cultivar-specific and varies by region.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Temperate forage grass production' },
    {
      sourceId: 'ahdb',
      citedFor: 'Grass species characteristics and grazing management',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Dactylis glomerata compendium data' },
    { sourceId: 'usda-ars', citedFor: 'Forage grass research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Cocksfoot',
    description:
      'Dactylis glomerata as a forage grass: the tussock habit behind its drought and shade tolerance, why palatability falls fast, and mixture management.',
    keywords: [
      'cocksfoot',
      'orchardgrass',
      'Dactylis glomerata',
      'tussock grass',
      'shade tolerance',
    ],
  },
  structuredData: { article: true },
};
