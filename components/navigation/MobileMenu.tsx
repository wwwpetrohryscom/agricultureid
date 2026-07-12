'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { NavSection } from '@/lib/site';

interface MobileMenuProps {
  sections: NavSection[];
}

/**
 * The only interactive client component in the shell: a disclosure menu for
 * small screens. Kept tiny and dependency-free.
 */
export function MobileMenu({ sections }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 hover:bg-parchment-100"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {open ? (
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 border-t border-parchment-200 bg-parchment-50 shadow-card"
        >
          <ul className="max-h-[70vh] space-y-0.5 overflow-y-auto px-4 py-4">
            {sections.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-parchment-100 hover:text-forest-700"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
