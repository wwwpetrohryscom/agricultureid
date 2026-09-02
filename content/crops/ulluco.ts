import type { CropContent } from '@/types/content';

export const ulluco: CropContent = {
  id: 'crop-ulluco',
  slug: 'ulluco',
  contentType: 'crop',
  title: 'Ulluco',
  scientificName: 'Ullucus tuberosus',
  alternativeNames: ['Melloco', 'Papa lisa', 'Olluco'],
  category: 'Root and tuber crop',
  subcategory: 'Andean tuber crop',
  botanicalFamily: 'Basellaceae',
  lifecycle: 'Perennial grown as an annual',
  summary:
    "Ulluco keeps its brilliant colour and waxy skin because it is never peeled and never really softens, and the crop's central problem is that every planting is a clone carrying the viruses of the last one.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Ulluco is one of the principal Andean tuber crops after potato, grown from Colombia to Bolivia and northern Argentina. The tubers are small, brightly coloured — yellow, pink, magenta, mottled — with a thin waxy skin that is not peeled, and a crisp texture that survives cooking.',
    },
    {
      type: 'paragraph',
      text: "It is propagated entirely from tubers, and that is the crop's defining difficulty. Viruses accumulate through vegetative cycles and are the main cause of decline in Andean tuber crops, and virus elimination through thermotherapy and tissue culture is the principal intervention available.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Basellaceae' },
    { label: 'Region', value: 'The Andes from Colombia to northern Argentina' },
    { label: 'Propagation', value: 'Vegetative, from tubers' },
    {
      label: 'Principal constraint',
      value: 'Accumulated viruses in clonal planting material',
    },
    {
      label: 'Texture',
      value: 'Crisp and waxy; does not break down on cooking',
    },
    { label: 'Pigments', value: 'Betalains, of interest as natural colorants' },
  ],
  sections: [
    {
      id: 'clonal',
      heading: "Every planting is the last one's clone",
      body: [
        {
          type: 'paragraph',
          text: "Ulluco sets little viable seed in cultivation and is grown from saved tubers, so a farmer's planting material carries whatever the previous crop had. Virus accumulation over cycles is the main cause of yield decline in the Andean tubers, and in-vitro virus elimination combined with thermotherapy is the standard route to clean material.",
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'texture',
      heading: 'A tuber that stays crisp',
      body: [
        {
          type: 'paragraph',
          text: 'The tubers hold a firm, slightly crunchy texture through cooking rather than becoming floury like potato, which makes them a different ingredient rather than a substitute. That texture is a large part of why the crop persists in Andean markets alongside cheap potato.',
        },
      ],
    },
    {
      id: 'skin',
      heading: 'Skin that is not removed',
      body: [
        {
          type: 'paragraph',
          text: 'The thin, smooth, waxy skin is eaten, so the crop needs no peeling and post-harvest handling is about avoiding abrasion rather than about grading for peeling. Damaged skin darkens and reduces market value quickly.',
        },
      ],
    },
    {
      id: 'colour',
      heading: 'Colour is the market',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivars are distinguished by colour — yellow, orange, pink, magenta, spotted — and Andean markets buy on it. The pigments are betalains, the same class as in beetroot, and their extraction as natural colorants is an area of applied interest in the crop.',
        },
      ],
    },
    {
      id: 'altitude',
      heading: 'A high-altitude crop',
      body: [
        {
          type: 'paragraph',
          text: 'Ulluco is grown at high elevation in the Andes, in the same fields and rotations as potato, oca and mashua, and it tolerates the cold and poor soils of that zone. It is frost-sensitive in top growth while the tubers are protected in the ground.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Short-day tuberisation',
      body: [
        {
          type: 'paragraph',
          text: 'Like the other Andean tubers, ulluco forms tubers under short days, which is what confines its production outside the tropics to places with a long enough mild autumn. This is the same constraint that limits oca and mashua and it applies to all of them for the same reason.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'A non-solanaceous partner for potato',
      body: [
        {
          type: 'paragraph',
          text: 'Because ulluco is a Basellaceae and not a nightshade, it does not host late blight or the solanaceous soil pathogens, and Andean farmers use it in rotation with potato for that reason. Its rotational value comes from being unrelated rather than from anything it does to the soil.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'yield',
      heading: 'Yield and why it is low',
      body: [
        {
          type: 'paragraph',
          text: 'Recorded yields are well below potato, and the gap reflects virus load, unimproved clonal material and the marginal high-altitude fields the crop occupies rather than an inherent ceiling. Clean seed programmes are where the largest recorded gains come from.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names across four countries',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is melloco in Ecuador, olluco or papa lisa in Peru and Bolivia, and ulluco in English-language literature. Records from different Andean countries use different names for the same plant, which is a practical obstacle to assembling production data for it.',
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
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'potato-harvester' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oca' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'mashua' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'The Andes of Colombia, Ecuador, Peru, Bolivia and northern Argentina. Minor cultivation elsewhere.',
  climateContext:
    'Cool high-altitude tropical; short-day tuberisation and frost-sensitive top growth.',
  limitations: [
    "Yield figures reflect virus load and unimproved material as much as the crop's potential.",
    'Production statistics are incomplete because much of the crop is grown for household and local use under several national names.',
    'Photoperiod response varies between accessions and determines whether the crop will tuberise at a given latitude.',
  ],
  sourceReferences: [
    { sourceId: 'cip', citedFor: 'Andean root and tuber crop research' },
    {
      sourceId: 'cgiar',
      citedFor: 'Andean tuber germplasm and virus elimination research',
    },
    { sourceId: 'cabi', citedFor: 'Ullucus tuberosus compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'pe-midagri',
      citedFor: 'Peruvian Andean crop production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Ulluco',
    description:
      'Ullucus tuberosus as a crop: clonal propagation and virus load, a tuber that stays crisp, unpeeled waxy skin and short-day tuberisation.',
    keywords: [
      'ulluco',
      'Ullucus tuberosus',
      'melloco',
      'papa lisa',
      'Andean tuber',
    ],
  },
  structuredData: { article: true },
};
