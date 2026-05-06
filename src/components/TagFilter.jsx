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
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active
                ? 'border-blue-200 bg-blue-50 text-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
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
