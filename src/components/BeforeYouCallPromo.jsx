import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MINI_CHECKS = [
  'Check power',
  'Restart source device',
  'Replace remote batteries',
  'Confirm correct room',
]

function BeforeYouCallPromo() {
  return (
    <section
      className="overflow-hidden rounded-3xl border border-oasis-border bg-oasis-panel shadow-oasis-card ring-1 ring-white/[0.04]"
      aria-labelledby="byc-promo-heading"
    >
      <div className="border-b border-oasis-border bg-gradient-to-r from-oasis-navy/95 to-oasis-panel px-6 py-5 sm:px-8">
        <h2
          id="byc-promo-heading"
          className="text-xl font-semibold tracking-tight text-oasis-warm sm:text-2xl"
        >
          Before You Call Support
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-oasis-warm-soft sm:text-base">
          Try these quick checks first. They solve many common issues and help us support you
          faster if a visit is needed.
        </p>
      </div>
      <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:p-8">
        <ul className="grid gap-3 sm:grid-cols-2">
          {MINI_CHECKS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-oasis-border bg-oasis-panel-soft px-4 py-3 text-sm font-medium text-oasis-warm-soft"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oasis-champagne/20 text-oasis-warm">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:items-end">
          <Link
            to="/before-you-call"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-oasis-champagne/45 bg-oasis-champagne/15 px-6 py-3.5 text-sm font-semibold text-oasis-warm transition hover:bg-oasis-champagne/25 sm:w-auto"
          >
            View Quick Checklist
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
          <p className="text-center text-xs text-oasis-warm-soft sm:text-right">
            Saves time—for you and our team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BeforeYouCallPromo
