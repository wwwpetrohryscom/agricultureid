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

const TITLE = 'Post-Harvest';
const PATH = '/post-harvest';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Post-harvest handling, drying, cooling, storage, processing, and loss-reduction operations that protect crop quality and reduce losses between harvest and market.',
  path: PATH,
});

export default function PostHarvestHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Post-harvest handling, storage, and loss-reduction operations between harvest and market.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Post-Harvest"
        title="Post-harvest handling & storage"
        lead="What happens after harvest determines how much of a crop reaches the market in good condition. This section covers the drying, cooling, storage, handling, and processing operations that preserve quality and reduce post-harvest losses."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Why post-harvest management matters</h2>
        <p>
          A substantial share of what farms produce is lost or degraded between
          harvest and consumption. Post-harvest losses arise from mechanical
          damage, moisture, heat, pests, moulds, and poor handling — and they
          waste all the water, nutrients, and labour already invested in the
          crop. Sound post-harvest practice protects both quality and value.
        </p>

        <h2>The main operations</h2>
        <ul>
          <li>
            <strong>Handling &amp; conditioning</strong> — harvesting at the
            right maturity, careful handling to limit bruising, plus cleaning,
            sorting, grading, and curing.
          </li>
          <li>
            <strong>Drying</strong> — reducing grain and seed moisture to a safe
            level for storage.
          </li>
          <li>
            <strong>Cooling &amp; cold storage</strong> — removing field heat
            and holding perishables near their optimum temperature and humidity.
          </li>
          <li>
            <strong>Storage</strong> — protecting produce from moisture, pests,
            and moulds, including hermetic and controlled-atmosphere methods.
          </li>
          <li>
            <strong>Processing &amp; quality</strong> — value-adding steps and
            the quality and food-safety checks that govern them.
          </li>
        </ul>
        <p>
          Optimum conditions vary by commodity; see individual{' '}
          <Link href="/crops">crop</Link> entries and the{' '}
          <Link href="/machinery">machinery</Link> used in these operations for
          context. AgricultureID does not publish universal storage settings —
          they depend on the commodity, cultivar, and local conditions.
        </p>
      </Prose>

      <EntryGrid
        type="post-harvest"
        path={PATH}
        heading="Post-harvest topics A–Z"
        intro="In-depth entries for each post-harvest operation and concept — how it works, why it matters for quality and loss reduction, and how it is managed."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor: 'Post-harvest loss reduction and handling guidance',
          },
          {
            sourceId: 'usda-ars',
            citedFor: 'Post-harvest storage and quality research',
          },
        ]}
      />
    </Container>
  );
}
