import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import ThemeToggle from './ThemeToggle'

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setDrawerOpen(false)
  }, [pathname])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <div className="flex min-h-screen flex-col">

      {/* ── Header (always dark) ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'var(--header-bg)',
          borderBottom: '1px solid var(--header-border)',
        }}
      >
        <div className="flex h-14 items-center gap-3 px-4 sm:px-6">

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md lg:hidden"
            style={{ color: 'var(--header-muted)' }}
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {drawerOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="https://res.cloudinary.com/dsqd7lnop/image/upload/c_limit,w_320/f_auto/q_auto/v1/logo-light.png"
              alt="Oasis Smart Homes Help"
              className="h-6 w-auto object-contain opacity-90 transition-opacity hover:opacity-70"
            />
          </Link>

          {/* Divider */}
          <div className="mx-1 hidden h-5 w-px shrink-0 sm:block" style={{ background: 'var(--header-border)' }} />
          <span className="hidden text-xs font-medium tracking-widest uppercase sm:block" style={{ color: 'var(--header-muted)' }}>
            Help Center
          </span>

          {/* Search (desktop) */}
          <div className="mx-3 hidden flex-1 lg:flex">
            <Link
              to="/"
              className="flex w-full max-w-sm items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition"
              style={{
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                color: '#6b6560',
              }}
            >
              <SearchIcon />
              <span>Search help articles...</span>
            </Link>
          </div>

          {/* Spacer (mobile) */}
          <div className="flex-1 lg:hidden" />

          {/* Right side */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href="tel:+14809077095"
              className="ml-1 hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition sm:flex"
              style={{
                border: '1px solid #2a2a2a',
                color: 'var(--gold)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold-border)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#2a2a2a' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              480-907-7095
            </a>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="relative flex flex-1">

        {/* Mobile drawer overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setDrawerOpen(false)}
          />
        )}

        {/* Sidebar — desktop fixed, mobile drawer */}
        <aside
          className={`
            sidebar-surface fixed bottom-0 top-14 z-40 flex flex-col overflow-y-auto
            transition-transform duration-200 ease-in-out
            lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0
          `}
          style={{
            width: 'var(--sidebar-w)',
            transform: drawerOpen ? 'translateX(0)' : undefined,
          }}
          // On mobile, hide with CSS transform
          data-drawer={drawerOpen ? 'open' : 'closed'}
        >
          <Sidebar onNavClick={() => setDrawerOpen(false)} />
        </aside>

        {/* Hide sidebar on mobile via style override */}
        <style>{`
          @media (max-width: 1023px) {
            aside[data-drawer="closed"] { transform: translateX(-100%); }
            aside[data-drawer="open"]   { transform: translateX(0); }
          }
        `}</style>

        {/* Main content */}
        <main
          className="flex-1 overflow-x-hidden px-4 py-4 sm:px-6 sm:py-6"
          style={{ minWidth: 0 }}
        >
          {/* Mobile search */}
          <div className="mb-4 lg:hidden">
            <Link
              to="/"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              <SearchIcon />
              Search help articles...
            </Link>
          </div>

          <Outlet />
        </main>
      </div>

      {/* ── Footer ── */}
      <footer
        className="border-t"
        style={{
          background: 'var(--bg-surface)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dsqd7lnop/image/upload/c_limit,w_320/f_auto/q_auto/v1/logo-light.png"
              alt="Oasis Smart Homes"
              className="h-5 w-auto object-contain opacity-50"
              style={{ filter: 'var(--logo-filter, none)' }}
            />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              7255 E Adobe Dr Ste 115, Scottsdale AZ 85255
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
            <a href="tel:+14809077095" className="transition hover:opacity-70" style={{ color: 'var(--gold)' }}>
              480-907-7095
            </a>
            <a
              href="https://www.oasissmarthomes.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-70"
            >
              oasissmarthomes.com
            </a>
            <span>© {new Date().getFullYear()} Oasis Luxury Smart Homes</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
