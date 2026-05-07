import { createElement } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategoryIcon } from '../utils/categoryMeta'

const POPULAR_IDS = [
  'control4-remote-not-responding',
  'tv-no-picture',
  'audio-no-sound',
  'wifi-slow-speeds',
]

function PopularGuidesSection({ articles }) {
  const popular = POPULAR_IDS.map((id) => articles.find((a) => a.id === id)).filter(Boolean)

  if (!popular.length) return null

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-oasis-warm">Popular Guides</h2>
        <p className="text-sm text-oasis-warm-soft">Jump in—no search needed.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="group flex flex-col rounded-2xl border border-oasis-border bg-oasis-panel/90 p-4 shadow-sm ring-1 ring-white/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-oasis-champagne/40 hover:shadow-oasis-card-hover"
          >
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-oasis-panel-soft text-oasis-champagne">
              {createElement(getCategoryIcon(article.category), {
                className: 'h-5 w-5',
                'aria-hidden': true,
              })}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-oasis-champagne">
              {article.category}
            </span>
            <span className="mt-1 line-clamp-2 text-sm font-semibold text-oasis-warm group-hover:text-oasis-champagne">
              {article.title}
            </span>
            <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-medium text-oasis-warm-soft group-hover:text-oasis-warm">
              View guide
              <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PopularGuidesSection
