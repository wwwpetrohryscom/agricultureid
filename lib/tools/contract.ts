import { FORMULAS, FORMULA_BY_ID, getFormula } from '@/lib/tools/formulas';
import { TOOLS } from '@/lib/tools/tools';
import type { CalcFormula, ToolConfig, ToolField } from '@/types/tools';

/**
 * The formula contract, enforced by execution rather than by inspection.
 *
 * ## Why this exists
 *
 * The yield converter declared `formulaIds: ['yield-tha-to-buacre']` and ran
 * none of it. Its maths lived in an inline pivot table, so the formula panel
 * published a t/ha → bu/acre expression while the tool was converting, say,
 * lb/acre to kg/ha — and the published expression named a constant
 * (`0.8921785`) that the code did not even use. Every static check passed: the
 * id resolved, the formula had sources, versions, limitations, and reference
 * cases that all went green. The formula was simply decorative.
 *
 * No amount of reading declarations catches that. The only thing that does is
 * RUNNING each tool and watching which formulas actually execute. This module
 * instruments the registry, drives every tool across a generated input matrix,
 * and compares what was declared against what ran.
 *
 * ## The four things it proves
 *
 * 1. **No unregistered calculation path.** Every tool executes at least one
 *    registered formula on some input (an identity conversion excepted, which
 *    must return its input unchanged and is declared as such).
 * 2. **Nothing decorative.** Every id in `ToolConfig.formulaIds` is actually
 *    executed by some reachable input combination.
 * 3. **Nothing undeclared.** Every formula the tool executes appears in
 *    `ToolConfig.formulaIds` — which is what the panel renders, so the reader
 *    sees the maths that ran.
 * 4. **Nothing unreachable.** Every non-deprecated registry formula is composed
 *    by some tool. A deprecated formula is exempt: being on its way out is
 *    exactly what deprecation means.
 */

export interface ContractIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

/** Tools whose result is legitimately the input, for at least some inputs. */
const IDENTITY_CAPABLE = new Set(['yield-converter', 'unit-converters']);

/**
 * A small set of representative values per field.
 *
 * Selects contribute every declared option — that is the whole point, since a
 * mode or unit select is exactly what routes to a different formula. Numbers
 * contribute one in-range value: the aim is to reach every BRANCH, not to
 * fuzz the arithmetic, which the formulas' own reference cases already do.
 */
function candidates(f: ToolField): string[] {
  if (f.type === 'select') return (f.options ?? []).map((o) => o.value);
  const min = f.min ?? 0;
  const max = f.max ?? min + 100;
  // Something comfortably inside the range and not zero, so divisors are happy.
  const mid = min > 0 ? min + (max - min) / 3 : Math.min(10, max / 2 || 10);
  return [String(Number.isFinite(mid) && mid > 0 ? mid : 1)];
}

/**
 * Every input combination worth trying, generated the way the UI actually
 * behaves.
 *
 * `showIf` is honoured: a field the form would hide contributes nothing, and
 * takes its default instead. This matters enormously and is not a nicety — the
 * unit converter has nine selects but shows only the two or three relevant to
 * the chosen dimension, so a naive cartesian product is astronomically large
 * AND explores states the UI can never present. A first attempt here capped the
 * product and silently truncated to the first dimension's combinations, which
 * made five genuinely-reachable formulas look like dead maths. Mirroring
 * `showIf` collapses the space to what a user can actually reach.
 */
function inputMatrix(tool: ToolConfig, cap = 20_000): Record<string, string>[] {
  const defaults: Record<string, string> = {};
  for (const f of tool.fields) defaults[f.key] = f.default ?? '';

  let combos: Record<string, string>[] = [{ ...defaults }];
  for (const field of tool.fields) {
    const next: Record<string, string>[] = [];
    for (const base of combos) {
      // A hidden field keeps its default and contributes no branching.
      if (field.showIf && !field.showIf(base)) {
        next.push(base);
        continue;
      }
      for (const v of candidates(field)) {
        if (next.length >= cap) break;
        next.push({ ...base, [field.key]: v });
      }
    }
    combos = next;
    if (combos.length >= cap) break;
  }
  // De-duplicate: hidden fields collapse many branches onto the same state.
  const seen = new Set<string>();
  return combos.filter((c) => {
    const k = JSON.stringify(c);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/**
 * Run every tool over its input matrix with the registry instrumented, and
 * record which formulas each tool actually executes.
 *
 * Instrumentation wraps `compute` on each registry entry. It is restored in a
 * `finally`, so a throwing formula cannot leave the registry patched.
 */
export function executedFormulasByTool(): Map<string, Set<string>> {
  const executed = new Map<string, Set<string>>();
  const originals = new Map<string, CalcFormula['compute']>();
  let current: Set<string> | null = null;

  for (const f of FORMULAS) {
    originals.set(f.formulaId, f.compute);
    const id = f.formulaId;
    const orig = f.compute;
    f.compute = (inputs) => {
      current?.add(id);
      return orig(inputs);
    };
  }

  try {
    for (const tool of TOOLS) {
      const seen = new Set<string>();
      current = seen;
      for (const values of inputMatrix(tool)) {
        try {
          tool.compute(values);
        } catch {
          // A refusal or an invalid combination is a legitimate outcome; it
          // simply executes no formula.
        }
      }
      executed.set(tool.slug, seen);
    }
  } finally {
    current = null;
    for (const f of FORMULAS) {
      const orig = originals.get(f.formulaId);
      if (orig) f.compute = orig;
    }
  }
  return executed;
}

/** Phase 5E — the formula contract (§4). */
export function contractIssues(): ContractIssue[] {
  const out: ContractIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const executed = executedFormulasByTool();
  const composedAnywhere = new Set<string>();

  for (const tool of TOOLS) {
    const where = `tool:${tool.slug}`;
    const declared = new Set(tool.formulaIds);
    const ran = executed.get(tool.slug) ?? new Set<string>();
    for (const id of ran) composedAnywhere.add(id);

    // (1) A tool that never runs a registered formula is doing its maths
    //     somewhere nobody can review.
    if (ran.size === 0 && !IDENTITY_CAPABLE.has(tool.slug))
      err(
        'contract-no-executed-formula',
        'Tool executed no registered formula on any input combination — its calculation is outside the registry',
        where,
      );

    // (2) Decorative: declared, rendered by the panel, never run.
    for (const id of declared)
      if (!ran.has(id))
        err(
          'contract-decorative-formula',
          `Declares "${id}" but never executes it — the formula panel would advertise maths the tool does not run`,
          where,
        );

    // (3) Undeclared: run, but absent from what the reader is shown.
    for (const id of ran)
      if (!declared.has(id))
        err(
          'contract-undeclared-formula',
          `Executes "${id}" without declaring it — the formula panel would omit maths the tool ran`,
          where,
        );

    // Ids must resolve at all.
    for (const id of declared)
      if (!FORMULA_BY_ID.has(id))
        err(
          'contract-unknown-formula',
          `Declares unknown formula "${id}"`,
          where,
        );

    // A tool must not advertise a retired formula.
    for (const id of declared) {
      const f = getFormula(id);
      if (f?.deprecated)
        err(
          'contract-deprecated-formula',
          `Declares deprecated formula "${id}"${f.replacedBy ? ` — use "${f.replacedBy}"` : ''}`,
          where,
        );
    }
  }

  // (4) Unreachable registry entries. Deprecated formulas are exempt: they are
  //     retained for provenance and are meant to be uncomposed.
  for (const f of FORMULAS) {
    if (f.deprecated) continue;
    if (!composedAnywhere.has(f.formulaId))
      err(
        'contract-unreachable-formula',
        'Registered but composed by no tool on any input — dead maths, or a tool that should be using it',
        `formula:${f.formulaId}`,
      );
  }

  // Every formula a tool can reach must have reference cases; a branch reachable
  // in the UI with no tested maths behind it is untested coverage.
  for (const id of composedAnywhere) {
    const f = getFormula(id);
    if (f && !f.testCases.length)
      err(
        'contract-untested-branch',
        'Executed by a tool but has no reference test case',
        `formula:${id}`,
      );
  }

  return out;
}
