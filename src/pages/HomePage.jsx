import { useMemo, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import SearchBar from '../components/SearchBar'
import TagFilter from '../components/TagFilter'
import { articles, categories } from '../data/articles'
import { searchArticles } from '../utils/search'

function HomePage() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const availableTags = useMemo(() => {
    return [...new Set(articles.flatMap((article) => article.tags))].sort()
  }, [])

  const filteredArticles = useMemo(() => {
    const matchesQuery = searchArticles(articles, query)

    return matchesQuery.filter((article) => {
      const categoryMatch = selectedCategory
        ? article.category === selectedCategory
        : true
      const tagsMatch = selectedTags.length
        ? selectedTags.every((tag) => article.tags.includes(tag))
        : true

      return categoryMatch && tagsMatch
    })
  }, [query, selectedCategory, selectedTags])

  const toggleTag = (tag) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    )
  }

  return (
    <section className="space-y-8">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          How can we help?
        </h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Quick Categories
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory((current) => (current === category ? '' : category))
              }
              className={`rounded-2xl border px-3 py-3 text-left text-sm font-medium transition sm:px-4 ${
                selectedCategory === category
                  ? 'border-blue-200 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Filter by Tags
        </h2>
        <TagFilter
          tags={availableTags}
          selectedTags={selectedTags}
          onToggle={toggleTag}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Articles
          </h2>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setSelectedCategory('')
              setSelectedTags([])
            }}
            className="text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Clear filters
          </button>
        </div>

        {filteredArticles.length ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No matches found. Try a different keyword or remove one filter.
          </div>
        )}
      </div>
    </section>
  )
}

export default HomePage
