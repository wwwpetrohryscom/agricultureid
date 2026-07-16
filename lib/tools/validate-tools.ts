import { SOURCES } from '@/data/sources';
import { FORMULAS, FORMULA_BY_ID } from '@/lib/tools/formulas';
import { TOOLS } from '@/lib/tools/tools';
import { COMMODITIES } from '@/content';
import { MOISTURE_BASES } from '@/types/tools';

export interface ToolIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Wording that turns a calculation into advice.
 *
 * These tools compute; they do not tell anyone what to do. "Optimal moisture"
 * and "recommended capacity" are claims this platform has no basis for and no
 * source behind — the right figure depends on the commodity, the contract, the
 * equipment, and the jurisdiction. The line is deliberate: a tool may say what
 * a number IS, never what it SHOULD BE.
 */
const ADVISORY_WORDING =
  /\b(?:recommend(?:ed|s|ation|ations)?|optimal|optimum|ideal(?:ly)?|best practice|you should|should be|must be set|advis(?:e|ed|able))\b/i;

/**
 * A negator that turns the sentence into a REFUSAL rather than advice.
 *
 * This distinction is the whole point, and a bare keyword scan gets it exactly
 * backwards. The most safety-conscious sentences on the platform are the ones
 * that name the thing they refuse to do — "this is an educational conversion,
 * not a fertilizer recommendation", "does not recommend a depth by crop". Those
 * are the sentences we most want to KEEP, and a naive matcher flags them while
 * passing a page that quietly says "optimal moisture is 14%".
 *
 * So the scan is sentence-level: a sentence carrying a negator is a disclaimer
 * and is skipped; an unnegated advisory word is real advice and is rejected.
 */
const NEGATOR =
  /\b(?:not|never|no|nor|neither|cannot|can’t|can't|without|rather than|instead of|does not|do not|don’t|don't|isn’t|isn't)\b/i;

/** Split prose into sentences for negation-aware scanning. */
function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?;])\s+|\s{2,}|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * The first genuinely advisory phrase in `text`, or null.
 * Sentences that negate are refusals, not advice.
 *
 * Exported so tests can prove the discrimination in BOTH directions: that a
 * refusal is kept AND that real advice is caught. A rule verified only by
 * "the error count went to zero" is a rule that may simply never fire.
 */
export function advisoryPhrase(text: string): string | null {
  for (const s of sentences(text)) {
    if (NEGATOR.test(s)) continue;
    const m = ADVISORY_WORDING.exec(s);
    if (m) return m[0];
  }
  return null;
}

/** Tools whose category makes a safety disclosure mandatory (Phase 5E). */
const COMMODITY_CATEGORIES = new Set([
  'commodity',
  'post-harvest',
  'storage',
  'processing',
  'trade',
]);

/** Phase 3C — formula-registry and tool integrity (3C.12), extended by 5E. */
export function toolIssues(): ToolIssue[] {
  const out: ToolIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));
  const commoditySlugs = new Set(COMMODITIES.map((c) => c.slug));
  const bases = new Set<string>(MOISTURE_BASES);
  const liveFormulaIds = new Set(FORMULAS.map((f) => f.formulaId));
  const formulaIds = new Set<string>();

  for (const f of FORMULAS) {
    const w = `formula:${f.formulaId}`;
    if (formulaIds.has(f.formulaId))
      err('formula-dup-id', `Duplicate formula id`, w);
    formulaIds.add(f.formulaId);
    if (!f.formulaVersion || !f.calcVersion)
      err('formula-no-version', 'Formula missing version', w);
    if (!f.expression?.trim())
      err('formula-no-expression', 'Formula missing expression', w);
    if (!f.limitations?.length)
      err('formula-no-limitations', 'Formula missing limitations', w);
    if (!ISO_DATE.test(f.lastReviewedAt))
      err('formula-bad-date', 'Bad lastReviewedAt', w);
    // A formula with no source is an assertion, not a citation (§18).
    if (!f.sourceIds?.length)
      err('formula-no-source', 'Formula cites no source', w);
    for (const id of f.sourceIds)
      if (!sourceIds.has(id))
        err('formula-bad-source', `Unknown source "${id}"`, w);

    /* ---- Phase 5E additions ------------------------------------------- */

    // Moisture maths must declare its accepted bases. A moisture formula that
    // does not say whether it means wet or dry basis is ambiguous by
    // construction, and the ambiguity silently corrupts every result built on
    // it — 20% wet-basis and 20% dry-basis are different quantities.
    const touchesMoisture =
      /moisture|dry.?matter|shrink|drying/i.test(f.formulaId) ||
      /M_wb|M_db|moisture/i.test(f.expression);
    if (touchesMoisture && !f.acceptedBases?.length)
      err(
        'formula-no-basis',
        'Moisture-related formula must declare acceptedBases — basis is never inferred',
        w,
      );
    for (const b of f.acceptedBases ?? [])
      if (!bases.has(b)) err('formula-bad-basis', `Unknown basis "${b}"`, w);

    // A declared range must be a range.
    for (const inp of f.inputs) {
      if (inp.min != null && inp.max != null && inp.min > inp.max)
        err(
          'formula-bad-range',
          `Input "${inp.key}" has min ${inp.min} above max ${inp.max}`,
          w,
        );
    }

    // Commodity applicability must resolve — an unsupported conversion is one
    // that names a commodity this platform does not have.
    for (const slug of f.commodityApplicability ?? [])
      if (!commoditySlugs.has(slug))
        err(
          'formula-unsupported-commodity',
          `commodityApplicability → "${slug}" is not a commodity`,
          w,
        );

    // A deprecated formula must point somewhere live, or callers silently keep
    // using stale maths with no route forward.
    if (f.deprecated && !f.replacedBy)
      err(
        'formula-deprecated-no-successor',
        'Deprecated formula has no replacedBy',
        w,
      );
    if (f.replacedBy && !liveFormulaIds.has(f.replacedBy))
      err(
        'formula-stale-successor',
        `replacedBy → "${f.replacedBy}" does not resolve`,
        w,
      );
    if (!f.testCases?.length) {
      err('formula-no-tests', 'Formula has no test cases', w);
    } else {
      // Integrity: the implementation must reproduce every declared test case.
      for (const t of f.testCases) {
        let got: number;
        try {
          got = f.compute(t.inputs);
        } catch (e) {
          err(
            'formula-test-throw',
            `Test case threw: ${(e as Error).message}`,
            w,
          );
          continue;
        }
        const tol = t.tolerance ?? 1e-6;
        if (!Number.isFinite(got) || Math.abs(got - t.expect) > tol)
          err(
            'formula-test-mismatch',
            `compute(${JSON.stringify(t.inputs)}) = ${got}, expected ${t.expect}`,
            w,
          );
      }
    }
  }

  const slugs = new Set<string>();
  for (const t of TOOLS) {
    const w = `tool:${t.slug}`;
    if (!SLUG.test(t.slug))
      err('tool-bad-slug', `Bad tool slug "${t.slug}"`, w);
    if (slugs.has(t.slug)) err('tool-dup-slug', `Duplicate tool slug`, w);
    slugs.add(t.slug);
    if (!t.purpose?.trim()) err('tool-no-purpose', 'Tool missing purpose', w);
    for (const id of t.formulaIds)
      if (!FORMULA_BY_ID.has(id))
        err('tool-bad-formula', `Tool references unknown formula "${id}"`, w);
    const fieldKeys = new Set<string>();
    for (const f of t.fields) {
      if (fieldKeys.has(f.key))
        err('tool-dup-field', `Duplicate field "${f.key}"`, w);
      fieldKeys.add(f.key);
      if (!f.label?.trim())
        err('tool-field-no-label', `Field "${f.key}" missing label`, w);
      if (f.type === 'select' && (!f.options || f.options.length === 0))
        err('tool-select-no-options', `Select "${f.key}" has no options`, w);
    }
    if (typeof t.compute !== 'function')
      err('tool-no-compute', 'Tool missing compute', w);

    /* ---- Phase 5E additions ------------------------------------------- */

    // A commodity tool must say what it is not. A storage-capacity number
    // without "this is not an engineering certification" is exactly the kind of
    // output someone builds against.
    if (COMMODITY_CATEGORIES.has(t.category) && !t.safetyDisclosure?.trim())
      err(
        'tool-no-safety-disclosure',
        `A ${t.category} tool must carry a safetyDisclosure`,
        w,
      );

    // These tools calculate; they do not advise. Negated sentences ("not a
    // fertilizer recommendation") are refusals and are deliberately kept.
    const advisory = advisoryPhrase(
      [
        t.purpose,
        t.safetyDisclosure ?? '',
        ...(t.limitations ?? []),
        ...t.fields.flatMap((f) => [f.label, f.help ?? '']),
      ].join('\n'),
    );
    if (advisory)
      err(
        'tool-advisory-wording',
        `Uses advisory wording ("${advisory}") unnegated — a calculator states what a number is, never what it should be`,
        w,
      );

    // Every tool must resolve at least one formula: a calculator with no
    // registered formula is doing maths somewhere it cannot be reviewed.
    if (!t.formulaIds.length)
      err(
        'tool-no-formula',
        'Tool resolves no formula — the maths must live in the registry, not the component',
        w,
      );

    for (const slug of t.commodityApplicability ?? [])
      if (!commoditySlugs.has(slug))
        err(
          'tool-unsupported-commodity',
          `commodityApplicability → "${slug}" is not a commodity`,
          w,
        );

    // Declared field ranges must be coherent, or the form rejects valid input.
    for (const f of t.fields)
      if (f.min != null && f.max != null && f.min > f.max)
        err(
          'tool-bad-field-range',
          `Field "${f.key}" has min ${f.min} above max ${f.max}`,
          w,
        );
  }

  return out;
}
