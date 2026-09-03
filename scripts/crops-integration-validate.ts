/**
 * Deterministic gate for cross-layer crop integration. Offline.
 *
 * The rule this file exists for is the third one below. Wave 31 declared the
 * market layer "not modelled for crops" on the strength of a comment, and the
 * comment was wrong — every commodity carries a `sourceCrop` and 61 of the 64
 * commodities with price series resolve through it. Nothing caught that,
 * because a claim about the SHAPE of another layer had no way to be false.
 *
 * So a layer may now only be declared `unkeyed` if this validator can go into
 * that layer, walk every record, and find no field whose value is the slug of a
 * crop or a commodity. The claim has to survive someone looking.
 */
import {
  INTEGRATION_LAYERS,
  COMMODITIES_BY_CROP,
  COMMODITIES_WITHOUT_CROP,
  SHARED_HOST_THRESHOLD,
  allIntegrations,
  coverageFor,
  relatedCrops,
} from '../lib/crops/integration';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { TRADE_REQUIREMENTS } from '../lib/trade/registry';
import { calendarsForCrop } from '../lib/calendars/registry';
import { costsForCrop } from '../lib/economics/registry';
import { EXTENSION_RESOURCES } from '../lib/extension/registry';
import { VARIETY_REGISTRATIONS } from '../lib/varieties/registry';
import {
  seriesForCommodity,
  commoditiesWithMarketData,
} from '../lib/markets/registry';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { allRoutes } from '../lib/seo/routes';
import {
  CONCORDANCE,
  TRADE_FEASIBILITY,
  LAYER_ASSESSMENTS,
  TRADE_MAPPING,
} from '../data/crop-evidence';
import {
  CONCORDANCE_KINDS,
  TRADE_FEASIBILITY_DIMENSIONS,
  TRADE_FEASIBILITY_OUTCOMES,
  GAP_REASONS,
  RESEARCHED_GAP_REASONS,
  TRADE_MAPPING_OUTCOMES,
} from '../types/crop-evidence';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { SOURCE_MAP } from '../lib/sources/registry';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const cropSlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const commoditySlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').map(
    (c) => c.slug,
  ),
);
const I = allIntegrations();

/* -- 1. every published crop is judged, exactly once ----------------------- */
if (I.length !== cropSlugs.size)
  fail(`${I.length} integration records for ${cropSlugs.size} published crops`);
{
  const seen = new Set<string>();
  for (const x of I) {
    if (seen.has(x.slug)) fail(`${x.slug}: evaluated twice`);
    seen.add(x.slug);
    if (!cropSlugs.has(x.slug))
      fail(`${x.slug}: integration for a crop with no page`);
    const layers = x.coverage.map((c) => c.layer);
    for (const l of INTEGRATION_LAYERS)
      if (!layers.includes(l)) fail(`${x.slug}: layer "${l}" is not reported`);
    if (layers.length !== INTEGRATION_LAYERS.length)
      fail(`${x.slug}: reports ${layers.length} layers`);
  }
}

/* -- 2. every ref resolves, re-derived here -------------------------------- */
const universe: Record<string, Set<string>> = {
  calendars: new Set(
    [...cropSlugs].flatMap((s) => calendarsForCrop(s).map((c) => c.id)),
  ),
  cultivars: new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map(
      (c) => c.slug,
    ),
  ),
  varietyRegistrations: new Set(
    VARIETY_REGISTRATIONS.map((r) => (r as unknown as { id: string }).id),
  ),
  extension: new Set(
    EXTENSION_RESOURCES.map((e) => (e as unknown as { id: string }).id),
  ),
  biosecurity: new Set([
    ...PUBLISHED_CONTENT.filter((c) => c.contentType === 'pest').map(
      (c) => `pest:${c.slug}`,
    ),
    ...PUBLISHED_CONTENT.filter((c) => c.contentType === 'plant-disease').map(
      (c) => `plant-disease:${c.slug}`,
    ),
  ]),
  soils: new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'soil').map(
      (c) => c.slug,
    ),
  ),
  climate: new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'climate').map(
      (c) => c.slug,
    ),
  ),
  economics: new Set(
    [...cropSlugs].flatMap((s) => costsForCrop(s).map((o) => o.id)),
  ),
  markets: new Set(
    [...commoditySlugs].flatMap((c) =>
      seriesForCommodity(c).map((s) => `${c}:${s.id}`),
    ),
  ),
  relatedCrops: cropSlugs,
};

for (const x of I)
  for (const c of x.coverage) {
    const at = `${x.slug}/${c.layer}`;
    if (new Set(c.refs).size !== c.refs.length)
      fail(`${at}: counts the same reference twice`);
    const u = universe[c.layer];
    if (!u) {
      if (c.refs.length)
        fail(
          `${at}: reports references for a layer with no resolvable universe`,
        );
      continue;
    }
    for (const r of c.refs)
      if (!u.has(r))
        fail(`${at}: names "${r}", which does not resolve to anything`);
  }

/* -- 3. an "unkeyed" layer must survive being looked at --------------------- */
/**
 * Every string leaf in a record. Exact values only — a slug appearing inside a
 * sentence is prose, not a reference, and treating it as one would make this
 * check fire on every mention of wheat.
 */
function leafStrings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) leafStrings(x, out);
  else if (v && typeof v === 'object')
    for (const x of Object.values(v)) leafStrings(x, out);
  return out;
}

const LAYER_RECORDS: Record<string, unknown[]> = {
  trade: TRADE_REQUIREMENTS as unknown[],
};

for (const x of I.slice(0, 1))
  for (const c of x.coverage) {
    if (c.linkage.via !== 'unkeyed') continue;
    const records = LAYER_RECORDS[c.layer];
    if (!records) {
      fail(
        `layer "${c.layer}" is declared unkeyed and this validator holds no records for it — the claim cannot be checked, which is how the last one was wrong`,
      );
      continue;
    }
    const found: string[] = [];
    for (const r of records)
      for (const s of leafStrings(r))
        if (cropSlugs.has(s) || commoditySlugs.has(s)) found.push(s);
    if (found.length)
      fail(
        `layer "${c.layer}" is declared unkeyed, but its records name ${[...new Set(found)].slice(0, 4).join(', ')} — it IS keyed to crops`,
      );
    if (!c.linkage.reason?.trim())
      fail(`layer "${c.layer}": declared unkeyed with no reason`);
  }

/* -- 4. a declared linkage field must exist on the layer -------------------- */
/**
 * Read from the DECLARATION, not from a list kept beside it.
 *
 * The first version of this rule checked a hardcoded pairing of layer to field
 * and passed whatever the coverage record said — so renaming the declared field
 * to something that does not exist changed nothing. A rule that validates its
 * own constant is not validating the thing it names.
 */
{
  const LAYER_SOURCE: Record<string, unknown[]> = {
    calendars: [...cropSlugs].flatMap((s) => calendarsForCrop(s)) as unknown[],
    cultivars: PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar'),
    varietyRegistrations: VARIETY_REGISTRATIONS as unknown[],
    extension: EXTENSION_RESOURCES as unknown[],
    biosecurity: PUBLISHED_CONTENT.filter(
      (c) => c.contentType === 'pest' || c.contentType === 'plant-disease',
    ),
    soils: PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop'),
    climate: PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop'),
    economics: [...cropSlugs].flatMap((s) => costsForCrop(s)) as unknown[],
    markets: PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity'),
    varieties: VARIETY_REGISTRATIONS as unknown[],
  };
  const DERIVED = new Set(['relatedCrops']);
  for (const c of coverageFor([...cropSlugs][0]!)) {
    if (c.linkage.via === 'unkeyed' || DERIVED.has(c.layer)) continue;
    const field = c.linkage.field;
    const records = LAYER_SOURCE[c.layer];
    if (!records) {
      fail(
        `layer "${c.layer}" declares a linkage and this validator holds no records for it — the declaration cannot be checked`,
      );
      continue;
    }
    const present = records.some(
      (r) => r && typeof r === 'object' && field in (r as object),
    );
    if (!present)
      fail(
        `layer "${c.layer}" declares it links through "${field}", and no record in that layer has such a field`,
      );
  }
}

/* -- 5. the crop↔commodity concordance, both directions -------------------- */
{
  const commodities = PUBLISHED_CONTENT.filter(
    (c) => c.contentType === 'commodity',
  ) as unknown as { slug: string; sourceCrop?: { slug?: string } }[];
  for (const c of commodities) {
    const crop = c.sourceCrop?.slug;
    if (!crop) continue;
    if (!cropSlugs.has(crop))
      fail(
        `commodity "${c.slug}" names source crop "${crop}", which has no page`,
      );
    else if (!(COMMODITIES_BY_CROP.get(crop) ?? []).includes(c.slug))
      fail(
        `commodity "${c.slug}" names crop "${crop}" and the reverse index does not carry it back`,
      );
  }
  for (const [crop, list] of COMMODITIES_BY_CROP) {
    if (!cropSlugs.has(crop))
      fail(`concordance names crop "${crop}", which has no page`);
    for (const s of list) {
      const c = commodities.find((x) => x.slug === s);
      if (!c) fail(`concordance names commodity "${s}", which has no page`);
      else if (c.sourceCrop?.slug !== crop)
        fail(
          `concordance says "${s}" comes from "${crop}"; the commodity says "${c.sourceCrop?.slug}"`,
        );
    }
  }
  // A commodity with no source crop has to be one that genuinely has no crop
  // behind it. Anything else is a hole in the concordance being passed off as
  // a property of the data.
  for (const s of COMMODITIES_WITHOUT_CROP) {
    const c = PUBLISHED_CONTENT.find(
      (x) => x.contentType === 'commodity' && x.slug === s,
    ) as unknown as { commodityClass?: string; harvestedPart?: string };
    const animal =
      /animal|livestock|dairy|fib/i.test(String(c?.commodityClass ?? '')) ||
      /milk|egg|wool|hide|meat|honey/i.test(s);
    if (!animal)
      fail(
        `commodity "${s}" has no source crop and is not an animal product — the concordance has a hole here`,
      );
  }
  // Market data must be reachable from a crop wherever a crop exists.
  for (const s of commoditiesWithMarketData()) {
    const c = PUBLISHED_CONTENT.find(
      (x) => x.contentType === 'commodity' && x.slug === s,
    ) as unknown as { sourceCrop?: { slug?: string } } | undefined;
    if (!c) fail(`market series name commodity "${s}", which has no page`);
    else if (c.sourceCrop?.slug && !cropSlugs.has(c.sourceCrop.slug))
      fail(
        `commodity "${s}" carries market data and names a source crop with no page`,
      );
  }
}

/* -- 6. related crops name what they share --------------------------------- */
for (const x of I) {
  const rel = relatedCrops(x.slug);
  for (const r of rel) {
    const at = `${x.slug} → ${r.slug}`;
    if (r.slug === x.slug) fail(`${at}: a crop related to itself`);
    if (!cropSlugs.has(r.slug)) fail(`${at}: not a published crop`);
    if (!r.detail?.trim() || r.detail.length < 8)
      fail(`${at}: does not say what the two crops share`);
    // The basis must be true, re-derived here rather than trusted.
    if (r.basis === 'same-genus') {
      const a = IDENTITY_BY_SLUG.get(x.slug)?.genus;
      const b = IDENTITY_BY_SLUG.get(r.slug)?.genus;
      if (!a || a !== b)
        fail(`${at}: claims the same genus, and they are "${a}" and "${b}"`);
    }
    if (r.basis === 'shared-host-pressure') {
      const n = Number(/^(\d+)/.exec(r.detail)?.[1] ?? 0);
      if (n < SHARED_HOST_THRESHOLD)
        fail(
          `${at}: claims shared host pressure on ${n} organisms, below the threshold of ${SHARED_HOST_THRESHOLD}`,
        );
    }
  }
  // Relatedness by genus or shared hosts is symmetric. An asymmetry means the
  // derivation is reading something it should not.
  for (const r of rel)
    if (r.basis !== 'same-concept') {
      const back = relatedCrops(r.slug).find((y) => y.slug === x.slug);
      if (!back)
        fail(
          `${x.slug} → ${r.slug} is "${r.basis}" and ${r.slug} does not relate back`,
        );
    }
}

/* -- 7. no page may reach a route that does not exist ---------------------- */
{
  const paths = new Set(allRoutes().map((r) => r.path));
  for (const [crop, list] of COMMODITIES_BY_CROP) {
    if (!paths.has(`/crops/${crop}`))
      fail(`concordance crop "${crop}" has no emitted route`);
    for (const s of list)
      if (!paths.has(`/commodities/${s}`) && !paths.has(`/commodity/${s}`))
        fail(`concordance commodity "${s}" has no emitted route`);
  }
}

/* -- 8. payload budget: the data layer must stay on the server -------------- */
/**
 * A crop page reaches eleven layers, and the modules behind them import the
 * whole 49 MB snapshot corpus. That is fine on the server and catastrophic in a
 * browser bundle, and the distance between the two is one `'use client'`
 * directive at the top of a component that happens to import them.
 *
 * So the rule is structural rather than a size threshold: no client component
 * may import a module that reaches the data layer. A size budget would notice
 * the damage after it happened; this notices the import that would cause it.
 */
{
  const SERVER_ONLY = [
    '@/lib/crops/integration',
    '@/lib/crops/qualification',
    '@/lib/markets/registry',
    '@/lib/economics/registry',
    '@/lib/climate/registry',
    '@/lib/soils/registry',
    '@/data/snapshots',
    '@/lib/content/registry',
    '@/lib/seo/routes',
  ];
  const walk = (dir: string, out: string[] = []): string[] => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name);
      if (e.isDirectory()) walk(full, out);
      else if (/\.tsx?$/.test(e.name)) out.push(full);
    }
    return out;
  };
  const files = [...walk('app'), ...walk('components'), ...walk('lib')];
  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    if (!/^['"]use client['"]/m.test(src)) continue;
    for (const m of SERVER_ONLY)
      if (src.includes(`from '${m}'`))
        fail(
          `client component ${f} imports ${m} — the data layer would be bundled into the browser`,
        );
  }
}

/* -- 9. every layer's coverage is accounted for, and the count is live ----- */
/**
 * Principle A, applied to the matrix itself.
 *
 * A coverage figure with no explanation is a number nobody has to stand behind.
 * Every layer must carry an assessment, the assessment must use a reason from
 * the vocabulary rather than the word "missing", and — the part that makes it
 * more than prose — the reach it records is recomputed here and compared. An
 * assessment written against a coverage of 6 and left behind while coverage
 * moved to 40 is a stale claim, and stale claims are the thing this program
 * keeps finding.
 */
{
  const reach = new Map<string, number>();
  for (const l of INTEGRATION_LAYERS)
    reach.set(
      l,
      I.filter((x) => x.coverage.find((c) => c.layer === l)!.refs.length > 0)
        .length,
    );

  const assessed = new Set(LAYER_ASSESSMENTS.map((a) => a.layer));
  for (const l of INTEGRATION_LAYERS)
    if (!assessed.has(l))
      fail(
        `layer "${l}" reaches ${reach.get(l)} crops and carries no assessment — a coverage figure with no explanation is a number nobody has to stand behind`,
      );

  for (const a of LAYER_ASSESSMENTS) {
    const at = `assessment "${a.layer}"`;
    if (
      !INTEGRATION_LAYERS.includes(
        a.layer as (typeof INTEGRATION_LAYERS)[number],
      )
    )
      fail(`${at}: names a layer the matrix does not report`);
    if (!GAP_REASONS.includes(a.reason))
      fail(`${at}: reason "${a.reason}" is not in the vocabulary`);
    if (!ISO_DATE.test(a.assessedAt))
      fail(`${at}: assessedAt is not an ISO date`);
    if (!a.finding?.trim() || a.finding.length < 120)
      fail(`${at}: gives no substantive finding`);
    if (!a.wouldRaiseCoverageBy?.trim() || a.wouldRaiseCoverageBy.length < 40)
      fail(`${at}: does not say what would raise coverage`);
    // The live comparison.
    const now = reach.get(a.layer);
    if (now !== undefined && now !== a.reachesAtAssessment)
      fail(
        `${at}: recorded reach of ${a.reachesAtAssessment} and the matrix now says ${now} — the assessment is stale`,
      );
    // A reason that asserts somebody looked has to name what they looked at.
    if (RESEARCHED_GAP_REASONS.includes(a.reason) && !a.sourceIds?.length)
      fail(
        `${at}: reason "${a.reason}" asserts a source was examined and names none`,
      );
    for (const sid of a.sourceIds ?? [])
      if (!SOURCE_MAP.has(sid)) fail(`${at}: names unknown source "${sid}"`);
    // A layer at full coverage is not a gap.
    if (now === I.length && a.reason !== 'NOT_APPLICABLE')
      fail(`${at}: every crop is covered and a gap reason is recorded`);
    // And the reverse, which is the one that lets a real gap disappear.
    // NOT_APPLICABLE means the layer does not apply — which is true when every
    // crop is covered, or when the layer is derived from the corpus rather than
    // ingested from a source. A layer that is neither has a real gap, and
    // filing it as not-applicable makes that gap invisible.
    if (a.reason === 'NOT_APPLICABLE' && now !== undefined && now < I.length) {
      const linkage = coverageFor([...cropSlugs][0]!).find(
        (c) => c.layer === a.layer,
      )?.linkage;
      const derived =
        linkage?.via === 'unkeyed' ||
        (linkage?.via === 'direct' && linkage.field === 'derived');
      if (!derived)
        fail(
          `${at}: reaches ${now} of ${I.length} and is filed as not applicable — a layer that is ingested from a source and does not cover every crop has a gap`,
        );
    }
    // A claim that no source exists cannot stand while the corpus is already
    // holding records from one for that very layer.
    if (a.reason === 'NO_VERIFIED_SOURCE_FOUND' && (now ?? 0) > 0)
      fail(
        `${at}: claims no verified source was found and the layer already holds records for ${now} crop(s) — a source plainly exists`,
      );
  }
}

/* -- 9b. a rendered coverage count must be computed ------------------------ */
/**
 * The corpus may state what it holds — "58 crop calendar records" — because
 * that number is counted when the page is built. The moment it is typed instead
 * it becomes the class of claim this program has now found false three times:
 * true on the day it was written and silently wrong afterwards.
 *
 * So the components that render coverage may not contain a numeric literal in a
 * text position. This is narrow on purpose: it applies to the components whose
 * job is to state counts, not to the corpus at large.
 */
{
  const COVERAGE_COMPONENTS = [
    'components/crops/CropEvidenceSummary.tsx',
    'components/crops/CropMarketLink.tsx',
  ];
  for (const f of COVERAGE_COMPONENTS) {
    if (!existsSync(f)) continue;
    const src = readFileSync(f, 'utf8');
    // A digit sitting between JSX tags, or inside a JSX expression as a bare
    // literal, is a count somebody typed.
    for (const m of src.matchAll(/>\s*\{?\s*(\d+)\s*\}?\s*</g))
      fail(
        `${f} renders the literal ${m[1]} as text — a coverage count must be computed from the corpus, never written down`,
      );
  }
}

/* -- 10. the concordance is classified, not assumed ------------------------ */
{
  const commodities = PUBLISHED_CONTENT.filter(
    (c) => c.contentType === 'commodity',
  ) as unknown as { slug: string; sourceCrop?: { slug?: string } }[];
  const byCommodity = new Map(CONCORDANCE.map((c) => [c.commoditySlug, c]));
  const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));

  for (const c of CONCORDANCE) {
    const at = `concordance "${c.commoditySlug}"`;
    if (!CONCORDANCE_KINDS.includes(c.kind))
      fail(`${at}: kind "${c.kind}" is not in the vocabulary`);
    if (!commodities.some((x) => x.slug === c.commoditySlug))
      fail(`${at}: names a commodity that is not published`);
    if (!c.note?.trim() || c.note.length < 20) fail(`${at}: gives no note`);
    const named = commodities.find((x) => x.slug === c.commoditySlug)
      ?.sourceCrop?.slug;
    if (c.kind === 'ANIMAL_PRODUCT') {
      if (named)
        fail(`${at}: classified as an animal product and names a source crop`);
      if (c.cropSlug)
        fail(`${at}: classified as an animal product and records a crop`);
    } else {
      if (c.cropSlug !== named)
        fail(
          `${at}: classified against "${c.cropSlug}" and the commodity names "${named}"`,
        );
      // The distinction this classification exists to make.
      const isConcept = !!named && conceptSlugs.has(named);
      if (c.kind === 'BROADER_CROP_CONCEPT' && !isConcept)
        fail(
          `${at}: classified as a broader concept and "${named}" is not a declared crop concept`,
        );
      if (c.kind === 'EXACT_CROP' && isConcept)
        fail(
          `${at}: classified as an exact crop and "${named}" is a multi-taxon concept — a series reached through it is about the concept`,
        );
      /*
       * A granularity that is not exact has to say why, at length. "Fresh
       * oranges" and "oranges" differ by most of the world crop, and a
       * classification that records the difference without explaining it
       * leaves the next reader to rediscover which way it runs.
       */
      if (
        (c.kind === 'NARROWER_THAN_CROP' ||
          c.kind === 'BROADER_THAN_CROP' ||
          c.kind === 'AMBIGUOUS') &&
        c.note.trim().length < 100
      )
        fail(
          `${at}: classified as "${c.kind}" with a note too short to say which part of the crop it covers, or which crops beyond it`,
        );
      if (c.kind === 'BROADER_THAN_CROP' && isConcept)
        fail(
          `${at}: is broader than its crop and that crop is a concept — the concept classification says this more precisely`,
        );
    }
  }
  /*
   * And in the other direction: EVERY commodity must be classified.
   *
   * The rule used to require a classification only where the mapping was
   * awkward — no source crop, or a concept. That left fifty-five mappings
   * unexamined and looking exact, and sixteen of them were not: they cover
   * part of the crop rather than the crop. Wave 42 classified all seventy-five
   * and the requirement is now total, so an unclassified mapping is a mapping
   * nobody has looked at rather than one nobody needed to.
   */
  for (const x of commodities)
    if (!byCommodity.has(x.slug))
      fail(
        `commodity "${x.slug}" has no concordance classification — every commodity-to-crop mapping must state its granularity`,
      );
}

/* -- 10b. the trade feasibility study ------------------------------------- */
/**
 * A feasibility study is the easiest kind of record to write and the easiest to
 * write emptily: eight dimensions, eight paragraphs, an outcome. These rules
 * check the parts that can be checked — that every dimension the model names is
 * actually addressed, that each finding cites how it was established rather
 * than what is believed, and that the outcome agrees with the findings. An
 * outcome of SAFE_TO_INGEST with a blocking finding under it is the specific
 * contradiction worth failing on.
 */
{
  const at = 'trade feasibility study';
  if (!TRADE_FEASIBILITY_OUTCOMES.includes(TRADE_FEASIBILITY.outcome))
    fail(
      `${at}: outcome "${TRADE_FEASIBILITY.outcome}" is not in the vocabulary`,
    );
  const seenDims = new Set<string>();
  for (const f of TRADE_FEASIBILITY.findings) {
    const w = `${at} · ${f.dimension}`;
    if (!TRADE_FEASIBILITY_DIMENSIONS.includes(f.dimension))
      fail(`${w}: dimension is not in the vocabulary`);
    if (seenDims.has(f.dimension)) fail(`${w}: addressed twice`);
    seenDims.add(f.dimension);
    if (f.finding.trim().length < 80) fail(`${w}: says nothing checkable`);
    if (f.evidence.trim().length < 40)
      fail(
        `${w}: records no evidence — a finding without a fetched URL, an observed response or a text read is a belief`,
      );
  }
  for (const d of TRADE_FEASIBILITY_DIMENSIONS)
    if (!seenDims.has(d)) fail(`${at}: never addressed the dimension "${d}"`);
  const blocking = TRADE_FEASIBILITY.findings.filter((f) => f.blocking);
  if (TRADE_FEASIBILITY.outcome === 'SAFE_TO_INGEST' && blocking.length)
    fail(
      `${at}: says it is safe to ingest and records ${blocking.length} blocking finding(s)`,
    );
  if (TRADE_FEASIBILITY.outcome !== 'SAFE_TO_INGEST' && !blocking.length)
    fail(
      `${at}: says "${TRADE_FEASIBILITY.outcome}" and records no blocking finding — something has to be in the way`,
    );
  if (
    TRADE_FEASIBILITY.outcome === 'REQUIRES_DEDICATED_WAVE' &&
    !TRADE_FEASIBILITY.prerequisites.length
  )
    fail(
      `${at}: says a dedicated wave is needed and lists nothing it would do`,
    );
  for (const sid of TRADE_FEASIBILITY.sourceIds)
    if (!SOURCE_MAP.has(sid)) fail(`${at}: names unknown source "${sid}"`);
  /*
   * And the study must not have quietly become data. Zero crop trade coverage
   * is an acceptable outcome; zero coverage while a study says it is unsafe to
   * model is the only consistent one.
   */
  if (TRADE_FEASIBILITY.outcome === 'NOT_SAFE_TO_MODEL') {
    const tradeCoverage = allIntegrations().filter((c) =>
      c.coverage.some((l) => l.layer === 'trade' && l.refs.length > 0),
    ).length;
    if (tradeCoverage > 0)
      fail(
        `${at}: says the instrument is not safe to model and ${tradeCoverage} crop(s) carry trade coverage`,
      );
  }
}

/* -- 11. the trade assessment says what was examined ----------------------- */
{
  const t = TRADE_MAPPING;
  if (!TRADE_MAPPING_OUTCOMES.includes(t.outcome))
    fail(`trade mapping: outcome "${t.outcome}" is not in the vocabulary`);
  if (!ISO_DATE.test(t.assessedAt))
    fail('trade mapping: assessedAt is not an ISO date');
  if (t.examined.length < 2)
    fail('trade mapping: records fewer than two things examined');
  if (!t.finding?.trim() || t.finding.length < 200)
    fail('trade mapping: gives no substantive finding');
  if (!t.wouldChangeIf?.trim())
    fail('trade mapping: does not say what would change it');
  // An outcome asserting a usable key must be matched by actual coverage, or it
  // is a claim that a mapping exists in a corpus that has none.
  const tradeReach = I.filter(
    (x) => x.coverage.find((c) => c.layer === 'trade')!.refs.length > 0,
  ).length;
  if (
    (t.outcome === 'CROP_KEY_AVAILABLE' ||
      t.outcome === 'COMMODITY_KEY_AVAILABLE') &&
    tradeReach === 0
  )
    fail(
      `trade mapping: outcome "${t.outcome}" asserts a usable key and no crop reaches the trade layer`,
    );
}

/* -- report ---------------------------------------------------------------- */
console.log('\nCross-layer crop integration\n');
console.log(`  Published crops:              ${I.length}`);
console.log(
  `  Crop↔commodity concordance:   ${COMMODITIES_BY_CROP.size} crops → ${[...COMMODITIES_BY_CROP.values()].flat().length} commodities`,
);
console.log(
  `  Commodities with no crop:     ${COMMODITIES_WITHOUT_CROP.length} (animal products)`,
);
{
  const per = new Map<string, number>();
  for (const x of I)
    for (const c of x.coverage)
      if (c.refs.length) per.set(c.layer, (per.get(c.layer) ?? 0) + 1);
  console.log('\n  Crops reaching each layer');
  for (const l of INTEGRATION_LAYERS)
    console.log(
      `    ${l.padEnd(22)}${String(per.get(l) ?? 0).padStart(4)} of ${I.length}`,
    );
  const dist = new Map<number, number>();
  for (const x of I)
    dist.set(x.layersReached, (dist.get(x.layersReached) ?? 0) + 1);
  console.log('\n  Layers reached per crop');
  for (const [k, v] of [...dist].sort((a, b) => a[0] - b[0]))
    console.log(
      `    ${String(k).padStart(2)} layer(s)${String(v).padStart(6)} crop(s)`,
    );
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop integration validation passed.\n');
