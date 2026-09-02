# Crop taxonomy complexity audit

Wave 33, 2026-09-02. An audit of every place where the corpus's crop taxonomy
is harder than "one page, one plant", and of what the previous waves recorded
about those places.

Waves 27–30 verified 348 botanical identities against two authorities and were
careful about it. Where a name did not resolve to a single species they said so
— in an `agreementNote` on the identity record, in prose. This audit began by
reading those notes and checking each one against the corpus. Three did not
survive, and the way they failed is the finding worth keeping: **the errors were
not in the sentences. They were between the sentences and the data, where no
amount of re-reading would have found them.**

## 1. Pages that are not one plant

Sixteen published crop pages have an identity whose rank is not a species.
Eleven of them cover several taxa and now declare a scope
(`data/crop-identity/concepts.ts`); five are single taxa that happen to be
hybrids — lemon, lime, strawberry, plantain, mint — and correctly declare
nothing.

| Kind                | Pages                                                     |
| ------------------- | --------------------------------------------------------- |
| genus concept       | coffee, cotton, lupin, pumpkin, macadamia, mulberry, jute |
| species complex     | yam, blackberry                                           |
| clone-group concept | banana                                                    |
| nothogenus concept  | triticale                                                 |

The distinction that matters is not how many taxa exist under a name. It is how
many the _page_ claims to cover. _Citrus_ × _limon_ is a hybrid and a single
accepted taxon; "cotton" is one word covering four species.

## 2. The three claims that were wrong

### macadamia — an overclaim

The note read: _"Commercial macadamia is grown from two species, Macadamia
integrifolia and M. tetraphylla, and from hybrids between them. Both species
are verified separately."_

The corpus holds **neither**. There is no `Macadamia integrifolia` identity and
no `M. tetraphylla` identity — only the genus concept. The sentence asserted a
coverage that does not exist, on a published page, and nothing could catch it
because nothing was comparing the sentence to the data.

Both are now recorded as `heldAs: 'not-held'`, which is checked in _both_
directions: the validator fails if a taxon claimed as not-held turns out to be
present, exactly as it fails for the reverse.

### pumpkin — a misdescription and an omission

The note read: _"grown from at least four cultivated Cucurbita species — C.
pepo, C. maxima, C. moschata and C. argyrosperma … All four are held separately
with verified identities."_

_Cucurbita pepo_ is **not** held as a species. The corpus holds
`Cucurbita pepo` Zucchini Group — a cultivar group, which is a cultivated form
of the species and not the species itself. Anyone following that sentence to
look for field pumpkins would find courgettes.

The note also omitted _C. ficifolia_, which the corpus does hold. Both the
misdescription and the omission are now recorded.

### yam — a name the corpus does not use

The note named _"D. rotundata"_ as a constituent. Both authorities place white
yam as an infraspecific taxon under yellow yam, and the corpus accordingly holds
it as _Dioscorea cayenensis_ subsp. _rotundata_.

This one is not pedantry. It is the same fact that made Wave 32 refuse to
promote white yam: because the authorities place it _under_ yellow yam,
promoting white yam alone would leave its own parent species inside the concept
it was promoted out of. A prose note calling it _D. rotundata_ obscured exactly
the thing that made the decision hard.

## 3. Disagreement is not one thing

Eleven identities record `agreement` other than `agreed`. Flattened into one
word, that tells a reader to distrust all eleven equally. Classified
(`data/crop-identity/taxonomy-disagreements.ts`), they are not alike at all:

| Kind        | n   | What it means                                                                      |
| ----------- | --- | ---------------------------------------------------------------------------------- |
| coverage    | 6   | One authority returned no placement. A gap in a tool, not a dispute about a plant. |
| placement   | 2   | The authorities accept different genera. A live dispute.                           |
| rank        | 1   | Same plant, different rank.                                                        |
| sinking     | 1   | One authority treats the taxon as a synonym of another.                            |
| orthography | 1   | The same epithet, spelled differently.                                             |

Six of the eleven are coverage gaps in World Flora Online's name matcher — most
often for hybrids and nothogenera, which it does not resolve. Reporting those as
"the authorities disagree" overstates the uncertainty by a wide margin.

The one that is genuinely uncomfortable is `mustard`: Plants of the World Online
places brown mustard in the nothogenus × _Brassarda_ following a Brassiceae
recircumscription that the agricultural literature, the seed trade and every
variety register this corpus links to have not adopted. The corpus publishes
_Brassica juncea_ and records why.

And `white-yam` is worth naming as the opposite case: the two authorities agree
completely on the plant and on its rank, and spell the epithet differently
(_cayennensis_ against _cayenensis_). That was recorded as a disagreement.
It is a typo-level difference and is now classified as one.

## 4. Homonyms

A binomial can have been used by more than one author for more than one plant,
and both authorities return every sense as an exact string match. The
verification harness in Waves 27–30 hit this repeatedly:

- `Sorghum bicolor` Kuntze resolves to _Hyparrhenia dichroa_, a different grass.
- `Solanum tuberosum` Poepp. ex Walp. resolves to _Solanum maglia_.
- `Solanum tuberosum` Bertero ex Walp. resolves to _Solanum etuberosum_, which
  does not bear tubers at all.

Two identities in the corpus — sorghum and potato — rest on binomials with
published homonyms. Both now carry a pinned resolution naming the author whose
plant is meant (`data/crop-identity/homonyms.ts`), and the validator fails
closed: an identity whose accepted name is on the ambiguous list without a
resolution behind it is an error.

**Search cannot be made to protect against this.** A reader who types
"Sorghum bicolor Kuntze" will land on the sorghum page whatever the crosswalk
says, because the tokens match. The crosswalk therefore resolves those names to
nothing — sending the reader onward would confirm the error they arrived with —
and the correction is made where they actually arrive, in a note on the page.

## 5. The 83 refusals, reconsidered

Waves 27–30 examined 432 candidates and refused 83. Every refusal was correct.
Re-examined here, none needed reversing, but they were doing no work: they sat
in a research ledger as JSON.

| Refusal                                | n   | Now                                         |
| -------------------------------------- | --- | ------------------------------------------- |
| synonym of an existing crop            | 28  | resolves to the crop                        |
| agricultural form of an existing taxon | 25  | resolves to the form's page                 |
| crop group, not a single taxon         | 10  | resolves to the concept page                |
| cultivar, not a crop                   | 8   | resolves to the crop                        |
| market class, not a crop               | 5   | resolves to the crop                        |
| taxonomy uncertain                     | 5   | 3 resolve nowhere by design; 2 reclassified |
| commodity, not a crop                  | 2   | resolves to the crop                        |

**Twenty-three of the 83 had no destination recorded at all.** The ledger
refused the name and left `slug: null` — "canola", "nectarine", "cherry tomato",
"Cavendish banana", "forage maize" and eighteen others were correctly rejected
as crop identities and then pointed nowhere. Those destinations were written in
this wave, and the 79 that resolve are now attached at name weight to the entity
that answers them.

Two of the five `TAXONOMY_UNCERTAIN` entries were reclassified. _Citrus
latifolia_ and _Cannabis indica_ were filed with the homonyms; neither is one.
They are taxa the authorities have not settled, which is a different thing from
a name two authors used for different plants, and a homonym must never resolve
to a page while an unsettled taxon legitimately may.

## 6. What is deliberately unresolved

Four crosswalk entries resolve to nothing, and each is a decision rather than a
gap:

- The three homonyms above.
- _Cannabis indica_, where treatment as a species separate from _C. sativa_ is
  contested and picking a side would assert more than the authorities do.

`resolvesTo: null` is a supported state precisely so that "we deliberately hold
nothing here" can be said out loud rather than looking like an oversight.

## 7. What this wave did not do

- **No page was split or merged.** White yam remains inside the yam concept for
  the reason given in §2; the case for splitting the _cayenensis_ group as a
  whole is recorded in the concept's `splitCriterion` and is not acted on here.
- **No refusal was reversed.** All 83 were re-examined and all 83 stand.
- **No threshold was changed and no gate weakened.**
- **Macadamia's missing identities were not created.** Verifying two species
  against two authorities is research, and inventing them to make a scope note
  true would be exactly the failure this audit found.
