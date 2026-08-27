import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, SUBSTANCE_PRODUCT_CAVEAT } from '@/types/input';
import {
  presentSubstanceJurisdictions,
  presentSubstancePages,
  substancesInJurisdictionPage,
  parseSubstancePageSlug,
  substancePageCount,
  substancePageSlug,
  substanceListingPath,
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
} from '@/lib/inputs/registry';

type Params = { params: Promise<{ jurisdiction: string }> };

export function generateStaticParams() {
  return presentSubstancePages().map((p) => ({ jurisdiction: p.pageSlug }));
}

const meta = (slug: string) =>
  presentSubstanceJurisdictions().find((j) => j.slug === slug);

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { jurisdiction } = await params;
  const parsed = parseSubstancePageSlug(jurisdiction);
  const j = parsed ? meta(parsed.slug) : undefined;
  if (!j || !parsed) return {};
  const pages = substancePageCount(parsed.slug);
  const suffix = pages > 1 ? ` (page ${parsed.page} of ${pages})` : '';
  return buildMetadata({
    title: `${j.label} active substance decisions${suffix}`,
    description: `${j.count} active substances with the decision ${j.label} has taken on each — ${j.instrument}. A substance decision is not authorisation of any product containing it.`,
    path: substanceListingPath(jurisdiction),
  });
}

const ORDER = ['authorized', 'restricted', 'pending', 'not-approved'] as const;
const HEADING: Record<string, string> = {
  authorized: 'Approved',
  restricted: 'Approved with restrictions',
  pending: 'Pending',
  'not-approved': 'Not approved',
};

export default async function SubstanceJurisdictionPage({ params }: Params) {
  const { jurisdiction } = await params;
  const parsed = parseSubstancePageSlug(jurisdiction);
  const j = parsed ? meta(parsed.slug) : undefined;
  if (!j || !parsed) notFound();
  const rows = substancesInJurisdictionPage(parsed.slug, parsed.page);
  if (rows.length === 0) notFound();
  const pages = substancePageCount(parsed.slug);
  const title = `${j.label} active substance decisions${pages > 1 ? ` (page ${parsed.page} of ${pages})` : ''}`;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: title,
          description: `${j.instrument}.`,
          path: substanceListingPath(jurisdiction),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural inputs', path: INPUTS_HUB_PATH },
          { name: 'Active substances', path: ACTIVE_SUBSTANCES_PATH },
          { name: j.label, path: substanceListingPath(jurisdiction) },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={INPUTS_HUB_PATH} className="hover:underline">
          Agricultural inputs
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href={ACTIVE_SUBSTANCES_PATH} className="hover:underline">
          Active substances
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{j.label}</span>
      </nav>

      <h1 className="mt-2 font-serif text-3xl text-forest-900">{title}</h1>
      <p className="mt-2 max-w-2xl text-ink-700">
        {j.instrument}. {SUBSTANCE_PRODUCT_CAVEAT}
      </p>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      {ORDER.map((status) => {
        const group = rows.filter((r) => r.authorization.status === status);
        if (!group.length) return null;
        return (
          <section key={status} id={status} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {HEADING[status]}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {group.length.toLocaleString('en')}
              </span>
            </h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-sm">
                <caption className="sr-only">
                  Active substances recorded as {HEADING[status]?.toLowerCase()}{' '}
                  in {j.label}
                </caption>
                <thead>
                  <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Substance
                    </th>
                    <th scope="col" className="py-2 pr-4 font-medium">
                      Register wording
                    </th>
                    <th scope="col" className="py-2 font-medium">
                      Recorded until
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.map(({ input, authorization }) => (
                    <tr key={input.id} className="border-b border-ink-100">
                      <th
                        scope="row"
                        className="py-1.5 pr-4 font-normal text-ink-900"
                      >
                        {input.name}
                      </th>
                      <td className="py-1.5 pr-4 text-ink-600">
                        {authorization.publishedStatus}
                      </td>
                      <td className="py-1.5 tabular-nums text-ink-600">
                        {authorization.validUntil ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      {pages > 1 && (
        <nav
          aria-label="Listing pages"
          className="mt-8 flex flex-wrap gap-2 text-sm"
        >
          {Array.from({ length: pages }, (_, k) => k + 1).map((n) => (
            <Link
              key={n}
              href={substanceListingPath(substancePageSlug(parsed.slug, n))}
              aria-current={n === parsed.page ? 'page' : undefined}
              className={
                n === parsed.page
                  ? 'rounded border border-forest-700 bg-forest-700 px-2 py-1 text-white'
                  : 'rounded border border-ink-200 px-2 py-1 text-forest-800 hover:underline'
              }
            >
              Page {n}
            </Link>
          ))}
        </nav>
      )}
    </Container>
  );
}
