import { createElement } from 'react'
import { ArrowLeft, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ArticleFeedback from '../components/ArticleFeedback'
import { articles } from '../data/articles'
import { getCategoryIcon } from '../utils/categoryMeta'

const TEL_SUPPORT = 'tel:+14805550100'
const MAIL_SCHEDULE =
  'mailto:support@example.com?subject=Smart%20Home%20Support%20Request'

const DEFAULT_ESTIMATED = '2–3 min fix'

function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((item) => item.id === id)

  if (!article) {
    return (
      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-8 shadow-oasis-card">
        <h1 className="mb-2 text-2xl font-semibold text-oasis-warm">Article Not Found</h1>
        <p className="mb-4 text-oasis-warm-soft">
          The article you tried to open is unavailable.
        </p>
        <Link
          to="/"
          className="text-sm font-medium text-oasis-champagne hover:underline"
        >
          Return to help center
        </Link>
      </section>
    )
  }

  const estimatedRead = article.estimatedRead ?? DEFAULT_ESTIMATED

  return (
    <article className="space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-oasis-champagne hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to help center
      </Link>

      <header className="space-y-4 rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-oasis-card ring-1 ring-white/[0.04] sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-oasis-champagne/35 bg-oasis-panel-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-oasis-warm">
            {createElement(getCategoryIcon(article.category), {
              className: 'h-3.5 w-3.5 text-oasis-champagne',
              'aria-hidden': true,
            })}
            {article.category}
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-oasis-border bg-oasis-panel-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-oasis-warm-soft"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-oasis-warm sm:text-4xl">
          {article.title}
        </h1>
        <p className="max-w-3xl text-lg text-oasis-warm-soft">{article.summary}</p>
        <p className="inline-flex items-center gap-2 text-sm text-oasis-warm-soft">
          <Clock className="h-4 w-4 text-oasis-champagne" aria-hidden />
          <span className="font-medium text-oasis-warm">Estimated time:</span> {estimatedRead}
        </p>
      </header>

      <section className="rounded-3xl border border-oasis-border border-l-4 border-l-oasis-champagne bg-gradient-to-br from-oasis-navy/40 to-oasis-panel p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-oasis-warm">Quick Fix</h2>
        <ul className="list-disc space-y-2.5 pl-5 text-oasis-warm-soft">
          {article.quickFix.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-sm ring-1 ring-white/[0.04] sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-oasis-warm">Step-by-Step Instructions</h2>
        <ol className="list-decimal space-y-3 pl-5 text-oasis-warm-soft">
          {article.steps.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-sm ring-1 ring-white/[0.04] sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-oasis-warm">If That Didn&apos;t Work</h2>
        <ul className="list-disc space-y-2.5 pl-5 text-oasis-warm-soft">
          {article.fallback.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-sm ring-1 ring-white/[0.04] sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-oasis-warm">Still having trouble?</h2>
        <p className="mb-6 max-w-2xl text-sm text-oasis-warm-soft">
          Our team can walk you through the next steps or schedule a visit if needed.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={TEL_SUPPORT}
            className="inline-flex items-center justify-center rounded-2xl border border-oasis-champagne/50 bg-oasis-champagne/15 px-5 py-3 text-center text-sm font-semibold text-oasis-warm transition hover:bg-oasis-champagne/25"
          >
            Call Support
          </a>
          <a
            href={MAIL_SCHEDULE}
            className="inline-flex items-center justify-center rounded-2xl border border-oasis-border bg-oasis-panel-soft px-5 py-3 text-center text-sm font-semibold text-oasis-warm transition hover:border-oasis-champagne/40"
          >
            Schedule Service
          </a>
        </div>
        <div className="mt-8">
          <ArticleFeedback key={article.id} articleId={article.id} />
        </div>
      </section>
    </article>
  )
}

export default ArticlePage
