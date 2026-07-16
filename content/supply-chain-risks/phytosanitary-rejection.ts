import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const phytosanitaryRejection: SupplyChainRiskContent = {
  id: 'supply-chain-risk-phytosanitary-rejection',
  slug: 'phytosanitary-rejection',
  contentType: 'supply-chain-risk',
  title: 'Phytosanitary Rejection',
  alternativeNames: ['Plant-health rejection', 'Quarantine interception'],
  category: 'Supply-chain risk',
  subcategory: 'Quality and integrity',
  riskClass: 'quality-integrity',
  summary:
    'A consignment is refused entry on plant-health grounds — a regulated pest is intercepted, or the certification does not satisfy the importing country. The consignment is being judged not as food but as a possible pathway for an organism into a new territory.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Plant-health regulation exists to stop pests establishing in places they are not. When a consignment of plant produce crosses a border it is assessed as a potential pathway: not for whether it is wholesome, but for whether it could carry a regulated organism into the importing territory. That is a different question from food safety, it is answered by a different authority, and it produces a different kind of decision.',
    },
    {
      type: 'paragraph',
      text: 'The consequence is that a phytosanitary rejection often has nothing to do with the quality of the product. Sound, saleable, entirely edible produce is refused because a single insect was found in it, or because a paper attesting to its inspection was not in the form the destination requires. The logic is preventive rather than punitive: the importing authority is protecting a territory against an irreversible event, and against that objective the loss of one consignment is a small price. Understanding that asymmetry explains almost everything about how the mechanism behaves.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Quality and integrity — plant health' },
    {
      label: 'Judged as',
      value:
        'A potential pathway for a regulated organism, not as a food or a quality proposition',
    },
    {
      label: 'Decided by',
      value:
        'The national plant protection organisation of the importing country',
    },
    {
      label: 'Two distinct triggers',
      value:
        'Interception of a regulated pest, and failure of the certification itself',
    },
    {
      label: 'Governing framework',
      value:
        "IPPC and its international standards, applied through each country's own requirements",
    },
    {
      label: 'Preventive logic',
      value:
        'The measure protects against an irreversible establishment, so it is deliberately precautionary',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'two-triggers',
      heading: 'Two triggers that are frequently confused',
      body: [
        {
          type: 'paragraph',
          text: 'Rejections on plant-health grounds arise from two mechanisms which produce the same outcome and require completely different explanations.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Pest interception',
              description:
                'A regulated organism, or evidence of one, is found in the consignment on inspection at entry. The finding is biological, and the consignment genuinely presents the pathway the regulation exists to close.',
            },
            {
              term: 'Certification failure',
              description:
                'No pest is found. The certificate is absent, invalid, in the wrong form, missing a required additional declaration, or issued by a body the destination does not recognise. The consignment may be entirely free of pests and is still inadmissible.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "The second is the more common source of avoidable loss, and the more revealing about the system. Phytosanitary certification is an official act: an authority in the exporting country attests that the consignment was inspected and found to conform to the importing country's stated requirements. The importing authority is not re-doing that inspection so much as relying on it, and where the attestation does not carry what it should, there is nothing to rely on. The certificate is the mechanism of trust between two administrations, and a defective certificate breaks that link regardless of the cargo.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A regulated pest is a legal status, not a biological one',
          text: "Whether an organism is regulated depends on the importing country's pest categorisation — its presence, its distribution, and the risk it poses there. The same organism can be unregulated at origin, where it is endemic and unremarkable, and quarantine-regulated at destination. Nothing about the organism changes; the jurisdiction does.",
        },
      ],
    },
    {
      id: 'asymmetry',
      heading: 'The asymmetry that shapes the decision',
      body: [
        {
          type: 'paragraph',
          text: "Phytosanitary decisions are taken under an asymmetry that is worth stating explicitly, because it explains behaviour that otherwise looks disproportionate. If an authority wrongly refuses a sound consignment, the cost is commercial, bounded, and falls on the trade. If an authority wrongly admits a consignment carrying a pest that establishes, the cost is ecological and agricultural, potentially permanent, and falls on the importing country's own producers for as long as the pest persists.",
        },
        {
          type: 'paragraph',
          text: 'Those outcomes are not comparable, and no authority weighing them will treat them as comparable. This is why a single specimen can end a consignment, why the response to a finding is often immediate rather than investigatory, and why the burden sits on the exporter to demonstrate conformity rather than on the authority to demonstrate a problem. It is not excessive caution; it is a rational response to an irreversible downside.',
        },
        {
          type: 'paragraph',
          text: "The same logic governs what happens next. Options for a rejected consignment — treatment where a recognised one exists and is accepted, re-export, or destruction — are determined by the authority under its own rules, and the choice among them is not the trader's. Where treatment is available it is a matter for the authority and the treatment provider; this page describes the trade mechanism and gives no treatment, product, or dosage information.",
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'From one consignment to an origin',
      body: [
        {
          type: 'paragraph',
          text: "The most consequential propagation route is from consignment to origin. A single interception is a commercial loss for one exporter. A pattern of interceptions is evidence to the importing authority about the reliability of an origin's control system, and authorities respond to evidence about systems, not only about consignments.",
        },
        {
          type: 'list',
          items: [
            'Increased inspection frequency for that commodity and origin, lengthening clearance for every exporter from it',
            'Additional declarations, treatment requirements, or conditions added to the import requirements',
            'Suspension of recognition for particular areas, places of production, or exporters',
            'In the limiting case, suspension of trade in the commodity from that origin altogether',
          ],
        },
        {
          type: 'paragraph',
          text: "This escalation is why plant health is managed collectively at origin rather than left to individual exporters. An exporter with impeccable practice inherits the consequences of a neighbour's interception, because the importing authority is regulating a pathway from a place, not a relationship with a firm. The incentive to invest in surveillance, pest-free areas, and place-of-production systems arises directly from this shared exposure.",
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'The signals available are unusually good, because plant health is built on notification. Pest reporting, changes to published import requirements, alterations to pest categorisation, and interception reporting by importing authorities are all part of how the system is designed to work, and they are observable to an exporter who watches the destinations they serve.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Requirements are per-destination and change',
          text: "What a destination requires for a commodity from an origin — which pests are regulated, which declarations are needed, which treatments are recognised — is set by that country and revised as its own pest situation and risk assessment change. A consignment prepared against last season's requirements is not prepared.",
        },
      ],
    },
  ],
  riskMechanism:
    "An importing country assesses a consignment of plant produce as a potential pathway for a regulated organism into its territory, and refuses entry when that pathway is not adequately closed. The refusal arises through two distinct triggers: interception, where a regulated organism or evidence of it is found on inspection at entry; and certification failure, where no pest is found but the phytosanitary certificate is absent, invalid, in the wrong form, missing a required additional declaration, or issued by an unrecognised body — so a pest-free consignment is inadmissible because the official attestation that the exporting authority inspected it against the destination's stated requirements is the mechanism of trust between two administrations, and a defective attestation leaves nothing to rely on. Whether an organism is regulated is a legal status conferred by the importing country's own pest categorisation rather than a property of the organism, so the same insect may be endemic and unremarkable at origin and quarantine-regulated at destination. The decision is taken under a deliberate asymmetry: a wrongly refused consignment costs the trade a bounded commercial loss, while a wrongly admitted consignment whose pest establishes imposes a potentially permanent cost on the importing country's own agriculture — outcomes that are not comparable, which is why a single specimen can end a consignment and why the burden sits on the exporter to demonstrate conformity. Disposal by treatment, re-export, or destruction is determined by the authority under its own rules. It propagates from consignment to origin: a pattern of interceptions is evidence to the importing authority about an origin's control system rather than about one exporter, and the response is increased inspection frequency, additional declarations or conditions, suspension of recognition for areas or places of production, or suspension of the trade — so an exporter with impeccable practice inherits the consequences of a neighbour's interception, because the authority regulates a pathway from a place.",
  chainStages: [
    'production',
    'assembly',
    'international-transport',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'Pest presence, distribution, or new records reported at origin through official plant-health reporting',
    'An importing authority amending its pest categorisation, regulated pest list, or import requirements for a commodity',
    'New additional declarations, treatment conditions, or place-of-production requirements introduced for an origin',
    'Interception reporting by importing authorities showing findings for the commodity and origin',
    'Inspection frequency at the port of entry raised for a commodity from a particular origin',
    'Recognition of a pest-free area, place of production, or exporter registration suspended or under review',
    'Consignments detained at entry pending plant-health inspection rather than clearing routinely',
    'Live pests, damage symptoms, or plant debris found during loading, container inspection, or pre-shipment inspection',
    'Certificates queried at entry for form, wording, dates, or missing declarations',
    'Pest pressure at origin reported as unusual for the season by growers or extension services',
    'A destination requiring pre-clearance, additional surveillance data, or systems-approach evidence it did not previously require',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    "This page lists no regulated pests, import requirements, additional declarations, or recognised treatments for any destination or commodity. Pest categorisation and import requirements are set by each importing country under its own risk assessment, are revised as its pest situation changes, and must be obtained from that country's national plant protection organisation.",
    'No treatment products, doses, schedules, or protocols are given. Treatment is a matter for the competent authority and the approved provider, and is outside the scope of a trade reference.',
    "Assessing exposure for a real chain requires that chain's own data: the commodity and its origin, the destinations served and their current requirements, the pest situation and surveillance data at the place of production, the certification arrangements in place, and the recognition status of any area or place of production relied upon.",
    "An interception is evidence about a consignment and a pathway. It is not a measure of an exporter's competence, and it is not a basis for comparing origins.",
    'AgricultureID is not a plant protection organisation, inspection body, or certifying authority, and this page confers no phytosanitary assurance of any kind.',
  ],
  affectedCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'oilseed',
    'pulse',
    'nut',
    'root-tuber',
    'spice',
    'beverage-crop',
    'fibre',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-clearance' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'palletisation' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The international plant-health framework, phytosanitary certification, pest categorisation, and the concepts of pest-free areas and places of production',
    },
    {
      sourceId: 'eppo',
      citedFor:
        'Regional plant-protection framework for pest listing, categorisation, and phytosanitary regulation',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework under which importing members apply plant-health measures and notify requirements',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Plant-health and trade context, including the institutional basis of national plant protection organisations',
    },
    {
      sourceId: 'cabi',
      citedFor:
        'Pest distribution and identification reference context for organisms regulated in trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The framework is international, but regulated pest lists, import requirements, additional declarations, and recognised treatments are set by each importing country and change as its own pest situation and risk assessment change.',
  limitations: [
    "A reference description of a mechanism, not a phytosanitary assessment, a statement of any country's requirements, or advice on any consignment.",
    'No regulated pests, import requirements, declarations, treatments, doses, or protocols are given. These are set by the national plant protection organisation of the destination and must be obtained from it.',
    "No interception rates, rejection frequencies, or origin comparisons are given, and no origin's plant-health system is characterised.",
    'Pest biology and management at origin are outside this scope and belong to the pest and crop pages; this entry describes the trade and quarantine mechanism only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Phytosanitary Rejection: Pathway Logic and Escalation',
    description:
      'How phytosanitary rejections arise: interception versus certification failure, and why a regulated pest is a legal status rather than a biological one.',
    keywords: [
      'phytosanitary rejection',
      'quarantine interception',
      'plant health',
      'phytosanitary certificate',
      'regulated pest',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
