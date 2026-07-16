/**
 * Graph inbound / relatedConcept audit (Phase 5F, §5 and §6).
 *
 * Answers three questions the existing gates do not:
 *
 *  §5  Which published pages have no INBOUND semantic edge, why, and is that
 *      the same thing as being an SEO orphan? (It is not — see `renderedReport`.)
 *  §6  What is actually in the 34% of edges that carry the generic
 *      `relatedConcept` relation, and which of them could honestly carry a more
 *      precise one?
 *  Both rest on a distinction the SEO audit blurs: a page can be reachable
 *      (linked from its hub) while nothing in the corpus points AT it.
 *
 * Deterministic; every number is derived from the content, none are hardcoded.
 * Run: npx tsx scripts/graph-inbound-audit.ts
 */
import {
  PUBLISHED_CONTENT,
  breedsForLivestock,
  contentUrlPath,
  cultivarsForCrop,
  resolveRef,
} from '../lib/content/registry';
import {
  allSemanticEdges,
  semanticEdges,
  INVERSE_RELATION,
} from '../lib/content/relations';
import {
  inboundRefs,
  outgoingRefs,
  relatedGroupsFor,
} from '../lib/content/graph';
import { navGraph } from '../lib/seo/audit';
import { readFileSync } from 'node:fs';
import type { AnyContent, RelationType, SemanticEdge } from '../types/content';

const key = (t: string, s: string) => `${t}:${s}`;
const itemKey = (i: AnyContent) => key(i.contentType, i.slug);

/* -------------------------------------------------------------------------- */
/*  §5 — inbound classification                                               */
/* -------------------------------------------------------------------------- */

export type ZeroInboundClass =
  | 'entity-needs-inbound'
  | 'root-hub'
  | 'utility-tool'
  | 'legal-editorial-methodology'
  | 'dataset-snapshot'
  | 'intentionally-isolated'
  | 'defect';

export interface ZeroInboundRow {
  item: AnyContent;
  route: string;
  classification: ZeroInboundClass;
  reason: string;
  /** Inbound edges entailed by a defined inverse of a relation THIS page declares. */
  availableInbound: {
    from: string;
    relation: RelationType;
    via: RelationType;
  }[];
  renderedInbound: number;
}

/**
 * A relation is "precisely invertible" when it is not the generic
 * `relatedConcept` AND the inverse map defines its inverse. Note this is judged
 * on the RELATION, not the field: `genericRelation` upgrades a `connections`
 * ref to a precise relation from the endpoint types, so a generic field can
 * still yield a precisely-invertible edge.
 */
function preciselyInvertible(e: SemanticEdge): boolean {
  return (
    e.relation !== 'relatedConcept' && Boolean(INVERSE_RELATION[e.relation])
  );
}

/**
 * `partOfFarmingSystem`'s declared inverse is `includesCrop`, which asserts the
 * target is a CROP. 110 of its edges have machinery/breed sources, so inverting
 * those would assert a farming system "includes the crop" <a plough>. Such an
 * inverse cannot be used as evidence of an available inbound edge.
 */
function inverseIsTypeSafe(e: SemanticEdge): boolean {
  if (e.relation === 'partOfFarmingSystem') return e.from.type === 'crop';
  return true;
}

export function zeroInboundReport() {
  const edges = allSemanticEdges();
  const inbound = new Map<string, number>();
  const outbound = new Map<string, SemanticEdge[]>();
  for (const e of edges) {
    const t = key(e.to.type, e.to.slug);
    inbound.set(t, (inbound.get(t) ?? 0) + 1);
    const f = key(e.from.type, e.from.slug);
    outbound.set(f, [...(outbound.get(f) ?? []), e]);
  }

  const rows: ZeroInboundRow[] = [];
  for (const item of PUBLISHED_CONTENT) {
    if (inbound.get(itemKey(item))) continue;
    const outs = outbound.get(itemKey(item)) ?? [];
    const usable = outs.filter(
      (e) => preciselyInvertible(e) && inverseIsTypeSafe(e),
    );
    const availableInbound = usable.map((e) => ({
      from: key(e.to.type, e.to.slug),
      relation: INVERSE_RELATION[e.relation] as RelationType,
      via: e.relation,
    }));
    const renderedInbound = inboundRefs(item).length;

    let classification: ZeroInboundClass;
    let reason: string;

    if (item.contentType === 'cultivar' || item.contentType === 'breed') {
      const parent = resolveRef(
        item.contentType === 'cultivar'
          ? item.parentCrop
          : item.parentLivestock,
      );
      const published = parent?.editorialStatus === 'published';
      classification = published ? 'defect' : 'entity-needs-inbound';
      reason = published
        ? `Parent ${parent?.contentType}:${parent?.slug} renders this page (graph.ts childRefs → ParentSubEntities) and the inverse ${item.contentType === 'cultivar' ? 'hasCultivar' : 'hasBreed'} is defined, but relations.ts never materialises it. Nav computes the inverse; the graph does not.`
        : 'Parent does not resolve to a published page.';
    } else if (usable.length > 0) {
      classification = 'entity-needs-inbound';
      const ex = usable[0]!;
      reason = `Declares ${ex.relation} → ${ex.to.type}:${ex.to.slug}; the defined inverse ${INVERSE_RELATION[ex.relation]} would make that page point back. Inbound edge is entailed, not invented.`;
    } else if (outs.length > 0) {
      classification = 'intentionally-isolated';
      reason = `Only generic/symmetric (${[...new Set(outs.map((e) => e.relation))].join(', ')}) or non-invertible outgoing relations; no typed inbound is entailed. Reachable from its hub and rendered on its targets' related panels.`;
    } else {
      classification = 'defect';
      reason = 'No outgoing edges at all — a true isolate.';
    }

    rows.push({
      item,
      route: contentUrlPath(item),
      classification,
      reason,
      availableInbound,
      renderedInbound,
    });
  }
  return rows;
}

/* -------------------------------------------------------------------------- */
/*  §5 — rendered-link vs semantic reachability                              */
/* -------------------------------------------------------------------------- */

export function renderedReport() {
  const nav = navGraph();
  const navInbound = new Map<string, Set<string>>();
  for (const [from, tos] of nav)
    for (const to of tos) {
      const s = navInbound.get(to) ?? new Set<string>();
      s.add(from);
      navInbound.set(to, s);
    }

  let zeroNavInbound = 0;
  let hubOnly = 0;
  const hubOnlyByType = new Map<string, number>();
  // The nav model's own content→content view is `outgoingRefs`, which is still
  // the hand-maintained switch Phase 5F removed from `relations.ts`. A page with
  // neither outgoing nor inbound nav refs is, AS THE MODEL SEES IT, linked only
  // by its hub listing. That is a statement about the model, not the page.
  for (const item of PUBLISHED_CONTENT) {
    const inb = navInbound.get(contentUrlPath(item)) ?? new Set<string>();
    if (inb.size === 0) zeroNavInbound++;
    if (outgoingRefs(item).length === 0 && inboundRefs(item).length === 0) {
      hubOnly++;
      hubOnlyByType.set(
        item.contentType,
        (hubOnlyByType.get(item.contentType) ?? 0) + 1,
      );
    }
  }
  return { zeroNavInbound, hubOnly, hubOnlyByType };
}

/**
 * The links a page ACTUALLY renders, modelled panel by panel from
 * `ContentArticle`, which every `app/*​/[slug]/page.tsx` renders:
 *
 *  - `RelationPanels`   → `semanticEdges(item)`, minus cultivar/breed targets
 *                          and minus relations a dedicated panel owns
 *  - `TradePanels` /
 *    `CommodityPathways`→ exactly those owned relations (so: still rendered)
 *  - `ParentSubEntities`→ `cultivarsForCrop` / `breedsForLivestock`
 *  - `RelatedContent`   → `relatedGroupsFor` = outgoingRefs ∪ inboundRefs,
 *                          minus cultivar/breed groups
 *
 * None of them slice or cap. This is the graph a crawler would traverse from a
 * content page — as opposed to `navGraph`, which models the same thing from the
 * stale `outgoingRefs` switch and therefore misses every Phase 5D typed field.
 */
/**
 * `RelationPanels` renders `ORDER.filter(r => byRelation.has(r))`, so a relation
 * ABSENT from its local ORDER array is silently invisible however many edges it
 * has. That array is not exported, so we read it out of the component source
 * rather than restating it here — a copy would drift, and drifting silently is
 * the exact failure this audit exists to catch.
 */
function relationPanelsOrder(): Set<string> {
  const src = readFileSync(
    new URL('../components/graph/RelationPanels.tsx', import.meta.url),
    'utf8',
  );
  const m = src.match(/const ORDER: RelationType\[\] = \[([\s\S]*?)\n\];/);
  if (!m) throw new Error('Could not parse ORDER from RelationPanels.tsx');
  const order = new Set(
    [...m[1]!.matchAll(/'([a-zA-Z]+)'/g)].map((x) => x[1]!),
  );
  if (order.size < 10) throw new Error('Parsed ORDER looks wrong');
  return order;
}

/** Fields each Phase 5D type's TradePanels section renders directly. */
function tradePanelFields(): Set<string> {
  const src = readFileSync(
    new URL('../components/trade/TradePanels.tsx', import.meta.url),
    'utf8',
  );
  return new Set(
    [...src.matchAll(/entries\(item\.([a-zA-Z]+)\)/g)].map((x) => x[1]!),
  );
}

/**
 * The links a page ACTUALLY renders, modelled panel by panel from
 * `ContentArticle`, which every `app/*​/[slug]/page.tsx` renders. None of these
 * panels slice or cap.
 */
export function trueRenderedInbound() {
  const ORDER = relationPanelsOrder();
  const TRADE_FIELDS = tradePanelFields();
  const rendered = new Map<string, Set<string>>();
  const unrenderedEdges: SemanticEdge[] = [];
  const add = (from: string, to: string) => {
    if (from === to) return;
    const s = rendered.get(to) ?? new Set<string>();
    s.add(from);
    rendered.set(to, s);
  };

  for (const item of PUBLISHED_CONTENT) {
    const from = itemKey(item);
    const relatedContentTargets = new Set<string>();
    // RelatedContent: reciprocal — renders pages that point AT this one too.
    for (const g of relatedGroupsFor(item))
      for (const r of g.items) {
        relatedContentTargets.add(itemKey(r));
        add(from, itemKey(r));
      }
    // ParentSubEntities: the parent page lists its children.
    if (item.contentType === 'crop')
      for (const c of cultivarsForCrop(item.slug)) add(from, itemKey(c));
    if (item.contentType === 'livestock')
      for (const b of breedsForLivestock(item.slug)) add(from, itemKey(b));

    for (const e of semanticEdges(item)) {
      const target = resolveRef(e.to);
      if (!target || target.editorialStatus !== 'published') continue;
      const tk = itemKey(target);
      const isSubEntity =
        target.contentType === 'cultivar' || target.contentType === 'breed';
      // RelationPanels
      const byRelationPanels =
        !isSubEntity &&
        ORDER.has(e.relation) &&
        !OWNED[item.contentType]?.has(e.relation);
      // TradePanels renders the 5D types' fields directly.
      const byTradePanels =
        TRADE_TYPES.has(item.contentType) && TRADE_FIELDS.has(e.field);
      // CommodityPathways derives the same pathway links from the product side
      // (`derivedFrom` + productClass), validator-enforced to be reciprocal.
      const byCommodityPathways =
        item.contentType === 'commodity' && COMMODITY_PATHWAY.has(e.relation);
      // ParentSubEntities / SubEntityPanel cover the sub-entity links.
      const bySubEntity =
        isSubEntity || e.relation === 'cultivarOf' || e.relation === 'breedOf';
      const byRelatedContent = relatedContentTargets.has(tk);

      if (
        byRelationPanels ||
        byTradePanels ||
        byCommodityPathways ||
        bySubEntity ||
        byRelatedContent
      )
        add(from, tk);
      else unrenderedEdges.push(e);
    }
  }
  return { rendered, unrenderedEdges };
}

const TRADE_TYPES = new Set([
  'trade-concept',
  'logistics-concept',
  'standard-reference',
  'market-term',
  'supply-chain-risk',
]);
const COMMODITY_PATHWAY = new Set<string>([
  'processedInto',
  'producesCoProduct',
  'producesByProduct',
]);
/** Mirrors OWNED_BY_DEDICATED_PANEL in RelationPanels.tsx. */
const OWNED: Record<string, ReadonlySet<string>> = {
  'trade-concept': new Set([
    'relatedTradeConcept',
    'governedByStandard',
    'relatedLogisticsConcept',
    'associatedDocument',
  ]),
  'logistics-concept': new Set([
    'relatedLogisticsConcept',
    'relatedTradeConcept',
    'governedByStandard',
    'appliesToCommodity',
    'assessesQuality',
    'dependsOnOperation',
    'exposedToRisk',
  ]),
  'standard-reference': new Set([
    'relatedStandard',
    'relatedTradeConcept',
    'appliesToCommodity',
    'gradeAppliesTo',
  ]),
  'market-term': new Set([
    'relatedMarketTerm',
    'relatedTradeConcept',
    'appliesToCommodity',
  ]),
  'supply-chain-risk': new Set([
    'relatedRisk',
    'riskAffects',
    'governedByStandard',
  ]),
  commodity: new Set([
    'processedInto',
    'producesCoProduct',
    'producesByProduct',
  ]),
};

/* -------------------------------------------------------------------------- */
/*  §6 — relatedConcept audit                                                 */
/* -------------------------------------------------------------------------- */

export function relatedConceptReport() {
  const edges = allSemanticEdges();
  const rc = edges.filter((e) => e.relation === 'relatedConcept');
  const bump = (m: Map<string, number>, k: string) =>
    m.set(k, (m.get(k) ?? 0) + 1);

  const bySource = new Map<string, number>();
  const byTarget = new Map<string, number>();
  const byField = new Map<string, number>();
  const byPair = new Map<string, number>();
  const degree = new Map<string, number>();
  for (const e of rc) {
    bump(bySource, e.from.type);
    bump(byTarget, e.to.type);
    bump(byField, e.field);
    bump(byPair, `${e.from.type} → ${e.to.type}`);
    bump(degree, key(e.to.type, e.to.slug));
    bump(degree, key(e.from.type, e.from.slug));
  }
  const sameType = rc.filter((e) => e.from.type === e.to.type).length;

  // Replacement candidates: an rc edge A→B is a candidate only when B already
  // declares a PRECISE edge back to A whose inverse is defined. Anything less is
  // a guess.
  const precise = new Map<string, { rel: RelationType; field: string }[]>();
  for (const e of edges) {
    if (e.relation === 'relatedConcept') continue;
    const k = `${key(e.from.type, e.from.slug)}->${key(e.to.type, e.to.slug)}`;
    precise.set(k, [
      ...(precise.get(k) ?? []),
      { rel: e.relation, field: e.field },
    ]);
  }
  const candidates: {
    edge: SemanticEdge;
    reverseRelation: RelationType;
    reverseField: string;
    proposed: RelationType;
    typeSafe: boolean;
  }[] = [];
  for (const e of rc) {
    const rev = precise.get(
      `${key(e.to.type, e.to.slug)}->${key(e.from.type, e.from.slug)}`,
    );
    if (!rev) continue;
    for (const r of rev) {
      const inv = INVERSE_RELATION[r.rel];
      if (!inv) continue;
      const typeSafe = !(
        r.rel === 'partOfFarmingSystem' && e.to.type !== 'crop'
      );
      candidates.push({
        edge: e,
        reverseRelation: r.rel,
        reverseField: r.field,
        proposed: inv,
        typeSafe,
      });
    }
  }

  return {
    total: edges.length,
    rc: rc.length,
    pct: (rc.length / edges.length) * 100,
    sameType,
    bySource,
    byTarget,
    byField,
    byPair,
    degree,
    candidates,
  };
}

/* -------------------------------------------------------------------------- */
/*  Vocabulary health                                                          */
/* -------------------------------------------------------------------------- */

export function inverseHealth() {
  const edges = allSemanticEdges();
  const inUse = new Map<string, number>();
  for (const e of edges)
    inUse.set(e.relation, (inUse.get(e.relation) ?? 0) + 1);
  const noInverse = [...inUse.entries()]
    .filter(
      ([r]) => r !== 'relatedConcept' && !INVERSE_RELATION[r as RelationType],
    )
    .sort((a, b) => b[1] - a[1]);

  // Inverse names that imply a target type. If the relation's SOURCE types are
  // not that type, inverting asserts something false.
  const implied: Record<string, string> = {
    includesCrop: 'crop',
    includesLivestock: 'livestock',
    hasCultivar: 'cultivar',
    hasBreed: 'breed',
  };
  const srcTypes = new Map<string, Set<string>>();
  for (const e of edges) {
    const s = srcTypes.get(e.relation) ?? new Set<string>();
    s.add(e.from.type);
    srcTypes.set(e.relation, s);
  }
  const unsafe: {
    relation: string;
    inverse: string;
    implies: string;
    sources: string[];
    bad: number;
  }[] = [];
  for (const [rel, inv] of Object.entries(INVERSE_RELATION)) {
    if (!inv) continue;
    const need = implied[inv];
    const s = srcTypes.get(rel);
    if (!need || !s) continue;
    const bad = edges.filter(
      (e) => e.relation === rel && e.from.type !== need,
    ).length;
    if (bad > 0)
      unsafe.push({
        relation: rel,
        inverse: inv,
        implies: need,
        sources: [...s],
        bad,
      });
  }
  return { noInverse, unsafe };
}

/* -------------------------------------------------------------------------- */

function table(title: string, m: Map<string, number>, n = 40) {
  console.log(`\n${title}`);
  for (const [k, v] of [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n))
    console.log(`  ${k.padEnd(44)} ${v}`);
}

function main() {
  const rows = zeroInboundReport();
  console.log('AgricultureID — graph inbound / relatedConcept audit\n');
  console.log(`Published pages:            ${PUBLISHED_CONTENT.length}`);
  console.log(`Semantic edges:             ${allSemanticEdges().length}`);
  console.log(`Zero SEMANTIC inbound:      ${rows.length}`);

  const byClass = new Map<string, number>();
  const byType = new Map<string, number>();
  const byRoute = new Map<string, number>();
  for (const r of rows) {
    byClass.set(r.classification, (byClass.get(r.classification) ?? 0) + 1);
    byType.set(r.item.contentType, (byType.get(r.item.contentType) ?? 0) + 1);
    byRoute.set(
      `/${r.route.split('/')[1]}`,
      (byRoute.get(`/${r.route.split('/')[1]}`) ?? 0) + 1,
    );
  }
  table('Zero-inbound by CLASSIFICATION', byClass);
  table('Zero-inbound by CONTENT TYPE', byType);
  table('Zero-inbound by ROUTE', byRoute);

  console.log(
    '\nPages classified `intentionally-isolated` (no typed inbound is entailed):',
  );
  for (const r of rows.filter(
    (x) => x.classification === 'intentionally-isolated',
  ))
    console.log(`  ${itemKey(r.item)}\n     ${r.reason}`);

  console.log(
    '\nSample of `entity-needs-inbound` with the exact edge available:',
  );
  for (const r of rows
    .filter((x) => x.classification === 'entity-needs-inbound')
    .slice(0, 8))
    console.log(
      `  ${itemKey(r.item)}  ← ${r.availableInbound[0]!.from} (${r.availableInbound[0]!.relation}, inverse of ${r.availableInbound[0]!.via})`,
    );

  const withAvail = rows.filter((r) => r.availableInbound.length > 0).length;
  console.log(
    `\nZero-inbound pages with an EVIDENCE-SUPPORTED available inbound edge: ${withAvail}`,
  );
  console.log(
    `Zero-inbound pages with NO honest inbound available:                   ${rows.length - withAvail}`,
  );
  console.log(
    `Zero-inbound pages that are rendered on some other page (inboundRefs>0): ${rows.filter((r) => r.renderedInbound > 0).length}`,
  );

  const rend = renderedReport();
  console.log(`\n--- Reachability: the SEO audit's model (navGraph) ---`);
  console.log(
    `Published pages with ZERO navGraph inbound:            ${rend.zeroNavInbound}`,
  );
  console.log(
    `Published pages the MODEL sees as hub-only:            ${rend.hubOnly}`,
  );
  table('  model-hub-only by content type', rend.hubOnlyByType);

  const { rendered: trueRendered, unrenderedEdges } = trueRenderedInbound();
  const noRendered = PUBLISHED_CONTENT.filter(
    (i) => !(trueRendered.get(itemKey(i))?.size ?? 0),
  );
  console.log(`\n--- Reachability: links the pages ACTUALLY render ---`);
  console.log(
    `Published pages with ZERO rendered inbound link (excluding hubs): ${noRendered.length}`,
  );
  for (const i of noRendered.slice(0, 20)) console.log(`  ${itemKey(i)}`);
  const zeroSemButRendered = rows.filter(
    (r) => (trueRendered.get(itemKey(r.item))?.size ?? 0) > 0,
  );
  console.log(
    `Of the ${rows.length} zero-SEMANTIC-inbound pages, ${zeroSemButRendered.length} do have a rendered inbound link.`,
  );
  // Where does that rendered link come from?
  const viaParent = zeroSemButRendered.filter(
    (r) => r.item.contentType === 'cultivar' || r.item.contentType === 'breed',
  ).length;
  console.log(`  via ParentSubEntities (cultivar/breed):        ${viaParent}`);
  console.log(
    `  via reciprocal RelatedContent on their targets: ${zeroSemButRendered.length - viaParent}`,
  );

  // Edges that exist in the graph but no panel prints. The graph being right is
  // not the same as the page being right.
  console.log(
    `\nSemantic edges rendered by NO panel: ${unrenderedEdges.length}`,
  );
  const unByRel = new Map<string, number>();
  const unByType = new Map<string, number>();
  for (const e of unrenderedEdges) {
    unByRel.set(
      `${e.from.type} --${e.field}(${e.relation})--> ${e.to.type}`,
      (unByRel.get(
        `${e.from.type} --${e.field}(${e.relation})--> ${e.to.type}`,
      ) ?? 0) + 1,
    );
    unByType.set(e.relation, (unByType.get(e.relation) ?? 0) + 1);
  }
  table('  unrendered edges by relation', unByType);
  table('  unrendered edges by shape', unByRel, 12);

  const rc = relatedConceptReport();
  console.log(`\n--- relatedConcept ---`);
  console.log(`relatedConcept: ${rc.rc} / ${rc.total} = ${rc.pct.toFixed(1)}%`);
  console.log(
    `  same-type: ${rc.sameType} (${((rc.sameType / rc.rc) * 100).toFixed(1)}% of relatedConcept)`,
  );
  table('by SOURCE type', rc.bySource);
  table('by TARGET type', rc.byTarget);
  table('by SOURCE field', rc.byField);
  table('top type pairs', rc.byPair, 15);
  table('highest-degree relatedConcept nodes', rc.degree, 15);
  console.log(
    `\nReplacement candidates (precise reverse WITH defined inverse): ${rc.candidates.length}`,
  );
  for (const c of rc.candidates)
    console.log(
      `  ${c.typeSafe ? 'OK  ' : 'BAD '} ${key(c.edge.from.type, c.edge.from.slug)} → ${key(c.edge.to.type, c.edge.to.slug)}  proposed=${c.proposed} (reverse ${c.reverseRelation} via ${c.reverseField})`,
    );
  console.log(
    `  type-safe candidates: ${rc.candidates.filter((c) => c.typeSafe).length}`,
  );

  console.log(
    '\n--- entity-needs-inbound: breakdown by type and entailed inverse ---',
  );
  const needs = rows.filter((r) => r.classification === 'entity-needs-inbound');
  const needsByType = new Map<string, number>();
  const needsByInverse = new Map<string, number>();
  for (const r of needs) {
    needsByType.set(
      r.item.contentType,
      (needsByType.get(r.item.contentType) ?? 0) + 1,
    );
    for (const rel of new Set(
      r.availableInbound.map(
        (a) => `${r.item.contentType}: ${a.via} ⁻¹ = ${a.relation}`,
      ),
    ))
      needsByInverse.set(rel, (needsByInverse.get(rel) ?? 0) + 1);
  }
  table('  by type', needsByType);
  table('  by entailed inverse (pages, not edges)', needsByInverse, 20);

  const inv = inverseHealth();
  console.log(`\n--- Inverse map health ---`);
  console.log(
    `Relations in use with NO defined inverse: ${inv.noInverse.length}`,
  );
  let invEdges = 0;
  for (const [r, n] of inv.noInverse) {
    console.log(`  ${r.padEnd(30)} ${n}`);
    invEdges += n;
  }
  console.log(`  TOTAL edges that dead-end: ${invEdges}`);
  console.log(`\nType-unsafe inverses:`);
  for (const u of inv.unsafe)
    console.log(
      `  ${u.relation} ⁻¹ = ${u.inverse} implies target "${u.implies}", but ${u.bad} edges have sources ${u.sources.join('/')}`,
    );
}

main();
