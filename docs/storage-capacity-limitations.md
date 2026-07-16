# Storage capacity limitations (Phase 5E)

## Geometry is not capacity

> **Volume is arithmetic. Capacity is an engineering determination.**

Multiplying three dimensions together tells you the size of a space. It tells you
nothing about how much commodity may be stored in it, and nothing at all about
whether the structure can carry the result. The tool is therefore named the
**storage volume estimator**, not a capacity calculator, and its outputs are
labelled "Geometric volume" and "Mass at the bulk density entered" — each says
what it is rather than what it authorises.

Capacity depends on, at minimum:

- the **commodity** and its behaviour in bulk;
- **moisture**, which changes bulk density and flow;
- **compaction** and settlement over time and depth;
- **aeration** ducting, plenums, and the headspace they need;
- the **angle of repose**, which sets the shape of a heap and the void above it;
- **bin design** — wall, hopper, roof, and discharge;
- **structural limits** on loading, and the eccentric loads that discharge
  creates;
- **local engineering rules**, codes, and inspection regimes.

The estimator models the shape of the space, and — only if the reader supplies a
packing factor — the share of that shape the commodity actually occupies. Every
other item on that list is the reader's, and their engineer's.

## What the formulas do and do not say

Five geometry formulas in
[`lib/tools/formulas-commodity.ts`](../lib/tools/formulas-commodity.ts):

| Formula                      | Expression                                     |
| ---------------------------- | ---------------------------------------------- |
| `volume-rect-prism`          | V = l × w × h                                  |
| `volume-cylinder`            | V = π × r² × h                                 |
| `volume-cone`                | V = (1 ÷ 3) × π × r² × h                       |
| `volume-cylinder-with-cone`  | V = π × r² × h_cyl + (1 ÷ 3) × π × r² × h_cone |
| `volume-with-packing-factor` | V_eff = V × f ÷ 100                            |

The four shape formulas each carry the same limitation verbatim: **geometry only
— no structural, safe-working, or regulatory capacity is implied.** Every one of
the five carries a `safetyContext` opening on the same words — _not an
engineering capacity_ — and then names who does decide: structural limits are set
by the design of the actual structure and by qualified engineers, **never by
multiplying three dimensions**.

The tool ([`lib/tools/tools.ts`](../lib/tools/tools.ts), slug
`storage-capacity-estimator`) offers **three geometries** — `rect`, `cylinder`,
and `cylinder-cone` — plus an optional packing factor and an optional bulk
density. The `cylinder-cone` option composes `volume-cylinder-with-cone`, which
is why the registry carries a combined formula rather than asking the tool to add
a cylinder and a cone together itself: that addition would be maths in a
component.

Three details that are easy to get wrong and are therefore stated on the input
itself:

- **The radius is internal.** An external measurement overstates the volume by
  the wall thickness. The field's help text says so.
- **The plain cylinder excludes any cone, hopper, or peak** above or below it.
  Those are separate volumes, not a correction factor — which is exactly why the
  peak is a separate geometry and a separately-entered height rather than a
  fudge on the cylinder. Under `cylinder-cone` the fill height is the level fill
  **to the eave only**, and the peak height is entered on its own field.
- **The packing factor is not the void fraction between particles.** That void
  space is already inside bulk density, which is mass per unit of _bulk_ volume
  and so already counts the gaps; applying a packing factor for particle voids on
  top of a bulk density would double-count them. The factor is for space the
  commodity does not occupy **at all** — headspace, aeration ducting, access, and
  settling. The formula records both halves of that as limitations, and no
  default is offered, for the same reason no default bulk density is.

## No default bulk density — deliberately

The mass output appears **only** when the reader supplies a bulk density. There
is no default, no per-commodity table, and no "typical" figure, and this is a
decision rather than an omission:

> A generic bulk density applied to a real lot is a guess wearing a number.

`mass-from-volume-density` records it as a limitation in those words. Bulk density
varies with moisture, compaction, fill method, and fines — a single figure
describes **one lot in one state**. Supplying a plausible default would convert
the reader's uncertainty into the platform's assertion, and the resulting mass
would look exactly as authoritative as one computed from a measured figure.

The field's help text carries the whole reasoning: _"Leave blank for volume
alone. No default is offered: this figure must describe your commodity in the
state it will occupy the space."_

**Bulk density is also not test weight.** Test weight is a graded measurement
made by a specified apparatus and procedure; bulk density is a mass-per-volume
ratio. The two are not interchangeable, `density-kgm3-to-lbft3` does not turn one
into the other, and the search layer keeps them apart on purpose — see
[`synonym-policy.md`](./synonym-policy.md).

## Volume occupied ≠ space a store needs

`volume-from-mass-density` returns the volume the commodity occupies. That is not
the size of store required: **headspace, aeration, angle of repose, and access
are not included.** A reader who sizes a bin from this figure sizes it too small,
and the formula says so rather than quietly adding a fudge factor whose basis
the platform could not cite.

The storage estimator's packing factor is the one place a reader can account for
that gap — and it is the **reader's** figure, entered by them, defaulting to
nothing. The platform declines to supply the number precisely because it is the
number it could not cite.

## The engulfment framing

The two cone formulas are where the registry's `safetyContext` stops being
commercial and turns physical, and they are written to be read. `volume-cone`:

> Not an engineering capacity, and not a basis for entering, walking on, or
> working around a pile — **stored bulk material can engulf a person without
> warning.**

`volume-cylinder-with-cone` carries the same warning in the same words, extended
to stored bulk material generally and to bin loading. The storage tool's
`safetyDisclosure` carries it a third time, because a cone volume is the number
someone computes while standing next to the pile. It is attached to the maths, not
buried in a site-wide disclaimer, for that reason — and it is repeated rather than
cross-referenced because a reader who reaches one of these formulas may never see
the others.

## Known limitations

Recorded plainly rather than hidden.

- **This is not an engineering certification, a capacity rating, or a
  safe-working load.** Nothing produced by this tool bears on whether a structure
  can hold what it computes. That determination belongs to the structure's design
  and to qualified engineers, and no combination of inputs here substitutes for
  it.
- **A real pile is not a cone.** Its slope is set by the angle of repose — which
  varies with commodity, moisture, and fines — and its base is rarely circular.
  The cone is an approximation whose error the platform does not quantify.
- **Ideal shapes only.** A right rectangular prism, a right circular cylinder,
  and a right circular cone on top of that cylinder. Hoppers, roof volumes,
  sloped floors, ducting, obstructions, and structural intrusions are not modelled
  and are not subtracted — a packing factor is the only way to account for them,
  and it is a single number the reader chooses, not a model of any of them.
- **Level fill is assumed unless a peak is entered.** Under `rect` and
  `cylinder` the height entered is a fill height and the maths assumes the surface
  is flat at it; filling from a single point does not produce a level surface,
  which is what `cylinder-cone` exists for. A cone is still an idealisation of a
  real heap.
- **The peak height is unchecked against the angle of repose.** A heap cannot be
  steeper than its commodity's angle of repose. The formula does not know the
  commodity, does not know the angle, and will compute a physically impossible
  peak without complaint. The field's help text says so; nothing enforces it.
- **`volume-cone` is composed by no tool.** It is registered, tested, and carries
  the engulfment warning, but the estimator reaches the peak case through the
  composite `volume-cylinder-with-cone` instead. A reader with a heaped pile on a
  cylinder has a calculator; a reader with a free-standing conical pile and no
  cylinder under it does not, and would have to enter a zero-height cylinder to
  use one. The formula is reviewable and its maths is reachable; the standalone
  formula itself is not resolved by anything.
- **The mass figure is only ever as good as the density entered**, and the tool
  cannot tell that the figure is wrong, stale, or from a different commodity. It
  will convert whatever it is given to lb/ft³ with full precision.
- **No settlement over time.** Bulk material compacts under its own weight and in
  storage. A volume computed at fill is not the volume the same mass occupies a
  month later.
- **No regulatory content.** Permitting, licensing, inspection, ATEX/dust and
  confined-space regimes, and local codes vary by jurisdiction and are outside
  the model entirely. See
  [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md).

## Related

- [`calculator-safety.md`](./calculator-safety.md) — the safety boundaries these tools enforce
- [`commodity-calculator-architecture.md`](./commodity-calculator-architecture.md) — the registry and composition rules
- [`moisture-basis.md`](./moisture-basis.md) — why moisture changes the density
- [`storage-and-quality-methodology.md`](./storage-and-quality-methodology.md) — storage evidence and its sources
- [`post-harvest-model.md`](./post-harvest-model.md) — storage as a post-harvest operation
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — what the platform does not certify
