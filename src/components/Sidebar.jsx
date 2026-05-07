import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { categories } from '../data/articles'

const CATEGORY_ICONS = {
  'TV & Video':        '📺',
  'Audio & Music':     '🎵',
  'Remotes':           '🎮',
  'WiFi & Network':    '📶',
  'Cameras':           '📷',
  'Lighting & Shades': '💡',
}

function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all"
      style={{
        background: active ? 'var(--gold-bg)' : 'transparent',
        color: active ? 'var(--gold)' : 'var(--text-dim)',
        borderLeft: active ? '2px solid var(--gold)' : '2px solid transparent',
      }}
    >
      {children}
    </Link>
  )
}

export default function Sidebar({ onNavClick }) {
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()
  const activeCategory = searchParams.get('category') || ''
  const isHome = pathname === '/'

  return (
    <nav
      className="flex flex-col gap-1 py-4"
      style={{ fontFamily: 'var(--font-ui)' }}
      aria-label="Help center navigation"
    >
      {/* All Articles */}
      <div className="px-3 pb-1">
        <NavLink
          to="/"
          active={isHome && !activeCategory}
          onClick={onNavClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          All Articles
        </NavLink>
      </div>

      {/* Divider + label */}
      <div className="px-3 pb-1 pt-3">
        <p
          className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-muted)' }}
        >
          Categories
        </p>
        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/?category=${encodeURIComponent(cat)}`}
            active={isHome && activeCategory === cat}
            onClick={onNavClick}
          >
            <span className="text-base leading-none">{CATEGORY_ICONS[cat]}</span>
            {cat}
          </NavLink>
        ))}
      </div>

      {/* Divider + Support */}
      <div className="px-3 pb-1 pt-3">
        <p
          className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-muted)' }}
        >
          Support
        </p>
        <NavLink
          to="/before-you-call"
          active={pathname === '/before-you-call'}
          onClick={onNavClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3a9 9 0 100 18A9 9 0 0012 3z" />
          </svg>
          Before You Call
        </NavLink>

        <a
          href="tel:+14809077095"
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all"
          style={{ color: 'var(--text-dim)' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)' }}
          onClick={onNavClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          480-907-7095
        </a>
      </div>

      {/* Client Care concierge card */}
      <div className="mt-auto px-3 pb-4 pt-4">
        <a
          href="https://www.oasissmarthomes.com/client-care"
          target="_blank"
          rel="noreferrer"
          onClick={onNavClick}
          className="block rounded-xl p-3.5 transition-all"
          style={{
            background: 'var(--gold-bg)',
            border: '1px solid var(--gold-border)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gold-border)' }}
        >
          <div className="mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--gold)' }}>
              Client Care Plans
            </p>
          </div>
          <p className="mb-2.5 text-xs leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            Remote response, on-site visits, and proactive monitoring — plans for every lifestyle.
          </p>
          <div className="space-y-1">
            {['Remote Response', 'Standard Service', 'Premium Concierge'].map((plan) => (
              <div key={plan} className="flex items-center gap-1.5">
                <div className="h-1 w-1 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{plan}</span>
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-[11px] font-semibold" style={{ color: 'var(--gold)' }}>
            View plans →
          </p>
        </a>
      </div>
    </nav>
  )
}
