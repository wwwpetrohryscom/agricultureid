/**
 * Deterministic gate for the change-history layer. Offline.
 *
 * The failure this gate exists to prevent is a page saying something is true
 * now when it stopped being true years ago, or saying a change took effect on a
 * date that is really the date AgricultureID went looking. Both are the same
 * mistake: treating one kind of date as another.
 *
 * So the rules are about dates, scope and provenance:
 *
 *   an occurrence date is only ever the source's own, and only ever in the past
 *   a detection date is never presented as an occurrence date
 *   an event about one jurisdiction never claims another
 *   an instrument's history is never merged with another instrument's
 *   every event resolves to an entity that still exists
 *   nothing that is CURRENT appears as history
 */
import {
  CHANGE_ENTITY_TYPES,
  EVENT_PROVENANCES,
  EVENT_VERIFICATION_STATUSES,
} from '../types/history';
import { CHANGE_TYPES } from '../types/freshness';
import {
  allChangeEvents,
  authorityEvents,
  inputAuthorizationEvents,
  varietyRegistrationEvents,
} from '../lib/history/derive';
import { eventsForEntity, historyGroups } from '../lib/history/registry';
import {
  HISTORY_DATE_CONTRACTS,
  HISTORY_DATE_CONTRACT_MAP,
} from '../lib/history/contracts';
import { AUTHORITY_CHANGES } from '../data/history';
import { AUTHORITIES } from '../data/authorities';
import { VARIETY_REGISTRATIONS } from '../data/varieties';
import { isCurrent as isCurrentRegistration } from '../lib/varieties/registry';
import {
  allAuthorizations,
  isCurrent as isCurrentAuthorization,
} from '../lib/inputs/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { SOURCE_SNAPSHOTS } from '../data/freshness';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const CORPUS_DATE = '2026-08-27';

const EVENTS = allChangeEvents();
const CULTIVARS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map(
    (c) => c.slug,
  ),
);
const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const INPUT_REFS = new Set(allAuthorizations().map((a) => a.inputRef));
const SNAPSHOT_IDS = new Set(SOURCE_SNAPSHOTS.map((s) => s.id));

const ids = new Set<string>();

for (const e of EVENTS) {
  const at = e.id;

  if (ids.has(e.id)) fail(`${at}: duplicate event id`);
  ids.add(e.id);

  if (!CHANGE_ENTITY_TYPES.includes(e.entityType))
    fail(`${at}: entityType not in vocabulary`);
  if (!CHANGE_TYPES.includes(e.changeType))
    fail(`${at}: changeType not in vocabulary`);
  if (!EVENT_PROVENANCES.includes(e.provenance))
    fail(`${at}: provenance not in vocabulary`);
  if (!EVENT_VERIFICATION_STATUSES.includes(e.verificationStatus))
    fail(`${at}: verificationStatus not in vocabulary`);

  /* -- the two dates, and what each may mean --------------------------- */
  if (!ISO.test(e.detectedAt)) fail(`${at}: detectedAt must be an ISO date`);
  else if (e.detectedAt > CORPUS_DATE)
    fail(
      `${at}: detectedAt ${e.detectedAt} is after the corpus verification date`,
    );

  // What the date MEANS, pinned per entity type. A well-formed past date can
  // still be the wrong KIND of date: a grant date read as an expiry dates a
  // right's ending to the day it began.
  const dateContract = HISTORY_DATE_CONTRACT_MAP.get(e.entityType);
  if (!dateContract)
    fail(
      `${at}: entity type "${e.entityType}" has no date contract, so nothing constrains what its occurrence date could mean`,
    );
  else if (dateContract.occurrenceField === null && e.occurredAt !== undefined)
    fail(
      `${at}: carries an occurrence date, but no source for a ${e.entityType} publishes a date for a change — ${dateContract.why}`,
    );

  if (e.occurredAt !== undefined) {
    if (!ISO.test(e.occurredAt)) fail(`${at}: occurredAt must be an ISO date`);
    // An event describes something that already happened. A date after the
    // capture is a SCHEDULED ending, and publishing it as history would say a
    // product had been withdrawn while it is still authorised.
    else if (e.occurredAt > CORPUS_DATE)
      fail(
        `${at}: occurredAt ${e.occurredAt} is in the future, so it is a scheduled change rather than one that has happened`,
      );
    if (e.provenance !== 'source-dated')
      fail(
        `${at}: carries an occurrence date but its provenance is "${e.provenance}" — only a source-dated event may state when a change took effect`,
      );
    // The exact equality that would mean a detection date was substituted for
    // an effective one is not itself proof, but for these sources it never
    // happens legitimately: no register in this corpus published a decision on
    // the day AgricultureID happened to read it.
    if (e.occurredAt === e.detectedAt)
      fail(
        `${at}: occurredAt equals detectedAt, which for these sources means a retrieval date was used as an effective date`,
      );
  } else if (e.provenance === 'source-dated') {
    fail(`${at}: declared source-dated but carries no occurrence date`);
  }
  if (e.verifiedAt && !ISO.test(e.verifiedAt))
    fail(`${at}: verifiedAt must be an ISO date`);

  /* -- an undated event must say so ------------------------------------ */
  if (!e.occurredAt && e.limitations.length === 0)
    fail(
      `${at}: has no occurrence date and no limitation saying the source published none`,
    );

  /* -- scope ------------------------------------------------------------ */
  if (!e.jurisdictionName?.trim()) fail(`${at}: no jurisdiction`);
  if (e.countryCode && !/^[A-Z]{3}$/.test(e.countryCode))
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);

  /* -- provenance ------------------------------------------------------- */
  if (!e.sourceIds.length) fail(`${at}: no source`);
  for (const s of e.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  for (const s of e.snapshotIds)
    if (!SNAPSHOT_IDS.has(s)) fail(`${at}: unknown snapshot "${s}"`);

  /* -- the entity must exist -------------------------------------------- */
  if (e.entityType === 'variety-registration' && !CULTIVARS.has(e.entityId))
    fail(`${at}: entityId "${e.entityId}" is not a published cultivar`);
  if (e.entityType === 'authority' && !AUTHORITY_IDS.has(e.entityId))
    fail(`${at}: entityId "${e.entityId}" is not a known authority`);
  if (e.entityType === 'input-authorization' && !INPUT_REFS.has(e.entityId))
    fail(`${at}: entityId "${e.entityId}" is not a known input`);
}

/* -- nothing current may appear as history -------------------------------- */
for (const r of VARIETY_REGISTRATIONS) {
  if (!isCurrentRegistration(r)) continue;
  if (EVENTS.some((e) => e.id === `variety-registration:${r.id}`))
    fail(
      `variety-registration:${r.id}: a CURRENT registration appears in history`,
    );
}
for (const a of allAuthorizations()) {
  if (!isCurrentAuthorization(a)) continue;
  if (EVENTS.some((e) => e.id.startsWith(`input-authorization:${a.id}:`)))
    fail(
      `input-authorization:${a.id}: a CURRENT authorisation appears in history`,
    );
}

/* -- history is never merged across instrument or jurisdiction ------------ */
for (const slug of new Set(
  EVENTS.filter((e) => e.entityType === 'variety-registration').map(
    (e) => e.entityId,
  ),
)) {
  const groups = historyGroups(eventsForEntity('variety-registration', slug));
  for (const g of groups) {
    const instruments = new Set(g.events.map((e) => e.instrument));
    const jurisdictions = new Set(g.events.map((e) => e.jurisdictionName));
    if (instruments.size > 1 || jurisdictions.size > 1)
      fail(
        `${slug}: a history group mixes instruments or jurisdictions (${[...instruments].join(', ')} / ${[...jurisdictions].join(', ')})`,
      );
  }
}

/* -- stored events carry what derivation cannot ---------------------------- */
for (const e of AUTHORITY_CHANGES) {
  if (!e.previousValue)
    fail(`${e.id}: a rename must record what the name was before`);
  if (!e.explanation)
    fail(`${e.id}: a stored event must explain what established it`);
  if (e.occurredAt)
    fail(
      `${e.id}: no rename date is established in this corpus, so none may be published`,
    );
}
// An alias is not a former name: an authority may not gain a rename event just
// by having one recorded somewhere.
for (const a of AUTHORITIES as { id: string; aliases?: string[] }[]) {
  if (!a.aliases?.length) continue;
  if (AUTHORITY_CHANGES.some((e) => e.entityId === a.id)) continue;
  // Nothing to fail: an alias without a rename event is the correct state. The
  // check exists to make the converse explicit.
}

/* -- liveness -------------------------------------------------------------- */
for (const c of HISTORY_DATE_CONTRACTS)
  if (!EVENTS.some((e) => e.entityType === c.entityType))
    fail(
      `date contract for "${c.entityType}" is declared but no event uses it`,
    );

const typesUsed = new Set(EVENTS.map((e) => e.entityType));
for (const t of CHANGE_ENTITY_TYPES)
  if (!typesUsed.has(t))
    fail(`entity type "${t}" is in the vocabulary but no event uses it`);
const provenancesUsed = new Set(EVENTS.map((e) => e.provenance));
for (const p of EVENT_PROVENANCES)
  if (!provenancesUsed.has(p) && p !== 'snapshot-detected')
    fail(`provenance "${p}" is in the vocabulary but no event uses it`);

/* -- report ---------------------------------------------------------------- */
console.log('\nChange history validation\n');
console.log(
  `  Change events:            ${EVENTS.length.toLocaleString('en')}`,
);
console.log(
  `    …with an official date: ${EVENTS.filter((e) => e.occurredAt).length.toLocaleString('en')}`,
);
console.log(
  `    …date not published:    ${EVENTS.filter((e) => !e.occurredAt).length.toLocaleString('en')}`,
);
console.log(
  `  Input authorisations:     ${inputAuthorizationEvents().length.toLocaleString('en')}`,
);
console.log(
  `  Variety registrations:    ${varietyRegistrationEvents().length}`,
);
console.log(`  Authorities:              ${authorityEvents().length}`);
console.log(
  `  Jurisdictions:            ${new Set(EVENTS.map((e) => e.jurisdictionName)).size}`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Change history validation passed.\n');
