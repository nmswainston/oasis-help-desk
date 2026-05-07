import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles'

function StepBlock({ number, text }) {
  return (
    <div className="flex gap-3">
      <div
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
        style={{
          background: 'var(--gold-bg)',
          border: '1px solid var(--gold-border)',
          color: 'var(--gold)',
        }}
      >
        {number}
      </div>
      <p className="pt-0.5 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
        {text}
      </p>
    </div>
  )
}

function Section({ title, children, tinted }) {
  return (
    <section
      className="rounded-xl p-5 sm:p-6"
      style={{
        background: tinted ? 'var(--bg)' : 'var(--bg-surface)',
        border: '1px solid var(--border)',
      }}
    >
      <h2
        className="mb-4 text-base font-semibold"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((item) => item.id === id)
  const [vote, setVote] = useState('')

  if (!article) {
    return (
      <div className="mx-auto max-w-2xl">
        <div
          className="rounded-xl p-6"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
        >
          <h1 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>Article Not Found</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-dim)' }}>
            That article is unavailable or may have moved.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block text-sm font-medium"
            style={{ color: 'var(--gold)' }}
          >
            ← Back to help center
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
        <Link
          to="/"
          className="transition hover:opacity-70"
          style={{ color: 'var(--gold)' }}
        >
          Help Center
        </Link>
        <span>/</span>
        <Link
          to={`/?category=${encodeURIComponent(article.category)}`}
          className="transition hover:opacity-70"
          style={{ color: 'var(--gold)' }}
        >
          {article.category}
        </Link>
        <span>/</span>
        <span>{article.title}</span>
      </div>

      {/* Title block */}
      <div
        className="rounded-xl p-5 sm:p-6"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
        }}
      >
        <span
          className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em]"
          style={{ color: 'var(--gold)' }}
        >
          {article.category}
        </span>
        <h1
          className="text-2xl font-semibold leading-snug sm:text-3xl"
          style={{ color: 'var(--text)' }}
        >
          {article.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          {article.summary}
        </p>
      </div>

      {/* Quick Fix */}
      <Section title="⚡ Quick Fix — Try These First" tinted>
        <ul className="space-y-2.5">
          {article.quickFix.map((item, i) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: 'var(--gold-bg)', color: 'var(--gold)' }}
              >
                {i + 1}
              </span>
              <span style={{ color: 'var(--text-dim)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Step by step */}
      <Section title="Step-by-Step Instructions">
        <div className="space-y-4">
          {article.steps.map((item, i) => (
            <StepBlock key={item} number={i + 1} text={item} />
          ))}
        </div>
      </Section>

      {/* Fallback */}
      <Section title="If That Didn't Work">
        <ul className="space-y-2">
          {article.fallback.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--gold)' }} />
              <span style={{ color: 'var(--text-dim)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section
        className="rounded-xl p-5 sm:p-6"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
        }}
      >
        <h2 className="mb-1 text-base font-semibold" style={{ color: 'var(--text)' }}>
          Still not working?
        </h2>
        <p className="mb-4 text-sm" style={{ color: 'var(--text-dim)' }}>
          Our team is available and ready to help.
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href="tel:+14809077095"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ background: 'var(--gold)', color: '#fff' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            Call 480-907-7095
          </a>

          <a
            href="https://www.oasissmarthomes.com/contact"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-dim)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-border)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-dim)'
            }}
          >
            Schedule a Service Visit
          </a>
        </div>

        {/* Helpful vote */}
        <div
          className="mt-5 flex items-center gap-3 border-t pt-4"
          style={{ borderColor: 'var(--border-light)' }}
        >
          <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            Was this helpful?
          </span>
          {vote === '' ? (
            <div className="flex gap-2">
              {['Yes', 'No'].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVote(v.toLowerCase())}
                  className="rounded-md px-3 py-1 text-xs font-medium transition-all"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-dim)',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-border)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-dim)'
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-xs" style={{ color: 'var(--gold)' }}>
              {vote === 'yes'
                ? 'Glad we could help.'
                : 'Thanks — please call us if you need more support.'}
            </span>
          )}
        </div>
      </section>

    </div>
  )
}
