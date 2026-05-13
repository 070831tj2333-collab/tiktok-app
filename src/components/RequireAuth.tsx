import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isDemoAuthed } from '../lib/demoAuth'

export function RequireAuth() {
  const location = useLocation()

  if (!isDemoAuthed()) {
    return (
      <Navigate
        to="/connect/tiktok"
        replace
        state={{ from: location }}
      />
    )
  }

  return <Outlet />
}
