import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, USE_SCOPE_CAVEAT } from '@/types/input';
import {
  PRODUCT_FAMILIES,
  productsInFamily,
  productFamilyPath,
  INPUTS_HUB_PATH,
  PRODUCTS_PATH,
} from '@/lib/inputs/registry';
import { ephySnapshot } from '@/lib/inputs/snapshot';

type Params = { params: Promise<{ family: string }> };

export function generateStaticParams() {
  return PRODUCT_FAMILIES.filter(
    (f) => productsInFamily(f.slug).length > 0,
  ).map((f) => ({ family: f.slug }));
}

const familyMeta = (slug: string) =>
  PRODUCT_FAMILIES.find((f) => f.slug === slug);

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { family } = await params;
  const meta = familyMeta(family);
  const rows = meta ? productsInFamily(family) : [];
  if (!meta || rows.length === 0) return {};
  return buildMetadata({
    title: `${meta.label} authorised in France`,
    description: `${rows.length} products currently authorised on the French E-Phy register, each identified by its AMM number with the holder of the authorisation.`,
    path: productFamilyPath(family),
  });
}

export default async function ProductFamilyPage({ params }: Params) {
  const { family } = await params;
  const meta = familyMeta(family);
  const rows = meta ? productsInFamily(family) : [];
  if (!meta || rows.length === 0) notFound();
  const snap = ephySnapshot();
  const title = `${meta.label} authorised in France`;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: title,
          description: `Currently authorised ${meta.label.toLowerCase()} on the French register.`,
          path: productFamilyPath(family),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural inputs', path: INPUTS_HUB_PATH },
          { name: 'Authorised products', path: PRODUCTS_PATH },
          { name: meta.label, path: productFamilyPath(family) },
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
        <span>{meta.label}</span>
      </nav>

      <h1 className="mt-2 font-serif text-3xl text-forest-900">{title}</h1>
      <p className="mt-2 max-w-2xl text-ink-700">
        {rows.length.toLocaleString('en')} products the French register records
        as currently authorised. Identity is the AMM number, never the name; the
        holder is the register&rsquo;s own field. The function shown on each row
        is the register&rsquo;s, not a reclassification.
      </p>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <caption className="sr-only">
            {meta.label} currently authorised in France
          </caption>
          <thead>
            <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
              <th scope="col" className="py-2 pr-4 font-medium">
                Product
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                AMM number
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

      <p className="mt-8 max-w-2xl text-sm text-ink-600">{USE_SCOPE_CAVEAT}</p>
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
