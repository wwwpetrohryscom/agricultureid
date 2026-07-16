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
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

const TITLE = 'Trade Concepts';
const PATH = '/trade';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How cross-border agricultural trade works: classification and measurement, customs procedure, delivery terms, documentation, and market access — described as mechanisms, never as advice.',
  path: PATH,
});

export default function TradeHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Reference descriptions of the mechanisms of cross-border agricultural trade.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Trade"
        title="How agricultural trade works"
        lead="A consignment that crosses a border is classified, valued, given an origin, documented, and delivered on terms that someone agreed in advance. Each of those is a mechanism with published rules and a body that operates it. This section describes those mechanisms — what each one does, who decides it, and where its scope ends."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>A mechanism, not a transaction</h2>
        <p>
          These pages describe how a system works, not what a reader should do
          in a deal. A page on tariff classification explains what
          classification is for and who determines it; it does not classify a
          product. A page on a delivery term explains what such a term
          allocates; it does not tell anyone which term to use. The distinction
          is the whole basis of the section.
        </p>
        <p>
          Trade concepts sit alongside the rest of the chain.{' '}
          <Link href="/logistics">Logistics</Link> covers how a consignment
          physically moves, <Link href="/standards">standards</Link> cover the
          normative documents a trade must satisfy,{' '}
          <Link href="/market-terms">market terms</Link> define the vocabulary
          of price, and{' '}
          <Link href="/supply-chain-risks">supply-chain risks</Link> describe
          how the whole arrangement fails. The{' '}
          <Link href="/commodities">commodities</Link> themselves are described
          on their own pages.
        </p>

        <h2>Editions decide meaning</h2>
        <p>
          Almost nothing here has a fixed meaning across time. Nomenclatures are
          revised on a cycle, delivery-term sets are reissued, and the
          obligations behind a familiar abbreviation change between editions. A
          code or a term without its edition is incomplete, so every entry names
          the edition it describes and treats the version as part of the fact
          rather than a footnote.
        </p>

        <h2>Delivery terms are described, never reproduced</h2>
        <p>{INCOTERMS_SCOPE_NOTE}</p>

        <h2>What these pages are not</h2>
        <p>{TRADE_SCOPE_DISCLAIMER}</p>
      </Prose>

      <EntryGrid
        type="trade-concept"
        path={PATH}
        heading="Trade concepts A–Z"
        intro="Each entry covers the purpose of the mechanism, who administers it, the parties whose obligations it allocates, the documents and standards it operates with, and the limits of a reference description."
      />

      <SourceList
        references={[
          {
            sourceId: 'wco',
            citedFor: 'Harmonized System nomenclature and customs procedure',
          },
          {
            sourceId: 'wto',
            citedFor:
              'Multilateral trade rules, market access, and the SPS and TBT agreements',
          },
          {
            sourceId: 'icc',
            citedFor: 'Ownership and publication of the Incoterms® rules',
          },
        ]}
      />
    </Container>
  );
}
