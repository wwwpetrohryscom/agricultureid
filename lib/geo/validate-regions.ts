import { REGIONS, ZONES } from '@/lib/geo/region-registry';
import { ZONE_BY_CODE } from '@/data/geo/zones';
import { getProfile } from '@/lib/geo/registry';
import { resolveRef } from '@/lib/content/registry';
import { SOURCES } from '@/data/sources';

export interface RegionIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_SUB = /^[A-Z]{2}-[A-Z0-9]{1,3}$/;
const ISO3 = /^[A-Z]{3}$/;
const GROUPS = new Set([
  'tropical',
  'arid',
  'temperate',
  'continental',
  'polar',
]);

/** Phase 4C — agroecological-zone + subnational-region integrity (5.5). */
export function regionIssues(): RegionIssue[] {
  const out: RegionIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));

  // Zones
  const zoneSlugs = new Set<string>();
  const zoneCodes = new Set<string>();
  for (const z of ZONES) {
    const w = `zone:${z.slug}`;
    if (!SLUG.test(z.slug))
      err('zone-bad-slug', `Bad zone slug "${z.slug}"`, w);
    if (zoneSlugs.has(z.slug)) err('zone-dup-slug', 'Duplicate zone slug', w);
    zoneSlugs.add(z.slug);
    if (zoneCodes.has(z.classification))
      err('zone-dup-code', 'Duplicate zone code', w);
    zoneCodes.add(z.classification);
    if (!GROUPS.has(z.group))
      err('zone-bad-group', `Bad group "${z.group}"`, w);
    if (!z.limitations?.length)
      err('zone-no-limits', 'Zone missing limitations', w);
    for (const r of z.sourceReferences)
      if (!sourceIds.has(r.sourceId))
        err('zone-bad-source', `Unknown source "${r.sourceId}"`, w);
  }

  // Regions
  const keys = new Set<string>();
  const ids = new Set<string>();
  for (const r of REGIONS) {
    const w = `region:${r.countrySlug}/${r.slug}`;
    if (!SLUG.test(r.slug)) err('region-bad-slug', `Bad slug "${r.slug}"`, w);
    const key = `${r.countrySlug}/${r.slug}`;
    if (keys.has(key)) err('region-dup', 'Duplicate region within country', w);
    keys.add(key);
    if (ids.has(r.regionId))
      err('region-dup-id', `Duplicate regionId "${r.regionId}"`, w);
    ids.add(r.regionId);
    if (!ISO3.test(r.countryCode))
      err('region-bad-country-code', `Bad ISO3 "${r.countryCode}"`, w);
    if (!getProfile(r.countrySlug))
      err(
        'region-no-parent',
        `Parent country "${r.countrySlug}" is not a published profile`,
        w,
      );
    if (!ISO_SUB.test(r.officialCode))
      err(
        'region-bad-official-code',
        `officialCode "${r.officialCode}" is not ISO 3166-2 form`,
        w,
      );
    for (const zc of r.agroecologicalZones)
      if (!ZONE_BY_CODE.has(zc))
        err('region-bad-zone', `Unknown Köppen zone "${zc}"`, w);
    if (!r.majorCropSystems?.length)
      err('region-no-crops', 'Missing major crop systems', w);
    if (!r.majorLivestockSystems?.length)
      err('region-no-livestock', 'Missing major livestock systems', w);
    if (!r.officialInstitutions?.length)
      err('region-no-institutions', 'Missing institutions', w);
    if (!r.limitations?.length)
      err('region-no-limits', 'Missing limitations', w);
    if (!r.sourceReferences?.length)
      err('region-no-sources', 'Missing sources', w);
    for (const s of r.sourceReferences ?? [])
      if (!sourceIds.has(s.sourceId))
        err('region-bad-source', `Unknown source "${s.sourceId}"`, w);
    // A subnational statistic, if present, must carry year/unit/source.
    if (r.statistic) {
      const st = r.statistic;
      if (!st.year || !st.unit?.trim() || !st.value?.trim())
        err('region-stat-incomplete', 'Statistic missing year/unit/value', w);
      if (!sourceIds.has(st.sourceId))
        err(
          'region-stat-bad-source',
          `Statistic cites unknown source "${st.sourceId}"`,
          w,
        );
    }
    for (const c of r.connections ?? [])
      if (!resolveRef(c))
        err(
          'region-bad-connection',
          `Connection ${c.type}:${c.slug} does not resolve`,
          w,
        );
  }

  return out;
}
