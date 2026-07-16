import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const informationAsymmetry: SupplyChainRiskContent = {
  id: 'supply-chain-risk-information-asymmetry',
  slug: 'information-asymmetry',
  contentType: 'supply-chain-risk',
  title: 'Information Asymmetry',
  alternativeNames: ['Unequal information', 'Market information gap'],
  category: 'Supply-chain risk',
  subcategory: 'Information',
  riskClass: 'information',
  summary:
    'One party to a transaction knows materially more than the other about the goods, the market, or the conditions. The better-informed party captures value the other cannot see it losing — and because nothing visibly goes wrong, the loss is never recorded as a loss.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every transaction rests on what each side knows. In agricultural chains the sides frequently know very different things: a producer knows their crop and their field; a buyer knows a dozen origins, the freight market, the destination demand, and what the last twenty lots traded at. Neither is concealing anything. The knowledge is simply distributed unequally by the structure of the chain, and it is distributed the same way every time.',
    },
    {
      type: 'paragraph',
      text: 'What makes this a supply-chain risk rather than an economic curiosity is that it has consequences a chain can feel: a price that fails to reflect quality, an investment that is never made because its return is invisible, a producer who exits a crop that was in fact profitable, a buyer who accepts a lot they would have refused had they known what was in it. It also has a defining feature that separates it from every other risk in this model — it produces no incident. Nothing is rejected, nothing is delayed, nothing breaks. The transaction completes, both parties record it as normal business, and the loss is never attributed to anything because it was never observed.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Information — distribution of knowledge' },
    {
      label: 'Core mechanism',
      value:
        'One party knows materially more, and the transaction settles on terms the other cannot evaluate',
    },
    {
      label: 'Defining feature',
      value:
        'It produces no incident — the trade completes and nothing appears to go wrong',
    },
    {
      label: 'Runs both directions',
      value:
        "Sellers know their goods; buyers know the market. Each is uninformed about the other's domain",
    },
    {
      label: 'Structural driver',
      value:
        'Chain length, aggregation, and the cost of measurement, not concealment',
    },
    {
      label: 'Second-order effect',
      value:
        'Quality that cannot be verified is not paid for, so it stops being produced',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'both-directions',
      heading: 'The asymmetry runs both ways',
      body: [
        {
          type: 'paragraph',
          text: 'It is tempting to frame this as a story about powerful buyers and uninformed farmers, and that framing gets the mechanism wrong by making it about parties rather than about structure. Information is unequal in both directions, and each side is uninformed precisely where the other is expert.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'What the seller knows better',
              description:
                'The goods. How the crop was grown, what was applied and when, how it was stored, whether it was rewetted, whether this lot is the good one or the one that had a problem. A buyer cannot see any of this and can only test for some of it.',
            },
            {
              term: 'What the buyer knows better',
              description:
                'The market. What other origins are offering, what the destination will pay, what freight costs, what the lot is worth downstream, and what the last comparable trades cleared at.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Each gap produces a different failure. Where the seller knows more about the goods, the buyer cannot distinguish quality and must price for the average — which is the classic result, and its consequence is that above-average goods are systematically underpaid. Where the buyer knows more about the market, the seller cannot evaluate whether an offer is good and must accept or decline on incomplete information.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'This is structure, not conduct',
          text: 'Asymmetry arises from chain length, aggregation, and the cost of measuring things — not from anyone withholding anything. A party can be entirely honest and still be the better-informed side of every trade they make. Treating the mechanism as misconduct misidentifies both the cause and the remedy.',
        },
      ],
    },
    {
      id: 'quality-that-vanishes',
      heading: 'Why unverifiable quality stops being produced',
      body: [
        {
          type: 'paragraph',
          text: 'The most consequential effect of the mechanism is not on any individual transaction but on what gets grown, and the logic is worth following carefully because it runs against intuition.',
        },
        {
          type: 'paragraph',
          text: "Suppose a quality attribute is real, valuable at destination, and cannot be verified at the point where the producer sells. The buyer at that point cannot pay for what they cannot verify — not because they are unwilling, but because paying a premium on an unverifiable claim invites every seller to make the claim. So the attribute earns nothing at the farm gate. The producer, observing that the effort and cost of producing it are not rewarded, stops producing it. The attribute disappears from the origin's supply, and it disappears because it could not be measured, not because it was not wanted.",
        },
        {
          type: 'paragraph',
          text: 'This is why measurement infrastructure — grading, testing, certification, and the institutions that make a claim credible — is not administrative overhead sitting on top of a chain. It is the thing that determines what the chain is capable of producing. An origin without credible measurement cannot sell quality it genuinely has, and over time it stops having it. The investment in a grading system is an investment in the existence of the grades.',
        },
      ],
    },
    {
      id: 'transmission',
      heading: 'Where information fails to travel',
      body: [
        {
          type: 'paragraph',
          text: 'Information moves along a chain the way anything else does, and it degrades at each handover. A destination market signal — a preference for a variety, a specification change, a quality requirement — has to travel back through importers, exporters, aggregators, and traders to reach the person who decides what to plant. Each step is an opportunity for the signal to be lost, delayed, or arrive after the planting decision that it needed to inform.',
        },
        {
          type: 'list',
          items: [
            'Price signals arriving after the decision they should have informed, most acutely at planting',
            'Quality specifications that reach an aggregator and stop, never reaching the growers who could meet them',
            'Grade requirements expressed in terms that cannot be measured at the point of sale',
            'Production information that cannot travel forward because aggregation destroyed the lot identity carrying it',
            'Long chains where each intermediary passes on a price but not the reason for it',
          ],
        },
        {
          type: 'paragraph',
          text: 'The fourth of these connects this risk directly to traceability. Information about a lot — how it was grown, what it contains, what it is — can only travel with the lot if the lot retains an identity. Aggregation is therefore not only a traceability event but an information event: it pools the identity, and the knowledge attached to it is discarded at the same moment. The two risks are the same structural fact seen from different angles.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it',
      body: [
        {
          type: 'paragraph',
          text: 'The observation problem is severe and is the point. Because no incident occurs, there is nothing to investigate and no event to attribute a loss to. The signals are structural — they describe conditions under which the mechanism operates, not occurrences of it — and they are visible mainly to someone deliberately looking at the shape of the chain rather than at its performance.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A market can function smoothly and still be failing',
          text: 'Every trade clearing, no disputes arising, and both parties returning next season are consistent with a market in which one side systematically cannot evaluate what it is agreeing to. Smooth operation is not evidence that information is adequate.',
        },
      ],
    },
  ],
  riskMechanism:
    "The parties to a transaction hold materially different knowledge about the goods, the market, or the conditions, so the trade settles on terms one party cannot properly evaluate. The asymmetry is structural rather than conduct-driven, arising from chain length, aggregation, and the cost of measurement, and it runs in both directions: the seller knows the goods — how the crop was grown, what was applied, how it was stored, whether this lot is the sound one — which a buyer can neither see nor fully test; the buyer knows the market — competing origins, destination demand, freight, downstream value, and comparable trades — which the seller cannot access. Each gap fails differently: where quality cannot be distinguished, a buyer must price for the average, so above-average goods are systematically underpaid; where the market cannot be evaluated, a seller must accept or decline on incomplete information. The most consequential effect operates on production rather than on any transaction: a real, valuable attribute that cannot be verified where the producer sells earns nothing there, because paying a premium on an unverifiable claim would invite every seller to make it — so the producer, observing that the effort is unrewarded, ceases to produce the attribute, and it disappears from the origin's supply because it could not be measured rather than because it was not wanted. Measurement infrastructure therefore determines what a chain is capable of producing rather than merely describing it. Information also degrades in transmission: destination signals must travel back through importers, exporters, aggregators, and traders to reach the planting decision, and are lost, delayed, or arrive too late at each step, while aggregation discards the lot identity that production knowledge would otherwise travel with — making this and traceability failure the same structural fact from different angles. The defining feature is that the mechanism produces no incident: nothing is rejected, delayed, or broken, the transaction completes, both parties record normal business, and the loss is never attributed because it was never observed.",
  chainStages: ['production', 'assembly', 'processing', 'destination-market'],
  observableIndicators: [
    'Farm-gate prices at an origin showing little differentiation between lots of materially different quality',
    'A quality attribute valued at destination attracting no premium at the point of first sale',
    'Producers ceasing to produce an attribute or variety that remains in demand downstream',
    'No independent grading, testing, or measurement available to producers at the point of sale',
    'Grade or specification terms expressed in ways that cannot be verified where the transaction occurs',
    'Price information at an origin available only from the counterparty proposing the transaction',
    'Many intermediaries between producer and exporter, each passing a price without the reason for it',
    'Destination specification changes reaching aggregators but not the growers who would act on them',
    "Planting decisions being made before the season's price or demand information is available",
    'Lot identity and production records discarded at aggregation, so information cannot travel with the goods',
    'Buyers applying wide discounts or refusing lots outright rather than pricing observed characteristics',
    'Absence of published reference prices, official statistics, or market reporting for a commodity or origin',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page names no party, firm, origin, or market as better or worse informed, and gives no price gaps, premium figures, margin data, or measures of information disparity.',
    "Assessing exposure for a real chain requires that chain's own data: who holds what information at each transaction point, what measurement is available where the goods change hands, the number of intermediaries, what price and specification information reaches producers and when, whether lot identity survives aggregation, and how destination signals are transmitted back.",
    'The indicators listed describe structural conditions under which the mechanism operates. They are not observations of it occurring, and they are not evidence that any party has behaved improperly.',
    'Because the mechanism produces no incident, it cannot be assessed from disruption records, dispute rates, or rejection data. A chain with no observed problems may be one in which the mechanism operates unimpeded, and smooth operation is not evidence that information is adequate.',
    'Information asymmetry is a structural feature of chains and not, in itself, misconduct. Nothing here characterises any commercial relationship, and it is not a basis for any allegation, competition analysis, or legal claim.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'beverage-crop',
    'spice',
    'nut',
    'fruit',
    'vegetable',
    'fibre',
    'livestock-product',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'draught-survey' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'amis',
      citedFor:
        'Market-transparency framework established on the premise that shared, timely information reduces disorderly market outcomes',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Agricultural market information systems and value-chain context for price transmission to producers',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market and policy analysis context, including price transmission along the chain',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Agricultural value-chain and market-institution context for smallholder access to information',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Commodity market structure and intermediation context for producers in developing countries',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Trade and market-intelligence context for exporters accessing destination-market information',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any chain with intermediation and imperfect measurement, but its extent depends on the market institutions, grading systems, and information services present in each place.',
  limitations: [
    'A reference description of a mechanism, not an assessment or characterisation of any market, chain, party, or commercial relationship.',
    'No price gaps, premiums, margins, or measures of information disparity are given, and no origin or market is characterised.',
    'Information asymmetry is a structural feature and not, in itself, misconduct. Nothing here supports any allegation, competition analysis, or claim against any party.',
    'The economics of asymmetric information are summarised at the level a supply-chain reference requires, without reproducing the theoretical literature or its formal results.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Information Asymmetry: The Risk That Produces No Incident',
    description:
      'How unequal information affects a chain: why it runs in both directions, why unverifiable quality stops being produced, and why nothing visibly fails.',
    keywords: [
      'information asymmetry',
      'market information',
      'price transmission',
      'agricultural value chain',
      'quality verification',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
