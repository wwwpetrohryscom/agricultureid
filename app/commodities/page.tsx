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
import { CLASSIFICATION_DISCLAIMER } from '@/types/commodity';

const TITLE = 'Commodities';
const PATH = '/commodities';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Harvested agricultural commodities — the traded product, distinct from the living crop — with classification, uses, quality attributes, storage context, and product pathways.',
  path: PATH,
});

export default function CommoditiesHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Harvested agricultural commodities with classification, uses, and product pathways.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Commodities"
        title="Agricultural commodities"
        lead="A commodity is the harvested, traded thing — not the living plant or animal that produced it. This section documents commodities in their own right: what part is harvested, how they are classified and used, what quality attributes matter, and what they are transformed into."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Crop and commodity are not the same thing</h2>
        <p>
          AgricultureID models the living <Link href="/crops">crop</Link> and
          the harvested commodity as separate entities, because they behave
          differently and are described by different evidence. A wheat plant has
          an agronomy, a growth cycle, diseases, and soil requirements. Wheat
          grain has a moisture content, a test weight, a grade, a storage
          behaviour, and a classification code. Conflating the two produces
          claims that are true of neither.
        </p>
        <p>
          Every commodity here is anchored to exactly one parent crop or
          livestock species, and every product is anchored to the commodity it
          is made from — so the chain from field to traded product is explicit
          and checkable rather than implied.
        </p>

        <h2>How commodities are described</h2>
        <ul>
          <li>
            <strong>Classification</strong> — commodity class, physical form,
            the harvested part, and versioned classification codes.
          </li>
          <li>
            <strong>Use</strong> — food, feed, industrial, seed, fibre, oil,
            beverage, or energy uses, recorded as a controlled vocabulary.
          </li>
          <li>
            <strong>Quality</strong> — the attributes and defects that matter
            commercially, and the{' '}
            <Link href="/commodity-grades">grading standards</Link> that apply.
          </li>
          <li>
            <strong>Pathways</strong> — the{' '}
            <Link href="/commodity-products">
              products, co-products, and by-products
            </Link>{' '}
            a commodity becomes, as explicit typed links.
          </li>
        </ul>

        <h2>Limits of this reference</h2>
        <p>{CLASSIFICATION_DISCLAIMER}</p>
        <p>
          AgricultureID does not grade commodities, certify quality, publish
          prices, or give customs or contractual advice. Grade summaries are
          dated reference descriptions of published standards, not the standards
          themselves.
        </p>
      </Prose>

      <EntryGrid
        type="commodity"
        path={PATH}
        heading="Commodities A–Z"
        intro="Each entry covers what the commodity is, how it is classified and used, the quality attributes and defects that matter, storage and transport context, and the products it becomes."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor:
              'Commodity definitions and agricultural product classification',
          },
          {
            sourceId: 'faostat',
            citedFor: 'Commodity item classification and coverage',
          },
          {
            sourceId: 'usda',
            citedFor: 'Commodity naming and grading context',
          },
        ]}
      />
    </Container>
  );
}
