import { Eye, Heart, MousePointerClick, ShoppingBag } from 'lucide-react'
import { PublishingPanel } from '../components/publishing/PublishingPanel'
import {
  sampleProfile,
  sampleSummary,
  sampleVideos,
} from '../data/sample'

function formatInt(n: number) {
  return n.toLocaleString('en-US')
}

function formatPct(n: number) {
  return `${n.toFixed(2)}%`
}

export function Dashboard() {
  const metrics = [
    {
      label: 'Total views',
      value: formatInt(sampleSummary.views),
      icon: Eye,
      hint: 'Last 30 days (demo)',
    },
    {
      label: 'Total likes',
      value: formatInt(sampleSummary.likes),
      icon: Heart,
      hint: 'Includes repeat engagement',
    },
    {
      label: 'Avg. CTR',
      value: formatPct(sampleSummary.ctr),
      icon: MousePointerClick,
      hint: 'Clicks / impressions',
    },
    {
      label: 'Units sold',
      value: formatInt(sampleSummary.sales),
      icon: ShoppingBag,
      hint: 'Demo order count',
    },
  ] as const

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Sample data for cards, recent videos, and publishing panel.
        </p>
      </div>

      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm shadow-black/30">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          TikTok Profile
        </h2>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <img
            src={sampleProfile.avatarUrl}
            alt=""
            width={96}
            height={96}
            className="size-24 shrink-0 rounded-2xl border border-zinc-700 object-cover"
          />
          <div className="min-w-0 text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Username
            </p>
            <p className="mt-1 text-xl font-semibold tabular-nums text-white">
              {sampleProfile.handle}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(({ label, value, icon: Icon, hint }) => (
          <div
            key={label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {label}
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg bg-slate-800/80 text-slate-200">
                <Icon className="size-4" aria-hidden />
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold tabular-nums text-white">
              {value}
            </p>
            <p className="mt-1 text-xs text-zinc-600">{hint}</p>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20">
        <div className="border-b border-zinc-800 px-4 py-4 sm:px-6">
          <h2 className="text-base font-semibold text-white">Recent Videos</h2>
          <p className="mt-0.5 text-xs text-zinc-500">
            Thumbnails from picsum.photos · demo descriptions and sounds
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-zinc-950/80 text-xs font-medium uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-4 py-3 sm:px-6">Thumbnail</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Audio</th>
                <th className="px-4 py-3">Views</th>
                <th className="px-4 py-3 sm:pr-6">Likes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {sampleVideos.map((v) => (
                <tr
                  key={v.id}
                  className="bg-zinc-900/10 hover:bg-zinc-900/40"
                >
                  <td className="px-4 py-3 sm:px-6">
                    <img
                      src={v.thumbnailUrl}
                      alt=""
                      width={56}
                      height={70}
                      className="size-14 shrink-0 rounded-md border border-zinc-700 object-cover"
                    />
                  </td>
                  <td className="max-w-xs px-4 py-3 text-zinc-300">
                    <span className="block font-medium text-zinc-200">
                      {v.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
                      {v.description}
                    </span>
                  </td>
                  <td className="max-w-[10rem] px-4 py-3 text-xs leading-snug text-zinc-400 sm:max-w-[12rem] sm:text-sm">
                    {v.audioTrack}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300">
                    {formatInt(v.views)}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300 sm:pr-6">
                    {formatInt(v.likes)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
        <h2 className="text-base font-semibold text-white">Publishing Panel</h2>
        <p className="mt-1 text-xs text-zinc-500">
          Same demo upload flow as the Publish page — not connected to TikTok.
        </p>
        <div className="mt-6 max-w-xl">
          <PublishingPanel idPrefix="dash-publish" />
        </div>
      </section>
    </div>
  )
}
