export type CreatorProfile = {
  id: string
  handle: string
  displayName: string
  avatarUrl: string
  bio: string
  region: string
  followers: number
}

export type PerformanceSummary = {
  views: number
  likes: number
  ctr: number
  sales: number
}

export type VideoPerformance = {
  id: string
  title: string
  thumbnailUrl: string
  views: number
  likes: number
  ctr: number
  sales: number
}

export const sampleProfile: CreatorProfile = {
  id: 'creator-demo-01',
  handle: '@shop_demo',
  displayName: 'Demo 小店',
  avatarUrl: 'https://picsum.photos/seed/bsa-avatar/96/96',
  bio: '演示账号 · 专注爆款分析与带货复盘',
  region: 'CN',
  followers: 128_400,
}

export const sampleSummary: PerformanceSummary = {
  views: 2_847_300,
  likes: 184_920,
  ctr: 4.28,
  sales: 12_640,
}

const thumb = (seed: string) =>
  `https://picsum.photos/seed/${seed}/128/160`

export const sampleVideos: VideoPerformance[] = [
  {
    id: 'v1',
    title: '春季上新 · 3 秒抓住注意力',
    thumbnailUrl: thumb('bsa-v1'),
    views: 412_000,
    likes: 28_400,
    ctr: 5.1,
    sales: 1_840,
  },
  {
    id: 'v2',
    title: '对比测评：为什么这款更好卖',
    thumbnailUrl: thumb('bsa-v2'),
    views: 356_200,
    likes: 19_200,
    ctr: 3.9,
    sales: 1_260,
  },
  {
    id: 'v3',
    title: '直播间话术模板（可复制）',
    thumbnailUrl: thumb('bsa-v3'),
    views: 298_800,
    likes: 15_600,
    ctr: 4.4,
    sales: 980,
  },
  {
    id: 'v4',
    title: '一周涨粉复盘 + 数据截图',
    thumbnailUrl: thumb('bsa-v4'),
    views: 521_000,
    likes: 41_000,
    ctr: 6.2,
    sales: 2_410,
  },
  {
    id: 'v5',
    title: '低价引流款怎么不伤利润',
    thumbnailUrl: thumb('bsa-v5'),
    views: 187_400,
    likes: 9_800,
    ctr: 2.8,
    sales: 620,
  },
  {
    id: 'v6',
    title: '爆款脚本结构拆解',
    thumbnailUrl: thumb('bsa-v6'),
    views: 640_500,
    likes: 52_300,
    ctr: 5.7,
    sales: 3_020,
  },
  {
    id: 'v7',
    title: '评论区置顶链接怎么写',
    thumbnailUrl: thumb('bsa-v7'),
    views: 134_200,
    likes: 7_100,
    ctr: 3.1,
    sales: 410,
  },
  {
    id: 'v8',
    title: '投放前必看的 5 个指标',
    thumbnailUrl: thumb('bsa-v8'),
    views: 296_200,
    likes: 11_520,
    ctr: 3.6,
    sales: 1_100,
  },
]
