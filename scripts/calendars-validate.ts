/**
 * Deterministic gate for the crop-calendar corpus. Offline.
 *
 * What it protects against, in order of how badly each would mislead:
 *
 *  - a crop reference that does not resolve to a published crop, or a
 *    jurisdiction that does not resolve — a calendar attached to nothing;
 *  - an impossible date (Feb 31, month 13) or a malformed window;
 *  - a window whose parts are out of order within a single season;
 *  - a duplicate crop + season + jurisdiction record, which would let two
 *    different date sets claim the same fact;
 *  - a timing claim with no source, which is the failure mode this whole layer
 *    exists to prevent.
 *
 * Note on ordering: winter cereals sow in autumn and harvest the following
 * summer, so a SOWING window and a HARVEST window may legitimately be in
 * "reverse" order relative to each other. Ordering is therefore checked WITHIN
 * a window only, and a window that wraps the year end is permitted explicitly.
 */
import { CROP_CALENDARS } from '../data/calendars';
import { CALENDAR_CONFIDENCES, PRODUCTION_SYSTEMS } from '../types/calendar';
import type { SeasonalWindow } from '../types/calendar';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';
import { getProfileByCode } from '../lib/geo/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const CROP_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const JURISDICTION_IDS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const DAYS_IN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Parse "Apr 19" into a day-of-year ordinal, or null if malformed. */
function ordinal(v: string): number | null {
  const m = /^([A-Z][a-z]{2})\s+(\d{1,2})$/.exec(v.trim());
  if (!m) return null;
  const mi = MONTHS.indexOf(m[1] ?? '');
  const day = Number(m[2]);
  const max = DAYS_IN[mi] ?? 0;
  if (mi < 0 || day < 1 || day > max) return null;
  return mi * 31 + day;
}

function checkWindow(at: string, label: string, w?: SeasonalWindow) {
  if (!w) return;
  const parts: [string, string | undefined][] = [
    ['begin', w.begin],
    ['mostActiveStart', w.mostActiveStart],
    ['mostActiveEnd', w.mostActiveEnd],
    ['end', w.end],
  ];
  const ords: number[] = [];
  for (const [name, v] of parts) {
    if (v === undefined) continue;
    const o = ordinal(v);
    if (o === null) {
      fail(`${at}: ${label}.${name} "${v}" is not a valid month-day value`);
      continue;
    }
    ords.push(o);
  }
  // Within one window, values must be non-decreasing UNLESS the window wraps
  // the year end exactly once (a legitimate autumn-to-winter sowing window).
  let drops = 0;
  for (let i = 1; i < ords.length; i++)
    if ((ords[i] ?? 0) < (ords[i - 1] ?? 0)) drops++;
  if (drops > 1) {
    fail(
      `${at}: ${label} dates are out of order and do not describe a single window`,
    );
  }
}

const seen = new Set<string>();
const ids = new Set<string>();

for (const e of CROP_CALENDARS) {
  const at = `calendar "${e.id}"`;

  if (ids.has(e.id)) fail(`${at}: duplicate id`);
  ids.add(e.id);

  if (!CROP_SLUGS.has(e.cropRef)) {
    fail(`${at}: cropRef "${e.cropRef}" does not resolve to a published crop`);
  }
  if (!getProfileByCode(e.countryCode)) {
    fail(
      `${at}: countryCode "${e.countryCode}" does not resolve in the geo layer`,
    );
  }
  if (e.jurisdictionId && !JURISDICTION_IDS.has(e.jurisdictionId)) {
    fail(`${at}: jurisdictionId "${e.jurisdictionId}" does not resolve`);
  }
  if (!e.jurisdictionName.trim()) fail(`${at}: empty jurisdictionName`);

  // One record per crop + season + jurisdiction. Two records for the same
  // combination would let contradictory dates coexist.
  const key = `${e.cropRef}|${e.seasonType ?? ''}|${e.jurisdictionId ?? e.jurisdictionName}`;
  if (seen.has(key))
    fail(`${at}: duplicate crop/season/jurisdiction combination`);
  seen.add(key);

  checkWindow(at, 'sowingWindow', e.sowingWindow);
  checkWindow(at, 'harvestWindow', e.harvestWindow);
  if (!e.sowingWindow && !e.harvestWindow) {
    fail(
      `${at}: has neither a sowing nor a harvest window — nothing to publish`,
    );
  }

  if (!(CALENDAR_CONFIDENCES as readonly string[]).includes(e.confidence)) {
    fail(`${at}: unknown confidence "${e.confidence}"`);
  }
  if (
    e.productionSystem &&
    !(PRODUCTION_SYSTEMS as readonly string[]).includes(e.productionSystem)
  ) {
    fail(`${at}: unknown productionSystem`);
  }

  if (e.sourceReferences.length === 0) {
    fail(`${at}: a timing claim without a source may never be published`);
  }
  for (const sid of e.sourceReferences) {
    if (!SOURCE_MAP.has(sid)) fail(`${at}: unknown sourceId "${sid}"`);
  }
  if (!ISO_DATE.test(e.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt is not ISO yyyy-mm-dd`);
  if (e.limitations.length === 0) fail(`${at}: limitations are required`);
}

if (CROP_CALENDARS.length === 0) fail('calendar corpus is empty');

const crops = new Set(CROP_CALENDARS.map((c) => c.cropRef));
console.log('\nCrop calendar validation\n');
console.log(`  Calendar entries:         ${CROP_CALENDARS.length}`);
console.log(`  Crops:                    ${crops.size}`);
console.log(
  `  Jurisdictions:            ${new Set(CROP_CALENDARS.map((c) => c.jurisdictionId)).size}`,
);
console.log(
  `  Seasons distinguished:    ${new Set(CROP_CALENDARS.map((c) => c.seasonType).filter(Boolean)).size}`,
);
console.log(
  `  With sowing window:       ${CROP_CALENDARS.filter((c) => c.sowingWindow).length}`,
);
console.log(
  `  With harvest window:      ${CROP_CALENDARS.filter((c) => c.harvestWindow).length}`,
);
for (const c of CALENDAR_CONFIDENCES) {
  const n = CROP_CALENDARS.filter((x) => x.confidence === c).length;
  if (n) console.log(`  Confidence ${c.padEnd(14)}${n}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Calendar validation passed.\n');
