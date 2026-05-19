import { Link } from 'react-router-dom'
import { ArrowLeft, BarChart3 } from 'lucide-react'

export function Privacy() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-100 transition-opacity hover:opacity-90"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
              <BarChart3 className="size-4" aria-hidden />
            </span>
            BestSellerAnalyzer
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Hosted via Termly · full policy below
        </p>
        <iframe
          title="Privacy Policy"
          src="/legal/privacy.html"
          className="mt-6 h-[min(80vh,1200px)] w-full rounded-xl border border-zinc-800 bg-white"
        />
      </main>
    </div>
  )
}
