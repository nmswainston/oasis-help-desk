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
    <article className="space-y-6">
      <Link to="/" className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
        Back to all help topics
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {article.title}
        </h1>
        <p className="text-slate-600">{article.summary}</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Quick Fix</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {article.quickFix.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Step-by-Step Instructions</h2>
        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          {article.steps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">If That Didn&apos;t Work</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {article.fallback.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="mb-2 text-xl font-semibold text-slate-900">Still Need Help</h2>
        <p className="mb-4 text-slate-700">
          If this didn&apos;t resolve the issue, please contact us.
        </p>
        <div className="flex items-center gap-2">
          <p className="mr-2 text-sm font-medium text-slate-700">Did this help?</p>
          <button
            type="button"
            onClick={() => setHelpfulVote('yes')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              helpfulVote === 'yes'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
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
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            No
          </button>
        </div>
      </section>
    </article>
  )
}

export default ArticlePage
