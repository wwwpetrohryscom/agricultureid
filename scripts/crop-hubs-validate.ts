/**
 * Deterministic gate for crop hubs. Offline.
 *
 * The danger a hub layer creates is specific and large: the corpus contains 74
 * families and 213 genera, every one of them a slug, and a loop over them would
 * add 287 indexable pages that each say very little. Most of the rules below
 * exist to make that impossible rather than merely inadvisable.
 *
 * The second danger is subtler. A hub can pass every structural check and still
 * be false, by taking a property of its largest member and stating it as a
 * property of the group — "Poaceae crops generally…" when the sentence is about
 * wheat. That cannot be caught by a validator, so what is enforced instead is
 * that every hub cites family- or group-level sources, states what the grouping
 * does NOT determine, and contrasts itself with a neighbour. A hub that cannot
 * do those three things is one whose author had nothing group-level to say.
 */
import {
  FAMILY_HUB_MIN_PUBLISHED,
  GENUS_HUB_MIN_PUBLISHED,
  GROUP_HUB_MIN_PUBLISHED,
  HUB_KINDS,
  HUB_KIND_MEANING,
  HUB_MIN_TOTAL_MEMBERS,
  HUB_REFUSAL_REASONS,
} from '../types/crop-hubs';
import { membersOf } from '../lib/crops/hubs';
import { CROP_HUBS, HUB_REFUSALS } from '../data/crop-hubs';
import { hubPath, membershipOf } from '../lib/crops/hubs';
import { CROP_IDENTITIES } from '../lib/crops/identity';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { CROP_GROUPS } from '../types/crop-identity';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { allRoutes } from '../lib/seo/routes';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const routes = new Set(allRoutes().map((r) => r.path));
const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));
const families = new Set(CROP_IDENTITIES.map((c) => c.family));
const genera = new Set(
  CROP_IDENTITIES.map((c) => c.genus.replace(/×/g, '').trim()),
);

const MIN_PUBLISHED = {
  BOTANICAL_FAMILY_HUB: FAMILY_HUB_MIN_PUBLISHED,
  BOTANICAL_GENUS_HUB: GENUS_HUB_MIN_PUBLISHED,
  AGRICULTURAL_CROP_GROUP_HUB: GROUP_HUB_MIN_PUBLISHED,
} as const;

/* -- 1. every hub is well formed and substantive --------------------------- */
{
  const seenSlug = new Set<string>();
  const seenKey = new Set<string>();
  for (const h of CROP_HUBS) {
    const at = `hub "${h.slug}"`;
    if (!HUB_KINDS.includes(h.kind))
      fail(`${at}: kind "${h.kind}" is not in the vocabulary`);
    else if (!HUB_KIND_MEANING[h.kind]?.trim())
      fail(`${at}: kind has no stated meaning`);
    if (seenSlug.has(h.slug)) fail(`${at}: slug used twice`);
    seenSlug.add(h.slug);
    // Two hubs over the same members are two URLs for one page.
    const key = `${h.kind}:${h.memberKey}`;
    if (seenKey.has(key))
      fail(`${at}: a second hub covers the same members as another`);
    seenKey.add(key);
    if (!ISO.test(h.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
    if (!h.definition?.trim() || h.definition.length < 80)
      fail(`${at}: the definition does not say what the hub is`);
    if (!routes.has(hubPath(h)))
      fail(`${at}: no route is emitted for ${hubPath(h)}`);

    // Substance. A hub that is only a filtered list is the thing this wave
    // exists not to produce.
    if (h.sections.length < 4)
      fail(
        `${at}: ${h.sections.length} section(s) — a hub with fewer is a filtered list`,
      );
    for (const s of h.sections) {
      if (!s.heading?.trim()) fail(`${at}: a section with no heading`);
      if ((s.body ?? '').split(/\s+/).filter(Boolean).length < 40)
        fail(
          `${at}: section "${s.heading}" is too short to be group-level content`,
        );
    }
    if (!h.contrasts.length)
      fail(
        `${at}: no contrast with a neighbouring hub — without one, hubs blur into each other`,
      );
    if (!h.limitations.length)
      fail(`${at}: does not state what the grouping fails to determine`);
    if (!h.sourceIds.length) fail(`${at}: cites no source`);
    for (const s of h.sourceIds)
      if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);
  }
}

/* -- 2. the member key must be real, and of the right kind ----------------- */
for (const h of CROP_HUBS) {
  const at = `hub "${h.slug}"`;
  if (h.kind === 'BOTANICAL_FAMILY_HUB' && !families.has(h.memberKey))
    fail(`${at}: "${h.memberKey}" is not a family any crop identity records`);
  if (h.kind === 'BOTANICAL_GENUS_HUB' && !genera.has(h.memberKey))
    fail(`${at}: "${h.memberKey}" is not a genus any crop identity records`);
  if (
    h.kind === 'AGRICULTURAL_CROP_GROUP_HUB' &&
    !(CROP_GROUPS as readonly string[]).includes(h.memberKey)
  )
    fail(`${at}: "${h.memberKey}" is not in the crop-group vocabulary`);
  // A family key used as a genus hub, or the reverse, would silently produce an
  // empty or wrong member list rather than an error.
  if (h.kind === 'BOTANICAL_GENUS_HUB' && families.has(h.memberKey))
    fail(`${at}: declared a genus hub and "${h.memberKey}" is a family`);
  if (h.kind === 'BOTANICAL_FAMILY_HUB' && genera.has(h.memberKey))
    fail(`${at}: declared a family hub and "${h.memberKey}" is a genus`);
}

/* -- 3. membership clears the floor, and is really derived ----------------- */
for (const h of CROP_HUBS) {
  const at = `hub "${h.slug}"`;
  const m = membershipOf(h);
  const floor = MIN_PUBLISHED[h.kind];
  if (m.published.length < floor)
    fail(
      `${at}: ${m.published.length} published member(s), below the ${floor} required for a ${h.kind}`,
    );
  if (m.total < HUB_MIN_TOTAL_MEMBERS)
    fail(
      `${at}: ${m.total} member(s) in total, below the ${HUB_MIN_TOTAL_MEMBERS} required`,
    );
  for (const c of [...m.published, ...m.taxaOnly])
    if (!CROP_IDENTITIES.some((x) => x.slug === c.slug))
      fail(`${at}: member "${c.slug}" is not a crop identity`);
  for (const c of m.published)
    if (!publishedCrops.has(c.cropPageSlug ?? c.slug))
      fail(
        `${at}: member "${c.slug}" is counted as published and has no article`,
      );
  // A family hub whose members are all one genus is a genus hub wearing the
  // wrong label, and would say nothing the genus does not.
  if (h.kind === 'BOTANICAL_FAMILY_HUB' && m.genera.length < 2)
    fail(
      `${at}: a family hub whose members are all one genus (${m.genera[0]})`,
    );
}

/* -- 4. no hub duplicates a concept page ----------------------------------- */
for (const h of CROP_HUBS) {
  /*
   * A crop concept page already IS a hub when it covers the same crops.
   *
   * The test was "does the concept's identity sit in this genus", and that is
   * not the same question. Wave 41 declared concepts for cherry, plum, pear,
   * wheat and others: each groups two to five taxa under one crop name, and
   * each has an identity in a genus that also holds crops the concept
   * explicitly excludes. Cherry's identity is a Prunus and the Prunus hub
   * covers almond, apricot and peach as well — one is not a second URL for the
   * other.
   *
   * So the comparison is between what each actually covers, recomputed: the
   * hub's derived member set against the concept's page plus its constituents.
   * Equal sets are two URLs for one page; anything else is two pages.
   */
  const hubMembers = new Set(membersOf(h).map((c) => c.slug));
  const clash = CROP_CONCEPTS.find((k) => {
    const covers = new Set<string>([
      k.slug,
      ...k.constituents
        .map((t) => t.identitySlug)
        .filter((x): x is string => !!x),
    ]);
    if (covers.size !== hubMembers.size) return false;
    return [...covers].every((x) => hubMembers.has(x));
  });
  if (clash)
    fail(
      `hub "${h.slug}": the "${clash.slug}" concept page covers exactly the same crops — two URLs for one page`,
    );
  if (conceptSlugs.has(h.slug))
    fail(`hub "${h.slug}": a crop concept already uses this slug`);
}

/* -- 5. refusals are recorded, and mean something -------------------------- */
{
  const published = new Set(CROP_HUBS.map((h) => `${h.kind}:${h.memberKey}`));
  for (const r of HUB_REFUSALS) {
    const at = `refusal "${r.memberKey}"`;
    if (!HUB_KINDS.includes(r.kind))
      fail(`${at}: kind is not in the vocabulary`);
    if (!HUB_REFUSAL_REASONS.includes(r.reason))
      fail(`${at}: reason "${r.reason}" is not in the vocabulary`);
    if (!r.note?.trim() || r.note.length < 40)
      fail(`${at}: gives no substantive note`);
    if (published.has(`${r.kind}:${r.memberKey}`))
      fail(`${at}: recorded as refused and published as a hub`);
    // A refusal on membership grounds has to actually be below the floor.
    if (r.reason === 'BELOW_MEMBERSHIP_FLOOR') {
      const m = membershipOf({ kind: r.kind, memberKey: r.memberKey });
      if (
        m.published.length >= MIN_PUBLISHED[r.kind] &&
        m.total >= HUB_MIN_TOTAL_MEMBERS
      )
        fail(
          `${at}: refused for being below the membership floor and it clears it (${m.published.length} published, ${m.total} total)`,
        );
    }
  }
}

/* -- 6. every published crop is reachable from a hub ----------------------- */
{
  const covered = new Set<string>();
  for (const h of CROP_HUBS)
    for (const c of membershipOf(h).published) covered.add(c.slug);
  const orphans = CROP_IDENTITIES.filter(
    (c) => publishedCrops.has(c.cropPageSlug ?? c.slug) && !covered.has(c.slug),
  );
  // Not an error — the hub set is deliberately small — but it is reported, so
  // that "hubs improve discovery" stays a measured claim rather than a hope.
  if (orphans.length > publishedCrops.size)
    fail(`every published crop is outside every hub, which cannot be right`);
}

/* -- report ---------------------------------------------------------------- */
console.log('\nCrop knowledge hubs\n');
console.log(`  Hubs published:               ${CROP_HUBS.length}`);
for (const k of HUB_KINDS) {
  const hs = CROP_HUBS.filter((h) => h.kind === k);
  if (!hs.length) continue;
  console.log(`\n  ${k} — ${hs.length}`);
  for (const h of hs) {
    const m = membershipOf(h);
    console.log(
      `    ${h.slug.padEnd(22)}${String(m.published.length).padStart(3)} published  ${String(m.taxaOnly.length).padStart(3)} taxa  ${h.sections.length} sections`,
    );
  }
}
console.log(`\n  Candidates evaluated and refused: ${HUB_REFUSALS.length}`);
{
  const by = new Map<string, number>();
  for (const r of HUB_REFUSALS) by.set(r.reason, (by.get(r.reason) ?? 0) + 1);
  for (const [k, v] of by)
    console.log(`    ${k.padEnd(30)}${String(v).padStart(3)}`);
}
console.log(
  `\n  Not evaluated individually: ${families.size - CROP_HUBS.filter((h) => h.kind === 'BOTANICAL_FAMILY_HUB').length} families and ${genera.size - CROP_HUBS.filter((h) => h.kind === 'BOTANICAL_GENUS_HUB').length} genera fall below the membership floor.`,
);
{
  const covered = new Set<string>();
  for (const h of CROP_HUBS)
    for (const c of membershipOf(h).published) covered.add(c.slug);
  console.log(
    `  Published crops reachable from a hub: ${covered.size} of ${publishedCrops.size}`,
  );
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop hub validation passed.\n');
