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
            to="/dashboard"
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

      <section className="mx-auto max-w-5xl space-y-4 px-4 py-16 sm:px-6">
        <details className="group rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3 open:pb-4 sm:px-5 sm:py-4">
          <summary className="cursor-pointer list-none text-xl font-semibold text-white outline-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex w-full items-center justify-between gap-2">
              <span>Terms of Service</span>
              <span className="text-sm font-normal text-zinc-500 transition-transform group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            <p>
              By using BestSellerAnalyzer, you agree to use the service
              responsibly and comply with all applicable laws and platform
              policies.
            </p>
            <p>
              BestSellerAnalyzer provides ecommerce analytics and automation
              tools for TikTok-related workflows.
            </p>
            <p>
              Users are responsible for their own content, data usage, and
              compliance with TikTok policies.
            </p>
            <p>The service may be updated or modified at any time.</p>
            <p>
              Contact:{' '}
              <a
                href="mailto:070831Tj2333@gmail.com"
                className="text-slate-300 underline decoration-zinc-600 underline-offset-2 hover:text-white"
              >
                070831Tj2333@gmail.com
              </a>
            </p>
          </div>
        </details>
        <details className="group rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3 open:pb-4 sm:px-5 sm:py-4">
          <summary className="cursor-pointer list-none text-xl font-semibold text-white outline-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex w-full items-center justify-between gap-2">
              <span>Privacy Policy</span>
              <span className="text-sm font-normal text-zinc-500 transition-transform group-open:rotate-180">
                ▾
              </span>
            </span>
          </summary>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            <p>
              BestSellerAnalyzer may collect basic usage data necessary for
              workflow automation and analytics.
            </p>
            <p>We do not sell personal information.</p>
            <p>User data is only used for:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>analytics</li>
              <li>automation</li>
              <li>workflow processing</li>
            </ul>
            <p>Users may request data deletion at any time.</p>
            <p>
              Contact:{' '}
              <a
                href="mailto:070831tj2333@gmail.com"
                className="text-slate-300 underline decoration-zinc-600 underline-offset-2 hover:text-white"
              >
                070831tj2333@gmail.com
              </a>
            </p>
          </div>
        </details>
      </section>

      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-600">
        BestSellerAnalyzer · demo environment
      </footer>
    </div>
  )
}
