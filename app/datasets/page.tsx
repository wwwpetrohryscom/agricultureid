import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { allSnapshots } from '@/lib/geo/snapshots';
import { datasetPath, datasetSlug } from '@/lib/geo/paths';

const TITLE = 'Datasets';
const PATH = '/datasets';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Immutable, versioned dataset snapshots behind AgricultureID’s statistics — each with source, dataset version, retrieval date, coverage, and an integrity checksum.',
  path: PATH,
});

export default function DatasetsPage() {
  const snaps = allSnapshots();
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'Versioned dataset snapshots with full provenance.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Data"
        title="Dataset snapshots"
        lead="Every statistic on AgricultureID resolves to an immutable snapshot captured from an official source. Snapshots record the dataset version, retrieval date, coverage, and an integrity checksum; a changed dataset version is stored as a new snapshot, never an overwrite."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-200 text-left text-ink-700">
              <th scope="col" className="py-2 pr-4 font-semibold">
                Indicator
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Version
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Years
              </th>
              <th scope="col" className="py-2 pr-4 font-semibold">
                Jurisdictions
              </th>
              <th scope="col" className="py-2 font-semibold">
                Rows
              </th>
            </tr>
          </thead>
          <tbody>
            {snaps.map((s) => (
              <tr key={s.snapshotId} className="border-b border-ink-100">
                <td className="py-2 pr-4">
                  <Link
                    href={datasetPath(datasetSlug(s.indicatorId))}
                    className="font-medium text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                  >
                    {s.indicatorName}
                  </Link>
                </td>
                <td className="py-2 pr-4 tabular-nums">{s.datasetVersion}</td>
                <td className="py-2 pr-4 tabular-nums">
                  {s.coveredYears.length === 2
                    ? `${s.coveredYears[0]}–${s.coveredYears[1]}`
                    : '—'}
                </td>
                <td className="py-2 pr-4 tabular-nums">
                  {s.jurisdictionCount}
                </td>
                <td className="py-2 tabular-nums">
                  {s.rowCount.toLocaleString('en')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-ink-600">
        Source: World Bank Open Data (CC BY 4.0), compiled from FAO and national
        statistical sources. See{' '}
        <Link
          href="/methodology/data"
          className="text-olive-800 underline underline-offset-2"
        >
          data methodology
        </Link>
        .
      </p>
    </Container>
  );
}
