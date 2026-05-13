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
    title: '爆款雷达',
    description: '按类目与时段聚合表现，快速定位高转化内容。',
    icon: Sparkles,
  },
  {
    title: '指标面板',
    description: '浏览量、互动、CTR 与带货销量一屏对比，支持导出。',
    icon: BarChart3,
  },
  {
    title: '趋势对比',
    description: '对比多条视频曲线，找出节奏与钩子差异。',
    icon: LineChart,
  },
  {
    title: '发布工作流',
    description: '从素材上传到文案草稿，减少来回切换。',
    icon: Upload,
  },
  {
    title: '低延迟体验',
    description: '本地演示数据，首屏即可交互，无需等待接口。',
    icon: Zap,
  },
  {
    title: '演示环境',
    description: '所有数据均为虚构示例，不连接真实 TikTok 账号。',
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
          演示产品 · 非官方 TikTok 工具
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
            去发布页
          </Link>
        </div>
      </section>

      <section className="border-y border-zinc-800/60 bg-zinc-950/50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-white">功能亮点</h2>
          <p className="mt-2 text-sm text-zinc-500">
            以下为演示文案，用于展示布局与信息层级。
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
        BestSellerAnalyzer · 演示环境
      </footer>
    </div>
  )
}
