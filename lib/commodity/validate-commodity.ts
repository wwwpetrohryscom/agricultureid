import { ALL_CONTENT, refKey, resolveRef } from '@/lib/content/registry';
import { evidenceTier } from '@/lib/sources/evidence';
import { SOURCES } from '@/data/sources';
import {
  COMMODITY_CLASSES,
  COMMODITY_USES,
  PHYSICAL_FORMS,
  CODE_SYSTEMS,
  GRADE_LEGAL_STATUS,
  PRODUCT_CLASSES,
  COMMODITY_IMAGE_IDENTITY,
} from '@/types/commodity';
import type {
  CommodityContent,
  CommodityGradeContent,
  CommodityProductContent,
  ContentRef,
} from '@/types/content';

export interface CommodityIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const CLASSES = new Set<string>(COMMODITY_CLASSES);
const USES = new Set<string>(COMMODITY_USES);
const FORMS = new Set<string>(PHYSICAL_FORMS);
const SYSTEMS = new Set<string>(CODE_SYSTEMS);
const LEGAL = new Set<string>(GRADE_LEGAL_STATUS);
const PRODUCT_CLASS_SET = new Set<string>(PRODUCT_CLASSES);
const IMAGE_IDENTITY = new Set<string>(COMMODITY_IMAGE_IDENTITY);
/** Code systems whose codes are meaningless without an edition/revision. */
const VERSIONED_SYSTEMS = new Set(['HS', 'CN']);

/**
 * Phase 5A — commodity taxonomy integrity (§3.8).
 *
 * The rules that matter most: a commodity is never the crop; a product is never
 * inferred from a shared crop parent; transformation edges are reciprocal and
 * class-consistent; grades are versioned, jurisdictional, and quantitatively
 * sourced.
 */
export function commodityIssues(): CommodityIssue[] {
  const out: CommodityIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });
  const warn = (code: string, message: string, where?: string) =>
    out.push({ level: 'warning', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));

  const commodities = ALL_CONTENT.filter(
    (c): c is CommodityContent => c.contentType === 'commodity',
  );
  const products = ALL_CONTENT.filter(
    (c): c is CommodityProductContent => c.contentType === 'commodity-product',
  );
  const grades = ALL_CONTENT.filter(
    (c): c is CommodityGradeContent => c.contentType === 'commodity-grade',
  );

  /* ---- Commodities ------------------------------------------------------ */
  const commodityByParent = new Map<string, Set<string>>();

  for (const c of commodities) {
    const w = `commodity:${c.slug}`;

    if (!CLASSES.has(c.commodityClass))
      err(
        'commodity-bad-class',
        `Unknown commodityClass "${c.commodityClass}"`,
        w,
      );
    if (c.physicalForm && !FORMS.has(c.physicalForm))
      err('commodity-bad-form', `Unknown physicalForm "${c.physicalForm}"`, w);
    if (c.imageIdentity && !IMAGE_IDENTITY.has(c.imageIdentity))
      err(
        'commodity-bad-image-identity',
        `Unknown imageIdentity "${c.imageIdentity}"`,
        w,
      );

    // Exactly one biological parent, resolving to a published crop/livestock.
    const hasCrop = Boolean(c.sourceCrop);
    const hasLivestock = Boolean(c.sourceLivestock);
    if (hasCrop === hasLivestock) {
      err(
        'commodity-parent-cardinality',
        'A commodity needs exactly one of sourceCrop / sourceLivestock',
        w,
      );
    }
    const parentRef: ContentRef | undefined = c.sourceCrop ?? c.sourceLivestock;
    if (parentRef) {
      const expected = c.sourceCrop ? 'crop' : 'livestock';
      if (parentRef.type !== expected) {
        err(
          'commodity-parent-type',
          `Parent must be a ${expected}, got "${parentRef.type}"`,
          w,
        );
      }
      const parent = resolveRef(parentRef);
      if (!parent) {
        err(
          'commodity-parent-missing',
          `Parent ${refKey(parentRef.type, parentRef.slug)} does not resolve`,
          w,
        );
      } else if (parent.editorialStatus !== 'published') {
        err('commodity-parent-unpublished', 'Parent is not published', w);
      } else {
        // A commodity must not duplicate another under the same parent.
        const key = refKey(parentRef.type, parentRef.slug);
        const seen = commodityByParent.get(key) ?? new Set<string>();
        const name = c.title.trim().toLowerCase();
        if (seen.has(name))
          err(
            'commodity-duplicate-under-parent',
            `Duplicate commodity "${name}" under ${key}`,
            w,
          );
        seen.add(name);
        commodityByParent.set(key, seen);
      }
    }

    // Uses
    if (!c.primaryUses?.length)
      err('commodity-no-use', 'Commodity has no primaryUses', w);
    for (const u of [...(c.primaryUses ?? []), ...(c.secondaryUses ?? [])])
      if (!USES.has(u)) err('commodity-bad-use', `Unknown use "${u}"`, w);

    // Classification codes: versioned + supported system + real source.
    for (const code of c.commodityCodes ?? []) {
      if (!SYSTEMS.has(code.system))
        err(
          'commodity-bad-code-system',
          `Unsupported code system "${code.system}"`,
          w,
        );
      if (!code.code?.trim())
        err(
          'commodity-empty-code',
          `Empty code for system "${code.system}"`,
          w,
        );
      if (VERSIONED_SYSTEMS.has(code.system) && !code.version?.trim())
        err(
          'commodity-code-unversioned',
          `${code.system} code "${code.code}" needs a version/edition`,
          w,
        );
      if (code.sourceId && !sourceIds.has(code.sourceId))
        err(
          'commodity-code-bad-source',
          `Code cites unknown source "${code.sourceId}"`,
          w,
        );
    }

    // Transformation edges must point at products of the matching class whose
    // derivedFrom points back here. This is what makes a pathway real rather
    // than inferred.
    const checkPathway = (
      refs: ContentRef[] | undefined,
      expectClass: string,
      field: string,
    ) => {
      for (const ref of refs ?? []) {
        if (ref.type !== 'commodity-product') {
          err(
            'commodity-pathway-bad-target',
            `${field} must target a commodity-product, got "${ref.type}"`,
            w,
          );
          continue;
        }
        const target = resolveRef(ref) as CommodityProductContent | undefined;
        if (!target) {
          err(
            'commodity-pathway-broken',
            `${field} → ${refKey(ref.type, ref.slug)} does not resolve`,
            w,
          );
          continue;
        }
        if (target.productClass !== expectClass) {
          err(
            'commodity-pathway-class-mismatch',
            `${field} → ${ref.slug} is a "${target.productClass}", expected "${expectClass}"`,
            w,
          );
        }
        if (target.derivedFrom?.slug !== c.slug) {
          err(
            'commodity-pathway-not-reciprocal',
            `${field} → ${ref.slug} does not declare derivedFrom "${c.slug}"`,
            w,
          );
        }
      }
    };
    checkPathway(c.primaryProducts, 'primary-product', 'primaryProducts');
    checkPathway(c.coProducts, 'co-product', 'coProducts');
    checkPathway(c.byProducts, 'by-product', 'byProducts');

    // Grades + storage targets must be the right type and resolve.
    for (const ref of c.applicableGrades ?? []) {
      if (ref.type !== 'commodity-grade')
        err(
          'commodity-grade-bad-target',
          `applicableGrades must target a commodity-grade`,
          w,
        );
      else if (!resolveRef(ref))
        err(
          'commodity-grade-broken',
          `applicableGrades → ${ref.slug} does not resolve`,
          w,
        );
    }
    for (const ref of c.storageSystems ?? []) {
      if (ref.type !== 'post-harvest')
        err(
          'commodity-storage-bad-target',
          `storageSystems must target a post-harvest entry`,
          w,
        );
      else if (!resolveRef(ref))
        err(
          'commodity-storage-broken',
          `storageSystems → ${ref.slug} does not resolve`,
          w,
        );
    }
  }

  /* ---- Products --------------------------------------------------------- */
  for (const p of products) {
    const w = `commodity-product:${p.slug}`;
    if (!PRODUCT_CLASS_SET.has(p.productClass))
      err('product-bad-class', `Unknown productClass "${p.productClass}"`, w);
    if (p.physicalForm && !FORMS.has(p.physicalForm))
      err('product-bad-form', `Unknown physicalForm "${p.physicalForm}"`, w);
    if (p.imageIdentity && !IMAGE_IDENTITY.has(p.imageIdentity))
      err(
        'product-bad-image-identity',
        `Unknown imageIdentity "${p.imageIdentity}"`,
        w,
      );
    if (!p.primaryUses?.length)
      err('product-no-use', 'Product has no primaryUses', w);
    for (const u of [...(p.primaryUses ?? []), ...(p.secondaryUses ?? [])])
      if (!USES.has(u)) err('product-bad-use', `Unknown use "${u}"`, w);

    // A processed product must never be modelled as a crop, and must derive
    // from a real commodity.
    if (!p.derivedFrom) {
      err('product-no-parent', 'Product has no derivedFrom commodity', w);
    } else if (p.derivedFrom.type !== 'commodity') {
      err(
        'product-parent-not-commodity',
        `derivedFrom must be a commodity, got "${p.derivedFrom.type}" (a processed product is not a crop)`,
        w,
      );
    } else {
      const parent = resolveRef(p.derivedFrom) as CommodityContent | undefined;
      if (!parent) {
        err(
          'product-parent-missing',
          `derivedFrom ${p.derivedFrom.slug} does not resolve`,
          w,
        );
      } else if (parent.editorialStatus !== 'published') {
        err(
          'product-parent-unpublished',
          'Parent commodity is not published',
          w,
        );
      } else {
        // The parent commodity must list this product in the matching bucket.
        const bucket =
          p.productClass === 'primary-product'
            ? parent.primaryProducts
            : p.productClass === 'co-product'
              ? parent.coProducts
              : parent.byProducts;
        if (!(bucket ?? []).some((r) => r.slug === p.slug)) {
          err(
            'product-orphan-pathway',
            `Parent commodity "${parent.slug}" does not list this ${p.productClass} — transformation edge is one-way`,
            w,
          );
        }
      }
    }
    for (const code of p.commodityCodes ?? []) {
      if (!SYSTEMS.has(code.system))
        err(
          'product-bad-code-system',
          `Unsupported code system "${code.system}"`,
          w,
        );
      if (VERSIONED_SYSTEMS.has(code.system) && !code.version?.trim())
        err(
          'product-code-unversioned',
          `${code.system} code needs a version`,
          w,
        );
    }
  }

  /* ---- Grades ----------------------------------------------------------- */
  for (const g of grades) {
    const w = `commodity-grade:${g.slug}`;
    if (!g.standardBody?.trim())
      err('grade-no-body', 'Grade has no standardBody', w);
    if (!g.jurisdiction?.trim())
      err('grade-no-jurisdiction', 'Grade has no jurisdiction', w);
    if (!g.edition?.trim())
      err('grade-no-edition', 'Grade has no edition/version', w);
    if (!LEGAL.has(g.legalStatus))
      err(
        'grade-bad-legal-status',
        `Unknown legalStatus "${g.legalStatus}"`,
        w,
      );
    if (!g.reproductionLimitations?.length)
      err(
        'grade-no-reproduction-limits',
        'Grade summary must state its reproduction limitations',
        w,
      );

    if (!g.gradedCommodity) {
      err('grade-no-commodity', 'Grade has no gradedCommodity', w);
    } else if (g.gradedCommodity.type !== 'commodity') {
      err(
        'grade-target-not-commodity',
        'gradedCommodity must be a commodity',
        w,
      );
    } else if (!resolveRef(g.gradedCommodity)) {
      err(
        'grade-commodity-missing',
        `gradedCommodity ${g.gradedCommodity.slug} does not resolve`,
        w,
      );
    }

    // Quantitative grade criteria require Tier 1–2 field-level provenance.
    const quantCriteria = (g.gradeCriteria ?? []).filter((c) =>
      c.value?.trim(),
    );
    for (const c of quantCriteria) {
      if (!c.unit?.trim())
        err(
          'grade-criterion-no-unit',
          `Criterion "${c.attribute}" has a value but no unit`,
          w,
        );
    }
    if (quantCriteria.length > 0) {
      const ok = (g.claims ?? []).some(
        (cl) =>
          cl.quantitative &&
          cl.citations.some(
            (ci) =>
              sourceIds.has(ci.sourceId) && evidenceTier(ci.sourceId) <= 2,
          ),
      );
      if (!ok)
        err(
          'grade-criteria-unsourced',
          'Quantitative grade criteria require a Tier 1–2 provenanced quantitative claim',
          w,
        );
    }
    if (
      (g.gradeCriteria ?? []).length === 0 &&
      (g.gradeNames ?? []).length === 0
    ) {
      warn(
        'grade-thin',
        'Grade summary lists neither criteria nor grade names',
        w,
      );
    }
  }

  /* ---- Cluster-level ---------------------------------------------------- */
  // An orphan commodity — nothing links to it and it links to nothing — would
  // be a registry-only page.
  for (const c of commodities) {
    const outbound =
      (c.primaryProducts?.length ?? 0) +
      (c.coProducts?.length ?? 0) +
      (c.byProducts?.length ?? 0) +
      (c.applicableGrades?.length ?? 0) +
      (c.storageSystems?.length ?? 0) +
      (c.connections?.length ?? 0) +
      (c.relatedTopics?.length ?? 0);
    if (outbound === 0 && !c.sourceCrop && !c.sourceLivestock) {
      err(
        'commodity-orphan',
        'Commodity has no parent and no outbound links',
        `commodity:${c.slug}`,
      );
    }
  }

  return out;
}
