import { SOURCES } from '@/data/sources';
import { GLOSSARY } from '@/data/glossary';
import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  contentUrlPath,
  refKey,
  resolveImage,
  resolveRef,
} from '@/lib/content/registry';
import { computeReachable, outgoingRefs } from '@/lib/content/graph';
import {
  RELATION_TYPES,
  allSemanticEdges,
  incorrectReciprocalEdges,
} from '@/lib/content/relations';
import { evidenceTier, unclassifiedSources } from '@/lib/sources/evidence';
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  webPageSchema,
} from '@/lib/schema/jsonld';
import { contentBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { sitemapPaths } from '@/lib/seo/routes';
import { CONTENT_TYPE_ROUTE } from '@/lib/site';
import type {
  AnyContent,
  ContentBlock,
  SourceReference,
} from '@/types/content';

export type IssueLevel = 'error' | 'warning';

export interface ValidationIssue {
  level: IssueLevel;
  code: string;
  message: string;
  where?: string;
}

export interface ValidationResult {
  issues: ValidationIssue[];
  errorCount: number;
  warningCount: number;
  stats: ValidationStats;
}

export interface ValidationStats {
  totalContent: number;
  publishedContent: number;
  byType: Record<string, number>;
  sources: number;
  glossaryTerms: number;
  weaklyLinked: number;
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Banned placeholder markers, matched with word boundaries to avoid false
 * positives inside legitimate words. */
const PLACEHOLDER_PATTERNS: { label: string; re: RegExp }[] = [
  { label: 'lorem ipsum', re: /\blorem ipsum\b/i },
  { label: 'lipsum', re: /\blipsum\b/i },
  { label: 'coming soon', re: /\bcoming soon\b/i },
  { label: 'placeholder', re: /\bplaceholder\b/i },
  { label: 'fixme', re: /\bfixme\b/i },
  { label: 'tbd', re: /\btbd\b/i },
  { label: 'todo', re: /\btodo\b/i },
  { label: 'xxxx', re: /\bx{4,}\b/i },
  { label: 'insert text', re: /\binsert (?:text|here)\b/i },
];

function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidIsoDate(value: string): boolean {
  if (!ISO_DATE_RE.test(value)) return false;
  const d = new Date(value);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
}

/** Flatten every human-readable string in a content item. */
function collectStrings(item: AnyContent): string[] {
  const out: string[] = [
    item.title,
    item.summary,
    item.category,
    item.subcategory ?? '',
    item.geographicScope,
    item.climateContext ?? '',
    item.seo.title,
    item.seo.description,
    ...(item.alternativeNames ?? []),
    ...item.keyFacts.flatMap((f) => [f.label, f.value, f.note ?? '']),
    ...item.limitations,
  ];
  const pushBlocks = (blocks: ContentBlock[]) => {
    for (const b of blocks) {
      switch (b.type) {
        case 'paragraph':
          out.push(b.text);
          break;
        case 'list':
          out.push(...b.items);
          break;
        case 'definitionList':
          out.push(...b.items.flatMap((i) => [i.term, i.description]));
          break;
        case 'table':
          out.push(b.caption ?? '', ...b.columns, ...b.rows.flat());
          break;
        case 'callout':
          out.push(b.title ?? '', b.text);
          break;
      }
    }
  };
  pushBlocks(item.introduction);
  for (const s of item.sections) {
    out.push(s.heading);
    pushBlocks(s.body);
  }
  return out.filter(Boolean);
}

export function validateAll(): ValidationResult {
  const issues: ValidationIssue[] = [];
  const error = (code: string, message: string, where?: string) =>
    issues.push({ level: 'error', code, message, where });
  const warn = (code: string, message: string, where?: string) =>
    issues.push({ level: 'warning', code, message, where });

  /* ---- Source registry ------------------------------------------------- */
  const sourceIds = new Set<string>();
  for (const source of SOURCES) {
    if (sourceIds.has(source.id)) {
      error(
        'source-duplicate-id',
        `Duplicate source id "${source.id}"`,
        source.id,
      );
    }
    sourceIds.add(source.id);
    if (!isValidUrl(source.url)) {
      error(
        'source-bad-url',
        `Malformed source URL "${source.url}"`,
        source.id,
      );
    }
    if (!isValidIsoDate(source.accessDate)) {
      error(
        'source-bad-date',
        `Invalid accessDate "${source.accessDate}"`,
        source.id,
      );
    }
    if (
      source.publicationDate &&
      !/^\d{4}(-\d{2}-\d{2})?$/.test(source.publicationDate)
    ) {
      error(
        'source-bad-date',
        `Invalid publicationDate "${source.publicationDate}"`,
        source.id,
      );
    }
  }

  /* ---- Per-item content checks ---------------------------------------- */
  const idsSeen = new Set<string>();
  const slugByType = new Map<string, Set<string>>();
  const canonicalSeen = new Map<string, string>();
  const seoTitles = new Map<string, string>();
  const seoDescriptions = new Map<string, string>();

  for (const item of ALL_CONTENT) {
    const where = `${item.contentType}:${item.slug}`;

    // Required fields
    if (!item.id) error('missing-field', 'Missing id', where);
    if (!item.title?.trim()) error('missing-field', 'Missing title', where);
    if (!item.summary?.trim()) error('missing-field', 'Missing summary', where);
    if (!item.geographicScope?.trim())
      error('missing-field', 'Missing geographicScope', where);
    if (!item.sections.length)
      error('missing-field', 'Content has no sections', where);
    if (!item.seo?.title?.trim())
      error('missing-field', 'Missing seo.title', where);
    if (!item.seo?.description?.trim())
      error('missing-field', 'Missing seo.description', where);

    // Slug format + uniqueness within type
    if (!SLUG_RE.test(item.slug)) {
      error('bad-slug', `Slug "${item.slug}" is not kebab-case`, where);
    }
    const typeSlugs = slugByType.get(item.contentType) ?? new Set<string>();
    if (typeSlugs.has(item.slug)) {
      error(
        'duplicate-slug',
        `Duplicate slug within ${item.contentType}`,
        where,
      );
    }
    typeSlugs.add(item.slug);
    slugByType.set(item.contentType, typeSlugs);

    // Duplicate id (global)
    if (idsSeen.has(item.id)) {
      error('duplicate-id', `Duplicate content id "${item.id}"`, where);
    }
    idsSeen.add(item.id);

    // Canonical path uniqueness + format
    const canonical = contentUrlPath(item);
    const expectedPrefix = `/${CONTENT_TYPE_ROUTE[item.contentType]}/`;
    if (!canonical.startsWith(expectedPrefix)) {
      error('bad-canonical', `Canonical "${canonical}" malformed`, where);
    }
    if (canonicalSeen.has(canonical)) {
      error(
        'duplicate-canonical',
        `Canonical "${canonical}" also used by ${canonicalSeen.get(canonical)}`,
        where,
      );
    }
    canonicalSeen.set(canonical, where);

    // Dates
    if (!isValidIsoDate(item.updatedAt)) {
      error('bad-date', `Invalid updatedAt "${item.updatedAt}"`, where);
    }
    if (item.reviewedAt && !isValidIsoDate(item.reviewedAt)) {
      error('bad-date', `Invalid reviewedAt "${item.reviewedAt}"`, where);
    }

    // Sources
    if (
      item.editorialStatus === 'published' &&
      item.sourceReferences.length === 0
    ) {
      error(
        'missing-sources',
        'Published page has no source references',
        where,
      );
    }
    const refIds = new Set<string>();
    for (const ref of item.sourceReferences as SourceReference[]) {
      if (!sourceIds.has(ref.sourceId)) {
        error(
          'unknown-source-ref',
          `Source reference "${ref.sourceId}" does not exist`,
          where,
        );
      }
      if (refIds.has(ref.sourceId)) {
        warn(
          'duplicate-source-ref',
          `Duplicate source ref "${ref.sourceId}"`,
          where,
        );
      }
      refIds.add(ref.sourceId);
    }

    // Typed relationship + related references resolve
    for (const ref of outgoingRefs(item)) {
      const target = resolveRef(ref);
      if (!target) {
        error(
          'unresolved-ref',
          `Reference to ${refKey(ref.type, ref.slug)} does not resolve`,
          where,
        );
      } else if (
        item.editorialStatus === 'published' &&
        target.editorialStatus !== 'published'
      ) {
        warn(
          'ref-to-unpublished',
          `Published page references unpublished ${refKey(ref.type, ref.slug)}`,
          where,
        );
      }
    }

    // Glossary references resolve
    for (const slug of item.glossaryTerms ?? []) {
      if (!GLOSSARY.some((g) => g.slug === slug)) {
        error(
          'unknown-glossary-ref',
          `Glossary term "${slug}" does not exist`,
          where,
        );
      }
    }

    // SEO uniqueness (published only) + length hygiene
    if (item.editorialStatus === 'published') {
      const t = item.seo.title.trim().toLowerCase();
      const d = item.seo.description.trim().toLowerCase();
      if (seoTitles.has(t)) {
        error(
          'duplicate-seo-title',
          `Duplicate SEO title also used by ${seoTitles.get(t)}`,
          where,
        );
      }
      seoTitles.set(t, where);
      if (seoDescriptions.has(d)) {
        error(
          'duplicate-seo-description',
          `Duplicate SEO description also used by ${seoDescriptions.get(d)}`,
          where,
        );
      }
      seoDescriptions.set(d, where);

      if (item.seo.title.length > 60) {
        warn(
          'seo-title-long',
          `SEO title ${item.seo.title.length} chars (>60)`,
          where,
        );
      }
      if (item.seo.description.length > 160) {
        warn(
          'seo-desc-long',
          `SEO description ${item.seo.description.length} chars (>160)`,
          where,
        );
      }
      if (item.seo.description.length < 70) {
        warn(
          'seo-desc-short',
          `SEO description ${item.seo.description.length} chars (<70)`,
          where,
        );
      }
    }

    // Placeholder text
    for (const text of collectStrings(item)) {
      for (const { label, re } of PLACEHOLDER_PATTERNS) {
        if (re.test(text)) {
          error(
            'placeholder-text',
            `Placeholder marker "${label}" found`,
            where,
          );
        }
      }
    }

    // Section anchors unique within page
    const anchorSeen = new Set<string>();
    for (const s of item.sections) {
      if (!SLUG_RE.test(s.id)) {
        error(
          'bad-anchor',
          `Section anchor "${s.id}" is not kebab-case`,
          where,
        );
      }
      if (anchorSeen.has(s.id)) {
        error('duplicate-anchor', `Duplicate section anchor "${s.id}"`, where);
      }
      anchorSeen.add(s.id);
    }

    // Structured-data generation must not throw
    try {
      const path = contentUrlPath(item);
      webPageSchema({ name: item.title, description: item.summary, path });
      breadcrumbSchema(
        contentBreadcrumbs(item.contentType, item.title, item.slug),
      );
      if (item.structuredData?.article) articleSchema(item, path);
    } catch (e) {
      error(
        'schema-error',
        `Structured-data generation failed: ${(e as Error).message}`,
        where,
      );
    }
  }

  /* ---- Glossary -------------------------------------------------------- */
  const glossarySlugs = new Set<string>();
  for (const term of GLOSSARY) {
    if (!SLUG_RE.test(term.slug)) {
      error(
        'bad-slug',
        `Glossary slug "${term.slug}" is not kebab-case`,
        term.slug,
      );
    }
    if (glossarySlugs.has(term.slug)) {
      error(
        'duplicate-slug',
        `Duplicate glossary slug "${term.slug}"`,
        term.slug,
      );
    }
    glossarySlugs.add(term.slug);
    for (const ref of term.sourceReferences ?? []) {
      if (!sourceIds.has(ref.sourceId)) {
        error(
          'unknown-source-ref',
          `Glossary "${term.slug}" cites unknown source "${ref.sourceId}"`,
          term.slug,
        );
      }
    }
    for (const ref of term.related ?? []) {
      if (!resolveRef(ref)) {
        error(
          'unresolved-ref',
          `Glossary "${term.slug}" links to missing ${refKey(ref.type, ref.slug)}`,
          term.slug,
        );
      }
    }
    try {
      definedTermSchema(term);
    } catch (e) {
      error(
        'schema-error',
        `Glossary schema failed: ${(e as Error).message}`,
        term.slug,
      );
    }
  }

  /* ---- Images ---------------------------------------------------------- */
  // Any image attached to a published page must be self-hosted and carry a
  // license + attribution (provenance requirement).
  for (const item of PUBLISHED_CONTENT) {
    const img = resolveImage(item);
    if (!img) continue;
    const where = `${item.contentType}:${item.slug}`;
    if (!img.src.startsWith('/')) {
      error(
        'image-not-hosted',
        `Image src "${img.src}" is not self-hosted`,
        where,
      );
    }
    if (!img.alt?.trim()) {
      error('image-no-alt', 'Image is missing alt text', where);
    }
    if (!img.license?.trim()) {
      error('image-no-license', 'Image is missing a license', where);
    }
    if (!img.attribution?.trim()) {
      error('image-no-attribution', 'Image is missing attribution', where);
    }
    if (!img.creator?.trim()) {
      error('image-no-creator', 'Image is missing a creator', where);
    }
    if (!img.originalPage?.trim()) {
      error(
        'image-no-source-page',
        'Image is missing its source (Commons) page',
        where,
      );
    }
    if (!img.licenseUrl?.trim()) {
      error('image-no-license-url', 'Image is missing a license URL', where);
    } else if (!isValidUrl(img.licenseUrl)) {
      error(
        'image-bad-license-url',
        `Malformed license URL "${img.licenseUrl}"`,
        where,
      );
    }
    if (!img.modifications?.trim()) {
      error(
        'image-no-modification-disclosure',
        'Image is missing a modification disclosure',
        where,
      );
    }
    if (/(-nc|-nd|noncommercial|no-?deriv)/i.test(img.license ?? '')) {
      error(
        'image-incompatible-license',
        `Image license "${img.license}" is not redistribution-compatible`,
        where,
      );
    }
  }

  /* ---- Field-level provenance (Phase 2.1) ------------------------------ */
  for (const item of ALL_CONTENT) {
    const where = `${item.contentType}:${item.slug}`;
    for (const claim of item.claims ?? []) {
      if (!claim.field?.trim() || !claim.statement?.trim()) {
        error(
          'claim-incomplete',
          'Provenanced claim missing field/statement',
          where,
        );
      }
      if (!claim.citations?.length) {
        error(
          'claim-no-citation',
          `Claim "${claim.field}" has no citations`,
          where,
        );
        continue;
      }
      for (const cite of claim.citations) {
        if (!sourceIds.has(cite.sourceId)) {
          error(
            'claim-unknown-source',
            `Claim "${claim.field}" cites unknown source "${cite.sourceId}"`,
            where,
          );
        }
        if (cite.retrievedDate && !isValidIsoDate(cite.retrievedDate)) {
          error(
            'claim-bad-date',
            `Claim "${claim.field}" bad retrievedDate`,
            where,
          );
        }
      }
      // Quantitative and safety-critical claims require Tier 1–2 evidence.
      if (claim.quantitative || claim.safetyCritical) {
        const hasStrong = claim.citations.some(
          (c) => sourceIds.has(c.sourceId) && evidenceTier(c.sourceId) <= 2,
        );
        if (!hasStrong) {
          error(
            'claim-weak-evidence',
            `${claim.quantitative ? 'Quantitative' : 'Safety-critical'} claim "${claim.field}" lacks a Tier 1–2 source`,
            where,
          );
        }
      }
    }
  }

  /* ---- Semantic relations (Phase 2.1) --------------------------------- */
  for (const id of unclassifiedSources()) {
    error(
      'source-untiered',
      `Source "${id}" has no evidence-tier classification`,
      id,
    );
  }
  const edgeSeen = new Set<string>();
  for (const edge of allSemanticEdges()) {
    const w = `${edge.from.type}:${edge.from.slug}`;
    if (!RELATION_TYPES.has(edge.relation)) {
      error('bad-relation', `Unknown relation type "${edge.relation}"`, w);
    }
    const key = `${refKey(edge.from.type, edge.from.slug)}->${refKey(edge.to.type, edge.to.slug)}:${edge.relation}`;
    if (edgeSeen.has(key)) {
      error(
        'duplicate-edge',
        `Duplicate semantic edge ${edge.relation} → ${refKey(edge.to.type, edge.to.slug)}`,
        w,
      );
    }
    edgeSeen.add(key);
  }
  for (const { a } of incorrectReciprocalEdges()) {
    error(
      'incorrect-reciprocity',
      `Reciprocal edges reuse the non-symmetric relation "${a.relation}"`,
      `${a.from.type}:${a.from.slug}`,
    );
  }

  /* ---- Reachability / orphans ----------------------------------------- */
  const reachable = computeReachable();
  for (const item of PUBLISHED_CONTENT) {
    if (!reachable.has(refKey(item.contentType, item.slug))) {
      error(
        'orphan-page',
        'Published page is not reachable from any hub',
        `${item.contentType}:${item.slug}`,
      );
    }
  }

  /* ---- Sitemap coverage ------------------------------------------------ */
  const paths = sitemapPaths();
  for (const item of PUBLISHED_CONTENT) {
    if (!paths.has(contentUrlPath(item))) {
      error(
        'sitemap-missing',
        `Published page missing from sitemap`,
        `${item.contentType}:${item.slug}`,
      );
    }
  }

  /* ---- Stats ----------------------------------------------------------- */
  const byType: Record<string, number> = {};
  for (const item of PUBLISHED_CONTENT) {
    byType[item.contentType] = (byType[item.contentType] ?? 0) + 1;
  }
  const weaklyLinked = PUBLISHED_CONTENT.filter(
    (item) =>
      ALL_CONTENT.filter((c) =>
        outgoingRefs(c).some(
          (r) => r.type === item.contentType && r.slug === item.slug,
        ),
      ).length === 0,
  ).length;

  const errorCount = issues.filter((i) => i.level === 'error').length;
  const warningCount = issues.filter((i) => i.level === 'warning').length;

  return {
    issues,
    errorCount,
    warningCount,
    stats: {
      totalContent: ALL_CONTENT.length,
      publishedContent: PUBLISHED_CONTENT.length,
      byType,
      sources: SOURCES.length,
      glossaryTerms: GLOSSARY.length,
      weaklyLinked,
    },
  };
}
