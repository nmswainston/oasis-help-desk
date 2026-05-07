export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2"
        style={{ color: 'var(--text-muted)' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <label htmlFor="kb-search" className="sr-only">Search help articles</label>
      <input
        id="kb-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search — TV, remote, audio, WiFi, cameras..."
        className="w-full rounded-xl py-3 pl-11 pr-4 text-sm outline-none transition-all"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
          fontFamily: 'var(--font-ui)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--gold)'
          e.currentTarget.style.boxShadow = '0 0 0 3px var(--gold-bg)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
