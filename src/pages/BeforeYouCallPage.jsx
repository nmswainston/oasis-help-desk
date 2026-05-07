import { AlertTriangle, ArrowLeft, Check, ListOrdered } from 'lucide-react'
import { Link } from 'react-router-dom'

const CHECKLIST_ITEMS = [
  {
    title: 'Restart in the right order',
    body: 'Restart your Control4 system (controller and network gear in the usual power sequence).',
  },
  {
    title: 'Verify power',
    body: 'Check power to the TV, sources, and rack equipment—confirm outlets and standby lights.',
  },
  {
    title: 'Fresh batteries',
    body: 'Replace remote batteries with a fresh set.',
  },
  {
    title: 'Correct room',
    body: 'Confirm the correct room is selected on the remote or in the app before trying again.',
  },
]

const POWER_CYCLE_ORDER = [
  'Modem',
  'Router / network controller',
  'Control4 controller',
  'Source device, such as Apple TV or cable box',
  'TV / receiver',
]

const NOTE_BEFORE_CONTACT = [
  'Which room is affected',
  'What source is being used',
  'Whether the issue affects one room or multiple rooms',
  'Any error messages',
  'When the issue started',
]

function BeforeYouCallPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-oasis-champagne hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to help center
      </Link>

      <header className="relative overflow-hidden rounded-3xl border border-oasis-border bg-gradient-to-br from-oasis-navy/95 via-oasis-panel to-oasis-ink p-8 shadow-oasis-card ring-1 ring-white/[0.06] sm:p-10">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-oasis-champagne/15 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-oasis-champagne/90">
            Client checklist
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-oasis-warm sm:text-4xl">
            Before You Call Support
          </h1>
          <p className="text-base text-oasis-warm-soft sm:text-lg">
            Quick checks that resolve many issues and help us help you faster if you still need a
            visit or call.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-oasis-warm">Try these first</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {CHECKLIST_ITEMS.map(({ title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-3xl border border-oasis-border bg-oasis-panel p-5 shadow-sm ring-1 ring-white/[0.04] sm:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-oasis-champagne/15 text-oasis-champagne">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-oasis-warm">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-oasis-warm-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-sm ring-1 ring-white/[0.04] sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-oasis-panel-soft text-oasis-champagne">
            <ListOrdered className="h-5 w-5" aria-hidden />
          </span>
          <h2 className="text-xl font-semibold text-oasis-warm">Power cycle order</h2>
        </div>
        <ol className="list-decimal space-y-3 pl-5 text-oasis-warm-soft">
          {POWER_CYCLE_ORDER.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
        <div
          className="mt-6 flex gap-3 rounded-2xl border border-amber-900/25 bg-amber-950/30 p-4 text-sm text-amber-100/95"
          role="note"
        >
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-200/90" aria-hidden />
          <p>
            <span className="font-semibold text-amber-50">Important: </span>
            Only power cycle equipment you can safely access. Do not unplug labeled critical
            equipment unless instructed.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-oasis-border bg-oasis-panel p-6 shadow-sm ring-1 ring-white/[0.04] sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-oasis-warm">
          What to note before contacting support
        </h2>
        <ul className="list-disc space-y-2.5 pl-5 text-oasis-warm-soft">
          {NOTE_BEFORE_CONTACT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default BeforeYouCallPage
