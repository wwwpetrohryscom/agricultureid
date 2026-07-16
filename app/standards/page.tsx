import type { Metadata } from 'next';
import Link from 'next/link';
import { EntryGrid } from '@/components/content/EntryGrid';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

const TITLE = 'Standards & Certification';
const PATH = '/standards';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Summaries of agricultural standards, certification schemes, conformity-assessment concepts, and regulatory frameworks — issuing body, edition, jurisdiction, legal status, and what each covers.',
  path: PATH,
});

export default function StandardsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Summaries of agricultural standards and certification schemes with body, edition, and jurisdiction.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Standards"
        title="Standards, schemes & conformity"
        lead="A standard is a published document issued by a named body, in a named edition, applying in a named jurisdiction, either because the law requires it or because someone chose to adopt it. This section summarises what those documents cover and how conformity to them is assessed."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>A scheme is a standard plus assurance</h2>
        <p>
          Certification schemes are documented here alongside standards rather
          than separately, because a scheme is a standard with a
          conformity-assessment mechanism attached. It has the same issuing
          body, the same versioning, and the same copyright constraints. What
          distinguishes it is the answer to two further questions: how
          conformity is assessed, and who assesses it. Every entry states both
          when they are established.
        </p>
        <p>
          Meeting a standard is not the same as being good, and certification is
          not a guarantee about a particular lot. A scheme attests that an audit
          against a set of requirements was passed at a point in time, by
          whoever was audited. Reading it as a claim about the consignment in
          front of you is the most common mistake this section exists to
          prevent.
        </p>

        <h2>Domain standards here, grade standards there</h2>
        <p>
          A document scoped to one commodity&rsquo;s grades belongs with that
          commodity: those live under{' '}
          <Link href="/commodity-grades">grading standards</Link>. This section
          holds standards scoped to a <em>domain</em> across commodities — food
          safety, plant health, animal health, sustainability, organic, social
          and labour, traceability, management systems, measurement. The split
          is enforced rather than trusted, so the two sections never answer the
          same question. Standards that bear on{' '}
          <Link href="/trade">trade mechanics</Link> link to the concepts they
          govern.
        </p>

        <h2>Editions, not names</h2>
        <p>
          Requirements change between editions, and a scheme name without a
          version is not a fact about anything. Every entry names the edition
          its summary reflects, and says so when a later edition supersedes it.
        </p>

        <h2>What these pages are not</h2>
        <p>{STANDARD_SCOPE_DISCLAIMER}</p>
      </Prose>

      <EntryGrid
        type="standard-reference"
        path={PATH}
        heading="Standards & schemes A–Z"
        intro="Each entry covers the issuing body, edition, jurisdiction, legal status, what the standard covers, how conformity is assessed and by whom, the commodities in scope, and the limits of a summary."
      />

      <SourceList
        references={[
          {
            sourceId: 'codex',
            citedFor:
              'International food standards, codes of practice, and hygiene texts',
          },
          {
            sourceId: 'iso',
            citedFor:
              'International standards and conformity-assessment concepts',
          },
          {
            sourceId: 'iseal',
            citedFor:
              'Good practice in how voluntary sustainability standards are set and assured',
          },
        ]}
      />
    </Container>
  );
}
