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
import { NAME_CROSSWALK } from '../data/crop-identity/name-crosswalk';
import { FAO_ORPHAN_RESEARCH } from '../data/fao-orphans';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { getProfileByCode } from '../lib/geo/registry';
import {
  FAO_CALENDAR_ENTRIES,
  FAO_CALENDAR_SNAPSHOT,
  FAO_COUNTRIES,
  FAO_CROP_MATCHES,
  FAO_CROP_REFUSALS,
  FAO_NAME_CENSUS,
  FAO_COUNTRIES_NOT_INGESTED,
  FAO_MATCH_ROUTES,
  FAO_REFUSAL_REASONS,
} from '../data/calendars/fao';

const FAO_COUNTRY_CODES = new Set(FAO_COUNTRIES.map((c) => c.countryCode));

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
  /*
   * A country code has to be a country, not a country this corpus publishes a
   * page about. The geo layer holds forty profiles; the FAO calendar covers
   * fifty-seven countries and forty-seven of them have no profile, which is
   * the point of the dataset rather than a defect in it. So a code passes if
   * the geo layer knows it OR the FAO country register declares it, and the
   * register is itself reconciled against the snapshot below.
   */
  if (
    !getProfileByCode(e.countryCode) &&
    !FAO_COUNTRY_CODES.has(e.countryCode)
  ) {
    fail(
      `${at}: countryCode "${e.countryCode}" is in neither the geo layer nor the declared FAO country register`,
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

/* -- the FAO matching contract -------------------------------------------- */
/**
 * The ingestion's claim is that it accepted a hundred and six FAO crop names,
 * refused a hundred and four with a reason, and matched nothing by guesswork.
 * These rules put that against the corpus rather than reading it back.
 *
 * The one that carries the weight is the ambiguity check. The corpus already
 * records which common names name more than one crop, and the matcher was told
 * to obey that register rather than form its own opinion — so a refusal for
 * ambiguity must be corroborated by an entry in the crosswalk, and a match on a
 * name the crosswalk calls ambiguous is only allowed where the crosswalk sends
 * the reader to a concept page that covers the whole group.
 */
{
  const cropSlugs = new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map(
      (c) => c.slug,
    ),
  );
  const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));
  const normName = (x: string) =>
    x
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  const ambiguous = new Map(
    NAME_CROSSWALK.filter((n) => n.kind === 'ambiguous-common-name').map(
      (n) => [normName(n.name), n.resolvesTo?.slug],
    ),
  );

  /*
   * The matcher's contract, rebuilt from the live corpus.
   *
   * Title and alternative name are indexed separately because the contract
   * treats them differently: a title match is decisive, an alias match only
   * when exactly one crop carries the alias. Collapsing them into one index
   * would lose that distinction and turn a refusal for shared-alias ambiguity
   * into a false positive.
   */
  const CROP_TITLE_INDEX = new Map<string, string[]>();
  const CROP_ALIAS_INDEX = new Map<string, string[]>();
  for (const c of PUBLISHED_CONTENT) {
    if (c.contentType !== 'crop') continue;
    const push = (m: Map<string, string[]>, key: string) =>
      m.set(normName(key), [...(m.get(normName(key)) ?? []), c.slug]);
    push(CROP_TITLE_INDEX, c.title);
    for (const a of (c as { alternativeNames?: string[] }).alternativeNames ??
      [])
      push(CROP_ALIAS_INDEX, a);
  }

  const ORPHAN_BY_NAME = new Map(
    FAO_ORPHAN_RESEARCH.map((o) => [o.faoName, o]),
  );

  const namesSeen = new Set<string>();
  for (const m of FAO_CROP_MATCHES) {
    const at = `FAO match "${m.faoName}"`;
    if (namesSeen.has(m.faoName)) fail(`${at}: listed twice`);
    namesSeen.add(m.faoName);
    if (!FAO_MATCH_ROUTES.includes(m.route))
      fail(`${at}: route "${m.route}" is not in the vocabulary`);
    if (!cropSlugs.has(m.cropRef))
      fail(`${at}: resolves to "${m.cropRef}", which is not a published crop`);
    const isConcept = conceptSlugs.has(m.cropRef);
    /*
     * A concept page that is also a species page.
     *
     * The rule was written when every concept was a pure umbrella, and two of
     * them are not: `wheat` carries the wheat concept AND is Triticum
     * aestivum, `millet` carries the millet concept AND is Cenchrus
     * americanus. FAO distinguishes "Wheat" from "Wheat, bread" and the
     * corpus has to as well — the first is the group, the second is that
     * page's own species, and calling the second group-level would be the same
     * lie pointed the other way.
     *
     * The exception is not "it looks specific". It requires a research record
     * that reached MAP_TO_EXISTING_CROP, naming exactly one botanical
     * candidate, whose binomial IS the destination page's accepted name.
     * Anything less specific — a MAP_TO_EXISTING_CONCEPT outcome, several
     * candidates, a candidate that is some other species of the group — stays
     * CONCEPT_LEVEL.
     */
    if (m.granularity === 'EXACT_ENTITY' && isConcept) {
      const o = ORPHAN_BY_NAME.get(m.faoName);
      const accepted = IDENTITY_BY_SLUG.get(m.cropRef)?.acceptedScientificName;
      const binomial = (x: string) =>
        normName(x.split(' ').slice(0, 2).join(' '));
      const exactBySpecies =
        o?.outcome === 'MAP_TO_EXISTING_CROP' &&
        o.botanicalCandidates.length === 1 &&
        !!accepted &&
        binomial(o.botanicalCandidates[0]!) === normName(accepted);
      if (!exactBySpecies)
        fail(
          `${at}: is recorded as exact and "${m.cropRef}" is a declared concept — a calendar reached through it is about the group unless the research names that page's own species`,
        );
    }
    if (m.granularity === 'CONCEPT_LEVEL' && !isConcept)
      fail(
        `${at}: is recorded at concept level and "${m.cropRef}" is not a declared concept`,
      );
    const amb = ambiguous.get(normName(m.faoName));
    if (amb !== undefined) {
      if (!isConcept)
        fail(
          `${at}: matches a name the corpus records as ambiguous and resolves to "${m.cropRef}", which is not a concept — the register says this name does not identify one crop`,
        );
      else if (amb !== m.cropRef)
        fail(
          `${at}: matches an ambiguous name the crosswalk sends to "${amb}" and resolves it to "${m.cropRef}"`,
        );
    }
  }
  for (const r of FAO_CROP_REFUSALS) {
    const at = `FAO refusal "${r.faoName}"`;
    if (namesSeen.has(r.faoName)) fail(`${at}: is both matched and refused`);
    namesSeen.add(r.faoName);
    if (!FAO_REFUSAL_REASONS.includes(r.reason))
      fail(`${at}: reason "${r.reason}" is not in the vocabulary`);
    if (
      r.reason === 'AMBIGUOUS_COMMON_NAME' &&
      !ambiguous.has(normName(r.faoName))
    )
      fail(
        `${at}: refused as ambiguous and the crosswalk holds no ambiguous-common-name entry for it — the refusal is an opinion rather than a reading of the register`,
      );
    /*
     * A refusal that has stopped being true.
     *
     * "No crop in this corpus carries this name" is a statement about the
     * corpus on the day it was written, and every wave that publishes a crop
     * can falsify it. Wave 43 published citrus, mandarin and turnip; the FAO
     * dataset names all three; and all three sat in this list as
     * NO_CORPUS_MATCH with nothing looking, because the rules above check a
     * refusal for a reason in the vocabulary and never for whether the reason
     * still holds.
     *
     * The recomputation runs the matcher's own published contract — a title
     * match, or a single alternative-name match, and nothing else. It is not a
     * search: no fuzzy matching, no edit distance, no stemming. If that
     * contract now finds a crop, the refusal is stale and the entries it
     * withheld are owed to the corpus.
     */
    if (r.reason === 'NO_CORPUS_MATCH') {
      const n = normName(r.faoName);
      const byTitle = CROP_TITLE_INDEX.get(n) ?? [];
      const byAlias = CROP_ALIAS_INDEX.get(n) ?? [];
      if (byTitle.length)
        fail(
          `${at}: refused as reaching nothing, and crop "${byTitle[0]}" now carries that title`,
        );
      else if (byAlias.length === 1)
        fail(
          `${at}: refused as reaching nothing, and exactly one crop — "${byAlias[0]}" — now carries it as an alternative name`,
        );
    }
  }
  if (namesSeen.size !== FAO_CALENDAR_SNAPSHOT.faoCropNames)
    fail(
      `FAO contract: accounts for ${namesSeen.size} crop names and the snapshot records ${FAO_CALENDAR_SNAPSHOT.faoCropNames}`,
    );

  /*
   * A gap that is declared is a gap that can be closed. An undeclared one is
   * indistinguishable from the source not having the data.
   */
  {
    const byName = new Map(
      FAO_COUNTRIES.map((c) => [c.faoName, c.countryCode]),
    );
    const excludedCodes = new Set<string>();
    for (const x of FAO_COUNTRIES_NOT_INGESTED) {
      const code = byName.get(x.faoName);
      if (!code)
        fail(
          `FAO exclusion "${x.faoName}": names a country the snapshot does not contain`,
        );
      else excludedCodes.add(code);
      if (!x.reason?.trim() || x.reason.length < 40)
        fail(`FAO exclusion "${x.faoName}": gives no reason`);
    }
    for (const e of FAO_CALENDAR_ENTRIES)
      if (excludedCodes.has(e.countryCode))
        fail(
          `FAO entry "${e.id}": names country "${e.countryCode}", which is recorded as not ingested`,
        );
  }

  const declaredCountries = new Set(FAO_COUNTRIES.map((c) => c.countryCode));
  if (declaredCountries.size !== FAO_COUNTRIES.length)
    fail('FAO country register: a country code is declared twice');
  if (FAO_COUNTRIES.length !== FAO_CALENDAR_SNAPSHOT.countries)
    fail(
      `FAO country register: declares ${FAO_COUNTRIES.length} countries and the snapshot records ${FAO_CALENDAR_SNAPSHOT.countries}`,
    );
  for (const c of FAO_COUNTRIES)
    if (!/^[A-Z]{3}$/.test(c.countryCode))
      fail(
        `FAO country "${c.faoName}": "${c.countryCode}" is not an alpha-3 code`,
      );

  /*
   * Each entry carries the vintage of the rows it came from.
   *
   * The FAO file stamps every row with its own `lastUpdated`, and zones are
   * revised independently: the dates in this dataset span 2020-06-09 to
   * 2025-08-19. The corpus records that per entry rather than stamping
   * everything with the day it fetched the file, because a retrieval date
   * tells a reader when we looked and nothing about when the source last
   * checked. A Wave 44 injection replaced one entry's vintage with the
   * retrieval date and every gate passed.
   *
   * The check is against the census, which records the span of `lastUpdated`
   * values per FAO label. An entry stamped with anything outside its own
   * label's span did not come from those rows.
   */
  {
    const span = new Map(
      FAO_NAME_CENSUS.map((c) => [c.faoName, [c.firstUpdated, c.lastUpdated]]),
    );
    for (const e of FAO_CALENDAR_ENTRIES) {
      const label = (e.seasonType ?? '').split(' \u2014 season ')[0]!;
      const s = span.get(label);
      if (!s) {
        fail(
          `FAO entry "${e.id}": season "${e.seasonType}" does not name a label the source census contains`,
        );
        continue;
      }
      if (e.lastVerifiedAt < s[0]! || e.lastVerifiedAt > s[1]!)
        fail(
          `FAO entry "${e.id}": is dated ${e.lastVerifiedAt} and the source's rows for "${label}" span ${s[0]} to ${s[1]} — an entry may not carry a date the rows it came from do not`,
        );
    }
  }

  /*
   * §19 — what a crop calendar is evidence OF.
   *
   * The source establishes that a national authority described a sowing or
   * harvest period in an agro-ecological zone. It does not establish area,
   * production, importance, native range, domestication or climate
   * suitability, and an article that cites it for one of those has used a
   * timing dataset as a significance dataset. The check is on the `citedFor`
   * string, which is where a page states what it took from a source.
   */
  {
    const TIMING =
      /sowing|harvest|season|window|calendar|period|planting|timing/i;
    const NOT_TIMING =
      /importance|significan|area|production|yield|origin|native|domesticat|suitab|rank|largest|leading/i;
    for (const c of PUBLISHED_CONTENT) {
      const refs = (
        c as { sourceReferences?: { sourceId: string; citedFor: string }[] }
      ).sourceReferences;
      for (const r of refs ?? []) {
        if (r.sourceId !== 'fao-crop-calendar') continue;
        if (NOT_TIMING.test(r.citedFor))
          fail(
            `${c.contentType} "${c.slug}": cites the FAO crop calendar for "${r.citedFor}" — the source records when a season runs and establishes nothing about importance, area, range or suitability`,
          );
        else if (!TIMING.test(r.citedFor))
          fail(
            `${c.contentType} "${c.slug}": cites the FAO crop calendar for "${r.citedFor}", which does not say it was cited for timing`,
          );
      }
    }
  }

  /* Every entry must trace to a match, and every match must produce entries. */
  const entryCrops = new Set(FAO_CALENDAR_ENTRIES.map((e) => e.cropRef));
  const matchCrops = new Set(FAO_CROP_MATCHES.map((m) => m.cropRef));
  for (const c of entryCrops)
    if (!matchCrops.has(c))
      fail(
        `FAO entries reach crop "${c}" and no recorded match resolves to it`,
      );
  for (const e of FAO_CALENDAR_ENTRIES) {
    if (!e.sourceReferences.includes('fao-crop-calendar'))
      fail(`FAO entry "${e.id}": does not cite the FAO crop calendar`);
    if (!declaredCountries.has(e.countryCode))
      fail(
        `FAO entry "${e.id}": country "${e.countryCode}" is not in the declared register`,
      );
  }
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Calendar validation passed.\n');
