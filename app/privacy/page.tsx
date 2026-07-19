import type { Metadata } from 'next';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE } from '@/lib/site';
import { CONSENT_STORAGE_KEY } from '@/lib/consent/config';

const TITLE = 'Privacy Policy';
const PATH = '/privacy';
const EFFECTIVE_DATE = '2026-07-19';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How AgricultureID handles privacy: necessary technologies only by default, optional WebmasterID analytics that loads only after you opt in, and how to accept, reject, or withdraw consent.',
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
        lead="AgricultureID is a static informational website. This policy explains what data is and is not collected, and how you control optional analytics."
        crumbs={pageBreadcrumbs('Privacy', PATH)}
      />

      <Prose>
        <p className="text-sm text-ink-500">Effective date: {EFFECTIVE_DATE}</p>

        <h2>Who we are</h2>
        <p>
          This website, {SITE.name} ({SITE.domain}), is the data controller for
          the limited processing described below. You can reach us about privacy
          at <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>

        <h2>Summary</h2>
        <p>
          By default we run only the technologies strictly necessary to operate
          the site and to remember your privacy choice. We do not show
          advertising, use chat widgets, or require accounts. Optional{' '}
          <strong>WebmasterID analytics is off unless you turn it on</strong>,
          and its script is not requested until you do.
        </p>

        <h2>Consent categories</h2>
        <p>We separate technologies into two purposes:</p>
        <ul>
          <li>
            <strong>Necessary</strong> — always active and cannot be switched
            off. This covers core website operation and storing your privacy
            choice. It is not used to track you.
          </li>
          <li>
            <strong>Analytics (optional)</strong> — off by default; controls
            WebmasterID. It runs only after you give explicit consent, and you
            can withdraw that consent at any time.
          </li>
        </ul>

        <h2>Analytics (WebmasterID)</h2>
        <p>
          With your consent, we use WebmasterID, a third-party web analytics
          service, to understand how the site is used and improve it. Until you
          accept analytics, the WebmasterID script is not loaded, requested,
          preconnected, or initialised, and no analytics event is sent.
        </p>
        <p>
          <strong>Purpose:</strong> measuring website usage and performance to
          maintain and improve AgricultureID.
        </p>
        <p>
          <strong>Data processed:</strong> when analytics is enabled, a
          WebmasterID script runs in your browser and sends usage events (such
          as the pages you view) to WebmasterID’s servers. Because your browser
          contacts those servers directly, technical data inherent to any web
          request — including your IP address — is received by WebmasterID as
          part of delivering the request. What WebmasterID stores, for how long,
          and how it further processes that data is determined by WebmasterID
          under its own terms and privacy practices.
        </p>
        <p>
          <strong>Legal basis:</strong> your consent (GDPR Article 6(1)(a), and
          the corresponding consent requirement under the ePrivacy/PECR rules
          for storing or reading information on your device). You may withdraw
          it at any time; withdrawal does not affect processing carried out
          before you withdrew.
        </p>
        <p>
          <strong>Recipient / processor:</strong> WebmasterID, as the provider
          of the analytics service.
        </p>
        <p className="text-sm text-ink-600">
          We have not independently verified certain details of WebmasterID’s
          processing — including whether it sets cookies, the exact data it
          retains and for how long, the locations of processing, any
          sub-processors, and any international-transfer safeguards. We
          therefore do not claim it is cookieless, anonymous, or EU-only, and we
          will update this policy as we confirm these details. Until then,
          please refer to WebmasterID for specifics.
        </p>

        <h2>How to accept, reject, or change your choices</h2>
        <p>
          On your first visit a privacy banner lets you{' '}
          <em>accept analytics</em>, <em>reject analytics</em>, or{' '}
          <em>manage preferences</em>. You can reopen these choices at any time
          from the <strong>“Privacy settings”</strong> link in the footer of
          every page. Withdrawing analytics is as easy as granting it: turn
          Analytics off and save, and the tracker is prevented from running (the
          page reloads to ensure it is fully stopped). Rejecting or withdrawing
          analytics leaves the website fully functional.
        </p>

        <h2>Cookies and similar technologies</h2>
        <p>
          The site stores one first-party item to remember your privacy choice:
        </p>
        <ul>
          <li>
            <strong>
              <code>{CONSENT_STORAGE_KEY}</code>
            </strong>{' '}
            — a browser <em>localStorage</em> entry (not a cookie), set by
            AgricultureID. Category: necessary. Purpose: to record whether you
            accepted or rejected analytics so we do not ask again on every
            visit. It contains only your choice, a version number, and the date;
            no identifier, IP address, or analytics data. Retained for up to
            about 6 months, after which we ask again. Choosing “Reject
            analytics” updates this entry to record your refusal (analytics
            stays off); to remove the entry entirely, use your browser’s
            site-data controls.
          </li>
        </ul>
        <p>
          If you enable analytics, WebmasterID may set its own cookies or
          browser storage. We do not list specific names here because we have
          not verified them; they are governed by WebmasterID.
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
          terms and privacy practices and is independent of the optional
          analytics above.
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

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights over your personal
          data — including access, rectification, erasure, restriction,
          objection to processing, and data portability — and, where processing
          is based on consent, the right to withdraw that consent at any time.
          To exercise any of these, contact us at{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>

        <h2>Complaints</h2>
        <p>
          If you are in the EU/EEA or the UK, you have the right to lodge a
          complaint with your national data-protection supervisory authority (in
          the UK, the Information Commissioner’s Office). We would appreciate
          the chance to address your concern first.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If our purposes, vendors, or material processing details change, we
          will update this policy and — where the change is material — ask for
          your analytics choice again. The date at the top reflects the current
          version.
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
