import Link from 'next/link';

interface SectionCardProps {
  label: string;
  href: string;
  description: string;
  /** Optional real count of entries, shown as a small meta line. */
  meta?: string;
}

/** Topic-domain card used in the homepage exploration grid. */
export function SectionCard({
  label,
  href,
  description,
  meta,
}: SectionCardProps) {
  return (
    <li className="group">
      <Link
        href={href}
        className="flex h-full flex-col rounded-card border border-ink-100 bg-white p-5 transition-colors hover:border-forest-200 hover:bg-[#FAFAF7]"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-ink-900 group-hover:text-forest-700">
            {label}
          </h3>
          <span
            aria-hidden="true"
            className="text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-forest-500"
          >
            →
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-600">
          {description}
        </p>
        {meta && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-olive-700">
            {meta}
          </p>
        )}
      </Link>
    </li>
  );
}
