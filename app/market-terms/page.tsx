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
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

const TITLE = 'Market Terms';
const PATH = '/market-terms';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Agricultural market and price terminology defined so that price information obtained elsewhere can be read correctly. No live prices, no forecasts, no trading signals.',
  path: PATH,
});

export default function MarketTermsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Definitions of agricultural market and price terminology, with no live prices or forecasts.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Market Terms"
        title="Reading a price correctly"
        lead="A price is never just a number. It refers to a delivery point, a quality, a period, a lot size, and a contract, and a reader who does not know which of those is meant has not read the price at all. This section defines the vocabulary that surrounds agricultural price information so that figures obtained elsewhere can be understood for what they are."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Definitions, not quotations</h2>
        <p>
          AgricultureID carries no market data. That is a design decision, not a
          gap. A price is meaningful for as long as it is current, and a
          reference site that published one would be publishing something stale
          and passing it off as information. Instead, these pages define the
          terms — and readers take those definitions to whichever exchange,
          reporting service, or agency actually holds the figures.
        </p>
        <p>
          A definition never requires a number. No entry here illustrates a term
          with an invented figure, because an illustrative number on a page a
          reader may mistake for market information is worse than no page at
          all.
        </p>

        <h2>The confusions are the point</h2>
        <p>
          Most of these terms have a near neighbour they are routinely mistaken
          for, and the mistake is usually expensive. Every entry states
          explicitly what it is <em>not</em> to be confused with — the
          distinction is treated as a required part of the definition rather
          than a nicety.
        </p>
        <p>
          The underlying trade mechanics — how a delivery point, a set of
          obligations, or a documentary requirement comes about — are described
          under <Link href="/trade">trade concepts</Link>. The physical
          conditions that a quality specification refers to are described under{' '}
          <Link href="/quality-attributes">quality attributes</Link> and{' '}
          <Link href="/commodity-grades">grading standards</Link>.
        </p>

        <h2>What these pages are not</h2>
        <p>{NO_LIVE_PRICE_NOTE}</p>
      </Prose>

      <EntryGrid
        type="market-term"
        path={PATH}
        heading="Market terms A–Z"
        intro="Each entry gives the definition, where the term is used, what it is not to be confused with, the commodities it applies to, and the related terms and trade concepts it depends on."
      />

      <SourceList
        references={[
          {
            sourceId: 'amis',
            citedFor:
              'Agricultural market information and market monitoring concepts',
          },
          {
            sourceId: 'igc',
            citedFor: 'Grain supply, demand, and trade assessment concepts',
          },
          {
            sourceId: 'usda-ams',
            citedFor: 'Market news reporting practice and terminology',
          },
        ]}
      />
    </Container>
  );
}
