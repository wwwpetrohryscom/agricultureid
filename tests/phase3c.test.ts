import { describe, expect, it } from 'vitest';
import { FORMULAS, getFormula } from '@/lib/tools/formulas';
import { TOOLS, TOOL_BY_SLUG } from '@/lib/tools/tools';
import { toolIssues } from '@/lib/tools/validate-tools';
import {
  convertArea,
  convertMass,
  convertVolume,
  cToF,
  fToC,
  toSigDigits,
  KG_HA_TO_LB_ACRE,
} from '@/lib/tools/constants';

describe('phase 3C — formula registry', () => {
  it('every formula reproduces its declared test cases', () => {
    for (const f of FORMULAS) {
      for (const t of f.testCases) {
        const got = f.compute(t.inputs);
        const tol = t.tolerance ?? 1e-6;
        expect(
          Math.abs(got - t.expect) <= tol,
          `${f.formulaId} ${JSON.stringify(t.inputs)} => ${got}, expected ${t.expect}`,
        ).toBe(true);
      }
    }
  });

  it('resolves formulas by id/version', () => {
    const f = getFormula('gdd-average');
    expect(f?.formulaVersion).toBe('1.0.0');
    expect(f?.calcVersion).toBe('1');
  });

  it('guards divide-by-zero and invalid inputs', () => {
    expect(() =>
      getFormula('fertilizer-mass-for-target')!.compute({
        target: 10,
        grade: 0,
      }),
    ).toThrow();
    expect(() =>
      getFormula('plant-density')!.compute({ row: 0, inrow: 0.1 }),
    ).toThrow();
    expect(() =>
      getFormula('seed-rate-count')!.compute({
        plants: 30,
        germ: 0,
        estab: 80,
      }),
    ).toThrow();
    expect(() =>
      getFormula('gdd-average')!.compute({ tmax: NaN, tmin: 1, tbase: 1 }),
    ).toThrow();
  });
});

describe('phase 3C — tool integrity', () => {
  it('has all 7 tools and no validator errors', () => {
    expect(TOOLS.length).toBe(7);
    expect(toolIssues().filter((i) => i.level === 'error')).toEqual([]);
  });

  it('empty required inputs produce an error, not a zero', () => {
    const t = TOOL_BY_SLUG.get('fertilizer-nutrient-calculator')!;
    const r = t.compute({ mode: 'nutrient', mass: '', grade: '' });
    expect(r.error).toBeTruthy();
    expect(r.outputs).toEqual([]);
  });

  it('reference example: urea 100 kg at 46% = 46 kg N', () => {
    const t = TOOL_BY_SLUG.get('fertilizer-nutrient-calculator')!;
    const r = t.compute({ mode: 'nutrient', mass: '100', grade: '46' });
    expect(r.outputs[0]?.value).toBe('46');
  });

  it('seed rate: field-adjusted exceeds theoretical', () => {
    const t = TOOL_BY_SLUG.get('seed-rate-calculator')!;
    const r = t.compute({ plants: '30', germ: '90', estab: '85', tsw: '45' });
    expect(r.outputs.length).toBe(3);
    expect(Number(r.outputs[1]!.value.replace(/,/g, ''))).toBeGreaterThan(30);
  });

  it('yield converter round-trips t/ha <-> bu/acre for wheat', () => {
    const t = TOOL_BY_SLUG.get('yield-converter')!;
    const fwd = t.compute({
      value: '3',
      from: 'tha',
      to: 'buacre',
      commodity: 'wheat',
    });
    const bu = Number(fwd.outputs[0]!.value.replace(/,/g, ''));
    expect(Math.abs(bu - 44.609)).toBeLessThan(0.01);
    const back = t.compute({
      value: String(bu),
      from: 'buacre',
      to: 'tha',
      commodity: 'wheat',
    });
    expect(Math.abs(Number(back.outputs[0]!.value) - 3)).toBeLessThan(0.001);
  });
});

describe('phase 3C — unit conversions', () => {
  it('area: 1 ha = 2.4710538 acres (round-trip)', () => {
    expect(
      Math.abs(convertArea(1, 'hectare', 'acre') - 2.4710538147),
    ).toBeLessThan(1e-6);
    expect(
      Math.abs(
        convertArea(convertArea(5, 'hectare', 'acre'), 'acre', 'hectare') - 5,
      ),
    ).toBeLessThan(1e-9);
  });
  it('mass: 1 kg = 2.2046226 lb; round-trips', () => {
    expect(Math.abs(convertMass(1, 'kg', 'lb') - 2.2046226218)).toBeLessThan(
      1e-6,
    );
    expect(
      Math.abs(convertMass(convertMass(1000, 'kg', 'lb'), 'lb', 'kg') - 1000),
    ).toBeLessThan(1e-6);
  });
  it('volume: US and Imperial gallons differ', () => {
    expect(convertVolume(1, 'gal-us', 'litre')).toBeCloseTo(3.785411784, 6);
    expect(convertVolume(1, 'gal-imp', 'litre')).toBeCloseTo(4.54609, 6);
    expect(convertVolume(1, 'gal-us', 'litre')).not.toBe(
      convertVolume(1, 'gal-imp', 'litre'),
    );
  });
  it('temperature: 0°C=32°F, 100°C=212°F, round-trip', () => {
    expect(cToF(0)).toBe(32);
    expect(cToF(100)).toBe(212);
    expect(fToC(cToF(37))).toBeCloseTo(37, 9);
  });
  it('rate: 1000 kg/ha ≈ 892.18 lb/acre', () => {
    expect(Math.abs(1000 * KG_HA_TO_LB_ACRE - 892.1785)).toBeLessThan(0.01);
  });
});

describe('phase 3C — significant digits', () => {
  it('rounds to significant digits without fake precision', () => {
    expect(toSigDigits(123456, 3)).toBe(123000);
    expect(toSigDigits(0.0123456, 3)).toBe(0.0123);
    expect(toSigDigits(0, 4)).toBe(0);
  });
});
