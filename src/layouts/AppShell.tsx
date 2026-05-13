import { Link, NavLink, Outlet } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-slate-800 text-white'
      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100',
  ].join(' ')

export function AppShell() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-950">
      <header className="border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-100 transition-opacity hover:opacity-90"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-100">
              <BarChart3 className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              BestSellerAnalyzer
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
            <NavLink to="/publish" className={navClass}>
              Publish
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
