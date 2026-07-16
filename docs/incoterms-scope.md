# Incoterms® scope (Phase 5D)

## What we are allowed to say, and what we are not

**Incoterms® is a registered trademark of the International Chamber of Commerce,
and the Incoterms® rules are an ICC copyrighted publication.**

That is a legal constraint, and it is also — usefully — an editorial one. It
forces the only description worth writing: what a delivery term **allocates**.

| AgricultureID does                                                                             | AgricultureID does not                                                    |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Describe **what a delivery term allocates** — cost, risk, obligation, between seller and buyer | Reproduce rule text, in whole or paraphrased closely enough to substitute |
| Explain that the allocation point is the thing that matters                                    | State a rule's obligations as a checklist a reader could rely on          |
| Say that the edition governs                                                                   | **Recommend a rule** for any transaction                                  |
| Point to the published text                                                                    | Act as a substitute for it                                                |

## The rule that is easiest to break by being helpful

> **Never recommend a rule.**

This is not a copyright constraint — it is the advice boundary, and it is the one
an author breaks with the best intentions. "For bulk grain, use FOB" reads as
generic education. It is not. Which rule a contract should name depends on who
arranges carriage, where risk should pass, who insures, who clears, what the
letter of credit requires, and what the counterparty will agree to. A reader who
follows a generic recommendation has taken contractual advice from a reference
page, and the page cannot know what it just cost them.

A description of what a term allocates lets a reader understand the contract they
actually have. A recommendation invents a contract they do not.

## Always work from the edition the contract names

Delivery terms are **versioned**. The rules are revised, and a term's letters can
persist across editions while what it allocates shifts underneath them.

The operative edition is not the newest one and is not ours to choose: **it is
whichever edition the contract names.** A page that silently describes the latest
edition to a reader holding an older contract is wrong about that reader's
contract, and looks authoritative while doing it.

Every delivery-term page therefore says so, in the standing note, rather than
implying a current edition by omission.

## The model

Incoterms rules are **`tradeConceptClass: 'delivery-term'`** on
`TradeConceptContent` ([`types/content.ts`](../types/content.ts)) — a class of
trade concept, not a type of their own. A delivery term is a trade mechanism: it
answers the same kind of question as a customs procedure or a documentation
concept, renders identically, and carries the same relation semantics. Splitting
it out would put a second route over one intent. See
[`types/trade.ts`](../types/trade.ts).

## The validator rule

Two notes are required on a delivery-term page, and both are checked verbatim in
[`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts):

| Rule                        | Requires                                                |
| --------------------------- | ------------------------------------------------------- |
| `trade-no-scope-disclaimer` | `advisoryLimitations` includes `TRADE_SCOPE_DISCLAIMER` |
| `trade-no-incoterms-note`   | `advisoryLimitations` includes `INCOTERMS_SCOPE_NOTE`   |

`trade-no-incoterms-note` fires **only** for
`tradeConceptClass === 'delivery-term'`, and it is a hard error. The trademark
and copyright notice is not a nicety that an author may forget on the one page
where it is load-bearing: the check is keyed to the class precisely so that
choosing the class is what obliges the notice. You cannot write an Incoterms page
here without publishing the constraint you are working under.

`INCOTERMS_SCOPE_NOTE` is a constant, not prose, so all four of its promises —
trademark, copyright, not-a-substitute, no-recommendation, work-from-the-named-
edition — are made in identical words on every page that carries it, and are
changed in one place.

Rendering is in
[`components/trade/TradePanels.tsx`](../components/trade/TradePanels.tsx):
`TradeConceptPanels` adds `INCOTERMS_SCOPE_NOTE` to the standing notes for a
`delivery-term` entry, so it appears in the page's scope section rather than in
fine print.

## Known limitations

- **"Describes, does not reproduce" is a line the validator cannot see.** No
  check distinguishes a legitimate summary of what a term allocates from a close
  paraphrase that functions as the rule text. The constraint is real and the
  enforcement is editorial. A future author who summarises _thoroughly enough_ is
  the risk this doc exists to name.
- **We cannot tell a reader which edition governs them.** We can only say that
  the contract names it. If the contract does not name one — which happens —
  AgricultureID has nothing useful to offer, and says nothing rather than
  guessing.
- **The allocation described is the general shape, not the parties' deal.**
  Contracts amend delivery terms routinely; a named rule plus a variation clause
  is a different allocation from the rule. The model has no field for that, and
  no page should imply otherwise.
- **No rule-by-rule comparison table exists, and none should.** A grid of terms
  against allocation points would be genuinely useful, would be the most-linked
  page in this section, and would be a reproduction of the publication's
  substance. It is omitted deliberately, and this is the record of that choice.

## Related

- [`trade-data-licensing.md`](./trade-data-licensing.md) — the standing rule on normative text
- [`standards-and-certification-boundaries.md`](./standards-and-certification-boundaries.md) — the same constraint for standards
- [`trade-classification-versioning.md`](./trade-classification-versioning.md) — editions elsewhere in the trade model
