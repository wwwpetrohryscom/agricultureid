# Unresolved-issues registry

The authoritative, machine-readable registry lives in
[`data/unresolved-issues.ts`](../data/unresolved-issues.ts) (`UNRESOLVED_ISSUES`).
It is **validated and tested** — this document is a human-readable pointer, not
the source of truth.

Each entry records: affected page/entity, current public wording, why it remains
unresolved, severity, whether the current public claim is safe, the required
source/content work, status, and the mitigation applied.

## Enforced rule

The content validator (`content:validate`) fails if any issue whose current
public claim is **not safe** (`publicClaimSafe: false`) is still `status: 'open'`.
An unsafe public claim must first be mitigated — by narrowing the wording, adding
an uncertainty note, removing the disputed relationship, or suppressing the
claim — before it can ship.

## Current issues (all mitigated; all public claims currently safe)

| id                                   | severity | public claim safe | mitigation                                                                                                                                                                                    |
| ------------------------------------ | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueberry-fly-pest-taxonomy`        | minor    | yes               | Added an uncertainty note distinguishing Tephritidae (blueberry maggot) from Drosophilidae (spotted-wing drosophila); the defensible tephritid relationship is retained.                      |
| `cassava-bacterial-disease-pathogen` | major    | yes               | Removed the cassava↔bacterial-wilt relationship both ways so cassava disease is not attributed to _Ralstonia_; the page prose still correctly names cassava bacterial blight (_Xanthomonas_). |
| `honey-bee-worker-sterility`         | minor    | yes               | Narrowed "sterile female bees" → "functionally sterile (non-reproductive) female bees".                                                                                                       |

Resolving these fully requires future content work (a spotted-wing-drosophila
entry; a dedicated cassava-bacterial-blight entry; optionally deeper honey-bee
reproductive biology), tracked in the registry's `requiredWork` field.
