import type { CropContent } from '@/types/content';

export const ramie: CropContent = {
  id: 'crop-ramie',
  slug: 'ramie',
  contentType: 'crop',
  title: 'Ramie',
  scientificName: 'Boehmeria nivea',
  alternativeNames: ['China grass', 'Rhea', 'Grass linen'],
  category: 'Fibre crop',
  subcategory: 'Perennial bast fibre crop',
  botanicalFamily: 'Urticaceae (nettle family)',
  lifecycle: 'Perennial',
  summary:
    'Ramie produces one of the longest and strongest plant fibres known and has stayed a minor crop for one reason: unlike jute or kenaf it will not ret, so the gum has to be stripped chemically at a cost the fibre rarely covers.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ramie is a perennial nettle-family crop grown for a bast fibre of exceptional length, strength and lustre. It has been cultivated in China for a very long time and is grown today mainly in China, with smaller production in the Philippines, Brazil and Indonesia.',
    },
    {
      type: 'paragraph',
      text: 'Its fibre is better than its market position suggests, and the reason is processing. Ramie does not ret naturally the way jute and kenaf do; decorticated ramie carries something in the order of a quarter of its weight as gum, and removing that gum requires a chemical or enzymatic degumming step that most bast fibres avoid.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Urticaceae (nettle family)' },
    {
      label: 'Habit',
      value:
        'Perennial; cut several times a year for many years from one planting',
    },
    {
      label: 'Fibre',
      value: 'Among the longest and strongest natural plant fibres',
    },
    {
      label: 'Gum content',
      value: 'Reported at roughly 25 to 28 per cent of decorticated fibre',
    },
    {
      label: 'Processing constraint',
      value: 'Does not ret naturally; requires degumming',
    },
    { label: 'Principal producer', value: 'China' },
  ],
  sections: [
    {
      id: 'degumming',
      heading: 'Degumming is why ramie stayed small',
      body: [
        {
          type: 'paragraph',
          text: 'Jute and kenaf are freed from their stems by retting, a cheap microbial process. Ramie resists it, and the gum that remains after decortication — reported around a quarter of the fibre weight — has to be removed chemically or enzymatically. That extra step, with its cost and its effluent, is the single clearest reason a fibre this good has never displaced cheaper ones.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'perennial',
      heading: 'A planting that lasts',
      body: [
        {
          type: 'paragraph',
          text: 'Ramie is perennial and is cut two or three times a year, sometimes more, for many years from one establishment. That spreads establishment cost over a long run and makes the crop attractive where labour for cutting is available, and it means the field is committed for years rather than a season.',
        },
      ],
    },
    {
      id: 'fibre',
      heading: 'Fibre properties',
      body: [
        {
          type: 'paragraph',
          text: 'The individual fibre cells are exceptionally long and the fibre is strong, lustrous, absorbent and resistant to bacteria and mildew. It also stiffens and breaks under repeated bending, which limits its use in clothing to blends, and blending with other bast fibres is a standard route to usable yarn.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'labour',
      heading: 'Labour, not agronomy',
      body: [
        {
          type: 'paragraph',
          text: "Harvest, decortication and degumming are all labour-intensive at the scales ramie is grown at, and mechanised decortication has never fully displaced hand and small-machine processing. As with sisal, the crop's history follows wage levels more closely than it follows agronomy.",
        },
      ],
    },
    {
      id: 'nettle',
      heading: 'A nettle without the sting',
      body: [
        {
          type: 'paragraph',
          text: 'Boehmeria nivea belongs to the nettle family but is not a stinging nettle, and it should not be confused with the fibre taken from stinging nettle, Urtica dioica, which is a different plant and a different, much smaller trade.',
        },
      ],
    },
    {
      id: 'china',
      heading: 'Concentration in China',
      body: [
        {
          type: 'paragraph',
          text: 'China produces the large majority of world ramie and holds most of the germplasm and the research, so the published agronomy for the crop is heavily Chinese. Records and figures for ramie outside that literature are correspondingly sparse.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Propagated vegetatively',
      body: [
        {
          type: 'paragraph',
          text: 'Commercial plantings are established from rhizome divisions or stem cuttings rather than from seed, which fixes the clone and carries forward whatever the parent stand had. Clean planting material is therefore a disease question as much as a quality one.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Deep, fertile, well-drained ground',
      body: [
        {
          type: 'paragraph',
          text: 'Ramie needs deep fertile soil and consistent moisture to sustain several cuts a year, and it does poorly on shallow or waterlogged ground. It is a demanding perennial rather than a marginal-land crop, which distinguishes it sharply from sisal and from kenaf.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'Where it goes',
      body: [
        {
          type: 'paragraph',
          text: 'Ramie is used in blended fabrics, sewing thread, industrial textiles and increasingly in natural-fibre composites, where its strength and low density are the attraction. Composite use is the most active area of demand and is judged on different properties from apparel.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'ferralsol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'kenaf' },
    { type: 'crop', slug: 'abaca' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'China dominates production, with smaller areas in the Philippines, Brazil, Indonesia, Laos and India.',
  climateContext:
    'Warm humid subtropics and tropics; requires deep fertile soil and consistent moisture to support repeated cutting.',
  limitations: [
    'Gum content and fibre property figures are reported ranges from the research literature and vary with clone and processing.',
    'Most published agronomy for the crop is Chinese, so international coverage is thin.',
    'Degumming effluent treatment requirements are jurisdictional and are not covered here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Natural fibre production and trade context' },
    { sourceId: 'cn-mara', citedFor: 'Chinese ramie production context' },
    { sourceId: 'cabi', citedFor: 'Boehmeria nivea compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Ramie',
    description:
      'Boehmeria nivea as a crop: an exceptional bast fibre held back by degumming, a perennial cut several times a year, vegetative propagation and composite markets.',
    keywords: [
      'ramie',
      'Boehmeria nivea',
      'China grass',
      'bast fibre',
      'degumming',
    ],
  },
  structuredData: { article: true },
};
