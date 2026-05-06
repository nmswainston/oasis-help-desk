import { Link } from 'react-router-dom'

function ArticleCard({ article }) {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
        {article.category}
      </p>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{article.title}</h3>
      <p className="mb-4 text-sm text-slate-600">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default ArticleCard
