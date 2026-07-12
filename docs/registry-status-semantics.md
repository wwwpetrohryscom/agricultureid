# Registry & status semantics

Cultivar and breed status is modeled **precisely and separately** from
commercial availability, recommendation, and patents. Conflating these is a
common and misleading error; AgricultureID does not.

## `RegistrationStatus` tokens

| Token          | Meaning                                                                                 | Does **not** imply                              |
| -------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `listed`       | Admitted to an official catalogue for marketing (e.g. EU Common Catalogue).             | Availability, quality, or recommendation.       |
| `registered`   | Registered in a national/official variety or breed register.                            | Currently sold, or approved everywhere.         |
| `protected`    | Under plant-variety protection / plant breeders' rights (e.g. UPOV member grant, CPVO). | A patent; universal protection; availability.   |
| `expired`      | A former protection/registration that has lapsed.                                       | That the variety is unavailable or unused.      |
| `withdrawn`    | Deliberately withdrawn from a register/catalogue.                                       | That it was ever unsafe.                        |
| `historical`   | Of historical importance; not a current commercial listing.                             | Current availability.                           |
| `conservation` | Maintained primarily for conservation/germplasm.                                        | Commercial distribution.                        |
| `unknown`      | Status not reliably established.                                                        | Anything — this is an honest "not established". |

Key non-equivalences enforced editorially and (where checkable) by the validator:

- **Registration ≠ current commercial availability.**
- **Variety protection ≠ patent status.**
- **Official listing ≠ universal cultivation approval.**
- **Inclusion in a registry ≠ recommendation.**

Every status carries **jurisdiction** and **date/version** (`registrationJurisdiction`,
`registrationAsOf`, or per-`RegistryReference` `jurisdiction`/`asOf`), because a
variety can be protected in one jurisdiction and unprotected in another, and
protection lapses over time.

## `ConservationStatus` (breeds)

FAO DAD-IS–aligned: `not-at-risk`, `vulnerable`, `endangered`,
`endangered-maintained`, `critical`, `critical-maintained`, `extinct`,
`unknown`. Always source- and date-specific.

## `RegistryReference`

A structured pointer to an authoritative registry record: `registry` (name),
optional `sourceId` (must resolve to the source registry), optional `recordId`
and `url` (**never invented** — omitted when not reliably known), `jurisdiction`,
per-reference `status`, `asOf`, and a `note`. A registration/listing/protection
status must be backed by at least one `RegistryReference` or a provenanced
registration claim, or the validator fails (`subentity-status-unsourced`).

## No legal advice

These records describe **documented status**, not legal entitlements. They are
not legal advice on whether a variety may be propagated, marketed, imported, or
protected in any given jurisdiction.
