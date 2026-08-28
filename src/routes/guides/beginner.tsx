import { createFileRoute, notFound } from '@tanstack/react-router';
import { WikiEntryPage } from '@/components/wiki/wiki-pages';
import { findWikiCategory, findWikiEntry } from '@/content/site';
import { getRequestOrigin, wikiHead } from '@/lib/seo';

export const Route = createFileRoute('/guides/beginner')({
  loader: () => {
    const entry = findWikiEntry('beginner-guide');
    const category = findWikiCategory('briefing');
    if (!entry || !category) throw notFound();
    return { category, entry };
  },
  head: ({ loaderData }) =>
    loaderData
      ? wikiHead(loaderData.entry, loaderData.category, getRequestOrigin())
      : {},
  component: BeginnerGuideRoute,
});

function BeginnerGuideRoute() {
  const { category, entry } = Route.useLoaderData();
  return <WikiEntryPage category={category} entry={entry} />;
}
