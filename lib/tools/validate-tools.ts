import { SOURCES } from '@/data/sources';
import { FORMULAS, FORMULA_BY_ID } from '@/lib/tools/formulas';
import { TOOLS } from '@/lib/tools/tools';

export interface ToolIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Phase 3C — formula-registry and tool integrity (3C.12). */
export function toolIssues(): ToolIssue[] {
  const out: ToolIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));
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
    for (const id of f.sourceIds)
      if (!sourceIds.has(id))
        err('formula-bad-source', `Unknown source "${id}"`, w);
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
  }

  return out;
}
