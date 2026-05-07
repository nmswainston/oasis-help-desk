function TagFilter({ tags, selectedTags, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const active = selectedTags.includes(tag)
        return (
          <button
            type="button"
            key={tag}
            onClick={() => onToggle(tag)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active
                ? 'border-oasis-champagne/70 bg-oasis-champagne/15 text-oasis-warm ring-1 ring-oasis-champagne/20'
                : 'border-oasis-border bg-oasis-panel-soft text-oasis-warm-soft hover:border-oasis-champagne/35 hover:text-oasis-warm'
            }`}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}

export default TagFilter
