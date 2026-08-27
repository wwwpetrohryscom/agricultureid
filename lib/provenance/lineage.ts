/**
 * Resolving a material claim to its evidence. Reads existing state; stores none.
 *
 * Each resolver below turns what a layer already holds into the same shape, so
 * a reader gets the same account of "why does AgricultureID say this" whether
 * the claim is a pesticide authorisation, a quarantine listing or a ministry's
 * name. Where a layer genuinely lacks a link — most registers publish no
 * capture identifier per entry — the lineage omits it, and the contract for
 * that claim kind says so in advance.
 */
import type {
  ClaimLineage,
  LineageSource,
  TruthState,
} from '@/types/provenance';
import { LINEAGE_CONTRACT_MAP } from './contracts';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { evidenceTier } from '@/lib/sources/evidence';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';
import { allAuthorizations } from '@/lib/inputs/registry';
import { VARIETY_REGISTRATIONS } from '@/data/varieties';
import { BIOSECURITY_STATUS } from '@/data/biosecurity';
import { COMPLIANCE_TOPICS } from '@/data/compliance';
import { AUTHORITIES } from '@/data/authorities';
import { SUPPORT_PROGRAMS } from '@/data/support';
import { allSoilObservations } from '@/lib/soils/registry';
import { TRADE_REQUIREMENTS } from '@/lib/trade/registry';
import { SOIL_DATASET_CONTRACT_MAP } from '@/lib/soils/contracts';

function sourcesOf(ids: readonly string[]): LineageSource[] {
  const out: LineageSource[] = [];
  for (const id of ids) {
    const s = SOURCE_MAP.get(id);
    if (!s) continue;
    out.push({
      sourceId: id,
      organization: s.organization,
      title: s.title,
      url: s.url,
      evidenceTier: evidenceTier(id),
    });
  }
  return out;
}

function releaseOf(snapshotId?: string) {
  if (!snapshotId) return undefined;
  const d = SOURCE_SNAPSHOTS.find((s) => s.id === snapshotId);
  if (!d) return { snapshotId };
  return {
    snapshotId,
    sourceReleaseId: d.sourceReleaseId,
    retrievedAt: d.retrievedAt,
  };
}

/**
 * A claim's truth state, from what the layer records — never a score.
 *
 * `uncertain` is the layer's own word where it has one: a compliance
 * requirement whose mandatory status is `uncertain` is not a weakly-supported
 * `required`, it is a requirement AgricultureID has not established.
 */
const stateFrom = (
  hasSource: boolean,
  hasVerified: boolean,
  declaredUncertain: boolean,
): TruthState =>
  !hasSource
    ? 'unavailable'
    : declaredUncertain
      ? 'uncertain'
      : hasVerified
        ? 'verified'
        : 'partial';

export function inputAuthorizationLineage(
  id: string,
): ClaimLineage | undefined {
  const a = allAuthorizations().find((x) => x.id === id);
  if (!a) return undefined;
  const sources = sourcesOf(a.sourceReferences);
  return {
    claimKind: 'input-authorization',
    claimId: a.id,
    claimLabel: a.authorizationNumber
      ? `${a.inputRef} (${a.authorizationNumber})`
      : a.inputRef,
    statement: `Recorded as ${a.status} in ${a.jurisdictionName}.`,
    sources,
    release: releaseOf(a.sourceSnapshotId),
    locator: a.authorizationNumber
      ? { kind: 'register-record-id', value: a.authorizationNumber }
      : {
          kind: 'source-field',
          value: 'status',
          why: 'The register publishes no decision number for this record.',
        },
    sourceWording: { text: a.publishedStatus, field: 'status' },
    interpretation: { value: a.status, vocabulary: 'AuthorizationStatus' },
    verifiedAt: a.lastVerifiedAt,
    truthState: stateFrom(
      sources.length > 0,
      Boolean(a.lastVerifiedAt),
      a.status === 'uncertain',
    ),
    conflicts: [],
    limitations: a.limitations,
  };
}

export function varietyRegistrationLineage(
  id: string,
): ClaimLineage | undefined {
  const r = VARIETY_REGISTRATIONS.find((x) => x.id === id);
  if (!r) return undefined;
  const sources = sourcesOf(r.sourceReferences);
  return {
    claimKind: 'variety-registration',
    claimId: r.id,
    claimLabel: `${r.denomination} — ${r.countryOrOrganisation}`,
    statement: `Recorded as ${r.status} on the ${r.registerName}.`,
    sources,
    locator: r.registerEntryId
      ? { kind: 'register-record-id', value: r.registerEntryId }
      : {
          kind: 'none',
          why: 'This register publishes no identifier for an entry; the denomination and species are the whole of what it addresses.',
        },
    sourceWording: {
      text: r.publishedStatusWording,
      field: 'status',
    },
    interpretation: {
      value: r.status,
      vocabulary: 'VarietyRegistrationStatus',
    },
    verifiedAt: r.lastVerifiedAt,
    truthState: stateFrom(sources.length > 0, Boolean(r.lastVerifiedAt), false),
    conflicts: [],
    limitations: r.limitations,
  };
}

export function biosecurityLineage(id: string): ClaimLineage | undefined {
  const b = BIOSECURITY_STATUS.find((x) => x.id === id);
  if (!b) return undefined;
  const sources = sourcesOf(b.sourceReferences);
  return {
    claimKind: 'biosecurity-status',
    claimId: b.id,
    claimLabel: `${b.officialListEntry} — ${b.jurisdictionName}`,
    statement: `Listed on the ${b.officialListName}${b.listVersion ? ` (${b.listVersion})` : ''}.`,
    sources,
    locator: {
      kind: 'official-list-entry',
      value: b.officialListEntry,
    },
    sourceWording: { text: b.officialListEntry, field: 'list entry' },
    interpretation: {
      value: b.regulatoryStatus,
      vocabulary: 'RegulatoryStatus',
    },
    verifiedAt: b.lastVerifiedAt,
    truthState: stateFrom(sources.length > 0, Boolean(b.lastVerifiedAt), false),
    conflicts: [],
    limitations: b.limitations,
  };
}

export function complianceRequirementLineage(
  id: string,
): ClaimLineage | undefined {
  for (const t of COMPLIANCE_TOPICS) {
    const r = t.requirements.find((x) => x.id === id);
    if (!r) continue;
    const sources = sourcesOf(r.officialSourceIds);
    // Citing a law is not the same as having read an article of it. One of
    // these six requirements records the operative text — "Article 28(1)
    // provides that…" — and the other records why the EU database is not the
    // authoritative source for a product-level decision. Both cite the same
    // Regulation. Only the first has an address, and passing the second off as
    // a legal citation would present an explanatory note as operative law.
    const article = /\bArticles?\s+\d+[^.,;]*/.exec(r.note ?? '')?.[0]?.trim();
    const citesLaw = r.officialSourceIds.some((s) => s.startsWith('law-'));
    const isLaw = citesLaw && Boolean(article);
    return {
      claimKind: 'compliance-requirement',
      claimId: r.id,
      claimLabel: r.title,
      statement: `Recorded as ${r.mandatoryStatus} in ${t.jurisdictionName}.`,
      sources,
      // The one requirement backed by operative legal text names its article;
      // the rest name the authority page that states the obligation. Wave 6
      // allowed `required` only where the article itself was read.
      locator: isLaw
        ? {
            kind: 'legal-article',
            value: `${sources[0]?.title ?? 'the instrument cited'}, ${article}`,
          }
        : {
            kind: 'page-heading',
            value: t.title,
            why: citesLaw
              ? 'The requirement cites an instrument but no article of it was read, so it is traced to the topic that states it rather than presented as a legal citation.'
              : 'No operative legal text was read for this requirement, so it is traced to the authority page that states it.',
          },
      interpretation: {
        value: r.mandatoryStatus,
        vocabulary: 'MandatoryStatus',
      },
      verifiedAt: t.lastVerifiedAt,
      truthState: stateFrom(
        sources.length > 0,
        Boolean(t.lastVerifiedAt),
        r.mandatoryStatus === 'uncertain',
      ),
      conflicts: [],
      limitations: t.limitations,
    };
  }
  return undefined;
}

export function authorityIdentityLineage(id: string): ClaimLineage | undefined {
  const a = AUTHORITIES.find((x) => x.id === id);
  if (!a) return undefined;
  const sources = sourcesOf(a.sourceReferences);
  const v = a.verification?.[0];
  return {
    claimKind: 'authority-identity',
    claimId: a.id,
    claimLabel: a.officialName,
    statement: `Official name of the body responsible in ${a.jurisdictionName}.`,
    sources,
    locator: v
      ? { kind: 'page-heading', value: v.url }
      : {
          kind: 'none',
          why: 'No verification page is recorded for this body.',
        },
    sourceWording: { text: a.officialName, field: 'official name' },
    verifiedAt: v?.verifiedAt,
    truthState: stateFrom(sources.length > 0, Boolean(v?.verifiedAt), false),
    conflicts: [],
    limitations: a.limitations ?? [],
  };
}

export function supportProgrammeLineage(id: string): ClaimLineage | undefined {
  const p = SUPPORT_PROGRAMS.find((x) => x.id === id);
  if (!p) return undefined;
  const sources = sourcesOf(p.sourceReferences);
  return {
    claimKind: 'support-programme-status',
    claimId: p.id,
    claimLabel: p.officialName,
    statement: `Recorded as ${p.status} in ${p.jurisdictionName}.`,
    sources,
    locator: {
      kind: 'page-heading',
      value: p.officialUrl,
      why: 'The programme page states that the scheme runs; it publishes no addressable status field.',
    },
    interpretation: {
      value: p.status,
      vocabulary: 'SupportProgrammeStatus',
    },
    verifiedAt: p.lastVerifiedAt,
    truthState: stateFrom(sources.length > 0, Boolean(p.lastVerifiedAt), false),
    conflicts: [],
    limitations: p.limitations ?? [],
  };
}

export function soilObservationLineage(id: string): ClaimLineage | undefined {
  const o = allSoilObservations().find((x) => x.id === id);
  if (!o) return undefined;
  const sources = sourcesOf(o.sourceReferences);
  const contract = SOIL_DATASET_CONTRACT_MAP.get(o.sourceDatasetId);
  const value = o.range
    ? `${o.range.min}–${o.range.max} ${o.unit ?? ''}`.trim()
    : (o.categoricalValue ?? '');
  return {
    claimKind: 'soil-observation',
    claimId: o.id,
    claimLabel: `${o.soilBody} — ${o.property}`,
    statement: `The survey records ${value} for ${o.property} across ${o.unitsCovered.mapUnits} mapped units of ${o.soilBody} in ${o.jurisdictionId}.`,
    sources,
    release: releaseOf(
      SOURCE_SNAPSHOTS.find((s) => s.sourceId === o.sourceReferences[0])?.id,
    ),
    locator: {
      kind: 'dataset-series',
      value: `${o.sourceDatasetId} · ${o.jurisdictionId} · ${o.soilBody}`,
    },
    sourceWording: o.classification
      ? { text: o.classification.value, field: 'taxonomic order' }
      : o.categoricalValue
        ? { text: o.categoricalValue, field: o.property }
        : undefined,
    interpretation: {
      value: o.evidenceClass,
      vocabulary: 'SoilEvidenceClass',
    },
    verifiedAt: o.lastVerifiedAt,
    truthState: stateFrom(sources.length > 0, Boolean(o.lastVerifiedAt), false),
    conflicts: [],
    limitations: contract
      ? [
          'A representative value characterises a mapped soil body. It is not a measurement of a particular field.',
        ]
      : [],
  };
}

export function tradeRequirementLineage(id: string): ClaimLineage | undefined {
  const r = TRADE_REQUIREMENTS.find((x) => x.id === id);
  if (!r) return undefined;
  const sources = sourcesOf(r.officialSourceIds);
  return {
    claimKind: 'trade-requirement',
    claimId: r.id,
    claimLabel: r.title,
    statement: `Recorded as ${r.status} for ${r.direction} into ${r.jurisdictionName}.`,
    sources,
    locator: {
      kind: 'page-heading',
      value: r.title,
      why: 'The official system decides case by case; there is no record in it to address, which is why this claim points at the system rather than a rule inside it.',
    },
    interpretation: { value: r.status, vocabulary: 'RequirementStatus' },
    verifiedAt: r.lastVerifiedAt,
    truthState: stateFrom(
      sources.length > 0,
      Boolean(r.lastVerifiedAt),
      r.status === 'uncertain',
    ),
    conflicts: [],
    limitations: [...r.limitations],
  };
}

/** Every claim this layer can trace, for the gate and the report. */
export function allLineages(): ClaimLineage[] {
  const out: ClaimLineage[] = [];
  for (const a of allAuthorizations()) {
    const l = inputAuthorizationLineage(a.id);
    if (l) out.push(l);
  }
  for (const r of VARIETY_REGISTRATIONS) {
    const l = varietyRegistrationLineage(r.id);
    if (l) out.push(l);
  }
  for (const b of BIOSECURITY_STATUS) {
    const l = biosecurityLineage(b.id);
    if (l) out.push(l);
  }
  for (const t of COMPLIANCE_TOPICS)
    for (const r of t.requirements) {
      const l = complianceRequirementLineage(r.id);
      if (l) out.push(l);
    }
  for (const a of AUTHORITIES) {
    const l = authorityIdentityLineage(a.id);
    if (l) out.push(l);
  }
  for (const p of SUPPORT_PROGRAMS) {
    const l = supportProgrammeLineage(p.id);
    if (l) out.push(l);
  }
  for (const r of TRADE_REQUIREMENTS) {
    const l = tradeRequirementLineage(r.id);
    if (l) out.push(l);
  }
  // One lineage per soil observation would be 91,620 resolutions on every
  // read of the gate. The layer is uniform — one dataset, one contract, one
  // evidence class — so a representative sample per jurisdiction and property
  // exercises every path the contract permits without resolving all of them.
  const seen = new Set<string>();
  for (const o of allSoilObservations()) {
    const key = `${o.jurisdictionId}|${o.property}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const l = soilObservationLineage(o.id);
    if (l) out.push(l);
  }
  return out;
}

/** Contract for a claim kind, or undefined — which means it cannot be resolved. */
export const contractFor = (kind: ClaimLineage['claimKind']) =>
  LINEAGE_CONTRACT_MAP.get(kind);
