import { Search } from 'lucide-react'

function SearchBar({ value, onChange, variant = 'default', placeholder }) {
  const isHero = variant === 'hero'
  return (
    <div className={`mx-auto w-full ${isHero ? 'max-w-2xl' : 'max-w-3xl'}`}>
      <label htmlFor="kb-search" className="sr-only">
        Search knowledgebase
      </label>
      <div
        className={`relative flex items-center rounded-2xl border border-oasis-border bg-oasis-panel-soft ring-1 ring-white/5 transition focus-within:border-oasis-champagne/60 focus-within:ring-2 focus-within:ring-oasis-champagne/20 ${
          isHero ? 'px-4 py-1 sm:px-5' : 'px-4 py-1'
        }`}
      >
        <Search
          className={`pointer-events-none shrink-0 text-oasis-warm-soft/70 ${isHero ? 'h-5 w-5 sm:h-6 sm:w-6' : 'h-5 w-5'}`}
          aria-hidden
        />
        <input
          id="kb-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder ?? 'Search for guided help (lighting, shades, audio, WiFi...)'}
          className={`min-w-0 flex-1 border-0 bg-transparent text-oasis-warm placeholder:text-oasis-warm-soft/55 focus:outline-none focus:ring-0 ${
            isHero ? 'px-3 py-4 text-base sm:px-4 sm:py-5 sm:text-lg' : 'px-3 py-4 text-base sm:text-lg'
          }`}
        />
      </div>
    </div>
  )
}

export default SearchBar
