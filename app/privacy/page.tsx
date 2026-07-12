import type { Metadata } from 'next';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE } from '@/lib/site';
import { SITE_LAST_UPDATED } from '@/lib/seo/routes';

const TITLE = 'Privacy Policy';
const PATH = '/privacy';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'AgricultureID’s privacy approach: a static informational site that does not use analytics, advertising, cookies, or trackers in this phase.',
  path: PATH,
});

export default function PrivacyPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'How AgricultureID handles privacy and data.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        lead="AgricultureID is a static informational website. This policy explains what data is and is not collected."
        crumbs={pageBreadcrumbs('Privacy', PATH)}
      />

      <Prose>
        <p className="text-sm text-ink-500">
          Last updated: {SITE_LAST_UPDATED}
        </p>

        <h2>Summary</h2>
        <p>
          In its current phase, AgricultureID does not use analytics,
          advertising, cookies, chat widgets, or third-party trackers, and it
          does not require accounts or logins. We collect no personal
          information through the website itself.
        </p>

        <h2>Information you send us</h2>
        <p>
          If you contact us by email, we receive your email address and the
          contents of your message. We use this only to read and respond to your
          message and to act on any correction you report. We do not sell this
          information or use it for marketing.
        </p>

        <h2>Hosting and server logs</h2>
        <p>
          The site is served by a third-party hosting provider. Like most web
          hosts, that provider may automatically process standard technical
          information (such as IP addresses and request details) to deliver the
          site securely and reliably. This is handled under the provider’s own
          terms and privacy practices.
        </p>

        <h2>Cookies</h2>
        <p>
          AgricultureID does not set its own tracking or advertising cookies in
          this phase. If this changes — for example if we introduce
          privacy-respecting analytics — we will update this policy and provide
          appropriate notice before enabling it.
        </p>

        <h2>External links</h2>
        <p>
          Entries link to external sources such as government and research
          websites. Those sites have their own privacy policies, which we do not
          control.
        </p>

        <h2>Children</h2>
        <p>
          The site is a general-audience educational reference and is not
          directed at children, and we do not knowingly collect information from
          them.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </Prose>
    </Container>
  );
}
