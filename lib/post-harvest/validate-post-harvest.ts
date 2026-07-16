import { ALL_CONTENT, refKey, resolveRef } from '@/lib/content/registry';
import {
  ATTRIBUTE_CLASSES,
  DEFECT_CLASSES,
  MEASUREMENT_CLASSES,
  PROCESS_STAGES,
  QUALITY_DOMAINS,
  STORAGE_LIKE_CLASSES,
} from '@/types/post-harvest';
import type {
  CommodityContent,
  PostHarvestContent,
  PostHarvestDefectContent,
  QualityAttributeContent,
  QualityMeasurementContent,
} from '@/types/content';

export interface PostHarvestIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const ATTR = new Set<string>(ATTRIBUTE_CLASSES);
const DEFECT = new Set<string>(DEFECT_CLASSES);
const MEAS = new Set<string>(MEASUREMENT_CLASSES);
const DOMAINS = new Set<string>(QUALITY_DOMAINS);
const STAGES = new Set<string>(PROCESS_STAGES);
const STORAGE_LIKE = new Set<string>(STORAGE_LIKE_CLASSES);

/** A bare number with a unit — a value, not a unit label. */
const LOOKS_LIKE_A_VALUE = /\d/;

/**
 * Phase 5B — post-harvest quality, storage, defect, and measurement integrity.
 *
 * The rules that carry the weight: a storage edge must point at something a lot
 * is actually held in; an attribute must say what it is NOT an indicator of; a
 * defect must admit the limits of visual diagnosis; a measurement must say what
 * it measures and where it misleads; and no page may smuggle a universal
 * threshold in through a "typical units" field.
 */
export function postHarvestIssues(): PostHarvestIssue[] {
  const out: PostHarvestIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const processes = ALL_CONTENT.filter(
    (c): c is PostHarvestContent => c.contentType === 'post-harvest',
  );
  const attributes = ALL_CONTENT.filter(
    (c): c is QualityAttributeContent => c.contentType === 'quality-attribute',
  );
  const defects = ALL_CONTENT.filter(
    (c): c is PostHarvestDefectContent =>
      c.contentType === 'post-harvest-defect',
  );
  const measurements = ALL_CONTENT.filter(
    (c): c is QualityMeasurementContent =>
      c.contentType === 'quality-measurement',
  );
  const commodities = ALL_CONTENT.filter(
    (c): c is CommodityContent => c.contentType === 'commodity',
  );

  const phBySlug = new Map(processes.map((p) => [p.slug, p]));

  /* ---- Post-harvest processes & systems -------------------------------- */
  for (const p of processes) {
    const w = `post-harvest:${p.slug}`;
    if (p.processStage && !STAGES.has(p.processStage))
      err('ph-bad-stage', `Unknown processStage "${p.processStage}"`, w);

    // A storage/cooling system without its principle or its risks is a shell.
    if (p.postHarvestClass && STORAGE_LIKE.has(p.postHarvestClass)) {
      if (!p.operatingPrinciple?.trim())
        err(
          'ph-storage-no-principle',
          `${p.postHarvestClass} system must state its operatingPrinciple`,
          w,
        );
      if (!p.riskFactors?.length)
        err(
          'ph-storage-no-risks',
          `${p.postHarvestClass} system must state its riskFactors`,
          w,
        );
    }

    for (const ref of p.applicableCommodities ?? []) {
      if (ref.type !== 'commodity')
        err(
          'ph-bad-commodity-ref',
          'applicableCommodities must target a commodity',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'ph-commodity-missing',
          `applicableCommodities → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of p.equipment ?? []) {
      if (ref.type !== 'machinery')
        err('ph-bad-equipment-ref', 'equipment must target machinery', w);
      else if (!resolveRef(ref))
        err(
          'ph-equipment-missing',
          `equipment → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of p.monitoringMethods ?? []) {
      if (ref.type !== 'quality-measurement')
        err(
          'ph-bad-monitor-ref',
          'monitoringMethods must target a quality-measurement',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'ph-monitor-missing',
          `monitoringMethods → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of p.relevantStandards ?? []) {
      // A commodity-scoped grading standard is a `commodity-grade`; a standard
      // scoped to a domain across commodities is a `standard-reference`
      // (Phase 5D). Both are valid targets — the ref must still resolve, and no
      // other type may be cited as a standard.
      if (ref.type !== 'commodity-grade' && ref.type !== 'standard-reference')
        err(
          'ph-bad-standard-ref',
          'relevantStandards must target a commodity-grade or a standard-reference',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'ph-standard-missing',
          `relevantStandards → ${ref.slug} does not resolve`,
          w,
        );
    }
  }

  /* ---- Strengthened Phase 5A rule --------------------------------------- */
  // `storageSystems` must point at something a lot is actually HELD in. A
  // drying, curing, or grading operation is a process a lot passes through.
  for (const c of commodities) {
    for (const ref of c.storageSystems ?? []) {
      const target = phBySlug.get(ref.slug);
      if (!target) continue; // 5A validator already reports unresolved refs
      const cls = target.postHarvestClass;
      if (!cls || !STORAGE_LIKE.has(cls)) {
        err(
          'commodity-storage-not-a-system',
          `storageSystems → "${ref.slug}" is a "${cls ?? 'unclassified'}" operation, not a storage/cooling system — link it under connections instead`,
          `commodity:${c.slug}`,
        );
      }
    }
  }

  /* ---- Quality attributes ---------------------------------------------- */
  for (const a of attributes) {
    const w = `quality-attribute:${a.slug}`;
    if (!ATTR.has(a.attributeClass))
      err('qa-bad-class', `Unknown attributeClass "${a.attributeClass}"`, w);
    if (!DOMAINS.has(a.qualityDomain))
      err('qa-bad-domain', `Unknown qualityDomain "${a.qualityDomain}"`, w);
    // The anti-conflation rule: every attribute says what it is NOT.
    if (!a.notAnIndicatorOf?.length)
      err(
        'qa-no-anti-indicator',
        'A quality attribute must state what it is NOT an indicator of',
        w,
      );
    // `typicalUnits` carries unit LABELS. A number here would be a universal
    // threshold smuggled in through the back door.
    for (const u of a.typicalUnits ?? []) {
      if (LOOKS_LIKE_A_VALUE.test(u))
        err(
          'qa-unit-has-value',
          `typicalUnits "${u}" contains a number — units are labels, not values`,
          w,
        );
    }
    for (const ref of a.appliesToCommodities ?? []) {
      if (ref.type !== 'commodity')
        err(
          'qa-bad-commodity-ref',
          'appliesToCommodities must target a commodity',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'qa-commodity-missing',
          `appliesToCommodities → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of a.measuredBy ?? []) {
      if (ref.type !== 'quality-measurement') {
        err(
          'qa-bad-measure-ref',
          'measuredBy must target a quality-measurement',
          w,
        );
        continue;
      }
      const m = resolveRef(ref) as QualityMeasurementContent | undefined;
      if (!m) {
        err(
          'qa-measure-missing',
          `measuredBy → ${ref.slug} does not resolve`,
          w,
        );
        continue;
      }
      // Reciprocity: the measurement must agree that it measures this.
      if (!(m.measures ?? []).some((r) => r.slug === a.slug))
        err(
          'qa-measure-not-reciprocal',
          `measuredBy → ${ref.slug} does not list this attribute in its "measures"`,
          w,
        );
    }
    for (const ref of a.relatedDefects ?? []) {
      if (ref.type !== 'post-harvest-defect')
        err(
          'qa-bad-defect-ref',
          'relatedDefects must target a post-harvest-defect',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'qa-defect-missing',
          `relatedDefects → ${ref.slug} does not resolve`,
          w,
        );
    }
  }

  /* ---- Defects ---------------------------------------------------------- */
  for (const d of defects) {
    const w = `post-harvest-defect:${d.slug}`;
    if (!DEFECT.has(d.defectClass))
      err('def-bad-class', `Unknown defectClass "${d.defectClass}"`, w);
    // Visual symptoms are never definitive.
    if (!d.diagnosticLimitations?.length)
      err(
        'def-no-diagnostic-limits',
        'A defect must state the limits of visual diagnosis',
        w,
      );
    for (const ref of d.affectedCommodities ?? []) {
      if (ref.type !== 'commodity')
        err(
          'def-bad-commodity-ref',
          'affectedCommodities must target a commodity',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'def-commodity-missing',
          `affectedCommodities → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of d.reducedByProcesses ?? []) {
      if (ref.type !== 'post-harvest')
        err(
          'def-bad-process-ref',
          'reducedByProcesses must target a post-harvest entry',
          w,
        );
      else if (!resolveRef(ref))
        err(
          'def-process-missing',
          `reducedByProcesses → ${ref.slug} does not resolve`,
          w,
        );
    }
  }

  /* ---- Measurements ----------------------------------------------------- */
  for (const m of measurements) {
    const w = `quality-measurement:${m.slug}`;
    if (!MEAS.has(m.measurementClass))
      err(
        'qm-bad-class',
        `Unknown measurementClass "${m.measurementClass}"`,
        w,
      );
    if (!m.measures?.length)
      err('qm-no-measures', 'A measurement must declare what it measures', w);
    if (!m.measurementLimitations?.length)
      err(
        'qm-no-limits',
        'A measurement must state where it is unreliable or misread',
        w,
      );
    for (const ref of m.measures ?? []) {
      if (ref.type !== 'quality-attribute') {
        err('qm-bad-attr-ref', 'measures must target a quality-attribute', w);
        continue;
      }
      if (!resolveRef(ref))
        err(
          'qm-attr-missing',
          `measures → ${refKey(ref.type, ref.slug)} does not resolve`,
          w,
        );
    }
  }

  return out;
}
