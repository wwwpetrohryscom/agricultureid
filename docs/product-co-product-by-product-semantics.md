# Product, co-product, by-product semantics (Phase 5C)

## The three classes

A single agricultural process almost never yields one thing. The distinction
between its outputs is **economic and technical**, decided per process — not a
label applied by habit.

| Class             | Meaning                                                               | Example                     |
| ----------------- | --------------------------------------------------------------------- | --------------------------- |
| `primary-product` | the main intended output; the reason the process is run               | wheat grain → flour         |
| `co-product`      | a deliberate, valuable output produced simultaneously and inseparably | soybeans → meal **and** oil |
| `by-product`      | a residual output of lower value the process is not run to produce    | sugarcane → bagasse         |

`productClass` lives on `commodity-product`. There is no separate page type per
class — see [`processing-transformation-model.md`](processing-transformation-model.md).

## A residue is not waste

**The model has no "waste" class, deliberately.** Bran, hulls, bagasse, pomace,
citrus peel, almond hulls, press cake, molasses, and beet pulp all have
established feed, fuel, fibre, pectin, or soil uses. Calling them waste
misrepresents both the material flow and the economics — bagasse commonly fuels
the mill that produced it, and beet pulp is a valued feed.

A stream is therefore modelled as a **by-product with stated uses**. Where a
stream genuinely has no recovered use in a given context, that is said _with its
context_ rather than generalised into a claim about the material.

## Where the classes are contested

Recorded rather than smoothed over:

- **Neither meal nor oil is "the" primary product of crushing.** Both are
  co-products: the operation is run for both, and they are inseparable. Filing
  either as primary would misstate the economics.
- **`pearl-barley` reads as a headline product but is classed `co-product`.**
  The class follows the commodity's own declaration, not the page's prominence.
- **`white-pepper` is filed as a co-product of black peppercorns**, though the
  two are _alternative processing routes_ per lot rather than simultaneous
  outputs. The class is the closest available fit and the page says so — it is
  certainly not residual.
- **Press cake vs solvent-extracted meal.** Both are co-products of soybeans and
  share a customs heading (HS 2304.00), because customs does not distinguish
  them. They are compositionally different — pressing always leaves oil behind,
  which is precisely why solvent extraction exists — so the platform models them
  separately even though the tariff does not.

## The §6 separations this phase restored

The brief forbids collapsing certain entities. Four were missing and were added:

- `wheat-germ` — separated in milling **because** its oil shortens flour's
  keeping quality; a shelf-life decision about the flour, not a judgement on the
  germ.
- `wheat-straw` — a by-product of the **harvest**, separated by the combine, not
  by any processing method. It therefore has **no `producedBy`**, and the page
  states that explicitly rather than leaving an unexplained gap.
- `refined-sugar` — distinct from `raw-sugar`. The cane/beet asymmetry is real:
  refined sugar sits downstream of raw sugar on the cane side, while on the beet
  side white sugar is the factory's own primary product with no raw-sugar stage.
- `soybean-press-cake` — distinct from `soybean-meal` (above).
