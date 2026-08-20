import { describe, expect, it } from 'vitest';
import {
  HELPERG_WEB_PROJECTS,
  HELPERG_APPS,
  PLATFORM_ORDER,
  PLATFORM_LABELS,
  CURRENT_PROJECT_ID,
  appStoreDestinationCount,
  appStoreLinks,
  isCurrentProject,
} from '@/lib/ecosystem/registry';
import { SITE } from '@/lib/site';

/**
 * The exact destinations supplied in the ecosystem brief. Duplicated here on
 * purpose: the test is the independent copy of the specification, so an
 * accidental edit to the registry fails rather than silently redefining the
 * expectation. Update this table only when the brand publishes a new URL.
 */
const EXPECTED_WEB: ReadonlyArray<readonly [string, string]> = [
  ['HELPERG', 'https://helperg.com'],
  ['WebmasterID', 'https://webmasterid.com'],
  ['Cash Workspace', 'https://www.cashworkspace.com'],
  ['Twin Phone', 'https://twin-phone.com'],
  ['TalentPartnerID', 'https://talentpartnerid.com'],
  ['HRHelperG', 'https://hrhelperg.com'],
  ['GeoBusinessIQ', 'https://geobusinessiq.com'],
  ['Global City Intelligence', 'https://globalcityintelligence.com'],
  ['SocialSportHub', 'https://socialsporthub.com'],
  ['AgricultureID', 'https://agricultureid.com'],
  ['FaunaHub', 'https://faunahub.com'],
  ['BuildDesignHub', 'https://builddesignhub.com'],
  ['PrinterArchive', 'https://printerarchive.net'],
  ['Virtue & Power', 'https://virtueandpower.com'],
  ['AsteriaStar', 'https://asteriastar.com'],
  ['Petro Hrys', 'https://petrohrys.com'],
  ['PDF Edit & Convert', 'https://pdfeditconvert.top'],
  ['eSIMky', 'https://esimky.com'],
];

const EXPECTED_APPS: ReadonlyArray<
  readonly [string, { ios?: string; android?: string }]
> = [
  [
    'Zip',
    {
      ios: 'https://apps.apple.com/app/id6753772583',
      android:
        'https://play.google.com/store/apps/details?id=com.ziparchivator.zip&pcampaignid=web_share',
    },
  ],
  [
    'Printer',
    {
      ios: 'https://apps.apple.com/app/id6746067890',
      android:
        'https://play.google.com/store/apps/details?id=com.helperg.smart.printer',
    },
  ],
  [
    'Fax',
    {
      ios: 'https://apps.apple.com/app/id6760895885',
      android:
        'https://play.google.com/store/apps/details?id=com.helperg.fax.app&pcampaignid=web_share',
    },
  ],
  [
    'PDF',
    {
      ios: 'https://apps.apple.com/app/id6747341672',
      android:
        'https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share',
    },
  ],
  ['CV Resume', { ios: 'https://apps.apple.com/app/id6745150815' }],
  [
    'Invoice Maker',
    {
      ios: 'https://apps.apple.com/app/id6747311276',
      android:
        'https://play.google.com/store/apps/details?id=com.helperg.invoicer',
    },
  ],
  [
    'Pocket Manager',
    {
      ios: 'https://apps.apple.com/app/id6743084126',
      android:
        'https://play.google.com/store/apps/details?id=com.helperg.money',
    },
  ],
  ['Twin Phone', { ios: 'https://apps.apple.com/app/id6792280945' }],
];

/** Apps the brief says have NO Android release. */
const IOS_ONLY = ['cv-resume', 'twin-phone'];

describe('ecosystem registry — counts', () => {
  it('contains exactly 18 web projects', () => {
    expect(HELPERG_WEB_PROJECTS).toHaveLength(18);
  });

  it('contains exactly 8 apps', () => {
    expect(HELPERG_APPS).toHaveLength(8);
  });

  it('exposes exactly 14 app-store destinations', () => {
    expect(appStoreDestinationCount()).toBe(14);
  });

  it('matches the per-app destination counts from the brief', () => {
    const expected: Record<string, number> = {
      zip: 2,
      printer: 2,
      fax: 2,
      pdf: 2,
      'cv-resume': 1,
      'invoice-maker': 2,
      'pocket-manager': 2,
      'twin-phone': 1,
    };
    // Guard the table itself so a dropped row cannot make the loop vacuous.
    expect(Object.keys(expected)).toHaveLength(8);
    expect(Object.values(expected).reduce((a, b) => a + b, 0)).toBe(14);

    for (const app of HELPERG_APPS) {
      const want = expected[app.id];
      // A registry id missing from the table above would otherwise make this
      // assertion vacuous, so require the pairing to be total.
      expect(want, `${app.id} missing from the expected table`).toBeDefined();
      expect(appStoreLinks(app), app.id).toHaveLength(want!);
    }
  });
});

describe('ecosystem registry — exact destinations', () => {
  it('lists the 18 brand names and canonical URLs verbatim, in order', () => {
    expect(EXPECTED_WEB).toHaveLength(18);
    expect(HELPERG_WEB_PROJECTS.map((p) => [p.name, p.url] as const)).toEqual(
      EXPECTED_WEB.map(([n, u]) => [n, u] as const),
    );
  });

  it('keeps the www host on Cash Workspace exactly as published', () => {
    // Easy to "tidy" by accident; the published canonical includes www.
    const cw = HELPERG_WEB_PROJECTS.find((p) => p.id === 'cash-workspace');
    expect(cw?.url).toBe('https://www.cashworkspace.com');
  });

  it('lists the 8 apps with exact platform URLs, in order', () => {
    expect(EXPECTED_APPS).toHaveLength(8);
    expect(
      HELPERG_APPS.map((a) => [a.name, { ...a.platforms }] as const),
    ).toEqual(EXPECTED_APPS.map(([n, p]) => [n, p] as const));
  });
});

describe('ecosystem registry — integrity', () => {
  it('uses HTTPS for every web project URL', () => {
    expect(HELPERG_WEB_PROJECTS).toHaveLength(18);
    for (const p of HELPERG_WEB_PROJECTS) {
      expect(new URL(p.url).protocol, p.id).toBe('https:');
    }
  });

  it('uses HTTPS for every app-store URL', () => {
    const urls = HELPERG_APPS.flatMap((a) =>
      appStoreLinks(a).map((s) => s.url),
    );
    expect(urls).toHaveLength(14);
    for (const u of urls) expect(new URL(u).protocol, u).toBe('https:');
  });

  it('has no duplicate web-project ids', () => {
    const ids = HELPERG_WEB_PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(18);
  });

  it('has no duplicate canonical web-project URLs', () => {
    const urls = HELPERG_WEB_PROJECTS.map((p) => p.url);
    expect(new Set(urls).size).toBe(18);
  });

  it('has no duplicate app ids and no duplicate store URLs', () => {
    expect(new Set(HELPERG_APPS.map((a) => a.id)).size).toBe(8);
    const urls = HELPERG_APPS.flatMap((a) =>
      appStoreLinks(a).map((s) => s.url),
    );
    expect(new Set(urls).size).toBe(14);
  });

  it('allows the same brand to be both a website and an app (Twin Phone)', () => {
    // Id uniqueness is scoped per registry — this is a legitimate relationship,
    // not a duplicate, and must never be "fixed" by renaming one of them.
    expect(HELPERG_WEB_PROJECTS.some((p) => p.id === 'twin-phone')).toBe(true);
    expect(HELPERG_APPS.some((a) => a.id === 'twin-phone')).toBe(true);
  });

  it('never invents an Android URL for iOS-only apps', () => {
    expect(IOS_ONLY).toHaveLength(2);
    for (const id of IOS_ONLY) {
      const app = HELPERG_APPS.find((a) => a.id === id);
      expect(app, id).toBeDefined();
      expect(app!.platforms.android, id).toBeUndefined();
      expect(app!.platforms.ios, id).toBeTruthy();
      expect(appStoreLinks(app!), id).toHaveLength(1);
    }
  });

  it('points store URLs only at the official store hosts', () => {
    const hosts: Record<string, string> = {
      ios: 'apps.apple.com',
      android: 'play.google.com',
    };
    let checked = 0;
    for (const app of HELPERG_APPS) {
      for (const { platform, url } of appStoreLinks(app)) {
        expect(new URL(url).hostname, url).toBe(hosts[platform]);
        checked++;
      }
    }
    expect(checked).toBe(14);
  });

  it('carries no tracking parameters on any destination', () => {
    const all = [
      ...HELPERG_WEB_PROJECTS.map((p) => p.url),
      ...HELPERG_APPS.flatMap((a) => appStoreLinks(a).map((s) => s.url)),
    ];
    expect(all).toHaveLength(32);
    for (const u of all) {
      const q = new URL(u).searchParams;
      expect(q.get('utm_source'), u).toBeNull();
      expect(q.get('utm_medium'), u).toBeNull();
      expect(q.get('utm_campaign'), u).toBeNull();
    }
  });
});

describe('ecosystem registry — current site', () => {
  it('detects AgricultureID as the current project, and only it', () => {
    const current = HELPERG_WEB_PROJECTS.filter(isCurrentProject);
    expect(current).toHaveLength(1);
    expect(current[0]?.id).toBe('agricultureid');
    expect(current[0]?.id).toBe(CURRENT_PROJECT_ID);
  });

  it("keeps the current project's URL in step with the site's canonical origin", () => {
    // The registry is deliberately import-free, so this is the seam that stops
    // the two drifting apart.
    const current = HELPERG_WEB_PROJECTS.find(isCurrentProject);
    expect(current?.url).toBe(SITE.url);
  });

  it('keeps AgricultureID in the registry rather than removing it locally', () => {
    expect(
      HELPERG_WEB_PROJECTS.some((p) => p.url === 'https://agricultureid.com'),
    ).toBe(true);
  });
});

describe('ecosystem registry — presentation contract', () => {
  it('orders platforms deterministically and labels them neutrally', () => {
    expect(PLATFORM_ORDER).toEqual(['ios', 'android']);
    expect(PLATFORM_LABELS).toEqual({
      ios: 'App Store',
      android: 'Google Play',
    });
  });

  it('returns store links in platform order, omitting absent platforms', () => {
    const zip = HELPERG_APPS.find((a) => a.id === 'zip')!;
    expect(appStoreLinks(zip).map((s) => s.platform)).toEqual([
      'ios',
      'android',
    ]);
    const cv = HELPERG_APPS.find((a) => a.id === 'cv-resume')!;
    expect(appStoreLinks(cv).map((s) => s.platform)).toEqual(['ios']);
  });
});
