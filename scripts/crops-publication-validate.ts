/**
 * Deterministic gate for the Wave 39 publication campaign. Offline.
 *
 * The campaign's claim is that every crop the research wave left ready has been
 * put through a real publication decision. That claim is only worth something
 * if the decisions are reconciled against what the corpus actually contains,
 * so nothing here reads a record and believes it:
 *
 *   - the queue is rebuilt from the research layer, so a review cannot define
 *     its own denominator;
 *   - PUBLISHED is checked in both directions against the page, the identity
 *     and the emitted route, so neither a record without a page nor a page
 *     without a record survives;
 *   - the differentiating claim is looked for in this article and looked for
 *     again in the neighbour it names, because "this page says something its
 *     neighbour does not" is a checkable statement and "we wrote something
 *     specific" is not;
 *   - the declared scope granularity is checked against the identity's
 *     taxonomic rank and against which other records share its binomial, which
 *     is the executable form of the rule that a foreign key resolving is not
 *     proof the relationship is exact;
 *   - the recorded search expectations are RUN against an index built from the
 *     live corpus.
 */
import {
  BLOCKING_OUTCOMES,
  PUBLICATION_OUTCOMES,
  SCOPE_GRANULARITIES,
} from '../types/crop-publication';
import {
  CROP_PUBLICATION_REVIEWS,
  PUBLICATION_BY_SLUG,
} from '../data/crop-publication';
import { CROP_RESEARCH } from '../data/crop-research';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { articleText } from '../lib/crops/content-depth';
import { SOURCE_MAP } from '../lib/sources/registry';
import { allRoutes } from '../lib/seo/routes';
import { buildIndex, search } from '../lib/search/engine';
import { buildSearchDocuments } from '../lib/search/documents';
import { SYNONYMS } from '../data/search/synonyms';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const cropPages = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => [
    c.slug,
    c,
  ]),
);
const routes = new Set(allRoutes().map((r) => r.path));

/**
 * The queue: the crops the research campaign left ready to write.
 *
 * Rebuilt from the research layer on every run. If a later wave changes a
 * research outcome, this queue changes with it and the reviews stop
 * reconciling — which is the point.
 */
const queue = new Set(
  CROP_RESEARCH.filter((r) => r.outcome === 'READY_BUT_DEFER_EDITORIAL').map(
    (r) => r.slug,
  ),
);

/* -- 1. the queue is answered exactly once, and nothing extra is claimed --- */
for (const slug of queue)
  if (!PUBLICATION_BY_SLUG.has(slug))
    fail(
      `crop "${slug}" was left ready by the research campaign and has no publication decision`,
    );
const seen = new Set<string>();
for (const r of CROP_PUBLICATION_REVIEWS) {
  if (seen.has(r.slug))
    fail(`publication review "${r.slug}" is recorded twice`);
  seen.add(r.slug);
  if (!queue.has(r.slug))
    fail(
      `publication review "${r.slug}" reviews a crop the research campaign never left ready`,
    );
}

/* -- 2. binomial peers, recomputed ---------------------------------------- */
const binomial = (n: string) => n.split(/\s+/).slice(0, 2).join(' ');
const byBinomial = new Map<string, string[]>();
for (const c of CROP_IDENTITIES) {
  const b = binomial(c.acceptedScientificName);
  const list = byBinomial.get(b) ?? [];
  list.push(c.slug);
  byBinomial.set(b, list);
}
const peersOf = (slug: string) => {
  const id = IDENTITY_BY_SLUG.get(slug);
  if (!id) return [];
  return (byBinomial.get(binomial(id.acceptedScientificName)) ?? []).filter(
    (s) => s !== slug,
  );
};

/* -- 3. inbound links, recomputed ----------------------------------------- */
const REF_FIELDS = [
  'relatedTopics',
  'connections',
  'commonDiseases',
  'commonPests',
  'suitableSoils',
];
const inbound = new Map<string, number>();
for (const c of PUBLISHED_CONTENT) {
  const o = c as unknown as Record<string, { type: string; slug: string }[]>;
  for (const f of REF_FIELDS)
    for (const ref of o[f] ?? [])
      if (ref.type === 'crop' && ref.slug !== c.slug)
        inbound.set(ref.slug, (inbound.get(ref.slug) ?? 0) + 1);
}

/* -- 4. one live search index, built once --------------------------------- */
const index = buildIndex(buildSearchDocuments(), SYNONYMS);

for (const r of CROP_PUBLICATION_REVIEWS) {
  const at = `publication review "${r.slug}"`;
  if (!PUBLICATION_OUTCOMES.includes(r.outcome))
    fail(`${at}: outcome "${r.outcome}" is not in the vocabulary`);
  if (!ISO.test(r.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
  if (!r.wave.trim()) fail(`${at}: names no wave`);
  if (!r.sourcesConsulted.length) fail(`${at}: cites no source`);
  for (const s of r.sourcesConsulted)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);

  const page = cropPages.get(r.slug);
  const id = IDENTITY_BY_SLUG.get(r.slug);
  if (!id) fail(`${at}: names a crop identity that does not exist`);

  /* -- outcome reconciled against the corpus, in both directions ---------- */
  if (r.outcome === 'PUBLISHED') {
    if (!page) fail(`${at}: says PUBLISHED and no crop page exists`);
    else {
      if (page.editorialStatus !== 'published')
        fail(`${at}: says PUBLISHED and the page is not published`);
      if (!routes.has(`/crops/${r.slug}`))
        fail(`${at}: says PUBLISHED and no route is emitted for the page`);
      if (id && id.profileDepth !== 'full-profile')
        fail(
          `${at}: says PUBLISHED and the identity still records profileDepth "${id.profileDepth}"`,
        );
      if (id && id.cropPageSlug !== r.slug)
        fail(
          `${at}: says PUBLISHED and the identity points at "${id.cropPageSlug ?? '(nothing)'}"`,
        );
      if (!inbound.get(r.slug))
        fail(
          `${at}: says PUBLISHED and no other crop page links to it — a page nothing reaches was not published, it was uploaded`,
        );
    }
    if (r.blockedReason)
      fail(`${at}: says PUBLISHED and records a blocked reason`);
  } else {
    if (page)
      fail(
        `${at}: says ${r.outcome} and a crop page exists — the decision and the corpus disagree`,
      );
    if (!r.blockedReason?.trim())
      fail(`${at}: says ${r.outcome} and does not say why`);
    if (
      BLOCKING_OUTCOMES.includes(r.outcome) &&
      r.blockedReason &&
      r.blockedReason.trim().length < 60
    )
      fail(`${at}: the reason it was stopped is too short to be a reason`);
  }

  /* -- the differentiating claim ----------------------------------------- */
  if (r.outcome === 'PUBLISHED') {
    const d = r.differentiator;
    if (!d) fail(`${at}: says PUBLISHED and names no differentiating claim`);
    else if (page) {
      const mine = `${(page as unknown as { summary: string }).summary} ${articleText(page)}`;
      if (!mine.includes(d.claim))
        fail(
          `${at}: the differentiating claim is not in this article — a claim about a page that the page does not make`,
        );
      if (d.falseFor === r.slug)
        fail(`${at}: names itself as the crop the claim would be false for`);
      const other = cropPages.get(d.falseFor);
      if (!other)
        fail(
          `${at}: names "${d.falseFor}" as a neighbour and no such crop page exists`,
        );
      else {
        const theirs = `${(other as unknown as { summary: string }).summary} ${articleText(other)}`;
        if (theirs.includes(d.claim))
          fail(
            `${at}: the differentiating claim also appears on "${d.falseFor}" — it does not differentiate anything`,
          );
      }
    }
  } else if (r.differentiator) {
    fail(`${at}: was not published and names a differentiating claim anyway`);
  }

  /* -- scope granularity against taxonomy, recomputed --------------------- */
  const s = r.scope;
  if (!SCOPE_GRANULARITIES.includes(s.granularity))
    fail(`${at}: granularity "${s.granularity}" is not in the vocabulary`);
  if (s.statement.trim().length < 60)
    fail(`${at}: the scope statement does not say what the page covers`);
  if (id && !s.statement.includes(id.acceptedScientificName.split(' ')[0]!))
    fail(
      `${at}: the scope statement never names the taxon it is about, so it could be about any crop`,
    );
  const peers = peersOf(r.slug);
  if (s.granularity === 'EXACT_ENTITY') {
    if (id && id.taxonRank !== 'species')
      fail(
        `${at}: claims EXACT_ENTITY and the identity is rank "${id.taxonRank}" — an infraspecific taxon is not the entity its name begins with`,
      );
    if (peers.length)
      fail(
        `${at}: claims EXACT_ENTITY and ${peers.length} other crop record(s) share the binomial (${peers.join(', ')})`,
      );
  }
  if (s.granularity === 'NARROWER_THAN_ENTITY') {
    if (id && id.taxonRank === 'species' && !peers.length)
      fail(
        `${at}: claims NARROWER_THAN_ENTITY and is a species nothing else shares`,
      );
    const declared = [...(s.collidesWith ?? [])].sort().join(',');
    const actual = [...peers].sort().join(',');
    if (declared !== actual)
      fail(
        `${at}: records collisions [${declared}] and the corpus computes [${actual}]`,
      );
  }
  for (const c of s.collidesWith ?? [])
    if (!IDENTITY_BY_SLUG.has(c))
      fail(`${at}: names collision "${c}", which is not a crop identity`);

  /* -- search expectations, run rather than described --------------------- */
  if (r.outcome === 'PUBLISHED' && !r.searchReview.length)
    fail(`${at}: says PUBLISHED and records no search check`);
  for (const check of r.searchReview) {
    if (!check.mustWin && !(check.mustNotWin ?? []).length)
      fail(`${at}: search check "${check.query}" expects nothing`);
    const top = search(index, check.query, { limit: 3 }).results[0];
    const title = top?.doc.title ?? '(nothing)';
    if (check.mustWin && title !== check.mustWin)
      fail(
        `${at}: search "${check.query}" must return "${check.mustWin}" and returns "${title}"`,
      );
    for (const bad of check.mustNotWin ?? [])
      if (title === bad)
        fail(`${at}: search "${check.query}" must not return "${bad}"`);
  }
}

/* -- 5. report ------------------------------------------------------------ */
const counts = new Map<string, number>();
for (const r of CROP_PUBLICATION_REVIEWS)
  counts.set(r.outcome, (counts.get(r.outcome) ?? 0) + 1);

console.log('\nAgricultureID — crop publication campaign\n');
console.log(`  Ready queue rebuilt:          ${queue.size}`);
console.log(
  `  Decisions recorded:           ${CROP_PUBLICATION_REVIEWS.length}`,
);
for (const [k, v] of [...counts].sort()) console.log(`    ${k.padEnd(26)}${v}`);
const searchChecks = CROP_PUBLICATION_REVIEWS.reduce(
  (n, r) => n + r.searchReview.length,
  0,
);
console.log(`  Search checks executed:       ${searchChecks}`);

if (errors.length) {
  console.log(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.log(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop publication validation passed.\n');
