/**
 * Deterministic gate for the Wave 46 alias registry and search pointers.
 * Offline.
 *
 * The queue is computed. Every alternative name carried by a published crop is
 * classified by the corpus itself — unique, shared, or a collision with another
 * page's title — and a record is REQUIRED wherever uniqueness does not hold and
 * FORBIDDEN where it does. That is the shape that keeps the register honest in
 * both directions: it cannot go stale as crops are published, and it cannot
 * fill up with entries for names nobody disputes.
 *
 * The one thing this file does not do is require aliases to be unique. Four
 * pairs of published crops share one legitimately, and a uniqueness rule would
 * make the corpus choose between adzuki and rice bean for "red bean" and be
 * wrong about whichever it did not choose.
 */
import { CROP_ALIASES, CROP_SEARCH_POINTERS } from '../data/crop-aliases';
import { ALIAS_KINDS, ALIAS_KIND_MEANING } from '../types/crop-alias';
import { NAME_CROSSWALK } from '../data/crop-identity/name-crosswalk';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { buildSearchDocuments } from '../lib/search/documents';
import { search } from '../lib/search/engine';
import { benchmarkIndex } from '../lib/search/benchmark';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop') as {
  slug: string;
  title: string;
  alternativeNames?: string[];
}[];
const cropSlugs = new Set(crops.map((c) => c.slug));

/** alias -> the published crops carrying it, recomputed. */
const carriedBy = new Map<string, string[]>();
for (const c of crops)
  for (const a of c.alternativeNames ?? [])
    carriedBy.set(norm(a), [...(carriedBy.get(norm(a)) ?? []), c.slug]);

/** Published crop titles, for the collision rule. */
const cropTitle = new Map(crops.map((c) => [norm(c.title), c.slug]));
const ambiguousInCrosswalk = new Set(
  NAME_CROSSWALK.filter((n) => n.kind === 'ambiguous-common-name').map((n) =>
    norm(n.name),
  ),
);

/* -------------------------------------------------------------------------- */
/*  The queue: which aliases need a record                                     */
/* -------------------------------------------------------------------------- */

const needsRecord = new Map<string, { crops: string[]; why: string }>();
for (const [alias, list] of carriedBy) {
  const collidesWith = cropTitle.get(alias);
  if (collidesWith && !list.includes(collidesWith))
    needsRecord.set(alias, {
      crops: list,
      why: `it is the title of published crop "${collidesWith}"`,
    });
  else if (list.length > 1)
    needsRecord.set(alias, {
      crops: list,
      why: 'more than one crop carries it',
    });
}

const recordByAlias = new Map(CROP_ALIASES.map((r) => [norm(r.alias), r]));

for (const [alias, info] of needsRecord)
  if (!recordByAlias.has(alias))
    fail(
      `alias "${alias}": ${info.why} (${info.crops.join(', ')}) and no record classifies it`,
    );

/* -------------------------------------------------------------------------- */
/*  Each record                                                                */
/* -------------------------------------------------------------------------- */

const seen = new Set<string>();
for (const r of CROP_ALIASES) {
  const at = `alias "${r.alias}"`;
  const key = norm(r.alias);
  if (seen.has(key)) fail(`${at}: recorded twice`);
  seen.add(key);
  if (!(ALIAS_KINDS as readonly string[]).includes(r.kind))
    fail(`${at}: kind "${r.kind}" is not in the vocabulary`);
  else if (!ALIAS_KIND_MEANING[r.kind]?.trim())
    fail(`${at}: kind "${r.kind}" has no stated meaning`);
  if (!r.rationale?.trim() || r.rationale.length < 60)
    fail(`${at}: gives no reason, or one too short to be one`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.reviewedAt))
    fail(`${at}: reviewedAt is not a date`);

  const live = carriedBy.get(key) ?? [];

  /*
   * INVALID_COLLISION is the only kind that describes a state the corpus must
   * not be in. A record of one is how a wave writes down what it removed; a
   * record of one that is STILL carried is the defect itself, still there.
   */
  if (r.kind === 'INVALID_COLLISION') {
    if (live.length)
      fail(
        `${at}: is recorded as an invalid collision and is still carried by ${live.join(', ')} — the record describes a removal that did not happen`,
      );
    const owner = cropTitle.get(key);
    if (!owner)
      fail(
        `${at}: is recorded as colliding with a published crop title and no published crop has that title`,
      );
    continue;
  }

  /* Everything else describes crops that really do carry the name. */
  if ([...r.crops].sort().join(',') !== [...live].sort().join(','))
    fail(
      `${at}: records ${r.crops.join(', ') || 'no crops'} and the corpus computes ${live.join(', ') || 'none'}`,
    );
  for (const s of r.crops)
    if (!cropSlugs.has(s))
      fail(`${at}: names "${s}", which is not a published crop`);

  if (r.kind === 'SHARED_ALIAS' || r.kind === 'AMBIGUOUS_ALIAS') {
    if (live.length < 2)
      fail(
        `${at}: is recorded as carried by more than one crop and ${live.length} carries it`,
      );
  } else if (live.length > 1)
    fail(
      `${at}: is recorded as "${r.kind}" and ${live.length} crops carry it — a name several crops carry is shared or ambiguous, whichever is true`,
    );

  /*
   * §46 — an ambiguity is registered, never resolved silently.
   *
   * The crosswalk is where the corpus records that a name means more than one
   * plant. An AMBIGUOUS_ALIAS without an entry there is a judgement someone
   * made in this file alone, and the calendar matcher and the search layer both
   * read the crosswalk rather than this one.
   */
  if (r.kind === 'AMBIGUOUS_ALIAS' && !ambiguousInCrosswalk.has(key))
    fail(
      `${at}: is recorded as ambiguous and the name crosswalk holds no ambiguous-common-name entry for it`,
    );
}

/*
 * And the other direction: a record for a name nobody disputes is a register
 * filling up with noise, which is how the useful entries stop being read.
 */
for (const r of CROP_ALIASES)
  if (r.kind !== 'INVALID_COLLISION' && !needsRecord.has(norm(r.alias)))
    fail(
      `alias "${r.alias}": is recorded and the corpus computes it as unique and uncontested — a record is only needed where uniqueness does not hold`,
    );

/* -------------------------------------------------------------------------- */
/*  Shared aliases must not silently resolve to one crop                       */
/* -------------------------------------------------------------------------- */

/*
 * §46 — search may prefer a concept that truthfully owns the ambiguity, and
 * where none does it must present several valid results rather than assert one.
 * The check is that the crops sharing the name are ALL reachable near the top:
 * a shared alias whose second crop is buried has been resolved by the ranking
 * without anybody deciding to resolve it.
 */
{
  const index = benchmarkIndex();
  for (const r of CROP_ALIASES) {
    if (r.kind !== 'SHARED_ALIAS' && r.kind !== 'AMBIGUOUS_ALIAS') continue;
    const top = search(index, r.alias, { limit: 6 }).results.map(
      (x) => x.doc.id,
    );
    const missing = r.crops.filter((s) => !top.includes(`crop:${s}`));
    if (missing.length)
      fail(
        `alias "${r.alias}": is shared by ${r.crops.join(', ')} and searching for it does not surface ${missing.join(', ')} in the first six results — a shared name resolved to one crop has been decided by the ranking rather than by anyone`,
      );
  }
}

/* -------------------------------------------------------------------------- */
/*  Search pointers                                                            */
/* -------------------------------------------------------------------------- */

{
  const docs = buildSearchDocuments();
  const byCrop = new Map(
    docs
      .filter((d) => d.type === 'crop')
      .map((d) => [d.id.replace(/^crop:/, ''), d]),
  );
  const seenTerm = new Set<string>();
  for (const p of CROP_SEARCH_POINTERS) {
    const at = `search pointer "${p.term}"`;
    if (seenTerm.has(norm(p.term))) fail(`${at}: recorded twice`);
    seenTerm.add(norm(p.term));
    if (!cropSlugs.has(p.cropSlug))
      fail(`${at}: points at "${p.cropSlug}", which is not a published crop`);
    if (!p.relationship?.trim() || p.relationship.length < 60)
      fail(`${at}: does not say what the term's relationship to the crop is`);
    for (const s of p.sourceIds)
      if (!SOURCE_MAP.has(s)) fail(`${at}: cites unknown source "${s}"`);
    if (!p.sourceIds.length) fail(`${at}: cites no source`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.reviewedAt))
      fail(`${at}: reviewedAt is not a date`);

    /*
     * A pointer is not a name, and the rule that keeps it from becoming one is
     * that the crop must NOT carry it as an alternative name. Waves 27 and 32
     * removed technical vocabulary from `alternativeNames` twice; the field
     * exists so that work does not have to be undone to make a term findable.
     */
    const doc = byCrop.get(p.cropSlug);
    if (!doc) fail(`${at}: the crop has no search document`);
    else {
      if ((doc.names ?? []).some((n) => norm(n) === norm(p.term)))
        fail(
          `${at}: is also carried as an alternative name of "${p.cropSlug}" — a pointer says a term reaches the crop, a name says the crop is called it`,
        );
      if (!(doc.searchPointers ?? []).some((t) => norm(t) === norm(p.term)))
        fail(`${at}: is not attached to the crop's search document`);
    }

    /* The pointer has to work, or it is a record of an intention. */
    const top = search(benchmarkIndex(), p.term, { limit: 1 }).results[0];
    if (top?.doc.id !== `crop:${p.cropSlug}`)
      fail(
        `${at}: does not reach "${p.cropSlug}" — searching for it returns ${top ? top.doc.title : 'nothing'}`,
      );
  }
}

/* -------------------------------------------------------------------------- */
/*  Report                                                                     */
/* -------------------------------------------------------------------------- */

console.log('\nAgricultureID — crop alias registry\n');
console.log(`  Alternative names carried:    ${carriedBy.size}`);
console.log(
  `    unique and uncontested      ${carriedBy.size - needsRecord.size}`,
);
console.log(`    needing a record            ${needsRecord.size}`);
console.log(`  Records:                      ${CROP_ALIASES.length}`);
{
  const m = new Map<string, number>();
  for (const r of CROP_ALIASES) m.set(r.kind, (m.get(r.kind) ?? 0) + 1);
  for (const k of ALIAS_KINDS)
    if (m.get(k))
      console.log(`    ${k.padEnd(22)}${String(m.get(k)).padStart(4)}`);
}
console.log(`\n  Search pointers:              ${CROP_SEARCH_POINTERS.length}`);
for (const p of CROP_SEARCH_POINTERS)
  console.log(`    ${p.term.padEnd(22)}→ ${p.cropSlug}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Alias registry validation passed.\n');
