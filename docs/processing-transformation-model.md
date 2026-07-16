# Processing & transformation model (Phase 5C)

## The line this phase draws

A **post-harvest operation** conditions a lot without changing what it is: dried
wheat grain is still wheat grain, cooled apples are still apples. A
**processing method** changes identity: milling turns wheat grain into flour,
bran, and germ — different entities, different markets, different evidence.

That break is why `processing-method` is its own type rather than another
`postHarvestClass`. A processing method is a **transformation node**: it has
typed inputs and outputs, a chain that can be walked, and cycles that must be
rejected. A post-harvest operation has none of those.

## Reused vs new entity types

The brief asked for `ProcessingMethodEntry`, `ProcessingStageEntry`,
`PrimaryProductEntry`, `CoProductEntry`, and `ByProductEntry`. Only the first
became a type. The rest already had a correct home, and §2/§10 forbid
duplicating one.

| Brief's entity          | Decision                                                           | Why                                                                                               |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `ProcessingMethodEntry` | **New type** `processing-method`, route `/processing`              | Genuinely distinct semantics (identity change), validation (chain, cycles), and route intent      |
| `PrimaryProductEntry`   | **Reused** `commodity-product` (`productClass: 'primary-product'`) | Already exists with 20 entries                                                                    |
| `CoProductEntry`        | **Reused** (`productClass: 'co-product'`)                          | Already exists with 22 entries                                                                    |
| `ByProductEntry`        | **Reused** (`productClass: 'by-product'`)                          | Already exists with 13 entries                                                                    |
| `ProcessingStageEntry`  | **Field, not pages** (`processStage` + `precededBy`/`followedBy`)  | A "cleaning stage" page would restate its methods — a thin registry page duplicating their intent |

Consequently there are **no `/co-products` or `/by-products` routes**: they would
duplicate `/commodity-products` URL intent, which §11 explicitly warns against.
`commodity-product` gained one field, `producedBy`.

## The chain check — and its limit

Every method declares `inputCommodities` and its outputs. The validator's central
rule:

> **An output's own `derivedFrom` commodity must be one of the method's inputs.**

Without it, a page could claim that milling wheat yields soybean oil and every
other check would pass. This is the processing-side counterpart of Phase 5A's
rule that a pathway is never inferred from a shared crop parent.

### Known limitation: chain-valid ≠ true

**The chain rule is necessary but not sufficient, and this is not fixable by
validation.** It cannot catch a method claiming an output that is real _for that
commodity_ but produced by a _different step in the same chain_:

- `cocoa-fermentation → cocoa-nibs` passes the chain rule (nibs derive from
  cocoa beans) and is **false** — fermentation yields fermented beans; nibs
  appear only at winnowing.
- `retting → shive` passes and is **false** — retting loosens the pectin bond;
  it separates nothing. Shive leaves at decortication.
- `beet-diffusion-extraction → beet-sugar` passes and is **false** — diffusion
  yields juice; crystals form downstream.

A uniqueness constraint would not help and would be wrong: a product legitimately
has several producers (soybean oil comes from **both** mechanical pressing and
solvent extraction; cornmeal from both hammer milling and maize dry milling).

This is therefore a **semantic judgement the model cannot make**. It is handled
editorially: authors are instructed to prefer omitting a method to inventing an
output, and each of the three cases above was caught and omitted during
authoring rather than published. It is recorded here as a standing risk for
review of any future processing content.

## Reciprocity is generated, not hand-written

`producedBy` on a product is **derived** by
[`scripts/build-produced-by.mjs`](../scripts/build-produced-by.mjs), which
inverts the outputs declared on methods. The validator requires both directions
to agree; a hand-maintained inverse is exactly the thing that silently rots.
Re-run the generator after changing any method's outputs.

## Validator rules (`lib/processing/validate-processing.ts`)

Errors on: unknown class/stage/basis; missing objective, principle, or safety
limitations; no input; input that is not a resolving commodity; **no output**;
output that is not a commodity-product; **broken chain** (output's commodity is
not an input); output class mismatched to its bucket; duplicate output edge;
non-reciprocal edge in either direction; self-referencing sequence; unresolved
sequence ref; **cycle in the `followedBy` graph**. Warns on a sequence that runs
backwards through the stage order.

## What the model cannot represent

Recorded honestly rather than hidden:

- **Commodity→commodity steps.** Dehulling paddy yields brown rice; ginning
  yields lint and cottonseed; wet processing yields green coffee. All of these
  are _commodities_, not products, so no product edge exists. The methods
  declare only their genuine product outputs (rice husk, etc.) and explain the
  commodity step in prose. The chain still walks — through the commodities.
- **Intermediates.** Single-strength juice, clarified cane juice, cocoa mass,
  and flaked seed have no entity, so methods that yield only an intermediate are
  omitted rather than given a false output.
- **Crude vs refined streams.** `oil-clarification` and `degumming` re-declare
  the same oil slug they receive, because the model has no crude/refined
  distinction. Both pages say so explicitly.
- **Commercial channel splits.** Processing tomatoes and low-sugar onion
  cultivars are distinct commercial channels of one harvested commodity; the
  single-commodity model cannot represent them, and the pages disclose it.
- **Products with no producer.** 17 products (including `beet-sugar`,
  `refined-sugar`, `cotton-linters`, `wheat-straw`) have no producing method in
  this phase. `wheat-straw` is correct by nature — it is separated by the
  combine, not a mill. The others are genuine gaps needing a beet
  crystallisation method, a cane refining method, and a `delinting` method
  (input `cottonseed` → `cotton-linters`, since linters come off the seed at the
  oil mill, not the gin).
