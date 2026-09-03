# Wave 43 — Concept blockers and parent-scope resolution

Branch `feat/crop-concept-blockers-wave-43`, on top of `2d2f48f`.
Baseline measured in [`crop-encyclopedia-wave-43-46-baseline.md`](./crop-encyclopedia-wave-43-46-baseline.md).

## What the wave was asked to do, and what it found

The brief named two crops blocked on a missing parent concept — mandarin, stopped
in Wave 39, and makrut lime, declined in Wave 40 — and asked for the parent scope
to be resolved before either was published.

Computing the queue rather than reading it gave **six** parent taxa, not two. A
taxon with two or more crop identities under it has a scope those crops share,
and six taxa were in that position with nothing owning the scope:

| Parent taxon         | Owner               | Kind           | Children                                                     |
| -------------------- | ------------------- | -------------- | ------------------------------------------------------------ |
| _Citrus × aurantium_ | `citrus`            | page (concept) | grapefruit, mandarin, orange                                 |
| _Triticum turgidum_  | `wheat`             | page (concept) | durum-wheat, emmer                                           |
| _Brassica oleracea_  | `brassica-oleracea` | record         | 6 published                                                  |
| _Brassica rapa_      | `brassica-rapa`     | record         | chinese-cabbage, pak-choi, turnip + turnip-rape (taxon only) |
| _Beta vulgaris_      | `beta-vulgaris`     | record         | beetroot, sugar-beet, swiss-chard                            |
| _Capsicum annuum_    | `capsicum-annuum`   | record         | chili-pepper, sweet-pepper                                   |

Two got a page and four got a record. The test is whether a reader arrives at the
name: "citrus" is a word people use and the hybrid structure genuinely needs
explaining, so it earned a page. _Beta vulgaris_ earns nobody — the crops under it
are sugar beet, beetroot and chard, and a reader wanting those wants those pages.
A record states the scope without manufacturing a URL for it.

**Published: 5.** Citrus (the concept page the other four needed), mandarin,
makrut lime, turnip, swede. 243 → 248 crop articles.

## The four defects the growth revealed

Each was found by looking rather than by a gate, and each now has one.

### 1. Thirty-seven concept links to pages that do not exist

Sixteen concept scope tables linked every constituent the corpus holds to
`/crops/<slug>`. Holding a taxon and publishing a page about it are different
questions and the component asked only the first, so `/crops/citron`,
`/crops/kumquat`, `/crops/turnip-rape` and thirty-four others were 404s.

`constituentDestination()` in `lib/crops/identity.ts` now derives the destination
— a page where one exists, the verified-taxa register anchored at the taxon's crop
group otherwise — and says which the reader is getting. The concepts validator
resolves the destination through the same function the component renders, so the
check cannot drift from what ships.

### 2. A rendered-link audit that reported 41 broken links and exited 0

`npm run seo:rendered` crawls the real build output, and it had been reporting
these links — plus four dead `/datasets/*` "dataset record" links on
`/agricultural-markets` — through every wave that produced them, in a CI step that
stayed green. It now exits non-zero on a broken internal link or a redirect-only
link. Links to proxied `/journal` URLs and to dynamic noindex routes stay reports,
because neither is broken.

### 3. Three FAO calendar refusals that publication had falsified

FAO's dataset names Citrus, Mandarin and Turnip. All three were recorded
`NO_CORPUS_MATCH` in Wave 42 and all three were true then. Publishing the crops
made them false, and the calendars validator checked a refusal for a reason in the
vocabulary and never for whether the reason still held.

It now recomputes the matcher's own published contract — a title match, or a
single alternative-name match, and nothing else — against the live corpus.
The three names are matched: **5,447 → 5,553 calendar entries, 103 → 106 crops.**

### 4. A group-level calendar that never said it was group-level

`granularity: 'CONCEPT_LEVEL'` marks the thirteen FAO items that measure a whole
crop group; FAO publishes one "Coffee" item and this corpus holds a coffee concept
covering three species. The field was recorded in Wave 42, validated ever since,
and never rendered: the coffee page read exactly like an exact-entity one. The
calendar page now carries the notice, and the post-build audit fails both when a
group-level page lacks it and when an exact-entity page carries it.

## Search

One failing query named, one fixed, one recorded as unfixable here.

- **`citrus × aurantium` returned Mandarin.** Three published crops are cultivar
  groups of that hybrid; the hybrid's name appeared in three children's scientific
  names and nowhere else. Fixed by recording the name against its owner in the
  name crosswalk — a **data** change, not a scoring change. Now returns Citrus
  (161.0) over Mandarin (120.0).
- **`triticum turgidum` still returns Durum Wheat** (120.0, tied with Emmer)
  against Wheat at 117.0. The same crosswalk entry was added and did not fix it:
  citrus wins because the query token "citrus" also matches the owner page's
  _title_, and "triticum turgidum" matches nothing in the title "Wheat".
  Recorded as a known issue. The fix is to weight an explicit crosswalk answer
  above a field match, which is a scoring change and belongs with the
  field-frequency work in Wave 46.
- **`satsuma` returned the orange page.** The crosswalk had sent it there since
  Wave 29 — correctly, then, because mandarin had no page — under a note that said
  "a cultivar group within mandarin" the whole time. Repointed. A new rule fires
  where exactly one published page claims a name as its own alternative name and
  the crosswalk sends it elsewhere; where two or more pages share an alias it stays
  silent, because the crosswalk is the layer that arbitrates. This is not an
  alias-uniqueness rule.

Benchmark: **557 → 570 regression cases, 100.0% top-1, 0 false positives, 0 unsafe
equivalences**; known issues 9 → 10.

## Handed to Wave 44, with evidence

Re-fetching the FAO CSV returned a **byte-identical file** — same SHA-256 as the
recorded snapshot — and it does not say what the snapshot says it says.

- The file holds **13,394 rows and 219 crop names**. `FAO_CALENDAR_SNAPSHOT`
  records 12,808 and 210.
- **All 586 of the missing rows are Jordan's**, and Jordan's are the only rows in
  the file with an embedded newline inside `aez_name` ("Middle Badia\n"). The first
  read of the CSV lost them.
- **Nine crop names appear in Jordan and nowhere else** — Apple, Apricot, Cherry
  (all varieties), Clover, Fig, Grapefruit, Guava, Pear, Pomegranate — and this
  corpus publishes every one of them. They are neither matched nor refused: they
  were never seen. The completeness check passed because `faoCropNames` was written
  from the same enumeration it validates.
- The CSV publishes `'Roselle '` with a trailing space; the corpus recorded
  `'Roselle'`. An undeclared normalisation in a field documented as "exactly as the
  FAO dataset publishes it".

Wave 43 did not fix these: re-reading the dataset is Wave 44's stated work, and
half-closing it would leave a patchwork. Jordan is excluded from this wave's three
new crops too, so "Jordan is absent" stays one true sentence. The exclusion is
declared in `FAO_COUNTRIES_NOT_INGESTED` and gated — an entry naming an excluded
country fails, and so does an excluded country the snapshot does not contain.

## Reconciling a decline with a later publication

Three layers recorded a crop as not published and this wave published it. That
contradiction is real and is not resolved by deleting the decline: Wave 39 stopped
mandarin because no page owned _Citrus × aurantium_, and that stop is what got the
page built. The decline stands; the scope review is where the lifting is stated,
and the publication, expansion and research validators now accept a page for a
declined candidate **only** where a `PROMOTE_CHILD_PROFILE` scope review accounts
for it.

Two counts in the composition audit had gone stale by construction — Wave 40's
`publishedAfter` was compared with the live corpus, which held until Wave 43
published into two of its buckets. The first repair relaxed it to a floor. That was
wrong and was replaced: the record measures what the bucket held at the end of
**that** wave, and that quantity is exactly recomputable forever as the members it
had before plus the ones the wave published into it. Nothing a later wave does
changes either term, so the check stays an equality. The membership check was kept
total in both directions, with later publications enumerated by mechanism rather
than assumed — a future wave publishing some other way fails here until it is
added, which is the point.

Three tests carried a bare `+ 1` for the citrus page. A count that names nothing
cannot be wrong out loud, so each now derives the page from the wave register that
introduced its identity and asserts which page it is.

## What was deliberately not built

- **No species page for the four record-owned parents.** A `taxon-scope-record`
  resolves the semantic question of who owns the scope; it does not follow that the
  answer needs a URL.
- **No scope panel on the children of record-owned parents.** It would repeat
  identical text across six cabbage pages to add little over the genus relation
  block those pages already carry.
- **No search scoring change.** Both search fixes are data.

## Adversarial injections

18 attempted — the brief's 12, plus 6 against rules this wave added.

| #   | Fixture                                                  | Result                                       |
| --- | -------------------------------------------------------- | -------------------------------------------- |
| 1   | publish mandarin without a Citrus owner                  | CAUGHT_AS_INTENDED                           |
| 2   | concept market series counted exact for a child          | CAUGHT_AS_INTENDED (two independent gates)   |
| 3   | Citrus child omitted from the parent's declared scope    | CAUGHT_AS_INTENDED                           |
| 4   | parent says the child has no page after publication      | CAUGHT_AS_INTENDED                           |
| 5   | a _Brassica rapa_ form recorded as a species of its own  | CAUGHT_AS_INTENDED                           |
| 6   | turnip and swede made the same taxon                     | CAUGHT_AS_INTENDED                           |
| 7   | a child under two semantic owners                        | CAUGHT_BY_WRONG_GATE                         |
| 8   | a constituent given a hybrid relationship it cannot have | INVARIANT_HOLE → closed → CAUGHT_AS_INTENDED |
| 9   | an alias sent to the wrong citrus child                  | CAUGHT_AS_INTENDED                           |
| 10  | a taxon-only child recorded as published                 | CAUGHT_AS_INTENDED                           |
| 11  | a group-level calendar counted exact for the crop        | CAUGHT_AS_INTENDED                           |
| 12  | a fixture that mutates something nothing reads           | INVALID_INJECTION (by design)                |
| 13  | the scope table linking a held taxon that has no page    | CAUGHT_AS_INTENDED                           |
| 14  | a refusal that publication has falsified                 | CAUGHT_AS_INTENDED                           |
| 15  | a parent taxon name sent to one of its children          | CAUGHT_AS_INTENDED                           |
| 16  | a shared parent taxon with no crosswalk entry at all     | CAUGHT_AS_INTENDED                           |
| 17  | a group-level calendar page missing its notice           | CAUGHT_AS_INTENDED (post-build)              |
| 18  | a link to a page that does not exist                     | CAUGHT_AS_INTENDED (post-build)              |

**16 caught as intended · 1 caught by a different gate · 1 invalid by design · 1
hole found and closed.**

### The one hole, and the one wrong gate

**Hole (8).** `relationshipKind: 'hybrid'` says "a hybrid between constituents of
the concept" and nothing checked it. The fixture recorded pomelo — _Citrus maxima_,
one of the three ancestral species and the concept's own genome donor — as a hybrid
of the concept it is a parent of, and every gate passed. On a citrus page that is
not bookkeeping: which taxa are the ancestors and which are the crosses is what the
page exists to say. Closed with the botanical convention and only that — an infix
`×` between genus and epithet. Nothogeneric names (`×Triticosecale rimpaui`) are
excluded deliberately: they name a hybrid genus whose species are cultivated species
in their own right, which is how triticale's constituents are correctly recorded.
Anything narrower — which cross, between which parents — the corpus states in the
constituent's role and no rule can verify.

**Wrong gate (7).** Adding turnip to _Brassica oleracea_'s children was caught by
the exact recomputation of the child lists, not by the "no child under two owners"
rule it was aimed at. That is not a near miss: because the child lists are
recomputed by exact equality, **any** edit that puts a child under a second owner
is a mismatch first, so the two-owner rule cannot fire while the recomputation
stands. It is kept as a statement of intent and against a future relaxation, and
recorded here as proven redundant rather than counted as a pass.

## Counts

|                                        | Before      | After       |
| -------------------------------------- | ----------- | ----------- |
| Crop articles                          | 243         | 248         |
| Crop concepts                          | 21          | 22          |
| Taxon-scope ownership records          | —           | 6           |
| Name crosswalk entries                 | 95          | 101         |
| Calendar entries · crops               | 5,447 · 103 | 5,553 · 106 |
| Validators in `npm run validate`       | 36          | 37          |
| Tests · files                          | 1,153 · 67  | 1,161 · 68  |
| Built pages                            | 1,772       | 1,780       |
| Search regression cases · known issues | 557 · 9     | 570 · 10    |
