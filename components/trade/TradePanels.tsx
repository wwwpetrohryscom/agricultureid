import type { ReactNode } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { contentUrlPath, resolveRef } from '@/lib/content/registry';
import type { GradeLegalStatus } from '@/types/commodity';
import type {
  AnyContent,
  ContentRef,
  LogisticsConceptContent,
  MarketTermContent,
  StandardReferenceContent,
  SupplyChainRiskContent,
  TradeConceptContent,
} from '@/types/content';
import {
  CHAIN_STAGES,
  INCOTERMS_SCOPE_NOTE,
  NO_LIVE_PRICE_NOTE,
  RISK_NOT_SCORED_NOTE,
  STANDARD_SCOPE_DISCLAIMER,
  TRADE_SCOPE_DISCLAIMER,
} from '@/types/trade';
import type { CargoForm, ChainStage } from '@/types/trade';

interface Entry {
  slug: string;
  title: string;
  summary: string;
  href: string;
}

function LinkCards({ items }: { items: Entry[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((c) => (
        <li key={c.href}>
          <Link
            href={c.href}
            className="block rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
          >
            <span className="font-semibold text-forest-950">{c.title}</span>
            <span className="mt-0.5 block text-sm leading-6 text-ink-600">
              {c.summary}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** A typed relation panel. Omitted entirely when its list is empty. */
function Panel({
  id,
  heading,
  intro,
  items,
}: {
  id: string;
  heading: string;
  intro: string;
  items: Entry[];
}) {
  if (items.length === 0) return null;
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-serif text-2xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      <p className="mt-1 text-sm text-ink-500">{intro}</p>
      <LinkCards items={items} />
    </section>
  );
}

const toEntry = (c: AnyContent): Entry => ({
  slug: c.slug,
  title: c.title,
  summary: c.summary,
  href: contentUrlPath(c),
});

/**
 * Resolve typed refs to their published targets. Unresolvable and unpublished
 * refs are dropped rather than rendered as dead text — a panel that would end
 * up empty is not rendered at all.
 */
function entries(refs: ContentRef[] | undefined): Entry[] {
  return (refs ?? [])
    .map((ref) => resolveRef(ref))
    .filter(
      (item): item is AnyContent =>
        item !== undefined && item.editorialStatus === 'published',
    )
    .map(toEntry)
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** A section carrying a page's defining scalar claim (purpose, definition). */
function FactSection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-serif text-2xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

/** Term/description pairs. Undefined descriptions are dropped, not blanked. */
function FactList({
  items,
}: {
  items: { term: string; description: string | undefined }[];
}) {
  const present = items.filter(
    (i): i is { term: string; description: string } =>
      i.description !== undefined && i.description.length > 0,
  );
  if (present.length === 0) return null;
  return (
    <dl className="my-5 divide-y divide-parchment-200 overflow-hidden rounded-card border border-parchment-200">
      {present.map((item) => (
        <div
          key={item.term}
          className="grid gap-1 p-4 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-4"
        >
          <dt className="font-semibold text-ink-900">{item.term}</dt>
          <dd className="leading-7 text-ink-700">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Vocabulary values as static pills. */
function Pills({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-4">
      <p className="text-xs font-bold uppercase tracking-wide text-olive-800">
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((value) => (
          <li key={value}>
            <Badge tone="olive">{value}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * The editorial boundary of a Phase 5D page: the standing disclaimer for the
 * type, plus the entry's own limitations. Limitations that repeat a standing
 * note verbatim are dropped so the note is stated once.
 */
function ScopeNote({
  id,
  heading,
  standing,
  limitations,
}: {
  id: string;
  heading: string;
  standing: string[];
  limitations: string[];
}) {
  const extra = limitations.filter((l) => !standing.includes(l));
  if (standing.length === 0 && extra.length === 0) return null;
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24 rounded-card border border-clay-200 bg-[#FAFAF7] p-5"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-serif text-xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      {standing.map((note) => (
        <p key={note} className="mt-2 text-sm leading-7 text-ink-700">
          {note}
        </p>
      ))}
      {extra.length > 0 && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-ink-700">
          {extra.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

const CARGO_FORM_LABEL: Record<CargoForm, string> = {
  'bulk-dry': 'Dry bulk',
  'bulk-liquid': 'Liquid bulk',
  breakbulk: 'Breakbulk',
  containerised: 'Containerised',
  unitised: 'Unitised',
  live: 'Live animals',
};

const CHAIN_STAGE_LABEL: Record<ChainStage, string> = {
  production: 'Production',
  assembly: 'Assembly',
  processing: 'Processing',
  'inland-transport': 'Inland transport',
  border: 'Border',
  'international-transport': 'International transport',
  'destination-market': 'Destination market',
};

const LEGAL_STATUS_LABEL: Record<GradeLegalStatus, string> = {
  mandatory: 'Mandatory — applies by operation of law in its jurisdiction',
  voluntary: 'Voluntary — applies where a party chooses to adopt it',
  contractual: 'Contractual — applies because the parties incorporate it',
  unknown: 'Not established',
};

/* ------------------------------------------------------------------ *
 * Trade concepts
 * ------------------------------------------------------------------ */

/**
 * Trade-concept page panels. `TRADE_SCOPE_DISCLAIMER` is stated on every entry;
 * a `delivery-term` entry also carries `INCOTERMS_SCOPE_NOTE`, because the ICC
 * rules are copyrighted and are described here, never reproduced.
 */
export function TradeConceptPanels({ item }: { item: TradeConceptContent }) {
  const standing =
    item.tradeConceptClass === 'delivery-term'
      ? [TRADE_SCOPE_DISCLAIMER, INCOTERMS_SCOPE_NOTE]
      : [TRADE_SCOPE_DISCLAIMER];

  return (
    <>
      <FactSection id="concept-purpose" heading="What this mechanism is for">
        <p className="mt-2 max-w-prose leading-7 text-ink-800">
          {item.conceptPurpose}
        </p>
      </FactSection>

      <Panel
        id="associated-documents"
        heading="Associated documents"
        intro="Documents this mechanism is typically operated with. Each is described by what it evidences, not by how to complete one."
        items={entries(item.associatedDocuments)}
      />
      <Panel
        id="relevant-standards"
        heading="Governing standards & frameworks"
        intro="Published instruments that govern how this mechanism works. AgricultureID summarises scope; it is not a scheme owner or authority."
        items={entries(item.relevantStandards)}
      />
      <Panel
        id="related-logistics"
        heading="Related logistics"
        intro="Physical movement and handling concepts this mechanism interacts with."
        items={entries(item.relatedLogistics)}
      />
      <Panel
        id="related-concepts"
        heading="Related trade concepts"
        intro="Other mechanics, procedures, and terms that bear on this one."
        items={entries(item.relatedConcepts)}
      />

      <ScopeNote
        id="advisory-scope"
        heading="Reference, not advice"
        standing={standing}
        limitations={item.advisoryLimitations}
      />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Logistics concepts
 * ------------------------------------------------------------------ */

/**
 * Logistics-concept page panels. The standing note here is the entry's own
 * `operationalLimitations` — route, vessel, and contract specifics are never
 * generalisable, so each entry states its own limits.
 */
export function LogisticsConceptPanels({
  item,
}: {
  item: LogisticsConceptContent;
}) {
  const cargoForms = (item.cargoForms ?? []).map((f) => CARGO_FORM_LABEL[f]);

  return (
    <>
      <FactSection id="logistics-purpose" heading="What this solves">
        <p className="mt-2 max-w-prose leading-7 text-ink-800">
          {item.logisticsPurpose}
        </p>
        <Pills label="Cargo forms" items={cargoForms} />
      </FactSection>

      <Panel
        id="applicable-commodities"
        heading="Commodities carried this way"
        intro="Commodities with a documented association to this operation."
        items={entries(item.applicableCommodities)}
      />
      <Panel
        id="quality-risks"
        heading="Quality attributes at stake"
        intro="Attributes this operation puts at risk or protects, described on their own measurement evidence."
        items={entries(item.qualityRisks)}
      />
      <Panel
        id="depends-on-operations"
        heading="Depends on post-harvest operations"
        intro="Conditioning steps this operation assumes have already been done — it cannot recover what was lost before loading."
        items={entries(item.dependsOnOperations)}
      />
      <Panel
        id="relevant-standards"
        heading="Governing standards & frameworks"
        intro="Published instruments that govern this operation."
        items={entries(item.relevantStandards)}
      />
      <Panel
        id="related-trade-concepts"
        heading="Related trade concepts"
        intro="Contractual and customs mechanics this operation interacts with."
        items={entries(item.relatedTradeConcepts)}
      />
      <Panel
        id="related-logistics"
        heading="Related logistics"
        intro="Other modes, handling steps, and facilities in the same chain."
        items={entries(item.relatedLogistics)}
      />
      <Panel
        id="exposed-to-risks"
        heading="Exposed to risks"
        intro="Risk mechanisms that act on this operation. Each is described, never scored."
        items={entries(item.exposedToRisks)}
      />

      <ScopeNote
        id="operational-scope"
        heading="What this description cannot tell you"
        standing={[]}
        limitations={item.operationalLimitations}
      />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Standards & certification
 * ------------------------------------------------------------------ */

/**
 * Standard-reference page panels. Every entry names its body, edition, and
 * jurisdiction, and carries both `STANDARD_SCOPE_DISCLAIMER` and its own
 * reproduction limits: this is a summary of scope, never the standard itself.
 */
export function StandardReferencePanels({
  item,
}: {
  item: StandardReferenceContent;
}) {
  return (
    <>
      <FactSection id="standard-identity" heading="What the standard covers">
        <p className="mt-2 max-w-prose leading-7 text-ink-800">
          {item.scopeSummary}
        </p>
        <FactList
          items={[
            { term: 'Issuing body', description: item.standardBody },
            { term: 'Edition', description: item.edition },
            { term: 'Jurisdiction', description: item.jurisdiction },
            {
              term: 'Legal status',
              description: LEGAL_STATUS_LABEL[item.legalStatus],
            },
            {
              term: 'Conformity assessment',
              description: item.conformityAssessment,
            },
            { term: 'Assessed by', description: item.assessedBy },
          ]}
        />
      </FactSection>

      <Panel
        id="applicable-commodities"
        heading="Commodities in scope"
        intro="Commodities with a documented association to this standard."
        items={entries(item.applicableCommodities)}
      />
      <Panel
        id="related-grades"
        heading="Related grading standards"
        intro="Commodity-scoped grades issued under or related to this standard. A grade scoped to one commodity is documented there, not here."
        items={entries(item.relatedGrades)}
      />
      <Panel
        id="related-standards"
        heading="Related standards & schemes"
        intro="Other normative documents and schemes in the same domain."
        items={entries(item.relatedStandards)}
      />
      <Panel
        id="related-trade-concepts"
        heading="Related trade concepts"
        intro="Trade mechanics this standard bears on."
        items={entries(item.relatedTradeConcepts)}
      />

      <ScopeNote
        id="standard-scope"
        heading="Summary only — not the standard"
        standing={[STANDARD_SCOPE_DISCLAIMER]}
        limitations={item.reproductionLimitations}
      />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Market terms
 * ------------------------------------------------------------------ */

/**
 * Market-term page panels. `NO_LIVE_PRICE_NOTE` is stated on every entry: the
 * platform defines terms so that prices obtained elsewhere can be read
 * correctly, and carries no quotation, forecast, or signal of its own.
 */
export function MarketTermPanels({ item }: { item: MarketTermContent }) {
  return (
    <>
      <FactSection id="definition" heading="Definition">
        <p className="mt-2 max-w-prose leading-7 text-ink-800">
          {item.definition}
        </p>
        <FactList
          items={[{ term: 'Used in', description: item.usageContext }]}
        />
      </FactSection>

      {item.notToBeConfusedWith.length > 0 && (
        <FactSection
          id="not-to-be-confused-with"
          heading="Not to be confused with"
        >
          <p className="mt-1 text-sm text-ink-500">
            Distinctions that change how a figure should be read.
          </p>
          <ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-6 leading-7 text-ink-800 marker:text-forest-400">
            {item.notToBeConfusedWith.map((note, i) => (
              <li key={i} className="pl-1">
                {note}
              </li>
            ))}
          </ul>
        </FactSection>
      )}

      <Panel
        id="applicable-commodities"
        heading="Commodities this applies to"
        intro="Commodities the term is typically applied to."
        items={entries(item.applicableCommodities)}
      />
      <Panel
        id="related-terms"
        heading="Related market terms"
        intro="Terms that are defined against, or depend on, this one."
        items={entries(item.relatedTerms)}
      />
      <Panel
        id="related-trade-concepts"
        heading="Related trade concepts"
        intro="Trade mechanics the term depends on."
        items={entries(item.relatedTradeConcepts)}
      />

      <ScopeNote
        id="market-scope"
        heading="No prices, no forecasts, no advice"
        standing={[NO_LIVE_PRICE_NOTE]}
        limitations={item.advisoryLimitations}
      />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Supply-chain risk
 * ------------------------------------------------------------------ */

/**
 * Supply-chain-risk page panels. `RISK_NOT_SCORED_NOTE` is stated on every
 * entry: the mechanism, its stages, and its observable indicators are
 * described, and no likelihood, severity, or score is assigned anywhere.
 */
export function SupplyChainRiskPanels({
  item,
}: {
  item: SupplyChainRiskContent;
}) {
  const stages = [...item.chainStages]
    .sort((a, b) => CHAIN_STAGES.indexOf(a) - CHAIN_STAGES.indexOf(b))
    .map((s) => CHAIN_STAGE_LABEL[s]);

  return (
    <>
      <FactSection id="risk-mechanism" heading="How the disruption arises">
        <p className="mt-2 max-w-prose leading-7 text-ink-800">
          {item.riskMechanism}
        </p>
        <Pills label="Chain stages, origin to destination" items={stages} />
      </FactSection>

      {item.observableIndicators.length > 0 && (
        <FactSection id="observable-indicators" heading="Observable indicators">
          <p className="mt-1 text-sm text-ink-500">
            Signals that the mechanism is materialising in a real chain. They
            are observations to check against that chain&rsquo;s own data, not
            thresholds.
          </p>
          <ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-6 leading-7 text-ink-800 marker:text-forest-400">
            {item.observableIndicators.map((indicator, i) => (
              <li key={i} className="pl-1">
                {indicator}
              </li>
            ))}
          </ul>
        </FactSection>
      )}

      <Panel
        id="affected-commodities"
        heading="Commodities exposed"
        intro="Commodities with a documented exposure to this mechanism."
        items={entries(item.affectedCommodities)}
      />
      <Panel
        id="affected-logistics"
        heading="Logistics affected"
        intro="Movement and handling operations the mechanism acts on."
        items={entries(item.affectedLogistics)}
      />
      <Panel
        id="affected-trade-concepts"
        heading="Trade concepts affected"
        intro="Contractual and customs mechanics the mechanism acts on."
        items={entries(item.affectedTradeConcepts)}
      />
      <Panel
        id="addressed-by-standards"
        heading="Addressed by standards"
        intro="Standards and frameworks that address this mechanism. A standard is a control, not a guarantee."
        items={entries(item.addressedByStandards)}
      />
      <Panel
        id="related-risks"
        heading="Related risks"
        intro="Mechanisms that arise alongside, or propagate into, this one."
        items={entries(item.relatedRisks)}
      />

      <ScopeNote
        id="risk-scope"
        heading="Described, not scored"
        standing={[RISK_NOT_SCORED_NOTE]}
        limitations={item.assessmentLimitations}
      />
    </>
  );
}

/**
 * Phase 5D panel dispatch for a content page. Non-trade types render nothing,
 * so `ContentArticle` can call this unconditionally.
 */
export function TradePanels({ item }: { item: AnyContent }) {
  switch (item.contentType) {
    case 'trade-concept':
      return <TradeConceptPanels item={item} />;
    case 'logistics-concept':
      return <LogisticsConceptPanels item={item} />;
    case 'standard-reference':
      return <StandardReferencePanels item={item} />;
    case 'market-term':
      return <MarketTermPanels item={item} />;
    case 'supply-chain-risk':
      return <SupplyChainRiskPanels item={item} />;
    default:
      return null;
  }
}
