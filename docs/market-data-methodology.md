# Market data methodology (Phase 5D)

## No prices. No forecasts. No signals. Ever.

> **AgricultureID publishes no live prices, no price forecasts, and no trading
> signals.**

Not "not yet". Not "pending a data source". This is a permanent property of the
platform, stated as `NO_LIVE_PRICE_NOTE` in [`types/trade.ts`](../types/trade.ts)
and required verbatim on every market-term page.

A static reference site cannot carry a live price. It can only carry a **stale
one that looks live** — which is the worst available outcome, because staleness
is invisible at the point of reading. A price with no timestamp reads as current
forever, and a reader who acts on it is acting on a number that stopped being
true at build time. Nothing in a page's design signals that.

Forecasts and signals fail differently and worse: they are not stale, they are
**unfounded**. AgricultureID has no model, no position, no market data, and no
basis. A forecast here would be invention dressed as reference.

## So why does the type exist at all?

Because the reader's actual problem is not _what is the price_ — it is **what does
this number mean**.

A reader with a quotation in front of them, from a broker, an exchange, a trade
publication, or a contract, needs to know what basis it is on, what it excludes,
what it is measured against, and what it is **not**. Getting that wrong misreads
a real price by more than a stale price ever would.

> **This type exists so that prices obtained elsewhere can be read correctly.**

That framing does the whole job. It is why the type has no price field, why it
never wanted one, and why "add prices later" is not a roadmap item but a category
error.

## `notToBeConfusedWith` is the core field

`notToBeConfusedWith` is **required and non-empty** on `MarketTermContent`
([`types/content.ts`](../types/content.ts)); `mkt-no-confusions` is an error, and
its message says why: _distinguishing the term is the purpose of the type._

This is unusual — most required fields are required because the entity is
incomplete without them. This one is required because **it is the entity**. A
market-term page whose author could not name what the term is confused with has
not identified a reader problem, and the definition is decoration.

Market vocabulary is treacherous in a specific way: the terms are _nearly_
synonyms. Basis and spread. Spot and cash. Forward and futures. Hedging and
speculation. Each pair is close enough to substitute in a sentence and far enough
apart to lose money on. The confusion **is** the subject matter; a definition
alone leaves the reader exactly where they started, holding a number they still
cannot read.

Rendered as its own section — **"Not to be confused with"**, introduced as
_distinctions that change how a figure should be read_ — in
[`components/trade/TradePanels.tsx`](../components/trade/TradePanels.tsx), not
buried under the definition.

## The `mkt-price-like-figure` rule

> **A market-term page carries no currency amount, no percentage, no per-tonne
> rate, no cent value.**

Enforced in [`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts) by
`PRICE_LIKE`, scanned across **every rendered string on the page**, flattened by
`pageText`. This is the market-term counterpart of Phase 5B's
`LOOKS_LIKE_A_VALUE`.

### Why an illustrative number is a defect, not a teaching aid

This is the rule authors will want to break, and it will feel pedantic when they
do. It is not.

An author explaining **basis** reaches for an example, because that is how you
explain basis. The example needs a cash price and a futures price. Both get
invented — plausibly, in the right range, for a real commodity — and the page now
contains a fabricated market quotation.

The reader does not see an illustration. They see a number, on a reference page,
about their commodity, with no timestamp. **An invented price on a page a reader
may take for market information is worse than no page at all** — the page's
credibility is precisely what makes its fabricated number dangerous. We spent the
whole platform earning that credibility; a made-up figure spends it.

And the escape is free:

> **Defining a term never requires a number.**

Basis is the difference between a local cash price and a reference futures price.
That is the definition. It is complete. It is correct. It contains no digits. The
number added nothing except the appearance of authority and the risk of being
believed.

### The disclaimer is stripped before scanning

`NO_LIVE_PRICE_NOTE` is removed from the text before `PRICE_LIKE` runs:

```
const text = pageText(t).split(NO_LIVE_PRICE_NOTE).join(' ');
```

The required disclaimer talks about quotations and prices, so scanning the page
whole would have every compliant page fail on its own disclaimer. The fix is to
**remove the known-good text and scan the rest**, rather than to weaken the
pattern until the disclaimer slips through — because a pattern loosened enough to
tolerate the disclaimer is loosened enough to tolerate a real price.

The same technique, for the same reason, is used by `risk-assigns-a-level` — see
[`supply-chain-risk-model.md`](./supply-chain-risk-model.md).

## Known limitations

- **`PRICE_LIKE` is a regex over prose, so it is both over- and under-inclusive.**
  It will not catch `"five hundred dollars a tonne"` written in words, and it
  will flag a legitimate percentage that is not a price at all. The second is a
  cost we accept: a false positive costs an author a rewrite, a false negative
  publishes a fabricated quotation.
- **It cannot see a number's intent.** A figure removed from a market-term page
  is not a figure that was checked and found accurate — it is a figure that was
  never allowed to be asserted. The rule enforces _absence_, which is the only
  property here that is machine-checkable.
- **`notToBeConfusedWith` is checked for presence, not for usefulness.** A single
  weak entry satisfies `mkt-no-confusions`. Whether the distinction drawn is the
  one that actually costs readers money is editorial judgement the validator
  cannot make.
- **No price history, no series, no charts — and no dataset to build them from.**
  The FAOSTAT trade snapshot carries reported **values** (1000 USD) at
  reporter-year granularity, which is a trade statistic and **not a price**.
  Dividing value by quantity yields a unit value, which is not a price either —
  it is an average across a year, a partner set, and a quality range. The model
  does not compute one. See [`trade-data-model.md`](./trade-data-model.md).
- **Terms are defined generally; contracts are specific.** The same word is used
  differently between exchanges, trades, and jurisdictions. The type has no
  field for "as used in this contract", and the reader's contract wins over
  anything here.

## Related

- [`supply-chain-risk-model.md`](./supply-chain-risk-model.md) — the sibling "describe, never quantify" rule
- [`trade-data-model.md`](./trade-data-model.md) — what the trade snapshot does and does not contain
- [`calculator-safety.md`](./calculator-safety.md) — the same instinct applied to tools
