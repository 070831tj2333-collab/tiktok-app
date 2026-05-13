import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth'
import { AppShell } from './layouts/AppShell'
import { Dashboard } from './pages/Dashboard'
import { Landing } from './pages/Landing'
import { Publish } from './pages/Publish'
import { TikTokConnectSandbox } from './pages/TikTokConnectSandbox'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/connect/tiktok" element={<TikTokConnectSandbox />} />
        <Route element={<RequireAuth />}>
          <Route element={<AppShell />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/publish" element={<Publish />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
