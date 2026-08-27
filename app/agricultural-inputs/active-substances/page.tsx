import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, SUBSTANCE_PRODUCT_CAVEAT } from '@/types/input';
import {
  activeSubstances,
  authorizationsFor,
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
} from '@/lib/inputs/registry';
import { euPesticideSnapshot } from '@/lib/inputs/snapshot';

const TITLE = 'EU Active Substance Approvals';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Every active substance in the EU Pesticides Database with its approval state — approved, not approved, or pending — and the expiry of approval where one is set.',
  path: ACTIVE_SUBSTANCES_PATH,
});

const ORDER = ['authorized', 'pending', 'not-approved'] as const;
const HEADING: Record<string, string> = {
  authorized: 'Approved',
  pending: 'Pending',
  'not-approved': 'Not approved',
};
const NOTE: Record<string, string> = {
  authorized:
    'Approved for use in plant protection products across the European Union. Approval of the substance is not authorisation of any product containing it.',
  pending: 'Applied for and not decided. A pending substance is not approved.',
  'not-approved':
    'Approval refused, or never granted, or lapsed without renewal. This is not the same as a product being withdrawn.',
};

export default function ActiveSubstancesPage() {
  const snap = euPesticideSnapshot();
  const rows = activeSubstances().map((input) => ({
    input,
    authorization: authorizationsFor(input.id)[0]!,
  }));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'EU approval state for pesticide active substances.',
          path: ACTIVE_SUBSTANCES_PATH,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Agricultural inputs', path: INPUTS_HUB_PATH },
          { name: 'Active substances', path: ACTIVE_SUBSTANCES_PATH },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={INPUTS_HUB_PATH} className="hover:underline">
          Agricultural inputs
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Active substances</span>
      </nav>

      <PageIntro
        title={TITLE}
        lead="Which substances the European Union has approved for plant protection use — and which it has not."
      >
        <p>{SUBSTANCE_PRODUCT_CAVEAT}</p>
        {snap && <p className="text-sm text-ink-600">{snap.versionNote}</p>}
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      {ORDER.map((status) => {
        const group = rows
          .filter((r) => r.authorization.status === status)
          .sort((a, b) => a.input.name.localeCompare(b.input.name));
        if (!group.length) return null;
        return (
          <section key={status} id={status} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {HEADING[status]}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {group.length}
              </span>
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-600">
              {NOTE[status]}
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[30rem] border-collapse text-sm">
                <caption className="sr-only">
                  Active substances recorded as {HEADING[status]?.toLowerCase()}
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
                      Expiry of approval
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

      {snap && (
        <p className="mt-10 max-w-2xl text-sm text-ink-600">
          Read from the{' '}
          <a
            href={snap.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-700 hover:underline"
          >
            EU Pesticides Database
          </a>{' '}
          on {snap.retrievedAt}.
        </p>
      )}
    </Container>
  );
}
