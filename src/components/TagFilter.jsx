export default function TagFilter({ tags, selectedTags, onToggle }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const active = selectedTags.includes(tag)
        return (
          <button
            type="button"
            key={tag}
            onClick={() => onToggle(tag)}
            className="rounded-md px-3 py-1 text-xs font-medium transition-all"
            style={{
              background: active ? 'var(--gold-bg)' : 'var(--bg-surface)',
              border: `1px solid ${active ? 'var(--gold-border)' : 'var(--border)'}`,
              color: active ? 'var(--gold)' : 'var(--text-dim)',
            }}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
