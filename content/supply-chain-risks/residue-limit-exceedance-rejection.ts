import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const residueLimitExceedanceRejection: SupplyChainRiskContent = {
  id: 'supply-chain-risk-residue-limit-exceedance-rejection',
  slug: 'residue-limit-exceedance-rejection',
  contentType: 'supply-chain-risk',
  title: 'Residue Limit Exceedance Rejection',
  alternativeNames: ['MRL exceedance', 'Pesticide residue rejection'],
  category: 'Supply-chain risk',
  subcategory: 'Quality and integrity',
  riskClass: 'quality-integrity',
  summary:
    'A consignment is refused because a residue result exceeds the limit the importing jurisdiction applies. The defining feature is that limits differ between destinations, so the same crop, grown lawfully and exactly as approved, can be compliant in one market and inadmissible in another.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A maximum residue limit is the highest concentration of a substance legally permitted in a commodity in a given jurisdiction. It is not a toxicological threshold at which harm begins. It is, in the ordinary case, derived from what remains when a plant protection product is used correctly according to its authorised conditions — so it functions primarily as a check that the product was used as approved, and it is set with a safety assessment ensuring that residues at that level are acceptable.',
    },
    {
      type: 'paragraph',
      text: 'That construction has a consequence which drives the entire risk. Because a limit reflects the approved use pattern in the jurisdiction that set it, and because jurisdictions approve different products for different crops under different conditions, limits diverge between markets. A grower who followed the label exactly, using a product lawfully registered for that crop in their own country, can produce a crop that is entirely compliant at home and inadmissible at a destination that never approved that product. No rule was broken. The crop is simply in the wrong market.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Quality and integrity — residue non-compliance' },
    {
      label: 'Nature of a limit',
      value:
        'A legal permitted concentration, not a threshold at which harm begins',
    },
    {
      label: 'Usually derived from',
      value:
        'The residue expected when a product is used according to its authorised conditions',
    },
    {
      label: 'Why it diverges',
      value:
        'Jurisdictions approve different products and uses, so limits differ between destinations',
    },
    {
      label: 'Key implication',
      value:
        'Lawful use at origin does not guarantee admissibility at destination',
    },
    {
      label: 'Compliance is per-market',
      value:
        'The destination must effectively be chosen before the spray programme, not after harvest',
    },
    {
      label: 'No limits given here',
      value:
        'Limits are jurisdiction-specific, versioned, and set by the competent authority',
    },
  ],
  sections: [
    {
      id: 'no-limits-here',
      heading: 'Why this page gives no limit values',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'Limits are set by the competent authority, not by this page',
          text: 'Maximum residue limits are jurisdiction-specific, substance-specific, and commodity-specific, and they are amended regularly as approvals, assessments, and default provisions change. The only limit that governs a consignment is the one in force in the importing jurisdiction at the moment of the decision. AgricultureID reproduces no MRL, no residue table, and no default value, and names no substance and no product. Obtain the applicable limits from the competent authority for the destination, or from the Codex standard where the destination applies it.',
        },
        {
          type: 'paragraph',
          text: "The reason for this is stricter than editorial caution. Residue limits are amended frequently, they interact with approval decisions that change independently, and the difference between two jurisdictions' figures for the same substance and crop is precisely the thing that causes rejections. A value reproduced here would be wrong for most readers, out of date for the rest, and — because it would look authoritative — used. The structural facts about how limits work are stable and genuinely useful. The numbers are neither, and they belong to the authority.",
        },
      ],
    },
    {
      id: 'divergence',
      heading: 'Why limits diverge, and why that is the whole risk',
      body: [
        {
          type: 'paragraph',
          text: 'The divergence is not an accident or an inconsistency to be tidied up. It follows directly from how limits are constructed. An authority approves a product for a crop under specified conditions, establishes what residue that use leaves, satisfies itself that the residue is acceptable, and sets a limit accordingly. A different authority, facing different pests, different climates, and different agronomy, approves different products under different conditions — and sets different limits, entirely properly.',
        },
        {
          type: 'paragraph',
          text: 'Two situations follow, and they behave differently.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Different limits for an approved substance',
              description:
                "Both jurisdictions permit the substance on the crop but at different levels, reflecting different approved uses. A residue lawful at origin may exceed the destination's limit.",
            },
            {
              term: 'No approval at destination',
              description:
                'The destination has never approved the substance for that crop, so no use-derived limit exists and a default provision applies. This is the harder case, because the applicable level is typically at or near the limit of what analysis can detect, and effectively no residue is tolerated.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The second case is where growers are most often caught, and it is deeply counter-intuitive: the problem is not that the destination decided the substance was dangerous at that level. It is that the destination never considered it, because nobody sought an approval for a use that does not occur there. The absence of a decision, not an adverse decision, is what closes the market.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Import tolerances exist for this reason',
          text: 'Mechanisms exist by which an exporter can seek a limit in an importing jurisdiction for a use approved only at origin. That such mechanisms exist is a structural fact worth knowing; whether one applies, and how it is sought, is a matter for the competent authority concerned.',
        },
      ],
    },
    {
      id: 'timing',
      heading: 'The decision is made before the crop is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Residue exposure has a property that distinguishes it sharply from most quality risks: it is determined months before the consignment exists, and it cannot be corrected afterwards. A residue results from what was applied, at what rate, and how long before harvest. By the time a crop is picked, the residue position is fixed. Sorting does not change it, storage does not meaningfully change it, and there is no downstream operation that brings a crop into compliance with a limit it exceeds.',
        },
        {
          type: 'paragraph',
          text: "This means the destination must, in effect, be chosen at the point the crop protection programme is planned. A grower producing for a market with restrictive limits must plan the programme against that market's requirements from the start — and a grower who plans for one market and later needs to sell into another may find the second market closed, not because anything went wrong, but because the decision that governed admissibility was taken before the alternative was contemplated.",
        },
        {
          type: 'paragraph',
          text: "A further complication is that the exposure is not solely the grower's to control. Spray drift from a neighbouring holding, a contaminated container or vehicle, carry-over in shared handling equipment, or commingling of lots at an assembly point can all introduce a residue the grower never applied. Where produce from many growers is aggregated, a residue position becomes a property of the pooled lot rather than of any individual's practice, and the traceability system is what determines whether the source can be identified at all.",
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'What a rejection sets in motion',
      body: [
        {
          type: 'paragraph',
          text: 'The consignment is detained and must then be re-exported to a market whose limits it meets, diverted to a use the authority permits, or destroyed. Unlike some quality problems, there is rarely a remedial option, because the residue is in the product.',
        },
        {
          type: 'paragraph',
          text: 'Beyond the consignment, the propagation mirrors other border-control mechanisms: findings inform the importing authority about an origin, and authorities respond by raising check frequency or imposing additional testing requirements on comparable consignments from that origin. Exporters who did nothing inherit longer clearance and additional cost. Commercially, many buyers apply their own residue requirements that are more restrictive than the law of their market, so a consignment can be legally admissible and commercially unsellable — and for a grower those private requirements are frequently the operative constraint, not the regulation.',
        },
      ],
    },
  ],
  riskMechanism:
    "An importing jurisdiction refuses a consignment because a residue result exceeds the maximum residue limit it has set in law. A limit is a legal permitted concentration rather than a threshold at which harm begins: it is ordinarily derived from the residue expected when a plant protection product is used under its authorised conditions, and functions as a check that the product was used as approved. Because each jurisdiction approves different products for different crops under different conditions — reflecting its own pests, climate, and agronomy — limits diverge properly between markets, and a crop grown in exact compliance with a lawful label at origin can be inadmissible at a destination that approved neither that product nor that use. Two cases arise: different limits where both jurisdictions permit the substance, and, more severely, no approval at destination, where no use-derived limit exists and a default provision applies at or near the limit of analytical detection, so that effectively no residue is tolerated. The second is counter-intuitive because the market is closed by the absence of a decision rather than by an adverse one — nobody sought an approval for a use that does not occur there. The exposure is fixed months before the consignment exists, since the residue follows from what was applied, at what rate, and how long before harvest, and no downstream sorting, storage, or handling operation brings a crop into compliance; the destination must therefore effectively be chosen when the crop protection programme is planned. It is also not solely within the grower's control: drift from adjacent holdings, contaminated containers, vehicles, or shared handling equipment, and commingling at assembly can introduce residues never applied, so that in aggregated lots the residue position is a property of the pool rather than of any individual's practice, and traceability determines whether a source can be identified. A rejection propagates as detention followed by re-export, permitted diversion, or destruction; as increased check frequency or additional testing imposed on comparable consignments from the same origin, which exporters uninvolved in the finding inherit; and commercially through private buyer specifications that are frequently more restrictive than the law of the destination, so a consignment can be legally admissible and commercially unsellable.",
  chainStages: [
    'production',
    'assembly',
    'processing',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'The destination amending its residue limits, default provisions, or approvals for substances used on the crop',
    'An approval withdrawn, restricted, or allowed to lapse in a destination market, changing the applicable limit',
    'Buyers issuing or tightening private residue specifications more restrictive than the law of their market',
    'Check frequency at the border raised, or additional testing or certification required for the commodity and origin',
    'Consignments detained at entry pending residue analysis rather than clearing routinely',
    'Pre-shipment and destination residue results on the same consignment diverging',
    'Results detected close to the level the destination applies, so that ordinary analytical variability decides the outcome',
    "Residues detected that correspond to no product recorded in the grower's application records",
    'Unusual pest pressure at origin prompting applications outside the planned programme',
    'Produce from multiple growers commingled at an assembly point without lot-level identity being retained',
    'Shared harvesting, handling, or transport equipment used between crops or holdings with different programmes',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no maximum residue limits, default values, or residue data, reproduces no MRL table, and names no substance or product. Limits are jurisdiction-, substance-, and commodity-specific, are amended regularly, and only the limit in force in the importing jurisdiction at the time of the decision governs a consignment. Obtain them from that competent authority, or from the Codex standard where the destination applies it.',
    'No plant protection product, application rate, timing, or pre-harvest interval is given or implied. What may be applied, at what rate, and when is determined by the product authorisation in force in the jurisdiction of use, and by the label, which is a legal document.',
    "Assessing exposure for a real chain requires that chain's own data: the destinations served and their current limits and approvals for every substance in the programme, the programme actually applied with dates and rates, the authorisations in force at origin, the private specifications of the buyers concerned, the aggregation and lot-identity arrangements, and any import tolerance held.",
    'Analytical results carry measurement uncertainty, and results near an applicable level may be decided by that uncertainty. No inference should be drawn from a single figure without knowing the method, its performance characteristics, and how the sample was taken.',
    'Private buyer specifications frequently differ from, and are more restrictive than, the law of the destination. Legal admissibility and commercial acceptability are different questions with different answers.',
    'AgricultureID is not a competent authority, laboratory, or certification body, and this page confers no conformity assessment and supports no compliance claim.',
  ],
  affectedCommodityClasses: [
    'fruit',
    'vegetable',
    'cereal-grain',
    'oilseed',
    'pulse',
    'nut',
    'beverage-crop',
    'spice',
    'root-tuber',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The international framework for maximum residue limits, including how limits are established from approved use patterns (framework only; no values reproduced)',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Scientific framework for residue risk assessment and the review of maximum residue levels in the EU context',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework under which importing members apply and notify food-safety measures including residue limits',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU import-control context in which residue checks are applied to consignments at entry',
    },
    {
      sourceId: 'globalgap',
      citedFor:
        'Farm-assurance framework context in which crop protection records and residue management are audited',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Pesticide management and international code-of-conduct context for authorised use at origin',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic, but limits, approvals, default provisions, and import tolerances are entirely jurisdiction-specific, are set by the competent authority, and change regularly.',
  limitations: [
    'A reference description of a mechanism, not a food-safety assessment, a compliance opinion, or advice on any consignment, programme, or product.',
    'No residue limits, default values, substances, products, application rates, timings, or pre-harvest intervals are given. Limits are set in law by the importing jurisdiction; permitted use is set by the authorisation and label in force where the product is applied.',
    "No rejection rates or residue statistics are given, and no origin's residue performance is characterised.",
    'Crop protection practice and pest management are outside this scope and belong to the crop and pest pages; this entry describes the trade and admissibility mechanism only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Residue Limit Exceedance: Why Lawful Crops Are Rejected',
    description:
      'How MRL exceedance rejections arise: why limits derive from approved uses, why they diverge between markets, and why the exposure is fixed before harvest.',
    keywords: [
      'MRL exceedance',
      'residue limit rejection',
      'maximum residue limit',
      'pesticide residue',
      'import rejection',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
