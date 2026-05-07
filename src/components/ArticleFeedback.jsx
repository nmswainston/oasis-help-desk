import { useCallback, useState } from 'react'

const STORAGE_PREFIX = 'kb-feedback-v1:'

function feedbackMessage(vote) {
  if (vote === 'yes') return 'Glad that helped.'
  if (vote === 'no') return "Thanks. We'll use this to improve the guide."
  return ''
}

function readStoredVote(storageKey) {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'yes' || stored === 'no') return stored
  } catch {
    // localStorage unavailable
  }
  return ''
}

function ArticleFeedback({ articleId }) {
  const storageKey = `${STORAGE_PREFIX}${articleId}`
  const [{ vote, message }, setFeedback] = useState(() => {
    const v = readStoredVote(storageKey)
    return { vote: v, message: feedbackMessage(v) }
  })

  const persistVote = useCallback(
    (next) => {
      // TODO: send analytics event (e.g. article_helpful_vote) with { articleId, vote: next }
      setFeedback({ vote: next, message: feedbackMessage(next) })
      try {
        localStorage.setItem(storageKey, next)
      } catch {
        // ignore
      }
    },
    [storageKey],
  )

  return (
    <div className="rounded-2xl border border-oasis-border bg-oasis-panel-soft px-5 py-4 sm:px-6">
      <p className="text-sm font-medium text-oasis-warm">Did this help?</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => persistVote('yes')}
          disabled={vote === 'yes'}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            vote === 'yes'
              ? 'bg-oasis-champagne/25 text-oasis-warm ring-1 ring-oasis-champagne/50'
              : 'bg-oasis-panel text-oasis-warm-soft ring-1 ring-oasis-border hover:border-oasis-champagne/35 hover:text-oasis-warm'
          }`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => persistVote('no')}
          disabled={vote === 'no'}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            vote === 'no'
              ? 'bg-oasis-champagne/25 text-oasis-warm ring-1 ring-oasis-champagne/50'
              : 'bg-oasis-panel text-oasis-warm-soft ring-1 ring-oasis-border hover:border-oasis-champagne/35 hover:text-oasis-warm'
          }`}
        >
          No
        </button>
      </div>
      {message ? (
        <p className="mt-3 text-sm text-oasis-warm-soft" role="status">
          {message}
        </p>
      ) : null}
    </div>
  )
}

export default ArticleFeedback
