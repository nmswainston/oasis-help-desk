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
                ? 'border-blue-300 bg-blue-50 text-blue-800'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50/60 hover:text-blue-800'
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
