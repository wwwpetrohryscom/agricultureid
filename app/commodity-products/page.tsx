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

const TITLE = 'Commodity Products';
const PATH = '/commodity-products';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Primary products, co-products, and by-products obtained by transforming agricultural commodities — each anchored to the commodity it derives from.',
  path: PATH,
});

export default function CommodityProductsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Primary products, co-products, and by-products of agricultural commodities.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Commodity Products"
        title="Products, co-products & by-products"
        lead="Most commodities are not consumed as harvested. They are milled, crushed, ginned, fermented, or refined into products — and almost always into more than one at once. This section documents those outputs and ties each one back to the commodity it came from."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Three kinds of output</h2>
        <p>
          A single transformation usually yields several things at once. The
          distinction between them is economic and technical, not arbitrary:
        </p>
        <dl>
          <dt>
            <strong>Primary product</strong>
          </dt>
          <dd>
            The main intended output of the process — wheat flour from milling
            wheat grain, refined sugar from cane.
          </dd>
          <dt>
            <strong>Co-product</strong>
          </dt>
          <dd>
            A deliberate, valuable output produced simultaneously and
            inseparably — soybean meal and soybean oil are both co-products of
            crushing; neither is waste.
          </dd>
          <dt>
            <strong>By-product</strong>
          </dt>
          <dd>
            A residual output of lower value that the process is not run to
            produce — bagasse from cane milling, hulls from dehulling. Many
            by-products have real feed, fibre, or energy value.
          </dd>
        </dl>
        <p>
          Every product entry names its parent{' '}
          <Link href="/commodities">commodity</Link> explicitly. A product is
          never inferred from a shared crop parent: two things made from the
          same plant are not automatically made from each other.
        </p>

        <h2>What these pages are not</h2>
        <p>
          These are reference descriptions of agricultural products and the
          transformations that yield them. They are not recipes, industrial
          operating manuals, engineering specifications, or commercial
          recommendations, and they do not carry prices or yields that are not
          sourced and dated.
        </p>
      </Prose>

      <EntryGrid
        type="commodity-product"
        path={PATH}
        heading="Commodity products A–Z"
        intro="Each entry covers what the product is, the commodity and process it comes from, its physical form, uses, and the quality attributes that matter."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor: 'Agricultural product definitions and processing context',
          },
          {
            sourceId: 'usda',
            citedFor: 'Product naming and compositional context',
          },
        ]}
      />
    </Container>
  );
}
