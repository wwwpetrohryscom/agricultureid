import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCES } from '@/data/sources';
import { evidenceTier } from '@/lib/sources/evidence';
import { UNRESOLVED_ISSUES } from '@/data/unresolved-issues';
import { DATASETS } from '@/lib/data-ops/registry';
import { FORMULAS } from '@/lib/tools/formulas';
import type {
  HealthStatus,
  ProvenanceHealthEntry,
  ProvenanceHealthReport,
} from '@/types/data-ops';

/**
 * Offline provenance-health report (Phase 4A). Classifies each subject with a
 * SET of statuses — a complex evidence state is never reduced to one fabricated
 * score. Deterministic: the review horizon is an explicit parameter, not
 * Date.now(); reports only change when the underlying evidence changes.
 */

const EMPTY_BY_STATUS: Record<HealthStatus, number> = {
  healthy: 0,
  reviewDue: 0,
  sourceWeak: 0,
  sourceUnavailable: 0,
  provenanceIncomplete: 0,
  unresolved: 0,
  deprecated: 0,
};

function daysBetween(a: string, b: string): number {
  const da = Date.parse(a);
  const db = Date.parse(b);
  if (Number.isNaN(da) || Number.isNaN(db)) return 0;
  return Math.round((db - da) / 86_400_000);
}

export function provenanceHealth(
  referenceDate = '2026-07-13',
  reviewHorizonDays = 365,
): ProvenanceHealthReport {
  const entries: ProvenanceHealthEntry[] = [];

  const unresolvedSubjects = new Set(
    UNRESOLVED_ISSUES.filter((i) => i.status !== 'resolved').flatMap(
      (i) =>
        i.entity.match(
          /\b(crop|livestock|plant-disease|pest|cultivar|breed):[a-z0-9-]+/gi,
        ) ?? [],
    ),
  );

  // Content
  for (const item of PUBLISHED_CONTENT) {
    const subject = `${item.contentType}:${item.slug}`;
    const statuses: HealthStatus[] = [];
    const notes: string[] = [];

    const bestTier = item.sourceReferences.length
      ? Math.min(...item.sourceReferences.map((r) => evidenceTier(r.sourceId)))
      : 3;
    if (bestTier >= 3) {
      statuses.push('sourceWeak');
      notes.push('Best available source is Tier 3 (secondary reference).');
    }

    const claims = item.claims ?? [];
    const quantWithoutCitation = claims.filter(
      (c) => (c.quantitative || c.safetyCritical) && c.citations.length === 0,
    );
    if (quantWithoutCitation.length) {
      statuses.push('provenanceIncomplete');
      notes.push(
        `${quantWithoutCitation.length} quantitative/safety claim(s) lack citations.`,
      );
    }

    if (
      item.reviewedAt &&
      daysBetween(item.reviewedAt, referenceDate) > reviewHorizonDays
    ) {
      statuses.push('reviewDue');
      notes.push(
        `Last reviewed ${item.reviewedAt} (> ${reviewHorizonDays} days ago).`,
      );
    }

    if (unresolvedSubjects.has(subject)) {
      statuses.push('unresolved');
      notes.push(
        'Referenced by an open/mitigated entry in the unresolved-issues registry.',
      );
    }

    if (statuses.length === 0) statuses.push('healthy');
    entries.push({ subject, kind: 'content', statuses, notes });
  }

  // Datasets
  for (const d of DATASETS) {
    const statuses: HealthStatus[] = [];
    const notes: string[] = [];
    if (
      d.publicationStatus === 'deprecated' ||
      d.publicationStatus === 'withdrawn'
    ) {
      statuses.push('deprecated');
    }
    if (daysBetween(d.retrievalDate, referenceDate) > reviewHorizonDays) {
      statuses.push('reviewDue');
      notes.push(
        `Snapshot retrieved ${d.retrievalDate} (> ${reviewHorizonDays} days ago) — check for a newer release.`,
      );
    }
    if (statuses.length === 0) statuses.push('healthy');
    entries.push({
      subject: `dataset:${d.datasetId}`,
      kind: 'dataset',
      statuses,
      notes,
    });
  }

  // Formulas
  for (const f of FORMULAS) {
    const statuses: HealthStatus[] = [];
    const weak = f.sourceIds.every((id) => evidenceTier(id) >= 3);
    if (weak && f.sourceIds.length) {
      statuses.push('sourceWeak');
    }
    if (statuses.length === 0) statuses.push('healthy');
    entries.push({
      subject: `formula:${f.formulaId}`,
      kind: 'formula',
      statuses,
      notes: [],
    });
  }

  // Sources
  for (const s of SOURCES) {
    const statuses: HealthStatus[] =
      evidenceTier(s.id) >= 3 ? ['sourceWeak'] : ['healthy'];
    entries.push({
      subject: `source:${s.id}`,
      kind: 'source',
      statuses,
      notes: [],
    });
  }

  const byStatus = { ...EMPTY_BY_STATUS };
  for (const e of entries) for (const s of e.statuses) byStatus[s]++;

  return {
    generatedFrom: `main content + ${DATASETS.length} datasets + ${FORMULAS.length} formulas + ${SOURCES.length} sources`,
    totals: { subjects: entries.length, byStatus },
    entries,
  };
}

/** Subjects needing attention (any non-healthy status). */
export function reviewQueue(
  report = provenanceHealth(),
): ProvenanceHealthEntry[] {
  return report.entries.filter(
    (e) => !e.statuses.every((s) => s === 'healthy'),
  );
}
