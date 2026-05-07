import { createElement, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, QrCode, Radio, Sparkles, Tv, VolumeX, Wifi } from 'lucide-react'
import BeforeYouCallPromo from '../components/BeforeYouCallPromo'
import GuideCard from '../components/GuideCard'
import PopularGuidesSection from '../components/PopularGuidesSection'
import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'
import SupportCTA from '../components/SupportCTA'
import TagFilter from '../components/TagFilter'
import { articles, categories } from '../data/articles'
import { searchArticles } from '../utils/search'
import { getCategoryIcon } from '../utils/categoryMeta'

const QUICK_ACTIONS = [
  { label: 'TV Not Working', tag: 'tv', Icon: Tv, hint: 'Picture, input, or power issues' },
  { label: 'No Sound', tag: 'audio', Icon: VolumeX, hint: 'Silent TV, music, or sources' },
  {
    label: 'Remote Not Responding',
    tag: 'remote',
    Icon: Radio,
    hint: 'Batteries, room selection, or pairing',
  },
  { label: 'WiFi Issues', tag: 'wifi', Icon: Wifi, hint: 'Slow speeds or dropped connections' },
  {
    label: 'Cameras Not Showing',
    tag: 'camera',
    Icon: Camera,
    hint: 'Blank feeds or offline devices',
  },
]

const MAIL_SUPPORT =
  'mailto:support@example.com?subject=Smart%20Home%20Support%20Request'

function HomePage() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const availableTags = useMemo(() => {
    return [...new Set(articles.flatMap((article) => article.tags))].sort()
  }, [])

  const filteredArticles = useMemo(() => {
    const matchesQuery = searchArticles(articles, query)

    return matchesQuery.filter((article) => {
      const categoryMatch = selectedCategory ? article.category === selectedCategory : true
      const tagsMatch = selectedTags.length
        ? selectedTags.every((tag) => article.tags.includes(tag))
        : true

      return categoryMatch && tagsMatch
    })
  }, [query, selectedCategory, selectedTags])

  const toggleTag = (tag) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    )
  }

  const applyQuickFilter = (tag) => {
    setQuery('')
    setSelectedCategory('')
    setSelectedTags([tag])
  }

  const filterByCardTag = (tag) => {
    setQuery('')
    setSelectedCategory('')
    setSelectedTags([tag])
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedCategory('')
    setSelectedTags([])
  }

  const estimateReadTime = (article) => {
    if (article.estimatedRead) return article.estimatedRead
    const totalWords =
      article.summary.split(' ').length +
      article.quickFix.join(' ').split(' ').length +
      article.steps.join(' ').split(' ').length
    const minutes = Math.max(2, Math.ceil(totalWords / 140))
    return `${minutes} min read`
  }

  return (
    <section className="space-y-14 pb-4 sm:space-y-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-oasis-border bg-gradient-to-br from-oasis-navy via-[#123a63] to-[#0f4f7f] p-7 shadow-oasis-card ring-1 ring-white/[0.08] sm:p-12">
        <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-oasis-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl space-y-6 text-center">
          <div className="mx-auto w-fit rounded-2xl bg-oasis-navy/80 p-2 ring-1 ring-white/20">
            <img
              src="/oasis-logo-light.png"
              alt="Oasis Luxury Smart Homes"
              className="h-14 w-auto sm:h-16"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            Systems designed for luxury living and reliability
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Oasis Client Help Desk
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/85 sm:text-xl">
            Quick answers and guided support for your smart home system.
          </p>
          <SearchBar
            value={query}
            onChange={setQuery}
            variant="hero"
            placeholder="Search for help (TV, remote, audio, WiFi...)"
          />
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#guides"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-oasis-accent/70 bg-oasis-accent/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-oasis-accent/30"
            >
              Explore Guided Help
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={MAIL_SUPPORT}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Meet Client Care
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-white/75 sm:text-sm">
            Control4 · Lighting · Shades · Audio · Networking · Security
          </p>
        </div>
      </div>

      <PopularGuidesSection articles={articles} />

      <BeforeYouCallPromo />

      <section id="popular-topics" className="space-y-5">
        <SectionHeader
          eyebrow="Popular Topics"
          title="What do you need help with today?"
          description="Tap a topic to quickly narrow the library and move forward with calm, guided steps."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {QUICK_ACTIONS.map(({ label, tag, Icon, hint }) => {
            const active =
              selectedTags.length === 1 && selectedTags[0] === tag && !query && !selectedCategory
            return (
              <button
                key={tag}
                type="button"
                onClick={() => applyQuickFilter(tag)}
                className={`flex flex-col rounded-2xl border p-4 text-left transition duration-200 ${
                  active
                    ? 'border-oasis-champagne/50 bg-oasis-champagne/15 shadow-md ring-1 ring-oasis-champagne/25'
                    : 'border-oasis-border bg-oasis-panel/80 shadow-sm ring-1 ring-white/[0.03] hover:-translate-y-0.5 hover:border-oasis-champagne/35 hover:shadow-oasis-card'
                }`}
              >
                <span
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    active ? 'bg-oasis-champagne/20 text-oasis-warm' : 'bg-oasis-panel-soft text-oasis-champagne'
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-oasis-warm">{label}</span>
                <span className="mt-1 text-xs leading-snug text-oasis-warm-soft">{hint}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section id="client-care" className="space-y-5">
        <SectionHeader
          eyebrow="System Categories"
          title="Our expertise, simplified for homeowners"
          description="Lighting, automation, shades, networking, and security guidance in approachable language."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory((current) => (current === category ? '' : category))
              }
              className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-sm font-semibold transition duration-200 ${
                selectedCategory === category
                  ? 'border-oasis-champagne/50 bg-oasis-champagne/15 text-oasis-warm ring-1 ring-oasis-champagne/25'
                  : 'border-oasis-border bg-oasis-panel/80 text-oasis-warm-soft shadow-sm ring-1 ring-white/[0.03] hover:-translate-y-0.5 hover:border-oasis-champagne/35'
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  selectedCategory === category
                    ? 'bg-oasis-champagne/20 text-oasis-warm'
                    : 'bg-oasis-panel-soft text-oasis-champagne'
                }`}
              >
                {createElement(getCategoryIcon(category), {
                  className: 'h-4 w-4',
                  'aria-hidden': true,
                })}
              </span>
              <span className="pt-0.5 leading-snug text-oasis-warm">{category}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="guides" className="space-y-5">
        <SectionHeader
          eyebrow="Featured Guides"
          title="Private support guidance for effortless living"
          description="Every article includes a quick fix, clear steps, and what to try next if the issue persists."
          action={
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-medium text-oasis-champagne transition hover:text-oasis-warm"
            >
              Clear filters
            </button>
          }
        />
        <TagFilter tags={availableTags} selectedTags={selectedTags} onToggle={toggleTag} />

        {filteredArticles.length ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {filteredArticles.map((article) => (
              <GuideCard
                key={article.id}
                article={article}
                readTime={estimateReadTime(article)}
                selectedTags={selectedTags}
                onTagClick={filterByCardTag}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-oasis-border bg-oasis-panel p-8 shadow-oasis-card sm:p-10">
            <h3 className="text-lg font-semibold text-oasis-warm">No matching guides found</h3>
            <p className="mt-2 max-w-xl text-sm text-oasis-warm-soft">
              Try searching for TV, remote, audio, WiFi, camera, or power.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center rounded-2xl border border-oasis-champagne/50 bg-oasis-champagne/15 px-5 py-3 text-sm font-semibold text-oasis-warm transition hover:bg-oasis-champagne/25"
              >
                Clear filters
              </button>
              <Link
                to="/before-you-call"
                className="inline-flex items-center justify-center rounded-2xl border border-oasis-border bg-oasis-panel-soft px-5 py-3 text-sm font-semibold text-oasis-warm transition hover:border-oasis-champagne/40"
              >
                Before You Call Support
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-oasis-card sm:p-8">
          <SectionHeader
            eyebrow="QR Code Support"
            title="Keep support in reach around your home"
            description="Place this QR in your utility area or rack so family and guests can access guided help instantly."
          />
          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-oasis-border bg-oasis-panel-soft p-4 sm:max-w-md">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-oasis-border bg-oasis-ink">
              <QrCode className="h-10 w-10 text-oasis-champagne" aria-hidden />
            </div>
            <p className="text-sm text-oasis-warm-soft">
              Scan or share the link—mobile layout stays readable for on-the-spot troubleshooting.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-oasis-card sm:p-8">
          <SectionHeader
            eyebrow="Need Help From Oasis"
            title="Private support when you need a specialist"
            description="If a guide does not resolve the issue, our Client Care team can coordinate the next best step."
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-oasis-border bg-oasis-panel-soft px-3 py-1.5 text-xs font-medium text-oasis-warm-soft">
            <Sparkles className="h-3.5 w-3.5 text-oasis-champagne" aria-hidden />
            Calm, private support tailored to your home
          </p>
        </div>
      </section>

      <SupportCTA />
    </section>
  )
}

export default HomePage
