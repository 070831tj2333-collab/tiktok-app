import { Link } from 'react-router-dom'
import {
  BarChart3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Upload,
  Zap,
} from 'lucide-react'

const features = [
  {
    title: 'Bestseller radar',
    description:
      'Roll up performance by category and time window to spot high-converting content fast.',
    icon: Sparkles,
  },
  {
    title: 'Metrics hub',
    description:
      'Views, engagement, CTR, and sales in one view—demo export affordances in the layout.',
    icon: BarChart3,
  },
  {
    title: 'Trend compare',
    description:
      'Compare multiple video curves to see pacing and hook differences side by side.',
    icon: LineChart,
  },
  {
    title: 'Publish workflow',
    description:
      'From upload to caption drafts—fewer tab hops in a single surface.',
    icon: Upload,
  },
  {
    title: 'Snappy UX',
    description:
      'Sample data loads locally so the first screen is interactive with no API wait.',
    icon: Zap,
  },
  {
    title: 'Demo mode',
    description:
      'All numbers are fictional—no connection to a real TikTok account.',
    icon: ShieldCheck,
  },
] as const

export function Landing() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-slate-800">
              <BarChart3 className="size-4 text-slate-100" aria-hidden />
            </span>
            BestSellerAnalyzer
          </div>
          <Link
            to="/dashboard"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <p className="mb-4 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-400">
          Demo product · not affiliated with TikTok
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          BestSellerAnalyzer
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/connect/tiktok"
            className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            Continue with TikTok
          </Link>
          <Link
            to="/publish"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-900"
          >
            Open Publish
          </Link>
        </div>
      </section>

      <section className="border-y border-zinc-800/60 bg-zinc-950/50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-white">Features</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Placeholder copy to showcase layout and hierarchy.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 shadow-sm shadow-black/20"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-600">
        <p>BestSellerAnalyzer · demo environment</p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <Link
            to="/terms"
            className="text-zinc-500 underline decoration-zinc-700 underline-offset-2 transition hover:text-zinc-300"
          >
            Terms of Service
          </Link>
          <span className="text-zinc-700" aria-hidden>
            ·
          </span>
          <Link
            to="/privacy"
            className="text-zinc-500 underline decoration-zinc-700 underline-offset-2 transition hover:text-zinc-300"
          >
            Privacy Policy
          </Link>
        </p>
      </footer>

    </div>
  )
}
