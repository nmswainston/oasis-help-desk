import { useState } from 'react'
import { Link } from 'react-router-dom'

const CHECKLIST = [
  {
    id: 'restart',
    label: 'Restart your Control4 system',
    detail: 'Power cycle the controller and network gear. Controller off first, then back on after 30 seconds.',
  },
  {
    id: 'power',
    label: 'Check power to all equipment',
    detail: 'Confirm outlets are live and standby lights are on for the TV, source devices, and rack gear.',
  },
  {
    id: 'batteries',
    label: 'Replace remote batteries',
    detail: 'Use a fresh set of premium AA batteries — weak batteries are the most common cause of remote issues.',
  },
  {
    id: 'room',
    label: 'Confirm the correct room is selected',
    detail: 'Check that the right room is active in the Control4 app or on the remote before retrying.',
  },
]

export default function BeforeYouCallPage() {
  const [checked, setChecked] = useState([])

  const toggle = (id) => {
    setChecked((cur) =>
      cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]
    )
  }

  const allChecked = checked.length === CHECKLIST.length
  const progress = (checked.length / CHECKLIST.length) * 100

  return (
    <div className="mx-auto max-w-2xl space-y-4">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
        <Link to="/" className="transition hover:opacity-70" style={{ color: 'var(--gold)' }}>
          Help Center
        </Link>
        <span>/</span>
        <span>Before You Call</span>
      </div>

      {/* Header */}
      <div
        className="rounded-xl p-5 sm:p-6"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <span
          className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em]"
          style={{ color: 'var(--gold)' }}
        >
          Self-Service Checklist
        </span>
        <h1 className="text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--text)' }}>
          Before You Call Support
        </h1>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Work through each item below. Most issues resolve in under two minutes — and if you do need
          to call, this info helps us diagnose faster.
        </p>
      </div>

      {/* Checklist */}
      <div
        className="rounded-xl p-5 sm:p-6"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
      >
        <div className="mb-4 space-y-2">
          {CHECKLIST.map(({ id, label, detail }) => {
            const isChecked = checked.includes(id)
            return (
              <button
                key={id}
                type="button"
                onClick={() => toggle(id)}
                className="w-full rounded-lg p-3.5 text-left transition-all"
                style={{
                  background: isChecked ? 'var(--gold-bg)' : 'var(--bg)',
                  border: `1px solid ${isChecked ? 'var(--gold-border)' : 'var(--border)'}`,
                }}
              >
                <div className="flex items-start gap-3">
                  {/* Checkbox */}
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all"
                    style={{
                      borderColor: isChecked ? 'var(--gold)' : 'var(--border)',
                      background: isChecked ? 'var(--gold)' : 'transparent',
                    }}
                  >
                    {isChecked && (
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: isChecked ? 'var(--gold)' : 'var(--text)' }}
                    >
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {detail}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: 'var(--gold)' }}
            />
          </div>
          <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            {checked.length}/{CHECKLIST.length} done
          </span>
        </div>
      </div>

      {/* CTA — appears after all checked */}
      {allChecked && (
        <div
          className="rounded-xl p-5 sm:p-6"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--gold-border)',
          }}
        >
          <p
            className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{ color: 'var(--gold)' }}
          >
            Still Having Trouble?
          </p>
          <h2 className="mb-3 text-base font-semibold" style={{ color: 'var(--text)' }}>
            Let's get our team involved.
          </h2>
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
              className="inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all"
              style={{ border: '1px solid var(--border)', color: 'var(--text-dim)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      )}

      {/* Browse articles */}
      {!allChecked && (
        <p className="text-center text-xs" style={{ color: 'var(--text-muted)' }}>
          Still looking?{' '}
          <Link to="/" className="font-medium underline underline-offset-2" style={{ color: 'var(--gold)' }}>
            Browse all help articles
          </Link>
        </p>
      )}

      {/* Client Care concierge pitch — always visible */}
      <section
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid var(--border)' }}
      >
        {/* Header bar */}
        <div
          className="px-6 py-4"
          style={{ background: 'var(--header-bg)' }}
        >
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Client Care Program
            </p>
          </div>
          <h2 className="mt-1 text-xl font-semibold" style={{ color: '#eef3f8', fontFamily: 'var(--font-display)' }}>
            White-Glove Service & 24/7 Remote Support
          </h2>
          <p className="mt-1 text-sm" style={{ color: '#5a8090' }}>
            Remote diagnostics and proactive monitoring — always one call or text away.
          </p>
        </div>

        {/* Three plans */}
        <div
          className="grid gap-px sm:grid-cols-3"
          style={{ background: 'var(--border)' }}
        >
          {[
            {
              tier: 'Essential',
              name: 'Remote Response',
              perks: ['Phone, text & email support', 'Secure remote system log-in'],
            },
            {
              tier: 'Most Popular',
              name: 'Standard Service',
              perks: ['24/7 support', '4 on-site visits per year', 'Unlimited remote appointments', '10% off new products'],
              highlight: true,
            },
            {
              tier: 'Full Journey',
              name: 'Premium Concierge',
              perks: ['Unlimited on-site service', 'Proactive system monitoring', 'Loaner equipment available', 'Priority scheduling'],
            },
          ].map(({ tier, name, perks, highlight }) => (
            <div
              key={name}
              className="flex flex-col p-5"
              style={{ background: highlight ? 'var(--gold-bg)' : 'var(--bg-surface)' }}
            >
              <p
                className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em]"
                style={{ color: highlight ? 'var(--gold)' : 'var(--text-muted)' }}
              >
                {tier}
              </p>
              <p className="mb-3 text-sm font-semibold" style={{ color: 'var(--text)' }}>
                {name}
              </p>
              <ul className="mb-4 flex-1 space-y-1.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-dim)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.oasissmarthomes.com/contact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
                style={
                  highlight
                    ? { background: 'var(--gold)', color: '#fff' }
                    : { border: '1px solid var(--border)', color: 'var(--text-dim)' }
                }
              >
                Inquire
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            All plans include secure remote access and 24/7 support via text, phone, or email.
          </p>
          <a
            href="https://www.oasissmarthomes.com/client-care"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs font-semibold transition hover:opacity-70"
            style={{ color: 'var(--gold)' }}
          >
            View full Client Care page →
          </a>
        </div>
      </section>

    </div>
  )
}
