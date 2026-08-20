/**
 * Page-level non-affiliation disclosure.
 *
 * Rendered once per page that lists or describes government bodies. It is
 * deliberately NOT repeated on every card or row: a disclosure that appears
 * thirty times on one page reads as boilerplate and stops being read at all.
 */
export function AuthorityNonAffiliationNotice() {
  return (
    <aside
      className="mt-6 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
      aria-label="Non-affiliation notice"
    >
      AgricultureID is an independent agricultural reference platform.
      Government organizations referenced here are listed for informational
      purposes. Listing does not imply affiliation, endorsement, partnership, or
      official status of AgricultureID.
    </aside>
  );
}
