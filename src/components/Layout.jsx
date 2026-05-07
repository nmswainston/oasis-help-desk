import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const MAIL_SUPPORT =
  'mailto:support@example.com?subject=Smart%20Home%20Support%20Request'
const TEL_SUPPORT = 'tel:+14805550100'

function Layout() {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <header
        className={`sticky top-0 z-30 border-b backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? 'border-oasis-border bg-oasis-ink/95 shadow-[0_8px_30px_rgba(11,29,58,0.12)]'
            : 'border-transparent bg-oasis-ink/70'
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 transition-[padding] duration-300 ${
            isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4'
          }`}
        >
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <div className="rounded-xl bg-oasis-navy p-1.5 shadow-sm ring-1 ring-oasis-border">
              <img
                src="/oasis-logo-light.png"
                alt="Oasis Luxury Smart Homes"
                className={`w-auto transition-[height] duration-300 ${isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10'}`}
              />
            </div>
            <div>
              <span className="block text-base font-semibold tracking-tight text-oasis-warm group-hover:text-oasis-champagne">
                Oasis Smart Home Help
              </span>
              <span className="mt-1 inline-flex w-fit items-center rounded-full border border-oasis-border bg-oasis-panel px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-oasis-warm-soft">
                Client Support Knowledgebase
              </span>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-1.5 sm:justify-end">
            <Link
              to="/before-you-call"
              className="rounded-full px-3 py-2 text-sm font-medium text-oasis-warm-soft transition hover:text-oasis-warm"
            >
              Before You Call Support
            </Link>
            <a
              href="/#guides"
              className="rounded-full px-3 py-2 text-sm font-medium text-oasis-warm-soft transition hover:text-oasis-warm"
            >
              Guides
            </a>
            <a
              href="/#popular-topics"
              className="rounded-full px-3 py-2 text-sm font-medium text-oasis-warm-soft transition hover:text-oasis-warm sm:inline"
            >
              Popular Topics
            </a>
            <a
              href="/#client-care"
              className="rounded-full px-3 py-2 text-sm font-medium text-oasis-warm-soft transition hover:text-oasis-warm sm:inline"
            >
              Client Care
            </a>
            <a
              href={MAIL_SUPPORT}
              className="inline-flex items-center justify-center rounded-full border border-oasis-champagne/45 bg-oasis-champagne/15 px-4 py-2 text-sm font-semibold text-oasis-warm transition hover:bg-oasis-champagne/25"
            >
              Contact
            </a>
            <a
              href="https://oasissmarthomes.com"
              target="_blank"
              rel="noreferrer"
              className="ml-0 inline-flex items-center gap-1 rounded-full border border-oasis-border bg-oasis-panel px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-oasis-champagne transition hover:border-oasis-champagne/40 sm:ml-1"
            >
              Oasis Smart Homes
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <Outlet />
      </main>

      <footer className="border-t border-oasis-border bg-oasis-panel/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-oasis-warm-soft sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="space-y-2">
            <p className="font-semibold text-oasis-warm">Oasis Smart Home Help</p>
            <p className="text-oasis-warm-soft">
              <a className="font-medium text-oasis-champagne hover:underline" href={MAIL_SUPPORT}>
                support@example.com
              </a>
              {' · '}
              <a className="font-medium text-oasis-champagne hover:underline" href={TEL_SUPPORT}>
                (480) 555-0100
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <Link
              to="/before-you-call"
              className="font-medium text-oasis-champagne hover:underline"
            >
              Before You Call Support
            </Link>
            <p className="text-xs text-oasis-warm-soft/80">
              Guided help for effortless living.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
