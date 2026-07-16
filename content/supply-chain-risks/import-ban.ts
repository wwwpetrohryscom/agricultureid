import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const importBan: SupplyChainRiskContent = {
  id: 'supply-chain-risk-import-ban',
  slug: 'import-ban',
  contentType: 'supply-chain-risk',
  title: 'Import Ban',
  alternativeNames: [
    'Import prohibition',
    'Import suspension',
    'Market closure',
  ],
  category: 'Supply-chain risk',
  subcategory: 'Regulatory',
  riskClass: 'regulatory',
  summary:
    'An importing authority closes its market to a commodity from an origin. Unlike a consignment rejection, which ends one shipment, a ban removes a destination — and the exposure belongs to every exporter in the affected area, including those whose product was never implicated.',
  introduction: [
    {
      type: 'paragraph',
      text: "An import ban is a decision by an importing jurisdiction that a commodity, from a defined origin, may not enter. It may follow a disease or pest detection, a food-safety concern, a failure of confidence in an origin's control system, or a measure taken on grounds outside agriculture entirely. Whatever the trigger, the effect is structural rather than transactional: the market is not harder to enter, it is closed.",
    },
    {
      type: 'paragraph',
      text: 'The scope is what makes this risk behave unlike a rejection. A rejection is about a consignment and its properties. A ban is about an origin and its status, and it therefore applies to exporters who did nothing, whose product is sound, and who have no connection to the triggering event beyond a shared geography. Compliance offers no protection, because compliance was never the question. This is the feature that governs the entire mechanism and the reason it cannot be managed at consignment level.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Regulatory — market access at destination' },
    {
      label: 'Arises at',
      value: 'The importing jurisdiction, applied by its competent authority',
    },
    {
      label: 'Core mechanism',
      value:
        'Admissibility is withdrawn from an origin, removing a destination rather than a shipment',
    },
    {
      label: 'Scope is the point',
      value:
        'Applies by origin and status, not by consignment — sound product from a clean exporter is still excluded',
    },
    {
      label: 'Geography is regulatory',
      value:
        'The banned area is defined by the authority: a country, a zone, or a region, and it need not match the outbreak',
    },
    {
      label: 'Asymmetric timing',
      value:
        'Closure is immediate; reopening is negotiated and typically far slower',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'scope',
      heading: 'Scope, zoning, and the innocent exporter',
      body: [
        {
          type: 'paragraph',
          text: "The first question about any ban is what it applies to, and the answer is drawn by the importing authority rather than by the biology or the trade. A measure may cover an entire country, a defined zone within it, a region crossing borders, a species, a product form, or a set of establishments. Where that line falls decides who is affected, and it is a regulatory judgement made under the importing jurisdiction's own rules and its own assessment of the risk.",
        },
        {
          type: 'paragraph',
          text: 'The consequence is that a producer hundreds of kilometres from any incident, whose product is demonstrably sound, whose certification is current, and whose chain is fully traceable, can lose a market entirely. There is nothing they can do about it at consignment level, because the measure does not operate at consignment level. This is why the recognition of zoning, regionalisation, and compartmentalisation matters so much in animal-health and plant-health trade: those concepts exist precisely to allow a measure to be drawn narrowly enough that unaffected areas keep trading, and whether an importing authority recognises them determines whether an outbreak closes a district or a country.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A ban is about status, not about cargo',
          text: 'The distinction from a rejection is complete. A rejected consignment failed a test. A banned consignment is inadmissible because of where it is from, and it would be inadmissible however good it was.',
        },
      ],
    },
    {
      id: 'timing',
      heading: 'Closing is fast, opening is slow',
      body: [
        {
          type: 'paragraph',
          text: 'This asymmetry is the most operationally significant feature of the mechanism. Closure can be immediate, and often is, because it is a protective decision taken under conditions of uncertainty by an authority whose duty is to its own territory. Reopening is not the reverse of that decision; it is a separate process. It typically requires the exporting authority to demonstrate a changed situation, the importing authority to accept that demonstration, and the terms of resumed trade to be agreed — a sequence that involves evidence, assessment, and often negotiation between administrations.',
        },
        {
          type: 'paragraph',
          text: 'The practical result is that the duration of a ban is governed by the administrative process rather than by the underlying condition. A country may resolve the situation that triggered a measure and remain excluded while the demonstration is prepared and considered. For a chain, this means a ban should be understood as an indefinite loss of a market, not as a delay of known length, and the difference between those two framings is the difference between a disruption and a restructuring.',
        },
        {
          type: 'paragraph',
          text: "Cargo caught in transit occupies a specific and difficult position: it left an admissible origin and arrives at a closed border. Whether it may enter, must be re-exported, or must be destroyed depends on the measure's transitional provisions and on the authority's discretion — and while that is determined, the consignment sits, accruing cost and, if perishable, losing value.",
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates',
      body: [
        {
          type: 'paragraph',
          text: 'A ban removes a destination, and the supply that was going there has to go somewhere. That displaced volume enters the remaining markets, which are now supplied by more product than they were built to absorb, and the price falls — for the exporters who were never banned as well as for those who were. This is how a measure taken by one importing authority reaches producers on a different continent.',
        },
        {
          type: 'list',
          items: [
            'Displaced volume redirected into remaining markets, depressing prices there for all suppliers',
            'Domestic prices in the affected origin falling as export supply turns inward with nowhere else to go',
            'Following measures, as other importing authorities observing one closure consider their own',
            'Cargo in transit or afloat stranded, with disposal determined by the importing authority',
            'Contracts frustrated where delivery to the banned destination has become unlawful',
            'Freight and logistics rebooked onto different routes, and reefer or storage capacity requirements moving with the cargo',
          ],
        },
        {
          type: 'paragraph',
          text: "The third of these is the one that turns a bilateral measure into a market event. Importing authorities do not decide in isolation: a closure by one is information to others, and a sequence of closures can remove most of an origin's market within a short period, each decision taken independently and reasonably.",
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Bans are among the better-signalled risks, because the international system is built to notify. Animal-health and plant-health events are reported through established channels, measures are notified under the relevant trade agreements, and importing authorities publish their requirements. The signals therefore exist — official notifications, changes to published import conditions, suspension of establishment approvals, and increased check frequency, which often precedes a full measure.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Notification is not the same as prediction',
          text: "That an event has been notified tells you an authority is aware of it. Which importing authorities will act, how widely they will draw the scope, and for how long are sovereign decisions taken under each jurisdiction's own rules. Comparable events routinely produce different responses in different markets.",
        },
      ],
    },
  ],
  riskMechanism:
    "An importing authority withdraws admissibility from a commodity originating in a defined area, so the market closes rather than becoming harder to enter. The measure operates on origin and status rather than on a consignment and its properties: the scope — a country, a zone, a region, a species, a product form, or a set of approved establishments — is drawn by the importing authority under its own rules and its own risk assessment, and need not correspond to the extent of any underlying event. Consequently exporters whose product is sound, whose certification is current, and who have no connection to the trigger beyond shared geography lose the market entirely, and can do nothing at consignment level because the measure does not operate at that level; whether an importing authority recognises zoning, regionalisation, or compartmentalisation determines whether an event closes a district or a country. The timing is asymmetric: closure is immediate, taken protectively under uncertainty, while reopening is a separate administrative process requiring the exporting authority to demonstrate a changed situation, the importing authority to accept it, and terms to be agreed — so duration is governed by process rather than by the underlying condition, and a ban is an indefinite loss of a market rather than a delay of known length. Cargo in transit is caught between an admissible departure and a closed arrival, its disposal determined by transitional provisions and authority discretion while it accrues cost. It propagates by displacing volume into remaining markets, depressing prices there for banned and unbanned suppliers alike; by turning export supply inward and depressing the origin's domestic price; by frustrating contracts whose delivery has become unlawful; and by prompting further closures, since one authority's decision is information to others, and a sequence of independent reasonable decisions can remove most of an origin's market.",
  chainStages: ['border', 'international-transport', 'destination-market'],
  observableIndicators: [
    'Official notification of an animal-health or plant-health event to the relevant international body',
    'An importing authority notifying a new or amended measure under the applicable trade agreement',
    'Published import conditions or country lists for a commodity being amended',
    'Approval of exporting establishments suspended, withdrawn, or placed under review',
    'Check frequency at the border raised for a commodity and origin, often preceding a broader measure',
    'Additional certification, testing, or attestation required for consignments from an origin',
    'Consignments detained at ports of entry pending an admissibility decision rather than clearing routinely',
    'Other importing authorities publicly considering, consulting on, or announcing comparable measures',
    'Export line-ups and bookings from the affected origin to the affected destination ceasing',
    'Prices for the commodity falling in markets that remain open as displaced volume arrives',
    'Domestic prices in the affected origin falling as export supply turns inward',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page names, characterises, or predicts no country, authority, measure, or trade dispute, and gives no ban durations, frequencies, or trade-loss figures.',
    "Assessing exposure for a real chain requires that chain's own data: the destinations it depends on and their share of its sales, the measures currently in force there, whether that authority recognises zoning or regionalisation for the commodity, the establishment approvals held, the position of any cargo in transit, and the contractual terms governing an unlawful delivery.",
    "Import conditions are set by each importing jurisdiction, change without notice, and must be obtained from that authority's own current publications. Nothing here states the requirements of any market.",
    'That an event has been notified indicates an authority is aware of it, not that any importing authority will act. Scope, timing, and duration are sovereign decisions, and comparable events produce different responses in different jurisdictions.',
    'Whether a ban excuses contractual performance depends on the contract and its governing law, which this page does not interpret.',
  ],
  affectedCommodityClasses: [
    'livestock-product',
    'fruit',
    'vegetable',
    'cereal-grain',
    'nut',
    'spice',
    'beverage-crop',
    'root-tuber',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'customs-clearance' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework governing import measures, notification obligations, and the requirement that measures be based on scientific principles',
    },
    {
      sourceId: 'woah',
      citedFor:
        'International animal-health standards, including disease notification and the concepts of zoning and compartmentalisation used to define trade measures',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'International plant-health framework, including pest-free areas and phytosanitary import requirements',
    },
    {
      sourceId: 'codex',
      citedFor:
        'International food-safety reference framework against which importing authorities set food-safety import conditions',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Trade and food-security context for market closure affecting exporting countries',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any importing jurisdiction, but import conditions, the recognition of zoning, and the process for resuming trade are entirely country-specific and change without notice.',
  limitations: [
    'A reference description of a mechanism, not an assessment, prediction, or criticism of any country, authority, measure, or dispute.',
    'No measures in force are listed and no country is named. Import conditions must be obtained from the competent authority of the destination.',
    'No durations, frequencies, or trade-loss figures are given.',
    'Whether a measure is justified under international rules is a matter for the applicable dispute mechanisms and is not assessed here. Nothing on this page is legal, policy, or trade advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Import Ban: Scope, Asymmetric Timing, and Propagation',
    description:
      'How an import ban closes a market by origin rather than by consignment, why sound exporters are caught by scope, and why closing is fast and reopening slow.',
    keywords: [
      'import ban',
      'import prohibition',
      'market access',
      'SPS measure',
      'zoning regionalisation',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
