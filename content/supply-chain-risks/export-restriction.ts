import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const exportRestriction: SupplyChainRiskContent = {
  id: 'supply-chain-risk-export-restriction',
  slug: 'export-restriction',
  contentType: 'supply-chain-risk',
  title: 'Export Restriction',
  alternativeNames: ['Export ban', 'Export controls', 'Export tax'],
  category: 'Supply-chain risk',
  subcategory: 'Regulatory',
  riskClass: 'regulatory',
  summary:
    'A producing government limits what may leave the country. Supply that physically exists becomes unavailable to the world market by decision rather than by shortage, and the restriction can take effect faster than any cargo can move.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An export restriction is a measure by which a government limits the outward movement of a commodity — through an outright prohibition, a licensing requirement, a quota, a minimum export price, a duty, or a domestic supply obligation. Its purpose is usually domestic: to hold supply at home when a government judges that its own consumers face shortage or unaffordable prices. From inside the producing country it is a food-policy instrument. From outside it is a supply-chain event.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes this risk from a production shortfall is that the tonnes exist. There is no agronomic problem, no failed harvest, no damaged cargo — the commodity is in the country, in condition, and cannot lawfully leave. That difference matters operationally, because it means the constraint can appear and disappear at the speed of an administrative decision rather than at the speed of a growing season, and because it means the exposure is legal rather than physical.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Regulatory — market access at origin' },
    {
      label: 'Arises at',
      value:
        'The border of the exporting country, applied by the producing government',
    },
    {
      label: 'Core mechanism',
      value:
        'Existing supply is withheld from the world market by administrative decision, not by shortage',
    },
    {
      label: 'Instrument varies',
      value:
        'Prohibition, licensing, quota, minimum export price, export duty, or domestic supply obligation',
    },
    {
      label: 'Speed',
      value:
        'Can take effect faster than a cargo can be assembled, loaded, or cleared',
    },
    {
      label: 'Self-amplifying',
      value:
        'Restriction by one exporter raises prices, which increases the incentive for others to restrict',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'instruments',
      heading: 'The instrument determines the behaviour',
      body: [
        {
          type: 'paragraph',
          text: 'Export restriction is a category, not a measure, and the instruments inside it behave differently enough that treating them as one thing is misleading.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Prohibition',
              description:
                'The commodity may not be exported. Binary, immediate, and unambiguous — the easiest form to observe and the hardest to work around.',
            },
            {
              term: 'Licensing or registration',
              description:
                'Export is permitted only with authorisation. The restriction is exercised through the rate at which authorisations are granted, so it can tighten without any announcement and is far harder to observe than a prohibition.',
            },
            {
              term: 'Quota',
              description:
                'A defined quantity may leave. Creates a race to ship, and the quota is exhausted by whoever moves fastest rather than by whoever contracted first.',
            },
            {
              term: 'Export duty or minimum export price',
              description:
                'Export remains lawful but uneconomic at some level. Not a prohibition in law and frequently one in effect, and its bite changes as the market moves without any further decision being taken.',
            },
            {
              term: 'Domestic supply obligation',
              description:
                'A share of production must be sold locally before export is permitted. Ties export eligibility to a separate compliance record, which becomes the constraint.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The quiet forms are the consequential ones',
          text: 'A prohibition is announced and reported. A slowdown in licence issuance produces the same physical result and is visible only to applicants. Exposure assessments that watch for announcements systematically miss the mechanism that is actually operating.',
        },
      ],
    },
    {
      id: 'timing',
      heading: 'The timing problem',
      body: [
        {
          type: 'paragraph',
          text: 'The defining operational feature is the mismatch between decision speed and cargo speed. A measure can be adopted and in force within days. A cargo takes weeks to assemble from the interior, position at a port, load, and clear. So a restriction routinely arrives while consignments are mid-chain: contracted and not yet assembled, at the port and not yet loaded, loaded and not yet cleared, or cleared and not yet sailed.',
        },
        {
          type: 'paragraph',
          text: 'Where a measure sits relative to that sequence determines everything about its effect, and this is why transitional provisions matter more than the headline. A measure that exempts cargo already loaded produces one outcome; a measure that exempts cargo with a registered contract produces another; a measure with no transitional provision strands everything in flight. The same restriction, differently transitioned, is a different event.',
        },
        {
          type: 'paragraph',
          text: 'For the seller, the consequence is immediate and specific: an obligation to deliver that has become unlawful to perform. Whether that is an excuse or a breach depends on the contract, the clause, and the governing law — and the answer decides who bears a loss that neither party caused.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates and why it spreads',
      body: [
        {
          type: 'paragraph',
          text: "The first-order effect is on importers dependent on that origin, who must source elsewhere, and on the price, which reflects that supply has left the tradeable pool without leaving the world. The second-order effect is on the origin's own producers, who now face a domestic price disconnected from the international one — which is the intended effect for consumers and an unintended transfer away from farmers.",
        },
        {
          type: 'paragraph',
          text: 'The important dynamic is the third: restriction is contagious, through a mechanism that is straightforward and uncomfortable. A restriction by one significant exporter reduces available supply and raises world prices. Higher world prices increase the domestic-price pressure felt by other exporting governments, which strengthens the case for them to restrict too. Each government acts reasonably in its own domestic terms, and the collective result is a tighter market than any of them faced individually. Importing countries, observing this, buy earlier and larger than they need, which tightens the market further.',
        },
        {
          type: 'paragraph',
          text: 'This is why export restrictions are treated as a matter of international concern rather than purely as domestic policy, and why transparency mechanisms exist to report them. The risk is not simply that one origin closes; it is that origins close in sequence, and the sequence is driven by the effects of the earlier closures.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'The observable sequence rarely begins with a measure. It begins with the domestic conditions that create the pressure: local food-price movement, currency weakness raising import costs, reserve or stock positions, and public commentary about domestic availability. Then come the intermediate steps — consultations, stock-release announcements, registration requirements — and only then the measure itself. By the time a restriction is notified, the observable part of the mechanism has been running for some time.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Pressure is not policy',
          text: 'Domestic price pressure indicates that the conditions in which restrictions have historically been considered are present. It does not indicate that any government will act, and governments facing similar conditions do different things. Reading pressure as a forecast is speculation about a sovereign decision.',
        },
      ],
    },
  ],
  riskMechanism:
    "A producing government limits the outward movement of a commodity so that supply which physically exists, in condition, inside the country becomes unavailable to the world market by administrative decision rather than through shortage. The instrument determines the behaviour: a prohibition is binary and observable; licensing exercises the restriction through the rate at which authorisations are granted, so it can tighten with no announcement and is visible only to applicants; a quota creates a race to ship in which the fastest rather than the earliest-contracted are served; an export duty or minimum export price leaves export lawful but uneconomic, with a bite that changes as the market moves without any further decision; and a domestic supply obligation makes export eligibility contingent on a separate compliance record. The defining operational feature is that decision speed exceeds cargo speed — a measure can be in force within days while a cargo takes weeks to assemble, position, load, and clear — so restrictions routinely arrive with consignments mid-chain, and the transitional provisions, rather than the headline measure, determine whether cargo already contracted, loaded, or cleared is stranded. For a seller this creates an obligation that has become unlawful to perform, and whether that excuses or breaches depends on the contract, its clauses, and the governing law. It propagates to importers dependent on the origin, who must source elsewhere; to price, since supply has left the tradeable pool without leaving the world; and to the origin's own producers, who face a domestic price disconnected from the international one. Critically, it is self-amplifying: a restriction by one significant exporter raises world prices, which increases the domestic-price pressure on other exporting governments and strengthens the case for them to restrict in turn, while importers observing the sequence buy earlier and larger than required, tightening the market further.",
  chainStages: ['assembly', 'border', 'international-transport'],
  observableIndicators: [
    'Domestic food prices in a producing country rising, or public concern about local availability being reported',
    'Government consultations, parliamentary discussion, or official commentary on domestic supply and export volumes',
    'Stock releases from public reserves, or announcements about strategic reserve levels',
    'Export registration, contract-registration, or reporting requirements introduced for a commodity',
    'Export licences issued more slowly, in smaller quantities, or with new conditions attached, without any announced change',
    'An export duty introduced or increased, or a minimum export price set or raised',
    'A domestic supply obligation announced, tying export eligibility to local sales',
    'Notification of an export measure to the WTO, or reporting of a measure through market-transparency mechanisms',
    'A queue of loaded or partly loaded vessels at an origin awaiting clearance to sail',
    'Origin differentials for that exporter widening sharply against competing origins',
    'Another significant exporter of the same commodity having already restricted, raising world price and domestic pressure elsewhere',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page names, characterises, or predicts no government, policy, or measure, and gives no historical restriction episodes, frequencies, or price effects. Whether any state restricts exports is a sovereign decision that this page does not forecast.',
    "Assessing exposure for a real chain requires that chain's own data: the origins it depends on and their share of its requirement, the measures currently in force in those jurisdictions, its position in the shipping sequence, the transitional provisions of any measure, the force majeure and illegality clauses in its contracts, and the governing law.",
    'Domestic price pressure indicates that conditions under which restrictions are sometimes considered are present. It does not indicate that any government will act, and governments facing comparable conditions take different decisions.',
    "The measures in force in any jurisdiction change and must be obtained from that government's own current publications or from official notification mechanisms. Nothing here states the law of any country.",
    'Whether a restriction excuses contractual performance depends on the contract and its governing law. This page interprets no contract and is not legal advice.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'root-tuber',
    'fibre',
    'beverage-crop',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'customs-declaration' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The multilateral framework governing export measures, including notification obligations and the disciplines applying to export prohibitions and restrictions',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-transparency framework under which export policy measures affecting food commodities are monitored and reported',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food-security and food-policy context in which governments consider domestic supply measures',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural trade policy analysis, including the market effects of export measures',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grains and oilseeds trade reporting context in which export availability from origins is tracked',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any exporting jurisdiction, but the measures, their legal basis, their transitional provisions, and their administration are entirely country-specific and change without notice.',
  limitations: [
    'A reference description of a mechanism, not an assessment, prediction, or criticism of any government, policy, or measure.',
    'No measures in force are listed and no country is named. Export measures change frequently and must be obtained from the government concerned or from official notification mechanisms.',
    'No price effects, restriction frequencies, or historical episodes are given.',
    'Whether a restriction excuses contractual performance is a matter of contract and governing law, which this page does not interpret. Nothing here is legal or policy advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Export Restriction: Mechanism, Instruments, and Contagion',
    description:
      'How export restrictions withhold existing supply from the world market: the instruments used, why the quiet ones matter most, and why restriction spreads.',
    keywords: [
      'export restriction',
      'export ban',
      'export licensing',
      'agricultural trade policy',
      'food export controls',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
