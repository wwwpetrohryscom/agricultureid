/**
 * Reading the committed snapshots and running the registered comparisons.
 *
 * File reads happen here and nowhere else, so `diff.ts` stays pure and can be
 * tested without a filesystem. Comparisons are the ones declared in the
 * contract module — never "whatever two files sort next to each other".
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  FRESHNESS_CONTRACT_MAP,
  SNAPSHOT_COMPARISONS,
  type FreshnessContract,
} from './contracts';
import { diffSemantic, diffSource, type NormalizedSnapshot } from './diff';
import { toCandidates } from './candidates';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';
import type {
  ChangeCandidate,
  SemanticDiff,
  SourceDiff,
  SourceSnapshotDescriptor,
} from '@/types/freshness';

const ROOT = process.cwd();

export function descriptor(id: string): SourceSnapshotDescriptor | undefined {
  return SOURCE_SNAPSHOTS.find((s) => s.id === id);
}

export function loadSnapshot(
  id: string,
  contract: FreshnessContract,
): NormalizedSnapshot {
  const d = descriptor(id);
  if (!d) throw new Error(`no snapshot descriptor for "${id}"`);
  if (!d.payloadPath)
    throw new Error(`snapshot "${id}" declares no payload to compare`);
  const raw = JSON.parse(
    readFileSync(join(ROOT, d.payloadPath), 'utf8'),
  ) as Record<string, unknown>;
  const rows = raw[contract.rowsField];
  if (!Array.isArray(rows))
    throw new Error(
      `snapshot "${id}" has no "${contract.rowsField}" array to compare`,
    );
  return {
    snapshotId: id,
    checksum: d.checksum,
    byteLength: d.byteLength,
    sourceReleaseId: d.sourceReleaseId,
    parserVersion: d.parserVersion,
    normalizationVersion: d.normalizationVersion,
    rows: rows as Record<string, unknown>[],
  };
}

export interface ComparisonResult {
  contract: FreshnessContract;
  source: SourceDiff;
  semantic: SemanticDiff;
  candidates: ChangeCandidate[];
}

export function runComparisons(): ComparisonResult[] {
  return SNAPSHOT_COMPARISONS.map((c) => {
    const contract = FRESHNESS_CONTRACT_MAP.get(c.contractId);
    if (!contract)
      throw new Error(`comparison names unknown contract "${c.contractId}"`);
    const from = loadSnapshot(c.fromSnapshotId, contract);
    const to = loadSnapshot(c.toSnapshotId, contract);
    const source = diffSource(from, to, contract);
    const semantic = diffSemantic(from, to, contract);
    return {
      contract,
      source,
      semantic,
      candidates: toCandidates(semantic, source, contract),
    };
  });
}
