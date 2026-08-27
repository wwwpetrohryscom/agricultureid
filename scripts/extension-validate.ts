/**
 * Deterministic gate for the extension index. Offline.
 *
 * Three failure modes matter here, and none is structural.
 *
 *  1. **Claiming a mandate.** "Official extension" is a claim about an
 *     institution, not a property of a .edu domain. Every institution must name
 *     the mandate it holds AND the statement establishing it, and every
 *     resource must be attributed to a host that institution actually runs —
 *     otherwise a consultancy page could be filed under a land-grant service.
 *  2. **Republishing.** This layer indexes; it does not copy. The gate bounds
 *     every stored text field, rejects a summary that merely restates the
 *     title, and rejects duplicated summaries — the shape a paste takes.
 *  3. **Turning an index into advice.** "The source discusses nitrogen timing"
 *     is a statement about a document; "apply nitrogen at GS30" is agronomy
 *     this index is not entitled to. Summaries written in the second person or
 *     as instructions are rejected.
 *
 * Jurisdiction is checked in one direction only: a resource may never claim a
 * wider jurisdiction than the institution that published it.
 */
import { EXTENSION_RESOURCES } from '../data/extension';
import { EXTENSION_INSTITUTIONS } from '../data/extension/institutions';
import {
  EXTENSION_MANDATES,
  EXTENSION_TOPICS,
  RESOURCE_TYPES,
  SUMMARY_MAX_LENGTH,
  SUMMARY_MIN_LENGTH,
} from '../types/extension';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';
import { AUTHORITIES } from '../data/authorities';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const TODAY = '2026-12-31';
const JURISDICTIONS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const BY_TYPE = new Map<string, Set<string>>();
for (const c of PUBLISHED_CONTENT) {
  const set = BY_TYPE.get(c.contentType) ?? new Set<string>();
  set.add(c.slug);
  BY_TYPE.set(c.contentType, set);
}
const has = (type: string, slug: string) =>
  BY_TYPE.get(type)?.has(slug) ?? false;

/** Second-person or imperative phrasing — advice, not indexing. */
const PRESCRIPTIVE =
  /\b(you should|you must|you can|your farm|we recommend|it is recommended|make sure|be sure to|do not apply|always apply|never apply)\b/i;
/** Longest stored text field. Anything longer starts to be a republication. */
const MAX_KEY_TOPIC_LENGTH = 90;

/* -- institutions ---------------------------------------------------------- */
const institutionIds = new Set<string>();
const institutionHosts = new Map<string, string>();

for (const i of EXTENSION_INSTITUTIONS) {
  const at = `institution ${i.id}`;
  if (institutionIds.has(i.id)) fail(`${at}: duplicate id`);
  institutionIds.add(i.id);

  if (!EXTENSION_MANDATES.includes(i.mandate))
    fail(`${at}: mandate "${i.mandate}" is not in the vocabulary`);
  if (!i.mandateBasis || i.mandateBasis.length < 40)
    fail(
      `${at}: mandateBasis must state the evidence for the mandate — "official extension" is a checked claim, not a domain suffix`,
    );
  if (!/^[A-Z]{3}$/.test(i.countryCode))
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);
  if (i.jurisdictionId && !JURISDICTIONS.has(i.jurisdictionId))
    fail(`${at}: jurisdictionId "${i.jurisdictionId}" is not canonical`);
  if (i.responsibleAuthorityId && !AUTHORITY_IDS.has(i.responsibleAuthorityId))
    fail(
      `${at}: responsibleAuthorityId "${i.responsibleAuthorityId}" is unknown`,
    );
  if (!i.sourceReferences.length) fail(`${at}: a source reference is required`);
  for (const s of i.sourceReferences)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!ISO_DATE.test(i.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);

  try {
    const url = new URL(i.homepageUrl);
    if (url.protocol !== 'https:') fail(`${at}: homepageUrl must be https`);
    institutionHosts.set(i.id, url.hostname.replace(/^www\./, ''));
  } catch {
    fail(`${at}: homepageUrl is not a URL`);
  }
}

/* -- resources ------------------------------------------------------------- */
const ids = new Set<string>();
const urls = new Set<string>();
const summaries = new Map<string, string>();

for (const r of EXTENSION_RESOURCES) {
  const at = r.id;
  if (ids.has(r.id)) fail(`${at}: duplicate id`);
  ids.add(r.id);
  if (r.id !== r.slug) fail(`${at}: id and slug must match`);
  if (urls.has(r.officialUrl))
    fail(`${at}: duplicate officialUrl — the same resource indexed twice`);
  urls.add(r.officialUrl);

  const institution = EXTENSION_INSTITUTIONS.find(
    (i) => i.id === r.institutionId,
  );
  if (!institution) {
    fail(`${at}: institutionId "${r.institutionId}" is not a known publisher`);
    continue;
  }

  /* attribution: the URL must be on a host the publisher runs */
  let host = '';
  try {
    const url = new URL(r.officialUrl);
    if (url.protocol !== 'https:') fail(`${at}: officialUrl must be https`);
    host = url.hostname.replace(/^www\./, '');
  } catch {
    fail(`${at}: officialUrl is not a URL`);
  }
  const expected = institutionHosts.get(r.institutionId) ?? '';
  const root = expected.split('.').slice(-2).join('.');
  if (host && root && !host.endsWith(root))
    fail(
      `${at}: hosted at "${host}" but attributed to ${institution.officialName} (${expected}) — a resource may not be filed under a publisher that does not host it`,
    );

  /* jurisdiction is inherited, never widened */
  if (r.countryCode !== institution.countryCode)
    fail(
      `${at}: countryCode "${r.countryCode}" differs from its publisher's "${institution.countryCode}"`,
    );
  if (
    institution.jurisdictionId &&
    r.jurisdictionId !== institution.jurisdictionId
  )
    fail(
      `${at}: publisher serves ${institution.jurisdictionId}; a resource may not claim a different or wider jurisdiction`,
    );
  if (!institution.jurisdictionId && r.jurisdictionId)
    fail(
      `${at}: claims jurisdiction ${r.jurisdictionId} but its publisher declares none`,
    );

  /* vocabularies */
  if (!RESOURCE_TYPES.includes(r.resourceType))
    fail(`${at}: resourceType "${r.resourceType}" is not in the vocabulary`);
  if (!r.topics.length) fail(`${at}: at least one topic is required`);
  for (const t of r.topics)
    if (!EXTENSION_TOPICS.includes(t))
      fail(`${at}: topic "${t}" is not in the vocabulary`);
  if (new Set(r.topics).size !== r.topics.length)
    fail(`${at}: duplicate topic`);

  /* entity references must exist AND be of the right kind */
  for (const [field, type] of [
    ['cropRefs', 'crop'],
    ['livestockRefs', 'livestock'],
    ['pestRefs', 'pest'],
    ['diseaseRefs', 'plant-disease'],
  ] as const) {
    for (const slug of r[field]) {
      if (!has(type, slug))
        fail(`${at}: ${field} "${slug}" is not a published ${type}`);
    }
  }
  for (const slug of r.topicRefs) {
    if (!PUBLISHED_CONTENT.some((c) => c.slug === slug))
      fail(`${at}: topicRef "${slug}" is not published content`);
  }
  const linked =
    r.cropRefs.length +
    r.livestockRefs.length +
    r.pestRefs.length +
    r.diseaseRefs.length +
    r.topicRefs.length;
  if (linked === 0)
    fail(`${at}: a resource linked to nothing cannot be found from anywhere`);

  /* dates: the publisher's own, coherent, and not in the future */
  for (const [field, value] of [
    ['publicationDate', r.publicationDate],
    ['revisionDate', r.revisionDate],
  ] as const) {
    if (value === undefined) continue;
    if (!ISO_DATE.test(value)) fail(`${at}: ${field} must be an ISO date`);
    else if (value > TODAY) fail(`${at}: ${field} is in the future`);
  }
  if (r.publicationDate && r.revisionDate && r.revisionDate < r.publicationDate)
    fail(`${at}: revisionDate precedes publicationDate`);
  if (!ISO_DATE.test(r.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  if (!r.publicationDate && !r.revisionDate) {
    if (!r.limitations.some((l) => /no publication or revision date/i.test(l)))
      fail(
        `${at}: undated resources must say so — verified reachable is not the same as current`,
      );
  }

  /* indexing, not republishing, and not advising */
  if (!r.officialTitle.trim()) fail(`${at}: officialTitle is empty`);
  if (r.summary.length < SUMMARY_MIN_LENGTH)
    fail(`${at}: summary is shorter than ${SUMMARY_MIN_LENGTH} characters`);
  if (r.summary.length > SUMMARY_MAX_LENGTH)
    fail(
      `${at}: summary is longer than ${SUMMARY_MAX_LENGTH} characters — an index entry, not a reproduction`,
    );
  if (r.summary.trim().toLowerCase() === r.officialTitle.trim().toLowerCase())
    fail(`${at}: summary merely restates the title`);
  // Quoted spans are the PUBLISHER's words — a heading may address the reader
  // directly without the index doing so. The check runs on our framing only.
  const unquoted = r.summary.replace(/[\u201c"][^\u201d"]*[\u201d"]/g, ' ');
  if (PRESCRIPTIVE.test(unquoted))
    fail(
      `${at}: summary is written as advice. This layer describes documents; it does not give agronomic instructions.`,
    );
  const quotedLength = r.summary.length - unquoted.replace(/\s+/g, ' ').length;
  if (quotedLength > r.summary.length * 0.6)
    fail(
      `${at}: more than 60% of the summary is quoted source text — an index entry, not a reproduction`,
    );
  const priorId = summaries.get(r.summary);
  if (priorId)
    fail(
      `${at}: summary is identical to ${priorId} — a duplicated description`,
    );
  summaries.set(r.summary, r.id);

  if (!r.keyTopics.length) fail(`${at}: keyTopics are required`);
  for (const k of r.keyTopics) {
    if (k.length > MAX_KEY_TOPIC_LENGTH)
      fail(
        `${at}: keyTopic longer than ${MAX_KEY_TOPIC_LENGTH} characters — headings are labels, not prose`,
      );
  }
  if (!r.limitations.length) fail(`${at}: limitations are required`);
  if (!r.limitations.some((l) => /written for/i.test(l)))
    fail(
      `${at}: must state the jurisdiction it was written for — one-region guidance presented generally is the failure this layer exists to prevent`,
    );
  if (!r.sourceReferences.length) fail(`${at}: a source reference is required`);
  for (const s of r.sourceReferences)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
}

/* -- report ---------------------------------------------------------------- */
console.log('\nExtension resource validation\n');
console.log(`  Institutions:             ${EXTENSION_INSTITUTIONS.length}`);
console.log(`  Resources:                ${EXTENSION_RESOURCES.length}`);
console.log(
  `    …with a publisher date: ${EXTENSION_RESOURCES.filter((r) => r.publicationDate ?? r.revisionDate).length}`,
);
console.log(
  `  Topics used:              ${new Set(EXTENSION_RESOURCES.flatMap((r) => r.topics)).size} of ${EXTENSION_TOPICS.length}`,
);
for (const i of EXTENSION_INSTITUTIONS) {
  const n = EXTENSION_RESOURCES.filter((r) => r.institutionId === i.id).length;
  console.log(
    `  ${i.officialName.slice(0, 24).padEnd(26)}${String(n).padStart(4)}  ${i.mandate}`,
  );
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Extension validation passed.\n');
