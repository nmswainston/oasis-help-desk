function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <label htmlFor="kb-search" className="sr-only">
        Search knowledgebase
      </label>
      <input
        id="kb-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for help (TV, remote, audio, WiFi...)"
        className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-5 text-lg text-slate-900 shadow-md transition placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  )
}

export default SearchBar
