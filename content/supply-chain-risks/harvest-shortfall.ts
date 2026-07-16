import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const harvestShortfall: SupplyChainRiskContent = {
  id: 'supply-chain-risk-harvest-shortfall',
  slug: 'harvest-shortfall',
  contentType: 'supply-chain-risk',
  title: 'Harvest Shortfall',
  alternativeNames: ['Production shortfall', 'Crop failure'],
  category: 'Supply-chain risk',
  subcategory: 'Production',
  riskClass: 'production',
  summary:
    'A harvest delivers materially less than the chain was built to move. The physical shortfall is only the first effect: it propagates through contracts, storage, freight bookings, and price before most of the chain has seen a single tonne go missing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A harvest shortfall is the gap between the quantity a chain expected to handle and the quantity that actually exists. It is foundational, because everything downstream — the contracts written, the vessels chartered, the processing capacity committed, the storage reserved — was sized against an expectation formed months earlier, from a crop that had not yet grown.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes a shortfall from an ordinary production variation is not its size but its timing relative to commitment. A crop that is known to be small before contracts are written is a market condition. The same crop discovered to be small after the contracts exist is a disruption, because obligations have already been made against tonnes that will not arrive. The risk lives in that gap between commitment and knowledge, and it is why the mechanism is as much informational as agronomic.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Production — quantity available at origin' },
    {
      label: 'Arises at',
      value: 'Production, and is discovered progressively through the season',
    },
    {
      label: 'Core mechanism',
      value:
        'Committed obligations exceed the quantity the season actually delivers',
    },
    {
      label: 'Propagates by',
      value:
        'Contract performance, allocation between buyers, price, and substitution across origins',
    },
    {
      label: 'Quality dimension',
      value:
        'Shortfall seasons often shift the grade distribution, not only the tonnage',
    },
    {
      label: 'Concentration matters',
      value:
        'Exposure depends on how few origins supply the commodity, not on the size of the loss alone',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'how-it-arises',
      heading: 'How a shortfall arises',
      body: [
        {
          type: 'paragraph',
          text: 'Yield is set over a season, not at a moment, and it is set by the interaction of what was planted, what the weather did, and what happened between them. Area planted may fall because of price signals at sowing, input availability, or conditions that prevented drilling. Yield per unit area may fall through drought, heat during a sensitive growth stage, excess water, frost, disease, or pest pressure. And harvestable output may fall even where the crop grew, if weather at harvest prevents timely lifting or degrades the standing crop before it can be taken.',
        },
        {
          type: 'paragraph',
          text: 'These are separate mechanisms with different signatures, and distinguishing them matters, because they become visible at different times and are recoverable to different degrees. An area reduction is knowable early and is essentially fixed. A mid-season yield loss may be partly compensated by later conditions. A harvest-window loss appears last, when the least time remains to respond, and typically affects quality as well as quantity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Shortfall is relative to expectation',
          text: 'A chain is disrupted by the difference between what it committed to and what exists, not by the difference from a long-run average. A small crop that everyone anticipated disrupts far less than an ordinary crop that was expected to be large.',
        },
      ],
    },
    {
      id: 'quantity-and-quality',
      heading: 'Quantity is rarely the only thing that moves',
      body: [
        {
          type: 'paragraph',
          text: 'The conditions that reduce a harvest usually also change what the harvest is. Stress during grain fill alters composition; a wet harvest window affects soundness and moisture at intake; heat and drought change size distribution in fruit and nuts. So a shortfall season frequently arrives as a joint problem: less material, and a grade distribution shifted away from the specification the contracts name.',
        },
        {
          type: 'paragraph',
          text: 'This compounds the shortage in a way that raw tonnage figures conceal. If a contract specifies a quality that a smaller share of the crop now meets, the effective shortfall for that contract is deeper than the headline production loss. Buyers competing for the compliant fraction experience a shortage sharper than the aggregate statistics describe, which is one reason why market reaction and production statistics can appear inconsistent.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates',
      body: [
        {
          type: 'paragraph',
          text: 'The physical shortfall moves through the chain along four routes, and they run at different speeds.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Contractual',
              description:
                'Sellers who committed tonnes they cannot deliver must buy them in, allocate between buyers, negotiate, or default. This is where a production event becomes a counterparty event.',
            },
            {
              term: 'Price',
              description:
                'A shortage bids for the remaining supply, and does so fastest for the specific origin, grade, and delivery period that is short — which is why a shortfall can move a basis or a spread more visibly than a headline price.',
            },
            {
              term: 'Substitution and re-routing',
              description:
                'Buyers turn to other origins, other grades, or other commodities. This exports the disruption into chains that had no production problem at all, arriving there as freight demand and price pressure.',
            },
            {
              term: 'Policy',
              description:
                'Producing governments facing domestic shortage may restrict exports; importing governments may adjust tariffs or reserves. Policy converts a physical shortfall into a market-access event, sometimes faster than the physical shortage itself is felt.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The last two are why exposure is not proportionate to the size of a loss. A shortfall in a commodity supplied by many origins is absorbed by re-routing; a shortfall of similar size in a commodity supplied by few is not, because there is nowhere for demand to go.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: "A shortfall is unusual among supply-chain risks in being progressively observable over months rather than appearing at once. Planting-intention surveys, crop-condition assessments, remote-sensing indicators, and successive official production estimates each narrow the range, and the market's own structure — the relationship between nearby and deferred prices, and between origins — reflects what participants believe about supply before any statistic confirms it.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Estimates are revised, and revisions are the signal',
          text: 'Production estimates are provisional and are revised as the season resolves. The informative thing is usually not the level of an estimate but the direction and persistence of its revisions. A single estimate read as a fact is a recurrent misuse of crop information.',
        },
      ],
    },
  ],
  riskMechanism:
    'A harvest delivers less than the quantity against which downstream obligations were already committed. The loss originates in one or more of three distinct mechanisms — reduced area planted, reduced yield through stress during the season, or reduced harvestable output where conditions prevent timely lifting — which become visible at different times and are recoverable to different degrees. Because the conditions that reduce a harvest usually also alter composition, size, or soundness, a shortfall commonly arrives as a joint quantity-and-quality event: the compliant fraction of the crop falls faster than the headline tonnage, so contracts specifying a grade experience a deeper effective shortage than production statistics show. The shortfall then propagates along four routes at different speeds: contractually, as sellers who committed tonnes they cannot deliver must buy in, allocate, or default, converting a production event into a counterparty event; through price, which bids most sharply for the specific origin, grade, and delivery period that is short; through substitution and re-routing, which exports the disruption as freight and price pressure into chains that had no production problem; and through policy, as producing governments facing domestic shortage restrict exports and importing governments adjust access. Exposure is therefore governed less by the size of the physical loss than by how few origins can supply the commodity and grade, and by how much of the chain had already committed before the loss became knowable.',
  chainStages: ['production', 'assembly', 'processing', 'destination-market'],
  observableIndicators: [
    'Successive official production or area estimates for an origin being revised in the same direction across releases',
    'Crop-condition assessments and remote-sensing vegetation indicators diverging from the same point in previous seasons',
    'Planting-intention surveys reporting reduced area, or reports of drilling prevented by field conditions',
    'Weather adverse at a growth stage the crop is sensitive to, or persistently wet or blocked harvest windows',
    'Intake at assembly points and elevators running below the pace expected for the date',
    'Grade distribution at intake shifting, with a larger share falling outside contract specification',
    'Nearby delivery periods gaining on deferred ones, or an origin differential widening against competing origins',
    'Export sales, licence issuance, or line-up at loading ports slowing for that origin',
    'Producing-country authorities discussing or introducing export measures, reserve releases, or domestic supply obligations',
    'Buyers seeking substitution across origins or grades, visible as unusual freight demand on routes from alternative origins',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no yields, production figures, loss percentages, or historical shortfall statistics. Production data is published by national statistical agencies and by bodies such as FAO, USDA, IGC, and AMIS, is provisional when first issued, and is revised.',
    "Assessing exposure for a real chain requires that chain's own data: the origins it actually draws on, the grades its contracts name, the share of its requirement already committed, its storage and carry-in position, the substitutability of its alternatives, and the delivery periods at stake.",
    'Crop-condition and remote-sensing indicators describe the observed state of a crop, not the outcome of a season. Conditions at one growth stage do not determine harvestable output, and treating an in-season indicator as a yield forecast is unsound.',
    'The agronomic relationship between a stress event and yield is crop-, cultivar-, soil-, and stage-specific, and cannot be generalised across regions or seasons.',
    'AgricultureID publishes no production forecasts, balance-sheet projections, or price expectations.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'root-tuber',
    'sugar-crop',
    'fruit',
    'nut',
    'vegetable',
    'beverage-crop',
    'fibre',
    'spice',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Crop production, food-security monitoring, and the framework for assessing supply at origin',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-information framework in which production and supply changes for major crops are monitored and reported',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grains and oilseeds supply-and-demand reporting context, including the provisional and revised nature of estimates',
    },
    {
      sourceId: 'usda-fas',
      citedFor:
        'International production estimation and origin-level crop reporting context',
    },
    {
      sourceId: 'faostat',
      citedFor:
        'Historical production and area statistics as a published, revisable dataset',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any crop and origin, but the drivers, growth stages, sensitivities, and policy responses are entirely crop-, region-, and jurisdiction-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any season, crop, origin, or market.',
    'No yields, production volumes, loss figures, or price effects are given: they are crop-, season-, and origin-specific, and any general figure would misrepresent a specific case.',
    'The agronomic causes of yield loss are summarised at a level appropriate to a trade-and-logistics reference; the crop-specific agronomy belongs to the crop pages and to the applicable research bodies.',
    'Policy responses to shortfall are described as a propagation route only; no policy of any government is characterised or predicted.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Harvest Shortfall: Mechanism and Propagation',
    description:
      'How a harvest shortfall arises through area, yield, and harvest-window losses, why quality moves with quantity, and how it propagates to contracts and price.',
    keywords: [
      'harvest shortfall',
      'crop failure',
      'production shortfall',
      'supply chain risk',
      'agricultural supply risk',
      'crop production estimates',
    ],
  },
  structuredData: { article: true },
};
