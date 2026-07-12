import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE_LAST_UPDATED } from '@/lib/seo/routes';

const TITLE = 'Disclaimer';
const PATH = '/disclaimer';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'AgricultureID provides general educational information only. It is not a substitute for local law, product labels, or qualified professional advice.',
  path: PATH,
});

export default function DisclaimerPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Important limitations on the use of AgricultureID content.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Important"
        title="Disclaimer"
        lead="Please read this before acting on anything you find here. AgricultureID provides general educational information, not professional advice for your specific situation."
        crumbs={pageBreadcrumbs('Disclaimer', PATH)}
      />

      <Prose>
        <p className="text-sm text-ink-500">
          Last updated: {SITE_LAST_UPDATED}
        </p>

        <h2>General information only</h2>
        <p>
          The content on AgricultureID is provided for general educational and
          reference purposes. Agriculture is highly local: outcomes depend on
          climate, soils, varieties, breeds, regulations, and conditions that
          vary by region, season, and situation. Information here is not
          tailored to your circumstances and may not be current for your area.
        </p>

        <h2>Not professional advice</h2>
        <p>
          Nothing on this site is professional agronomic, veterinary, legal, or
          financial advice, and it should not be relied upon as such. For
          decisions that matter, consult a qualified professional and your local
          authorities.
        </p>

        <h2>Pesticides, fertilizers, veterinary, and regulated products</h2>
        <p>
          We deliberately do not provide specific chemical treatment
          instructions, product recommendations, doses, or veterinary treatment
          protocols. Any use of pesticides, fertilizers, veterinary medicines,
          or other regulated products must comply with:
        </p>
        <ul>
          <li>Local and national law and regulations</li>
          <li>The product’s approved label and safety instructions</li>
          <li>Current, region-specific official guidance</li>
          <li>The advice of qualified professionals</li>
        </ul>
        <p>
          Products approved in one country may be restricted or prohibited in
          another, and approvals change over time.
        </p>

        <h2>No liability</h2>
        <p>
          To the fullest extent permitted by law, AgricultureID accepts no
          liability for any loss or damage resulting from reliance on
          information on this site. You act on it at your own risk. See our{' '}
          <Link href="/terms">terms of use</Link> for more.
        </p>

        <h2>External sources</h2>
        <p>
          We link to external, authoritative sources for verification. Those
          sources are governed by their own terms, and we do not control their
          content.
        </p>
      </Prose>
    </Container>
  );
}
