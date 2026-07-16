import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const transhipment: TradeConceptContent = {
  id: 'trade-concept-transhipment',
  slug: 'transhipment',
  contentType: 'trade-concept',
  title: 'Transhipment',
  alternativeNames: ['Transshipment', 'Trans-shipment', 'Cargo transfer'],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'Transhipment is the transfer of a consignment from one means of transport to another during a journey, typically at a hub port or airport, without the goods entering the intermediary country’s market. It is a logistics operation with customs, documentary, and plant-health consequences, because a cargo that has been handled and re-stowed is not in quite the state it was.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Very few agricultural consignments travel on a single vehicle from origin to destination. A container of tea leaves a port on a feeder vessel, is lifted off at a hub, waits on a terminal, and is loaded onto a mainline ship going somewhere else. An air consignment of cut flowers changes aircraft. A bulk parcel is discharged and reloaded. Each of those transfers is a transhipment.',
    },
    {
      type: 'paragraph',
      text: 'The reason it earns a page of its own, rather than being filed as a shipping detail, is that a transfer is a moment at which several things can change: the cargo is physically handled, the documentary chain has to keep up with it, the customs status of the goods has to be maintained while they sit in a country that is not their destination, and the consignment’s exposure history acquires a new entry that the destination’s authorities may care about.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade mechanics — transfer between means of transport',
    },
    {
      label: 'Definition',
      value:
        'Transfer of goods from one conveyance to another in the course of a journey',
    },
    {
      label: 'Customs status',
      value:
        'Goods are generally held under customs control and do not enter the intermediary country’s free circulation',
    },
    {
      label: 'Distinction from re-export',
      value:
        'A re-export imports the goods first; a transhipment transfers them without an import for consumption',
    },
    {
      label: 'Origin effect',
      value:
        'None — transferring between vehicles is not an operation that confers origin',
    },
    {
      label: 'Physical exposure',
      value:
        'Handling, waiting, and re-stowage create exposure that the goods did not have on a direct routing',
    },
    {
      label: 'Documentary effect',
      value:
        'Transport documents may be issued or reissued at the transfer, and the through-chain must remain intact',
    },
  ],
  sections: [
    {
      id: 'what-happens-at-a-transfer',
      heading: 'What happens at a transfer',
      body: [
        {
          type: 'paragraph',
          text: 'A transhipment is a discontinuity in an otherwise continuous journey. The goods come off one conveyance, exist for a period on a terminal or in a facility, and go onto another. In customs terms the intermediary country has to have a basis on which to permit that without treating the goods as imported; in commercial terms someone has to be responsible for them while they sit; in physical terms they are being lifted, moved, and set down.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Direct transhipment',
              description:
                'The goods move from one conveyance to another with minimal intermediate storage — the connection is tight and the cargo barely rests.',
            },
            {
              term: 'Indirect transhipment',
              description:
                'The goods are landed and held on a terminal or in a facility for a period before onward loading. The waiting time is where most of the additional exposure accumulates.',
            },
            {
              term: 'Hub-and-spoke routing',
              description:
                'The network pattern that generates transhipment systematically: feeder services collect cargo to a hub where mainline services consolidate it. The transfer is designed in, not incidental.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction from re-export is the one to hold onto. A transhipment moves goods between conveyances while they remain under control and outside the intermediary’s market. A re-export imports them and later exports them. The line between the two is drawn by the customs procedure actually used, which is a matter for the authority of the country where the transfer happens — not something determined by how brief the stop was.',
        },
      ],
    },
    {
      id: 'physical-consequences',
      heading: 'Physical consequences for agricultural cargo',
      body: [
        {
          type: 'paragraph',
          text: 'For farm goods the transfer is not neutral. Every handling event is an opportunity for damage, and every period on a terminal is a period in ambient conditions the cargo was not necessarily specified for. The effects differ by cargo form, but they are real enough that a transhipment routing and a direct routing are not equivalent for a perishable consignment.',
        },
        {
          type: 'list',
          items: [
            'Reefer containers must be unplugged to be moved and reconnected afterwards; the interruption and the terminal conditions around it are where cold-chain gaps arise',
            'Bulk cargo discharged and reloaded is exposed to weather, to the condition of the receiving hold, and to whatever the hold previously carried',
            'Handling damage to packaging, pallets, and unit loads accumulates with each lift',
            'Additional dwell time consumes shelf life for goods that were already ageing',
            'A terminal is a place where a consignment can meet pests, contaminants, or cargoes it was not stowed with at origin',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The cold chain has a seam at every transfer',
          text: 'Temperature-controlled cargo is at its most vulnerable precisely when it is being moved between conveyances, because that is when the equipment maintaining the temperature is not running. Whether the seam matters depends on the commodity, the duration, and the terminal — none of which a reference page can assess for a consignment.',
        },
      ],
    },
    {
      id: 'regulatory-and-documentary',
      heading: 'Regulatory and documentary consequences',
      body: [
        {
          type: 'paragraph',
          text: 'Transhipment does not change origin. It does, however, change the route, and destination authorities have requirements that refer to routes as well as origins. Plant-health regimes in particular are concerned with what a consignment may have been exposed to on its way, because a hub is a place where consignments from many origins are in proximity. Whether a routing raises a requirement, and what evidence satisfies it, is a matter for the importing authority.',
        },
        {
          type: 'paragraph',
          text: 'Documentation has to survive the transfer. Transport documents may be issued for legs rather than for the whole journey, or a through document may be issued covering the movement including the transhipment; which arrangement applies affects who holds a claim against whom, and what a bank presented with the documents is looking at. Official certificates issued at origin have to remain attached, in a meaningful sense, to the goods they describe — a link that is hardest to maintain where cargo is split or reconsolidated at the hub.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Payment mechanisms may care about the routing',
          text: 'Documentary credits commonly address whether transhipment is permitted and what transport document is acceptable. Whether a particular presentation complies is determined against the terms of that credit and the rules it incorporates, by the bank examining it — not by the physical facts of the voyage and not by this page.',
        },
      ],
    },
    {
      id: 'why-hubs-exist',
      heading: 'Why hubs exist, and what it means for the data',
      body: [
        {
          type: 'paragraph',
          text: 'Transhipment exists because networks are cheaper than point-to-point service. Consolidating cargo onto large vessels between a small number of hubs, and feeding those hubs from many smaller ports, moves more tonnage at lower unit cost than direct sailings between every pair of ports could. Producing regions with modest individual volumes reach distant markets on the back of that consolidation, and for many agricultural origins there is no direct service at all.',
        },
        {
          type: 'paragraph',
          text: 'In the statistics, a properly-handled transhipment should leave little trace in the intermediary country’s trade figures, because the goods were never imported there. This is what separates it from a re-export, which appears in both directions. A hub economy can therefore have enormous cargo throughput and comparatively little recorded trade in the commodities passing across it — and the throughput of its port is not a measure of its trade.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To describe the transfer of goods between means of transport in the course of a journey, and to make explicit the customs, documentary, and physical consequences that a transfer creates for agricultural consignments.',
  administeredBy:
    'Customs authority of the country where the transfer occurs, together with the terminal operator and the carriers involved',
  governingBodies: [
    'World Customs Organization',
    'International Maritime Organization',
    'National customs and plant-health authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what transhipment is and what it affects. It states no procedure, permission, dwell-time limit, or documentary requirement for any port, jurisdiction, or carrier.',
    'Whether a movement is treated as a transhipment or as an import followed by an export is determined by the customs authority where the transfer occurs, under the procedure actually used.',
    'Whether a routing through a hub triggers additional requirements at destination is a matter for the importing authority, and is not established by the routing itself.',
    'Whether a documentary presentation involving transhipment complies with a credit is determined by the examining bank against that credit and the rules it incorporates.',
  ],
  partiesInvolved: [
    'Shipper and consignee of the underlying consignment',
    'Feeder and mainline carriers',
    'Terminal operator at the hub',
    'Customs authority of the transhipment country',
    'Plant- or animal-health authority of the destination, where routing is relevant',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Transhipment as a customs procedure under which goods are transferred under control without entering free circulation',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary consideration of a consignment’s route and exposure, in addition to its origin',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Framework governing the carriage and handling of cargoes by sea across the legs of a routed voyage',
    },
    {
      sourceId: 'icc',
      citedFor:
        'Treatment of transhipment and transport documents under documentary credit practice',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Transhipment procedures, permitted dwell times, terminal practice, and the destination requirements that routing may trigger differ by port, jurisdiction, and commodity.',
  limitations: [
    'A description of the operation and its consequences, not a procedural guide and not a statement of any port or customs regime.',
    'No dwell times, handling limits, temperature tolerances, or documentary conditions are given: they are consignment-, facility-, and jurisdiction-specific.',
    'Whether a transhipment routing materially affects a particular cargo depends on the commodity, the equipment, the duration, and the terminal, and cannot be generalised.',
    'The statistical treatment described is the general convention; how any reporter applies it is stated in that reporter’s metadata.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Transhipment: Transferring Cargo Between Conveyances',
    description:
      'What transhipment is and how it differs from re-export: customs status at the hub, physical exposure and cold-chain seams, and why hubs exist.',
    keywords: [
      'transhipment',
      'transshipment',
      'hub port',
      'cargo transfer',
      'cold chain',
    ],
  },
  structuredData: { article: true },
};
