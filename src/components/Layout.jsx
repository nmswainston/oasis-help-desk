import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-slate-900">
            Oasis Smart Home Help
          </p>
          <p className="text-xs text-slate-500">Luxury support, simplified</p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500 sm:px-6">
          Need white-glove support? Contact your Oasis support concierge.
        </div>
      </footer>
    </div>
  )
}

export default Layout
