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

const TITLE = 'Contact';
const PATH = '/contact';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Get in touch with AgricultureID for feedback, corrections, and general inquiries.',
  path: PATH,
});

export default function ContactPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'How to contact AgricultureID.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Contact"
        title="Contact"
        lead="We welcome feedback, corrections, and general inquiries about AgricultureID."
        crumbs={pageBreadcrumbs('Contact', PATH)}
      />

      <Prose>
        <h2>Email</h2>
        <p>
          The best way to reach us is by email at{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. We
          read every message, though we cannot promise a response to all of
          them.
        </p>

        <h2>What to get in touch about</h2>
        <ul>
          <li>
            <strong>Corrections</strong> — see our{' '}
            <Link href="/corrections">corrections process</Link> for what to
            include.
          </li>
          <li>
            <strong>Feedback and suggestions</strong> — on coverage, clarity, or
            sourcing.
          </li>
          <li>
            <strong>General inquiries</strong> — about the platform and its
            methodology.
          </li>
        </ul>

        <h2>Please note</h2>
        <p>
          AgricultureID provides general educational information only. We cannot
          provide personalised agronomic, veterinary, legal, or financial
          advice, and messages to us are not a substitute for consulting a
          qualified professional or your local authorities. Please do not send
          confidential or sensitive personal information. See our{' '}
          <Link href="/disclaimer">disclaimer</Link> for more.
        </p>
      </Prose>
    </Container>
  );
}
