import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const reExportAndTransit: TradeConceptContent = {
  id: 'trade-concept-re-export-and-transit',
  slug: 're-export-and-transit',
  contentType: 'trade-concept',
  title: 'Re-export and Transit',
  alternativeNames: ['Re-exportation', 'Customs transit', 'Entrepôt trade'],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'Re-export and transit are two different ways a consignment can pass through a country that is neither its origin nor its destination: in a re-export it is imported and then exported again, while in transit it moves under customs control without being imported at all. The distinction determines the duty position, the documentation, and how the movement appears in trade statistics.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A great deal of agricultural trade does not move directly from where it grew to where it will be eaten. Cargoes are consolidated at hubs, held pending sale, split for onward distribution, or simply routed through a country because that is where the roads, rails, and ships go. The country in the middle has to have a way of handling goods that are passing through, and it has two distinct mechanisms for doing so.',
    },
    {
      type: 'paragraph',
      text: 'The mechanisms differ in a way that is easy to state and easy to get wrong. In transit, the goods never enter the intermediary country’s market: they move across it under customs control, sealed and accounted for, with duty suspended and an obligation to present them at the exit. In a re-export, the goods are genuinely imported — they arrive, they are declared, they may be stored, and later they leave again. One movement is a crossing; the other is an arrival followed by a departure.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade mechanics — movement through an intermediary country',
    },
    {
      label: 'Transit',
      value:
        'Goods move under customs control without entering free circulation; duty is suspended, not paid',
    },
    {
      label: 'Re-export',
      value:
        'Goods are imported and later exported again without substantial transformation',
    },
    {
      label: 'Statistical effect',
      value:
        'Transit is generally not recorded as trade of the intermediary; a re-export is recorded in both directions',
    },
    {
      label: 'Origin effect',
      value:
        'Neither confers origin — passing through a country does not make a good originate there',
    },
    {
      label: 'Guarantee',
      value:
        'Transit regimes generally require security against the duty at risk, released when the movement is discharged',
    },
    {
      label: 'Governed by',
      value:
        'National customs law, and regional transit conventions where the movement crosses several territories',
    },
  ],
  sections: [
    {
      id: 'the-two-mechanisms',
      heading: 'Two mechanisms, two legal positions',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Customs transit',
              description:
                'A procedure under which goods move from one customs office to another within or across territories without entering free circulation. Duties and controls are suspended for the duration, and the procedure is discharged when the goods are presented intact at the destination office.',
            },
            {
              term: 'Re-export',
              description:
                'The export of goods that were previously imported and have not been substantially transformed. The intermediary country did handle the goods commercially; it simply did not produce them.',
            },
            {
              term: 'Entrepôt trade',
              description:
                'The commercial pattern in which a country systematically imports goods for onward sale rather than for domestic use. Re-export is the customs event; entrepôt trade is the business model built on it.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'What distinguishes them is whether the goods entered the intermediary country’s economy. In transit they did not, which is why the duty is suspended rather than charged and refunded: there is nothing to charge, because nothing was imported for consumption. In a re-export they did, and the duty position depends on the regime under which they were held — a point that varies by jurisdiction and by which of the available procedures was used.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Suspension is not exemption',
          text: 'Duty under a transit procedure is suspended against a guarantee, not waived. If the movement is not properly discharged — goods do not arrive, seals are broken, quantities do not reconcile — the suspended liability generally becomes payable. The mechanism assumes the goods will leave, and reverses if they do not.',
        },
      ],
    },
    {
      id: 'statistical-consequences',
      heading: 'What this does to trade statistics',
      body: [
        {
          type: 'paragraph',
          text: 'The two mechanisms leave very different traces in the data, and the difference is a common source of misreading agricultural trade figures.',
        },
        {
          type: 'paragraph',
          text: 'Goods in transit are generally not recorded as imports or exports of the country they cross, because they never entered its statistical territory in the relevant sense. A country can be a major transit corridor for a commodity and show almost nothing in its trade statistics for it.',
        },
        {
          type: 'paragraph',
          text: 'Re-exports are the opposite. They are recorded — as an import when the goods arrive and as an export when they leave — so a country with a large entrepôt trade shows substantial imports and exports of commodities it neither grows nor consumes. Its export figure is not a measure of its production, and its import figure is not a measure of its consumption. Both are measures of goods passing through its market.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Summing exports double-counts',
          text: 'A consignment routed origin → hub → destination generates an export at the origin, an import and a re-export at the hub, and an import at the destination. Adding national export figures across countries counts the same cargo more than once. This is why world totals require adjustment and why re-exports are recorded as a separate category in the first place.',
        },
      ],
    },
    {
      id: 'origin-and-controls',
      heading:
        'Origin, health controls, and what passing through does not change',
      body: [
        {
          type: 'paragraph',
          text: 'Neither mechanism confers origin. A cargo of cocoa that transits or is re-exported through a third country still originates where it grew, and the origin rules do not treat a journey as production. Where the intermediary country does something to the goods — processing, blending, repacking — the question becomes whether that operation was enough to confer origin under the applicable rule, which is a rules-of-origin question and depends on the rule, the good, and the agreement.',
        },
        {
          type: 'paragraph',
          text: 'Health controls follow their own logic again. Plant- and animal-health requirements at a final destination are framed around where a consignment was grown and produced, and around what it may have been exposed to on the way. A country of consignment that is not the country of origin can therefore matter to the requirements even though it contributed nothing to the goods — because routing affects exposure, not because it affects origin.',
        },
        {
          type: 'list',
          items: [
            'Origin is unaffected by transit or re-export in itself; only qualifying operations can change it',
            'The country of consignment is recorded separately from the country of origin precisely because they diverge here',
            'A destination’s import requirements may refer to the route as well as the origin',
            'Documentation issued in the country of origin generally has to accompany the goods through the intermediary and remain valid at the destination',
          ],
        },
        {
          type: 'paragraph',
          text: 'The documentary point is where these movements most often go wrong in practice. Official attestations are issued against a consignment at a moment, and a long routed journey can outlast their currency or break the link between the document and the goods, particularly where a cargo is split or reconsolidated at the hub. What is required to maintain that link is set by the destination authority.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Routed movement is structural in several agricultural trades rather than incidental. Landlocked producing and consuming countries reach the sea through neighbours, and their entire external trade in bulk commodities is a transit question. Commodities that are graded, blended, or held pending sale accumulate at hubs with the storage and handling capacity to do that work. Cargoes bought afloat are frequently re-sold before they arrive, which changes the destination after despatch.',
        },
        {
          type: 'paragraph',
          text: 'The consequence for anyone reading the data is that the intermediary country appears in the statistics in a way that reflects its logistics rather than its agriculture. That is not a defect in the data — the categories are there to make it visible. It is a defect in the reading if the categories are ignored.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To distinguish goods moving across a country under customs control from goods imported into it and exported again, and to make clear what each does to the duty position, the documentation, and the trade statistics.',
  administeredBy:
    'National customs authorities, under national law and any regional transit convention that applies',
  governingBodies: [
    'World Customs Organization',
    'World Trade Organization',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes two mechanisms in general terms. It states no procedure, guarantee requirement, time limit, or documentary condition for any jurisdiction or transit convention.',
    'Which procedure is available for a movement, what security it requires, and how it is discharged are determined by the customs authorities of the territories concerned under the law in force.',
    'Whether an operation performed on goods at an intermediary country confers origin is a rules-of-origin determination under the applicable rule, not a consequence of the routing.',
    'Health and documentary requirements at destination are set by the destination authority and can turn on the route as well as the origin; nothing here establishes what any consignment needs.',
  ],
  partiesInvolved: [
    'Consignor in the country of origin',
    'Holder of the transit procedure and the guarantor providing security',
    'Carrier moving the goods under control',
    'Customs authorities of departure, transit, and destination',
    'Trader or hub operator handling re-exported goods',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Customs transit as a procedure under which goods move without entering free circulation, and the role of guarantees and discharge',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Freedom of transit as a principle of the multilateral trading system and trade-facilitation disciplines around transit movements',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Recording of re-exports as a distinct flow category and the exclusion of transit from a country’s trade statistics',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary requirements framed around the origin and the route of a consignment',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a distinction. Transit procedures, guarantee regimes, warehousing options, and the treatment of re-exports are national or regional and differ in every jurisdiction.',
  limitations: [
    'A description of two mechanisms, not a procedural guide and not a statement of any transit or warehousing regime.',
    'No guarantee amounts, time limits, seal requirements, or documentary conditions are given: they are jurisdiction-specific and are published by the authorities that set them.',
    'Whether a specific movement qualifies as transit or as a re-export is a determination for the customs authorities concerned.',
    'The statistical treatment described is the general convention; how any reporter applies it is stated in that reporter’s metadata.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Re-export and Transit: Moving Goods Through a Third Country',
    description:
      'The difference between customs transit and re-export: duty suspension versus import and re-export, and what each does to trade statistics.',
    keywords: [
      're-export',
      'customs transit',
      'entrepôt trade',
      'duty suspension',
      'country of consignment',
    ],
  },
  structuredData: { article: true },
};
