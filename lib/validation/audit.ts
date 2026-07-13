import { SOURCES } from '@/data/sources';
import { ALL_CONTENT, PUBLISHED_CONTENT, refKey } from '@/lib/content/registry';
import {
  allSemanticEdges,
  edgesByRelation,
  incorrectReciprocalEdges,
  semanticEdges,
} from '@/lib/content/relations';
import { evidenceTier, urlSpecificity } from '@/lib/sources/evidence';
import { CONTENT_TYPES } from '@/lib/site';
import type { AnyContent, ContentBlock } from '@/types/content';

/* ---- string extraction --------------------------------------------------- */

function blockStrings(blocks: ContentBlock[]): string[] {
  const out: string[] = [];
  for (const b of blocks) {
    switch (b.type) {
      case 'paragraph':
        out.push(b.text);
        break;
      case 'list':
        out.push(...b.items);
        break;
      case 'definitionList':
        out.push(...b.items.map((i) => i.description));
        break;
      case 'table':
        out.push(...b.rows.flat());
        break;
      case 'callout':
        out.push(b.text);
        break;
    }
  }
  return out;
}

function itemStrings(item: AnyContent): string[] {
  return [
    item.summary,
    ...blockStrings(item.introduction),
    ...item.sections.flatMap((s) => blockStrings(s.body)),
    ...item.keyFacts.flatMap((f) => [f.value, f.note ?? '']),
    ...item.limitations,
  ].filter(Boolean);
}

/* ---- quantitative-claim audit ------------------------------------------- */

const QUANT_RE =
  /(\bpH ?[0-9]+(?:\.[0-9]+)?(?: ?(?:–|-|to) ?[0-9]+(?:\.[0-9]+)?)?|[-0-9]+(?:\.[0-9]+)? ?°[CF]|[0-9]+(?:\.[0-9]+)? ?%|[0-9]+(?:\.[0-9]+)? ?(?:kg|tonnes?|t\/ha|mm|cm|ha|days|weeks|months|years|litres|liters)\b)/g;

export interface QuantHit {
  where: string;
  matches: string[];
  hasQuantClaim: boolean;
}

export function quantitativeClaims(): QuantHit[] {
  const hits: QuantHit[] = [];
  for (const item of ALL_CONTENT) {
    const matches = new Set<string>();
    for (const s of itemStrings(item)) {
      for (const m of s.matchAll(QUANT_RE)) matches.add(m[0].trim());
    }
    if (matches.size === 0) continue;
    const hasQuantClaim = (item.claims ?? []).some((c) => c.quantitative);
    hits.push({
      where: `${item.contentType}:${item.slug}`,
      matches: [...matches],
      hasQuantClaim,
    });
  }
  return hits;
}

/* ---- duplication audit --------------------------------------------------- */

// Repeated safety/methodology disclaimers are intentional and appropriate; the
// audit reports them separately from problematic boilerplate.
const INTENTIONAL_MARKERS = [
  'AgricultureID does not publish universal fertilizer recommendations',
  'AgricultureID does not provide specific chemical treatment instructions',
  // Fertilizer scope/safety disclaimer — a deliberate, appropriate statement
  // that SHOULD read identically on every fertilizer entry (it is not an
  // application-rate recommendation).
  'it is not an application rate recommendation for any crop or region',
  'AgricultureID does not provide veterinary treatment instructions',
  'Crop water requirements are estimated from evapotranspiration',
  // Recurring honesty caveats (methodology), intentional and appropriate:
  'statistics change annually and should be taken from primary datasets',
  'statistics change over time and should be taken from primary datasets',
  'recommendations are jurisdiction-specific',
  'governed by local regulation and veterinary advice',
  'should follow locally authorized guidance and product labels',
  'does not replace field diagnosis or region-specific extension',
  'Soil suitability should be assessed with local soil survey',
  'not breed-, system-, or region-specific husbandry',
  'trade patterns change over time',
  'trade patterns shift over time',
  'trade patterns vary by region and change',
  // Phase 3A — standardized cultivar/breed scope, provenance, and status
  // disclaimers. These are intentional, verbatim honesty statements that SHOULD
  // read identically on every record (varying a scope/uncertainty disclaimer is
  // worse than repeating it). Substantive descriptive prose is NOT whitelisted.
  'not husbandry, breeding, or veterinary guidance',
  'not strain-specific performance data or husbandry guidance',
  'not veterinary or detailed husbandry guidance',
  'Adaptation and trait notes are region- and season-specific',
  'Conservation and registry status is date- and source-specific',
  'Conservation risk status is not asserted here',
  'Cooking and agronomic behaviour is region- and season-specific',
  'Registry record identifiers and deep links are omitted',
  'Milk yield and composition are highly management-dependent',
  'Registry listing or variety protection is jurisdiction- and date-specific',
];

export interface DupHit {
  text: string;
  pages: number;
  intentional: boolean;
}

export function duplication(minPages = 4): DupHit[] {
  const byText = new Map<string, Set<string>>();
  for (const item of ALL_CONTENT) {
    const where = `${item.contentType}:${item.slug}`;
    for (const s of itemStrings(item)) {
      if (s.length < 60) continue; // ignore short shared phrases
      const set = byText.get(s) ?? new Set<string>();
      set.add(where);
      byText.set(s, set);
    }
  }
  const hits: DupHit[] = [];
  for (const [text, pages] of byText) {
    if (pages.size < minPages) continue;
    hits.push({
      text,
      pages: pages.size,
      intentional: INTENTIONAL_MARKERS.some((m) => text.includes(m)),
    });
  }
  return hits.sort((a, b) => b.pages - a.pages);
}

/* ---- source audit -------------------------------------------------------- */

export interface SourceUsage {
  id: string;
  uses: number;
  tier: number;
  specificity: string;
}

export function sourceReport(): {
  usage: SourceUsage[];
  tierDistribution: Record<number, number>;
  tier3OnlyPages: string[];
} {
  const uses = new Map<string, number>();
  for (const item of ALL_CONTENT) {
    for (const ref of item.sourceReferences) {
      uses.set(ref.sourceId, (uses.get(ref.sourceId) ?? 0) + 1);
    }
  }
  const usage: SourceUsage[] = SOURCES.map((s) => ({
    id: s.id,
    uses: uses.get(s.id) ?? 0,
    tier: evidenceTier(s.id),
    specificity: urlSpecificity(s.id),
  })).sort((a, b) => b.uses - a.uses);

  const tierDistribution: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  for (const item of ALL_CONTENT) {
    for (const ref of item.sourceReferences) {
      const t = evidenceTier(ref.sourceId);
      tierDistribution[t] = (tierDistribution[t] ?? 0) + 1;
    }
  }

  // Published pages whose ENTIRE source list is Tier 3.
  const tier3OnlyPages = PUBLISHED_CONTENT.filter(
    (item) =>
      item.sourceReferences.length > 0 &&
      item.sourceReferences.every((r) => evidenceTier(r.sourceId) === 3),
  ).map((i) => `${i.contentType}:${i.slug}`);

  return { usage, tierDistribution, tier3OnlyPages };
}

/* ---- graph-quality report ------------------------------------------------ */

export function graphReport() {
  const edges = allSemanticEdges();
  const byRelation = edgesByRelation();

  // Degree (undirected) per node.
  const degree = new Map<string, number>();
  const inc = (k: string) => degree.set(k, (degree.get(k) ?? 0) + 1);
  for (const e of edges) {
    inc(refKey(e.from.type, e.from.slug));
    inc(refKey(e.to.type, e.to.slug));
  }
  const degreeArr = PUBLISHED_CONTENT.map((i) => ({
    node: `${i.contentType}:${i.slug}`,
    degree: degree.get(refKey(i.contentType, i.slug)) ?? 0,
  })).sort((a, b) => b.degree - a.degree);

  // Average out-edges by content type.
  const avgByType: Record<string, number> = {};
  for (const type of CONTENT_TYPES) {
    const items = PUBLISHED_CONTENT.filter((i) => i.contentType === type);
    const total = items.reduce((s, i) => s + semanticEdges(i).length, 0);
    avgByType[type] = items.length ? +(total / items.length).toFixed(1) : 0;
  }

  const genericShare = +(
    ((byRelation.relatedConcept ?? 0) / edges.length) *
    100
  ).toFixed(1);

  return {
    totalEdges: edges.length,
    byRelation,
    genericSharePct: genericShare,
    avgByType,
    highestDegree: degreeArr.slice(0, 10),
    lowestDegree: degreeArr.slice(-10),
    incorrectReciprocity: incorrectReciprocalEdges().length,
  };
}

/* ---- safety audit -------------------------------------------------------- */

const SAFETY_TYPES = new Set([
  'fertilizer',
  'pest',
  'plant-disease',
  'livestock',
]);

// Prescriptive patterns that must NOT appear (specific doses, spray intervals,
// veterinary dosages, "apply at a rate of N unit/area").
const BANNED_PRESCRIPTIVE = [
  {
    label: 'application dose per area/volume',
    re: /\b\d+(?:\.\d+)?\s?(?:ml|l|g|kg|oz|lb)\s?(?:per|\/)\s?(?:l|litre|liter|ha|hectare|acre|plant|tree)\b/i,
  },
  {
    label: 'spray interval',
    re: /\bspray[^.]{0,40}\bevery\s?\d+\s?(?:days|weeks)\b/i,
  },
  {
    label: 'veterinary dosage',
    re: /\b\d+(?:\.\d+)?\s?(?:mg|ml|g)\s?(?:per|\/)\s?kg\b/i,
  },
  { label: 'rate-of instruction', re: /\bat a rate of\s?\d/i },
];

// Human-health-efficacy claims that must not appear on crop pages. Kept
// specific to medical/therapeutic language so agronomic "reduces the risk of
// bolting/lodging" phrasing is not falsely flagged.
const HEALTH_CLAIM =
  /\b(anti-inflammatory|medicinal (?:benefit|propert|use)|health benefits?|therapeutic (?:use|benefit|propert|effect)|(?:cures?|treats?|heals?) (?:cancer|diabetes|inflammation|illness|disease|ailments?|the body)|prevents? (?:cancer|diabetes|illness))\b/i;

export interface SafetyHit {
  where: string;
  code: string;
  detail: string;
}

function hasSafetyCallout(item: AnyContent): boolean {
  const check = (blocks: ContentBlock[]) =>
    blocks.some(
      (b) =>
        b.type === 'callout' &&
        (b.tone === 'important' || b.tone === 'caution'),
    );
  return check(item.introduction) || item.sections.some((s) => check(s.body));
}

export function safetyReport(): SafetyHit[] {
  const hits: SafetyHit[] = [];
  for (const item of ALL_CONTENT) {
    const where = `${item.contentType}:${item.slug}`;
    if (SAFETY_TYPES.has(item.contentType) && !hasSafetyCallout(item)) {
      hits.push({
        where,
        code: 'missing-safety-callout',
        detail: 'no important/caution callout',
      });
    }
    for (const s of itemStrings(item)) {
      for (const { label, re } of BANNED_PRESCRIPTIVE) {
        if (re.test(s))
          hits.push({
            where,
            code: 'prescriptive-instruction',
            detail: `${label}: "${s.slice(0, 80)}"`,
          });
      }
      if (item.contentType === 'crop' && HEALTH_CLAIM.test(s)) {
        hits.push({
          where,
          code: 'health-claim',
          detail: `"${s.slice(0, 80)}"`,
        });
      }
    }
  }
  return hits;
}

/* ---- provenance completeness -------------------------------------------- */

export function provenanceReport() {
  const withClaims = ALL_CONTENT.filter(
    (i) => (i.claims?.length ?? 0) > 0,
  ).length;
  const totalClaims = ALL_CONTENT.reduce(
    (s, i) => s + (i.claims?.length ?? 0),
    0,
  );
  const quantHits = quantitativeClaims();
  const quantPagesMissingProvenance = quantHits.filter(
    (h) => !h.hasQuantClaim,
  ).length;
  return {
    pagesWithClaims: withClaims,
    totalClaims,
    pagesWithQuantTokens: quantHits.length,
    quantPagesMissingProvenance,
  };
}
