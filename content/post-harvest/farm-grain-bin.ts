import type { PostHarvestContent } from '@/types/content';

export const farmGrainBin: PostHarvestContent = {
  id: 'post-harvest-farm-grain-bin',
  slug: 'farm-grain-bin',
  contentType: 'post-harvest',
  title: 'Farm Grain Bin',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'A cylindrical bin holds a vertical column of grain on a perforated or ducted floor. A fan pushes or pulls ambient air up through the bulk, and the grain gives up or takes on heat as a cooling front travels through the column. Once the whole column has been brought to a low, even temperature, the grain is biologically quiet enough to hold: the grain, the storage moulds, and the insects are all too inactive to cause measurable deterioration. The bin itself preserves nothing — it is a container that keeps water and pests out while the aeration system maintains the condition the grain was put away in.',
  riskFactors: [
    'Grain binned before it is dry enough for the intended holding period, which no amount of aeration will correct',
    'A cooling front stalled part-way through the column, leaving a warm, unaerated layer above it',
    'Moisture migration in autumn and spring, when the temperature difference between the bulk and the outside air drives convection currents that wet the top surface',
    'Hot spots developing around fines and trash concentrated in the centre core during filling',
    'Roof vents of inadequate area, so fan air cannot escape and condensation forms under the roof',
    'Carry-over insects surviving in floor ducts, wall seams, and residual grain from the previous season',
    'Rodent, bird, and water entry through damaged sheets, seals, or a failed roof',
    'Running fans in warm or humid weather, which can rewet the bulk rather than cool it',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  safetyLimitations: [
    'Flowing grain behaves like a liquid and will not support a person. Engulfment and entrapment in bins kill workers every year, and a person caught in flowing grain can be submerged faster than bystanders can reach them. Bridged or crusted grain can collapse without warning under someone standing on it, and grain adhering to a bin wall can avalanche. Bin entry is a confined-space activity for trained personnel working to the facility’s own written procedures. AgricultureID gives no entry, rescue, or unloading procedure.',
    'Aeration fans, augers, and sweep equipment have unguarded in-running points during operation and maintenance. These are addressed by the facility’s lock-out and machine-guarding procedures, not by general guidance.',
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'oat-grain' },
  ],
  equipment: [
    { type: 'machinery', slug: 'grain-auger' },
    { type: 'machinery', slug: 'grain-dryer' },
  ],
  qualityEffects: [
    'Holds the moisture and soundness the grain arrived with; it does not improve either',
    'Even, cool grain temperature limits the moisture migration that crusts and spoils the top surface',
    'Suppresses insect development and mould growth for as long as the cool, dry state is maintained',
    'Handling into and out of the bin adds mechanical damage — broken kernels, splits in soybeans and pulses, and fines that concentrate in the core',
    'Germination and seed vigour are preserved only where the bin was filled dry and held cool',
  ],
  environmentalContext:
    'On-farm bins are the dominant storage form in mechanised temperate grain agriculture, where a cool season provides ambient air suitable for aeration for much of the storage period. In warm or humid climates ambient air may never be cool or dry enough to condition the bulk, and refrigerated aeration, hermetic methods, or shorter holding periods are used instead.',
  alternativeNames: ['On-farm bin', 'Farm silo', 'Aerated storage bin'],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'A farm grain bin is an on-farm cylindrical steel bin that holds dried grain on an aerated floor, using fans to bring the bulk to a low, even temperature so it can be held safely from harvest until sale or use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A farm grain bin is the on-farm implementation of grain storage: a cylindrical steel structure, usually with a perforated floor or in-floor ducts, in which a producer holds their own crop between harvest and sale. It lets a farm capture a harvest that arrives in a few weeks and market it across a year, and it gives the producer control over drying, conditioning, and timing that delivering straight to a commercial elevator does not.',
    },
    {
      type: 'paragraph',
      text: 'The bin is a container and an air-handling system, not a preservation treatment. Grain must be dry enough for the intended holding period before it goes in, because a bin does not dry a wet crop — aeration moves relatively small volumes of air, sized to shift a cooling front through the bulk rather than to remove water. What the bin then does is keep the grain at a low, uniform temperature and keep rain, rodents, birds, and re-infesting insects out of it.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'On-farm cylindrical bin with an aerated floor, filled from the top',
    },
    {
      label: 'What it does',
      value: 'Holds dried grain cool and even; keeps water and pests out',
    },
    {
      label: 'What it does not do',
      value: 'It does not dry wet grain or improve grain that went in damaged',
    },
    {
      label: 'Depends on first',
      value: 'Adequate drying and cleaning before filling',
    },
    {
      label: 'Main threats',
      value:
        'Moisture migration, hot spots in the fines core, carry-over insects',
    },
    {
      label: 'Monitoring',
      value:
        'Grain temperature through the bulk, moisture, insects, and crusting',
    },
    {
      label: 'Serious hazard',
      value:
        'Grain engulfment and entrapment; bin entry is a confined-space activity',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How a bin holds grain',
      body: [
        {
          type: 'paragraph',
          text: 'Grain is loaded through a roof opening and rests as a deep column on a perforated floor or a set of in-floor ducts. A fan connected to the plenum beneath moves ambient air through the column. Because grain is a poor conductor of heat but a good exchanger of it with air passing over each kernel, the air does not cool the whole bulk at once. Instead a cooling front forms at the air inlet and travels slowly through the column: grain behind the front sits at roughly the temperature of the incoming air, grain ahead of it remains at the temperature it was loaded at.',
        },
        {
          type: 'paragraph',
          text: 'This is why aeration is run to completion rather than by the clock. A fan stopped when the front is half-way through leaves a warm layer sitting above a cool one — a worse condition than before, because the boundary between them is where moisture accumulates. Because the front moves with the volume of air delivered, the time it takes depends on fan capacity, column depth, and how tightly the bulk is packed, all of which differ from bin to bin. The applicable national storage guidance sets airflow and depth figures for a given crop and climate.',
        },
      ],
    },
    {
      id: 'moisture-migration',
      heading: 'Moisture migration and the fines core',
      body: [
        {
          type: 'paragraph',
          text: 'The two problems that spoil grain in an otherwise sound bin are both consequences of unevenness. Moisture migration occurs when the bulk and the outside air are at different temperatures: slow convection currents form inside the grain mass, carrying moisture from warm grain to the coolest surface, where it condenses. In a bin cooling down over autumn this concentrates moisture at the top centre, producing a damp crust that moulds and then blocks airflow. In a bin warming in spring the pattern reverses toward the walls and floor. Keeping the bulk close to ambient temperature is what limits the driving force.',
        },
        {
          type: 'paragraph',
          text: 'The second problem is created during filling. Grain poured through a central spout sorts itself: sound kernels roll out toward the wall while fines, broken kernels, weed seed, and chaff concentrate in a column down the centre. That core is denser and far more resistant to airflow than the surrounding grain, so aeration air takes the easier path around it. The core is left uncooled, and it is also the most spoilable material in the bin — fines respire and hold moisture more readily than whole grain. Coring a bin after filling, or cleaning grain before it goes in, removes that material.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Depth, airflow, and moisture are not universal',
          text: 'Safe holding moisture, fan sizing, and column depth are specific to the crop, the climate, and how long the grain must be held. They are set by the applicable national storage guidance and extension recommendations, not by any single figure.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Fill only with grain dried to a moisture that suits the intended holding period for that crop and climate.',
            'Clean the bin, the floor ducts, and the surrounding area before filling to remove carry-over insects and residual grain.',
            'Clean or core out the centre fines column so aeration air reaches the whole bulk.',
            'Run aeration until the cooling front has passed completely through the column, not for a set time.',
            'Choose aeration weather deliberately: air that is warmer or more humid than the bulk can rewet it.',
            'Check grain temperature at depth, not just at the surface, and treat a rising trend as the first sign of a hot spot.',
            'Maintain roof sheets, vents, and seals so water, rodents, and birds stay out.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Grain engulfment kills',
          text: 'Flowing grain behaves like a liquid and will not hold a person up; crusted or bridged grain can collapse under someone standing on it. Bin entry is a confined-space activity requiring trained personnel and the facility’s own written procedures. This entry does not provide any entry, rescue, or unloading procedure.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus grain storage',
              description:
                'Grain storage is the general concept — the moisture and temperature principles that apply however grain is held. A farm grain bin is one concrete implementation of it, at farm scale and under the producer’s own control.',
            },
            {
              term: 'Versus a commercial grain silo',
              description:
                'The physics are the same; the scale, the ownership, and the obligations are not. A commercial silo takes in grain from many suppliers, must grade and segregate it, and operates under regulatory and dust-management regimes that an on-farm bin does not face.',
            },
            {
              term: 'Versus aerated storage',
              description:
                'Aeration is the air-moving system inside the bin, and is described separately as a system in its own right. A bin without a working aeration system is only a container.',
            },
            {
              term: 'Versus a grain dryer',
              description:
                'A dryer removes water using high airflow and often heat. Aeration in a bin is sized to move a cooling front, not to dry a wet crop. Some bins are equipped for in-bin drying, which is a different operation from aeration.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'barley' },
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'aerated-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'On-farm grain bin management, aeration, and coring practice',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Grain bin storage, cooling fronts, and moisture migration',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Stored-grain ecosystems and aeration research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain store hygiene and aeration guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, but predominant in mechanised temperate grain systems where ambient air is cool enough to condition a bulk. Safe moisture, depth, and airflow are set by national guidance for each crop and climate.',
  limitations: [
    'This entry gives no safe holding moisture, airflow rate, bin depth, or aeration duration: all are specific to the crop, the climate, and the intended holding period, and are set by the applicable national storage guidance.',
    'Bin designs, floor and duct systems, and fan configurations vary widely; the behaviour described is general and does not predict how a particular bin will perform.',
    'Grain bin entry is a recognised fatal hazard. Nothing here is an entry, rescue, or unloading procedure, and none should be inferred from it.',
    'Insect and mould pressure, and the control options legally available, differ by country and by commodity; pest management is not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Farm Grain Bin: On-Farm Aerated Grain Storage',
    description:
      'How an on-farm grain bin holds dried grain: cooling fronts, aeration, moisture migration, the fines core, and why bin entry is a fatal engulfment hazard.',
    keywords: [
      'farm grain bin',
      'on-farm grain storage',
      'bin aeration',
      'cooling front',
      'grain engulfment',
    ],
  },
  structuredData: { article: true },
};
