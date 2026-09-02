# Crop encyclopedia — expansion baseline

Recorded 2026-09-02 from merged `main` at `25e9036`, before any crop was added.
Every figure was read from the repository or from a real build, not from an
earlier report.

## Corpus as it stands

|                          |                                       |
| ------------------------ | ------------------------------------- |
| Crops                    | **153**                               |
| Cultivars                | 77                                    |
| Commodities              | 81                                    |
| Commodity products       | 59                                    |
| Content items, all types | 1,068 across 27 types                 |
| Routes                   | 1,571 · of which `/crops/*` = **153** |
| Search documents         | 1,558 · of which crop = 153           |
| Search index             | 1.2 MB                                |
| Tests                    | 946 across 55 files                   |
| CI gates                 | 30                                    |
| Cold local build         | 29.6 s · `.next` 1.2 GB               |

## How a crop is currently modelled

`CropContent extends BaseContent` and adds only three fields of its own:
`botanicalFamily?`, `lifecycle?`, and three typed relation arrays
(`commonDiseases`, `commonPests`, `suitableSoils`). Identity comes from
`BaseContent`: `title`, `scientificName?`, `alternativeNames?`, `category`.

Each crop is a hand-authored TypeScript module under `content/crops/`, between
7.5 kB and 16 kB, median **11.7 kB** — full prose with `introduction`,
`keyFacts`, `sections`, `sourceReferences`, `claims` and `limitations`. Wheat,
for example, carries eleven authored sections from _Overview_ to _Uses_.

**This is the single most important fact for planning this program.** A crop in
AgricultureID is not a row; it is an authored encyclopedia article. Adding two
hundred of them at this depth is two hundred articles' worth of sourced writing,
and generating them from a template is precisely what this program forbids.

## What the model does not have

There is **no structured botanical identity**. `scientificName` is a free-text
display string, and the corpus proves it:

```
triticale    ×Triticosecale spp. (intergeneric hybrid of wheat, Triticum, and rye, Secale)
blackberry   Rubus fruticosus aggregate (cultivated blackberries are largely complex Rubus hybrids)
mint         Mentha × piperita (peppermint) and Mentha spicata (spearmint), among other …
```

Those are honest sentences and useless data. Nothing in the corpus can answer
"what genus is this", "is this name accepted or a synonym", "what rank is it",
or "which taxonomic authority says so", because no field holds any of it.

There is also no controlled vocabulary for:

- **crop group** — `category` is free text and has drifted to **32 values for
  153 crops**, with near-duplicates: _Tree fruit crop_ / _Fruit and tree crop_ /
  _Tropical fruit crop_ / _Fruit crop_ / _Vine fruit crop_; _Culinary herb crop_
  / _Culinary herb and spice crop_ / _Culinary herb and vegetable crop_ /
  _Aromatic and culinary herb crop_.
- **botanical family** — free text with parenthetical glosses, so the same
  family appears under several strings: _Amaranthaceae (amaranths)_ and
  _Amaranthaceae (formerly Chenopodiaceae)_; _Anacardiaceae (cashew family)_ and
  _Anacardiaceae (sumac/cashew family)_. **61 raw strings collapse to 52 actual
  families.**
- **harvested part** — absent entirely.
- **agricultural use** — absent entirely.

One thing the corpus does get right: **zero scientific-name duplicates across
the 153 crops.**

## Cross-layer integration as it stands

| Layer                                                    | Crops reached                                          |
| -------------------------------------------------------- | ------------------------------------------------------ |
| Cultivars (`parentCrop`, resolves 77/77)                 | 15                                                     |
| Extension resources (`cropRefs`, resolves 45/45)         | 45                                                     |
| Crop calendars                                           | 6                                                      |
| Farm economics                                           | 9                                                      |
| Market series where a crop slug is also a commodity slug | 2                                                      |
| Input authorisations                                     | 0 (authorisations reference input products, not crops) |

The integration mechanisms exist and resolve correctly; coverage is simply
thin. A new crop entering the corpus picks up whichever of these already
reference it, with no hand-maintained switch.

## Available taxonomic authorities, tested

| Source                             | Status     | Use                                                                    |
| ---------------------------------- | ---------- | ---------------------------------------------------------------------- |
| Kew POWO direct API                | **403**    | not usable directly                                                    |
| POWO via its GBIF-hosted checklist | 200        | accepted/synonym status, accepted name, authority, family, rank        |
| World Flora Online matching REST   | 200        | accepted placement, family, rank; a `$` in `placement` marks a synonym |
| GBIF backbone species match        | 200        | third opinion; aggregates the above                                    |
| USDA GRIN taxonomy                 | 200 (HTML) | agricultural/germplasm perspective for hard cases                      |

Two independent authorities are therefore reachable, plus a cross-check.

**They already disagree on cases this program must handle**, which is the point
of consulting both:

- `Triticum durum` Desf. — POWO treats it as a **synonym** of _Triticum
  turgidum_ subsp. _durum_ (Desf.) Husn. This is the same equivalence Wave 18
  documented from the opposite direction, in variety registers.
- `Citrus ×paradisi` Macfad. (grapefruit) — POWO treats it as a **synonym** of
  _Citrus × aurantium_ f. _aurantium_, sinking most cultivated citrus into one
  hybrid complex. Agricultural and germplasm systems generally do not.

A search API also ranks partial matches ahead of the species itself
(`Manihot esculenta var. rufescens` before _Manihot esculenta_), so matching
must be on the exact canonical name with the authority stripped — never on the
first result.

## What this baseline implies for the program

1. **Structured identity first.** The `CropIdentity` layer is the highest-value
   deliverable and applies to the 153 crops that already exist, not only to new
   ones. It is what makes the corpus answerable.
2. **Data-only is the default for new taxa.** The brief's own
   full-profile-versus-directory-only discipline is the only honest way to widen
   the corpus without manufacturing 200 templated articles.
3. **Vocabulary normalisation is remedial work already owed.** 32 categories
   and 61 family strings for 153 crops is drift that a validator should have
   been preventing.
4. **Where the authorities disagree, the disagreement is the finding**, recorded
   with both names and an explicit canonical policy — never resolved silently.
