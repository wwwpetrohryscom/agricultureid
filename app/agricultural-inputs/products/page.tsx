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
  presentListings,
  productListingPath,
  PRODUCT_JURISDICTIONS,
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

      <section className="mt-8" aria-label="Registers">
        <h2 className="font-serif text-xl text-forest-900">
          Browse by jurisdiction
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Each register is listed separately, because each is a separate legal
          decision. A product authorised in France is not authorised in Canada,
          however similar the name; nothing here is combined across borders.
          Families group each register&rsquo;s own function labels for
          navigation, and every row shows that label verbatim.
        </p>
        {PRODUCT_JURISDICTIONS.map((j) => {
          const listings = presentListings().filter(
            (l) => l.jurisdiction === j.label,
          );
          if (!listings.length) return null;
          const total = listings.reduce((n, l) => n + l.count, 0);
          return (
            <div key={j.slug} className="mt-6">
              <h3 className="font-medium text-ink-900">
                {j.label}
                <span className="ml-2 text-sm font-normal text-ink-500">
                  {total.toLocaleString('en')} currently authorised
                </span>
              </h3>
              <ul className="mt-2 space-y-2">
                {listings.map((l) => (
                  <li key={l.slug} className="border-t border-ink-100 pt-2">
                    <Link
                      href={productListingPath(l.slug)}
                      className="text-sm font-medium text-forest-800 hover:underline"
                    >
                      {l.familyLabel}
                    </Link>
                    <span className="ml-2 text-sm text-ink-500">
                      {l.count.toLocaleString('en')} products
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
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
