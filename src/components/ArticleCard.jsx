import { Link } from 'react-router-dom'

export default function ArticleCard({ article, onTagClick, selectedTags = [] }) {
  return (
    <div
      className="group flex flex-col rounded-xl transition-all duration-150"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--gold-border)'
        e.currentTarget.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <Link
        to={`/article/${article.id}`}
        className="flex flex-1 flex-col p-4"
      >
        {/* Category label */}
        <span
          className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em]"
          style={{ color: 'var(--gold)' }}
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          className="mb-1.5 text-[15px] font-semibold leading-snug"
          style={{ color: 'var(--text)' }}
        >
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          {article.summary}
        </p>

        {/* Arrow hint */}
        <div className="mt-3 flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100" style={{ color: 'var(--gold)' }}>
          View steps
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>

      {/* Tags */}
      {article.tags.length > 0 && (
        <div
          className="flex flex-wrap gap-1.5 border-t px-4 pb-3 pt-2.5"
          style={{ borderColor: 'var(--border-light)' }}
        >
          {article.tags.map((tag) => {
            const active = selectedTags.includes(tag)
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick?.(tag)}
                className="rounded-md px-2 py-0.5 text-xs font-medium transition-all"
                style={{
                  background: active ? 'var(--gold-bg)' : 'var(--bg)',
                  border: `1px solid ${active ? 'var(--gold-border)' : 'var(--border)'}`,
                  color: active ? 'var(--gold)' : 'var(--text-muted)',
                }}
              >
                {tag}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
