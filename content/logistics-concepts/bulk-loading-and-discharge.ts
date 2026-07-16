import type { LogisticsConceptContent } from '@/types/content';

export const bulkLoadingAndDischarge: LogisticsConceptContent = {
  id: 'logistics-concept-bulk-loading-and-discharge',
  slug: 'bulk-loading-and-discharge',
  contentType: 'logistics-concept',
  title: 'Bulk Loading and Discharge',
  alternativeNames: ['Bulk cargo handling', 'Shiploading and unloading'],
  category: 'Logistics concept',
  subcategory: 'Handling',
  logisticsClass: 'handling',
  summary:
    'Bulk loading and discharge move unpackaged commodity between a store and a ship as a flowing mass, using gravity, conveyors, grabs, and air. Every one of those methods trades speed against gentleness, and the cargo pays the difference.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A bulk cargo is transferred by making it flow. On loading, it is conveyed to a spout over an open hatch and allowed to fall into the hold. On discharge, it is dug out by grab, drawn out by suction, or lifted out mechanically, and conveyed away. There is no unit to pick up and place, so the handling system is a materials-handling plant rather than a lifting one, and its performance is measured as a rate — mass per unit of time.',
    },
    {
      type: 'paragraph',
      text: 'The tension running through the whole operation is that rate is what everyone is paid for and gentleness is what the cargo needs. Berth time is expensive, laytime is contractual, and the terminal’s economics rest on throughput. But grain that falls a long way arrives broken, a grab that bites into a stow crushes what it does not lift, and every transfer point generates dust that is both product walking away and a genuine explosion hazard. Bulk handling is the management of that conflict.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Handling — transfer of unpackaged cargo as a flowing mass',
    },
    { label: 'Cargo form', value: 'Dry bulk' },
    {
      label: 'Measured as',
      value: 'A rate — mass per hour — rather than as a count of units',
    },
    {
      label: 'Loading methods',
      value: 'Gravity spouts, conveyors, and shiploaders over open hatches',
    },
    {
      label: 'Discharge methods',
      value:
        'Grabs, pneumatic suction, and mechanical unloaders, each with different gentleness',
    },
    {
      label: 'Central conflict',
      value:
        'Rate is what the berth is paid for; gentleness is what the cargo needs',
    },
    {
      label: 'Recognised hazard',
      value:
        'Suspended grain dust is explosive; handling plant is engineered around this',
    },
  ],
  sections: [
    {
      id: 'loading',
      heading: 'Loading: the fall is the problem',
      body: [
        {
          type: 'paragraph',
          text: 'Loading is conceptually simple — conveyors bring cargo to a spout, and it falls into the hold — and the simplicity conceals the damage. A stream of grain falling into an empty hold has a long way to go before it lands, and it lands on steel. Kernels break, seed coats crack, and friable commodities fracture. As the hold fills the drop shortens and the damage falls off, which means the first cargo into a hold is handled worst and the last is handled best, from an operation that never changed.',
        },
        {
          type: 'paragraph',
          text: 'The fall also liberates dust. Fine material carried in the cargo, plus fragments created by the impact itself, become airborne at every transfer point and at the spout. This is a loss of saleable mass, an air-quality problem, a nuisance to the port, and — because suspended grain dust in the right concentration will ignite — a recognised explosion hazard that dictates how the whole plant is engineered.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Handling creates the defect it is then measured on',
          text: 'Broken kernels and dockage are grading factors, and a proportion of both is manufactured by the handling itself rather than delivered by the farm. A cargo can be loaded to one grade and outturn to another without anything having spoiled — the difference having been made by the fall, the grab, and the conveyors.',
        },
      ],
    },
    {
      id: 'discharge',
      heading: 'Discharge: getting a mass out of a box',
      body: [
        {
          type: 'paragraph',
          text: 'Discharge is the harder half. The cargo is a settled mass at the bottom of a steel compartment, and it must be brought up and out. Grabs — clamshell buckets on cranes — are the general-purpose answer: fast, robust, indifferent to what they are lifting, and correspondingly hard on it. Pneumatic systems draw cargo out through suction, which is gentler and slower and struggles with heavier or damper material. Mechanical unloaders using screws or chains sit in between.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Grab discharge',
              description:
                'A clamshell bucket taking bites from the stow. The fastest and least gentle option, and the one that cannot reach the corners.',
            },
            {
              term: 'Pneumatic discharge',
              description:
                'Cargo drawn out by air. Gentler on the commodity and much better at cleaning up the hold, at a lower rate.',
            },
            {
              term: 'Trimming',
              description:
                'Levelling the cargo surface. On loading it reduces the void a cargo could shift into; on discharge, the equivalent work is pushing residues to where the grab can reach.',
            },
            {
              term: 'Sweeping',
              description:
                'Recovering the residual cargo the main plant cannot lift. Slow, labour-intensive, and the reason the last part of a discharge takes disproportionately long.',
            },
            {
              term: 'Outturn',
              description:
                'The quantity actually delivered at discharge. Compared against the loaded figure, and the difference is where quantity disputes live.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The end of a discharge is always disproportionate. The grab clears the bulk of the hold quickly and then cannot reach the tank tops, the corners, and under the hatch coamings, so the operation slows to bobcats, sweepers, and hand work for a residue that is a small fraction of the cargo and a large fraction of the time. This is a structural feature of the mode, not a failure of a particular terminal.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'list',
          items: [
            'Breakage from free-fall at loading, worst into an empty hold and diminishing as it fills',
            'Crushing and fracture from grabs biting into the stow at discharge',
            'Dust generation at every transfer point — a mass loss, an air-quality issue, and an explosion hazard',
            'Contamination from residues in the handling plant itself, not only from the ship’s holds',
            'Segregation of fine material and foreign matter as the cargo flows and cones, so the stow is not homogeneous',
            'Weather interruption — an open hatch is an open hatch, and rain stops the operation for hygroscopic cargo',
            'Spillage at the quayside and into the water, which is both a loss and an environmental matter',
            'Residual sweepings unrecovered, feeding the gap between bill-of-lading and outturn quantity',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The plant is engineered around dust, not around convenience',
          text: 'Aspiration, enclosure, ignition control, and explosion protection in bulk terminals exist because suspended grain dust is a known explosion hazard. These are engineered systems designed, commissioned, and maintained by qualified engineers under the applicable safety regulation. This page describes what the operation does; it is not an operating instruction and gives no parameters.',
        },
      ],
    },
    {
      id: 'the-commercial-frame',
      heading: 'The commercial frame',
      body: [
        {
          type: 'paragraph',
          text: 'Handling rate is not merely operational — it is contractual. A voyage charter allows a period for loading and discharging, and time used beyond it is compensated at an agreed rate while time saved may earn a credit. This is why a berth’s handling rate is negotiated and warranted rather than merely achieved, and why the pressure to keep the rate up is applied from the contract rather than from the terminal’s own preference. The cargo’s tolerance for rough handling is not represented in that negotiation at all, which is broadly why it is the cargo that yields.',
        },
        {
          type: 'paragraph',
          text: 'Quantity is established by draught survey rather than by the handling plant’s own measurement, because a conveyor scale measures what passed over it and the parties need to know what left the ship. The difference between figures at the two ends of a bulk voyage is normal, expected, and provided for commercially — it is not, on its own, evidence that anything went wrong.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Transfer unpackaged commodity between shore storage and a vessel at a rate the berth and the charter require, while limiting the breakage, dust loss, and contamination that the act of making a cargo flow inevitably creates.',
  operationalLimitations: [
    'No handling rates, throughputs, or capacities are given. They are properties of a specific berth, its plant, and the cargo, and are warranted in the charter party rather than generalisable.',
    'No drop heights, grab sizes, conveyor speeds, or equipment specifications are given. These are engineering parameters of a particular installation.',
    'No laytime, demurrage, or despatch figures are given. They are set by the charter party for the specific fixture.',
    'Expected breakage and dust loss are commodity-, plant-, and condition-specific and are not stated. No general loss figure would hold across cargoes or terminals.',
    'Dust control and explosion protection are engineered systems designed and commissioned by qualified engineers under the applicable safety regulation; nothing here specifies or substitutes for them.',
    'Which discharge method is used at a given port is determined by the terminal’s installed plant and the cargo, not by preference or by any general rule.',
  ],
  cargoForms: ['bulk-dry'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'dockage' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'test-weight' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'draught-survey' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'Carriage and handling requirements for solid bulk cargoes, including trimming and cargo information duties',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Dry bulk port handling and terminal operations in seaborne trade',
    },
    {
      sourceId: 'igc',
      citedFor: 'Grain export terminal handling context and trade flows',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Installed plant, berth capability, achievable rates, and dust control provision differ substantially between terminals and determine what any specific operation can do.',
  limitations: [
    'A reference description of the operation, not an operating instruction, an engineering specification, or a terminal service.',
    'No rates, capacities, equipment specifications, drop heights, or loss figures are given — all are berth-, plant-, cargo-, and contract-specific.',
    'Dust control and explosion protection are engineered systems under applicable safety regulation and are not specified here.',
    'Terminal practice varies widely; this describes the general principle rather than any particular installation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Loading and Discharge: How Grain Gets On and Off a Ship',
    description:
      'How bulk cargo handling works: why the fall breaks grain, how grabs and pneumatic systems differ, and the dust hazard that shapes the whole plant.',
    keywords: [
      'bulk loading',
      'bulk discharge',
      'shiploader',
      'grab discharge',
      'grain dust explosion',
    ],
  },
  structuredData: { article: true },
};
