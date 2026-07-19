import type { Metadata } from 'next';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE } from '@/lib/site';

const TITLE = 'Privacy Policy';
const PATH = '/privacy';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'AgricultureID’s privacy approach: an informational site that uses WebmasterID analytics to understand usage, shows no advertising, and collects no personal information through the site itself.',
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
        <p className="text-sm text-ink-500">Last updated: 2026-07-19</p>

        <h2>Summary</h2>
        <p>
          AgricultureID shows no advertising, uses no chat widgets, and does not
          require accounts or logins. We collect no personal information through
          the website itself. The site does use a third-party analytics service
          (WebmasterID) to understand how it is used — see “Analytics” below.
        </p>

        <h2>Analytics</h2>
        <p>
          AgricultureID uses WebmasterID, a third-party web analytics service,
          to understand how the site is used — for example, which pages are
          viewed. When a page loads, a WebmasterID script runs in your browser
          and sends usage events to WebmasterID’s servers. What WebmasterID
          collects and how it processes that data is governed by WebmasterID’s
          own terms and privacy practices. We use it to improve the site, not to
          serve advertising.
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
          AgricultureID does not set its own advertising cookies. The
          WebmasterID analytics described above may use cookies or similar
          browser storage; whether it does, and for how long, is determined by
          WebmasterID. See WebmasterID’s documentation for specifics.
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
