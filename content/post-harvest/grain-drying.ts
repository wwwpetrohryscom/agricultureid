import type { PostHarvestContent } from '@/types/content';

export const grainDrying: PostHarvestContent = {
  id: 'post-harvest-grain-drying',
  slug: 'grain-drying',
  contentType: 'post-harvest',
  title: 'Grain Drying',
  postHarvestClass: 'drying',
  alternativeNames: ['Cereal drying', 'Grain moisture reduction'],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Grain drying reduces the moisture content of harvested grain and seed to a level that is safe for storage, slowing mould growth, insect activity, and respiration so the crop can be held without spoilage or loss of quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Grain drying is the removal of water from harvested grain until its moisture content is low enough for safe storage. Freshly harvested cereals, pulses, and oilseeds are often too moist to store: at high moisture, grain continues to respire and provides ideal conditions for storage moulds and insects, which can heat, discolour, and spoil the bulk within days.',
    },
    {
      type: 'paragraph',
      text: 'Safe storage moisture depends on the commodity and how long and how warm it will be stored, but cereals are commonly dried to roughly 13–14% moisture (wet basis) for medium-term storage, and lower for long-term storage or in warm climates. Drying either uses natural or low-temperature air moved through the bulk, or heated air in a dedicated dryer.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Reduce grain moisture to a level safe for storage',
    },
    {
      label: 'Typical cereal storage target',
      value: 'About 13–14% moisture (wet basis) for medium-term storage',
      note: 'Lower for long-term or warm-climate storage; exact target is commodity- and duration-dependent',
    },
    {
      label: 'Main methods',
      value:
        'Natural/low-temperature air drying and heated-air (high-temperature) drying',
    },
    {
      label: 'Why it matters',
      value:
        'Slows mould growth, insect activity, and respiration that cause spoilage',
    },
    {
      label: 'Key risk if over-heated',
      value:
        'Cracking, reduced germination, and loss of milling or processing quality',
    },
    {
      label: 'Measured with',
      value: 'Grain moisture meters; verified against oven-drying references',
    },
  ],
  sections: [
    {
      id: 'why-drying-is-needed',
      heading: 'Why grain must be dried',
      body: [
        {
          type: 'paragraph',
          text: 'Moisture is the single most important factor governing how safely grain can be stored. Living grain and the moulds and insects associated with it are all more active at higher moisture and temperature. Above safe moisture, storage fungi grow, respiration generates heat and more moisture, and the bulk can deteriorate rapidly — a self-reinforcing process sometimes called a hot spot.',
        },
        {
          type: 'paragraph',
          text: 'Because water moves between grain and the surrounding air until they reach equilibrium, safe storage is described by equilibrium moisture content: the grain moisture that balances a given air temperature and relative humidity. Keeping grain in equilibrium with cool, dry air is what makes long-term storage possible.',
        },
      ],
    },
    {
      id: 'methods',
      heading: 'Drying methods',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Natural / low-temperature (near-ambient) drying',
              description:
                'Unheated or slightly heated air is blown through grain held in a bin or floor store; slower, weather-dependent, but gentle and energy-efficient.',
            },
            {
              term: 'Heated-air (high-temperature) drying',
              description:
                'Grain is dried with heated air in a continuous-flow, batch, or mixed-flow dryer; faster and weather-independent, but requires careful temperature control.',
            },
            {
              term: 'Sun drying',
              description:
                'Grain is spread on clean surfaces and dried by sun and wind; widely used by smallholders but exposed to weather, contamination, and re-wetting.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Heated-air dryers move grain the fastest but risk over-drying the outer layers and cracking the kernels if air is too hot; seed and malting grain are dried at lower temperatures to protect germination. Near-ambient systems avoid heat damage but depend on suitable weather and adequate airflow to dry the whole bulk before the top spoils.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice and safety',
      body: [
        {
          type: 'list',
          items: [
            'Match the drying-air temperature to the end use: lower for seed and malting grain to protect germination and quality.',
            'Dry evenly and avoid over-drying, which wastes energy and sells water-weight away for no benefit.',
            'Cool grain after heated drying before long-term storage to prevent moisture migration and condensation.',
            'Measure moisture with a calibrated meter and monitor stored grain temperature for early signs of hot spots.',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Grain-dryer fire and dust risk',
          text: 'Heated-air grain dryers handle combustible dust and hot surfaces and have caused fires; follow the manufacturer’s operating, cleaning, and fire-prevention guidance.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-storage' }],
  glossaryTerms: ['yield'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Grain drying and safe-storage moisture principles',
    },
    { sourceId: 'usda-ars', citedFor: 'Grain drying and storage research' },
    { sourceId: 'ahdb', citedFor: 'Grain drying and storage guidance' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Grain drying and handling context',
    },
  ],
  claims: [
    {
      field: 'safe-storage-moisture',
      statement:
        'Cereals are commonly dried to roughly 13–14% moisture (wet basis) for medium-term storage, with lower targets for long-term storage or warm climates.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO guidance on grain drying and safe-storage moisture for cereals.',
          jurisdiction: 'Global',
        },
        {
          sourceId: 'ahdb',
          evidenceNote:
            'AHDB grain storage guidance on target moisture for safe storage.',
          jurisdiction: 'United Kingdom',
        },
      ],
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Safe-storage moisture targets and drying methods vary with climate, commodity, and storage duration.',
  limitations: [
    'Safe-storage moisture contents are approximate and depend on commodity, storage duration, and temperature; follow local guidance and grain-buyer specifications.',
    'Drying-air temperature limits differ for grain sold for feed, milling, malting, or seed; germination-sensitive grain requires lower temperatures.',
    'This entry describes principles, not settings for a specific dryer; consult equipment manuals and extension guidance for operating parameters.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Drying: Safe Storage Moisture & Methods',
    description:
      'How grain drying reduces moisture to a safe storage level: why it matters, natural vs heated-air methods, moisture targets, and good practice.',
    keywords: [
      'grain drying',
      'safe storage moisture',
      'grain moisture content',
      'heated air drying',
      'post-harvest',
    ],
  },
  structuredData: { article: true },
};
