function CategoryPill({ label, active = false, onClick, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        compact ? 'px-3 py-1.5 text-xs' : ''
      } ${
        active
          ? 'border-oasis-champagne/70 bg-oasis-champagne/15 text-oasis-warm'
          : 'border-oasis-border bg-oasis-panel/70 text-oasis-warm-soft hover:border-oasis-champagne/40 hover:text-oasis-warm'
      }`}
    >
      {label}
    </button>
  )
}

export default CategoryPill
