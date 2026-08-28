import { useMemo, useState } from 'react';
import {
  getWikiCategoryHref,
  getWikiEntryHref,
  wikiCategories,
  wikiEntries,
} from '@/content/site';

export function WikiSearch({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    const categoryResults = wikiCategories
      .filter((category) =>
        [category.title, category.description, category.slug]
          .join(' ')
          .toLowerCase()
          .includes(normalized)
      )
      .map((category) => ({
        href: getWikiCategoryHref(category),
        kind: 'Category',
        summary: category.description,
        title: category.title,
      }));

    const entryResults = wikiEntries
      .filter((entry) =>
        [entry.title, entry.summary, ...entry.keywords]
          .join(' ')
          .toLowerCase()
          .includes(normalized)
      )
      .map((entry) => ({
        href: getWikiEntryHref(entry),
        kind: entry.pageType,
        summary: entry.summary,
        title: entry.title,
      }));

    return [...categoryResults, ...entryResults].slice(0, 8);
  }, [query]);

  return (
    <div className="relative w-full max-w-3xl">
      <label className="sr-only" htmlFor="wiki-search">
        Search the Wiki
      </label>
      <div className="flex items-center gap-3 rounded-[12px] border-2 border-ink bg-surface p-2 shadow-brutal">
        <span aria-hidden="true" className="px-2 text-xl text-muted-foreground">
          /
        </span>
        <input
          id="wiki-search"
          className="min-w-0 flex-1 bg-transparent px-1 py-3 font-bold outline-none placeholder:text-muted-foreground"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search an operator, location, mission or platform"
          type="search"
          value={query}
        />
        <span className="hidden rounded-md border-2 border-ink/20 px-2 py-1 text-xs font-black text-muted-foreground sm:block">
          {compact ? 'Search' : 'Enter a keyword'}
        </span>
      </div>

      {query.trim() && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 overflow-hidden rounded-[12px] border-2 border-ink bg-surface p-2 shadow-brutal-lg">
          {results.length > 0 ? (
            <div className="grid gap-1">
              {results.map((result) => (
                <a
                  className="rounded-lg p-3 no-underline hover:bg-yellow hover:text-ink"
                  href={result.href}
                  key={`${result.kind}-${result.href}`}
                >
                  <span className="block text-xs font-black uppercase tracking-[0.12em] text-muted-foreground">
                    {result.kind}
                  </span>
                  <strong className="block text-base">{result.title}</strong>
                  <span className="block text-sm text-muted-foreground">
                    {result.summary}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="p-3 text-sm font-bold text-muted-foreground">
              No matching page yet. Keep the query as a research lead instead of
              creating a thin page automatically.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
