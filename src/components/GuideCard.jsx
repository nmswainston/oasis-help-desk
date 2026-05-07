import { createElement } from 'react'
import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryPill from './CategoryPill'
import { getCategoryIcon } from '../utils/categoryMeta'

function GuideCard({ article, readTime, selectedTags = [], onTagClick }) {
  return (
    <article className="group rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-oasis-card transition duration-300 hover:-translate-y-0.5 hover:border-oasis-champagne/40 hover:shadow-oasis-card-hover">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-oasis-panel-soft text-oasis-champagne">
            {createElement(getCategoryIcon(article.category), {
              className: 'h-4 w-4',
              'aria-hidden': true,
            })}
          </span>
          <CategoryPill label={article.category} active compact />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-oasis-warm">{article.title}</h3>
          <p className="text-sm leading-relaxed text-oasis-warm-soft">{article.summary}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-oasis-warm-soft">
        <Clock3 className="h-3.5 w-3.5" aria-hidden />
        <span>{readTime}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick?.(tag)}
            className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
              selectedTags.includes(tag)
                ? 'border-oasis-champagne/70 bg-oasis-champagne/15 text-oasis-warm'
                : 'border-oasis-border bg-oasis-panel-soft text-oasis-warm-soft hover:border-oasis-champagne/40 hover:text-oasis-warm'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <Link
        to={`/article/${article.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-oasis-champagne transition hover:text-oasis-warm"
      >
        View guide
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}

export default GuideCard
