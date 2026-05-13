import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, Lock, Music2, Shield } from 'lucide-react'
import {
  SANDBOX_PASSWORD,
  SANDBOX_USERNAME,
  isDemoAuthed,
  setDemoAuthed,
  trySandboxLogin,
} from '../lib/demoAuth'

const scopes = [
  'Read public profile and video stats (demo)',
  'Post on your behalf (not connected — UI only)',
]

export function TikTokConnectSandbox() {
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const getRedirectTarget = () => {
    const from = (location.state as { from?: { pathname: string; search?: string; hash?: string } } | null)?.from
    if (from?.pathname) {
      return `${from.pathname}${from.search ?? ''}${from.hash ?? ''}`
    }
    return '/dashboard'
  }

  if (isDemoAuthed()) {
    return <Navigate to={getRedirectTarget()} replace />
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    if (trySandboxLogin(username, password)) {
      setDemoAuthed()
      navigate(getRedirectTarget(), { replace: true })
    } else {
      setError('Invalid username or password. Use the sandbox account shown below.')
    }
  }

  const fillSandbox = () => {
    setUsername(SANDBOX_USERNAME)
    setPassword(SANDBOX_PASSWORD)
    setError(null)
  }

  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-200 via-white to-zinc-100 text-zinc-900">
      <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to BestSellerAnalyzer
        </Link>

        <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl shadow-zinc-900/10 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-pink-500 text-white shadow-md">
              <Music2 className="size-7" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Simulated authorization
              </p>
              <h1 className="mt-1 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
                Connect TikTok
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                This screen imitates an OAuth-style login for the demo. It is
                not affiliated with TikTok and does not call TikTok APIs.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            <p className="font-semibold">Sandbox account</p>
            <p className="mt-1 font-mono text-xs sm:text-sm">
              Username: <span className="select-all">{SANDBOX_USERNAME}</span>
            </p>
            <p className="mt-0.5 font-mono text-xs sm:text-sm">
              Password: <span className="select-all">{SANDBOX_PASSWORD}</span>
            </p>
            <button
              type="button"
              onClick={fillSandbox}
              className="mt-3 text-xs font-medium text-amber-900 underline decoration-amber-400 underline-offset-2 hover:text-amber-950"
            >
              Autofill credentials
            </button>
          </div>

          <ul className="mt-6 space-y-2 border-y border-zinc-100 py-5">
            {scopes.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-zinc-700">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                {s}
              </li>
            ))}
          </ul>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="oauth-user"
                className="block text-sm font-medium text-zinc-800"
              >
                Username
              </label>
              <input
                id="oauth-user"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/30 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2"
                placeholder="sandbox_creator"
              />
            </div>
            <div>
              <label
                htmlFor="oauth-pass"
                className="block text-sm font-medium text-zinc-800"
              >
                Password
              </label>
              <input
                id="oauth-pass"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-zinc-400/30 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2"
                placeholder="••••••••"
              />
            </div>

            {error ? (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              <Lock className="size-4" aria-hidden />
              Authorize & continue
            </button>
          </form>

          <p className="mt-6 flex items-start gap-2 text-xs text-zinc-500">
            <Shield className="mt-0.5 size-4 shrink-0" aria-hidden />
            Session is stored only in this browser tab (sessionStorage). Closing
            the tab ends the demo session.
          </p>
        </div>
      </div>
    </div>
  )
}
