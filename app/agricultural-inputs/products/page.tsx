import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, USE_SCOPE_CAVEAT } from '@/types/input';
import {
  allAuthorizations,
  allInputs,
  isCurrent,
  productsInFamily,
  productFamilyPath,
  PRODUCT_FAMILIES,
  INPUTS_HUB_PATH,
  PRODUCTS_PATH,
} from '@/lib/inputs/registry';
import { ephySnapshot } from '@/lib/inputs/snapshot';

const TITLE = 'Authorised Plant Protection Products in France';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Products currently authorised on the French E-Phy register, with the AMM number that identifies each one and the holder of its authorisation.',
  path: PRODUCTS_PATH,
});

export default function ProductsPage() {
  const snap = ephySnapshot();
  const byId = new Map(allInputs().map((i) => [i.id, i]));
  const current = allAuthorizations().filter(
    (a) => a.scope === 'product' && isCurrent(a),
  );
  const withdrawn = allAuthorizations().filter(
    (a) => a.scope === 'product' && !isCurrent(a),
  ).length;

  const rows = current
    .map((a) => ({ a, input: byId.get(a.inputRef)! }))
    .filter((r) => r.input);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Currently authorised plant protection products, France.',
          path: PRODUCTS_PATH,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural inputs', path: INPUTS_HUB_PATH },
          { name: 'Authorised products', path: PRODUCTS_PATH },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={INPUTS_HUB_PATH} className="hover:underline">
          Agricultural inputs
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Authorised products</span>
      </nav>

      <PageIntro
        title={TITLE}
        lead="Products the French register records as authorised right now — identified by AMM number, never by name."
      >
        <p>
          Product names collide across holders, countries and decades, so
          identity here is the register&rsquo;s own AMM number. The holder is
          the register&rsquo;s <em>titulaire</em> field; no manufacturer is
          inferred from a brand or a website.
        </p>
        <p>
          An authorisation applies in France and nowhere else. It says nothing
          about whether the European Union has approved the active substances a
          product contains, which is a separate decision.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      <p className="mt-6 max-w-2xl text-sm text-ink-600">
        {rows.length.toLocaleString('en')} products are recorded as currently
        authorised. A further {withdrawn.toLocaleString('en')} products are held
        with a withdrawal date and are deliberately not listed — a register that
        showed only current products could not show that a product was ever
        withdrawn.
      </p>

      <section className="mt-8" aria-label="Product families">
        <h2 className="font-serif text-xl text-forest-900">Browse by family</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          These families group the register&rsquo;s own function labels for
          navigation. Every listing shows the register&rsquo;s function verbatim
          on each row; nothing is reclassified.
        </p>
        <ul className="mt-4 space-y-3">
          {PRODUCT_FAMILIES.map((f) => {
            const n = productsInFamily(f.slug).length;
            if (!n) return null;
            return (
              <li key={f.slug} className="border-t border-ink-100 pt-3">
                <Link
                  href={productFamilyPath(f.slug)}
                  className="font-medium text-forest-800 hover:underline"
                >
                  {f.label}
                </Link>
                <span className="ml-2 text-sm text-ink-500">
                  {n.toLocaleString('en')} authorised products
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="mt-10 max-w-2xl text-sm text-ink-600">{USE_SCOPE_CAVEAT}</p>
      {snap && (
        <p className="mt-3 max-w-2xl text-sm text-ink-600">
          {snap.doseRule} Read from{' '}
          <a
            href={snap.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-700 hover:underline"
          >
            E-Phy
          </a>{' '}
          open data, release {snap.datasetVersion}.
        </p>
      )}
    </Container>
  );
}
