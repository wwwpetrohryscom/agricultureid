import Link from 'next/link';
import { contentUrlPath } from '@/lib/content/registry';
import { CONTENT_TYPE_LABEL } from '@/lib/site';
import type { AnyContent } from '@/types/content';

interface ContentCardProps {
  item: AnyContent;
  /** Show the small content-type label (useful in mixed lists). */
  showType?: boolean;
}

/** Card linking to a structured content page, used on hubs and related lists. */
export function ContentCard({ item, showType = false }: ContentCardProps) {
  return (
    <li className="group">
      <Link
        href={contentUrlPath(item)}
        className="flex h-full flex-col rounded-card border border-ink-100 bg-white p-5 transition-colors hover:border-forest-200 hover:bg-[#FAFAF7]"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-olive-700">
            {showType ? CONTENT_TYPE_LABEL[item.contentType] : item.category}
          </span>
        </div>
        <h3 className="mt-1.5 font-serif text-lg font-bold text-ink-900 group-hover:text-forest-700">
          {item.title}
        </h3>
        {item.scientificName && (
          <p className="mt-0.5 text-sm italic text-ink-500">
            {item.scientificName}
          </p>
        )}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
          {item.summary}
        </p>
      </Link>
    </li>
  );
}
