import { describe, it, expect } from 'vitest';
import { contractIssues, executedFormulasByTool } from '@/lib/tools/contract';
import { TOOLS, TOOL_BY_SLUG } from '@/lib/tools/tools';
import { FORMULAS, getFormula } from '@/lib/tools/formulas';
import { BUSHEL_STANDARDS, BUSHEL_BY_KEY } from '@/lib/tools/constants';
import { COMMODITIES } from '@/content';

const f = (id: string) => {
  const found = getFormula(id);
  if (!found) throw new Error(`formula ${id} missing`);
  return found;
};

/* -------------------------------------------------------------------------- *
 * INDEPENDENT ORACLES (§5)
 *
 * Every expected value below is derived HERE, from the exact legal definitions
 * of the pound and the acre, and never by calling the implementation under test
 * and asserting it equals itself. That distinction is not pedantry: it is how
 * the dry-basis blending bug survived a green suite, and how three hand-rounded
 * expectations reached the registry.
 * -------------------------------------------------------------------------- */
const LB_KG = 0.45359237; // exact, by definition
const ACRE_M2 = 4046.8564224; // exact, by definition
const HA_M2 = 10_000;
/** lb/acre per kg/ha, derived — deliberately not imported from the code. */
const K = 1 / LB_KG / (HA_M2 / ACRE_M2);

describe('Phase 5E §4 — the formula contract', () => {
  it('reports zero contract violations across every calculator', () => {
    expect(contractIssues()).toEqual([]);
  });

  it('makes every tool execute exactly the formulas it advertises', () => {
    // The panel renders ToolConfig.formulaIds. If the executed set differs, the
    // reader is shown maths that did not run, or not shown maths that did.
    const executed = executedFormulasByTool();
    for (const tool of TOOLS) {
      const ran = [...(executed.get(tool.slug) ?? [])].sort();
      const declared = [...tool.formulaIds].sort();
      expect(ran, `${tool.slug} declared ≠ executed`).toEqual(declared);
    }
  });

  it('leaves no registered formula unreachable, except deprecated ones', () => {
    const executed = executedFormulasByTool();
    const reachable = new Set([...executed.values()].flatMap((s) => [...s]));
    for (const formula of FORMULAS) {
      if (formula.deprecated) continue;
      expect(
        reachable.has(formula.formulaId),
        `${formula.formulaId} is registered but no tool composes it`,
      ).toBe(true);
    }
  });

  it('retires a formula properly rather than leaving it decorative', () => {
    // yield-tha-to-buacre published a constant the code never used and was
    // composed by nothing. Deprecation is the honest exit, not deletion.
    const retired = f('yield-tha-to-buacre');
    expect(retired.deprecated).toBe(true);
    expect(retired.replacedBy).toBe('yield-kgha-to-buacre');
    expect(getFormula(retired.replacedBy!)).toBeDefined();
    // …and no tool may advertise it.
    for (const tool of TOOLS)
      expect(tool.formulaIds, `${tool.slug}`).not.toContain(
        'yield-tha-to-buacre',
      );
  });

  it('detects a decorative formula if one is reintroduced', () => {
    // Prove the gate fires rather than merely reporting clean: temporarily
    // declare a formula the tool cannot execute and assert it is caught.
    const tool = TOOL_BY_SLUG.get('post-harvest-loss-calculator')!;
    const original = [...tool.formulaIds];
    try {
      (tool as { formulaIds: string[] }).formulaIds = [
        ...original,
        'volume-cylinder',
      ];
      const issues = contractIssues();
      expect(
        issues.some(
          (i) =>
            i.code === 'contract-decorative-formula' &&
            i.where === 'tool:post-harvest-loss-calculator',
        ),
        'the gate must flag a declared-but-never-executed formula',
      ).toBe(true);
    } finally {
      (tool as { formulaIds: string[] }).formulaIds = original;
    }
    expect(contractIssues()).toEqual([]);
  });
});

describe('Phase 5E §3 — commodity-specific bushels', () => {
  it('sources every standard weight with a jurisdiction and a commodity', () => {
    const slugs = new Set(COMMODITIES.map((c) => c.slug));
    for (const b of BUSHEL_STANDARDS) {
      expect(slugs.has(b.commoditySlug), `${b.key} → ${b.commoditySlug}`).toBe(
        true,
      );
      expect(b.jurisdiction, b.key).toBeTruthy();
      expect(b.standard, b.key).toBeTruthy();
      expect(b.sourceId, b.key).toBeTruthy();
      expect(b.lbPerBushel, b.key).toBeGreaterThan(0);
    }
  });

  it('holds the US standard weights', () => {
    // Independently known: maize 56, wheat/soybeans 60, barley 48, oats 32.
    const lb = (k: string) => BUSHEL_BY_KEY.get(k)!.lbPerBushel;
    expect(lb('maize')).toBe(56);
    expect(lb('wheat')).toBe(60);
    expect(lb('soybean')).toBe(60);
    expect(lb('barley')).toBe(48);
    expect(lb('oats')).toBe(32);
    expect(lb('sorghum')).toBe(56);
    expect(lb('rye')).toBe(56);
  });

  it('REFUSES a bushel conversion without a commodity', () => {
    // The tool used to resolve an absent commodity to `?? 60` — the wheat
    // weight — and convert anyway, so a shared URL with no commodity produced a
    // confident maize figure computed at the wrong standard weight.
    const tool = TOOL_BY_SLUG.get('yield-converter')!;
    for (const commodity of ['', 'not-a-commodity', 'rice']) {
      const res = tool.compute({
        value: '3',
        from: 'tha',
        to: 'buacre',
        commodity,
      });
      expect(res.error, `commodity="${commodity}" must refuse`).toBeTruthy();
      expect(res.error!).toMatch(/generic bushel|select the commodity/i);
    }
  });

  it('never substitutes a generic bushel weight anywhere', () => {
    const formula = f('yield-kgha-to-buacre');
    // The standard weight is a required input with no default.
    expect(formula.inputs.some((i) => i.key === 'bushelLb')).toBe(true);
    expect(() => formula.compute({ value: 3000 })).toThrow();
    expect(() => formula.compute({ value: 3000, bushelLb: 0 })).toThrow(
      /generic bushel|greater than zero/i,
    );
  });

  it('scopes bushel formulas to the commodities that have a standard', () => {
    const expected = BUSHEL_STANDARDS.map((b) => b.commoditySlug).sort();
    for (const id of ['yield-kgha-to-buacre', 'yield-buacre-to-kgha'])
      expect([...(f(id).commodityApplicability ?? [])].sort(), id).toEqual(
        expected,
      );
  });
});

describe('Phase 5E §5 — yield conversions against independent oracles', () => {
  it('derives kg/ha ↔ lb/acre from the exact definitions', () => {
    expect(f('yield-kgha-to-lbacre').compute({ value: 1000 })).toBeCloseTo(
      1000 * K,
      9,
    );
    expect(f('yield-lbacre-to-kgha').compute({ value: 1000 })).toBeCloseTo(
      1000 / K,
      9,
    );
    // The factor itself, stated: ≈0.8921791216197045 lb/acre per kg/ha.
    expect(K).toBeCloseTo(0.8921791216197045, 15);
  });

  it('derives t/ha ↔ commodity bu/acre from first principles', () => {
    const tool = TOOL_BY_SLUG.get('yield-converter')!;
    for (const b of BUSHEL_STANDARDS) {
      // Oracle: t/ha → kg/ha → lb/acre → ÷ standard weight → bu/acre.
      const expected = (3 * 1000 * K) / b.lbPerBushel;
      const res = tool.compute({
        value: '3',
        from: 'tha',
        to: 'buacre',
        commodity: b.key,
      });
      expect(res.error, b.key).toBeUndefined();
      expect(
        Number(res.outputs[0]!.value.replace(/,/g, '')),
        b.key,
      ).toBeCloseTo(expected, 2);
    }
  });

  it('holds the classic reference points', () => {
    // 3 t/ha of wheat ≈ 44.6 bu/acre; the same tonnage of maize is a different
    // bushel count entirely, which is the whole reason there is no generic bushel.
    expect(
      f('yield-kgha-to-buacre').compute({ value: 3000, bushelLb: 60 }),
    ).toBeCloseTo(44.60895608098522, 9);
    expect(
      f('yield-kgha-to-buacre').compute({ value: 3000, bushelLb: 56 }),
    ).toBeCloseTo(47.79531008676988, 9);
    // 180 bu/acre of maize ≈ 11.3 t/ha — a US Corn Belt order of magnitude.
    expect(
      f('yield-buacre-to-kgha').compute({ value: 180, bushelLb: 56 }) / 1000,
    ).toBeCloseTo(11.298, 3);
  });

  it('round-trips every yield unit pair through the tool', () => {
    const tool = TOOL_BY_SLUG.get('yield-converter')!;
    const units = ['tha', 'kgha', 'lbacre', 'buacre'];
    for (const a of units)
      for (const b of units) {
        const there = tool.compute({
          value: '3',
          from: a,
          to: b,
          commodity: 'wheat',
        });
        expect(there.error, `${a}→${b}`).toBeUndefined();
        const mid = Number(there.outputs[0]!.value.replace(/,/g, ''));
        const back = tool.compute({
          value: String(mid),
          from: b,
          to: a,
          commodity: 'wheat',
        });
        expect(back.error, `${b}→${a}`).toBeUndefined();
        expect(
          Number(back.outputs[0]!.value.replace(/,/g, '')),
          `${a}→${b}→${a}`,
        ).toBeCloseTo(3, 2);
      }
  });

  it('treats a same-unit conversion as an identity and runs no formula', () => {
    const tool = TOOL_BY_SLUG.get('yield-converter')!;
    for (const u of ['tha', 'kgha', 'lbacre']) {
      const res = tool.compute({ value: '3', from: u, to: u, commodity: '' });
      expect(res.error, u).toBeUndefined();
      expect(Number(res.outputs[0]!.value), u).toBe(3);
      expect(res.formulaIds, `${u} identity must run no formula`).toEqual([]);
    }
  });

  it('rejects nonsense units and non-finite values', () => {
    const tool = TOOL_BY_SLUG.get('yield-converter')!;
    expect(
      tool.compute({ value: '3', from: 'furlongs', to: 'tha' }).error,
    ).toBeTruthy();
    expect(
      tool.compute({ value: 'abc', from: 'tha', to: 'kgha' }).error,
    ).toBeTruthy();
    expect(
      tool.compute({ value: '1e400', from: 'tha', to: 'kgha' }).error,
    ).toBeTruthy();
  });
});

describe('Phase 5E §6 — the storage estimator refuses the capacity claims', () => {
  const tool = TOOL_BY_SLUG.get('storage-capacity-estimator')!;
  const corpus = [
    tool.purpose,
    tool.safetyDisclosure ?? '',
    ...(tool.limitations ?? []),
    ...tool.formulaIds.flatMap((id) => {
      const formula = f(id);
      return [formula.safetyContext ?? '', ...formula.limitations];
    }),
  ]
    .join(' ')
    .toLowerCase();

  it('keeps the route while naming the tool honestly', () => {
    expect(tool.slug).toBe('storage-capacity-estimator');
    expect(tool.title).toBe('Storage volume estimator');
  });

  it('states that it does not calculate structural or certified capacity', () => {
    expect(corpus, 'structural').toMatch(/structural/);
    expect(corpus, 'safe working').toMatch(/safe[- ]working/);
    expect(corpus, 'certification').toMatch(/certification|certified/);
    expect(corpus, 'engineering').toMatch(/engineering/);
  });

  it('does not overclaim capacity in the metadata a reader sees first', () => {
    // `purpose` is the page description and the search summary.
    expect(tool.purpose.toLowerCase()).toContain('geometric volume');
    expect(tool.purpose.toLowerCase()).not.toMatch(
      /\b(structural|safe working|certified|rated) capacity\b/,
    );
  });
});
