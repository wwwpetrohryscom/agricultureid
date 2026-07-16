import { ALL_CONTENT, refKey, resolveRef } from '@/lib/content/registry';
import {
  PROCESSING_CLASSES,
  PROCESSING_STAGES,
  TRANSFORMATION_BASES,
} from '@/types/processing';
import type {
  CommodityProductContent,
  ContentRef,
  ProcessingMethodContent,
} from '@/types/content';

export interface ProcessingIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const CLASSES = new Set<string>(PROCESSING_CLASSES);
const STAGES = new Set<string>(PROCESSING_STAGES);
const BASES = new Set<string>(TRANSFORMATION_BASES);
const STAGE_ORDER = new Map<string, number>(
  PROCESSING_STAGES.map((s, i) => [s, i]),
);

/**
 * Phase 5C — processing and transformation integrity (§5).
 *
 * The rule that does the real work is the **chain check**: an output's own
 * `derivedFrom` commodity must be one of the method's inputs. Without it a page
 * could claim that milling wheat produces soybean oil, and every other check
 * would pass. This is what makes a transformation evidence-bearing rather than
 * asserted, and it is the processing-side counterpart of Phase 5A's rule that a
 * pathway is never inferred from a shared crop parent.
 */
export function processingIssues(): ProcessingIssue[] {
  const out: ProcessingIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });
  const warn = (code: string, message: string, where?: string) =>
    out.push({ level: 'warning', code, message, where });

  const methods = ALL_CONTENT.filter(
    (c): c is ProcessingMethodContent => c.contentType === 'processing-method',
  );
  const products = ALL_CONTENT.filter(
    (c): c is CommodityProductContent => c.contentType === 'commodity-product',
  );
  const methodBySlug = new Map(methods.map((m) => [m.slug, m]));

  for (const m of methods) {
    const w = `processing-method:${m.slug}`;

    if (!CLASSES.has(m.processingClass))
      err(
        'proc-bad-class',
        `Unknown processingClass "${m.processingClass}"`,
        w,
      );
    if (!STAGES.has(m.processStage))
      err('proc-bad-stage', `Unknown processStage "${m.processStage}"`, w);
    if (m.transformationBasis && !BASES.has(m.transformationBasis))
      err(
        'proc-bad-basis',
        `Unknown transformationBasis "${m.transformationBasis}"`,
        w,
      );
    if (!m.processObjective?.trim())
      err('proc-no-objective', 'Method must state its processObjective', w);
    if (!m.operatingPrinciple?.trim())
      err('proc-no-principle', 'Method must state its operatingPrinciple', w);
    if (!m.safetyLimitations?.length)
      err('proc-no-safety', 'Method must state its safetyLimitations', w);

    /* ---- Inputs: a process with no valid input is not a process --------- */
    if (!m.inputCommodities?.length) {
      err('proc-no-input', 'Method has no inputCommodities', w);
    }
    const inputSlugs = new Set<string>();
    for (const ref of m.inputCommodities ?? []) {
      if (ref.type !== 'commodity') {
        err(
          'proc-input-not-commodity',
          `inputCommodities must target a commodity, got "${ref.type}"`,
          w,
        );
        continue;
      }
      if (!resolveRef(ref)) {
        err(
          'proc-input-missing',
          `inputCommodities → ${ref.slug} does not resolve`,
          w,
        );
        continue;
      }
      inputSlugs.add(ref.slug);
    }

    /* ---- Outputs: a process with no output produces nothing ------------- */
    const buckets: [ContentRef[] | undefined, string, string][] = [
      [m.primaryOutputs, 'primary-product', 'primaryOutputs'],
      [m.coProductOutputs, 'co-product', 'coProductOutputs'],
      [m.byProductOutputs, 'by-product', 'byProductOutputs'],
    ];
    const totalOutputs = buckets.reduce((n, [b]) => n + (b?.length ?? 0), 0);
    if (totalOutputs === 0)
      err('proc-no-output', 'Method produces no declared output', w);

    const seenOutputs = new Set<string>();
    for (const [refs, expectClass, field] of buckets) {
      for (const ref of refs ?? []) {
        if (ref.type !== 'commodity-product') {
          err(
            'proc-output-not-product',
            `${field} must target a commodity-product, got "${ref.type}"`,
            w,
          );
          continue;
        }
        const target = resolveRef(ref) as CommodityProductContent | undefined;
        if (!target) {
          err(
            'proc-output-missing',
            `${field} → ${ref.slug} does not resolve`,
            w,
          );
          continue;
        }
        // Duplicated edge (same output declared twice, even across buckets).
        const key = refKey(ref.type, ref.slug);
        if (seenOutputs.has(key))
          err(
            'proc-duplicate-edge',
            `Output "${ref.slug}" is declared more than once`,
            w,
          );
        seenOutputs.add(key);

        // Class agreement: a co-product must not be filed as a by-product.
        if (target.productClass !== expectClass)
          err(
            'proc-output-class-mismatch',
            `${field} → ${ref.slug} is a "${target.productClass}", expected "${expectClass}"`,
            w,
          );

        // THE CHAIN CHECK: the product's own source commodity must be an input
        // to this method. Otherwise the transformation is asserted, not real.
        if (
          inputSlugs.size > 0 &&
          target.derivedFrom &&
          !inputSlugs.has(target.derivedFrom.slug)
        ) {
          err(
            'proc-broken-chain',
            `${field} → "${ref.slug}" derives from commodity "${target.derivedFrom.slug}", which is not an input to this method (inputs: ${[...inputSlugs].join(', ')})`,
            w,
          );
        }

        // Reciprocity: the product must acknowledge the method.
        if (!(target.producedBy ?? []).some((r) => r.slug === m.slug))
          err(
            'proc-not-reciprocal',
            `${field} → "${ref.slug}" does not list this method in producedBy`,
            w,
          );
      }
    }

    /* ---- Equipment ------------------------------------------------------ */
    for (const ref of m.typicalEquipment ?? []) {
      if (ref.type !== 'machinery')
        err('proc-bad-equipment', 'typicalEquipment must target machinery', w);
      else if (!resolveRef(ref))
        err(
          'proc-equipment-missing',
          `typicalEquipment → ${ref.slug} does not resolve`,
          w,
        );
    }

    /* ---- Sequencing ----------------------------------------------------- */
    for (const [refs, field] of [
      [m.precededBy, 'precededBy'],
      [m.followedBy, 'followedBy'],
    ] as [ContentRef[] | undefined, string][]) {
      for (const ref of refs ?? []) {
        if (ref.type !== 'processing-method') {
          err(
            'proc-bad-sequence-ref',
            `${field} must target a processing-method`,
            w,
          );
          continue;
        }
        if (ref.slug === m.slug)
          err('proc-self-sequence', `${field} points at itself`, w);
        if (!methodBySlug.has(ref.slug))
          err(
            'proc-sequence-missing',
            `${field} → ${ref.slug} does not resolve`,
            w,
          );
      }
    }
    // A declared sequence should run forwards through the stage order.
    for (const ref of m.followedBy ?? []) {
      const next = methodBySlug.get(ref.slug);
      if (!next) continue;
      const a = STAGE_ORDER.get(m.processStage);
      const b = STAGE_ORDER.get(next.processStage);
      if (a !== undefined && b !== undefined && b < a)
        warn(
          'proc-stage-backwards',
          `followedBy → "${ref.slug}" is at an earlier stage (${next.processStage}) than this method (${m.processStage})`,
          w,
        );
    }
  }

  /* ---- Product side: reciprocity + no self-reference ------------------- */
  for (const p of products) {
    const w = `commodity-product:${p.slug}`;
    for (const ref of p.producedBy ?? []) {
      if (ref.type !== 'processing-method') {
        err(
          'prod-bad-producer',
          'producedBy must target a processing-method',
          w,
        );
        continue;
      }
      const m = methodBySlug.get(ref.slug);
      if (!m) {
        err(
          'prod-producer-missing',
          `producedBy → ${ref.slug} does not resolve`,
          w,
        );
        continue;
      }
      const declared = [
        ...(m.primaryOutputs ?? []),
        ...(m.coProductOutputs ?? []),
        ...(m.byProductOutputs ?? []),
      ].some((r) => r.slug === p.slug);
      if (!declared)
        err(
          'prod-not-reciprocal',
          `producedBy → "${ref.slug}" does not declare this product as an output`,
          w,
        );
    }
  }

  /* ---- Cycles in the sequencing graph ---------------------------------- */
  // A processing line runs forwards. A genuine recycle loop must be described
  // in prose, not encoded as a followedBy cycle that would make the chain
  // unwalkable.
  const WHITE = 0;
  const GREY = 1;
  const BLACK = 2;
  const colour = new Map<string, number>(methods.map((m) => [m.slug, WHITE]));
  const stack: string[] = [];
  const visit = (slug: string): void => {
    colour.set(slug, GREY);
    stack.push(slug);
    const m = methodBySlug.get(slug);
    for (const ref of m?.followedBy ?? []) {
      const c = colour.get(ref.slug);
      if (c === undefined) continue;
      if (c === GREY) {
        const cycle = [...stack.slice(stack.indexOf(ref.slug)), ref.slug];
        err(
          'proc-cycle',
          `Processing sequence forms a cycle: ${cycle.join(' → ')}`,
          `processing-method:${slug}`,
        );
      } else if (c === WHITE) {
        visit(ref.slug);
      }
    }
    stack.pop();
    colour.set(slug, BLACK);
  };
  for (const m of methods) if (colour.get(m.slug) === WHITE) visit(m.slug);

  return out;
}
