import { useState } from 'react'
import { Link } from 'react-router-dom'
import { alerts } from '../data/alerts'

export default function UpdatesPanel() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('oasis-dismissed-alerts') || '[]')
    } catch {
      return []
    }
  })

  const dismiss = (id) => {
    const next = [...dismissed, id]
    setDismissed(next)
    try {
      localStorage.setItem('oasis-dismissed-alerts', JSON.stringify(next))
    } catch {
      // Ignore storage failures (e.g. private mode / blocked storage).
    }
  }

  const visible = alerts.filter((a) => !dismissed.includes(a.id))

  if (visible.length === 0) return null

  return (
    <aside
      className="hidden lg:flex flex-col"
      style={{
        width: '268px',
        flexShrink: 0,
        borderLeft: '1px solid var(--border)',
      }}
    >
      {/* Panel header */}
      <div
        className="px-4 py-3"
        style={{ background: 'var(--header-bg)', borderBottom: '1px solid var(--header-border)' }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-wide"
          style={{ color: '#f0ebe0' }}
        >
          Important Updates
        </h2>
      </div>

      {/* Alert list */}
      <div
        className="flex-1 overflow-y-auto divide-y"
        style={{
          background: 'var(--bg-surface)',
          borderColor: 'var(--border)',
          divideColor: 'var(--border)',
        }}
      >
        {visible.map((alert) => (
          <div key={alert.id} className="relative p-4">
            {/* Dismiss */}
            <button
              type="button"
              onClick={() => dismiss(alert.id)}
              className="absolute right-3 top-3 opacity-30 transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Dismiss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <p
              className="mb-1.5 pr-5 text-sm font-semibold leading-snug"
              style={{ color: alert.urgent ? 'var(--urgent-text)' : 'var(--gold)' }}
            >
              {alert.title}
            </p>

            {/* Body */}
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              {alert.body}
              {alert.link && (
                <>
                  {' '}
                  {alert.link.startsWith('http') ? (
                    <a
                      href={alert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 transition hover:opacity-70"
                      style={{ color: 'var(--gold)' }}
                    >
                      {alert.linkLabel}
                    </a>
                  ) : (
                    <Link
                      to={alert.link}
                      className="underline underline-offset-2 transition hover:opacity-70"
                      style={{ color: 'var(--gold)' }}
                    >
                      {alert.linkLabel}
                    </Link>
                  )}
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </aside>
  )
}
