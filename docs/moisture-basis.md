# Moisture basis (Phase 5E)

## The problem this exists to solve

**A bare "20%" is meaningless.** Twenty percent wet-basis and twenty percent
dry-basis are different quantities describing different lots, and nothing about
the number reveals which one it is. Silent basis switching is the single most
dangerous failure mode in commodity moisture maths: it produces a plausible
number, from valid inputs, through correct arithmetic, and every check passes.

Everything below follows from refusing to guess.

## The two definitions

| Basis       | Definition             | Bound                 |
| ----------- | ---------------------- | --------------------- |
| `wet-basis` | water ÷ **TOTAL** mass | **Cannot reach 100%** |
| `dry-basis` | water ÷ **DRY MATTER** | **Unbounded above**   |

Wet basis cannot reach 100% by definition: at 100% there is no dry matter, so the
lot is entirely water — and the dry-basis denominator is zero. Two distinct
mechanisms enforce that, and they are easy to conflate:

- **The guard.** `wb()` in
  [`lib/tools/formulas-commodity.ts`](../lib/tools/formulas-commodity.ts) throws
  at **≥ 100%** rather than clamping — the bound the maths itself imposes, since
  at 100% the dry matter is zero and the dry-basis denominator vanishes.
- **The declared input bound.** The wet-basis inputs declare `max: 99.999` with a
  `rangeNote` saying why. That is a _field_ limit: what the form and the
  shareable-URL validation enforce before a value ever reaches the formula.

99.999 is therefore the highest figure the UI will accept, not the point at which
the maths gives out. A value between 99.999 and 100 is rejected by the form while
still being arithmetically defined; 100 itself is rejected by both.

Dry basis has no ceiling. A lot with twice as much water as solids is **200%
dry-basis**, which is arithmetically correct rather than an error. A validator
that rejected it would be enforcing an intuition, not a definition.

Convention, stated because it is a convention and not a rule: commodity trading
and grading almost always mean wet basis; drying and process engineering often
mean dry basis. **The platform still never assumes it.** The shrink tool's basis
field says exactly that — grain is commonly traded on the wet basis, but nothing
here assumes it for you.

## Basis is never inferred

> `acceptedBases` is **required** on any moisture formula. The validator rejects
> a moisture formula without it (`formula-no-basis`).

The gate in [`lib/tools/validate-tools.ts`](../lib/tools/validate-tools.ts)
detects moisture maths from the formula id (`moisture`, `dry matter`, `shrink`,
`drying`) or the expression (`M_wb`, `M_db`, `moisture`), and errors if
`acceptedBases` is absent or names a basis outside `MOISTURE_BASES`
(`formula-bad-basis`). **10 of 42 formulas declare accepted bases.**

The tools carry the same discipline into the UI. Basis is a **required select**
with no default on the moisture converter, dry-matter, water-removal, shrink, and
blending tools — there is no value the form can fall back to, so a user who does
not choose gets an error rather than a silent wet-basis assumption. Basis is also
an ordinary field, so it round-trips through a shareable URL: a shared moisture
link that lost its basis would be a link to a different, wrong answer.

Inside a tool, `toWetBasis()` converts a dry-basis entry through the registry
formula `moisture-db-to-wb` — **not** with a copy of the algebra — and the output
note restates what happened: _"Entered on the dry basis (…), restated as … wet
basis."_ The conversion is disclosed, not applied behind the reader's back.

## The conversions

```
M_db = M_wb ÷ (100 − M_wb) × 100      moisture-wb-to-db
M_wb = M_db ÷ (100 + M_db) × 100      moisture-db-to-wb
DM%  = 100 − M_wb                     dry-matter-fraction
DM   = M × (100 − M_wb) ÷ 100         dry-matter-mass
W    = M × M_wb ÷ 100                 water-mass-wb
```

| M_wb  | M_db     |
| ----- | -------- |
| 0%    | 0%       |
| 14%   | 16.2791% |
| 20%   | 25%      |
| 50%   | 100%     |
| 87.3% | 687.4%   |

50% wb → 100% db is the sanity check worth keeping in your head: equal water and
solids is "half the mass is water" on one basis and "water equals the dry matter"
on the other. Both are true. They are different sentences.

### Round-trip behaviour

wb → db → wb returns the starting value at 0%, 5%, 20%, 50%, and 87.3% **exactly
— bit-for-bit**. At 14% it returns 14.000000000000002, one floating-point ulp
high (1.8 × 10⁻¹⁵).

That is stated precisely rather than as "exact", because it is what the code
does. The identity is exact in real arithmetic; IEEE-754 double rounding is not.
The registry's round-trip test case therefore carries `tolerance: 1e-9` — nine
orders of magnitude tighter than the drift, and honest about the fact that there
is drift at all. A test asserting bit equality would fail on a true identity.

## The governing invariant

> **Dry matter is conserved; water is not.**

Almost every formula in the commodity registry is a restatement of that one fact.
Drying removes water and leaves the solids alone. So dry matter computed from the
initial state must equal dry matter computed from the final state — and if it
does not, the calculator is not approximately right, it is wrong.

Verified for 1000 kg at 20% → 14% wet basis:

| Check                                                       | Result                          |
| ----------------------------------------------------------- | ------------------------------- |
| DM from the **initial** state (1000 kg, 20%)                | **800 kg**                      |
| DM from the **final** state (930.2325581395348 kg, 14%)     | **800 kg** — equal, bit-for-bit |
| M₀ = M₁ + ΔW (1000 = 930.2325581395348 + 69.76744186046511) | **exact**                       |
| Shrink% vs ΔW ÷ M₀ × 100                                    | agree to ~5 × 10⁻¹⁵ (one ulp)   |

ΔW is `69.76744186046511`, which is the correctly-rounded double of the exact
rational 1000 × 6 ÷ 86. It is worth recording why, because the value used to be
`69.767441860465169`: `drying-water-removed` once evaluated `M₀ − M₁` instead of
the expression it publishes, `M₀ × (M₀ − M₁) ÷ (100 − M₁)`. The two are equal in
real arithmetic and not in IEEE-754 — the subtraction form loses the low bits of
the difference. Both forms still close the mass balance to exactly 1000, so no
test caught it; the discrepancy was found by checking the implementation against
its own published expression. A formula that quietly computes something other
than what it prints is not one a reader can check, so the implementation now
evaluates the published expression directly.

The derivation of `drying-final-mass` is nothing but the invariant solved for
M₁: **M₀ × DM₀ = M₁ × DM₁**. This is why the water-removal tool leads with "Dry
matter (unchanged by drying)" and notes that it is conserved — that figure
anchors every other number on the page, and a reader who watches it stay put can
see the arithmetic is sound.

`moisture-shrink-pct` is the same quantity again, expressed as a percentage of
the starting mass. Externally cross-checked: maize at 20% → 15.5% market moisture
gives **5.3254% mathematical shrink = 1.1834% per moisture point**, matching the
widely-cited US maize shrink factor of ~1.183%/point. That agreement is evidence
the definition is the one the trade uses; it is **not** evidence that any buyer
deducts that figure — see [`calculator-safety.md`](./calculator-safety.md) and
the shrink section of the tool's own limitations.

## Known limitations

Recorded plainly rather than hidden.

- **The platform cannot tell you which basis your own figure used.** That comes
  from the method, instrument, or contract that produced it. Every conversion
  here is between two denominators; none is a measurement, and none can detect
  that the input was on the other basis.
- **Arithmetic is not measurement.** No formula here replaces representative
  sampling or a calibrated, correctly-referenced moisture meter, and none can
  detect that an input was simply wrong. A meter referenced to the wrong basis or
  the wrong calibration produces a number this platform will happily convert.
- **Two components only.** Every formula assumes water and dry matter account for
  the whole mass. "Dry matter" here means _everything that is not water_ — it
  says nothing about composition, quality, or what fraction is usable.
- **Ideal mass balance.** Real drying also loses solids as fines, dust, and
  broken material, so actual outturn is typically **below** the computed final
  mass. The formulas say so; they do not model it, because the loss depends on
  the commodity, the equipment, and the handling.
- **Nothing here prescribes how to dry.** No temperature, airflow, time, or
  energy is implied or computed. That requires an air-condition model this
  platform does not publish.
- **Wetting is not modelled.** A target above the initial moisture throws rather
  than returning a negative water removal. Rewetting is a real operation; it is
  simply not this maths.
- **The basis gate is heuristic in its trigger.** It matches formula ids and
  expressions. A future moisture formula named without any of those tokens, and
  written without `M_wb`/`M_db`/`moisture` in its expression, would not be
  detected as moisture maths and would not be required to declare a basis.
- **Percent → decimal cannot help.** `percent-to-decimal` converts a wet-basis
  and a dry-basis percentage identically, and they still mean different things.
  The conversion is definitional; the ambiguity survives it untouched.

## Related

- [`commodity-calculator-architecture.md`](./commodity-calculator-architecture.md) — the registry and the one-scalar rule
- [`calculator-safety.md`](./calculator-safety.md) — what these tools are not
- [`blending-model.md`](./blending-model.md) — why a blend needs a common basis
- [`post-harvest-model.md`](./post-harvest-model.md) — drying as a post-harvest operation
- [`storage-and-quality-methodology.md`](./storage-and-quality-methodology.md) — storage moisture context
