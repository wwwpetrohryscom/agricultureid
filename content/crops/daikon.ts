import type { CropContent } from '@/types/content';

export const daikon: CropContent = {
  id: 'crop-daikon',
  slug: 'daikon',
  contentType: 'crop',
  title: 'Daikon',
  scientificName: 'Raphanus sativus Longipinnatus Group',
  alternativeNames: ['Mooli', 'Japanese radish', 'Tillage radish'],
  category: 'Vegetable crop',
  subcategory: 'Long-rooted radish cultivar group',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Daikon is a long white radish grown as a major East Asian vegetable and, quite separately, as a cover crop chosen for the same root — one that drills through compacted subsoil and then rots, leaving a channel.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Daikon is a radish selected for a long, thick, mild root that may reach well below the plough layer. In East Asia it is a staple vegetable eaten fresh, cooked, dried and pickled in enormous quantity.',
    },
    {
      type: 'paragraph',
      text: 'In arable agriculture elsewhere the same plant is sown with no intention of harvesting it. The root penetrates compacted subsoil, the frost kills the plant, and the decomposing root leaves a vertical channel — the practice known as biodrilling, and the reason daikon appears in cover-crop mixtures on farms that never eat it.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Rank', value: 'Cultivar group of Raphanus sativus' },
    {
      label: 'Harvested organ',
      value: 'Elongated storage root, largely hypocotyl',
    },
    {
      label: 'Vegetable use',
      value: 'Fresh, cooked, dried and pickled across East Asia',
    },
    {
      label: 'Cover-crop use',
      value: 'Biodrilling of compacted subsoil; winterkilled in cold climates',
    },
    {
      label: 'Cycle',
      value: 'Short; sown for autumn or winter harvest in most systems',
    },
  ],
  sections: [
    {
      id: 'two-crops',
      heading: 'One plant, two agricultures',
      body: [
        {
          type: 'paragraph',
          text: 'The vegetable crop and the cover crop are the same species and often similar cultivars, grown for opposite reasons: one for a marketable root, the other for a root that is deliberately left in the ground. Confusing their agronomy is easy, because seed catalogues sell both under the same common name.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'biodrilling',
      heading: 'How biodrilling works',
      body: [
        {
          type: 'paragraph',
          text: 'The taproot grows through compacted layers that a following crop’s roots would not penetrate, and where winters are cold enough the plant is killed outright. The root decomposes over winter, leaving a stable vertical channel that improves infiltration and gives the next crop a route through the pan.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Scavenging nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'As a cover crop daikon takes up residual soil nitrogen quickly in autumn, holding it against winter leaching and releasing it as the residue breaks down. That is a separate benefit from the physical one and is often the primary reason for including it in a mixture.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'winterkill',
      heading: 'Winterkill is a design feature',
      body: [
        {
          type: 'paragraph',
          text: 'In cold regions the crop dies with hard frost and needs no termination operation, which suits a cover crop in a no-till system. Where winters are mild it survives, flowers and sets seed, and then must be terminated — the same cultivar behaving as an asset or a problem depending on latitude.',
        },
      ],
    },
    {
      id: 'vegetable',
      heading: 'The vegetable crop',
      body: [
        {
          type: 'paragraph',
          text: 'Grown for market, daikon needs deep, stone-free, well-structured soil, because a root that forks or splits is unsaleable. Stones, compaction and irregular water all cause forking, and the requirement for uniform straight roots is the main agronomic constraint.',
        },
      ],
    },
    {
      id: 'pungency',
      heading: 'Mildness is the selection',
      body: [
        {
          type: 'paragraph',
          text: 'Daikon types are far milder than the small European radishes, and pungency rises with heat and water stress. A crop grown hot or dry becomes sharp and fibrous, which is a quality failure rather than a yield one.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Dried and pickled',
      body: [
        {
          type: 'paragraph',
          text: 'A large share of the East Asian crop is processed rather than sold fresh — dried into strips, pickled, or salted — and processing cultivars differ from fresh-market ones in dry matter and texture. That processing demand smooths a harvest that would otherwise glut.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Still a brassica',
      body: [
        {
          type: 'paragraph',
          text: 'Daikon is in the Brassicaceae and hosts clubroot and the other brassica soil-borne diseases, which is easy to forget when it is used as a cover crop in an arable rotation that also grows oilseed rape. A cover crop can carry a disease forward as readily as a cash crop.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'smell',
      heading: 'The cover-crop nuisance',
      body: [
        {
          type: 'paragraph',
          text: 'Decomposing daikon roots produce a strong sulphurous smell for a period after winterkill, which is a genuine and frequently reported nuisance near housing. It is a consequence of the glucosinolate chemistry that makes the family what it is.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'radish' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'cabbage' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation'],
  geographicScope:
    'East and South Asia as a vegetable; temperate arable systems worldwide as a cover crop.',
  climateContext:
    'Cool-season crop; winterkilled by hard frost, which is exploited deliberately in cover-crop use.',
  limitations: [
    'Vegetable and cover-crop uses require different cultivars and management despite sharing a common name.',
    'Winterkill depends on local minimum temperatures and is not reliable in mild climates.',
    'Nitrogen scavenged and released depends on sowing date, biomass and season and is set by local guidance.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Root vegetable and cover crop context' },
    { sourceId: 'cabi', citedFor: 'Raphanus sativus compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Cover crop management and biodrilling',
    },
    { sourceId: 'cornell-cals', citedFor: 'Vegetable production guidance' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Daikon',
    description:
      'Daikon as a Raphanus sativus cultivar group: the East Asian vegetable and the biodrilling cover crop, winterkill, forking, pungency and processing.',
    keywords: [
      'daikon',
      'mooli',
      'Raphanus sativus',
      'tillage radish',
      'biodrilling',
    ],
  },
  structuredData: { article: true },
};
