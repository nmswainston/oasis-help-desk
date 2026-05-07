import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import TagFilter from '../components/TagFilter'
import { articles } from '../data/articles'
import { searchArticles } from '../utils/search'

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const selectedCategory = searchParams.get('category') || ''

  const availableTags = useMemo(() => {
    return [...new Set(articles.flatMap((a) => a.tags))].sort()
  }, [])

  const filteredArticles = useMemo(() => {
    const matchesQuery = searchArticles(articles, query)
    return matchesQuery.filter((article) => {
      const categoryMatch = selectedCategory ? article.category === selectedCategory : true
      const tagsMatch = selectedTags.length
        ? selectedTags.every((tag) => article.tags.includes(tag))
        : true
      return categoryMatch && tagsMatch
    })
  }, [query, selectedCategory, selectedTags])

  const toggleTag = (tag) => {
    setSelectedTags((cur) =>
      cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]
    )
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedTags([])
    setSearchParams({})
  }

  const hasFilters = query || selectedCategory || selectedTags.length > 0

  return (
    <div className="space-y-4">

      {/* Page header + search */}
      <div
        className="rounded-xl p-4 sm:p-5"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h1 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
            {selectedCategory || 'Help Center'}
          </h1>
          <span className="shrink-0 text-xs" style={{ color: 'var(--text-muted)' }}>
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="ml-2 font-medium transition hover:opacity-70"
                style={{ color: 'var(--gold)' }}
              >
                Clear ×
              </button>
            )}
          </span>
        </div>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="shrink-0 text-[10px] font-bold uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-muted)' }}
        >
          Tags:
        </span>
        <TagFilter
          tags={availableTags}
          selectedTags={selectedTags}
          onToggle={toggleTag}
        />
      </div>

      {/* Article grid - always 2 columns on sm+ */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              selectedTags={selectedTags}
              onTagClick={(tag) => {
                setQuery('')
                setSelectedTags([tag])
                setSearchParams({})
              }}
            />
          ))}
        </div>
      ) : (
        <div
          className="rounded-xl p-8 text-center"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm font-medium" style={{ color: 'var(--text-dim)' }}>
            No articles matched your search.
          </p>
          <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
            Try different keywords or clear a filter.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 rounded-lg px-4 py-2 text-xs font-semibold transition"
            style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold-border)', color: 'var(--gold)' }}
          >
            Clear filters
          </button>
        </div>
      )}

    </div>
  )
}
