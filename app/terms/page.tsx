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
import { SITE_LAST_UPDATED } from '@/lib/seo/routes';

const TITLE = 'Terms of Use';
const PATH = '/terms';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'The terms governing use of the AgricultureID website, including content use, intellectual property, and the absence of warranties.',
  path: PATH,
});

export default function TermsPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'Terms governing use of the AgricultureID website.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Legal"
        title="Terms of use"
        lead="These terms govern your use of the AgricultureID website. By using the site, you agree to them."
        crumbs={pageBreadcrumbs('Terms', PATH)}
      />

      <Prose>
        <p className="text-sm text-ink-500">
          Last updated: {SITE_LAST_UPDATED}
        </p>

        <h2>Use of the site</h2>
        <p>
          AgricultureID is provided for general information and educational
          purposes. You may read, reference, and share links to our pages. You
          agree not to misuse the site — for example by attempting to disrupt
          it, scrape it in ways that burden the service, or use it unlawfully.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The original text, design, and structured data created for
          AgricultureID are the property of AgricultureID and its authors.
          Source materials that we cite — such as government, intergovernmental,
          and research publications — remain the property of their respective
          owners and are subject to their own terms. Brand names and logos
          referenced on the site belong to their owners.
        </p>

        <h2>No professional advice; no warranty</h2>
        <p>
          Content is provided “as is,” without warranties of any kind, and may
          contain errors or become out of date. It is not professional
          agronomic, veterinary, legal, or financial advice. See our{' '}
          <Link href="/disclaimer">disclaimer</Link> for important limitations,
          particularly regarding pesticides, fertilizers, veterinary treatment,
          and regulated products.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, AgricultureID is not liable
          for any loss or damage arising from reliance on information on the
          site. You are responsible for verifying information against local law,
          product labels, and qualified professionals before acting on it.
        </p>

        <h2>External links</h2>
        <p>
          We link to third-party websites for reference. We are not responsible
          for the content, accuracy, or practices of those external sites.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes indicates acceptance of the revised terms. Questions can
          be sent to{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </Prose>
    </Container>
  );
}
