import { describe, expect, it } from 'vitest';
import { TOOLS, TOOL_BY_SLUG } from '@/lib/tools/tools';
import { FORMULAS, getFormula } from '@/lib/tools/formulas';
import { LPS_TO_M3H } from '@/lib/tools/formulas-agronomy';
import { AREA_TO_M2, MASS_TO_KG } from '@/lib/tools/constants';
import {
  RELEVANCE_BY_CONTENT_TYPE,
  RELEVANCE_BY_PATH_PREFIX,
  toolsForContentType,
  toolsForPath,
  referencedToolSlugs,
} from '@/lib/tools/relevance';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const NEW_TOOLS = [
  'production-area-yield-calculator',
  'irrigation-flow-time-calculator',
  'row-spacing-calculator',
  'nutrient-rate-converter',
];

describe('wave 14 — the maths, checked against hand-derived values', () => {
  it('multiplies area by yield to a value computed by hand', () => {
    // 100 ha × 8.5 t/ha = 850 t. Verified by hand, not by running the tool.
    const t = TOOL_BY_SLUG.get('production-area-yield-calculator')!;
    const r = t.compute({ solve: 'production', area: '100', yield: '8.5' });
    expect(r.error).toBeUndefined();
    expect(r.outputs[0]!.value).toBe('850');
    expect(r.outputs[0]!.unit).toBe('t');
  });

  it('round-trips production, area and yield without drift', () => {
    const t = TOOL_BY_SLUG.get('production-area-yield-calculator')!;
    const prod = t.compute({ solve: 'production', area: '12.5', yield: '3.2' });
    expect(prod.outputs[0]!.value).toBe('40');
    const back = t.compute({ solve: 'yield', production: '40', area: '12.5' });
    expect(Number(back.outputs[0]!.value)).toBeCloseTo(3.2, 9);
    const area = t.compute({ solve: 'area', production: '40', yield: '3.2' });
    expect(Number(area.outputs[0]!.value)).toBeCloseTo(12.5, 9);
  });

  it('converts flow and time by the exact definition', () => {
    // 20 L/s = 72 m³/h; 500 m³ ÷ 72 = 6.944444… h. Hand-derived.
    expect(LPS_TO_M3H).toBe(3.6);
    const t = TOOL_BY_SLUG.get('irrigation-flow-time-calculator')!;
    const r = t.compute({ solve: 'time', volume: '500', flow: '20' });
    // The tool renders 5 significant digits; the formula's own reference case
    // asserts the full 6.944444. This checks what a reader actually sees.
    expect(Number(r.outputs[0]!.value)).toBeCloseTo(6.9444, 4);
    expect(Number(r.outputs[2]!.value)).toBe(72);
    expect(
      getFormula('irrigation-time-from-volume-flow')!.compute({
        volume: 500,
        flow: 20,
      }),
    ).toBeCloseTo(6.944444, 6);
  });

  it('derives row geometry from a target density', () => {
    // 10000 ÷ (75000 × 0.75) = 0.177778 m; 75000 × 0.75 ÷ 10000 = 5.625;
    // 10000 ÷ 0.75 = 13333.33. All three by hand.
    const t = TOOL_BY_SLUG.get('row-spacing-calculator')!;
    const r = t.compute({ plants: '75000', row: '0.75' });
    expect(Number(r.outputs[0]!.value)).toBeCloseTo(0.1778, 4);
    expect(Number(r.outputs[2]!.value)).toBeCloseTo(5.625, 3);
    expect(Number(String(r.outputs[3]!.value).replace(/,/g, ''))).toBeCloseTo(
      13333.3,
      1,
    );
  });

  it('converts a product rate to the nutrient it supplies', () => {
    // 200 kg/ha × 46% = 92 kg N/ha; 92 ÷ 0.45359237 ÷ 2.4710538 = 82.08 lb/acre.
    const t = TOOL_BY_SLUG.get('nutrient-rate-converter')!;
    const r = t.compute({ mode: 'to-nutrient', rate: '200', grade: '46' });
    expect(Number(r.outputs[0]!.value)).toBe(92);
    expect(Number(r.outputs[1]!.value)).toBeCloseTo(82.08, 1);
    const back = t.compute({ mode: 'to-product', rate: '92', grade: '46' });
    expect(Number(back.outputs[0]!.value)).toBeCloseTo(200, 6);
  });
});

describe('wave 14 — constants are their definitions', () => {
  it('holds the exact factors these tools rely on', () => {
    expect(AREA_TO_M2.hectare).toBe(10_000);
    expect(AREA_TO_M2.acre).toBe(4046.8564224);
    expect(MASS_TO_KG.lb).toBe(0.45359237);
    expect(LPS_TO_M3H).toBe(3.6);
  });

  it('passes every reference case in the new formulas', () => {
    const ids = FORMULAS.filter((f) =>
      /production|area-from|yield-from|flow|irrigation-time|irrigation-volume|in-row|plants-per-row|row-length|nutrient-rate|product-rate/.test(
        f.formulaId,
      ),
    );
    expect(ids.length).toBeGreaterThan(8);
    for (const f of ids) {
      const formula = getFormula(f.formulaId)!;
      for (const tc of formula.testCases ?? []) {
        const got = formula.compute(tc.inputs);
        const tol = tc.tolerance ?? 1e-9;
        expect(Math.abs(got - tc.expect), f.formulaId).toBeLessThanOrEqual(
          Math.max(tol, Math.abs(tc.expect) * tol),
        );
      }
    }
  });
});

describe('wave 14 — hostile inputs never become answers', () => {
  it('refuses blank required fields rather than assuming zero', () => {
    for (const slug of NEW_TOOLS) {
      const t = TOOL_BY_SLUG.get(slug)!;
      const blank: Record<string, string> = {};
      for (const f of t.fields)
        blank[f.key] = f.type === 'select' ? (f.options?.[0]?.value ?? '') : '';
      const r = t.compute(blank);
      expect(r.error, slug).toBeTruthy();
    }
  });

  it('never renders a non-finite result, in any tool', () => {
    // Six tools threw and one rendered "∞" before the shared guard was added.
    for (const t of TOOLS) {
      for (const value of ['1e308', '0', '-1']) {
        const v: Record<string, string> = {};
        for (const f of t.fields)
          v[f.key] =
            f.type === 'select' ? (f.options?.[0]?.value ?? '') : value;
        const r = t.compute(v);
        for (const o of r.outputs) {
          expect(String(o.value), `${t.slug} @ ${value}`).not.toMatch(
            /∞|Infinity|NaN/i,
          );
        }
      }
    }
  });

  it('refuses a zero divisor instead of returning infinity', () => {
    const t = TOOL_BY_SLUG.get('irrigation-flow-time-calculator')!;
    expect(
      t.compute({ solve: 'time', volume: '500', flow: '0' }).error,
    ).toBeTruthy();
    const r = TOOL_BY_SLUG.get('row-spacing-calculator')!;
    expect(r.compute({ plants: '75000', row: '0' }).error).toBeTruthy();
    const n = TOOL_BY_SLUG.get('nutrient-rate-converter')!;
    expect(
      n.compute({ mode: 'to-product', rate: '92', grade: '0' }).error,
    ).toBeTruthy();
  });
});

describe('wave 14 — contextual pairings are declared, not inferred', () => {
  it('names an existing tool and a reason in every rule', () => {
    const all = [
      ...Object.values(RELEVANCE_BY_CONTENT_TYPE).flat(),
      ...RELEVANCE_BY_PATH_PREFIX.flatMap((r) => r.tools),
    ];
    expect(all.length).toBeGreaterThan(10);
    for (const e of all) {
      expect(TOOL_BY_SLUG.has(e.toolSlug), e.toolSlug).toBe(true);
      expect(e.reason.trim().length, e.toolSlug).toBeGreaterThan(20);
    }
  });

  it('resolves rules for the entity types that carry them', () => {
    expect(toolsForContentType('crop').length).toBeGreaterThan(2);
    expect(toolsForContentType('fertilizer').length).toBeGreaterThan(1);
    expect(toolsForContentType('not-a-type')).toEqual([]);
    expect(
      toolsForPath('/agricultural-markets/wheat-grain').length,
    ).toBeGreaterThan(0);
    expect(toolsForPath('/nowhere')).toEqual([]);
  });

  it('prefills nothing, so context cannot change the maths', () => {
    // Every rule is a link. There is no value carried from the referring page,
    // so a tool opened from the wheat page computes what it computes anywhere.
    for (const entry of toolsForContentType('crop')) {
      expect(Object.keys(entry)).toEqual(['tool', 'reason']);
    }
  });
});

describe('wave 14 — routes and search', () => {
  it('publishes a route and a document for every tool', () => {
    const paths = allRoutes().map((r) => r.path);
    const docs = buildSearchDocuments().filter((d) => d.type === 'tool');
    expect(docs).toHaveLength(TOOLS.length);
    for (const slug of NEW_TOOLS) {
      expect(paths).toContain(`/tools/${slug}`);
      expect(docs.some((d) => d.route === `/tools/${slug}`)).toBe(true);
    }
    expect(referencedToolSlugs().every((s) => TOOL_BY_SLUG.has(s))).toBe(true);
  });
});
