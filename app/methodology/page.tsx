import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SOURCES } from '@/lib/sources/registry';

const TITLE = 'Sources & Methodology';
const PATH = '/methodology';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How AgricultureID sources, structures, and validates its content — the source registry, preferred and avoided sources, and the checks that gate publication.',
  path: PATH,
});

export default function MethodologyPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'How AgricultureID sources, structures, and validates its content.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Methodology"
        title="Sources &amp; methodology"
        lead="This page explains where our information comes from, how sources are recorded and cited, and the automated checks that every entry must pass before it is published."
        crumbs={pageBreadcrumbs('Sources & Methodology', PATH)}
      />

      <Prose>
        <h2>The source registry</h2>
        <p>
          AgricultureID maintains a structured registry of{' '}
          <Link href="/sources">{SOURCES.length} sources</Link>. Each source
          records its organization, title, canonical URL, type, jurisdiction,
          language, access date, and a reliability classification. Content cites
          sources by a stable identifier, so the same authority can be
          referenced across many entries without duplication, and every citation
          resolves to a real registry entry.
        </p>

        <h2>Preferred sources</h2>
        <ul>
          <li>National agriculture ministries and government agencies</li>
          <li>FAO and other recognised intergovernmental organizations</li>
          <li>USDA and its agencies (ARS, NRCS, NASS, ERS, APHIS, FAS)</li>
          <li>The European Commission and EFSA</li>
          <li>Official plant-protection authorities such as EPPO</li>
          <li>
            Universities, extension services, and agricultural research
            institutes
          </li>
          <li>Peer-reviewed scientific literature</li>
          <li>Official breed and crop registries</li>
        </ul>

        <h2>Sources we avoid</h2>
        <ul>
          <li>Anonymous blogs and unattributed content</li>
          <li>Affiliate articles used as scientific sources</li>
          <li>Content farms and copied material</li>
          <li>Unsupported commercial claims</li>
          <li>AI-generated or invented citations and URLs</li>
        </ul>

        <h2>How claims are handled</h2>
        <p>
          Because agricultural figures vary by region and season, we reference
          primary datasets rather than republishing volatile numbers, and we
          describe scale qualitatively where a precise figure would be
          misleading. Quantitative guidance that depends on local conditions —
          rates, dates, volumes, and yields — is framed as region-specific
          rather than universal.
        </p>

        <h2>Validation that gates publication</h2>
        <p>
          Content is authored as structured, typed data and checked
          automatically. Our validation fails the build if it finds any of the
          following:
        </p>
        <ul>
          <li>A cited source that does not exist in the registry</li>
          <li>Duplicate source identifiers or malformed source URLs</li>
          <li>A published entry with no sources</li>
          <li>Duplicate slugs, canonical URLs, titles, or descriptions</li>
          <li>Related-content links that do not resolve</li>
          <li>Missing required fields or malformed dates</li>
          <li>Orphaned public entries or placeholder text</li>
          <li>Structured-data that fails to generate</li>
        </ul>
        <p>
          These checks run locally and in continuous integration, so structural
          problems are caught before anything is published. See our{' '}
          <Link href="/editorial-policy">editorial policy</Link> for how we
          weigh evidence and treat uncertainty.
        </p>
      </Prose>
    </Container>
  );
}
