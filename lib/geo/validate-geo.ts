import { SOURCES } from '@/data/sources';
import {
  INDICATORS,
  INDICATOR_BY_ID,
  INDICATOR_BY_SLUG,
} from '@/data/geo/indicators';
import { REGIONS } from '@/data/geo/wb-regions';
import { countryProfiles } from '@/data/geo/profiles';
import { GEO_FORMULAS } from '@/lib/geo/derived';
import {
  allSnapshots,
  checksumValid,
  countryMeta,
  COUNTRY_META,
} from '@/lib/geo/snapshots';
import { resolveRef } from '@/lib/content/registry';

export interface GeoIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const ISO3 = /^[A-Z]{3}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Phase 3B geographic-data validation (3B.10). */
export function geoIssues(): GeoIssue[] {
  const out: GeoIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });
  const warn = (code: string, message: string, where?: string) =>
    out.push({ level: 'warning', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));
  const knownIso3 = new Set(COUNTRY_META.map((c) => c.iso3));

  // Indicators
  const indSlugs = new Set<string>();
  for (const ind of INDICATORS) {
    const w = `indicator:${ind.id}`;
    if (!ind.unit?.trim())
      err('indicator-no-unit', 'Indicator missing unit', w);
    if (!ind.sourceId || !sourceIds.has(ind.sourceId))
      err(
        'indicator-bad-source',
        `Indicator source "${ind.sourceId}" does not resolve`,
        w,
      );
    if (!SLUG.test(ind.slug))
      err('indicator-bad-slug', `Indicator slug "${ind.slug}" invalid`, w);
    if (indSlugs.has(ind.slug))
      err('indicator-dup-slug', `Duplicate indicator slug "${ind.slug}"`, w);
    indSlugs.add(ind.slug);
  }

  // Snapshots (malformed metadata, checksum, dup keys, unknown codes, unit match)
  for (const snap of allSnapshots()) {
    const w = `dataset:${snap.snapshotId}`;
    if (!snap.datasetVersion)
      err('snapshot-no-version', 'Snapshot missing dataset version', w);
    if (!snap.retrievedAt)
      err('snapshot-no-retrieved', 'Snapshot missing retrieval date', w);
    if (!snap.unit) err('snapshot-no-unit', 'Snapshot missing unit', w);
    if (!snap.license)
      err('snapshot-no-license', 'Snapshot missing license', w);
    if (snap.rowCount !== snap.rows.length)
      err(
        'snapshot-rowcount',
        `rowCount ${snap.rowCount} ≠ rows ${snap.rows.length}`,
        w,
      );
    if (!checksumValid(snap))
      err('snapshot-checksum', 'Snapshot checksum does not verify', w);
    const ind = INDICATOR_BY_ID.get(snap.indicatorId);
    if (!ind) {
      err(
        'snapshot-unknown-indicator',
        `Snapshot indicator ${snap.indicatorId} not in registry`,
        w,
      );
    } else if (ind.unit !== snap.unit) {
      err(
        'snapshot-unit-mismatch',
        `Snapshot unit "${snap.unit}" ≠ indicator unit "${ind.unit}"`,
        w,
      );
    }
    const seen = new Set<string>();
    let unknownCodes = 0;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const r of snap.rows) {
      if (r.year == null) err('stat-no-year', 'Observation missing year', w);
      if (typeof r.value !== 'number' || Number.isNaN(r.value))
        err('stat-bad-value', `Non-numeric value for ${r.iso3} ${r.year}`, w);
      if (!knownIso3.has(r.iso3)) unknownCodes++;
      const key = `${r.iso3}:${r.year}`;
      if (seen.has(key))
        err(
          'stat-duplicate',
          `Duplicate ${r.iso3}/${r.year} in ${snap.indicatorId}`,
          w,
        );
      seen.add(key);
      if (r.year < minY) minY = r.year;
      if (r.year > maxY) maxY = r.year;
    }
    if (unknownCodes > 0)
      warn(
        'stat-unknown-country',
        `${unknownCodes} rows use a code not in country metadata`,
        w,
      );
    if (
      snap.coveredYears.length === 2 &&
      (snap.coveredYears[0] !== minY || snap.coveredYears[1] !== maxY)
    )
      warn(
        'snapshot-year-range',
        `coveredYears ${snap.coveredYears.join('–')} ≠ actual ${minY}–${maxY}`,
        w,
      );
  }

  // Derived formulas must be well-formed and reference known indicators.
  for (const f of GEO_FORMULAS) {
    const w = `formula:${f.formulaId}`;
    if (!f.formulaVersion || !f.calcVersion)
      err('formula-no-version', 'Derived formula missing version', w);
    for (const id of f.inputIndicators)
      if (!INDICATOR_BY_ID.has(id))
        err(
          'formula-bad-input',
          `Formula input ${id} not a known indicator`,
          w,
        );
    if (!f.limitations?.trim())
      err('formula-no-limitations', 'Formula missing limitations', w);
  }

  // Country profiles
  const regionNames = new Set(REGIONS.map((r) => r.name));
  const slugs = new Set<string>();
  const codes = new Set<string>();
  for (const p of countryProfiles) {
    const w = `country:${p.slug}`;
    if (!SLUG.test(p.slug))
      err('profile-bad-slug', `Profile slug "${p.slug}" invalid`, w);
    if (slugs.has(p.slug))
      err('profile-dup-slug', `Duplicate profile slug "${p.slug}"`, w);
    slugs.add(p.slug);
    if (!ISO3.test(p.countryCode))
      err('profile-bad-code', `Bad ISO3 "${p.countryCode}"`, w);
    if (codes.has(p.countryCode))
      err('profile-dup-code', `Duplicate country code "${p.countryCode}"`, w);
    codes.add(p.countryCode);
    if (!countryMeta(p.countryCode))
      err(
        'profile-unknown-code',
        `Country code "${p.countryCode}" not in metadata`,
        w,
      );
    if (!regionNames.has(p.region))
      err(
        'profile-bad-region',
        `Region "${p.region}" is not a known World Bank region`,
        w,
      );
    // The profile region must match the authoritative metadata region (the
    // country-profile grouping and region pages depend on this consistency).
    const metaRegion = countryMeta(p.countryCode)?.region;
    if (metaRegion && metaRegion !== p.region)
      err(
        'profile-region-mismatch',
        `Profile region "${p.region}" ≠ metadata region "${metaRegion}"`,
        w,
      );
    if (!p.overview?.trim() || p.overview.length < 60)
      err('profile-thin', 'Profile overview too short', w);
    if (!p.keyLimitations?.length)
      err('profile-no-limitations', 'Profile missing limitations', w);
    if (!p.dominantCropSystems?.length)
      err('profile-no-systems', 'Profile missing crop systems', w);
    if (!p.sourceReferences?.length)
      err('profile-no-sources', 'Profile missing sources', w);
    for (const r of p.sourceReferences ?? [])
      if (!sourceIds.has(r.sourceId))
        err(
          'profile-bad-source',
          `Profile cites unknown source "${r.sourceId}"`,
          w,
        );
    for (const id of p.highlightIndicators ?? [])
      if (!INDICATOR_BY_ID.has(id))
        err('profile-bad-indicator', `Highlight indicator "${id}" unknown`, w);
    for (const c of p.connections ?? [])
      if (!resolveRef(c))
        err(
          'profile-bad-connection',
          `Connection ${c.type}:${c.slug} does not resolve`,
          w,
        );
    // Guard: no long digit runs in evergreen prose (volatile stats belong in
    // dated snapshots, not the overview). Years (4 digits) are allowed.
    const bigNumbers = p.overview.match(/\b\d{5,}\b|\b\d{1,3}(?:,\d{3})+\b/g);
    if (bigNumbers)
      warn(
        'profile-volatile-prose',
        `Overview embeds figures (${bigNumbers.join(', ')}) — prefer dated snapshots`,
        w,
      );
  }

  // Region slugs unique + resolvable indicator slugs used in routes
  const rSlugs = new Set<string>();
  for (const r of REGIONS) {
    if (rSlugs.has(r.slug))
      err(
        'region-dup-slug',
        `Duplicate region slug "${r.slug}"`,
        `region:${r.slug}`,
      );
    rSlugs.add(r.slug);
    if (!INDICATOR_BY_SLUG || INDICATOR_BY_SLUG.size === 0)
      err('indicator-registry-empty', 'Indicator registry is empty', 'geo');
  }

  return out;
}
