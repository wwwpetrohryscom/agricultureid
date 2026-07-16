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
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

const TITLE = 'Supply-Chain Risks';
const PATH = '/supply-chain-risks';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Agricultural supply-chain risk mechanisms: how a disruption arises, where in the chain it materialises, how it propagates, and what can be observed. Described, never scored.',
  path: PATH,
});

export default function SupplyChainRisksHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Descriptions of agricultural supply-chain risk mechanisms, with no likelihood or severity scores.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Supply-Chain Risks"
        title="How agricultural chains fail"
        lead="A disruption is rarely a single event. Something happens at one stage, and the consequence surfaces somewhere else — a wet harvest becomes a rejection at a border months later and a thousand miles away. This section describes those mechanisms: where they start, how they travel, and what can actually be seen while they are happening."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Mechanism, stages, indicators</h2>
        <p>
          Every entry is built from three things. The <strong>mechanism</strong>{' '}
          is how the disruption arises and propagates. The{' '}
          <strong>chain stages</strong> place it in the sequence from production
          through assembly, processing, inland transport, the border,
          international transport, and the destination market. The{' '}
          <strong>observable indicators</strong> are the signals that it is
          materialising — things a reader can go and check in their own chain,
          rather than assertions about anyone else&rsquo;s.
        </p>
        <p>
          Risks connect to what they act on:{' '}
          <Link href="/commodities">commodities</Link> with a documented
          exposure, the <Link href="/logistics">logistics operations</Link> the
          mechanism disrupts, the <Link href="/trade">trade concepts</Link> it
          interferes with, and the{' '}
          <Link href="/standards">standards and frameworks</Link> that exist to
          address it.
        </p>

        <h2>Why nothing here is scored</h2>
        <p>{RISK_NOT_SCORED_NOTE}</p>
        <p>
          This is the section&rsquo;s most consequential rule, and it holds in
          prose too: no entry ranks a mechanism, calls one more serious than
          another, or attaches a level to it. A description of how a thing
          happens is defensible from published evidence. A number saying how
          likely it is to happen to <em>you</em> is not — it depends on your
          chain, your route, your season, your counterparty, and your
          jurisdiction, none of which a reference page knows.
        </p>

        <h2>What this is for</h2>
        <p>
          Knowing the mechanism is what makes an assessment possible. It tells
          you which question to ask about your own chain and which data would
          answer it. The assessment itself is work that only the holder of that
          data can do, and each entry states what it would require.
        </p>
      </Prose>

      <EntryGrid
        type="supply-chain-risk"
        path={PATH}
        heading="Supply-chain risks A–Z"
        intro="Each entry covers the mechanism, the chain stages where it materialises, the observable indicators, the commodities and operations exposed, the standards that address it, and why no score is given."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor:
              'Agricultural supply, food-chain, and market disruption context',
          },
          {
            sourceId: 'amis',
            citedFor: 'Market monitoring and early-warning concepts',
          },
          {
            sourceId: 'ippc',
            citedFor:
              'Phytosanitary measures and plant-health requirements at borders',
          },
        ]}
      />
    </Container>
  );
}
