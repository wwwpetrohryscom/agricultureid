import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const counterpartyDefault: SupplyChainRiskContent = {
  id: 'supply-chain-risk-counterparty-default',
  slug: 'counterparty-default',
  contentType: 'supply-chain-risk',
  title: 'Counterparty Default',
  alternativeNames: ['Contract default', 'Performance failure', 'Washout'],
  category: 'Supply-chain risk',
  subcategory: 'Market',
  riskClass: 'market',
  summary:
    'The other side of a contract does not perform — it does not deliver, does not pay, or does not take delivery. What makes it a supply-chain risk rather than a credit one is that the physical consignment is somewhere, in some condition, while the dispute runs.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A commodity contract is a promise to do something later, and every party to one is relying on someone else to keep a promise. Default is the failure of that reliance: the seller does not ship, the buyer does not pay or does not take the cargo, or either party performs in a way the contract does not recognise as performance. It is the risk that connects all the others, because most disruptions ultimately arrive at a party who cannot do what they undertook to do.',
    },
    {
      type: 'paragraph',
      text: "The distinctively agricultural feature is that default has a physical object. A failed financial contract leaves a balance to settle; a failed commodity contract leaves a cargo that exists, that is somewhere specific, that is accruing storage or demurrage, and that in many cases is deteriorating while the parties argue about whose it is. The clock on the dispute and the clock on the cargo run at different speeds, and the cargo's is faster.",
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Market — performance and credit' },
    {
      label: 'Arises at',
      value:
        'Any contracted interface: producer to trader, trader to trader, seller to buyer',
    },
    {
      label: 'Core mechanism',
      value:
        'A party cannot or will not perform, and the obligation is replaced at whatever the market now costs',
    },
    {
      label: 'Agricultural distinction',
      value:
        'A physical consignment exists throughout, ageing and accruing cost while the dispute runs',
    },
    {
      label: 'Correlation is the danger',
      value:
        'Defaults cluster because the conditions that cause one cause many at once',
    },
    {
      label: 'Chain reaction',
      value:
        'A default is transmitted along a string of contracts, reaching parties with no relationship to the failure',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'forms',
      heading: 'Cannot perform, and will not perform',
      body: [
        {
          type: 'paragraph',
          text: 'Default divides into two mechanisms that need separating because their signals differ entirely.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cannot perform',
              description:
                'The party is unable. The crop failed, the funding was withdrawn, the currency cannot be obtained, the cargo was rejected at a border. The failure is a consequence of another risk arriving, and the counterparty is a transmitter rather than an originator.',
            },
            {
              term: 'Will not perform',
              description:
                'The party is able but the contract has become unattractive — the market has moved against it far enough that walking away, or forcing a renegotiation, costs less than performing. This is not a failure of capacity but a decision about incentives.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The second is why default is correlated with price rather than independent of it. A large adverse move makes performance expensive for every party on the same side of the market at once, so defaults do not arrive as scattered individual failures but in clusters, precisely when the party relying on performance most needs it. This is the single most important structural fact about the risk, and it defeats any assessment that treats counterparties as independent.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Default is often the delivery mechanism for another risk',
          text: 'A harvest shortfall, an export restriction, a rejection, or a currency control frequently reaches a distant party not as itself but as a counterparty who suddenly cannot perform. The default is the messenger.',
        },
      ],
    },
    {
      id: 'the-cargo-problem',
      heading: 'The cargo does not wait for the dispute',
      body: [
        {
          type: 'paragraph',
          text: 'When performance fails, the consignment is somewhere: standing at an origin, loaded on a vessel, sitting on a quay, in a bonded warehouse, in a reefer drawing power. It continues to incur storage, demurrage, and financing while the parties establish their positions, and if it is perishable it continues to lose value at a rate no negotiation affects.',
        },
        {
          type: 'paragraph',
          text: 'This creates a pressure that shapes outcomes more than the legal merits do. The party in possession must decide whether to mitigate — to sell the cargo onward, often into a market that knows it is distressed — before the entitlement to do so is settled. Acting protects the value and risks the claim; waiting protects the claim and destroys the value. The asymmetry is why commodity defaults settle commercially far more often than they are litigated, and why a party with the physical cargo occupies a different position from a party with only a contract.',
        },
        {
          type: 'paragraph',
          text: 'The consequences run beyond the two parties. A cargo that must be resold quickly enters the market at a discount, which moves the price for everyone. A default at a load port leaves a chartered vessel without cargo, transferring the problem to a shipowner who was never party to the sale. The distress radiates outward through whatever the defaulting trade was touching.',
        },
      ],
    },
    {
      id: 'strings',
      heading: 'Strings, and why the failure travels',
      body: [
        {
          type: 'paragraph',
          text: 'Commodity cargoes are frequently traded onward before they arrive, so a single physical consignment can carry a chain of contracts behind it. Each party in that string has bought from one and sold to another, and each is relying on the party behind to perform in order to perform in front.',
        },
        {
          type: 'paragraph',
          text: 'When one link fails, the failure does not stop there. Every party downstream must now source elsewhere or default in turn, and the effect passes along the string until it reaches someone with the resources to absorb it. The parties at the far end may have had no relationship with the original failure and no way of knowing their exposure to it — they contracted with a solvent, reputable counterparty who was themselves relying on someone else.',
        },
        {
          type: 'paragraph',
          text: 'This is the mechanism by which counterparty risk becomes systemic rather than bilateral. Assessing the party you contracted with is necessary and insufficient: the exposure that matters may sit two or three contracts away, with a party you cannot see and did not choose.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Default is rarely the first event. It is usually preceded by a period in which a party under strain behaves differently — slower payment, requests to change terms, reluctance to provide security, disputes raised on grounds that were previously accepted. These are observable to anyone actually trading with the party, and almost invisible to anyone else.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The strongest signal is behavioural, not financial',
          text: 'Published accounts are historical and available only for some counterparties. The signals that matter arrive first in the trading relationship: how promptly documents are presented, how payment terms are honoured, and whether the tone of ordinary business changes.',
        },
      ],
    },
  ],
  riskMechanism:
    'A party to a contract does not perform — fails to deliver, to pay, or to take delivery — and the obligation must be replaced at whatever the market now costs. The failure has two distinct origins: a party that cannot perform, because a crop failed, funding was withdrawn, foreign currency could not be obtained, or a consignment was rejected, in which case the counterparty is transmitting another risk rather than originating one; and a party that will not perform, because the market has moved far enough against the contract that walking away or forcing renegotiation costs less than performing. The second origin makes default correlated with price rather than independent of it: a large adverse move makes performance expensive for every party on the same side simultaneously, so defaults arrive in clusters exactly when the party relying on performance is least able to absorb them, which defeats any assessment treating counterparties as independent. The agricultural distinction is that a physical consignment exists throughout — standing at origin, loaded, on a quay, or drawing power — accruing storage, demurrage, and financing while entitlement is disputed, and losing value if perishable. The party in possession must therefore choose between mitigating, which protects value and risks the claim, and waiting, which protects the claim and destroys the value; this asymmetry, not the legal merits, drives most outcomes. The failure then travels along the string of contracts behind a cargo, since each party relies on the one behind in order to perform in front, so it propagates until it reaches a party able to absorb it — reaching parties with no relationship to the original failure and no visibility of their exposure to it. Distressed resale into a market that knows the cargo must move transmits the loss to price, and a default at a load port transfers the problem to a shipowner who was never party to the sale.',
  chainStages: [
    'assembly',
    'processing',
    'inland-transport',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'Payments arriving late, in part, or after repeated follow-up where they had previously been prompt',
    'Requests to extend credit terms, defer shipment, or change the delivery period',
    'Reluctance to provide, extend, or increase security, guarantees, or letters of credit',
    'A bank declining to confirm or advise an instrument for a counterparty it previously accepted',
    'Documents presented late, incomplete, or with discrepancies where presentation had been routine',
    'Contract disputes raised on grounds the party had previously accepted without objection',
    'Requests to renegotiate price or quality terms after a large adverse market movement',
    'A large price move against the side of the market a counterparty is committed on',
    'Vessels nominated and then not loaded, or laycans repeatedly extended',
    'Cargo offered for resale at an origin or afloat at a discount to comparable offers',
    'Trade-credit insurers reducing or withdrawing cover on a counterparty or a market',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no default rates, loss figures, or incident statistics, and names, characterises, or assesses no counterparty, firm, or market.',
    "Assessing exposure for a real chain requires that chain's own data: the counterparties actually contracted with, the terms and security held, the payment history in the relationship, the market position each party is committed on, the string behind each cargo where it is visible, and any credit cover in place.",
    'Counterparties cannot be treated as independent. Default correlates with market movement, so exposures that appear diversified across many parties may in fact be a single exposure to the same price move.',
    'The exposure that matters may sit several contracts away, with a party the assessing firm cannot see and did not choose. Assessment of a direct counterparty is necessary and does not bound the risk.',
    'Contractual rights on default, entitlement to mitigate, and the consequences of resale depend on the contract, the trade rules incorporated, and the governing law. Nothing here interprets any contract, and this page is not legal, credit, or commercial advice.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'beverage-crop',
    'fibre',
    'fruit',
    'nut',
    'livestock-product',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'Commodity trade and trade-finance structure, including the role of documentary instruments in cross-border performance',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Trade finance and contract-enforcement context affecting cross-border commodity transactions',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-information context in which price movements and supply disruptions that stress contractual performance are monitored',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grains and oilseeds trade and shipment reporting context for contracted cargoes',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to contracted trade, but contract rules, security practice, insolvency regimes, and enforcement are entirely jurisdiction- and contract-specific.',
  limitations: [
    'A reference description of a mechanism, not legal, credit, contractual, or commercial advice, and not an assessment of any counterparty or transaction.',
    'No default rates, loss figures, or incident statistics are given, and no firm, market, or jurisdiction is characterised.',
    'Contractual remedies, default clauses, and trade-association rules are not interpreted here; rights on default depend on the contract actually agreed and its governing law.',
    'Credit assessment methodology is outside this scope; the page explains why default happens and how it travels, not how to underwrite a counterparty.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Counterparty Default: Mechanism, Correlation, and Strings',
    description:
      'How counterparty default arises: cannot-perform versus will-not-perform, why defaults cluster with price moves, and how failure travels along a contract string.',
    keywords: [
      'counterparty default',
      'contract default',
      'commodity trade risk',
      'performance failure',
      'washout',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
