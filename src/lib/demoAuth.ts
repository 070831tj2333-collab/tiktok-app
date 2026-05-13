/** Local demo session only — not real TikTok OAuth. */

const SESSION_KEY = 'bsa_demo_auth_v1'

/** Credentials shown on the simulated OAuth screen. */
export const SANDBOX_USERNAME = 'sandbox_creator'
export const SANDBOX_PASSWORD = 'demo2026'

export function isDemoAuthed(): boolean {
  if (typeof sessionStorage === 'undefined') return false
  return sessionStorage.getItem(SESSION_KEY) === '1'
}

export function setDemoAuthed(): void {
  sessionStorage.setItem(SESSION_KEY, '1')
}

export function clearDemoAuth(): void {
  sessionStorage.removeItem(SESSION_KEY)
}

export function trySandboxLogin(username: string, password: string): boolean {
  return (
    username.trim() === SANDBOX_USERNAME && password === SANDBOX_PASSWORD
  )
}
