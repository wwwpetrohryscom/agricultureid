import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  INPUT_CAVEAT,
  SUBSTANCE_PRODUCT_CAVEAT,
  AUTHORIZATION_STATUSES,
} from '@/types/input';
import {
  allAuthorizations,
  activeSubstances,
  products,
  isCurrent,
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
  PRODUCTS_PATH,
} from '@/lib/inputs/registry';
import { euPesticideSnapshot, ephySnapshot } from '@/lib/inputs/snapshot';
import { registryPath, publishedRegistries } from '@/lib/registries/registry';

const TITLE = 'Agricultural Input Authorisations';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Which active substances are approved and which products are authorised, in which jurisdiction, from official registers — kept strictly apart from how anything may be applied.',
  path: INPUTS_HUB_PATH,
});

export default function InputsPage() {
  const auths = allAuthorizations();
  const eu = euPesticideSnapshot();
  const fr = ephySnapshot();
  const published = new Set(publishedRegistries().map((r) => r.slug));
  const byStatus = new Map<string, number>();
  for (const a of auths)
    byStatus.set(a.status, (byStatus.get(a.status) ?? 0) + 1);

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Official authorisation records for agricultural inputs.',
          path: INPUTS_HUB_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="What is authorised, where, and under which decision — never how to apply it."
      >
        <p>
          Three things are kept apart here because the law keeps them apart. An{' '}
          <strong>active substance</strong> is approved (or not) by the European
          Union. A <strong>product</strong> containing it is authorised (or not)
          by a national authority. An <strong>authorisation</strong> is one such
          decision, in one place, at one time.
        </p>
        <p>
          So an approved substance may have no authorised product in a country,
          and a product may be withdrawn while its substance stays approved.
          Nothing here carries a single &ldquo;approved&rdquo; flag, because
          such a flag would have to pick one jurisdiction and one legal object
          and would be wrong about both everywhere else.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Authorisation caveat"
      >
        {INPUT_CAVEAT}
      </aside>

      <section className="mt-8" aria-label="Coverage">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Active substances', activeSubstances().length],
            ['Products', products().length.toLocaleString('en')],
            ['Authorisation records', auths.length.toLocaleString('en')],
            [
              'Currently in force',
              auths.filter(isCurrent).length.toLocaleString('en'),
            ],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10" aria-label="Status meanings">
        <h2 className="font-serif text-xl text-forest-900">
          What each decision means
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink-200 text-left text-xs uppercase tracking-wide text-ink-500">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Status
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Records
                </th>
                <th scope="col" className="py-2 font-medium">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {AUTHORIZATION_STATUSES.filter((s) => byStatus.get(s)).map(
                (s) => (
                  <tr key={s} className="border-b border-ink-100">
                    <th scope="row" className="py-2 pr-4 font-normal">
                      {s}
                    </th>
                    <td className="py-2 pr-4 tabular-nums">
                      {(byStatus.get(s) ?? 0).toLocaleString('en')}
                    </td>
                    <td className="py-2 text-ink-700">
                      {s === 'authorized'
                        ? 'Currently authorised by the register.'
                        : s === 'not-approved'
                          ? 'Approval refused, or never granted. This is not the same as withdrawn.'
                          : s === 'withdrawn'
                            ? 'Authorised once, then revoked or surrendered. The withdrawal date is recorded.'
                            : s === 'pending'
                              ? 'Applied for and not decided. Not an authorisation.'
                              : 'Recorded by the register without a decision this layer can classify.'}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-ink-600">
          {SUBSTANCE_PRODUCT_CAVEAT}
        </p>
      </section>

      <section className="mt-10" aria-label="Browse">
        <h2 className="font-serif text-xl text-forest-900">Browse</h2>
        <ul className="mt-3 space-y-3 text-sm">
          <li>
            <Link
              href={ACTIVE_SUBSTANCES_PATH}
              className="font-medium text-forest-800 hover:underline"
            >
              EU active substances
            </Link>
            <span className="block text-ink-600">
              {activeSubstances().length} substances with their European Union
              approval state.
            </span>
          </li>
          <li>
            <Link
              href={PRODUCTS_PATH}
              className="font-medium text-forest-800 hover:underline"
            >
              Authorised products in France
            </Link>
            <span className="block text-ink-600">
              Products currently authorised on the French register, with their
              AMM number and authorisation holder.
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-10" aria-label="Sources">
        <h2 className="font-serif text-xl text-forest-900">Sources</h2>
        <ul className="mt-3 space-y-4 text-sm">
          {[eu, fr].filter(Boolean).map((snap) => (
            <li key={snap!.snapshotId} className="border-t border-ink-100 pt-3">
              <p className="font-medium text-ink-900">{snap!.source}</p>
              <p className="mt-1 text-ink-700">{snap!.statusRule}</p>
              <p className="mt-1 text-xs text-ink-500">
                {snap!.jurisdictionScope} · release {snap!.datasetVersion} ·
                read {snap!.retrievedAt}
                {published.has(snap!.registryId) && (
                  <>
                    {' · '}
                    <Link
                      href={registryPath(snap!.registryId)}
                      className="text-forest-700 hover:underline"
                    >
                      registry record
                    </Link>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-label="What is not published">
        <h2 className="font-serif text-xl text-forest-900">
          What this layer does not publish
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          {fr?.doseRule} {fr?.compositionRule}
        </p>
      </section>
    </Container>
  );
}
