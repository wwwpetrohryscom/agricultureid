import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  COVERAGE_LAYERS,
  COVERAGE_STATUSES,
  EVIDENCE_REQUIRED_STATUSES,
  PUBLIC_COVERAGE_LABEL,
} from '@/types/coverage';
import {
  allCountryCoverage,
  countryCoverage,
  globalFindings,
  layerCounters,
  subnationalAuthorityCoverage,
  targetCompleteness,
} from '@/lib/coverage/derive';
import { gapsFrom } from '@/lib/coverage/priority';
import { TARGET_SETS } from '@/data/coverage/targets';
import { RESEARCH_LEDGER } from '@/data/coverage/research-ledger';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const CELLS = allCountryCoverage();
const DOCS = buildSearchDocuments();

describe('coverage — absence is never non-existence', () => {
  it('never says a thing does not exist, in any public wording', () => {
    const forbidden =
      /\b(does not exist|no such (register|authority|programme)|there is no [a-z ]*register|none exists)\b/i;
    for (const label of Object.values(PUBLIC_COVERAGE_LABEL))
      expect(forbidden.test(label), label).toBe(false);
    const claiming = RESEARCH_LEDGER.filter((r) => forbidden.test(r.note)).map(
      (r) => r.jurisdiction,
    );
    expect(claiming).toEqual([]);
  });

  it('calls an unexamined cell not-yet-indexed, and says nothing more', () => {
    const notResearched = CELLS.filter((c) => c.status === 'notResearched');
    expect(notResearched.length).toBeGreaterThan(0);
    expect(PUBLIC_COVERAGE_LABEL.notResearched).toBe('Not yet indexed');
    // Nothing looked-for may hide behind it.
    expect(
      notResearched.filter((c) => c.evidence).map((c) => c.jurisdiction),
    ).toEqual([]);
  });
});

describe('coverage — a cell agrees with the layer it describes', () => {
  it('counts records from the layer, never asserts them', () => {
    const counters = layerCounters();
    const wrong = CELLS.filter(
      (c) => counters[c.layer](c.jurisdiction) !== c.recordCount,
    ).map((c) => `${c.jurisdiction}/${c.layer}`);
    expect(wrong).toEqual([]);
  });

  it('never calls a cell covered with nothing in it', () => {
    const empty = CELLS.filter(
      (c) => c.status === 'verified' && c.recordCount === 0,
    ).map((c) => `${c.jurisdiction}/${c.layer}`);
    expect(empty).toEqual([]);
  });

  it('goes stale nowhere, because nothing is stored', () => {
    // Derived on read: adding a record changes the cell without an edit.
    const before = countryCoverage('DEU', 'Germany').find(
      (c) => c.layer === 'markets',
    )!;
    expect(before.recordCount).toBe(layerCounters().markets('DEU'));
  });
});

describe('coverage — a research finding is its evidence', () => {
  it('requires evidence for every status that claims somebody looked', () => {
    const bad = CELLS.filter(
      (c) =>
        EVIDENCE_REQUIRED_STATUSES.includes(c.status) &&
        c.status !== 'notApplicable' &&
        (!c.evidence || !c.evidence.sourceIds.length),
    ).map((c) => `${c.jurisdiction}/${c.layer}`);
    expect(bad).toEqual([]);
  });

  it('cites a source that exists for every ledger entry', () => {
    for (const r of RESEARCH_LEDGER)
      for (const s of r.sourceIds) expect(SOURCE_MAP.has(s), s).toBe(true);
  });

  it('keeps the technical reason out of the reader’s note', () => {
    // A reader needs to know whether to trust a blank; they do not need a 403.
    for (const r of RESEARCH_LEDGER) expect(r.note).not.toBe(r.internalNote);
  });

  it('does not let a finding about one source stand in for every country', () => {
    // UPOV's database covers sixty members at once. That says nothing about
    // whether any one country's own register was looked for, and letting it
    // fall through reported twenty-five countries as researched on one
    // robots.txt.
    // Findings about cross-jurisdiction sources are reported apart from any
    // country's row. There are two: a variety aggregator and a modelled global
    // soil dataset.
    expect(globalFindings().length).toBeGreaterThan(0);
    expect(globalFindings().every((f) => f.jurisdiction === 'GLOBAL')).toBe(
      true,
    );
    const withOwnFinding = new Set(
      RESEARCH_LEDGER.filter(
        (r) => r.layer === 'varieties' && r.jurisdiction !== 'GLOBAL',
      ).map((r) => r.jurisdiction),
    );
    // Japan has a finding of its own and keeps it. Everyone else falls back to
    // "nobody has looked" rather than inheriting UPOV's robots.txt.
    expect([...withOwnFinding]).toEqual(['JPN']);
    const inherited = CELLS.filter(
      (c) =>
        c.layer === 'varieties' &&
        c.recordCount === 0 &&
        !withOwnFinding.has(c.jurisdiction) &&
        c.status !== 'notResearched',
    ).map((c) => c.jurisdiction);
    expect(inherited).toEqual([]);
  });
});

describe('coverage — the target list is independent of the corpus', () => {
  it('does not import the corpus into the target fixtures', () => {
    // A completeness check whose target comes from the thing being measured
    // always passes.
    const src = readFileSync('data/coverage/targets.ts', 'utf8');
    expect(/from '@\/data\//.test(src)).toBe(false);
    expect(/from '@\/lib\//.test(src)).toBe(false);
  });

  it('holds the memberships the constituting instruments give', () => {
    const by = (id: string) => TARGET_SETS.find((t) => t.id === id)!;
    expect(by('eu-member-states').members).toHaveLength(27);
    expect(by('us-states').members).toHaveLength(50);
    expect(by('ca-subdivisions').members).toHaveLength(13);
    expect(by('au-subdivisions').members).toHaveLength(8);
    for (const t of TARGET_SETS) {
      expect(new Set(t.members).size, t.id).toBe(t.members.length);
      expect(t.basis, t.id).toBeTruthy();
    }
  });

  it('reconciles covered and missing against the target, not the corpus', () => {
    for (const iso3 of ['USA', 'CAN', 'AUS'] as const) {
      const s = subnationalAuthorityCoverage(iso3)!;
      expect(s.covered.length + s.missing.length, iso3).toBe(s.total);
    }
    for (const t of targetCompleteness())
      expect(t.covered.length + t.missing.length).toBe(t.total);
  });

  it('marks a country partly covered when its subdivisions are not all held', () => {
    // Covered nationally is not covered throughout: 31 of 50 US states.
    for (const iso3 of ['USA', 'CAN', 'AUS'] as const) {
      const cell = countryCoverage(iso3, iso3).find(
        (c) => c.layer === 'authorities',
      )!;
      expect(cell.status, iso3).toBe('partial');
      expect(cell.recordCount, iso3).toBeGreaterThan(0);
    }
  });
});

describe('coverage — no score, no dead vocabulary, no page explosion', () => {
  it('uses deterministic tiers rather than a number', () => {
    const gaps = gapsFrom(CELLS);
    expect(gaps.length).toBeGreaterThan(0);
    for (const g of gaps.slice(0, 50)) {
      expect(['ready', 'blocked', 'unexamined']).toContain(g.tier);
      expect(g.because).toBeTruthy();
      expect(JSON.stringify(g)).not.toMatch(/score|weight|priority: \d/i);
    }
  });

  it('reaches every status in the vocabulary', () => {
    const reachable = new Set<string>([
      ...CELLS.map((c) => c.status),
      ...RESEARCH_LEDGER.map((r) => r.status),
      'notApplicable',
    ]);
    for (const s of COVERAGE_STATUSES) expect(reachable, s).toContain(s);
  });

  it('publishes one hub and one section per country, not a page per cell', () => {
    // 360 cells would be 360 pages saying "nobody has looked".
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain('/coverage');
    expect(paths.filter((p) => p.startsWith('/coverage/'))).toHaveLength(0);
    expect(CELLS).toHaveLength(40 * COVERAGE_LAYERS.length);
  });

  it('keeps coverage low-weight for ordinary agricultural queries', () => {
    const doc = DOCS.find((d) => d.type === 'coverage')!;
    expect(doc.route).toBe('/coverage');
    // A page about what is missing must not carry the names of the things that
    // are there.
    expect(
      doc.names.some((n) => /germany|wheat|pesticide|france/i.test(n)),
    ).toBe(false);
  });
});
