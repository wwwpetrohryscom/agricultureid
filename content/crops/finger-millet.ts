import type { CropContent } from '@/types/content';

export const fingerMillet: CropContent = {
  id: 'crop-finger-millet',
  slug: 'finger-millet',
  contentType: 'crop',
  title: 'Finger Millet',
  scientificName: 'Eleusine coracana',
  alternativeNames: ['Ragi', 'Nachni', 'Wimbi', 'African finger millet'],
  category: 'Cereal grain',
  subcategory: 'Small millet',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Finger millet is a small-grained tetraploid cereal of eastern Africa and southern India, distinguished by an unusually high grain calcium content and by storage life measured in years rather than months.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Finger millet takes its name from the digit-like spikes that radiate from the top of the culm. It is an allotetraploid annual, domesticated in the Ethiopian and Ugandan highlands and carried early to India, where it became a staple of the southern uplands under the name ragi.',
    },
    {
      type: 'paragraph',
      text: 'The grain is very small and is normally ground whole rather than decorticated, so the bran fraction stays in the food. That single processing habit explains much of the crop’s nutritional standing, since the minerals and fibre that milling removes from other cereals are retained here.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Ploidy', value: 'Allotetraploid, 2n = 4x = 36' },
    { label: 'Photosynthetic pathway', value: 'C4' },
    {
      label: 'Distinguishing composition',
      value: 'Grain calcium markedly higher than other common cereals',
    },
    {
      label: 'Storage behaviour',
      value:
        'Stores for several years in good condition with low insect damage',
    },
    {
      label: 'Principal constraint',
      value: 'Blast disease and the labour cost of weeding and threshing',
    },
  ],
  sections: [
    {
      id: 'not-pearl-millet',
      heading: 'A different plant from pearl millet',
      body: [
        {
          type: 'paragraph',
          text: 'The word millet covers several unrelated genera, and finger millet is one of the more commonly conflated. Pearl millet belongs to a different genus, grows taller, produces a cylindrical spike rather than digitate fingers, and occupies drier and sandier country.',
        },
        {
          type: 'paragraph',
          text: 'Their agronomy diverges accordingly. Advice on spacing, sowing depth, fertility and pest management written for pearl millet is not transferable, and neither are variety recommendations or the food products the two grains are used for.',
        },
      ],
    },
    {
      id: 'where-grown',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Uganda, Ethiopia, Kenya, Tanzania, Nepal and India account for most production, with the Indian crop concentrated in Karnataka and neighbouring states. It is generally an upland rainfed crop of intermediate elevation, grown where rainfall is adequate but the season is not long enough or reliable enough for maize to be dependable.',
        },
        {
          type: 'paragraph',
          text: 'Much of the crop never enters formal markets. It is grown for household consumption and local sale, which is one reason production statistics for it are weaker than for the major cereals.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and the weeding problem',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is minute and seedlings are slow to establish, so a fine, firm, weed-free seedbed matters more than for a large-seeded cereal. Sowing too deep is a common cause of failed stands. Transplanting from a nursery bed is practised in parts of India and gives a more even crop where labour permits it.',
        },
        {
          type: 'paragraph',
          text: 'Weeding is the crop’s single largest labour demand. The seedlings compete poorly for the first several weeks, and the crop’s own resemblance to a common weedy relative in the same genus makes early hand-weeding skilled work.',
        },
      ],
    },
    {
      id: 'climate-soils',
      heading: 'Climate and soils',
      body: [
        {
          type: 'paragraph',
          text: 'Finger millet is a warm-season C4 cereal grown on moderate rainfall, more drought-tolerant than maize but less so than pearl millet or sorghum. It performs on a wide range of soils including shallow and acid ones, and tolerates a degree of salinity that would check most cereals.',
        },
        {
          type: 'paragraph',
          text: 'Waterlogging is not tolerated. On flat land with heavy soil the crop is grown on ridges or beds where the rains are intense.',
        },
      ],
    },
    {
      id: 'blast',
      heading: 'Blast disease',
      body: [
        {
          type: 'paragraph',
          text: 'Blast, caused by a Pyricularia species specific to this host, is the dominant disease. It attacks leaves, the neck of the panicle and the fingers themselves, and neck infection is the damaging form because it cuts off grain filling after the crop has already been grown.',
        },
        {
          type: 'paragraph',
          text: 'Management rests on resistant varieties, clean seed and avoiding excessive nitrogen and dense stands that hold humidity in the canopy. The pathogen is related to rice blast but is not the same population, and rice-derived resistance information does not transfer.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Grain composition',
      body: [
        {
          type: 'paragraph',
          text: 'The distinguishing feature is calcium: finger millet grain carries several times the calcium of rice, wheat or maize, concentrated largely in the seed coat that whole-grain milling retains. It is also a source of iron and dietary fibre, and its protein contains a useful complement of sulphur-containing amino acids.',
        },
        {
          type: 'paragraph',
          text: 'Bioavailability is a separate question from content. Phytate and polyphenols in the bran reduce mineral absorption, and traditional preparation methods — soaking, germination, fermentation — reduce those antinutrients, which is why the processing route matters as much as the analysis.',
        },
      ],
    },
    {
      id: 'harvest-threshing',
      heading: 'Harvest and threshing',
      body: [
        {
          type: 'paragraph',
          text: 'Fingers are cut when the grain hardens, often in more than one pass because the panicles on a plant do not all ripen together. Cut heads are stacked or heaped to cure before threshing, which is done by beating or trampling and is laborious relative to the yield obtained.',
        },
        {
          type: 'paragraph',
          text: 'The grain shatters less readily than many small millets, so a short delay in harvest is not usually catastrophic. The threshing bottleneck, not the harvest window, is the constraint most often cited by growers.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Why it stores so well',
      body: [
        {
          type: 'paragraph',
          text: 'Finger millet keeps in traditional stores for several years with little insect damage, which is exceptional among cereals. The very small, hard grain with its intact seed coat is difficult for the common storage weevils to attack, and the crop is consequently used as a famine reserve.',
        },
        {
          type: 'paragraph',
          text: 'That property gives the crop a role that a yield comparison misses: a grain that can be held between poor seasons is worth more to a household than its tonnage suggests.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Food and beverage uses',
      body: [
        {
          type: 'paragraph',
          text: 'Whole grain is milled to flour for stiff porridges, thin gruels and unleavened flatbreads across its range. Malted finger millet flour is a widely used weaning and convalescent food, the malting improving digestibility and reducing bulk.',
        },
        {
          type: 'paragraph',
          text: 'The grain is also malted for traditional beers in eastern Africa, and this brewing demand supports a substantial share of the crop’s cash value in some producing areas.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'commodity', slug: 'millet-grain' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'winnowing' },
    { type: 'farming-system', slug: 'intercropping' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'sorghum' },

    { type: 'crop', slug: 'jobs-tears' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Eastern and southern Africa and South Asia. Variety recommendations, sowing windows and blast resistance ratings are national.',
  climateContext:
    'Warm-season rainfed C4 cereal of intermediate-elevation uplands; more drought-tolerant than maize, less so than pearl millet.',
  limitations: [
    'Grain calcium and iron figures vary substantially with variety and growing environment; the comparison with other cereals is qualitative here rather than a specification.',
    'Mineral content is not mineral availability — phytate and polyphenols reduce absorption, and the effect depends on preparation method.',
    'Blast resistance ratings are variety- and region-specific and should be taken from national programmes.',
    'A large share of production is consumed on farm, so reported production statistics understate the crop.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Small millet production and food use' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'icar',
      citedFor: 'Indian finger millet agronomy and varieties',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Small millet improvement and blast research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Finger millet disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Finger Millet',
    description:
      'Eleusine coracana as a distinct crop: how it differs from pearl millet, blast disease, exceptional grain calcium and multi-year storage life.',
    keywords: [
      'finger millet',
      'Eleusine coracana',
      'ragi',
      'small millet',
      'finger millet blast',
    ],
  },
  structuredData: { article: true },
};
