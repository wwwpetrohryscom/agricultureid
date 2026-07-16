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
import {
  PROCESSING_SCOPE_DISCLAIMER,
  RESIDUE_NOT_WASTE_NOTE,
} from '@/types/processing';

const TITLE = 'Processing';
const PATH = '/processing';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Primary processing methods that transform a harvested commodity into products, co-products, and by-products — what each does, why, and what it yields.',
  path: PATH,
});

export default function ProcessingHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Primary agricultural processing methods and the products they yield.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Processing"
        title="Primary processing & transformation"
        lead="Processing is where a commodity stops being itself. Milling does not give you better wheat grain — it gives you flour, bran, and germ, three different things with three different markets. This section documents those transformations: what goes in, what comes out, and on what physical or biochemical basis."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Conditioning versus transforming</h2>
        <p>
          AgricultureID draws a hard line between two kinds of operation,
          because they behave differently and are described by different
          evidence.
        </p>
        <dl>
          <dt>
            <strong>
              <Link href="/post-harvest">Post-harvest operations</Link>
            </strong>
          </dt>
          <dd>
            Condition a lot without changing what it is. Dried wheat grain is
            still wheat grain; cooled apples are still apples. The entity that
            went in is the entity that comes out.
          </dd>
          <dt>
            <strong>Processing methods</strong>
          </dt>
          <dd>
            Change identity. A commodity goes in and distinct products come out
            — each with its own uses, quality attributes, and trade.
          </dd>
        </dl>
        <p>
          Every method here names its input{' '}
          <Link href="/commodities">commodities</Link> and its output{' '}
          <Link href="/commodity-products">products</Link> explicitly, and the
          chain is checked: a product&rsquo;s own source commodity must actually
          be an input to the method that claims to make it. A transformation is
          never inferred because two things share a crop.
        </p>

        <h2>One process, several outputs</h2>
        <p>
          Almost no agricultural process yields one thing. Crushing soybeans
          gives meal <em>and</em> oil, inseparably. Milling cane gives raw
          sugar, molasses, and bagasse. The distinction between primary product,
          co-product, and by-product is economic and technical, and it is
          applied per process rather than assumed.
        </p>
        <p>{RESIDUE_NOT_WASTE_NOTE}</p>

        <h2>What these pages are not</h2>
        <p>{PROCESSING_SCOPE_DISCLAIMER}</p>
      </Prose>

      <EntryGrid
        type="processing-method"
        path={PATH}
        heading="Processing methods A–Z"
        intro="Each entry covers the objective, the operating principle, the inputs and outputs, quality effects, loss points, equipment, environmental context, and safety limitations."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor: 'Agricultural processing and product definitions',
          },
          { sourceId: 'usda-ars', citedFor: 'Processing and product research' },
        ]}
      />
    </Container>
  );
}
