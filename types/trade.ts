/**
 * Phase 5D — trade, logistics, standards, and market-data vocabulary.
 *
 * ## Why these types exist, and why there are only five
 *
 * The brief proposed nine entities. Four of them do not earn a type:
 *
 * - **Transport modes** are a `logisticsClass`, not a type. A "sea freight"
 *   page and a "palletisation" page answer the same kind of question, render
 *   identically, and share relation semantics. Splitting them would put two
 *   routes over one intent.
 * - **Certification concepts** are a `standardClass`. A certification scheme is
 *   a standard plus a conformity-assessment mechanism; it has the same issuing
 *   body, versioning, and copyright constraints as any other standard.
 * - **Trade datasets** already have a home: Phase 4A's `DatasetRegistryEntry`
 *   and the `/datasets` route model exactly this, down to an
 *   `api-key-required` access flag. A `/trade-data` route would duplicate
 *   `/datasets` intent.
 * - **Commodity trade profiles** are not pages either. Trade figures are a
 *   *view over a snapshot*, rendered on the commodity that already owns the
 *   subject. A parallel `/trade-data/wheat-grain` page would compete with
 *   `/commodities/wheat-grain` for the same query.
 *
 * ## The line this phase must not cross
 *
 * AgricultureID describes how trade, logistics, and standards *work*. It is not
 * a trading platform, customs broker, legal adviser, certification authority,
 * price terminal, investment product, or freight-booking service. Every
 * constant below exists to keep a page on the reference side of that line.
 */

/* ------------------------------------------------------------------ *
 * Trade concepts
 * ------------------------------------------------------------------ */

/**
 * What kind of trade concept a page describes. `delivery-term` covers Incoterms
 * rules, which are described by function and never reproduced (see
 * `INCOTERMS_SCOPE_NOTE`).
 */
export const TRADE_CONCEPT_CLASSES = [
  'trade-mechanics',
  'trade-measurement',
  'customs-procedure',
  'delivery-term',
  'documentation',
  'market-access',
] as const;
export type TradeConceptClass = (typeof TRADE_CONCEPT_CLASSES)[number];

/* ------------------------------------------------------------------ *
 * Logistics
 * ------------------------------------------------------------------ */

/**
 * What kind of logistics concept a page describes. `transport-mode` is a class
 * here rather than its own type — see the file header.
 */
export const LOGISTICS_CLASSES = [
  'transport-mode',
  'handling',
  'unitisation',
  'chain-integrity',
  'facility',
  'inspection',
] as const;
export type LogisticsClass = (typeof LOGISTICS_CLASSES)[number];

/** The physical state a consignment is carried in. */
export const CARGO_FORMS = [
  'bulk-dry',
  'bulk-liquid',
  'breakbulk',
  'containerised',
  'unitised',
  'live',
] as const;
export type CargoForm = (typeof CARGO_FORMS)[number];

/* ------------------------------------------------------------------ *
 * Standards and certification
 * ------------------------------------------------------------------ */

/**
 * What kind of normative document or scheme a page describes.
 *
 * `standard` and `certification-scheme` are deliberately one type: a scheme is
 * a standard plus conformity assessment, with the same body, edition, and
 * reproduction constraints.
 */
export const STANDARD_CLASSES = [
  'standard',
  'certification-scheme',
  'conformity-assessment',
  'regulatory-framework',
] as const;
export type StandardClass = (typeof STANDARD_CLASSES)[number];

/**
 * What a standard governs. Used to keep `/standards` from colliding with
 * `/commodity-grades`: a document scoped to one commodity's grades belongs to
 * `commodity-grade`, not here.
 */
export const STANDARD_DOMAINS = [
  'food-safety',
  'plant-health',
  'animal-health',
  'quality-grading',
  'sustainability',
  'organic',
  'social-labour',
  'traceability',
  'management-system',
  'measurement',
] as const;
export type StandardDomain = (typeof STANDARD_DOMAINS)[number];

/* ------------------------------------------------------------------ *
 * Market terminology
 * ------------------------------------------------------------------ */

export const MARKET_TERM_CLASSES = [
  'price-formation',
  'price-relationship',
  'contract-structure',
  'market-structure',
  'risk-transfer',
  'market-measurement',
] as const;
export type MarketTermClass = (typeof MARKET_TERM_CLASSES)[number];

/* ------------------------------------------------------------------ *
 * Supply-chain risk
 * ------------------------------------------------------------------ */

/**
 * The domain a risk arises in. There is deliberately **no likelihood, severity,
 * or score field** anywhere in this model — see `RISK_NOT_SCORED_NOTE`.
 */
export const SUPPLY_CHAIN_RISK_CLASSES = [
  'production',
  'logistics',
  'market',
  'regulatory',
  'quality-integrity',
  'biosecurity',
  'infrastructure',
  'information',
] as const;
export type SupplyChainRiskClass = (typeof SUPPLY_CHAIN_RISK_CLASSES)[number];

/** Where in the chain a risk materialises. Ordered, origin → destination. */
export const CHAIN_STAGES = [
  'production',
  'assembly',
  'processing',
  'inland-transport',
  'border',
  'international-transport',
  'destination-market',
] as const;
export type ChainStage = (typeof CHAIN_STAGES)[number];

/* ------------------------------------------------------------------ *
 * Standing disclaimers
 * ------------------------------------------------------------------ */

/**
 * Rendered on every trade-concept page. Customs classification is a legal
 * determination made by an authority against a specific consignment; a
 * reference description of how classification works is not that determination.
 */
export const TRADE_SCOPE_DISCLAIMER =
  'This is an educational reference description of how a trade mechanism works, not legal, customs, or contractual advice. Tariff classification, valuation, origin, and admissibility are determinations made by the competent authority for a specific consignment under the law in force at the time. Nothing here substitutes for a customs broker, a qualified adviser, or the authority’s own ruling.';

/**
 * Incoterms® rules are a copyrighted ICC publication. AgricultureID describes
 * what the rules allocate — cost, risk, and obligation — and never reproduces
 * rule text, and never tells a reader which rule to choose.
 */
export const INCOTERMS_SCOPE_NOTE =
  'Incoterms® is a registered trademark of the International Chamber of Commerce, and the Incoterms® rules are an ICC copyrighted publication. This page describes, in general terms, what a delivery term allocates between seller and buyer; it does not reproduce the rules, is not a substitute for the published text, and does not recommend a rule for any transaction. Always work from the edition the contract names.';

/**
 * Rendered on every standard-reference page. AgricultureID summarises what a
 * standard covers; it never reproduces a standard and never certifies anyone.
 */
export const STANDARD_SCOPE_DISCLAIMER =
  'This is a summary of what the standard or scheme covers and how conformity is assessed, prepared from public scope documents. It is not the standard, does not reproduce its requirements, and confers no certification, accreditation, or recognition. AgricultureID is not a certification body, accreditation body, or scheme owner. Requirements are versioned and change — work from the edition the scheme names.';

/**
 * Rendered on every market-term page. The platform carries no live prices and
 * no forecasts, and this is a design decision rather than a gap.
 */
export const NO_LIVE_PRICE_NOTE =
  'AgricultureID publishes no live prices, no price forecasts, and no trading signals. This page defines a term so that price information obtained elsewhere can be read correctly. Nothing here is investment, hedging, or trading advice, and no figure on this page should be used as a current market quotation.';

/**
 * Rendered on every supply-chain-risk page. The single most important editorial
 * rule of the risk model: describing a mechanism is defensible, scoring it is
 * not. A likelihood or severity number would be an invented quantity with no
 * source, applied to contexts that differ wildly.
 */
export const RISK_NOT_SCORED_NOTE =
  'This page describes a risk mechanism — how a disruption arises, propagates, and is observed — and deliberately assigns no likelihood, severity, or risk score. Such numbers depend on the specific chain, route, season, counterparty, and jurisdiction, and a generalised score would be an invented quantity presented as evidence. Assessment against a real chain requires that chain’s own data.';

/**
 * Rendered wherever trade figures are shown. Reported trade is not ground
 * truth: reporters differ, mirror flows disagree, and figures are revised.
 */
export const TRADE_DATA_SCOPE_NOTE =
  'Reported trade statistics describe what reporting countries declared, not what physically moved. Reporter and partner figures for the same flow routinely disagree, re-exports can double-count a consignment along its route, low-value and informal trade is under-reported, and historical values are revised. Figures here are a versioned snapshot of one dataset, not a current or authoritative measure of a market.';
