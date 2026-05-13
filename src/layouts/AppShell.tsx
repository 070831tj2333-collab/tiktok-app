import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { BarChart3, LogOut } from 'lucide-react'
import { clearDemoAuth } from '../lib/demoAuth'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-slate-800 text-white'
      : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100',
  ].join(' ')

export function AppShell() {
  const navigate = useNavigate()

  const onLogout = () => {
    clearDemoAuth()
    navigate('/', { replace: true })
  }

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
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="flex items-center gap-1">
              <NavLink to="/dashboard" className={navClass}>
                Dashboard
              </NavLink>
              <NavLink to="/publish" className={navClass}>
                Publish
              </NavLink>
            </nav>
            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-300 sm:text-sm"
            >
              <LogOut className="size-4" aria-hidden />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  )
}
