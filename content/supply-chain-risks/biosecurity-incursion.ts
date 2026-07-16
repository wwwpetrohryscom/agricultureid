import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const biosecurityIncursion: SupplyChainRiskContent = {
  id: 'supply-chain-risk-biosecurity-incursion',
  slug: 'biosecurity-incursion',
  contentType: 'supply-chain-risk',
  title: 'Biosecurity Incursion',
  alternativeNames: ['Pest or disease incursion', 'Exotic pest establishment'],
  category: 'Supply-chain risk',
  subcategory: 'Biosecurity',
  riskClass: 'biosecurity',
  summary:
    "A pest or disease arrives in a territory where it was not present and establishes. Trade is the pathway, and the consequence for trade is immediate: the territory's own status changes, and with it the terms on which everything it exports can enter anywhere else.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Biosecurity is the practice of keeping organisms out of places they are not. It exists because the movement of agricultural goods is also the movement of everything travelling with them — insects in a consignment, pathogens in plant material, organisms in packaging, soil on equipment. Trade is not merely correlated with pest spread; it is a principal long-distance mechanism by which it happens, and every consignment is, in the eyes of an importing authority, a candidate pathway.',
    },
    {
      type: 'paragraph',
      text: "The reason this appears in a supply-chain risk model rather than only in an agronomic one is the asymmetry of what an incursion does. Most disruptions are events that resolve. An establishment is a change of state that may be permanent: the organism is now present, the country's status has changed, and its trading partners respond to the status rather than to the incident. A single arrival can therefore reorganise a country's entire export position in a commodity, and no subsequent management of the pest necessarily restores what was lost.",
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Biosecurity — pest and disease pathway' },
    {
      label: 'Direction of travel',
      value:
        'Inbound — this is the risk of receiving an organism, not of shipping one',
    },
    {
      label: 'Core mechanism',
      value:
        "An organism arrives via a trade pathway, establishes, and changes the territory's status",
    },
    {
      label: 'Why it is different',
      value:
        'Establishment is potentially irreversible; most disruptions resolve, this one changes a state',
    },
    {
      label: 'Trade consequence',
      value:
        'Trading partners respond to the changed status, not to the incident',
    },
    {
      label: 'Governed by',
      value:
        "IPPC and WOAH standards, applied through each country's own measures",
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'the-two-sides',
      heading: 'Two sides of one border',
      body: [
        {
          type: 'paragraph',
          text: 'This risk and phytosanitary rejection are the same regulatory system viewed from opposite sides, and separating them clarifies both. A rejection is what happens when the system works: a consignment is stopped, a loss is taken, and the organism does not enter. An incursion is what happens when it does not work: nothing was stopped, and the organism is now inside.',
        },
        {
          type: 'paragraph',
          text: 'From this follows the logic that governs every phytosanitary decision an importing authority takes. Rejections are the cost the system charges to prevent incursions, and the two are traded off against each other. An authority that never rejected anything would be running no control; an authority calibrating its measures is deciding how much trade friction to impose in exchange for how much reduction in pathway risk. When a measure appears disproportionate to a consignment, it is usually proportionate to the incursion it exists to prevent — which is the comparison the authority is actually making.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: "The exposure is the importing country's, not the exporter's",
          text: 'An incursion is a loss suffered by the receiving territory — its growers, its ecosystems, its own export status. The exporter whose consignment was the pathway typically bears none of it. This misalignment between who creates the pathway and who bears the consequence is why the system is regulatory rather than contractual.',
        },
      ],
    },
    {
      id: 'pathways',
      heading: 'Pathways, and why the consignment is not the only one',
      body: [
        {
          type: 'paragraph',
          text: 'A pathway is any route by which an organism can be carried into a new territory. The traded commodity is the obvious one and frequently not the most consequential, because it is the one being inspected.',
        },
        {
          type: 'list',
          items: [
            'The commodity itself — plant produce carrying an organism internally or on its surface',
            'Wood packaging, dunnage, and pallets, which are plant material travelling with a consignment that may not itself be plant material at all',
            'Containers, vehicles, and vessels, which carry soil, plant debris, and hitchhiking organisms independently of what is loaded in them',
            'Soil and organic residue on machinery and equipment moving between territories',
            'Passenger and postal movement, which carries small quantities of plant and animal material outside any commercial control',
            'Natural spread across a border from a neighbouring territory where establishment has already occurred',
          ],
        },
        {
          type: 'paragraph',
          text: 'The packaging case illustrates the general principle particularly clearly, and it is the reason an international standard exists specifically for wood packaging: a pathway can be entirely incidental to the trade. A consignment of manufactured goods is not an agricultural consignment and is not subject to agricultural inspection, and the pallet beneath it is untreated timber that may carry organisms. The pathway had nothing to do with agriculture at all.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is structural: an importing authority cannot close a pathway by inspecting consignments of the commodity at risk, because the pathways it most needs to close are the ones nobody associates with that commodity. This is why biosecurity measures reach into packaging, containers, and conveyances rather than stopping at the cargo, and why they can appear to a trader as requirements unrelated to what is being shipped.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Arrival, establishment, and the window',
      body: [
        {
          type: 'paragraph',
          text: 'Arrival and establishment are different events, and the distinction is what biosecurity systems are built around. An organism that arrives and does not survive has not established. An organism that arrives, survives, reproduces, and spreads has, and the transition between those states is the only point at which the outcome is still open.',
        },
        {
          type: 'paragraph',
          text: 'This creates the defining feature of the mechanism: a window in which the population is small enough that eradication may be feasible, which closes as the population grows and disperses. After that, the objective necessarily shifts from removing the organism to managing it — and that shift is permanent. Whether an incursion becomes a temporary event or a permanent condition is largely determined by how early it is detected, which is why surveillance rather than border control is what determines the outcome once an organism is inside.',
        },
        {
          type: 'paragraph',
          text: 'Detection during that window is hard for a reason that is worth stating: a small founding population produces few symptoms, in a place nobody is watching, of an organism nobody is expecting. Incursions are commonly found by the time they are large enough to notice, which is often after the window has closed.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'This page describes the trade mechanism only',
          text: 'What is done about an organism once detected — surveillance design, containment, eradication, or management — is determined by the competent authority under its own emergency powers and technical assessment. No control method, product, dose, or protocol is given here, and none should be inferred.',
        },
      ],
    },
    {
      id: 'trade-consequence',
      heading: 'What an incursion does to trade',
      body: [
        {
          type: 'paragraph',
          text: "The trade consequence begins before the pest does any agricultural damage at all, and this is the part most often missed. The moment a territory's pest status changes, its trading partners' import conditions — which are written against status — change with it. Markets that were open on the basis of freedom from the organism close or impose new requirements, and they do so on the basis of the official record rather than on the basis of any harm yet observed.",
        },
        {
          type: 'paragraph',
          text: "The territory's exporters therefore face measures immediately and, critically, regardless of whether their own production is anywhere near the affected area. Whether the response is national or confined to a zone depends on whether trading partners recognise regionalisation and on the quality of the delimiting survey the affected country can produce — which means the export consequence turns on the strength of the country's own surveillance evidence as much as on the biology.",
        },
        {
          type: 'paragraph',
          text: 'Domestically, the consequences accumulate over a longer horizon: production losses where the organism affects the crop, permanent additional control costs, and restrictions on internal movement. But it is the status change and its trade effect that arrive first, and that make an incursion a supply-chain event before it is an agronomic one.',
        },
      ],
    },
  ],
  riskMechanism:
    "An organism not present in a territory arrives via a trade pathway, survives, reproduces, and establishes, changing the territory's official pest or disease status. Pathways extend well beyond the traded commodity: wood packaging, dunnage, and pallets are plant material travelling with consignments that may not be agricultural at all; containers, vehicles, and vessels carry soil, plant debris, and hitchhiking organisms independently of their cargo; machinery carries soil and residue; passenger and postal movement carries material outside commercial control; and natural spread crosses borders from territories where establishment already occurred. Consequently an importing authority cannot close a pathway by inspecting consignments of the commodity at risk, since the pathways most needing closure are incidental to that commodity — which is why measures reach into packaging, containers, and conveyances and can appear unrelated to what is shipped. This risk and phytosanitary rejection are one system seen from opposite sides: rejections are the cost the system charges to prevent incursions, and an authority calibrating measures is trading trade friction against pathway risk, so a measure disproportionate to a consignment is generally proportionate to the incursion it exists to prevent. Arrival and establishment are distinct: the transition between them defines a window in which the founding population may still be small enough for eradication to be feasible, and that window closes as the population grows and disperses, after which the objective shifts permanently from removal to management. Detection within the window is difficult because a small population produces few symptoms, where nobody is watching, of an organism nobody expects — so surveillance rather than border control determines the outcome once an organism is inside. The trade consequence precedes any agricultural damage: import conditions are written against status, so the moment the status changes, markets close or impose new requirements on the official record alone, and the territory's exporters face measures regardless of proximity to the affected area — with whether the response is national or zonal turning on partners' recognition of regionalisation and on the delimiting-survey evidence the affected country can produce. The exposure falls on the receiving territory while the pathway was created by an exporter who bears none of it, which is why the system is regulatory rather than contractual.",
  chainStages: [
    'international-transport',
    'border',
    'destination-market',
    'production',
  ],
  observableIndicators: [
    'Official reporting of a new pest or disease record in a territory, or notification to the relevant international body',
    'Detection of a regulated organism during port-of-entry inspection or post-entry quarantine',
    'Interception frequency rising for an organism on a pathway into a territory',
    'A delimiting survey initiated following a detection, or emergency measures declared by the competent authority',
    'Establishment reported in a neighbouring territory, creating a natural-spread pathway across a land border',
    'Trading partners amending import conditions, pest categorisation, or country lists following a status change',
    'Recognition of pest-free area or zone status suspended, withdrawn, or placed under review',
    'Additional certification, treatment, or declaration requirements imposed on exports from an affected territory',
    'Wood packaging, containers, or conveyances found non-compliant or carrying plant debris or soil on inspection',
    'Restrictions on internal movement of host material introduced within an affected territory',
    'Surveillance or trapping programmes reporting detections outside previously known distribution',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page names no pest, disease, organism, or territory, cites no incursion event, and gives no establishment rates, spread rates, incursion frequencies, or impact figures.',
    'No control, treatment, eradication, containment, or surveillance method is described, and no pest-control product, dose, protocol, or schedule is given or implied. What is done about a detected organism is determined by the competent authority under its own powers and technical assessment; this page describes the trade and quarantine mechanism only.',
    "Assessing exposure for a real territory or chain requires that territory's own data: its pest categorisation and status records, its surveillance coverage and detection capability, the pathways actually operating into it, the volume and origin of consignments and conveyances arriving, its import measures, and the recognition its trading partners give to zoning.",
    'Whether an organism will establish in a territory depends on its biology, on host availability, on climate, and on the founding population, and cannot be generalised. Nothing here predicts establishment, spread, or impact for any organism or place.',
    'Pest categorisation and import measures are set by each country and change as its own pest situation and risk assessment change. Nothing here states the requirements or status of any jurisdiction.',
    'AgricultureID is not a plant protection organisation, veterinary authority, or biosecurity agency, and this page is not a biosecurity assessment or advice.',
  ],
  affectedCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'nut',
    'root-tuber',
    'livestock-product',
    'beverage-crop',
    'fibre',
    'oilseed',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The international plant-health framework, pest risk analysis, pathways, pest-free areas, and the basis of phytosanitary measures',
    },
    {
      sourceId: 'woah',
      citedFor:
        'International animal-health standards, disease notification, and the zoning and compartmentalisation concepts applied to status changes',
    },
    {
      sourceId: 'eppo',
      citedFor:
        'Regional plant-protection framework for pest categorisation, listing, and reporting',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Pest and pathogen distribution and identification reference context',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework governing measures taken in response to a change in pest or disease status',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Plant-health, biosecurity, and food-security context for pest introduction and its agricultural consequences',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic, but pest status, categorisation, surveillance capability, import measures, and recognition of zoning are entirely country- and organism-specific.',
  limitations: [
    'A reference description of a trade and quarantine mechanism, not a biosecurity assessment, a pest risk analysis, or advice on any organism, territory, or consignment.',
    'No pests, diseases, organisms, or countries are named, and no incursion event is described or cited.',
    'No control, eradication, containment, or treatment methods, products, doses, or protocols are given. These are matters for the competent authority and are deliberately outside the scope of this page.',
    'Pest biology, host range, and management belong to the pest and disease pages and to the applicable plant protection organisation; this entry addresses the pathway and the trade consequence only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Biosecurity Incursion: Pathways, Establishment, Trade Status',
    description:
      'How a pest or disease enters a territory through trade pathways, why packaging matters more than the cargo, and why the trade consequence precedes the damage.',
    keywords: [
      'biosecurity incursion',
      'pest establishment',
      'quarantine pathway',
      'plant health',
      'pest free area',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
