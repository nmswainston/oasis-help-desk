import { Headset, Mail, Phone } from 'lucide-react'

const MAIL_SUPPORT =
  'mailto:support@example.com?subject=Smart%20Home%20Support%20Request'
const TEL_SUPPORT = 'tel:+14805550100'

function SupportCTA() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-oasis-border bg-gradient-to-br from-oasis-panel to-oasis-panel-soft p-6 shadow-oasis-card sm:p-8"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-oasis-champagne/90">
          Still need help?
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-oasis-warm sm:text-3xl">
          Reach our Client Care team
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-oasis-warm-soft sm:text-base">
          If self-service does not resolve the issue, we are here with calm, concierge-level
          support tailored to your home.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={MAIL_SUPPORT}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-oasis-champagne/50 bg-oasis-champagne/15 px-5 py-3 text-sm font-semibold text-oasis-warm transition hover:bg-oasis-champagne/25"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Contact Support
        </a>
        <a
          href={TEL_SUPPORT}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-oasis-border bg-oasis-panel-soft px-5 py-3 text-sm font-semibold text-oasis-warm transition hover:border-oasis-champagne/45"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Client Care
        </a>
      </div>

      <p className="mt-4 inline-flex items-center gap-2 text-xs text-oasis-warm-soft">
        <Headset className="h-3.5 w-3.5" aria-hidden />
        Share what you tried—we pick up faster when context is clear.
      </p>
    </section>
  )
}

export default SupportCTA
