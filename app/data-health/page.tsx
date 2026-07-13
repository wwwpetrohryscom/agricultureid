import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { DATASETS } from '@/lib/data-ops/registry';
import { provenanceHealth } from '@/lib/provenance/health';
import { FORMULAS } from '@/lib/tools/formulas';
import { SOURCES } from '@/data/sources';
import { evidenceTier } from '@/lib/sources/evidence';
import { IMAGE_MAP } from '@/data/images';

const TITLE = 'Data health';
const PATH = '/data-health';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'A transparency dashboard for AgricultureID’s scientific data operations: dataset snapshots and versions, source-evidence distribution, provenance coverage, image licensing, and formula versions.',
  path: PATH,
});

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-card border border-ink-100 bg-white p-4">
      <div className="text-2xl font-bold tabular-nums text-forest-950">
        {value}
      </div>
      <div className="mt-0.5 text-sm text-ink-600">{label}</div>
    </div>
  );
}

export default function DataHealthPage() {
  const health = provenanceHealth();
  const retrievalDates = [
    ...new Set(DATASETS.map((d) => d.retrievalDate)),
  ].sort();

  // Source evidence-tier distribution.
  const tierDist: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  for (const s of SOURCES) {
    const t = evidenceTier(s.id);
    tierDist[t] = (tierDist[t] ?? 0) + 1;
  }

  // Image license distribution.
  const licenseDist = new Map<string, number>();
  for (const img of Object.values(IMAGE_MAP)) {
    const lic = img.license ?? 'unspecified';
    licenseDist.set(lic, (licenseDist.get(lic) ?? 0) + 1);
  }

  // Search index generation metadata (non-sensitive).
  let searchMeta = { count: 0, checksum: '' };
  try {
    const idx = JSON.parse(
      readFileSync(join(process.cwd(), 'public', 'search-index.json'), 'utf8'),
    ) as { count: number; checksum: string };
    searchMeta = { count: idx.count, checksum: idx.checksum };
  } catch {
    /* index not built yet */
  }

  const reviewCount = health.entries.filter(
    (e) => !e.statuses.every((s) => s === 'healthy'),
  ).length;
  const formulaVersions = [...new Set(FORMULAS.map((f) => f.formulaVersion))];

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'Scientific data operations transparency dashboard.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Methodology"
        title="Data health"
        lead="A transparency view of AgricultureID’s scientific data operations. All figures are derived deterministically from the checked-in registries and immutable dataset snapshots — no live metrics, no internal notes."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Registered datasets" value={DATASETS.length} />
        <Stat label="Provenance subjects" value={health.totals.subjects} />
        <Stat label="Healthy subjects" value={health.totals.byStatus.healthy} />
        <Stat label="Flagged for review" value={reviewCount} />
        <Stat label="Formulas" value={FORMULAS.length} />
        <Stat label="Search documents" value={searchMeta.count} />
        <Stat label="Registry sources" value={SOURCES.length} />
        <Stat
          label="Latest retrieval"
          value={retrievalDates[retrievalDates.length - 1] ?? '—'}
        />
      </div>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Source evidence tiers
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          Tier 1 = official/intergovernmental/registry/peer-reviewed · Tier 2 =
          extension &amp; professional databases · Tier 3 = secondary references
          (never the sole support for quantitative or safety claims).
        </p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Stat label="Tier 1 sources" value={tierDist[1]!} />
          <Stat label="Tier 2 sources" value={tierDist[2]!} />
          <Stat label="Tier 3 sources" value={tierDist[3]!} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Image licensing
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[...licenseDist.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([lic, n]) => (
              <li
                key={lic}
                className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-700"
              >
                {lic} <span className="text-ink-400">· {n}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Provenance status
        </h2>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {Object.entries(health.totals.byStatus).map(([status, n]) => (
            <li
              key={status}
              className="flex items-baseline justify-between rounded-card border border-ink-100 bg-white px-3 py-2 text-sm"
            >
              <span className="text-ink-700">{status}</span>
              <span className="tabular-nums text-ink-500">{n}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-ink-600">
        Formula versions in use: {formulaVersions.join(', ')}. Dataset snapshots
        are immutable and checksum-verified. See{' '}
        <Link
          href="/methodology/data"
          className="text-olive-800 underline underline-offset-2"
        >
          data methodology
        </Link>{' '}
        and{' '}
        <Link
          href="/datasets"
          className="text-olive-800 underline underline-offset-2"
        >
          dataset snapshots
        </Link>
        .
      </p>
    </Container>
  );
}
