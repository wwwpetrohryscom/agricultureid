# Synonym policy (Phase 3D)

The synonym registry (`data/search/synonyms.ts`) helps queries find the right
entity without asserting unsafe scientific equivalence.

## Kinds

| Kind         | Direction           | Meaning                                                                                    |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------ |
| `exact`      | bidirectional       | Interchangeable common names (maize ↔ corn, chickpea ↔ garbanzo).                          |
| `spelling`   | bidirectional       | Spelling variants (fertilizer ↔ fertiliser, sulfur ↔ sulphur).                             |
| `regional`   | bidirectional       | Regional names for the same thing (aubergine ↔ eggplant, courgette ↔ zucchini).            |
| `broader`    | variant → canonical | The variant is broader than the entry (bovine → cattle; SWD → fruit-flies, with a caveat). |
| `narrower`   | variant → canonical | The variant is a narrower case (pinto bean → common-bean).                                 |
| `deprecated` | variant → canonical | An outdated term mapping to the current one.                                               |

Only `exact`/`spelling`/`regional` expand **both** ways. `broader`/`narrower`/
`deprecated` are one-way hints so a broad query reaches a specific entry without
implying the two terms are identical.

## Safety rules (enforced by the validator)

- **No self-mapping** — a term cannot be its own synonym.
- **No ambiguous exact equivalence** — a single variant cannot be an `exact`
  synonym of two different canonicals (that would assert a false equivalence).
- Scientifically distinct terms are not made `exact`. For example, canola is a
  specific low-erucic type of rapeseed (`regional`, with a note), and spotted-wing
  drosophila (Drosophilidae) is mapped to the tephritid `fruit-flies` entry only
  as `broader`, carrying the same caveat recorded in the Phase 2.1 unresolved-
  issues registry.

## Transparency

When a synonym or a typo correction changes what matched, the surface term is
shown to the user as a "related term" — the query is never silently rewritten.
