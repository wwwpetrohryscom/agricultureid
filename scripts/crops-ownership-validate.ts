/**
 * Deterministic gate for taxon scope ownership. Offline.
 *
 * The queue is computed rather than listed: a parent taxon carrying two or more
 * crop identities has a scope those crops share, and that scope needs exactly
 * one owner. Nothing here reads a record and believes it —
 *
 *   - the parent taxa are derived by parsing accepted names, so a new cultivar
 *     group published into an unowned parent creates a queue entry and fails;
 *   - `publishedChildren` and `taxonOnlyChildren` are recomputed, so promoting
 *     a child without updating its parent fails, and so does the reverse;
 *   - a concept owner must actually list the children in its concept record,
 *     which is checked against the concept layer rather than against this one;
 *   - no child may sit under two owners.
 *
 * The rule this file exists for is the last one. A child that inherits scope
 * from two ambiguous parents inherits it from neither, and nothing downstream
 * can tell which parent's claims apply to it.
 */
import { OWNER_KINDS, OWNER_KIND_MEANING } from '../types/crop-taxon-ownership';
import { TAXON_SCOPE_OWNERSHIP } from '../data/crop-taxon-ownership';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { allRoutes } from '../lib/seo/routes';
import { COMMODITIES_BY_CROP } from '../lib/crops/integration';
import { CROP_CALENDARS } from '../data/calendars';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const routes = new Set(allRoutes().map((r) => r.path));

/**
 * The taxon a name sits under.
 *
 * A cultivar-group epithet or an infraspecific rank marker is stripped; a bare
 * binomial has no parent in this sense and returns null. Deliberately textual:
 * it reads the accepted names the identity layer already verified against two
 * authorities rather than introducing a second source of truth about rank.
 */
function parentTaxonOf(name: string): string | null {
  let m = name.match(/^(.*?)\s+(?:[A-Z][A-Za-z-]*\s+)+Group$/);
  if (m) return m[1]!.trim();
  m = name.match(/^(.*?)\s+(?:subsp\.|var\.|f\.)\s+\S+$/);
  if (m) return m[1]!.trim();
  return null;
}

/** Parent taxa with two or more corpus identities under them. */
const childrenByParent = new Map<string, string[]>();
for (const id of CROP_IDENTITIES) {
  const p = parentTaxonOf(id.acceptedScientificName);
  if (!p) continue;
  childrenByParent.set(p, [...(childrenByParent.get(p) ?? []), id.slug]);
}
const needsOwner = new Map(
  [...childrenByParent].filter(([, kids]) => kids.length >= 2),
);

/* -- 1. the queue is answered exactly once -------------------------------- */
const byTaxon = new Map(TAXON_SCOPE_OWNERSHIP.map((o) => [o.parentTaxon, o]));
for (const [taxon, kids] of needsOwner)
  if (!byTaxon.has(taxon))
    fail(
      `taxon "${taxon}" carries ${kids.length} crop identities (${kids.sort().join(', ')}) and nothing owns the scope they share`,
    );

const seen = new Set<string>();
const ownerOfChild = new Map<string, string>();
for (const o of TAXON_SCOPE_OWNERSHIP) {
  const at = `ownership "${o.parentTaxon}"`;
  if (seen.has(o.parentTaxon)) fail(`${at}: declared twice`);
  seen.add(o.parentTaxon);
  if (!needsOwner.has(o.parentTaxon))
    fail(
      `${at}: owns a taxon that fewer than two crop identities sit under — there is no shared scope to own`,
    );
  if (!OWNER_KINDS.includes(o.ownerKind))
    fail(`${at}: ownerKind "${o.ownerKind}" is not in the vocabulary`);
  else if (!OWNER_KIND_MEANING[o.ownerKind]?.trim())
    fail(`${at}: ownerKind "${o.ownerKind}" has no stated meaning`);
  if (!ISO.test(o.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
  if (o.rationale.trim().length < 120)
    fail(`${at}: the rationale does not say why this owner and not another`);
  if (!o.sourceIds.length) fail(`${at}: cites no source`);
  for (const s of o.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);
  if (!o.conceptLevelEvidence.length)
    fail(
      `${at}: names nothing that belongs at parent level — a parent that shares nothing with its children is not a parent`,
    );

  /* -- the owner must exist, in the way the kind claims ------------------- */
  if (o.ownerKind === 'crop-concept') {
    const k = CROP_CONCEPTS.find((c) => c.slug === o.ownerSlug);
    if (!k)
      fail(`${at}: names concept "${o.ownerSlug}", which is not declared`);
    else {
      const declared = new Set(
        k.constituents.map((t) => t.identitySlug).filter(Boolean),
      );
      for (const child of o.publishedChildren)
        if (!declared.has(child))
          fail(
            `${at}: says the "${o.ownerSlug}" concept owns it and that concept does not list "${child}" as a constituent`,
          );
    }
  }
  if (o.ownerKind === 'species-page' && !publishedCrops.has(o.ownerSlug))
    fail(`${at}: names a species page that is not published`);
  if (o.ownerKind === 'taxon-scope-record') {
    if (publishedCrops.has(o.ownerSlug) || routes.has(`/crops/${o.ownerSlug}`))
      fail(
        `${at}: is recorded as having no page and "${o.ownerSlug}" resolves to one`,
      );
  }

  /* -- children, recomputed ---------------------------------------------- */
  const kids = needsOwner.get(o.parentTaxon) ?? [];
  const actualPublished = kids.filter((k) => publishedCrops.has(k)).sort();
  const actualTaxonOnly = kids.filter((k) => !publishedCrops.has(k)).sort();
  if ([...o.publishedChildren].sort().join(',') !== actualPublished.join(','))
    fail(
      `${at}: lists published children [${[...o.publishedChildren].sort().join(', ')}] and the corpus computes [${actualPublished.join(', ')}] — promoting a child without updating its parent leaves the parent describing a corpus that no longer exists`,
    );
  if ([...o.taxonOnlyChildren].sort().join(',') !== actualTaxonOnly.join(','))
    fail(
      `${at}: lists taxon-only children [${[...o.taxonOnlyChildren].sort().join(', ')}] and the corpus computes [${actualTaxonOnly.join(', ')}]`,
    );

  /* -- exactly one owner per child --------------------------------------- */
  for (const child of [...o.publishedChildren, ...o.taxonOnlyChildren]) {
    if (!IDENTITY_BY_SLUG.has(child))
      fail(`${at}: names child "${child}", which is not a crop identity`);
    const prior = ownerOfChild.get(child);
    if (prior && prior !== o.parentTaxon)
      fail(
        `${at}: child "${child}" is already owned by "${prior}" — a child with two semantic owners inherits from neither`,
      );
    ownerOfChild.set(child, o.parentTaxon);
  }
}

/* -- 2. concept-level evidence must not have leaked ----------------------- */
/**
 * A parent owned by a concept page may itself carry market or calendar
 * evidence. Where it does, that evidence describes the group, and a child
 * carrying the same series would be the same trade counted twice under a name
 * no source measured.
 */
for (const o of TAXON_SCOPE_OWNERSHIP) {
  if (o.ownerKind !== 'crop-concept') continue;
  const parentCommodities = new Set(COMMODITIES_BY_CROP.get(o.ownerSlug) ?? []);
  if (!parentCommodities.size) continue;
  for (const child of o.publishedChildren) {
    const leaked = [...(COMMODITIES_BY_CROP.get(child) ?? [])].filter((c) =>
      parentCommodities.has(c),
    );
    if (leaked.length)
      fail(
        `ownership "${o.parentTaxon}": commodity ${leaked.join(', ')} is keyed to the owner "${o.ownerSlug}" and to its child "${child}"`,
      );
  }
}

/* -- 3. report ------------------------------------------------------------ */
console.log('\nAgricultureID — taxon scope ownership\n');
console.log(`  Parent taxa needing an owner: ${needsOwner.size}`);
console.log(`  Ownership records:            ${TAXON_SCOPE_OWNERSHIP.length}`);
const kinds = new Map<string, number>();
for (const o of TAXON_SCOPE_OWNERSHIP)
  kinds.set(o.ownerKind, (kinds.get(o.ownerKind) ?? 0) + 1);
for (const [k, v] of [...kinds].sort()) console.log(`    ${k.padEnd(24)}${v}`);
console.log(`  Children owned:               ${ownerOfChild.size}`);
const cal = new Set(CROP_CALENDARS.map((c) => c.cropRef));
for (const o of TAXON_SCOPE_OWNERSHIP)
  console.log(
    `    ${o.parentTaxon.padEnd(22)} → ${o.ownerSlug.padEnd(18)} ${o.publishedChildren.length} page(s), ${o.taxonOnlyChildren.length} taxon-only, ${o.publishedChildren.filter((c) => cal.has(c)).length} with a calendar`,
  );

if (errors.length) {
  console.log(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.log(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Taxon scope ownership validation passed.\n');
