import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import type { Crumb } from '@/lib/seo/breadcrumbs';

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}

/** Standard page header: breadcrumbs, eyebrow, title, and a lead paragraph. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: PageIntroProps) {
  return (
    <header className="border-b border-parchment-200 pb-8">
      {crumbs && <Breadcrumbs items={crumbs} />}
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-wide text-olive-700 ${crumbs ? 'mt-5' : ''}`}
        >
          {eyebrow}
        </p>
      )}
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-700">{lead}</p>
      )}
      {children}
    </header>
  );
}
