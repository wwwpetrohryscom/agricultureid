# Search debt review — Wave 35

The six documented search-engine defects were re-examined. **None was fixed,
and one attempted fix was reverted.** This records why, so the next wave does
not repeat the attempt.

| Query                          | Classification                 |
| ------------------------------ | ------------------------------ |
| `shipping documents`           | `OUT_OF_SCOPE`                 |
| `dry basis`                    | `REQUIRES_SEARCH_MODEL_CHANGE` |
| `cultivar of wheat`            | `REQUIRES_SEARCH_MODEL_CHANGE` |
| `wheat cultivar`               | `REQUIRES_SEARCH_MODEL_CHANGE` |
| `wheat cultivars`              | `REQUIRES_SEARCH_MODEL_CHANGE` |
| `machinery in farming systems` | `REQUIRES_SEARCH_MODEL_CHANGE` |

## `shipping documents` — out of scope

The benchmark expects a trade-concept page and no "shipping documents" page
exists. None should be invented: the concept is covered by Bill of Lading,
Packing List and Commercial Invoice, which are separate documents that a reader
needs separately. The right answer to this query is a category, and the engine
returns an entity. Fixing it means answering category-shaped queries with
categories — which is Wave 37's hub work, not a scoring change.

## The four relation-direction defects share one cause

`cultivar of wheat`, `wheat cultivar`, `wheat cultivars` and `machinery in
farming systems` all fail the same way. A cultivar entity carries the token
"cultivar" in its category and relation labels, at weights 2 to 4. Anything with
"wheat" in its **title** scores 10. No amount of matching the _relation_ can
outweigh one hit on the _entity name_, so the query returns the thing named
wheat rather than the things related to wheat.

That is a modelling gap, not a tuning gap. The engine has no representation of
"X of Y" as a direction, and giving relation labels enough weight to win these
queries would let relation vocabulary win queries it should lose — the defect
that Waves 27 and 32 both had to remove from this corpus.

### The attempted fix, and why it was reverted

`wheat cultivars` looked separable: prefix expansion runs query to index, so
"cultivar" reaches "cultivars" but "cultivars" reaches nothing. A narrow
index-to-query expansion was implemented — index token a prefix of the query
token, at most two characters shorter, at a reduced score factor.

It left all 269 regression cases passing and **fixed none of the six**. The
plural now reaches the singular token, and the singular token still sits at
weight 2 on the pages that deserve to win, so the ranking did not change in the
way that mattered; on `wheat cultivars` the top result moved from the wheat page
to a wheat disease page, which is not better.

It was reverted. Scoring surface that fixes nothing and perturbs something is
worse than the defect it was aimed at, and leaving it in would have made the
next attempt harder to reason about.

## `dry basis`

"Dry basis" is a declared alias of the moisture content converter, and
quality-attribute "Dry Matter Content" outranks it because "Dry" in a title
scores 10 against the alias's 8. The sibling alias "wet basis" works, because no
entity is titled "Wet".

The fix would be to score an exact multi-token phrase match above a partial
single-token title match. That is a real improvement and a real risk: it changes
the relative value of phrase and title across all 275 benchmark cases at once,
and this wave is about corpus integrity rather than search architecture.
Recorded as tractable, deliberately not attempted here.
