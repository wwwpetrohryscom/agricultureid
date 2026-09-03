import type { CropContent } from '@/types/content';

export const turnip: CropContent = {
  id: 'crop-turnip',
  slug: 'turnip',
  contentType: 'crop',
  title: 'Turnip',
  scientificName: 'Brassica rapa Rapifera Group',
  alternativeNames: ['White turnip', 'Stubble turnip'],
  category: 'Root and tuber crop',
  subcategory: 'Brassica root grown for food and fodder',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Biennial grown as an annual',
  summary:
    'Turnip is fast enough to be sown after a cereal harvest and grazed in the field before winter, which is what put it into the Norfolk four-course rotation and what still keeps it in livestock systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Turnip is a swollen hypocotyl and root of Brassica rapa, grown both as a vegetable and, in far greater area, as a fodder crop. It reaches usable size in six to ten weeks, which is the property that made it agriculturally important.',
    },
    {
      type: 'paragraph',
      text: 'That speed is why turnip entered the Norfolk four-course rotation: a crop that can be sown into stubble and eaten in the field by sheep turns a fallow into feed and breaks a cereal disease cycle at the same time. The vegetable trade is the smaller half of the crop in most countries that grow it.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    {
      label: 'Placement',
      value: 'Brassica rapa Rapifera Group — a cultivar group, not a species',
    },
    { label: 'Time to harvest', value: 'Commonly six to ten weeks' },
    {
      label: 'Principal use',
      value:
        'Fodder, grazed in situ or lifted; vegetable use is the smaller share',
    },
    {
      label: 'Distinct from swede',
      value:
        'Swede is Brassica napus, an amphidiploid of B. rapa and B. oleracea',
    },
    {
      label: 'Main disease',
      value: 'Clubroot, which persists in soil for many years',
    },
  ],
  sections: [
    {
      id: 'speed',
      heading: 'Speed is what the crop is for',
      body: [
        {
          type: 'paragraph',
          text: 'Six to ten weeks from sowing to a usable root lets turnip occupy ground that would otherwise be bare: after an early cereal, before a spring crop, or in a gap left by a failure. Almost every agricultural use of the crop follows from that window rather than from yield per hectare.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'norfolk',
      heading: 'Why it entered the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'The Norfolk four-course rotation put a root crop between cereals, and turnip was the root: it produced winter feed on land that had carried grain, it was grazed in place so the manure stayed in the field, and it broke the cereal disease and weed cycle. That is a rotation argument rather than a crop argument, and it is still the argument for growing it.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'grazing',
      heading: 'Grazed where it grew',
      body: [
        {
          type: 'paragraph',
          text: 'Stubble turnips are commonly eaten in the field by sheep or cattle behind an electric fence rather than lifted, which removes harvest and haulage entirely. The costs move to fencing, water and the risk of poaching wet ground, and the crop is chosen partly because those costs are lower than a harvest.',
        },
      ],
    },
    {
      id: 'bolting',
      heading: 'Bolting after a cold spell',
      body: [
        {
          type: 'paragraph',
          text: "Turnip is biennial and flowers after vernalisation, so a crop sown too early into cold conditions can run to seed instead of filling a root. Sowing date is therefore bounded at both ends — late enough to avoid vernalisation, early enough to bulk before winter — and the window is narrower than the crop's speed suggests.",
        },
      ],
    },
    {
      id: 'not-swede',
      heading: 'Not a swede',
      body: [
        {
          type: 'paragraph',
          text: 'Swede is Brassica napus, an amphidiploid of B. rapa and B. oleracea, with a longer season, a denser yellow flesh and far better storage. Turnip is faster and does not keep. English usage confuses them and Scottish usage reverses the names, so a record naming either has to be resolved before it can be used.',
        },
      ],
    },
    {
      id: 'clubroot',
      heading: 'Clubroot governs where it can go',
      body: [
        {
          type: 'paragraph',
          text: "Clubroot swells and distorts brassica roots and its resting spores persist in soil for many years, so a turnip crop is a decision about a field's brassica history and its future. In rotations that already carry oilseed rape or brassica vegetables, adding turnip concentrates the pressure rather than diluting it.",
        },
      ],
    },
    {
      id: 'rapa',
      heading: 'A cultivar group among several',
      body: [
        {
          type: 'paragraph',
          text: 'Brassica rapa also carries chinese cabbage, pak choi and the oilseed turnip rape, and the infraspecific classification of the species is contested between treatments. What is not contested is the agricultural forms: a turnip is a turnip whether the treatment calls it a subspecies or a cultivar group.',
        },
      ],
    },
    {
      id: 'tops',
      heading: 'The tops are a crop too',
      body: [
        {
          type: 'paragraph',
          text: 'Turnip leaves are eaten as greens across the American South, southern Europe and East Asia, and in fodder systems the tops are a substantial share of the feed value grazed. A yield figure for roots alone understates what the crop produces.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils and lifting',
      body: [
        {
          type: 'paragraph',
          text: 'The crop wants a firm, moisture-retentive seedbed and does poorly on cloddy ground where the root forks. Where it is lifted rather than grazed it is handled like any thin-skinned root: bruising shows, and storage life is short compared with swede.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'black-rot-of-crucifers' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cabbage-looper' },
    { type: 'pest', slug: 'diamondback-moth' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'luvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'vernalization' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'potato-harvester' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'swede' },
    { type: 'crop', slug: 'chinese-cabbage' },
    { type: 'crop', slug: 'pak-choi' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Northern Europe and the British Isles as a fodder crop; East Asia, South Asia, southern Europe and the Americas as a vegetable and a leaf crop.',
  climateContext:
    'Cool-season biennial grown as an annual; vernalisation triggers bolting, which bounds the sowing window at the early end.',
  limitations: [
    'English and Scottish usage of "turnip" and "swede" differ and in places reverse; records must be resolved to a species before use.',
    'The infraspecific classification of Brassica rapa differs between treatments; this page describes the agricultural form.',
    'Authorised control products are jurisdictional.',
  ],
  sourceReferences: [
    { sourceId: 'ahdb', citedFor: 'Fodder brassica agronomy' },
    { sourceId: 'fao', citedFor: 'Root and fodder crop production context' },
    { sourceId: 'cabi', citedFor: 'Brassica rapa compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Turnip',
    description:
      'Brassica rapa Rapifera Group as a crop: six to ten weeks to harvest, grazing in situ, the Norfolk rotation, bolting after cold, and clubroot.',
    keywords: [
      'turnip',
      'Brassica rapa',
      'stubble turnip',
      'fodder brassica',
      'Norfolk rotation',
    ],
  },
  structuredData: { article: true },
};
