import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE } from '@/lib/site';

const TITLE = 'Corrections';
const PATH = '/corrections';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How to report a factual error on AgricultureID and how we review and correct it. Accuracy matters to us, and we welcome corrections.',
  path: PATH,
});

export default function CorrectionsPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'How to report and how we handle corrections.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Accuracy"
        title="Corrections"
        lead="We want our content to be accurate and well-sourced. If you find an error, please tell us — corrections are welcome and taken seriously."
        crumbs={pageBreadcrumbs('Corrections', PATH)}
      />

      <Prose>
        <h2>How to report an error</h2>
        <p>
          Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>{' '}
          with the word “Correction” in the subject line. To help us respond
          quickly, please include:
        </p>
        <ul>
          <li>The page or entry concerned (a link is ideal)</li>
          <li>The specific statement you believe is incorrect</li>
          <li>What you believe is correct, and any supporting source</li>
        </ul>

        <h2>How we handle it</h2>
        <p>
          We review reported errors against authoritative sources. If we confirm
          a material factual error, we correct the entry and update its “last
          updated” date. If a report is unclear or we cannot verify it, we may
          follow up for more detail. We aim to respond as promptly as we
          reasonably can, but we do not guarantee a fixed turnaround.
        </p>

        <h2>Scope</h2>
        <p>
          This process is for factual and sourcing errors. General questions and
          feedback are also welcome — see our{' '}
          <Link href="/contact">contact page</Link>. For how we weigh evidence
          and treat uncertainty, see our{' '}
          <Link href="/editorial-policy">editorial policy</Link>.
        </p>
      </Prose>
    </Container>
  );
}
