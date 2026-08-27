import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  listedSupportPrograms,
  publishedSupportPrograms,
  supportPath,
} from '@/lib/support/registry';
import { SUPPORT_ELIGIBILITY_NOTICE } from '@/types/support';
import { humanizeToken } from '@/lib/authorities/registry';

const TITLE = 'Agricultural Support & Funding Programmes';
const PATH = '/agricultural-support';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Official agricultural support programmes — who administers them, who they are for, and where the official rules live. Each entry records when it was last verified.',
  path: PATH,
});

export default function SupportPage() {
  const listed = listedSupportPrograms();
  const published = new Set(publishedSupportPrograms().map((p) => p.slug));
  const types = [...new Set(listed.map((p) => p.programType))].sort();

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description: 'Official agricultural support and funding programmes.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Who administers it, who it is for, and where the official rules live."
      >
        <p>
          Each programme was verified against its official page and records the
          date that check was made. Support programmes change on funding cycles,
          so a live official page is not on its own evidence that applications
          are open.
        </p>
        <p>
          No funding figure or application deadline appears in this directory
          unless the official source states it. Where it does not, the field is
          absent rather than approximated.
        </p>
      </PageIntro>

      <aside
        className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Eligibility notice"
      >
        {SUPPORT_ELIGIBILITY_NOTICE}
      </aside>

      {types.map((type) => {
        const inType = listed.filter((p) => p.programType === type);
        return (
          <section key={type} className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {humanizeToken(type)}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {inType.length}
              </span>
            </h2>
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {inType.map((p) => (
                <li key={p.id} className="py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-medium text-ink-900">
                      {published.has(p.slug) ? (
                        <Link
                          href={supportPath(p.slug)}
                          className="text-forest-800 hover:underline"
                        >
                          {p.officialName}
                        </Link>
                      ) : (
                        p.officialName
                      )}
                      {p.shortName && p.shortName !== p.officialName && (
                        <span className="ml-2 text-sm text-ink-500">
                          {p.shortName}
                        </span>
                      )}
                    </p>
                    <span className="text-xs text-ink-500">
                      {p.jurisdictionName}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-600">{p.summary}</p>
                  <p className="mt-1 flex flex-wrap gap-x-3 text-xs text-ink-500">
                    <span>Status: {humanizeToken(p.status)}</span>
                    <span>Last verified {p.lastVerifiedAt}</span>
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
