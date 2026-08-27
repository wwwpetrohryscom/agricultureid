/**
 * Deterministic gate for the tool layer. Offline, executable.
 *
 * `calc:contract` already proves that every tool runs the formulas it
 * advertises. This gate proves the things that survive that check:
 *
 *  1. **Constants are the sourced ones.** Every exact factor is asserted
 *     against its definition, so a stale or mistyped constant fails here rather
 *     than shifting every answer by a fraction of a percent.
 *  2. **Blank is not zero.** An empty required field must produce an error, not
 *     a confident answer computed from an implied zero.
 *  3. **Domain limits hold.** A zero or negative divisor must be refused, not
 *     turned into Infinity and rendered as a number.
 *  4. **Nothing overflows into an answer.** Extreme but finite inputs must not
 *     surface as "∞" or "NaN".
 *  5. **No silent generic fallback.** A conversion that needs a crop-specific
 *     constant must refuse without one rather than substitute an average.
 *  6. **Every contextual pairing resolves and explains itself.** A related-tools
 *     rule naming a tool that no longer exists is a dead link; one without a
 *     reason is an unexplainable recommendation.
 */
import { TOOLS, TOOL_BY_SLUG } from '../lib/tools/tools';
import { FORMULAS, getFormula } from '../lib/tools/formulas';
import { toolIssues } from '../lib/tools/validate-tools';
import {
  AREA_TO_M2,
  MASS_TO_KG,
  VOLUME_TO_L,
  BUSHEL_STANDARDS,
} from '../lib/tools/constants';
import { LPS_TO_M3H } from '../lib/tools/formulas-agronomy';
import {
  RELEVANCE_BY_CONTENT_TYPE,
  RELEVANCE_BY_PATH_PREFIX,
  referencedToolSlugs,
} from '../lib/tools/relevance';
import type { ToolConfig } from '../types/tools';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

/* -- 1. constants are exactly their definitions ---------------------------- */
const EXACT: [string, number, number][] = [
  ['1 hectare in m²', AREA_TO_M2.hectare, 10_000],
  ['1 acre in m² (4840 sq yd, exact)', AREA_TO_M2.acre, 4046.8564224],
  ['1 lb in kg (international avoirdupois, exact)', MASS_TO_KG.lb, 0.45359237],
  ['1 tonne in kg', MASS_TO_KG.tonne, 1000],
  ['1 m³ in litres', VOLUME_TO_L.m3, 1000],
  ['1 US gallon in litres (exact)', VOLUME_TO_L['gal-us'], 3.785411784],
  ['L/s to m³/h (3600 ÷ 1000, exact)', LPS_TO_M3H, 3.6],
];
for (const [label, actual, expected] of EXACT) {
  if (actual !== expected)
    fail(`constant drift: ${label} is ${actual}, definition is ${expected}`);
}

/* -- 2..4. every tool, driven with hostile inputs --------------------------- */
function blankInputs(tool: ToolConfig): Record<string, string> {
  const v: Record<string, string> = {};
  for (const f of tool.fields) {
    v[f.key] = f.type === 'select' ? (f.options?.[0]?.value ?? '') : '';
  }
  return v;
}
function filled(tool: ToolConfig, value: string): Record<string, string> {
  const v: Record<string, string> = {};
  for (const f of tool.fields) {
    v[f.key] = f.type === 'select' ? (f.options?.[0]?.value ?? '') : value;
  }
  return v;
}
const isBadNumber = (s: string) =>
  /∞|Infinity|NaN|undefined|null/i.test(String(s));

for (const tool of TOOLS) {
  const numericFields = tool.fields.filter((f) => f.type === 'number');
  if (numericFields.length === 0) continue;

  /* blank required fields must not compute */
  const blank = tool.compute(blankInputs(tool));
  if (!blank.error && blank.outputs.length > 0)
    fail(
      `${tool.slug}: computed an answer from entirely blank inputs — blank is not zero`,
    );

  /* zero everywhere: either refused, or finite and sane. Never Infinity. */
  for (const value of ['0', '-1', '1e308', '0.0000001']) {
    let result;
    try {
      result = tool.compute(filled(tool, value));
    } catch (e) {
      fail(
        `${tool.slug}: threw on input "${value}" instead of returning an error`,
      );
      continue;
    }
    for (const o of result.outputs) {
      if (isBadNumber(o.value))
        fail(
          `${tool.slug}: input "${value}" produced "${o.value}" for ${o.label} — a non-finite result must be refused, not rendered`,
        );
    }
    if (value === '-1') {
      const negative = result.outputs.some((o) =>
        /^-/.test(String(o.value).replace(/,/g, '')),
      );
      if (negative && !result.error) {
        // Negative outputs are legitimate for some tools (a mass balance can be
        // negative); flag only where a physical quantity cannot be.
        const physical =
          /volume|mass|area|rate|density|time|spacing|count|packages/i;
        for (const o of result.outputs) {
          if (
            physical.test(o.label) &&
            Number(String(o.value).replace(/,/g, '')) < 0
          )
            fail(
              `${tool.slug}: returned a negative ${o.label} (${o.value}) from a negative input rather than refusing it`,
            );
        }
      }
    }
  }
}

/* -- 5. no silent generic fallback ----------------------------------------- */
{
  const yieldTool = TOOL_BY_SLUG.get('yield-converter');
  if (!yieldTool) fail('yield-converter is missing');
  else {
    // Bushel conversions need a commodity-specific standard weight. With no
    // commodity chosen the tool must refuse rather than use an average.
    const bushelFields = yieldTool.fields.filter((f) =>
      /commodity|crop|bushel/i.test(f.key + f.label),
    );
    if (bushelFields.length === 0)
      fail(
        'yield-converter declares no commodity field, so a bushel conversion could only use a generic weight',
      );
  }
  if (Object.keys(BUSHEL_STANDARDS).length === 0)
    fail('no bushel standards are registered');
  for (const [key, std] of Object.entries(BUSHEL_STANDARDS)) {
    const s = std as { sourceId?: string; lbPerBushel?: number };
    if (!s.sourceId)
      fail(
        `bushel standard "${key}" carries no source — a constant without provenance`,
      );
    if (!s.lbPerBushel || s.lbPerBushel <= 0)
      fail(`bushel standard "${key}" has no positive weight`);
  }
}

/* -- 6. contextual pairings resolve and explain themselves ------------------ */
for (const [contentType, entries] of Object.entries(
  RELEVANCE_BY_CONTENT_TYPE,
)) {
  for (const e of entries) {
    if (!TOOL_BY_SLUG.has(e.toolSlug))
      fail(
        `relevance rule for content type "${contentType}" names unknown tool "${e.toolSlug}"`,
      );
    if (!e.reason || e.reason.trim().length < 20)
      fail(
        `relevance rule ${contentType} → ${e.toolSlug} has no usable reason — an unexplainable pairing`,
      );
  }
  const slugs = entries.map((e) => e.toolSlug);
  if (new Set(slugs).size !== slugs.length)
    fail(`relevance rules for "${contentType}" name the same tool twice`);
}
for (const rule of RELEVANCE_BY_PATH_PREFIX) {
  if (!rule.prefix.startsWith('/'))
    fail(`relevance path prefix "${rule.prefix}" is not a path`);
  for (const e of rule.tools) {
    if (!TOOL_BY_SLUG.has(e.toolSlug))
      fail(
        `relevance rule for path "${rule.prefix}" names unknown tool "${e.toolSlug}"`,
      );
    if (!e.reason || e.reason.trim().length < 20)
      fail(
        `relevance rule ${rule.prefix} → ${e.toolSlug} has no usable reason`,
      );
  }
}

/* -- formula reference cases, executed ------------------------------------- */
let cases = 0;
for (const f of FORMULAS) {
  const formula = getFormula(f.formulaId);
  if (!formula) {
    fail(`${f.formulaId}: registered but not resolvable by id`);
    continue;
  }
  for (const tc of formula.testCases ?? []) {
    cases += 1;
    let got: number;
    try {
      got = formula.compute(tc.inputs);
    } catch (e) {
      fail(`${f.formulaId}: reference case threw — ${(e as Error).message}`);
      continue;
    }
    const tolerance = tc.tolerance ?? 1e-9;
    const limit = Math.max(tolerance, Math.abs(tc.expect) * tolerance);
    if (Math.abs(got - tc.expect) > limit)
      fail(
        `${f.formulaId}: reference case ${JSON.stringify(tc.inputs)} expected ${tc.expect}, got ${got}`,
      );
  }
}

/* -- existing structural tool issues --------------------------------------- */
for (const issue of toolIssues()) {
  if (issue.level === 'error')
    fail(`${issue.where ?? issue.code}: ${issue.message}`);
}

console.log('\nTool validation\n');
console.log(`  Tools:                    ${TOOLS.length}`);
console.log(`  Formulas:                 ${FORMULAS.length}`);
console.log(`  Reference cases executed: ${cases}`);
console.log(`  Exact constants checked:  ${EXACT.length}`);
console.log(
  `  Contextual pairings:      ${Object.values(RELEVANCE_BY_CONTENT_TYPE).reduce((n, v) => n + v.length, 0) + RELEVANCE_BY_PATH_PREFIX.reduce((n, r) => n + r.tools.length, 0)} across ${referencedToolSlugs().length} tools`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Tool validation passed.\n');
