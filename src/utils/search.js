import Fuse from 'fuse.js'

const fuse = new Fuse([], {
  includeScore: true,
  threshold: 0.35,
  ignoreLocation: true,
  keys: ['title', 'summary', 'tags'],
})

export function searchArticles(articles, query) {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) {
    return articles
  }

  fuse.setCollection(articles)
  return fuse.search(trimmedQuery).map((result) => result.item)
}
