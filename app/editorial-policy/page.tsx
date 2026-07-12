import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Editorial Policy';
const PATH = '/editorial-policy';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How AgricultureID selects evidence, treats uncertainty, sets geographic scope, handles derived values, and corrects errors.',
  path: PATH,
});

export default function EditorialPolicyPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'The editorial standards AgricultureID follows.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Editorial"
        title="Editorial policy"
        lead="This policy explains the standards we hold our content to: how we weigh evidence, choose sources, handle uncertainty and geography, and correct mistakes."
        crumbs={pageBreadcrumbs('Editorial Policy', PATH)}
      />

      <Prose>
        <h2>Evidence hierarchy</h2>
        <p>
          We give greatest weight to primary, authoritative sources and to
          well-established scientific consensus, and least weight to unsupported
          or commercial claims. In broad order of preference:
        </p>
        <ul>
          <li>
            Intergovernmental and government bodies (for example FAO, USDA, the
            European Commission) and official registries
          </li>
          <li>Peer-reviewed scientific literature and research institutes</li>
          <li>University extension services and recognised standards bodies</li>
          <li>
            Reputable reference works, used only for general or historical
            context
          </li>
        </ul>

        <h2>Source selection</h2>
        <p>
          Sources are recorded in a structured{' '}
          <Link href="/sources">source registry</Link> and cited from the
          entries that rely on them. We prefer official, durable references and
          avoid anonymous blogs, affiliate content, content farms, and
          AI-generated or invented citations. Our{' '}
          <Link href="/methodology">sources &amp; methodology</Link> page
          describes this in detail.
        </p>

        <h2>Update methodology</h2>
        <p>
          Each entry records when it was last updated and, where applicable,
          last reviewed. Entries are revised when sources change materially,
          when errors are found, or as our coverage of a topic deepens.
          Automated validation runs on every change to catch broken references,
          missing sources, and other structural problems before publication.
        </p>

        <h2>Geographic scope and local advice</h2>
        <p>
          Agriculture is intensely local. Every entry states its geographic
          scope, and we distinguish clearly between general educational
          information and region-specific advice. We do not present universal
          planting dates, fertilizer or pesticide rates, irrigation volumes,
          expected yields, or profitability figures without explicit geographic
          and evidentiary context.
        </p>
        <p>
          Recommendations involving pesticides, fertilizers, veterinary
          treatment, regulated products, or local compliance must always be
          checked against local law, product labels, qualified professionals,
          and current regional guidance.
        </p>

        <h2>Treatment of uncertainty</h2>
        <p>
          Where evidence is incomplete, contested, or evolving, we say so rather
          than implying false certainty. Entries include an explicit
          “limitations” statement, and we avoid overstating the strength of a
          claim.
        </p>

        <h2>Derived values and calculations</h2>
        <p>
          When a value is derived or a calculation is offered, we aim to show
          the basis for it and its assumptions, and to mark it as derived rather
          than measured. We do not fabricate datasets, ratings, author
          credentials, or review claims. We do not claim that every article is
          reviewed by a named agronomist; entries are prepared against
          authoritative sources and our editorial standards.
        </p>

        <h2>Corrections</h2>
        <p>
          We welcome corrections and maintain a published{' '}
          <Link href="/corrections">corrections process</Link>. When we make a
          material factual correction, we update the entry and its “last
          updated” date.
        </p>
      </Prose>
    </Container>
  );
}
