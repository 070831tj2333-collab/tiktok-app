import { Eye, Heart, MousePointerClick, ShoppingBag } from 'lucide-react'
import {
  sampleProfile,
  sampleSummary,
  sampleVideos,
} from '../data/sample'

function formatInt(n: number) {
  return n.toLocaleString('zh-CN')
}

function formatPct(n: number) {
  return `${n.toFixed(2)}%`
}

export function Dashboard() {
  const metrics = [
    {
      label: '总浏览量',
      value: formatInt(sampleSummary.views),
      icon: Eye,
      hint: '近 30 天演示数据',
    },
    {
      label: '总点赞',
      value: formatInt(sampleSummary.likes),
      icon: Heart,
      hint: '含重复互动',
    },
    {
      label: '平均 CTR',
      value: formatPct(sampleSummary.ctr),
      icon: MousePointerClick,
      hint: '点击 / 曝光',
    },
    {
      label: '带货销量',
      value: formatInt(sampleSummary.sales),
      icon: ShoppingBag,
      hint: '演示订单数',
    },
  ] as const

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          以下为 sample 数据，用于展示卡片与表格布局。
        </p>
      </div>

      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm shadow-black/30">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img
            src={sampleProfile.avatarUrl}
            alt=""
            width={80}
            height={80}
            className="size-20 shrink-0 rounded-2xl border border-zinc-700 object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-white">
              {sampleProfile.displayName}
            </p>
            <p className="text-sm text-slate-400">{sampleProfile.handle}</p>
            <p className="mt-1 text-sm tabular-nums text-zinc-300">
              粉丝 {formatInt(sampleProfile.followers)}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
              {sampleProfile.bio}
            </p>
            <p className="mt-3 text-xs text-zinc-600">
              地区：{sampleProfile.region} · ID：{sampleProfile.id}
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
          <h2 className="text-base font-semibold text-white">视频表现</h2>
          <p className="mt-0.5 text-xs text-zinc-500">缩略图来自 picsum.photos</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-zinc-950/80 text-xs font-medium uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-4 py-3 sm:px-6">视频</th>
                <th className="px-4 py-3">浏览</th>
                <th className="px-4 py-3">点赞</th>
                <th className="px-4 py-3">CTR</th>
                <th className="px-4 py-3 sm:pr-6">销量</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {sampleVideos.map((v) => (
                <tr
                  key={v.id}
                  className="bg-zinc-900/10 hover:bg-zinc-900/40"
                >
                  <td className="px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={v.thumbnailUrl}
                        alt=""
                        width={48}
                        height={60}
                        className="size-12 shrink-0 rounded-md border border-zinc-700 object-cover sm:size-14"
                      />
                      <span className="font-medium text-zinc-200">{v.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300">
                    {formatInt(v.views)}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300">
                    {formatInt(v.likes)}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300">
                    {formatPct(v.ctr)}
                  </td>
                  <td className="px-4 py-3 tabular-nums text-zinc-300 sm:pr-6">
                    {formatInt(v.sales)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
