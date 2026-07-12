import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Data methodology';
const PATH = '/methodology/data';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How AgricultureID sources, versions, and presents agricultural statistics: immutable dataset snapshots, dated values, honest treatment of estimates, and rules against misleading comparisons.',
  path: PATH,
});

export default function DataMethodologyPage() {
  return (
    <Container className="py-8 lg:py-10" width="narrow">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'How AgricultureID sources and presents agricultural statistics.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Methodology"
        title="Data methodology"
        lead="AgricultureID separates stable, descriptive facts from volatile statistics, and never presents a number without its year, unit, source, and dataset version."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <Prose>
        <h2>Sources</h2>
        <p>
          Country statistics are drawn from{' '}
          <a
            href="https://data.worldbank.org"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            World Bank Open Data
          </a>{' '}
          (World Development Indicators), which is openly licensed (CC BY 4.0)
          and compiled from FAO and national statistical sources. We prefer an
          open, versioned, machine-readable source over scraping dashboards or
          search-engine results.
        </p>

        <h2>Immutable snapshots</h2>
        <p>
          Each indicator is captured as a{' '}
          <Link href="/datasets">dataset snapshot</Link>: a stored copy
          recording the dataset version (the provider’s last-updated date), the
          retrieval date, coverage, and an integrity checksum. A changed dataset
          version is saved as a new snapshot — historical snapshots are never
          overwritten.
        </p>

        <h2>How values are presented</h2>
        <ul>
          <li>Every value carries its own year and unit.</li>
          <li>
            Values are described as dated, revisable statistics, not evergreen
            prose. We do not hard-code a specific figure into descriptive text.
          </li>
          <li>
            Modeled indicators (for example, employment in agriculture) are
            flagged as estimates, not observed counts.
          </li>
          <li>
            We do not rank countries using values from incompatible years,
            units, or methods, and we flag indicators (such as index numbers)
            that are not comparable across countries as absolutes.
          </li>
        </ul>

        <h2>Derived values</h2>
        <p>
          A value computed from other statistics (for example, arable land as a
          share of agricultural land) is labelled as derived and records its
          formula, formula version, inputs, and the source versions of those
          inputs. Derived values are never presented as observed measurements.
        </p>

        <h2>Limitations</h2>
        <p>
          Definitions, coverage, and revision cycles differ between datasets, so
          figures are not always comparable across sources or years. Country
          coverage is partial and some series are sparse. For authoritative,
          current figures, consult the primary dataset linked on each page.
        </p>
      </Prose>
    </Container>
  );
}
