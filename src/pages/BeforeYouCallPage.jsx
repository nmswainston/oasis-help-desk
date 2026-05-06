import { Link } from 'react-router-dom'

const CHECKLIST = [
  'Restart your Control4 system (controller and network gear in the usual power sequence).',
  'Check power to the TV, sources, and rack equipment—confirm outlets and standby lights.',
  'Replace remote batteries with a fresh set.',
  'Confirm the correct room is selected on the remote or in the app before trying again.',
]

function BeforeYouCallPage() {
  return (
    <div className="space-y-8">
      <Link
        to="/"
        className="inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        Back to help center
      </Link>

      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Before You Call Support
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Quick checks that resolve many issues and help us help you faster if you still need a
          visit or call.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Try these first</h2>
        <ul className="list-disc space-y-3 pl-5 text-slate-700">
          {CHECKLIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default BeforeYouCallPage
