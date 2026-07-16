import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const traceabilityFailure: SupplyChainRiskContent = {
  id: 'supply-chain-risk-traceability-failure',
  slug: 'traceability-failure',
  contentType: 'supply-chain-risk',
  title: 'Traceability Failure',
  alternativeNames: ['Loss of lot identity', 'Traceability breakdown'],
  category: 'Supply-chain risk',
  subcategory: 'Information',
  riskClass: 'information',
  summary:
    'The chain cannot say where a product came from or where it went. Nothing is wrong with the product; what has failed is the ability to answer a question — and the cost of not answering is that every lot that might be affected is treated as though it were.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Traceability is the ability to follow a product backwards to its sources and forwards to its recipients. It is not a quality attribute and it does not make food safer by existing. Its value is entirely conditional: it does nothing at all until something goes wrong, and then it determines the size of the response. A chain that can trace answers a problem with a lot number. A chain that cannot answers it with everything it has.',
    },
    {
      type: 'paragraph',
      text: 'This makes traceability failure an unusual risk, because it never causes harm on its own. It is a multiplier. It sits dormant behind every other risk in this model — a contamination, a rejection, a fraud, a pest finding — and determines whether that event is bounded or unbounded. The failure and the loss occur at different times, and the failure is always earlier, usually by months, at a moment when the records concerned seemed like paperwork.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Information — identity and linkage' },
    {
      label: 'Core mechanism',
      value:
        'The link between a product and its origin or destination is broken, so the affected population cannot be defined',
    },
    {
      label: 'Nature of the risk',
      value:
        'A multiplier, not a hazard — it does nothing until another risk materialises',
    },
    {
      label: 'Two directions',
      value:
        'Backwards to source (why did this happen), forwards to recipients (what else is affected)',
    },
    {
      label: 'Where it breaks',
      value:
        'Aggregation, transformation, and repackaging — the points where lots merge or change form',
    },
    {
      label: 'Cost of failure',
      value:
        'The response expands to the largest population that cannot be excluded',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'the-multiplier',
      heading: 'Why it is a multiplier rather than a hazard',
      body: [
        {
          type: 'paragraph',
          text: "Consider a contamination confined to a single day's production from a single supplier. In a chain that retained lot identity, the response is proportionate: identify the lot, find where it went, recover it. The event is bounded by the facts.",
        },
        {
          type: 'paragraph',
          text: 'In a chain that lost identity, the same physical event produces a different response entirely — not because more product is affected, but because less can be excluded. The affected population is defined by what cannot be ruled out, and if the records cannot rule anything out, the population is everything the facility handled in the period. The physical problem is identical; the response is governed by the quality of the information, and so is the cost.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Recall scope is set by what you cannot exclude',
          text: 'This is the whole of the mechanism in one sentence. Nobody recalls product they know is affected — they recall product they cannot prove is unaffected. Traceability is the ability to prove exclusion, and its absence expands the response to the boundary of the doubt.',
        },
      ],
    },
    {
      id: 'where-it-breaks',
      heading: 'Where identity is actually lost',
      body: [
        {
          type: 'paragraph',
          text: 'Traceability rarely fails through records being destroyed. It fails at specific operations that are integral to how agricultural chains work, and it fails there by design rather than by accident.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Aggregation',
              description:
                'Produce from many growers is combined into one lot at an assembly point, an elevator, or a packhouse. This is the purpose of the facility — creating a tradeable homogeneous quantity — and it destroys individual identity unless something is deliberately built to preserve it.',
            },
            {
              term: 'Transformation',
              description:
                "Processing changes one input into several outputs, or many inputs into one. The mass balance links them, but the physical identity is gone; a mill's flour cannot be inspected to determine which field it came from.",
            },
            {
              term: 'Repackaging and re-lotting',
              description:
                'Product is transferred into new units with new codes. Unless the old and new codes are linked in a record, the chain restarts and everything before is unreachable.',
            },
            {
              term: 'Handover between parties',
              description:
                "Each party may trace within its own operation and record nothing that links its lots to the next party's. Full internal traceability at every stage can still produce a chain that cannot be traced end-to-end.",
            },
            {
              term: 'Bulk commingling',
              description:
                'Bulk cargo blended in a silo, a hold, or a barge. There is no physical unit to carry an identity, so the linkage is entirely documentary.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "The handover case deserves emphasis because it is readily misunderstood. Traceability is a property of a chain, not of a firm. Every participant can be individually compliant, keeping perfect records of what it received and what it dispatched, and the chain can still be untraceable — because nobody recorded the correspondence between one party's output lot and the next party's input lot. One-up, one-down traceability creates a chain only if every link is present; a single missing link is not a weak chain but two chains.",
        },
      ],
    },
    {
      id: 'claims',
      heading: 'When the claim depends entirely on the record',
      body: [
        {
          type: 'paragraph',
          text: 'For some attributes, traceability is not a response tool but the entire basis of the claim. Whether a crop was grown organically, whether a premium reached a producer group, whether a commodity came from land meeting a deforestation requirement, whether produce originates where a preference claim says it does — none of these are properties of the product that any analysis can reliably confirm. They are facts about history, and a record is the only evidence there is.',
        },
        {
          type: 'paragraph',
          text: "When the record fails for these attributes, the claim does not become uncertain — it becomes unsupportable. A genuinely organic consignment whose chain of custody is broken is, for market purposes, not organic, because the status was never in the product to begin with. This is why chain-of-custody certification exists as a discipline separate from product certification, and why identity-preserved and segregated handling command a premium: what is being paid for is the record, and the record is the product's only claim to what it says it is.",
        },
        {
          type: 'paragraph',
          text: 'The regulatory consequence follows the same logic. Where a jurisdiction requires evidence about production history for admissibility, a chain that cannot produce that evidence cannot enter the market, whatever the truth about the product.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it before it matters',
      body: [
        {
          type: 'paragraph',
          text: 'This is the one risk in the model that can be tested for directly, at any time, at no risk. A traceability exercise — pick a finished lot, trace it back to its inputs, then trace those inputs forward to every recipient, and time it — reveals the failure while it is still free to fix. Chains that conduct these exercises find their broken links in an office. Chains that do not find them during an incident, when the answer is needed within hours and every hour of doubt expands the population of product in question.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Having records is not the same as being able to use them',
          text: 'A chain can hold every record it needs, distributed across parties, formats, and systems that cannot be reconciled in the time an incident allows. Traceability that requires weeks to reconstruct is not traceability for the purpose it exists to serve.',
        },
      ],
    },
  ],
  riskMechanism:
    "The linkage between a product and its sources or its recipients is broken, so the chain cannot define the population of product affected by an event. Traceability is not itself a hazard and causes no harm on its own; it is a multiplier that sits dormant behind every other risk and determines whether that risk's consequence is bounded or unbounded. The governing principle is that a response is scoped by what cannot be excluded rather than by what is known to be affected: an identical physical contamination produces a lot-level recovery in a chain that retained identity and an unbounded one in a chain that did not, because the population expands to the boundary of the doubt. Identity is lost at operations integral to how agricultural chains work rather than through records being destroyed: aggregation, where produce from many growers is deliberately combined into a homogeneous tradeable lot — the facility's purpose — destroying individual identity unless something is built to preserve it; transformation, where processing links inputs and outputs only by mass balance and physical identity is gone; repackaging and re-lotting, where new codes restart the chain unless linked to the old; bulk commingling, where no physical unit exists to carry identity and linkage is wholly documentary; and handover between parties, a case that is readily misunderstood, since traceability is a property of a chain rather than of a firm — every participant can keep perfect internal records and the chain still be untraceable because nobody recorded the correspondence between one party's output lot and the next party's input lot, and a single missing link produces not a weak chain but two chains. For attributes that are facts about history rather than properties of the product — organic production, premium payment, land status, origin for a preference claim — no analysis can confirm the claim, so the record is the only evidence; when it fails the claim becomes unsupportable rather than uncertain, and a genuinely compliant consignment with a broken chain of custody is, for market and regulatory purposes, not compliant.",
  chainStages: [
    'production',
    'assembly',
    'processing',
    'inland-transport',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'A traceability exercise failing to link a finished lot to its inputs, or inputs to all recipients, within the time an incident would allow',
    'Lot codes not carried across a repackaging, re-lotting, or transfer step',
    'Received lot identifiers not recorded against the dispatched lots they contributed to',
    'Produce from multiple growers combined at assembly without grower-level identity being retained',
    'Records held in incompatible formats or systems across parties, requiring manual reconciliation',
    'Mass balance at a processing or aggregation step not reconciling between inputs and outputs',
    'Volume sold under a certified or identity-preserved claim exceeding what the certified inputs could yield',
    'A supplier unable to identify its own upstream source when asked',
    'Chain-of-custody documentation missing for one or more transfers in a certified chain',
    "Certification claims that cannot be confirmed against the scheme owner's register",
    'Time taken to answer a trace request measured in days or weeks rather than hours',
    'Recall or withdrawal scope being drawn by date range or facility rather than by lot',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no traceability requirements, record-retention periods, response-time expectations, or system specifications. What is required is set by the law of the jurisdictions concerned, by the applicable certification schemes, and by the contracts in force, and it differs by market and commodity.',
    "Assessing exposure for a real chain requires that chain's own data: the actual steps at which lots aggregate, transform, or are re-lotted; the identifiers recorded at each handover and whether they link across parties; the systems holding the records and whether they can be reconciled; the claims the chain makes that depend on records; and a tested measurement of how long a full trace actually takes.",
    'Traceability is a property of a chain, not of a firm. An assessment of any single participant, however thorough, does not establish that the chain is traceable, and full internal traceability at every stage is consistent with an untraceable chain.',
    "Holding records is not the same as being able to use them within the time an incident allows. An assessment based on the existence of records rather than on a timed exercise will overstate the chain's position.",
    'AgricultureID operates no traceability system and verifies no claim, chain of custody, or certification status.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'fruit',
    'vegetable',
    'nut',
    'spice',
    'beverage-crop',
    'livestock-product',
    'fibre',
    'sugar-crop',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'gs1',
      citedFor:
        'Traceability standards, identification keys, and the principles of linking lot identity across parties in a supply chain',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Food-hygiene and food-control framework in which traceability supports withdrawal and recall',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Food-safety management and chain-of-custody standards framework',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food-control systems and agricultural value-chain context for identity preservation and aggregation',
    },
    {
      sourceId: 'globalgap',
      citedFor:
        'Farm-assurance framework context for chain-of-custody and product-handling requirements',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic, but traceability requirements, record-retention obligations, and recall procedures are entirely jurisdiction-, scheme-, and commodity-specific.',
  limitations: [
    "A reference description of a mechanism, not a specification for a traceability system and not a statement of any jurisdiction's requirements.",
    'No requirements, retention periods, response times, identifiers, or system designs are given: they are set by law, by the applicable schemes, and by contract.',
    'No incident rates, recall statistics, or cost figures are given.',
    'Traceability system design, technology selection, and implementation are outside this scope; the page explains why the linkage matters and where it breaks.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Traceability Failure: The Multiplier Behind Every Other Risk',
    description:
      'Why traceability failure causes no harm alone but sets the scope of every response: recall is bounded by what cannot be excluded, and where identity is lost.',
    keywords: [
      'traceability failure',
      'lot identity',
      'chain of custody',
      'recall scope',
      'food traceability',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
