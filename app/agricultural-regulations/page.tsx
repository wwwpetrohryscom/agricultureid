import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  listedComplianceTopics,
  publishedComplianceTopics,
  compliancePath,
  COMPLIANCE_DISCLOSURE,
} from '@/lib/compliance/registry';
import { humanizeToken } from '@/lib/authorities/registry';

const TITLE = 'Agricultural Regulations & Compliance';
const PATH = '/agricultural-regulations';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Which authority regulates an agricultural activity, which official register confirms status, and which official source establishes the rule — narrowly scoped and linked to the official material.',
  path: PATH,
});

export default function RegulationsPage() {
  const listed = listedComplianceTopics();
  const published = new Set(publishedComplianceTopics().map((t) => t.slug));
  const types = [...new Set(listed.map((t) => t.topicType))].sort();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Agricultural compliance topics linked to official authorities, registers and sources.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Who regulates it, where to check it, and which official source says so."
      >
        <p>
          These pages are a navigation layer over official material. Each one
          identifies the responsible authority, the official register that
          confirms current status, and the instrument or guidance the rule comes
          from.
        </p>
        <p>
          A requirement is described as <strong>required</strong> only where the
          operative legal text has been read and is cited. Where it has not, the
          page says so and points you at the official system to check, rather
          than asserting an obligation on your behalf.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Scope of this information"
      >
        {COMPLIANCE_DISCLOSURE}
      </aside>

      {types.map((type) => {
        const inType = listed.filter((t) => t.topicType === type);
        return (
          <section key={type} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {humanizeToken(type)}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {inType.length}
              </span>
            </h2>
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {inType.map((t) => (
                <li key={t.id} className="py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-medium text-ink-900">
                      {published.has(t.slug) ? (
                        <Link
                          href={compliancePath(t.slug)}
                          className="text-forest-800 hover:underline"
                        >
                          {t.title}
                        </Link>
                      ) : (
                        t.title
                      )}
                    </p>
                    <span className="text-xs text-ink-500">
                      {t.jurisdictionName}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-600">{t.summary}</p>
                  <p className="mt-1 text-xs text-ink-500">
                    Last verified {t.lastVerifiedAt}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </Container>
  );
}
