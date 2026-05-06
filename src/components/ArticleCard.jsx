import { Link } from 'react-router-dom'

function ArticleCard({ article, onTagClick, selectedTags = [] }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-lg">
      <Link
        to={`/article/${article.id}`}
        className="block rounded-t-2xl p-5 transition-colors hover:bg-slate-50/80"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {article.category}
        </p>
        <h3 className="mb-2 text-lg font-semibold text-slate-900">{article.title}</h3>
        <p className="text-sm text-slate-600">{article.summary}</p>
      </Link>
      <div className="flex flex-wrap gap-2 border-t border-slate-100 px-5 pb-5 pt-4">
        {article.tags.map((tag) => {
          const active = selectedTags.includes(tag)
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick?.(tag)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                active
                  ? 'border-blue-300 bg-blue-50 text-blue-800'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50/60 hover:text-blue-800'
              }`}
            >
              {tag}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ArticleCard
