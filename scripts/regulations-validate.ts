/**
 * Deterministic gate for the compliance corpus. Offline.
 *
 * The central rule: a requirement may only be marked `required` when it cites
 * an official source. Overstating a legal obligation invents a duty that may
 * not exist, which is materially worse than under-stating one — an
 * under-stated requirement sends the reader to the competent authority, an
 * over-stated one misleads them. The validator therefore treats an uncited
 * `required` as a hard error, and permits `uncertain` freely.
 *
 * Also enforced: authority and registry ids resolve against the real Wave 4/5
 * corpora (so a rename cannot leave a dangling reference), jurisdiction
 * resolution, superseded topics are never publishable, and every topic states
 * its limitations.
 */
import { COMPLIANCE_TOPICS } from '../data/compliance';
import {
  COMPLIANCE_TOPIC_TYPES,
  COMPLIANCE_ACTIONS,
  MANDATORY_STATUSES,
  COMPLIANCE_STATUSES,
  COMPLIANCE_PROFILE_DEPTHS,
  isPublishableComplianceTopic,
} from '../types/compliance';
import { SOURCE_MAP } from '../lib/sources/registry';
import { AUTHORITIES } from '../data/authorities';
import { REGISTRIES } from '../data/registries';
import { getProfileByCode } from '../lib/geo/registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const inSet = <T extends readonly string[]>(v: string, s: T) =>
  (s as readonly string[]).includes(v);

const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const JURISDICTION_IDS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const ids = new Set<string>();
const slugs = new Set<string>();

for (const t of COMPLIANCE_TOPICS) {
  const at = `topic "${t.id}"`;

  if (ids.has(t.id)) fail(`${at}: duplicate topic id`);
  ids.add(t.id);
  if (!SLUG.test(t.slug)) fail(`${at}: slug is not URL-safe kebab-case`);
  if (slugs.has(t.slug)) fail(`${at}: duplicate slug`);
  slugs.add(t.slug);
  if (!t.title.trim()) fail(`${at}: empty title`);
  if (!t.summary.trim()) fail(`${at}: empty summary`);

  if (!inSet(t.topicType, COMPLIANCE_TOPIC_TYPES))
    fail(`${at}: unknown topicType`);
  if (!inSet(t.status, COMPLIANCE_STATUSES)) fail(`${at}: unknown status`);
  if (!inSet(t.profileDepth, COMPLIANCE_PROFILE_DEPTHS))
    fail(`${at}: unknown profileDepth`);
  if (!ISO_DATE.test(t.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt is not ISO yyyy-mm-dd`);

  /* Jurisdiction ----------------------------------------------------------- */
  if (t.countryCode && !getProfileByCode(t.countryCode)) {
    fail(
      `${at}: countryCode "${t.countryCode}" does not resolve in the geo layer`,
    );
  }
  if (t.jurisdictionId && !JURISDICTION_IDS.has(t.jurisdictionId)) {
    fail(`${at}: jurisdictionId "${t.jurisdictionId}" does not resolve`);
  }
  if (!t.countryCode && !t.supranationalJurisdiction) {
    fail(`${at}: needs a countryCode or a supranationalJurisdiction`);
  }
  if (!t.jurisdictionName.trim()) fail(`${at}: empty jurisdictionName`);

  /* Cross-layer references ------------------------------------------------- */
  if (t.responsibleAuthorityIds.length === 0) {
    fail(`${at}: at least one responsible authority is required`);
  }
  for (const aid of t.responsibleAuthorityIds) {
    if (!AUTHORITY_IDS.has(aid)) fail(`${at}: unknown authority "${aid}"`);
  }
  for (const rid of t.relatedRegistryIds) {
    if (!REGISTRY_IDS.has(rid)) fail(`${at}: unknown registry "${rid}"`);
  }
  if (t.officialSources.length === 0)
    fail(`${at}: at least one official source is required`);
  for (const sid of t.officialSources) {
    if (!SOURCE_MAP.has(sid)) fail(`${at}: unknown official source "${sid}"`);
  }

  if (!t.limitations || t.limitations.length === 0) {
    fail(
      `${at}: limitations are required — a compliance page must state what it does not establish`,
    );
  }

  /* Requirements ------------------------------------------------------------ */
  if (t.requirements.length === 0)
    fail(`${at}: at least one requirement is required`);
  const reqIds = new Set<string>();
  for (const r of t.requirements) {
    const rat = `${at}, requirement "${r.id}"`;
    if (reqIds.has(r.id)) fail(`${rat}: duplicate requirement id`);
    reqIds.add(r.id);
    if (!r.title.trim()) fail(`${rat}: empty title`);
    if (!r.note.trim()) fail(`${rat}: empty note`);
    if (r.appliesTo.length === 0) fail(`${rat}: appliesTo is required`);
    if (!inSet(r.action, COMPLIANCE_ACTIONS))
      fail(`${rat}: unknown action "${r.action}"`);
    if (!inSet(r.mandatoryStatus, MANDATORY_STATUSES))
      fail(`${rat}: unknown mandatoryStatus`);

    for (const aid of r.authorityIds) {
      if (!AUTHORITY_IDS.has(aid)) fail(`${rat}: unknown authority "${aid}"`);
    }
    for (const rid of r.registryIds ?? []) {
      if (!REGISTRY_IDS.has(rid)) fail(`${rat}: unknown registry "${rid}"`);
    }
    for (const sid of r.officialSourceIds) {
      if (!SOURCE_MAP.has(sid))
        fail(`${rat}: unknown official source "${sid}"`);
    }

    // THE central rule.
    if (r.mandatoryStatus === 'required' && r.officialSourceIds.length === 0) {
      fail(
        `${rat}: marked "required" with no official source — a mandatory legal obligation may never be asserted uncited`,
      );
    }
    // A `verify` action tells the reader where to look; it must not
    // simultaneously assert that something is legally required.
    if (r.action === 'verify' && r.mandatoryStatus === 'required') {
      fail(
        `${rat}: a "verify" action cannot carry mandatoryStatus "required" — it directs the reader to check, it does not state an obligation`,
      );
    }
    // A required obligation should point somewhere actionable.
    if (
      r.mandatoryStatus === 'required' &&
      (r.registryIds ?? []).length === 0 &&
      (r.formUrls ?? []).length === 0
    ) {
      fail(
        `${rat}: a required obligation should reference a registry or an official form`,
      );
    }
  }

  /* Publication ------------------------------------------------------------- */
  if (t.status === 'superseded' && isPublishableComplianceTopic(t)) {
    fail(`${at}: a superseded topic must never be publishable as current`);
  }
  if (t.profileDepth === 'full-profile' && t.requirements.length < 1) {
    fail(`${at}: full-profile requires at least one modelled requirement`);
  }
}

const published = COMPLIANCE_TOPICS.filter(isPublishableComplianceTopic);
const reqs = COMPLIANCE_TOPICS.flatMap((t) => t.requirements);

console.log('\nAgricultural compliance validation\n');
console.log(`  Compliance topics:        ${COMPLIANCE_TOPICS.length}`);
console.log(`  Publishable (pages):      ${published.length}`);
console.log(`  Requirements modelled:    ${reqs.length}`);
console.log(
  `    …required (cited):      ${reqs.filter((r) => r.mandatoryStatus === 'required').length}`,
);
console.log(
  `    …conditional:           ${reqs.filter((r) => r.mandatoryStatus === 'conditional').length}`,
);
console.log(
  `    …uncertain (verify):    ${reqs.filter((r) => r.mandatoryStatus === 'uncertain').length}`,
);
console.log(
  `  Registries referenced:    ${new Set(COMPLIANCE_TOPICS.flatMap((t) => t.relatedRegistryIds)).size}`,
);
console.log(
  `  Authorities referenced:   ${new Set(COMPLIANCE_TOPICS.flatMap((t) => t.responsibleAuthorityIds)).size}`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Compliance validation passed.\n');
