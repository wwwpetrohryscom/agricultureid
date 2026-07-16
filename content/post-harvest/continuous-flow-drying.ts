import type { PostHarvestContent } from '@/types/content';

export const continuousFlowDrying: PostHarvestContent = {
  id: 'post-harvest-continuous-flow-drying',
  slug: 'continuous-flow-drying',
  contentType: 'post-harvest',
  title: 'Continuous-Flow Drying',
  postHarvestClass: 'drying',
  processStage: 'conditioning',
  alternativeNames: [
    'Continuous flow dryer',
    'Cross-flow drying',
    'Mixed-flow drying',
    'Column dryer',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Continuous-flow drying moves grain steadily through a dryer while heated air passes across or through it, so wet grain enters and dry grain leaves without stopping. It buys throughput at harvest, and pays for it in control complexity and loss of lot identity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Continuous-flow drying is the high-throughput arrangement of the heated-air drying described under grain drying. Instead of filling, drying, and emptying a fixed load, the dryer holds a moving column of grain: wet grain is fed in at the top, works downward under gravity through heated and then cooling zones, and dry grain is metered out at the bottom. As long as wet grain is supplied and dry grain removed, the machine never stops.',
    },
    {
      type: 'paragraph',
      text: 'This exists because harvest is a rate problem. A combine fleet delivers wet grain far faster than any fill-and-empty cycle can absorb it, and grain that queues while waiting to be dried is grain that is heating, moulding, and losing grade. A continuous dryer is sized against the harvest rate rather than the harvest total, and its purpose is to keep the whole system moving. The trade is real: what a batch gives you for free — a discrete, identifiable, individually judged lot — a continuous dryer takes away.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Grain flows steadily through the dryer; wet in at one end, dry out at the other',
    },
    {
      label: 'Why it is used',
      value:
        'It matches drying capacity to harvest intake rate, preventing wet grain queuing',
    },
    {
      label: 'Main designs',
      value:
        'Cross-flow, mixed-flow, and concurrent or counter-flow arrangements',
    },
    {
      label: 'Control variable',
      value:
        'Discharge rate, which sets how long grain spends in the drying zone',
    },
    {
      label: 'Central difficulty',
      value: 'Intake moisture varies but the machine is set for an average',
    },
    {
      label: 'What is lost',
      value: 'Lot identity: grain from different loads mixes within the column',
    },
    {
      label: 'Settings',
      value:
        'Air temperature and flow rate are commodity- and end-use-specific',
    },
  ],
  sections: [
    {
      id: 'the-column',
      heading: 'What the column does',
      body: [
        {
          type: 'paragraph',
          text: "Grain in a continuous dryer experiences drying as a journey rather than as a period. It enters wet and cool, passes through a heated zone where the bulk of the water leaves, then usually through a cooling zone before discharge. Residence time — how long any kernel spends in the heat — is not set by a timer but by how fast grain is taken out of the bottom, which is the operator's main lever. Speed the discharge up and the grain leaves wetter; slow it down and it leaves drier and hotter.",
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cross-flow',
              description:
                'Air crosses the grain column at right angles to its travel. Mechanically simple and widely used, but grain on the air-inlet side of the column meets hot dry air for the whole journey while grain on the exhaust side meets air that has already worked, so the two sides leave in different conditions.',
            },
            {
              term: 'Mixed-flow',
              description:
                'Ducts within the column repeatedly redirect grain and air so that kernels change position as they descend, evening out the exposure that cross-flow leaves uneven. More uniform, mechanically more involved.',
            },
            {
              term: 'Concurrent and counter-flow',
              description:
                'Air and grain travel in the same or opposite directions. Concurrent flow puts the hottest air onto the wettest, coolest grain, which is where the grain best tolerates it; counter-flow arrangements are commonly used for the cooling stage.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Cross-flow non-uniformity is the characteristic quality signature of the design. The lot that leaves is a blend of over-dried grain from one side and under-dried grain from the other, and its average can look correct while neither part of it is. Averaging hides this, and only a spread measurement across the discharge reveals it.',
        },
      ],
    },
    {
      id: 'the-control-problem',
      heading: 'Why control is the hard part',
      body: [
        {
          type: 'paragraph',
          text: 'A batch dryer is told what it has: one load, one starting moisture, one decision. A continuous dryer is told nothing of the sort. Grain arrives from different fields, cut at different times of day, from crops that lodged or stood, and its moisture changes through the day as the crop dries in the field and again as dew falls. The machine, meanwhile, is running at a setting chosen some time ago for a moisture that may no longer be arriving.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is a lag problem. By the time discharge moisture reveals that intake got wetter, the grain that caused it has already passed through. Operators respond by mixing loads before the dryer to smooth the variation, by monitoring discharge and adjusting rate, or by using automatic control that meters discharge against a measured moisture. Each helps; none makes the dryer clairvoyant. This is why continuous drying tends to be run with a margin — set drier than strictly needed, accepting the cost of over-drying as insurance against the greater cost of putting wet grain into a store.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Dryer fire, dust, and machinery risk',
          text: "Continuous dryers run unattended for long periods with hot surfaces, combustible fines accumulating in the column, and powered discharge machinery. Fires and entrapment incidents occur. Cleaning schedules, operation, and fire prevention must follow the manufacturer's instructions and the facility's safety procedures.",
        },
      ],
    },
    {
      id: 'batch-or-continuous',
      heading: 'Choosing between continuous and batch',
      body: [
        {
          type: 'paragraph',
          text: 'The choice is not primarily about drying quality — either design can dry well or badly. It is about the shape of the operation. Continuous flow wins where intake rate is high and sustained, where the crop mix is narrow, and where the grain is going into a commodity pool in which lot identity has no value anyway. Batch wins where lots must stay separate, where crops change from load to load, where intake moisture is erratic, and where capital is scarce.',
        },
        {
          type: 'paragraph',
          text: 'Seed is the clearest case against continuous flow. A seed lot has an identity that must survive drying, and germination is sensitive to the heat exposure that a mis-set continuous dryer can deliver to part of a column without that being visible in the average. Malting and premium milling contracts raise similar objections for similar reasons.',
        },
      ],
    },
    {
      id: 'after-the-dryer',
      heading: 'Cooling, tempering, and measurement',
      body: [
        {
          type: 'paragraph',
          text: 'Grain leaving a heated zone is hot and its moisture is unevenly distributed within each kernel — drier at the surface, wetter at the core. Left to stand, it equilibrates: the core moisture migrates outward, and a lot measured immediately after discharge reads drier than the same lot measured after it has rested. Some designs exploit this deliberately, alternating drying with rest periods so that water has time to reach the surface where air can take it away, which uses less energy than driving it out continuously.',
        },
        {
          type: 'paragraph',
          text: "Hot grain also carries its heat into the store, where it moves moisture ahead of it and can condense against cold surfaces. Cooling, whether in the dryer's cooling zone or by aeration afterwards, belongs to the drying operation. A lot that is dry, hot, and immediately sealed is not a lot that is safe.",
        },
      ],
    },
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed'],
  applicableCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  equipment: [
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'grain-auger' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  measurableInputs: [
    'Intake grain moisture, and its variation through the day (meter)',
    'Drying-air temperature by zone',
    'Airflow through the column',
    'Grain discharge rate',
    'Fuel and electricity used per tonne of water removed',
  ],
  measurableOutputs: [
    'Discharge moisture, and moisture after tempering',
    'Moisture spread across the discharge stream',
    'Grain temperature leaving the cooling zone',
    'Breakage susceptibility and stress cracking',
    'Throughput achieved against harvest intake rate',
  ],
  qualityEffects: [
    'Removes moisture at a rate that keeps pace with harvest, preventing spoilage in queued wet grain',
    'Cross-flow designs leave a systematic moisture and heat gradient across the column',
    'Excessive heat or residence time causes stress cracking, breakage, and loss of germination',
    'Blends lots, so a defect or a wet load is diluted rather than isolated',
    'Routine over-drying, used as a safety margin, loses saleable weight and fuel',
  ],
  environmentalContext:
    'Continuous drying is what makes mechanised harvest possible in climates where the crop cannot be left to dry in the field or to ambient air. It is the most energy-intensive step in most grain operations, and its fuel demand rises with the water removed, so a wet season costs disproportionately more than a dry one at the same tonnage.',
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-rice-grades' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'oilseed-rape' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Continuous-flow dryer designs and grain-quality effects of heated-air drying',
    },
    {
      sourceId: 'fao',
      citedFor: 'Mechanical grain drying systems in post-harvest handling',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Continuous-flow and cross-flow dryer operation context',
    },
    {
      sourceId: 'irri',
      citedFor: 'Mechanical drying of paddy and its effect on milling quality',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated where mechanised harvest delivers grain faster than it can be dried by ambient air — notably humid temperate and tropical grain regions.',
  limitations: [
    'No drying-air temperature, residence time, discharge rate, or moisture target is given here. All are commodity-, dryer-, and end-use-specific and are set by equipment manuals, buyer specifications, and national guidance.',
    "This entry describes the continuous-flow principle, not the operation of any particular dryer; the manufacturer's instructions govern the machine in use.",
    'Discharge moisture measured immediately after the dryer is not the moisture the lot will settle at; readings taken before tempering understate the true value.',
    'Cross-flow non-uniformity is a design characteristic, not a fault to be corrected by operation alone, and an acceptable average can conceal both over- and under-dried fractions.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Continuous-Flow Drying: Throughput and Its Costs',
    description:
      'How continuous-flow grain dryers work: cross-flow versus mixed-flow columns, why discharge rate is the control lever, and why lot identity is lost inside.',
    keywords: [
      'continuous flow drying',
      'cross-flow dryer',
      'mixed-flow dryer',
      'grain dryer throughput',
      'tempering grain',
    ],
  },
  structuredData: { article: true },
};
