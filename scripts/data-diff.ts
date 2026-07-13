/**
 * Phase 4A — snapshot diff report. Compares the two most-recent version files
 * for each indicator (or reports a baseline when only one exists). Deterministic;
 * no timestamps in output. Run: npm run data:diff
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { diffSnapshots } from '../lib/data-ops/diff';
import type { DatasetSnapshot } from '../types/geo';

const DIR = join(process.cwd(), 'data', 'snapshots');

function versionsByIndicator(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const f of readdirSync(DIR)) {
    const m = f.match(/^worldbank__(.+)__(.+)\.json$/);
    if (!m) continue;
    const [, ind] = m;
    map.set(ind!, [...(map.get(ind!) ?? []), f].sort());
  }
  return map;
}

function load(f: string): DatasetSnapshot {
  return JSON.parse(readFileSync(join(DIR, f), 'utf8')) as DatasetSnapshot;
}

function main() {
  console.log('\nAgricultureID — dataset snapshot diff\n');
  let baselines = 0;
  let changed = 0;
  for (const [ind, files] of [...versionsByIndicator()].sort()) {
    if (files.length < 2) {
      baselines++;
      continue;
    }
    const prev = load(files[files.length - 2]!);
    const next = load(files[files.length - 1]!);
    const d = diffSnapshots(prev, next);
    changed++;
    console.log(`  ${ind}: ${d.fromVersion} → ${d.toVersion}`);
    console.log(
      `    +${d.added} added · ~${d.revised} revised · -${d.removed} removed · Δrows ${d.rowCountDelta}`,
    );
    if (d.unitChanged) console.log(`    ⚠ unit changed`);
    if (d.jurisdictionsAdded.length)
      console.log(`    + jurisdictions: ${d.jurisdictionsAdded.join(', ')}`);
    if (d.jurisdictionsRemoved.length)
      console.log(`    - jurisdictions: ${d.jurisdictionsRemoved.join(', ')}`);
    for (const r of d.sampleRevisions.slice(0, 5))
      console.log(
        `      ${r.iso3} ${r.year}: ${r.from} → ${r.to} (${r.pctChange.toFixed(1)}%)`,
      );
  }
  console.log(
    `\n  ${changed} indicator(s) with a prior version diffed; ${baselines} at baseline (single version).\n`,
  );
}

main();
