# Blending model (Phase 5E)

## Scope, stated up front

**Two lots. One commodity. One attribute. Linear attributes only.** Everything
this model does is a **total-mass**-weighted average, and everything it refuses
follows from that being the only thing it does.

```
x_blend = (q_A × x_A + q_B × x_B) ÷ (q_A + q_B)      blend-two-lot-weighted-average
q_B     = q_A × (x_A − x_target) ÷ (x_target − x_B)  blend-required-lot-b
```

The second is the first solved for `q_B`, which is why the tool recomputes the
blend from the answer it just produced and shows it back as a check.

Both formulas declare `acceptedBases: ['wet-basis']` and **nothing else**. That
restriction is the subject of the next section, and it is load-bearing rather
than cautious.

## Linear attributes only — and the refusal that proves it

Moisture, protein, and oil content **on a common wet basis** are total-mass-weighted
and blend linearly. (On a dry basis they still blend linearly, but in dry matter
rather than total mass — see below.) Many attributes do not blend linearly at all.
The registry names the ones that matter: **test weight, falling number, and most
functional and rheological properties**.

For those, a weighted average is not an approximation. It is **wrong**:

> Test weight is marked **UNSUPPORTED** and the tool **refuses to compute**.

It appears in the attribute select — labelled _"Test weight — UNSUPPORTED, does
not blend linearly"_ — precisely so it can be refused rather than silently
omitted. Choosing it returns an error explaining why, and what to do instead:
test weight is a graded measurement of the blended lot and has to be measured on
that lot **after** blending.

This is the decision worth defending. Omitting test weight from the list would
have been quieter and worse: a reader looking for it would conclude the tool
didn't handle their attribute and reach for "Other linear attribute (user-defined)",
which computes exactly the wrong number without complaint. Listing it as a
refusal puts the platform's answer where the question gets asked.

The `custom` option remains an honest hole in that reasoning — see known
limitations.

## Basis compatibility

Basis is a **required select with no default**
([`moisture-basis.md`](./moisture-basis.md)). Both lots must be on the one basis,
because:

> A wet-basis figure and a dry-basis figure cannot be averaged together.

Mixing them corrupts the result silently — plausible number, valid inputs,
correct arithmetic, wrong answer. The chosen basis is carried through to the
output unit and restated in the result note (_"Both lots read on the wet
basis"_), so the figure cannot be quoted onward without its denominator
attached.

Both lots must also share a **unit**. The maths is unit-agnostic and never sees
one; the field's help text carries the requirement (_"Any mass unit, as long as
both lots use the same one"_) and nothing enforces it.

## A dry basis is weighted by dry matter, not by total mass

This is the subtlest thing in the 5E maths, and getting it wrong is not a
rounding error.

**Total-mass weighting is correct for wet-basis moisture** because both the water
and the total mass simply add: water is denominated on total mass, and totals are
additive. So the wet-basis blend really is `(q_A x_A + q_B x_B) / (q_A + q_B)`.

**It is wrong for a dry basis.** Dry-basis moisture is water ÷ **dry matter**, so
the quantity that adds in the denominator is dry matter — not total mass. From
first principles, with `D = q ÷ (1 + x_db/100)` the dry matter of a lot and
`W = q − D` its water:

```
x_blend(db) = (W_A + W_B) ÷ (D_A + D_B)
```

Weighting a dry-basis blend by total mass over-weights the wetter lot. The error
is not small:

| Case                              | True (dry-matter-weighted) | Total-mass-weighted | Error           |
| --------------------------------- | -------------------------- | ------------------- | --------------- |
| 100 @ 10% db + 100 @ 100% db      | **41.94% db**              | 55.00% db           | **13.1 points** |
| 100 @ 185.7% db + 100 @ 16.28% db | **65.29% db**              | 100.99% db          | **35.7 points** |

The second is a forage blended with a cereal — an ordinary thing to want to do.
The old model returned **100.99% dry-basis for a blend that is 65.29%**, and
100.99% is not even flagged as odd, because a dry basis is legitimately unbounded
above.

### How the tool handles it

`blend-two-lot-weighted-average` and `blend-required-lot-b` therefore accept the
**wet basis only**. The tool does not stop at refusing a dry-basis moisture,
because there is an exact route:

> Restate both lots on the wet basis with `moisture-db-to-wb`, blend there — where
> total-mass weighting is genuinely correct — and convert the result back with
> `moisture-wb-to-db`.

That is **provably identical to dry-matter weighting**, and it composes registry
formulas rather than introducing a second weighting rule into the codebase. A test
in [`tests/phase5e.test.ts`](../tests/phase5e.test.ts) asserts the tool's output
against the first-principles identity `(W_A+W_B)/(D_A+D_B)` derived independently
of the tool, across a spread of cases including the forage/cereal one. The two
agree to floating-point rounding — the raw deviation is of order 1e-13, i.e. the
identity is exact in real arithmetic and IEEE-754 double rounding is not.

The result note says what happened rather than converting behind the reader's
back: _"Dry-basis figures are restated on the wet basis to blend, then converted
back: a dry-basis blend is weighted by dry matter, not by total mass."_

### And the refusal that follows from it

The same dry-matter weighting applies to **protein or oil reported on a dry
basis** — but the tool has no moisture input, so it cannot derive either lot's dry
matter, so it cannot do the restatement. It therefore **refuses** a dry-basis
protein, oil, or custom blend outright rather than silently applying the wrong
weighting:

> A dry-basis protein is denominated on dry matter, so blending it is weighted by
> dry matter rather than by total mass — and the dry matter cannot be derived
> without each lot's moisture, which this tool does not ask for.

The error names the two ways out: restate both lots on an as-received (wet) basis
and blend those, or blend the dry matter and the attribute mass separately. A
refusal that does not say what to do instead is just an obstacle.

## Target feasibility

> A blend cannot leave the range its inputs span.

`blend-required-lot-b` **rejects** a target outside the range spanned by the two
lot values, at any ratio, rather than returning a negative quantity. A negative
answer here is the arithmetic's way of saying "impossible", and a tool that
printed it would be inviting the reader to interpret nonsense.

Two adjacent edges are handled explicitly rather than left to the floating-point
gods:

- **Target equals lot B** (and the lots differ) — the blend would be lot B alone,
  with no finite quantity of A. Rejected with that explanation.
- **Both lots identical** — returns 0, because no lot B is needed.
- **`q_B = 0`** is a valid answer, not an error: the lot is already at target.

## Blending is not a route to compliance

The `safetyDisclosure` on the tool and the `safetyContext` on both formulas make
the same point in slightly different words, and it is the most important sentence
here. The tool's, in full:

> **Not a grade, compliance, or contract determination.** A blended average does
> not establish that a lot meets a grade or a specification, and blending to
> disguise a defect or evade a standard is a matter for the applicable standard
> and the law, not for this tool.

An arithmetic average of an attribute is not a grade. Grades are determined by
specified procedures, on the actual lot, by whoever the standard or contract says
— see [`commodity-grade-model.md`](./commodity-grade-model.md) and
[`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md).
Many standards and contracts also restrict or prohibit blending outright,
particularly where a defect, contaminant, or origin claim is involved. The
platform takes no position on those rules beyond noting that they exist and
override anything computed here.

## Known limitations

Recorded plainly rather than hidden.

- **Nothing checks that the attribute actually blends linearly.** The "Other
  linear attribute (user-defined)" option computes a weighted average of whatever
  is entered. It is named for the class of attribute it is for, and it is the
  hole in the refusal above: a reader determined to average two test weights can
  do it through `custom`. The tool cannot know, and the label is the only defence.
- **Test weight is refused, not modelled.** The platform offers no non-linear
  blending model for it — refusing is the whole of the answer. If you need the
  blended test weight, measure the blend.
- **Two lots only.** Three-lot and multi-lot optimisation is out of scope. The
  formulas do not compose to it, because the target case is a two-unknown problem
  and n lots is not.
- **Arithmetic on a homogeneous mix.** It assumes the blend is actually
  homogeneous. That is a physical operation, not a calculation, and incomplete
  mixing means the computed average describes no part of the resulting lot.
- **Units are unenforced.** Both lots sharing a unit is a requirement stated in
  help text and checked by nobody. Mixed units in, plausible nonsense out.
- **Basis is enforced as a single choice, not per lot.** The tool requires _one_
  basis for both lots — which is correct — but it cannot detect that the reader
  entered a dry-basis figure for lot B under a wet-basis heading.
- **A dry-basis protein or oil blend is refused, not computed.** The dry-matter
  weighting it needs is not derivable without each lot's moisture, and the tool
  does not ask for it. Adding a moisture input per lot would make it computable;
  that is a design change, not a bug fix, and it has not been made.
- **The dry-basis route is exact for moisture only.** Restating through
  `moisture-db-to-wb` works because moisture is the attribute whose two bases are
  interconvertible from the figure alone. No other attribute has that property,
  which is why no other attribute gets the same treatment.
- **No feasibility check on quantity.** `blend-required-lot-b` will tell you a
  target needs 200 units of lot B whether or not 200 units exist. Availability is
  not an input.
- **Sampling underlies everything.** Both attribute values are assumed to
  describe their lots. A weighted average of two unrepresentative samples is an
  unrepresentative average, computed to full precision.

## Related

- [`moisture-basis.md`](./moisture-basis.md) — why a common basis is mandatory
- [`commodity-grade-model.md`](./commodity-grade-model.md) — what a grade is, and who determines it
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — what the platform does not certify
- [`calculator-safety.md`](./calculator-safety.md) — the safety boundaries
- [`commodity-calculator-architecture.md`](./commodity-calculator-architecture.md) — the registry and composition rules
