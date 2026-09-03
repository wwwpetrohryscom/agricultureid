# Wave 46 — search semantics and field-frequency architecture

Branch `feat/search-semantics-wave-46`, on top of Wave 45 (`77efdf3`).

## The diagnosis, before any scoring change

Ten known issues. Reading each one's score breakdown rather than its symptom
gave three mechanisms, not ten problems.

**FIELD_FREQUENCY.** The index summed a token's field weights, so a document
carrying "wheat" in its title, names, scientific name, category and summary
scored 30 for one word while a document matching _both_ words of a two-word
query in one field scored 16. Five known issues were that arithmetic.

**FIELD_MISUSE.** `glossaryTerms` records which defined terms a page uses so
the renderer can offer a definition. Indexing it made "this page mentions
cultivars" indistinguishable from "this page is a cultivar": Wheat Stripe Rust
won "wheat cultivar" over every wheat cultivar in the corpus, and Triticale — a
wheat×rye hybrid **species** — won "cultivar of wheat".

**MORPHOLOGY_VARIANT / TOKENIZATION.** No stemmer, and prefix expansion runs
query→index, so "cultivars" cannot reach "cultivar"; and "in" counts toward
term coverage, so "machinery in farming systems" ranked on a preposition.

## What shipped

**Field saturation.** A term's strongest field decides most of its worth and
every further field adds a share of a bounded remainder. A term in one heavy
field keeps its full weight; a term repeated across five is worth more than one
and not five times more.

Fixed: **dry basis**, **tart cherry**, **triticum turgidum**. The second is the
case Wave 39 attacked with a larger name bonus and Wave 40 by removing an alias,
and neither could have worked — a constant added to one side cannot outrun a sum
that grows with field count, which is exactly what Wave 39's reverted attempt
suggested and this wave confirms.

**Glossary annotations out of the index.** Removed rather than down-weighted: a
weight expresses how much a field matters, and the problem was that the field
means something else. The scientifically false equivalence is gone — Triticale
no longer leads "cultivar of wheat" — and real wheat cultivars now appear in the
top three of "wheat cultivar".

**Search pointers.** A term that reaches a page without claiming to name it,
declared per term with the relationship stated. Waves 27 and 32 both had to
strip technical vocabulary out of `alternativeNames`, because an alternative
name is a claim that the crop is called that and castor bean is not called
ricinoleic acid. Fixed **ricinoleic acid** and **nerica**, the second of which
previously returned nothing at all.

**Five of ten known issues fixed.**

## What was built, measured, and not shipped

The brief is explicit: a scoring change that fixes nothing is reverted, and one
that fixes a case by breaking another is not a fix. Five changes were built and
measured against the full suite. Three moved nothing, two moved the failure.

| change                                | measurement                                                                   | outcome      |
| ------------------------------------- | ----------------------------------------------------------------------------- | ------------ |
| conditional page-type prior (§42/§43) | identical suite at 0.85 and at 1.0, twice — before and after the glossary fix | **reverted** |
| inverse document frequency            | top-1 99.7% → 99.1%, "ricinoleic acid" unmoved                                | **reverted** |
| query stopword removal                | fixed nothing, broke "breed of cattle"                                        | **reverted** |
| multiplicative name-equality bonuses  | fixed "reefer container", broke "barley" and "corn"                           | **reverted** |
| title-coverage factor                 | fixed "reefer container", broke "nitrogen fertilizer"                         | **reverted** |

The intent prior is the one worth naming. It is the architecture §42 and §43
describe, and it would have prevented the Wave 42 defect — a calendar outranking
its crop — for every derived page type rather than for calendars alone. It
earned nothing, because Wave 42 had already removed the composite names that let
calendars accumulate their crop's name, and saturation removed the general form
of that advantage. The taxonomy it needed stayed, describing rather than
ranking; the prior did not.

Each measurement is kept with the code it belongs to, because the next attempt
should start from the number rather than from the idea.

## Alias architecture (§45, §46)

Seven kinds, and **uniqueness is not required**: four pairs of published crops
share an alias legitimately, and a uniqueness rule would make the corpus choose
between adzuki and rice bean for "red bean" and be wrong about whichever it did
not choose.

The queue is computed. Of 528 alternative names, 520 are unique and uncontested
and the validator works that out rather than asking anyone to write it down; a
record is **required** where uniqueness does not hold and **forbidden** where it
does, so the register can neither go stale nor fill with noise.

It found three aliases that were another published crop's **title**: the coffee
concept carrying "Arabica coffee" and "Robusta coffee", and cotton carrying
"Upland cotton". Wave 41 found five parents claiming a child's title and added a
rule that exempts concept pages; these three lived in that exemption. Removed,
recorded as `INVALID_COLLISION`, and the record now fails if the name comes back.

For a shared or ambiguous alias, the validator checks the property §46 asks for
— that **every** crop carrying the name surfaces in the first six results —
rather than checking for a winner. A shared name resolved to one crop has been
decided by the ranking rather than by anyone.

## Every known issue has a disposition (§49)

| query                                                                  | disposition                                                                                                                                                                                                 |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dry basis · tart cherry · triticum turgidum · ricinoleic acid · nerica | **fixed** — promoted to regression cases                                                                                                                                                                    |
| shipping documents                                                     | INTENT_AMBIGUOUS_ACCEPTED — no such page exists and none should be invented                                                                                                                                 |
| wheat cultivar · cultivar of wheat                                     | STRUCTURAL_LIMITATION — the false claim is fixed; what leads is a generic advisory page carrying the type word in its title                                                                                 |
| wheat cultivars                                                        | STRUCTURAL_LIMITATION — a singulariser was built and moved the answer from the crop to a disease, because closing a morphology gap in front of a field-misuse defect changes which wrong answer is returned |
| machinery in farming systems                                           | STRUCTURAL_LIMITATION — the token carrying the intent matches nothing on any candidate                                                                                                                      |
| reefer container · semolina wheat                                      | INTENT_AMBIGUOUS_ACCEPTED — two outcomes this wave changed, recorded rather than tuned away                                                                                                                 |

The last row is the one to read carefully. Saturation moved both queries onto a
different but defensible answer, and two attempts to restore the previous order
each fixed one case by breaking another. Rather than tune until an arbitrary
case returned, both are recorded as genuinely ambiguous with the reasoning and
the failed attempts named.

## Score explainability (§48)

`npm run search:explain -- "<query>"` prints, per result, each query token's
contribution and the fields carrying it, the raw field score, term coverage,
title coverage, the page-type prior, both equality bonuses, the final score and
the tiebreaks.

Two properties make it worth having. The breakdown **is** the score — the ranker
builds it and sums it, so a report cannot drift from the ranking. And the
checker recombines the parts with an expression written out **independently** of
the engine's own combiner: an injection that added a constant to `finalScore`
passed while the check called that function, which is a rule validating its own
constant. It fails now.

The breakdown is attached to a result only when `explain` is asked for, so no
search response a reader receives carries the engine's arithmetic.

## Adversarial injections

14 attempted: **11 caught as intended · 3 invalid · 2 holes found and closed.**

| #   | Fixture                                                         | Result                                                                   |
| --- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | a calendar repeating the crop name outranks the crop            | CAUGHT_AS_INTENDED                                                       |
| 2   | a disease spreading a crop name across fields                   | INVALID_INJECTION — the attack cannot land                               |
| 3   | a hub taking a published crop title                             | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED                             |
| 4   | a concept reclaiming its children as its own names              | CAUGHT_AS_INTENDED                                                       |
| 5   | an exact child query landing on the concept                     | CAUGHT_AS_INTENDED                                                       |
| 6   | an ambiguous alias silently resolved to one crop                | CAUGHT_AS_INTENDED                                                       |
| 7   | a legitimate shared alias rejected as a uniqueness violation    | CAUGHT_AS_INTENDED                                                       |
| 8   | an alias equal to another published crop title                  | CAUGHT_AS_INTENDED                                                       |
| 9   | field-frequency saturation disabled                             | CAUGHT_AS_INTENDED                                                       |
| 10  | a page-type prior suppressing relation-intent results           | CAUGHT_AS_INTENDED                                                       |
| 11  | a scoring change that breaks a critical entity query            | CAUGHT_AS_INTENDED                                                       |
| 12  | a scoring change that fixes nothing while the suite stays green | INVALID_INJECTION — the change makes no difference, which is the finding |
| 13  | a debug report whose parts do not sum to the score              | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED                             |
| 14  | a fixture changing a search doc not in the index                | INVALID_INJECTION (by design)                                            |

### The two holes

**A hub could take a crop's title.** The Brassica hub retitled "Cabbage" tied
the cabbage crop at 126 points and every gate passed, with the alphabet deciding
what a reader searching for cabbage was shown. Wave 37 refused a hub for a genus
that already has a concept page — it checked membership, not names. The hub
validator now checks the name too. It is the same defect as the three concept
aliases, in the layer nobody had asked.

**The explain check shared its arithmetic with the ranker.** Adding a constant
to `finalScore` left the report agreeing with the ranking about a wrong score,
because both called the same function. The checker now recombines the parts
independently, in both the tool and the test.

### Injection 2 is a result, not a gap

A disease given the crop's name in three fields still loses "wheat" to the crop,
by 130 to nothing in the top three. The fixture could not create the defect it
was written to test, because within-field de-duplication and cross-field
saturation together make repetition nearly worthless. That is the invariant
holding, and it is recorded as an invalid injection with the measurement rather
than as a pass.

## Counts

|                                    | Wave 45           | Wave 46                   |
| ---------------------------------- | ----------------- | ------------------------- |
| Search regression cases            | 591               | **614**                   |
| Top-1 · top-3 · false positives    | 100% · 100% · 0   | **100% · 100% · 0**       |
| Known issues                       | 10, none disposed | **7, every one disposed** |
| Known issues fixed                 | —                 | **5**                     |
| Scoring changes shipped · reverted | —                 | **2 · 5**                 |
| Alias records · search pointers    | —                 | **8 · 2**                 |
| Validators in `npm run validate`   | 39                | **40**                    |
| Tests · files                      | 1,161 · 68        | **1,173 · 69**            |
| Built pages                        | 1,831             | 1,831                     |
