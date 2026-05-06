import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="text-sm font-semibold tracking-wide text-slate-900 hover:text-blue-800"
          >
            Oasis Smart Home Help
          </Link>
          <p className="text-xs text-slate-500">Luxury support, simplified</p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Oasis Smart Home Help</p>
            <p className="text-slate-500">
              Placeholder:{' '}
              <a className="text-blue-700 hover:text-blue-800" href="mailto:support@example.com">
                support@example.com
              </a>
              {' · '}
              <a className="text-blue-700 hover:text-blue-800" href="tel:+15555550100">
                (555) 555-0100
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <Link
              to="/before-you-call"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              Before You Call Support
            </Link>
            <p className="text-xs text-slate-500">Need white-glove help? Contact your concierge.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
