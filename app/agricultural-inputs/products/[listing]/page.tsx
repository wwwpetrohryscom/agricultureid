import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, USE_SCOPE_CAVEAT } from '@/types/input';
import {
  presentListingPages,
  productsInListingPage,
  parseListingPageSlug,
  parseListingSlug,
  listingPageSlug,
  listingPageCount,
  productListingPath,
  INPUTS_HUB_PATH,
  PRODUCTS_PATH,
} from '@/lib/inputs/registry';

type Params = { params: Promise<{ listing: string }> };

export function generateStaticParams() {
  return presentListingPages().map((l) => ({ listing: l.pageSlug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { listing } = await params;
  const page = parseListingPageSlug(listing);
  const parsed = page ? parseListingSlug(page.slug) : null;
  const rows = page ? productsInListingPage(page.slug, page.page) : [];
  if (!parsed || !page || rows.length === 0) return {};
  const pages = listingPageCount(page.slug);
  const suffix = pages > 1 ? ` (page ${page.page} of ${pages})` : '';
  return buildMetadata({
    title: `${parsed.family.label} authorised in ${parsed.jurisdiction.label}${suffix}`,
    description: `${rows.length} products currently authorised on the ${parsed.jurisdiction.label} register, each identified by its own registration number with the holder of the authorisation.`,
    path: productListingPath(listing),
  });
}

export default async function ProductListingPage({ params }: Params) {
  const { listing } = await params;
  const page = parseListingPageSlug(listing);
  const parsed = page ? parseListingSlug(page.slug) : null;
  const rows = page ? productsInListingPage(page.slug, page.page) : [];
  if (!parsed || !page || rows.length === 0) notFound();
  const pages = listingPageCount(page.slug);
  const title = `${parsed.family.label} authorised in ${parsed.jurisdiction.label}${pages > 1 ? ` (page ${page.page} of ${pages})` : ''}`;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: title,
          description: `Currently authorised products on the ${parsed.jurisdiction.label} register.`,
          path: productListingPath(listing),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural inputs', path: INPUTS_HUB_PATH },
          { name: 'Authorised products', path: PRODUCTS_PATH },
          { name: title, path: productListingPath(listing) },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={INPUTS_HUB_PATH} className="hover:underline">
          Agricultural inputs
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href={PRODUCTS_PATH} className="hover:underline">
          Authorised products
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{parsed.jurisdiction.label}</span>
      </nav>

      <h1 className="mt-2 font-serif text-3xl text-forest-900">{title}</h1>
      <p className="mt-2 max-w-2xl text-ink-700">
        {rows.length.toLocaleString('en')} products the{' '}
        {parsed.jurisdiction.label} register records as currently authorised.
        This authorisation applies in {parsed.jurisdiction.label} and nowhere
        else, and says nothing about the same product name in another country.
        Identity is the register&rsquo;s own number, never the name.
        {pages > 1 && (
          <>
            {' '}
            The full listing runs to {pages} pages; every authorised product is
            published, none is omitted.
          </>
        )}
      </p>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
              <th scope="col" className="py-2 pr-4 font-medium">
                Product
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Registration number
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Register function
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Authorisation holder
              </th>
              <th scope="col" className="py-2 font-medium">
                Active substances
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ input, authorization }) => (
              <tr
                key={authorization.id}
                className="border-b border-ink-100 align-top"
              >
                <th
                  scope="row"
                  className="py-1.5 pr-4 font-normal text-ink-900"
                >
                  {input.name}
                </th>
                <td className="py-1.5 pr-4 font-mono text-xs tabular-nums text-ink-600">
                  {authorization.authorizationNumber}
                </td>
                <td className="py-1.5 pr-4 text-ink-600">
                  {input.functions.join(', ') || '—'}
                </td>
                <td className="py-1.5 pr-4 text-ink-700">
                  {input.holderName ?? '—'}
                </td>
                <td className="py-1.5 text-ink-600">
                  {input.activeSubstanceNames.length === 0
                    ? '—'
                    : input.activeSubstanceNames.slice(0, 3).join(', ') +
                      (input.activeSubstanceNames.length > 3
                        ? ` +${input.activeSubstanceNames.length - 3} more`
                        : '')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <nav
          aria-label="Listing pages"
          className="mt-8 flex flex-wrap gap-2 text-sm"
        >
          {Array.from({ length: pages }, (_, k) => k + 1).map((n) => (
            <Link
              key={n}
              href={productListingPath(listingPageSlug(page.slug, n))}
              aria-current={n === page.page ? 'page' : undefined}
              className={
                n === page.page
                  ? 'rounded border border-forest-700 bg-forest-700 px-2 py-1 text-white'
                  : 'rounded border border-ink-200 px-2 py-1 text-forest-800 hover:underline'
              }
            >
              Page {n}
            </Link>
          ))}
        </nav>
      )}

      <p className="mt-8 max-w-2xl text-sm text-ink-600">{USE_SCOPE_CAVEAT}</p>
    </Container>
  );
}
