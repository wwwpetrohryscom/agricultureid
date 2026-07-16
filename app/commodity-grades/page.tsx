import type { Metadata } from 'next';
import Link from 'next/link';
import { EntryGrid } from '@/components/content/EntryGrid';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Grading Standards';
const PATH = '/commodity-grades';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Summaries of official commodity grading standards — issuing body, jurisdiction, edition, legal status, and the attributes each standard measures.',
  path: PATH,
});

export default function CommodityGradesHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Summaries of official commodity grading standards with body, jurisdiction, and edition.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Grading Standards"
        title="Commodity grading standards"
        lead="Grades are how commodities are described commercially: a defined set of measured attributes and defect limits, issued by a named body, in force in a named jurisdiction, in a specific edition. This section summarises what those standards measure and how they work."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>What a grade is — and is not</h2>
        <p>
          A grade is a commercial classification, not a verdict on quality, and
          not a food-safety clearance. A lot that meets a grade can still be
          unsuitable for a particular use; a lot that misses one can be
          perfectly safe. Grades exist so that buyers and sellers can describe a
          lot in shared, measurable terms.
        </p>
        <p>
          Grading standards are also{' '}
          <strong>versioned and jurisdictional</strong>. The same commodity is
          graded differently in different countries, and standards are revised.
          Every entry here names its issuing body, jurisdiction, edition, and
          legal status (mandatory, voluntary, or contractual) so a reader knows
          exactly what is being described.
        </p>

        <h2>Reproduction limits</h2>
        <p>
          Many standards are copyrighted or sold. AgricultureID{' '}
          <strong>summarises</strong> what a standard measures and how it is
          structured — it does not reproduce standards verbatim, and it is not a
          substitute for the official text. Every entry states its reproduction
          limitations and points to the issuing body.
        </p>
        <p>
          AgricultureID does not perform grading, issue certificates, or act as
          an inspection authority. For an authoritative determination, consult
          the issuing body or an accredited inspector. See the{' '}
          <Link href="/commodities">commodities</Link> each standard applies to
          for the attributes involved.
        </p>
      </Prose>

      <EntryGrid
        type="commodity-grade"
        path={PATH}
        heading="Grading standards A–Z"
        intro="Each entry covers the issuing body, jurisdiction, edition, legal status, the attributes and defects considered, sampling context, and the limits of the summary."
      />

      <SourceList
        references={[
          {
            sourceId: 'usda',
            citedFor: 'United States commodity grading standards context',
          },
          {
            sourceId: 'fao',
            citedFor: 'International commodity quality and grading context',
          },
        ]}
      />
    </Container>
  );
}
