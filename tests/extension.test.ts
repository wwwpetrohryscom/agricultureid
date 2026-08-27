import { describe, expect, it } from 'vitest';
import { EXTENSION_RESOURCES } from '@/data/extension';
import { EXTENSION_INSTITUTIONS } from '@/data/extension/institutions';
import {
  resourcesForEntity,
  entitiesWithResources,
  resourcesByTopic,
  presentTopics,
  institutionFor,
  isDated,
  statedDate,
  EXTENSION_HUB_PATH,
} from '@/lib/extension/registry';
import {
  EXTENSION_MANDATES,
  EXTENSION_TOPICS,
  RESOURCE_TYPES,
  SUMMARY_MAX_LENGTH,
  SUMMARY_MIN_LENGTH,
} from '@/types/extension';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { evidenceTier } from '@/lib/sources/evidence';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const DOCS = buildSearchDocuments();
const SLUGS = new Map(PUBLISHED_CONTENT.map((c) => [c.slug, c.contentType]));

describe('extension — official is a checked claim', () => {
  it('gives every publisher a mandate and the evidence for it', () => {
    expect(EXTENSION_INSTITUTIONS.length).toBeGreaterThan(0);
    for (const i of EXTENSION_INSTITUTIONS) {
      expect(EXTENSION_MANDATES, i.id).toContain(i.mandate);
      expect(i.mandateBasis.length, i.id).toBeGreaterThan(40);
      expect(i.sourceReferences.length, i.id).toBeGreaterThan(0);
      for (const s of i.sourceReferences)
        expect(SOURCE_MAP.has(s), s).toBe(true);
    }
  });

  it('rates extension publications tier 2, not tier 1', () => {
    // The repo's evidence hierarchy puts university extension publications at
    // tier 2. A public publisher is not an official register.
    for (const i of EXTENSION_INSTITUTIONS) {
      for (const s of i.sourceReferences) expect(evidenceTier(s), s).toBe(2);
    }
  });

  it('attributes every resource to a host its publisher runs', () => {
    for (const r of EXTENSION_RESOURCES) {
      const institution = institutionFor(r.institutionId)!;
      expect(institution, r.id).toBeDefined();
      const root = new URL(institution.homepageUrl).hostname
        .replace(/^www\./, '')
        .split('.')
        .slice(-2)
        .join('.');
      expect(new URL(r.officialUrl).hostname.endsWith(root), r.id).toBe(true);
    }
  });
});

describe('extension — indexing, not republishing', () => {
  it('keeps every summary within index bounds', () => {
    for (const r of EXTENSION_RESOURCES) {
      expect(r.summary.length, r.id).toBeGreaterThanOrEqual(SUMMARY_MIN_LENGTH);
      expect(r.summary.length, r.id).toBeLessThanOrEqual(SUMMARY_MAX_LENGTH);
      expect(r.summary.toLowerCase(), r.id).not.toBe(
        r.officialTitle.toLowerCase(),
      );
    }
  });

  it('writes summaries about the document, never as advice', () => {
    const prescriptive = /\b(you should|you must|we recommend|make sure)\b/i;
    for (const r of EXTENSION_RESOURCES) {
      // Quoted spans are the publisher's own headings, not this index speaking.
      const unquoted = r.summary.replace(/[“"][^”"]*[”"]/g, ' ');
      expect(prescriptive.test(unquoted), r.id).toBe(false);
    }
  });

  it('gives no two resources the same description', () => {
    const seen = new Set<string>();
    for (const r of EXTENSION_RESOURCES) {
      expect(seen.has(r.summary), r.id).toBe(false);
      seen.add(r.summary);
    }
  });

  it('stores no field long enough to be a reproduction', () => {
    for (const r of EXTENSION_RESOURCES) {
      for (const k of r.keyTopics)
        expect(k.length, r.id).toBeLessThanOrEqual(90);
    }
  });
});

describe('extension — jurisdiction survives', () => {
  it('never widens a resource beyond its publisher', () => {
    for (const r of EXTENSION_RESOURCES) {
      const i = institutionFor(r.institutionId)!;
      expect(r.countryCode, r.id).toBe(i.countryCode);
      expect(r.jurisdictionId, r.id).toBe(i.jurisdictionId);
    }
  });

  it('states the place every resource was written for', () => {
    for (const r of EXTENSION_RESOURCES) {
      expect(
        r.limitations.some((l) => /written for/i.test(l)),
        r.id,
      ).toBe(true);
    }
  });

  it('says so when the publisher states no date', () => {
    for (const r of EXTENSION_RESOURCES) {
      if (isDated(r)) {
        expect(statedDate(r), r.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        continue;
      }
      expect(
        r.limitations.some((l) => /no publication or revision date/i.test(l)),
        r.id,
      ).toBe(true);
    }
  });
});

describe('extension — links and vocabulary', () => {
  it('links only to entities of the right kind', () => {
    for (const r of EXTENSION_RESOURCES) {
      for (const s of r.cropRefs) expect(SLUGS.get(s), s).toBe('crop');
      for (const s of r.livestockRefs)
        expect(SLUGS.get(s), s).toBe('livestock');
      for (const s of r.pestRefs) expect(SLUGS.get(s), s).toBe('pest');
      for (const s of r.diseaseRefs)
        expect(SLUGS.get(s), s).toBe('plant-disease');
      for (const s of r.topicRefs) expect(SLUGS.has(s), s).toBe(true);
    }
  });

  it('uses only the closed topic and type vocabularies', () => {
    for (const r of EXTENSION_RESOURCES) {
      expect(RESOURCE_TYPES, r.id).toContain(r.resourceType);
      expect(r.topics.length, r.id).toBeGreaterThan(0);
      for (const t of r.topics) expect(EXTENSION_TOPICS, r.id).toContain(t);
    }
  });

  it('reaches every resource from at least one entity', () => {
    for (const r of EXTENSION_RESOURCES) {
      const linked =
        r.cropRefs.length +
        r.livestockRefs.length +
        r.pestRefs.length +
        r.diseaseRefs.length +
        r.topicRefs.length;
      expect(linked, r.id).toBeGreaterThan(0);
    }
    expect(entitiesWithResources().length).toBeGreaterThan(50);
  });
});

describe('extension — routes and search', () => {
  it('publishes one hub route and no page per resource', () => {
    // 99 pointer pages would each be thinner than the entry they point at.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(EXTENSION_HUB_PATH);
    expect(
      paths.filter((p) => p.startsWith(`${EXTENSION_HUB_PATH}/`)),
    ).toHaveLength(0);
  });

  it('indexes one document per present topic plus a hub', () => {
    const docs = DOCS.filter((d) => d.type === 'extension-resource');
    expect(docs).toHaveLength(presentTopics().length + 1);
    expect(docs.some((d) => d.route === EXTENSION_HUB_PATH)).toBe(true);
    for (const d of docs) {
      if (d.route === EXTENSION_HUB_PATH) continue;
      expect(d.route.startsWith(`${EXTENSION_HUB_PATH}#`)).toBe(true);
    }
  });

  it('groups a multi-topic resource under each of its topics', () => {
    const byTopic = resourcesByTopic();
    const multi = EXTENSION_RESOURCES.find((r) => r.topics.length > 1)!;
    expect(multi).toBeDefined();
    for (const t of multi.topics) {
      expect(
        byTopic.get(t)?.some((r) => r.id === multi.id),
        t,
      ).toBe(true);
    }
  });

  it('returns nothing for an entity with no indexed guidance', () => {
    expect(resourcesForEntity('not-an-entity')).toEqual([]);
  });
});
