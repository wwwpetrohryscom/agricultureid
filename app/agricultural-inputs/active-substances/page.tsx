import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { INPUT_CAVEAT, SUBSTANCE_PRODUCT_CAVEAT } from '@/types/input';
import {
  presentSubstanceJurisdictions,
  substanceListingPath,
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

export default function ActiveSubstancesPage() {
  const snap = euPesticideSnapshot();

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

      <section className="mt-8" aria-label="Registers">
        <h2 className="font-serif text-xl text-forest-900">
          Browse by decision-maker
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          Substance decisions are taken at different levels. The European Union
          approves active substances for the whole Union; Australia approves
          active constituents nationally. They are separate decisions by
          separate authorities and are never combined.
        </p>
        <ul className="mt-4 space-y-3">
          {presentSubstanceJurisdictions().map((j) => (
            <li key={j.slug} className="border-t border-ink-100 pt-3">
              <Link
                href={substanceListingPath(j.slug)}
                className="font-medium text-forest-800 hover:underline"
              >
                {j.label}
              </Link>
              <span className="ml-2 text-sm text-ink-500">
                {j.count.toLocaleString('en')} substances
              </span>
              <span className="block text-sm text-ink-600">{j.instrument}</span>
            </li>
          ))}
        </ul>
      </section>

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
