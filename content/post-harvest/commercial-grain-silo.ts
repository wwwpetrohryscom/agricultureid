import type { PostHarvestContent } from '@/types/content';

export const commercialGrainSilo: PostHarvestContent = {
  id: 'post-harvest-commercial-grain-silo',
  slug: 'commercial-grain-silo',
  contentType: 'post-harvest',
  title: 'Commercial Grain Silo',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Tall concrete or steel cells hold deep columns of grain that are conditioned by aeration in the same way as any bulk: fans move air through the mass to bring it to a low, even temperature at which the grain, moulds, and insects are all inactive. What distinguishes the commercial case is throughput. Grain arrives from many suppliers, is sampled and graded on intake, is directed to a cell according to its class and condition, and is later blended and drawn off to specification. The silo therefore preserves not just a crop but the identity of a lot: its grade, its segregation from other lots, and its traceability.',
  riskFactors: [
    'Commingling of lots that should have been segregated, so one out-of-specification delivery contaminates a whole cell',
    'Intake sampling that misrepresents a delivery, sending unsuitable grain into long-term storage',
    'Deep columns compacting under their own weight, raising airflow resistance and leaving lower zones poorly aerated',
    'Hot spots in a large cell that are detected late because monitoring points are widely spaced',
    'Grain dust accumulation, which is combustible and is the reason handling facilities carry an explosion risk',
    'Structural distress in concrete cells: cracking, spalling, and moisture ingress through the walls or roof',
    'Carry-over insects surviving in conveyors, elevator boots, pits, and cell corners between seasons',
    'Bridging and hang-ups over discharge openings, which conceal voids in the grain mass',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
    { type: 'quality-measurement', slug: 'test-weight-apparatus' },
  ],
  safetyLimitations: [
    'Flowing grain behaves like a liquid and will not support a person; engulfment and entrapment are a leading cause of death at grain-handling facilities, and the scale of commercial cells makes rescue harder, not easier. Bridged grain conceals voids that collapse without warning. Silo entry is a confined-space activity for trained personnel working to the facility’s own written procedures and to the applicable occupational-safety regulations. AgricultureID gives no entry, rescue, or unloading procedure.',
    'Grain dust is combustible and grain-handling facilities are subject to specific dust-explosion and housekeeping regulation. This is a matter for the facility’s engineered controls and regulatory compliance programme, not for general guidance.',
    'Fumigation of commercial cells is carried out by licensed operators under national registration and residue rules. No fumigant, dose, or application method is given here.',
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  equipment: [
    { type: 'machinery', slug: 'grain-auger' },
    { type: 'machinery', slug: 'grain-dryer' },
  ],
  qualityEffects: [
    'Preserves the grade and condition a lot arrived in; intake grading fixes what the lot is, storage cannot raise it',
    'Segregation by class, condition, and end use maintains lot identity and prevents downgrading by commingling',
    'Repeated conveying, elevating, and turning adds mechanical damage: broken kernels, splits, and fines',
    'Blending to specification homogenises variable deliveries into a saleable lot, within the limits the grade standard allows',
    'Cool, even storage suppresses insect development and mould growth over the extended holding periods commercial storage implies',
  ],
  environmentalContext:
    'Terminal and inland elevator silos are the backbone of grain marketing wherever production is surplus to local demand and grain moves by rail, barge, or ship. The concrete cell cluster is characteristic of temperate export origins; steel cells and flat stores are more common where capacity must be added quickly or cheaply. In hot climates ambient aeration alone may be insufficient and chilled aeration is used instead.',
  alternativeNames: [
    'Grain elevator',
    'Terminal elevator',
    'Concrete silo',
    'Country elevator',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'A commercial grain silo is elevator- or terminal-scale storage in concrete or steel cells, where grain from many suppliers is graded on intake, segregated by class and condition, aerated, and blended out to specification.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A commercial grain silo is grain storage operated as a business rather than as part of a farm. Country elevators aggregate deliveries from surrounding producers; terminal elevators at ports and rail hubs assemble those aggregations into export or processing cargoes. Physically the storage is a cluster of tall cells, historically slip-formed concrete and increasingly large-diameter steel, served by pits, legs, conveyors, and distributors that can route grain to any cell.',
    },
    {
      type: 'paragraph',
      text: 'The storage physics are identical to any other grain bulk — dry, cool grain is biologically quiet — but the commercial context adds an obligation the farm bin does not have. The facility takes ownership of, or responsibility for, grain belonging to many parties, and must return or ship a lot that meets a stated grade. That makes sampling on intake, segregation between cells, and traceability part of the storage function itself, not administration around it.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Elevator or terminal storage in concrete or steel cells at commercial scale',
    },
    {
      label: 'Distinguishing function',
      value:
        'Intake grading, segregation by class and condition, and blending out to specification',
    },
    {
      label: 'Storage control',
      value: 'Aeration to hold the bulk cool and even, as in any grain store',
    },
    {
      label: 'Main threats',
      value:
        'Commingling, deep-column compaction, late-detected hot spots, carry-over insects',
    },
    {
      label: 'Monitoring',
      value:
        'Cable-mounted temperature sensors through each cell, plus intake and outturn sampling',
    },
    {
      label: 'Serious hazards',
      value: 'Grain engulfment and entrapment; combustible grain dust',
    },
    {
      label: 'Governed by',
      value:
        'Grade standards, occupational-safety rules, and dust-explosion regulation',
    },
  ],
  sections: [
    {
      id: 'intake-and-segregation',
      heading: 'Intake, grading, and segregation',
      body: [
        {
          type: 'paragraph',
          text: 'What separates a commercial silo from a large farm bin begins at the weighbridge. Each delivery is sampled and assessed before it is accepted, because once grain is tipped into a cell it cannot be separated from what is already there. The intake assessment determines what the lot is — its class, its condition, whether it is fit for the intended market — and therefore which cell it may go into. A delivery that is out of condition and accepted into a sound cell does not stay contained; it contaminates the whole cell.',
        },
        {
          type: 'paragraph',
          text: 'Segregation is the consequence. Cells are assigned by class, by grade, and increasingly by attributes the market pays for or prohibits: milling versus feed quality, identity-preserved varieties, non-genetically-modified status, organic certification. Each segregation multiplies the number of cells needed and constrains how the facility can be filled. Blending on outturn is the counterpart operation — drawing from several cells simultaneously to build a cargo that meets specification — and it is bounded by what the applicable grade standard permits, since blending to conceal a defect is a different matter from blending to meet a specification.',
        },
      ],
    },
    {
      id: 'deep-columns',
      heading: 'Why depth changes the problem',
      body: [
        {
          type: 'paragraph',
          text: 'A tall cell is not simply a farm bin scaled up. Grain compacts under its own weight, so the lower part of a deep column is denser and offers more resistance to airflow than the same grain would in a shallow store. The fan must work against that resistance, and the air that does pass through is unevenly distributed. Aeration in deep cells therefore takes longer and is less forgiving than in shallow storage, and the airflow the applicable engineering guidance specifies for a given depth reflects that.',
        },
        {
          type: 'paragraph',
          text: 'Detection is also harder. A hot spot is a local event — a pocket of respiring grain, insects, or wet material generating heat — and grain conducts heat poorly, so a developing spot warms its immediate surroundings and little else. In a large cell, temperature cables sample a limited number of points, and a spot can grow substantially between two cables without registering on either. This is why a rising trend at any single point is treated as significant rather than waiting for an absolute reading, and why intake condition matters so much: the surest way to avoid a hot spot in a cell that is difficult to inspect is not to put the material that causes one into it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal figures',
          text: 'Airflow per unit of grain, cell depth limits, sensor spacing, and safe intake moisture are engineering and commodity-specific matters set by national storage guidance and the applicable grade standards. This entry states none of them.',
        },
      ],
    },
    {
      id: 'hazards',
      heading: 'Why commercial grain handling is a regulated hazard',
      body: [
        {
          type: 'paragraph',
          text: 'Two hazards define occupational safety at grain-handling facilities. The first is engulfment. Flowing grain behaves like a liquid and will not support a person; a worker standing on grain being drawn from below can be pulled under and submerged in seconds, and grain that has crusted into a bridge over a void collapses without warning. The scale of commercial cells makes this worse than at farm scale, because the mass involved is greater and access for rescue is more constrained.',
        },
        {
          type: 'paragraph',
          text: 'The second is grain dust. Handling grain — elevating it, conveying it, dropping it — generates fine organic dust that is combustible when suspended in air, and grain elevators have a long history of destructive explosions. Both hazards are the subject of specific occupational-safety regulation in most jurisdictions, addressed through engineered controls, housekeeping regimes, and written procedures at the facility level. They are named here because no honest description of commercial grain storage omits them.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Trained personnel and facility procedures only',
          text: 'Silo entry, dust management, and fumigation are matters for trained and, where required, licensed personnel working to the facility’s written procedures and the applicable regulations. This entry provides no entry, rescue, dust-control, or fumigation procedure.',
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
                'Grain storage is the underlying concept — the moisture and temperature principles governing any grain bulk. A commercial silo is one implementation of it, distinguished by third-party ownership, grading, and segregation obligations.',
            },
            {
              term: 'Versus a farm grain bin',
              description:
                'Same physics, different obligations. A farm bin holds one producer’s own crop; a commercial silo holds many parties’ grain, must grade it on intake, keep classes separate, and ship to specification.',
            },
            {
              term: 'Versus flat storage',
              description:
                'Flat stores hold grain in a shallow, wide pile rather than a deep column. They are cheaper per unit of capacity and easier to aerate, but harder to segregate and to fill and empty mechanically.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'barley' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'farm-grain-bin' },
    { type: 'post-harvest', slug: 'aerated-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'flat-storage-warehouse' },
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-soybean-grades' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Stored-grain aeration and commercial storage research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Grain storage infrastructure and post-harvest systems',
    },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'Grain handling, aeration of deep storage, and facility hazards',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain store hygiene, monitoring, and quality assurance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated at rail, port, and processing hubs in surplus-producing regions. Grade standards, safety regulation, and dust rules are national and differ substantially between countries.',
  limitations: [
    'This entry states no airflow rate, cell depth, sensor spacing, intake moisture, or holding duration: all are engineering, commodity, and climate specific and are set by national storage guidance and the applicable grade standards.',
    'Grading, segregation, and blending rules differ by country and by market; the grade standards linked here are examples, not a universal framework.',
    'Grain engulfment and dust explosion are regulated fatal hazards. Nothing here is an entry, rescue, dust-control, or fumigation procedure, and none should be inferred from it.',
    'Facility designs range from small country elevators to port terminals; the behaviour described is general and does not predict how any particular facility performs.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Commercial Grain Silo: Elevator & Terminal Storage',
    description:
      'How commercial grain silos work: intake grading, segregation between cells, aeration of deep columns, blending to specification, and grain dust hazards.',
    keywords: [
      'commercial grain silo',
      'grain elevator',
      'terminal elevator',
      'grain segregation',
      'grain dust explosion',
    ],
  },
  structuredData: { article: true },
};
