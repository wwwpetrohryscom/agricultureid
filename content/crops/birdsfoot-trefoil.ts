import type { CropContent } from '@/types/content';

export const birdsfootTrefoil: CropContent = {
  id: 'crop-birdsfoot-trefoil',
  slug: 'birdsfoot-trefoil',
  contentType: 'crop',
  title: 'Birdsfoot Trefoil',
  scientificName: 'Lotus corniculatus',
  alternativeNames: ['Bird’s-foot trefoil'],
  category: 'Forage crop',
  subcategory: 'Tannin-containing perennial legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'Birdsfoot trefoil is the tannin legume for ground that defeats the others — wet, acid, infertile — and it is bloat-safe for the same reason sainfoin is, on soils sainfoin cannot tolerate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Alfalfa needs deep, well-drained, near-neutral soil; sainfoin needs calcareous, free-draining ground. Birdsfoot trefoil needs neither, and persists on wet, acid, low-fertility land where both fail. That tolerance is why it appears in upland and marginal grazing systems rather than in cutting leys.',
    },
    {
      type: 'paragraph',
      text: 'Like sainfoin it carries condensed tannins, so it is bloat-safe and delivers bypass protein. Unlike sainfoin it tolerates the conditions that make bloat-safe forage hardest to grow.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Distinguishing constituent',
      value: 'Condensed tannins (proanthocyanidins)',
    },
    { label: 'Bloat risk', value: 'None recorded in grazing ruminants' },
    {
      label: 'Soil tolerance',
      value: 'Wet, acid and low-fertility soils where alfalfa and clover fail',
    },
    {
      label: 'Growth habit',
      value: 'Prostrate to semi-erect; regrows from crown and lower stem buds',
    },
    {
      label: 'Reseeding',
      value: 'Sets seed readily and can persist by natural reseeding',
    },
  ],
  sections: [
    {
      id: 'tannins',
      heading: 'Bloat-safe, and why',
      body: [
        {
          type: 'paragraph',
          text: 'Condensed tannins bind soluble protein in the rumen and collapse the foam that pasture bloat consists of, so trefoil can be grazed as a pure or dominant stand without the intake management a clover sward demands. The bound protein is released lower in the tract, so more reaches the small intestine.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'parasites',
      heading: 'Effect on nematodes',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding studies on tannin-containing forages, birdsfoot trefoil among them, have measured substantial reductions in faecal egg output of gastrointestinal nematodes in lambs. It is a supporting measure within a parasite-management programme and not a substitute for veterinary control.',
        },
      ],
    },
    {
      id: 'marginal-soils',
      heading: 'The soils it is grown for',
      body: [
        {
          type: 'paragraph',
          text: 'Trefoil tolerates waterlogging, low pH and low phosphorus better than any other common forage legume, and that tolerance rather than its yield is the reason to grow it. On good land it is outyielded by alfalfa and outcompeted by clover; on poor land it is often the only legume that persists.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and competition',
      body: [
        {
          type: 'paragraph',
          text: 'Seedlings are small and slow, and trefoil establishes poorly into a vigorous grass sward — the usual failure is a stand that germinates and is then shaded out in its first summer. Sowing into a suppressed or thin sward, or with a companion grass at a reduced rate, is the standard approach.',
        },
      ],
    },
    {
      id: 'grazing',
      heading: 'Grazing management',
      body: [
        {
          type: 'paragraph',
          text: 'Trefoil regrows from crown buds and from buds on the lower stems, so it tolerates grazing better than alfalfa but still needs a residual left behind. Rotational grazing with recovery periods maintains the stand; continuous close stocking removes the regrowth points and thins it.',
        },
      ],
    },
    {
      id: 'reseeding',
      heading: 'Persistence by seed',
      body: [
        {
          type: 'paragraph',
          text: 'Unlike most sown legumes, trefoil sets seed readily under grazing and can maintain a stand by natural reseeding where management allows some plants to flower. That is an important part of its persistence on extensive land where reseeding a sward is not economic.',
        },
      ],
    },
    {
      id: 'types',
      heading: 'Erect and prostrate types',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivars divide broadly into erect types suited to cutting and prostrate types suited to grazing, and the difference is real enough to change the outcome: an erect cultivar under close continuous stocking loses its growing points, while a prostrate one under a cutting regime yields poorly.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Conservation',
      body: [
        {
          type: 'paragraph',
          text: 'The tannins reduce protein breakdown during ensiling, and trefoil silage ferments more predictably than a comparable clover. Leaf loss in hay is the main conservation risk, since the leaflets shatter when over-dry.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Nitrogen on poor land',
      body: [
        {
          type: 'paragraph',
          text: 'Fixation proceeds on soils too acid or too wet for many rhizobia, and inoculation with the appropriate strain matters more here than for clover because trefoil is often sown onto ground with no history of it.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'podzol' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'molybdenum' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'baler' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sainfoin' },
    { type: 'crop', slug: 'white-clover' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Temperate regions worldwide, chiefly on marginal grazing land. Cultivar type recommendations are national.',
  climateContext:
    'Temperate; tolerant of waterlogging, acidity and low fertility, and outyielded on good land.',
  limitations: [
    'Condensed tannin content varies with cultivar, growth stage and environment and is not quantified here.',
    'Anthelmintic effects support a parasite-management programme rather than replacing it; veterinary guidance governs.',
    'Erect and prostrate cultivar classes are national conventions and not directly comparable between recommended lists.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Forage legume production on marginal land' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Condensed tannin forage legume research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Lotus corniculatus compendium data' },
    { sourceId: 'ahdb', citedFor: 'Forage legume agronomy' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Birdsfoot Trefoil',
    description:
      'Lotus corniculatus as a forage legume: condensed tannins and bloat safety, tolerance of wet acid soils, erect and prostrate types, persistence by reseeding.',
    keywords: [
      'birdsfoot trefoil',
      'Lotus corniculatus',
      'condensed tannins',
      'bloat-safe',
      'marginal grassland',
    ],
  },
  structuredData: { article: true },
};
