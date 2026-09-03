# Wave 45 — legacy crop prose remediation

Branch `feat/crop-prose-remediation-wave-45`, on top of Wave 44 (`bd6ee39`).

## Reading the debt as families changed what it was

The reported baseline was 277 article pairs sharing a run of twenty words or
more. That number is real and it hides the shape of the thing it counts: a
sentence repeated across a hundred articles is one editorial decision and
nearly five thousand pairs, and a pairwise detector reports it as a large
number of unremarkable pairs.

Built as families — a repeated run grown until its whole article set stops
agreeing, then deduplicated — the corpus's largest repeated text turned out to
be a **methodology caveat in 123 of 257 crop articles, written in 90 distinct
wordings across 156 sentences**. No single pair of those 123 shared a
particularly long run, so it had never appeared at the top of the pairwise list
at all.

|                       | before              | after   |
| --------------------- | ------------------- | ------- |
| families ≥20 words    | 75                  | **36**  |
| families ≥25 words    | 31                  | **4**   |
| families ≥30 words    | 15                  | **0**   |
| longest family run    | 47w                 | **26w** |
| pairs ≥20 words       | 277                 | **42**  |
| pairs ≥25 words       | 102                 | **4**   |
| pairs ≥30 words       | 39                  | **0**   |
| longest identical run | 73w (pre-programme) | **20w** |

Both ratchets were lowered to what the corpus now measures.

## The production-statistics caveat: case A, centralised

The brief asked whether the big caveat family was (A) a true corpus-wide
methodology disclaimer, (B) duplicated crop-specific source explanation, (C)
partly common policy with a crop-specific tail, or (D) outdated boilerplate.

It is **A**, and the evidence is the ninety wordings. Ninety versions of one
policy is not ninety facts; it is one fact the corpus restated, slightly
differently, every time an article mentioned production. So it was
**centralised** rather than rewritten:

- `CROP_STATISTICS_CAVEAT` and `CROP_ET_METHODOLOGY_CAVEAT` in
  `lib/crops/editorial-boilerplate.ts`, rendered by `CropMethodologyNote` on
  **every** crop page — including the 134 whose prose never mentioned them,
  where they were true all along.
- **156 sentences removed** from 123 articles: 81 whole paragraphs where the
  caveat was the entire paragraph, and 75 trailing sentences cut from
  paragraphs that also said something about the crop. The cut was made at a
  pinned list of clause openers, never by similarity, and the one sentence no
  opener reached was reported rather than guessed at.
- A gate now forbids either caveat, and the openers they were cut at, from
  reappearing in article prose. Nothing about removing them stops the ninety
  wordings happening again; the gate does.

No article lost enough to fall below the depth floor.

## Eleven copied families rewritten from what actually differs

Removing the caveats left a residue small enough to read. Each rewrite replaced
a template with the thing that is specific to the crop:

| family                       | articles | replaced with                                                                                                                                          |
| ---------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| orchard irrigation template  | 5        | apple's cell-division window · apricot's pit hardening · persimmon's late fruit drop · hazelnut's harvested orchard floor · walnut's Phytophthora risk |
| Mediterranean herb drought   | 4        | rosemary's deep roots · thyme's shallow ones · sage's leaf hairs · lavender's oil-versus-biomass trade-off                                             |
| stone-fruit frost            | 2        | peach's coupled winter-cold risk · plum's Japanese/European split                                                                                      |
| cucurbit rotation bullet     | 2        | a storage pumpkin's multi-year interval against a double-cropped squash's                                                                              |
| Zingiber identity fact       | 2        | ginger traded fresh · turmeric boiled and dried                                                                                                        |
| Rubus market list            | 2        | the raspberry separates from its receptacle and the blackberry does not                                                                                |
| pulse harvest opener         | 2        | kabuli seed damage at threshing · lentil standing too low to cut                                                                                       |
| orchard establishment opener | 4        | salinity for pistachio · pollination layout for walnut · nematodes for peach · drainage for plum                                                       |
| nut irrigation scheduling    | 2        | hazelnut's asymmetry — a dry season costs kernel size, a wet one costs the planting                                                                    |

Nothing was paraphrased to look different, and no fact was distorted to move a
number.

## All 47 families classified, none left unknown

| classification                            | n   |
| ----------------------------------------- | --- |
| LEGITIMATE_SHARED_CAVEAT                  | 33  |
| COPIED_CROP_SPECIFIC_PROSE (all resolved) | 7   |
| OVERGENERALIZED_PROSE                     | 4   |
| CORPUS_POLICY                             | 3   |

`UNKNOWN_REVIEW_REQUIRED` is a state a review passes through and the validator
fails on it, because leaving a family undecided and shipping is the silent
remainder a classification pass exists to prevent, differently spelled.

**Fifteen of the 36 surviving families are one artefact rather than shared
prose.** A registered standing phrase sits between two short shared clauses;
the detector strips the registered text; the halves become adjacent, and a
nine-word opener plus an eight-word continuation measures as a twenty-five-word
run. That property is **computed** from the marker the stripper leaves, so a
record calling a weld copied prose, or a genuinely contiguous run a weld,
disagrees with something measurable and fails.

## A cross-wave correction

Wave 42 registered lemon/lime as `LEGITIMATE_STANDARD_LANGUAGE` at 34 words,
reasoning that the caveat appeared in 44 of 160 articles — "short of the share
required to register it as standing language, so it stays visible to the
metric". Measured as a family it was in 123 of 257, in 90 wordings, which made
a better answer available: it is not per-crop text at all. The pair is now 20
words and recorded as **reduced, not resolved**, because 20 words is still
above the flagging floor and claiming otherwise would be the flag-without-a-
change the validator exists to catch.

## Adversarial injections

12 attempted: **11 caught as intended · 1 invalid by design · 0 invariant
holes.**

| #   | Fixture                                                    | Result                        |
| --- | ---------------------------------------------------------- | ----------------------------- |
| 1   | a paragraph copied between two unrelated crops             | CAUGHT_AS_INTENDED            |
| 2   | a copied paragraph hidden in globally dissimilar pages     | CAUGHT_AS_INTENDED            |
| 3   | shared policy falsely classified as copied debt            | CAUGHT_AS_INTENDED            |
| 4   | copied crop-specific text falsely registered as policy     | CAUGHT_AS_INTENDED            |
| 5   | a resolved family whose shared run did not shrink          | CAUGHT_AS_INTENDED            |
| 6   | a policy phrase below the corpus share it requires         | CAUGHT_AS_INTENDED            |
| 7   | a paraphrase keeping the same unsupported generalisation   | CAUGHT_AS_INTENDED            |
| 8   | a stale statistical caveat restated after centralisation   | CAUGHT_AS_INTENDED            |
| 9   | numeric prose introduced during a rewrite                  | CAUGHT_AS_INTENDED            |
| 10  | a source citation removed from a rewritten statement       | CAUGHT_AS_INTENDED            |
| 11  | a family across five pages the pairwise view under-reports | CAUGHT_AS_INTENDED            |
| 12  | copied prose added outside the published corpus            | INVALID_INJECTION (by design) |

Injection 2 is the Wave 41 lesson re-proved: rice and coffee share almost
nothing globally, a Jaccard filter would never pair them, and the family
detector found a 52-word run because it never filters before it measures.

Injection 11 is the reason the family map exists. A 42-word paragraph put into
five unrelated crops is ten pairs of no individual significance and one family
the detector names in full.

**One validator quality fix, not a hole.** Injection 5 was caught, but reported
through the coverage rule rather than the resolution rule that owns it: a
record carrying `resolvedFrom` had been excluded from the coverage set, so a
still-standing family it named surfaced as "no record classifies it" — true in
a narrow sense and pointing at the wrong thing. Coverage now accepts any record
naming the text, and the resolution rule speaks for itself.

## What remains, and why

Thirty-six families above twenty words. Fifteen are policy welds. Of the rest,
most are two crops that genuinely share a fact and say so: cherry and plum both
need winter chilling, blackberry and raspberry share floricane management,
clove and nutmeg are both smallholder tree spices of the Moluccas. The brief is
explicit that two crops sharing a fact may say the same thing, and rewriting
one of them to differ would be distorting a fact to move a number.

Four are recorded as `OVERGENERALIZED_PROSE` and left standing at 20–21 words —
sentences about well-drained loams and timely weed management that would fit
any crop in the corpus. They are recorded rather than rewritten because the
brief is equally explicit that a wave should not be spent on benign twenty-word
snippets, and a record is what lets the next wave find them.

## Counts

|                                  | Wave 44        | Wave 45          |
| -------------------------------- | -------------- | ---------------- |
| Crop articles                    | 257            | 257              |
| Articles edited                  | —              | 136              |
| Sentences removed from prose     | —              | 156              |
| Families ≥20w · ≥25w · ≥30w      | 75 · 31 · 15   | 36 · 4 · 0       |
| Pairs ≥20w · ≥25w · ≥30w         | 277 · 102 · 39 | 42 · 4 · 0       |
| Longest identical run            | 34w            | 20w              |
| Validators in `npm run validate` | 38             | 39               |
| Tests · files                    | 1,161 · 68     | 1,161 · 68       |
| Built pages                      | 1,831          | 1,831            |
| Search regression cases          | 588            | 588 (100% top-1) |
