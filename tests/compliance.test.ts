import { describe, expect, it } from 'vitest';
import { COMPLIANCE_TOPICS } from '@/data/compliance';
import { isPublishableComplianceTopic } from '@/types/compliance';
import {
  publishedComplianceTopics,
  complianceTopicsForRegistry,
  complianceTopicsForAuthority,
  compliancePath,
  REGULATIONS_HUB_PATH,
} from '@/lib/compliance/registry';
import { AUTHORITIES } from '@/data/authorities';
import { REGISTRIES } from '@/data/registries';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED_TOPICS = 5;
const DOCS = buildSearchDocuments();
const C_DOCS = DOCS.filter((d) => d.type === 'agricultural-compliance');
const REQS = COMPLIANCE_TOPICS.flatMap((t) => t.requirements);

describe('compliance — a mandatory obligation is never asserted uncited', () => {
  it('cites an official source for every "required" requirement', () => {
    const required = REQS.filter((r) => r.mandatoryStatus === 'required');
    // There is exactly one, and it is the only one whose operative legal text
    // was actually read. If this number grows, each addition must bring its own
    // citation — which the loop below enforces.
    expect(required).toHaveLength(1);
    for (const r of required) {
      expect(r.officialSourceIds.length, r.id).toBeGreaterThan(0);
      for (const sid of r.officialSourceIds)
        expect(SOURCE_MAP.has(sid), sid).toBe(true);
    }
  });

  it('quotes the EU pesticide provision it relies on', () => {
    const r = REQS.find((x) => x.id === 'eu-ppp-authorisation')!;
    expect(r.mandatoryStatus).toBe('required');
    expect(r.officialSourceIds).toContain('law-eu-1107-2009');
    // The operative wording, read from EUR-Lex, not paraphrased into something
    // stronger than the text supports.
    expect(r.note).toContain(
      'shall not be placed on the market or used unless it has been authorised',
    );
    // …and its documented derogations are recorded, so the rule is not
    // presented as unqualified.
    expect(r.conditions?.length ?? 0).toBeGreaterThan(0);
    expect(r.conditions!.join(' ')).toContain('basic substances');
  });

  it('never lets a "verify" action claim something is required', () => {
    for (const r of REQS) {
      if (r.action === 'verify') {
        expect(r.mandatoryStatus, r.id).not.toBe('required');
      }
    }
  });

  it('uses "uncertain" where the operative text was not read', () => {
    // The honest majority: these direct the reader to the official system.
    expect(REQS.filter((r) => r.mandatoryStatus === 'uncertain').length).toBe(
      4,
    );
  });
});

describe('compliance — cross-layer linkage is by id, never by raw URL', () => {
  it('resolves every authority id against the authority registry', () => {
    const ids = new Set(AUTHORITIES.map((a) => a.id));
    let checked = 0;
    for (const t of COMPLIANCE_TOPICS) {
      for (const aid of t.responsibleAuthorityIds) {
        expect(ids.has(aid), `${t.id} → ${aid}`).toBe(true);
        checked++;
      }
      for (const r of t.requirements) {
        for (const aid of r.authorityIds)
          expect(ids.has(aid), `${r.id} → ${aid}`).toBe(true);
      }
    }
    expect(checked).toBeGreaterThan(0);
  });

  it('resolves every registry id against the Wave 5 registry corpus', () => {
    const ids = new Set(REGISTRIES.map((r) => r.id));
    let checked = 0;
    for (const t of COMPLIANCE_TOPICS) {
      for (const rid of t.relatedRegistryIds) {
        expect(ids.has(rid), `${t.id} → ${rid}`).toBe(true);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(0);
  });

  it('consumes registries rather than duplicating their URLs in prose', () => {
    // A compliance record must not carry a raw registry URL of its own; that
    // is what would go stale when a registry moves.
    const registryUrls = REGISTRIES.map((r) => r.officialUrl);
    const blob = JSON.stringify(COMPLIANCE_TOPICS);
    for (const u of registryUrls) {
      expect(blob.includes(u), `raw registry URL leaked: ${u}`).toBe(false);
    }
  });

  it('is reachable in both directions from registry and authority', () => {
    expect(
      complianceTopicsForRegistry('eu-pesticides-database').length,
    ).toBeGreaterThan(0);
    expect(
      complianceTopicsForAuthority('us-epa-pesticides').length,
    ).toBeGreaterThan(0);
    expect(complianceTopicsForRegistry('does-not-exist')).toHaveLength(0);
  });
});

describe('compliance — publication and honesty', () => {
  it('holds the expected number of topics, all publishable', () => {
    expect(COMPLIANCE_TOPICS).toHaveLength(EXPECTED_TOPICS);
    expect(publishedComplianceTopics()).toHaveLength(EXPECTED_TOPICS);
  });

  it('states limitations on every topic', () => {
    for (const t of COMPLIANCE_TOPICS) {
      expect(t.limitations.length, t.id).toBeGreaterThan(0);
    }
  });

  it('carries the non-advice disclosure on every topic', () => {
    for (const t of COMPLIANCE_TOPICS) {
      expect(
        t.limitations.some((l) =>
          /does not replace legal or professional advice/i.test(l),
        ),
        t.id,
      ).toBe(true);
    }
  });

  it('never publishes a superseded topic as current', () => {
    for (const t of COMPLIANCE_TOPICS) {
      if (t.status === 'superseded')
        expect(isPublishableComplianceTopic(t), t.id).toBe(false);
    }
  });

  it('records a verification date on every topic', () => {
    for (const t of COMPLIANCE_TOPICS) {
      expect(t.lastVerifiedAt, t.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('reproduces no long legal passage', () => {
    // Short necessary quotation is fine; wholesale reproduction is not.
    for (const r of REQS) {
      expect(r.note.length, r.id).toBeLessThan(600);
    }
  });
});

describe('compliance — routing and search', () => {
  it('gives every published topic exactly one route, plus the hub', () => {
    const paths = allRoutes().map((p) => p.path);
    const detail = paths.filter((p) =>
      /^\/agricultural-regulations\/.+/.test(p),
    );
    expect(new Set(detail).size).toBe(detail.length);
    expect(detail.length).toBe(EXPECTED_TOPICS);
    expect(paths).toContain(REGULATIONS_HUB_PATH);
  });

  it('indexes every listed topic and routes it to a real page', () => {
    const routes = new Set(allRoutes().map((p) => p.path));
    expect(C_DOCS.length).toBe(EXPECTED_TOPICS);
    for (const d of C_DOCS) {
      expect(routes.has(d.route), d.id).toBe(true);
    }
    for (const t of publishedComplianceTopics()) {
      const d = C_DOCS.find((x) => x.id === `compliance:${t.id}`)!;
      expect(d.route).toBe(compliancePath(t.slug));
    }
  });

  it('ships no source or verification payload into the client index', () => {
    const blob = JSON.stringify(C_DOCS);
    for (const leak of [
      'officialSourceIds',
      'lastVerifiedAt',
      'mandatoryStatus',
      'officialSources',
    ]) {
      expect(blob.includes(leak), leak).toBe(false);
    }
  });
});
