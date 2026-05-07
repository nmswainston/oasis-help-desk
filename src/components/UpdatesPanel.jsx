import { Link } from 'react-router-dom'
import { alerts } from '../data/alerts'

export default function UpdatesPanel() {
  if (alerts.length === 0) return null

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
        className="flex-1 overflow-y-auto"
        style={{ background: 'var(--bg-surface)' }}
      >
        {alerts.map((alert, i) => (
          <div
            key={alert.id}
            className="p-4"
            style={{
              borderBottom: i < alerts.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <p
              className="mb-1.5 text-sm font-semibold leading-snug"
              style={{ color: alert.urgent ? 'var(--urgent-text)' : 'var(--gold)' }}
            >
              {alert.title}
            </p>

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