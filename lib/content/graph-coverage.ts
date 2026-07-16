import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  resolveRef,
} from '@/lib/content/registry';
import {
  semanticEdges,
  allSemanticEdges,
  RELATION_TYPES,
} from '@/lib/content/relations';
import { REF_FIELDS, isRefField } from '@/lib/content/ref-fields';
import { CONTENT_TYPES } from '@/lib/site';
import type { AnyContent, ContentRef } from '@/types/content';

/**
 * Phase 5F — graph coverage, measured rather than assumed.
 *
 * ## Why a coverage report and not just a validator
 *
 * The Phase 5D types contributed zero edges and every gate stayed green, because
 * the gates asked "is each edge valid?" — a question with a happy answer when
 * there are no edges. The only way to notice is to compare what the content
 * DECLARES against what the graph DISCOVERS, per type, and to treat a shortfall
 * as a failure.
 *
 * This module answers the question the old gates could not: *is anything
 * missing?*
 */

const TYPE_SET = new Set<string>(CONTENT_TYPES);

/** Structural ref detection — deliberately independent of `refsWithField`. */
export function isContentRefValue(value: unknown): value is ContentRef {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<ContentRef>;
  return (
    typeof v.type === 'string' &&
    typeof v.slug === 'string' &&
    TYPE_SET.has(v.type)
  );
}

/** Every (field, ref) an item declares, found by walking it. */
export function declaredRefs(
  item: AnyContent,
): { field: string; ref: ContentRef }[] {
  const out: { field: string; ref: ContentRef }[] = [];
  for (const [field, value] of Object.entries(item)) {
    if (isContentRefValue(value)) out.push({ field, ref: value });
    else if (Array.isArray(value))
      for (const entry of value)
        if (isContentRefValue(entry)) out.push({ field, ref: entry });
  }
  return out;
}

export interface TypeCoverage {
  contentType: string;
  published: number;
  entriesDeclaringRefs: number;
  declaredRefs: number;
  /** Distinct resolvable targets declared (what the graph should contain). */
  declaredTargets: number;
  discoveredEdges: number;
  missingDeclaredEdges: string[];
  unexpectedEdges: string[];
}

/** Per-content-type declared-vs-discovered coverage. */
export function graphCoverage(): TypeCoverage[] {
  const rows = new Map<string, TypeCoverage>();
  for (const type of CONTENT_TYPES)
    rows.set(type, {
      contentType: type,
      published: 0,
      entriesDeclaringRefs: 0,
      declaredRefs: 0,
      declaredTargets: 0,
      discoveredEdges: 0,
      missingDeclaredEdges: [],
      unexpectedEdges: [],
    });

  for (const item of PUBLISHED_CONTENT) {
    const row = rows.get(item.contentType);
    if (!row) continue;
    row.published++;

    const declared = declaredRefs(item).filter(
      // A ref in an unregistered field is reported separately; a ref to a
      // missing page is the resolution gate's business, not coverage's.
      (d) => isRefField(d.field) && resolveRef(d.ref),
    );
    if (declared.length) row.entriesDeclaringRefs++;
    row.declaredRefs += declared.length;

    const self = `${item.contentType}:${item.slug}`;
    const targets = new Set(
      declared
        .map((d) => `${d.ref.type}:${d.ref.slug}`)
        .filter((t) => t !== self),
    );
    row.declaredTargets += targets.size;

    const emitted = new Set(
      semanticEdges(item).map((e) => `${e.to.type}:${e.to.slug}`),
    );
    row.discoveredEdges += emitted.size;

    for (const t of targets)
      if (!emitted.has(t)) row.missingDeclaredEdges.push(`${self} → ${t}`);
    for (const t of emitted)
      if (!targets.has(t)) row.unexpectedEdges.push(`${self} → ${t}`);
  }
  return [...rows.values()];
}

export interface GraphIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

/** Phase 5F — the graph-coverage gates (§2). */
export function graphIssues(): GraphIssue[] {
  const out: GraphIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  // (1) A ref field nobody has mapped. Discovery is structural, so this field
  //     WOULD have become an edge with a guessed meaning; instead it is a hard
  //     error until someone says what it asserts.
  const unmapped = new Map<string, string>();
  for (const item of ALL_CONTENT)
    for (const { field } of declaredRefs(item))
      if (!isRefField(field) && !unmapped.has(field))
        unmapped.set(field, `${item.contentType}:${item.slug}`);
  for (const [field, where] of unmapped)
    err(
      'graph-unmapped-ref-field',
      `Field "${field}" holds content references but is not in REF_FIELDS — declare what relation it asserts (lib/content/ref-fields.ts)`,
      where,
    );

  // (2) Declared-but-undiscovered, and the zero-edge case that started all this.
  for (const row of graphCoverage()) {
    for (const miss of row.missingDeclaredEdges.slice(0, 20))
      err(
        'graph-declared-edge-missing',
        `Declares a reference the graph does not emit: ${miss}`,
        `type:${row.contentType}`,
      );
    if (row.declaredRefs > 0 && row.discoveredEdges === 0)
      err(
        'graph-type-contributes-nothing',
        `${row.contentType} declares ${row.declaredRefs} references but contributes ZERO edges — the type is invisible to the graph`,
        `type:${row.contentType}`,
      );
    if (row.declaredTargets > row.discoveredEdges)
      err(
        'graph-declared-exceeds-discovered',
        `${row.contentType} declares ${row.declaredTargets} distinct targets but the graph holds ${row.discoveredEdges}`,
        `type:${row.contentType}`,
      );
  }

  // (3) Every edge must name a registered source field, and a generated edge
  //     must name its generator — a computed edge must never read as authored.
  for (const edge of allSemanticEdges()) {
    const where = `${edge.from.type}:${edge.from.slug}`;
    if (!isRefField(edge.field))
      err(
        'graph-edge-without-source-field',
        `Edge → ${edge.to.type}:${edge.to.slug} came from unregistered field "${edge.field}"`,
        where,
      );
    if (!RELATION_TYPES.has(edge.relation))
      err(
        'graph-unknown-relation',
        `Unknown relation "${edge.relation}"`,
        where,
      );
    if (edge.origin === 'generated' && !edge.generator)
      err(
        'graph-generated-without-generator',
        `Generated edge from "${edge.field}" does not name its generator`,
        where,
      );
    if (edge.origin !== 'generated' && edge.generator)
      err(
        'graph-generator-on-declared-edge',
        `Edge from "${edge.field}" names a generator but is marked ${edge.origin}`,
        where,
      );
    const spec = REF_FIELDS[edge.field];
    if (spec && spec.origin !== edge.origin)
      err(
        'graph-origin-mismatch',
        `Edge from "${edge.field}" is marked ${edge.origin}, registry says ${spec.origin}`,
        where,
      );
  }

  return out;
}
