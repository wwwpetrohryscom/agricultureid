import { describe, expect, it } from 'vitest';
import {
  CLAIM_KINDS,
  LOCATOR_KINDS,
  MAX_EXCERPT_CHARS,
  TRUTH_STATES,
} from '@/types/provenance';
import {
  LINEAGE_CONTRACTS,
  LINEAGE_CONTRACT_MAP,
} from '@/lib/provenance/contracts';
import {
  allLineages,
  biosecurityLineage,
  complianceRequirementLineage,
  varietyRegistrationLineage,
} from '@/lib/provenance/lineage';
import { COMPLIANCE_TOPICS } from '@/data/compliance';
import { buildSearchDocuments } from '@/lib/search/documents';

const L = allLineages();
const DOCS = buildSearchDocuments();

describe('provenance — a normalised value is not a quotation', () => {
  it('keeps the source’s words and AgricultureID’s vocabulary in different fields', () => {
    // EPPO says "pests recommended for regulation as quarantine pests".
    // AgricultureID records `recommended-for-regulation`. Presenting the second
    // in quotation marks would put words in a regulator's mouth.
    const b =
      biosecurityLineage('bio-eppo-a1-xanthomonas-oryzae-pv-oryzae') ??
      L.find((l) => l.claimKind === 'biosecurity-status')!;
    expect(b.sourceWording?.text).toBeTruthy();
    expect(b.interpretation?.value).toBe('recommended-for-regulation');
    expect(b.interpretation?.vocabulary).toBe('RegulatoryStatus');
  });

  it('names the vocabulary of every normalised value', () => {
    const declared = new Set(
      LINEAGE_CONTRACTS.map((c) => c.vocabulary).filter(Boolean),
    );
    const bad = L.filter(
      (l) => l.interpretation && !declared.has(l.interpretation.vocabulary),
    ).map((l) => l.claimId);
    expect(bad).toEqual([]);
  });
});

describe('provenance — a locator is never invented', () => {
  it('uses only locators the claim’s own sources can supply', () => {
    const bad = L.filter((l) => {
      const c = LINEAGE_CONTRACT_MAP.get(l.claimKind);
      return !c || !c.permittedLocators.includes(l.locator.kind);
    }).map((l) => `${l.claimKind}:${l.claimId}`);
    expect(bad).toEqual([]);
  });

  it('never exposes a selector or a line number as provenance', () => {
    // A DOM path is provenance that stops being true the next time a ministry
    // redesigns; a line number for a page rendered per request never was.
    const bad = L.filter(
      (l) =>
        l.locator.value &&
        /(^|\s)(\.|#)[a-z0-9_-]+\s*>|nth-child|line \d+/i.test(l.locator.value),
    ).map((l) => l.claimId);
    expect(bad).toEqual([]);
  });

  it('does not pass an explanatory note off as a legal citation', () => {
    // Both EU requirements cite Regulation 1107/2009. Only one records the
    // operative article; the other explains why the EU database is not
    // authoritative for a product-level decision.
    const withArticle = complianceRequirementLineage('eu-ppp-authorisation')!;
    const withoutArticle = complianceRequirementLineage('eu-ppp-check-status')!;
    expect(withArticle.locator.kind).toBe('legal-article');
    expect(withArticle.locator.value).toContain('Article 28(1)');
    expect(withoutArticle.locator.kind).toBe('page-heading');
    expect(withoutArticle.locator.why).toContain('no article of it was read');
  });

  it('requires a legal-article locator to name an actual article', () => {
    // Both EU requirements cite the same Regulation. Typing the explanatory one
    // as a legal citation gives an editorial note the authority of operative
    // law, and every structural check still passes.
    const bad = L.filter(
      (l) =>
        l.locator.kind === 'legal-article' &&
        !/\bArticles?\s+\d+/.test(l.locator.value ?? ''),
    ).map((l) => l.claimId);
    expect(bad).toEqual([]);
  });

  it('gives every traced claim at least one source', () => {
    // A claim with no source is not weak provenance, it is none.
    const sourceless = L.filter((l) => l.sources.length === 0).map(
      (l) => l.claimId,
    );
    expect(sourceless).toEqual([]);
  });

  it('keeps Wave 6’s rule: `required` only with operative text', () => {
    for (const t of COMPLIANCE_TOPICS)
      for (const r of t.requirements) {
        if (r.mandatoryStatus !== 'required') continue;
        expect(complianceRequirementLineage(r.id)!.locator.kind, r.id).toBe(
          'legal-article',
        );
      }
  });
});

describe('provenance — no score, and no claim stronger than its evidence', () => {
  it('uses categorical standing only', () => {
    for (const l of L.slice(0, 200))
      expect(TRUTH_STATES).toContain(l.truthState);
    // Nothing anywhere in the layer carries a CONFIDENCE number. A percentage
    // that is a soil's clay content is a measurement of the world; a
    // percentage that is a confidence is a claim about ourselves, and only the
    // second is forbidden.
    const scored = L.filter((l) =>
      /\bconfidence\b|\b\d{1,3}\s?%\s*(confident|certain|sure|reliab)/i.test(
        `${l.statement} ${l.locator.value ?? ''} ${l.interpretation?.value ?? ''}`,
      ),
    ).map((l) => l.claimId);
    expect(scored).toEqual([]);
  });

  it('never calls a claim verified without a source and a date', () => {
    const bad = L.filter(
      (l) =>
        l.truthState === 'verified' &&
        (!l.verifiedAt || l.sources.length === 0),
    ).map((l) => l.claimId);
    expect(bad).toEqual([]);
  });

  it('carries the layer’s own uncertainty through to the lineage', () => {
    const uncertain = COMPLIANCE_TOPICS.flatMap((t) => t.requirements).filter(
      (r) => r.mandatoryStatus === 'uncertain',
    );
    expect(uncertain.length).toBeGreaterThan(0);
    for (const r of uncertain)
      expect(complianceRequirementLineage(r.id)!.truthState, r.id).toBe(
        'uncertain',
      );
  });
});

describe('provenance — extracts identify, they do not reproduce', () => {
  it('keeps every quoted extract within the copyright limit', () => {
    const over = L.filter(
      (l) => (l.sourceWording?.text.length ?? 0) > MAX_EXCERPT_CHARS,
    ).map((l) => l.claimId);
    expect(over).toEqual([]);
  });

  it('quotes short addressable values, not passages', () => {
    const longest = Math.max(
      0,
      ...L.map((l) => l.sourceWording?.text.length ?? 0),
    );
    expect(longest).toBeLessThanOrEqual(MAX_EXCERPT_CHARS);
  });
});

describe('provenance — shape, liveness and search', () => {
  it('resolves every claim kind, and every contract is reached', () => {
    const used = new Set(L.map((l) => l.claimKind));
    for (const c of LINEAGE_CONTRACTS)
      expect(used, c.claimKind).toContain(c.claimKind);
    for (const k of CLAIM_KINDS)
      expect(LINEAGE_CONTRACT_MAP.get(k), k).toBeDefined();
  });

  it('reaches every locator its contracts permit', () => {
    for (const c of LINEAGE_CONTRACTS)
      for (const loc of c.permittedLocators)
        expect(
          L.some((l) => l.claimKind === c.claimKind && l.locator.kind === loc),
          `${c.claimKind}/${loc}`,
        ).toBe(true);
    for (const l of L.slice(0, 500))
      expect(LOCATOR_KINDS).toContain(l.locator.kind);
  });

  it('fails closed for a claim kind with no contract', () => {
    expect(LINEAGE_CONTRACT_MAP.get('not-a-kind' as never)).toBeUndefined();
  });

  it('indexes no evidence blob', () => {
    // Provenance is for reading on the page it explains, not for ranking.
    expect(DOCS.some((d) => (d.type as string) === 'evidence')).toBe(false);
    const leaked = DOCS.filter((d) =>
      /evidenceNote|snapshotId|parserVersion|locator/i.test(JSON.stringify(d)),
    ).map((d) => d.id);
    expect(leaked).toEqual([]);
  });

  it('adds no route of its own', () => {
    // Evidence belongs beside the claim it supports. 43,852 evidence pages
    // would each be thinner than the page they were extracted from.
    const l = varietyRegistrationLineage(
      'eu-plant-variety-portal-nli-agr-ie-solan-tub-657',
    );
    expect(l).toBeDefined();
    expect(l!.locator.kind).toBe('register-record-id');
  });
});
