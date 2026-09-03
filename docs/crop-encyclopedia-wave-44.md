# Wave 44 — FAO Crop Calendar orphan research and crop expansion

Branch `feat/fao-calendar-orphan-crops-wave-44`, on top of Wave 43 (`b1f6238`).

## The queue, recomputed

The brief reported 104 unresolved FAO names. Recomputing the queue from the
source file against the live corpus — rather than reading Wave 42's list —
gave a different number and a different problem.

|                                           |                                           |
| ----------------------------------------- | ----------------------------------------- |
| FAO crop labels in the source file        | **219** (the snapshot recorded 210)       |
| Source rows                               | **13,394** (the snapshot recorded 12,808) |
| Resolved by the matcher's own contract    | 116                                       |
| Refused as ambiguous by the name register | 3                                         |
| **Orphan research queue**                 | **100**                                   |

## What recomputing found

**Every one of Jordan's 586 rows had been lost.** They are the only rows in the
file with an embedded newline inside `aez_name` ("Middle Badia\n"), and Wave
42's read of the CSV dropped all of them. Nine crop names appear in those rows
and nowhere else — Apple, Apricot, Cherry (all varieties), Clover, Fig,
Grapefruit, Guava, Pear, Pomegranate — and this corpus publishes every one of
them. They were neither matched nor refused: they were never seen.

The completeness check could not catch it, because `faoCropNames` was written
from the same enumeration it was meant to validate. It agreed with itself at
210 while the file held 219.

Re-read with a parser that handles quoted newlines. The result was checked
against the 5,381 entries already published, which it **reproduces field for
field** before adding anything. The file's SHA-256 is unchanged from Wave 42's
retrieval, so this is a parsing correction and not a new vintage.

**Calendars: 5,447 → 7,924 entries, 106 → 148 crops.**

## All 100 labels answered — unclassified = 0

| Outcome                 | n   |
| ----------------------- | --- |
| MAP_TO_EXISTING_CROP    | 35  |
| TAXONOMY_UNCERTAIN      | 18  |
| AGRICULTURAL_FORM       | 10  |
| PROMOTE_FULL_PROFILE    | 9   |
| MAP_TO_EXISTING_CONCEPT | 8   |
| AMBIGUOUS               | 7   |
| MULTI_TAXON_CONCEPT     | 6   |
| ADD_DATA_ONLY_IDENTITY  | 4   |
| DEFER_RESEARCH          | 2   |
| OUT_OF_SCOPE            | 1   |

Two thirds of the queue was not hard. Thirty-five labels are misspellings
("Tarmeric", "Jackfrruit", "Tobbaco"), French names ("Cotonnier", "Tabac", "Mil
africain"), or FAO's own inverted forms ("Cabbage, common", "Wheat, durum",
"Millet, foxtail") of crops this corpus already publishes. None of them is a
name the crop carries, so none could honestly become an alternative name, and
none is reachable without fuzzy matching. They resolve through an explicit
per-label record instead.

**The label is not the plant**, and three cases prove it:

- **"Coleus dazo"** is a synonym of _Coleus esculentus_, the Livingstone potato
  — **not** of _Coleus rotundifolius_, the Hausa potato this corpus publishes.
  Mapping it to the crop the corpus happens to hold would have attached a
  Chadian calendar to the wrong tuber.
- **"Hanfez"** is not a crop. Hanfets is an Eritrean and Tigrayan practice of
  sowing barley and wheat together in one field, on about a fifth of the
  country's barley area. Mapping it to either cereal would attribute a mixed
  stand's calendar to a sole crop.
- **"Bitter eggplant"** names two published crops in one country. Senegal grows
  both African eggplants, both are bitter, and a bitterness adjective does not
  choose between them.

## Two new match routes and a third granularity

`explicit-name-mapping` and `explicit-form-mapping` are exact and per-label,
each backed by a research record naming the label, the candidate and the
destination. No fuzzy matching, no edit distance, no embeddings.

`FORM_LEVEL` joins `EXACT_ENTITY` and `CONCEPT_LEVEL`. Wave 42 had only the two
because a match was either the crop or a group of crops; ten of this wave's
labels are neither. The dataset's **largest unresolved label, at 292 rows, was
"Bean, broad green"** — broad beans harvested green, which is not the faba bean
crop and is not a group of crops. Calendar pages now say so, and the post-build
audit fails both when a page omits the notice and when it carries one it should
not.

A concept-page destination may be recorded as exact in one narrow case, and the
rule that allows it was made stricter rather than looser: `wheat` is both the
wheat concept and _Triticum aestivum_, so "Wheat" is group-level on it and
"Wheat, bread" is not. The exception requires a research record that reached
`MAP_TO_EXISTING_CROP`, naming exactly one candidate, whose binomial IS the
page's accepted name. Two labels qualify.

## Nine crops published, no identity asserted

jute mallow · bottle gourd · malabar spinach · purslane · welsh onion · chives ·
anise · caraway · arrowroot. **248 → 257 articles.**

Every one is a taxon verified in Waves 27–30 and held without an article since.
The validator enforces that: a promotion whose identity was last verified on or
after the research date fails, so a wave cannot promote taxonomy it asserted
itself.

**No new identity was added, and that is a finding about a source, not about the
crops.** World Flora Online's matching service returned an empty reply after
roughly two minutes on every attempt across the whole wave; `www` answered and
`list` did not. The identity rules require two authorities. Eighteen labels
therefore carry a named candidate and a Plants of the World Online reading and
wait for the second — including Enset, the Ethiopian staple, and Roselle, whose
POWO accepted name turns out to be _Sabdariffa gossypiifolia_, the same generic
move POWO applies to the kenaf this corpus already holds.

One of those eighteen shows why the rule matters: POWO accepts _Solanum
scabrum_ Mill. and holds **six further _Solanum scabrum_ combinations under
other authors, two of which resolve to _Solanum aethiopicum_**, a crop this
corpus publishes.

## Search

Publishing nine crops that share a word with an older page put jute, spinach,
onion, chives, anise and star anise at risk. All guarded, all held.

One regression, caused by this wave and fixed in it: **"wheat kansas" stopped
reaching the wheat calendar.** Ingesting the whole file gave wheat 127
agro-ecological zone labels like "Middle Badia (JOR008)", which pushed every US
state past the forty-name cap on the calendar search document. Fixed by sorting
named administrative jurisdictions ahead of source zone codes — nobody searches
for a zone code — rather than by raising the cap.

**570 → 588 regression cases, 100.0% top-1, 0 false positives.**

## Adversarial injections

14 attempted: **12 caught as intended · 1 caught by a different gate · 1 invalid
by design · 3 holes found and closed.**

| #   | Fixture                                                               | Result                                       |
| --- | --------------------------------------------------------------------- | -------------------------------------------- |
| 1   | an orphan matched to the nearest crop rather than its own             | CAUGHT_AS_INTENDED                           |
| 2   | an ambiguous FAO label mapped to one of its children                  | CAUGHT_AS_INTENDED                           |
| 3   | a calendar name accepted as a species without taxonomy                | CAUGHT_AS_INTENDED                           |
| 4   | FAO presence used to claim global importance                          | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED |
| 5   | calendar geography used as a native range                             | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED |
| 6   | a name with unresolved homonyms promoted anyway                       | CAUGHT_AS_INTENDED                           |
| 7   | an alias that collides with an existing concept                       | CAUGHT_BY_WRONG_GATE                         |
| 8   | a data-only destination that has a route                              | CAUGHT_AS_INTENDED                           |
| 9   | a crop article resting on calendar evidence alone                     | CAUGHT_AS_INTENDED                           |
| 10  | an FAO item mapped to a child where the concept is required           | CAUGHT_AS_INTENDED                           |
| 11  | a stale source vintage overwritten by the fetch date                  | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED |
| 12  | an ambiguous refusal with no supporting crosswalk                     | CAUGHT_AS_INTENDED                           |
| 13  | the research queue leaves an orphan unclassified                      | CAUGHT_AS_INTENDED                           |
| 14  | a fixture that mutates the orphan list but not the evaluated universe | INVALID_INJECTION (by design)                |

### The three holes

**The prose gates could not see the summary.** Injection 4 put "one of the
world's most important leaf vegetables, grown at scale on every continent" into
a crop's `summary` and every prose rule passed — the corpus-coverage rule, the
quantitative-claim rule, the standing-language measurement. `articleText()` is
introduction and sections, which is right for depth and similarity and wrong
for integrity: the summary is the field the search index weights highest and
the first sentence a reader sees. A new `fullProseText()` adds summary,
geographic scope, climate context and limitations, and the integrity rules moved
onto it. **Widening it immediately caught ten pre-existing violations**,
including nine of this wave's own limitation lines asserting corpus coverage.

Closing the hole also needed a second fix: the phrase list was compared against
a normalisation that keeps punctuation, so "one of the world's most important"
never matched a list entry written without the apostrophe. The first version of
the rule passed against an article containing the claim verbatim — the same
shape of defect as Wave 35's regex that could not see a percent sign.

**A calendar could be cited for anything.** Injection 5 cited the FAO crop
calendar for "Native range and centre of domestication" and nothing objected.
The source establishes that a national authority described a season in a zone;
it establishes nothing about importance, area, range, domestication or
suitability. The rule now checks what the source is cited FOR. Fixing the
fixture also corrected the nine new articles, which had attributed calendar
evidence to `fao` rather than to `fao-crop-calendar`.

**An entry could carry the retrieval date.** Injection 11 replaced one entry's
source vintage with the day the file was fetched. The corpus's design is that
each entry carries the `lastUpdated` of the FAO rows it came from, because zones
are revised independently and the dates here span 2020-06-09 to 2025-08-19. The
new rule checks each entry against the census's recorded span for its own label,
so a date the source's rows do not contain cannot be stamped on an entry derived
from them.

### The wrong gate

Injection 7 gave the chives page "Mustard" as an alternative name. It was caught
by the integrity validator — a crop may not claim another published crop's title
— rather than by the concepts validator it was aimed at. The invariant is owned
by the gate that fired; recorded rather than counted as a pass.

## No false completeness claim

This corpus does **not** cover all FAO crops. What it covers, measured:

- 219 labels researched, **0 unclassified**
- 178 matched — 103 by title, 42 by explicit name mapping, 18 by alias, 10 by
  form mapping, 5 by ambiguous-name concept mapping
- 41 refused, every one with a recorded outcome
- 9 articles added, 0 identities added
- **38 labels still have no page destination**: 18 need a second taxonomic
  authority, 13 cover more than one plant, 4 are taxa held without an article,
  2 could not be attributed to a plant, 1 is not a crop

## Counts

|                                  | Wave 43     | Wave 44     |
| -------------------------------- | ----------- | ----------- |
| Crop articles                    | 248         | 257         |
| Crop identities · data-only      | 351 · 103   | 351 · 94    |
| FAO labels accounted for         | 210         | 219         |
| Calendar entries · crops         | 5,447 · 106 | 7,924 · 148 |
| Validators in `npm run validate` | 37          | 38          |
| Tests · files                    | 1,161 · 68  | 1,161 · 68  |
| Built pages                      | 1,780       | 1,831       |
| Search regression cases          | 570         | 588         |
