import { describe, expect, it } from 'vitest';
import { CROP_CALENDARS } from '@/data/calendars';
import { CALENDAR_CONFIDENCES } from '@/types/calendar';
import {
  cropsWithCalendars,
  calendarsForCrop,
  seasonsForCrop,
  cropCalendarPath,
  formatWindow,
  CALENDARS_HUB_PATH,
} from '@/lib/calendars/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { CANONICAL_JURISDICTIONS } from '@/data/jurisdictions';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const EXPECTED_ENTRIES = 172;
const EXPECTED_CROPS = 6;
const DOCS = buildSearchDocuments();
const CAL_DOCS = DOCS.filter((d) => d.type === 'crop-calendar');

describe('calendars — the data is what USDA published', () => {
  it('holds the expected corpus', () => {
    expect(CROP_CALENDARS).toHaveLength(EXPECTED_ENTRIES);
    expect(cropsWithCalendars()).toHaveLength(EXPECTED_CROPS);
  });

  /**
   * Independent spot-checks against the published handbook. These are the
   * strongest guard in the suite: if the parser ever mis-attributes a row, at
   * least one of these known-correct values changes.
   */
  it('matches known published values exactly', () => {
    const iowaMaize = CROP_CALENDARS.find(
      (c) => c.cropRef === 'maize' && c.jurisdictionId === 'US-IA',
    )!;
    expect(iowaMaize.sowingWindow).toEqual({
      begin: 'Apr 19',
      mostActiveStart: 'Apr 25',
      mostActiveEnd: 'May 18',
      end: 'May 26',
    });

    const kansasWinterWheat = CROP_CALENDARS.find(
      (c) =>
        c.cropRef === 'wheat' &&
        c.seasonType === 'Winter wheat' &&
        c.jurisdictionId === 'US-KS',
    )!;
    expect(kansasWinterWheat.sowingWindow?.begin).toBe('Sep 10');
    expect(kansasWinterWheat.harvestWindow?.begin).toBe('Jun 15');
  });

  it('lists rice only in the six US rice-producing states', () => {
    // A parser that leaked rows from a neighbouring table would break this.
    const rice = CROP_CALENDARS.filter((c) => c.cropRef === 'rice');
    expect(rice.map((c) => c.jurisdictionId).sort()).toEqual([
      'US-AR',
      'US-CA',
      'US-LA',
      'US-MO',
      'US-MS',
      'US-TX',
    ]);
  });

  it('keeps winter and spring forms of a species separate', () => {
    const seasons = seasonsForCrop('wheat');
    expect(seasons).toContain('Winter wheat');
    expect(seasons).toContain('Spring wheat');
    // The classic conflation: an autumn sowing date on a spring crop.
    const spring = CROP_CALENDARS.filter(
      (c) => c.cropRef === 'wheat' && c.seasonType === 'Spring wheat',
    );
    expect(spring.length).toBeGreaterThan(0);
    for (const e of spring) {
      expect(e.sowingWindow?.begin, e.id).toMatch(/^(Mar|Apr|May|Jun)/);
    }
    const winter = CROP_CALENDARS.filter(
      (c) => c.cropRef === 'wheat' && c.seasonType === 'Winter wheat',
    );
    for (const e of winter) {
      expect(e.sowingWindow?.begin, e.id).toMatch(
        /^(Aug|Sep|Oct|Nov|Dec|Jan|Feb)/,
      );
    }
  });
});

describe('calendars — no fabricated precision or dangling references', () => {
  it('uses only month-day values, never a full calendar date', () => {
    // "2026-03-14" would imply a dated event; these are usual dates.
    for (const e of CROP_CALENDARS) {
      for (const w of [e.sowingWindow, e.harvestWindow]) {
        for (const v of Object.values(w ?? {})) {
          expect(v, e.id).toMatch(/^[A-Z][a-z]{2} \d{1,2}$/);
        }
      }
    }
  });

  it('resolves every crop reference to a published crop', () => {
    const slugs = new Set(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map(
        (c) => c.slug,
      ),
    );
    for (const e of CROP_CALENDARS) {
      expect(slugs.has(e.cropRef), `${e.id} → ${e.cropRef}`).toBe(true);
    }
  });

  it('resolves every jurisdiction to a canonical jurisdiction', () => {
    const ids = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
    for (const e of CROP_CALENDARS) {
      expect(ids.has(e.jurisdictionId!), `${e.id} → ${e.jurisdictionId}`).toBe(
        true,
      );
    }
  });

  it('cites a source on every timing claim', () => {
    for (const e of CROP_CALENDARS) {
      expect(e.sourceReferences.length, e.id).toBeGreaterThan(0);
      for (const sid of e.sourceReferences)
        expect(SOURCE_MAP.has(sid), sid).toBe(true);
    }
  });

  it('records the source vintage on every entry', () => {
    // The handbook's latest edition is 2010; hiding that would misrepresent
    // how current the data is.
    for (const e of CROP_CALENDARS) {
      expect(e.confidence, e.id).toBe('moderate');
      expect(e.limitations.join(' '), e.id).toContain('2010');
    }
    expect(CALENDAR_CONFIDENCES).toContain('moderate');
  });

  it('never holds two records for the same crop, season and jurisdiction', () => {
    const keys = CROP_CALENDARS.map(
      (e) => `${e.cropRef}|${e.seasonType ?? ''}|${e.jurisdictionId}`,
    );
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe('calendars — pages are per crop, not per crop×jurisdiction', () => {
  it('creates one route per crop plus the hub, not 172 routes', () => {
    const paths = allRoutes().map((r) => r.path);
    const detail = paths.filter((p) => /^\/crop-calendars\/.+/.test(p));
    expect(detail).toHaveLength(EXPECTED_CROPS);
    expect(detail.length).toBeLessThan(CROP_CALENDARS.length);
    expect(paths).toContain(CALENDARS_HUB_PATH);
  });

  it('indexes one search document per crop, not per record', () => {
    expect(CAL_DOCS).toHaveLength(EXPECTED_CROPS);
    const routes = new Set(allRoutes().map((r) => r.path));
    for (const d of CAL_DOCS) expect(routes.has(d.route), d.id).toBe(true);
  });

  it('carries jurisdiction names in the search document so "wheat Kansas" reaches it', () => {
    const wheat = CAL_DOCS.find((d) => d.id === 'calendar:wheat')!;
    expect(wheat.names).toContain('Kansas');
    expect(wheat.names).toContain('Winter wheat');
  });

  it('formats a window as published, with the most-active range', () => {
    expect(
      formatWindow({
        begin: 'Apr 19',
        mostActiveStart: 'Apr 25',
        mostActiveEnd: 'May 18',
        end: 'May 26',
      }),
    ).toBe('Apr 19 – May 26 (most active Apr 25 – May 18)');
    expect(formatWindow(undefined)).toBeUndefined();
  });

  it('gives every crop page real entries to show', () => {
    for (const crop of cropsWithCalendars()) {
      expect(calendarsForCrop(crop).length, crop).toBeGreaterThan(0);
      expect(cropCalendarPath(crop)).toBe(`/crop-calendars/${crop}`);
    }
  });
});
