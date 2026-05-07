import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import TagFilter from '../components/TagFilter'
import { alerts } from '../data/alerts'
import { articles } from '../data/articles'
import { searchArticles } from '../utils/search'

function AlertBanner({ alert, onDismiss }) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl p-4"
      style={{
        background: alert.urgent ? 'var(--urgent-bg)' : 'var(--alert-bg)',
        border: `1px solid ${alert.urgent ? 'var(--urgent-border)' : 'var(--alert-border)'}`,
      }}
      role="alert"
    >
      {/* Icon */}
      <div className="mt-0.5 shrink-0">
        {alert.urgent ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--urgent-text)' }}>
            <path fillRule="evenodd" d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.75 5.25a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0v-5zm-.75 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--alert-text)' }}>
            <path fillRule="evenodd" d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.75 5.25a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0v-5zm-.75 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-semibold"
          style={{ color: alert.urgent ? 'var(--urgent-text)' : 'var(--alert-text)' }}
        >
          {alert.title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed" style={{ color: alert.urgent ? 'var(--urgent-text)' : 'var(--alert-text)', opacity: 0.85 }}>
          {alert.body}
          {alert.link && (
            <>
              {' '}
              <a
                href={alert.link}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                {alert.linkLabel}
              </a>
            </>
          )}
        </p>
      </div>

      {/* Dismiss */}
      <button
        type="button"
        onClick={onDismiss}
        className="shrink-0 opacity-50 transition-opacity hover:opacity-100"
        style={{ color: alert.urgent ? 'var(--urgent-text)' : 'var(--alert-text)' }}
        aria-label="Dismiss alert"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [dismissed, setDismissed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('oasis-dismissed-alerts') || '[]')
    } catch {
      return []
    }
  })

  const selectedCategory = searchParams.get('category') || ''

  // Sync search param category changes
  useEffect(() => {
    setQuery('')
    setSelectedTags([])
  }, [selectedCategory])

  const dismiss = (id) => {
    const next = [...dismissed, id]
    setDismissed(next)
    try { localStorage.setItem('oasis-dismissed-alerts', JSON.stringify(next)) } catch {}
  }

  const visibleAlerts = alerts.filter((a) => !dismissed.includes(a.id))

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

      {/* Alerts */}
      {visibleAlerts.length > 0 && (
        <div className="space-y-2">
          {visibleAlerts.map((alert) => (
            <AlertBanner
              key={alert.id}
              alert={alert}
              onDismiss={() => dismiss(alert.id)}
            />
          ))}
        </div>
      )}

      {/* Page header + search — compact single block */}
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

      {/* Tag filter — inline label */}
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

      {/* Article grid — 2 cols on sm, 3 on xl */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
