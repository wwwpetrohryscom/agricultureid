import type { PostHarvestContent } from '@/types/content';

export const batchDrying: PostHarvestContent = {
  id: 'post-harvest-batch-drying',
  slug: 'batch-drying',
  contentType: 'post-harvest',
  title: 'Batch Drying',
  postHarvestClass: 'drying',
  processStage: 'conditioning',
  alternativeNames: [
    'Batch dryer',
    'In-bin batch drying',
    'Recirculating batch drying',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Batch drying loads a fixed quantity of grain into a dryer, dries it, unloads it, and repeats. It is the simplest heated-air arrangement, keeps lots separate and traceable, and trades throughput for flexibility and low capital cost.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Batch drying is a specific way of organising the heated-air drying described under grain drying: rather than grain flowing continuously through the machine, a defined quantity is loaded, dried as a unit, cooled, and discharged before the next load begins. The batch may sit in a dedicated batch dryer, in a bin fitted with a heater and fan, or in a recirculating dryer that keeps the grain moving within a closed load to even out drying.',
    },
    {
      type: 'paragraph',
      text: 'The defining characteristic is discontinuity, and it drives every advantage and drawback. Because a batch has a beginning and an end, it can be treated differently from the batch before it — a different crop, a different end use, a different starting moisture — and it stays identifiable throughout. Because the dryer must be filled and emptied between loads, it stands idle during those periods, which caps throughput and makes batch drying the natural choice at small and medium scale rather than at high harvest intake rates.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A fixed load is dried as a unit, then unloaded before the next',
    },
    {
      label: 'Relationship to grain drying',
      value:
        'One way of organising heated-air drying, alongside continuous-flow',
    },
    {
      label: 'Main advantage',
      value:
        'Lot identity and flexibility: each batch can be treated on its own terms',
    },
    {
      label: 'Main cost',
      value: 'Fill and empty time is dead time, capping throughput',
    },
    {
      label: 'Characteristic risk',
      value:
        'Moisture gradients within the batch if the load is not mixed or reversed',
    },
    {
      label: 'Suits',
      value:
        'Smaller operations, mixed crops, seed lots, and variable intake moisture',
    },
    {
      label: 'Settings',
      value:
        'Air temperature and batch time are commodity- and end-use-specific',
    },
  ],
  sections: [
    {
      id: 'how-the-batch-behaves',
      heading: 'How a batch dries',
      body: [
        {
          type: 'paragraph',
          text: 'In a static batch, drying air enters at one face and leaves at another, and it does not dry the whole load evenly. The grain nearest the inlet meets the hottest, driest air and dries first; air that has already passed through grain arrives at the far side cooler and carrying moisture, so grain there dries later. A drying front therefore moves through the load, and while it is in transit the batch contains both over-dried and still-wet grain at the same time.',
        },
        {
          type: 'paragraph',
          text: 'This is the central problem of batch drying, and the main designs are answers to it. Recirculating batch dryers keep grain circulating within the load so that every kernel takes a turn near the inlet. Bin systems may reverse airflow or stir the grain. Where neither is done, the batch must be judged as a whole — and a batch whose average moisture is acceptable can still contain a wet layer capable of spoiling the lot in store, because moisture migrates within a sealed bulk and finds the coldest surface.',
        },
      ],
    },
    {
      id: 'why-choose-a-batch',
      heading: 'What discontinuity buys',
      body: [
        {
          type: 'list',
          items: [
            'Lot identity: a batch entering the dryer is the same batch leaving it, which matters for seed, for malting and milling contracts, and for any chain that must trace a lot back to a field.',
            'Crop flexibility: one dryer can handle successive loads of different commodities without the changeover being a reconfiguration of a flowing system.',
            'Tolerance of variable intake: a wetter load can simply be given a longer batch, where a continuous system must have its flow rate re-set.',
            'Lower capital cost and simpler control, since nothing has to be metered in and out while running.',
            'A natural stopping point: drying can be halted, assessed, and resumed without stranding grain mid-machine.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The corresponding losses are throughput and labour. A batch cycle includes filling, drying, cooling, and emptying, and only one of those removes water. At high harvest intake — the case a combine fleet creates — the dryer becomes the bottleneck, and wet grain queues, which is exactly the condition batch drying exists to prevent.',
        },
      ],
    },
    {
      id: 'quality-and-heat',
      heading: 'Heat, quality, and end use',
      body: [
        {
          type: 'paragraph',
          text: 'Heated air dries faster than ambient air, and the price is the risk of heat damage. Grain dried too hard develops stress cracks that break during handling and milling, oilseeds can suffer quality loss, and germination falls — which is why seed and malting lots are dried more gently than feed grain. Batch drying concentrates this risk in the layer nearest the air inlet, where grain spends the whole batch in the hottest air.',
        },
        {
          type: 'paragraph',
          text: 'Over-drying is the other quiet cost. Grain dried below what the market requires is sold as grain when it was water, and the energy that removed it was paid for twice. Because a batch is judged on a sample, and because a batch is rarely uniform, the temptation is to over-dry so that no part of the load is wet — a decision that trades a real, invisible loss for a real, visible risk.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dryer fire and dust risk',
          text: "Heated-air dryers combine hot surfaces, combustible dust, and accumulated fines, and dryer fires occur. Cleaning, operation, and fire prevention must follow the manufacturer's instructions and the facility's procedures.",
        },
      ],
    },
    {
      id: 'after-the-batch',
      heading: 'Cooling and what follows',
      body: [
        {
          type: 'paragraph',
          text: 'A batch leaves the dryer hot, and hot grain put straight into a store carries its heat with it. As it cools against cooler bin walls and cooler surrounding grain, moisture moves with the temperature difference and can condense where the bulk is coldest — producing a wet, mouldable region in a bulk whose measured average moisture was perfectly acceptable. Cooling the batch, whether in the dryer or by aeration afterwards, is part of the drying operation rather than an optional extra.',
        },
        {
          type: 'paragraph',
          text: 'Grain also continues to equilibrate after drying: moisture redistributes between wetter and drier kernels, so a moisture reading taken straight off the dryer differs from one taken after the batch has settled. Judging a batch on an immediate reading systematically misrepresents it.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'dry-beans' },
  ],
  equipment: [
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  measurableInputs: [
    'Batch mass or volume loaded',
    'Grain moisture at loading (meter)',
    'Drying-air temperature and airflow',
    'Batch time',
    'Fuel and electricity used per batch',
  ],
  measurableOutputs: [
    'Grain moisture at discharge, and after the batch has equilibrated',
    'Moisture spread between positions within the batch',
    'Grain temperature at discharge',
    'Stress cracking and breakage of the dried lot',
    'Germination, where the lot is seed or malting grain',
  ],
  qualityEffects: [
    'Reduces moisture to a level at which the lot can be stored, slowing moulds and insects',
    'Risks stress cracking and breakage in the layer exposed longest to the hottest air',
    'Can reduce germination if dried too hard, which matters for seed and malting lots',
    'Leaves a moisture gradient across the load unless the grain is recirculated, stirred, or the airflow reversed',
    'Over-drying loses saleable weight and wastes fuel without improving storability',
  ],
  environmentalContext:
    'Batch drying is weather-independent, which is its point in humid or unsettled harvest climates where natural-air drying cannot finish the job. It is fuel-intensive, and the fuel cost per tonne rises steeply with the amount of water removed, so the economics turn on intake moisture and local energy prices as much as on the dryer itself.',
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'soybean' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Grain drying systems and grain-quality effects of heated-air drying',
    },
    {
      sourceId: 'fao',
      citedFor: 'Batch drying in post-harvest grain handling',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Batch and in-bin drying systems context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain drying and storage guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Batch drying is most common at small and medium scale, and in humid harvest climates where drying cannot be left to ambient air.',
  limitations: [
    'No drying-air temperature, batch time, or moisture target is given here. All three are commodity-, dryer-, and end-use-specific and are set by equipment manuals, buyer specifications, and national guidance.',
    "This entry describes the batch principle, not the operation of any particular dryer; consult the manufacturer's instructions for the machine in use.",
    'A batch average moisture can conceal a wet layer capable of spoiling the lot in store; average and uniformity are different properties.',
    'Temperature limits for seed, malting, and milling lots are lower than for feed grain, and this entry does not state where any of them lie.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Batch Drying: Fixed-Load Grain Drying Explained',
    description:
      'How batch drying works: the drying front through a static load, why lot identity is its advantage, throughput its cost, and uneven moisture its standing risk.',
    keywords: [
      'batch drying',
      'batch dryer',
      'in-bin drying',
      'recirculating dryer',
      'grain drying',
    ],
  },
  structuredData: { article: true },
};
