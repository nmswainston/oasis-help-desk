import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/articles'

function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((item) => item.id === id)
  const [helpfulVote, setHelpfulVote] = useState('')

  if (!article) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="mb-2 text-2xl font-semibold text-slate-900">Article Not Found</h1>
        <p className="mb-4 text-slate-600">
          The article you tried to open is unavailable.
        </p>
        <Link to="/" className="text-sm font-medium text-blue-700 hover:text-blue-800">
          Return to help center
        </Link>
      </section>
    )
  }

  return (
    <article className="space-y-8">
      <Link to="/" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
        Back to all help topics
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="mb-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="text-slate-600">{article.summary}</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Quick Fix</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {article.quickFix.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Step-by-Step Instructions</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          {article.steps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">If That Didn&apos;t Work</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {article.fallback.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Still not working?</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-blue-800 transition hover:bg-blue-100"
          >
            Call Support
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Schedule Service
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          <span className="mr-2 font-medium text-slate-800">Did this help?</span>
          <button
            type="button"
            onClick={() => setHelpfulVote('yes')}
            className={`mr-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              helpfulVote === 'yes'
                ? 'bg-blue-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setHelpfulVote('no')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              helpfulVote === 'no'
                ? 'bg-blue-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            No
          </button>
        </p>
      </section>
    </article>
  )
}

export default ArticlePage
