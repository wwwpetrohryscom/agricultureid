# Processing safety boundaries (Phase 5C)

## The boundary

AgricultureID describes **what a process does and why**. It never describes **how
to run one**. Every processing page carries this, and a test enforces it:

> This is an educational reference description of what the process does and why,
> not an operating instruction. Industrial processing requires qualified
> engineering, commissioned safety systems, and compliance with local regulation
> and the facility's own procedures.

## Never published

- solvent names as operating guidance, handling procedures, or conditions;
- process temperatures, pressures, or concentrations presented as settings;
- fumigant or chemical-cleaning instructions;
- lockout/tagout or confined-space entry procedures;
- machinery operating steps;
- **food-safety kill-step guarantees** of any kind.

`tests/phase5c.test.ts` requires every method to carry an
operating-instruction disclaimer, and `npm run audit` verifies that no
processing page carries an unsourced quantitative claim.

## Always named

Hazards are **named plainly** — refusing to describe procedures is not a reason
to leave a reader unaware that a process can kill them:

| Hazard                             | Where                                                           |
| ---------------------------------- | --------------------------------------------------------------- |
| Dust explosion                     | milling, dehydration, nut shelling, ginning, all grain handling |
| Flammable solvent vapour           | solvent extraction, desolventising                              |
| Confined space / oxygen deficiency | malting vessels, silo bags, CA rooms, fermentation              |
| Fermentation CO₂                   | malting, cocoa fermentation, vegetable fermentation             |
| Pressure and steam systems         | evaporation, crystallisation, canning                           |
| Hot surfaces                       | roasting, drying, firing, toasting                              |
| Rotating machinery / nip points    | rolls, presses, decorticators                                   |
| Crystalline silica                 | rice husk handling                                              |
| Ammonia refrigerant                | refrigerated storage                                            |

Each directs the reader to qualified engineering, the product label, national
regulation, and the facility's own procedures.

## Food safety is a separate regime

Processing pages do not make food-safety determinations:

- **Canning** was omitted entirely rather than published without a scheduled
  process: thermal processing of low-acid foods is regulated and its schedules
  are set by a **qualified process authority**. No time, no temperature, no
  guarantee.
- **Drying is not sterilisation.** Both drying entries say so explicitly.
- **Washing/sanitising** is framed as a **water**-treatment control that stops
  cross-contamination in the wash tank — _not_ a kill step on the produce. This
  distinction is routinely got wrong and matters.
- **Mycotoxin carryover** is stated where relevant with limits deferred to the
  applicable food authority.
