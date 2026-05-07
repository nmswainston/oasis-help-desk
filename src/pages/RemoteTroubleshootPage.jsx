import { useState } from 'react'
import { Link } from 'react-router-dom'

const REMOTES = [
  {
    id: 'sr260',
    name: 'SR260',
    image: '/remotes/sr260.jpg',
    hint: 'Rectangular · number pad · physical buttons only',
    quickFix: [
      'The SR260 runs entirely on AA batteries — a dead or weak set is the most common cause of issues.',
      'Remove both batteries, wait 10 seconds, and reinsert a fresh pair.',
      'Point the remote at the room and re-select your activity.',
    ],
    steps: [
      'Flip the SR260 over and slide open the battery compartment on the back.',
      'Remove both AA batteries completely.',
      'Wait 10 seconds before reinserting — this clears the remote\'s memory and forces a fresh connection.',
      'Insert two fresh premium AA batteries. Avoid rechargeable batteries as they can cause inconsistent behavior.',
      'Press the List button and select your room from the on-screen menu.',
      'Re-select your activity such as Watch TV or Listen to Music and allow 10 seconds for devices to respond.',
    ],
    fallback: [
      'If the remote still does not respond after fresh batteries, try controlling the room from the Control4 app on your phone.',
      'Reboot your Control4 controller by power cycling the equipment rack.',
      'Call us at 480-907-7095 — the remote may need to be re-paired to your system.',
    ],
  },
  {
    id: 'neeo',
    name: 'Neeo',
    image: '/remotes/neeo.png',
    hint: 'Slim oval · small touchpad · minimal buttons',
    quickFix: [
      'The Neeo restarts with a simple hold-to-power-down, hold-to-power-up sequence.',
      'No menu or battery pull required — just hold the power button.',
      'The full restart takes about 45 seconds.',
    ],
    steps: [
      'Press and hold the Power button until the screen goes dark and the remote powers off completely.',
      'Wait 10 seconds.',
      'Press and hold the Power button again until the screen lights up and the remote powers back on.',
      'Wait for the home screen to fully load — this takes about 30 to 45 seconds.',
      'Select your room and re-select your activity.',
      'Allow 10 seconds for connected devices to respond.',
    ],
    fallback: [
      'If the Neeo will not power off, place it on its charging dock for 2 minutes then retry.',
      'Check that the charging contacts on the bottom are clean and making good contact with the dock.',
      'If the remote powers on but shows a connection error, reboot your Control4 controller and try again.',
      'Call us at 480-907-7095 if issues continue after a restart.',
    ],
  },
  {
    id: 'halo',
    name: 'Halo & Halo Touch',
    image: '/remotes/halo.png',
    hint: 'Round · circular buttons · standard or touchscreen',
    quickFix: [
      'The Halo has a built-in restart option — no battery pull needed.',
      'Access the power menu by holding the Off button and select Restart.',
      'This works the same on both the standard Halo and Halo Touch.',
    ],
    steps: [
      'Press and hold the Off button on the Halo remote until a menu appears on screen.',
      'You will see three options: Power Down, Restart, and Cancel.',
      'Select Restart.',
      'The remote will power off and reboot automatically — this takes about 30 seconds.',
      'Once the home screen appears, press the List button to select your room.',
      'Re-select your activity and allow 10 seconds for devices to respond.',
    ],
    fallback: [
      'If the remote is completely frozen and the menu will not appear, hold the Off button for 15 seconds until the screen goes dark, then hold Power to turn it back on.',
      'If the Halo Touch screen is unresponsive to touch, use the physical buttons to navigate the restart menu.',
      'If issues persist after a restart, open the Control4 app on your phone to confirm your system is online.',
      'Call us at 480-907-7095 if the remote will not restart or keeps losing connection.',
    ],
  },
  {
    id: 'app',
    name: 'Control4 App',
    image: null,
    hint: 'iPhone or Android · blue C4 app icon',
    quickFix: [
      'The app loses connection most often when your phone switches between WiFi and cellular.',
      'Close the app completely and confirm your phone is on home WiFi — not cellular data.',
      'Reopen the app and wait up to 30 seconds for it to reconnect.',
    ],
    steps: [
      'Close the Control4 app completely by swiping it away from your recent apps.',
      'Confirm your phone is connected to your home WiFi network, not cellular data.',
      'Reopen the Control4 app and wait up to 30 seconds for it to reconnect.',
      'If rooms show as offline, tap the room name anyway — status can lag behind the actual connection.',
      'If the app shows "Director not found," your Control4 controller may need a reboot. Power cycle the controller in your equipment rack.',
      'After the controller reboots (allow 2 minutes), reopen the app and try again.',
    ],
    fallback: [
      'Delete and reinstall the Control4 app if connection issues persist across multiple days.',
      'If you recently changed your WiFi password, the controller needs to be updated — call us, do not attempt this yourself.',
      'Call us at 480-907-7095 if the app has not connected in more than 24 hours.',
    ],
  },
]

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 120" fill="none" className="h-full w-full">
      <rect x="10" y="5" width="60" height="110" rx="10" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <rect x="20" y="18" width="40" height="70" rx="4" fill="currentColor" opacity="0.12" />
      <circle cx="40" cy="102" r="5" fill="currentColor" opacity="0.25" />
      <rect x="28" y="8" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

function StepList({ items, numbered }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          {numbered ? (
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
              style={{ background: 'var(--gold-bg)', color: 'var(--gold)', border: '1px solid var(--gold-border)' }}
            >
              {i + 1}
            </span>
          ) : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--gold)' }} />
          )}
          <span style={{ color: 'var(--text-dim)' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Section({ title, children }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
    >
      <h3 className="mb-3 text-sm font-semibold" style={{ color: 'var(--text)' }}>{title}</h3>
      {children}
    </div>
  )
}

export default function RemoteTroubleshootPage() {
  const [selected, setSelected] = useState(null)

  const remote = REMOTES.find((r) => r.id === selected)

  return (
    <div className="mx-auto max-w-2xl space-y-5">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
        <Link to="/" className="transition hover:opacity-70" style={{ color: 'var(--gold)' }}>
          Help Center
        </Link>
        <span>/</span>
        <Link to="/?category=Remotes" className="transition hover:opacity-70" style={{ color: 'var(--gold)' }}>
          Remotes
        </Link>
        <span>/</span>
        <span>Remote Not Responding</span>
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
          Remotes
        </span>
        <h1 className="text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--text)' }}>
          Remote Not Responding
        </h1>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Tap the remote that looks like yours to see the fix steps.
        </p>
      </div>

      {/* Remote selector */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {REMOTES.map((r) => {
          const active = selected === r.id
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelected(active ? null : r.id)}
              className="group flex flex-col items-center rounded-xl p-3 text-center transition-all"
              style={{
                background: active ? 'var(--gold-bg)' : 'var(--bg-surface)',
                border: `2px solid ${active ? 'var(--gold)' : 'var(--border)'}`,
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.borderColor = 'var(--gold-border)'
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Remote image */}
              <div className="relative mb-3 flex h-28 w-full items-center justify-center">
                {active && (
                  <div
                    className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full"
                    style={{ background: 'var(--gold)' }}
                  >
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                {r.image ? (
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-full w-full object-contain"
                    style={{ filter: active ? 'none' : 'opacity(0.85)' }}
                  />
                ) : (
                  <div className="h-20 w-12" style={{ color: 'var(--text-muted)' }}>
                    <PhoneIcon />
                  </div>
                )}
              </div>

              {/* Label */}
              <p
                className="text-sm font-semibold leading-tight"
                style={{ color: active ? 'var(--gold)' : 'var(--text)' }}
              >
                {r.name}
              </p>
              <p
                className="mt-1 text-[10px] leading-snug"
                style={{ color: 'var(--text-muted)' }}
              >
                {r.hint}
              </p>
            </button>
          )
        })}
      </div>

      {/* Steps — appears when a remote is selected */}
      {remote && (
        <div className="space-y-3">
          <div
            className="rounded-xl px-5 py-3"
            style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold-border)' }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
              Showing steps for: {remote.name}
            </p>
          </div>

          <Section title="⚡ Quick Fix — Try These First">
            <StepList items={remote.quickFix} numbered />
          </Section>

          <Section title="Step-by-Step Instructions">
            <StepList items={remote.steps} numbered />
          </Section>

          <Section title="If That Didn't Work">
            <StepList items={remote.fallback} />
          </Section>

          {/* CTA */}
          <div
            className="rounded-xl p-5"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          >
            <h3 className="mb-1 text-sm font-semibold" style={{ color: 'var(--text)' }}>
              Still not working?
            </h3>
            <p className="mb-4 text-xs" style={{ color: 'var(--text-dim)' }}>
              Our team is available and ready to help.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+14809077095"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-85"
                style={{ background: 'var(--gold)', color: '#fff' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                Call 480-907-7095
              </a>
              <a
                href="https://www.oasissmarthomes.com/contact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-all"
                style={{ border: '1px solid var(--border)', color: 'var(--text-dim)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
