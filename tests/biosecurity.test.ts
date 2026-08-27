import { describe, expect, it } from 'vitest';
import { BIOSECURITY_STATUS } from '@/data/biosecurity';
import { REGULATORY_STATUSES } from '@/types/biosecurity';
import {
  statusForOrganism,
  organismsWithStatus,
  BIOSECURITY_HUB_PATH,
} from '@/lib/biosecurity/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED = 20;
const STATUTORY = [
  'quarantine',
  'regulated-non-quarantine',
  'official-control',
  'restricted',
];
const DOCS = buildSearchDocuments();

describe('biosecurity — recommendation is never recorded as regulation', () => {
  it('records every EPPO listing as a recommendation, not statutory status', () => {
    expect(BIOSECURITY_STATUS).toHaveLength(EXPECTED);
    for (const s of BIOSECURITY_STATUS) {
      const fromEppo = s.sourceReferences.some((x) => x.startsWith('eppo-'));
      if (fromEppo) {
        expect(s.regulatoryStatus, s.id).toBe('recommended-for-regulation');
        expect(STATUTORY, s.id).not.toContain(s.regulatoryStatus);
      }
    }
  });

  it('scopes EPPO listings to the EPPO region, never to a single country', () => {
    // An EPPO recommendation says nothing about any one member's statute book.
    for (const s of BIOSECURITY_STATUS) {
      if (!s.sourceReferences.some((x) => x.startsWith('eppo-'))) continue;
      expect(s.supranationalJurisdiction, s.id).toBe('EPPO region');
      expect(s.countryCode, s.id).toBeUndefined();
      expect(s.jurisdictionId, s.id).toBeUndefined();
    }
  });

  it('states in every record that listing is a recommendation', () => {
    for (const s of BIOSECURITY_STATUS) {
      expect(s.limitations.join(' ').toLowerCase(), s.id).toContain(
        'recommendation',
      );
    }
  });

  it('records zero statutory statuses, because no statutory source is in the corpus', () => {
    expect(
      BIOSECURITY_STATUS.filter((s) => STATUTORY.includes(s.regulatoryStatus)),
    ).toHaveLength(0);
  });
});

describe('biosecurity — the listed wording is preserved, not flattened', () => {
  it('stores the source entry verbatim on every record', () => {
    for (const s of BIOSECURITY_STATUS) {
      expect(s.officialListEntry.trim().length, s.id).toBeGreaterThan(3);
      expect(s.officialListName, s.id).toMatch(/^EPPO A[12] List$/);
      expect(s.listVersion, s.id).toBe('2025-09');
    }
  });

  it('keeps a narrower listing narrow', () => {
    // Panama disease: EPPO lists Tropical race 4 only. Recording it as
    // "Fusarium oxysporum f.sp. cubense" would widen a regulatory fact.
    const panama = BIOSECURITY_STATUS.find(
      (s) => s.organismRef === 'panama-disease',
    )!;
    expect(panama.officialListEntry).toContain('Tropical race 4');
    expect(panama.limitations.join(' ')).toContain('Tropical race 4');

    // Boll weevil: the entry names the subspecies.
    const boll = BIOSECURITY_STATUS.find(
      (s) => s.organismRef === 'boll-weevil',
    )!;
    expect(boll.officialListEntry).toBe('Anthonomus grandis grandis');
  });

  it('excludes the five matches rejected on review', () => {
    // Each was a real false positive; publishing any would be a regulatory
    // claim about the wrong organism.
    const rejected = [
      'armyworms', // its scientific name mentions S. frugiperda only to EXCLUDE it
      'western-corn-rootworm', // corpus is D. v. virgifera; EPPO entry is D. v. zeae
      'bacterial-leaf-spot', // generic page vs specific regulated pathovars
      'fusarium-wilt', // generic species vs specific formae speciales
      'verticillium-wilt', // EPPO regulates hop strains only
    ];
    const present = new Set(BIOSECURITY_STATUS.map((s) => s.organismRef));
    for (const slug of rejected) {
      expect(present.has(slug), `${slug} must stay rejected`).toBe(false);
    }
  });

  it('still lists the organisms whose matches were sound', () => {
    const present = new Set(organismsWithStatus());
    for (const slug of [
      'fall-armyworm',
      'colorado-potato-beetle',
      'khapra-beetle',
      'huanglongbing',
      'bacterial-leaf-blight-of-rice',
    ]) {
      expect(present.has(slug), slug).toBe(true);
    }
  });
});

describe('biosecurity — references and rendering', () => {
  it('resolves every organism reference to a published pest or disease', () => {
    const slugs = new Set(
      PUBLISHED_CONTENT.filter((c) =>
        ['pest', 'plant-disease'].includes(c.contentType),
      ).map((c) => c.slug),
    );
    for (const s of BIOSECURITY_STATUS) {
      expect(slugs.has(s.organismRef), `${s.id} → ${s.organismRef}`).toBe(true);
    }
  });

  it('cites a real source on every regulatory claim', () => {
    for (const s of BIOSECURITY_STATUS) {
      expect(s.sourceReferences.length, s.id).toBeGreaterThan(0);
      for (const sid of s.sourceReferences)
        expect(SOURCE_MAP.has(sid), sid).toBe(true);
    }
  });

  it('renders nothing for an organism with no recorded status', () => {
    // Silence is correct: no entry means the position was not established,
    // which is not the same as "unregulated".
    expect(statusForOrganism('aphids')).toHaveLength(0);
    expect(statusForOrganism('does-not-exist')).toHaveLength(0);
  });

  it('creates a hub route but no per-listing routes', () => {
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(BIOSECURITY_HUB_PATH);
    expect(
      paths.filter((p) => p.startsWith(`${BIOSECURITY_HUB_PATH}/`)),
    ).toHaveLength(0);
  });

  it('indexes one search document, not one per listing', () => {
    const docs = DOCS.filter((d) => d.type === 'biosecurity-listing');
    expect(docs).toHaveLength(1);
    expect(docs[0]!.route).toBe(BIOSECURITY_HUB_PATH);
    expect(docs[0]!.names).toContain('EPPO A1 List');
  });
});
