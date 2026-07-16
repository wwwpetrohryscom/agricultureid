import { describe, it, expect } from 'vitest';
import { FORMULAS, FORMULA_BY_ID, getFormula } from '@/lib/tools/formulas';
import { TOOLS, TOOL_BY_SLUG } from '@/lib/tools/tools';
import { toolIssues, advisoryPhrase } from '@/lib/tools/validate-tools';
import {
  parseToolParams,
  serializeToolParams,
  isValidFieldValue,
  hasToolParams,
} from '@/lib/tools/query-params';
import { BUSHEL_LB } from '@/lib/tools/constants';
import { MOISTURE_BASES } from '@/types/tools';
import { SOURCES } from '@/data/sources';
import { sitemapPaths } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { SYNONYMS } from '@/data/search/synonyms';

const f = (id: string) => {
  const found = getFormula(id);
  if (!found) throw new Error(`formula ${id} missing`);
  return found;
};
const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));

/** The Phase 5E tools, by slug. */
const NEW_TOOLS = [
  'moisture-content-converter',
  'dry-matter-calculator',
  'water-removal-calculator',
  'grain-moisture-shrink',
  'bulk-density-calculator',
  'storage-capacity-estimator',
  'commodity-blending-calculator',
  'processing-recovery-calculator',
  'post-harvest-loss-calculator',
  'trade-unit-value-calculator',
  'packaging-quantity-estimator',
];

describe('Phase 5E — formula registry', () => {
  it('reports zero tool/formula validation errors', () => {
    expect(toolIssues().filter((i) => i.level === 'error')).toEqual([]);
  });

  it('executes every declared test case (the §17 determinism guarantee)', () => {
    // This mirrors what toolIssues() does during content:validate, asserted
    // here so a broken formula fails the test suite too rather than only the
    // content gate.
    let cases = 0;
    for (const formula of FORMULAS) {
      expect(
        formula.testCases.length,
        `${formula.formulaId} has no test case`,
      ).toBeGreaterThan(0);
      for (const t of formula.testCases) {
        const got = formula.compute(t.inputs);
        expect(
          Math.abs(got - t.expect),
          `${formula.formulaId} ${JSON.stringify(t.inputs)} → ${got}, expected ${t.expect}`,
        ).toBeLessThanOrEqual(t.tolerance ?? 1e-6);
        cases++;
      }
    }
    expect(cases).toBeGreaterThanOrEqual(90);
  });

  it('resolves formulas by id and carries version metadata', () => {
    for (const formula of FORMULAS) {
      expect(FORMULA_BY_ID.get(formula.formulaId)).toBe(formula);
      expect(formula.formulaVersion, formula.formulaId).toMatch(
        /^\d+\.\d+\.\d+$/,
      );
      expect(formula.calcVersion, formula.formulaId).toBeTruthy();
      expect(formula.sourceIds.length, formula.formulaId).toBeGreaterThan(0);
      for (const id of formula.sourceIds)
        expect(SOURCE_IDS.has(id), `${formula.formulaId}: ${id}`).toBe(true);
      expect(formula.limitations.length, formula.formulaId).toBeGreaterThan(0);
    }
  });

  it('declares an accepted basis on every moisture formula', () => {
    for (const id of [
      'moisture-wb-to-db',
      'moisture-db-to-wb',
      'dry-matter-fraction',
      'dry-matter-mass',
      'water-mass-wb',
      'drying-final-mass',
      'drying-water-removed',
      'moisture-shrink-pct',
    ]) {
      const bases = f(id).acceptedBases;
      expect(bases?.length, `${id} must declare acceptedBases`).toBeGreaterThan(
        0,
      );
      for (const b of bases!) expect(MOISTURE_BASES).toContain(b);
    }
  });
});

describe('Phase 5E — moisture basis', () => {
  it('converts wet basis to dry basis and back exactly', () => {
    for (const v of [0, 5, 14, 20, 50, 87.3]) {
      const db = f('moisture-wb-to-db').compute({ mwb: v });
      const back = f('moisture-db-to-wb').compute({ mdb: db });
      expect(back, `${v}% wb round trip`).toBeCloseTo(v, 9);
    }
  });

  it('holds the known reference points', () => {
    expect(f('moisture-wb-to-db').compute({ mwb: 20 })).toBeCloseTo(25, 9);
    expect(f('moisture-db-to-wb').compute({ mdb: 25 })).toBeCloseTo(20, 9);
    expect(f('dry-matter-fraction').compute({ mwb: 14 })).toBeCloseTo(86, 9);
  });

  it('rejects wet-basis moisture at or above 100%', () => {
    // At 100% wet basis the lot is entirely water: there is no dry matter, and
    // the dry-basis denominator is zero.
    expect(() => f('moisture-wb-to-db').compute({ mwb: 100 })).toThrow(/100/);
    expect(() => f('moisture-wb-to-db').compute({ mwb: 120 })).toThrow();
    expect(() =>
      f('dry-matter-mass').compute({ mass: 10, mwb: 100 }),
    ).toThrow();
  });

  it('rejects negative moisture', () => {
    expect(() => f('moisture-wb-to-db').compute({ mwb: -1 })).toThrow(
      /negative/i,
    );
    expect(() => f('moisture-db-to-wb').compute({ mdb: -1 })).toThrow();
  });

  it('allows dry basis above 100% — it has no upper bound', () => {
    // Water may exceed dry matter. This is arithmetically correct, not an error.
    expect(f('moisture-db-to-wb').compute({ mdb: 200 })).toBeCloseTo(
      66.6667,
      3,
    );
    expect(f('moisture-wb-to-db').compute({ mwb: 90 })).toBeCloseTo(900, 6);
  });

  it('splits total mass into dry matter and water with nothing left over', () => {
    for (const [mass, m] of [
      [1000, 20],
      [25.4, 13.5],
      [7, 0],
    ] as const) {
      const dm = f('dry-matter-mass').compute({ mass, mwb: m });
      const w = f('water-mass-wb').compute({ mass, mwb: m });
      expect(dm + w, `${mass} @ ${m}%`).toBeCloseTo(mass, 9);
    }
  });
});

describe('Phase 5E — water removal and dry-matter conservation', () => {
  it('conserves dry matter across drying', () => {
    // THE invariant of the whole phase: drying removes water and leaves solids.
    for (const [mass, m0, m1] of [
      [1000, 20, 14],
      [25.4, 18, 13],
      [500, 35, 12],
      [1, 99, 0.5],
    ] as const) {
      const dm0 = f('dry-matter-mass').compute({ mass, mwb: m0 });
      const finalMass = f('drying-final-mass').compute({ mass, m0, m1 });
      const dm1 = f('dry-matter-mass').compute({ mass: finalMass, mwb: m1 });
      expect(dm1, `${mass} @ ${m0}%→${m1}%`).toBeCloseTo(dm0, 9);
    }
  });

  it('balances mass: initial = final + water removed', () => {
    for (const [mass, m0, m1] of [
      [1000, 20, 14],
      [500, 35, 12],
      [25.4, 18, 13],
    ] as const) {
      const finalMass = f('drying-final-mass').compute({ mass, m0, m1 });
      const removed = f('drying-water-removed').compute({ mass, m0, m1 });
      expect(finalMass + removed).toBeCloseTo(mass, 9);
    }
  });

  it('holds the reference case: 1000 kg at 20% → 14%', () => {
    expect(f('dry-matter-mass').compute({ mass: 1000, mwb: 20 })).toBe(800);
    expect(
      f('drying-final-mass').compute({ mass: 1000, m0: 20, m1: 14 }),
    ).toBeCloseTo(930.2325581395348, 9);
    expect(
      f('drying-water-removed').compute({ mass: 1000, m0: 20, m1: 14 }),
    ).toBeCloseTo(69.76744186046511, 9);
  });

  it('computes the expression it publishes, not merely an equal one', () => {
    // `drying-water-removed` once evaluated M₀ − M₁ instead of its published
    // M₀ × (M₀ − M₁) ÷ (100 − M₁). Equal in real arithmetic, not in IEEE-754:
    // the subtraction form lost the low bits. Both closed the mass balance, so
    // nothing caught it. Asserted bit-exact against the published expression.
    for (const [mass, m0, m1] of [
      [1000, 20, 14],
      [500, 35, 12],
      [25.4, 18, 13],
      [7.25, 91.4, 3.2],
    ] as const) {
      expect(
        f('drying-water-removed').compute({ mass, m0, m1 }),
        `${mass} @ ${m0}%→${m1}%`,
      ).toBe((mass * (m0 - m1)) / (100 - m1));
      expect(f('drying-final-mass').compute({ mass, m0, m1 })).toBe(
        (mass * (100 - m0)) / (100 - m1),
      );
    }
    // The exact rational 1000 × 6 ÷ 86 rounds to this double.
    expect(
      f('drying-water-removed').compute({ mass: 1000, m0: 20, m1: 14 }),
    ).toBe(69.76744186046511);
  });

  it('rejects a target moisture above the initial moisture', () => {
    // That is wetting, not drying, and this model does not represent it.
    expect(() =>
      f('drying-final-mass').compute({ mass: 1000, m0: 14, m1: 20 }),
    ).toThrow(/wetting|above/i);
    expect(() =>
      f('drying-water-removed').compute({ mass: 1000, m0: 14, m1: 20 }),
    ).toThrow();
    expect(() =>
      f('moisture-shrink-pct').compute({ m0: 14, m1: 20 }),
    ).toThrow();
  });

  it('allows the boundary case of no drying at all', () => {
    expect(f('drying-final-mass').compute({ mass: 1000, m0: 14, m1: 14 })).toBe(
      1000,
    );
    expect(
      f('drying-water-removed').compute({ mass: 1000, m0: 14, m1: 14 }),
    ).toBe(0);
    expect(f('moisture-shrink-pct').compute({ m0: 14, m1: 14 })).toBe(0);
  });
});

describe('Phase 5E — moisture shrink', () => {
  it('matches the widely-cited US maize shrink factor', () => {
    // Maize dried to a 15.5% market moisture: ≈1.183% shrink per moisture
    // point. This is the phase's strongest external check on the derivation.
    const shrink = f('moisture-shrink-pct').compute({ m0: 20, m1: 15.5 });
    expect(shrink).toBeCloseTo(5.325443786982249, 9);
    expect(shrink / 4.5).toBeCloseTo(1.1834, 3);
  });

  it('equals water removed as a fraction of the starting mass', () => {
    for (const [m0, m1] of [
      [20, 15.5],
      [18, 13],
      [30, 14],
    ] as const) {
      const shrink = f('moisture-shrink-pct').compute({ m0, m1 });
      const removed = f('drying-water-removed').compute({ mass: 1000, m0, m1 });
      expect(shrink).toBeCloseTo((removed / 1000) * 100, 9);
    }
  });

  it('computes MATHEMATICAL shrink only — no commercial factor is baked in', () => {
    // §6: handling and commercial shrink are contract terms, not arithmetic.
    // The formula must depend on nothing but the two moistures.
    const formula = f('moisture-shrink-pct');
    expect(formula.inputs.map((i) => i.key).sort()).toEqual(['m0', 'm1']);
    expect(formula.limitations.join(' ')).toMatch(/mathematical/i);
  });
});

describe('Phase 5E — bulk density, geometry, and storage', () => {
  it('round-trips mass ↔ volume through bulk density', () => {
    const v = f('volume-from-mass-density').compute({
      mass: 72100,
      density: 721,
    });
    expect(v).toBeCloseTo(100, 9);
    expect(
      f('mass-from-volume-density').compute({ volume: v, density: 721 }),
    ).toBeCloseTo(72100, 9);
    expect(
      f('bulk-density-from-mass-volume').compute({ mass: 72100, volume: v }),
    ).toBeCloseTo(721, 9);
  });

  it('rejects divide-by-zero rather than returning Infinity', () => {
    expect(() =>
      f('bulk-density-from-mass-volume').compute({ mass: 100, volume: 0 }),
    ).toThrow();
    expect(() =>
      f('volume-from-mass-density').compute({ mass: 100, density: 0 }),
    ).toThrow();
    expect(() => f('recovery-pct').compute({ input: 0, output: 10 })).toThrow();
    expect(() => f('physical-loss-pct').compute({ q0: 0, q1: 0 })).toThrow();
    expect(() =>
      f('trade-unit-value').compute({ value: 10, quantity: 0 }),
    ).toThrow();
  });

  it('rejects NaN and Infinity inputs', () => {
    for (const bad of [NaN, Infinity, -Infinity, 'abc']) {
      expect(() =>
        f('dry-matter-mass').compute({ mass: bad as never, mwb: 14 }),
      ).toThrow();
    }
  });

  it('computes the geometric volumes', () => {
    expect(
      f('volume-rect-prism').compute({ length: 10, width: 5, height: 3 }),
    ).toBe(150);
    expect(f('volume-cylinder').compute({ radius: 3, height: 10 })).toBeCloseTo(
      Math.PI * 9 * 10,
      9,
    );
    expect(f('volume-cone').compute({ radius: 3, height: 3 })).toBeCloseTo(
      (Math.PI * 9 * 3) / 3,
      9,
    );
  });

  it('makes a cone exactly one third of its enclosing cylinder', () => {
    const cyl = f('volume-cylinder').compute({ radius: 4, height: 6 });
    const cone = f('volume-cone').compute({ radius: 4, height: 6 });
    expect(cone * 3).toBeCloseTo(cyl, 9);
  });

  it('keeps the cylinder-with-cone composite exactly equal to its parts', () => {
    // The composite claims to be cylinder + cone. It shares their geometry
    // helpers precisely so it cannot drift from that claim — bit-exact, not
    // approximately, so this is asserted with toBe rather than toBeCloseTo.
    for (const [r, hCyl, hCone] of [
      [3, 10, 3],
      [4, 6, 2],
      [1.5, 8.25, 0.75],
      [10, 0, 5],
    ] as const) {
      const parts =
        f('volume-cylinder').compute({ radius: r, height: hCyl }) +
        f('volume-cone').compute({ radius: r, height: hCone });
      expect(
        f('volume-cylinder-with-cone').compute({
          radius: r,
          cylHeight: hCyl,
          coneHeight: hCone,
        }),
        `r=${r} cyl=${hCyl} cone=${hCone}`,
      ).toBe(parts);
    }
  });

  it('applies a packing factor without touching the geometry', () => {
    expect(
      f('volume-with-packing-factor').compute({ volume: 100, factor: 85 }),
    ).toBeCloseTo(85, 9);
    expect(
      f('volume-with-packing-factor').compute({ volume: 100, factor: 100 }),
    ).toBe(100);
    // A commodity cannot occupy more space than exists.
    expect(() =>
      f('volume-with-packing-factor').compute({ volume: 100, factor: 120 }),
    ).toThrow(/more space|100/i);
    expect(() =>
      f('volume-with-packing-factor').compute({ volume: 100, factor: 0 }),
    ).toThrow();
  });

  it('round-trips the converter inverses exactly', () => {
    const kgm3 = 721;
    const lbft3 = f('density-kgm3-to-lbft3').compute({ value: kgm3 });
    expect(f('density-lbft3-to-kgm3').compute({ value: lbft3 })).toBeCloseTo(
      kgm3,
      9,
    );
    const bu = f('mass-to-bushels').compute({ kg: 1000, bushelLb: 56 });
    expect(f('bushels-to-mass').compute({ bu, bushelLb: 56 })).toBeCloseTo(
      1000,
      9,
    );
    const pct = f('decimal-to-percent').compute({ value: 0.14 });
    expect(f('percent-to-decimal').compute({ value: pct })).toBeCloseTo(
      0.14,
      12,
    );
  });

  it('never presents a volume as a safe or structural capacity', () => {
    for (const id of ['volume-rect-prism', 'volume-cylinder', 'volume-cone']) {
      const formula = f(id);
      expect(formula.safetyContext, `${id} safetyContext`).toBeTruthy();
      expect(formula.safetyContext!).toMatch(/engineering|capacity/i);
    }
  });
});

describe('Phase 5E — blending', () => {
  it('computes a weighted average', () => {
    expect(
      f('blend-two-lot-weighted-average').compute({
        qa: 100,
        xa: 12,
        qb: 50,
        xb: 18,
      }),
    ).toBeCloseTo(14, 9);
  });

  it('inverts: the required lot B reproduces the target', () => {
    const qb = f('blend-required-lot-b').compute({
      qa: 100,
      xa: 12,
      xb: 18,
      xt: 14,
    });
    expect(qb).toBeCloseTo(50, 9);
    const check = f('blend-two-lot-weighted-average').compute({
      qa: 100,
      xa: 12,
      qb,
      xb: 18,
    });
    expect(check).toBeCloseTo(14, 9);
  });

  it('rejects a target outside the range the two lots span', () => {
    // No blend of 12% and 18% can reach 20% or 10%, at any ratio.
    expect(() =>
      f('blend-required-lot-b').compute({ qa: 100, xa: 12, xb: 18, xt: 20 }),
    ).toThrow(/outside|range/i);
    expect(() =>
      f('blend-required-lot-b').compute({ qa: 100, xa: 12, xb: 18, xt: 10 }),
    ).toThrow();
  });

  it('keeps a blend inside the range its inputs span', () => {
    for (const qb of [0, 1, 50, 1000]) {
      const x = f('blend-two-lot-weighted-average').compute({
        qa: 100,
        xa: 12,
        qb,
        xb: 18,
      });
      expect(x).toBeGreaterThanOrEqual(12);
      expect(x).toBeLessThanOrEqual(18);
    }
  });

  it('rejects a zero-quantity blend rather than dividing by zero', () => {
    expect(() =>
      f('blend-two-lot-weighted-average').compute({
        qa: 0,
        xa: 12,
        qb: 0,
        xb: 18,
      }),
    ).toThrow();
  });

  it('states that only linear attributes are supported', () => {
    for (const id of [
      'blend-two-lot-weighted-average',
      'blend-required-lot-b',
    ]) {
      expect(f(id).limitations.join(' ')).toMatch(/linear/i);
      expect(f(id).limitations.join(' ')).toMatch(/test weight/i);
    }
  });

  it('accepts the wet basis ONLY — a dry basis is not total-mass-weighted', () => {
    // The blend formulas weight by total mass, which is right for wet-basis
    // moisture (water and total mass both add) and WRONG on a dry basis, where
    // water ÷ dry matter is dry-matter-weighted. Declaring dry-basis here once
    // cost 36 percentage points of error on a forage/cereal blend.
    for (const id of ['blend-two-lot-weighted-average', 'blend-required-lot-b'])
      expect(f(id).acceptedBases, id).toEqual(['wet-basis']);
  });

  it('returns 0, not -0, when the lot is already at target', () => {
    const qb = f('blend-required-lot-b').compute({
      qa: 100,
      xa: 12,
      xb: 18,
      xt: 12,
    });
    expect(qb).toBe(0);
    expect(
      Object.is(qb, -0),
      'must not be negative zero — it renders as "-0"',
    ).toBe(false);
  });

  it('blends a dry-basis moisture by DRY MATTER, not by total mass', () => {
    // Ground truth from first principles, derived independently of the tool:
    //   x_db = W / D, so a blend is (W_A + W_B) / (D_A + D_B).
    // Weighting by total mass instead over-weights the wetter lot.
    const truthDb = (qa: number, xa: number, qb: number, xb: number) => {
      const D = (q: number, x: number) => q / (1 + x / 100);
      const W = (q: number, x: number) => q - D(q, x);
      return ((W(qa, xa) + W(qb, xb)) / (D(qa, xa) + D(qb, xb))) * 100;
    };
    const tool = TOOL_BY_SLUG.get('commodity-blending-calculator')!;
    for (const [qa, xa, qb, xb] of [
      [100, 10, 100, 100],
      [1000, 16.28, 500, 85.7],
      [100, 20, 100, 30],
      [100, 185.7, 100, 16.28], // forage blended with cereal
    ] as const) {
      const res = tool.compute({
        mode: 'average',
        attribute: 'moisture',
        basis: 'dry-basis',
        qa: String(qa),
        xa: String(xa),
        qb: String(qb),
        xb: String(xb),
      });
      const where = `${qa}@${xa}db + ${qb}@${xb}db`;
      expect(res.error, where).toBeUndefined();
      expect(Number(res.outputs[0]!.value), where).toBeCloseTo(
        truthDb(qa, xa, qb, xb),
        1,
      );
      expect(res.outputs[0]!.unit).toMatch(/dry basis/i);
    }
  });

  it('still blends a wet-basis moisture by total mass', () => {
    const tool = TOOL_BY_SLUG.get('commodity-blending-calculator')!;
    const res = tool.compute({
      mode: 'average',
      attribute: 'moisture',
      basis: 'wet-basis',
      qa: '100',
      xa: '12',
      qb: '50',
      xb: '18',
    });
    expect(res.error).toBeUndefined();
    expect(Number(res.outputs[0]!.value)).toBeCloseTo(14, 6);
  });

  it('refuses a dry-basis protein or oil blend rather than mis-weighting it', () => {
    // The same dry-matter weighting applies, but this tool has no moisture
    // input, so dry matter is not derivable. Refusing beats a wrong number.
    const tool = TOOL_BY_SLUG.get('commodity-blending-calculator')!;
    for (const attribute of ['protein', 'oil', 'custom']) {
      const res = tool.compute({
        mode: 'average',
        attribute,
        basis: 'dry-basis',
        qa: '100',
        xa: '10',
        qb: '100',
        xb: '20',
      });
      expect(
        res.error,
        `${attribute} on the dry basis must refuse`,
      ).toBeTruthy();
      expect(res.error!).toMatch(/dry matter/i);
    }
  });

  it('makes the target-mode answer agree with first principles', () => {
    // The old target mode re-ran the same wrong model as its own "check", so it
    // confirmed a wrong answer. Verify against the independent identity.
    const tool = TOOL_BY_SLUG.get('commodity-blending-calculator')!;
    const res = tool.compute({
      mode: 'target',
      attribute: 'moisture',
      basis: 'dry-basis',
      qa: '100',
      xa: '10',
      xb: '100',
      xt: '41.9355',
    });
    expect(res.error).toBeUndefined();
    // Independently: 100 kg @ 10% db + 100 kg @ 100% db gives 41.9355% db.
    expect(Number(res.outputs[0]!.value)).toBeCloseTo(100, 0);
  });
});

describe('Phase 5E — processing recovery and loss', () => {
  it('computes recovery and the unaccounted balance', () => {
    expect(f('recovery-pct').compute({ input: 1000, output: 750 })).toBe(75);
    expect(
      f('mass-balance-unaccounted').compute({
        input: 1000,
        primary: 750,
        coproduct: 150,
        byproduct: 50,
      }),
    ).toBe(50);
  });

  it('surfaces outputs exceeding input rather than clamping to zero', () => {
    // A negative balance means mass was added or the bases differ. Hiding it
    // would be the bug.
    expect(
      f('mass-balance-unaccounted').compute({
        input: 1000,
        primary: 900,
        coproduct: 200,
        byproduct: 0,
      }),
    ).toBe(-100);
  });

  it('never calls unaccounted mass waste', () => {
    expect(f('mass-balance-unaccounted').limitations.join(' ')).toMatch(
      /not\s+waste/i,
    );
  });

  it('publishes no benchmark or expected recovery', () => {
    const text = [
      ...f('recovery-pct').limitations,
      f('recovery-pct').safetyContext ?? '',
    ].join(' ');
    expect(text).toMatch(/not an expected|no expected|benchmark/i);
  });

  it('computes physical loss and rejects a gain', () => {
    expect(f('physical-loss-pct').compute({ q0: 1000, q1: 900 })).toBe(10);
    expect(f('physical-loss-pct').compute({ q0: 1000, q1: 1000 })).toBe(0);
    expect(() =>
      f('physical-loss-pct').compute({ q0: 1000, q1: 1100 }),
    ).toThrow(/gain|exceeds/i);
  });

  it('keeps physical loss distinct from quality and value loss', () => {
    expect(f('physical-loss-pct').limitations.join(' ')).toMatch(
      /quality|value/i,
    );
  });
});

describe('Phase 5E — trade unit value', () => {
  it('divides value by quantity', () => {
    expect(f('trade-unit-value').compute({ value: 1000, quantity: 4 })).toBe(
      250,
    );
  });

  it('never calls the result a price, and says so', () => {
    const text = [
      ...f('trade-unit-value').limitations,
      f('trade-unit-value').safetyContext ?? '',
    ]
      .join(' ')
      .toLowerCase();
    expect(text).toMatch(/not a (market )?price|is not a price/);
    // Phase 5D semantics must survive into the calculator.
    expect(text).toMatch(/absent/);
    expect(text).toMatch(/mirror|revis/);
  });

  it('refuses a zero quantity — absent is not zero', () => {
    expect(() =>
      f('trade-unit-value').compute({ value: 1000, quantity: 0 }),
    ).toThrow();
  });
});

describe('Phase 5E — packaging', () => {
  it('always rounds the package count up', () => {
    expect(
      f('package-count').compute({
        total: 1000,
        capacity: 50,
        fill: 100,
        reserve: 0,
      }),
    ).toBe(20);
    expect(
      f('package-count').compute({
        total: 1001,
        capacity: 50,
        fill: 100,
        reserve: 0,
      }),
    ).toBe(21);
    expect(
      f('package-count').compute({
        total: 1,
        capacity: 50,
        fill: 100,
        reserve: 0,
      }),
    ).toBe(1);
  });

  it('distinguishes nominal capacity from usable capacity', () => {
    expect(
      f('package-count').compute({
        total: 1000,
        capacity: 50,
        fill: 80,
        reserve: 0,
      }),
    ).toBe(25);
  });

  it('reports the remainder in the final package', () => {
    expect(
      f('package-remainder').compute({ total: 1010, capacity: 50, fill: 100 }),
    ).toBeCloseTo(10, 9);
    expect(
      f('package-remainder').compute({ total: 1000, capacity: 50, fill: 100 }),
    ).toBeCloseTo(0, 9);
  });

  it('rejects zero, negative, and over-100% capacity/fill', () => {
    expect(() =>
      f('package-count').compute({
        total: 100,
        capacity: 0,
        fill: 100,
        reserve: 0,
      }),
    ).toThrow();
    expect(() =>
      f('package-count').compute({
        total: 100,
        capacity: -5,
        fill: 100,
        reserve: 0,
      }),
    ).toThrow();
    expect(() =>
      f('package-count').compute({
        total: 100,
        capacity: 50,
        fill: 0,
        reserve: 0,
      }),
    ).toThrow();
    expect(() =>
      f('package-count').compute({
        total: 100,
        capacity: 50,
        fill: 120,
        reserve: 0,
      }),
    ).toThrow(/nominal|100/i);
  });
});

describe('Phase 5E — unit conversions', () => {
  it('converts bulk density with the exact definitional factor', () => {
    // 1 lb = 0.45359237 kg and 1 ft = 0.3048 m, both exact by definition.
    expect(f('density-kgm3-to-lbft3').compute({ value: 1000 })).toBeCloseTo(
      62.42796057614461,
      9,
    );
    expect(f('density-kgm3-to-lbft3').compute({ value: 721 })).toBeCloseTo(
      (721 * 0.3048 ** 3) / 0.45359237,
      12,
    );
  });

  it('has no generic bushel — the standard weight is a required input', () => {
    const formula = f('mass-to-bushels');
    expect(formula.inputs.map((i) => i.key)).toContain('bushelLb');
    expect(formula.limitations.join(' ')).toMatch(/no generic bushel/i);
    // Maize and wheat bushels are different masses.
    const maize = formula.compute({ kg: 1000, bushelLb: BUSHEL_LB.maize });
    const wheat = formula.compute({ kg: 1000, bushelLb: BUSHEL_LB.wheat });
    expect(maize).not.toBeCloseTo(wheat, 3);
    expect(maize).toBeCloseTo(1000 / 0.45359237 / 56, 9);
    expect(wheat).toBeCloseTo(1000 / 0.45359237 / 60, 9);
  });

  it('uses the commodity standard weights the constants declare', () => {
    expect(BUSHEL_LB.maize).toBe(56);
    expect(BUSHEL_LB.wheat).toBe(60);
    expect(BUSHEL_LB.soybean).toBe(60);
    expect(BUSHEL_LB.barley).toBe(48);
    expect(BUSHEL_LB.oats).toBe(32);
  });

  it('converts percentage to decimal', () => {
    expect(f('percent-to-decimal').compute({ value: 14 })).toBeCloseTo(
      0.14,
      12,
    );
    expect(f('percent-to-decimal').compute({ value: 100 })).toBe(1);
  });
});

describe('Phase 5E — tools', () => {
  it('registers every Phase 5E tool on its route', () => {
    for (const slug of NEW_TOOLS) {
      const tool = TOOL_BY_SLUG.get(slug);
      expect(tool, `${slug} must exist`).toBeDefined();
      expect(sitemapPaths().has(`/tools/${slug}`), `${slug} in sitemap`).toBe(
        true,
      );
    }
  });

  it('does NOT duplicate the existing unit converter', () => {
    // §19: reuse or extend when intent overlaps. The commodity conversions were
    // added to the existing tool rather than given a near-identical second route.
    expect(TOOL_BY_SLUG.get('unit-converters')).toBeDefined();
    expect(TOOL_BY_SLUG.get('commodity-unit-converters')).toBeUndefined();
    expect(sitemapPaths().has('/tools/commodity-unit-converters')).toBe(false);
  });

  it('gives every tool a unique slug', () => {
    const slugs = TOOLS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('carries a safety disclosure on every commodity tool', () => {
    for (const slug of NEW_TOOLS) {
      const tool = TOOL_BY_SLUG.get(slug)!;
      expect(tool.safetyDisclosure?.trim().length, `${slug}`).toBeGreaterThan(
        0,
      );
    }
  });

  it('resolves every tool formula id, and does its maths in the registry', () => {
    for (const tool of TOOLS) {
      expect(
        tool.formulaIds.length,
        `${tool.slug} resolves no formula`,
      ).toBeGreaterThan(0);
      for (const id of tool.formulaIds)
        expect(FORMULA_BY_ID.has(id), `${tool.slug} → ${id}`).toBe(true);
    }
  });

  it('indexes every tool for search', () => {
    const docs = buildSearchDocuments().filter((d) => d.type === 'tool');
    expect(docs.length).toBe(TOOLS.length);
  });
});

describe('Phase 5E — the advisory-wording gate', () => {
  it('catches genuine advice', () => {
    for (const s of [
      'The optimal storage moisture is 14%.',
      'Use the recommended bulk density for your commodity.',
      'Grain should be dried to the ideal moisture before storage.',
      'This is the optimum blend ratio.',
    ])
      expect(advisoryPhrase(s), s).not.toBeNull();
  });

  it('keeps refusals — a disclaimer names the thing it refuses to do', () => {
    // The naive keyword scan flags exactly the sentences we most want to keep.
    for (const s of [
      'This is an educational conversion, not a fertilizer recommendation.',
      'Does not recommend a depth by crop.',
      'This tool is not a recommendation of an optimal moisture.',
      'No recommended value is published here.',
      'It cannot tell you the ideal setting.',
    ])
      expect(advisoryPhrase(s), s).toBeNull();
  });

  it('finds no unnegated advisory wording anywhere in the tool corpus', () => {
    expect(
      toolIssues().filter((i) => i.code === 'tool-advisory-wording'),
    ).toEqual([]);
  });
});

describe('Phase 5E — shareable URLs (§15)', () => {
  const SLUG = 'water-removal-calculator';

  it('round-trips values through serialise → parse', () => {
    const tool = TOOL_BY_SLUG.get(SLUG)!;
    const values: Record<string, string> = {};
    for (const field of tool.fields) values[field.key] = field.default ?? '';
    values['mass'] = '1000';
    const qs = serializeToolParams(SLUG, values);
    const parsed = parseToolParams(SLUG, `?${qs}`);
    expect(parsed['mass']).toBe('1000');
  });

  it('ignores unknown parameters', () => {
    const parsed = parseToolParams(SLUG, '?utm_source=x&evil=<script>&nope=1');
    expect(Object.keys(parsed)).not.toContain('utm_source');
    expect(Object.keys(parsed)).not.toContain('evil');
    expect(Object.values(parsed).join(' ')).not.toContain('<script>');
  });

  it('rejects invalid values and falls back to the default', () => {
    const tool = TOOL_BY_SLUG.get(SLUG)!;
    const massField = tool.fields.find((x) => x.key === 'mass')!;
    const parsed = parseToolParams(SLUG, '?mass=abc');
    expect(parsed['mass']).toBe(massField.default ?? '');
    expect(Number.isNaN(Number(parsed['mass'] || '0'))).toBe(false);
  });

  it('rejects out-of-range values', () => {
    const parsed = parseToolParams(SLUG, '?m0=150');
    expect(parsed['m0']).not.toBe('150');
  });

  it('only accepts declared option values for a select', () => {
    // This is what stops a crafted URL putting arbitrary text into the page.
    for (const tool of TOOLS) {
      const select = tool.fields.find((x) => x.type === 'select');
      if (!select) continue;
      expect(isValidFieldValue(select, '<script>alert(1)</script>')).toBe(
        false,
      );
      expect(isValidFieldValue(select, 'definitely-not-an-option')).toBe(false);
      expect(isValidFieldValue(select, select.options![0]!.value)).toBe(true);
    }
  });

  it('preserves units and basis through a round trip', () => {
    for (const tool of TOOLS) {
      const basisField = tool.fields.find(
        (x) => x.type === 'select' && /basis|unit/i.test(x.key + x.label),
      );
      if (!basisField?.options?.length) continue;
      const pick = basisField.options[basisField.options.length - 1]!.value;
      const values: Record<string, string> = {};
      for (const field of tool.fields) values[field.key] = field.default ?? '';
      values[basisField.key] = pick;
      const qs = serializeToolParams(tool.slug, values);
      const parsed = parseToolParams(tool.slug, `?${qs}`);
      expect(parsed[basisField.key], `${tool.slug}.${basisField.key}`).toBe(
        pick,
      );
    }
  });

  it('detects whether a URL carries real tool parameters', () => {
    expect(hasToolParams(SLUG, '')).toBe(false);
    expect(hasToolParams(SLUG, '?utm_source=x')).toBe(false);
    expect(hasToolParams(SLUG, '?mass=1000')).toBe(true);
  });

  it('produces a deterministic query string', () => {
    const values = { mass: '1000', m0: '20', m1: '14' };
    expect(serializeToolParams(SLUG, values)).toBe(
      serializeToolParams(SLUG, values),
    );
  });
});

describe('Phase 5E — search safety (§21)', () => {
  it('never makes the forbidden pairs exact synonyms', () => {
    // unit value ≠ price, shrink ≠ loss, density ≠ test weight,
    // recovery ≠ yield, package count ≠ logistics plan.
    const FORBIDDEN: [string, string][] = [
      ['unit value', 'price'],
      ['shrink', 'loss'],
      ['bulk density', 'test weight'],
      ['recovery', 'yield'],
      ['package count', 'logistics plan'],
    ];
    for (const entry of SYNONYMS) {
      if (entry.kind !== 'exact') continue;
      const bag = [entry.canonical, ...entry.variants].map((x) =>
        x.toLowerCase(),
      );
      for (const [a, b] of FORBIDDEN)
        expect(
          bag.some((x) => x.includes(a)) && bag.some((x) => x.includes(b)),
          `"${a}" and "${b}" must never be exact synonyms`,
        ).toBe(false);
    }
  });

  it('adds calculator vocabulary only as directional hints', () => {
    const calcCanonicals = new Set([
      'moisture-content-converter',
      'grain-moisture-shrink',
      'bulk-density-calculator',
      'processing-recovery-calculator',
      'trade-unit-value-calculator',
      'packaging-quantity-estimator',
      'commodity-blending-calculator',
    ]);
    const entries = SYNONYMS.filter((e) => calcCanonicals.has(e.canonical));
    expect(entries.length).toBeGreaterThanOrEqual(6);
    for (const e of entries)
      expect(e.kind, `${e.canonical} must not be an exact synonym`).not.toBe(
        'exact',
      );
  });
});
