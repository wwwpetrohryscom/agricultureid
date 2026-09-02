# Crop research campaign — Wave 36

Every crop AgricultureID held as a taxon without an article, evaluated.

## The evidence protocol

Three bases, recorded per crop:

- `CORPUS_VERIFIED_IDENTITY` — the dual-authority botanical identity established
  in Waves 27–30. Real evidence, already checked against World Flora Online and
  Kew's Plants of the World Online.
- `EXECUTABLE_COVERAGE` — cross-layer coverage computed from the corpus at
  research time. For every candidate this is **zero**, and that is structural
  rather than informative: every relation in AgricultureID keys to a published
  crop page, so a taxon without a page cannot have coverage. It is recorded
  once here rather than repeated 189 times as if it were a finding.
- `SOURCE_CONSULTED` — a source was checked for this specific crop during this
  wave.

**A crop may only be promoted if it carries `SOURCE_CONSULTED`.** The validator
enforces that. Identity and coverage are enough to conclude that nobody should
write an article yet; they are not enough to conclude that somebody should.

## What the outcomes mean

`READY_BUT_DEFER_EDITORIAL` and `NEEDS_MORE_EVIDENCE` are deliberately distinct.
The first says the evidence exists and the writing has not been done; the second
says the evidence does not exist. Collapsing them would let an editorial backlog
be reported as a research finding.
